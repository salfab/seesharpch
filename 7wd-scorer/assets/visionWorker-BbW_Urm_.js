var qv=Object.defineProperty;var Vv=(Gt,Wt,Dn)=>Wt in Gt?qv(Gt,Wt,{enumerable:!0,configurable:!0,writable:!0,value:Dn}):Gt[Wt]=Dn;var k0=(Gt,Wt,Dn)=>Vv(Gt,typeof Wt!="symbol"?Wt+"":Wt,Dn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Dn=Object.getOwnPropertyNames,R0=Object.prototype.hasOwnProperty,O0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Un=(e,t)=>{for(var n in t)Gt(e,n,{get:t[n],enumerable:!0})},N0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Dn(t))!R0.call(e,i)&&i!==n&&Gt(e,i,{get:()=>t[i],enumerable:!(r=Wt(t,i))||r.enumerable});return e},tr=e=>N0(Gt({},"__esModule",{value:!0}),e),nr,tn,Ln,Bs,Ps,Ds=ee(()=>{nr=new Map,tn=[],Ln=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=nr.get(e);if(r===void 0)nr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=tn.indexOf(e);i!==-1&&tn.splice(i,1);for(let a=0;a<tn.length;a++)if(nr.get(tn[a]).priority<=n){tn.splice(a,0,e);return}tn.push(e)}return}throw new TypeError("not a valid backend")},Bs=async e=>{let t=nr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ps=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?tn:n,i,a=[],o=new Set;for(let u of r){let l=await Bs(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),z0=ee(()=>{Ds()}),Us,B0=ee(()=>{Us="1.27.0"}),Ai,et,Ls=ee(()=>{B0(),Ai="warning",et={wasm:{},webgl:{},webgpu:{},versions:{common:Us},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ai=e}},get logLevel(){return Ai}},Object.defineProperty(et,"logLevel",{enumerable:!0})}),Fe,P0=ee(()=>{Ls(),Fe=et}),Fs,Gs,D0=ee(()=>{Fs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,c=0,p=h,f=h*2,m=-1;o==="RGBA"?(c=0,p=h,f=h*2,m=h*3):o==="RGB"?(c=0,p=h,f=h*2):o==="RBG"&&(c=0,f=h,p=h*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Gs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=c,M=c*2,v=-1;s==="RGBA"?(b=0,x=c,M=c*2,v=c*3):s==="RGB"?(b=0,x=c,M=c*2):s==="RBG"&&(b=0,M=c,x=c*2),r=n.createImageData(i,a);for(let I=0;I<a*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-h[0])*l[0],r.data[m]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Or,Ws,qs,Vs,Hs,js,U0=ee(()=>{Oi(),Or=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;s==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,p+=c,m+=c,f+=c,y+=c)h[w++]=(e[p]+o[0])/a[0],h[b++]=(e[f]+o[1])/a[1],h[x++]=(e[m]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new mt("float32",h,[1,4,n,r]):new mt("float32",h,[1,3,n,r])},Ws=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;c.drawImage(e,0,0),o=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let f=l(p);if(f!=null)f.putImageData(e,0,0),o=f.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),o=c.getImageData(0,0,f,p).data,s.height=p,s.width=f,Or(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),f=l(p);if(!e||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Or(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Or(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},qs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new mt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Vs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new mt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Hs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new mt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},js=(e,t,n)=>new mt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),gn,rr,Ri,Ks,L0=ee(()=>{gn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),rr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ri=!1,Ks=()=>{if(!Ri){Ri=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(gn.set("int64",BigInt64Array),rr.set(BigInt64Array,"int64")),t&&(gn.set("uint64",BigUint64Array),rr.set(BigUint64Array,"uint64")),r?(gn.set("float16",n),rr.set(n,"float16")):gn.set("float16",Uint16Array)}}}),Ys,Xs,F0=ee(()=>{Oi(),Ys=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Xs=(e,t)=>{switch(e.location){case"cpu":return new mt(e.type,e.data,t);case"cpu-pinned":return new mt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new mt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new mt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new mt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),mt,Oi=ee(()=>{D0(),U0(),L0(),F0(),mt=class{constructor(e,t,n){Ks();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=gn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=gn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=rr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Ys(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Ws(e,t)}static fromTexture(e,t){return qs(e,t)}static fromGpuBuffer(e,t){return Vs(e,t)}static fromMLTensor(e,t){return Hs(e,t)}static fromPinnedBuffer(e,t,n){return js(e,t,n)}toDataURL(e){return Fs(this,e)}toImageData(e){return Gs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Xs(this,e)}}}),qe,Zs=ee(()=>{Oi(),qe=mt}),Nr,Ni,Nt,vt,yn,wn,Qs=ee(()=>{Ls(),Nr=(e,t)=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ni=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Nr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Nt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ni("BEGIN",e)},vt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ni("END",e)},yn=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.time(`ORT::${e}`)},wn=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeEnd(`ORT::${e}`)}}),Js,G0=ee(()=>{Ds(),Zs(),Qs(),Js=class C0{constructor(t){this.handler=t}async run(t,n,r){Nt(),yn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof qe)&&(l=!0,o=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof qe?u[l]=h:u[l]=new qe(h.type,h.data,h.dims)}return wn("InferenceSession.run"),vt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Nt(),yn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Ps(o),l=await s.createInferenceSessionHandler(a,u);return wn("InferenceSession.create"),vt(),new C0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Xe,W0=ee(()=>{G0(),Xe=Js}),q0=ee(()=>{}),V0=ee(()=>{}),H0=ee(()=>{}),j0=ee(()=>{}),K0={};Un(K0,{InferenceSession:()=>Xe,TRACE:()=>Nr,TRACE_EVENT_BEGIN:()=>yn,TRACE_EVENT_END:()=>wn,TRACE_FUNC_BEGIN:()=>Nt,TRACE_FUNC_END:()=>vt,Tensor:()=>qe,env:()=>Fe,registerBackend:()=>Ln});var wt=ee(()=>{z0(),P0(),W0(),Zs(),q0(),V0(),Qs(),H0(),j0()}),zi=ee(()=>{}),eu={};Un(eu,{default:()=>tu});var Bi,Pi,tu,Y0=ee(()=>{var e;Bf(),_n(),Wi(),Bi="ort-wasm-proxy-worker",Pi=((e=globalThis.self)==null?void 0:e.name)===Bi,Pi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Hi(r.wasm).then(()=>{ro(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;io(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Jr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;oo(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":so(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;lo(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ho([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":co(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),tu=Pi?null:t=>new Worker(t??gt,{type:"module",name:Bi})}),nu={};Un(nu,{default:()=>iu});async function ru(e={}){var T0,E0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((T0=self.name)==null?void 0:T0.startsWith("em-pthread"));t.mountExternalData=(d,g)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},T=await d(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let P=await Promise.all(C);if(P=P.filter(K=>K),0<P.length)throw Error(P.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(d,g)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,T,C,P)=>$.registerBuffer(_,T,C,P),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,T,C)=>$.createDownloader(_,T,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,T)=>{$.upload(_,T)}}else if(d==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,T)=>$.createMLTensorDownloader(_,T),t.webnnRegisterMLTensor=(_,T,C,P)=>$.registerMLTensor(_,T,C,P),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,T,C,P,K,re)=>$.registerMLConstant(_,T,C,P,K,t.Xc,re),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let d=g=>(...$)=>{let _=Lt;return $=g(...$),Lt!=_?new Promise((T,C)=>{vs={resolve:T,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=d(t[g])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(d,g)=>{throw g},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var g=new XMLHttpRequest;return g.open("GET",d,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async d=>{if(k(d))return new Promise(($,_)=>{var T=new XMLHttpRequest;T.open("GET",d,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?$(T.response):_(T.status)},T.onerror=_,T.send(null)});var g=await fetch(d,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),v=x,I=M,E=!1,k=d=>d.startsWith("file://");function S(){ft.buffer!=N.buffer&&B()}if(i){let d=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let T=[];self.onmessage=C=>T.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of T)d(C);self.onmessage=d};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...P)=>{postMessage({Sc:"callHandler",wd:C,args:P})},C=="print"&&(v=t[C]),C=="printErr"&&(I=t[C]));ft=$.Od,B(),f=$.Pd,ie(),ki()}else if(_==="run"){(function(T){var C=(S(),H)[T+52>>>2>>>0];T=(S(),H)[T+56>>>2>>>0],Pg(C,C-T),ve(C)})($.Rc),Es($.Rc,0,0,1,0,0),Zt(),bs($.Rc),A||(Ag(),A=!0);try{cn($.Md,$.bd)}catch(T){if(T!="unwind")throw T}}else $.target!=="setimmediate"&&(_==="checkMailbox"?A&&$i():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(T){throw Rg(),T}};var A=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=d}var N,U,V,F,O,H,X,J,he,W,z,R=!1;function B(){var d=ft.buffer;t.HEAP8=N=new Int8Array(d),V=new Int16Array(d),t.HEAPU8=U=new Uint8Array(d),F=new Uint16Array(d),t.HEAP32=O=new Int32Array(d),t.HEAPU32=H=new Uint32Array(d),X=new Float32Array(d),J=new Float64Array(d),he=new BigInt64Array(d),W=new BigUint64Array(d)}function L(){R=!0,i?b():en.sb()}function G(d){throw I(d="Aborted("+d+")"),E=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w==null||w(d),d}function Z(){return{a:{ma:av,gb:iv,g:Mr,J:fi,f:gi,o:Jn,h:er,ha:ug,b:fs,T:yi,Ha:Tr,n:ms,$:Q,Xa:ne,Da:oe,Fa:ue,Ya:Ee,Va:ke,Oa:ce,Ua:ae,ka:le,Ea:me,Ba:be,Wa:We,Ca:Ue,bb:Bn,ea:gs,wa:ys,ua:Xx,da:Qx,O:Jx,H:e$,va:t$,_:u$,xa:l$,Ra:c$,za:h$,Ia:p$,sa:f$,fa:m$,Qa:bs,_a:g$,R:b$,r:M$,c:ws,hb:I$,y:T$,M:E$,D:k$,l:C$,s:fg,ib:A$,I:R$,S:O$,j:N$,u:z$,q:B$,k:P$,La:D$,Ma:U$,Na:L$,Ja:wg,Ka:_g,ta:bg,db:G$,ab:q$,v:V$,aa:H$,ga:j$,$a:W$,W:K$,Za:Y$,Aa:X$,F:F$,U:Z$,la:Ti,ya:J$,fb:Q$,eb:ev,Sa:Sg,Ta:Mg,Ga:Je,V:Ig,ja:Tg,Pa:Eg,ia:kg,kb:Fv,na:Bv,lb:Lv,oa:zv,G:Iv,e:lv,t:sv,w:ov,B:_v,mb:Rv,K:vv,x:hv,pa:Ov,Y:Pv,ba:Av,nb:Cv,ob:kv,P:bv,qa:Ev,pb:Tv,N:Sv,Z:Nv,d:uv,A:dv,m:cv,jb:Gv,p:fv,z:mv,C:pv,E:gv,L:xv,qb:Mv,Q:Dv,ca:$v,X:Uv,rb:wv,ra:yv,i:nv,a:ft,cb:lt}}}async function ie(){function d(_,T){var C=en=_.exports;_={};for(let[P,K]of Object.entries(C))typeof K=="function"?(C=y$(K),_[P]=C):_[P]=K;return en=_,en=(function(){var P=en,K=se=>$e=>se($e)>>>0,re=se=>()=>se()>>>0;return(P=Object.assign({},P)).tb=K(P.tb),P.Xb=re(P.Xb),P.Zb=K(P.Zb),P.lc=K(P.lc),P.mc=re(P.mc),P.qc=K(P.qc),P})(),Ye.push(en._b),Cg=(_=en).tb,Ag=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Ei=_.Xb,Ft=t._free=_.Yb,Cr=t._malloc=_.Zb,Es=_.ac,Rg=_.bc,Og=_.cc,Ng=_.dc,ks=_.ec,zg=_.fc,Bg=_.gc,Ie=_.hc,Ar=_.ic,Pg=_.jc,ve=_.kc,Cs=_.lc,Se=_.mc,Dg=_.nc,As=_.oc,Ug=_.pc,Lg=_.qc,Fg=_.rc,Rs=_.sc,Gg=_.tc,Wg=_.uc,qg=_.vc,Vg=_.wc,Hg=_.xc,jg=_.yc,Kg=_.zc,Yg=_.Ac,Xg=_.Bc,Zg=_.Cc,Qg=_.Dc,Jg=_.Ec,e0=_.Fc,t0=_.Gc,n0=_.Hc,r0=_.Ic,i0=_.Jc,a0=_.Kc,o0=_.Lc,s0=_.Mc,u0=_.Nc,l0=_.Pc,c0=_.Qc,d0=_.$c,h0=_.ad,p0=_.fd,f0=_.jd,m0=_.kd,g0=_.ld,y0=_.md,w0=_.nd,_0=_.od,b0=_.pd,x0=_.qd,$0=_.vd,v0=_.Td,S0=_.Ud,M0=_.Vd,I0=_.Wd,f=T,en}var g,$=Z();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(T,C)=>{_(d(T,C))})}):i?d(new WebAssembly.Instance(f,Z()),f):(z??(z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var T=z;if(!p&&!k(T))try{var C=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(P){I(`wasm streaming compile failed: ${P}`),I("falling back to ArrayBuffer instantiation")}return(async function(P,K){try{var re=await(async function(se){if(!p)try{var $e=await s(se);return new Uint8Array($e)}catch{}if(se==z&&p)se=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";se=u(se)}return se})(P);return await WebAssembly.instantiate(re,K)}catch(se){I(`failed to asynchronously prepare wasm: ${se}`),G(se)}})(T,_)})($),d(g.instance,g.module))}class te{constructor(g){k0(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var ye=d=>{d.terminate(),d.onmessage=()=>{}},Me=[],ze=0,De=null,ut=d=>{ct.length==0&&(Qt(),Rn(ct[0]));var g=ct.pop();if(!g)return 6;pt.push(g),Rt[d.Rc]=g,g.Rc=d.Rc;var $={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return g.postMessage($,d.rd),0},Be=0,ge=(d,g,...$)=>{var _,T=16*$.length,C=Se(),P=Cs(T),K=P>>>3;for(_ of $)typeof _=="bigint"?((S(),he)[K++>>>0]=1n,(S(),he)[K++>>>0]=_):((S(),he)[K++>>>0]=0n,(S(),J)[K++>>>0]=_);return d=Og(d,0,T,P,g),ve(C),d};function lt(d){if(i)return ge(0,1,d);if(m=d,!(0<Be)){for(var g of pt)ye(g);for(g of ct)ye(g);ct=[],pt=[],Rt={},E=!0}l(0,new te(d))}function Xt(d){if(i)return ge(1,0,d);Je(d)}var Je=d=>{if(m=d,i)throw Xt(d),"unwind";lt(d)},ct=[],pt=[],Ye=[],Rt={},Sr=d=>{var g=d.Rc;delete Rt[g],ct.push(d),pt.splice(pt.indexOf(d),1),d.Rc=0,Ng(g)};function Zt(){Ye.forEach(d=>d())}var Rn=d=>new Promise(g=>{d.onmessage=T=>{var C=T.data;if(T=C.Sc,C.Zc&&C.Zc!=Ei()){var P=Rt[C.Zc];P?P.postMessage(C,C.rd):I(`Internal error! Worker sent a message "${T}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?$i():T==="spawnThread"?ut(C):T==="cleanupThread"?xi(()=>{Sr(Rt[C.Nd])}):T==="loaded"?(d.loaded=!0,g(d)):C.target==="setimmediate"?d.postMessage(C):T==="uncaughtException"?d.onerror(C.error):T==="callHandler"?t[C.wd](...C.args):T&&I(`worker sent an unknown command ${T}`)},d.onerror=T=>{throw I(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);d.postMessage({Sc:"load",xd:_,Od:ft,Pd:f})});function Qt(){var d=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ct.push(d)}var ft,cn=(d,g)=>{Be=0,d=Rs(d,g),0<Be?m=d:ks(d)},dn=[],On=0;function Mr(d){var g=new xt(d>>>=0);return(S(),N)[g.Tc+12>>>0]==0&&(Ir(g,!0),On--),mi(g,!1),dn.push(g),Lg(d)}var Jt=0,fi=()=>{Ie(0,0);var d=dn.pop();Dg(d.cd),Jt=0};function Ir(d,g){g=g?1:0,(S(),N)[d.Tc+12>>>0]=g}function mi(d,g){g=g?1:0,(S(),N)[d.Tc+13>>>0]=g}class xt{constructor(g){this.cd=g,this.Tc=g-24}}var Nn=d=>{var g=Jt;if(!g)return Ar(0),0;var $=new xt(g);(S(),H)[$.Tc+16>>>2>>>0]=g;var _=(S(),H)[$.Tc+4>>>2>>>0];if(!_)return Ar(0),g;for(var T of d){if(T===0||T===_)break;if(Ug(T,_,$.Tc+16))return Ar(T),g}return Ar(_),g};function gi(){return Nn([])}function Jn(d){return Nn([d>>>0])}function er(d,g,$,_){return Nn([d>>>0,g>>>0,$>>>0,_>>>0])}var ug=()=>{var d=dn.pop();d||G("no exception to throw");var g=d.cd;throw(S(),N)[d.Tc+13>>>0]==0&&(dn.push(d),mi(d,!0),Ir(d,!1),On++),As(g),Jt=g};function fs(d,g,$){var _=new xt(d>>>=0);throw g>>>=0,$>>>=0,(S(),H)[_.Tc+16>>>2>>>0]=0,(S(),H)[_.Tc+4>>>2>>>0]=g,(S(),H)[_.Tc+8>>>2>>>0]=$,As(d),On++,Jt=d}var yi=()=>On;function hn(d,g,$,_){return i?ge(2,1,d,g,$,_):Tr(d,g,$,_)}function Tr(d,g,$,_){if(d>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?hn(d,g,$,_):(d={Ld:$,Rc:d,bd:_,rd:T},i?(d.Sc="spawnThread",postMessage(d,T),0):ut(d))}function ms(d){throw Jt||(Jt=d>>>0),Jt}var zn=globalThis.TextDecoder&&new TextDecoder,Er=(d,g,$,_)=>{if($=g+$,_)return $;for(;d[g]&&!(g>=$);)++g;return g},D=(d,g=0,$,_)=>{if(16<($=Er(d,g>>>=0,$,_))-g&&d.buffer&&zn)return zn.decode(d.buffer instanceof ArrayBuffer?d.subarray(g,$):d.slice(g,$));for(_="";g<$;){var T=d[g++];if(128&T){var C=63&d[g++];if((224&T)==192)_+=String.fromCharCode((31&T)<<6|C);else{var P=63&d[g++];65536>(T=(240&T)==224?(15&T)<<12|C<<6|P:(7&T)<<18|C<<12|P<<6|63&d[g++])?_+=String.fromCharCode(T):(T-=65536,_+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else _+=String.fromCharCode(T)}return _},j=(d,g,$)=>(d>>>=0)?D((S(),U),d,g,$):"";function Q(d,g,$){return i?ge(3,1,d,g,$):0}function ne(d,g){if(i)return ge(4,1,d,g)}function oe(d,g){if(i)return ge(5,1,d,g)}function ue(d,g,$){if(i)return ge(6,1,d,g,$)}function Ee(d,g,$){return i?ge(7,1,d,g,$):0}function ke(d,g){if(i)return ge(8,1,d,g)}function ce(d,g,$){if(i)return ge(9,1,d,g,$)}function ae(d,g,$,_){if(i)return ge(10,1,d,g,$,_)}function le(d,g,$,_){if(i)return ge(11,1,d,g,$,_)}function me(d,g,$,_){if(i)return ge(12,1,d,g,$,_)}function be(d){if(i)return ge(13,1,d)}function We(d,g){if(i)return ge(14,1,d,g)}function Ue(d,g,$){if(i)return ge(15,1,d,g,$)}var Bn=()=>G(""),rt=d=>{d>>>=0;for(var g="";;){var $=(S(),U)[d++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Pe={},He={},Ze=class extends Error{constructor(d){super(d),this.name="BindingError"}};function at(d,g,$={}){return(function(_,T,C={}){var P=T.name;if(!_)throw new Ze(`type "${P}" must have a positive integer typeid pointer`);if(He.hasOwnProperty(_)){if(C.yd)return;throw new Ze(`Cannot register type '${P}' twice`)}He[_]=T,Pe.hasOwnProperty(_)&&(T=Pe[_],delete Pe[_],T.forEach(K=>K()))})(d,g,$)}var wi=(d,g,$)=>{switch(g){case 1:return $?_=>(S(),N)[_>>>0]:_=>(S(),U)[_>>>0];case 2:return $?_=>(S(),V)[_>>>1>>>0]:_=>(S(),F)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),H)[_>>>2>>>0];case 8:return $?_=>(S(),he)[_>>>3>>>0]:_=>(S(),W)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${d}`)}};function gs(d,g,$,_,T){d>>>=0,$>>>=0,g=rt(g>>>0);let C=P=>P;if(_=_===0n){let P=8*$;C=K=>BigInt.asUintN(P,K),T=C(T)}at(d,{name:g,Oc:C,Vc:(P,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:wi(g,$,!_),Wc:null})}function ys(d,g,$,_){at(d>>>=0,{name:g=rt(g>>>0),Oc:function(T){return!!T},Vc:function(T,C){return C?$:_},Uc:function(T){return this.Oc((S(),U)[T>>>0])},Wc:null})}var _i=[],Ut=[0,1,,1,null,1,!0,1,!1,1];function ws(d){9<(d>>>=0)&&--Ut[d+1]===0&&(Ut[d]=void 0,_i.push(d))}var $t=d=>{if(!d)throw new Ze(`Cannot use deleted val. handle = ${d}`);return Ut[d]},Ot=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=_i.pop()||Ut.length;return Ut[g]=d,Ut[g+1]=1,g}};function _s(d){return this.Oc((S(),H)[d>>>2>>>0])}var Yx={name:"emscripten::val",Oc:d=>{var g=$t(d);return ws(d),g},Vc:(d,g)=>Ot(g),Uc:_s,Wc:null};function Xx(d){return at(d>>>0,Yx)}var Zx=(d,g)=>{switch(g){case 4:return function($){return this.Oc((S(),X)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),J)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${d}`)}};function Qx(d,g,$){$>>>=0,at(d>>>=0,{name:g=rt(g>>>0),Oc:_=>_,Vc:(_,T)=>T,Uc:Zx(g,$),Wc:null})}function Jx(d,g,$,_,T){d>>>=0,$>>>=0,g=rt(g>>>0);let C=K=>K;if(_===0){var P=32-8*$;C=K=>K<<P>>>P,T=C(T)}at(d,{name:g,Oc:C,Vc:(K,re)=>re,Uc:wi(g,$,_!==0),Wc:null})}function e$(d,g,$){function _(C){var P=(S(),H)[C>>>2>>>0];return C=(S(),H)[C+4>>>2>>>0],new T((S(),N).buffer,C,P)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];at(d>>>=0,{name:$=rt($>>>0),Oc:_,Uc:_},{yd:!0})}var pn=(d,g,$)=>{var _=(S(),U);if(g>>>=0,0<$){var T=g;$=g+$-1;for(var C=0;C<d.length;++C){var P=d.codePointAt(C);if(127>=P){if(g>=$)break;_[g++>>>0]=P}else if(2047>=P){if(g+1>=$)break;_[g++>>>0]=192|P>>6,_[g++>>>0]=128|63&P}else if(65535>=P){if(g+2>=$)break;_[g++>>>0]=224|P>>12,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P}else{if(g+3>=$)break;_[g++>>>0]=240|P>>18,_[g++>>>0]=128|P>>12&63,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P,C++}}_[g>>>0]=0,d=g-T}else d=0;return d},bi=d=>{for(var g=0,$=0;$<d.length;++$){var _=d.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function t$(d,g){at(d>>>=0,{name:g=rt(g>>>0),Oc($){var _=(S(),H)[$>>>2>>>0];return _=j($+4,_,!0),Ft($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var T=typeof _=="string";if(!(T||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Ze("Cannot pass non-string to std::string");var C=T?bi(_):_.length,P=Cr(4+C+1),K=P+4;return(S(),H)[P>>>2>>>0]=C,T?pn(_,K,C+1):(S(),U).set(_,K>>>0),$!==null&&$.push(Ft,P),P},Uc:_s,Wc($){Ft($)}})}var lg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,n$=(d,g,$)=>{if(d>>>=1,16<(g=Er((S(),F),d,g/2,$))-d&&lg)return lg.decode((S(),F).slice(d,g));for($="";d<g;++d){var _=(S(),F)[d>>>0];$+=String.fromCharCode(_)}return $},r$=(d,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*d.length?$/2:d.length;for(var T=0;T<$;++T){var C=d.charCodeAt(T);(S(),V)[g>>>1>>>0]=C,g+=2}return(S(),V)[g>>>1>>>0]=0,g-_},i$=d=>2*d.length,a$=(d,g,$)=>{var _="";d>>>=2;for(var T=0;!(T>=g/4);T++){var C=(S(),H)[d+T>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},o$=(d,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var T=0;T<d.length;++T){var C=d.codePointAt(T);if(65535<C&&T++,(S(),O)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-_},s$=d=>{for(var g=0,$=0;$<d.length;++$)65535<d.codePointAt($)&&$++,g+=4;return g};function u$(d,g,$){if(d>>>=0,g>>>=0,$=rt($>>>=0),g===2)var _=n$,T=r$,C=i$;else _=a$,T=o$,C=s$;at(d,{name:$,Oc:P=>{var K=(S(),H)[P>>>2>>>0];return K=_(P+4,K*g,!0),Ft(P),K},Vc:(P,K)=>{if(typeof K!="string")throw new Ze(`Cannot pass non-string to C++ string type ${$}`);var re=C(K),se=Cr(4+re+g);return(S(),H)[se>>>2>>>0]=re/g,T(K,se+4,re+g),P!==null&&P.push(Ft,se),se},Uc:_s,Wc(P){Ft(P)}})}function l$(d,g){at(d>>>=0,{zd:!0,name:g=rt(g>>>0),Oc:()=>{},Vc:()=>{}})}function c$(d){Es(d>>>0,!r,1,!n,131072,!1),Zt()}var xi=d=>{if(!E)try{if(d(),!(0<Be))try{i?Ei()&&ks(m):Je(m)}catch(g){g instanceof te||g=="unwind"||l(0,g)}}catch(g){g instanceof te||g=="unwind"||l(0,g)}},d$=!Atomics.waitAsync||((E0=globalThis.navigator)==null?void 0:E0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function bs(d){d>>>=0,d$||(Atomics.waitAsync((S(),O),d>>>2,d).value.then($i),d+=128,Atomics.store((S(),O),d>>>2,1))}var $i=()=>xi(()=>{var d=Ei();d&&(bs(d),Bg())});function h$(d,g){(d>>>=0)==g>>>0?setTimeout($i):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=Rt[d])&&d.postMessage({Sc:"checkMailbox"})}var xs=[];function p$(d,g,$,_,T){for(g>>>=0,T>>>=0,xs.length=0,$=T>>>3,_=T+_>>>3;$<_;){var C;C=(S(),he)[$++>>>0]?(S(),he)[$++>>>0]:(S(),J)[$++>>>0],xs.push(C)}return(g?Os[g]:rv[d])(...xs)}var f$=()=>{Be=0};function m$(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):Sr(Rt[d])}function g$(d){}var vi=d=>{try{d()}catch(g){G(g)}};function y$(d){var g=(...$)=>{Si.push(d);try{return d(...$)}finally{E||(Si.pop(),Lt&&fn===1&&Si.length===0&&(fn=0,Be+=1,vi(S0),typeof Fibers<"u"&&Fibers.Zd()))}};return hg.set(d,g),g}var fn=0,Lt=null,cg=0,Si=[],$s=new Map,dg=new Map,hg=new Map,w$=0,vs=null,_$=[],pg=d=>(function(g){if(!E){if(fn===0){var $=!1,_=!1;g((T=0)=>{if(!E&&(cg=T,$=!0,_)){fn=2,vi(()=>M0(Lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var C=(function(){var re=(S(),O)[Lt+8>>>2>>>0];return re=dg.get(re),re=hg.get(re),--Be,re()})()}catch(re){C=re,T=!0}var P=!1;if(!Lt){var K=vs;K&&(vs=null,(T?K.reject:K.resolve)(C),P=!0)}if(T&&!P)throw C}}),_=!0,$||(fn=1,Lt=(function(){var T=Cr(65548),C=T+12;if((S(),H)[T>>>2>>>0]=C,(S(),H)[T+4>>>2>>>0]=C+65536,C=Si[0],!$s.has(C)){var P=w$++;$s.set(C,P),dg.set(P,C)}return C=$s.get(C),(S(),O)[T+8>>>2>>>0]=C,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),vi(()=>v0(Lt)))}else fn===2?(fn=0,vi(I0),Ft(Lt),Lt=null,_$.forEach(xi)):G(`invalid state: ${fn}`);return cg}})(g=>{d().then(g)});function b$(d){return d>>>=0,pg(async()=>{var g=await $t(d);return Ot(g)})}var Ss=[],x$=d=>{var g=Ss.length;return Ss.push(d),g},$$=(d,g)=>{for(var $=Array(d),_=0;_<d;++_){var T=_,C=(S(),H)[g+4*_>>>2>>>0],P=He[C];if(P===void 0)throw d=`parameter ${_}`,C=Cg(C),g=rt(C),Ft(C),new Ze(`${d} has unknown type ${g}`);$[T]=P}return $},v$=(d,g,$)=>{var _=[];return d=d(_,$),_.length&&((S(),H)[g>>>2>>>0]=Ot(_)),d},S$={},Mi=d=>{var g=S$[d];return g===void 0?rt(d):g};function M$(d,g,$){var[_,...T]=$$(d,g>>>0);g=_.Vc.bind(_);var C=T.map(re=>re.Uc.bind(re));d--;var P={toValue:$t};switch(d=C.map((re,se)=>{var $e=`argFromPtr${se}`;return P[$e]=re,`${$e}(args${se?"+"+8*se:""})`}),$){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:P.getStringOrSymbol=Mi,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${d})`,_.zd||(P.toReturnWire=g,P.emval_returnValue=v$,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,$=new Function(Object.keys(P),K)(...Object.values(P)),K=`methodCaller<(${T.map(re=>re.name)}) => ${_.name}>`,x$(Object.defineProperty($,"name",{value:K}))}function I$(d,g){return g>>>=0,(d=$t(d>>>0))==$t(g)}function T$(d){return(d>>>=0)?(d=Mi(d),Ot(globalThis[d])):Ot(globalThis)}function E$(d){return d=Mi(d>>>0),Ot(t[d])}function k$(d,g){return g>>>=0,d=$t(d>>>0),g=$t(g),Ot(d[g])}function C$(d){9<(d>>>=0)&&(Ut[d+1]+=1)}function fg(d,g,$,_,T){return Ss[d>>>0](g>>>0,$>>>0,_>>>0,T>>>0)}function A$(d,g,$,_,T){return fg(d>>>0,g>>>0,$>>>0,_>>>0,T>>>0)}function R$(){return Ot([])}function O$(d){d=$t(d>>>0);for(var g=Array(d.length),$=0;$<d.length;$++)g[$]=d[$];return Ot(g)}function N$(d){return Ot(Mi(d>>>0))}function z$(){return Ot({})}function B$(d){for(var g=$t(d>>>=0);g.length;){var $=g.pop();g.pop()($)}ws(d)}function P$(d,g,$){g>>>=0,$>>>=0,d=$t(d>>>0),g=$t(g),$=$t($),d[g]=$}function D$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(S(),O)[g>>>2>>>0]=d.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=d.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=d.getUTCHours(),(S(),O)[g+12>>>2>>>0]=d.getUTCDate(),(S(),O)[g+16>>>2>>>0]=d.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=d.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=d}var mg=d=>d%4==0&&(d%100!=0||d%400==0),gg=[0,31,60,91,121,152,182,213,244,274,305,335],yg=[0,31,59,90,120,151,181,212,243,273,304,334];function U$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(S(),O)[g>>>2>>>0]=d.getSeconds(),(S(),O)[g+4>>>2>>>0]=d.getMinutes(),(S(),O)[g+8>>>2>>>0]=d.getHours(),(S(),O)[g+12>>>2>>>0]=d.getDate(),(S(),O)[g+16>>>2>>>0]=d.getMonth(),(S(),O)[g+20>>>2>>>0]=d.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=d.getDay();var $=(mg(d.getFullYear())?gg:yg)[d.getMonth()]+d.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset();var _=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|($!=_&&d.getTimezoneOffset()==Math.min(_,$)),(S(),O)[g+32>>>2>>>0]=d}function L$(d){d>>>=0;var g=new Date((S(),O)[d+20>>>2>>>0]+1900,(S(),O)[d+16>>>2>>>0],(S(),O)[d+12>>>2>>>0],(S(),O)[d+8>>>2>>>0],(S(),O)[d+4>>>2>>>0],(S(),O)[d>>>2>>>0],0),$=(S(),O)[d+32>>>2>>>0],_=g.getTimezoneOffset(),T=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),P=Math.min(C,T);return 0>$?(S(),O)[d+32>>>2>>>0]=+(T!=C&&P==_):0<$!=(P==_)&&(T=Math.max(C,T),g.setTime(g.getTime()+6e4*((0<$?P:T)-_))),(S(),O)[d+24>>>2>>>0]=g.getDay(),$=(mg(g.getFullYear())?gg:yg)[g.getMonth()]+g.getDate()-1|0,(S(),O)[d+28>>>2>>>0]=$,(S(),O)[d>>>2>>>0]=g.getSeconds(),(S(),O)[d+4>>>2>>>0]=g.getMinutes(),(S(),O)[d+8>>>2>>>0]=g.getHours(),(S(),O)[d+12>>>2>>>0]=g.getDate(),(S(),O)[d+16>>>2>>>0]=g.getMonth(),(S(),O)[d+20>>>2>>>0]=g.getYear(),d=g.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function wg(d,g,$,_,T,C,P){return i?ge(16,1,d,g,$,_,T,C,P):-52}function _g(d,g,$,_,T,C){if(i)return ge(17,1,d,g,$,_,T,C)}var kr={},F$=()=>performance.timeOrigin+performance.now();function bg(d,g){if(i)return ge(18,1,d,g);if(kr[d]&&(clearTimeout(kr[d].id),delete kr[d]),!g)return 0;var $=setTimeout(()=>{delete kr[d],xi(()=>zg(d,performance.timeOrigin+performance.now()))},g);return kr[d]={id:$,Yd:g},0}function G$(d,g,$,_){d>>>=0,g>>>=0,$>>>=0,_>>>=0;var T=new Date().getFullYear(),C=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var P=Math.max(C,T);(S(),H)[d>>>2>>>0]=60*P,(S(),O)[g>>>2>>>0]=+(C!=T),d=(g=K=>{var re=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(re/60)).padStart(2,"0")}${String(re%60).padStart(2,"0")}`})(C),g=g(T),T<C?(pn(d,$,17),pn(g,_,17)):(pn(d,_,17),pn(g,$,17))}var W$=()=>Date.now();function q$(d,g,$){return $>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(S(),he)[$>>>3>>>0]=BigInt(d),0):28}var Ms=[],xg=(d,g)=>{Ms.length=0;for(var $;$=(S(),U)[d++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Ms.push($==112?(S(),H)[g>>>2>>>0]:$==106?(S(),he)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),J)[g>>>3>>>0]),g+=_?8:4}return Ms};function V$(d,g,$){return d>>>=0,g=xg(g>>>0,$>>>0),Os[d](...g)}function H$(d,g,$){return d>>>=0,g=xg(g>>>0,$>>>0),Os[d](...g)}var j$=()=>{};function K$(d,g){return I(j(d>>>0,g>>>0))}var Y$=()=>{throw Be+=1,"unwind"};function X$(){return 4294901760}var Z$=()=>navigator.hardwareConcurrency,Pn={},Ii=d=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+g[1]:0},$g=d=>{for(var g of d)(d=Ii(g))&&(Pn[d]=g)};function Q$(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),$g(d),Pn.gd=Ii(d[3]),Pn.Jd=d,Pn.gd}function Ti(d){if(!(d=Pn[d>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(d))d=g[1];else{if(!(g=/^(.+?)@/.exec(d)))return 0;d=g[1]}Ft(Ti.hd??0),g=bi(d)+1;var $=Cr(g);return $&&pn(d,$,g),Ti.hd=$,Ti.hd}function J$(d){d>>>=0;var g=(S(),U).length;if(d<=g||4294901760<d)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,d+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(d,_)/65536))-ft.buffer.byteLength+65535)/65536|0;try{ft.grow(_),B();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function ev(d,g,$){if(d>>>=0,g>>>=0,Pn.gd==d)var _=Pn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),$g(_);for(var T=3;_[T]&&Ii(_[T])!=d;)++T;for(d=0;d<$&&_[d+T];++d)(S(),O)[g+4*d>>>2>>>0]=Ii(_[d+T]);return d}var Is,Ts={},vg=()=>{var _;if(!Is){var d,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in Ts)Ts[d]===void 0?delete g[d]:g[d]=Ts[d];var $=[];for(d in g)$.push(`${d}=${g[d]}`);Is=$}return Is};function Sg(d,g){if(i)return ge(19,1,d,g);d>>>=0,g>>>=0;var $,_=0,T=0;for($ of vg()){var C=g+_;(S(),H)[d+T>>>2>>>0]=C,_+=pn($,C,1/0)+1,T+=4}return 0}function Mg(d,g){if(i)return ge(20,1,d,g);d>>>=0,g>>>=0;var $=vg();for(var _ of((S(),H)[d>>>2>>>0]=$.length,d=0,$))d+=bi(_)+1;return(S(),H)[g>>>2>>>0]=d,0}function Ig(d){return i?ge(21,1,d):52}function Tg(d,g,$,_){return i?ge(22,1,d,g,$,_):52}function Eg(d,g,$,_){return i?ge(23,1,d,g,$,_):70}var tv=[null,[],[]];function kg(d,g,$,_){if(i)return ge(24,1,d,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var T=0,C=0;C<$;C++){var P=(S(),H)[g>>>2>>>0],K=(S(),H)[g+4>>>2>>>0];g+=8;for(var re=0;re<K;re++){var se=d,$e=(S(),U)[P+re>>>0],Ce=tv[se];$e===0||$e===10?((se===1?v:I)(D(Ce)),Ce.length=0):Ce.push($e)}T+=K}return(S(),H)[_>>>2>>>0]=T,0}function nv(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Qt();Me.push(async()=>{var g=(async function(){if(!i)return Promise.all(ct.map(Rn))})();ze++,await g,--ze==0&&De&&(g=De,De=null,g())})})(),i||(ft=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),B()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Se(),t.stackRestore=d=>ve(d),t.stackAlloc=d=>Cs(d),t.setValue=function(d,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),N)[d>>>0]=g;break;case"i16":(S(),V)[d>>>1>>>0]=g;break;case"i32":(S(),O)[d>>>2>>>0]=g;break;case"i64":(S(),he)[d>>>3>>>0]=BigInt(g);break;case"float":(S(),X)[d>>>2>>>0]=g;break;case"double":(S(),J)[d>>>3>>>0]=g;break;case"*":(S(),H)[d>>>2>>>0]=g;break;default:G(`invalid type for setValue: ${$}`)}},t.getValue=function(d,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),N)[d>>>0];case"i16":return(S(),V)[d>>>1>>>0];case"i32":return(S(),O)[d>>>2>>>0];case"i64":return(S(),he)[d>>>3>>>0];case"float":return(S(),X)[d>>>2>>>0];case"double":return(S(),J)[d>>>3>>>0];case"*":return(S(),H)[d>>>2>>>0];default:G(`invalid type for getValue: ${g}`)}},t.UTF8ToString=j,t.stringToUTF8=pn,t.lengthBytesUTF8=bi;var Cg,Ag,Ei,Ft,Cr,Es,Rg,Og,Ng,ks,zg,Bg,Ie,Ar,Pg,ve,Cs,Se,Dg,As,Ug,Lg,Fg,Rs,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,o0,s0,u0,l0,c0,d0,h0,p0,f0,m0,g0,y0,w0,_0,b0,x0,$0,v0,S0,M0,I0,en,rv=[lt,Xt,hn,Q,ne,oe,ue,Ee,ke,ce,ae,le,me,be,We,Ue,wg,_g,bg,Sg,Mg,Ig,Tg,Eg,kg],Os={1003524:(d,g,$,_,T)=>{if(t===void 0||!t.Xc)return 1;if((d=j(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>d.byteLength)return 3;try{let C=d.subarray(g,g+$);switch(T){case 0:(S(),U).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,g,$)=>{t.td(d,(S(),U).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,g,$)=>{t.ed(Number(d),Number(g),Number($),!0)},1004704:(d,g,$)=>{t.ed(Number(d),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,g,$)=>{t.$b("HardSigmoid",d,{alpha:g,beta:$})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,g,$)=>{t.$b("Clip",d,{min:g,max:$})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,g)=>{t.$b("Elu",d,{alpha:g})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,g)=>{t.$b("LeakyRelu",d,{alpha:g})},1006444:(d,g)=>{t.$b("ThresholdedRelu",d,{alpha:g})},1006514:(d,g)=>{t.$b("Cast",d,{to:g})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,g,$,_,T)=>{t.$b("ReduceMean",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007283:(d,g,$,_,T)=>{t.$b("ReduceMax",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007457:(d,g,$,_,T)=>{t.$b("ReduceMin",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007631:(d,g,$,_,T)=>{t.$b("ReduceProd",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007806:(d,g,$,_,T)=>{t.$b("ReduceSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007980:(d,g,$,_,T)=>{t.$b("ReduceL1",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008153:(d,g,$,_,T)=>{t.$b("ReduceL2",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008326:(d,g,$,_,T)=>{t.$b("ReduceLogSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008503:(d,g,$,_,T)=>{t.$b("ReduceSumSquare",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008683:(d,g,$,_,T)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,g,$)=>{t.$b("Transpose",d,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009173:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009306:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve,mn)=>{t.$b("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[C,P],strides:[K],wIsConst:()=>!!(S(),N)[se>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(Ve)>>>0)):[],activation:j(mn)})},1009739:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("ConvTranspose",d,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:j(Ve)})},1010400:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve,mn)=>{t.$b("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[C,P],strides:[K],wIsConst:()=>!!(S(),N)[se>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(Ve)>>>0)):[],activation:j(mn)})},1010833:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("ConvTranspose",d,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:j(Ve)})},1011494:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1011585:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("AveragePool",d,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1012064:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1012155:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("AveragePool",d,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1012634:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1012721:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("MaxPool",d,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1013196:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1013283:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve)=>{t.$b("MaxPool",d,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1013758:(d,g,$,_,T)=>{t.$b("Gemm",d,{alpha:g,beta:$,transA:_,transB:T})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,g,$,_)=>{t.$b("ArgMax",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(d,g,$,_)=>{t.$b("ArgMin",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(d,g)=>{t.$b("Softmax",d,{axis:g})},1014195:(d,g)=>{t.$b("Concat",d,{axis:g})},1014255:(d,g,$,_,T)=>{t.$b("Split",d,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,g)=>{t.$b("Gather",d,{axis:Number(g)})},1014536:(d,g)=>{t.$b("GatherElements",d,{axis:Number(g)})},1014615:(d,g)=>{t.$b("GatherND",d,{batch_dims:Number(g)})},1014694:(d,g,$,_,T,C,P,K,re,se,$e)=>{t.$b("Resize",d,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:j(T),cubicCoeffA:C,excludeOutside:P,extrapolationValue:K,keepAspectRatioPolicy:j(re),mode:j(se),nearestMode:j($e)})},1015056:(d,g,$,_,T,C,P)=>{t.$b("Slice",d,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,g)=>{t.$b("Einsum",d,{equation:j(g)})},1015734:(d,g,$,_,T)=>{t.$b("Pad",d,{mode:g,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1015877:(d,g,$,_,T,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(d,g,$,_,T,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(d,g,$)=>{t.$b("CumSum",d,{exclusive:Number(g),reverse:Number($)})},1016312:(d,g,$)=>{t.$b("DequantizeLinear",d,{axis:g,blockSize:$})},1016402:(d,g,$,_,T)=>{t.$b("GridSample",d,{align_corners:g,mode:j($),padding_mode:j(_),format:T?"NHWC":"NCHW"})},1016572:(d,g,$,_,T)=>{t.$b("GridSample",d,{align_corners:g,mode:j($),padding_mode:j(_),format:T?"NHWC":"NCHW"})},1016742:(d,g)=>{t.$b("ScatterND",d,{reduction:j(g)})},1016827:(d,g,$,_,T,C,P,K,re)=>{t.$b("Attention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:C,qkvHiddenSizes:P?Array.from((S(),O).subarray(Number(K)>>>0,Number(K)+P>>>0)):[],pastPresentShareBuffer:!!re})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve,mn,Ns)=>{t.$b("Conv",d,{format:Ce?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:T,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],pads:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],strides:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(S(),N)[Number(Le)>>>0],activation:j(Ve),activation_params:mn?Array.from((S(),X).subarray(Number(mn)>>>0,Number(Ns)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,g,$,_,T,C,P,K,re)=>{t.$b("GroupQueryAttention",d,{numHeads:g,kvNumHeads:$,scale:_,softcap:T,doRotary:C,rotaryInterleaved:P,smoothSoftmax:K,localWindowSize:re})},1018124:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018235:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018346:(d,g,$,_,T,C)=>{t.$b("MatMulNBits",d,{k:g,n:$,accuracyLevel:_,bits:T,blockSize:C})},1018473:(d,g,$,_,T,C)=>{t.$b("MultiHeadAttention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:C})},1018632:(d,g)=>{t.$b("QuickGelu",d,{alpha:g})},1018696:(d,g,$,_,T)=>{t.$b("RotaryEmbedding",d,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:T})},1018835:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1018937:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1019039:(d,g,$,_)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:d=>{t.Fd(d)},1019194:(d,g)=>t.Hd(Number(d),Number(g),t.Yc.Kd,t.Yc.errors)};function iv(d,g,$){return pg(async()=>{await t.Dd(Number(d),Number(g),Number($))})}function av(){return typeof wasmOffsetConverter<"u"}function ov(d,g,$,_){var T=Se();try{return Yg(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function sv(d,g,$){var _=Se();try{return Vg(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;Ie(1,0)}}function uv(d){var g=Se();try{Gg(d)}catch($){if(ve(g),$!==$+0)throw $;Ie(1,0)}}function lv(d,g){var $=Se();try{return Rs(d,g)}catch(_){if(ve($),_!==_+0)throw _;Ie(1,0)}}function cv(d,g,$){var _=Se();try{Fg(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;Ie(1,0)}}function dv(d,g){var $=Se();try{Xg(d,g)}catch(_){if(ve($),_!==_+0)throw _;Ie(1,0)}}function hv(d,g,$,_,T,C,P){var K=Se();try{return jg(d,g,$,_,T,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function pv(d,g,$,_,T,C){var P=Se();try{Wg(d,g,$,_,T,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function fv(d,g,$,_){var T=Se();try{Kg(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function mv(d,g,$,_,T){var C=Se();try{qg(d,g,$,_,T)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function gv(d,g,$,_,T,C,P){var K=Se();try{Qg(d,g,$,_,T,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function yv(d,g,$,_,T,C,P){var K=Se();try{Jg(d,g,$,_,T,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function wv(d,g,$,_,T,C,P,K){var re=Se();try{r0(d,g,$,_,T,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function _v(d,g,$,_,T){var C=Se();try{return Zg(d,g,$,_,T)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function bv(d,g,$){var _=Se();try{return i0(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;Ie(1,0)}}function xv(d,g,$,_,T,C,P,K){var re=Se();try{a0(d,g,$,_,T,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function $v(d,g,$,_,T,C,P,K,re,se,$e,Ce){var Le=Se();try{e0(d,g,$,_,T,C,P,K,re,se,$e,Ce)}catch(Ve){if(ve(Le),Ve!==Ve+0)throw Ve;Ie(1,0)}}function vv(d,g,$,_,T,C){var P=Se();try{return t0(d,g,$,_,T,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function Sv(d,g,$){var _=Se();try{return o0(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;return Ie(1,0),0n}}function Mv(d,g,$,_,T,C,P,K,re){var se=Se();try{Hg(d,g,$,_,T,C,P,K,re)}catch($e){if(ve(se),$e!==$e+0)throw $e;Ie(1,0)}}function Iv(d){var g=Se();try{return s0(d)}catch($){if(ve(g),$!==$+0)throw $;Ie(1,0)}}function Tv(d,g){var $=Se();try{return $0(d,g)}catch(_){if(ve($),_!==_+0)throw _;return Ie(1,0),0n}}function Ev(d){var g=Se();try{return u0(d)}catch($){if(ve(g),$!==$+0)throw $;return Ie(1,0),0n}}function kv(d,g,$,_){var T=Se();try{return f0(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function Cv(d,g,$,_,T){var C=Se();try{return m0(d,g,$,_,T)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function Av(d,g,$,_,T,C){var P=Se();try{return g0(d,g,$,_,T,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function Rv(d,g,$,_,T,C){var P=Se();try{return y0(d,g,$,_,T,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function Ov(d,g,$,_,T,C,P,K){var re=Se();try{return n0(d,g,$,_,T,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function Nv(d,g,$,_,T){var C=Se();try{return w0(d,g,$,_,T)}catch(P){if(ve(C),P!==P+0)throw P;return Ie(1,0),0n}}function zv(d,g,$,_){var T=Se();try{return _0(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function Bv(d,g,$,_){var T=Se();try{return b0(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function Pv(d,g,$,_,T,C,P,K,re,se,$e,Ce){var Le=Se();try{return x0(d,g,$,_,T,C,P,K,re,se,$e,Ce)}catch(Ve){if(ve(Le),Ve!==Ve+0)throw Ve;Ie(1,0)}}function Dv(d,g,$,_,T,C,P,K,re,se,$e){var Ce=Se();try{h0(d,g,$,_,T,C,P,K,re,se,$e)}catch(Le){if(ve(Ce),Le!==Le+0)throw Le;Ie(1,0)}}function Uv(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve,mn,Ns){var Wv=Se();try{p0(d,g,$,_,T,C,P,K,re,se,$e,Ce,Le,Ve,mn,Ns)}catch(zs){if(ve(Wv),zs!==zs+0)throw zs;Ie(1,0)}}function Lv(d,g,$){var _=Se();try{return l0(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;Ie(1,0)}}function Fv(d,g,$){var _=Se();try{return c0(d,g,$)}catch(T){if(ve(_),T!==T+0)throw T;Ie(1,0)}}function Gv(d,g,$,_){var T=Se();try{d0(d,g,$,_)}catch(C){if(ve(T),C!==C+0)throw C;Ie(1,0)}}function ki(){if(0<ze)De=ki;else if(i)y==null||y(t),L();else{for(var d=Me;0<d.length;)d.shift()(t);0<ze?De=ki:(t.calledRun=!0,E||(L(),y==null||y(t)))}}return i||(en=await ie(),ki()),t.PTR_SIZE=4,R?t:new Promise((d,g)=>{y=d,w=g})}var iu,au,X0=ee(()=>{var e,t;iu=ru,au=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),au&&ru()}),Di,Ui,ou,gt,su,zr,uu,lu,Li,cu,Fi,du,Gi,hu,Wi=ee(()=>{zi(),Di=typeof location>"u"?void 0:location.origin,Ui=self.location.href>"file:"&&self.location.href<"file;",ou=()=>{{if(Ui){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Di).href}return self.location.href}},gt=ou(),su=()=>{if(gt&&!gt.startsWith("blob:"))return gt.substring(0,gt.lastIndexOf("/")+1)},zr=(e,t)=>{try{let n=t??gt;return(n?new URL(e,n):new URL(e)).origin===Di}catch{return!1}},uu=(e,t)=>{let n=t??gt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},lu=(e,t)=>`${t??"./"}${e}`,Li=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},cu=async e=>(await import(e)).default,Fi=(Y0(),tr(eu)).default,du=async()=>{if(!gt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zr(gt))return[void 0,Fi()];let e=await Li(gt);return[e,Fi(e)]},Gi=(X0(),tr(nu)).default,hu=async(e,t,n,r)=>{let i=Gi&&!(e||t);if(i)if(gt)i=zr(gt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Gi];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??uu(a,t),s=n&&o&&!zr(o,t),u=s?await Li(o):o??lu(a,t);return[s?u:void 0,await cu(u)]}}}),qi,Br,ir,Vi,pu,fu,mu,Hi,Ge,_n=ee(()=>{Wi(),Br=!1,ir=!1,Vi=!1,pu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},mu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Hi=async e=>{if(Br)return Promise.resolve();if(ir)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Vi)throw new Error("previous call to 'initializeWebAssembly()' failed.");ir=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!mu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=pu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await hu(s,a,n>1,!!h||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(h)b.wasmBinary=h,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(c){let x=su();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{ir=!1,Br=!0,qi=x,y(),c&&URL.revokeObjectURL(c)},x=>{ir=!1,Vi=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ge=()=>{if(Br&&qi)return qi;throw new Error("WebAssembly is not initialized yet.")}}),St,Pr,Oe,ji=ee(()=>{_n(),St=(e,t)=>{let n=Ge(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Pr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Pr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Oe=e=>{let t=Ge(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),gu,Z0=ee(()=>{_n(),ji(),gu=e=>{let t=Ge(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=St(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Oe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Pr(e.extra,"",new WeakSet,(o,s)=>{let u=St(o,r),l=St(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Oe(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),yu,wu,_u,bn,bu,xu,Q0=ee(()=>{_n(),ji(),yu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},wu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},_u=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},bn=(e,t,n,r)=>{let i=St(t,r),a=St(n,r);Ge()._OrtAddSessionConfigEntry(e,i,a)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},bu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",bn(e,"session.disable_quant_qdq","1",n),bn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&bn(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);bn(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=St(a,n),u=o.length,l=0,h=0;if(u>0){l=Ge()._malloc(u*Ge().PTR_SIZE),n.push(l),h=Ge()._malloc(u*Ge().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Ge().setValue(l+c*Ge().PTR_SIZE,o[c][0],"*"),Ge().setValue(h+c*Ge().PTR_SIZE,o[c][1],"*")}await Ge()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&Oe(`Can't append execution provider: ${a}.`)}},xu=async e=>{let t=Ge(),n=0,r=[],i=e||{};_u(i);try{let a=yu(i.graphOptimizationLevel??"all"),o=wu(i.executionMode??"sequential"),s=typeof i.logId=="string"?St(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?St(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&Oe("Can't create session options."),i.executionProviders&&await bu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);bn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=St(c,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Oe(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Pr(i.extra,"",new WeakSet,(c,p)=>{bn(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),xn,qt,$n,Dr,Ur,Ki,Yi,Xi,we=ee(()=>{xn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},qt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},$n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Dr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ur=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ki=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Zi,$u=ee(()=>{zi(),Zi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),vu,Su,Mu,Iu,Qi,Tu,Te,Vt=ee(()=>{we(),vu=["V","I","W","E","F"],Su=(e,t)=>{console.log(`[${vu[e]},${new Date().toISOString()}]${t}`)},Qi=(e,t)=>{Mu=e,Iu=t},Tu=(e,t)=>{let n=Ur(e),r=Ur(Mu);n>=r&&Su(n,typeof t=="function"?t():t)},Te=(...e)=>{Iu&&Tu(...e)}}),Eu,Fn,q,Lr,ku,Cu,Au,_e=ee(()=>{Eu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Fn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=Eu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class Ci{static size(t){return Ci.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ci.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ci.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Lr=class Rr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Rr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Rr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Rr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Rr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},ku=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Fn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},Cu=-34028234663852886e22,Au=34028234663852886e22}),Ji,Ru=ee(()=>{we(),Ji=(e,t)=>new(Dr(t))(e)}),ea,ta,na,Ou,ra,Nu,ia,aa,oa,zu,Bu,J0=ee(()=>{we(),Vt(),ea=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ta=(e,t)=>{if(t==="int32")return e;let n=ea.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Dr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},na=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ou=1,ra=()=>Ou++,Nu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ia=(e,t)=>{let n=ea.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},aa=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ia(this.dataType,this.tensorShape)}destroy(){Te("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=na(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},oa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Nu.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Te("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ia(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ta(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Te("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?na(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},zu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ra();return this.tensorTrackersById.set(e,new oa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Te("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Te("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=ra(),o=new aa({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new oa(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Te("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Te("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new aa({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bu=(...e)=>new zu(...e)}),ar,Pu,Du,ey=ee(()=>{we(),_n(),Ru(),J0(),Vt(),ar=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Pu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Du=class{constructor(e){this.tensorManager=Bu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Te("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Te("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Te("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Pu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Te("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=ar.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Te("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=ar.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Te("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ji(n,t)}}registerMLTensor(e,t,n,r){let i=ar.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Te("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let c=ta(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Te("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=ar.get(xn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),sa=ee(()=>{}),ua,Fr,Gr,Uu,Lu,la,ca,Fu,Gu,ty=ee(()=>{Vt(),sa(),ua=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fr=[],Gr=e=>Math.ceil(Number(e)/16)*16,Uu=e=>{for(let t=0;t<Fr.length;t++){let n=Fr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Lu=1,la=()=>Lu++,ca=async(e,t,n,r)=>{let i=Gr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Fu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ua)Fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Gr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Te("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Gr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=la();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Te("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Uu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:la(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Te("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Te("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ca(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ua.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Te("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gu=(...e)=>new Fu(...e)}),Wu,Re,Ke=ee(()=>{Wu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Wu(e)}),Gn,Wr,Qe,it,fe,je,da,Wn,nn,pe,or,Y,de,qu,ha,Vu,Hu,xe=ee(()=>{we(),_e(),Gn=64,Wr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let n=Wr(e,t);return typeof n=="string"?n:n[0]},it=(e,t=1)=>{let n=Wr(e,t);return typeof n=="string"?n:n[1]},fe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},je=e=>e%4===0?4:e%2===0?2:1,da=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Wn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,nn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,or=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Wr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},f=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let R=0;R<o-1;R++)x+=`
    let dim${R} = current / ${pe(b,R,o)};
    let rest${R} = current % ${pe(b,R,o)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(m.offsetToIndices=!0,o<2?R:`o2i_${e}(${R})`),I=[];if(o>=2)for(let R=o-1;R>=0;R--)I.push(`${pe(b,R,o)} * (indices[${R}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,k=R=>(m.indicesToOffset=!0,o<2?R:`i2o_${e}(${R})`),S=(...R)=>o===0?"0u":`${p.indices}(${R.map(f).join(",")})`,A=(R,B)=>o<2?`${R}`:`${pe(R,B,o)}`,N=(R,B,L)=>o<2?`${R}=${L};`:`${pe(R,B,o)}=${L};`,U={},V=(R,B)=>{m.broadcastedIndicesToOffset=!0;let L=`${B.name}broadcastedIndicesTo${e}Offset`;if(L in U)return`${L}(${R})`;let G=[];for(let Z=o-1;Z>=0;Z--){let ie=B.indicesGet("outputIndices",Z+B.rank-o);G.push(`${A(b,Z)} * (${ie} % ${A(w,Z)})`)}return U[L]=`fn ${L}(outputIndices: ${B.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${L}(${R})`},F=(R,B)=>(()=>{if(p.storage===p.value)return`${e}[${R}]=${B};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${B}), select(0u, 0xFFFFFFFFu, ${B} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${B}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${B}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=R=>(()=>{if(p.storage===p.value)return`${e}[${R}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${R}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${R}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),H=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,X=o<2?"":(()=>{let R=s.map(L=>`d${L}: u32`).join(", "),B=s.map(L=>`d${L}`).join(", ");return`
  fn get_${e}(${R}) -> ${h} {
    return get_${e}ByIndices(${S(B)});
  }`})(),J=(...R)=>{if(R.length!==o)throw new Error(`indices length must be ${o}`);let B=R.map(f).join(",");return o===0?O("0u"):o===1?O(B[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${B})`)},he=R=>o<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),W=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,z=o<2?"":(()=>{let R=s.map(L=>`d${L}: u32`).join(", "),B=s.map(L=>`d${L}`).join(", ");return`
  fn set_${e}(${R}, value: ${h}) {
    set_${e}ByIndices(${S(B)}, value);
  }`})();return{impl:()=>{let R=[],B=!1;return m.offsetToIndices&&(R.push(M),B=!0),m.indicesToOffset&&(R.push(E),B=!0),m.broadcastedIndicesToOffset&&(Object.values(U).forEach(L=>R.push(L)),B=!0),m.set&&(R.push(z),B=!0),m.setByIndices&&(R.push(W),B=!0),m.get&&(R.push(X),B=!0),m.getByIndices&&(R.push(H),B=!0),!a&&B&&R.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${q.computeStrides(n).join(",")});`),R.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:V,indices:S,indicesGet:A,indicesSet:N,set:(...R)=>{if(R.length!==o+1)throw new Error(`indices length must be ${o}`);let B=R[o];if(typeof B!="string")throw new Error("value must be string");let L=R.slice(0,o).map(f).join(",");return o===0?F("0u",B):o===1?F(L[0],B):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${L}, ${B})`)},setByOffset:F,setByIndices:(R,B)=>o<2?F(R,B):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${B});`),get:J,getByOffset:O,getByIndices:he,usage:r,name:e,strides:b,shape:w,rank:o}},Y=(e,t,n,r=1)=>or(e,t,n,"input",r),de=(e,t,n,r=1)=>or(e,t,n,"output",r),qu=(e,t,n)=>or(e,t,n,"atomicOutput",1),ha=(e,t,n,r=1)=>or(e,t,n,"internal",r),Vu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Gn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Hu=(e,t)=>new Vu(e,t)}),ju,pa,Ku,Yu,Xu,Zu,yt,Qu,Ju,rn=ee(()=>{we(),_e(),Ke(),xe(),ju=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},pa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ku=(e,t)=>q.sortBasedOnPerm(e,pa(e.length,t)),Yu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Xu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Zu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},yt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=pa(r,t),a=Ku(e.dims,i),o=e.dims,s=a,u=r<2||Zu(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,o,4),w=de("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=Xu(e.dims,i),p=q.areEqual(c,[2,3,1]),f=q.areEqual(c,[3,1,2]);if(h.length===2||p||f){o=p?[h[0],h[1]*h[2]]:f?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let m=16;return l=y=>{let w=Y("a",n,o.length),b=de("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...fe(o,s)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,o.length),w=de("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Yu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(o,s)]}},getShaderSource:l}},Qu=(e,t)=>{ju(e.inputs,t.perm),e.compute(yt(e.inputs[0],t.perm))},Ju=e=>Re({perm:e.perm})}),el,tl,nl,rl,il,al,ol,sl,ul,ll,Mt,cl,dl,hl,pl,fl,ml,gl,yl,wl,_l,ny=ee(()=>{we(),_e(),xe(),ma(),rn(),el={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},nl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},rl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},il=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},al=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},ol=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},sl=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ul=(e,t)=>{let n=[];if(!sl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},ll=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=q.size(a),l=q.size(o),h=Y("_A",n[0].dataType,s),c=de("output",i,a),p=64;u===1&&(p=256);let f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${nl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${el[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${rl[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:fa(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((f,m)=>m));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=ul(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(yt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=il(s.length,u.dims.length));let[h,c]=al(u.dims,s),p=h;i.keepDims&&(p=ol(h,o)),e.compute(ll(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},cl=(e,t)=>{Mt(e,"ReduceMeanShared",t,"mean")},dl=(e,t)=>{Mt(e,"ReduceL1Shared",t,"l1")},hl=(e,t)=>{Mt(e,"ReduceL2Shared",t,"l2")},pl=(e,t)=>{Mt(e,"ReduceLogSumExpShared",t,"logSumExp")},fl=(e,t)=>{Mt(e,"ReduceMaxShared",t,"max")},ml=(e,t)=>{Mt(e,"ReduceMinShared",t,"min")},gl=(e,t)=>{Mt(e,"ReduceProdShared",t,"prod")},yl=(e,t)=>{Mt(e,"ReduceSumShared",t,"sum")},wl=(e,t)=>{Mt(e,"ReduceSumSquareShared",t,"sumSquare")},_l=(e,t)=>{Mt(e,"ReduceLogSumShared",t,"logSum")}}),It,bl,qr,fa,Tt,xl,$l,vl,Sl,Ml,Il,Tl,El,kl,Cl,Et,Al,Rl,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,ma=ee(()=>{we(),_e(),Ke(),xe(),ny(),It=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},bl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],qr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,c=q.normalizeAxes(i,h),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?o&&u.push(1):u.push(y)});let f=u.length,m=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=Y("_A",n[0].dataType,h),x=de("output",a,f),M=r(b,x,c),v=M[2];for(let I=0,E=0;I<h;I++)p||c.indexOf(I)>=0?(o&&E++,v=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${M[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${v}
                }`):(w.push(`${b.indicesSet("input_indices",I,x.indicesGet("output_indices",E))};`),E++);return`

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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(l,u)]})}},fa=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Tt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:fa(i,n);e.compute(qr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?bl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},xl=(e,t)=>{It(e.inputs),Tt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},$l=(e,t)=>{It(e.inputs),Tt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},vl=(e,t)=>{It(e.inputs),Tt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Sl=(e,t)=>{It(e.inputs),Tt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Ml=(e,t)=>{It(e.inputs),Tt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Il=(e,t)=>{It(e.inputs),Tt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Tl=(e,t)=>{It(e.inputs),Tt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},El=(e,t)=>{It(e.inputs),Tt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},kl=(e,t)=>{It(e.inputs),Tt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Cl=(e,t)=>{It(e.inputs),Tt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Al=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):cl(e,t)},Rl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):dl(e,t)},Ol=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):hl(e,t)},Nl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):pl(e,t)},zl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):fl(e,t)},Bl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):ml(e,t)},Pl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):gl(e,t)},Dl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):yl(e,t)},Ul=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):wl(e,t)},Ll=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):_l(e,t)}}),ga,Fl,Gl,ya,ry=ee(()=>{we(),Ke(),ma(),ga=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Fl=(e,t)=>{ga(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Gl=(e,t)=>{ga(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(qr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ya=e=>Re(e)}),Wl,Vr,ql,Vl,Hl,sr,jl,Kl,wa=ee(()=>{we(),_e(),sa(),xe(),Wl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=m+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:h,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Vr=(e,t,n)=>t&&e?`
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
    `,ql=(e,t,n,r,i,a,o,s)=>{let u=je(o?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],f=Qe(e.dataType,u),m=it(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let x=de("x",e.dataType,e.dims,u),M=[x],v=o?Y("seq_lens",o.dataType,o.dims):void 0;v&&M.push(v);let I=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;I&&M.push(I);let E=it(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Vr(v,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${x.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Vl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=c?[a.batchSize,p,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=je(a.headSize),b=a.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],I=c&&r&&q.size(r.dims)>0,E=["type","type"];I&&E.push("type"),i&&E.push("type"),s&&E.push("type"),u&&E.push("type");let k=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=A=>{let N=Y("q",t.dataType,t.dims,w),U=Y("key",n.dataType,n.dims,w),V=[N,U];if(I){let W=Y("past_key",r.dataType,r.dims,w);V.push(W)}i&&V.push(Y("attention_bias",i.dataType,i.dims));let F=s?Y("seq_lens",s.dataType,s.dims):void 0;F&&V.push(F);let O=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;O&&V.push(O);let H=de("output",t.dataType,h),X=[H];c&&X.push(de("present_key",t.dataType,f,w));let J=it(1,w),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
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
    ${Vr(F,O,!0)}
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},Hl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,h],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),s&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=E=>{let k=Y("probs",t.dataType,t.dims),S=Y("v",n.dataType,n.dims),A=[k,S];x&&A.push(Y("past_value",r.dataType,r.dims));let N=o?Y("seq_lens",o.dataType,o.dims):void 0;o&&A.push(N);let U=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(U);let V=[de("output",t.dataType,m)];c&&V.push(de("present_value",t.dataType,f));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${E.registerUniforms(F).declareVariables(...A,...V)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Vr(N,U,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},sr=(e,t,n,r,i,a,o,s,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),f=p>1?o:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&q.size(u.dims)>0?u:void 0,x=[t,n];f&&q.size(f.dims)>0&&x.push(f),b&&x.push(b),h&&x.push(h),c&&x.push(c);let M=e.compute(Vl(p,t,n,f,b,l,y,h,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(ql(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,h,c),{inputs:h&&c?[M,h,c]:[M],outputs:[]});let v=[M,r];m&&q.size(m.dims)>0&&v.push(m),h&&v.push(h),c&&v.push(c),e.compute(Hl(p,M,r,m,l,y,h,c),{inputs:v,outputs:p>1?[0,2]:[0]})},jl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=de("output_q",u[0].dataType,n),f=de("output_k",u[0].dataType,n),m=de("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),b=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${c.registerUniforms(M).declareVariables(y,w,b,p,f,m)}
  ${c.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Kl=(e,t)=>{let n=Wl(e.inputs,t),[r,i,a]=jl(e,n);return sr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Yl,Xl,Zl,Ql,iy=ee(()=>{wt(),we(),_e(),Ke(),xe(),Yl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Xl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?je(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=q.size(a)/o,l=r,h=l?a.length:a,c=Y("x",e[0].dataType,e[0].dims,o),p=Y("scale",e[1].dataType,e[1].dims,s),f=Y("bias",e[2].dataType,e[2].dims,s),m=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),w=de("y",e[0].dataType,h,o),b=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(c,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...fe(a)]:[{type:12,data:u}]})}},Zl=e=>Re(e),Ql=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Zl({...t,outputCount:r});if(Fe.webgpu.validateInputContent&&Yl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xl(n,i))}}),Jl,ec,tc,ay=ee(()=>{_e(),xe(),Jl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ec=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=Y("input",i,t,4),o=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=de("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},tc=e=>{Jl(e.inputs),e.compute(ec(e.inputs))}}),nc,Ae,rc,ic,ac,oc,sc,uc,lc,cc,dc,hc,pc,fc,mc,gc,ur,yc,Hr,wc,_c,bc,xc,$c,vc,Sc,Mc,Ic,Tc,Ec,kc,Cc,Ac,Rc,Oc,_a,Nc,ba,xa,zc,Bc,Pc,Dc,Uc,Lc,$a=ee(()=>{we(),_e(),Ke(),xe(),nc=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),h=de("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Ae=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>nc(l,q.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},rc=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},ic=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},ac=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},oc=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},sc=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},uc=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},lc=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},cc=e=>Re(e),dc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},hc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},pc=(e,t)=>{let n=t||hc(e.inputs),r=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},fc=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},mc=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},gc=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},ur=e=>Re(e),yc=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Hr=(e="f32")=>`
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
}`,wc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Hr(t)))},_c=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},bc=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},xc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Hr(t)))},$c=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},vc=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Sc=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Mc=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ic=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Tc=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ec=e=>Re(e),kc=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Cc=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},Ac=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},Rc=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},Oc=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},_a=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Nc=e=>{e.compute(Ae(e.inputs[0],"Tanh",_a))},ba=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${_a("v")};
}
`,xa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,zc=e=>{let t=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",xa,ba(t),void 0,e.inputs[0].dataType))},Bc=(e,t)=>{let n=it(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Pc=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Dc=(e,t)=>`
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
`,Uc=e=>`quick_gelu_impl(${e})`,Lc=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Uc,Dc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Fc,Gc,Wc,oy=ee(()=>{_e(),xe(),$a(),Fc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Gc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=de("output",e[0].dataType,t,4),a=q.size(t)/4,o=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Hr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Wc=e=>{Fc(e.inputs),e.compute(Gc(e.inputs))}}),qc,Vc,kt,Hc,jc,Kc,Yc,Xc,Zc,Qc,Jc,ed,td,sy=ee(()=>{we(),_e(),xe(),qc=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=de("outputData",h,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),b;if(i)if(a){let x=q.size(t)===1,M=q.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,I="")=>{let E=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${I}(${p(E,k)});
          `};h===9?b=`
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
      }`},Vc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),h=s,c=q.size(s),p=!1,f=!1,m=[l];if(l){let y=Fn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=q.size(h);let w=q.size(s)===1,b=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let v=1;for(let I=1;I<h.length;I++){let E=s[s.length-I],k=u[u.length-I];if(E===k)v*=E;else break}v%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>qc(y,s,u,h,p,l,f,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(h)/4)},...fe(s,u,h)]})}},kt=(e,t,n,r,i,a)=>{e.compute(Vc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Hc=e=>{kt(e,"Add",(t,n)=>`${t}+${n}`)},jc=e=>{kt(e,"Div",(t,n)=>`${t}/${n}`)},Kc=e=>{kt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Yc=e=>{kt(e,"Mul",(t,n)=>`${t}*${n}`)},Xc=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;kt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Zc=e=>{kt(e,"Sub",(t,n)=>`${t}-${n}`)},Qc=e=>{kt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Jc=e=>{kt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},ed=e=>{kt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},td=e=>{kt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),nd,rd,id,ad,od,sd,uy=ee(()=>{we(),_e(),Ke(),xe(),nd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},rd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,id=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ad=(e,t,n,r)=>{let i=q.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=Y(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...fe(e[y].dims));h.push(...fe(n));let c=de("output",r,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,c)})()}

  ${rd(a.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${id(o,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:m}},od=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);nd(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>q.size(s.dims)>0);e.compute(ad(o,i,a,n[0].dataType),{inputs:o})},sd=e=>Re({axis:e.axis})}),vn,Sn,Mn,va,In=ee(()=>{we(),_e(),vn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Sn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Mn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},va=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Cu,Au];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),tt,ud,Sa=ee(()=>{tt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ud=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ld,ly=ee(()=>{ld=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),lr,Ma,Ia=ee(()=>{we(),_e(),xe(),In(),lr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${pe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,pe(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},Ma=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],c=je(l),p=je(h),f=je(u),m=q.size(n)/c/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[q.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:h}];Sn(t,x),x.push(...fe(w,o,s)),y&&x.push(...fe(e[2].dims)),x.push(...fe(b));let M=v=>{let I=ha("batch_dims",e[0].dataType,w.length),E=Y("a",e[0].dataType,o.length,p),k=Y("b",e[1].dataType,s.length,c),S=de("output",e[0].dataType,b.length,c),A=Qe(S.type.tensor),N=vn(t,S.type.value,A),U=[E,k],V="";if(y){let H=i?c:1;U.push(Y("bias",e[2].dataType,e[2].dims.length,H)),V=`${i?`value += bias[col / ${H}];`:`value += ${S.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Mn(t,F);let O=()=>{let H=`var a_data: ${E.type.value};`;for(let X=0;X<p;X++)H+=`
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

    var a_indices: ${E.type.indices};
    ${lr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${lr("b_indices",k,k.rank-2,I.rank,"batch_indices")}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),cd,dd,Ta,Ea,hd,ka,pd,jr,Ca=ee(()=>{we(),_e(),xe(),In(),Ia(),Sa(),cd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,dd=(e,t)=>e?`
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
        }`,Ta=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],f=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${h/p}>, ${c}>;
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
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${cd(i,r)}
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

          ${dd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ea=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,hd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ka=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=c/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ea(i,r)}
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
      ${Ea(i,r)}
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
      ${hd(i)}
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
    ${w}
  }
`},pd=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${tt(e,l)} {
      var value = ${tt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${lr("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${tt(e,l)} {
      var value = ${tt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${lr("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${tt(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${tt(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},jr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=q.size(h),p=o[o.length-2],f=o[o.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],M=y?4:1,v=[...u,p,f/M],I=v.length,E=[...l,f,m/M],k=E.length,S=[c,p,m/M],A=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];Sn(t,A),A.push(...fe(h,v,E));let N=["rank","rank"],U=e.length>2;U&&(A.push(...fe(e[2].dims)),N.push("rank")),A.push(...fe(S));let V=F=>{let O=h.length,H=ha("batchDims",e[0].dataType,O,1),X=Qe(e[0].dataType),J=Y("a",e[0].dataType,I,M),he=Y("b",e[1].dataType,k,M),W=de("result",e[0].dataType,S.length,M),z=[J,he];if(U){let Z=i?M:1;z.push(Y("bias",e[2].dataType,e[2].dims.length,Z))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Mn(t,R);let B=Qe(W.type.tensor),L=vn(t,W.type.value,B),G=pd(M,U,L,[H,J,he,W],i);return`
  ${F.registerUniforms(R).registerInternalVariables(H).declareVariables(...z,W)}
  ${G}
  ${y?Ta(w,b,X,H):ka(w,b,X,H)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:V}}}),fd,md,cy=ee(()=>{we(),Vt(),xe(),In(),Sa(),ly(),Ca(),fd=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},c=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=e?`
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
    var resData = ${tt(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
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
    return ${tt(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${tt(o,l)}(0.0);`,v=e?r&&n?c(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(s)}
    }
    return ${tt(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(s)}
    }
    return ${tt(s,l)}(0.0);`,I=tt(u,l),E=tt(e?o:s,l),k=tt(e?s:o,l),S=vn(a,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
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
      ${ud(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},md=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(c/x[2]/M[2])];Te("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let I=y?l&&h%4!==0?3:4:1,E=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*I,x[1]),A=r%E===0,N=i%k===0,U=a%S===0,V=y?[I,4,4]:[1,1,1],F=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Sn(t,F),F.push(...fe(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(F.push(...fe(e[2].dims)),O.push("rank")),F.push(...fe(n));let H=X=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Mn(t,J);let he=y?4:1,W=Qe(e[0].dataType),z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${W}>`:W}) {
        result[flatIndex] = ${y?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=Y("x",e[0].dataType,e[0].dims.length,I===3?1:I),B=Y("w",e[1].dataType,e[1].dims.length,he),L=[R,B],G=de("result",e[0].dataType,n.length,he);if(o){let Z=Y("bias",e[2].dataType,e[2].dims.length,he);L.push(Z),z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${ld("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(J).declareVariables(...L,G)}
        ${z}
        ${fd(l,A,N,U,o,t,V[0],V[1],V[2],W)}
        ${y?Ta(M,x,W,void 0,!l,S):ka(M,x,W,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${A};${N};${U};${E};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:F}),getShaderSource:H}}}),gd,Aa,cr,yd,Ra,wd,_d,bd,dy=ee(()=>{we(),Vt(),_e(),xe(),In(),Sa(),gd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Aa=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),yd=(e,t,n,r=1)=>{let i=cr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ra=(e,t,n,r,i)=>{i==null&&(i=yd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},wd=(e,t,n,r,i,a,o,s,u,l)=>{let h,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Ra([t,n,r,1],[s,u,l],1,[i,a,o],e);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Ra([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);c=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),f=Math.ceil(r/o);let m=(c-1)*i+s-t,y=(p-1)*a+u-n,w=(f-1)*o+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),v=y-M,I=Math.floor(w/2),E=w-I;h={top:M,bottom:v,left:I,right:E,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:f}},_d=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,c;if(o==="channelsLast")[s,u,l,h,c]=e;else if(o==="channelsFirst")[s,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,f,m,y]=t,[w,b,x]=Aa(n),[M,v,I]=Aa(r),E=cr(f,M),k=cr(m,v),S=cr(y,I),{padInfo:A,outDepth:N,outHeight:U,outWidth:V}=wd(i,u,l,h,w,b,x,E,k,S),F=a?p*c:p,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,F,N,U,V]:o==="channelsLast"&&(O=[s,N,U,V,F]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:N,outHeight:U,outWidth:V,outChannels:F,padInfo:A,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},bd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(gd(u.x.map(w=>n[w]))/s[0]),1,1];Te("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=q.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Sn(t,p),p.push(...fe(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...fe(e[2].dims)),f.push("rank")),p.push(...fe(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Mn(t,b);let x=1,M=Qe(e[0].dataType),v=Y("x",e[0].dataType,e[0].dims.length,h),I=Y("W",e[1].dataType,e[1].dims.length,x),E=[v,I],k=de("result",e[0].dataType,n.length,x),S="";if(m){let U=Y("bias",e[2].dataType,e[2].dims.length,x);E.push(U),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?pe("coords",4,5):pe("coords",1,5)}];
        }`}let A=tt(h,M),N=vn(t,A,M);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...E,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,v.rank)};
              let d2 = ${o?pe("coords",v.rank-1,v.rank):pe("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${o?pe("coords",1,v.rank):pe("coords",2,v.rank)},
              ${o?pe("coords",2,v.rank):pe("coords",3,v.rank)},
              ${o?pe("coords",3,v.rank):pe("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?pe("uniforms.x_shape",1,v.rank):pe("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${o?pe("uniforms.x_shape",2,v.rank):pe("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${o?pe("uniforms.x_shape",3,v.rank):pe("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${o?pe("uniforms.x_shape",4,v.rank):pe("uniforms.x_shape",1,v.rank)};
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),xd,$d,hy=ee(()=>{we(),_e(),xe(),In(),xd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?je(l):1,p=q.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Sn(t,f),f.push(...fe(o,[s[0],s[1],s[2],s[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...fe([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=de("output",e[0].dataType,n.length,c),x=Qe(b.type.tensor),M=vn(t,b.type.value,x),v=Y("x",e[0].dataType,o.length),I=Y("w",e[1].dataType,s.length,c),E=[v,I];i&&E.push(Y("b",e[2].dataType,e[2].dims,c));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Mn(t,k);let S=u?`
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
  ${w.registerUniforms(k).declareVariables(...E,b)}

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
    ${a}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},$d=(e,t,n,r)=>{let i=e.length>2,a=je(n[3]),o=je(n[2]),s=q.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Sn(t,c),c.push(...fe(u,l,h));let p=(o-1)*t.strides[1]+l[1],f=m=>{let y=de("output",e[0].dataType,h.length,a),w=Qe(y.type.tensor),b=vn(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,a),M=Y("w",e[1].dataType,l.length,a),v=[x,M];i&&v.push(Y("b",e[2].dataType,e[2].dims,a));let I=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Mn(t,E),`
  ${m.registerUniforms(E).declareVariables(...v,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      ${I}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}}}),vd,Kr,Sd,Yr,Oa,Na,Md,Id,za,py=ee(()=>{_e(),cy(),dy(),Ca(),hy(),In(),Ia(),rn(),vd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),c=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-h[f]+i[f])/i[f]));return c.splice(0,0,o),c.splice(a?3:1,0,l),c},Kr=[2,3,1,0],Sd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Yr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Lr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Oa=e=>{let t=va(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Na=(e,t,n,r)=>{let i=n.format==="NHWC",a=vd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(yt(t[1],Kr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),E.push(k)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute($d(E,n,a,r),{inputs:E}):e.compute(xd(E,n,a,r),{inputs:E});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],f=a[i?2:3],m=a[i?3:1],y=i&&h===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=a[0],k,S,A,N=[];if(i){let F=e.kernelCustomData.wT??e.compute(yt(t[1],Kr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),y){let O=s*u*l;k=t[0].reshape([1,E,O]),S=F.reshape([1,O,m]),A=[1,E,m]}else k=t[0].reshape([E,s*u,l]),S=F.reshape([1,l,m]),A=[E,p*f,m];N.push(k),N.push(S)}else k=t[0].reshape([E,l,s*u]),S=t[1].reshape([1,m,l]),A=[E,m,p*f],N.push(S),N.push(k);o&&N.push(t[2]);let U=A[2],V=N[0].dims[N[0].dims.length-1];U<8&&V<8?e.compute(Ma(N,n,a,A,i,r),{inputs:N}):e.compute(jr(N,n,a,A,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(yt(t[1],Kr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,I=h*c*l;e.compute(md(x,n,a,M,v,I,o,w,r),{inputs:x})},Md=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Yr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Na(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Id=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Yr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=_d(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(bd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},za=(e,t)=>{if(Sd(e.inputs,t),e.inputs[0].dims.length===3)Md(e,t);else if(e.inputs[0].dims.length===5)Id(e,e.inputs,t);else{let n=Yr(t,e.inputs);Na(e,e.inputs,n)}}}),Td,fy=ee(()=>{we(),Vt(),_e(),xe(),Td=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?je(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,f=u-p,m=a?je(l):1,y=a?l===1?h:m:1,w=q.size(i)/m,b=[Math.ceil(w/64),1,1];Te("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],E=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:I},{type:12,data:E},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...fe(e[0].dims,e[1].dims)];r&&(S.push(...fe(e[2].dims)),x.push("rank")),S.push(...fe(i));let A=N=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Qe(e[0].dataType),F=a?1:2,O=a?2:3,H=a?3:1,X=Y("W",e[1].dataType,e[1].dims.length,y),J=Y("Dy",e[0].dataType,e[0].dims.length,h),he=[J,X];r&&he.push(Y("bias",e[2].dataType,[i[H]].length,m));let W=de("result",e[0].dataType,i.length,m),z=()=>{let L="";if(c)h===4?L+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?L+=`
          dotProd = dotProd + dot(vec4<${V}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${V}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(L+=`
          dotProd = dotProd + dot(vec4<${V}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${V}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(L+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):J.get("batch","inputChannel","idyR","idyC")};
        `,h===1)L+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<h;G++)L+=`
            let wValue${G} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return L},R=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let L="";if(h===1){L+="dotProd = dotProd";for(let G=0;G<f;G++)L+=`
            + ${J.getByOffset(`x_offset + ${G}`)} * ${X.getByOffset(`w_offset + ${G}`)}`;L+=";"}else if(h===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);L+=`
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
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${z()}
                  inputChannel = inputChannel + ${c?4:h};
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
    ${B}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),Ed,kd,Cd,Ba,Ad,Rd,Pa,Od,Nd,my=ee(()=>{fy(),In(),rn(),Ed=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,kd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Cd=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-h-(s?1:0);m<h;++m,++y){let w=e[y],b=c?w*o[m]:l[m],x=Ed(w,o[m],a[m],t[y],n[m],b);kd(x,r,a,m,m+h),c&&l.push(o[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+h])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Ba=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}Cd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},Ad=e=>{let t=va(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Rd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Pa=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(yt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Td(a,n,r),{inputs:a})},Od=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Ba({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Pa(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Nd=(e,t)=>{if(Rd(e.inputs,t),e.inputs[0].dims.length===3)Od(e,t);else{let n=Ba(t,e.inputs);Pa(e,e.inputs,n)}}}),zd,Bd,Pd,gy=ee(()=>{we(),_e(),Ke(),xe(),zd=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=Y("input",e,a),s=de("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,a),h=c=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",a),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...fe(t,t)]}),getShaderSource:h}},Bd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(zd(r,n,i,t),{inputs:[0]})},Pd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Dd,Ud,Ld,Fd,Gd,yy=ee(()=>{we(),_e(),Ke(),xe(),Dd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ud=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Ld=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(o),p=c.dims.length,f=e.dataType,m=Y("a",f,p),y=de("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Ud(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=q.size(x),v=c.dims,I=q.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...fe(v,I)]}},getShaderSource:w}},Fd=(e,t)=>{Dd(e.inputs),e.compute(Ld(e.inputs[0],t))},Gd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Xr,dr,Da,Wd,qd,Vd,Hd,Ua,jd,Kd,Yd,wy=ee(()=>{we(),_e(),Ke(),xe(),Xr="[a-zA-Z]|\\.\\.\\.",dr="("+Xr+")+",Da="^"+dr+"$",Wd="("+dr+",)*"+dr,qd="^"+Wd+"$",Vd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Hd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(qd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Da)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(dr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Xr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Da))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Xr,"g")),l=new Vd(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<o.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,c+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Ua=e=>e+"_max",jd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>Y(`input${h}`,t,l)),a=q.size(r),o=de("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,I)=>{var E;if(n.rhs.symbolToIndices.has(I)){let k=(E=n.rhs.symbolToIndices.get(I))==null?void 0:E[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let N=S.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(U=>{h.push(`${i[A].indicesSet(`input${A}Indices`,U,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(I);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(N=>{m.push(`${i[S].indicesSet(`input${S}Indices`,N,`${I}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ua(I)}; ${I}++) {`),w.push("}")});let M=x?[...h,`let sum = ${i.map((v,I)=>v.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,p,...y,...m,c,...b,f,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ua(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...fe(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...fe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Kd=(e,t)=>{let n=new Hd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(jd(i,e.inputs[0].dataType,n,r))},Yd=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Xd,La,Zd,Qd,Jd,_y=ee(()=>{we(),_e(),xe(),Xd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},La=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Zd=(e,t)=>e.length>t.length?La(e,t):La(t,e),Qd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Zd(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=c=>{let p=Y("input",i,t.length,o),f=de("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${o}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},h=[{type:12,data:u},...fe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Jd=e=>{Xd(e.inputs),e.compute(Qd(e.inputs),{inputs:[0]})}}),eh,th,by=ee(()=>{we(),_e(),xe(),$a(),eh=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,a=o=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=de("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${ba(it(t))}

    ${o.mainStart(Gn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",xa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Gn/4)}})}},th=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?zc(e):e.compute(eh(e.inputs))}}),nh,rh,ih,ah,xy=ee(()=>{we(),_e(),Ke(),xe(),nh=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},rh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...fe(e[0].dims,e[1].dims,o)],c=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=de("output",e[0].dataType,o.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<M;I++)v+=`${M>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,E=0;I<i;I++)I===a?(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,E+=M):(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return v},b;if(e[0].dataType===9){let x=(M,v,I="")=>`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},ih=e=>Re({axis:e.axis}),ah=(e,t)=>{let n=e.inputs;nh(n),e.compute(rh(e.inputs,t))}}),oh,sh,uh,$y=ee(()=>{we(),_e(),xe(),oh=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...fe(t.dims,h));let c=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=de("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},sh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),u=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),h=q.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(o),f=u;for(let v=0;v<o;++v)p[o-1-v]=f,f*=r[t.batchDims+o-1-v];let m=oh(e,n[1],p,t.batchDims,r,s,c,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=q.size(w),x=[{type:12,data:b},{type:12,data:u},...fe(n[0].dims,m.dims,w)],M=v=>{let I=Y("data",n[0].dataType,n[0].dims.length),E=Y("slice_offsets",12,m.dims.length),k=de("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},uh=e=>({batchDims:e.batch_dims,cacheKey:""})}),lh,ch,dh,hh,vy=ee(()=>{we(),_e(),Ke(),xe(),lh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ch=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=q.size(s),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...fe(...e.map((f,m)=>f.dims),s)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),b=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=de("output",l,s.length),M=[m,y,w];b&&M.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
          index_from_indices += ${n[a]};
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
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${it(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},dh=(e,t)=>{let n=e.inputs;lh(n,t),e.compute(ch(e.inputs,t))},hh=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ph,fh,mh,gh,Sy=ee(()=>{we(),_e(),Ke(),xe(),ph=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},fh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=q.size(l),c=Y("input",r,i),p=Y("indicesInput",o,a.length),f=de("output",r,l.length),m=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return m.push(...fe(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},mh=e=>Re({axis:e.axis}),gh=(e,t)=>{let n=e.inputs;ph(n),e.compute(fh(e.inputs,t))}}),yh,wh,_h,bh,My=ee(()=>{we(),_e(),xe(),yh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},wh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=ku.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=q.size(s),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...fe(e[2].dims)),m.push("rank")),f.push(...fe(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=Y("a",e[0].dataType,e[0].dims),I=Y("b",e[1].dataType,e[1].dims),E=v.type.value,k=null,S=[v,I];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),S.push(k));let A=de("output",e[0].dataType,s.length);S.push(A);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${E}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),v=null,I=[x,M];e.length===3&&(v=Y("c",e[2].dataType,e[2].dims.length),I.push(v));let E=de("output",e[0].dataType,s.length);I.push(E);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
    var value = ${E.type.value}(0);
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
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},_h=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bh=(e,t)=>{yh(e.inputs),e.compute(wh(e.inputs,t))}}),zt,Ht,Tn,En,xh,$h,vh,Sh,Mh,Ih,Th,Eh,kh,Ch,Iy=ee(()=>{we(),_e(),Ke(),xe(),[zt,Ht,Tn,En]=[0,1,2,3],xh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},$h=`
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
`,vh=e=>`
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
`,Sh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Mh=e=>`
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
`,Ih=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${zt}] = batch;
     indices[${Ht}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Tn}] = u32(r);
            indices[${En}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Tn}] = u32(clamp(r, 0, H - 1));
          indices[${En}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Tn}] = gs_reflect(r, border[1], border[3]);
          indices[${En}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Th=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${zt}], indices[${Ht}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${zt}], indices[${Ht}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${zt}], indices[${Ht}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${zt}], indices[${Ht}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${zt}], indices[${Ht}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${zt}], indices[${Ht}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Eh=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[zt,Ht,Tn,En]=[0,3,1,2]);let o=de("output",e[0].dataType,a.length),s=n.type.value,u=q.size(a),l=[{type:12,data:u},...fe(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${$h}
  ${vh(s)}
  ${Sh(t)}
  ${Mh(t)}
  ${Ih(n,s,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Tn}]);
      let W_in = i32(uniforms.x_shape[${En}]);

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
      var grid_indices = vec3<u32>(indices[${zt}], indices[${Tn}], indices[${En}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Th(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=q.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},kh=(e,t)=>{xh(e.inputs),e.compute(Eh(e.inputs,t))},Ch=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Ah,Rh,Fa,Oh,hr,Nh,zh=ee(()=>{we(),_e(),Ke(),sa(),wa(),xe(),rn(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ah=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),a=ot(e,3),o=ot(e,4),s=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=c,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(o&&q.size(o.dims)>0){M=8;let k=o.dims;throw k.length===1?k[0]===h?M=1:k[0]===3*h+2&&(M=3):k.length===2&&k[0]===h&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,I=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],v=!0}}let E=!1;if(o&&q.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:E,passPastInKv:v,qkvFormat:b}},Rh=e=>Re({...e}),Fa=Re({perm:[0,2,1,3]}),Oh=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=q.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=c=>{let p=de("qkv_with_bias",t.dataType,s),f=Y("qkv",t.dataType,s),m=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},hr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&q.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Oh(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(yt(u,Fa.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(yt(u,Fa.perm),{inputs:[u],outputs:[-1]})[0]},Nh=(e,t)=>{let n=Ah(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),a=ot(e.inputs,2),o=ot(e.inputs,3),s=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),h=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=hr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(c)return sr(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let f=hr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=hr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);sr(e,p,f,m,s,void 0,l,h,u,n)}}),Bh,Ph,Dh,Uh,Ga,Lh,Fh,Gh=ee(()=>{we(),_e(),Ke(),xe(),Bh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ph=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Dh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Uh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ga=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let y=n.slice();y[a]=t.splitSizes[m],h.push(y),o[m]=de(`output${m}`,i,y.length),l.push({dims:h[m],dataType:e[0].dataType})}p.push({type:12,data:u},...fe(n,...h));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Dh(u.length)}
  ${Uh(o)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Lh=(e,t)=>{Bh(e.inputs);let n=e.inputs.length===1?t:Ph(e.inputs,t);e.compute(Ga(e.inputs,n),{inputs:[0]})},Fh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Wh,Zr,qh,Vh=ee(()=>{we(),_e(),Ke(),xe(),Wh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Zr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(o,u,l/c,c-h),f=q.computeStrides(p),m=[{type:1,data:a},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),v=Y("sin_cache",e[3].dataType,e[3].dims.length),I=de("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,v,I)}

        ${w.mainStart(Gn)}
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/Gn)},programUniforms:m})}},qh=(e,t)=>{Wh(e.inputs,t),e.compute(Zr(e.inputs,t))}}),Hh,jh,Wa,Kh,Yh,Ty=ee(()=>{Ke(),we(),wa(),zh(),Gh(),rn(),Vh(),xe(),Hh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);f&&(h=m*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=I.dims.reduce((k,S)=>k*S,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let k=0;k<I.dims.length;k++)if(I.dims[k]!==1&&I.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${I.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},jh=Re({perm:[0,2,1,3]}),Wa=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(yt(r,jh.perm),{inputs:[r],outputs:[-1]})[0]),r},Kh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let c=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=de("pos_ids",i,o),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(m).declareVariables(c,p,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Yh=(e,t)=>{var v;let n=Hh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,f,m]=!i&&!a?e.compute(Ga([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let I=e.compute(Kh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],k=e.inputs[8],S=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[p,I,E,k],N=[-1];y=e.compute(Zr(A,S),{inputs:A,outputs:N})[0],A.splice(0,1,f);let U=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Zr(A,U),{inputs:A,outputs:N})[0]}let b=hr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Wa(e,t.doRotary?w:f,n),M=Wa(e,m,n);sr(e,b,x,M,void 0,void 0,o,s,void 0,n,u,l)}}),qa,Xh,Zh,Qh,Ey=ee(()=>{we(),_e(),rn(),xe(),qa=(e,t,n,r,i,a,o,s)=>{let u=je(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*o,p=64;c===1&&(p=256);let f=[i,o,a/u],m=[i,o,2],y=["rank","type","type"],w=[];w.push(...fe(f,m));let b=x=>{let M=Y("x",t.dataType,3,u),v=Y("scale",n.dataType,n.dims),I=Y("bias",r.dataType,r.dims),E=de("output",1,3,2),k=[M,v,I,E];return`
  var<workgroup> workgroup_shared : array<${h}, ${p}>;
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
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${nn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${nn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Xh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=q.sizeFromDimension(r,a),l=je(u),h=q.size(i)/l,c=qa(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],f=[o,s],m=["type","none"],y=w=>{let b=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),M=de("output",t[0].dataType,p.length,l),v=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...fe(p,f,p)]}),getShaderSource:y},{inputs:[t[0],c]})},Zh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,u=je(o),l=q.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],c=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(yt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=qa(e,m,t[1],t[2],a,s,o,n.epsilon),w=b=>{let x=Qe(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=Y("input",t[0].dataType,t[0].dims,u),E=de("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:w},{inputs:[t[0],y]})},Qh=(e,t)=>{t.format==="NHWC"?Zh(e,e.inputs,t):Xh(e,e.inputs,t)}}),Jh,ep,tp,ky=ee(()=>{we(),_e(),xe(),Jh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ep=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),h=q.sizeFromDimension(i,u),c=q.size(a.dims),p=o?q.size(o.dims):0;if(c!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=je(h),y=["type","type"],w=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/m)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,M=I=>{let E=Qe(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",a.dataType,a.dims,m)];o&&k.push(Y("bias",o.dataType,o.dims,m)),k.push(de("output",e[0].dataType,s,m)),b&&k.push(de("mean_data_output",1,f)),x&&k.push(de("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(S).declareVariables(...k)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${da("f32",m)};
    var mean_square_vector = ${da("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Wn(E,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Wn(E,m,"x[j + offset]")};
      let f32scale = ${Wn(E,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Wn(E,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},tp=(e,t)=>{Jh(e.inputs),e.compute(ep(e.inputs,t,e.outputCount))}}),np,rp,Cy=ee(()=>{_e(),Ia(),Ca(),np=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},rp=e=>{np(e.inputs);let t=Fn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ma(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(jr(h,{activation:""},t,l),{inputs:h})}else e.compute(jr(e.inputs,{activation:""},t))}}}),ip,ap,op,sp,up,Ay=ee(()=>{we(),_e(),Ke(),xe(),ip=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},ap=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=je(t.k),p=je(l),f=je(o),m=s.concat([i,o]),y=i>1&&o/f%2===0?2:1,w=q.size(m)/f/y,b=64,x=[],M=[u,i,a/c],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...fe(M)),x.push(...fe(v)),x.push(...fe(e[2].dims)),e.length===4&&x.push(...fe(q.convertShape(e[3].dims)));let I=[u,i,o/f];x.push(...fe(I));let E=k=>{let S=M.length,A=Y("a",e[0].dataType,S,c),N=Y("b",12,v.length,p),U=Y("scales",e[2].dataType,e[2].dims.length),V=[A,N,U],F=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;F&&V.push(F);let O=I.length,H=de("output",e[0].dataType,O,f),X=Qe(e[0].dataType),J=(()=>{switch(c){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${c}-component is not supported.`)}})(),he=Math.floor(32/t.bits),W=Math.floor(he/8),z=()=>{let L="";for(let G=0;G<W;G++){let Z=G*t.bits*4,ie=Z+t.bits;L+=`
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:E}},op=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=je(t.k),p=je(l),f=s.concat([i,o]),m=128,y=o%8===0?8:o%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/c,v=x/t.blockSize,I=q.size(f)/y,E=[],k=[u,i,a/c],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),E.push(...fe(k)),E.push(...fe(S)),E.push(...fe(e[2].dims)),e.length===4&&E.push(...fe(q.convertShape(e[3].dims)));let A=[u,i,o];E.push(...fe(A));let N=U=>{let V=k.length,F=Y("a",e[0].dataType,V,c),O=Y("b",12,S.length,p),H=Y("scales",e[2].dataType,e[2].dims.length),X=[F,O,H],J=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;J&&X.push(J);let he=A.length,W=de("output",e[0].dataType,he),z=Qe(e[0].dataType),R=()=>{switch(c){case 1:return`
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:h}],dispatchGroup:{x:I},programUniforms:E}),getShaderSource:N}},sp=(e,t)=>{ip(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(op(e.inputs,t)):e.compute(ap(e.inputs,t))},up=e=>Re(e)}),lp,cp,dp,hp,pp,fp,mp,gp,yp,Ry=ee(()=>{we(),_e(),xe(),lp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},cp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},dp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},hp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},pp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},fp=(e,t,n)=>{switch(n.mode){case 0:return cp(e,t,n.pads.length);case 1:return dp(e,t,n.pads.length);case 2:return hp(e,t,n.pads.length);case 3:return pp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},mp=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...fe(e[0].dims,n));let s=["rank"],u=l=>{let h=de("output",e[0].dataType,n.length),c=Y("x",e[0].dataType,r.length),p=c.type.value,f=fp(h,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:a}),getShaderSource:u}},gp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},yp=(e,t)=>{lp(e.inputs);let n=gp(e.inputs,t);e.compute(mp(e.inputs,n),{inputs:[0]})}}),pr,Va,Ha,ja,Ka,wp,_p,Ya,Xa,bp,xp,Za,$p,vp,Qa,Sp,Mp,Ip,Tp,Oy=ee(()=>{wt(),we(),_e(),xe(),pr=e=>{if(Fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Va=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Lr.adjustPoolAttributes(n,i,o,s,u,l);let h=Lr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},Ha=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),a.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},ja=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p=i.format==="NHWC",f=t.type.value,m=de("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(h?y=`
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
              ${o}

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
                ${a}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
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
              ${o}

              output[global_idx] = value;
            }`}},Ka=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,wp=e=>`${Ka(e)};${e.countIncludePad}`,_p=e=>`${Ka(e)};${e.storageOrder};${e.dilations}`,Ya=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Xa=(e,t,n,r)=>{let[i,a]=Va(t,r,n),o=Y("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,f,m]=Ha(a,i);h.push(...fe(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:w=>ja(w,o,t.dims.length,a.length,i,u,l,0,c,p,f,m)}},bp=e=>{let t=e.count_include_pad!==0,n=Ya(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:wp(r)}},xp=(e,t)=>{pr(e.inputs),e.compute(Xa("AveragePool",e.inputs[0],!1,t))},Za={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},$p=e=>{let t=e.format;return{format:t,...Za,cacheKey:t}},vp=(e,t)=>{pr(e.inputs),e.compute(Xa("GlobalAveragePool",e.inputs[0],!0,t))},Qa=(e,t,n,r)=>{let[i,a]=Va(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,f,m]=Ha(a,i);return h.push(...fe(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:y=>ja(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,c,p,f,m)}},Sp=(e,t)=>{pr(e.inputs),e.compute(Qa("MaxPool",e.inputs[0],!1,t))},Mp=e=>{let t=e.storage_order,n=e.dilations,r=Ya(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:_p(i)}},Ip=e=>{let t=e.format;return{format:t,...Za,cacheKey:t}},Tp=(e,t)=>{pr(e.inputs),e.compute(Qa("GlobalMaxPool",e.inputs[0],!0,t))}}),Ep,kp,Cp,Ap,Ny=ee(()=>{we(),_e(),Ke(),xe(),Ep=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},kp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(q.size(c.dims)/4)]:c.dims:void 0,f=h.length===0||h.length===1&&h[0]===1,m=f===!1&&h.length===1,y=je(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=Y("input",u?12:r,l.length,x),v=Y("scale",o,h.length),I=c?Y("zero_point",u?12:r,p.length):void 0,E=de("output",o,a.length,b),k=[M,v];I&&k.push(I);let S=[l,h];c&&S.push(p);let A=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...fe(...S,a)],N=U=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${U.registerUniforms(V).declareVariables(...k,E)}
      ${U.mainStart()}
          ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:A})}},Cp=(e,t)=>{Ep(e.inputs,t),e.compute(kp(e.inputs,t))},Ap=e=>Re({axis:e.axis,blockSize:e.blockSize})}),Rp,Op,Np,zy=ee(()=>{wt(),we(),xe(),Rp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Op=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...fe(a)],u=l=>{let h=de("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Np=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Fe.webgpu.validateInputContent&&Rp(t,n,r),e.compute(Op(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),zp,Bp,Pp,Dp,By=ee(()=>{we(),_e(),Ke(),xe(),zp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Bp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(q.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...fe(e[1].dims,e[2].dims,i)],h=c=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?qu("output",e[0].dataType,i.length):de("output",e[0].dataType,i.length,a);return`
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
    ${zp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},Pp=e=>Re({reduction:e.reduction}),Dp=(e,t)=>{e.compute(Bp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Up,Lp,Fp,Ja,Gp,Wp,qp,Vp,Hp,jp,Kp,Yp,eo,Xp,Zp,Qp,Jp,ef,tf,nf,Py=ee(()=>{we(),_e(),Ke(),xe(),Up=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Lp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Fp=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Up(r,t),t.axes.length>0&&Lp(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Ja=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Gp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ja("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ja("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Wp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",qp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Vp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Hp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},jp=(e,t,n,r,i)=>`
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
    }`,Kp=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",a)};
          var roi_hi = ${pe("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${pe("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",r.length)};
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
    }`,Yp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,eo=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Xp=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${eo(e,u,a,2)}
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
    }`},Zp=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===c?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
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
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
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
    `},Qp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${eo(e,l,a,3)}
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
    }`},Jp=(e,t,n,r,i,a)=>{let o=e.dims,s=qp(a,t.axes,o.length),u=Vp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Hp(o,l,t)));let h=de("output",e.dataType,u.length),c=Y("input",e.dataType,o.length),p=q.size(u),f=o.length===u.length&&o.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=x=>`
      ${f?"":`
      ${Gp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Yp(c,o)};
              ${Wp(t.nearestMode,n,w)};
              ${Kp(c,h,o,u,l.length,s.length,m)};
              `;case"linear":return`
              ${jp(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Xp(c,h,o,m,y)}`;if(o.length===3||o.length===5)return`${Qp(c,h,o,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Zp(c,h,o,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(c,h)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...fe(o,u)]})}},ef=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},tf=(e,t)=>{let n=[],r=[],i=[],a=ef(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Fp(e.inputs,t,a,n,r,i),e.compute(Jp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},nf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),rf,af,of,Dy=ee(()=>{we(),_e(),xe(),rf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},af=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=je(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,b),Y("skip",e[1].dataType,e[1].dims,b),Y("gamma",e[2].dataType,e[2].dims,b)];c&&k.push(Y("beta",e[3].dataType,e[3].dims,b)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,b)),k.push(de("output",e[0].dataType,s,b)),f&&k.push(de("mean_output",1,h)),m&&k.push(de("inv_std_output",1,h)),y&&k.push(de("input_skip_bias_sum",e[0].dataType,s,b));let S=Qe(e[0].dataType),A=Qe(1,b);return`

      ${I.registerUniforms(E).declareVariables(...k)}
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
          let f32_value = ${Wn(S,b,"value")};
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
        let mean = ${nn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:h,dataType:1}),n>2&&v.push({dims:h,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},of=(e,t)=>{rf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(af(e.inputs,t,e.outputCount,!1),{outputs:n})}}),sf,fr,uf,to,lf,cf,df,hf,Uy=ee(()=>{we(),_e(),Ke(),xe(),sf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},fr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},uf=(e,t)=>{if(e.length>1){let n=fr(e,1),r=fr(e,2),i=fr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},to=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},lf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,cf=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=fr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,x)=>to(b,x,n,i,a)),s=t.ends.map((b,x)=>to(b,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,M)=>{if(b<0){let v=(s[x]-o[x])/b,I=o[x],E=I+v*a[x];o[x]=E,s[x]=I,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let h={dims:l,dataType:e[0].dataType},c=de("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=q.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:f},{type:12,data:o},{type:6,data:u},{type:12,data:a},...fe(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,c)}
        ${lf(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},df=(e,t)=>{sf(e.inputs,t);let n=uf(e.inputs,t);e.compute(cf(e.inputs,n),{inputs:[0]})},hf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),pf,ff,mf,gf,Ly=ee(()=>{we(),_e(),Ke(),rn(),xe(),pf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ff=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,S)=>S),l[o]=a-1,l[a-1]=o,u=e.compute(yt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,f=je(c),m=c/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=Y("x",u.dataType,u.dims,f),x=de("result",u.dataType,u.dims,f),M=b.type.value,v=Qe(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,I=k=>`
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
          rowSumShared = ${M}(${nn("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(yt(E,l),{inputs:[E]})},mf=(e,t)=>{pf(e.inputs),ff(e,t)},gf=e=>Re({axis:e.axis})}),no,yf,wf,_f,bf,Fy=ee(()=>{we(),_e(),xe(),no=e=>Array.from(e.getBigInt64Array(),Number),yf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(no(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},wf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},_f=(e,t)=>{let n=e[0].dims,r=t??no(e[1]),i=wf(n,r),a=q.size(i),o=e[0].dataType,s=Y("input",o,n.length),u=de("output",o,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...fe(e[0].dims,i)]}),getShaderSource:l}},bf=e=>{yf(e.inputs),e.compute(_f(e.inputs),{inputs:[0]})}}),xf,$f,vf,Gy=ee(()=>{we(),_e(),xe(),xf=(e,t,n,r,i)=>{let a=de("output_data",i,n.length,4),o=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${a.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let offset_b${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${m}(${h(y,w,b)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},$f=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let l=Fn.calcShape(Fn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=q.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>xf(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...fe(r,t,n,o)]})}},vf=e=>{e.compute($f(e.inputs))}}),Sf,Wy=ee(()=>{ry(),wa(),iy(),ay(),oy(),sy(),uy(),py(),my(),gy(),yy(),wy(),_y(),by(),xy(),$y(),vy(),Sy(),My(),Iy(),Ty(),Ey(),ky(),Cy(),Ay(),zh(),Ry(),Oy(),Ny(),zy(),By(),ma(),Py(),Vh(),Dy(),Uy(),Ly(),Gh(),Fy(),rn(),$a(),Gy(),Sf=new Map([["Abs",[rc]],["Acos",[ic]],["Acosh",[ac]],["Add",[Hc]],["ArgMax",[Gl,ya]],["ArgMin",[Fl,ya]],["Asin",[oc]],["Asinh",[sc]],["Atan",[uc]],["Atanh",[lc]],["Attention",[Kl]],["AveragePool",[xp,bp]],["BatchNormalization",[Ql]],["BiasAdd",[tc]],["BiasSplitGelu",[Wc]],["Cast",[dc,cc]],["Ceil",[fc]],["Clip",[pc]],["Concat",[od,sd]],["Conv",[za,Oa]],["ConvTranspose",[Nd,Ad]],["Cos",[mc]],["Cosh",[gc]],["CumSum",[Bd,Pd]],["DepthToSpace",[Fd,Gd]],["DequantizeLinear",[Cp,Ap]],["Div",[jc]],["Einsum",[Kd,Yd]],["Elu",[yc,ur]],["Equal",[Kc]],["Erf",[wc]],["Exp",[_c]],["Expand",[Jd]],["FastGelu",[th]],["Floor",[bc]],["FusedConv",[za,Oa]],["Gather",[ah,ih]],["GatherElements",[gh,mh]],["GatherBlockQuantized",[dh,hh]],["GatherND",[sh,uh]],["Gelu",[xc]],["Gemm",[bh,_h]],["GlobalAveragePool",[vp,$p]],["GlobalMaxPool",[Tp,Ip]],["Greater",[Qc]],["GreaterOrEqual",[ed]],["GridSample",[kh,Ch]],["GroupQueryAttention",[Yh]],["HardSigmoid",[kc,Ec]],["InstanceNormalization",[Qh]],["LayerNormalization",[tp]],["LeakyRelu",[$c,ur]],["Less",[Jc]],["LessOrEqual",[td]],["Log",[Pc]],["MatMul",[rp]],["MatMulNBits",[sp,up]],["MaxPool",[Sp,Mp]],["Mul",[Yc]],["MultiHeadAttention",[Nh,Rh]],["Neg",[Sc]],["Not",[vc]],["Pad",[yp]],["Pow",[Xc]],["QuickGelu",[Lc,ur]],["Range",[Np]],["Reciprocal",[Mc]],["ReduceMin",[Bl]],["ReduceMean",[Al]],["ReduceMax",[zl]],["ReduceSum",[Dl]],["ReduceProd",[Pl]],["ReduceL1",[Rl]],["ReduceL2",[Ol]],["ReduceLogSum",[Ll]],["ReduceLogSumExp",[Nl]],["ReduceSumSquare",[Ul]],["Relu",[Ic]],["Resize",[tf,nf]],["RotaryEmbedding",[qh]],["ScatterND",[Dp,Pp]],["Sigmoid",[Tc]],["Sin",[Cc]],["Sinh",[Ac]],["Slice",[df,hf]],["SkipLayerNormalization",[of]],["Split",[Lh,Fh]],["Sqrt",[Rc]],["Softmax",[mf,gf]],["Sub",[Zc]],["Tan",[Oc]],["Tanh",[Nc]],["ThresholdedRelu",[Bc,ur]],["Tile",[bf]],["Transpose",[Qu,Ju]],["Where",[vf]]])}),Mf,qy=ee(()=>{wt(),Vt(),xe(),Mf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Nt(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),vt(e.programInfo.name)}dispose(){}build(e,t){Nt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Hu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Te("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return vt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),If={};Un(If,{WebGpuBackend:()=>Cf});var Tf,Ef,kf,Cf,Vy=ee(()=>{wt(),we(),Vt(),Ru(),ty(),Wy(),qy(),Tf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Ef=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Tf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},kf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Cf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new kf(o),this.gpuDataManager=Gu(this),this.programManager=new Mf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Nt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:w});else{let b="";c.forEach((M,v)=>{b+=`input[${v}]: [${M.dims}] | ${qt(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${qt(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Nr("GPU",`${h}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),vt()}run(e,t,n,r,i,a){Nt(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);o.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map((x,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let c=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let M=h[x]===-1,v=h[x]===-2,I=M||v?i(s[x].dataType,s[x].dims):r(h[x],s[x].dataType,s[x].dims);if(c.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(M&&this.temporaryData.push(E),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(E)}p.push(E)}if(o.length!==t.length||p.length!==c.length){if(p.length===0)return vt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,N,U;k.type===10?(U=S.length>4?16:S.length>2?8:S.length*A,N=S.length>4?16:A*S.length):(U=S.length<=2?S.length*A:16,N=16),x=Math.ceil(x/U)*U,M.push(x);let V=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/V)*N:S.length*A});let v=16;x=Math.ceil(x/v)*v;let I=new ArrayBuffer(x);l.forEach((k,S)=>{let A=M[S],N=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(I,A,N.length).set(N);else if(k.type===12)new Uint32Array(I,A,N.length).set(N);else if(k.type===10)new Uint16Array(I,A,N.length).set(N);else if(k.type===1)new Float32Array(I,A,N.length).set(N);else throw new Error(`Unsupported uniform type: ${qt(k.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,x),this.gpuDataManager.release(E.id),f={offset:0,size:x,buffer:E.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Ef(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Te("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,I=typeof M.data=="number"?1:M.data.length,[E,k]=b.uniformVariablesInfo[x];if(v!==E||I!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${k}, got type ${v} with size ${I} in program "${b.programInfo.name}".`)}}if(Te("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,p,m,f),vt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Sf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Te("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ca(this,e,t);return Ji(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Te("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Te("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Te("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Af={};Un(Af,{init:()=>Of});var Qr,Rf,Of,Hy=ee(()=>{we(),Vt(),_e(),ey(),Qr=class A0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new A0(this.module,this.dataType,this.data,t)}},Rf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(r*i++,a)));s.push(new Qr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Qr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=$n(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new Qr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Of=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Vy(),tr(If)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Te("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Te("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),c)}},async(s,u,l)=>{Te("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Te("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new Rf(t,o,Number(u));return o.computeKernel(Number(s),c,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Du(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),Nf,ro,io,an,zf,ao,Jr,oo,so,uo,lo,co,ho,Bf=ee(()=>{wt(),Z0(),Q0(),we(),_n(),ji(),$u(),Nf=(e,t)=>{Ge()._OrtInit(e,t)!==0&&Oe("Can't initialize onnxruntime.")},ro=async e=>{Nf(e.wasm.numThreads,Ur(e.logLevel))},io=async(e,t)=>{var r,i;(i=(r=Ge()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Hy(),tr(Af)).init;t==="webgpu"&&await a("webgpu",Ge(),e,n),t==="webnn"&&await a("webnn",Ge(),e)}},an=new Map,zf=e=>{let t=Ge(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Oe("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},ao=(e,t)=>{let n=Ge(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Oe("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Jr=e=>{let t=Ge(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},oo=async(e,t)=>{var c,p,f,m;let n,r,i=Ge();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Jr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await xu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let N=typeof A=="string"?A:A.path;S.push(Zi(typeof A=="string"?A:A.data).then(U=>{i.mountExternalData(N,U)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,N=A==null?void 0:A.context,U=A==null?void 0:A.gpuDevice,V=A==null?void 0:A.deviceType,F=A==null?void 0:A.powerPreference;N?i.currentContext=N:U?i.currentContext=await i.webnnCreateMLContext(U):i.currentContext=await i.webnnCreateMLContext({deviceType:V,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Oe("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=zf(a),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],I=[],E=[];for(let S=0;S<y;S++){let[A,N,U]=ao(a,S);A===0&&Oe("Can't get an input name."),l.push(A);let V=i.UTF8ToString(A);x.push(V),v.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:qt(N),shape:U})}for(let S=0;S<w;S++){let[A,N,U]=ao(a,S+y);A===0&&Oe("Can't get an output name."),h.push(A);let V=i.UTF8ToString(A);M.push(V),I.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:qt(N),shape:U});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[V])??"cpu",O=i.webnnIsGraphOutput;if(F==="cpu"&&O&&O(a,V)){E.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if(b&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(F)}}let k=null;return E.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Oe("Can't create IO binding."),k={handle:s,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Xi(S))}),an.set(a,[a,l,h,k,b,!1]),[a,x,M,v,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),h.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Oe("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Oe("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Oe("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},so=e=>{var u,l,h;let t=Ge(),n=an.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Oe("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Oe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Oe("Can't release session."),an.delete(e)},uo=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Ge(),u=s.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,f,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;m=$n(xn(l),h);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,a,b,m)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;m=$n(xn(l),h);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,xn(l),h)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,St(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=s.UTF8ToString(i);if(x(r,v)||M(r,v)){let I=xn(l);m=$n(I,h),p="ml-tensor";let E=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!E||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await E(r,I,h);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*h.length);try{h.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(xn(l),f,m,w,h.length,Xi(p));b===0&&Oe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},lo=async(e,t,n,r,i,a)=>{var V,F,O,H;let o=Ge(),s=o.PTR_SIZE,u=an.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],v=[],I=[],E=[],k=o.stackSave(),S=o.stackAlloc(y*s),A=o.stackAlloc(y*s),N=o.stackAlloc(w*s),U=o.stackAlloc(w*s);try{[b,x]=gu(a),yn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)await uo(n[W],M,I,e,h[t[W]],t[W],f);for(let W=0;W<w;W++)await uo(i[W],v,I,e,c[r[W]],y+r[W],f);wn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)o.setValue(S+W*s,M[W],"*"),o.setValue(A+W*s,h[t[W]],"*");for(let W=0;W<w;W++)o.setValue(N+W*s,v[W],"*"),o.setValue(U+W*s,c[r[W]],"*");if(p&&!m){let{handle:W,outputPreferredLocations:z,outputPreferredLocationsEncoded:R}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);yn("wasm bindInputsOutputs");for(let B=0;B<y;B++){let L=t[B];await o._OrtBindInput(W,h[L],M[B])!==0&&Oe(`Can't bind input[${B}] for session=${e}.`)}for(let B=0;B<w;B++){let L=r[B];(V=i[B])!=null&&V[3]?(E.push(v[B]),o._OrtBindOutput(W,c[L],v[B],0)!==0&&Oe(`Can't bind pre-allocated output[${B}] for session=${e}.`)):o._OrtBindOutput(W,c[L],0,R[L])!==0&&Oe(`Can't bind output[${B}] to ${z[B]} for session=${e}.`)}wn("wasm bindInputsOutputs"),an.set(e,[l,h,c,p,f,!0])}(F=o.jsepOnRunStart)==null||F.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let X;p?X=await o._OrtRunWithBinding(l,p.handle,w,N,b):X=await o._OrtRun(l,A,S,y,U,w,N,b),X!==0&&Oe("failed to call OrtRun().");let J=[],he=[];yn("wasm ProcessOutputTensor");for(let W=0;W<w;W++){let z=Number(o.getValue(N+W*s,"*"));if(z===v[W]||E.includes(v[W])){J.push(i[W]),z!==v[W]&&o._OrtReleaseTensor(z)!==0&&Oe("Can't release tensor.");continue}let R=o.stackSave(),B=o.stackAlloc(4*s),L=!1,G,Z=0;try{o._OrtGetTensorData(z,B,B+s,B+2*s,B+3*s)!==0&&Oe(`Can't access output tensor data on index ${W}.`);let ie=s===4?"i32":"i64",te=Number(o.getValue(B,ie));Z=o.getValue(B+s,"*");let ye=o.getValue(B+s*2,"*"),Me=Number(o.getValue(B+s*3,ie)),ze=[];for(let Be=0;Be<Me;Be++)ze.push(Number(o.getValue(ye+Be*s,ie)));o._OrtFree(ye)!==0&&Oe("Can't free memory for tensor dims.");let De=ze.reduce((Be,ge)=>Be*ge,1);G=qt(te);let ut=p==null?void 0:p.outputPreferredLocations[r[W]];if(G==="string"){if(ut==="gpu-buffer"||ut==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Be=[];for(let ge=0;ge<De;ge++){let lt=o.getValue(Z+ge*s,"*"),Xt=o.getValue(Z+(ge+1)*s,"*"),Je=ge===De-1?void 0:Xt-lt;Be.push(o.UTF8ToString(lt,Je))}J.push([G,ze,Be,"cpu"])}else if(ut==="gpu-buffer"&&De>0){let Be=o.jsepGetBuffer;if(!Be)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=Be(Z),lt=$n(te,De);if(lt===void 0||!Ki(G))throw new Error(`Unsupported data type: ${G}`);L=!0,J.push([G,ze,{gpuBuffer:ge,download:o.jsepCreateDownloader(ge,lt,G),dispose:()=>{o._OrtReleaseTensor(z)!==0&&Oe("Can't release tensor.")}},"gpu-buffer"])}else if(ut==="ml-tensor"&&De>0){let Be=o.webnnEnsureTensor,ge=o.webnnIsGraphInputOutputTypeSupported;if(!Be||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if($n(te,De)===void 0||!Yi(G))throw new Error(`Unsupported data type: ${G}`);if(!ge(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let lt=await Be(e,Z,te,ze,!1);L=!0,J.push([G,ze,{mlTensor:lt,download:o.webnnCreateMLTensorDownloader(Z,G),dispose:()=>{o.webnnReleaseTensorId(Z),o._OrtReleaseTensor(z)}},"ml-tensor"])}else if(ut==="ml-tensor-cpu-output"&&De>0){let Be=o.webnnCreateMLTensorDownloader(Z,G)(),ge=J.length;L=!0,he.push((async()=>{let lt=[ge,await Be];return o.webnnReleaseTensorId(Z),o._OrtReleaseTensor(z),lt})()),J.push([G,ze,[],"cpu"])}else{let Be=Dr(G),ge=new Be(De);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(o.HEAPU8.subarray(Z,Z+ge.byteLength)),J.push([G,ze,ge,"cpu"])}}finally{o.stackRestore(R),G==="string"&&Z&&o._free(Z),L||o._OrtReleaseTensor(z)}}p&&!f&&(o._OrtClearBoundOutputs(p.handle)!==0&&Oe("Can't clear bound outputs."),an.set(e,[l,h,c,p,f,!1]));for(let[W,z]of await Promise.all(he))J[W][2]=z;return wn("wasm ProcessOutputTensor"),J}finally{(H=o.webnnOnRunEnd)==null||H.call(o,l),o.stackRestore(k),M.forEach(X=>o._OrtReleaseTensor(X)),v.forEach(X=>o._OrtReleaseTensor(X)),I.forEach(X=>o._free(X)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(X=>o._free(X))}},co=e=>{let t=Ge(),n=an.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oe("Can't get an profile file name."),t._OrtFree(i)},ho=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),on,dt,qn,mr,gr,ei,po,ti,kn,Cn,Pf,Df,Uf,Lf,Ff,Gf,Wf,qf,Vf=ee(()=>{wt(),Bf(),_n(),Wi(),on=()=>!!Fe.wasm.proxy&&typeof document<"u",qn=!1,mr=!1,gr=!1,ti=new Map,kn=(e,t)=>{let n=ti.get(e);n?n.push(t):ti.set(e,[t])},Cn=()=>{if(qn||!mr||gr||!dt)throw new Error("worker not ready")},Pf=e=>{switch(e.data.type){case"init-wasm":qn=!1,e.data.err?(gr=!0,po[1](e.data.err)):(mr=!0,po[0]()),ei&&(URL.revokeObjectURL(ei),ei=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ti.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Df=async()=>{if(!mr){if(qn)throw new Error("multiple calls to 'initWasm()' detected.");if(gr)throw new Error("previous call to 'initWasm()' failed.");if(qn=!0,on())return new Promise((e,t)=>{dt==null||dt.terminate(),du().then(([n,r])=>{try{dt=r,dt.onerror=a=>t(a),dt.onmessage=Pf,po=[e,t];let i={type:"init-wasm",in:Fe};!i.in.wasm.wasmPaths&&(n||Ui)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),dt.postMessage(i),ei=n}catch(i){t(i)}},t)});try{await Hi(Fe.wasm),await ro(Fe),mr=!0}catch(e){throw gr=!0,e}finally{qn=!1}}},Uf=async e=>{if(on())return Cn(),new Promise((t,n)=>{kn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Fe}};dt.postMessage(r)});await io(Fe,e)},Lf=async e=>on()?(Cn(),new Promise((t,n)=>{kn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};dt.postMessage(r,[e.buffer])})):Jr(e),Ff=async(e,t)=>{if(on()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Cn(),new Promise((n,r)=>{kn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),dt.postMessage(i,a)})}else return oo(e,t)},Gf=async e=>{if(on())return Cn(),new Promise((t,n)=>{kn("release",[t,n]);let r={type:"release",in:e};dt.postMessage(r)});so(e)},Wf=async(e,t,n,r,i,a)=>{if(on()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return Cn(),new Promise((o,s)=>{kn("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};dt.postMessage(l,ho(u))})}else return lo(e,t,n,r,i,a)},qf=async e=>{if(on())return Cn(),new Promise((t,n)=>{kn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};dt.postMessage(r)});co(e)}}),fo,Hf,jf,jy=ee(()=>{wt(),Vf(),we(),zi(),$u(),fo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Hf=e=>{switch(e[3]){case"cpu":return new qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ki(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return qe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Yi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return qe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},jf=class{async fetchModelAndCopyToWasmMemory(e){return Lf(await Zi(e))}async loadModel(e,t){Nt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ff(n,t),vt()}async dispose(){return Gf(this.sessionId)}async run(e,t,n){Nt();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let a=[],o=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);a.push(f),o.push(m)});let s=r.map((c,p)=>fo(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?fo(c,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Wf(this.sessionId,i,s,o,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[o[c]]]=a[c]??Hf(l[c]);return vt(),h}startProfiling(){}endProfiling(){qf(this.sessionId)}}}),Kf={};Un(Kf,{OnnxruntimeWebAssemblyBackend:()=>go,initializeFlags:()=>mo,wasmBackend:()=>Yf});var mo,go,Yf,Ky=ee(()=>{wt(),Vf(),jy(),mo=()=>{(typeof Fe.wasm.initTimeout!="number"||Fe.wasm.initTimeout<0)&&(Fe.wasm.initTimeout=0);let e=Fe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Fe.wasm.simd=!1),typeof Fe.wasm.proxy!="boolean"&&(Fe.wasm.proxy=!1),typeof Fe.wasm.trace!="boolean"&&(Fe.wasm.trace=!1),typeof Fe.wasm.numThreads!="number"||!Number.isInteger(Fe.wasm.numThreads)||Fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Fe.wasm.numThreads=1;else{let t=typeof navigator>"u"?O0("node:os").cpus().length:navigator.hardwareConcurrency;Fe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},go=class{async init(e){mo(),await Df(),await Uf(e)}async createInferenceSessionHandler(e,t){let n=new jf;return await n.loadModel(e,t),n}},Yf=new go});wt(),wt(),wt();var Yy="1.27.0";{let e=(Ky(),tr(Kf)).wasmBackend;Ln("webgpu",e,5),Ln("webnn",e,5),Ln("cpu",e,10),Ln("wasm",e,10)}Object.defineProperty(Fe.versions,"web",{value:Yy,enumerable:!0});/**
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
 */function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Vn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Xf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Xy=114;function Zy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function yo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),v=(p*r+b)*a,I=(p*r+x)*a,E=(f*r+b)*a,k=(f*r+x)*a,S=(h*t+y)*3;for(let A=0;A<3;A++){const N=o[v+A]*(1-M)+o[I+A]*M,U=o[E+A]*(1-M)+o[k+A]*M;s[S+A]=Math.min(255,Math.max(0,Math.round(N*(1-m)+U*m)))}}}return s}function Hn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=h*l,p=Math.min((h+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let I=Math.floor(c);I<p;I++){const E=Math.min(I+1,p)-Math.max(I,c);if(!(E<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const A=S*E,N=(I*r+k)*a;w+=o[N]*A,b+=o[N+1]*A,x+=o[N+2]*A,M+=A}}const v=(h*t+f)*3;s[v]=Math.min(255,Math.max(0,st(w/M))),s[v+1]=Math.min(255,Math.max(0,st(b/M))),s[v+2]=Math.min(255,Math.max(0,st(x/M)))}}return s}function Zf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function wo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=Zf(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=Zf(b-x),v=(p*t+w)*3;for(let I=0;I<3;I++){let E=0;for(let k=0;k<4;k++){const S=c(m-1+k)*r;let A=0;for(let N=0;N<4;N++)A+=M[N]*o[(S+h(x-1+N))*a+I];E+=y[k]*A}s[v+I]=Math.min(255,Math.max(0,Math.round(E)))}}}return s}function _o(e,t,n=1){const r=Zy(e.width,e.height,t,n),i=yo(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Xy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const c=(l+h)*3,p=u+h;o[p]=i[c]/255,o[a+p]=i[c+1]/255,o[2*a+p]=i[c+2]/255}}return{tensor:o,params:r}}function bo(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],c=e[o*6+4],p=e[o*6+5];if(c<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(h-t.padY)/t.scale;i.push({classIndex:f,confidence:c,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const yr=.8,Qf=.65,Qy=110,Jy=1280;function ew(e,t,n){if(n==null)return yr;if(n.length===0)return Qf;const r=Math.max(e,t);if(!(r>0))return yr;const i=Jy/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return yr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Qy?Qf:yr}const Jf=.25,em=.6;function tw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Jf:em)),h=Math.trunc(u*(s>=u?em:Jf)),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),o+h),y=f-c,w=m-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const nw=3,rw=.15,iw=.6;function xo(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function aw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function ow(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],a=[Number(e[1][0]),Number(e[1][1])];if(![...i,...a].every(v=>Number.isFinite(v)))return null;const o=xo(i,a);if(!(o>0))return null;const s=[];for(const v of t??[]){const I=Math.trunc(Number(v.n));if(!Number.isFinite(I)||I<nw)continue;const E=aw(v.poly);E!==null&&s.push({owner:v.owner,c:E,n:I,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,I)=>I.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>iw);for(const v of u)v.d0=xo(v.c,i),v.d1=xo(v.c,a),v.ecart=Math.abs(v.d0-v.d1);const h=[...u].sort((v,I)=>I.ecart-v.ecart),c=h[0],p=h[1],f=c.d0<c.d1?0:1,m=r>0?1:0,y=f===m?c:p,w=f===m?p:c,b=f===1?c.owner:p.owner,x=f===1?p.owner:c.owner,M=c.ecart/o<rw;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function sw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const uw=.6;function tm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=st((s+l)/2),p=st((u+h)/2),f=st((l-s+(h-u))/4);f>=1&&r.push({cx:c,cy:p,r:f})}return r}function lw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(uw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function cw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Vn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function nm(e,t,n){const r=tm(e,t,n);return r.length===0?[]:cw(lw(r))}function dw(e,t,n){return tm(e,t,n)}function wr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const hw=.5,pw=.7,fw=.55;function $o(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function rm(e){if(e.length===0)return[];const t=(hw*$o(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Vn(i.map(a=>a[0]))),Math.trunc(Vn(i.map(a=>a[1]))),Math.trunc(Vn(i.map(a=>a[2]))),Math.trunc(Vn(i.map(a=>a[3])))]);if(r.length>=2){const i=$o(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*c,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=pw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=$o(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=fw*i)}return r}const im=["brown","grey","blue","green","yellow","red","purple"],mw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},gw=.7;function am(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(o+u,f+y)-Math.max(o,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=gw*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function ni(e,t,n){const r=bo(e,t,n,im.length).map(i=>{const a=im[i.classIndex];return{color:a,family:mw[a],box:i.box,confidence:i.confidence}});return am(r)}const yw=8,ww=.8,om=1.25;function _w(e){if(e.length<yw)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*om?t.push(o):u>s*om&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<ww*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const bw=2.25,sm=8;function xw(e){if(e.length<sm)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=bw*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),o=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const f=t[c][0]-t[p][0],m=t[c][1]-t[p][1];f*f+m*m<=i&&(a[o(c)]=o(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=o(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<sm||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const ht={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Ct(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const $w=.42,vw=22,Sw=43,Mw=120,Iw=1.5,Tw=.72,Ew=110,um=3;function _r(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*$w);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const f=(c*r+p)*a,m=o[f],y=o[f+1],w=o[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),h+=1)}return h}function kw(e){let t=0,n=0,r=0,i=_r(e,!1,(a,o,s)=>{const u=Ct(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=_r(e,!0,(a,o,s)=>{const u=Ct(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Cw(e){let t=0,n=0,r=_r(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=_r(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function Aw(e){let t=0;const n=_r(e,!0,(r,i,a)=>{t+=Ct(r,i,a).s});return n===0?null:t/n}function Rw(e){const t=kw(e);if(t===null||t.s<=vw)return 1;if(t.s>=Mw){const n=Cw(e);return n!==null&&n>=Iw?6:3}return t.s>=Sw?3:6}function Ow(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function Nw(e,t){const n=[...t];if(e.length<um||t.length!==e.length)return n;const r=e.map(o=>Aw(o)),i=r.filter(o=>o!==null);if(i.length<um)return n;const a=Vn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<Tw*a&&o<Ew&&(n[s]=1)}),n}function lm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+a-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(f+a))*e.channels;c[m]=e.data[w],c[m+1]=e.data[w+1],c[m+2]=e.data[w+2]}else c[m]=255,c[m+1]=255,c[m+2]=255}return{width:l,height:h,channels:3,data:c}}function zw(e,t){const n=t.map(a=>lm(e,a)),r=n.map(a=>Rw(a)),i=Ow(t,r);return Nw(n,i)}function Bw(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function cm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(h);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,h);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,st(p/f)))}}return{width:t,height:n,data:r}}function Pw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,st(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function Dw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function Uw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function vo(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let c=0,p=0,f=0;for(;l<h;){const m=o[l++],y=m%t,w=m/t|0;c+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,v=w+b;if(M<0||M>=t||v<0||v>=n)continue;const I=v*t+M;r[I]>0&&i[I]===0&&(i[I]=s,o[h++]=I)}}a[s]={area:c,centroidX:p/c,centroidY:f/c},s+=1}return{labels:i,stats:a}}function Lw(e,t,n){return dm(Float32Array.from(e.data),e.width,t,n)}function dm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,f=s*c-u*p+a,m=u*c+s*p+a,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(E,k)=>E>=0&&E<t&&k>=0&&k<t?e[k*t+E]:r,v=M(y,w)*(1-b)+M(y+1,w)*b,I=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+h]=v*(1-x)+I*x}return i}const Fw=.9,Gw=.34,Ww=[.55,.6,.66,.72],qw=22,Vw=88,Hw=35,jn=28,So=4,jw=Array.from({length:15},(e,t)=>-21+t*3),hm=[-2,0,2],Kw=3,Yw=.3;function Xw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Zw(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+c)*u+(w+h)]=e.data[(y+r)*e.width+(w+t)];const p=jn-2*So,f=cm({width:u,height:u,data:l},p,p),m=new Float32Array(jn*jn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+So)*jn+(w+So)]=f.data[y*p+w]>110?1:0;return m}function Qw(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Gw);if(u<4)return null;const l=o-u,h=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const f=new Int16Array(c*p),m=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],x=Math.min(c,p)/2;for(let W=0;W<c;W++)for(let z=0;z<p;z++){const R=((W+l)*n+(z+h))*i,{h:B,s:L,v:G}=Ct(a[R],a[R+1],a[R+2]),Z=W*p+z;f[Z]=B,m[Z]=L,y[Z]=G,Math.sqrt((z-p/2)**2+(W-c/2)**2)/x<=t&&(w[Z]=1,b.push(G))}if(b.length<16)return null;const M=Xf(b,55);let v=0,I=0,E=0;const k=W=>f[W]>=qw&&f[W]<=Vw&&m[W]>=Hw,S=W=>y[W]>=M&&m[W]<=95&&!k(W)&&w[W]===1;for(let W=0;W<c*p;W++)w[W]===1&&(E+=1,y[W]>=130&&!k(W)&&(v+=1),S(W)&&(I+=1));const A=v>.5*E&&I<.15*E,N=new Uint8Array(c*p);if(A){const W=Xf(b,45);for(let z=0;z<c*p;z++)N[z]=w[z]===1&&y[z]<=W?255:0}else for(let W=0;W<c*p;W++)N[W]=S(W)?255:0;const U={width:p,height:c,data:N},V=Dw(U);let F=vo(V),O=F;if(F.stats.length<=1&&(F=vo(U),O=F,F.stats.length<=1))return null;const H=Math.min(c,p)/2;let X=0,J=-1;for(let W=1;W<O.stats.length;W++){const z=O.stats[W];if(z===void 0)continue;const R=Math.hypot(z.centroidX-p/2,z.centroidY-c/2)/H,B=z.area*(1-.6*Math.min(R,1));B>J&&(J=B,X=W)}if(X===0)return null;const he=new Uint8Array(c*p);for(let W=0;W<c*p;W++)he[W]=O.labels[W]===X?255:0;return Zw(Uw({width:p,height:c,data:he}))}function Jw(e,t,n,r,i,a){const o=jn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let c=0;c<o;c++){const p=c-i;if(p<0||p>=o)continue;const f=e[h*o+p];f!==0&&(u+=f,s+=f*n[l*o+c])}}return s/(u+r-s+1e-6)}function e_(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of jw){const a=i===0?e:dm(e,jn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of hm)for(const u of hm){const l=Jw(a,o,t,n,s,u);l>r&&(r=l)}}return r}function t_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of Ww){const s=Qw(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([e_(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Yw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Kw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const n_=2560,r_=.3,i_=.5,a_=1.6,o_=3,s_=5;function u_(e){const t=Math.min(1,n_/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let f=0;f<n;f++){const m=(f+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(h*e.width+y)*e.channels+M,I=(h*e.width+w)*e.channels+M,E=(c*e.width+y)*e.channels+M,k=(c*e.width+w)*e.channels+M,S=e.data[v]*(1-b)+e.data[I]*b,A=e.data[E]*(1-b)+e.data[k]*b,N=S*(1-p)+A*p;a[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function l_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function c_(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function d_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,I]of e){const E=v*c+I*p,k=-v*p+I*c;E<f&&(f=E),E>m&&(m=E),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const v=(f+m)/2,I=(y+w)/2;t={cx:v*c-I*p,cy:v*p+I*c,w:b,h:x,angle:Math.atan2(p,c)}}}return t}function h_(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=h;b<=c;b++){const x=b-r.cx,M=w-r.cy,v=x*i+M*a,I=-x*a+M*i;Math.abs(v)<=o&&Math.abs(I)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function p_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,h]=o,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function f_(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let f=0;f<o.length;f++)o[f]=e[f]>r_?255:0;o=l_(o,i,a);const s={width:i,height:a,data:o},{labels:u}=vo(s),l=new Map;for(let f=0;f<a;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const h=n/i,c=r/a,p=[];for(const[f,m]of l){const y=[];for(const[N,[U,V]]of m)y.push([U-.5,N-.5],[U-.5,N+.5],[V+.5,N-.5],[V+.5,N+.5]);const w=d_(c_(y));if(Math.min(w.w,w.h)<o_)continue;const b=h_(e,i,a,w);if(b<i_)continue;const x=w.w*w.h*a_/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<s_+2)continue;const I=p_(M).map(([N,U])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(U*c)))]),E=I.map(N=>N[0]),k=I.map(N=>N[1]),S=Math.min(...E),A=Math.min(...k);p.push({quad:I,x:S,y:A,width:Math.max(...E)-S,height:Math.max(...k)-A,score:b})}return p.sort((f,m)=>m.score-f.score)}function m_(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=g_([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<o;p++){const f=u[6]*p+u[7]*c+u[8],m=(u[0]*p+u[1]*c+u[2])/f,y=(u[3]*p+u[4]*c+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,v=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),E=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const A=e.data[(E*e.width+v)*e.channels+S],N=e.data[(E*e.width+I)*e.channels+S],U=e.data[(k*e.width+v)*e.channels+S],V=e.data[(k*e.width+I)*e.channels+S],F=A*(1-x)+N*x,O=U*(1-x)+V*x;l[(c*o+p)*e.channels+S]=Math.round(F*(1-M)+O*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?jt(h,3):h}function g_(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function jt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,f;n===1?(p=i-1-h,f=c):n===2?(p=r-1-c,f=i-1-h):(p=h,f=r-1-c);const m=(h*r+c)*a,y=(f*s+p)*a;for(let w=0;w<a;w++)l[y+w]=o[m+w]}return{width:s,height:u,channels:a,data:l}}const y_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,y_)*255));return e})();const Kt=48,w_=320;function __(e){return["blank",...e.characters," "]}function b_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function x_(e,t){const n=Math.trunc(Kt*t),r=e.width/e.height,i=Math.ceil(Kt*r)>n?n:Math.ceil(Kt*r),a=new Float32Array(3*Kt*n),o=Kt*n,s=e.width/i,u=e.height/Kt;for(let l=0;l<Kt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,h-c));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,I=(c*e.width+w)*e.channels+v,E=(c*e.width+b)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+b)*e.channels+v,A=e.data[I]*(1-x)+e.data[E]*x,N=e.data[k]*(1-x)+e.data[S]*x,U=A*(1-f)+N*f;a[M*o+l*n+m]=(U/255-.5)/.5}}}return{tensor:a,width:n}}const $_=62,v_=8,S_=5;function Mo(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function M_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function ri(e,t){return e.length===0&&t.length===0?100:200*M_(e,t)/(e.length+t.length)}function pm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return ri(n(e),n(t))}function I_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(ri(s,u),ri(s,l),ri(u,l))}function T_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[Mo(i),Mo(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function E_(e,t){const n=Mo(e);if(!n||t.length===0)return null;const i=T_(t).map(h=>({...h,score:I_(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,v_).filter(h=>h.score>=$_);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=S_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[pm(s,u.key),u.score];for(const h of o.slice(1)){const c=[pm(s,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const fm=5e3,Io=.75,mm=15,k_=1.25,C_=2.4,A_=.003,R_=.85,O_=4,To=2600,Eo=2,ko=.3,gm=.1,ym=.012,N_=22,wm=.5,ii=.12;function nt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function z_(e,t,n,r){const i=r.map(te=>te[0]),a=r.map(te=>te[1]),o=i.reduce((te,ye)=>te+ye,0)/i.length,s=a.reduce((te,ye)=>te+ye,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*O_,h=Math.max(0,Math.trunc(o-l)),c=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<To?Eo:1,y=nt(e,n),w=nt(e,t),b=new e.Rect(h,p,c-h,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,I=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,I,e.COLOR_RGB2GRAY);const E=new e.ORB(fm),k=new e.KeyPointVector,S=new e.KeyPointVector,A=new e.Mat,N=new e.Mat,U=new e.Mat,V=[y,w,x,M,v,I,k,S,A,N,U],F=te=>{for(const ye of V)try{ye.delete()}catch{}try{E.delete()}catch{}return te};if(E.detectAndCompute(v,U,k,A),E.detectAndCompute(I,U,S,N),A.rows<8||N.rows<8)return F(null);const O=new e.BFMatcher(e.NORM_HAMMING),H=new e.DMatchVectorVector;O.knnMatch(A,N,H,2);const X=[],J=[];for(let te=0;te<H.size();te++){const ye=H.get(te);if(ye.size()===2){const Me=ye.get(0),ze=ye.get(1);if(Me.distance<Io*ze.distance){const De=k.get(Me.queryIdx).pt,ut=S.get(Me.trainIdx).pt;X.push(De.x,De.y),J.push(ut.x,ut.y)}}}if(H.delete(),O.delete(),X.length/2<8)return F(null);const he=e.matFromArray(X.length/2,1,e.CV_32FC2,X),W=e.matFromArray(J.length/2,1,e.CV_32FC2,J),z=new e.Mat,R=e.findHomography(he,W,e.RANSAC,5,z);let B=0;for(let te=0;te<z.rows;te++)B+=z.data[te];const L=R.rows===3?[...R.data64F]:null;if(he.delete(),W.delete(),z.delete(),R.delete(),L===null||B<mm)return F(null);const G=1/m,Z=[[G,0,h],[0,G,p],[0,0,1]],ie=[0,1,2].map(te=>[0,1,2].map(ye=>Z[te][0]*L[ye]+Z[te][1]*L[3+ye]+Z[te][2]*L[6+ye]));return F({H:ie,inliers:B})}function Co(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<A_||i>R_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=k_&&s<=C_}function Ao(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ro(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(ko*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(V=>[V[0],V[1],V[2]-o*(V[0]+V[1])+0]);for(let V=0;V<3;V++)l[V][2]=r[V][2]-o*r[V][0]-o*r[V][1];const h=nt(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(c,f,e.COLOR_RGB2Lab),h.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(V,F)=>{const O=(F*s+V)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let V=0;V<u;V++)for(let F=0;F<s;F++)(V<y||V>=u-y||F<y||F>=s-y)&&b(F,V);const x=V=>{V.sort((O,H)=>O-H);const F=V.length>>1;return V.length%2?V[F]:(V[F-1]+V[F])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(V,F)=>{const O=(F*s+V)*3,H=m[O]-M[0],X=m[O+1]-M[1],J=m[O+2]-M[2];return Math.sqrt(H*H+X*X+J*J)>N_},I=Math.max(6,Math.trunc(gm*i)),E=Math.max(6,Math.trunc(gm*a)),k=Math.max(2,Math.trunc(ym*i)),S=Math.max(2,Math.trunc(ym*a)),A=V=>{let F=0,O=0;for(const H of V)O=H?O+1:0,O>F&&(F=O);return F/Math.max(1,V.length)},N=V=>{let F,O,H,X,J;if(V==="L"?(F=o,O=o+a,H=Math.max(0,o-k-I),X=Math.max(0,o-k),J=!1):V==="R"?(F=o,O=o+a,H=o+i+k,X=Math.min(s,o+i+k+I),J=!1):(F=Math.max(0,o-S-E),O=Math.max(0,o-S),H=o,X=o+i,J=!0),O<=F||X<=H)return 0;const he=[];if(J)for(let W=H;W<X;W++){let z=0;for(let R=F;R<O;R++)v(W,R)&&z++;he.push(z/(O-F)>wm)}else for(let W=F;W<O;W++){let z=0;for(let R=H;R<X;R++)v(R,W)&&z++;he.push(z/(X-H)>wm)}return A(he)},U={L:N("L"),R:N("R"),T:N("T")};return c.delete(),f.delete(),U}const B_=6e3,P_=8,_m=.5,D_=.6;function U_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<To?Eo:1,a=nt(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(B_),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,h,c);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=nt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const v=[w,x,M],I=()=>{for(const ie of v)ie.delete();b.delete()};if(M.rows<8){I();continue}const E=new e.DMatchVectorVector;f.knnMatch(M,c,E,2);const k=[],S=[];for(let ie=0;ie<E.size();ie++){const te=E.get(ie);if(te.size()===2){const ye=te.get(0);if(ye.distance<Io*te.get(1).distance){const Me=x.get(ye.queryIdx).pt,ze=h.get(ye.trainIdx).pt;k.push(Me.x,Me.y),S.push(ze.x,ze.y)}}}if(E.delete(),k.length/2<8){I();continue}const A=e.matFromArray(k.length/2,1,e.CV_32FC2,k),N=e.matFromArray(S.length/2,1,e.CV_32FC2,S),U=new e.Mat,V=e.findHomography(A,N,e.RANSAC,5,U);let F=0;for(let ie=0;ie<U.rows;ie++)F+=U.data[ie];const O=V.rows===3?[...V.data64F]:null;if(A.delete(),N.delete(),U.delete(),V.delete(),O===null||F<P_){I();continue}const H=1/i,X=[[H*O[0],H*O[1],H*O[2]],[H*O[3],H*O[4],H*O[5]],[O[6],O[7],O[8]]],J=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ie,te])=>Ao(X,ie,te));if(!Co(J,t.width,t.height)){I();continue}const he=nt(e,t),W=e.matFromArray(3,3,e.CV_64F,X.flat()),z=new e.Mat;e.warpPerspective(he,z,W,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const R=new e.Mat;e.cvtColor(z,R,e.COLOR_RGB2GRAY);const B=new e.Mat;e.matchTemplate(R,b,B,e.TM_CCOEFF_NORMED);const L=B.data32F[0];if(he.delete(),W.delete(),z.delete(),R.delete(),B.delete(),L<_m){I();continue}const G=Ro(e,t,y,X),Z=Oo(G);p.push({id:m,confidence:Math.max(0,L),footprint:J,built:G!==null&&Math.max(G.L,G.R,G.T)>=ii,tuckRegion:No(J,Z)}),I()}}finally{s.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),f.delete()}catch{}}return p}function Oo(e){return e!==null&&e.R>=ii?["R"]:[]}function No(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=ko*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let v=-(M[1]-x[1]),I=M[0]-x[0];const E=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(E-s)+I*(k-u)<0&&(v=-v,I=-I);const S=Math.hypot(v,I);S<=1e-6||(v=v/S*o,I=I/S*o,h.push([x[0]+v,x[1]+I],[M[0]+v,M[1]+I]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),f=Math.round(Math.min(...c)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...c))-f,height:Math.round(Math.max(...p))-m}}function L_(e,t,n,r){const i=z_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>Ao(i.H,l,h));if(!Co(o,t.width,t.height))return null;const s=Ro(e,t,n,i.H);if(s===null)return null;const u=Oo(s);return{built:Math.max(s.L,s.R,s.T)>=ii,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const F_=.88;function bm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(ko*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*F_),h=s-l;if(h<1)return null;const c=nt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(c,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,h,u)),v=new e.Mat;M.copyTo(v);const I=v.data,E=new Uint8ClampedArray(h*u*3);E.set(I.subarray(0,E.length));for(const k of[c,p,f,m,b,x,M,v])try{k.delete()}catch{}return{width:h,height:u,channels:3,data:E}}function G_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),f=Math.min(n.height,Math.trunc(a+s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<To?Eo:1,y=nt(e,n),w=nt(e,t),b=y.roi(new e.Rect(h,p,c-h,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const I=new e.ORB(fm),E=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,N=new e.Mat,U=[y,w,b,x,M,v,E,k,S,A,N],V=ie=>{for(const te of U)try{te.delete()}catch{}try{I.delete()}catch{}return ie};if(I.detectAndCompute(M,N,E,S),I.detectAndCompute(v,N,k,A),S.rows<8||A.rows<8)return V(null);const F=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;F.knnMatch(S,A,O,2);const H=[],X=[];for(let ie=0;ie<O.size();ie++){const te=O.get(ie);if(te.size()===2){const ye=te.get(0),Me=te.get(1);if(ye.distance<Io*Me.distance){const ze=E.get(ye.queryIdx).pt,De=k.get(ye.trainIdx).pt;H.push(ze.x,ze.y),X.push(De.x,De.y)}}}if(O.delete(),F.delete(),H.length/2<8)return V(null);const J=e.matFromArray(H.length/2,1,e.CV_32FC2,H),he=e.matFromArray(X.length/2,1,e.CV_32FC2,X),W=new e.Mat,z=e.findHomography(J,he,e.RANSAC,5,W);let R=0;for(let ie=0;ie<W.rows;ie++)R+=W.data[ie];const B=z.rows===3?[...z.data64F]:null;if(J.delete(),he.delete(),W.delete(),z.delete(),B===null||R<mm)return V(null);const L=1/m,G=[[L,0,h],[0,L,p],[0,0,1]],Z=[0,1,2].map(ie=>[0,1,2].map(te=>G[ie][0]*B[te]+G[ie][1]*B[3+te]+G[ie][2]*B[6+te]));return V({H:Z,inliers:R})}const W_=620;function q_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function xm(e,t,n,r){const i=$m(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(I=>Math.trunc(I));if(Math.min(s,u)>=W_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,o-h),f=Math.min(t.width,a+s+l),m=Math.min(t.height,o+u+h);if(f<=c||m<=p)return null;const y=nt(e,t),w=y.roi(new e.Rect(c,p,f-c,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-c)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=q_(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const M=[(a-c)*2,(o-p)*2,s*2,u*2],v=$m(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([I,E])=>[I*.5+c,E*.5+p])}}catch{return null}}function $m(e,t,n,r){const i=G_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Ao(i.H,b,x));if(!Co(o,t.width,t.height))return null;const s=nt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=nt(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(c,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,h,c,p,f])try{b.delete()}catch{}if(m<_m)return null;const y=Ro(e,t,n,i.H);if(y===null)return null;const w=Oo(y);return{built:Math.max(y.L,y.R,y.T)>=ii,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function V_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+h+p){const f=l*h;f<a&&(a=f,i=[s,u,l,h])}}return i}const H_=.3,j_=.3;function K_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=H_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<j_;if(!r&&!h)return;t.some(([p,f])=>p>=a.zone.x0&&p<=a.zone.x1&&f>=a.zone.y0&&f<=a.zone.y1)||i.push(o)}),i}const Bt=128,zo=.5;function Bo(e){const t=Hn(e,Bt,Bt),n=Bt*Bt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function vm(e){const t=e[1]??0;return{built:t>=zo,prob:t}}const br=120,xr=179,Y_=1.3,X_=3.6,Z_=.45,Q_=6e-4,J_=.02,eb=6e3,tb=.78,nb=1.25,rb=2.4,ib=.05,ab=1.5,ob=.5,sb=.9,ub=150,lb=18,cb=34,db=90,hb=130,pb=.13,fb=.15,ai="magistrates-guild",Po="merchants-guild";function mb(e,t){const n=nt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[br,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[xr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=c.intAt(w,0),x=c.intAt(w,1),M=c.intAt(w,2),v=c.intAt(w,3),I=c.intAt(w,4),E=I/m;E<Q_||E>J_||I/Math.max(M*v,1)<Z_||y.push({x:b,y:x,w:M,h:v})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function gb(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const L=nt(e,r);h.gray=new s.Mat,s.cvtColor(L,h.gray,s.COLOR_RGB2GRAY),L.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const G=new s.Mat;u.detectAndCompute(h.gray,G,h.k,h.d),G.delete()}const c=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(c,p,f,m),p.delete();const y=L=>(f.delete(),m.delete(),L);if(h.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(h.d,m,w,2);const b=[],x=[];for(let L=0;L<w.size();L++){const G=w.get(L);if(G.size()===2){const Z=G.get(0);if(Z.distance<tb*G.get(1).distance){const ie=h.k.get(Z.queryIdx).pt,te=f.get(Z.trainIdx).pt;b.push(ie.x,ie.y),x.push(te.x,te.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),I=new s.Mat,E=s.findHomography(M,v,s.RANSAC,5,I);if(M.delete(),v.delete(),I.delete(),E.rows!==3)return E.delete(),y(null);const k=[...E.data64F],S=(L,G)=>{const Z=k[6]*L+k[7]*G+k[8];return[(k[0]*L+k[1]*G+k[2])/Z,(k[3]*L+k[4]*G+k[5])/Z]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([L,G])=>S(L,G));if(A.some(L=>!Number.isFinite(L[0])||!Number.isFinite(L[1])))return E.delete(),y(null);const N=A.map((L,G)=>{const Z=A[(G+1)%4];return Math.hypot(Z[0]-L[0],Z[1]-L[1])}),U=Math.min(...N);if(U<1)return E.delete(),y(null);const V=Math.max(...N)/U;let F=0;for(let L=0;L<4;L++){const[G,Z]=A[L],[ie,te]=A[(L+1)%4];F+=G*te-ie*Z}const O=t,H=Math.abs(F/2)/(O.rows*O.cols);if(V<nb||V>rb||H<ib||H>ab)return E.delete(),y(null);const X=new s.Mat;s.warpPerspective(O,X,E,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),E.delete();const J=new s.Mat;s.cvtColor(X,J,s.COLOR_RGB2GRAY),X.delete();const he=Math.trunc(r.height/2),W=J.roi(new s.Rect(0,0,r.width,he)),z=h.gray.roi(new s.Rect(0,0,r.width,he)),R=new s.Mat;s.matchTemplate(W,z,R,s.TM_CCOEFF_NORMED);const B=R.data32F[0];return W.delete(),z.delete(),R.delete(),J.delete(),y(B)}function yb(e,t,n){let r,i;if(n===ai)r=Po,i=pb;else if(n===Po)r=ai,i=fb;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,c=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=o;b<o+u;b++)for(let x=a+p;x<a+f;x++){const M=(b*e.width+x)*e.channels,{h:v,s:I,v:E}=Ct(e.data[M],e.data[M+1],e.data[M+2]);if(v>=br&&v<=xr&&I>=30&&I<=170&&E<=170)continue;m++,(r===Po?v>=lb&&v<=cb&&I>=db&&E>=hb:v>=95&&v<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>h&&(h=w,c={x:a+p,y:o,w:f-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const wb=1.7,_b=140,bb=170,xb=.2,$b=.1,Sm=240,Mm=80,Im=60,vb=50,Tm="scientists-guild",Em="tacticians-guild",oi=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Sb(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let v=0;v<o;v++){let I=0;for(let E=0;E<a;E++)e[(i+v)*t+r+E]>0&&I++;s[v]=I/a}const u=[];for(let v=0;v<o;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<Y_||p>X_)return[];if(p>=wb)return[{x:r,y:i+l,w:a,h:c}];const f=new Float32Array(o),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const I=Math.exp(-(v*v)/(2*m*m));y.push(I),w+=I}for(let v=0;v<o;v++){let I=0;for(let E=-4;E<=4;E++){const k=Math.min(o-1,Math.max(0,v+E));I+=s[k]*y[E+4]}f[v]=I/w}const b=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let M=l+Math.trunc(c/2);if(x>b){let v=1/0;for(let I=b;I<x;I++)f[I]<v&&(v=f[I],M=I)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function Mb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:o,height:s,channels:3,data:u}}function Ib(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Ct(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=_b&&o<=bb&&n++)}return t===0?0:n/t}function Tb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Ct(e.data[i],e.data[i+1],e.data[i+2]);!(a>=br&&a<=xr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function km(e,t){const n=nt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Sm,Mm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Sm,height:Mm,channels:3,data:i}}function Eb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Cm(e,t){const n=Eb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=Ct(n.data[y],n.data[y+1],n.data[y+2]);!(w>=br&&w<=xr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const o=a<20,s=nt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,c=0,p=0,f=0;for(let m=0;m<r;m++)!o&&i[m]===0||(h+=l[m*3]*100/255,c+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[h/f,c/f,p/f]}function kb(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:c,v:p}=Ct(e.data[l],e.data[l+1],e.data[l+2]);h>=br&&h<=xr&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function Cb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Ct(e.data[i],e.data[i+1],e.data[i+2]);o>=Im&&s>=vb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<Im&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function Ab(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function Am(e,t){const n=nt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function Rb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=km(e,a);n.set(i,Am(e,o)),oi.includes(i)&&r.set(i,Cm(e,o))}return{gray:n,warmLab:r}}function Ob(e,t,n){const r=km(e,t),i=kb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ai;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Tm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Em;const a=Cb(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=ai;else if(s==="green")u=Tm;else if(s==="red")u=Em;else{const l=Am(e,r);let h="",c=-2;for(const p of oi){const f=n.gray.get(p);if(f===void 0)continue;const m=Ab(l,f);m>c&&(c=m,h=p)}u=h||oi[0]}if(oi.includes(u)&&n.warmLab.size>0){const l=Cm(e,r);let h=u,c=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<c&&(c=m,h=p)}return h}return u}function Nb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=mb(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(eb),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=nt(e,t);let m=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(ub,Math.trunc(sb*Math.max(w.w,w.h))),v=Math.max(0,b-M),I=Math.max(0,x-M),E=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(E-v<16||k-I<16)continue;const S=f.roi(new l.Rect(v,I,E-v,k-I)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let N=null,U=-2;for(const[H,X]of n){if(r!==void 0&&Date.now()>r)break;const J=gb(e,S,A,X,p.get(H),h,c);J!==null&&J>U&&(U=J,N=H)}S.delete(),A.delete();const V=new Set;if(N!==null&&U>=ob){a.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),V.add(N);const H=yb(t,w,N);H&&(a.push({id:H.id,boundingBox:{x:H.box.x,y:H.box.y,width:H.box.w,height:H.box.h},confidence:.9}),V.add(H.id))}if(i===void 0||i.size===0)continue;const F=Sb(s,u,w);if(F.length!==2)continue;const O=F.map(H=>Mb(t,H));if(!O.some(H=>H.width*H.height===0||Tb(H)<$b))for(let H=0;H<F.length;H++){const X=O[H];if(Ib(X)<xb)continue;m===null&&(m=Rb(e,i));const J=Ob(e,X,m);if(J&&!V.has(J)){V.add(J);const he=F[H];a.push({id:J,boundingBox:{x:he.x,y:he.y,width:he.w,height:he.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const Rm=128,zb=.56,Bb=15,Pb=.58,Db=70,Ub=50,Lb=.12,Fb=.2,Gb=.1,Wb=.17,Om=.15;function qb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Nm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),c=Math.min(n,o+u),p=Math.min(r,s+u),f=c-l,m=p-h,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+h)*n+l)*i;y.set(a.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function Vb(e){const t=Nm(e,zb),n=Bw(t),r=cm(n,Rm,Rm);return Pw(r)}function Hb(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function jb(e){const t=new Map([["masonry",0],["strategy",0]]),n=Nm(e,Pb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*a,{h:m,s:y,v:w}=Ct(o[f],o[f+1],o[f+2]);y>=Db&&w>=Ub&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const h=u/s,c=l/s;return h>=Lb&&t.set("masonry",Om*Math.min(1,h/Fb)),c>=Gb&&t.set("strategy",Om*Math.min(1,c/Wb)),t}function Kb(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Vb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Bb)a.push(Lw(n,l,i));const o=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const f=Hb(p,h);f>c&&(c=f)}o.set(l,c)}for(const[l,h]of jb(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const sn=224,Yb=512,Xb=[.485,.456,.406],Zb=[.229,.224,.225];function Qb(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Jb(e){const t=yo(e,sn,sn),n=sn*sn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Xb[a])/Zb[a];return r}function e1(e){const t=3*sn*sn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Jb(jt(e,r)),r*t);return n}function t1(e,t=Yb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function n1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Kn=96,r1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],i1=.45;function a1(e){const t=yo(e,Kn,Kn),n=Kn*Kn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function o1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=i1?r1[t]??"":"",prob:n}}const Yn=128,s1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],u1=.5,l1=.9;function c1(e){const t=Hn(e,Yn,Yn),n=Yn*Yn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function d1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,c=(o*n+s)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function h1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=d1(n);return n}function p1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function f1(e,t){let n=0,r=-1;for(let a=0;a<4;a++){const o=a===0?e:h1(e,a),s=await t(c1(o)),u=p1(s);u.prob>r&&(r=u.prob,n=u.index)}const i=r>=u1?s1[n]??"":"";return{id:i==="other"?"":i,prob:r}}const Xn=96,m1=[1,2,3,4,5,6,7],g1=.8,y1=.99;function w1(e){const t=wo(e,e.width*2,e.height*2),n=Hn({width:e.width*2,height:e.height*2,channels:3,data:t},Xn,Xn),r=Xn*Xn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function _1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:m1[t],prob:e[t]}}const un=128,zm=.35,b1=["fp","laurel"],x1=.85,Zn=40;function $1(e){const r=(e.width<un&&e.height<un?wo:Hn)(e,un,un),i=un*un,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function v1(e){return e[b1.indexOf("fp")]}const ln=128,S1=.15,Bm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],M1=7,I1=.9;function T1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*S1),h=Math.max(0,st(s-l/2)),c=Math.max(0,st(u-l/2)),p=Math.min(t,st(s+l/2)),f=Math.min(n,st(u+l/2));return p-h<8||f-c<8?null:{x:h,y:c,w:p-h,h:f-c}}function E1(e){const r=(e.width<ln&&e.height<ln?wo:Hn)(e,ln,ln),i=ln*ln,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function k1(e){let t=0;for(let i=1;i<Bm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=M1;return{className:Bm[t],probability:n,rejected:r&&n>=I1}}const si=3,C1=2.2,A1=.3,R1=.65,O1=3,N1=1.3,z1=.77;function Pm(e,t,n){const[r,i,a,o]=e,s=[];return r<=si&&s.push("gauche"),i<=si&&s.push("haut"),r+a>=t-si&&s.push("droit"),i+o>=n-si&&s.push("bas"),s}function Dm(e){const t=e[3]/Math.max(e[2],1);return t>=N1?"portrait":t<=z1?"paysage":null}function Do(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function B1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>R1)return!0;return!1}function P1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Pm(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(B1(n,r,i))return u("photo-piste");if(s.length<O1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=Do(s.map(w=>w.box[2]*w.box[3])),h=Do(s.map(w=>w.box[2])),c=Do(s.map(w=>w.box[3])),p=new Set(s.map(w=>Dm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of o){const b=Pm(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(h>0?x/h:1),(b.includes("haut")||b.includes("bas"))&&I.push(c>0?M/c:1);const E=I.length>0?Math.min(...I):1,k=Dm(w.box);v>C1?m.push({banner:w,edgeReason:"bord-grosse"}):E<A1?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const D1=1,U1=1.5;function L1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function F1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function G1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function W1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,f]of L1(e)){const m=F1(u,l,p,f);m!==null&&(h===null||m[0]<h[0])&&(h=m)}if(h===null)return null;const c=G1(e);return c===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:c!==o>s}}catch{return null}}function q1(e,t,n,r=D1,i=U1){const a=[];for(const[o,s]of t??[]){const u=W1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const _t=64,Um=.5,V1=[.67,1.24];function Lm(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let M=0;M<u;M++){const v=i+M,I=v-t,E=(w*u+M)*3;if(I*I+x*x<=p){const k=(b*e.width+v)*h;c[E]=e.data[k],c[E+1]=e.data[k+1],c[E+2]=e.data[k+2]}else c[E]=255,c[E+1]=255,c[E+2]=255}}const f=Hn({width:u,height:l,channels:3,data:c},_t,_t),m=_t*_t,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function H1(e){return e[1]}const ui=[1,3,6],j1=.5;function K1(e){if(e.length!==ui.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ui[t],prob:e[t]}}function Y1(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ui.includes(i.denomination)&&i.prob>=j1?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const X1=2.25,li=3,Z1=1.15,Q1=.5,J1=2.5,e2=.75,t2=2.25,n2=1.3,r2=.77;function ci(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function i2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Fm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function a2(e,t,n){if(n.length>=3&&Fm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,c=l-s,p=h*h+c*c,f=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(o+f*h),t-(s+f*c)))}return r}function o2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function s2(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let c=0,p=1;const f=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const Uo=e=>e.box[3]/Math.max(1,e.box[2]),Yt=e=>Uo(e)>Z1,Qn=e=>Uo(e)>=n2||Uo(e)<=r2;function Lo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Fo(e,t,n,r,i){const a=new Set(t),o=[...e.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:a.has(R)?"card":"tucked",src:["banner",R]})),...n.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(z=>[z.box[0]+z.box[2]/2,z.box[1]+z.box[3]/2]);let h=o.filter(z=>z.kind!=="wonder").map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R);h.length===0&&(h=o.map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R));const c=h[Math.floor(h.length/2)],p=(X1*c)**2,f=o.map((z,R)=>R),m=z=>{let R=z;for(;f[R]!==R;)f[R]=f[f[R]],R=f[R];return R},y=o.map((z,R)=>z.kind==="card"?R:-1).filter(z=>z>=0),w=o.map((z,R)=>z.kind!=="card"?R:-1).filter(z=>z>=0);for(let z=0;z<y.length;z+=1)for(let R=z+1;R<y.length;R+=1){const B=y[z],L=y[R],G=o[B],Z=o[L];if(Qn(G)&&Qn(Z)&&Yt(G)!==Yt(Z))continue;const ie=l[B][0]-l[L][0],te=l[B][1]-l[L][1],ye=ie*ie+te*te;let Me=ye<=p;!Me&&Qn(G)&&Qn(Z)&&Yt(G)===Yt(Z)&&ye<=(4*c)**2&&(Me=ci(Lo(G),Lo(Z))<=.5*c),Me&&(f[m(B)]=m(L))}for(let z=0;z<w.length;z+=1)for(let R=z+1;R<w.length;R+=1){const B=w[z],L=w[R];ci(o[B].box,o[L].box)<=e2*c&&(f[m(B)]=m(L))}const b=new Map;for(const z of w){const R=m(z);b.set(R,[...b.get(R)??[],z])}const x=new Map;for(const z of y){const R=m(z);x.set(R,[...x.get(R)??[],z])}for(const z of b.values()){const R=z.filter(Z=>o[Z].kind==="wonder"&&Qn(o[Z])).map(Z=>Yt(o[Z])),B=R.length>0?R.filter(Boolean).length*2>R.length:null,L=[];for(const[Z,ie]of x){let te=Number.POSITIVE_INFINITY;for(const ze of z)for(const De of ie)te=Math.min(te,ci(o[ze].box,o[De].box));if(te>t2*c)continue;const Me=ie.filter(ze=>Yt(o[ze])).length/ie.length>=.5;B!==null&&Me!==B||L.push([Z,te,Me])}if(L.length===0)continue;const G=new Set(L.map(Z=>Z[2]));if(L.length>=2&&G.size===1&&B!==null){const Z=L[0][0];for(const[ie]of L.slice(1))f[m(ie)]=m(Z);f[m(z[0])]=m(Z)}else{const Z=L.reduce((ie,te)=>te[1]<ie[1]?te:ie);f[m(z[0])]=m(Z[0])}}let M=new Map;for(let z=0;z<o.length;z+=1){const R=m(z);M.set(R,[...M.get(R)??[],z])}const v=o.map((z,R)=>z.kind==="wonder"?R:-1).filter(z=>z>=0);if(v.length>0){const z=(B,L)=>{const[G,Z,ie,te]=Lo(o[B]),[ye,Me,ze,De]=o[L].box,ut=Math.max(0,Math.min(G+ie,ye+ze)-Math.max(G,ye)),Be=Math.max(0,Math.min(Z+te,Me+De)-Math.max(Z,Me));return ut*Be>=.9*o[B].box[2]*o[B].box[3]},R=new Map;for(let B=0;B<o.length;B+=1)if(!(o[B].kind!=="card"||!Qn(o[B])))for(const L of v){const G=ci(o[B].box,o[L].box);if(G<=.8*c&&Yt(o[B])!==Yt(o[L])&&z(B,L)){const Z=R.get(L);(!Z||G<Z[1])&&R.set(L,[B,G])}}for(const[B,[L]]of R){const G=m(B);for(const[Z,ie]of M){const te=ie.indexOf(L);if(te>=0&&Z!==G){ie.splice(te,1),M.set(G,[...M.get(G)??[],L]),o[L].kind="tucked";break}}}M=new Map([...M].filter(([,B])=>B.length>0))}const I=z=>z.filter(R=>o[R].kind==="card").length,E=z=>{const R=z.filter(B=>o[B].kind==="card"||o[B].kind==="wonder");return R.length===0?null:R.filter(B=>Yt(o[B])).length/R.length},k=z=>[z.reduce((R,B)=>R+l[B][0],0)/z.length,z.reduce((R,B)=>R+l[B][1],0)/z.length],S=[i[0]/2,i[1]/2],A=[...M.values()].sort((z,R)=>{const B=I(z),L=I(R);if(B!==L)return L-B;const G=Math.hypot(k(z)[0]-S[0],k(z)[1]-S[1]),Z=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return G-Z}),N=k(A[0]),U=E(A[0]),V=A.map((z,R)=>{if(R===0||I(z)<li)return"player";const B=E(z),L=B!==null&&U!==null&&Math.abs(B-U)>=Q1,G=k(z),Z=r.some(ie=>s2(N,G,ie));return L||Z?"opponent":"player"});if(!V.includes("opponent")){const z=B=>B.reduce((L,G)=>L+(o[G].kind==="wonder"?1:0),0);let R=V.map((B,L)=>L).filter(B=>B>0&&(I(A[B])>=li||z(A[B])>=2));if(R.reduce((B,L)=>B+z(A[L]),0)<1&&(R=[]),R.length>0&&(I(A[0])<2*li||R.reduce((B,L)=>B+I(A[L]),0)<2*li)&&(R=[]),R.length>0){const B=new Map(R.map(Z=>[Z,k(A[Z])])),L=(Z,ie)=>(Z[0]-ie[0])**2+(Z[1]-ie[1])**2;if(R.every((Z,ie)=>R.slice(ie+1).every(te=>L(B.get(Z),B.get(te))<Math.min(L(B.get(Z),N),L(B.get(te),N)))))for(const Z of R)V[Z]="opponent"}}const F=[],O=[];let H=!1;A.forEach((z,R)=>{const B=V[R];B==="opponent"&&(H=!0);const L=[],G=[];for(const Z of z){const[ie,te,ye,Me]=o[Z].box;L.push([ie,te],[ie+ye,te],[ie,te+Me],[ie+ye,te+Me]),G.push(o[Z].box);const[ze,De]=o[Z].src;ze==="banner"?s[De]=B:u[De]=B}F.push([B,i2(L)]),O.push([B,G])});const X=(z,R,B)=>Math.min(...O[B][1].map(L=>o2(z,R,L))),J=(z,R)=>F.map(([,B],L)=>B.length>=3&&Fm(z,R,B)?L:-1).filter(B=>B>=0),he=(z,R)=>{if(F.length===0)return"player";const B=c>0?J1*c:Number.POSITIVE_INFINITY,L=J(z,R);if(L.length>0){const ie=L.reduce((te,ye)=>X(z,R,ye)<X(z,R,te)?ye:te);return F[ie][0]}let G=-1,Z=Number.POSITIVE_INFINITY;return F.forEach(([,ie],te)=>{const ye=a2(z,R,ie);ye<Z&&(G=te,Z=ye)}),G>=0&&Z<=B?F[G][0]:"none"},W=(z,R)=>{if(F.length===0)return"none";const B=J(z,R);if(B.length===0)return"none";const L=B.reduce((G,Z)=>X(z,R,Z)<X(z,R,G)?Z:G);return F[L][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:H,hulls:F,hullBoxCounts:O.map(([,z])=>z.length),pointOwner:he,pointInside:W}}const u2=3;function l2(e,t=u2){const n=e.length,r=Array.from({length:n},(o,s)=>s),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let s=o+1;s<n;s+=1){const u=e[o],l=e[s],h=Number(u.center[0]),c=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![h,c,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(h-p,c-f)<=t*(m+y)&&(r[i(o)]=i(s))}const a=new Map;for(let o=0;o<n;o+=1){const s=i(o);a.has(s)||a.set(s,[]),a.get(s).push(o)}return[...a.values()]}function c2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3]),s=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(s,u)}function d2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{const a=new Set(i());if(a.size===0)return[];const o=l2(e),s=[];for(const l of o){const h=l.map(M=>e[M]),c=h.filter(M=>a.has(M));if(c.length===0)continue;let p=0,f=0,m=0;for(const M of h){const v=Number(M.center[0]),I=Number(M.center[1]);f+=v,m+=I,t.pointInside(v,I)===n&&(p+=1)}const y=f/h.length,w=m/h.length,b=r&&r.length>0?Math.min(...r.map(M=>c2(y,w,M))):0,x=c.reduce((M,v)=>M+(Number(v.denomination??0)||0),0);s.push({miens:c,inside:p,dPiste:b,valeur:x})}return s.length===0?[]:s.length===1?s[0].miens:s.reduce((l,h)=>{const c=[l.inside>0?1:0,l.inside,l.dPiste,l.valeur],p=[h.inside>0?1:0,h.inside,h.dPiste,h.valeur];for(let f=0;f<4;f+=1){if(p[f]>c[f])return h;if(p[f]<c[f])return l}return l}).miens}catch{try{return i()}catch{return[...e]}}}const h2=1280,p2=80,f2=3,m2=3,g2=.3,y2=2.4,w2=1,_2=5.2,b2=5;function Go(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function x2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=g2&&r/n<=y2&&i/n>=w2&&i/n<=_2&&i/r<=b2}function $2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*h2/r<p2}function v2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let h=n[0],c=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<c&&(c=f,h=p)}h.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Gm(e,t,n,r,i=[]){const a=Go(n);if(!$2(e,t,a))return[];const o=r.filter(l=>l.n>=m2&&l.poly.length>0).slice().sort((l,h)=>h.n-l.n).slice(0,2),s=Math.round(a*f2),u=[];for(const l of v2(o,i)){const h=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(h.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...h))-s),f=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.min(e,Math.trunc(Math.max(...h))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function S2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return x2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}function M2(e,t,n,r,i){return Gm(e,t,n,r,i)}function I2(e,t){var s,u,l,h;const[n,r,i,a]=t,o=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),f=Number((u=c.box)==null?void 0:u[1]),m=Number((l=c.box)==null?void 0:l[2]),y=Number((h=c.box)==null?void 0:h[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>a||o.push({...c,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return o}function T2(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,a=r.y+r.height/2;let o=!1;for(const s of t){if(n.id&&s.id===n.id){o=!0;break}const u=s.boundingBox,l=u.x+u.width/2,h=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(a-h)**2<c*c){o=!0;break}}o||t.push(n)}return t}function Wm(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const E2=1.1,k2=3.2,C2=20,A2=.5,R2=1280,O2=.18,N2=28,z2=.3;function B2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,c)=>c)];const l=(s.reduce((h,c)=>h+c,0)/s.length+u.reduce((h,c)=>h+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function P2(e,t,n=E2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of B2(s)){if(l.length===0)continue;const h=l.map(A=>e[A]),c=h.map(A=>Math.min(A[2],A[3])).sort((A,N)=>A-N),p=c[Math.trunc(c.length/2)],f=k2*p,m=Math.max(0,Math.min(...h.map(A=>A[0]))-f),y=Math.max(0,Math.min(...h.map(A=>A[1]))-f),w=Math.min(r,Math.max(...h.map(A=>A[0]+A[2]))+f),b=Math.min(i,Math.max(...h.map(A=>A[1]+A[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=A2*p*R2/x,v=M>0?Math.max(1,Math.ceil(C2/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,k=(I?w-m:b-y)/v,S=k*(1+O2);for(let A=0;A<v;A++){let N=(I?m:y)+A*k-(S-k)/2;N=Math.max(I?m:y,N);const U=Math.min(I?w:b,N+S);u.push(I?[Math.trunc(N),Math.trunc(y),Math.trunc(U),Math.trunc(b)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(U)])}}return u.filter(([l,h,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-h))>=n)}function D2(e,t,n,r=N2){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const c=(s+l)/2+i,p=(u+h)/2+a;o.some(([m,y,w,b])=>{const x=c-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function U2(e,t,n,r=z2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function L2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function F2(e,t,n,r){return n.length===0?!1:L2(e,t,n)&&!U2(e,t,r)}const qm=4,Vm=8,di=5,An="base-game rule";function Pt(e,t){return{code:e,message:t,severity:"warning"}}function Wo(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function G2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>qm&&i.push(Pt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${qm} (${An}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Wo(n);return a.length>0&&i.push(Pt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${An}), so one of the two readings is wrong.`)),i}function W2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Vm&&t.push(Pt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Vm} are in play (${An}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(c=>l.has(c)).sort();h.length>0&&t.push(Pt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function q2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>di&&n.push(Pt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${di} are in play (${An}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Wo(r);if(i.length>0&&n.push(Pt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${An}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==di&&n.push(Pt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${di} are in play (${An}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Pt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function V2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Pt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Wo(e.filter(o=>!!o));return a.length>0&&r.push(Pt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${An}).`)),r}const H2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],j2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],K2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],Y2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],X2=[...j2,...K2,...Y2,...H2];Object.fromEntries(X2.map(e=>[e.id,e]));const Z2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Hm=.2,Q2=.3,jm=.25;function J2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=jm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=jm)&&r>1==h>1)return!0}return!1}async function ex(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Hm),u=Math.round(o*Hm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),f=c-l,m=p-h;if(f<=0||m<=0)return null;const y=e.channels,w=new Uint8ClampedArray(f*m*y);for(let M=0;M<m;M++){const v=((h+M)*e.width+l)*y;w.set(e.data.subarray(v,v+f*y),M*f*y)}const b={width:f,height:m,channels:y,data:w};let x=null;for(let M=0;M<4;M++){const v=M===0?b:jt(b,M),I=v.width,E=I-Math.floor(Q2*I),k=I-E;if(k<=0)continue;const S=new Uint8ClampedArray(k*v.height*v.channels);for(let F=0;F<v.height;F++){const O=(F*I+E)*v.channels;S.set(v.data.subarray(O,O+k*v.channels),F*k*v.channels)}const A={width:k,height:v.height,channels:v.channels,data:S},N=Bo(A),V=(await n.run({[n.inputNames[0]]:new qe("float32",N,[1,3,Bt,Bt])}))[n.outputNames[0]].data[1]??0;x=x===null?V:Math.max(x,V)}return x}async function Km(e,t,n,r,i,a,o){var f;const s=(m,y,w,b)=>{const x=Math.max(0,Math.round(m)),M=Math.max(0,Math.round(y)),v=Math.min(n.width,Math.round(m+w)),I=Math.min(n.height,Math.round(y+b)),E=v-x,k=I-M;if(E<=0||k<=0)return null;const S=n.channels,A=new Uint8ClampedArray(E*k*S);for(let N=0;N<k;N++){const U=((M+N)*n.width+x)*S;A.set(n.data.subarray(U,U+E*S),N*E*S)}return{width:E,height:k,channels:S,data:A}},u=async m=>(await i.run({[i.inputNames[0]]:new qe("float32",m,[1,3,Yn,Yn])}))[i.outputNames[0]].data,l=new Map;for(const m of r){const[y,w,b,x]=m;if(b<=0||x<=0)continue;const M=s(y,w,b,x);if(M===null)continue;const{id:v,prob:I}=await f1(M,u);if(v===""||I<l1)continue;const E=l.get(v);(E===void 0||I>E.prob)&&l.set(v,{prob:I,box:m})}const h=[],c=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[m,{prob:y,box:w}]of l){const[b,x,M,v]=w;let I={x:Math.round(b),y:Math.round(x),width:Math.round(M),height:Math.round(v)},E=null,k=[],S=null;if(Date.now()<a)try{const X=await e.wonderRef(m);if(X!==null){const J=xm(t,n,X,w);if(J!==null){E=J.footprint,k=J.overflow;const he=E.map(B=>B[0]),W=E.map(B=>B[1]),z=Math.max(0,Math.round(Math.min(...he))),R=Math.max(0,Math.round(Math.min(...W)));if(I={x:z,y:R,width:Math.min(n.width,Math.round(Math.max(...he)))-z,height:Math.min(n.height,Math.round(Math.max(...W)))-R},c!==null)try{const B=bm(t,n,X,E);if(B!==null){const L=Bo(B),G=await c.run({[c.inputNames[0]]:new qe("float32",L,[1,3,Bt,Bt])});S=vm(G[c.outputNames[0]].data).prob}}catch{}}}}catch(X){console.warn(`[wonders-cls] ${m} registration failed:`,X)}const A=E!==null?No(E,k):null,N=[];if(S!==null&&N.push(S>=zo?1:0),p!==null)try{const X=await ex(n,w,p);X!==null&&N.push(X>=zo?1:0)}catch{}const U=A??I,V=o.some(X=>{const J=X.box[0]+X.box[2]/2,he=X.box[1]+X.box[3]/2;return J>=U.x&&J<=U.x+U.width&&he>=U.y&&he<=U.y+U.height});N.push(V?1:0);let F=N.length>0&&N.reduce((X,J)=>X+J,0)*2>N.length;F&&J2(U,I,o)&&(F=!1);const O={id:m,name:((f=Z2[m])==null?void 0:f.name)??m,builtWithCardUnderneath:F,boundingBox:I,confidence:Math.round(y*1e4)/1e4,...A?{tuckRegion:A}:{}},H=A??I;h.push({obj:O,edgeScores:null,zone:{x0:H.x,y0:H.y,x1:H.x+H.width,y1:H.y+H.height},quad:E,region:A})}return h}async function Ym(e,t,n,r,i,a){const o=await e.localiseWonders(n);return o.length===0?[]:Km(e,t,n,o,r,i,a)}function tx(e,t){const n=Wm(e.obj.boundingBox,t),r=e.region===null?null:Wm(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([a,o])=>[a+t[0],o+t[1]]),region:r}}async function Xm(e){try{const t=M2(e.image.width,e.image.height,e.banners.map(o=>o.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const o of t){const s=e.cropFrame(o);if(!(s.width<=0||s.height<=0))for(const u of await e.detect(s,I2(e.banners,o)))n.push(tx(u,o))}if(e.builtSeenOut)for(const o of n)o.obj.id&&o.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(o.obj.id);if(n.length===0)return[];const r=[...e.known.map(o=>({boundingBox:o.boundingBox,id:o.id,neuf:-1})),...n.map((o,s)=>({boundingBox:o.obj.boundingBox,id:o.obj.id,neuf:s}))],i=T2(r),a=[];for(const o of i){const s=o.neuf;s>=0&&a.push(n[s])}return a}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const Ne="/7wd-scorer/models/",$r=new Map;function nx(){$r.clear()}function rx(){return[...$r.entries()].map(([e,t])=>({nom:e,appels:t.appels,ms:Math.round(t.ms)})).sort((e,t)=>t.ms-e.ms)}function ix(){const e={};for(const[t,n]of $r)e[t]=n.provider;return e}const ax=Xe.create.bind(Xe);Xe.create=async function(t,n){var s;const r=await ax(t,n),i=typeof t=="string"?t.split("/").pop()??"?":"(bytes)",a=((s=n==null?void 0:n.executionProviders)==null?void 0:s[0])??"inconnu",o=r.run.bind(r);return r.run=async function(...l){const h=performance.now();try{return await o(...l)}finally{const c=$r.get(i)??{appels:0,ms:0,provider:a};c.appels+=1,c.ms+=performance.now()-h,c.provider=a,$r.set(i,c)}},r};let Zm=!1;const hi=new Map;function Qm(){var e;Zm||(Fe.wasm.wasmPaths="/7wd-scorer/ort/",Fe.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Zm=!0)}const qo=new Set;function ox(e){Qm();let t=hi.get(e);return t===void 0&&(t=Xe.create(`${Ne}${ht[e].onnx}`,{executionProviders:qo.has(e)?["wasm"]:["webgpu","wasm"]}),hi.set(e,t),t.catch(()=>hi.delete(e))),t}let Vo=null,Ho=null;const sx=.75,ux=4,lx=.65,cx=3e4;let jo=null;function vr(){return jo===null&&(jo=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),jo}const Jm=new Map;function Ko(e){let t=Jm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ne}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Jm.set(e,t)),t}function Yo(e){return Ko(`wonder-refs/${e}.jpg`)}const eg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function dx(){const e=new Map;for(const t of eg){const n=await Ko(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function hx(){const e=new Map;for(const t of eg){const n=await Ko(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const px=.6,fx=12,mx=45e3;let Xo=null;function tg(){return Xo===null&&(Qm(),Xo=(async()=>{try{const[e,t,n,r]=await Promise.all([Xe.create(`${Ne}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),Xe.create(`${Ne}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ne}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ne}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:__(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Xo}async function gx(e,t){const n=Math.max(w_/Kt,t.width/t.height),{tensor:r,width:i}=x_(t,n),a={[e.rec.inputNames[0]]:new qe("float32",r,[1,3,Kt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,c=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=h[w+b];x>y&&(y=x,m=b)}c[f]=m,p[f]=y}return b_(c,p,e.charset)}async function yx(e,t){const n=await tg();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+mx;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=jt(e,o),u=u_(s),l={[n.det.inputNames[0]]:new qe("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=f_(h.data,u,s.width,s.height).slice(0,fx);console.debug(`[wonders-ocr] rot ${o*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const f=m_(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await gx(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<px||m.trim().length<ux)continue;const w=E_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<sx||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Zo(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Zo(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(c=>c[0]),u=o.map(c=>c[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function wx(){return Ho===null&&(Ho=fetch(`${Ne}laurel_gallery.json`).then(async e=>e.ok?Xw(await e.json()):[]).catch(()=>[])),Ho}function _x(e,t,n,r){return Dt(e,t-r,n-r,2*r,2*r)}function Dt(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=((p+o)*e.width+(f+a))*e.channels,y=(p*l+f)*3;c[y]=e.data[m],c[y+1]=e.data[m+1],c[y+2]=e.data[m+2]}return{width:l,height:h,channels:3,data:c}}function bx(){return Vo===null&&(Vo=fetch(`${Ne}token_templates.json`).then(async e=>e.ok?qb(await e.json()):new Map).catch(()=>new Map)),Vo}let Qo=null;function xx(){return Qo===null&&(Qo=(async()=>{try{const e=await fetch(`${Ne}token_embed_index.json`);if(!e.ok)return null;const t=Qb(await e.json());return{session:await Xe.create(`${Ne}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Qo}const $x=.92;let Jo=null;function vx(){return Jo===null&&(Jo=(async()=>{try{return(await fetch(`${Ne}guild_classifier.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Jo}let es=null;function Sx(){return es===null&&(es=(async()=>{try{return(await fetch(`${Ne}laurel_digit.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),es}let ts=null,ns=null;function Mx(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${Ne}banner_class.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ns}async function Ix(e,t){if(t.length===0)return t;const n=await Mx();if(n===null)return t;const r=[];for(const i of t)try{const a=T1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=Dt(e,a.x,a.y,a.w,a.h),s=E1(o),u=await n.run({[n.inputNames[0]]:new qe("float32",s,[1,3,ln,ln])});k1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function Tx(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${Ne}laurel_filter.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}async function Ex(e,t,n){let[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;if(s<Zn){const w=Math.floor((r+a)/2);r=w-Math.floor(Zn/2),a=w+Math.floor(Zn/2),s=a-r}if(u<Zn){const w=Math.floor((i+o)/2);i=w-Math.floor(Zn/2),o=w+Math.floor(Zn/2),u=o-i}const l=Math.trunc(zm*s),h=Math.trunc(zm*u),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(e.width,a+l),m=Math.min(e.height,o+h),y=Dt(e,c,p,f-c,m-p);if(y.width<=0||y.height<=0)return null;try{const w=$1(y),b=await n.run({[n.inputNames[0]]:new qe("float32",w,[1,3,un,un])});return v1(b[n.outputNames[0]].data)}catch{return null}}let rs=null;function kx(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${Ne}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),rs}let is=null;function Cx(){return is===null&&(is=(async()=>{try{return(await fetch(`${Ne}coin_denom.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}coin_denom.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),is}async function Ax(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Lm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*_t*_t);r.forEach((u,l)=>i.set(u,l*u.length));const o=(await n.run({[n.inputNames[0]]:new qe("float32",i,[t.length,3,_t,_t])}))[n.outputNames[0]].data,s=ui.length;return t.map((u,l)=>K1(o.subarray(l*s,l*s+s)))}catch{return null}}async function Rx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=Lm(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const h=new Float32Array(t.length*3*_t*_t);l.forEach((f,m)=>h.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new qe("float32",h,[t.length,3,_t,_t])}))[n.outputNames[0]].data;return t.map((f,m)=>H1(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let as=null;function ng(){return as===null&&(as=(async()=>{try{return(await fetch(`${Ne}tuck_classifier.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),as}const rg=.1;let os=null;function ig(){return os===null&&(os=(async()=>{try{return(await fetch(`${Ne}track_band.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),os}async function ag(e,t,n){try{const r=_o(t,1280,ew(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new qe("float32",r.tensor,[1,3,1280,1280])});return wr(i[e.outputNames[0]].data,r.params,rg)}catch{return[]}}let ss=null;const Ox=.4;function Nx(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function zx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||Nx(a,u)>=Ox)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function Bx(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${Ne}tuck_box.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ss}let us=null;function Px(){return us===null&&(us=(async()=>{try{return(await fetch(`${Ne}wonder_classifier.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),us}const ls={wonderRef:Yo,tuckClassifier:ng,tuckBoxClassifier:Bx,localiseWonders:async e=>{try{const{rows:t,params:n}=await bt("wonder",e);return bo(t,n,ht.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function Dx(e,t){const n=await xx();if(n!==null)try{const r=e1(e),i=new qe("float32",r,[4,3,sn,sn]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=n1(n.index,t1(o));return u<$x?["",-1]:[s,u]}catch{}return Kb(e,t)}async function cs(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function bt(e,t){const n=ht[e],{tensor:r,params:i}=_o(t,n.input),a=async()=>{const o=await ox(e),s={[o.inputNames[0]]:new qe("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(qo.has(e))throw o;return qo.add(e),hi.delete(e),await a()}}const Ux=6,Lx=4,Fx=5,Gx=2;async function Wx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await cs(e),r=await bt("banner",n),i=ni(r.rows,r.params,ht.banner.conf);if(t.banners=i.length,i.length>=Ux)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await bt("laurel",n),o=wr(a.rows,a.params,ht.laurel.conf);if(t.laurels=o.length,o.length>=Lx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await bt("coin",n),u=nm(s.rows,s.params,ht.coin.conf);return t.coins=u.length,u.length>=Fx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Gx?{...t,kind:"board",confidence:.4}:t}function qx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function ds(e,t,n,r,i=()=>{},a="player",o,s=!1){const u={},l=[],h=[],c=[],p=[],f=[],m=[];let y=0,w=0,b=0,x=0,M=0;for(const A of e){M+=1;const N=`${t} photo ${M}/${e.length}`;r(`${N}: reading pixels…`,.01);const U=await cs(A);r(`${N}: card banners…`,.04);const V=await bt("banner",U);let F=ni(V.rows,V.params,ht.banner.conf);F=await Ix(U,F),r(`${N}: progress tokens…`,.08);let O=[];const H=await ig();H!==null&&(O=await ag(H,U,F)),O.length>0&&F.length>0&&(F=F.filter(D=>{const j=D.box[0]+D.box[2]/2,Q=D.box[1]+D.box[3]/2;return!O.some(([ne,oe,ue,Ee])=>Math.min(ne,ue)<=j&&j<=Math.max(ne,ue)&&Math.min(oe,Ee)<=Q&&Q<=Math.max(oe,Ee))}));const X=await bt("token",U),J=await bx(),he=c.length,W=[];for(const D of dw(X.rows,X.params,ht.token.conf)){if(W.push({cx:D.cx,cy:D.cy,r:D.r}),O.some(([ne,oe,ue,Ee])=>D.cx>=ne&&D.cx<=ue&&D.cy>=oe&&D.cy<=Ee))continue;const[j,Q]=await Dx(lm(U,D),J);j===""&&Q<0?W.pop():j===""?w+=1:c.some(ne=>ne.id===j)||c.push({id:j,center:[D.cx,D.cy],radius:D.r,confidence:Math.round(Q*1e4)/1e4})}r(`${N}: coins…`,.14);const z=await bt("coin",U),R=nm(z.rows,z.params,ht.coin.conf).filter(D=>!W.some(j=>(D.cx-j.cx)**2+(D.cy-j.cy)**2<=D.r*D.r)),B=await kx(),L=B!==null?await Rx(U,R,B):null,G=(L!==null?R.filter((D,j)=>L[j]>=Um).map(D=>D.r):[]).sort((D,j)=>D-j),Z=G.length>0?G.length%2===1?G[(G.length-1)/2]:(G[G.length/2-1]+G[G.length/2])/2:null,[ie,te]=V1,ye=R.map((D,j)=>{const Q=L!==null?L[j]:null;return Q===null||Q>=Um?"keep":Z!==null&&Z>0&&D.r/Z>=ie&&D.r/Z<=te?"suspect":"drop"}),Me=R.filter((D,j)=>ye[j]==="keep"),ze=zw(U,Me),De=await Cx(),ut=De!==null?await Ax(U,Me,De):null,Be=Y1(ze,ut??ze.map(()=>null));Be.map(D=>D.value);const ge=[];let lt=0;if(R.forEach((D,j)=>{if(ye[j]==="drop")return;if(ye[j]==="suspect"){const ne=L[j];ge.push({denomination:null,center:[D.cx,D.cy],radius:D.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${ne.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const Q=Be[lt++];ge.push({denomination:Q.value,center:[D.cx,D.cy],radius:D.r,denomSource:Q.source??"colour"})}),R.length>0&&ge.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ge.length>=2){const D=ge.map(Q=>Q.radius).sort((Q,ne)=>Q-ne),j=D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2;if(j>0)for(const Q of ge)Q.radius/j>2&&(Q.suspect=!0,Q.suspectReason=`radius ${Q.radius}px is ${(Q.radius/j).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(ge.length>=2)for(let D=0;D<ge.length;D+=1)for(let j=D+1;j<ge.length;j+=1){const Q=ge[D],ne=ge[j],oe=Math.hypot(Q.center[0]-ne.center[0],Q.center[1]-ne.center[1]);if(oe<1.1*Math.min(Q.radius,ne.radius))for(const ue of[Q,ne])ue.suspect||(ue.suspect=!0,ue.suspectReason=`almost concentric with another coin (${oe.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Xt=p.length,Je=[],ct=[],pt=Date.now()+cx;let Ye=null,Rt=null;const Sr=()=>(Rt===null&&(Rt=(async()=>{try{const{rows:D,params:j}=await bt("wonder",U);return bo(D,j,ht.wonder.conf,Number.POSITIVE_INFINITY).map(Q=>Q.box)}catch{return[]}})()),Rt),Zt=[];let Rn=!1;const Qt=await Px();if(Qt!==null){const D=await Sr();if(D.length>0&&(Ye=await vr(),Ye!==null)){r(`${N}: identifying wonders…`,.35);const j=await Km(ls,Ye,U,D,Qt,pt,F);for(const Q of j)p.some(ne=>ne.id===Q.obj.id)||(p.push(Q.obj),Zt.push({obj:Q.obj,edgeScores:Q.edgeScores,zone:Q.zone}),Je.push(Q.zone),ct.push({quad:Q.quad,region:Q.region}));Rn=j.length>0}}Rn||r(`${N}: wonder names…`,.2);const ft=Rn?{wonders:[],aborted:!1}:await yx(U,(D,j)=>r(`${N}: ${D}`,.2+.35*(j??0)));Ye===null&&(Ye=ft.wonders.length>0?await vr():null);for(const D of ft.wonders){let j=null;if(Ye!==null&&Date.now()<pt){r(`${N}: registering ${D.name}…`,.6);try{const Q=await Yo(D.id);if(Q!==null){let ne=L_(Ye,U,Q,[[D.nameBox.x,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y+D.nameBox.height],[D.nameBox.x,D.nameBox.y+D.nameBox.height]]);if(ne===null){const oe=await Sr(),ue=V_(oe,D.nameBox.x+D.nameBox.width/2,D.nameBox.y+D.nameBox.height/2);ue!==null&&(ne=xm(Ye,U,Q,ue))}if(ne!==null){let oe=ne.built,ue=!1;const Ee=await ng();if(Ee!==null)try{const me=bm(Ye,U,Q,ne.footprint);if(me!==null){const be=Bo(me),We=await Ee.run({[Ee.inputNames[0]]:new qe("float32",be,[1,3,Bt,Bt])});oe=vm(We[Ee.outputNames[0]].data).built,ue=!0}}catch{}const ke=ne.footprint.map(me=>me[0]),ce=ne.footprint.map(me=>me[1]),ae=Math.max(0,Math.round(Math.min(...ke))),le=Math.max(0,Math.round(Math.min(...ce)));j={built:oe,boundingBox:{x:ae,y:le,width:Math.min(U.width,Math.round(Math.max(...ke)))-ae,height:Math.min(U.height,Math.round(Math.max(...ce)))-le},tuckRegion:No(ne.footprint,ne.overflow),footprint:ne.footprint,edgeScores:ne.edgeScores,builtByTuck:ue}}}}catch(Q){console.warn(`[wonders-reg] ${D.id} failed:`,Q)}}if(j!==null){const Q=j.tuckRegion??j.boundingBox;Je.push({x0:Q.x,y0:Q.y,x1:Q.x+Q.width,y1:Q.y+Q.height}),ct.push({quad:j.footprint,region:j.tuckRegion})}else{const Q=Math.max(8,D.nameBox.height),ne=Math.round(D.nameBox.width*.15);Je.push({x0:D.nameBox.x-ne,y0:D.nameBox.y-Q*2.5,x1:D.nameBox.x+D.nameBox.width+ne,y1:D.nameBox.y+D.nameBox.height+Q*2.5}),ct.push({quad:null,region:null})}if(!p.some(Q=>Q.id===D.id)){const Q=(j==null?void 0:j.builtByTuck)===!0,ne=Q?j.built:!1,oe=!Q&&(j==null?void 0:j.built)===!0,ue={id:D.id,name:D.name,builtWithCardUnderneath:ne,boundingBox:(j==null?void 0:j.boundingBox)??{x:0,y:0,width:0,height:0},...j!=null&&j.tuckRegion?{tuckRegion:j.tuckRegion}:{},confidence:D.confidence,...oe?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};p.push(ue),Zt.push({obj:ue,edgeScores:j&&!j.builtByTuck?j.edgeScores:null,zone:Je[Je.length-1]})}}if(!Rn){const D=K_(Zt.map(j=>({built:j.obj.builtWithCardUnderneath,edgeScores:j.edgeScores,zone:j.zone})),F.map(j=>[j.box[0]+j.box[2]/2,j.box[1]+j.box[3]/2]));for(const j of D){const Q=Zt[j];Q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(F.length>0){const j=new Set(D);for(let Q=0;Q<Zt.length;Q++){const ne=Zt[Q];if(j.has(Q)||!ne.obj.builtWithCardUnderneath)continue;const oe=ne.obj.tuckRegion;if(oe===void 0)continue;if(!F.some(Ee=>{const ke=Ee.box[0]+Ee.box[2]/2,ce=Ee.box[1]+Ee.box[3]/2;return ke>=oe.x&&ke<=oe.x+oe.width&&ce>=oe.y&&ce<=oe.y+oe.height})){const Ee=ne.obj;Ee.builtWithCardUnderneath=!1,Ee.suspect=!0,Ee.suspectReason="built-unconfirmed"}}}}if(ft.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${N}: the wonder-name read ran out of its time budget on this device — ${ft.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Ye!==null&&ft.wonders.length>0&&Date.now()<pt)try{const D=await tg(),j=(D==null?void 0:D.catalog.filter(ne=>ne.kind==="wonder").map(ne=>ne.id))??[],Q=new Map;for(const ne of j)if(!p.some(oe=>oe.id===ne)){const oe=await Yo(ne);oe!==null&&Q.set(ne,oe)}if(Q.size>0){r(`${N}: searching occluded wonders…`,.7);const ne=U_(Ye,U,Q,pt);for(const oe of ne){const ue=oe.footprint.map(We=>We[0]),Ee=oe.footprint.map(We=>We[1]),ke=Math.max(0,Math.round(Math.min(...ue))),ce=Math.max(0,Math.round(Math.min(...Ee))),ae={x:ke,y:ce,width:Math.min(U.width,Math.round(Math.max(...ue)))-ke,height:Math.min(U.height,Math.round(Math.max(...Ee)))-ce};if(p.some(We=>{const Ue=We.boundingBox,Bn=Math.max(0,Math.min(Ue.x+Ue.width,ae.x+ae.width)-Math.max(Ue.x,ae.x)),rt=Math.max(0,Math.min(Ue.y+Ue.height,ae.y+ae.height)-Math.max(Ue.y,ae.y)),Pe=Bn*rt,He=Ue.width*Ue.height+ae.width*ae.height-Pe;return He>0&&Pe/He>D_}))continue;const me=D==null?void 0:D.catalog.find(We=>We.id===oe.id);p.push({id:oe.id,name:(me==null?void 0:me.nameFr)??(me==null?void 0:me.name)??oe.id,builtWithCardUnderneath:oe.built,boundingBox:ae,...oe.tuckRegion?{tuckRegion:oe.tuckRegion}:{},confidence:Math.round(oe.confidence*1e4)/1e4});const be=oe.tuckRegion??ae;Je.push({x0:be.x,y0:be.y,x1:be.x+be.width,y1:be.y+be.height}),ct.push({quad:oe.footprint.map(([We,Ue])=>[We,Ue]),region:oe.tuckRegion??null})}}}catch(D){console.warn("[wonders-reg] discovery failed:",D)}const cn=a==="opponent";let dn=(D,j)=>!cn,On=(D,j)=>!cn,Mr=null;try{let D=p.slice(Xt);const j=[];F.forEach((ce,ae)=>{const le=ce.box[0]+ce.box[2]/2,me=ce.box[1]+ce.box[3]/2;Je.some(be=>le>=be.x0&&le<=be.x1&&me>=be.y0&&me<=be.y1)||j.push(ae)});const Q=[],ne=[];D.forEach((ce,ae)=>{const le=ce.boundingBox;le&&le.width>0&&(Q.push(ae),ne.push([le.x,le.y,le.width,le.height]))});const oe=ce=>{const ae=[];return ce.forEach((le,me)=>{const be=le.box[0]+le.box[2]/2,We=le.box[1]+le.box[3]/2;Je.some(Ue=>be>=Ue.x0&&be<=Ue.x1&&We>=Ue.y0&&We<=Ue.y1)||ae.push(me)}),ae};let ue=Fo(F.map(ce=>ce.box),j,ne,O,[U.width,U.height]);if(Qt!==null){r(`${N}: seconde passe merveilles (crop de cité)…`,.42);const ae=(await Xm({image:U,banners:F,hulls:ue.hulls.map(([le,me],be)=>({owner:le,poly:me,n:ue.hullBoxCounts[be]??0})),wonderBoxes:ne,known:D,cropFrame:([le,me,be,We])=>Dt(U,le,me,be-le,We-me),detect:async(le,me)=>(Ye===null&&(Ye=await vr()),Ye===null?[]:Ym(ls,Ye,le,Qt,pt,me))})).filter(le=>!p.some(me=>me.id===le.obj.id));if(ae.length>0){for(const le of ae)p.push(le.obj),Je.push(le.zone),ct.push({quad:le.quad,region:le.region});D=p.slice(Xt),Q.length=0,ne.length=0,D.forEach((le,me)=>{const be=le.boundingBox;be&&be.width>0&&(Q.push(me),ne.push([be.x,be.y,be.width,be.height]))}),ue=Fo(F.map(le=>le.box),oe(F),ne,O,[U.width,U.height])}}try{const ce=Gm(U.width,U.height,F.map(ae=>ae.box),ue.hulls.map(([ae,le],me)=>({owner:ae,poly:le,n:ue.hullBoxCounts[me]??0})),ne);if(ce.length>0){const ae=Go(F.map(me=>me.box)),le=[];for(const me of ce){const[be,We,Ue,Bn]=me,rt=Dt(U,be,We,Ue-be,Bn-We);if(rt.width<=0||rt.height<=0)continue;const Pe=await bt("banner",rt);for(const He of ni(Pe.rows,Pe.params,ht.banner.conf)){const Ze=S2(He.box,me,ae);Ze&&le.push({...He,box:Ze})}}if(le.length>0){const me=am([...F,...le]);me.length>F.length&&(F=me,ue=Fo(F.map(be=>be.box),oe(F),ne,O,[U.width,U.height]))}}}catch(ce){console.warn("[#129 city-rescan] skipped:",ce)}if(Qt!==null&&D.some(ce=>ce.builtWithCardUnderneath!==!0)){r(`${N}: revote built (crop de cité)…`,.47);const ce=new Set;await Xm({builtSeenOut:ce,image:U,banners:F,hulls:ue.hulls.map(([ae,le],me)=>({owner:ae,poly:le,n:ue.hullBoxCounts[me]??0})),wonderBoxes:ne,known:D,cropFrame:([ae,le,me,be])=>Dt(U,ae,le,me-ae,be-le),detect:async(ae,le)=>(Ye===null&&(Ye=await vr()),Ye===null?[]:Ym(ls,Ye,ae,Qt,pt,le))});for(const ae of D)ae.id&&ce.has(ae.id)&&ae.builtWithCardUnderneath!==!0&&(ae.builtWithCardUnderneath=!0,ae.builtByCityCrop=!0)}o!==void 0&&(o.hulls=ue.hulls.map(([ce,ae],le)=>({owner:ce,poly:ae,n:ue.hullBoxCounts[le]??0})),o.bandBoxes=O,o.image=U),dn=(ce,ae)=>ue.pointOwner(ce,ae)==="opponent"===cn;const Ee=cn?"opponent":"player";if(On=(ce,ae)=>ue.pointOwner(ce,ae)===Ee,s){const ce=ue;Mr=ae=>new Set(d2(ae,ce,Ee,O))}F=F.filter((ce,ae)=>ue.bannerOwner[ae]==="opponent"===cn);const ke=D.map(()=>"player");Q.forEach((ce,ae)=>{ke[ce]=ue.wonderOwner[ae]});for(let ce=D.length-1;ce>=0;ce-=1)ke[ce]==="opponent"!==cn&&p.splice(Xt+ce,1);Je.length=0;for(const ce of p.slice(Xt)){const ae=ce.tuckRegion??ce.boundingBox;ae&&Je.push({x0:ae.x,y0:ae.y,x1:ae.x+ae.width,y1:ae.y+ae.height})}for(let ce=c.length-1;ce>=he;ce-=1){const[ae,le]=c[ce].center;dn(ae,le)||c.splice(ce,1)}}catch(D){console.warn("[city-split] failed (side unfiltered):",D)}const Jt=Mr!==null?Mr(ge):null;for(const D of ge)(Jt!==null?!Jt.has(D):!On(D.center[0],D.center[1]))||(y+=D.denomination??0,h.push(D));const fi=new Set,Ir=[],mi=Go(F.map(D=>D.box));ct.forEach((D,j)=>{if(D.quad===null||D.region===null){const ue=Je[j];ue&&Ir.push(ue);return}const Q=D.region,ne=[];F.forEach((ue,Ee)=>{const ke=ue.box[0]+ue.box[2]/2,ce=ue.box[1]+ue.box[3]/2;ke>=Q.x&&ke<=Q.x+Q.width&&ce>=Q.y&&ce<=Q.y+Q.height&&ne.push([Ee,ue.box])});const oe=q1(D.quad,ne,mi);oe!==null&&fi.add(oe)});let xt=[],Nn=0;F.forEach((D,j)=>{if(fi.has(j)){x+=1,Nn+=1;return}const Q=D.box[0]+D.box[2]/2,ne=D.box[1]+D.box[3]/2;if(Ir.some(oe=>Q>=oe.x0&&Q<=oe.x1&&ne>=oe.y0&&ne<=oe.y1)){x+=1,Nn+=1;return}xt.push(D)});const gi=P1(xt,Nn,O,U.width,U.height);xt=gi.kept;for(const D of xt)u[D.family]=(u[D.family]??0)+1,b+=1;const Jn=_w(xt),er=new Set(Jn.map(D=>D.box.join(",")));for(const D of xw(xt))er.has(D.box.join(","))||(Jn.push(D),er.add(D.box.join(",")));for(const D of gi.suspects)er.has(D.box.join(","))||(Jn.push(D),er.add(D.box.join(",")));for(const D of Jn)m.push(D);if(xt.some(D=>D.family==="guild")){const D=await vx();if(D!==null){r(`${N}: identifying guilds…`,.75);for(const j of xt)if(j.family==="guild")try{const[Q,ne,oe,ue]=j.box,Ee=Dt(U,Q,ne,oe,ue),ke=a1(Ee),ce={[D.inputNames[0]]:new qe("float32",ke,[1,3,Kn,Kn])},le=(await D.run(ce))[D.outputNames[0]].data,{id:me,prob:be}=o1(le);me!==""&&!f.some(We=>We.id===me)&&f.push({id:me,boundingBox:{x:Q,y:ne,width:oe,height:ue},confidence:Math.round(be*1e4)/1e4})}catch(Q){console.warn("[guild-cls] failed:",Q)}}else if(Date.now()<pt)try{const j=Ye??await vr();if(j!==null){const Q=await dx();if(Q.size>0){r(`${N}: identifying guilds…`,.75);const ne=await hx();for(const oe of Nb(j,U,Q,pt,ne))f.some(ue=>ue.id===oe.id)||f.push(oe)}}}catch(j){console.warn("[guilds-reg] failed:",j)}}r(`${N}: laurels…`,.8);const fs=await wx(),yi=[];for(const D of[0]){const j=D===0?U:jt(U,D),Q=await bt("laurel",j);for(const[ne,oe,ue,Ee]of wr(Q.rows,Q.params,ht.laurel.conf)){const ke=Zo({x:ne,y:oe,width:ue-ne,height:Ee-oe},D,U.width,U.height);yi.push([ke.x,ke.y,ke.x+ke.width,ke.y+ke.height])}}let hn=rm(yi);const Tr=[];try{const D=P2(F.map(j=>j.box),[U.width,U.height]);for(const[j,Q,ne,oe]of D){const ue=Dt(U,j,Q,ne-j,oe-Q);if(ue.width<=0||ue.height<=0)continue;const Ee=[];for(const ke of[0]){const ce=ke===0?ue:jt(ue,ke),ae=await bt("laurel",ce);for(const[le,me,be,We]of wr(ae.rows,ae.params,ht.laurel.conf)){const Ue=Zo({x:le,y:me,width:be-le,height:We-me},ke,ue.width,ue.height);Ee.push([Ue.x,Ue.y,Ue.x+Ue.width,Ue.y+Ue.height])}}if(hn=D2(hn,rm(Ee),[j,Q]),H!==null)try{const ke=_o(ue,1280,yr),ce=await H.run({[H.inputNames[0]]:new qe("float32",ke.tensor,[1,3,1280,1280])});for(const[ae,le,me,be]of wr(ce[H.outputNames[0]].data,ke.params,rg))Tr.push([ae+j,le+Q,me+j,be+Q])}catch{}}}catch(D){console.warn("[laurel-containers] failed:",D)}const ms=[...O,...Tr];hn=hn.filter(([D,j,Q,ne])=>!F2((D+Q)/2,(j+ne)/2,ms,F.map(oe=>oe.box)));const zn=await Sx(),Er=await Tx();for(const[D,j,Q,ne]of hn){const oe=Math.trunc((D+Q)/2),ue=Math.trunc((j+ne)/2);if([...W,...R].some(Pe=>(oe-Pe.cx)**2+(ue-Pe.cy)**2<=Pe.r*Pe.r)||!dn(oe,ue))continue;if(Er!==null){const Pe=await Ex(U,[Math.trunc(D),Math.trunc(j),Math.trunc(Q),Math.trunc(ne)],Er);if(Pe!==null&&Pe>=x1)continue}const ke=Math.min(Math.trunc(Q-D),Math.trunc(ne-j)),ce=Math.max(6,Math.trunc(Math.max(Q-D,ne-j)*Fw)),ae=_x(U,oe,ue,ce);let le=null,me=0;const be=new Map;if(ke>=6)for(const Pe of[0,1,2,3]){const He=Pe===0?ae:jt(ae,Pe),[Ze,at]=t_(He,fs);Ze!==null&&(be.set(Ze,Math.max(be.get(Ze)??0,at)),at>me&&(le=Ze,me=at))}le!==null&&me<lx&&(le=null);const We=me;if(zn!==null&&ke>=6){const Pe=Dt(U,Math.trunc(D),Math.trunc(j),Math.trunc(Q-D),Math.trunc(ne-j));let He=null,Ze=0;for(const at of[0,1,2,3]){const wi=at===0?Pe:jt(Pe,at),gs=w1(wi),ys=await zn.run({[zn.inputNames[0]]:new qe("float32",gs,[1,3,Xn,Xn])}),{value:_i,prob:Ut}=_1(ys[zn.outputNames[0]].data);if(Ut>Ze&&(He=_i,Ze=Ut),He!==null&&Ze>=y1)break}He!==null&&Ze>=g1&&(le=He,me=Ze)}const Ue=le!==null&&[...be.entries()].some(([Pe,He])=>Pe!==le&&He>=We-.1),Bn=Je.some(Pe=>oe>=Pe.x0&&oe<=Pe.x1&&ue>=Pe.y0&&ue<=Pe.y1),rt=f.some(Pe=>{const He=Pe.boundingBox;return He!==void 0&&oe>=He.x&&oe<=He.x+He.width&&ue>=He.y&&ue<=He.y+He.height});l.push({value:le,valueRead:le!==null,center:[Math.round((D+Q)/2),Math.round((j+ne)/2)],boundingBox:{x:Math.trunc(D),y:Math.trunc(j),width:Math.trunc(Q-D),height:Math.trunc(ne-j)},confidence:Math.round(me*1e4)/1e4,excluded:Bn||rt,photoIndex:M-1,...Ue?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}x>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${x} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):b>0&&p.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const v=u.guild??0;v!==f.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${v} purple banner(s) counted but ${f.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):f.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+f.map(A=>A.id).join(", ")+" — confirm in the review."});const I=p.filter(A=>A.boundingBox.width===0);I.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${I.map(A=>A.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${p.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),w>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${w} token disc(s) found but not identified — pick them in the review below.`}),c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+c.map(A=>A.id).join(", ")+" — confirm in the review."}),h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${y} from ${h.length} tile(s) by their metal COLOUR (the learned denomination model is server-only) — confirm the total.`});const E=zx(f,p);for(const A of[...G2(p.map(N=>N.id),t),...V2(E.map(N=>N.id),t)])n.push({code:"INCONSISTENT_STATE",message:A.message});const k=l.filter(A=>!A.excluded),S=k.filter(A=>A.valueRead);return{...qx(),wonders:p,guilds:E,progressTokens:c,laurels:l,cardVictoryPoints:{value:S.reduce((A,N)=>A+(N.value??0),0),laurelsKept:k.length,laurelsUnread:k.length-S.length,complete:k.length===S.length},cardCounts:{byFamily:u,source:b>0?"yolo":"none",tuckedExcluded:x,...m.length>0?{suspects:m}:{}},coins:{total:y,confidence:h.length>0?.5:0,source:h.length>0?"local-colour":"none",coins:h}}}const At=1280,Vx=.3,pi=9;let hs=null;function og(){return hs===null&&(hs=(async()=>{try{return(await fetch(`${Ne}pawn_ends.onnx`,{method:"HEAD"})).ok?await Xe.create(`${Ne}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),hs}function Hx(e){const t=At/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(At,At).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,At,At),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,At,At),l=At*At,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function jx(e,t){const{tensor:n,r}=Hx(t),a=(await e.run({[e.inputNames[0]]:new qe("float32",n,[1,3,At,At])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<Vx)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const c=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:c,cy:p})}}return o}async function ps(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:jt(t,w),x=await jx(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const M=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||M>n.score)&&(n={score:M,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const c=((r.cx-u)*o+(r.cy-l)*s)/h*(2*pi),p=Math.min(pi,Math.max(-pi,st(c))),f=Math.min(r.conf,i.conf,a.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,a].map(w=>{const[b,x]=m(w.cx,w.cy);return[st(b),st(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function sg(e,t,n){let r=null;for(const i of n){const a=tw(t.width,t.height,i);if(a===null)continue;const o=Dt(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await ps(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+a.x,l+a.y])})}return r}async function Kx(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, laurel values, wonders, guilds and token identities. The one gap is COIN DENOMINATIONS: the phone decides them by colour alone (the server uses a learned model that coin_denom.onnx would provide, and it is not staged for the browser), so check the coin totals."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(f,m=0)=>{t(f,i>0?Math.min(.99,(a+m)/i):void 0)},s=()=>{a+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await ds(m,f,n,o,s))}let u=null,l=null;if(e.both!==void 0){const f={},m={player:await ds([e.both],"left",n,o,s,"player",f,!0),opponent:await ds([e.both],"right",n,o,s,"opponent",void 0,!0)};if(f.image!==void 0)try{const w=await og();w!==null&&(u=await ps(w,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await sg(w,f.image,f.bandBoxes)))}catch(w){console.warn("[#125] both-photo pawn read failed:",w)}u!==null&&(l=ow(u.ends,f.hulls??[],u.position));const y=l!==null&&!l.ambiguous?sw(l):null;y!==null?(r.left=m[y.left],r.right=m[y.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=m.player,r.right=m.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...W2(f),...q2(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let h={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const f=await cs(e.board),m=await og();if(m!==null){let y=await ps(m,f);if(y===null){const w=await ig();if(w!==null){const b=await bt("banner",f),x=ni(b.rows,b.params,ht.banner.conf),M=await ag(w,f,x);y=await sg(m,f,M)}}y!==null&&(h={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}h.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}else u!==null&&l!==null&&(h={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});const c=h.conflictPawnPosition,p=Math.abs(c)>=pi?{type:"military",winner:c>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:h,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0),nx();const i=performance.now(),a=n==="classify"?await Wx(e.data.file):await Kx(e.data.payload,r);self.postMessage({id:t,ok:!0,result:a,perf:{etapes:rx(),providers:ix(),totalMs:Math.round(performance.now()-i)}})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
