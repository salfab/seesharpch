var xx=Object.defineProperty;var vx=(Ot,Nt,Cn)=>Nt in Ot?xx(Ot,Nt,{enumerable:!0,configurable:!0,writable:!0,value:Cn}):Ot[Nt]=Cn;var t0=(Ot,Nt,Cn)=>vx(Ot,typeof Nt!="symbol"?Nt+"":Nt,Cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ot=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyNames,i0=Object.prototype.hasOwnProperty,a0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),J=(e,t)=>()=>(e&&(t=e(e=0)),t),An=(e,t)=>{for(var n in t)Ot(e,n,{get:t[n],enumerable:!0})},o0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!i0.call(e,i)&&i!==n&&Ot(e,i,{get:()=>t[i],enumerable:!(r=Nt(t,i))||r.enumerable});return e},Xn=e=>o0(Ot({},"__esModule",{value:!0}),e),Zn,jt,Rn,ps,fs,ms=J(()=>{Zn=new Map,jt=[],Rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Zn.get(e);if(r===void 0)Zn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=jt.indexOf(e);i!==-1&&jt.splice(i,1);for(let a=0;a<jt.length;a++)if(Zn.get(jt[a]).priority<=n){jt.splice(a,0,e);return}jt.push(e)}return}throw new TypeError("not a valid backend")},ps=async e=>{let t=Zn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},fs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?jt:n,i,a=[],o=new Set;for(let u of r){let l=await ps(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),s0=J(()=>{ms()}),gs,u0=J(()=>{gs="1.27.0"}),gi,Xe,ys=J(()=>{u0(),gi="warning",Xe={wasm:{},webgl:{},webgpu:{},versions:{common:gs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);gi=e}},get logLevel(){return gi}},Object.defineProperty(Xe,"logLevel",{enumerable:!0})}),Ne,l0=J(()=>{ys(),Ne=Xe}),ws,_s,c0=J(()=>{ws=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,d=0,p=h,m=h*2,g=-1;o==="RGBA"?(d=0,p=h,m=h*2,g=h*3):o==="RGB"?(d=0,p=h,m=h*2):o==="RBG"&&(d=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let _=0;_<i;_++){let $=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+M+","+S+")",r.fillRect(_,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},_s=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,_=3,$=0,x=d,M=d*2,S=-1;s==="RGBA"?($=0,x=d,M=d*2,S=d*3):s==="RGB"?($=0,x=d,M=d*2):s==="RBG"&&($=0,M=d,x=d*2),r=n.createImageData(i,a);for(let T=0;T<a*i;m+=p,g+=p,y+=p,_+=p,T++)r.data[m]=(e.data[$++]-h[0])*l[0],r.data[g]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[_]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Mr,bs,$s,xs,vs,Ss,d0=J(()=>{wi(),Mr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,m=1,g=2,y=3,_=0,$=l,x=l*2,M=-1;s==="RGB"&&(d=3,p=0,m=1,g=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(_=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,_=l*2);for(let S=0;S<l;S++,p+=d,g+=d,m+=d,y+=d)h[_++]=(e[p]+o[0])/a[0],h[$++]=(e[m]+o[1])/a[1],h[x++]=(e[g]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new ot("float32",h,[1,4,n,r]):new ot("float32",h,[1,3,n,r])},bs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=m}else s.tensorFormat="RGBA",s.height=p,s.width=m;d.drawImage(e,0,0),o=d.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,d=t.resizedWidth):(h=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=d,t!==void 0){let p=u();p.width=d,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,d,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;return d.drawImage(e,0,0,m,p),o=d.getImageData(0,0,m,p).data,s.height=p,s.width=m,Mr(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,d)=>{let p=u(),m=l(p);if(!e||!m)return d();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Mr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Mr(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},$s=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new ot({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},xs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},vs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ss=(e,t,n)=>new ot({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),un,Qn,yi,Ms,h0=J(()=>{un=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),yi=!1,Ms=()=>{if(!yi){yi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(un.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(un.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(un.set("float16",n),Qn.set(n,"float16")):un.set("float16",Uint16Array)}}}),Ts,Is,p0=J(()=>{wi(),Ts=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Is=(e,t)=>{switch(e.location){case"cpu":return new ot(e.type,e.data,t);case"cpu-pinned":return new ot({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ot({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ot({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ot({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ot,wi=J(()=>{c0(),d0(),h0(),p0(),ot=class{constructor(e,t,n){Ms();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=un.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=un.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Ts(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return bs(e,t)}static fromTexture(e,t){return $s(e,t)}static fromGpuBuffer(e,t){return xs(e,t)}static fromMLTensor(e,t){return vs(e,t)}static fromPinnedBuffer(e,t,n){return Ss(e,t,n)}toDataURL(e){return ws(this,e)}toImageData(e){return _s(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Is(this,e)}}}),Le,Es=J(()=>{wi(),Le=ot}),Tr,_i,Mt,mt,ln,cn,ks=J(()=>{ys(),Tr=(e,t)=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeStamp(`${e}::ORT::${t}`)},_i=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Tr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Mt=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||_i("BEGIN",e)},mt=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||_i("END",e)},ln=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.time(`ORT::${e}`)},cn=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeEnd(`ORT::${e}`)}}),Cs,f0=J(()=>{ms(),Es(),ks(),Cs=class n0{constructor(t){this.handler=t}async run(t,n,r){Mt(),ln("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Le||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Le)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(h.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Le)&&(l=!0,o=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof Le?u[l]=h:u[l]=new Le(h.type,h.data,h.dims)}return cn("InferenceSession.run"),mt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Mt(),ln("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-d}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await fs(o),l=await s.createInferenceSessionHandler(a,u);return cn("InferenceSession.create"),mt(),new n0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),nt,m0=J(()=>{f0(),nt=Cs}),g0=J(()=>{}),y0=J(()=>{}),w0=J(()=>{}),_0=J(()=>{}),b0={};An(b0,{InferenceSession:()=>nt,TRACE:()=>Tr,TRACE_EVENT_BEGIN:()=>ln,TRACE_EVENT_END:()=>cn,TRACE_FUNC_BEGIN:()=>Mt,TRACE_FUNC_END:()=>mt,Tensor:()=>Le,env:()=>Ne,registerBackend:()=>Rn});var ct=J(()=>{s0(),l0(),m0(),Es(),g0(),y0(),ks(),w0(),_0()}),bi=J(()=>{}),As={};An(As,{default:()=>Rs});var $i,xi,Rs,$0=J(()=>{var e;pf(),dn(),Ei(),$i="ort-wasm-proxy-worker",xi=((e=globalThis.self)==null?void 0:e.name)===$i,xi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Ai(r.wasm).then(()=>{Ga(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Wa(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Vr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Va(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ha(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;Ka(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Xa([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Ya(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Rs=xi?null:t=>new Worker(t??st,{type:"module",name:$i})}),zs={};An(zs,{default:()=>Ns});async function Os(e={}){var Jg,e0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Jg=self.name)==null?void 0:Jg.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var b;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:f[0],errors:[]},I=await c(...f);if(t.Yc!==w)throw Error("Session mismatch");(b=t.dd)==null||b.flush();let A=w.errors;if(0<A.length){let B=await Promise.all(A);if(B=B.filter(j=>j),0<B.length)throw Error(B.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let b=t.dd;t.jsepRegisterBuffer=(w,I,A,B)=>b.registerBuffer(w,I,A,B),t.jsepGetBuffer=w=>b.getBuffer(w),t.jsepCreateDownloader=(w,I,A)=>b.createDownloader(w,I,A),t.jsepOnCreateSession=w=>{b.onCreateSession(w)},t.jsepOnReleaseSession=w=>{b.onReleaseSession(w)},t.jsepOnRunStart=w=>b.onRunStart(w),t.Id=(w,I)=>{b.upload(w,I)}}else if(c==="webnn"){let b=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>b.onRunStart(w),t.webnnOnRunEnd=b.onRunEnd.bind(b),t.webnnOnReleaseSession=w=>{b.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>b.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,A,B)=>b.registerMLTensor(w,I,A,B),t.webnnCreateMLContext=w=>b.createMLContext(w),t.webnnRegisterMLConstant=(w,I,A,B,j,te)=>b.registerMLConstant(w,I,A,B,j,t.Xc,te),t.webnnRegisterGraphInput=b.registerGraphInput.bind(b),t.webnnIsGraphInput=b.isGraphInput.bind(b),t.webnnRegisterGraphOutput=b.registerGraphOutput.bind(b),t.webnnIsGraphOutput=b.isGraphOutput.bind(b),t.webnnCreateTemporaryTensor=b.createTemporaryTensor.bind(b),t.webnnIsGraphInputOutputTypeSupported=b.isGraphInputOutputTypeSupported.bind(b)}};let o=()=>{let c=f=>(...b)=>{let w=Rt;return b=f(...b),Rt!=w?new Promise((I,A)=>{es={resolve:I,reject:A}}):b};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(c,f)=>{throw f},h=self.location.href,d="";if(n||r){try{d=new URL(".",h).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async c=>{if(E(c))return new Promise((b,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?b(I.response):w(I.status)},I.onerror=w,I.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,_,$,x=console.log.bind(console),M=console.error.bind(console),S=x,T=M,k=!1,E=c=>c.startsWith("file://");function v(){Ct.buffer!=N.buffer&&H()}if(i){let c=function(f){try{var b=f.data,w=b.Sc;if(w==="load"){let I=[];self.onmessage=A=>I.push(A),$=()=>{postMessage({Sc:"loaded"});for(let A of I)c(A);self.onmessage=c};for(let A of b.xd)t[A]&&!t[A].proxy||(t[A]=(...B)=>{postMessage({Sc:"callHandler",wd:A,args:B})},A=="print"&&(S=t[A]),A=="printErr"&&(T=t[A]));Ct=b.Od,H(),m=b.Pd,de(),fi()}else if(w==="run"){(function(I){var A=(v(),G)[I+52>>>2>>>0];I=(v(),G)[I+56>>>2>>>0],lg(A,A-I),_e(A)})(b.Rc),as(b.Rc,0,0,1,0,0),wr(),Zo(b.Rc),C||(rg(),C=!0);try{Cm(b.Md,b.bd)}catch(I){if(I!="unwind")throw I}}else b.target!=="setimmediate"&&(w==="checkMailbox"?C&&si():w&&(T(`worker: received unknown command ${w}`),T(b)))}catch(I){throw ig(),I}};var C=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var N,Y,U,V,R,G,z,P,X,O,Z,D=!1;function H(){var c=Ct.buffer;t.HEAP8=N=new Int8Array(c),U=new Int16Array(c),t.HEAPU8=Y=new Uint8Array(c),V=new Uint16Array(c),t.HEAP32=R=new Int32Array(c),t.HEAPU32=G=new Uint32Array(c),z=new Float32Array(c),P=new Float64Array(c),X=new BigInt64Array(c),O=new BigUint64Array(c)}function F(){D=!0,i?$():Ht.sb()}function W(c){throw T(c="Aborted("+c+")"),k=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),_==null||_(c),c}function ne(){return{a:{ma:P$,gb:B$,g:Tn,J:Ho,f:ee,o:ue,h:se,ha:ye,b:ze,T:he,Ha:Me,n:We,$:jn,Xa:Kn,Da:De,Fa:Ke,Ya:pt,Va:qt,Oa:ti,Ua:ni,ka:ri,Ea:ii,Ba:br,Wa:Am,Ca:Rm,bb:S2,ea:M2,wa:T2,ua:E2,da:C2,O:A2,H:R2,va:z2,_:L2,xa:F2,Ra:G2,za:q2,Ia:V2,sa:H2,fa:j2,Qa:Zo,_a:K2,R:Q2,r:r$,c:Yo,hb:i$,y:a$,M:o$,D:s$,l:u$,s:Lm,ib:l$,I:c$,S:d$,j:h$,u:p$,q:f$,k:m$,La:g$,Ma:y$,Na:w$,Ja:qm,Ka:Vm,ta:Hm,db:b$,ab:x$,v:v$,aa:S$,ga:M$,$a:$$,W:T$,Za:I$,Aa:E$,F:_$,U:k$,la:hi,ya:A$,fb:C$,eb:R$,Sa:Xm,Ta:Zm,Ga:ht,V:Qm,ja:Jm,Pa:eg,ia:tg,kb:_x,na:fx,lb:wx,oa:px,G:ix,e:F$,t:U$,w:D$,B:Z$,mb:cx,K:tx,x:q$,pa:dx,Y:mx,ba:lx,nb:ux,ob:sx,P:Q$,qa:ox,pb:ax,N:nx,Z:hx,d:L$,A:W$,m:G$,jb:bx,p:H$,z:j$,C:V$,E:K$,L:J$,qb:rx,Q:gx,ca:ex,X:yx,rb:X$,ra:Y$,i:O$,a:Ct,cb:et}}}async function de(){function c(w,I){var A=Ht=w.exports;w={};for(let[B,j]of Object.entries(A))typeof j=="function"?(A=Y2(j),w[B]=A):w[B]=j;return Ht=w,Ht=(function(){var B=Ht,j=re=>ge=>re(ge)>>>0,te=re=>()=>re()>>>0;return(B=Object.assign({},B)).tb=j(B.tb),B.Xb=te(B.Xb),B.Zb=j(B.Zb),B.lc=j(B.lc),B.mc=te(B.mc),B.qc=j(B.qc),B})(),nn.push(Ht._b),ng=(w=Ht).tb,rg=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,pi=w.Xb,zt=t._free=w.Yb,xr=t._malloc=w.Zb,as=w.ac,ig=w.bc,ag=w.cc,og=w.dc,os=w.ec,sg=w.fc,ug=w.gc,ve=w.hc,vr=w.ic,lg=w.jc,_e=w.kc,ss=w.lc,$e=w.mc,cg=w.nc,us=w.oc,dg=w.pc,hg=w.qc,pg=w.rc,ls=w.sc,fg=w.tc,mg=w.uc,gg=w.vc,yg=w.wc,wg=w.xc,_g=w.yc,bg=w.zc,$g=w.Ac,xg=w.Bc,vg=w.Cc,Sg=w.Dc,Mg=w.Ec,Tg=w.Fc,Ig=w.Gc,Eg=w.Hc,kg=w.Ic,Cg=w.Jc,Ag=w.Kc,Rg=w.Lc,zg=w.Mc,Og=w.Nc,Ng=w.Pc,Bg=w.Qc,Pg=w.$c,Dg=w.ad,Ug=w.fd,Lg=w.jd,Fg=w.kd,Gg=w.ld,Wg=w.md,qg=w.nd,Vg=w.od,Hg=w.pd,jg=w.qd,Kg=w.vd,Yg=w.Td,Xg=w.Ud,Zg=w.Vd,Qg=w.Wd,m=I,Ht}var f,b=ne();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(b,(I,A)=>{w(c(I,A))})}):i?c(new WebAssembly.Instance(m,ne()),m):(Z??(Z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(w){var I=Z;if(!p&&!E(I))try{var A=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,w)}catch(B){T(`wasm streaming compile failed: ${B}`),T("falling back to ArrayBuffer instantiation")}return(async function(B,j){try{var te=await(async function(re){if(!p)try{var ge=await s(re);return new Uint8Array(ge)}catch{}if(re==Z&&p)re=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";re=u(re)}return re})(B);return await WebAssembly.instantiate(te,j)}catch(re){T(`failed to asynchronously prepare wasm: ${re}`),W(re)}})(I,w)})(b),c(f.instance,f.module))}class ie{constructor(f){t0(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var be=c=>{c.terminate(),c.onmessage=()=>{}},Ae=[],Ve=0,Ge=null,He=c=>{lt.length==0&&(Vn(),rn(lt[0]));var f=lt.pop();if(!f)return 6;tn.push(f),at[c.Rc]=f,f.Rc=c.Rc;var b={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage(b,c.rd),0},ke=0,ce=(c,f,...b)=>{var w,I=16*b.length,A=$e(),B=ss(I),j=B>>>3;for(w of b)typeof w=="bigint"?((v(),X)[j++>>>0]=1n,(v(),X)[j++>>>0]=w):((v(),X)[j++>>>0]=0n,(v(),P)[j++>>>0]=w);return c=ag(c,0,I,B,f),_e(A),c};function et(c){if(i)return ce(0,1,c);if(g=c,!(0<ke)){for(var f of tn)be(f);for(f of lt)be(f);lt=[],tn=[],at={},k=!0}l(0,new ie(c))}function Sn(c){if(i)return ce(1,0,c);ht(c)}var ht=c=>{if(g=c,i)throw Sn(c),"unwind";et(c)},lt=[],tn=[],nn=[],at={},qn=c=>{var f=c.Rc;delete at[f],lt.push(c),tn.splice(tn.indexOf(c),1),c.Rc=0,og(f)};function wr(){nn.forEach(c=>c())}var rn=c=>new Promise(f=>{c.onmessage=I=>{var A=I.data;if(I=A.Sc,A.Zc&&A.Zc!=pi()){var B=at[A.Zc];B?B.postMessage(A,A.rd):T(`Internal error! Worker sent a message "${I}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?si():I==="spawnThread"?He(A):I==="cleanupThread"?oi(()=>{qn(at[A.Nd])}):I==="loaded"?(c.loaded=!0,f(c)):A.target==="setimmediate"?c.postMessage(A):I==="uncaughtException"?c.onerror(A.error):I==="callHandler"?t[A.wd](...A.args):I&&T(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw T(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var b,w=[];for(b of[])t.propertyIsEnumerable(b)&&w.push(b);c.postMessage({Sc:"load",xd:w,Od:Ct,Pd:m})});function Vn(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});lt.push(c)}var Ct,Cm=(c,f)=>{ke=0,c=ls(c,f),0<ke?g=c:os(c)},Hn=[],Mn=0;function Tn(c){var f=new L(c>>>=0);return(v(),N)[f.Tc+12>>>0]==0&&(In(f,!0),Mn--),_r(f,!1),Hn.push(f),hg(c)}var Wt=0,Ho=()=>{ve(0,0);var c=Hn.pop();cg(c.cd),Wt=0};function In(c,f){f=f?1:0,(v(),N)[c.Tc+12>>>0]=f}function _r(c,f){f=f?1:0,(v(),N)[c.Tc+13>>>0]=f}class L{constructor(f){this.cd=f,this.Tc=f-24}}var Q=c=>{var f=Wt;if(!f)return vr(0),0;var b=new L(f);(v(),G)[b.Tc+16>>>2>>>0]=f;var w=(v(),G)[b.Tc+4>>>2>>>0];if(!w)return vr(0),f;for(var I of c){if(I===0||I===w)break;if(dg(I,w,b.Tc+16))return vr(I),f}return vr(w),f};function ee(){return Q([])}function ue(c){return Q([c>>>0])}function se(c,f,b,w){return Q([c>>>0,f>>>0,b>>>0,w>>>0])}var ye=()=>{var c=Hn.pop();c||W("no exception to throw");var f=c.cd;throw(v(),N)[c.Tc+13>>>0]==0&&(Hn.push(c),_r(c,!0),In(c,!1),Mn++),us(f),Wt=f};function ze(c,f,b){var w=new L(c>>>=0);throw f>>>=0,b>>>=0,(v(),G)[w.Tc+16>>>2>>>0]=0,(v(),G)[w.Tc+4>>>2>>>0]=f,(v(),G)[w.Tc+8>>>2>>>0]=b,us(c),Mn++,Wt=c}var he=()=>Mn;function we(c,f,b,w){return i?ce(2,1,c,f,b,w):Me(c,f,b,w)}function Me(c,f,b,w){if(c>>>=0,f>>>=0,b>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?we(c,f,b,w):(c={Ld:b,Rc:c,bd:w,rd:I},i?(c.Sc="spawnThread",postMessage(c,I),0):He(c))}function We(c){throw Wt||(Wt=c>>>0),Wt}var Te=globalThis.TextDecoder&&new TextDecoder,je=(c,f,b,w)=>{if(b=f+b,w)return b;for(;c[f]&&!(f>=b);)++f;return f},Je=(c,f=0,b,w)=>{if(16<(b=je(c,f>>>=0,b,w))-f&&c.buffer&&Te)return Te.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,b):c.slice(f,b));for(w="";f<b;){var I=c[f++];if(128&I){var A=63&c[f++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|A);else{var B=63&c[f++];65536>(I=(240&I)==224?(15&I)<<12|A<<6|B:(7&I)<<18|A<<12|B<<6|63&c[f++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},xe=(c,f,b)=>(c>>>=0)?Je((v(),Y),c,f,b):"";function jn(c,f,b){return i?ce(3,1,c,f,b):0}function Kn(c,f){if(i)return ce(4,1,c,f)}function De(c,f){if(i)return ce(5,1,c,f)}function Ke(c,f,b){if(i)return ce(6,1,c,f,b)}function pt(c,f,b){return i?ce(7,1,c,f,b):0}function qt(c,f){if(i)return ce(8,1,c,f)}function ti(c,f,b){if(i)return ce(9,1,c,f,b)}function ni(c,f,b,w){if(i)return ce(10,1,c,f,b,w)}function ri(c,f,b,w){if(i)return ce(11,1,c,f,b,w)}function ii(c,f,b,w){if(i)return ce(12,1,c,f,b,w)}function br(c){if(i)return ce(13,1,c)}function Am(c,f){if(i)return ce(14,1,c,f)}function Rm(c,f,b){if(i)return ce(15,1,c,f,b)}var S2=()=>W(""),At=c=>{c>>>=0;for(var f="";;){var b=(v(),Y)[c++>>>0];if(!b)return f;f+=String.fromCharCode(b)}},jo={},Ko={},Yn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Vt(c,f,b={}){return(function(w,I,A={}){var B=I.name;if(!w)throw new Yn(`type "${B}" must have a positive integer typeid pointer`);if(Ko.hasOwnProperty(w)){if(A.yd)return;throw new Yn(`Cannot register type '${B}' twice`)}Ko[w]=I,jo.hasOwnProperty(w)&&(I=jo[w],delete jo[w],I.forEach(j=>j()))})(c,f,b)}var zm=(c,f,b)=>{switch(f){case 1:return b?w=>(v(),N)[w>>>0]:w=>(v(),Y)[w>>>0];case 2:return b?w=>(v(),U)[w>>>1>>>0]:w=>(v(),V)[w>>>1>>>0];case 4:return b?w=>(v(),R)[w>>>2>>>0]:w=>(v(),G)[w>>>2>>>0];case 8:return b?w=>(v(),X)[w>>>3>>>0]:w=>(v(),O)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function M2(c,f,b,w,I){c>>>=0,b>>>=0,f=At(f>>>0);let A=B=>B;if(w=w===0n){let B=8*b;A=j=>BigInt.asUintN(B,j),I=A(I)}Vt(c,{name:f,Oc:A,Vc:(B,j)=>(typeof j=="number"&&(j=BigInt(j)),j),Uc:zm(f,b,!w),Wc:null})}function T2(c,f,b,w){Vt(c>>>=0,{name:f=At(f>>>0),Oc:function(I){return!!I},Vc:function(I,A){return A?b:w},Uc:function(I){return this.Oc((v(),Y)[I>>>0])},Wc:null})}var Om=[],En=[0,1,,1,null,1,!0,1,!1,1];function Yo(c){9<(c>>>=0)&&--En[c+1]===0&&(En[c]=void 0,Om.push(c))}var ft=c=>{if(!c)throw new Yn(`Cannot use deleted val. handle = ${c}`);return En[c]},St=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Om.pop()||En.length;return En[f]=c,En[f+1]=1,f}};function Xo(c){return this.Oc((v(),G)[c>>>2>>>0])}var I2={name:"emscripten::val",Oc:c=>{var f=ft(c);return Yo(c),f},Vc:(c,f)=>St(f),Uc:Xo,Wc:null};function E2(c){return Vt(c>>>0,I2)}var k2=(c,f)=>{switch(f){case 4:return function(b){return this.Oc((v(),z)[b>>>2>>>0])};case 8:return function(b){return this.Oc((v(),P)[b>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function C2(c,f,b){b>>>=0,Vt(c>>>=0,{name:f=At(f>>>0),Oc:w=>w,Vc:(w,I)=>I,Uc:k2(f,b),Wc:null})}function A2(c,f,b,w,I){c>>>=0,b>>>=0,f=At(f>>>0);let A=j=>j;if(w===0){var B=32-8*b;A=j=>j<<B>>>B,I=A(I)}Vt(c,{name:f,Oc:A,Vc:(j,te)=>te,Uc:zm(f,b,w!==0),Wc:null})}function R2(c,f,b){function w(A){var B=(v(),G)[A>>>2>>>0];return A=(v(),G)[A+4>>>2>>>0],new I((v(),N).buffer,A,B)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Vt(c>>>=0,{name:b=At(b>>>0),Oc:w,Uc:w},{yd:!0})}var an=(c,f,b)=>{var w=(v(),Y);if(f>>>=0,0<b){var I=f;b=f+b-1;for(var A=0;A<c.length;++A){var B=c.codePointAt(A);if(127>=B){if(f>=b)break;w[f++>>>0]=B}else if(2047>=B){if(f+1>=b)break;w[f++>>>0]=192|B>>6,w[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=b)break;w[f++>>>0]=224|B>>12,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B}else{if(f+3>=b)break;w[f++>>>0]=240|B>>18,w[f++>>>0]=128|B>>12&63,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B,A++}}w[f>>>0]=0,c=f-I}else c=0;return c},ai=c=>{for(var f=0,b=0;b<c.length;++b){var w=c.charCodeAt(b);127>=w?f++:2047>=w?f+=2:55296<=w&&57343>=w?(f+=4,++b):f+=3}return f};function z2(c,f){Vt(c>>>=0,{name:f=At(f>>>0),Oc(b){var w=(v(),G)[b>>>2>>>0];return w=xe(b+4,w,!0),zt(b),w},Vc(b,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Yn("Cannot pass non-string to std::string");var A=I?ai(w):w.length,B=xr(4+A+1),j=B+4;return(v(),G)[B>>>2>>>0]=A,I?an(w,j,A+1):(v(),Y).set(w,j>>>0),b!==null&&b.push(zt,B),B},Uc:Xo,Wc(b){zt(b)}})}var Nm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,O2=(c,f,b)=>{if(c>>>=1,16<(f=je((v(),V),c,f/2,b))-c&&Nm)return Nm.decode((v(),V).slice(c,f));for(b="";c<f;++c){var w=(v(),V)[c>>>0];b+=String.fromCharCode(w)}return b},N2=(c,f,b)=>{if(b??(b=2147483647),2>b)return 0;var w=f;b=(b-=2)<2*c.length?b/2:c.length;for(var I=0;I<b;++I){var A=c.charCodeAt(I);(v(),U)[f>>>1>>>0]=A,f+=2}return(v(),U)[f>>>1>>>0]=0,f-w},B2=c=>2*c.length,P2=(c,f,b)=>{var w="";c>>>=2;for(var I=0;!(I>=f/4);I++){var A=(v(),G)[c+I>>>0];if(!A&&!b)break;w+=String.fromCodePoint(A)}return w},D2=(c,f,b)=>{if(f>>>=0,b??(b=2147483647),4>b)return 0;var w=f;b=w+b-4;for(var I=0;I<c.length;++I){var A=c.codePointAt(I);if(65535<A&&I++,(v(),R)[f>>>2>>>0]=A,(f+=4)+4>b)break}return(v(),R)[f>>>2>>>0]=0,f-w},U2=c=>{for(var f=0,b=0;b<c.length;++b)65535<c.codePointAt(b)&&b++,f+=4;return f};function L2(c,f,b){if(c>>>=0,f>>>=0,b=At(b>>>=0),f===2)var w=O2,I=N2,A=B2;else w=P2,I=D2,A=U2;Vt(c,{name:b,Oc:B=>{var j=(v(),G)[B>>>2>>>0];return j=w(B+4,j*f,!0),zt(B),j},Vc:(B,j)=>{if(typeof j!="string")throw new Yn(`Cannot pass non-string to C++ string type ${b}`);var te=A(j),re=xr(4+te+f);return(v(),G)[re>>>2>>>0]=te/f,I(j,re+4,te+f),B!==null&&B.push(zt,re),re},Uc:Xo,Wc(B){zt(B)}})}function F2(c,f){Vt(c>>>=0,{zd:!0,name:f=At(f>>>0),Oc:()=>{},Vc:()=>{}})}function G2(c){as(c>>>0,!r,1,!n,131072,!1),wr()}var oi=c=>{if(!k)try{if(c(),!(0<ke))try{i?pi()&&os(g):ht(g)}catch(f){f instanceof ie||f=="unwind"||l(0,f)}}catch(f){f instanceof ie||f=="unwind"||l(0,f)}},W2=!Atomics.waitAsync||((e0=globalThis.navigator)==null?void 0:e0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Zo(c){c>>>=0,W2||(Atomics.waitAsync((v(),R),c>>>2,c).value.then(si),c+=128,Atomics.store((v(),R),c>>>2,1))}var si=()=>oi(()=>{var c=pi();c&&(Zo(c),ug())});function q2(c,f){(c>>>=0)==f>>>0?setTimeout(si):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=at[c])&&c.postMessage({Sc:"checkMailbox"})}var Qo=[];function V2(c,f,b,w,I){for(f>>>=0,I>>>=0,Qo.length=0,b=I>>>3,w=I+w>>>3;b<w;){var A;A=(v(),X)[b++>>>0]?(v(),X)[b++>>>0]:(v(),P)[b++>>>0],Qo.push(A)}return(f?cs[f]:N$[c])(...Qo)}var H2=()=>{ke=0};function j2(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):qn(at[c])}function K2(c){}var ui=c=>{try{c()}catch(f){W(f)}};function Y2(c){var f=(...b)=>{li.push(c);try{return c(...b)}finally{k||(li.pop(),Rt&&on===1&&li.length===0&&(on=0,ke+=1,ui(Xg),typeof Fibers<"u"&&Fibers.Zd()))}};return Dm.set(c,f),f}var on=0,Rt=null,Bm=0,li=[],Jo=new Map,Pm=new Map,Dm=new Map,X2=0,es=null,Z2=[],Um=c=>(function(f){if(!k){if(on===0){var b=!1,w=!1;f((I=0)=>{if(!k&&(Bm=I,b=!0,w)){on=2,ui(()=>Zg(Rt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var A=(function(){var te=(v(),R)[Rt+8>>>2>>>0];return te=Pm.get(te),te=Dm.get(te),--ke,te()})()}catch(te){A=te,I=!0}var B=!1;if(!Rt){var j=es;j&&(es=null,(I?j.reject:j.resolve)(A),B=!0)}if(I&&!B)throw A}}),w=!0,b||(on=1,Rt=(function(){var I=xr(65548),A=I+12;if((v(),G)[I>>>2>>>0]=A,(v(),G)[I+4>>>2>>>0]=A+65536,A=li[0],!Jo.has(A)){var B=X2++;Jo.set(A,B),Pm.set(B,A)}return A=Jo.get(A),(v(),R)[I+8>>>2>>>0]=A,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),ui(()=>Yg(Rt)))}else on===2?(on=0,ui(Qg),zt(Rt),Rt=null,Z2.forEach(oi)):W(`invalid state: ${on}`);return Bm}})(f=>{c().then(f)});function Q2(c){return c>>>=0,Um(async()=>{var f=await ft(c);return St(f)})}var ts=[],J2=c=>{var f=ts.length;return ts.push(c),f},e$=(c,f)=>{for(var b=Array(c),w=0;w<c;++w){var I=w,A=(v(),G)[f+4*w>>>2>>>0],B=Ko[A];if(B===void 0)throw c=`parameter ${w}`,A=ng(A),f=At(A),zt(A),new Yn(`${c} has unknown type ${f}`);b[I]=B}return b},t$=(c,f,b)=>{var w=[];return c=c(w,b),w.length&&((v(),G)[f>>>2>>>0]=St(w)),c},n$={},ci=c=>{var f=n$[c];return f===void 0?At(c):f};function r$(c,f,b){var[w,...I]=e$(c,f>>>0);f=w.Vc.bind(w);var A=I.map(te=>te.Uc.bind(te));c--;var B={toValue:ft};switch(c=A.map((te,re)=>{var ge=`argFromPtr${re}`;return B[ge]=te,`${ge}(args${re?"+"+8*re:""})`}),b){case 0:var j="toValue(handle)";break;case 2:j="new (toValue(handle))";break;case 3:j="";break;case 1:B.getStringOrSymbol=ci,j="toValue(handle)[getStringOrSymbol(methodName)]"}return j+=`(${c})`,w.zd||(B.toReturnWire=f,B.emval_returnValue=t$,j=`return emval_returnValue(toReturnWire, destructorsRef, ${j})`),j=`return function (handle, methodName, destructorsRef, args) {
  ${j}
  }`,b=new Function(Object.keys(B),j)(...Object.values(B)),j=`methodCaller<(${I.map(te=>te.name)}) => ${w.name}>`,J2(Object.defineProperty(b,"name",{value:j}))}function i$(c,f){return f>>>=0,(c=ft(c>>>0))==ft(f)}function a$(c){return(c>>>=0)?(c=ci(c),St(globalThis[c])):St(globalThis)}function o$(c){return c=ci(c>>>0),St(t[c])}function s$(c,f){return f>>>=0,c=ft(c>>>0),f=ft(f),St(c[f])}function u$(c){9<(c>>>=0)&&(En[c+1]+=1)}function Lm(c,f,b,w,I){return ts[c>>>0](f>>>0,b>>>0,w>>>0,I>>>0)}function l$(c,f,b,w,I){return Lm(c>>>0,f>>>0,b>>>0,w>>>0,I>>>0)}function c$(){return St([])}function d$(c){c=ft(c>>>0);for(var f=Array(c.length),b=0;b<c.length;b++)f[b]=c[b];return St(f)}function h$(c){return St(ci(c>>>0))}function p$(){return St({})}function f$(c){for(var f=ft(c>>>=0);f.length;){var b=f.pop();f.pop()(b)}Yo(c)}function m$(c,f,b){f>>>=0,b>>>=0,c=ft(c>>>0),f=ft(f),b=ft(b),c[f]=b}function g$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),R)[f>>>2>>>0]=c.getUTCSeconds(),(v(),R)[f+4>>>2>>>0]=c.getUTCMinutes(),(v(),R)[f+8>>>2>>>0]=c.getUTCHours(),(v(),R)[f+12>>>2>>>0]=c.getUTCDate(),(v(),R)[f+16>>>2>>>0]=c.getUTCMonth(),(v(),R)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(v(),R)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),R)[f+28>>>2>>>0]=c}var Fm=c=>c%4==0&&(c%100!=0||c%400==0),Gm=[0,31,60,91,121,152,182,213,244,274,305,335],Wm=[0,31,59,90,120,151,181,212,243,273,304,334];function y$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),R)[f>>>2>>>0]=c.getSeconds(),(v(),R)[f+4>>>2>>>0]=c.getMinutes(),(v(),R)[f+8>>>2>>>0]=c.getHours(),(v(),R)[f+12>>>2>>>0]=c.getDate(),(v(),R)[f+16>>>2>>>0]=c.getMonth(),(v(),R)[f+20>>>2>>>0]=c.getFullYear()-1900,(v(),R)[f+24>>>2>>>0]=c.getDay();var b=(Fm(c.getFullYear())?Gm:Wm)[c.getMonth()]+c.getDate()-1|0;(v(),R)[f+28>>>2>>>0]=b,(v(),R)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(b!=w&&c.getTimezoneOffset()==Math.min(w,b)),(v(),R)[f+32>>>2>>>0]=c}function w$(c){c>>>=0;var f=new Date((v(),R)[c+20>>>2>>>0]+1900,(v(),R)[c+16>>>2>>>0],(v(),R)[c+12>>>2>>>0],(v(),R)[c+8>>>2>>>0],(v(),R)[c+4>>>2>>>0],(v(),R)[c>>>2>>>0],0),b=(v(),R)[c+32>>>2>>>0],w=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),A=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(A,I);return 0>b?(v(),R)[c+32>>>2>>>0]=+(I!=A&&B==w):0<b!=(B==w)&&(I=Math.max(A,I),f.setTime(f.getTime()+6e4*((0<b?B:I)-w))),(v(),R)[c+24>>>2>>>0]=f.getDay(),b=(Fm(f.getFullYear())?Gm:Wm)[f.getMonth()]+f.getDate()-1|0,(v(),R)[c+28>>>2>>>0]=b,(v(),R)[c>>>2>>>0]=f.getSeconds(),(v(),R)[c+4>>>2>>>0]=f.getMinutes(),(v(),R)[c+8>>>2>>>0]=f.getHours(),(v(),R)[c+12>>>2>>>0]=f.getDate(),(v(),R)[c+16>>>2>>>0]=f.getMonth(),(v(),R)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function qm(c,f,b,w,I,A,B){return i?ce(16,1,c,f,b,w,I,A,B):-52}function Vm(c,f,b,w,I,A){if(i)return ce(17,1,c,f,b,w,I,A)}var $r={},_$=()=>performance.timeOrigin+performance.now();function Hm(c,f){if(i)return ce(18,1,c,f);if($r[c]&&(clearTimeout($r[c].id),delete $r[c]),!f)return 0;var b=setTimeout(()=>{delete $r[c],oi(()=>sg(c,performance.timeOrigin+performance.now()))},f);return $r[c]={id:b,Yd:f},0}function b$(c,f,b,w){c>>>=0,f>>>=0,b>>>=0,w>>>=0;var I=new Date().getFullYear(),A=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var B=Math.max(A,I);(v(),G)[c>>>2>>>0]=60*B,(v(),R)[f>>>2>>>0]=+(A!=I),c=(f=j=>{var te=Math.abs(j);return`UTC${0<=j?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(A),f=f(I),I<A?(an(c,b,17),an(f,w,17)):(an(c,w,17),an(f,b,17))}var $$=()=>Date.now();function x$(c,f,b){return b>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(v(),X)[b>>>3>>>0]=BigInt(c),0):28}var ns=[],jm=(c,f)=>{ns.length=0;for(var b;b=(v(),Y)[c++>>>0];){var w=b!=105;f+=(w&=b!=112)&&f%8?4:0,ns.push(b==112?(v(),G)[f>>>2>>>0]:b==106?(v(),X)[f>>>3>>>0]:b==105?(v(),R)[f>>>2>>>0]:(v(),P)[f>>>3>>>0]),f+=w?8:4}return ns};function v$(c,f,b){return c>>>=0,f=jm(f>>>0,b>>>0),cs[c](...f)}function S$(c,f,b){return c>>>=0,f=jm(f>>>0,b>>>0),cs[c](...f)}var M$=()=>{};function T$(c,f){return T(xe(c>>>0,f>>>0))}var I$=()=>{throw ke+=1,"unwind"};function E$(){return 4294901760}var k$=()=>navigator.hardwareConcurrency,kn={},di=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},Km=c=>{for(var f of c)(c=di(f))&&(kn[c]=f)};function C$(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),Km(c),kn.gd=di(c[3]),kn.Jd=c,kn.gd}function hi(c){if(!(c=kn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}zt(hi.hd??0),f=ai(c)+1;var b=xr(f);return b&&an(c,b,f),hi.hd=b,hi.hd}function A$(c){c>>>=0;var f=(v(),Y).length;if(c<=f||4294901760<c)return!1;for(var b=1;4>=b;b*=2){var w=f*(1+.2/b);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Ct.buffer.byteLength+65535)/65536|0;try{Ct.grow(w),H();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function R$(c,f,b){if(c>>>=0,f>>>=0,kn.gd==c)var w=kn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Km(w);for(var I=3;w[I]&&di(w[I])!=c;)++I;for(c=0;c<b&&w[c+I];++c)(v(),R)[f+4*c>>>2>>>0]=di(w[c+I]);return c}var rs,is={},Ym=()=>{var w;if(!rs){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in is)is[c]===void 0?delete f[c]:f[c]=is[c];var b=[];for(c in f)b.push(`${c}=${f[c]}`);rs=b}return rs};function Xm(c,f){if(i)return ce(19,1,c,f);c>>>=0,f>>>=0;var b,w=0,I=0;for(b of Ym()){var A=f+w;(v(),G)[c+I>>>2>>>0]=A,w+=an(b,A,1/0)+1,I+=4}return 0}function Zm(c,f){if(i)return ce(20,1,c,f);c>>>=0,f>>>=0;var b=Ym();for(var w of((v(),G)[c>>>2>>>0]=b.length,c=0,b))c+=ai(w)+1;return(v(),G)[f>>>2>>>0]=c,0}function Qm(c){return i?ce(21,1,c):52}function Jm(c,f,b,w){return i?ce(22,1,c,f,b,w):52}function eg(c,f,b,w){return i?ce(23,1,c,f,b,w):70}var z$=[null,[],[]];function tg(c,f,b,w){if(i)return ce(24,1,c,f,b,w);f>>>=0,b>>>=0,w>>>=0;for(var I=0,A=0;A<b;A++){var B=(v(),G)[f>>>2>>>0],j=(v(),G)[f+4>>>2>>>0];f+=8;for(var te=0;te<j;te++){var re=c,ge=(v(),Y)[B+te>>>0],Ie=z$[re];ge===0||ge===10?((re===1?S:T)(Je(Ie)),Ie.length=0):Ie.push(ge)}I+=j}return(v(),G)[w>>>2>>>0]=I,0}function O$(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)Vn();Ae.push(async()=>{var f=(async function(){if(!i)return Promise.all(lt.map(rn))})();Ve++,await f,--Ve==0&&Ge&&(f=Ge,Ge=null,f())})})(),i||(Ct=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>$e(),t.stackRestore=c=>_e(c),t.stackAlloc=c=>ss(c),t.setValue=function(c,f,b="i8"){switch(b.endsWith("*")&&(b="*"),b){case"i1":case"i8":(v(),N)[c>>>0]=f;break;case"i16":(v(),U)[c>>>1>>>0]=f;break;case"i32":(v(),R)[c>>>2>>>0]=f;break;case"i64":(v(),X)[c>>>3>>>0]=BigInt(f);break;case"float":(v(),z)[c>>>2>>>0]=f;break;case"double":(v(),P)[c>>>3>>>0]=f;break;case"*":(v(),G)[c>>>2>>>0]=f;break;default:W(`invalid type for setValue: ${b}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),N)[c>>>0];case"i16":return(v(),U)[c>>>1>>>0];case"i32":return(v(),R)[c>>>2>>>0];case"i64":return(v(),X)[c>>>3>>>0];case"float":return(v(),z)[c>>>2>>>0];case"double":return(v(),P)[c>>>3>>>0];case"*":return(v(),G)[c>>>2>>>0];default:W(`invalid type for getValue: ${f}`)}},t.UTF8ToString=xe,t.stringToUTF8=an,t.lengthBytesUTF8=ai;var ng,rg,pi,zt,xr,as,ig,ag,og,os,sg,ug,ve,vr,lg,_e,ss,$e,cg,us,dg,hg,pg,ls,fg,mg,gg,yg,wg,_g,bg,$g,xg,vg,Sg,Mg,Tg,Ig,Eg,kg,Cg,Ag,Rg,zg,Og,Ng,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Ht,N$=[et,Sn,we,jn,Kn,De,Ke,pt,qt,ti,ni,ri,ii,br,Am,Rm,qm,Vm,Hm,Xm,Zm,Qm,Jm,eg,tg],cs={1003524:(c,f,b,w,I)=>{if(t===void 0||!t.Xc)return 1;if((c=xe(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),b=Number(b>>>0),w=Number(w>>>0),f+b>c.byteLength)return 3;try{let A=c.subarray(f,f+b);switch(I){case 0:(v(),Y).set(A,w>>>0);break;case 1:t.Qd?t.Qd(w,A):t.Id(w,A);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,b)=>{t.td(c,(v(),Y).subarray(f>>>0,f+b>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,b)=>{t.ed(Number(c),Number(f),Number(b),!0)},1004704:(c,f,b)=>{t.ed(Number(c),Number(f),Number(b))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,b)=>{t.$b("HardSigmoid",c,{alpha:f,beta:b})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,b)=>{t.$b("Clip",c,{min:f,max:b})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,b,w,I)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007283:(c,f,b,w,I)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007457:(c,f,b,w,I)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007631:(c,f,b,w,I)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007806:(c,f,b,w,I)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007980:(c,f,b,w,I)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008153:(c,f,b,w,I)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008326:(c,f,b,w,I)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008503:(c,f,b,w,I)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008683:(c,f,b,w,I)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,b)=>{t.$b("Transpose",c,{perm:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(b)>>>0)):[]})},1009040:(c,f,b,w)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:xe(b),format:w?"NHWC":"NCHW"})},1009173:(c,f,b,w)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:xe(b),format:w?"NHWC":"NCHW"})},1009306:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue,sn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[I],pads:[A,B],strides:[j],wIsConst:()=>!!(v(),N)[re>>>0],outputPadding:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(Ie)>>>0)):[],outputShape:Oe?Array.from((v(),R).subarray(Number(Oe)>>>0,Number(Ue)>>>0)):[],activation:xe(sn)})},1009739:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("ConvTranspose",c,{format:j?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),R).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],outputShape:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[],activation:xe(Ue)})},1010400:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue,sn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[I],pads:[A,B],strides:[j],wIsConst:()=>!!(v(),N)[re>>>0],outputPadding:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(Ie)>>>0)):[],outputShape:Oe?Array.from((v(),R).subarray(Number(Oe)>>>0,Number(Ue)>>>0)):[],activation:xe(sn)})},1010833:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("ConvTranspose",c,{format:j?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),R).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],outputShape:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[],activation:xe(Ue)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("AveragePool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:j?Array.from((v(),R).subarray(Number(j)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],strides:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("AveragePool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:j?Array.from((v(),R).subarray(Number(j)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],strides:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("MaxPool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:j?Array.from((v(),R).subarray(Number(j)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],strides:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue)=>{t.$b("MaxPool",c,{format:Ue?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:j?Array.from((v(),R).subarray(Number(j)>>>0,Number(te)>>>0)):[],pads:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],strides:Ie?Array.from((v(),R).subarray(Number(Ie)>>>0,Number(Oe)>>>0)):[]})},1013758:(c,f,b,w,I)=>{t.$b("Gemm",c,{alpha:f,beta:b,transA:w,transB:I})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,b,w)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014024:(c,f,b,w)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,b,w,I)=>{t.$b("Split",c,{axis:f,numOutputs:b,splitSizes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,b,w,I,A,B,j,te,re,ge)=>{t.$b("Resize",c,{antialias:f,axes:b?Array.from((v(),R).subarray(Number(b)>>>0,Number(w)>>>0)):[],coordinateTransformMode:xe(I),cubicCoeffA:A,excludeOutside:B,extrapolationValue:j,keepAspectRatioPolicy:xe(te),mode:xe(re),nearestMode:xe(ge)})},1015056:(c,f,b,w,I,A,B)=>{t.$b("Slice",c,{starts:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(b)>>>0)):[],ends:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,b)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:b?"NHWC":"NCHW"})},1015486:(c,f,b)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:b?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:xe(f)})},1015734:(c,f,b,w,I)=>{t.$b("Pad",c,{mode:f,value:b,pads:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1015877:(c,f,b,w,I,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:b,spatial:!!I,trainingMode:!!w,format:A?"NHWC":"NCHW"})},1016046:(c,f,b,w,I,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:b,spatial:!!I,trainingMode:!!w,format:A?"NHWC":"NCHW"})},1016215:(c,f,b)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number(b)})},1016312:(c,f,b)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:b})},1016402:(c,f,b,w,I)=>{t.$b("GridSample",c,{align_corners:f,mode:xe(b),padding_mode:xe(w),format:I?"NHWC":"NCHW"})},1016572:(c,f,b,w,I)=>{t.$b("GridSample",c,{align_corners:f,mode:xe(b),padding_mode:xe(w),format:I?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:xe(f)})},1016827:(c,f,b,w,I,A,B,j,te)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:I,doRotary:A,qkvHiddenSizes:B?Array.from((v(),R).subarray(Number(j)>>>0,Number(j)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue,sn,ds)=>{t.$b("Conv",c,{format:Ie?"NHWC":"NCHW",auto_pad:f,dilations:b?Array.from((v(),R).subarray(Number(b)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:j?Array.from((v(),R).subarray(Number(j)>>>0,Number(te)>>>0)):[],strides:re?Array.from((v(),R).subarray(Number(re)>>>0,Number(ge)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Oe)>>>0],activation:xe(Ue),activation_params:sn?Array.from((v(),z).subarray(Number(sn)>>>0,Number(ds)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,b,w,I,A,B,j,te)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:b,scale:w,softcap:I,doRotary:A,rotaryInterleaved:B,smoothSoftmax:j,localWindowSize:te})},1018124:(c,f,b,w)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:b,simplified:!!w})},1018235:(c,f,b,w)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:b,simplified:!!w})},1018346:(c,f,b,w,I,A)=>{t.$b("MatMulNBits",c,{k:f,n:b,accuracyLevel:w,bits:I,blockSize:A})},1018473:(c,f,b,w,I,A)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:I,doRotary:A})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,b,w,I)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:b,rotaryEmbeddingDim:w,scale:I})},1018835:(c,f,b)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!b})},1018937:(c,f,b)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!b})},1019039:(c,f,b,w)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:b,blockSize:w})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function B$(c,f,b){return Um(async()=>{await t.Dd(Number(c),Number(f),Number(b))})}function P$(){return typeof wasmOffsetConverter<"u"}function D$(c,f,b,w){var I=$e();try{return $g(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function U$(c,f,b){var w=$e();try{return yg(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;ve(1,0)}}function L$(c){var f=$e();try{fg(c)}catch(b){if(_e(f),b!==b+0)throw b;ve(1,0)}}function F$(c,f){var b=$e();try{return ls(c,f)}catch(w){if(_e(b),w!==w+0)throw w;ve(1,0)}}function G$(c,f,b){var w=$e();try{pg(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;ve(1,0)}}function W$(c,f){var b=$e();try{xg(c,f)}catch(w){if(_e(b),w!==w+0)throw w;ve(1,0)}}function q$(c,f,b,w,I,A,B){var j=$e();try{return _g(c,f,b,w,I,A,B)}catch(te){if(_e(j),te!==te+0)throw te;ve(1,0)}}function V$(c,f,b,w,I,A){var B=$e();try{mg(c,f,b,w,I,A)}catch(j){if(_e(B),j!==j+0)throw j;ve(1,0)}}function H$(c,f,b,w){var I=$e();try{bg(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function j$(c,f,b,w,I){var A=$e();try{gg(c,f,b,w,I)}catch(B){if(_e(A),B!==B+0)throw B;ve(1,0)}}function K$(c,f,b,w,I,A,B){var j=$e();try{Sg(c,f,b,w,I,A,B)}catch(te){if(_e(j),te!==te+0)throw te;ve(1,0)}}function Y$(c,f,b,w,I,A,B){var j=$e();try{Mg(c,f,b,w,I,A,B)}catch(te){if(_e(j),te!==te+0)throw te;ve(1,0)}}function X$(c,f,b,w,I,A,B,j){var te=$e();try{kg(c,f,b,w,I,A,B,j)}catch(re){if(_e(te),re!==re+0)throw re;ve(1,0)}}function Z$(c,f,b,w,I){var A=$e();try{return vg(c,f,b,w,I)}catch(B){if(_e(A),B!==B+0)throw B;ve(1,0)}}function Q$(c,f,b){var w=$e();try{return Cg(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;ve(1,0)}}function J$(c,f,b,w,I,A,B,j){var te=$e();try{Ag(c,f,b,w,I,A,B,j)}catch(re){if(_e(te),re!==re+0)throw re;ve(1,0)}}function ex(c,f,b,w,I,A,B,j,te,re,ge,Ie){var Oe=$e();try{Tg(c,f,b,w,I,A,B,j,te,re,ge,Ie)}catch(Ue){if(_e(Oe),Ue!==Ue+0)throw Ue;ve(1,0)}}function tx(c,f,b,w,I,A){var B=$e();try{return Ig(c,f,b,w,I,A)}catch(j){if(_e(B),j!==j+0)throw j;ve(1,0)}}function nx(c,f,b){var w=$e();try{return Rg(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;return ve(1,0),0n}}function rx(c,f,b,w,I,A,B,j,te){var re=$e();try{wg(c,f,b,w,I,A,B,j,te)}catch(ge){if(_e(re),ge!==ge+0)throw ge;ve(1,0)}}function ix(c){var f=$e();try{return zg(c)}catch(b){if(_e(f),b!==b+0)throw b;ve(1,0)}}function ax(c,f){var b=$e();try{return Kg(c,f)}catch(w){if(_e(b),w!==w+0)throw w;return ve(1,0),0n}}function ox(c){var f=$e();try{return Og(c)}catch(b){if(_e(f),b!==b+0)throw b;return ve(1,0),0n}}function sx(c,f,b,w){var I=$e();try{return Lg(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function ux(c,f,b,w,I){var A=$e();try{return Fg(c,f,b,w,I)}catch(B){if(_e(A),B!==B+0)throw B;ve(1,0)}}function lx(c,f,b,w,I,A){var B=$e();try{return Gg(c,f,b,w,I,A)}catch(j){if(_e(B),j!==j+0)throw j;ve(1,0)}}function cx(c,f,b,w,I,A){var B=$e();try{return Wg(c,f,b,w,I,A)}catch(j){if(_e(B),j!==j+0)throw j;ve(1,0)}}function dx(c,f,b,w,I,A,B,j){var te=$e();try{return Eg(c,f,b,w,I,A,B,j)}catch(re){if(_e(te),re!==re+0)throw re;ve(1,0)}}function hx(c,f,b,w,I){var A=$e();try{return qg(c,f,b,w,I)}catch(B){if(_e(A),B!==B+0)throw B;return ve(1,0),0n}}function px(c,f,b,w){var I=$e();try{return Vg(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function fx(c,f,b,w){var I=$e();try{return Hg(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function mx(c,f,b,w,I,A,B,j,te,re,ge,Ie){var Oe=$e();try{return jg(c,f,b,w,I,A,B,j,te,re,ge,Ie)}catch(Ue){if(_e(Oe),Ue!==Ue+0)throw Ue;ve(1,0)}}function gx(c,f,b,w,I,A,B,j,te,re,ge){var Ie=$e();try{Dg(c,f,b,w,I,A,B,j,te,re,ge)}catch(Oe){if(_e(Ie),Oe!==Oe+0)throw Oe;ve(1,0)}}function yx(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue,sn,ds){var $x=$e();try{Ug(c,f,b,w,I,A,B,j,te,re,ge,Ie,Oe,Ue,sn,ds)}catch(hs){if(_e($x),hs!==hs+0)throw hs;ve(1,0)}}function wx(c,f,b){var w=$e();try{return Ng(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;ve(1,0)}}function _x(c,f,b){var w=$e();try{return Bg(c,f,b)}catch(I){if(_e(w),I!==I+0)throw I;ve(1,0)}}function bx(c,f,b,w){var I=$e();try{Pg(c,f,b,w)}catch(A){if(_e(I),A!==A+0)throw A;ve(1,0)}}function fi(){if(0<Ve)Ge=fi;else if(i)y==null||y(t),F();else{for(var c=Ae;0<c.length;)c.shift()(t);0<Ve?Ge=fi:(t.calledRun=!0,k||(F(),y==null||y(t)))}}return i||(Ht=await de(),fi()),t.PTR_SIZE=4,D?t:new Promise((c,f)=>{y=c,_=f})}var Ns,Bs,x0=J(()=>{var e,t;Ns=Os,Bs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Bs&&Os()}),vi,Si,Ps,st,Ds,Ir,Us,Ls,Mi,Fs,Ti,Gs,Ii,Ws,Ei=J(()=>{bi(),vi=typeof location>"u"?void 0:location.origin,Si=self.location.href>"file:"&&self.location.href<"file;",Ps=()=>{{if(Si){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,vi).href}return self.location.href}},st=Ps(),Ds=()=>{if(st&&!st.startsWith("blob:"))return st.substring(0,st.lastIndexOf("/")+1)},Ir=(e,t)=>{try{let n=t??st;return(n?new URL(e,n):new URL(e)).origin===vi}catch{return!1}},Us=(e,t)=>{let n=t??st;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ls=(e,t)=>`${t??"./"}${e}`,Mi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Fs=async e=>(await import(e)).default,Ti=($0(),Xn(As)).default,Gs=async()=>{if(!st)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ir(st))return[void 0,Ti()];let e=await Mi(st);return[e,Ti(e)]},Ii=(x0(),Xn(zs)).default,Ws=async(e,t,n,r)=>{let i=Ii&&!(e||t);if(i)if(st)i=Ir(st)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ii];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??Us(a,t),s=n&&o&&!Ir(o,t),u=s?await Mi(o):o??Ls(a,t);return[s?u:void 0,await Fs(u)]}}}),ki,Er,Jn,Ci,qs,Vs,Hs,Ai,Be,dn=J(()=>{Ei(),Er=!1,Jn=!1,Ci=!1,qs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Vs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Hs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ai=async e=>{if(Er)return Promise.resolve();if(Jn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ci)throw new Error("previous call to 'initializeWebAssembly()' failed.");Jn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Hs())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Vs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=qs();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[d,p]=await Ws(s,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,_)=>{let $={numThreads:n};if(h)$.wasmBinary=h,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,s).href;else if(d){let x=Ds();x&&($.locateFile=M=>x+M)}p($).then(x=>{Jn=!1,Er=!0,ki=x,y(),d&&URL.revokeObjectURL(d)},x=>{Jn=!1,Ci=!0,_(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Be=()=>{if(Er&&ki)return ki;throw new Error("WebAssembly is not initialized yet.")}}),gt,kr,Re,Ri=J(()=>{dn(),gt=(e,t)=>{let n=Be(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},kr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")kr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Re=e=>{let t=Be(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),js,v0=J(()=>{dn(),Ri(),js=e=>{let t=Be(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=gt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Re("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&kr(e.extra,"",new WeakSet,(o,s)=>{let u=gt(o,r),l=gt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Re(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),Ks,Ys,Xs,hn,Zs,Qs,S0=J(()=>{dn(),Ri(),Ks=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ys=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Xs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},hn=(e,t,n,r)=>{let i=gt(t,r),a=gt(n,r);Be()._OrtAddSessionConfigEntry(e,i,a)!==0&&Re(`Can't set a session config entry: ${t} - ${n}.`)},Zs=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",hn(e,"session.disable_quant_qdq","1",n),hn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&hn(e,"deviceType",d,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);hn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=gt(a,n),u=o.length,l=0,h=0;if(u>0){l=Be()._malloc(u*Be().PTR_SIZE),n.push(l),h=Be()._malloc(u*Be().PTR_SIZE),n.push(h);for(let d=0;d<u;d++)Be().setValue(l+d*Be().PTR_SIZE,o[d][0],"*"),Be().setValue(h+d*Be().PTR_SIZE,o[d][1],"*")}await Be()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&Re(`Can't append execution provider: ${a}.`)}},Qs=async e=>{let t=Be(),n=0,r=[],i=e||{};Xs(i);try{let a=Ks(i.graphOptimizationLevel??"all"),o=Ys(i.executionMode??"sequential"),s=typeof i.logId=="string"?gt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?gt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&Re("Can't create session options."),i.executionProviders&&await Zs(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);hn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=gt(d,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&Re(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&kr(i.extra,"",new WeakSet,(d,p)=>{hn(n,d,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Re("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),pn,Bt,fn,Cr,Ar,zi,Oi,Ni,pe=J(()=>{pn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Bt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},fn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Cr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ar=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},zi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Oi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ni=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Bi,Js=J(()=>{bi(),Bi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),eu,tu,nu,ru,Pi,iu,Se,Pt=J(()=>{pe(),eu=["V","I","W","E","F"],tu=(e,t)=>{console.log(`[${eu[e]},${new Date().toISOString()}]${t}`)},Pi=(e,t)=>{nu=e,ru=t},iu=(e,t)=>{let n=Ar(e),r=Ar(nu);n>=r&&tu(n,typeof t=="function"?t():t)},Se=(...e)=>{ru&&iu(...e)}}),au,zn,q,Rr,ou,su,uu,fe=J(()=>{au=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},zn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=au.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class mi{static size(t){return mi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return mi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return mi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Rr=class Sr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Sr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Sr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Sr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Sr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},ou=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!zn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},su=-34028234663852886e22,uu=34028234663852886e22}),Di,lu=J(()=>{pe(),Di=(e,t)=>new(Cr(t))(e)}),Ui,Li,Fi,cu,Gi,du,Wi,qi,Vi,hu,pu,M0=J(()=>{pe(),Pt(),Ui=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Li=(e,t)=>{if(t==="int32")return e;let n=Ui.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Cr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Fi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},cu=1,Gi=()=>cu++,du=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Wi=(e,t)=>{let n=Ui.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Wi(this.dataType,this.tensorShape)}destroy(){Se("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Fi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Vi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=du.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Se("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Wi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Li(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Se("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Fi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},hu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Gi();return this.tensorTrackersById.set(e,new Vi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Se("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Se("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Gi(),o=new qi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Vi(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Se("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Se("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new qi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},pu=(...e)=>new hu(...e)}),er,fu,mu,T0=J(()=>{pe(),dn(),lu(),M0(),Pt(),er=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),fu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},mu=class{constructor(e){this.tensorManager=pu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Pi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Se("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Se("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Se("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>fu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Se("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=er.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Se("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=er.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Se("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Di(n,t)}}registerMLTensor(e,t,n,r){let i=er.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Se("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let d=Li(new Uint8Array(l),"int64");h=new Int32Array(d.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Se("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=er.get(pn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Hi=J(()=>{}),ji,zr,Or,gu,yu,Ki,Yi,wu,_u,I0=J(()=>{Pt(),Hi(),ji=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),zr=[],Or=e=>Math.ceil(Number(e)/16)*16,gu=e=>{for(let t=0;t<zr.length;t++){let n=zr[t];if(e<=n)return n}return Math.ceil(e/16)*16},yu=1,Ki=()=>yu++,Yi=async(e,t,n,r)=>{let i=Or(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},wu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ji)zr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Or(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Se("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Or(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Ki();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Se("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=gu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Ki(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Se("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Se("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Yi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ji.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Se("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},_u=(...e)=>new wu(...e)}),bu,Ce,qe=J(()=>{bu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ce=e=>new bu(e)}),On,Nr,Ye,tt,le,Fe,Xi,Nn,Kt,oe,tr,K,ae,$u,Zi,xu,vu,me=J(()=>{pe(),fe(),On=64,Nr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let n=Nr(e,t);return typeof n=="string"?n:n[0]},tt=(e,t=1)=>{let n=Nr(e,t);return typeof n=="string"?n:n[1]},le=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},Fe=e=>e%4===0?4:e%2===0?2:1,Xi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Nn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Kt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,oe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,tr=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Nr(t,i),h=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:d,tensor:t},m=D=>typeof D=="string"?D:`${D}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",_=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let D=0;D<o-1;D++)x+=`
    let dim${D} = current / ${oe($,D,o)};
    let rest${D} = current % ${oe($,D,o)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=D=>(g.offsetToIndices=!0,o<2?D:`o2i_${e}(${D})`),T=[];if(o>=2)for(let D=o-1;D>=0;D--)T.push(`${oe($,D,o)} * (indices[${D}])`);let k=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,E=D=>(g.indicesToOffset=!0,o<2?D:`i2o_${e}(${D})`),v=(...D)=>o===0?"0u":`${p.indices}(${D.map(m).join(",")})`,C=(D,H)=>o<2?`${D}`:`${oe(D,H,o)}`,N=(D,H,F)=>o<2?`${D}=${F};`:`${oe(D,H,o)}=${F};`,Y={},U=(D,H)=>{g.broadcastedIndicesToOffset=!0;let F=`${H.name}broadcastedIndicesTo${e}Offset`;if(F in Y)return`${F}(${D})`;let W=[];for(let ne=o-1;ne>=0;ne--){let de=H.indicesGet("outputIndices",ne+H.rank-o);W.push(`${C($,ne)} * (${de} % ${C(_,ne)})`)}return Y[F]=`fn ${F}(outputIndices: ${H.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${F}(${D})`},V=(D,H)=>(()=>{if(p.storage===p.value)return`${e}[${D}]=${H};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${H}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),R=D=>(()=>{if(p.storage===p.value)return`${e}[${D}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${D}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${D}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),G=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${R(`i2o_${e}(indices)`)};
  }`,z=o<2?"":(()=>{let D=s.map(F=>`d${F}: u32`).join(", "),H=s.map(F=>`d${F}`).join(", ");return`
  fn get_${e}(${D}) -> ${h} {
    return get_${e}ByIndices(${v(H)});
  }`})(),P=(...D)=>{if(D.length!==o)throw new Error(`indices length must be ${o}`);let H=D.map(m).join(",");return o===0?R("0u"):o===1?R(H[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${H})`)},X=D=>o<2?R(D):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${D})`),O=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,Z=o<2?"":(()=>{let D=s.map(F=>`d${F}: u32`).join(", "),H=s.map(F=>`d${F}`).join(", ");return`
  fn set_${e}(${D}, value: ${h}) {
    set_${e}ByIndices(${v(H)}, value);
  }`})();return{impl:()=>{let D=[],H=!1;return g.offsetToIndices&&(D.push(M),H=!0),g.indicesToOffset&&(D.push(k),H=!0),g.broadcastedIndicesToOffset&&(Object.values(Y).forEach(F=>D.push(F)),H=!0),g.set&&(D.push(Z),H=!0),g.setByIndices&&(D.push(O),H=!0),g.get&&(D.push(z),H=!0),g.getByIndices&&(D.push(G),H=!0),!a&&H&&D.unshift(`const ${_} = ${p.indices}(${n.join(",")});`,`const ${$} = ${p.indices}(${q.computeStrides(n).join(",")});`),D.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:E,broadcastedIndicesToOffset:U,indices:v,indicesGet:C,indicesSet:N,set:(...D)=>{if(D.length!==o+1)throw new Error(`indices length must be ${o}`);let H=D[o];if(typeof H!="string")throw new Error("value must be string");let F=D.slice(0,o).map(m).join(",");return o===0?V("0u",H):o===1?V(F[0],H):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${F}, ${H})`)},setByOffset:V,setByIndices:(D,H)=>o<2?V(D,H):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${H});`),get:P,getByOffset:R,getByIndices:X,usage:r,name:e,strides:$,shape:_,rank:o}},K=(e,t,n,r=1)=>tr(e,t,n,"input",r),ae=(e,t,n,r=1)=>tr(e,t,n,"output",r),$u=(e,t,n)=>tr(e,t,n,"atomicOutput",1),Zi=(e,t,n,r=1)=>tr(e,t,n,"internal",r),xu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=On){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${a}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},vu=(e,t)=>new xu(e,t)}),Su,Qi,Mu,Tu,Iu,Eu,ut,ku,Cu,Yt=J(()=>{pe(),fe(),qe(),me(),Su=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Qi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Mu=(e,t)=>q.sortBasedOnPerm(e,Qi(e.length,t)),Tu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Iu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Eu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ut=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Qi(r,t),a=Mu(e.dims,i),o=e.dims,s=a,u=r<2||Eu(i,e.dims),l;if(u)return l=g=>{let y=K("input",n,o,4),_=ae("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:d}=Iu(e.dims,i),p=q.areEqual(d,[2,3,1]),m=q.areEqual(d,[3,1,2]);if(h.length===2||p||m){o=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let g=16;return l=y=>{let _=K("a",n,o.length),$=ae("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...le(o,s)]}},getShaderSource:l}}return l=g=>{let y=K("a",n,o.length),_=ae("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}

  ${Tu(i,r,y,_)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...le(o,s)]}},getShaderSource:l}},ku=(e,t)=>{Su(e.inputs,t.perm),e.compute(ut(e.inputs[0],t.perm))},Cu=e=>Ce({perm:e.perm})}),Au,Ru,zu,Ou,Nu,Bu,Pu,Du,Uu,Lu,yt,Fu,Gu,Wu,qu,Vu,Hu,ju,Ku,Yu,Xu,E0=J(()=>{pe(),fe(),me(),ea(),Yt(),Au={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ru={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},zu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ou={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Nu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Bu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Pu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Du=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Uu=(e,t)=>{let n=[];if(!Du(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Lu=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=q.size(a),l=q.size(o),h=K("_A",n[0].dataType,s),d=ae("output",i,a),p=64;u===1&&(p=256);let m=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,d)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${zu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Au[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ru[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Ou[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},yt=(e,t,n,r)=>{let i=e.inputs.length===1?n:Ji(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=Uu(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ut(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Nu(s.length,u.dims.length));let[h,d]=Bu(u.dims,s),p=h;i.keepDims&&(p=Pu(h,o)),e.compute(Lu(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},Fu=(e,t)=>{yt(e,"ReduceMeanShared",t,"mean")},Gu=(e,t)=>{yt(e,"ReduceL1Shared",t,"l1")},Wu=(e,t)=>{yt(e,"ReduceL2Shared",t,"l2")},qu=(e,t)=>{yt(e,"ReduceLogSumExpShared",t,"logSumExp")},Vu=(e,t)=>{yt(e,"ReduceMaxShared",t,"max")},Hu=(e,t)=>{yt(e,"ReduceMinShared",t,"min")},ju=(e,t)=>{yt(e,"ReduceProdShared",t,"prod")},Ku=(e,t)=>{yt(e,"ReduceSumShared",t,"sum")},Yu=(e,t)=>{yt(e,"ReduceSumSquareShared",t,"sumSquare")},Xu=(e,t)=>{yt(e,"ReduceLogSumShared",t,"logSum")}}),wt,Zu,Br,Ji,_t,Qu,Ju,el,tl,nl,rl,il,al,ol,sl,bt,ul,ll,cl,dl,hl,pl,fl,ml,gl,yl,ea=J(()=>{pe(),fe(),qe(),me(),E0(),wt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Br=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,d=q.normalizeAxes(i,h),p=!s&&d.length===0;l.forEach((y,_)=>{p||d.indexOf(_)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let _=[],$=K("_A",n[0].dataType,h),x=ae("output",a,m),M=r($,x,d),S=M[2];for(let T=0,k=0;T<h;T++)p||d.indexOf(T)>=0?(o&&k++,S=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
                  ${M[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${$.indicesSet("input_indices",T,`j${T}`)}
                  ${S}
                }`):(_.push(`${$.indicesSet("input_indices",T,x.indicesGet("output_indices",k))};`),k++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${S}
          ${M[3]}
          ${M.length===4?x.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...le(l,u)]})}},Ji=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ce({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},_t=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Ji(i,n);e.compute(Br(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Zu:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Qu=(e,t)=>{wt(e.inputs),_t(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Ju=(e,t)=>{wt(e.inputs),_t(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},el=(e,t)=>{wt(e.inputs),_t(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},tl=(e,t)=>{wt(e.inputs),_t(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},nl=(e,t)=>{wt(e.inputs),_t(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},rl=(e,t)=>{wt(e.inputs),_t(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},il=(e,t)=>{wt(e.inputs),_t(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},al=(e,t)=>{wt(e.inputs),_t(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},ol=(e,t)=>{wt(e.inputs),_t(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},sl=(e,t)=>{wt(e.inputs),_t(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},bt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},ul=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rl(e,t):Fu(e,t)},ll=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ju(e,t):Gu(e,t)},cl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?el(e,t):Wu(e,t)},dl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tl(e,t):qu(e,t)},hl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nl(e,t):Vu(e,t)},pl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?il(e,t):Hu(e,t)},fl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?al(e,t):ju(e,t)},ml=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ol(e,t):Ku(e,t)},gl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):Yu(e,t)},yl=(e,t)=>{bt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qu(e,t):Xu(e,t)}}),ta,wl,_l,na,k0=J(()=>{pe(),qe(),ea(),ta=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},wl=(e,t)=>{ta(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Br("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},_l=(e,t)=>{ta(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Br("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},na=e=>Ce(e)}),bl,Pr,$l,xl,vl,nr,Sl,Ml,ra=J(()=>{pe(),fe(),Hi(),me(),bl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let _=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:d,vHiddenSize:m,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Pr=(e,t,n)=>t&&e?`
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
    `,$l=(e,t,n,r,i,a,o,s)=>{let u=Fe(o?1:a),l=64,h=a/u;h<l&&(l=32);let d=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:d}],m=Ye(e.dataType,u),g=tt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let _=$=>{let x=ae("x",e.dataType,e.dims,u),M=[x],S=o?K("seq_lens",o.dataType,o.dims):void 0;S&&M.push(S);let T=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let k=tt(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(E).declareVariables(...M)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Pr(S,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${x.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:_,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},xl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=d?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,_=Fe(a.headSize),$=a.headSize/_,x=12,M={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],T=d&&r&&q.size(r.dims)>0,k=["type","type"];T&&k.push("type"),i&&k.push("type"),s&&k.push("type"),u&&k.push("type");let E=[{dims:h,dataType:t.dataType,gpuDataType:0}];d&&E.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=C=>{let N=K("q",t.dataType,t.dims,_),Y=K("key",n.dataType,n.dims,_),U=[N,Y];if(T){let O=K("past_key",r.dataType,r.dims,_);U.push(O)}i&&U.push(K("attention_bias",i.dataType,i.dims));let V=s?K("seq_lens",s.dataType,s.dims):void 0;V&&U.push(V);let R=u?K("total_sequence_length_input",u.dataType,u.dims):void 0;R&&U.push(R);let G=ae("output",t.dataType,h),z=[G];d&&z.push(ae("present_key",t.dataType,m,_));let P=tt(1,_),X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${C.registerUniforms(X).declareVariables(...U,...z)}
  ${C.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Pr(V,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${P}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${P}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${G.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${_};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:E,dispatchGroup:M,programUniforms:S}),getShaderSource:v}},vl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=d?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,_={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),s&&M.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];d&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=k=>{let E=K("probs",t.dataType,t.dims),v=K("v",n.dataType,n.dims),C=[E,v];x&&C.push(K("past_value",r.dataType,r.dims));let N=o?K("seq_lens",o.dataType,o.dims):void 0;o&&C.push(N);let Y=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;s&&C.push(Y);let U=[ae("output",t.dataType,g)];d&&U.push(ae("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${k.registerUniforms(V).declareVariables(...C,...U)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Pr(N,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:S,dispatchGroup:_,programUniforms:$}),getShaderSource:T}},nr=(e,t,n,r,i,a,o,s,u,l,h=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=p>1?o:void 0,g=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,_=y+l.kvSequenceLength,$=u&&q.size(u.dims)>0?u:void 0,x=[t,n];m&&q.size(m.dims)>0&&x.push(m),$&&x.push($),h&&x.push(h),d&&x.push(d);let M=e.compute(xl(p,t,n,m,$,l,y,h,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute($l(M,l.batchSize,l.numHeads,y,l.sequenceLength,_,h,d),{inputs:h&&d?[M,h,d]:[M],outputs:[]});let S=[M,r];g&&q.size(g.dims)>0&&S.push(g),h&&S.push(h),d&&S.push(d),e.compute(vl(p,M,r,g,l,y,h,d),{inputs:S,outputs:p>1?[0,2]:[0]})},Sl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=d=>{let p=ae("output_q",u[0].dataType,n),m=ae("output_k",u[0].dataType,n),g=ae("output_v",u[0].dataType,n),y=K("input",u[0].dataType,u[0].dims),_=K("weight",u[1].dataType,u[1].dims),$=K("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${d.registerUniforms(M).declareVariables(y,_,$,p,m,g)}
  ${d.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Ml=(e,t)=>{let n=bl(e.inputs,t),[r,i,a]=Sl(e,n);return nr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Tl,Il,El,kl,C0=J(()=>{ct(),pe(),fe(),qe(),me(),Tl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Il=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Fe(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=q.size(a)/o,l=r,h=l?a.length:a,d=K("x",e[0].dataType,e[0].dims,o),p=K("scale",e[1].dataType,e[1].dims,s),m=K("bias",e[2].dataType,e[2].dims,s),g=K("inputMean",e[3].dataType,e[3].dims,s),y=K("inputVar",e[4].dataType,e[4].dims,s),_=ae("y",e[0].dataType,h,o),$=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${_.indicesSet("outputIndices","0","0")}
            let cOffset = ${_.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)M+=`cIndices[${S}] = outputIndices[${S}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,m,g,y,_)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
    ${$()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${_.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...le(a)]:[{type:12,data:u}]})}},El=e=>Ce(e),kl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=El({...t,outputCount:r});if(Ne.webgpu.validateInputContent&&Tl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Il(n,i))}}),Cl,Al,Rl,A0=J(()=>{fe(),me(),Cl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Al=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=K("input",i,t,4),o=K("bias",i,[n],4),s=K("residual",i,t,4),u=ae("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Rl=e=>{Cl(e.inputs),e.compute(Al(e.inputs))}}),zl,Ee,Ol,Nl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Wl,ql,Vl,Hl,jl,rr,Kl,Dr,Yl,Xl,Zl,Ql,Jl,ec,tc,nc,rc,ic,ac,oc,sc,uc,lc,cc,ia,dc,aa,oa,hc,pc,fc,mc,gc,yc,sa=J(()=>{pe(),fe(),qe(),me(),zl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=K("inputData",n,[s],4),h=ae("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Ee=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>zl(l,q.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},Ol=e=>{e.compute(Ee(e.inputs[0],"Abs","abs"))},Nl=e=>{e.compute(Ee(e.inputs[0],"Acos","acos"))},Bl=e=>{e.compute(Ee(e.inputs[0],"Acosh","acosh"))},Pl=e=>{e.compute(Ee(e.inputs[0],"Asin","asin"))},Dl=e=>{e.compute(Ee(e.inputs[0],"Asinh","asinh"))},Ul=e=>{e.compute(Ee(e.inputs[0],"Atan","atan"))},Ll=e=>{e.compute(Ee(e.inputs[0],"Atanh","atanh"))},Fl=e=>Ce(e),Gl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ee(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Wl=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ce({min:t,max:n})},ql=(e,t)=>{let n=t||Wl(e.inputs),r=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Vl=e=>{e.compute(Ee(e.inputs[0],"Ceil","ceil"))},Hl=e=>{e.compute(Ee(e.inputs[0],"Cos","cos"))},jl=e=>{e.compute(Ee(e.inputs[0],"Cosh","cosh"))},rr=e=>Ce(e),Kl=(e,t)=>{let n=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dr=(e="f32")=>`
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
}`,Yl=e=>{let t=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Dr(t)))},Xl=e=>{e.compute(Ee(e.inputs[0],"Exp","exp"))},Zl=e=>{e.compute(Ee(e.inputs[0],"Floor","floor"))},Ql=e=>{let t=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Dr(t)))},Jl=(e,t)=>{let n=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},ec=e=>{e.compute(Ee(e.inputs[0],"Not",t=>`!${t}`))},tc=e=>{e.compute(Ee(e.inputs[0],"Neg",t=>`-${t}`))},nc=e=>{e.compute(Ee(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},rc=e=>{let t=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},ic=e=>{e.compute(Ee(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},ac=e=>Ce(e),oc=(e,t)=>{let n=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},sc=e=>{e.compute(Ee(e.inputs[0],"Sin","sin"))},uc=e=>{e.compute(Ee(e.inputs[0],"Sinh","sinh"))},lc=e=>{e.compute(Ee(e.inputs[0],"Sqrt","sqrt"))},cc=e=>{e.compute(Ee(e.inputs[0],"Tan","tan"))},ia=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,dc=e=>{e.compute(Ee(e.inputs[0],"Tanh",ia))},aa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ia("v")};
}
`,oa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,hc=e=>{let t=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"FastGelu",oa,aa(t),void 0,e.inputs[0].dataType))},pc=(e,t)=>{let n=tt(e.inputs[0].dataType);return e.compute(Ee(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},fc=e=>{e.compute(Ee(e.inputs[0],"Log","log"))},mc=(e,t)=>`
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
`,gc=e=>`quick_gelu_impl(${e})`,yc=(e,t)=>{let n=tt(e.inputs[0].dataType);e.compute(Ee(e.inputs[0],"QuickGelu",gc,mc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),wc,_c,bc,R0=J(()=>{fe(),me(),sa(),wc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_c=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=K("input",e[0].dataType,e[0].dims,4),r=K("bias",e[0].dataType,[e[0].dims[2]],4),i=ae("output",e[0].dataType,t,4),a=q.size(t)/4,o=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Dr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},bc=e=>{wc(e.inputs),e.compute(_c(e.inputs))}}),$c,xc,$t,vc,Sc,Mc,Tc,Ic,Ec,kc,Cc,Ac,Rc,z0=J(()=>{pe(),fe(),me(),$c=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p,m;typeof s=="string"?p=m=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=m=s:(p=s.scalar,m=s.vector);let g=ae("outputData",h,r.length,4),y=K("aData",u,t.length,4),_=K("bData",l,n.length,4),$;if(i)if(a){let x=q.size(t)===1,M=q.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;x||M?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(o||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||T?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),_.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,S,T="")=>{let k=`aData[indexA${S}][componentA${S}]`,E=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${M}[${S}] = ${T}(${p(k,E)});
          `};h===9?$=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,_,g)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},xc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),h=s,d=q.size(s),p=!1,m=!1,g=[l];if(l){let y=zn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),d=q.size(h);let _=q.size(s)===1,$=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;g.push(_),g.push($),g.push(x),g.push(M);let S=1;for(let T=1;T<h.length;T++){let k=s[s.length-T],E=u[u.length-T];if(k===E)S*=k;else break}S%4===0?(m=!0,p=!0):(_||$||x||M)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>$c(y,s,u,h,p,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(h)/4)},...le(s,u,h)]})}},$t=(e,t,n,r,i,a)=>{e.compute(xc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},vc=e=>{$t(e,"Add",(t,n)=>`${t}+${n}`)},Sc=e=>{$t(e,"Div",(t,n)=>`${t}/${n}`)},Mc=e=>{$t(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Tc=e=>{$t(e,"Mul",(t,n)=>`${t}*${n}`)},Ic=e=>{let t=K("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;$t(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Ec=e=>{$t(e,"Sub",(t,n)=>`${t}-${n}`)},kc=e=>{$t(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Cc=e=>{$t(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Ac=e=>{$t(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Rc=e=>{$t(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),zc,Oc,Nc,Bc,Pc,Dc,O0=J(()=>{pe(),fe(),qe(),me(),zc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Oc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Nc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Bc=(e,t,n,r)=>{let i=q.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=K(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...le(e[y].dims));h.push(...le(n));let d=ae("output",r,n.length),p=d.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let _=0;_<e.length;_++)y.registerUniform(`sizeInConcatAxis${_}`,"u32");return y.declareVariables(...o,d)})()}

  ${Oc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Nc(o,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},Pc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);zc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>q.size(s.dims)>0);e.compute(Bc(o,i,a,n[0].dataType),{inputs:o})},Dc=e=>Ce({axis:e.axis})}),mn,gn,yn,ua,wn=J(()=>{pe(),fe(),mn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},gn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},yn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ua=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[su,uu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ze,Uc,la=J(()=>{Ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Uc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Lc,N0=J(()=>{Lc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ir,ca,da=J(()=>{pe(),fe(),me(),wn(),ir=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${oe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,oe(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},ca=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],d=Fe(l),p=Fe(h),m=Fe(u),g=q.size(n)/d/m,y=e.length>2,_=r?r.slice(0,-2):n.slice(0,-2),$=[q.size(_),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];gn(t,x),x.push(...le(_,o,s)),y&&x.push(...le(e[2].dims)),x.push(...le($));let M=S=>{let T=Zi("batch_dims",e[0].dataType,_.length),k=K("a",e[0].dataType,o.length,p),E=K("b",e[1].dataType,s.length,d),v=ae("output",e[0].dataType,$.length,d),C=Ye(v.type.tensor),N=mn(t,v.type.value,C),Y=[k,E],U="";if(y){let G=i?d:1;Y.push(K("bias",e[2].dataType,e[2].dims.length,G)),U=`${i?`value += bias[col / ${G}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];yn(t,V);let R=()=>{let G=`var a_data: ${k.type.value};`;for(let z=0;z<p;z++)G+=`
              let b_data${z} = b[(b_offset + (k + ${z}) * uniforms.N + col) / ${d}];`;for(let z=0;z<m;z++){G+=`a_data = a[(a_offset + (row + ${z}) * uniforms.K + k) / ${p}];`;for(let P=0;P<p;P++)G+=`
            values[${z}] = fma(${E.type.value}(a_data${p===1?"":`[${P}]`}), b_data${P}, values[${z}]);
`}return G};return`
  ${S.registerUniforms(V).registerInternalVariables(T).declareVariables(...Y,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${ir("a_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${ir("b_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${R()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${U}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:M}}}),Fc,Gc,ha,pa,Wc,fa,qc,Ur,ma=J(()=>{pe(),fe(),me(),wn(),da(),la(),Fc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Gc=(e,t)=>e?`
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
        }`,ha=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,d=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${h/p}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
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
  let batch = ${o?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Fc(i,r)}
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
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Gc(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},pa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Wc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",fa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],d=i?l:a,p=i?a:l;if(!(p%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=d/t[0],y=a/t[1],_=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${pa(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
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
      ${pa(i,r)}
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
      ${Wc(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${h}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${_}
  }
`},qc=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ye(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ze(e,l)} {
      var value = ${Ze(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ir("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ze(e,l)} {
      var value = ${Ze(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${ir("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ze(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ze(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ur=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),d=q.size(h),p=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,_=p<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/_[0]),Math.ceil(p/$[1]/_[1]),Math.ceil(d/$[2]/_[2])],M=y?4:1,S=[...u,p,m/M],T=S.length,k=[...l,m,g/M],E=k.length,v=[d,p,g/M],C=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];gn(t,C),C.push(...le(h,S,k));let N=["rank","rank"],Y=e.length>2;Y&&(C.push(...le(e[2].dims)),N.push("rank")),C.push(...le(v));let U=V=>{let R=h.length,G=Zi("batchDims",e[0].dataType,R,1),z=Ye(e[0].dataType),P=K("a",e[0].dataType,T,M),X=K("b",e[1].dataType,E,M),O=ae("result",e[0].dataType,v.length,M),Z=[P,X];if(Y){let ne=i?M:1;Z.push(K("bias",e[2].dataType,e[2].dims.length,ne))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];yn(t,D);let H=Ye(O.type.tensor),F=mn(t,O.type.value,H),W=qc(M,Y,F,[G,P,X,O],i);return`
  ${V.registerUniforms(D).registerInternalVariables(G).declareVariables(...Z,O)}
  ${W}
  ${y?ha(_,$,z,G):fa(_,$,z,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${_};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:C}),getShaderSource:U}}}),Vc,Hc,B0=J(()=>{pe(),Pt(),me(),wn(),la(),N0(),ma(),Vc=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},d=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=e?"row":"col",$=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${_} / outWidth;
    let outCol = ${_} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ze(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(o)}
    }
    return resData;`,M=e?t&&r?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Ze(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Ze(o,l)}(0.0);`,S=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Ze(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Ze(s,l)}(0.0);`,T=Ze(u,l),k=Ze(e?o:s,l),E=Ze(e?s:o,l),v=mn(a,T,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?M:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Uc(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Hc=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,_=l?g:p*m,$=l?p*m:g,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(_/x[0]/M[0]),Math.ceil($/x[1]/M[1]),Math.ceil(d/x[2]/M[2])];Se("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=y?l&&h%4!==0?3:4:1,k=x[1]*M[1],E=x[0]*M[0],v=Math.max(x[0]*T,x[1]),C=r%k===0,N=i%E===0,Y=a%v===0,U=y?[T,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];gn(t,V),V.push(...le(e[0].dims,e[1].dims));let R=["rank","rank"];o&&(V.push(...le(e[2].dims)),R.push("rank")),V.push(...le(n));let G=z=>{let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];yn(t,P);let X=y?4:1,O=Ye(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${O}>`:O}) {
        result[flatIndex] = ${y?`vec4<${O}>`:O}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${O}>`:O}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,D=K("x",e[0].dataType,e[0].dims.length,T===3?1:T),H=K("w",e[1].dataType,e[1].dims.length,X),F=[D,H],W=ae("result",e[0].dataType,n.length,X);if(o){let ne=K("bias",e[2].dataType,e[2].dims.length,X);F.push(ne),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${O}>`:O} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Lc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${z.registerUniforms(P).declareVariables(...F,W)}
        ${Z}
        ${Vc(l,C,N,Y,o,t,U[0],U[1],U[2],O)}
        ${y?ha(M,x,O,void 0,!l,v):fa(M,x,O,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${C};${N};${Y};${k};${E};${v}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:G}}}),jc,ga,ar,Kc,ya,Yc,Xc,Zc,P0=J(()=>{pe(),Pt(),fe(),me(),wn(),la(),jc=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},ga=e=>typeof e=="number"?[e,e,e]:e,ar=(e,t)=>t<=1?e:e+(e-1)*(t-1),Kc=(e,t,n,r=1)=>{let i=ar(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ya=(e,t,n,r,i)=>{i==null&&(i=Kc(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},Yc=(e,t,n,r,i,a,o,s,u,l)=>{let h,d,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=ya([t,n,r,1],[s,u,l],1,[i,a,o],e);d=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,_,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=ya([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);d=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let g=(d-1)*i+s-t,y=(p-1)*a+u-n,_=(m-1)*o+l-r,$=Math.floor(g/2),x=g-$,M=Math.floor(y/2),S=y-M,T=Math.floor(_/2),k=_-T;h={top:M,bottom:S,left:T,right:k,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:m}},Xc=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,d;if(o==="channelsLast")[s,u,l,h,d]=e;else if(o==="channelsFirst")[s,d,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,m,g,y]=t,[_,$,x]=ga(n),[M,S,T]=ga(r),k=ar(m,M),E=ar(g,S),v=ar(y,T),{padInfo:C,outDepth:N,outHeight:Y,outWidth:U}=Yc(i,u,l,h,_,$,x,k,E,v),V=a?p*d:p,R=[0,0,0,0,0];return o==="channelsFirst"?R=[s,V,N,Y,U]:o==="channelsLast"&&(R=[s,N,Y,U,V]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:d,outDepth:N,outHeight:Y,outWidth:U,outChannels:V,padInfo:C,strideDepth:_,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationDepth:M,dilationHeight:S,dilationWidth:T,inShape:e,outShape:R,filterShape:t}},Zc=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((_,$)=>$)},l=[Math.ceil(jc(u.x.map(_=>n[_]))/s[0]),1,1];Se("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,d=q.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];gn(t,p),p.push(...le(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...le(e[2].dims)),m.push("rank")),p.push(...le(n));let y=_=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];yn(t,$);let x=1,M=Ye(e[0].dataType),S=K("x",e[0].dataType,e[0].dims.length,h),T=K("W",e[1].dataType,e[1].dims.length,x),k=[S,T],E=ae("result",e[0].dataType,n.length,x),v="";if(g){let Y=K("bias",e[2].dataType,e[2].dims.length,x);k.push(Y),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?oe("coords",4,5):oe("coords",1,5)}];
        }`}let C=Ze(h,M),N=mn(t,C,M);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${_.registerUniforms($).declareVariables(...k,E)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${oe("coords",0,S.rank)};
              let d2 = ${o?oe("coords",S.rank-1,S.rank):oe("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${o?oe("coords",1,S.rank):oe("coords",2,S.rank)},
              ${o?oe("coords",2,S.rank):oe("coords",3,S.rank)},
              ${o?oe("coords",3,S.rank):oe("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?oe("uniforms.x_shape",1,S.rank):oe("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${o?oe("uniforms.x_shape",2,S.rank):oe("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${o?oe("uniforms.x_shape",3,S.rank):oe("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${o?oe("uniforms.x_shape",4,S.rank):oe("uniforms.x_shape",1,S.rank)};
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
                      ${o?`let xValues = vec4<f32>(
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
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
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
                      ${o?`let xValues = vec3<f32>(
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Qc,Jc,D0=J(()=>{pe(),fe(),me(),wn(),Qc=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,d=u&&h>=4?Fe(l):1,p=q.size(n)/d,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];gn(t,m),m.push(...le(o,[s[0],s[1],s[2],s[3]/d]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...le([n[0],n[1],n[2],n[3]/d]));let y=_=>{let $=ae("output",e[0].dataType,n.length,d),x=Ye($.type.tensor),M=mn(t,$.type.value,x),S=K("x",e[0].dataType,o.length),T=K("w",e[1].dataType,s.length,d),k=[S,T];i&&k.push(K("b",e[2].dataType,e[2].dims,d));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];yn(t,E);let v=u?`
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
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${_.registerUniforms(E).declareVariables(...k,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${a}
    ${M}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},Jc=(e,t,n,r)=>{let i=e.length>2,a=Fe(n[3]),o=Fe(n[2]),s=q.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];gn(t,d),d.push(...le(u,l,h));let p=(o-1)*t.strides[1]+l[1],m=g=>{let y=ae("output",e[0].dataType,h.length,a),_=Ye(y.type.tensor),$=mn(t,y.type.value,_),x=K("x",e[0].dataType,u.length,a),M=K("w",e[1].dataType,l.length,a),S=[x,M];i&&S.push(K("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return yn(t,k),`
  ${g.registerUniforms(k).declareVariables(...S,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${o}>;
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
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${T}
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:m}}}),ed,Lr,td,Fr,wa,_a,nd,rd,ba,U0=J(()=>{fe(),B0(),P0(),ma(),D0(),wn(),da(),Yt(),ed=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),d=s.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Lr=[2,3,1,0],td=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Rr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},wa=e=>{let t=ua(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},_a=(e,t,n,r)=>{let i=n.format==="NHWC",a=ed(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(ut(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),k.push(E)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Jc(k,n,a,r),{inputs:k}):e.compute(Qc(k,n,a,r),{inputs:k});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],d=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],E,v,C,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(ut(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let R=s*u*l;E=t[0].reshape([1,k,R]),v=V.reshape([1,R,g]),C=[1,k,g]}else E=t[0].reshape([k,s*u,l]),v=V.reshape([1,l,g]),C=[k,p*m,g];N.push(E),N.push(v)}else E=t[0].reshape([k,l,s*u]),v=t[1].reshape([1,g,l]),C=[k,g,p*m],N.push(v),N.push(E);o&&N.push(t[2]);let Y=C[2],U=N[0].dims[N[0].dims.length-1];Y<8&&U<8?e.compute(ca(N,n,a,C,i,r),{inputs:N}):e.compute(Ur(N,n,a,C,i,r),{inputs:N});return}let _=!0,$=e.kernelCustomData.wT??e.compute(ut(t[1],Lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];o&&x.push(t[2]);let M=i?p*m:g,S=i?g:p*m,T=h*d*l;e.compute(Hc(x,n,a,M,S,T,o,_,r),{inputs:x})},nd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Fr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);_a(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},rd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Fr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=Xc(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Zc(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},ba=(e,t)=>{if(td(e.inputs,t),e.inputs[0].dims.length===3)nd(e,t);else if(e.inputs[0].dims.length===5)rd(e,e.inputs,t);else{let n=Fr(t,e.inputs);_a(e,e.inputs,n)}}}),id,L0=J(()=>{pe(),Pt(),fe(),me(),id=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?Fe(u):1,d=a&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?Fe(l):1,y=a?l===1?h:g:1,_=q.size(i)/g,$=[Math.ceil(_/64),1,1];Se("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],E=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:_},{type:12,data:M},{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:6,data:E},{type:12,data:p},{type:12,data:u},{type:12,data:l},...le(e[0].dims,e[1].dims)];r&&(v.push(...le(e[2].dims)),x.push("rank")),v.push(...le(i));let C=N=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=Ye(e[0].dataType),V=a?1:2,R=a?2:3,G=a?3:1,z=K("W",e[1].dataType,e[1].dims.length,y),P=K("Dy",e[0].dataType,e[0].dims.length,h),X=[P,z];r&&X.push(K("bias",e[2].dataType,[i[G]].length,g));let O=ae("result",e[0].dataType,i.length,g),Z=()=>{let F="";if(d)h===4?F+=`
        let xValue = ${P.getByOffset("x_offset")};
        let wValue = ${z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?F+=`
          dotProd = dotProd + dot(vec4<${U}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}), vec4<${U}>(${z.getByOffset("w_offset")}, ${z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(F+=`
          dotProd = dotProd + dot(vec4<${U}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}, ${P.getByOffset("x_offset + 2u")}, ${P.getByOffset("x_offset + 3u")}), vec4<${U}>(${z.getByOffset("w_offset")}, ${z.getByOffset("w_offset + 1u")}, ${z.getByOffset("w_offset + 2u")}, ${z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(F+=`
                  let xValue = ${a?P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):P.get("batch","inputChannel","idyR","idyC")};
        `,h===1)F+=`
          let w_offset = ${z.indicesToOffset(`${z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${z.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<h;W++)F+=`
            let wValue${W} = ${z.getByOffset(`${z.indicesToOffset(`${z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return F},D=()=>{if(m===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let F="";if(h===1){F+="dotProd = dotProd";for(let W=0;W<m;W++)F+=`
            + ${P.getByOffset(`x_offset + ${W}`)} * ${z.getByOffset(`w_offset + ${W}`)}`;F+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);F+=`
          let xValue = ${P.getByOffset("x_offset")};
          let wValue = ${z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return F},H=`
            let outputIndices = ${O.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${O.indicesGet("outputIndices",0)};
            let d1 = ${O.indicesGet("outputIndices",G)};
            let r = ${O.indicesGet("outputIndices",V)};
            let c = ${O.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${O.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${U}(dyCCorner) + ${U}(wC)) / ${U}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${z.indicesToOffset(`${z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:h}) {
                  ${Z()}
                  inputChannel = inputChannel + ${d?4:h};
                }
                ${D()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${O.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(Y).declareVariables(...X,O)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${d}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:C}}}),ad,od,sd,$a,ud,ld,xa,cd,dd,F0=J(()=>{L0(),wn(),Yt(),ad=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,od=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},sd=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,d=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-h-(s?1:0);g<h;++g,++y){let _=e[y],$=d?_*o[g]:l[g],x=ad(_,o[g],a[g],t[y],n[g],$);od(x,r,a,g,g+h),d&&l.push(o[g]*(_-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(s?3:1,0,m)},$a=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}sd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},ud=e=>{let t=ua(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},ld=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},xa=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ut(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(id(a,n,r),{inputs:a})},cd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=$a({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);xa(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},dd=(e,t)=>{if(ld(e.inputs,t),e.inputs[0].dims.length===3)cd(e,t);else{let n=$a(t,e.inputs);xa(e,e.inputs,n)}}}),hd,pd,fd,G0=J(()=>{pe(),fe(),qe(),me(),hd=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=K("input",e,a),s=ae("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,a),h=d=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=oe("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...le(t,t)]}),getShaderSource:h}},pd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(hd(r,n,i,t),{inputs:[0]})},fd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ce({exclusive:t,reverse:n})}}),md,gd,yd,wd,_d,W0=J(()=>{pe(),fe(),qe(),me(),md=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},gd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},yd=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),p=d.dims.length,m=e.dataType,g=K("a",m,p),y=ae("output",m,p),_=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${gd(s,p,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=q.size(x),S=d.dims,T=q.sortBasedOnPerm(S,s);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...le(S,T)]}},getShaderSource:_}},wd=(e,t)=>{md(e.inputs),e.compute(yd(e.inputs[0],t))},_d=e=>Ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Gr,or,va,bd,$d,xd,vd,Sa,Sd,Md,Td,q0=J(()=>{pe(),fe(),qe(),me(),Gr="[a-zA-Z]|\\.\\.\\.",or="("+Gr+")+",va="^"+or+"$",bd="("+or+",)*"+or,$d="^"+bd+"$",xd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},vd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp($d)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(va)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(or)))throw new Error("Invalid RHS");(i=r.match(RegExp(Gr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(va))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Gr,"g")),l=new xd(r);return u==null||u.forEach((h,d)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,d+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(h,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Sa=e=>e+"_max",Sd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>K(`input${h}`,t,l)),a=q.size(r),o=ae("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],d="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],_=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,T)=>{var k;if(n.rhs.symbolToIndices.has(T)){let E=(k=n.rhs.symbolToIndices.get(T))==null?void 0:k[0];E!==void 0&&n.lhs.forEach((v,C)=>{if(S.inputIndices.includes(C)){let N=v.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(Y=>{h.push(`${i[C].indicesSet(`input${C}Indices`,Y,o.indicesGet("outputIndices",E))}`)})}})}else n.lhs.forEach((E,v)=>{if(S.inputIndices.includes(v)){let C=E.symbolToIndices.get(T);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${T}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Sa(T)}; ${T}++) {`),_.push("}")});let M=x?[...h,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...g,d,...$,m,..._];return`
            ${l.registerUniforms(s.map(S=>({name:`${Sa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((d,p)=>[...le(d)]).reduce((d,p)=>d.concat(p),l);return h.push(...le(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Md=(e,t)=>{let n=new vd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Sd(i,e.inputs[0].dataType,n,r))},Td=e=>{let t=e.equation.replace(/\s+/g,"");return Ce({equation:t})}}),Id,Ma,Ed,kd,Cd,V0=J(()=>{pe(),fe(),me(),Id=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ma=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Ed=(e,t)=>e.length>t.length?Ma(e,t):Ma(t,e),kd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Ed(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=d=>{let p=K("input",i,t.length,o),m=ae("output",i,r.length,s),g;if(i===9){let y=(_,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${p.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${_}[${$}] = ${x}(${p.getByOffset(`index${$}`)}[component${$}]);
        `;g=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${p.getByOffset(`inputOffset / ${o}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(p,m)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},h=[{type:12,data:u},...le(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Cd=e=>{Id(e.inputs),e.compute(kd(e.inputs),{inputs:[0]})}}),Ad,Rd,H0=J(()=>{pe(),fe(),me(),sa(),Ad=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,a=o=>{let s=K("x",t,[1],4),u=K("bias",t,[1],4),l=ae("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${aa(tt(t))}

    ${o.mainStart(On)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",oa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/On/4)}})}},Rd=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?hc(e):e.compute(Ad(e.inputs))}}),zd,Od,Nd,Bd,j0=J(()=>{pe(),fe(),qe(),me(),zd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Od=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...le(e[0].dims,e[1].dims,o)],d=p=>{let m=K("data",e[0].dataType,e[0].dims.length,u),g=K("inputIndices",e[1].dataType,e[1].dims.length),y=ae("output",e[0].dataType,o.length,u),_=x=>{let M=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let T=0;T<M;T++)S+=`${M>1?`indicesIndices${x}[${T}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${T}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let T=0,k=0;T<i;T++)T===a?(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = u32(idx${x});`,k+=M):(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${k}]`:`outputIndices${x}`};`,k++);return S},$;if(e[0].dataType===9){let x=(M,S,T="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${_(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${M}[${S}] = ${T}(${m.getByOffset(`index${S}`)}[component${S}]);
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
      ${_("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:d}},Nd=e=>Ce({axis:e.axis}),Bd=(e,t)=>{let n=e.inputs;zd(n),e.compute(Od(e.inputs,t))}}),Pd,Dd,Ud,K0=J(()=>{pe(),fe(),me(),Pd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...le(t.dims,h));let d=p=>{let m=K("indices_data",t.dataType,t.dims.length),g=ae("input_slice_offsets_data",12,1,1),y=[m,g],_=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(...y)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},Dd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),u=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),h=q.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(o),m=u;for(let S=0;S<o;++S)p[o-1-S]=m,m*=r[t.batchDims+o-1-S];let g=Pd(e,n[1],p,t.batchDims,r,s,d,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let _=a.slice(0,-1).concat(r.slice(y)),$=q.size(_),x=[{type:12,data:$},{type:12,data:u},...le(n[0].dims,g.dims,_)],M=S=>{let T=K("data",n[0].dataType,n[0].dims.length),k=K("slice_offsets",12,g.dims.length),E=ae("output",n[0].dataType,_.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,k,E)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:_,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],g]})},Ud=e=>({batchDims:e.batch_dims,cacheKey:""})}),Ld,Fd,Gd,Wd,Y0=J(()=>{pe(),fe(),qe(),me(),Ld=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Fd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=q.size(s),l=e[2].dataType,h=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...le(...e.map((m,g)=>m.dims),s)],p=m=>{let g=K("data",e[0].dataType,e[0].dims.length),y=K("inputIndices",e[1].dataType,e[1].dims.length),_=K("scales",e[2].dataType,e[2].dims.length),$=e.length>3?K("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ae("output",l,s.length),M=[g,y,_];$&&M.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...M,x)}
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
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},Gd=(e,t)=>{let n=e.inputs;Ld(n,t),e.compute(Fd(e.inputs,t))},Wd=e=>Ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),qd,Vd,Hd,jd,X0=J(()=>{pe(),fe(),qe(),me(),qd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Vd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=q.size(l),d=K("input",r,i),p=K("indicesInput",o,a.length),m=ae("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return g.push(...le(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,p,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Hd=e=>Ce({axis:e.axis}),jd=(e,t)=>{let n=e.inputs;qd(n),e.compute(Vd(e.inputs,t))}}),Kd,Yd,Xd,Zd,Z0=J(()=>{pe(),fe(),me(),Kd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Yd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=ou.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),d=!0,p=q.size(s),m=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...le(e[2].dims)),g.push("rank")),m.push(...le(s));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",S=K("a",e[0].dataType,e[0].dims),T=K("b",e[1].dataType,e[1].dims),k=S.type.value,E=null,v=[S,T];e.length===3&&(E=K("c",e[2].dataType,e[2].dims.length),v.push(E));let C=ae("output",e[0].dataType,s.length);v.push(C);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(N).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${k}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},_=$=>{let x=K("a",e[0].dataType,e[0].dims),M=K("b",e[1].dataType,e[1].dims),S=null,T=[x,M];e.length===3&&(S=K("c",e[2].dataType,e[2].dims.length),T.push(S));let k=ae("output",e[0].dataType,s.length);T.push(k);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",C="";t.transA&&t.transB?(C=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(E).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
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
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:_}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},Xd=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Zd=(e,t)=>{Kd(e.inputs),e.compute(Yd(e.inputs,t))}}),Tt,Dt,_n,bn,Qd,Jd,eh,th,nh,rh,ih,ah,oh,sh,Q0=J(()=>{pe(),fe(),qe(),me(),[Tt,Dt,_n,bn]=[0,1,2,3],Qd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Jd=`
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
`,eh=e=>`
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
`,th=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,nh=e=>`
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
`,rh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Tt}] = batch;
     indices[${Dt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_n}] = u32(r);
            indices[${bn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${_n}] = u32(clamp(r, 0, H - 1));
          indices[${bn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_n}] = gs_reflect(r, border[1], border[3]);
          indices[${bn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ih=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Tt}], indices[${Dt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Tt}], indices[${Dt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Tt}], indices[${Dt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Tt}], indices[${Dt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Tt}], indices[${Dt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Tt}], indices[${Dt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ah=(e,t)=>{let n=K("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=K("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Tt,Dt,_n,bn]=[0,3,1,2]);let o=ae("output",e[0].dataType,a.length),s=n.type.value,u=q.size(a),l=[{type:12,data:u},...le(e[0].dims,r,a)],h=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${Jd}
  ${eh(s)}
  ${th(t)}
  ${nh(t)}
  ${rh(n,s,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_n}]);
      let W_in = i32(uniforms.x_shape[${bn}]);

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

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Tt}], indices[${_n}], indices[${bn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ih(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=q.size(a);return{outputs:[{dims:a,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},oh=(e,t)=>{Qd(e.inputs),e.compute(ah(e.inputs,t))},sh=e=>Ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),rt,uh,lh,Ta,ch,sr,dh,hh=J(()=>{pe(),fe(),qe(),Hi(),ra(),me(),Yt(),rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,uh=(e,t)=>{let n=e[0],r=rt(e,1),i=rt(e,2),a=rt(e,3),o=rt(e,4),s=rt(e,5),u=rt(e,6),l=rt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=d,g=0,y=0,_=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==_)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==_)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,M=0;if(o&&q.size(o.dims)>0){M=8;let E=o.dims;throw E.length===1?E[0]===h?M=1:E[0]===3*h+2&&(M=3):E.length===2&&E[0]===h&&E[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(o&&q.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:_,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:$}},lh=e=>Ce({...e}),Ta=Ce({perm:[0,2,1,3]}),ch=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=q.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=d=>{let p=ae("qkv_with_bias",t.dataType,s),m=K("qkv",t.dataType,s),g=K("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(m,g,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&q.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=ch(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ut(u,Ta.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ut(u,Ta.perm),{inputs:[u],outputs:[-1]})[0]},dh=(e,t)=>{let n=uh(e.inputs,t),r=e.inputs[0],i=rt(e.inputs,1),a=rt(e.inputs,2),o=rt(e.inputs,3),s=rt(e.inputs,4),u=rt(e.inputs,5),l=rt(e.inputs,6),h=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&a&&i.dims.length===4&&a.dims.length===4,p=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return nr(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);nr(e,p,m,g,s,void 0,l,h,u,n)}}),ph,fh,mh,gh,Ia,yh,wh,_h=J(()=>{pe(),fe(),qe(),me(),ph=e=>{if(!e||e.length<1)throw new Error("too few inputs")},fh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ce({numOutputs:r,axis:t.axis,splitSizes:n})},mh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${oe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,gh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ia=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=K("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],d=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){d+=t.splitSizes[g],u[g]=d;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),o[g]=ae(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...le(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${mh(u.length)}
  ${gh(o)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${oe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},yh=(e,t)=>{ph(e.inputs);let n=e.inputs.length===1?t:fh(e.inputs,t);e.compute(Ia(e.inputs,n),{inputs:[0]})},wh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ce({axis:t,numOutputs:r,splitSizes:n})}}),bh,Wr,$h,xh=J(()=>{pe(),fe(),qe(),me(),bh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Wr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],d=i===0?h*2:l/r,p=new Array(o,u,l/d,d-h),m=q.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...le(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=_=>{let $=K("input",e[0].dataType,e[0].dims.length),x=K("position_ids",e[1].dataType,e[1].dims.length),M=K("cos_cache",e[2].dataType,e[2].dims.length),S=K("sin_cache",e[3].dataType,e[3].dims.length),T=ae("output",e[0].dataType,e[0].dims.length);return _.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${_.declareVariables($,x,M,S,T)}

        ${_.mainStart(On)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",ae("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ce({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/On)},programUniforms:g})}},$h=(e,t)=>{bh(e.inputs,t),e.compute(Wr(e.inputs,t))}}),vh,Sh,Ea,Mh,Th,J0=J(()=>{qe(),pe(),ra(),hh(),_h(),Yt(),xh(),me(),vh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,_=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&_){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||_)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,M=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=T.dims.reduce((E,v)=>E*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let E=0;E<T.dims.length;E++)if(T.dims[E]!==1&&T.dims[E]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${E}] = ${T.dims[E]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:$}},Sh=Ce({perm:[0,2,1,3]}),Ea=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ut(r,Sh.perm),{inputs:[r],outputs:[-1]})[0]),r},Mh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let d=K("seq_lens",n.dataType,n.dims),p=K("total_seq_lens",r.dataType,r.dims),m=ae("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(g).declareVariables(d,p,m)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${d.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Th=(e,t)=>{var S;let n=vh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Ce({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(Ia([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,_;if(t.doRotary){let T=e.compute(Mh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],E=e.inputs[8],v=Ce({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[p,T,k,E],N=[-1];y=e.compute(Wr(C,v),{inputs:C,outputs:N})[0],C.splice(0,1,m);let Y=Ce({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});_=e.compute(Wr(C,Y),{inputs:C,outputs:N})[0]}let $=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Ea(e,t.doRotary?_:m,n),M=Ea(e,g,n);nr(e,$,x,M,void 0,void 0,o,s,void 0,n,u,l)}}),ka,Ih,Eh,kh,ey=J(()=>{pe(),fe(),Yt(),me(),ka=(e,t,n,r,i,a,o,s)=>{let u=Fe(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,d=i*o,p=64;d===1&&(p=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],_=[];_.push(...le(m,g));let $=x=>{let M=K("x",t.dataType,3,u),S=K("scale",n.dataType,n.dims),T=K("bias",r.dataType,r.dims),k=ae("output",1,3,2),E=[M,S,T,k];return`
  var<workgroup> workgroup_shared : array<${h}, ${p}>;
  const workgroup_size = ${p}u;
  ${x.declareVariables(...E)}
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
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Kt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Kt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:d},programUniforms:_}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Ih=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=q.sizeFromDimension(r,a),l=Fe(u),h=q.size(i)/l,d=ka(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],m=[o,s],g=["type","none"],y=_=>{let $=K("x",t[0].dataType,p.length,l),x=K("scale_shift",1,m.length,2),M=ae("output",t[0].dataType,p.length,l),S=[$,x,M];return`
  ${_.registerUniform("output_size","u32").declareVariables(...S)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...le(p,m,p)]}),getShaderSource:y},{inputs:[t[0],d]})},Eh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,u=Fe(o),l=q.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],d=["type","type"],p=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)p=p||r[$+1]!==1,m.push($+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(ut(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=ka(e,g,t[1],t[2],a,s,o,n.epsilon),_=$=>{let x=Ye(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,S=E=>{let v=E===0?"x":"y",C=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${C}(scale.${v}))`;case 2:return`vec2<${x}>(${C}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${C}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=K("input",t[0].dataType,t[0].dims,u),k=ae("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_},{inputs:[t[0],y]})},kh=(e,t)=>{t.format==="NHWC"?Eh(e,e.inputs,t):Ih(e,e.inputs,t)}}),Ch,Ah,Rh,ty=J(()=>{pe(),fe(),me(),Ch=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ah=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),h=q.sizeFromDimension(i,u),d=q.size(a.dims),p=o?q.size(o.dims):0;if(d!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let m=[];for(let T=0;T<i.length;++T)T<u?m.push(i[T]):m.push(1);let g=Fe(h),y=["type","type"],_=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];o&&y.push("type");let $=n>1,x=n>2,M=T=>{let k=Ye(e[0].dataType),E=[K("x",e[0].dataType,e[0].dims,g),K("scale",a.dataType,a.dims,g)];o&&E.push(K("bias",o.dataType,o.dims,g)),E.push(ae("output",e[0].dataType,s,g)),$&&E.push(ae("mean_data_output",1,m)),x&&E.push(ae("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(v).declareVariables(...E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Xi("f32",g)};
    var mean_square_vector = ${Xi("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Nn(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Kt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Kt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Nn(k,g,"x[j + offset]")};
      let f32scale = ${Nn(k,g,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Nn(k,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:s,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:_}),getShaderSource:M}},Rh=(e,t)=>{Ch(e.inputs),e.compute(Ah(e.inputs,t,e.outputCount))}}),zh,Oh,ny=J(()=>{fe(),da(),ma(),zh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Oh=e=>{zh(e.inputs);let t=zn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(ca(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Ur(h,{activation:""},t,l),{inputs:h})}else e.compute(Ur(e.inputs,{activation:""},t))}}}),Nh,Bh,Ph,Dh,Uh,ry=J(()=>{pe(),fe(),qe(),me(),Nh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},Bh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=Fe(t.k),p=Fe(l),m=Fe(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,_=q.size(g)/m/y,$=64,x=[],M=[u,i,a/d],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),x.push(...le(M)),x.push(...le(S)),x.push(...le(e[2].dims)),e.length===4&&x.push(...le(q.convertShape(e[3].dims)));let T=[u,i,o/m];x.push(...le(T));let k=E=>{let v=M.length,C=K("a",e[0].dataType,v,d),N=K("b",12,S.length,p),Y=K("scales",e[2].dataType,e[2].dims.length),U=[C,N,Y],V=e.length===4?K("zero_points",12,e[3].dims.length):void 0;V&&U.push(V);let R=T.length,G=ae("output",e[0].dataType,R,m),z=Ye(e[0].dataType),P=(()=>{switch(d){case 1:return`array<${z}, 8>`;case 2:return`mat4x2<${z}>`;case 4:return`mat2x4<${z}>`;default:throw new Error(`${d}-component is not supported.`)}})(),X=Math.floor(32/t.bits),O=Math.floor(X/8),Z=()=>{let F="";for(let W=0;W<O;W++){let ne=W*t.bits*4,de=ne+t.bits;F+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${P};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/d}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${C.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let ie=0;ie<m*y;ie++)F+=`
            b_value = ${p===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ne}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${de}u) & b_mask);`}
            b_quantized_values = ${P}(${Array.from({length:4},(be,Ae)=>`${z}(b_value_lower[${Ae}]), ${z}(b_value_upper[${Ae}])`).join(", ")});
            b_dequantized_values = ${d===1?`${P}(${Array.from({length:8},(be,Ae)=>`(b_quantized_values[${Ae}] - ${V?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${P}(${Array(8).fill(`${V?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/d},(be,Ae)=>`${d===1?`a_data${W>0?W:""}[${Ae}] * b_dequantized_values[${Ae}]`:`dot(a_data${W>0?W:""}[${Ae}], b_dequantized_values[${Ae}])`}`).join(" + ")};
          `}return F},D=()=>{let F=`
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
            let zero_point = ${z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let W=0;W<m*y;W++)F+=`
            let scale${W} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return F},H=()=>{let F=`col_index = col * ${m};`;for(let W=0;W<m*y;W++)F+=`
            let b${W}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return F+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${P};
            var b_dequantized_values: ${P};`,F};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${y*$}>;
        ${E.declareVariables(...U,G)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${D()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${H()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${Z()}
                word_offset += ${X/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:_},programUniforms:x}),getShaderSource:k}},Ph=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=Fe(t.k),p=Fe(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,_=g/y,$=Math.floor(32/t.bits),x=_*p*$,M=x/d,S=x/t.blockSize,T=q.size(m)/y,k=[],E=[u,i,a/d],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),k.push(...le(E)),k.push(...le(v)),k.push(...le(e[2].dims)),e.length===4&&k.push(...le(q.convertShape(e[3].dims)));let C=[u,i,o];k.push(...le(C));let N=Y=>{let U=E.length,V=K("a",e[0].dataType,U,d),R=K("b",12,v.length,p),G=K("scales",e[2].dataType,e[2].dims.length),z=[V,R,G],P=e.length===4?K("zero_points",12,e[3].dims.length):void 0;P&&z.push(P);let X=C.length,O=ae("output",e[0].dataType,X),Z=Ye(e[0].dataType),D=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${O.type.value}, ${_}>, ${y}>;
        ${Y.declareVariables(...z,O)}
        ${Y.mainStart([_,y,1])}
          let output_indices = ${O.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${M};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${M}; a_offset += ${g})
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
            ${P?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${P.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor($/8),F="";for(let W=0;W<H;W++){let ne=W*t.bits*4,de=ne+t.bits;F+=`
              ${D()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${de}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(ie,be)=>`${Z}(b_value_lower[${be}]), ${Z}(b_value_upper[${be}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,be)=>`${`dot(a_data${be}, b_dequantized_values[${be}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return F})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${O.setByIndices(`${O.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${_};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:N}},Dh=(e,t)=>{Nh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ph(e.inputs,t)):e.compute(Bh(e.inputs,t))},Uh=e=>Ce(e)}),Lh,Fh,Gh,Wh,qh,Vh,Hh,jh,Kh,iy=J(()=>{pe(),fe(),me(),Lh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Fh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${oe("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${oe("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${oe("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Gh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${oe("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${oe("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${oe("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Wh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${oe("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${oe("uniforms.x_shape",i,t)})) {
                  k = i32(${oe("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},qh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${oe("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${oe("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${oe("uniforms.x_shape",i,t)})) {
                  k -= i32(${oe("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${oe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Vh=(e,t,n)=>{switch(n.mode){case 0:return Fh(e,t,n.pads.length);case 1:return Gh(e,t,n.pads.length);case 2:return Wh(e,t,n.pads.length);case 3:return qh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Hh=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...le(e[0].dims,n));let s=["rank"],u=l=>{let h=ae("output",e[0].dataType,n.length),d=K("x",e[0].dataType,r.length),p=d.type.value,m=Vh(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(d,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:a}),getShaderSource:u}},jh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},Kh=(e,t)=>{Lh(e.inputs);let n=jh(e.inputs,t);e.compute(Hh(e.inputs,n),{inputs:[0]})}}),ur,Ca,Aa,Ra,za,Yh,Xh,Oa,Na,Zh,Qh,Ba,Jh,ep,Pa,tp,np,rp,ip,ay=J(()=>{ct(),pe(),fe(),me(),ur=e=>{if(Ne.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ca=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Rr.adjustPoolAttributes(n,i,o,s,u,l);let h=Rr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[d,r?p:h]},Aa=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],d=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],_=t.pads[t.pads.length-2];p=!!(y+_),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:_}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},Ra=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p=i.format==="NHWC",m=t.type.value,g=ae("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",_="",$="",x=n-(p?2:1);if(h?y=`
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
                }`,i.kernelShape.length===2){let M=n-(p?3:2);d?_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${M}] < 0 || xIndices[${M}] >= uniforms.x_shape[${M}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${m}(${s});
              var pad = 0;
              ${_}
              ${y}
              ${$}
              ${o}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,_=i.pads.length,$="";return l?$=`
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

              var value = ${m}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${oe("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${oe("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${oe("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${oe("uniforms.pads","j - 2u",_)};
                  ${$}
              }
              ${o}

              output[global_idx] = value;
            }`}},za=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Yh=e=>`${za(e)};${e.countIncludePad}`,Xh=e=>`${za(e)};${e.storageOrder};${e.dilations}`,Oa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Na=(e,t,n,r)=>{let[i,a]=Ca(t,r,n),o=K("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,d,p,m,g]=Aa(a,i);h.push(...le(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:_=>Ra(_,o,t.dims.length,a.length,i,u,l,0,d,p,m,g)}},Zh=e=>{let t=e.count_include_pad!==0,n=Oa(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Yh(r)}},Qh=(e,t)=>{ur(e.inputs),e.compute(Na("AveragePool",e.inputs[0],!1,t))},Ba={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Jh=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},ep=(e,t)=>{ur(e.inputs),e.compute(Na("GlobalAveragePool",e.inputs[0],!0,t))},Pa=(e,t,n,r)=>{let[i,a]=Ca(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=K("x",t.dataType,t.dims.length),l=["rank"],[h,d,p,m,g]=Aa(a,i);return h.push(...le(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:y=>Ra(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,d,p,m,g)}},tp=(e,t)=>{ur(e.inputs),e.compute(Pa("MaxPool",e.inputs[0],!1,t))},np=e=>{let t=e.storage_order,n=e.dilations,r=Oa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Xh(i)}},rp=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},ip=(e,t)=>{ur(e.inputs),e.compute(Pa("GlobalMaxPool",e.inputs[0],!0,t))}}),ap,op,sp,up,oy=J(()=>{pe(),fe(),qe(),me(),ap=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},op=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=Fe(s),_=m&&(!u||y===4),$=_?y:1,x=_&&!u?y:1,M=K("input",u?12:r,l.length,x),S=K("scale",o,h.length),T=d?K("zero_point",u?12:r,p.length):void 0,k=ae("output",o,a.length,$),E=[M,S];T&&E.push(T);let v=[l,h];d&&v.push(p);let C=[{type:12,data:s/$},{type:12,data:n},{type:12,data:t.blockSize},...le(...v,a)],N=Y=>{let U=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(U).declareVariables(...E,k)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?m?u?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:g?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/$/64),y:1,z:1},programUniforms:C})}},sp=(e,t)=>{ap(e.inputs,t),e.compute(op(e.inputs,t))},up=e=>Ce({axis:e.axis,blockSize:e.blockSize})}),lp,cp,dp,sy=J(()=>{ct(),pe(),me(),lp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},cp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...le(a)],u=l=>{let h=ae("output",r,a.length),d=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},dp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ne.webgpu.validateInputContent&&lp(t,n,r),e.compute(cp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),hp,pp,fp,mp,uy=J(()=>{pe(),fe(),qe(),me(),hp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},pp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(q.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...le(e[1].dims,e[2].dims,i)],h=d=>{let p=K("indices",e[1].dataType,e[1].dims.length),m=K("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?$u("output",e[0].dataType,i.length):ae("output",e[0].dataType,i.length,a);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,m,g)}
      ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${hp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},fp=e=>Ce({reduction:e.reduction}),mp=(e,t)=>{e.compute(pp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),gp,yp,wp,Da,_p,bp,$p,xp,vp,Sp,Mp,Tp,Ua,Ip,Ep,kp,Cp,Ap,Rp,zp,ly=J(()=>{pe(),fe(),qe(),me(),gp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},yp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},wp=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");gp(r,t),t.axes.length>0&&yp(r,t.axes,l).forEach((h,d)=>r[d]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Da=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,_p=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Da("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Da("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",bp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",$p=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},xp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},vp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Sp=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${oe("uniforms.scales","i",r)};
        var roi_low = ${oe("uniforms.roi","i",i)};
        var roi_hi = ${oe("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${oe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Mp=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${oe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${oe("uniforms.roi","i",a)};
          var roi_hi = ${oe("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${oe("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,Tp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${oe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ua=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Ip=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ua(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
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
    }`},Ep=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[d,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let _=y===d?"row":"col";return`
      fn ${_}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${_}: ${m} = originalIdx + ${m}(i);
          if (${_} < 0 || ${_} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${_} = max(0, min(${_}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${_})`)};
          data[i + 1] = ${y===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(d)};
    ${g(p)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
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
    `},kp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ua(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${o}];
      var height:${h} = originalIndices[${s}];
      var width:${h} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:"0"};

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
    }`},Cp=(e,t,n,r,i,a)=>{let o=e.dims,s=$p(a,t.axes,o.length),u=xp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=vp(o,l,t)));let h=ae("output",e.dataType,u.length),d=K("input",e.dataType,o.length),p=q.size(u),m=o.length===u.length&&o.every((x,M)=>x===u[M]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,_=d.type.value,$=x=>`
      ${m?"":`
      ${_p(t.coordinateTransformMode,_)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Tp(d,o)};
              ${bp(t.nearestMode,n,_)};
              ${Mp(d,h,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Sp(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Ip(d,h,o,g,y)}`;if(o.length===3||o.length===5)return`${kp(d,h,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Ep(d,h,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(d,h)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...le(o,u)]})}},Ap=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Rp=(e,t)=>{let n=[],r=[],i=[],a=Ap(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");wp(e.inputs,t,a,n,r,i),e.compute(Cp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},zp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ce({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Op,Np,Bp,cy=J(()=>{pe(),fe(),me(),Op=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Np=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,_=64,$=Fe(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[K("x",e[0].dataType,e[0].dims,$),K("skip",e[1].dataType,e[1].dims,$),K("gamma",e[2].dataType,e[2].dims,$)];d&&E.push(K("beta",e[3].dataType,e[3].dims,$)),p&&E.push(K("bias",e[4].dataType,e[4].dims,$)),E.push(ae("output",e[0].dataType,s,$)),m&&E.push(ae("mean_output",1,h)),g&&E.push(ae("inv_std_output",1,h)),y&&E.push(ae("input_skip_bias_sum",e[0].dataType,s,$));let v=Ye(e[0].dataType),C=Ye(1,$);return`

      ${T.registerUniforms(k).declareVariables(...E)}
      var<workgroup> sum_shared : array<${C}, ${_}>;
      var<workgroup> sum_squared_shared : array<${C}, ${_}>;

      ${T.mainStart([_,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${_};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${_};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${_-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Nn(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${_};
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
        let mean = ${Kt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Kt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:s,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((T,k)=>"type")},getShaderSource:M,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Bp=(e,t)=>{Op(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Np(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Pp,lr,Dp,La,Up,Lp,Fp,Gp,dy=J(()=>{pe(),fe(),qe(),me(),Pp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},lr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Dp=(e,t)=>{if(e.length>1){let n=lr(e,1),r=lr(e,2),i=lr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ce({starts:n,ends:r,axes:i})}else return t},La=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Up=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${oe("uniforms.input_shape","i",n.length)};
            let steps_i = ${oe("uniforms.steps","i",n.length)};
            let signs_i = ${oe("uniforms.signs","i",n.length)};
            let starts_i = ${oe("uniforms.starts","i",n.length)};
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
      }`,Lp=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=lr(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map(($,x)=>La($,x,n,i,a)),s=t.ends.map(($,x)=>La($,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(o.splice($,0,0),s.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,M)=>{if($<0){let S=(s[x]-o[x])/$,T=o[x],k=T+S*a[x];o[x]=k,s[x]=T,M[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((s[$]-o[$])/a[$])});let h={dims:l,dataType:e[0].dataType},d=ae("output",e[0].dataType,l.length),p=K("input",e[0].dataType,e[0].dims.length),m=q.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...le(e[0].dims,l)],_=$=>`
      ${$.registerUniforms(g).declareVariables(p,d)}
        ${Up(p,d,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Fp=(e,t)=>{Pp(e.inputs,t);let n=Dp(e.inputs,t);e.compute(Lp(e.inputs,n),{inputs:[0]})},Gp=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ce({starts:t,ends:n,axes:r})}}),Wp,qp,Vp,Hp,hy=J(()=>{pe(),fe(),qe(),Yt(),me(),Wp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},qp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(E,v)=>v),l[o]=a-1,l[a-1]=o,u=e.compute(ut(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,d=h[a-1],p=i/d,m=Fe(d),g=d/m,y=64;p===1&&(y=256);let _=(E,v)=>v===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:v===2?`max(${E}.x, ${E}.y)`:v===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=K("x",u.dataType,u.dims,m),x=ae("result",u.dataType,u.dims,m),M=$.type.value,S=Ye(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=E=>`
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
      ${E.registerUniform("packedCols","i32").declareVariables($,x)}
      ${E.mainStart(y)}
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
          rowMaxShared = ${M}(${_("threadShared[0]",m)});
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
          rowSumShared = ${M}(${Kt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(ut(k,l),{inputs:[k]})},Vp=(e,t)=>{Wp(e.inputs),qp(e,t)},Hp=e=>Ce({axis:e.axis})}),Fa,jp,Kp,Yp,Xp,py=J(()=>{pe(),fe(),me(),Fa=e=>Array.from(e.getBigInt64Array(),Number),jp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Fa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Kp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Yp=(e,t)=>{let n=e[0].dims,r=t??Fa(e[1]),i=Kp(n,r),a=q.size(i),o=e[0].dataType,s=K("input",o,n.length),u=ae("output",o,i.length),l=h=>`
      const inputShape = ${s.indices(...n)};
      ${h.registerUniform("output_size","u32").declareVariables(s,u)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...le(e[0].dims,i)]}),getShaderSource:l}},Xp=e=>{jp(e.inputs),e.compute(Yp(e.inputs),{inputs:[0]})}}),Zp,Qp,Jp,fy=J(()=>{pe(),fe(),me(),Zp=(e,t,n,r,i)=>{let a=ae("output_data",i,n.length,4),o=K("a_data",t[1].dataType,t[1].dims.length,4),s=K("b_data",t[2].dataType,t[2].dims.length,4),u=K("c_data",t[0].dataType,t[0].dims.length,4),l,h=(d,p,m)=>`select(${p}, ${d}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,_=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${p}[${m}] = ${g}(${h(y,_,$)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${d("data",0,"u32")}
            ${d("data",1,"u32")}
            ${d("data",2,"u32")}
            ${d("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${d("output_data[global_idx]",0)}
            ${d("output_data[global_idx]",1)}
            ${d("output_data[global_idx]",2)}
            ${d("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Qp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let l=zn.calcShape(zn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=q.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Zp(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...le(r,t,n,o)]})}},Jp=e=>{e.compute(Qp(e.inputs))}}),ef,my=J(()=>{k0(),ra(),C0(),A0(),R0(),z0(),O0(),U0(),F0(),G0(),W0(),q0(),V0(),H0(),j0(),K0(),Y0(),X0(),Z0(),Q0(),J0(),ey(),ty(),ny(),ry(),hh(),iy(),ay(),oy(),sy(),uy(),ea(),ly(),xh(),cy(),dy(),hy(),_h(),py(),Yt(),sa(),fy(),ef=new Map([["Abs",[Ol]],["Acos",[Nl]],["Acosh",[Bl]],["Add",[vc]],["ArgMax",[_l,na]],["ArgMin",[wl,na]],["Asin",[Pl]],["Asinh",[Dl]],["Atan",[Ul]],["Atanh",[Ll]],["Attention",[Ml]],["AveragePool",[Qh,Zh]],["BatchNormalization",[kl]],["BiasAdd",[Rl]],["BiasSplitGelu",[bc]],["Cast",[Gl,Fl]],["Ceil",[Vl]],["Clip",[ql]],["Concat",[Pc,Dc]],["Conv",[ba,wa]],["ConvTranspose",[dd,ud]],["Cos",[Hl]],["Cosh",[jl]],["CumSum",[pd,fd]],["DepthToSpace",[wd,_d]],["DequantizeLinear",[sp,up]],["Div",[Sc]],["Einsum",[Md,Td]],["Elu",[Kl,rr]],["Equal",[Mc]],["Erf",[Yl]],["Exp",[Xl]],["Expand",[Cd]],["FastGelu",[Rd]],["Floor",[Zl]],["FusedConv",[ba,wa]],["Gather",[Bd,Nd]],["GatherElements",[jd,Hd]],["GatherBlockQuantized",[Gd,Wd]],["GatherND",[Dd,Ud]],["Gelu",[Ql]],["Gemm",[Zd,Xd]],["GlobalAveragePool",[ep,Jh]],["GlobalMaxPool",[ip,rp]],["Greater",[kc]],["GreaterOrEqual",[Ac]],["GridSample",[oh,sh]],["GroupQueryAttention",[Th]],["HardSigmoid",[oc,ac]],["InstanceNormalization",[kh]],["LayerNormalization",[Rh]],["LeakyRelu",[Jl,rr]],["Less",[Cc]],["LessOrEqual",[Rc]],["Log",[fc]],["MatMul",[Oh]],["MatMulNBits",[Dh,Uh]],["MaxPool",[tp,np]],["Mul",[Tc]],["MultiHeadAttention",[dh,lh]],["Neg",[tc]],["Not",[ec]],["Pad",[Kh]],["Pow",[Ic]],["QuickGelu",[yc,rr]],["Range",[dp]],["Reciprocal",[nc]],["ReduceMin",[pl]],["ReduceMean",[ul]],["ReduceMax",[hl]],["ReduceSum",[ml]],["ReduceProd",[fl]],["ReduceL1",[ll]],["ReduceL2",[cl]],["ReduceLogSum",[yl]],["ReduceLogSumExp",[dl]],["ReduceSumSquare",[gl]],["Relu",[rc]],["Resize",[Rp,zp]],["RotaryEmbedding",[$h]],["ScatterND",[mp,fp]],["Sigmoid",[ic]],["Sin",[sc]],["Sinh",[uc]],["Slice",[Fp,Gp]],["SkipLayerNormalization",[Bp]],["Split",[yh,wh]],["Sqrt",[lc]],["Softmax",[Vp,Hp]],["Sub",[Ec]],["Tan",[cc]],["Tanh",[dc]],["ThresholdedRelu",[pc,rr]],["Tile",[Xp]],["Transpose",[ku,Cu]],["Where",[Jp]]])}),tf,gy=J(()=>{ct(),Pt(),me(),tf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Mt(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),mt(e.programInfo.name)}dispose(){}build(e,t){Mt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=vu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Se("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return mt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),nf={};An(nf,{WebGpuBackend:()=>sf});var rf,af,of,sf,yy=J(()=>{ct(),pe(),Pt(),lu(),I0(),my(),gy(),rf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},af=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${rf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},of=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},sf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new of(o),this.gpuDataManager=_u(this),this.programManager=new tf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Pi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Mt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),_=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map($=>({dims:$.dims,dataType:Bt($.dataType)})),outputsMetadata:p.map($=>({dims:$.dims,dataType:Bt($.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:_});else{let $="";d.forEach((M,S)=>{$+=`input[${S}]: [${M.dims}] | ${Bt(M.dataType)}, `});let x="";p.forEach((M,S)=>{x+=`output[${S}]: [${M.dims}] | ${Bt(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${$}${x}start time: ${y} ns, execution time: ${_-y} ns`)}Tr("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),mt()}run(e,t,n,r,i,a){Mt(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let S=this.gpuDataManager.get(M);if(!S)throw new Error(`no GPU data for input: ${M}`);o.push(S)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map((x,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let d=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let M=h[x]===-1,S=h[x]===-2,T=M||S?i(s[x].dataType,s[x].dims):r(h[x],s[x].dataType,s[x].dims);if(d.push(T),T.data===0)continue;let k=this.gpuDataManager.get(T.data);if(!k)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(k),S){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(k)}p.push(k)}if(o.length!==t.length||p.length!==d.length){if(p.length===0)return mt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,M=[];l.forEach(E=>{let v=typeof E.data=="number"?[E.data]:E.data;if(v.length===0)return;let C=E.type===10?2:4,N,Y;E.type===10?(Y=v.length>4?16:v.length>2?8:v.length*C,N=v.length>4?16:C*v.length):(Y=v.length<=2?v.length*C:16,N=16),x=Math.ceil(x/Y)*Y,M.push(x);let U=E.type===10?8:4;x+=v.length>4?Math.ceil(v.length/U)*N:v.length*C});let S=16;x=Math.ceil(x/S)*S;let T=new ArrayBuffer(x);l.forEach((E,v)=>{let C=M[v],N=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(T,C,N.length).set(N);else if(E.type===12)new Uint32Array(T,C,N.length).set(N);else if(E.type===10)new Uint16Array(T,C,N.length).set(N);else if(E.type===1)new Float32Array(T,C,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Bt(E.type)}`)});let k=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,T,0,x),this.gpuDataManager.release(k.id),m={offset:0,size:x,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,_=af(e,t,y),$=this.programManager.getArtifact(_);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(_,$),Se("info",()=>`[artifact] key: ${_}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],S=M.type,T=typeof M.data=="number"?1:M.data.length,[k,E]=$.uniformVariablesInfo[x];if(S!==k||T!==E)throw new Error(`Uniform variable ${x} mismatch: expect type ${k} with size ${E}, got type ${S} with size ${T} in program "${$.programInfo.name}".`)}}if(Se("info",()=>`[ProgramManager] run "${e.name}" (key=${_}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,o,p,g,m),mt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=ef.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Se("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Yi(this,e,t);return Di(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Se("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Se("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Se("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),uf={};An(uf,{init:()=>cf});var qr,lf,cf,wy=J(()=>{pe(),Pt(),fe(),T0(),qr=class r0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new r0(this.module,this.dataType,this.data,t)}},lf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<d;m++)p.push(Number(e.getValue(r*i++,a)));s.push(new qr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new qr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=fn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new qr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},cf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(yy(),Xn(nf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Se("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Se("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),d)}},async(s,u,l)=>{Se("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Se("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new lf(t,o,Number(u));return o.computeKernel(Number(s),d,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new mu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),df,Ga,Wa,Xt,hf,qa,Vr,Va,Ha,ja,Ka,Ya,Xa,pf=J(()=>{ct(),v0(),S0(),pe(),dn(),Ri(),Js(),df=(e,t)=>{Be()._OrtInit(e,t)!==0&&Re("Can't initialize onnxruntime.")},Ga=async e=>{df(e.wasm.numThreads,Ar(e.logLevel))},Wa=async(e,t)=>{var r,i;(i=(r=Be()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(wy(),Xn(uf)).init;t==="webgpu"&&await a("webgpu",Be(),e,n),t==="webnn"&&await a("webnn",Be(),e)}},Xt=new Map,hf=e=>{let t=Be(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Re("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},qa=(e,t)=>{let n=Be(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Re("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Vr=e=>{let t=Be(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Va=async(e,t)=>{var d,p,m,g;let n,r,i=Be();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Vr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await Qs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;v.push(Bi(typeof C=="string"?C:C.data).then(Y=>{i.mountExternalData(N,Y)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let C=v,N=C==null?void 0:C.context,Y=C==null?void 0:C.gpuDevice,U=C==null?void 0:C.deviceType,V=C==null?void 0:C.powerPreference;N?i.currentContext=N:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:U,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(d=i.webgpuOnCreateSession)==null||d.call(i,a),a===0&&Re("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,_]=hf(a),$=!!(t!=null&&t.enableGraphCapture),x=[],M=[],S=[],T=[],k=[];for(let v=0;v<y;v++){let[C,N,Y]=qa(a,v);C===0&&Re("Can't get an input name."),l.push(C);let U=i.UTF8ToString(C);x.push(U),S.push(N===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Bt(N),shape:Y})}for(let v=0;v<_;v++){let[C,N,Y]=qa(a,v+y);C===0&&Re("Can't get an output name."),h.push(C);let U=i.UTF8ToString(C);M.push(U),T.push(N===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Bt(N),shape:Y});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[U])??"cpu",R=i.webnnIsGraphOutput;if(V==="cpu"&&R&&R(a,U)){k.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if($&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(V)}}let E=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Re("Can't create IO binding."),E={handle:s,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Ni(v))}),Xt.set(a,[a,l,h,E,$,!1]),[a,x,M,S,T]}catch(y){throw l.forEach(_=>i._OrtFree(_)),h.forEach(_=>i._OrtFree(_)),s!==0&&i._OrtReleaseBinding(s)!==0&&Re("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Re("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Re("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Ha=e=>{var u,l,h;let t=Be(),n=Xt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Re("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Re("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(d=>t._OrtFree(d)),a.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Re("Can't release session."),Xt.delete(e)},ja=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Be(),u=s.PTR_SIZE,l=e[0],h=e[1],d=e[3],p=d,m,g;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let $=e[2].gpuBuffer;g=fn(pn(l),h);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(d==="ml-tensor"){let $=e[2].mlTensor;g=fn(pn(l),h);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,pn(l),h)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=s._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(m+x*u,gt($[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let S=s.UTF8ToString(i);if(x(r,S)||M(r,S)){let T=pn(l);g=fn(T,h),p="ml-tensor";let k=s.webnnCreateTemporaryTensor,E=s.webnnUploadTensor;if(!k||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,T,h);E(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=s.stackSave(),_=s.stackAlloc(4*h.length);try{h.forEach((x,M)=>s.setValue(_+M*u,x,u===4?"i32":"i64"));let $=s._OrtCreateTensor(pn(l),m,g,_,h.length,Ni(p));$===0&&Re(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{s.stackRestore(y)}},Ka=async(e,t,n,r,i,a)=>{var U,V,R,G;let o=Be(),s=o.PTR_SIZE,u=Xt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],d=u[2],p=u[3],m=u[4],g=u[5],y=t.length,_=r.length,$=0,x=[],M=[],S=[],T=[],k=[],E=o.stackSave(),v=o.stackAlloc(y*s),C=o.stackAlloc(y*s),N=o.stackAlloc(_*s),Y=o.stackAlloc(_*s);try{[$,x]=js(a),ln("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)await ja(n[O],M,T,e,h[t[O]],t[O],m);for(let O=0;O<_;O++)await ja(i[O],S,T,e,d[r[O]],y+r[O],m);cn("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)o.setValue(v+O*s,M[O],"*"),o.setValue(C+O*s,h[t[O]],"*");for(let O=0;O<_;O++)o.setValue(N+O*s,S[O],"*"),o.setValue(Y+O*s,d[r[O]],"*");if(p&&!g){let{handle:O,outputPreferredLocations:Z,outputPreferredLocationsEncoded:D}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);ln("wasm bindInputsOutputs");for(let H=0;H<y;H++){let F=t[H];await o._OrtBindInput(O,h[F],M[H])!==0&&Re(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<_;H++){let F=r[H];(U=i[H])!=null&&U[3]?(k.push(S[H]),o._OrtBindOutput(O,d[F],S[H],0)!==0&&Re(`Can't bind pre-allocated output[${H}] for session=${e}.`)):o._OrtBindOutput(O,d[F],0,D[F])!==0&&Re(`Can't bind output[${H}] to ${Z[H]} for session=${e}.`)}cn("wasm bindInputsOutputs"),Xt.set(e,[l,h,d,p,m,!0])}(V=o.jsepOnRunStart)==null||V.call(o,l),(R=o.webnnOnRunStart)==null||R.call(o,l);let z;p?z=await o._OrtRunWithBinding(l,p.handle,_,N,$):z=await o._OrtRun(l,C,v,y,Y,_,N,$),z!==0&&Re("failed to call OrtRun().");let P=[],X=[];ln("wasm ProcessOutputTensor");for(let O=0;O<_;O++){let Z=Number(o.getValue(N+O*s,"*"));if(Z===S[O]||k.includes(S[O])){P.push(i[O]),Z!==S[O]&&o._OrtReleaseTensor(Z)!==0&&Re("Can't release tensor.");continue}let D=o.stackSave(),H=o.stackAlloc(4*s),F=!1,W,ne=0;try{o._OrtGetTensorData(Z,H,H+s,H+2*s,H+3*s)!==0&&Re(`Can't access output tensor data on index ${O}.`);let de=s===4?"i32":"i64",ie=Number(o.getValue(H,de));ne=o.getValue(H+s,"*");let be=o.getValue(H+s*2,"*"),Ae=Number(o.getValue(H+s*3,de)),Ve=[];for(let ke=0;ke<Ae;ke++)Ve.push(Number(o.getValue(be+ke*s,de)));o._OrtFree(be)!==0&&Re("Can't free memory for tensor dims.");let Ge=Ve.reduce((ke,ce)=>ke*ce,1);W=Bt(ie);let He=p==null?void 0:p.outputPreferredLocations[r[O]];if(W==="string"){if(He==="gpu-buffer"||He==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ke=[];for(let ce=0;ce<Ge;ce++){let et=o.getValue(ne+ce*s,"*"),Sn=o.getValue(ne+(ce+1)*s,"*"),ht=ce===Ge-1?void 0:Sn-et;ke.push(o.UTF8ToString(et,ht))}P.push([W,Ve,ke,"cpu"])}else if(He==="gpu-buffer"&&Ge>0){let ke=o.jsepGetBuffer;if(!ke)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ce=ke(ne),et=fn(ie,Ge);if(et===void 0||!zi(W))throw new Error(`Unsupported data type: ${W}`);F=!0,P.push([W,Ve,{gpuBuffer:ce,download:o.jsepCreateDownloader(ce,et,W),dispose:()=>{o._OrtReleaseTensor(Z)!==0&&Re("Can't release tensor.")}},"gpu-buffer"])}else if(He==="ml-tensor"&&Ge>0){let ke=o.webnnEnsureTensor,ce=o.webnnIsGraphInputOutputTypeSupported;if(!ke||!ce)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(fn(ie,Ge)===void 0||!Oi(W))throw new Error(`Unsupported data type: ${W}`);if(!ce(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let et=await ke(e,ne,ie,Ve,!1);F=!0,P.push([W,Ve,{mlTensor:et,download:o.webnnCreateMLTensorDownloader(ne,W),dispose:()=>{o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(He==="ml-tensor-cpu-output"&&Ge>0){let ke=o.webnnCreateMLTensorDownloader(ne,W)(),ce=P.length;F=!0,X.push((async()=>{let et=[ce,await ke];return o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(Z),et})()),P.push([W,Ve,[],"cpu"])}else{let ke=Cr(W),ce=new ke(Ge);new Uint8Array(ce.buffer,ce.byteOffset,ce.byteLength).set(o.HEAPU8.subarray(ne,ne+ce.byteLength)),P.push([W,Ve,ce,"cpu"])}}finally{o.stackRestore(D),W==="string"&&ne&&o._free(ne),F||o._OrtReleaseTensor(Z)}}p&&!m&&(o._OrtClearBoundOutputs(p.handle)!==0&&Re("Can't clear bound outputs."),Xt.set(e,[l,h,d,p,m,!1]));for(let[O,Z]of await Promise.all(X))P[O][2]=Z;return cn("wasm ProcessOutputTensor"),P}finally{(G=o.webnnOnRunEnd)==null||G.call(o,l),o.stackRestore(E),M.forEach(z=>o._OrtReleaseTensor(z)),S.forEach(z=>o._OrtReleaseTensor(z)),T.forEach(z=>o._free(z)),$!==0&&o._OrtReleaseRunOptions($),x.forEach(z=>o._free(z))}},Ya=e=>{let t=Be(),n=Xt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Re("Can't get an profile file name."),t._OrtFree(i)},Xa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Zt,it,Bn,cr,dr,Hr,Za,jr,$n,xn,ff,mf,gf,yf,wf,_f,bf,$f,xf=J(()=>{ct(),pf(),dn(),Ei(),Zt=()=>!!Ne.wasm.proxy&&typeof document<"u",Bn=!1,cr=!1,dr=!1,jr=new Map,$n=(e,t)=>{let n=jr.get(e);n?n.push(t):jr.set(e,[t])},xn=()=>{if(Bn||!cr||dr||!it)throw new Error("worker not ready")},ff=e=>{switch(e.data.type){case"init-wasm":Bn=!1,e.data.err?(dr=!0,Za[1](e.data.err)):(cr=!0,Za[0]()),Hr&&(URL.revokeObjectURL(Hr),Hr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=jr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},mf=async()=>{if(!cr){if(Bn)throw new Error("multiple calls to 'initWasm()' detected.");if(dr)throw new Error("previous call to 'initWasm()' failed.");if(Bn=!0,Zt())return new Promise((e,t)=>{it==null||it.terminate(),Gs().then(([n,r])=>{try{it=r,it.onerror=a=>t(a),it.onmessage=ff,Za=[e,t];let i={type:"init-wasm",in:Ne};!i.in.wasm.wasmPaths&&(n||Si)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),it.postMessage(i),Hr=n}catch(i){t(i)}},t)});try{await Ai(Ne.wasm),await Ga(Ne),cr=!0}catch(e){throw dr=!0,e}finally{Bn=!1}}},gf=async e=>{if(Zt())return xn(),new Promise((t,n)=>{$n("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ne}};it.postMessage(r)});await Wa(Ne,e)},yf=async e=>Zt()?(xn(),new Promise((t,n)=>{$n("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};it.postMessage(r,[e.buffer])})):Vr(e),wf=async(e,t)=>{if(Zt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xn(),new Promise((n,r)=>{$n("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),it.postMessage(i,a)})}else return Va(e,t)},_f=async e=>{if(Zt())return xn(),new Promise((t,n)=>{$n("release",[t,n]);let r={type:"release",in:e};it.postMessage(r)});Ha(e)},bf=async(e,t,n,r,i,a)=>{if(Zt()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return xn(),new Promise((o,s)=>{$n("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};it.postMessage(l,Xa(u))})}else return Ka(e,t,n,r,i,a)},$f=async e=>{if(Zt())return xn(),new Promise((t,n)=>{$n("end-profiling",[t,n]);let r={type:"end-profiling",in:e};it.postMessage(r)});Ya(e)}}),Qa,vf,Sf,_y=J(()=>{ct(),xf(),pe(),bi(),Js(),Qa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},vf=e=>{switch(e[3]){case"cpu":return new Le(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!zi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Le.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Oi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Le.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Sf=class{async fetchModelAndCopyToWasmMemory(e){return yf(await Bi(e))}async loadModel(e,t){Mt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wf(n,t),mt()}async dispose(){return _f(this.sessionId)}async run(e,t,n){Mt();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],m=d[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(d=>{let p=d[0],m=d[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),o.push(g)});let s=r.map((d,p)=>Qa(d,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((d,p)=>d?Qa(d,()=>`output "${this.outputNames[o[p]]}"`):null),l=await bf(this.sessionId,i,s,o,u,n),h={};for(let d=0;d<l.length;d++)h[this.outputNames[o[d]]]=a[d]??vf(l[d]);return mt(),h}startProfiling(){}endProfiling(){$f(this.sessionId)}}}),Mf={};An(Mf,{OnnxruntimeWebAssemblyBackend:()=>eo,initializeFlags:()=>Ja,wasmBackend:()=>Tf});var Ja,eo,Tf,by=J(()=>{ct(),xf(),_y(),Ja=()=>{(typeof Ne.wasm.initTimeout!="number"||Ne.wasm.initTimeout<0)&&(Ne.wasm.initTimeout=0);let e=Ne.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ne.wasm.simd=!1),typeof Ne.wasm.proxy!="boolean"&&(Ne.wasm.proxy=!1),typeof Ne.wasm.trace!="boolean"&&(Ne.wasm.trace=!1),typeof Ne.wasm.numThreads!="number"||!Number.isInteger(Ne.wasm.numThreads)||Ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ne.wasm.numThreads=1;else{let t=typeof navigator>"u"?a0("node:os").cpus().length:navigator.hardwareConcurrency;Ne.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},eo=class{async init(e){Ja(),await mf(),await gf(e)}async createInferenceSessionHandler(e,t){let n=new Sf;return await n.loadModel(e,t),n}},Tf=new eo});ct(),ct(),ct();var $y="1.27.0";{let e=(by(),Xn(Mf)).wasmBackend;Rn("webgpu",e,5),Rn("webnn",e,5),Rn("cpu",e,10),Rn("wasm",e,10)}Object.defineProperty(Ne.versions,"web",{value:$y,enumerable:!0});/**
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
 */function Ut(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Pn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function If(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const xy=114;function vy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function to(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const _=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(_))),x=Math.min(r-1,$+1),M=Math.max(0,Math.min(1,_-$)),S=(p*r+$)*a,T=(p*r+x)*a,k=(m*r+$)*a,E=(m*r+x)*a,v=(h*t+y)*3;for(let C=0;C<3;C++){const N=o[S+C]*(1-M)+o[T+C]*M,Y=o[k+C]*(1-M)+o[E+C]*M;s[v+C]=Math.min(255,Math.max(0,Math.round(N*(1-g)+Y*g)))}}}return s}function hr(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=h*l,p=Math.min((h+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let _=0,$=0,x=0,M=0;for(let T=Math.floor(d);T<p;T++){const k=Math.min(T+1,p)-Math.max(T,d);if(!(k<=0))for(let E=Math.floor(g);E<y;E++){const v=Math.min(E+1,y)-Math.max(E,g);if(v<=0)continue;const C=v*k,N=(T*r+E)*a;_+=o[N]*C,$+=o[N+1]*C,x+=o[N+2]*C,M+=C}}const S=(h*t+m)*3;s[S]=Math.min(255,Math.max(0,Ut(_/M))),s[S+1]=Math.min(255,Math.max(0,Ut($/M))),s[S+2]=Math.min(255,Math.max(0,Ut(x/M)))}}return s}function Ef(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function kf(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const m=(p+.5)*l-.5,g=Math.floor(m),y=Ef(m-g);for(let _=0;_<t;_++){const $=(_+.5)*u-.5,x=Math.floor($),M=Ef($-x),S=(p*t+_)*3;for(let T=0;T<3;T++){let k=0;for(let E=0;E<4;E++){const v=d(g-1+E)*r;let C=0;for(let N=0;N<4;N++)C+=M[N]*o[(v+h(x-1+N))*a+T];k+=y[E]*C}s[S+T]=Math.min(255,Math.max(0,Math.round(k)))}}}return s}function no(e,t,n=1){const r=vy(e.width,e.height,t,n),i=to(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(xy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const d=(l+h)*3,p=u+h;o[p]=i[d]/255,o[a+p]=i[d+1]/255,o[2*a+p]=i[d+2]/255}}return{tensor:o,params:r}}function Cf(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],d=e[o*6+4],p=e[o*6+5];if(d<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,_=(l-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:d,box:[Math.trunc(g),Math.trunc(y),Math.trunc(_-g),Math.trunc($-y)],boxFloat:[g,y,_-g,$-y]})}return i}const pr=.8,Af=.65,Sy=110,My=1280;function Ty(e,t,n){if(n==null)return pr;if(n.length===0)return Af;const r=Math.max(e,t);if(!(r>0))return pr;const i=My/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return pr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Sy?Af:pr}const Rf=.25,zf=.6;function Iy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every($=>Number.isFinite($)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Rf:zf)),h=Math.trunc(u*(s>=u?zf:Rf)),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+h),y=m-d,_=g-p;return y<=0||_<=0?null:{x:d,y:p,width:y,height:_}}const Ey=.6,ky=.74;function Of(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,d=Ut((s+l)/2),p=Ut((u+h)/2),m=Ut((l-s+(h-u))/4);m>=1&&r.push({cx:d,cy:p,r:m})}return r}function Cy(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Ey*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Ay(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=ky*(n.r+r.r))&&t.push(n);return t}function Ry(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Pn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Nf(e,t,n){const r=Of(e,t,n);return r.length===0?[]:Ry(Ay(Cy(r)))}function zy(e,t,n){return Of(e,t,n)}function fr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Oy=.5,Ny=.7,By=.55;function ro(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Bf(e){if(e.length===0)return[];const t=(Oy*ro(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Pn(i.map(a=>a[0]))),Math.trunc(Pn(i.map(a=>a[1]))),Math.trunc(Pn(i.map(a=>a[2]))),Math.trunc(Pn(i.map(a=>a[3])))]);if(r.length>=2){const i=ro(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*d,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(p>=Ny*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),_=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=_?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=ro(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=By*i)}return r}const Pf=["brown","grey","blue","green","yellow","red","purple"],Py={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Dy=.7;function Uy(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const d of r){const p=e[d];if(p.family!==a.family)continue;const[m,g,y,_]=p.box,$=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),x=Math.max(0,Math.min(s+l,g+_)-Math.max(s,g)),M=Math.max(1,Math.min(u*l,y*_));if($*x>=Dy*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function io(e,t,n){const r=Cf(e,t,n,Pf.length).map(i=>{const a=Pf[i.classIndex];return{color:a,family:Py[a],box:i.box,confidence:i.confidence}});return Uy(r)}const Ly=8,Fy=.8,Df=1.25;function Gy(e){if(e.length<Ly)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Df?t.push(o):u>s*Df&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Fy*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Wy=2.25,Uf=8;function qy(e){if(e.length<Uf)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=Wy*n[Math.floor(n.length/2)],i=r*r,a=e.map((d,p)=>p),o=d=>{for(;a[d]!==d;)a[d]=a[a[d]],d=a[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const m=t[d][0]-t[p][0],g=t[d][1]-t[p][1];m*m+g*g<=i&&(a[o(d)]=o(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=o(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<Uf||u.length===e.length)return[];const l=new Set(u),h=e.map((d,p)=>p).filter(d=>!l.has(d));return h.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const dt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function xt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const Vy=.42,Hy=22,jy=43,Ky=120,Yy=1.5,Xy=.72,Zy=110,Lf=3;function mr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*Vy);if(l<1)return 0;let h=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const m=(d*r+p)*a,g=o[m],y=o[m+1],_=o[m+2];!t&&g>=250&&y>=250&&_>=250||(n(g,y,_),h+=1)}return h}function Qy(e){let t=0,n=0,r=0,i=mr(e,!1,(a,o,s)=>{const u=xt(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=mr(e,!0,(a,o,s)=>{const u=xt(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Jy(e){let t=0,n=0,r=mr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=mr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function ew(e){let t=0;const n=mr(e,!0,(r,i,a)=>{t+=xt(r,i,a).s});return n===0?null:t/n}function tw(e){const t=Qy(e);if(t===null||t.s<=Hy)return 1;if(t.s>=Ky){const n=Jy(e);return n!==null&&n>=Yy?6:3}return t.s>=jy?3:6}function nw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function rw(e,t){const n=[...t];if(e.length<Lf||t.length!==e.length)return n;const r=e.map(o=>ew(o)),i=r.filter(o=>o!==null);if(i.length<Lf)return n;const a=Pn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<Xy*a&&o<Zy&&(n[s]=1)}),n}function Ff(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+o-r)**2<=i*i){const _=((p+o)*e.width+(m+a))*e.channels;d[g]=e.data[_],d[g+1]=e.data[_+1],d[g+2]=e.data[_+2]}else d[g]=255,d[g+1]=255,d[g+2]=255}return{width:l,height:h,channels:3,data:d}}function iw(e,t){const n=t.map(a=>Ff(e,a)),r=n.map(a=>tw(a)),i=nw(t,r);return rw(n,i)}function aw(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Gf(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,d=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let _=Math.floor(h);_<d;_++){const $=Math.min(_+1,d)-Math.max(_,h);$<=0||(p+=e.data[g*e.width+_]*$*y,m+=$*y)}}r[o*t+l]=Math.min(255,Math.max(0,Ut(p/m)))}}return{width:t,height:n,data:r}}function ow(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,Ut(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function sw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(!(h<0||h>=t||d<0||d>=n)&&r[d*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function uw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(h>=0&&h<t&&d>=0&&d<n&&r[d*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function ao(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let d=0,p=0,m=0;for(;l<h;){const g=o[l++],y=g%t,_=g/t|0;d+=1,p+=y,m+=_;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const M=y+x,S=_+$;if(M<0||M>=t||S<0||S>=n)continue;const T=S*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:d,centroidX:p/d,centroidY:m/d},s+=1}return{labels:i,stats:a}}function lw(e,t,n){return Wf(Float32Array.from(e.data),e.width,t,n)}function Wf(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const d=h-a,p=l-a,m=s*d-u*p+a,g=u*d+s*p+a,y=Math.floor(m),_=Math.floor(g),$=m-y,x=g-_,M=(k,E)=>k>=0&&k<t&&E>=0&&E<t?e[E*t+k]:r,S=M(y,_)*(1-$)+M(y+1,_)*$,T=M(y,_+1)*(1-$)+M(y+1,_+1)*$;i[l*t+h]=S*(1-x)+T*x}return i}const cw=.9,dw=.34,hw=[.55,.6,.66,.72],pw=22,fw=88,mw=35,Dn=28,oo=4,gw=Array.from({length:15},(e,t)=>-21+t*3),qf=[-2,0,2],yw=3,ww=.3;function _w(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function bw(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let _=0;_<e.width;_++)e.data[y*e.width+_]>0&&(a+=1,t=Math.min(t,_),n=Math.max(n,_),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let _=0;_<o;_++)l[(y+d)*u+(_+h)]=e.data[(y+r)*e.width+(_+t)];const p=Dn-2*oo,m=Gf({width:u,height:u,data:l},p,p),g=new Float32Array(Dn*Dn);for(let y=0;y<p;y++)for(let _=0;_<p;_++)g[(y+oo)*Dn+(_+oo)]=m.data[y*p+_]>110?1:0;return g}function $w(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*dw);if(u<4)return null;const l=o-u,h=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const m=new Int16Array(d*p),g=new Int16Array(d*p),y=new Int16Array(d*p),_=new Uint8Array(d*p),$=[],x=Math.min(d,p)/2;for(let O=0;O<d;O++)for(let Z=0;Z<p;Z++){const D=((O+l)*n+(Z+h))*i,{h:H,s:F,v:W}=xt(a[D],a[D+1],a[D+2]),ne=O*p+Z;m[ne]=H,g[ne]=F,y[ne]=W,Math.sqrt((Z-p/2)**2+(O-d/2)**2)/x<=t&&(_[ne]=1,$.push(W))}if($.length<16)return null;const M=If($,55);let S=0,T=0,k=0;const E=O=>m[O]>=pw&&m[O]<=fw&&g[O]>=mw,v=O=>y[O]>=M&&g[O]<=95&&!E(O)&&_[O]===1;for(let O=0;O<d*p;O++)_[O]===1&&(k+=1,y[O]>=130&&!E(O)&&(S+=1),v(O)&&(T+=1));const C=S>.5*k&&T<.15*k,N=new Uint8Array(d*p);if(C){const O=If($,45);for(let Z=0;Z<d*p;Z++)N[Z]=_[Z]===1&&y[Z]<=O?255:0}else for(let O=0;O<d*p;O++)N[O]=v(O)?255:0;const Y={width:p,height:d,data:N},U=sw(Y);let V=ao(U),R=V;if(V.stats.length<=1&&(V=ao(Y),R=V,V.stats.length<=1))return null;const G=Math.min(d,p)/2;let z=0,P=-1;for(let O=1;O<R.stats.length;O++){const Z=R.stats[O];if(Z===void 0)continue;const D=Math.hypot(Z.centroidX-p/2,Z.centroidY-d/2)/G,H=Z.area*(1-.6*Math.min(D,1));H>P&&(P=H,z=O)}if(z===0)return null;const X=new Uint8Array(d*p);for(let O=0;O<d*p;O++)X[O]=R.labels[O]===z?255:0;return bw(uw({width:p,height:d,data:X}))}function xw(e,t,n,r,i,a){const o=Dn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let d=0;d<o;d++){const p=d-i;if(p<0||p>=o)continue;const m=e[h*o+p];m!==0&&(u+=m,s+=m*n[l*o+d])}}return s/(u+r-s+1e-6)}function vw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of gw){const a=i===0?e:Wf(e,Dn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of qf)for(const u of qf){const l=xw(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Sw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of hw){const s=$w(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([vw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<ww)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,yw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const Mw=2560,Tw=.3,Iw=.5,Ew=1.6,kw=3,Cw=5;function Aw(e){const t=Math.min(1,Mw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),_=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const M=2-x,S=(h*e.width+y)*e.channels+M,T=(h*e.width+_)*e.channels+M,k=(d*e.width+y)*e.channels+M,E=(d*e.width+_)*e.channels+M,v=e.data[S]*(1-$)+e.data[T]*$,C=e.data[k]*(1-$)+e.data[E]*$,N=v*(1-p)+C*p;a[x*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Rw(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function zw(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function Ow(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const d=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,_=-1/0;for(const[S,T]of e){const k=S*d+T*p,E=-S*p+T*d;k<m&&(m=k),k>g&&(g=k),E<y&&(y=E),E>_&&(_=E)}const $=g-m,x=_-y,M=$*x;if(M<n){n=M;const S=(m+g)/2,T=(y+_)/2;t={cx:S*d-T*p,cy:S*p+T*d,w:$,h:x,angle:Math.atan2(p,d)}}}return t}function Nw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let _=p;_<=m;_++)for(let $=h;$<=d;$++){const x=$-r.cx,M=_-r.cy,S=x*i+M*a,T=-x*a+M*i;Math.abs(S)<=o&&Math.abs(T)<=s&&(g+=e[_*t+$],y+=1)}return y===0?0:g/y}function Bw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,_)=>y[0]-_[0]),[s,u,l,h]=o,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[d[0],d[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function Pw(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let m=0;m<o.length;m++)o[m]=e[m]>Tw?255:0;o=Rw(o,i,a);const s={width:i,height:a,data:o},{labels:u}=ao(s),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let _=l.get(y);_===void 0&&(_=new Map,l.set(y,_));const $=_.get(m);$===void 0?_.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const h=n/i,d=r/a,p=[];for(const[m,g]of l){const y=[];for(const[N,[Y,U]]of g)y.push([Y-.5,N-.5],[Y-.5,N+.5],[U+.5,N-.5],[U+.5,N+.5]);const _=Ow(zw(y));if(Math.min(_.w,_.h)<kw)continue;const $=Nw(e,i,a,_);if($<Iw)continue;const x=_.w*_.h*Ew/(2*(_.w+_.h)),M={..._,w:_.w+2*x,h:_.h+2*x};if(Math.min(M.w,M.h)<Cw+2)continue;const T=Bw(M).map(([N,Y])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(Y*d)))]),k=T.map(N=>N[0]),E=T.map(N=>N[1]),v=Math.min(...k),C=Math.min(...E);p.push({quad:T,x:v,y:C,width:Math.max(...k)-v,height:Math.max(...E)-C,score:$})}return p.sort((m,g)=>g.score-m.score)}function Dw(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Uw([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<o;p++){const m=u[6]*p+u[7]*d+u[8],g=(u[0]*p+u[1]*d+u[2])/m,y=(u[3]*p+u[4]*d+u[5])/m,_=Math.floor(g),$=Math.floor(y),x=g-_,M=y-$,S=Math.max(0,Math.min(e.width-1,_)),T=Math.max(0,Math.min(e.width-1,_+1)),k=Math.max(0,Math.min(e.height-1,$)),E=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const C=e.data[(k*e.width+S)*e.channels+v],N=e.data[(k*e.width+T)*e.channels+v],Y=e.data[(E*e.width+S)*e.channels+v],U=e.data[(E*e.width+T)*e.channels+v],V=C*(1-x)+N*x,R=Y*(1-x)+U*x;l[(d*o+p)*e.channels+v]=Math.round(V*(1-M)+R*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?Lt(h,3):h}function Uw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Lt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let d=0;d<r;d++){let p,m;n===1?(p=i-1-h,m=d):n===2?(p=r-1-d,m=i-1-h):(p=h,m=r-1-d);const g=(h*r+d)*a,y=(m*s+p)*a;for(let _=0;_<a;_++)l[y+_]=o[g+_]}return{width:s,height:u,channels:a,data:l}}const Lw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Lw)*255));return e})();const Ft=48,Fw=320;function Gw(e){return["blank",...e.characters," "]}function Ww(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function qw(e,t){const n=Math.trunc(Ft*t),r=e.width/e.height,i=Math.ceil(Ft*r)>n?n:Math.ceil(Ft*r),a=new Float32Array(3*Ft*n),o=Ft*n,s=e.width/i,u=e.height/Ft;for(let l=0;l<Ft;l++){const h=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,d+1),m=Math.max(0,Math.min(1,h-d));for(let g=0;g<i;g++){const y=(g+.5)*s-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,y-_));for(let M=0;M<3;M++){const S=2-M,T=(d*e.width+_)*e.channels+S,k=(d*e.width+$)*e.channels+S,E=(p*e.width+_)*e.channels+S,v=(p*e.width+$)*e.channels+S,C=e.data[T]*(1-x)+e.data[k]*x,N=e.data[E]*(1-x)+e.data[v]*x,Y=C*(1-m)+N*m;a[M*o+l*n+g]=(Y/255-.5)/.5}}}return{tensor:a,width:n}}const Vw=62,Hw=8,jw=5;function so(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function Kw(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function Kr(e,t){return e.length===0&&t.length===0?100:200*Kw(e,t)/(e.length+t.length)}function Vf(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Kr(n(e),n(t))}function Yw(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(Kr(s,u),Kr(s,l),Kr(u,l))}function Xw(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[so(i),so(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function Zw(e,t){const n=so(e);if(!n||t.length===0)return null;const i=Xw(t).map(h=>({...h,score:Yw(n,h.key)})).sort((h,d)=>d.score-h.score).slice(0,Hw).filter(h=>h.score>=Vw);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=jw),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[Vf(s,u.key),u.score];for(const h of o.slice(1)){const d=[Vf(s,h.key),h.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=h,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Hf=5e3,uo=.75,jf=15,Qw=1.25,Jw=2.4,e_=.003,t_=.85,n_=4,lo=2600,co=2,ho=.3,Kf=.1,Yf=.012,r_=22,Xf=.5,Yr=.12;function Qe(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function i_(e,t,n,r){const i=r.map(ie=>ie[0]),a=r.map(ie=>ie[1]),o=i.reduce((ie,be)=>ie+be,0)/i.length,s=a.reduce((ie,be)=>ie+be,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*n_,h=Math.max(0,Math.trunc(o-l)),d=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),m=Math.min(n.height,Math.trunc(s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<lo?co:1,y=Qe(e,n),_=Qe(e,t),$=new e.Rect(h,p,d-h,m-p),x=y.roi($),M=new e.Mat;g!==1?e.resize(x,M,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(M);const S=new e.Mat,T=new e.Mat;e.cvtColor(_,S,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const k=new e.ORB(Hf),E=new e.KeyPointVector,v=new e.KeyPointVector,C=new e.Mat,N=new e.Mat,Y=new e.Mat,U=[y,_,x,M,S,T,E,v,C,N,Y],V=ie=>{for(const be of U)try{be.delete()}catch{}try{k.delete()}catch{}return ie};if(k.detectAndCompute(S,Y,E,C),k.detectAndCompute(T,Y,v,N),C.rows<8||N.rows<8)return V(null);const R=new e.BFMatcher(e.NORM_HAMMING),G=new e.DMatchVectorVector;R.knnMatch(C,N,G,2);const z=[],P=[];for(let ie=0;ie<G.size();ie++){const be=G.get(ie);if(be.size()===2){const Ae=be.get(0),Ve=be.get(1);if(Ae.distance<uo*Ve.distance){const Ge=E.get(Ae.queryIdx).pt,He=v.get(Ae.trainIdx).pt;z.push(Ge.x,Ge.y),P.push(He.x,He.y)}}}if(G.delete(),R.delete(),z.length/2<8)return V(null);const X=e.matFromArray(z.length/2,1,e.CV_32FC2,z),O=e.matFromArray(P.length/2,1,e.CV_32FC2,P),Z=new e.Mat,D=e.findHomography(X,O,e.RANSAC,5,Z);let H=0;for(let ie=0;ie<Z.rows;ie++)H+=Z.data[ie];const F=D.rows===3?[...D.data64F]:null;if(X.delete(),O.delete(),Z.delete(),D.delete(),F===null||H<jf)return V(null);const W=1/g,ne=[[W,0,h],[0,W,p],[0,0,1]],de=[0,1,2].map(ie=>[0,1,2].map(be=>ne[ie][0]*F[be]+ne[ie][1]*F[3+be]+ne[ie][2]*F[6+be]));return V({H:de,inliers:H})}function po(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*h}const i=Math.abs(r/2)/(t*n);if(i<e_||i>t_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=Qw&&s<=Jw}function fo(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function mo(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(ho*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(U=>[U[0],U[1],U[2]-o*(U[0]+U[1])+0]);for(let U=0;U<3;U++)l[U][2]=r[U][2]-o*r[U][0]-o*r[U][1];const h=Qe(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(d,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),_=[[],[],[]],$=(U,V)=>{const R=(V*s+U)*3;_[0].push(g[R]),_[1].push(g[R+1]),_[2].push(g[R+2])};for(let U=0;U<u;U++)for(let V=0;V<s;V++)(U<y||U>=u-y||V<y||V>=s-y)&&$(V,U);const x=U=>{U.sort((R,G)=>R-G);const V=U.length>>1;return U.length%2?U[V]:(U[V-1]+U[V])/2},M=[x(_[0]),x(_[1]),x(_[2])],S=(U,V)=>{const R=(V*s+U)*3,G=g[R]-M[0],z=g[R+1]-M[1],P=g[R+2]-M[2];return Math.sqrt(G*G+z*z+P*P)>r_},T=Math.max(6,Math.trunc(Kf*i)),k=Math.max(6,Math.trunc(Kf*a)),E=Math.max(2,Math.trunc(Yf*i)),v=Math.max(2,Math.trunc(Yf*a)),C=U=>{let V=0,R=0;for(const G of U)R=G?R+1:0,R>V&&(V=R);return V/Math.max(1,U.length)},N=U=>{let V,R,G,z,P;if(U==="L"?(V=o,R=o+a,G=Math.max(0,o-E-T),z=Math.max(0,o-E),P=!1):U==="R"?(V=o,R=o+a,G=o+i+E,z=Math.min(s,o+i+E+T),P=!1):(V=Math.max(0,o-v-k),R=Math.max(0,o-v),G=o,z=o+i,P=!0),R<=V||z<=G)return 0;const X=[];if(P)for(let O=G;O<z;O++){let Z=0;for(let D=V;D<R;D++)S(O,D)&&Z++;X.push(Z/(R-V)>Xf)}else for(let O=V;O<R;O++){let Z=0;for(let D=G;D<z;D++)S(D,O)&&Z++;X.push(Z/(z-G)>Xf)}return C(X)},Y={L:N("L"),R:N("R"),T:N("T")};return d.delete(),m.delete(),Y}const a_=6e3,o_=8,Zf=.5,s_=.6;function u_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<lo?co:1,a=Qe(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(a_),l=new e.Mat,h=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,h,d);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const _=Qe(e,y),$=new e.Mat;e.cvtColor(_,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute($,l,x,M);const S=[_,x,M],T=()=>{for(const de of S)de.delete();$.delete()};if(M.rows<8){T();continue}const k=new e.DMatchVectorVector;m.knnMatch(M,d,k,2);const E=[],v=[];for(let de=0;de<k.size();de++){const ie=k.get(de);if(ie.size()===2){const be=ie.get(0);if(be.distance<uo*ie.get(1).distance){const Ae=x.get(be.queryIdx).pt,Ve=h.get(be.trainIdx).pt;E.push(Ae.x,Ae.y),v.push(Ve.x,Ve.y)}}}if(k.delete(),E.length/2<8){T();continue}const C=e.matFromArray(E.length/2,1,e.CV_32FC2,E),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),Y=new e.Mat,U=e.findHomography(C,N,e.RANSAC,5,Y);let V=0;for(let de=0;de<Y.rows;de++)V+=Y.data[de];const R=U.rows===3?[...U.data64F]:null;if(C.delete(),N.delete(),Y.delete(),U.delete(),R===null||V<o_){T();continue}const G=1/i,z=[[G*R[0],G*R[1],G*R[2]],[G*R[3],G*R[4],G*R[5]],[R[6],R[7],R[8]]],P=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([de,ie])=>fo(z,de,ie));if(!po(P,t.width,t.height)){T();continue}const X=Qe(e,t),O=e.matFromArray(3,3,e.CV_64F,z.flat()),Z=new e.Mat;e.warpPerspective(X,Z,O,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const D=new e.Mat;e.cvtColor(Z,D,e.COLOR_RGB2GRAY);const H=new e.Mat;e.matchTemplate(D,$,H,e.TM_CCOEFF_NORMED);const F=H.data32F[0];if(X.delete(),O.delete(),Z.delete(),D.delete(),H.delete(),F<Zf){T();continue}const W=mo(e,t,y,z),ne=go(W);p.push({id:g,confidence:Math.max(0,F),footprint:P,built:W!==null&&Math.max(W.L,W.R,W.T)>=Yr,tuckRegion:yo(P,ne)}),T()}}finally{s.delete(),l.delete(),h.delete(),d.delete();try{u.delete(),m.delete()}catch{}}return p}function go(e){return e!==null&&e.R>=Yr?["R"]:[]}function yo(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=ho*a;if(!(o>0))return null;const s=n.reduce((y,_)=>y+_[0],0)/n.length,u=n.reduce((y,_)=>y+_[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[_,$]=l[y],x=n[_],M=n[$];let S=-(M[1]-x[1]),T=M[0]-x[0];const k=(x[0]+M[0])/2,E=(x[1]+M[1])/2;S*(k-s)+T*(E-u)<0&&(S=-S,T=-T);const v=Math.hypot(S,T);v<=1e-6||(S=S/v*o,T=T/v*o,h.push([x[0]+S,x[1]+T],[M[0]+S,M[1]+T]))}const d=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...d)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...d))-m,height:Math.round(Math.max(...p))-g}}function l_(e,t,n,r){const i=i_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>fo(i.H,l,h));if(!po(o,t.width,t.height))return null;const s=mo(e,t,n,i.H);if(s===null)return null;const u=go(s);return{built:Math.max(s.L,s.R,s.T)>=Yr,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const c_=.88;function Qf(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(ho*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*c_),h=s-l;if(h<1)return null;const d=Qe(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],_=[0,1,2].flatMap(E=>[y[E*3],y[E*3+1],y[E*3+2]-o*y[E*3]-o*y[E*3+1]]),$=e.matFromArray(3,3,e.CV_64F,_),x=new e.Mat;e.warpPerspective(d,x,$,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,h,u)),S=new e.Mat;M.copyTo(S);const T=S.data,k=new Uint8ClampedArray(h*u*3);k.set(T.subarray(0,k.length));for(const E of[d,p,m,g,$,x,M,S])try{E.delete()}catch{}return{width:h,height:u,channels:3,data:k}}function d_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<lo?co:1,y=Qe(e,n),_=Qe(e,t),$=y.roi(new e.Rect(h,p,d-h,m-p)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const M=new e.Mat,S=new e.Mat;e.cvtColor(_,M,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const T=new e.ORB(Hf),k=new e.KeyPointVector,E=new e.KeyPointVector,v=new e.Mat,C=new e.Mat,N=new e.Mat,Y=[y,_,$,x,M,S,k,E,v,C,N],U=de=>{for(const ie of Y)try{ie.delete()}catch{}try{T.delete()}catch{}return de};if(T.detectAndCompute(M,N,k,v),T.detectAndCompute(S,N,E,C),v.rows<8||C.rows<8)return U(null);const V=new e.BFMatcher(e.NORM_HAMMING),R=new e.DMatchVectorVector;V.knnMatch(v,C,R,2);const G=[],z=[];for(let de=0;de<R.size();de++){const ie=R.get(de);if(ie.size()===2){const be=ie.get(0),Ae=ie.get(1);if(be.distance<uo*Ae.distance){const Ve=k.get(be.queryIdx).pt,Ge=E.get(be.trainIdx).pt;G.push(Ve.x,Ve.y),z.push(Ge.x,Ge.y)}}}if(R.delete(),V.delete(),G.length/2<8)return U(null);const P=e.matFromArray(G.length/2,1,e.CV_32FC2,G),X=e.matFromArray(z.length/2,1,e.CV_32FC2,z),O=new e.Mat,Z=e.findHomography(P,X,e.RANSAC,5,O);let D=0;for(let de=0;de<O.rows;de++)D+=O.data[de];const H=Z.rows===3?[...Z.data64F]:null;if(P.delete(),X.delete(),O.delete(),Z.delete(),H===null||D<jf)return U(null);const F=1/g,W=[[F,0,h],[0,F,p],[0,0,1]],ne=[0,1,2].map(de=>[0,1,2].map(ie=>W[de][0]*H[ie]+W[de][1]*H[3+ie]+W[de][2]*H[6+ie]));return U({H:ne,inliers:D})}const h_=620;function p_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Jf(e,t,n,r){const i=em(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=h_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),d=Math.max(0,a-l),p=Math.max(0,o-h),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+h);if(m<=d||g<=p)return null;const y=Qe(e,t),_=y.roi(new e.Rect(d,p,m-d,g-p)),$=new e.Mat;e.resize(_,$,new e.Size((m-d)*2,(g-p)*2),0,0,e.INTER_CUBIC);const x=p_(e,$);for(const T of[y,_,$])try{T.delete()}catch{}const M=[(a-d)*2,(o-p)*2,s*2,u*2],S=em(e,x,n,M);return S===null?null:{...S,footprint:S.footprint.map(([T,k])=>[T*.5+d,k*.5+p])}}catch{return null}}function em(e,t,n,r){const i=d_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>fo(i.H,$,x));if(!po(o,t.width,t.height))return null;const s=Qe(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=Qe(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(d,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[s,u,l,h,d,p,m])try{$.delete()}catch{}if(g<Zf)return null;const y=mo(e,t,n,i.H);if(y===null)return null;const _=go(y);return{built:Math.max(y.L,y.R,y.T)>=Yr,footprint:o,overflow:_,edgeScores:y,inliers:i.inliers}}function f_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const d=r*l,p=r*h;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[s,u,l,h])}}return i}const m_=.3,g_=.3;function y_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=m_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<g_;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const It=128,wo=.5;function _o(e){const t=hr(e,It,It),n=It*It,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function tm(e){const t=e[1]??0;return{built:t>=wo,prob:t}}const gr=120,yr=179,w_=1.3,__=3.6,b_=.45,$_=6e-4,x_=.02,v_=6e3,S_=.78,M_=1.25,T_=2.4,I_=.05,E_=1.5,k_=.5,C_=.9,A_=150,R_=18,z_=34,O_=90,N_=130,B_=.13,P_=.15,Xr="magistrates-guild",bo="merchants-guild";function D_(e,t){const n=Qe(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[gr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[yr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,d=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,d,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let _=1;_<m;_++){const $=d.intAt(_,0),x=d.intAt(_,1),M=d.intAt(_,2),S=d.intAt(_,3),T=d.intAt(_,4),k=T/g;k<$_||k>x_||T/Math.max(M*S,1)<b_||y.push({x:$,y:x,w:M,h:S})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function U_(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const F=Qe(e,r);h.gray=new s.Mat,s.cvtColor(F,h.gray,s.COLOR_RGB2GRAY),F.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const W=new s.Mat;u.detectAndCompute(h.gray,W,h.k,h.d),W.delete()}const d=n,p=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(d,p,m,g),p.delete();const y=F=>(m.delete(),g.delete(),F);if(h.d.rows<8||g.rows<8)return y(null);const _=new s.DMatchVectorVector;l.knnMatch(h.d,g,_,2);const $=[],x=[];for(let F=0;F<_.size();F++){const W=_.get(F);if(W.size()===2){const ne=W.get(0);if(ne.distance<S_*W.get(1).distance){const de=h.k.get(ne.queryIdx).pt,ie=m.get(ne.trainIdx).pt;$.push(de.x,de.y),x.push(ie.x,ie.y)}}}if(_.delete(),$.length/2<8)return y(null);const M=s.matFromArray($.length/2,1,s.CV_32FC2,$),S=s.matFromArray(x.length/2,1,s.CV_32FC2,x),T=new s.Mat,k=s.findHomography(M,S,s.RANSAC,5,T);if(M.delete(),S.delete(),T.delete(),k.rows!==3)return k.delete(),y(null);const E=[...k.data64F],v=(F,W)=>{const ne=E[6]*F+E[7]*W+E[8];return[(E[0]*F+E[1]*W+E[2])/ne,(E[3]*F+E[4]*W+E[5])/ne]},C=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([F,W])=>v(F,W));if(C.some(F=>!Number.isFinite(F[0])||!Number.isFinite(F[1])))return k.delete(),y(null);const N=C.map((F,W)=>{const ne=C[(W+1)%4];return Math.hypot(ne[0]-F[0],ne[1]-F[1])}),Y=Math.min(...N);if(Y<1)return k.delete(),y(null);const U=Math.max(...N)/Y;let V=0;for(let F=0;F<4;F++){const[W,ne]=C[F],[de,ie]=C[(F+1)%4];V+=W*ie-de*ne}const R=t,G=Math.abs(V/2)/(R.rows*R.cols);if(U<M_||U>T_||G<I_||G>E_)return k.delete(),y(null);const z=new s.Mat;s.warpPerspective(R,z,k,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),k.delete();const P=new s.Mat;s.cvtColor(z,P,s.COLOR_RGB2GRAY),z.delete();const X=Math.trunc(r.height/2),O=P.roi(new s.Rect(0,0,r.width,X)),Z=h.gray.roi(new s.Rect(0,0,r.width,X)),D=new s.Mat;s.matchTemplate(O,Z,D,s.TM_CCOEFF_NORMED);const H=D.data32F[0];return O.delete(),Z.delete(),D.delete(),P.delete(),y(H)}function L_(e,t,n){let r,i;if(n===Xr)r=bo,i=B_;else if(n===bo)r=Xr,i=P_;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,d=null;for(const[p,m]of[[0,l],[l,s]]){let g=0,y=0;for(let $=o;$<o+u;$++)for(let x=a+p;x<a+m;x++){const M=($*e.width+x)*e.channels,{h:S,s:T,v:k}=xt(e.data[M],e.data[M+1],e.data[M+2]);if(S>=gr&&S<=yr&&T>=30&&T<=170&&k<=170)continue;g++,(r===bo?S>=R_&&S<=z_&&T>=O_&&k>=N_:S>=95&&S<=130&&T>=80)&&y++}if(g<20)continue;const _=y/g;_>h&&(h=_,d={x:a+p,y:o,w:m-p,h:u})}return h>=i&&d!==null?{id:r,box:d}:null}const F_=1.7,G_=140,W_=170,q_=.2,V_=.1,nm=240,rm=80,im=60,H_=50,am="scientists-guild",om="tacticians-guild",Zr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function j_(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let S=0;S<o;S++){let T=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&T++;s[S]=T/a}const u=[];for(let S=0;S<o;S++)s[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],d=h-l;if(d<5)return[];const p=a/d;if(p<w_||p>__)return[];if(p>=F_)return[{x:r,y:i+l,w:a,h:d}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let _=0;for(let S=-4;S<=4;S++){const T=Math.exp(-(S*S)/(2*g*g));y.push(T),_+=T}for(let S=0;S<o;S++){let T=0;for(let k=-4;k<=4;k++){const E=Math.min(o-1,Math.max(0,S+k));T+=s[E]*y[k+4]}m[S]=T/_}const $=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if(x>$){let S=1/0;for(let T=$;T<x;T++)m[T]<S&&(S=m[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function K_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const d=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:o,height:s,channels:3,data:u}}function Y_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=xt(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=G_&&o<=W_&&n++)}return t===0?0:n/t}function X_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=xt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=gr&&a<=yr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function sm(e,t){const n=Qe(e,t),r=new e.Mat;e.resize(n,r,new e.Size(nm,rm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:nm,height:rm,channels:3,data:i}}function Z_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function um(e,t){const n=Z_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:_,s:$,v:x}=xt(n.data[y],n.data[y+1],n.data[y+2]);!(_>=gr&&_<=yr&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const o=a<20,s=Qe(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,d=0,p=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(h+=l[g*3]*100/255,d+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,d/m,p/m]}function Q_(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:d,v:p}=xt(e.data[l],e.data[l+1],e.data[l+2]);h>=gr&&h<=yr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function J_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=xt(e.data[i],e.data[i+1],e.data[i+2]);o>=im&&s>=H_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<im&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function eb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function lm(e,t){const n=Qe(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function tb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=sm(e,a);n.set(i,lm(e,o)),Zr.includes(i)&&r.set(i,um(e,o))}return{gray:n,warmLab:r}}function nb(e,t,n){const r=sm(e,t),i=Q_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Xr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return am;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return om;const a=J_(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=Xr;else if(s==="green")u=am;else if(s==="red")u=om;else{const l=lm(e,r);let h="",d=-2;for(const p of Zr){const m=n.gray.get(p);if(m===void 0)continue;const g=eb(l,m);g>d&&(d=g,h=p)}u=h||Zr[0]}if(Zr.includes(u)&&n.warmLab.size>0){const l=um(e,r);let h=u,d=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<d&&(d=g,h=p)}return h}return u}function rb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=D_(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(v_),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const _ of n.keys())p.set(_,{});const m=Qe(e,t);let g=null;try{for(const _ of o){if(r!==void 0&&Date.now()>r)break;const $=_.x+Math.trunc(_.w/2),x=_.y+Math.trunc(_.h/2),M=Math.max(A_,Math.trunc(C_*Math.max(_.w,_.h))),S=Math.max(0,$-M),T=Math.max(0,x-M),k=Math.min(t.width,$+M),E=Math.min(t.height,x+M);if(k-S<16||E-T<16)continue;const v=m.roi(new l.Rect(S,T,k-S,E-T)),C=new l.Mat;l.cvtColor(v,C,l.COLOR_RGB2GRAY);let N=null,Y=-2;for(const[G,z]of n){if(r!==void 0&&Date.now()>r)break;const P=U_(e,v,C,z,p.get(G),h,d);P!==null&&P>Y&&(Y=P,N=G)}v.delete(),C.delete();const U=new Set;if(N!==null&&Y>=k_){a.push({id:N,boundingBox:{x:_.x,y:_.y,width:_.w,height:_.h},confidence:1}),U.add(N);const G=L_(t,_,N);G&&(a.push({id:G.id,boundingBox:{x:G.box.x,y:G.box.y,width:G.box.w,height:G.box.h},confidence:.9}),U.add(G.id))}if(i===void 0||i.size===0)continue;const V=j_(s,u,_);if(V.length!==2)continue;const R=V.map(G=>K_(t,G));if(!R.some(G=>G.width*G.height===0||X_(G)<V_))for(let G=0;G<V.length;G++){const z=R[G];if(Y_(z)<q_)continue;g===null&&(g=tb(e,i));const P=nb(e,z,g);if(P&&!U.has(P)){U.add(P);const X=V[G];a.push({id:P,boundingBox:{x:X.x,y:X.y,width:X.w,height:X.h},confidence:1})}}}}finally{m.delete();for(const _ of p.values()){const $=_;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{h.delete(),d.delete()}catch{}}return a}const cm=128,ib=.56,ab=15,ob=.58,sb=70,ub=50,lb=.12,cb=.2,db=.1,hb=.17,dm=.15;function pb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function hm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),d=Math.min(n,o+u),p=Math.min(r,s+u),m=d-l,g=p-h,y=new Uint8Array(m*g*i);for(let _=0;_<g;_++){const $=((_+h)*n+l)*i;y.set(a.subarray($,$+m*i),_*m*i)}return{width:m,height:g,channels:i,data:y}}function fb(e){const t=hm(e,ib),n=aw(t),r=Gf(n,cm,cm);return ow(r)}function mb(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function gb(e){const t=new Map([["masonry",0],["strategy",0]]),n=hm(e,ob),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:_}=xt(o[m],o[m+1],o[m+2]);y>=sb&&_>=ub&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/s,d=l/s;return h>=lb&&t.set("masonry",dm*Math.min(1,h/cb)),d>=db&&t.set("strategy",dm*Math.min(1,d/hb)),t}function yb(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=fb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=ab)a.push(lw(n,l,i));const o=new Map;for(const[l,h]of t){let d=-1/0;for(const p of a){const m=mb(p,h);m>d&&(d=m)}o.set(l,d)}for(const[l,h]of gb(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const Qt=224,wb=512,_b=[.485,.456,.406],bb=[.229,.224,.225];function $b(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function xb(e){const t=to(e,Qt,Qt),n=Qt*Qt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-_b[a])/bb[a];return r}function vb(e){const t=3*Qt*Qt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(xb(Lt(e,r)),r*t);return n}function Sb(e,t=wb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Mb(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Un=96,Tb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Ib=.45;function Eb(e){const t=to(e,Un,Un),n=Un*Un,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function kb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Ib?Tb[t]??"":"",prob:n}}const Ln=128,Cb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],Ab=.5,Rb=.9;function zb(e){const t=hr(e,Ln,Ln),n=Ln*Ln,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Ob(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,d=(o*n+s)*r;for(let p=0;p<r;p++)a[d+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function Nb(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=Ob(n);return n}function Bb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function Pb(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:Nb(e,i),o=await t(zb(a)),s=Bb(o);s.prob>r&&(r=s.prob,n=s.index)}return{id:r>=Ab?Cb[n]??"":"",prob:r}}const Fn=96,Db=[1,2,3,4,5,6,7],Ub=.8;function Lb(e){const t=kf(e,e.width*2,e.height*2),n=hr({width:e.width*2,height:e.height*2,channels:3,data:t},Fn,Fn),r=Fn*Fn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function Fb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:Db[t],prob:e[t]}}const Jt=128,pm=.35,Gb=["fp","laurel"],Wb=.85;function qb(e){const r=(e.width<Jt&&e.height<Jt?kf:hr)(e,Jt,Jt),i=Jt*Jt,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function Vb(e){return e[Gb.indexOf("fp")]}const en=64,fm=.5,Hb=[.67,1.24];function jb(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let _=0;_<l;_++){const $=a+_,x=$-n;for(let M=0;M<u;M++){const S=i+M,T=S-t,k=(_*u+M)*3;if(T*T+x*x<=p){const E=($*e.width+S)*h;d[k]=e.data[E],d[k+1]=e.data[E+1],d[k+2]=e.data[E+2]}else d[k]=255,d[k+1]=255,d[k+2]=255}}const m=hr({width:u,height:l,channels:3,data:d},en,en),g=en*en,y=new Float32Array(3*g);for(let _=0;_<g;_++)for(let $=0;$<3;$++)y[$*g+_]=m[_*3+$]/255;return y}function Kb(e){return e[1]}const Yb=2.25,Xb=3,Zb=1.15,Qb=.5,Jb=2.5,e1=.75,t1=2.25,n1=1.3,r1=.77;function Qr(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function i1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function mm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function a1(e,t,n){if(n.length>=3&&mm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,d=l-s,p=h*h+d*d,m=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(o+m*h),t-(s+m*d)))}return r}function o1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function s1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let d=0,p=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const _=y/g;if(g<0?d=Math.max(d,_):p=Math.min(p,_),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const $o=e=>e.box[3]/Math.max(1,e.box[2]),Gt=e=>$o(e)>Zb,Gn=e=>$o(e)>=n1||$o(e)<=r1;function xo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function u1(e,t,n,r,i){const a=new Set(t),o=[...e.map((z,P)=>({box:[z[0],z[1],z[2],z[3]],kind:a.has(P)?"card":"tucked",src:["banner",P]})),...n.map((z,P)=>({box:[z[0],z[1],z[2],z[3]],kind:"wonder",src:["wonder",P]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],pointOwner:()=>"player"};const l=o.map(z=>[z.box[0]+z.box[2]/2,z.box[1]+z.box[3]/2]);let h=o.filter(z=>z.kind!=="wonder").map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,P)=>z-P);h.length===0&&(h=o.map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,P)=>z-P));const d=h[Math.floor(h.length/2)],p=(Yb*d)**2,m=o.map((z,P)=>P),g=z=>{let P=z;for(;m[P]!==P;)m[P]=m[m[P]],P=m[P];return P},y=o.map((z,P)=>z.kind==="card"?P:-1).filter(z=>z>=0),_=o.map((z,P)=>z.kind!=="card"?P:-1).filter(z=>z>=0);for(let z=0;z<y.length;z+=1)for(let P=z+1;P<y.length;P+=1){const X=y[z],O=y[P],Z=o[X],D=o[O];if(Gn(Z)&&Gn(D)&&Gt(Z)!==Gt(D))continue;const H=l[X][0]-l[O][0],F=l[X][1]-l[O][1],W=H*H+F*F;let ne=W<=p;!ne&&Gn(Z)&&Gn(D)&&Gt(Z)===Gt(D)&&W<=(4*d)**2&&(ne=Qr(xo(Z),xo(D))<=.5*d),ne&&(m[g(X)]=g(O))}for(let z=0;z<_.length;z+=1)for(let P=z+1;P<_.length;P+=1){const X=_[z],O=_[P];Qr(o[X].box,o[O].box)<=e1*d&&(m[g(X)]=g(O))}const $=new Map;for(const z of _){const P=g(z);$.set(P,[...$.get(P)??[],z])}const x=new Map;for(const z of y){const P=g(z);x.set(P,[...x.get(P)??[],z])}for(const z of $.values()){const P=z.filter(D=>o[D].kind==="wonder"&&Gn(o[D])).map(D=>Gt(o[D])),X=P.length>0?P.filter(Boolean).length*2>P.length:null,O=[];for(const[D,H]of x){let F=Number.POSITIVE_INFINITY;for(const de of z)for(const ie of H)F=Math.min(F,Qr(o[de].box,o[ie].box));if(F>t1*d)continue;const ne=H.filter(de=>Gt(o[de])).length/H.length>=.5;X!==null&&ne!==X||O.push([D,F,ne])}if(O.length===0)continue;const Z=new Set(O.map(D=>D[2]));if(O.length>=2&&Z.size===1&&X!==null){const D=O[0][0];for(const[H]of O.slice(1))m[g(H)]=g(D);m[g(z[0])]=g(D)}else{const D=O.reduce((H,F)=>F[1]<H[1]?F:H);m[g(z[0])]=g(D[0])}}let M=new Map;for(let z=0;z<o.length;z+=1){const P=g(z);M.set(P,[...M.get(P)??[],z])}const S=o.map((z,P)=>z.kind==="wonder"?P:-1).filter(z=>z>=0);if(S.length>0){const z=(X,O)=>{const[Z,D,H,F]=xo(o[X]),[W,ne,de,ie]=o[O].box,be=Math.max(0,Math.min(Z+H,W+de)-Math.max(Z,W)),Ae=Math.max(0,Math.min(D+F,ne+ie)-Math.max(D,ne));return be*Ae>=.9*o[X].box[2]*o[X].box[3]},P=new Map;for(let X=0;X<o.length;X+=1)if(!(o[X].kind!=="card"||!Gn(o[X])))for(const O of S){const Z=Qr(o[X].box,o[O].box);if(Z<=.8*d&&Gt(o[X])!==Gt(o[O])&&z(X,O)){const D=P.get(O);(!D||Z<D[1])&&P.set(O,[X,Z])}}for(const[X,[O]]of P){const Z=g(X);for(const[D,H]of M){const F=H.indexOf(O);if(F>=0&&D!==Z){H.splice(F,1),M.set(Z,[...M.get(Z)??[],O]),o[O].kind="tucked";break}}}M=new Map([...M].filter(([,X])=>X.length>0))}const T=z=>z.filter(P=>o[P].kind==="card").length,k=z=>{const P=z.filter(X=>o[X].kind==="card"||o[X].kind==="wonder");return P.length===0?null:P.filter(X=>Gt(o[X])).length/P.length},E=z=>[z.reduce((P,X)=>P+l[X][0],0)/z.length,z.reduce((P,X)=>P+l[X][1],0)/z.length],v=[i[0]/2,i[1]/2],C=[...M.values()].sort((z,P)=>{const X=T(z),O=T(P);if(X!==O)return O-X;const Z=Math.hypot(E(z)[0]-v[0],E(z)[1]-v[1]),D=Math.hypot(E(P)[0]-v[0],E(P)[1]-v[1]);return Z-D}),N=E(C[0]),Y=k(C[0]),U=[],V=[];let R=!1;return C.forEach((z,P)=>{let X;if(P===0||T(z)<Xb)X="player";else{const D=k(z),H=D!==null&&Y!==null&&Math.abs(D-Y)>=Qb,F=E(z),W=r.some(ne=>s1(N,F,ne));X=H||W?"opponent":"player"}X==="opponent"&&(R=!0);const O=[],Z=[];for(const D of z){const[H,F,W,ne]=o[D].box;O.push([H,F],[H+W,F],[H,F+ne],[H+W,F+ne]),Z.push(o[D].box);const[de,ie]=o[D].src;de==="banner"?s[ie]=X:u[ie]=X}U.push([X,i1(O)]),V.push([X,Z])}),{bannerOwner:s,wonderOwner:u,opponentFound:R,hulls:U,pointOwner:(z,P)=>{if(U.length===0)return"player";const X=d>0?Jb*d:Number.POSITIVE_INFINITY,O=F=>Math.min(...V[F][1].map(W=>o1(z,P,W))),Z=U.map(([,F],W)=>F.length>=3&&mm(z,P,F)?W:-1).filter(F=>F>=0);if(Z.length>0){const F=Z.reduce((W,ne)=>O(ne)<O(W)?ne:W);return U[F][0]}let D=-1,H=Number.POSITIVE_INFINITY;return U.forEach(([,F],W)=>{const ne=a1(z,P,F);ne<H&&(D=W,H=ne)}),D>=0&&H<=X?U[D][0]:"none"}}}const l1=1.1,c1=3.2,d1=20,h1=.5,p1=1280,f1=.18,m1=28,g1=.3;function y1(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,d)=>d)];const l=(s.reduce((h,d)=>h+d,0)/s.length+u.reduce((h,d)=>h+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function w1(e,t,n=l1){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of y1(s)){if(l.length===0)continue;const h=l.map(C=>e[C]),d=h.map(C=>Math.min(C[2],C[3])).sort((C,N)=>C-N),p=d[Math.trunc(d.length/2)],m=c1*p,g=Math.max(0,Math.min(...h.map(C=>C[0]))-m),y=Math.max(0,Math.min(...h.map(C=>C[1]))-m),_=Math.min(r,Math.max(...h.map(C=>C[0]+C[2]))+m),$=Math.min(i,Math.max(...h.map(C=>C[1]+C[3]))+m),x=Math.max(_-g,$-y);if(x<=0)continue;const M=h1*p*p1/x,S=M>0?Math.max(1,Math.ceil(d1/M)):1;if(S===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(_),Math.trunc($)]);continue}const T=_-g>=$-y,E=(T?_-g:$-y)/S,v=E*(1+f1);for(let C=0;C<S;C++){let N=(T?g:y)+C*E-(v-E)/2;N=Math.max(T?g:y,N);const Y=Math.min(T?_:$,N+v);u.push(T?[Math.trunc(N),Math.trunc(y),Math.trunc(Y),Math.trunc($)]:[Math.trunc(g),Math.trunc(N),Math.trunc(_),Math.trunc(Y)])}}return u.filter(([l,h,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-h))>=n)}function _1(e,t,n,r=m1){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const d=(s+l)/2+i,p=(u+h)/2+a;o.some(([g,y,_,$])=>{const x=d-(g+_)/2,M=p-(y+$)/2;return Math.hypot(x,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function b1(e,t,n,r=g1){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function $1(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function x1(e,t,n,r){return n.length===0?!1:$1(e,t,n)&&!b1(e,t,r)}const gm=4,ym=8,Jr=5,vn="base-game rule";function Et(e,t){return{code:e,message:t,severity:"warning"}}function vo(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function v1(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>gm&&i.push(Et("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${gm} (${vn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=vo(n);return a.length>0&&i.push(Et("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${vn}), so one of the two readings is wrong.`)),i}function S1(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>ym&&t.push(Et("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${ym} are in play (${vn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(d=>l.has(d)).sort();h.length>0&&t.push(Et("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function M1(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>Jr&&n.push(Et("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${Jr} are in play (${vn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=vo(r);if(i.length>0&&n.push(Et("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${vn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==Jr&&n.push(Et("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${Jr} are in play (${vn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Et("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function T1(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Et("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=vo(e.filter(o=>!!o));return a.length>0&&r.push(Et("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${vn}).`)),r}const I1=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],E1=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],k1=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],C1=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],A1=[...E1,...k1,...C1,...I1];Object.fromEntries(A1.map(e=>[e.id,e]));const R1=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Pe="/7wd-scorer/models/";let wm=!1;const ei=new Map;function _m(){var e;wm||(Ne.wasm.wasmPaths="/7wd-scorer/ort/",Ne.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,wm=!0)}const So=new Set;function z1(e){_m();let t=ei.get(e);return t===void 0&&(t=nt.create(`${Pe}${dt[e].onnx}`,{executionProviders:So.has(e)?["wasm"]:["webgpu","wasm"]}),ei.set(e,t),t.catch(()=>ei.delete(e))),t}let Mo=null,To=null;const O1=.75,N1=4,B1=.65,P1=3e4;let Io=null;function Eo(){return Io===null&&(Io=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Io}const bm=new Map;function ko(e){let t=bm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Pe}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),bm.set(e,t)),t}function Co(e){return ko(`wonder-refs/${e}.jpg`)}const $m=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function D1(){const e=new Map;for(const t of $m){const n=await ko(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function U1(){const e=new Map;for(const t of $m){const n=await ko(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const L1=.6,F1=12,G1=45e3;let Ao=null;function xm(){return Ao===null&&(_m(),Ao=(async()=>{try{const[e,t,n,r]=await Promise.all([nt.create(`${Pe}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),nt.create(`${Pe}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Pe}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Pe}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Gw(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Ao}async function W1(e,t){const n=Math.max(Fw/Ft,t.width/t.height),{tensor:r,width:i}=qw(t,n),a={[e.rec.inputNames[0]]:new Le("float32",r,[1,3,Ft,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,d=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const _=m*l;for(let $=0;$<l;$++){const x=h[_+$];x>y&&(y=x,g=$)}d[m]=g,p[m]=y}return Ww(d,p,e.charset)}async function q1(e,t){const n=await xm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+G1;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=Lt(e,o),u=Aw(s),l={[n.det.inputNames[0]]:new Le("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],d=Pw(h.data,u,s.width,s.height).slice(0,F1);console.debug(`[wonders-ocr] rot ${o*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){a=!0;break e}const m=Dw(s,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await W1(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<L1||g.trim().length<N1)continue;const _=Zw(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",_),_===null||_.confidence<O1||_.kind!=="wonder")continue;const $=r.get(_.id);($===void 0||_.confidence>$.confidence)&&r.set(_.id,{id:_.id,name:_.name,confidence:_.confidence,nameBox:Ro(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Ro(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(d=>d[0]),u=o.map(d=>d[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function V1(){return To===null&&(To=fetch(`${Pe}laurel_gallery.json`).then(async e=>e.ok?_w(await e.json()):[]).catch(()=>[])),To}function H1(e,t,n,r){return Wn(e,t-r,n-r,2*r,2*r)}function Wn(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+o)*e.width+(m+a))*e.channels,y=(p*l+m)*3;d[y]=e.data[g],d[y+1]=e.data[g+1],d[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:d}}function j1(){return Mo===null&&(Mo=fetch(`${Pe}token_templates.json`).then(async e=>e.ok?pb(await e.json()):new Map).catch(()=>new Map)),Mo}let zo=null;function K1(){return zo===null&&(zo=(async()=>{try{const e=await fetch(`${Pe}token_embed_index.json`);if(!e.ok)return null;const t=$b(await e.json());return{session:await nt.create(`${Pe}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),zo}const Y1=.92;let Oo=null;function X1(){return Oo===null&&(Oo=(async()=>{try{return(await fetch(`${Pe}guild_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Oo}let No=null;function Z1(){return No===null&&(No=(async()=>{try{return(await fetch(`${Pe}laurel_digit.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),No}let Bo=null;function Q1(){return Bo===null&&(Bo=(async()=>{try{return(await fetch(`${Pe}laurel_filter.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Bo}async function J1(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(pm*s),h=Math.trunc(pm*u),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,o+h),y=Wn(e,d,p,m-d,g-p);if(y.width<=0||y.height<=0)return null;try{const _=qb(y),$=await n.run({[n.inputNames[0]]:new Le("float32",_,[1,3,Jt,Jt])});return Vb($[n.outputNames[0]].data)}catch{return null}}let Po=null;function e2(){return Po===null&&(Po=(async()=>{try{return(await fetch(`${Pe}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Po}async function t2(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=jb(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const h=new Float32Array(t.length*3*en*en);l.forEach((m,g)=>h.set(m,g*m.length));const p=(await n.run({[n.inputNames[0]]:new Le("float32",h,[t.length,3,en,en])}))[n.outputNames[0]].data;return t.map((m,g)=>Kb(p.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let Do=null;function vm(){return Do===null&&(Do=(async()=>{try{return(await fetch(`${Pe}tuck_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Do}const Sm=.2,n2=.3,Mm=.25,Tm=.1;let Uo=null;function Im(){return Uo===null&&(Uo=(async()=>{try{return(await fetch(`${Pe}track_band.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Uo}async function Em(e,t,n){try{const r=no(t,1280,Ty(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new Le("float32",r.tensor,[1,3,1280,1280])});return fr(i[e.outputNames[0]].data,r.params,Tm)}catch{return[]}}let Lo=null;function r2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Mm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Mm)&&r>1==h>1)return!0}return!1}const i2=.4;function a2(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function o2(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||a2(a,u)>=i2)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function s2(){return Lo===null&&(Lo=(async()=>{try{return(await fetch(`${Pe}tuck_box.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Lo}async function u2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Sm),u=Math.round(o*Sm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),d=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),m=d-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,_=new Uint8ClampedArray(m*g*y);for(let M=0;M<g;M++){const S=((h+M)*e.width+l)*y;_.set(e.data.subarray(S,S+m*y),M*m*y)}const $={width:m,height:g,channels:y,data:_};let x=null;for(let M=0;M<4;M++){const S=M===0?$:Lt($,M),T=S.width,k=T-Math.floor(n2*T),E=T-k;if(E<=0)continue;const v=new Uint8ClampedArray(E*S.height*S.channels);for(let V=0;V<S.height;V++){const R=(V*T+k)*S.channels;v.set(S.data.subarray(R,R+E*S.channels),V*E*S.channels)}const C={width:E,height:S.height,channels:S.channels,data:v},N=_o(C),U=(await n.run({[n.inputNames[0]]:new Le("float32",N,[1,3,It,It])}))[n.outputNames[0]].data[1]??0;x=x===null?U:Math.max(x,U)}return x}let Fo=null;function l2(){return Fo===null&&(Fo=(async()=>{try{return(await fetch(`${Pe}wonder_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Fo}async function c2(e,t,n,r,i,a){var p;const o=(m,g,y,_)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),M=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+_)),T=M-$,k=S-x;if(T<=0||k<=0)return null;const E=t.channels,v=new Uint8ClampedArray(T*k*E);for(let C=0;C<k;C++){const N=((x+C)*t.width+$)*E;v.set(t.data.subarray(N,N+T*E),C*T*E)}return{width:T,height:k,channels:E,data:v}},s=async m=>(await r.run({[r.inputNames[0]]:new Le("float32",m,[1,3,Ln,Ln])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,_,$]=m;if(_<=0||$<=0)continue;const x=o(g,y,_,$);if(x===null)continue;const{id:M,prob:S}=await Pb(x,s);if(M===""||S<Rb)continue;const T=u.get(M);(T===void 0||S>T.prob)&&u.set(M,{prob:S,box:m})}const l=[],h=await vm(),d=await s2();for(const[m,{prob:g,box:y}]of u){const[_,$,x,M]=y;let S={x:Math.round(_),y:Math.round($),width:Math.round(x),height:Math.round(M)},T=null,k=[],E=null;if(Date.now()<i)try{const G=await Co(m);if(G!==null){const z=Jf(e,t,G,y);if(z!==null){T=z.footprint,k=z.overflow;const P=T.map(D=>D[0]),X=T.map(D=>D[1]),O=Math.max(0,Math.round(Math.min(...P))),Z=Math.max(0,Math.round(Math.min(...X)));if(S={x:O,y:Z,width:Math.min(t.width,Math.round(Math.max(...P)))-O,height:Math.min(t.height,Math.round(Math.max(...X)))-Z},h!==null)try{const D=Qf(e,t,G,T);if(D!==null){const H=_o(D),F=await h.run({[h.inputNames[0]]:new Le("float32",H,[1,3,It,It])});E=tm(F[h.outputNames[0]].data).prob}}catch{}}}}catch(G){console.warn(`[wonders-cls] ${m} registration failed:`,G)}const v=T!==null?yo(T,k):null,C=[];if(E!==null&&C.push(E>=wo?1:0),d!==null)try{const G=await u2(t,y,d);G!==null&&C.push(G>=wo?1:0)}catch{}const N=v??S,Y=a.some(G=>{const z=G.box[0]+G.box[2]/2,P=G.box[1]+G.box[3]/2;return z>=N.x&&z<=N.x+N.width&&P>=N.y&&P<=N.y+N.height});C.push(Y?1:0);let U=C.length>0&&C.reduce((G,z)=>G+z,0)*2>C.length;U&&r2(N,S,a)&&(U=!1);const V={id:m,name:((p=R1[m])==null?void 0:p.name)??m,builtWithCardUnderneath:U,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},R=v??S;l.push({obj:V,edgeScores:null,zone:{x0:R.x,y0:R.y,x1:R.x+R.width,y1:R.y+R.height}})}return l}async function d2(e,t){const n=await K1();if(n!==null)try{const r=vb(e),i=new Le("float32",r,[4,3,Qt,Qt]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Mb(n.index,Sb(o));return u<Y1?["",-1]:[s,u]}catch{}return yb(e,t)}async function Go(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function kt(e,t){const n=dt[e],{tensor:r,params:i}=no(t,n.input),a=async()=>{const o=await z1(e),s={[o.inputNames[0]]:new Le("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(So.has(e))throw o;return So.add(e),ei.delete(e),await a()}}const h2=6,p2=2,f2=5,m2=2;async function g2(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Go(e),r=await kt("banner",n),i=io(r.rows,r.params,dt.banner.conf);if(t.banners=i.length,i.length>=h2)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await kt("laurel",n),o=fr(a.rows,a.params,dt.laurel.conf);if(t.laurels=o.length,o.length>=p2)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await kt("coin",n),u=Nf(s.rows,s.params,dt.coin.conf);return t.coins=u.length,u.length>=f2?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=m2?{...t,kind:"board",confidence:.4}:t}function y2(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Wo(e,t,n,r,i=()=>{},a="player"){const o={},s=[],u=[],l=[],h=[],d=[],p=[];let m=0,g=0,y=0,_=0,$=0;for(const E of e){$+=1;const v=`${t} photo ${$}/${e.length}`;r(`${v}: reading pixels…`,.01);const C=await Go(E);r(`${v}: card banners…`,.04);const N=await kt("banner",C);let Y=io(N.rows,N.params,dt.banner.conf);r(`${v}: progress tokens…`,.08);let U=[];const V=await Im();V!==null&&(U=await Em(V,C,Y));const R=await kt("token",C),G=await j1(),z=l.length,P=[];for(const L of zy(R.rows,R.params,dt.token.conf)){if(P.push({cx:L.cx,cy:L.cy,r:L.r}),U.some(([ue,se,ye,ze])=>L.cx>=ue&&L.cx<=ye&&L.cy>=se&&L.cy<=ze))continue;const[Q,ee]=await d2(Ff(C,L),G);Q===""&&ee<0?P.pop():Q===""?g+=1:l.some(ue=>ue.id===Q)||l.push({id:Q,center:[L.cx,L.cy],radius:L.r,confidence:Math.round(ee*1e4)/1e4})}r(`${v}: coins…`,.14);const X=await kt("coin",C),O=Nf(X.rows,X.params,dt.coin.conf).filter(L=>!P.some(Q=>(L.cx-Q.cx)**2+(L.cy-Q.cy)**2<=L.r*L.r)),Z=await e2(),D=Z!==null?await t2(C,O,Z):null,H=(D!==null?O.filter((L,Q)=>D[Q]>=fm).map(L=>L.r):[]).sort((L,Q)=>L-Q),F=H.length>0?H.length%2===1?H[(H.length-1)/2]:(H[H.length/2-1]+H[H.length/2])/2:null,[W,ne]=Hb,de=O.map((L,Q)=>{const ee=D!==null?D[Q]:null;return ee===null||ee>=fm?"keep":F!==null&&F>0&&L.r/F>=W&&L.r/F<=ne?"suspect":"drop"}),ie=O.filter((L,Q)=>de[Q]==="keep"),be=iw(C,ie),Ae=[];let Ve=0;if(O.forEach((L,Q)=>{if(de[Q]!=="drop"){if(de[Q]==="suspect"){const ee=D[Q];Ae.push({denomination:null,center:[L.cx,L.cy],radius:L.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${ee.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}Ae.push({denomination:be[Ve++],center:[L.cx,L.cy],radius:L.r,denomSource:"colour"})}}),O.length>0&&Ae.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${O.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),Ae.length>=2){const L=Ae.map(ee=>ee.radius).sort((ee,ue)=>ee-ue),Q=L.length%2===1?L[(L.length-1)/2]:(L[L.length/2-1]+L[L.length/2])/2;if(Q>0)for(const ee of Ae)ee.radius/Q>2&&(ee.suspect=!0,ee.suspectReason=`radius ${ee.radius}px is ${(ee.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const Ge=h.length,He=[],ke=Date.now()+P1;let ce=null,et=null;const Sn=()=>(et===null&&(et=(async()=>{try{const{rows:L,params:Q}=await kt("wonder",C);return Cf(L,Q,dt.wonder.conf,Number.POSITIVE_INFINITY).map(ee=>ee.box)}catch{return[]}})()),et),ht=[];let lt=!1;const tn=await l2();if(tn!==null){const L=await Sn();if(L.length>0&&(ce=await Eo(),ce!==null)){r(`${v}: identifying wonders…`,.35);const Q=await c2(ce,C,L,tn,ke,Y);for(const ee of Q)h.some(ue=>ue.id===ee.obj.id)||(h.push(ee.obj),ht.push({obj:ee.obj,edgeScores:ee.edgeScores,zone:ee.zone}),He.push(ee.zone));lt=Q.length>0}}lt||r(`${v}: wonder names…`,.2);const nn=lt?{wonders:[],aborted:!1}:await q1(C,(L,Q)=>r(`${v}: ${L}`,.2+.35*(Q??0)));ce===null&&(ce=nn.wonders.length>0?await Eo():null);for(const L of nn.wonders){let Q=null;if(ce!==null&&Date.now()<ke){r(`${v}: registering ${L.name}…`,.6);try{const ee=await Co(L.id);if(ee!==null){let ue=l_(ce,C,ee,[[L.nameBox.x,L.nameBox.y],[L.nameBox.x+L.nameBox.width,L.nameBox.y],[L.nameBox.x+L.nameBox.width,L.nameBox.y+L.nameBox.height],[L.nameBox.x,L.nameBox.y+L.nameBox.height]]);if(ue===null){const se=await Sn(),ye=f_(se,L.nameBox.x+L.nameBox.width/2,L.nameBox.y+L.nameBox.height/2);ye!==null&&(ue=Jf(ce,C,ee,ye))}if(ue!==null){let se=ue.built,ye=!1;const ze=await vm();if(ze!==null)try{const Te=Qf(ce,C,ee,ue.footprint);if(Te!==null){const je=_o(Te),Je=await ze.run({[ze.inputNames[0]]:new Le("float32",je,[1,3,It,It])});se=tm(Je[ze.outputNames[0]].data).built,ye=!0}}catch{}const he=ue.footprint.map(Te=>Te[0]),we=ue.footprint.map(Te=>Te[1]),Me=Math.max(0,Math.round(Math.min(...he))),We=Math.max(0,Math.round(Math.min(...we)));Q={built:se,boundingBox:{x:Me,y:We,width:Math.min(C.width,Math.round(Math.max(...he)))-Me,height:Math.min(C.height,Math.round(Math.max(...we)))-We},tuckRegion:yo(ue.footprint,ue.overflow),edgeScores:ue.edgeScores,builtByTuck:ye}}}}catch(ee){console.warn(`[wonders-reg] ${L.id} failed:`,ee)}}if(Q!==null){const ee=Q.tuckRegion??Q.boundingBox;He.push({x0:ee.x,y0:ee.y,x1:ee.x+ee.width,y1:ee.y+ee.height})}else{const ee=Math.max(8,L.nameBox.height),ue=Math.round(L.nameBox.width*.15);He.push({x0:L.nameBox.x-ue,y0:L.nameBox.y-ee*2.5,x1:L.nameBox.x+L.nameBox.width+ue,y1:L.nameBox.y+L.nameBox.height+ee*2.5})}if(!h.some(ee=>ee.id===L.id)){const ee=(Q==null?void 0:Q.builtByTuck)===!0,ue=ee?Q.built:!1,se=!ee&&(Q==null?void 0:Q.built)===!0,ye={id:L.id,name:L.name,builtWithCardUnderneath:ue,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:L.confidence,...se?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(ye),ht.push({obj:ye,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:He[He.length-1]})}}if(!lt){const L=y_(ht.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),Y.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of L){const ee=ht[Q];ee.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${ee.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(Y.length>0){const Q=new Set(L);for(let ee=0;ee<ht.length;ee++){const ue=ht[ee];if(Q.has(ee)||!ue.obj.builtWithCardUnderneath)continue;const se=ue.obj.tuckRegion;if(se===void 0)continue;if(!Y.some(ze=>{const he=ze.box[0]+ze.box[2]/2,we=ze.box[1]+ze.box[3]/2;return he>=se.x&&he<=se.x+se.width&&we>=se.y&&we<=se.y+se.height})){const ze=ue.obj;ze.builtWithCardUnderneath=!1,ze.suspect=!0,ze.suspectReason="built-unconfirmed"}}}}if(nn.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${v}: the wonder-name read ran out of its time budget on this device — ${nn.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),ce!==null&&nn.wonders.length>0&&Date.now()<ke)try{const L=await xm(),Q=(L==null?void 0:L.catalog.filter(ue=>ue.kind==="wonder").map(ue=>ue.id))??[],ee=new Map;for(const ue of Q)if(!h.some(se=>se.id===ue)){const se=await Co(ue);se!==null&&ee.set(ue,se)}if(ee.size>0){r(`${v}: searching occluded wonders…`,.7);const ue=u_(ce,C,ee,ke);for(const se of ue){const ye=se.footprint.map(Je=>Je[0]),ze=se.footprint.map(Je=>Je[1]),he=Math.max(0,Math.round(Math.min(...ye))),we=Math.max(0,Math.round(Math.min(...ze))),Me={x:he,y:we,width:Math.min(C.width,Math.round(Math.max(...ye)))-he,height:Math.min(C.height,Math.round(Math.max(...ze)))-we};if(h.some(Je=>{const xe=Je.boundingBox,jn=Math.max(0,Math.min(xe.x+xe.width,Me.x+Me.width)-Math.max(xe.x,Me.x)),Kn=Math.max(0,Math.min(xe.y+xe.height,Me.y+Me.height)-Math.max(xe.y,Me.y)),De=jn*Kn,Ke=xe.width*xe.height+Me.width*Me.height-De;return Ke>0&&De/Ke>s_}))continue;const Te=L==null?void 0:L.catalog.find(Je=>Je.id===se.id);h.push({id:se.id,name:(Te==null?void 0:Te.nameFr)??(Te==null?void 0:Te.name)??se.id,builtWithCardUnderneath:se.built,boundingBox:Me,...se.tuckRegion?{tuckRegion:se.tuckRegion}:{},confidence:Math.round(se.confidence*1e4)/1e4});const je=se.tuckRegion??Me;He.push({x0:je.x,y0:je.y,x1:je.x+je.width,y1:je.y+je.height})}}}catch(L){console.warn("[wonders-reg] discovery failed:",L)}const at=a==="opponent";let qn=(L,Q)=>!at,wr=(L,Q)=>!at;try{const L=h.slice(Ge),Q=[];Y.forEach((he,we)=>{const Me=he.box[0]+he.box[2]/2,We=he.box[1]+he.box[3]/2;He.some(Te=>Me>=Te.x0&&Me<=Te.x1&&We>=Te.y0&&We<=Te.y1)||Q.push(we)});const ee=[],ue=[];L.forEach((he,we)=>{const Me=he.boundingBox;Me&&Me.width>0&&(ee.push(we),ue.push([Me.x,Me.y,Me.width,Me.height]))});const se=u1(Y.map(he=>he.box),Q,ue,U,[C.width,C.height]);qn=(he,we)=>se.pointOwner(he,we)==="opponent"===at;const ye=at?"opponent":"player";wr=(he,we)=>se.pointOwner(he,we)===ye,Y=Y.filter((he,we)=>se.bannerOwner[we]==="opponent"===at);const ze=L.map(()=>"player");ee.forEach((he,we)=>{ze[he]=se.wonderOwner[we]});for(let he=L.length-1;he>=0;he-=1)ze[he]==="opponent"!==at&&h.splice(Ge+he,1);He.length=0;for(const he of h.slice(Ge)){const we=he.tuckRegion??he.boundingBox;we&&He.push({x0:we.x,y0:we.y,x1:we.x+we.width,y1:we.y+we.height})}for(let he=l.length-1;he>=z;he-=1){const[we,Me]=l[he].center;qn(we,Me)||l.splice(he,1)}}catch(L){console.warn("[city-split] failed (side unfiltered):",L)}for(const L of Ae)wr(L.center[0],L.center[1])&&(m+=L.denomination??0,u.push(L));const rn=[];for(const L of Y){const Q=L.box[0]+L.box[2]/2,ee=L.box[1]+L.box[3]/2;if(He.some(se=>Q>=se.x0&&Q<=se.x1&&ee>=se.y0&&ee<=se.y1)){_+=1;continue}rn.push(L),o[L.family]=(o[L.family]??0)+1,y+=1}const Vn=Gy(rn),Ct=new Set(Vn.map(L=>L.box.join(",")));for(const L of qy(rn))Ct.has(L.box.join(","))||Vn.push(L);for(const L of Vn)p.push(L);if(rn.some(L=>L.family==="guild")){const L=await X1();if(L!==null){r(`${v}: identifying guilds…`,.75);for(const Q of rn)if(Q.family==="guild")try{const[ee,ue,se,ye]=Q.box,ze=Wn(C,ee,ue,se,ye),he=Eb(ze),we={[L.inputNames[0]]:new Le("float32",he,[1,3,Un,Un])},We=(await L.run(we))[L.outputNames[0]].data,{id:Te,prob:je}=kb(We);Te!==""&&!d.some(Je=>Je.id===Te)&&d.push({id:Te,boundingBox:{x:ee,y:ue,width:se,height:ye},confidence:Math.round(je*1e4)/1e4})}catch(ee){console.warn("[guild-cls] failed:",ee)}}else if(Date.now()<ke)try{const Q=ce??await Eo();if(Q!==null){const ee=await D1();if(ee.size>0){r(`${v}: identifying guilds…`,.75);const ue=await U1();for(const se of rb(Q,C,ee,ke,ue))d.some(ye=>ye.id===se.id)||d.push(se)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${v}: laurels…`,.8);const Hn=await V1(),Mn=[];for(const L of[0,1,2,3]){const Q=L===0?C:Lt(C,L),ee=await kt("laurel",Q);for(const[ue,se,ye,ze]of fr(ee.rows,ee.params,dt.laurel.conf)){const he=Ro({x:ue,y:se,width:ye-ue,height:ze-se},L,C.width,C.height);Mn.push([he.x,he.y,he.x+he.width,he.y+he.height])}}let Tn=Bf(Mn);const Wt=[];try{const L=w1(Y.map(Q=>Q.box),[C.width,C.height]);for(const[Q,ee,ue,se]of L){const ye=Wn(C,Q,ee,ue-Q,se-ee);if(ye.width<=0||ye.height<=0)continue;const ze=[];for(const he of[0,1,2,3]){const we=he===0?ye:Lt(ye,he),Me=await kt("laurel",we);for(const[We,Te,je,Je]of fr(Me.rows,Me.params,dt.laurel.conf)){const xe=Ro({x:We,y:Te,width:je-We,height:Je-Te},he,ye.width,ye.height);ze.push([xe.x,xe.y,xe.x+xe.width,xe.y+xe.height])}}if(Tn=_1(Tn,Bf(ze),[Q,ee]),V!==null)try{const he=no(ye,1280,pr),we=await V.run({[V.inputNames[0]]:new Le("float32",he.tensor,[1,3,1280,1280])});for(const[Me,We,Te,je]of fr(we[V.outputNames[0]].data,he.params,Tm))Wt.push([Me+Q,We+ee,Te+Q,je+ee])}catch{}}}catch(L){console.warn("[laurel-containers] failed:",L)}const Ho=[...U,...Wt];Tn=Tn.filter(([L,Q,ee,ue])=>!x1((L+ee)/2,(Q+ue)/2,Ho,Y.map(se=>se.box)));const In=await Z1(),_r=await Q1();for(const[L,Q,ee,ue]of Tn){const se=Math.trunc((L+ee)/2),ye=Math.trunc((Q+ue)/2);if([...P,...O].some(De=>(se-De.cx)**2+(ye-De.cy)**2<=De.r*De.r)||!qn(se,ye))continue;if(_r!==null){const De=await J1(C,[Math.trunc(L),Math.trunc(Q),Math.trunc(ee),Math.trunc(ue)],_r);if(De!==null&&De>=Wb)continue}const he=Math.min(Math.trunc(ee-L),Math.trunc(ue-Q)),we=Math.max(6,Math.trunc(Math.max(ee-L,ue-Q)*cw)),Me=H1(C,se,ye,we);let We=null,Te=0;const je=new Map;if(he>=6)for(const De of[0,1,2,3]){const Ke=De===0?Me:Lt(Me,De),[pt,qt]=Sw(Ke,Hn);pt!==null&&(je.set(pt,Math.max(je.get(pt)??0,qt)),qt>Te&&(We=pt,Te=qt))}We!==null&&Te<B1&&(We=null);const Je=Te;if(In!==null&&he>=6){const De=Wn(C,Math.trunc(L),Math.trunc(Q),Math.trunc(ee-L),Math.trunc(ue-Q));let Ke=null,pt=0;for(const qt of[0,1,2,3]){const ti=qt===0?De:Lt(De,qt),ni=Lb(ti),ri=await In.run({[In.inputNames[0]]:new Le("float32",ni,[1,3,Fn,Fn])}),{value:ii,prob:br}=Fb(ri[In.outputNames[0]].data);br>pt&&(Ke=ii,pt=br)}Ke!==null&&pt>=Ub&&(We=Ke,Te=pt)}const xe=We!==null&&[...je.entries()].some(([De,Ke])=>De!==We&&Ke>=Je-.1),jn=He.some(De=>se>=De.x0&&se<=De.x1&&ye>=De.y0&&ye<=De.y1),Kn=d.some(De=>{const Ke=De.boundingBox;return Ke!==void 0&&se>=Ke.x&&se<=Ke.x+Ke.width&&ye>=Ke.y&&ye<=Ke.y+Ke.height});s.push({value:We,valueRead:We!==null,center:[Math.round((L+ee)/2),Math.round((Q+ue)/2)],boundingBox:{x:Math.trunc(L),y:Math.trunc(Q),width:Math.trunc(ee-L),height:Math.trunc(ue-Q)},confidence:Math.round(Te*1e4)/1e4,excluded:jn||Kn,photoIndex:$-1,...xe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}_>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${_} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=o.guild??0;x!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(E=>E.id).join(", ")+" — confirm in the review."});const M=h.filter(E=>E.boundingBox.width===0);M.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${M.map(E=>E.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(E=>E.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const S=o2(d,h);for(const E of[...v1(h.map(v=>v.id),t),...T1(S.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:E.message});const T=s.filter(E=>!E.excluded),k=T.filter(E=>E.valueRead);return{...y2(),wonders:h,guilds:S,progressTokens:l,laurels:s,cardVictoryPoints:{value:k.reduce((E,v)=>E+(v.value??0),0),laurelsKept:T.length,laurelsUnread:T.length-k.length,complete:T.length===k.length},cardCounts:{byFamily:o,source:y>0?"yolo":"none",tuckedExcluded:_,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const vt=1280,w2=.3,qo=9;let Vo=null;function _2(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Pe}pawn_ends.onnx`,{method:"HEAD"})).ok?await nt.create(`${Pe}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Vo}function b2(e){const t=vt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(vt,vt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,vt,vt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,vt,vt),l=vt*vt,h=new Float32Array(3*l);for(let d=0;d<l;d+=1)h[d]=u[d*4]/255,h[l+d]=u[d*4+1]/255,h[2*l+d]=u[d*4+2]/255;return{tensor:h,r:t}}async function $2(e,t){const{tensor:n,r}=b2(t),a=(await e.run({[e.inputNames[0]]:new Le("float32",n,[1,3,vt,vt])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<w2)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const d=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:d,cy:p})}}return o}async function km(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Lt(t,g),_=await $2(e,y);if(_.has(0)&&_.has(1)&&_.has(2)){const $=_.get(0).conf+_.get(1).conf+_.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:_})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const d=((r.cx-u)*o+(r.cy-l)*s)/h*(2*qo),p=Math.min(qo,Math.max(-qo,Ut(d))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function x2(e,t,n){let r=null;for(const i of n){const a=Iy(t.width,t.height,i);if(a===null)continue;const o=Wn(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await km(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r=s)}return r}async function v2(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},s=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await Wo(h,l,n,o,s))}e.both!==void 0&&(r.left=await Wo([e.both],"left",n,o,s,"player"),r.right=await Wo([e.both],"right",n,o,s,"opponent"));{const l={},h={};for(const d of["left","right"]){const p=r[d];p!=null&&(l[d]=p.wonders.map(m=>m.id),h[d]=p.progressTokens.map(m=>m.id))}for(const d of[...S1(l),...M1(h)])n.push({code:"INCONSISTENT_STATE",message:d.message})}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await Go(e.board),h=await _2();if(h!==null){let d=await km(h,l);if(d===null){const p=await Im();if(p!==null){const m=await kt("banner",l),g=io(m.rows,m.params,dt.banner.conf),y=await Em(p,l,g);d=await x2(h,l,y)}}d!==null&&(u={conflictPawnPosition:d.position,found:!0,confidence:d.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await g2(e.data.file):await v2(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
