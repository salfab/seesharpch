var I3=Object.defineProperty;var M3=(Gt,Wt,Cn)=>Wt in Gt?I3(Gt,Wt,{enumerable:!0,configurable:!0,writable:!0,value:Cn}):Gt[Wt]=Cn;var iy=(Gt,Wt,Cn)=>M3(Gt,typeof Wt!="symbol"?Wt+"":Wt,Cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyNames,sy=Object.prototype.hasOwnProperty,uy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Q=(e,t)=>()=>(e&&(t=e(e=0)),t),An=(e,t)=>{for(var n in t)Gt(e,n,{get:t[n],enumerable:!0})},ly=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!sy.call(e,i)&&i!==n&&Gt(e,i,{get:()=>t[i],enumerable:!(r=Wt(t,i))||r.enumerable});return e},Vn=e=>ly(Gt({},"__esModule",{value:!0}),e),Hn,Jt,Rn,ks,Cs,As=Q(()=>{Hn=new Map,Jt=[],Rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Hn.get(e);if(r===void 0)Hn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Jt.indexOf(e);i!==-1&&Jt.splice(i,1);for(let a=0;a<Jt.length;a++)if(Hn.get(Jt[a]).priority<=n){Jt.splice(a,0,e);return}Jt.push(e)}return}throw new TypeError("not a valid backend")},ks=async e=>{let t=Hn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Cs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Jt:n,i,a=[],o=new Set;for(let u of r){let l=await ks(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),cy=Q(()=>{As()}),Rs,dy=Q(()=>{Rs="1.27.0"}),bi,Ze,Os=Q(()=>{dy(),bi="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Rs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);bi=e}},get logLevel(){return bi}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),ze,py=Q(()=>{Os(),ze=Ze}),Ns,zs,hy=Q(()=>{Ns=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let d=a*i,p=0,h=d,g=d*2,m=-1;o==="RGBA"?(p=0,h=d,g=d*2,m=d*3):o==="RGB"?(p=0,h=d,g=d*2):o==="RBG"&&(p=0,g=d,h=d*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let _=(e.data[p++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],T=(e.data[g++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+_+","+x+","+T+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},zs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,m=1,y=2,w=3,_=0,x=p,T=p*2,v=-1;s==="RGBA"?(_=0,x=p,T=p*2,v=p*3):s==="RGB"?(_=0,x=p,T=p*2):s==="RBG"&&(_=0,T=p,x=p*2),r=n.createImageData(i,a);for(let E=0;E<a*i;g+=h,m+=h,y+=h,w+=h,E++)r.data[g]=(e.data[_++]-d[0])*l[0],r.data[m]=(e.data[x++]-d[1])*l[1],r.data[y]=(e.data[T++]-d[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),wr,Bs,Ps,Ds,Us,Ls,fy=Q(()=>{$i(),wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,g=1,m=2,y=3,w=0,_=l,x=l*2,T=-1;s==="RGB"&&(p=3,h=0,g=1,m=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(w=0,x=l,_=l*2):u==="BGR"&&(x=0,_=l,w=l*2);for(let v=0;v<l;v++,h+=p,m+=p,g+=p,y+=p)d[w++]=(e[h]+o[0])/a[0],d[_++]=(e[g]+o[1])/a[1],d[x++]=(e[m]+o[2])/a[2],T!==-1&&y!==-1&&(d[T++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new ct("float32",d,[1,4,n,r]):new ct("float32",d,[1,3,n,r])},Bs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=h,s.width=g}else s.tensorFormat="RGBA",s.height=h,s.width=g;p.drawImage(e,0,0),o=p.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(r){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=d,s.width=p,t!==void 0){let h=u();h.width=p,h.height=d;let g=l(h);if(g!=null)g.putImageData(e,0,0),o=g.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,g=e.width;return p.drawImage(e,0,0,g,h),o=p.getImageData(0,0,g,h).data,s.height=h,s.width=g,wr(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((d,p)=>{let h=u(),g=l(h);if(!e||!g)return p();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,g.drawImage(m,0,0,h.width,h.height);let y=g.getImageData(0,0,h.width,h.height);s.height=h.height,s.width=h.width,d(wr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return wr(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Ps=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new ct({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Ds=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ct({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Us=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ct({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ls=(e,t,n)=>new ct({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),pn,jn,_i,Fs,my=Q(()=>{pn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),jn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),_i=!1,Fs=()=>{if(!_i){_i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(pn.set("int64",BigInt64Array),jn.set(BigInt64Array,"int64")),t&&(pn.set("uint64",BigUint64Array),jn.set(BigUint64Array,"uint64")),r?(pn.set("float16",n),jn.set(n,"float16")):pn.set("float16",Uint16Array)}}}),Gs,Ws,gy=Q(()=>{$i(),Gs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ws=(e,t)=>{switch(e.location){case"cpu":return new ct(e.type,e.data,t);case"cpu-pinned":return new ct({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ct({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ct({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ct({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ct,$i=Q(()=>{hy(),fy(),my(),gy(),ct=class{constructor(e,t,n){Fs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=pn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=pn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=jn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Gs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Bs(e,t)}static fromTexture(e,t){return Ps(e,t)}static fromGpuBuffer(e,t){return Ds(e,t)}static fromMLTensor(e,t){return Us(e,t)}static fromPinnedBuffer(e,t,n){return Ls(e,t,n)}toDataURL(e){return Ns(this,e)}toImageData(e){return zs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ws(this,e)}}}),Ue,qs=Q(()=>{$i(),Ue=ct}),br,xi,Rt,bt,hn,fn,Vs=Q(()=>{Os(),br=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},xi=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),br("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Rt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||xi("BEGIN",e)},bt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||xi("END",e)},hn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},fn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),Hs,yy=Q(()=>{As(),qs(),Vs(),Hs=class ay{constructor(t){this.handler=t}async run(t,n,r){Rt(),hn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let h=n[p];(h===null||h instanceof Ue)&&(l=!0,o=!1,i[p]=h)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let d=s[l];d instanceof Ue?u[l]=d:u[l]=new Ue(d.type,d.data,d.dims)}return fn("InferenceSession.run"),bt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Rt(),hn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,h=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(h=t.byteLength-p,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(d,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Cs(o),l=await s.createInferenceSessionHandler(a,u);return fn("InferenceSession.create"),bt(),new ay(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),_r,wy=Q(()=>{yy(),_r=Hs}),by=Q(()=>{}),_y=Q(()=>{}),$y=Q(()=>{}),xy=Q(()=>{}),vy={};An(vy,{InferenceSession:()=>_r,TRACE:()=>br,TRACE_EVENT_BEGIN:()=>hn,TRACE_EVENT_END:()=>fn,TRACE_FUNC_BEGIN:()=>Rt,TRACE_FUNC_END:()=>bt,Tensor:()=>Ue,env:()=>ze,registerBackend:()=>Rn});var mt=Q(()=>{cy(),py(),wy(),qs(),by(),_y(),Vs(),$y(),xy()}),vi=Q(()=>{}),js={};An(js,{default:()=>Ks});var Si,Ti,Ks,Sy=Q(()=>{var e;kf(),mn(),Ai(),Si="ort-wasm-proxy-worker",Ti=((e=globalThis.self)==null?void 0:e.name)===Si,Ti&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Ni(r.wasm).then(()=>{Va(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ha(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Ur(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Ka(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ya(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;Qa(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Ja([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Za(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ks=Ti?null:t=>new Worker(t??dt,{type:"module",name:Si})}),Ys={};An(Ys,{default:()=>Qs});async function Xs(e={}){var ny,ry;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((ny=self.name)==null?void 0:ny.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var $;try{if(t.Yc)throw Error("Session already started");let b=t.Yc={Kd:f[0],errors:[]},I=await c(...f);if(t.Yc!==b)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=b.errors;if(0<C.length){let B=await Promise.all(C);if(B=B.filter(V=>V),0<B.length)throw Error(B.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let $=t.dd;t.jsepRegisterBuffer=(b,I,C,B)=>$.registerBuffer(b,I,C,B),t.jsepGetBuffer=b=>$.getBuffer(b),t.jsepCreateDownloader=(b,I,C)=>$.createDownloader(b,I,C),t.jsepOnCreateSession=b=>{$.onCreateSession(b)},t.jsepOnReleaseSession=b=>{$.onReleaseSession(b)},t.jsepOnRunStart=b=>$.onRunStart(b),t.Id=(b,I)=>{$.upload(b,I)}}else if(c==="webnn"){let $=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=b=>$.onRunStart(b),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=b=>{$.onReleaseSession(b)},t.webnnCreateMLTensorDownloader=(b,I)=>$.createMLTensorDownloader(b,I),t.webnnRegisterMLTensor=(b,I,C,B)=>$.registerMLTensor(b,I,C,B),t.webnnCreateMLContext=b=>$.createMLContext(b),t.webnnRegisterMLConstant=(b,I,C,B,V,ie)=>$.registerMLConstant(b,I,C,B,V,t.Xc,ie),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let c=f=>(...$)=>{let b=Lt;return $=f(...$),Lt!=b?new Promise((I,C)=>{gs={resolve:I,reject:C}}):$};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(c,f)=>{throw f},d=self.location.href,p="";if(n||r){try{p=new URL(".",d).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async c=>{if(k(c))return new Promise(($,b)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):b(I.status)},I.onerror=b,I.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,g,m,y,w,_,x=console.log.bind(console),T=console.error.bind(console),v=x,E=T,M=!1,k=c=>c.startsWith("file://");function S(){Ge.buffer!=z.buffer&&N()}if(i){let c=function(f){try{var $=f.data,b=$.Sc;if(b==="load"){let I=[];self.onmessage=C=>I.push(C),_=()=>{postMessage({Sc:"loaded"});for(let C of I)c(C);self.onmessage=c};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...B)=>{postMessage({Sc:"callHandler",wd:C,args:B})},C=="print"&&(v=t[C]),C=="printErr"&&(E=t[C]));Ge=$.Od,N(),g=$.Pd,te(),yi()}else if(b==="run"){(function(I){var C=(S(),W)[I+52>>>2>>>0];I=(S(),W)[I+56>>>2>>>0],p0(C,C-I),ve(C)})($.Rc),$s($.Rc,0,0,1,0,0),Se(),hs($.Rc),A||(o0(),A=!0);try{Ve($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(b==="checkMailbox"?A&&ci():b&&(E(`worker: received unknown command ${b}`),E($)))}catch(I){throw s0(),I}};var A=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var z,Y,G,q,O,W,K,X,le,L,P,R=!1;function N(){var c=Ge.buffer;t.HEAP8=z=new Int8Array(c),G=new Int16Array(c),t.HEAPU8=Y=new Uint8Array(c),q=new Uint16Array(c),t.HEAP32=O=new Int32Array(c),t.HEAPU32=W=new Uint32Array(c),K=new Float32Array(c),X=new Float64Array(c),le=new BigInt64Array(c),L=new BigUint64Array(c)}function D(){R=!0,i?_():Zt.sb()}function U(c){throw E(c="Aborted("+c+")"),M=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),w==null||w(c),c}function j(){return{a:{ma:Gv,gb:Fv,g:kt,J:je,f:os,o:ss,h:us,ha:si,b:Ex,T:Ix,Ha:bg,n:Mx,$:vg,Xa:Sg,Da:Tg,Fa:Eg,Ya:Ig,Va:Mg,Oa:kg,Ua:Cg,ka:Ag,Ea:Rg,Ba:Og,Wa:Ng,Ca:zg,bb:kx,ea:Cx,wa:Ax,ua:Ox,da:zx,O:Bx,H:Px,va:Dx,_:Vx,xa:Hx,Ra:jx,za:Yx,Ia:Xx,sa:Qx,fa:Zx,Qa:hs,_a:Jx,R:rv,r:uv,c:ds,hb:lv,y:cv,M:dv,D:pv,l:hv,s:Wg,ib:fv,I:mv,S:gv,j:yv,u:wv,q:bv,k:_v,La:$v,Ma:xv,Na:vv,Ja:jg,Ka:Kg,ta:Yg,db:Tv,ab:Iv,v:Mv,aa:kv,ga:Cv,$a:Ev,W:Av,Za:Rv,Aa:Ov,F:Sv,U:Nv,la:mi,ya:Bv,fb:zv,eb:Pv,Sa:Jg,Ta:e0,Ga:Z,V:t0,ja:n0,Pa:r0,ia:i0,kb:S3,na:b3,lb:v3,oa:w3,G:l3,e:Hv,t:qv,w:Wv,B:n3,mb:m3,K:o3,x:Yv,pa:g3,Y:_3,ba:f3,nb:h3,ob:p3,P:r3,qa:d3,pb:c3,N:s3,Z:y3,d:Vv,A:Kv,m:jv,jb:T3,p:Qv,z:Zv,C:Xv,E:Jv,L:i3,qb:u3,Q:$3,ca:a3,X:x3,rb:t3,ra:e3,i:Uv,a:Ge,cb:_e}}}async function te(){function c(b,I){var C=Zt=b.exports;b={};for(let[B,V]of Object.entries(C))typeof V=="function"?(C=ev(V),b[B]=C):b[B]=V;return Zt=b,Zt=(function(){var B=Zt,V=oe=>$e=>oe($e)>>>0,ie=oe=>()=>oe()>>>0;return(B=Object.assign({},B)).tb=V(B.tb),B.Xb=ie(B.Xb),B.Zb=V(B.Zb),B.lc=V(B.lc),B.mc=ie(B.mc),B.qc=V(B.qc),B})(),pe.push(Zt._b),a0=(b=Zt).tb,o0=b.ub,t._OrtInit=b.vb,t._OrtGetLastError=b.wb,t._OrtCreateSessionOptions=b.xb,t._OrtAppendExecutionProvider=b.yb,t._OrtAddFreeDimensionOverride=b.zb,t._OrtAddSessionConfigEntry=b.Ab,t._OrtReleaseSessionOptions=b.Bb,t._OrtCreateSession=b.Cb,t._OrtReleaseSession=b.Db,t._OrtGetInputOutputCount=b.Eb,t._OrtGetInputOutputMetadata=b.Fb,t._OrtFree=b.Gb,t._OrtCreateTensor=b.Hb,t._OrtGetTensorData=b.Ib,t._OrtReleaseTensor=b.Jb,t._OrtCreateRunOptions=b.Kb,t._OrtAddRunConfigEntry=b.Lb,t._OrtReleaseRunOptions=b.Mb,t._OrtCreateBinding=b.Nb,t._OrtBindInput=b.Ob,t._OrtBindOutput=b.Pb,t._OrtClearBoundOutputs=b.Qb,t._OrtReleaseBinding=b.Rb,t._OrtRunWithBinding=b.Sb,t._OrtRun=b.Tb,t._OrtEndProfiling=b.Ub,t._JsepOutput=b.Vb,t._JsepGetNodeName=b.Wb,gi=b.Xb,Ft=t._free=b.Yb,mr=t._malloc=b.Zb,$s=b.ac,s0=b.bc,u0=b.cc,l0=b.dc,xs=b.ec,c0=b.fc,d0=b.gc,Ee=b.hc,gr=b.ic,p0=b.jc,ve=b.kc,vs=b.lc,Te=b.mc,h0=b.nc,Ss=b.oc,f0=b.pc,m0=b.qc,g0=b.rc,Ts=b.sc,y0=b.tc,w0=b.uc,b0=b.vc,_0=b.wc,$0=b.xc,x0=b.yc,v0=b.zc,S0=b.Ac,T0=b.Bc,E0=b.Cc,I0=b.Dc,M0=b.Ec,k0=b.Fc,C0=b.Gc,A0=b.Hc,R0=b.Ic,O0=b.Jc,N0=b.Kc,z0=b.Lc,B0=b.Mc,P0=b.Nc,D0=b.Pc,U0=b.Qc,L0=b.$c,F0=b.ad,G0=b.fd,W0=b.jd,q0=b.kd,V0=b.ld,H0=b.md,j0=b.nd,K0=b.od,Y0=b.pd,X0=b.qd,Q0=b.vd,Z0=b.Td,J0=b.Ud,ey=b.Vd,ty=b.Wd,g=I,Zt}var f,$=j();return t.instantiateWasm?new Promise(b=>{t.instantiateWasm($,(I,C)=>{b(c(I,C))})}):i?c(new WebAssembly.Instance(g,j()),g):(P??(P=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(b){var I=P;if(!h&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,b)}catch(B){E(`wasm streaming compile failed: ${B}`),E("falling back to ArrayBuffer instantiation")}return(async function(B,V){try{var ie=await(async function(oe){if(!h)try{var $e=await s(oe);return new Uint8Array($e)}catch{}if(oe==P&&h)oe=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(B);return await WebAssembly.instantiate(ie,V)}catch(oe){E(`failed to asynchronously prepare wasm: ${oe}`),U(oe)}})(I,b)})($),c(f.instance,f.module))}class re{constructor(f){iy(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var ge=c=>{c.terminate(),c.onmessage=()=>{}},xe=[],Me=0,Ae=null,ne=c=>{ae.length==0&&(Oe(),me(ae[0]));var f=ae.pop();if(!f)return 6;de.push(f),he[c.Rc]=f,f.Rc=c.Rc;var $={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage($,c.rd),0},ee=0,J=(c,f,...$)=>{var b,I=16*$.length,C=Te(),B=vs(I),V=B>>>3;for(b of $)typeof b=="bigint"?((S(),le)[V++>>>0]=1n,(S(),le)[V++>>>0]=b):((S(),le)[V++>>>0]=0n,(S(),X)[V++>>>0]=b);return c=u0(c,0,I,B,f),ve(C),c};function _e(c){if(i)return J(0,1,c);if(m=c,!(0<ee)){for(var f of de)ge(f);for(f of ae)ge(f);ae=[],de=[],he={},M=!0}l(0,new re(c))}function Fe(c){if(i)return J(1,0,c);Z(c)}var Z=c=>{if(m=c,i)throw Fe(c),"unwind";_e(c)},ae=[],de=[],pe=[],he={},ye=c=>{var f=c.Rc;delete he[f],ae.push(c),de.splice(de.indexOf(c),1),c.Rc=0,l0(f)};function Se(){pe.forEach(c=>c())}var me=c=>new Promise(f=>{c.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=gi()){var B=he[C.Zc];B?B.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?ci():I==="spawnThread"?ne(C):I==="cleanupThread"?li(()=>{ye(he[C.Nd])}):I==="loaded"?(c.loaded=!0,f(c)):C.target==="setimmediate"?c.postMessage(C):I==="uncaughtException"?c.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&E(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,b=[];for($ of[])t.propertyIsEnumerable($)&&b.push($);c.postMessage({Sc:"load",xd:b,Od:Ge,Pd:g})});function Oe(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ae.push(c)}var Ge,Ve=(c,f)=>{ee=0,c=Ts(c,f),0<ee?m=c:xs(c)},We=[],rt=0;function kt(c){var f=new Ct(c>>>=0);return(S(),z)[f.Tc+12>>>0]==0&&(Ye(f,!0),rt--),yt(f,!1),We.push(f),m0(c)}var st=0,je=()=>{Ee(0,0);var c=We.pop();h0(c.cd),st=0};function Ye(c,f){f=f?1:0,(S(),z)[c.Tc+12>>>0]=f}function yt(c,f){f=f?1:0,(S(),z)[c.Tc+13>>>0]=f}class Ct{constructor(f){this.cd=f,this.Tc=f-24}}var Xt=c=>{var f=st;if(!f)return gr(0),0;var $=new Ct(f);(S(),W)[$.Tc+16>>>2>>>0]=f;var b=(S(),W)[$.Tc+4>>>2>>>0];if(!b)return gr(0),f;for(var I of c){if(I===0||I===b)break;if(f0(I,b,$.Tc+16))return gr(I),f}return gr(b),f};function os(){return Xt([])}function ss(c){return Xt([c>>>0])}function us(c,f,$,b){return Xt([c>>>0,f>>>0,$>>>0,b>>>0])}var si=()=>{var c=We.pop();c||U("no exception to throw");var f=c.cd;throw(S(),z)[c.Tc+13>>>0]==0&&(We.push(c),yt(c,!0),Ye(c,!1),rt++),Ss(f),st=f};function Ex(c,f,$){var b=new Ct(c>>>=0);throw f>>>=0,$>>>=0,(S(),W)[b.Tc+16>>>2>>>0]=0,(S(),W)[b.Tc+4>>>2>>>0]=f,(S(),W)[b.Tc+8>>>2>>>0]=$,Ss(c),rt++,st=c}var Ix=()=>rt;function wg(c,f,$,b){return i?J(2,1,c,f,$,b):bg(c,f,$,b)}function bg(c,f,$,b){if(c>>>=0,f>>>=0,$>>>=0,b>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?wg(c,f,$,b):(c={Ld:$,Rc:c,bd:b,rd:I},i?(c.Sc="spawnThread",postMessage(c,I),0):ne(c))}function Mx(c){throw st||(st=c>>>0),st}var _g=globalThis.TextDecoder&&new TextDecoder,$g=(c,f,$,b)=>{if($=f+$,b)return $;for(;c[f]&&!(f>=$);)++f;return f},xg=(c,f=0,$,b)=>{if(16<($=$g(c,f>>>=0,$,b))-f&&c.buffer&&_g)return _g.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,$):c.slice(f,$));for(b="";f<$;){var I=c[f++];if(128&I){var C=63&c[f++];if((224&I)==192)b+=String.fromCharCode((31&I)<<6|C);else{var B=63&c[f++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|B:(7&I)<<18|C<<12|B<<6|63&c[f++])?b+=String.fromCharCode(I):(I-=65536,b+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else b+=String.fromCharCode(I)}return b},Ke=(c,f,$)=>(c>>>=0)?xg((S(),Y),c,f,$):"";function vg(c,f,$){return i?J(3,1,c,f,$):0}function Sg(c,f){if(i)return J(4,1,c,f)}function Tg(c,f){if(i)return J(5,1,c,f)}function Eg(c,f,$){if(i)return J(6,1,c,f,$)}function Ig(c,f,$){return i?J(7,1,c,f,$):0}function Mg(c,f){if(i)return J(8,1,c,f)}function kg(c,f,$){if(i)return J(9,1,c,f,$)}function Cg(c,f,$,b){if(i)return J(10,1,c,f,$,b)}function Ag(c,f,$,b){if(i)return J(11,1,c,f,$,b)}function Rg(c,f,$,b){if(i)return J(12,1,c,f,$,b)}function Og(c){if(i)return J(13,1,c)}function Ng(c,f){if(i)return J(14,1,c,f)}function zg(c,f,$){if(i)return J(15,1,c,f,$)}var kx=()=>U(""),Ut=c=>{c>>>=0;for(var f="";;){var $=(S(),Y)[c++>>>0];if(!$)return f;f+=String.fromCharCode($)}},ls={},cs={},qn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Qt(c,f,$={}){return(function(b,I,C={}){var B=I.name;if(!b)throw new qn(`type "${B}" must have a positive integer typeid pointer`);if(cs.hasOwnProperty(b)){if(C.yd)return;throw new qn(`Cannot register type '${B}' twice`)}cs[b]=I,ls.hasOwnProperty(b)&&(I=ls[b],delete ls[b],I.forEach(V=>V()))})(c,f,$)}var Bg=(c,f,$)=>{switch(f){case 1:return $?b=>(S(),z)[b>>>0]:b=>(S(),Y)[b>>>0];case 2:return $?b=>(S(),G)[b>>>1>>>0]:b=>(S(),q)[b>>>1>>>0];case 4:return $?b=>(S(),O)[b>>>2>>>0]:b=>(S(),W)[b>>>2>>>0];case 8:return $?b=>(S(),le)[b>>>3>>>0]:b=>(S(),L)[b>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function Cx(c,f,$,b,I){c>>>=0,$>>>=0,f=Ut(f>>>0);let C=B=>B;if(b=b===0n){let B=8*$;C=V=>BigInt.asUintN(B,V),I=C(I)}Qt(c,{name:f,Oc:C,Vc:(B,V)=>(typeof V=="number"&&(V=BigInt(V)),V),Uc:Bg(f,$,!b),Wc:null})}function Ax(c,f,$,b){Qt(c>>>=0,{name:f=Ut(f>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:b},Uc:function(I){return this.Oc((S(),Y)[I>>>0])},Wc:null})}var Pg=[],Mn=[0,1,,1,null,1,!0,1,!1,1];function ds(c){9<(c>>>=0)&&--Mn[c+1]===0&&(Mn[c]=void 0,Pg.push(c))}var wt=c=>{if(!c)throw new qn(`Cannot use deleted val. handle = ${c}`);return Mn[c]},At=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Pg.pop()||Mn.length;return Mn[f]=c,Mn[f+1]=1,f}};function ps(c){return this.Oc((S(),W)[c>>>2>>>0])}var Rx={name:"emscripten::val",Oc:c=>{var f=wt(c);return ds(c),f},Vc:(c,f)=>At(f),Uc:ps,Wc:null};function Ox(c){return Qt(c>>>0,Rx)}var Nx=(c,f)=>{switch(f){case 4:return function($){return this.Oc((S(),K)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),X)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function zx(c,f,$){$>>>=0,Qt(c>>>=0,{name:f=Ut(f>>>0),Oc:b=>b,Vc:(b,I)=>I,Uc:Nx(f,$),Wc:null})}function Bx(c,f,$,b,I){c>>>=0,$>>>=0,f=Ut(f>>>0);let C=V=>V;if(b===0){var B=32-8*$;C=V=>V<<B>>>B,I=C(I)}Qt(c,{name:f,Oc:C,Vc:(V,ie)=>ie,Uc:Bg(f,$,b!==0),Wc:null})}function Px(c,f,$){function b(C){var B=(S(),W)[C>>>2>>>0];return C=(S(),W)[C+4>>>2>>>0],new I((S(),z).buffer,C,B)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Qt(c>>>=0,{name:$=Ut($>>>0),Oc:b,Uc:b},{yd:!0})}var ln=(c,f,$)=>{var b=(S(),Y);if(f>>>=0,0<$){var I=f;$=f+$-1;for(var C=0;C<c.length;++C){var B=c.codePointAt(C);if(127>=B){if(f>=$)break;b[f++>>>0]=B}else if(2047>=B){if(f+1>=$)break;b[f++>>>0]=192|B>>6,b[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=$)break;b[f++>>>0]=224|B>>12,b[f++>>>0]=128|B>>6&63,b[f++>>>0]=128|63&B}else{if(f+3>=$)break;b[f++>>>0]=240|B>>18,b[f++>>>0]=128|B>>12&63,b[f++>>>0]=128|B>>6&63,b[f++>>>0]=128|63&B,C++}}b[f>>>0]=0,c=f-I}else c=0;return c},ui=c=>{for(var f=0,$=0;$<c.length;++$){var b=c.charCodeAt($);127>=b?f++:2047>=b?f+=2:55296<=b&&57343>=b?(f+=4,++$):f+=3}return f};function Dx(c,f){Qt(c>>>=0,{name:f=Ut(f>>>0),Oc($){var b=(S(),W)[$>>>2>>>0];return b=Ke($+4,b,!0),Ft($),b},Vc($,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var I=typeof b=="string";if(!(I||ArrayBuffer.isView(b)&&b.BYTES_PER_ELEMENT==1))throw new qn("Cannot pass non-string to std::string");var C=I?ui(b):b.length,B=mr(4+C+1),V=B+4;return(S(),W)[B>>>2>>>0]=C,I?ln(b,V,C+1):(S(),Y).set(b,V>>>0),$!==null&&$.push(Ft,B),B},Uc:ps,Wc($){Ft($)}})}var Dg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ux=(c,f,$)=>{if(c>>>=1,16<(f=$g((S(),q),c,f/2,$))-c&&Dg)return Dg.decode((S(),q).slice(c,f));for($="";c<f;++c){var b=(S(),q)[c>>>0];$+=String.fromCharCode(b)}return $},Lx=(c,f,$)=>{if($??($=2147483647),2>$)return 0;var b=f;$=($-=2)<2*c.length?$/2:c.length;for(var I=0;I<$;++I){var C=c.charCodeAt(I);(S(),G)[f>>>1>>>0]=C,f+=2}return(S(),G)[f>>>1>>>0]=0,f-b},Fx=c=>2*c.length,Gx=(c,f,$)=>{var b="";c>>>=2;for(var I=0;!(I>=f/4);I++){var C=(S(),W)[c+I>>>0];if(!C&&!$)break;b+=String.fromCodePoint(C)}return b},Wx=(c,f,$)=>{if(f>>>=0,$??($=2147483647),4>$)return 0;var b=f;$=b+$-4;for(var I=0;I<c.length;++I){var C=c.codePointAt(I);if(65535<C&&I++,(S(),O)[f>>>2>>>0]=C,(f+=4)+4>$)break}return(S(),O)[f>>>2>>>0]=0,f-b},qx=c=>{for(var f=0,$=0;$<c.length;++$)65535<c.codePointAt($)&&$++,f+=4;return f};function Vx(c,f,$){if(c>>>=0,f>>>=0,$=Ut($>>>=0),f===2)var b=Ux,I=Lx,C=Fx;else b=Gx,I=Wx,C=qx;Qt(c,{name:$,Oc:B=>{var V=(S(),W)[B>>>2>>>0];return V=b(B+4,V*f,!0),Ft(B),V},Vc:(B,V)=>{if(typeof V!="string")throw new qn(`Cannot pass non-string to C++ string type ${$}`);var ie=C(V),oe=mr(4+ie+f);return(S(),W)[oe>>>2>>>0]=ie/f,I(V,oe+4,ie+f),B!==null&&B.push(Ft,oe),oe},Uc:ps,Wc(B){Ft(B)}})}function Hx(c,f){Qt(c>>>=0,{zd:!0,name:f=Ut(f>>>0),Oc:()=>{},Vc:()=>{}})}function jx(c){$s(c>>>0,!r,1,!n,131072,!1),Se()}var li=c=>{if(!M)try{if(c(),!(0<ee))try{i?gi()&&xs(m):Z(m)}catch(f){f instanceof re||f=="unwind"||l(0,f)}}catch(f){f instanceof re||f=="unwind"||l(0,f)}},Kx=!Atomics.waitAsync||((ry=globalThis.navigator)==null?void 0:ry.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function hs(c){c>>>=0,Kx||(Atomics.waitAsync((S(),O),c>>>2,c).value.then(ci),c+=128,Atomics.store((S(),O),c>>>2,1))}var ci=()=>li(()=>{var c=gi();c&&(hs(c),d0())});function Yx(c,f){(c>>>=0)==f>>>0?setTimeout(ci):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=he[c])&&c.postMessage({Sc:"checkMailbox"})}var fs=[];function Xx(c,f,$,b,I){for(f>>>=0,I>>>=0,fs.length=0,$=I>>>3,b=I+b>>>3;$<b;){var C;C=(S(),le)[$++>>>0]?(S(),le)[$++>>>0]:(S(),X)[$++>>>0],fs.push(C)}return(f?Es[f]:Lv[c])(...fs)}var Qx=()=>{ee=0};function Zx(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):ye(he[c])}function Jx(c){}var di=c=>{try{c()}catch(f){U(f)}};function ev(c){var f=(...$)=>{pi.push(c);try{return c(...$)}finally{M||(pi.pop(),Lt&&cn===1&&pi.length===0&&(cn=0,ee+=1,di(J0),typeof Fibers<"u"&&Fibers.Zd()))}};return Fg.set(c,f),f}var cn=0,Lt=null,Ug=0,pi=[],ms=new Map,Lg=new Map,Fg=new Map,tv=0,gs=null,nv=[],Gg=c=>(function(f){if(!M){if(cn===0){var $=!1,b=!1;f((I=0)=>{if(!M&&(Ug=I,$=!0,b)){cn=2,di(()=>ey(Lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var ie=(S(),O)[Lt+8>>>2>>>0];return ie=Lg.get(ie),ie=Fg.get(ie),--ee,ie()})()}catch(ie){C=ie,I=!0}var B=!1;if(!Lt){var V=gs;V&&(gs=null,(I?V.reject:V.resolve)(C),B=!0)}if(I&&!B)throw C}}),b=!0,$||(cn=1,Lt=(function(){var I=mr(65548),C=I+12;if((S(),W)[I>>>2>>>0]=C,(S(),W)[I+4>>>2>>>0]=C+65536,C=pi[0],!ms.has(C)){var B=tv++;ms.set(C,B),Lg.set(B,C)}return C=ms.get(C),(S(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),di(()=>Z0(Lt)))}else cn===2?(cn=0,di(ty),Ft(Lt),Lt=null,nv.forEach(li)):U(`invalid state: ${cn}`);return Ug}})(f=>{c().then(f)});function rv(c){return c>>>=0,Gg(async()=>{var f=await wt(c);return At(f)})}var ys=[],iv=c=>{var f=ys.length;return ys.push(c),f},av=(c,f)=>{for(var $=Array(c),b=0;b<c;++b){var I=b,C=(S(),W)[f+4*b>>>2>>>0],B=cs[C];if(B===void 0)throw c=`parameter ${b}`,C=a0(C),f=Ut(C),Ft(C),new qn(`${c} has unknown type ${f}`);$[I]=B}return $},ov=(c,f,$)=>{var b=[];return c=c(b,$),b.length&&((S(),W)[f>>>2>>>0]=At(b)),c},sv={},hi=c=>{var f=sv[c];return f===void 0?Ut(c):f};function uv(c,f,$){var[b,...I]=av(c,f>>>0);f=b.Vc.bind(b);var C=I.map(ie=>ie.Uc.bind(ie));c--;var B={toValue:wt};switch(c=C.map((ie,oe)=>{var $e=`argFromPtr${oe}`;return B[$e]=ie,`${$e}(args${oe?"+"+8*oe:""})`}),$){case 0:var V="toValue(handle)";break;case 2:V="new (toValue(handle))";break;case 3:V="";break;case 1:B.getStringOrSymbol=hi,V="toValue(handle)[getStringOrSymbol(methodName)]"}return V+=`(${c})`,b.zd||(B.toReturnWire=f,B.emval_returnValue=ov,V=`return emval_returnValue(toReturnWire, destructorsRef, ${V})`),V=`return function (handle, methodName, destructorsRef, args) {
  ${V}
  }`,$=new Function(Object.keys(B),V)(...Object.values(B)),V=`methodCaller<(${I.map(ie=>ie.name)}) => ${b.name}>`,iv(Object.defineProperty($,"name",{value:V}))}function lv(c,f){return f>>>=0,(c=wt(c>>>0))==wt(f)}function cv(c){return(c>>>=0)?(c=hi(c),At(globalThis[c])):At(globalThis)}function dv(c){return c=hi(c>>>0),At(t[c])}function pv(c,f){return f>>>=0,c=wt(c>>>0),f=wt(f),At(c[f])}function hv(c){9<(c>>>=0)&&(Mn[c+1]+=1)}function Wg(c,f,$,b,I){return ys[c>>>0](f>>>0,$>>>0,b>>>0,I>>>0)}function fv(c,f,$,b,I){return Wg(c>>>0,f>>>0,$>>>0,b>>>0,I>>>0)}function mv(){return At([])}function gv(c){c=wt(c>>>0);for(var f=Array(c.length),$=0;$<c.length;$++)f[$]=c[$];return At(f)}function yv(c){return At(hi(c>>>0))}function wv(){return At({})}function bv(c){for(var f=wt(c>>>=0);f.length;){var $=f.pop();f.pop()($)}ds(c)}function _v(c,f,$){f>>>=0,$>>>=0,c=wt(c>>>0),f=wt(f),$=wt($),c[f]=$}function $v(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(S(),O)[f>>>2>>>0]=c.getUTCSeconds(),(S(),O)[f+4>>>2>>>0]=c.getUTCMinutes(),(S(),O)[f+8>>>2>>>0]=c.getUTCHours(),(S(),O)[f+12>>>2>>>0]=c.getUTCDate(),(S(),O)[f+16>>>2>>>0]=c.getUTCMonth(),(S(),O)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(S(),O)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[f+28>>>2>>>0]=c}var qg=c=>c%4==0&&(c%100!=0||c%400==0),Vg=[0,31,60,91,121,152,182,213,244,274,305,335],Hg=[0,31,59,90,120,151,181,212,243,273,304,334];function xv(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(S(),O)[f>>>2>>>0]=c.getSeconds(),(S(),O)[f+4>>>2>>>0]=c.getMinutes(),(S(),O)[f+8>>>2>>>0]=c.getHours(),(S(),O)[f+12>>>2>>>0]=c.getDate(),(S(),O)[f+16>>>2>>>0]=c.getMonth(),(S(),O)[f+20>>>2>>>0]=c.getFullYear()-1900,(S(),O)[f+24>>>2>>>0]=c.getDay();var $=(qg(c.getFullYear())?Vg:Hg)[c.getMonth()]+c.getDate()-1|0;(S(),O)[f+28>>>2>>>0]=$,(S(),O)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var b=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=b&&c.getTimezoneOffset()==Math.min(b,$)),(S(),O)[f+32>>>2>>>0]=c}function vv(c){c>>>=0;var f=new Date((S(),O)[c+20>>>2>>>0]+1900,(S(),O)[c+16>>>2>>>0],(S(),O)[c+12>>>2>>>0],(S(),O)[c+8>>>2>>>0],(S(),O)[c+4>>>2>>>0],(S(),O)[c>>>2>>>0],0),$=(S(),O)[c+32>>>2>>>0],b=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(C,I);return 0>$?(S(),O)[c+32>>>2>>>0]=+(I!=C&&B==b):0<$!=(B==b)&&(I=Math.max(C,I),f.setTime(f.getTime()+6e4*((0<$?B:I)-b))),(S(),O)[c+24>>>2>>>0]=f.getDay(),$=(qg(f.getFullYear())?Vg:Hg)[f.getMonth()]+f.getDate()-1|0,(S(),O)[c+28>>>2>>>0]=$,(S(),O)[c>>>2>>>0]=f.getSeconds(),(S(),O)[c+4>>>2>>>0]=f.getMinutes(),(S(),O)[c+8>>>2>>>0]=f.getHours(),(S(),O)[c+12>>>2>>>0]=f.getDate(),(S(),O)[c+16>>>2>>>0]=f.getMonth(),(S(),O)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function jg(c,f,$,b,I,C,B){return i?J(16,1,c,f,$,b,I,C,B):-52}function Kg(c,f,$,b,I,C){if(i)return J(17,1,c,f,$,b,I,C)}var fr={},Sv=()=>performance.timeOrigin+performance.now();function Yg(c,f){if(i)return J(18,1,c,f);if(fr[c]&&(clearTimeout(fr[c].id),delete fr[c]),!f)return 0;var $=setTimeout(()=>{delete fr[c],li(()=>c0(c,performance.timeOrigin+performance.now()))},f);return fr[c]={id:$,Yd:f},0}function Tv(c,f,$,b){c>>>=0,f>>>=0,$>>>=0,b>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var B=Math.max(C,I);(S(),W)[c>>>2>>>0]=60*B,(S(),O)[f>>>2>>>0]=+(C!=I),c=(f=V=>{var ie=Math.abs(V);return`UTC${0<=V?"-":"+"}${String(Math.floor(ie/60)).padStart(2,"0")}${String(ie%60).padStart(2,"0")}`})(C),f=f(I),I<C?(ln(c,$,17),ln(f,b,17)):(ln(c,b,17),ln(f,$,17))}var Ev=()=>Date.now();function Iv(c,f,$){return $>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(S(),le)[$>>>3>>>0]=BigInt(c),0):28}var ws=[],Xg=(c,f)=>{ws.length=0;for(var $;$=(S(),Y)[c++>>>0];){var b=$!=105;f+=(b&=$!=112)&&f%8?4:0,ws.push($==112?(S(),W)[f>>>2>>>0]:$==106?(S(),le)[f>>>3>>>0]:$==105?(S(),O)[f>>>2>>>0]:(S(),X)[f>>>3>>>0]),f+=b?8:4}return ws};function Mv(c,f,$){return c>>>=0,f=Xg(f>>>0,$>>>0),Es[c](...f)}function kv(c,f,$){return c>>>=0,f=Xg(f>>>0,$>>>0),Es[c](...f)}var Cv=()=>{};function Av(c,f){return E(Ke(c>>>0,f>>>0))}var Rv=()=>{throw ee+=1,"unwind"};function Ov(){return 4294901760}var Nv=()=>navigator.hardwareConcurrency,kn={},fi=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},Qg=c=>{for(var f of c)(c=fi(f))&&(kn[c]=f)};function zv(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),Qg(c),kn.gd=fi(c[3]),kn.Jd=c,kn.gd}function mi(c){if(!(c=kn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}Ft(mi.hd??0),f=ui(c)+1;var $=mr(f);return $&&ln(c,$,f),mi.hd=$,mi.hd}function Bv(c){c>>>=0;var f=(S(),Y).length;if(c<=f||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var b=f*(1+.2/$);b=Math.min(b,c+100663296);e:{b=(Math.min(4294901760,65536*Math.ceil(Math.max(c,b)/65536))-Ge.buffer.byteLength+65535)/65536|0;try{Ge.grow(b),N();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function Pv(c,f,$){if(c>>>=0,f>>>=0,kn.gd==c)var b=kn.Jd;else(b=Error().stack.toString().split(`
`))[0]=="Error"&&b.shift(),Qg(b);for(var I=3;b[I]&&fi(b[I])!=c;)++I;for(c=0;c<$&&b[c+I];++c)(S(),O)[f+4*c>>>2>>>0]=fi(b[c+I]);return c}var bs,_s={},Zg=()=>{var b;if(!bs){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((b=globalThis.navigator)==null?void 0:b.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in _s)_s[c]===void 0?delete f[c]:f[c]=_s[c];var $=[];for(c in f)$.push(`${c}=${f[c]}`);bs=$}return bs};function Jg(c,f){if(i)return J(19,1,c,f);c>>>=0,f>>>=0;var $,b=0,I=0;for($ of Zg()){var C=f+b;(S(),W)[c+I>>>2>>>0]=C,b+=ln($,C,1/0)+1,I+=4}return 0}function e0(c,f){if(i)return J(20,1,c,f);c>>>=0,f>>>=0;var $=Zg();for(var b of((S(),W)[c>>>2>>>0]=$.length,c=0,$))c+=ui(b)+1;return(S(),W)[f>>>2>>>0]=c,0}function t0(c){return i?J(21,1,c):52}function n0(c,f,$,b){return i?J(22,1,c,f,$,b):52}function r0(c,f,$,b){return i?J(23,1,c,f,$,b):70}var Dv=[null,[],[]];function i0(c,f,$,b){if(i)return J(24,1,c,f,$,b);f>>>=0,$>>>=0,b>>>=0;for(var I=0,C=0;C<$;C++){var B=(S(),W)[f>>>2>>>0],V=(S(),W)[f+4>>>2>>>0];f+=8;for(var ie=0;ie<V;ie++){var oe=c,$e=(S(),Y)[B+ie>>>0],ke=Dv[oe];$e===0||$e===10?((oe===1?v:E)(xg(ke)),ke.length=0):ke.push($e)}I+=V}return(S(),W)[b>>>2>>>0]=I,0}function Uv(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)Oe();xe.push(async()=>{var f=(async function(){if(!i)return Promise.all(ae.map(me))})();Me++,await f,--Me==0&&Ae&&(f=Ae,Ae=null,f())})})(),i||(Ge=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),N()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=c=>ve(c),t.stackAlloc=c=>vs(c),t.setValue=function(c,f,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),z)[c>>>0]=f;break;case"i16":(S(),G)[c>>>1>>>0]=f;break;case"i32":(S(),O)[c>>>2>>>0]=f;break;case"i64":(S(),le)[c>>>3>>>0]=BigInt(f);break;case"float":(S(),K)[c>>>2>>>0]=f;break;case"double":(S(),X)[c>>>3>>>0]=f;break;case"*":(S(),W)[c>>>2>>>0]=f;break;default:U(`invalid type for setValue: ${$}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(S(),z)[c>>>0];case"i16":return(S(),G)[c>>>1>>>0];case"i32":return(S(),O)[c>>>2>>>0];case"i64":return(S(),le)[c>>>3>>>0];case"float":return(S(),K)[c>>>2>>>0];case"double":return(S(),X)[c>>>3>>>0];case"*":return(S(),W)[c>>>2>>>0];default:U(`invalid type for getValue: ${f}`)}},t.UTF8ToString=Ke,t.stringToUTF8=ln,t.lengthBytesUTF8=ui;var a0,o0,gi,Ft,mr,$s,s0,u0,l0,xs,c0,d0,Ee,gr,p0,ve,vs,Te,h0,Ss,f0,m0,g0,Ts,y0,w0,b0,_0,$0,x0,v0,S0,T0,E0,I0,M0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,Zt,Lv=[_e,Fe,wg,vg,Sg,Tg,Eg,Ig,Mg,kg,Cg,Ag,Rg,Og,Ng,zg,jg,Kg,Yg,Jg,e0,t0,n0,r0,i0],Es={1003524:(c,f,$,b,I)=>{if(t===void 0||!t.Xc)return 1;if((c=Ke(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),$=Number($>>>0),b=Number(b>>>0),f+$>c.byteLength)return 3;try{let C=c.subarray(f,f+$);switch(I){case 0:(S(),Y).set(C,b>>>0);break;case 1:t.Qd?t.Qd(b,C):t.Id(b,C);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,$)=>{t.td(c,(S(),Y).subarray(f>>>0,f+$>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,$)=>{t.ed(Number(c),Number(f),Number($),!0)},1004704:(c,f,$)=>{t.ed(Number(c),Number(f),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,$)=>{t.$b("HardSigmoid",c,{alpha:f,beta:$})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,$)=>{t.$b("Clip",c,{min:f,max:$})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,$,b,I)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007283:(c,f,$,b,I)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007457:(c,f,$,b,I)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007631:(c,f,$,b,I)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007806:(c,f,$,b,I)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007980:(c,f,$,b,I)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008153:(c,f,$,b,I)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008326:(c,f,$,b,I)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008503:(c,f,$,b,I)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008683:(c,f,$,b,I)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,$)=>{t.$b("Transpose",c,{perm:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1009040:(c,f,$,b)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:Ke($),format:b?"NHWC":"NCHW"})},1009173:(c,f,$,b)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:Ke($),format:b?"NHWC":"NCHW"})},1009306:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De,dn)=>{t.$b("ConvTranspose",c,{format:ie?"NHWC":"NCHW",autoPad:f,dilations:[$],group:b,kernelShape:[I],pads:[C,B],strides:[V],wIsConst:()=>!!(S(),z)[oe>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:Ke(dn)})},1009739:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[ie>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ke(De)})},1010400:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De,dn)=>{t.$b("ConvTranspose",c,{format:ie?"NHWC":"NCHW",autoPad:f,dilations:[$],group:b,kernelShape:[I],pads:[C,B],strides:[V],wIsConst:()=>!!(S(),z)[oe>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:Ke(dn)})},1010833:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("ConvTranspose",c,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[ie>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ke(De)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("AveragePool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(ie)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("AveragePool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(ie)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("MaxPool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(ie)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De)=>{t.$b("MaxPool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(ie)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013758:(c,f,$,b,I)=>{t.$b("Gemm",c,{alpha:f,beta:$,transA:b,transB:I})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,$,b)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!$,axis:b})},1014024:(c,f,$,b)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!$,axis:b})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,$,b,I)=>{t.$b("Split",c,{axis:f,numOutputs:$,splitSizes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,$,b,I,C,B,V,ie,oe,$e)=>{t.$b("Resize",c,{antialias:f,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],coordinateTransformMode:Ke(I),cubicCoeffA:C,excludeOutside:B,extrapolationValue:V,keepAspectRatioPolicy:Ke(ie),mode:Ke(oe),nearestMode:Ke($e)})},1015056:(c,f,$,b,I,C,B)=>{t.$b("Slice",c,{starts:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[],ends:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015486:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:Ke(f)})},1015734:(c,f,$,b,I)=>{t.$b("Pad",c,{mode:f,value:$,pads:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1015877:(c,f,$,b,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016046:(c,f,$,b,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016215:(c,f,$)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number($)})},1016312:(c,f,$)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:$})},1016402:(c,f,$,b,I)=>{t.$b("GridSample",c,{align_corners:f,mode:Ke($),padding_mode:Ke(b),format:I?"NHWC":"NCHW"})},1016572:(c,f,$,b,I)=>{t.$b("GridSample",c,{align_corners:f,mode:Ke($),padding_mode:Ke(b),format:I?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:Ke(f)})},1016827:(c,f,$,b,I,C,B,V,ie)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C,qkvHiddenSizes:B?Array.from((S(),O).subarray(Number(V)>>>0,Number(V)+B>>>0)):[],pastPresentShareBuffer:!!ie})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De,dn,Is)=>{t.$b("Conv",c,{format:ke?"NHWC":"NCHW",auto_pad:f,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],group:I,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],pads:V?Array.from((S(),O).subarray(Number(V)>>>0,Number(ie)>>>0)):[],strides:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(S(),z)[Number(Be)>>>0],activation:Ke(De),activation_params:dn?Array.from((S(),K).subarray(Number(dn)>>>0,Number(Is)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,$,b,I,C,B,V,ie)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:$,scale:b,softcap:I,doRotary:C,rotaryInterleaved:B,smoothSoftmax:V,localWindowSize:ie})},1018124:(c,f,$,b)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!b})},1018235:(c,f,$,b)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!b})},1018346:(c,f,$,b,I,C)=>{t.$b("MatMulNBits",c,{k:f,n:$,accuracyLevel:b,bits:I,blockSize:C})},1018473:(c,f,$,b,I,C)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,$,b,I)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:$,rotaryEmbeddingDim:b,scale:I})},1018835:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1018937:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1019039:(c,f,$,b)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:$,blockSize:b})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function Fv(c,f,$){return Gg(async()=>{await t.Dd(Number(c),Number(f),Number($))})}function Gv(){return typeof wasmOffsetConverter<"u"}function Wv(c,f,$,b){var I=Te();try{return S0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function qv(c,f,$){var b=Te();try{return _0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;Ee(1,0)}}function Vv(c){var f=Te();try{y0(c)}catch($){if(ve(f),$!==$+0)throw $;Ee(1,0)}}function Hv(c,f){var $=Te();try{return Ts(c,f)}catch(b){if(ve($),b!==b+0)throw b;Ee(1,0)}}function jv(c,f,$){var b=Te();try{g0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;Ee(1,0)}}function Kv(c,f){var $=Te();try{T0(c,f)}catch(b){if(ve($),b!==b+0)throw b;Ee(1,0)}}function Yv(c,f,$,b,I,C,B){var V=Te();try{return x0(c,f,$,b,I,C,B)}catch(ie){if(ve(V),ie!==ie+0)throw ie;Ee(1,0)}}function Xv(c,f,$,b,I,C){var B=Te();try{w0(c,f,$,b,I,C)}catch(V){if(ve(B),V!==V+0)throw V;Ee(1,0)}}function Qv(c,f,$,b){var I=Te();try{v0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function Zv(c,f,$,b,I){var C=Te();try{b0(c,f,$,b,I)}catch(B){if(ve(C),B!==B+0)throw B;Ee(1,0)}}function Jv(c,f,$,b,I,C,B){var V=Te();try{I0(c,f,$,b,I,C,B)}catch(ie){if(ve(V),ie!==ie+0)throw ie;Ee(1,0)}}function e3(c,f,$,b,I,C,B){var V=Te();try{M0(c,f,$,b,I,C,B)}catch(ie){if(ve(V),ie!==ie+0)throw ie;Ee(1,0)}}function t3(c,f,$,b,I,C,B,V){var ie=Te();try{R0(c,f,$,b,I,C,B,V)}catch(oe){if(ve(ie),oe!==oe+0)throw oe;Ee(1,0)}}function n3(c,f,$,b,I){var C=Te();try{return E0(c,f,$,b,I)}catch(B){if(ve(C),B!==B+0)throw B;Ee(1,0)}}function r3(c,f,$){var b=Te();try{return O0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;Ee(1,0)}}function i3(c,f,$,b,I,C,B,V){var ie=Te();try{N0(c,f,$,b,I,C,B,V)}catch(oe){if(ve(ie),oe!==oe+0)throw oe;Ee(1,0)}}function a3(c,f,$,b,I,C,B,V,ie,oe,$e,ke){var Be=Te();try{k0(c,f,$,b,I,C,B,V,ie,oe,$e,ke)}catch(De){if(ve(Be),De!==De+0)throw De;Ee(1,0)}}function o3(c,f,$,b,I,C){var B=Te();try{return C0(c,f,$,b,I,C)}catch(V){if(ve(B),V!==V+0)throw V;Ee(1,0)}}function s3(c,f,$){var b=Te();try{return z0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;return Ee(1,0),0n}}function u3(c,f,$,b,I,C,B,V,ie){var oe=Te();try{$0(c,f,$,b,I,C,B,V,ie)}catch($e){if(ve(oe),$e!==$e+0)throw $e;Ee(1,0)}}function l3(c){var f=Te();try{return B0(c)}catch($){if(ve(f),$!==$+0)throw $;Ee(1,0)}}function c3(c,f){var $=Te();try{return Q0(c,f)}catch(b){if(ve($),b!==b+0)throw b;return Ee(1,0),0n}}function d3(c){var f=Te();try{return P0(c)}catch($){if(ve(f),$!==$+0)throw $;return Ee(1,0),0n}}function p3(c,f,$,b){var I=Te();try{return W0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function h3(c,f,$,b,I){var C=Te();try{return q0(c,f,$,b,I)}catch(B){if(ve(C),B!==B+0)throw B;Ee(1,0)}}function f3(c,f,$,b,I,C){var B=Te();try{return V0(c,f,$,b,I,C)}catch(V){if(ve(B),V!==V+0)throw V;Ee(1,0)}}function m3(c,f,$,b,I,C){var B=Te();try{return H0(c,f,$,b,I,C)}catch(V){if(ve(B),V!==V+0)throw V;Ee(1,0)}}function g3(c,f,$,b,I,C,B,V){var ie=Te();try{return A0(c,f,$,b,I,C,B,V)}catch(oe){if(ve(ie),oe!==oe+0)throw oe;Ee(1,0)}}function y3(c,f,$,b,I){var C=Te();try{return j0(c,f,$,b,I)}catch(B){if(ve(C),B!==B+0)throw B;return Ee(1,0),0n}}function w3(c,f,$,b){var I=Te();try{return K0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function b3(c,f,$,b){var I=Te();try{return Y0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function _3(c,f,$,b,I,C,B,V,ie,oe,$e,ke){var Be=Te();try{return X0(c,f,$,b,I,C,B,V,ie,oe,$e,ke)}catch(De){if(ve(Be),De!==De+0)throw De;Ee(1,0)}}function $3(c,f,$,b,I,C,B,V,ie,oe,$e){var ke=Te();try{F0(c,f,$,b,I,C,B,V,ie,oe,$e)}catch(Be){if(ve(ke),Be!==Be+0)throw Be;Ee(1,0)}}function x3(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De,dn,Is){var E3=Te();try{G0(c,f,$,b,I,C,B,V,ie,oe,$e,ke,Be,De,dn,Is)}catch(Ms){if(ve(E3),Ms!==Ms+0)throw Ms;Ee(1,0)}}function v3(c,f,$){var b=Te();try{return D0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;Ee(1,0)}}function S3(c,f,$){var b=Te();try{return U0(c,f,$)}catch(I){if(ve(b),I!==I+0)throw I;Ee(1,0)}}function T3(c,f,$,b){var I=Te();try{L0(c,f,$,b)}catch(C){if(ve(I),C!==C+0)throw C;Ee(1,0)}}function yi(){if(0<Me)Ae=yi;else if(i)y==null||y(t),D();else{for(var c=xe;0<c.length;)c.shift()(t);0<Me?Ae=yi:(t.calledRun=!0,M||(D(),y==null||y(t)))}}return i||(Zt=await te(),yi()),t.PTR_SIZE=4,R?t:new Promise((c,f)=>{y=c,w=f})}var Qs,Zs,Ty=Q(()=>{var e,t;Qs=Xs,Zs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Zs&&Xs()}),Ei,Ii,Js,dt,eu,$r,tu,nu,Mi,ru,ki,iu,Ci,au,Ai=Q(()=>{vi(),Ei=typeof location>"u"?void 0:location.origin,Ii=self.location.href>"file:"&&self.location.href<"file;",Js=()=>{{if(Ii){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ei).href}return self.location.href}},dt=Js(),eu=()=>{if(dt&&!dt.startsWith("blob:"))return dt.substring(0,dt.lastIndexOf("/")+1)},$r=(e,t)=>{try{let n=t??dt;return(n?new URL(e,n):new URL(e)).origin===Ei}catch{return!1}},tu=(e,t)=>{let n=t??dt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},nu=(e,t)=>`${t??"./"}${e}`,Mi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ru=async e=>(await import(e)).default,ki=(Sy(),Vn(js)).default,iu=async()=>{if(!dt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(dt))return[void 0,ki()];let e=await Mi(dt);return[e,ki(e)]},Ci=(Ty(),Vn(Ys)).default,au=async(e,t,n,r)=>{let i=Ci&&!(e||t);if(i)if(dt)i=$r(dt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ci];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??tu(a,t),s=n&&o&&!$r(o,t),u=s?await Mi(o):o??nu(a,t);return[s?u:void 0,await ru(u)]}}}),Ri,xr,Kn,Oi,ou,su,uu,Ni,Pe,mn=Q(()=>{Ai(),xr=!1,Kn=!1,Oi=!1,ou=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},su=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},uu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ni=async e=>{if(xr)return Promise.resolve();if(Kn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Oi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Kn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!uu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!su())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ou();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[p,h]=await au(s,a,n>1,!!d||!!l),g=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),m.push(new Promise((y,w)=>{let _={numThreads:n};if(d)_.wasmBinary=d,_.locateFile=x=>x;else if(l||a)_.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)_.locateFile=x=>new URL(x,s).href;else if(p){let x=eu();x&&(_.locateFile=T=>x+T)}h(_).then(x=>{Kn=!1,xr=!0,Ri=x,y(),p&&URL.revokeObjectURL(p)},x=>{Kn=!1,Oi=!0,w(x)})})),await Promise.race(m),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(xr&&Ri)return Ri;throw new Error("WebAssembly is not initialized yet.")}}),_t,vr,Ne,zi=Q(()=>{mn(),_t=(e,t)=>{let n=Pe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},vr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")vr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ne=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),lu,Ey=Q(()=>{mn(),zi(),lu=e=>{let t=Pe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=_t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&vr(e.extra,"",new WeakSet,(o,s)=>{let u=_t(o,r),l=_t(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),cu,du,pu,gn,hu,fu,Iy=Q(()=>{mn(),zi(),cu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},du=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},pu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},gn=(e,t,n,r)=>{let i=_t(t,r),a=_t(n,r);Pe()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},hu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",gn(e,"session.disable_quant_qdq","1",n),gn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&gn(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);gn(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=_t(a,n),u=o.length,l=0,d=0;if(u>0){l=Pe()._malloc(u*Pe().PTR_SIZE),n.push(l),d=Pe()._malloc(u*Pe().PTR_SIZE),n.push(d);for(let p=0;p<u;p++)Pe().setValue(l+p*Pe().PTR_SIZE,o[p][0],"*"),Pe().setValue(d+p*Pe().PTR_SIZE,o[p][1],"*")}await Pe()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&Ne(`Can't append execution provider: ${a}.`)}},fu=async e=>{let t=Pe(),n=0,r=[],i=e||{};pu(i);try{let a=cu(i.graphOptimizationLevel??"all"),o=du(i.executionMode??"sequential"),s=typeof i.logId=="string"?_t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?_t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,d),n===0&&Ne("Can't create session options."),i.executionProviders&&await hu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);gn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=_t(p,r);t._OrtAddFreeDimensionOverride(n,g,h)!==0&&Ne(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&vr(i.extra,"",new WeakSet,(p,h)=>{gn(n,p,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),yn,qt,wn,Sr,Tr,Bi,Pi,Di,fe=Q(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},qt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},wn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Sr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Bi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Di=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ui,mu=Q(()=>{vi(),Ui=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gu,yu,wu,bu,Li,_u,Ie,Vt=Q(()=>{fe(),gu=["V","I","W","E","F"],yu=(e,t)=>{console.log(`[${gu[e]},${new Date().toISOString()}]${t}`)},Li=(e,t)=>{wu=e,bu=t},_u=(e,t)=>{let n=Tr(e),r=Tr(wu);n>=r&&yu(n,typeof t=="function"?t():t)},Ie=(...e)=>{bu&&_u(...e)}}),$u,On,F,Er,xu,vu,Su,we=Q(()=>{$u=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},On=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=$u.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(d>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},F=class wi{static size(t){return wi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Er=class yr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)yr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return yr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return yr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(yr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),a[s]=d-a[o],Math.floor((t+d-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},xu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!On.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},vu=-34028234663852886e22,Su=34028234663852886e22}),Fi,Tu=Q(()=>{fe(),Fi=(e,t)=>new(Sr(t))(e)}),Gi,Wi,qi,Eu,Vi,Iu,Hi,ji,Ki,Mu,ku,My=Q(()=>{fe(),Vt(),Gi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Wi=(e,t)=>{if(t==="int32")return e;let n=Gi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Sr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},qi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Eu=1,Vi=()=>Eu++,Iu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Hi=(e,t)=>{let n=Gi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},ji=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Hi(this.dataType,this.tensorShape)}destroy(){Ie("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=qi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Ki=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Iu.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ie("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Hi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Wi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ie("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?qi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Mu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Vi();return this.tensorTrackersById.set(e,new Ki(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ie("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ie("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Vi(),o=new ji({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Ki(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,n)){Ie("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Ie("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new ji({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ku=(...e)=>new Mu(...e)}),Yn,Cu,Au,ky=Q(()=>{fe(),mn(),Tu(),My(),Vt(),Yn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Au=class{constructor(e){this.tensorManager=ku(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Li(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ie("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ie("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ie("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Cu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ie("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Yn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Ie("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Yn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ie("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Fi(n,t)}}registerMLTensor(e,t,n,r){let i=Yn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Ie("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(o){let p=Wi(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ie("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Yn.get(yn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Yi=Q(()=>{}),Xi,Ir,Mr,Ru,Ou,Qi,Zi,Nu,zu,Cy=Q(()=>{Vt(),Yi(),Xi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ir=[],Mr=e=>Math.ceil(Number(e)/16)*16,Ru=e=>{for(let t=0;t<Ir.length;t++){let n=Ir[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ou=1,Qi=()=>Ou++,Zi=async(e,t,n,r)=>{let i=Mr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Nu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Xi)Ir.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Mr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ie("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Mr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Qi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ie("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ru(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Qi(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ie("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ie("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Zi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Xi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ie("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},zu=(...e)=>new Nu(...e)}),Bu,Re,He=Q(()=>{Bu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Bu(e)}),Nn,kr,Xe,nt,ce,qe,Ji,zn,en,ue,Xn,H,se,Pu,ea,Du,Uu,be=Q(()=>{fe(),we(),Nn=64,kr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Xe=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[0]},nt=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[1]},ce=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:F.computeStrides(n)})}),t},qe=e=>e%4===0?4:e%2===0?2:1,Ji=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,zn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,en=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ue=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Xn=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=kr(t,i),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:d,storage:p,tensor:t},g=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,_=`${y}${e}_strides`,x="";for(let R=0;R<o-1;R++)x+=`
    let dim${R} = current / ${ue(_,R,o)};
    let rest${R} = current % ${ue(_,R,o)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(m.offsetToIndices=!0,o<2?R:`o2i_${e}(${R})`),E=[];if(o>=2)for(let R=o-1;R>=0;R--)E.push(`${ue(_,R,o)} * (indices[${R}])`);let M=o<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,k=R=>(m.indicesToOffset=!0,o<2?R:`i2o_${e}(${R})`),S=(...R)=>o===0?"0u":`${h.indices}(${R.map(g).join(",")})`,A=(R,N)=>o<2?`${R}`:`${ue(R,N,o)}`,z=(R,N,D)=>o<2?`${R}=${D};`:`${ue(R,N,o)}=${D};`,Y={},G=(R,N)=>{m.broadcastedIndicesToOffset=!0;let D=`${N.name}broadcastedIndicesTo${e}Offset`;if(D in Y)return`${D}(${R})`;let U=[];for(let j=o-1;j>=0;j--){let te=N.indicesGet("outputIndices",j+N.rank-o);U.push(`${A(_,j)} * (${te} % ${A(w,j)})`)}return Y[D]=`fn ${D}(outputIndices: ${N.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${D}(${R})`},q=(R,N)=>(()=>{if(h.storage===h.value)return`${e}[${R}]=${N};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${N}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),O=R=>(()=>{if(h.storage===h.value)return`${e}[${R}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${R}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${R}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),W=o<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${d} {
    return ${O(`i2o_${e}(indices)`)};
  }`,K=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${R}) -> ${d} {
    return get_${e}ByIndices(${S(N)});
  }`})(),X=(...R)=>{if(R.length!==o)throw new Error(`indices length must be ${o}`);let N=R.map(g).join(",");return o===0?O("0u"):o===1?O(N[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${N})`)},le=R=>o<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),L=o<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${d}) {
    ${q(`i2o_${e}(indices)`,"value")}
  }`,P=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${R}, value: ${d}) {
    set_${e}ByIndices(${S(N)}, value);
  }`})();return{impl:()=>{let R=[],N=!1;return m.offsetToIndices&&(R.push(T),N=!0),m.indicesToOffset&&(R.push(M),N=!0),m.broadcastedIndicesToOffset&&(Object.values(Y).forEach(D=>R.push(D)),N=!0),m.set&&(R.push(P),N=!0),m.setByIndices&&(R.push(L),N=!0),m.get&&(R.push(K),N=!0),m.getByIndices&&(R.push(W),N=!0),!a&&N&&R.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${_} = ${h.indices}(${F.computeStrides(n).join(",")});`),R.join(`
`)},type:h,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:G,indices:S,indicesGet:A,indicesSet:z,set:(...R)=>{if(R.length!==o+1)throw new Error(`indices length must be ${o}`);let N=R[o];if(typeof N!="string")throw new Error("value must be string");let D=R.slice(0,o).map(g).join(",");return o===0?q("0u",N):o===1?q(D[0],N):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${N})`)},setByOffset:q,setByIndices:(R,N)=>o<2?q(R,N):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${N});`),get:X,getByOffset:O,getByIndices:le,usage:r,name:e,strides:_,shape:w,rank:o}},H=(e,t,n,r=1)=>Xn(e,t,n,"input",r),se=(e,t,n,r=1)=>Xn(e,t,n,"output",r),Pu=(e,t,n)=>Xn(e,t,n,"atomicOutput",1),ea=(e,t,n,r=1)=>Xn(e,t,n,"internal",r),Du=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Nn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Uu=(e,t)=>new Du(e,t)}),Lu,ta,Fu,Gu,Wu,qu,pt,Vu,Hu,tn=Q(()=>{fe(),we(),He(),be(),Lu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ta=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Fu=(e,t)=>F.sortBasedOnPerm(e,ta(e.length,t)),Gu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Wu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},qu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},pt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ta(r,t),a=Fu(e.dims,i),o=e.dims,s=a,u=r<2||qu(i,e.dims),l;if(u)return l=m=>{let y=H("input",n,o,4),w=se("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=Wu(e.dims,i),h=F.areEqual(p,[2,3,1]),g=F.areEqual(p,[3,1,2]);if(d.length===2||h||g){o=h?[d[0],d[1]*d[2]]:g?[d[0]*d[1],d[2]]:d,s=[o[1],o[0]];let m=16;return l=y=>{let w=H("a",n,o.length),_=se("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${m+1}>, ${m}>;
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
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...ce(o,s)]}},getShaderSource:l}}return l=m=>{let y=H("a",n,o.length),w=se("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Gu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=F.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ce(o,s)]}},getShaderSource:l}},Vu=(e,t)=>{Lu(e.inputs,t.perm),e.compute(pt(e.inputs[0],t.perm))},Hu=e=>Re({perm:e.perm})}),ju,Ku,Yu,Xu,Qu,Zu,Ju,el,tl,nl,$t,rl,il,al,ol,sl,ul,ll,cl,dl,pl,Ay=Q(()=>{fe(),we(),be(),ra(),tn(),ju={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ku={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Yu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Qu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Zu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Ju=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},el=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},tl=(e,t)=>{let n=[];if(!el(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},nl=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=F.size(a),l=F.size(o),d=H("_A",n[0].dataType,s),p=se("output",i,a),h=64;u===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Yu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${ju[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ku[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Xu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},$t=(e,t,n,r)=>{let i=e.inputs.length===1?n:na(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,m)=>m));let o=F.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=tl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(pt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Qu(s.length,u.dims.length));let[d,p]=Zu(u.dims,s),h=d;i.keepDims&&(h=Ju(d,o)),e.compute(nl(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,p),{inputs:[u]})},rl=(e,t)=>{$t(e,"ReduceMeanShared",t,"mean")},il=(e,t)=>{$t(e,"ReduceL1Shared",t,"l1")},al=(e,t)=>{$t(e,"ReduceL2Shared",t,"l2")},ol=(e,t)=>{$t(e,"ReduceLogSumExpShared",t,"logSumExp")},sl=(e,t)=>{$t(e,"ReduceMaxShared",t,"max")},ul=(e,t)=>{$t(e,"ReduceMinShared",t,"min")},ll=(e,t)=>{$t(e,"ReduceProdShared",t,"prod")},cl=(e,t)=>{$t(e,"ReduceSumShared",t,"sum")},dl=(e,t)=>{$t(e,"ReduceSumSquareShared",t,"sumSquare")},pl=(e,t)=>{$t(e,"ReduceLogSumShared",t,"logSum")}}),xt,hl,Cr,na,vt,fl,ml,gl,yl,wl,bl,_l,$l,xl,vl,St,Sl,Tl,El,Il,Ml,kl,Cl,Al,Rl,Ol,ra=Q(()=>{fe(),we(),He(),be(),Ay(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},hl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Cr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,d=l.length,p=F.normalizeAxes(i,d),h=!s&&p.length===0;l.forEach((y,w)=>{h||p.indexOf(w)>=0?o&&u.push(1):u.push(y)});let g=u.length,m=F.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],_=H("_A",n[0].dataType,d),x=se("output",a,g),T=r(_,x,p),v=T[2];for(let E=0,M=0;E<d;E++)h||p.indexOf(E)>=0?(o&&M++,v=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${_.indicesSet("input_indices",E,`j${E}`)}
                  ${v}
                }`):(w.push(`${_.indicesSet("input_indices",E,x.indicesGet("output_indices",M))};`),M++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${v}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ce(l,u)]})}},na=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:na(i,n);e.compute(Cr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?hl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},fl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},ml=(e,t)=>{xt(e.inputs),vt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},gl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},yl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},wl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},bl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},_l=(e,t)=>{xt(e.inputs),vt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},$l=(e,t)=>{xt(e.inputs),vt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},xl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},vl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},St=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Sl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bl(e,t):rl(e,t)},Tl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):il(e,t)},El=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):al(e,t)},Il=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):ol(e,t)},Ml=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):sl(e,t)},kl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):ul(e,t)},Cl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):ll(e,t)},Al=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):cl(e,t)},Rl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):dl(e,t)},Ol=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):pl(e,t)}}),ia,Nl,zl,aa,Ry=Q(()=>{fe(),He(),ra(),ia=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Nl=(e,t)=>{ia(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},zl=(e,t)=>{ia(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},aa=e=>Re(e)}),Bl,Ar,Pl,Dl,Ul,Qn,Ll,Fl,oa=Q(()=>{fe(),we(),Yi(),be(),Bl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let m=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=m+y,_=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:g,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ar=(e,t,n)=>t&&e?`
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
    `,Pl=(e,t,n,r,i,a,o,s)=>{let u=qe(o?1:a),l=64,d=a/u;d<l&&(l=32);let p=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:d},{type:12,data:p}],g=Xe(e.dataType,u),m=nt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=_=>{let x=se("x",e.dataType,e.dims,u),T=[x],v=o?H("seq_lens",o.dataType,o.dims):void 0;v&&T.push(v);let E=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;E&&T.push(E);let M=nt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(k).declareVariables(...T)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ar(v,E,!1)}
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
        x[offset + i] = ${x.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${g};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},Dl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],p=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=p?[a.batchSize,h,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=qe(a.headSize),_=a.headSize/w,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],E=p&&r&&F.size(r.dims)>0,M=["type","type"];E&&M.push("type"),i&&M.push("type"),s&&M.push("type"),u&&M.push("type");let k=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let S=A=>{let z=H("q",t.dataType,t.dims,w),Y=H("key",n.dataType,n.dims,w),G=[z,Y];if(E){let L=H("past_key",r.dataType,r.dims,w);G.push(L)}i&&G.push(H("attention_bias",i.dataType,i.dims));let q=s?H("seq_lens",s.dataType,s.dims):void 0;q&&G.push(q);let O=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;O&&G.push(O);let W=se("output",t.dataType,d),K=[W];p&&K.push(se("present_key",t.dataType,g,w));let X=nt(1,w),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${z.type.storage}, ${x*x}>;
  ${A.registerUniforms(le).declareVariables(...G,...K)}
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
    ${Ar(q,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
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
          value += ${X}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:k,dispatchGroup:T,programUniforms:v}),getShaderSource:S}},Ul=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,p=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=p?[i.batchSize,h,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=p&&r&&F.size(r.dims)>0,T=["type","type"];x&&T.push("type"),o&&T.push("type"),s&&T.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=M=>{let k=H("probs",t.dataType,t.dims),S=H("v",n.dataType,n.dims),A=[k,S];x&&A.push(H("past_value",r.dataType,r.dims));let z=o?H("seq_lens",o.dataType,o.dims):void 0;o&&A.push(z);let Y=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(Y);let G=[se("output",t.dataType,m)];p&&G.push(se("present_value",t.dataType,g));let q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${M.registerUniforms(q).declareVariables(...A,...G)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ar(z,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:_}),getShaderSource:E}},Qn=(e,t,n,r,i,a,o,s,u,l,d=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),g=h>1?o:void 0,m=h>1?s:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,_=u&&F.size(u.dims)>0?u:void 0,x=[t,n];g&&F.size(g.dims)>0&&x.push(g),_&&x.push(_),d&&x.push(d),p&&x.push(p);let T=e.compute(Dl(h,t,n,g,_,l,y,d,p),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Pl(T,l.batchSize,l.numHeads,y,l.sequenceLength,w,d,p),{inputs:d&&p?[T,d,p]:[T],outputs:[]});let v=[T,r];m&&F.size(m.dims)>0&&v.push(m),d&&v.push(d),p&&v.push(p),e.compute(Ul(h,T,r,m,l,y,d,p),{inputs:v,outputs:h>1?[0,2]:[0]})},Ll=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let h=se("output_q",u[0].dataType,n),g=se("output_k",u[0].dataType,n),m=se("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),_=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${p.registerUniforms(T).declareVariables(y,w,_,h,g,m)}
  ${p.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},Fl=(e,t)=>{let n=Bl(e.inputs,t),[r,i,a]=Ll(e,n);return Qn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Gl,Wl,ql,Vl,Oy=Q(()=>{mt(),fe(),we(),He(),be(),Gl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Wl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?qe(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=F.size(a)/o,l=r,d=l?a.length:a,p=H("x",e[0].dataType,e[0].dims,o),h=H("scale",e[1].dataType,e[1].dims,s),g=H("bias",e[2].dataType,e[2].dims,s),m=H("inputMean",e[3].dataType,e[3].dims,s),y=H("inputVar",e[4].dataType,e[4].dims,s),w=se("y",e[0].dataType,d,o),_=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<h.rank;v++)T+=`cIndices[${v}] = outputIndices[${v}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,g,m,y,w)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ce(a)]:[{type:12,data:u}]})}},ql=e=>Re(e),Vl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ql({...t,outputCount:r});if(ze.webgpu.validateInputContent&&Gl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Wl(n,i))}}),Hl,jl,Kl,Ny=Q(()=>{we(),be(),Hl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jl=e=>{let t=e[0].dims,n=e[0].dims[2],r=F.size(t)/4,i=e[0].dataType,a=H("input",i,t,4),o=H("bias",i,[n],4),s=H("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Kl=e=>{Hl(e.inputs),e.compute(jl(e.inputs))}}),Yl,Ce,Xl,Ql,Zl,Jl,ec,tc,nc,rc,ic,ac,oc,sc,uc,lc,Zn,cc,Rr,dc,pc,hc,fc,mc,gc,yc,wc,bc,_c,$c,xc,vc,Sc,Tc,Ec,sa,Ic,ua,la,Mc,kc,Cc,Ac,Rc,Oc,ca=Q(()=>{fe(),we(),He(),be(),Yl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[s],4),d=se("outputData",r,[s],4),p=[{name:"vec_size",type:"u32"}];return o&&p.push(...o),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ce=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Yl(l,F.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(F.size(l[0].dims)/64/4)},programUniforms:u})}},Xl=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Ql=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},Zl=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},Jl=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},ec=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},tc=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},nc=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},rc=e=>Re(e),ic=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},ac=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},oc=(e,t)=>{let n=t||ac(e.inputs),r=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},sc=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},uc=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},lc=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},Zn=e=>Re(e),cc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rr=(e="f32")=>`
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
}`,dc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Rr(t)))},pc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},hc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},fc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Rr(t)))},mc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},gc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},yc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},wc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},bc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},_c=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},$c=e=>Re(e),xc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},vc=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},Sc=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},Tc=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},Ec=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},sa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ic=e=>{e.compute(Ce(e.inputs[0],"Tanh",sa))},ua=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${sa("v")};
}
`,la=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Mc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",la,ua(t),void 0,e.inputs[0].dataType))},kc=(e,t)=>{let n=nt(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Cc=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},Ac=(e,t)=>`
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
`,Rc=e=>`quick_gelu_impl(${e})`,Oc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",Rc,Ac(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Nc,zc,Bc,zy=Q(()=>{we(),be(),ca(),Nc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=F.size(t)/4,o=Xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Rr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Bc=e=>{Nc(e.inputs),e.compute(zc(e.inputs))}}),Pc,Dc,Tt,Uc,Lc,Fc,Gc,Wc,qc,Vc,Hc,jc,Kc,By=Q(()=>{fe(),we(),be(),Pc=(e,t,n,r,i,a,o,s,u,l,d,p)=>{let h,g;typeof s=="string"?h=g=(x,T)=>`${s}((${x}),(${T}))`:typeof s=="function"?h=g=s:(h=s.scalar,g=s.vector);let m=se("outputData",d,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),_;if(i)if(a){let x=F.size(t)===1,T=F.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?_=m.setByOffset("global_idx",g(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):_=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",g(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",g(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,v,E="")=>{let M=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${T}[${v}] = ${E}(${h(M,k)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,m)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Dc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!F.areEqual(s,u),d=s,p=F.size(s),h=!1,g=!1,m=[l];if(l){let y=On.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),p=F.size(d);let w=F.size(s)===1,_=F.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(_),m.push(x),m.push(T);let v=1;for(let E=1;E<d.length;E++){let M=s[s.length-E],k=u[u.length-E];if(M===k)v*=M;else break}v%4===0?(g=!0,h=!0):(w||_||x||T)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Pc(y,s,u,d,h,l,g,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(d)/4)},...ce(s,u,d)]})}},Tt=(e,t,n,r,i,a)=>{e.compute(Dc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Uc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},Lc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},Fc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Gc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Wc=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},qc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},Vc=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Hc=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},jc=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Kc=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Yc,Xc,Qc,Zc,Jc,ed,Py=Q(()=>{fe(),we(),He(),be(),Yc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Xc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Qc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Zc=(e,t,n,r)=>{let i=F.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],d=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=H(`input${y}`,r,l[y]),u.push("rank"),d.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)d.push(...ce(e[y].dims));d.push(...ce(n));let p=se("output",r,n.length),h=p.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,p)})()}

  ${Xc(a.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Qc(o,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},Jc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=F.normalizeAxis(t.axis,r.length);Yc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>F.size(s.dims)>0);e.compute(Zc(o,i,a,n[0].dataType),{inputs:o})},ed=e=>Re({axis:e.axis})}),bn,_n,$n,da,xn=Q(()=>{fe(),we(),bn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},_n=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},$n=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},da=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[vu,Su];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,td,pa=Q(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},td=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nd,Dy=Q(()=>{nd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Jn,ha,fa=Q(()=>{fe(),we(),be(),xn(),Jn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${ue(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,ue(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},ha=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],d=o[o.length-1],p=qe(l),h=qe(d),g=qe(u),m=F.size(n)/p/g,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),_=[F.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];_n(t,x),x.push(...ce(w,o,s)),y&&x.push(...ce(e[2].dims)),x.push(...ce(_));let T=v=>{let E=ea("batch_dims",e[0].dataType,w.length),M=H("a",e[0].dataType,o.length,h),k=H("b",e[1].dataType,s.length,p),S=se("output",e[0].dataType,_.length,p),A=Xe(S.type.tensor),z=bn(t,S.type.value,A),Y=[M,k],G="";if(y){let W=i?p:1;Y.push(H("bias",e[2].dataType,e[2].dims.length,W)),G=`${i?`value += bias[col / ${W}];`:`value += ${S.type.value}(bias[row + i]);`}`}let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];$n(t,q);let O=()=>{let W=`var a_data: ${M.type.value};`;for(let K=0;K<h;K++)W+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<g;K++){W+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let X=0;X<h;X++)W+=`
            values[${K}] = fma(${k.type.value}(a_data${h===1?"":`[${X}]`}), b_data${X}, values[${K}]);
`}return W};return`
  ${v.registerUniforms(q).registerInternalVariables(E).declareVariables(...Y,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${Jn("a_indices",M,M.rank-2,E.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${Jn("b_indices",k,k.rank-2,E.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${O()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${G}
      ${z}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${g};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:T}}}),rd,id,ma,ga,ad,ya,od,Or,wa=Q(()=>{fe(),we(),be(),xn(),fa(),pa(),rd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,id=(e,t)=>e?`
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
        }`,ma=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:a,p=i?a:u,h=d/t[0],g=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&d%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${d/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
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
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${rd(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
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
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${id(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ga=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ad=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ya=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=i?l:a,h=i?a:l;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],m=p/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${ga(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
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

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ga(i,r)}
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
      ${ad(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${d}>, ${a}>;
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
`},od=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Xe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Jn("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Jn("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Je(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Je(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Or=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),d=r?r.slice(0,-2):n.slice(0,-2),p=F.size(d),h=o[o.length-2],g=o[o.length-1],m=s[s.length-1],y=g%4===0&&m%4===0,w=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],x=[Math.ceil(m/_[0]/w[0]),Math.ceil(h/_[1]/w[1]),Math.ceil(p/_[2]/w[2])],T=y?4:1,v=[...u,h,g/T],E=v.length,M=[...l,g,m/T],k=M.length,S=[p,h,m/T],A=[{type:6,data:h},{type:6,data:m},{type:6,data:g}];_n(t,A),A.push(...ce(d,v,M));let z=["rank","rank"],Y=e.length>2;Y&&(A.push(...ce(e[2].dims)),z.push("rank")),A.push(...ce(S));let G=q=>{let O=d.length,W=ea("batchDims",e[0].dataType,O,1),K=Xe(e[0].dataType),X=H("a",e[0].dataType,E,T),le=H("b",e[1].dataType,k,T),L=se("result",e[0].dataType,S.length,T),P=[X,le];if(Y){let j=i?T:1;P.push(H("bias",e[2].dataType,e[2].dims.length,j))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];$n(t,R);let N=Xe(L.type.tensor),D=bn(t,L.type.value,N),U=od(T,Y,D,[W,X,le,L],i);return`
  ${q.registerUniforms(R).registerInternalVariables(W).declareVariables(...P,L)}
  ${U}
  ${y?ma(w,_,K,W):ya(w,_,K,W)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:G}}}),sd,ud,Uy=Q(()=>{fe(),Vt(),be(),xn(),pa(),Dy(),wa(),sd=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let d=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},h=e?`
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
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",_=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Je(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(o)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Je(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Je(o,l)}(0.0);`,v=e?r&&n?p(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(s)}
    }
    return ${Je(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(s)}
    }
    return ${Je(s,l)}(0.0);`,E=Je(u,l),M=Je(e?o:s,l),k=Je(e?s:o,l),S=bn(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?T:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${td(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ud=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=n[0],h=l?n[2]:n[3],g=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(d%4===0||d%3===0)&&m%4===0,w=l?m:h*g,_=l?h*g:m,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/T[0]),Math.ceil(_/x[1]/T[1]),Math.ceil(p/x[2]/T[2])];Ie("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let E=y?l&&d%4!==0?3:4:1,M=x[1]*T[1],k=x[0]*T[0],S=Math.max(x[0]*E,x[1]),A=r%M===0,z=i%k===0,Y=a%S===0,G=y?[E,4,4]:[1,1,1],q=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];_n(t,q),q.push(...ce(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(q.push(...ce(e[2].dims)),O.push("rank")),q.push(...ce(n));let W=K=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];$n(t,X);let le=y?4:1,L=Xe(e[0].dataType),P=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),N=H("w",e[1].dataType,e[1].dims.length,le),D=[R,N],U=se("result",e[0].dataType,n.length,le);if(o){let j=H("bias",e[2].dataType,e[2].dims.length,le);D.push(j),P+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${nd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(X).declareVariables(...D,U)}
        ${P}
        ${sd(l,A,z,Y,o,t,G[0],G[1],G[2],L)}
        ${y?ma(T,x,L,void 0,!l,S):ya(T,x,L,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${A};${z};${Y};${M};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:q}),getShaderSource:W}}}),ld,ba,er,cd,_a,dd,pd,hd,Ly=Q(()=>{fe(),Vt(),we(),be(),xn(),pa(),ld=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},ba=e=>typeof e=="number"?[e,e,e]:e,er=(e,t)=>t<=1?e:e+(e-1)*(t-1),cd=(e,t,n,r=1)=>{let i=er(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},_a=(e,t,n,r,i)=>{i==null&&(i=cd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},dd=(e,t,n,r,i,a,o,s,u,l)=>{let d,p,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=_a([t,n,r,1],[s,u,l],1,[i,a,o],e);p=m[0],h=m[1],g=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=_a([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);p=m[0],h=m[1],g=m[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(n/a),g=Math.ceil(r/o);let m=(p-1)*i+s-t,y=(h-1)*a+u-n,w=(g-1)*o+l-r,_=Math.floor(m/2),x=m-_,T=Math.floor(y/2),v=y-T,E=Math.floor(w/2),M=w-E;d={top:T,bottom:v,left:E,right:M,front:_,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:g}},pd=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,d,p;if(o==="channelsLast")[s,u,l,d,p]=e;else if(o==="channelsFirst")[s,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${o}`);let[h,,g,m,y]=t,[w,_,x]=ba(n),[T,v,E]=ba(r),M=er(g,T),k=er(m,v),S=er(y,E),{padInfo:A,outDepth:z,outHeight:Y,outWidth:G}=dd(i,u,l,d,w,_,x,M,k,S),q=a?h*p:h,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,q,z,Y,G]:o==="channelsLast"&&(O=[s,z,Y,G,q]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:z,outHeight:Y,outWidth:G,outChannels:q,padInfo:A,strideDepth:w,strideHeight:_,strideWidth:x,filterDepth:g,filterHeight:m,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:T,dilationHeight:v,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},hd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,_)=>_)},l=[Math.ceil(ld(u.x.map(w=>n[w]))/s[0]),1,1];Ie("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=F.size(n),h=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];_n(t,h),h.push(...ce(e[0].dims,e[1].dims));let g=["rank","rank"],m=e.length===3;m&&(h.push(...ce(e[2].dims)),g.push("rank")),h.push(...ce(n));let y=w=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];$n(t,_);let x=1,T=Xe(e[0].dataType),v=H("x",e[0].dataType,e[0].dims.length,d),E=H("W",e[1].dataType,e[1].dims.length,x),M=[v,E],k=se("result",e[0].dataType,n.length,x),S="";if(m){let Y=H("bias",e[2].dataType,e[2].dims.length,x);M.push(Y),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?ue("coords",4,5):ue("coords",1,5)}];
        }`}let A=Je(d,T),z=bn(t,A,T);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(_).declareVariables(...M,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${ue("coords",0,v.rank)};
              let d2 = ${o?ue("coords",v.rank-1,v.rank):ue("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${o?ue("coords",1,v.rank):ue("coords",2,v.rank)},
              ${o?ue("coords",2,v.rank):ue("coords",3,v.rank)},
              ${o?ue("coords",3,v.rank):ue("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?ue("uniforms.x_shape",1,v.rank):ue("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${o?ue("uniforms.x_shape",2,v.rank):ue("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${o?ue("uniforms.x_shape",3,v.rank):ue("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${o?ue("uniforms.x_shape",4,v.rank):ue("uniforms.x_shape",1,v.rank)};
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
              ${z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${d};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),fd,md,Fy=Q(()=>{fe(),we(),be(),xn(),fd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,p=u&&d>=4?qe(l):1,h=F.size(n)/p,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];_n(t,g),g.push(...ce(o,[s[0],s[1],s[2],s[3]/p]));let m=i?["rank","rank","rank"]:["rank","rank"];g.push(...ce([n[0],n[1],n[2],n[3]/p]));let y=w=>{let _=se("output",e[0].dataType,n.length,p),x=Xe(_.type.tensor),T=bn(t,_.type.value,x),v=H("x",e[0].dataType,o.length),E=H("w",e[1].dataType,s.length,p),M=[v,E];i&&M.push(H("b",e[2].dataType,e[2].dims,p));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];$n(t,k);let S=u?`
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

            let xVal = ${v.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(k).declareVariables(...M,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${S}
    ${a}
    ${T}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},md=(e,t,n,r)=>{let i=e.length>2,a=qe(n[3]),o=qe(n[2]),s=F.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],d=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];_n(t,p),p.push(...ce(u,l,d));let h=(o-1)*t.strides[1]+l[1],g=m=>{let y=se("output",e[0].dataType,d.length,a),w=Xe(y.type.tensor),_=bn(t,y.type.value,w),x=H("x",e[0].dataType,u.length,a),T=H("w",e[1].dataType,l.length,a),v=[x,T];i&&v.push(H("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return $n(t,M),`
  ${m.registerUniforms(M).declareVariables(...v,y)}
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

    var x_vals: array<${x.type.value}, ${h}>;
    var values: array<${y.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${E}
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:g}}}),gd,Nr,yd,zr,$a,xa,wd,bd,va,Gy=Q(()=>{we(),Uy(),Ly(),wa(),Fy(),xn(),fa(),tn(),gd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],d=t.slice(2).map((h,g)=>h+(h-1)*(n[g]-1)),p=s.map((h,g)=>h+r[g]+r[g+u]).map((h,g)=>Math.floor((h-d[g]+i[g])/i[g]));return p.splice(0,0,o),p.splice(a?3:1,0,l),p},Nr=[2,3,1,0],yd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},zr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Er.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},$a=e=>{let t=da(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},xa=(e,t,n,r)=>{let i=n.format==="NHWC",a=gd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(pt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),M.push(k)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(md(M,n,a,r),{inputs:M}):e.compute(fd(M,n,a,r),{inputs:M});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],g=a[i?2:3],m=a[i?3:1],y=i&&d===s&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],k,S,A,z=[];if(i){let q=e.kernelCustomData.wT??e.compute(pt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=q),y){let O=s*u*l;k=t[0].reshape([1,M,O]),S=q.reshape([1,O,m]),A=[1,M,m]}else k=t[0].reshape([M,s*u,l]),S=q.reshape([1,l,m]),A=[M,h*g,m];z.push(k),z.push(S)}else k=t[0].reshape([M,l,s*u]),S=t[1].reshape([1,m,l]),A=[M,m,h*g],z.push(S),z.push(k);o&&z.push(t[2]);let Y=A[2],G=z[0].dims[z[0].dims.length-1];Y<8&&G<8?e.compute(ha(z,n,a,A,i,r),{inputs:z}):e.compute(Or(z,n,a,A,i,r),{inputs:z});return}let w=!0,_=e.kernelCustomData.wT??e.compute(pt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let x=[t[0],_];o&&x.push(t[2]);let T=i?h*g:m,v=i?m:h*g,E=d*p*l;e.compute(ud(x,n,a,T,v,E,o,w,r),{inputs:x})},wd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=zr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);xa(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},bd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=zr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=pd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(hd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},va=(e,t)=>{if(yd(e.inputs,t),e.inputs[0].dims.length===3)wd(e,t);else if(e.inputs[0].dims.length===5)bd(e,e.inputs,t);else{let n=zr(t,e.inputs);xa(e,e.inputs,n)}}}),_d,Wy=Q(()=>{fe(),Vt(),we(),be(),_d=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],d=a?qe(u):1,p=a&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/d)*d,g=u-h,m=a?qe(l):1,y=a?l===1?d:m:1,w=F.size(i)/m,_=[Math.ceil(w/64),1,1];Ie("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:T},{type:12,data:v},{type:12,data:E},{type:12,data:M},{type:6,data:k},{type:12,data:h},{type:12,data:u},{type:12,data:l},...ce(e[0].dims,e[1].dims)];r&&(S.push(...ce(e[2].dims)),x.push("rank")),S.push(...ce(i));let A=z=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Xe(e[0].dataType),q=a?1:2,O=a?2:3,W=a?3:1,K=H("W",e[1].dataType,e[1].dims.length,y),X=H("Dy",e[0].dataType,e[0].dims.length,d),le=[X,K];r&&le.push(H("bias",e[2].dataType,[i[W]].length,m));let L=se("result",e[0].dataType,i.length,m),P=()=>{let D="";if(p)d===4?D+=`
        let xValue = ${X.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?D+=`
          dotProd = dotProd + dot(vec4<${G}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(D+=`
          dotProd = dotProd + dot(vec4<${G}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}, ${X.getByOffset("x_offset + 2u")}, ${X.getByOffset("x_offset + 3u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${a?X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):X.get("batch","inputChannel","idyR","idyC")};
        `,d===1)D+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<d;U++)D+=`
            let wValue${U} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return D},R=()=>{if(g===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let D="";if(d===1){D+="dotProd = dotProd";for(let U=0;U<g;U++)D+=`
            + ${X.getByOffset(`x_offset + ${U}`)} * ${K.getByOffset(`w_offset + ${U}`)}`;D+=";"}else if(d===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);D+=`
          let xValue = ${X.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},N=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",W)};
            let r = ${L.indicesGet("outputIndices",q)};
            let c = ${L.indicesGet("outputIndices",O)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${q}]) || fract(dyR) > 0.0 ||
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
                var x_offset = ${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${P()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(Y).declareVariables(...le,L)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${N}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${p}${g}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),$d,xd,vd,Sa,Sd,Td,Ta,Ed,Id,qy=Q(()=>{Wy(),xn(),tn(),$d=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,xd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},vd=(e,t,n,r,i,a,o,s,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let h=e[0],g=t[s?3:1]*i;for(let m=0,y=e.length-d-(s?1:0);m<d;++m,++y){let w=e[y],_=p?w*o[m]:l[m],x=$d(w,o[m],a[m],t[y],n[m],_);xd(x,r,a,m,m+d),p&&l.push(o[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+d])}l.splice(0,0,h),l.splice(s?3:1,0,g)},Sa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}vd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),d},Sd=e=>{let t=da(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:d,outputShape:p,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Td=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ta=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(pt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(_d(a,n,r),{inputs:a})},Ed=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Sa({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Ta(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Id=(e,t)=>{if(Td(e.inputs,t),e.inputs[0].dims.length===3)Ed(e,t);else{let n=Sa(t,e.inputs);Ta(e,e.inputs,n)}}}),Md,kd,Cd,Vy=Q(()=>{fe(),we(),He(),be(),Md=(e,t,n,r)=>{let i=F.size(t),a=t.length,o=H("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=F.normalizeAxis(u,a),d=p=>{let h=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,g=ue("uniforms.input_shape","uniforms.axis",a),m=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?g:h+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ce(t,t)]}),getShaderSource:d}},kd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Md(r,n,i,t),{inputs:[0]})},Cd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Ad,Rd,Od,Nd,zd,Hy=Q(()=>{fe(),we(),He(),be(),Ad=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Rd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Od=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=d?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=d?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(o),h=p.dims.length,g=e.dataType,m=H("a",g,h),y=se("output",g,h),w=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Rd(s,h,m,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=F.size(x),v=p.dims,E=F.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ce(v,E)]}},getShaderSource:w}},Nd=(e,t)=>{Ad(e.inputs),e.compute(Od(e.inputs[0],t))},zd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Br,tr,Ea,Bd,Pd,Dd,Ud,Ia,Ld,Fd,Gd,jy=Q(()=>{fe(),we(),He(),be(),Br="[a-zA-Z]|\\.\\.\\.",tr="("+Br+")+",Ea="^"+tr+"$",Bd="("+tr+",)*"+tr,Pd="^"+Bd+"$",Dd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Ud=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Pd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ea)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(tr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Br,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ea))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Br,"g")),l=new Dd(r);return u==null||u.forEach((d,p)=>{if(d==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+h),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<o.length;g++){let m=String.fromCharCode(48+g);l.addSymbol(m,p+g),this.addSymbol(m,n[s++],r)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[s++],r)}),l}},Ia=e=>e+"_max",Ld=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,d)=>H(`input${d}`,t,l)),a=F.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",m=[],y=[],w=[],_=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,E)=>{var M;if(n.rhs.symbolToIndices.has(E)){let k=(M=n.rhs.symbolToIndices.get(E))==null?void 0:M[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let z=S.symbolToIndices.get(E);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(Y=>{d.push(`${i[A].indicesSet(`input${A}Indices`,Y,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(E);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(z=>{m.push(`${i[S].indicesSet(`input${S}Indices`,z,`${E}`)}`)}),_.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ia(E)}; ${E}++) {`),w.push("}")});let T=x?[...d,`let sum = ${i.map((v,E)=>v.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...d,h,...y,...m,p,..._,g,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ia(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(p=>n.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=n.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let d=e.map((p,h)=>[...ce(p)]).reduce((p,h)=>p.concat(h),l);return d.push(...ce(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}},getShaderSource:u}},Fd=(e,t)=>{let n=new Ud(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Ld(i,e.inputs[0].dataType,n,r))},Gd=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Wd,Ma,qd,Vd,Hd,Ky=Q(()=>{fe(),we(),be(),Wd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ma=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},qd=(e,t)=>e.length>t.length?Ma(e,t):Ma(t,e),Vd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=qd(t,n),i=e[0].dataType,a=i===9||F.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(F.size(r)/s),l=p=>{let h=H("input",i,t.length,o),g=se("output",i,r.length,s),m;if(i===9){let y=(w,_,x="")=>`
          let outputIndices${_} = ${g.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${h.broadcastedIndicesToOffset(`outputIndices${_}`,g)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${w}[${_}] = ${x}(${h.getByOffset(`index${_}`)}[component${_}]);
        `;m=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${o}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...ce(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Hd=e=>{Wd(e.inputs),e.compute(Vd(e.inputs),{inputs:[0]})}}),jd,Kd,Yy=Q(()=>{fe(),we(),be(),ca(),jd=e=>{let t=e[0].dataType,n=F.size(e[0].dims),r=F.size(e[1].dims),i=r%4===0,a=o=>{let s=H("x",t,[1],4),u=H("bias",t,[1],4),l=se("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${u.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(d).declareVariables(s,u,l)}

    ${ua(nt(t))}

    ${o.mainStart(Nn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",la("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Nn/4)}})}},Kd=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Mc(e):e.compute(jd(e.inputs))}}),Yd,Xd,Qd,Zd,Xy=Q(()=>{fe(),we(),He(),be(),Yd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Xd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=F.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(F.size(o)/u),d=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...ce(e[0].dims,e[1].dims,o)],p=h=>{let g=H("data",e[0].dataType,e[0].dims.length,u),m=H("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),w=x=>{let T=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let E=0;E<T;E++)v+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${g.type.indices};
        `;for(let E=0,M=0;E<i;E++)E===a?(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return v},_;if(e[0].dataType===9){let x=(T,v,E="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${g.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${T}[${v}] = ${E}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},Qd=e=>Re({axis:e.axis}),Zd=(e,t)=>{let n=e.inputs;Yd(n),e.compute(Xd(e.inputs,t))}}),Jd,ep,tp,Qy=Q(()=>{fe(),we(),be(),Jd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],d=[a];l.push(...ce(t.dims,d));let p=h=>{let g=H("indices_data",t.dataType,t.dims.length),m=se("input_slice_offsets_data",12,1,1),y=[g,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},ep=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=F.sizeToDimension(a,a.length-1),u=F.sizeFromDimension(r,t.batchDims+o),l=F.sizeToDimension(r,t.batchDims),d=F.sizeFromDimension(r,t.batchDims),p=s/l,h=new Array(o),g=u;for(let v=0;v<o;++v)h[o-1-v]=g,g*=r[t.batchDims+o-1-v];let m=Jd(e,n[1],h,t.batchDims,r,s,p,d,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),_=F.size(w),x=[{type:12,data:_},{type:12,data:u},...ce(n[0].dims,m.dims,w)],T=v=>{let E=H("data",n[0].dataType,n[0].dims.length),M=H("slice_offsets",12,m.dims.length),k=se("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],m]})},tp=e=>({batchDims:e.batch_dims,cacheKey:""})}),np,rp,ip,ap,Zy=Q(()=>{fe(),we(),He(),be(),np=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},rp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=F.normalizeAxis(t.gatherAxis,i),o=F.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=F.size(s),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...ce(...e.map((g,m)=>g.dims),s)],h=g=>{let m=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),_=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),T=[m,y,w];_&&T.push(_);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(v).declareVariables(...T,x)}
        ${g.mainStart()}
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
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${nt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,m)=>m!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},ip=(e,t)=>{let n=e.inputs;np(n,t),e.compute(rp(e.inputs,t))},ap=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),op,sp,up,lp,Jy=Q(()=>{fe(),we(),He(),be(),op=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},sp=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=F.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),d=F.size(l),p=H("input",r,i),h=H("indicesInput",o,a.length),g=se("output",r,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:s}];return m.push(...ce(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},up=e=>Re({axis:e.axis}),lp=(e,t)=>{let n=e.inputs;op(n),e.compute(sp(e.inputs,t))}}),cp,dp,pp,hp,ew=Q(()=>{fe(),we(),be(),cp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},dp=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=xu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),d=Math.ceil(i/u),p=!0,h=F.size(s),g=[{type:12,data:p?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(g.push(...ce(e[2].dims)),m.push("rank")),g.push(...ce(s));let y=_=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",v=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),M=v.type.value,k=null,S=[v,E];e.length===3&&(k=H("c",e[2].dataType,e[2].dims.length),S.push(k));let A=se("output",e[0].dataType,s.length);S.push(A);let z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(z).declareVariables(...S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${M}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=_=>{let x=H("a",e[0].dataType,e[0].dims),T=H("b",e[1].dataType,e[1].dims),v=null,E=[x,T];e.length===3&&(v=H("c",e[2].dataType,e[2].dims.length),E.push(v));let M=se("output",e[0].dataType,s.length);E.push(M);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let z=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(k).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${A}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${S}
      }
      workgroupBarrier();
    }

    ${z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:g}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},pp=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},hp=(e,t)=>{cp(e.inputs),e.compute(dp(e.inputs,t))}}),Ot,Ht,vn,Sn,fp,mp,gp,yp,wp,bp,_p,$p,xp,vp,tw=Q(()=>{fe(),we(),He(),be(),[Ot,Ht,vn,Sn]=[0,1,2,3],fp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},mp=`
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
`,gp=e=>`
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
`,yp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,wp=e=>`
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
`,bp=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ot}] = batch;
     indices[${Ht}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${vn}] = u32(r);
            indices[${Sn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${vn}] = u32(clamp(r, 0, H - 1));
          indices[${Sn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${vn}] = gs_reflect(r, border[1], border[3]);
          indices[${Sn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,_p=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ot}], indices[${Ht}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ot}], indices[${Ht}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ot}], indices[${Ht}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ot}], indices[${Ht}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ot}], indices[${Ht}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ot}], indices[${Ht}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,$p=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ot,Ht,vn,Sn]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=F.size(a),l=[{type:12,data:u},...ce(e[0].dims,r,a)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${mp}
  ${gp(s)}
  ${yp(t)}
  ${wp(t)}
  ${bp(n,s,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${vn}]);
      let W_in = i32(uniforms.x_shape[${Sn}]);

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
      var grid_indices = vec3<u32>(indices[${Ot}], indices[${vn}], indices[${Sn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_p(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=F.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:d}},xp=(e,t)=>{fp(e.inputs),e.compute($p(e.inputs,t))},vp=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),it,Sp,Tp,ka,Ep,nr,Ip,Mp=Q(()=>{fe(),we(),He(),Yi(),oa(),be(),tn(),it=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Sp=(e,t)=>{let n=e[0],r=it(e,1),i=it(e,2),a=it(e,3),o=it(e,4),s=it(e,5),u=it(e,6),l=it(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],p=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],g=p,m=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&F.size(u.dims)&&F.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&F.size(u.dims)||l&&F.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&F.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,g=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(a&&F.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+g,T=0;if(o&&F.size(o.dims)>0){T=8;let k=o.dims;throw k.length===1?k[0]===d?T=1:k[0]===3*d+2&&(T=3):k.length===2&&k[0]===d&&k[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,E=h;if(i&&F.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],v=!0}}let M=!1;if(o&&F.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&F.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==d||s.dims[1]!==t.numHeads||s.dims[2]!==p||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:v,qkvFormat:_}},Tp=e=>Re({...e}),ka=Re({perm:[0,2,1,3]}),Ep=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=F.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],d=p=>{let h=se("qkv_with_bias",t.dataType,s),g=H("qkv",t.dataType,s),m=H("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(g,m,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},nr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&F.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Ep(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(pt(u,ka.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(pt(u,ka.perm),{inputs:[u],outputs:[-1]})[0]},Ip=(e,t)=>{let n=Sp(e.inputs,t),r=e.inputs[0],i=it(e.inputs,1),a=it(e.inputs,2),o=it(e.inputs,3),s=it(e.inputs,4),u=it(e.inputs,5),l=it(e.inputs,6),d=it(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(p)return Qn(e,h,i,a,s,void 0,l,d,u,n);if(!i||!a)throw new Error("key and value must be provided");let g=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Qn(e,h,g,m,s,void 0,l,d,u,n)}}),kp,Cp,Ap,Rp,Ca,Op,Np,zp=Q(()=>{fe(),we(),He(),be(),kp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Cp=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Ap=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ue("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Rp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ca=(e,t)=>{let n=e[0].dims,r=F.size(n),i=e[0].dataType,a=F.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=H("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[],p=0,h=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){p+=t.splitSizes[m],u[m]=p;let y=n.slice();y[a]=t.splitSizes[m],d.push(y),o[m]=se(`output${m}`,i,y.length),l.push({dims:d[m],dataType:e[0].dataType})}h.push({type:12,data:u},...ce(n,...d));let g=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Ap(u.length)}
  ${Rp(o)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ue("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Op=(e,t)=>{kp(e.inputs);let n=e.inputs.length===1?t:Cp(e.inputs,t);e.compute(Ca(e.inputs,n),{inputs:[0]})},Np=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Bp,Pr,Pp,Dp=Q(()=>{fe(),we(),He(),be(),Bp=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!F.areEqual(r.dims,[])&&!F.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!F.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],p=F.sizeFromDimension(n.dims,1)/l,h=s===0?i.dims[1]*2:p/o;if(s>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Pr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=F.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,d=e[2].dims[1],p=i===0?d*2:l/r,h=new Array(o,u,l/p,p-d),g=F.computeStrides(h),m=[{type:1,data:a},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[s,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,p,u*p,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let _=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),T=H("cos_cache",e[2].dataType,e[2].dims.length),v=H("sin_cache",e[3].dataType,e[3].dims.length),E=se("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${w.declareVariables(_,x,T,v,E)}

        ${w.mainStart(Nn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",se("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${_.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(h)/Nn)},programUniforms:m})}},Pp=(e,t)=>{Bp(e.inputs,t),e.compute(Pr(e.inputs,t))}}),Up,Lp,Aa,Fp,Gp,nw=Q(()=>{He(),fe(),oa(),Mp(),zp(),tn(),Dp(),be(),Up=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],d=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=l,h=0,g=!r||r.dims.length===0,m=Math.floor(g?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);g&&(d=m*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let x=0,T=!1,v=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=E.dims.reduce((k,S)=>k*S,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let k=0;k<E.dims.length;k++)if(E.dims[k]!==1&&E.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${E.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:_}},Lp=Re({perm:[0,2,1,3]}),Aa=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(pt(r,Lp.perm),{inputs:[r],outputs:[-1]})[0]),r},Fp=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=d=>{let p=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),g=se("pos_ids",i,o),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(p,h,g)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Gp=(e,t)=>{var v;let n=Up(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[h,g,m]=!i&&!a?e.compute(Ca([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let E=e.compute(Fp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],k=e.inputs[8],S=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[h,E,M,k],z=[-1];y=e.compute(Pr(A,S),{inputs:A,outputs:z})[0],A.splice(0,1,g);let Y=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Pr(A,Y),{inputs:A,outputs:z})[0]}let _=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=Aa(e,t.doRotary?w:g,n),T=Aa(e,m,n);Qn(e,_,x,T,void 0,void 0,o,s,void 0,n,u,l)}}),Ra,Wp,qp,Vp,rw=Q(()=>{fe(),we(),tn(),be(),Ra=(e,t,n,r,i,a,o,s)=>{let u=qe(a),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=i*o,h=64;p===1&&(h=256);let g=[i,o,a/u],m=[i,o,2],y=["rank","type","type"],w=[];w.push(...ce(g,m));let _=x=>{let T=H("x",t.dataType,3,u),v=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),M=se("output",1,3,2),k=[T,v,E,M];return`
  var<workgroup> workgroup_shared : array<${d}, ${h}>;
  const workgroup_size = ${h}u;
  ${x.declareVariables(...k)}
  ${x.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${T.get("batch","channel","h")});
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
      let sum_final = ${en("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${en("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:p},programUniforms:w}),getShaderSource:_},{inputs:[t,n,r],outputs:[-1]})[0]},Wp=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=F.sizeFromDimension(r,a),l=qe(u),d=F.size(i)/l,p=Ra(e,t[0],t[1],t[2],o,u,s,n.epsilon),h=[o,s,u/l],g=[o,s],m=["type","none"],y=w=>{let _=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,g.length,2),T=se("output",t[0].dataType,h.length,l),v=[_,x,T];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ce(h,g,h)]}),getShaderSource:y},{inputs:[t[0],p]})},qp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=F.sizeFromDimension(r,1)/o,u=qe(o),l=F.size(i)/u,d=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],p=["type","type"],h=!1,g=[0,r.length-1];for(let _=0;_<r.length-2;_++)h=h||r[_+1]!==1,g.push(_+1);h=h&&r[r.length-1]!==1;let m=h?e.compute(pt(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(_,x)=>r[g[x]])),y=Ra(e,m,t[1],t[2],a,s,o,n.epsilon),w=_=>{let x=Xe(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),M=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],y]})},Vp=(e,t)=>{t.format==="NHWC"?qp(e,e.inputs,t):Wp(e,e.inputs,t)}}),Hp,jp,Kp,iw=Q(()=>{fe(),we(),be(),Hp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},jp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=F.normalizeAxis(t.axis,i.length),l=F.sizeToDimension(i,u),d=F.sizeFromDimension(i,u),p=F.size(a.dims),h=o?F.size(o.dims):0;if(p!==d||o&&h!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let g=[];for(let E=0;E<i.length;++E)E<u?g.push(i[E]):g.push(1);let m=qe(d),y=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];o&&y.push("type");let _=n>1,x=n>2,T=E=>{let M=Xe(e[0].dataType),k=[H("x",e[0].dataType,e[0].dims,m),H("scale",a.dataType,a.dims,m)];o&&k.push(H("bias",o.dataType,o.dims,m)),k.push(se("output",e[0].dataType,s,m)),_&&k.push(se("mean_data_output",1,g)),x&&k.push(se("inv_std_output",1,g));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(S).declareVariables(...k)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ji("f32",m)};
    var mean_square_vector = ${Ji("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${zn(M,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${en("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${en("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${zn(M,m,"x[j + offset]")};
      let f32scale = ${zn(M,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${zn(M,m,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return _&&v.push({dims:g,dataType:1}),x&&v.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:T}},Kp=(e,t)=>{Hp(e.inputs),e.compute(jp(e.inputs,t,e.outputCount))}}),Yp,Xp,aw=Q(()=>{we(),fa(),wa(),Yp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Xp=e=>{Yp(e.inputs);let t=On.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(ha(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=F.size(e.inputs[0].dims.slice(0,-2)),o=F.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],d=[s,u];e.compute(Or(d,{activation:""},t,l),{inputs:d})}else e.compute(Or(e.inputs,{activation:""},t))}}}),Qp,Zp,Jp,eh,th,ow=Q(()=>{fe(),we(),He(),be(),Qp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!F.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(F.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(F.size(u)!==l)throw new Error("zeroPoints input size error.")}},Zp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=F.size(s),l=e[1].dims[2]/4,d=e[0].dataType,p=qe(t.k),h=qe(l),g=qe(o),m=s.concat([i,o]),y=i>1&&o/g%2===0?2:1,w=F.size(m)/g/y,_=64,x=[],T=[u,i,a/p],v=F.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),x.push(...ce(T)),x.push(...ce(v)),x.push(...ce(e[2].dims)),e.length===4&&x.push(...ce(F.convertShape(e[3].dims)));let E=[u,i,o/g];x.push(...ce(E));let M=k=>{let S=T.length,A=H("a",e[0].dataType,S,p),z=H("b",12,v.length,h),Y=H("scales",e[2].dataType,e[2].dims.length),G=[A,z,Y],q=e.length===4?H("zero_points",12,e[3].dims.length):void 0;q&&G.push(q);let O=E.length,W=se("output",e[0].dataType,O,g),K=Xe(e[0].dataType),X=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),le=Math.floor(32/t.bits),L=Math.floor(le/8),P=()=>{let D="";for(let U=0;U<L;U++){let j=U*t.bits*4,te=j+t.bits;D+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${X};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/p}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${A.getByOffset(`input_offset${U>0?U:""}`)};
              input_offset${U>0?U:""}++;
            }
          `;for(let re=0;re<g*y;re++)D+=`
            b_value = ${h===1?`b${re}_data`:`b${re}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${U*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${X}(${Array.from({length:4},(ge,xe)=>`${K}(b_value_lower[${xe}]), ${K}(b_value_upper[${xe}])`).join(", ")});
            b_dequantized_values = ${p===1?`${X}(${Array.from({length:8},(ge,xe)=>`(b_quantized_values[${xe}] - ${q?`zero_point${re}`:"zero_point"}) * scale${re}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${q?`zero_point${re}`:"zero_point"}`).join(",")})) * scale${re};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(re/g)}]${g>1?`[${re%g}]`:""} += ${Array.from({length:8/p},(ge,xe)=>`${p===1?`a_data${U>0?U:""}[${xe}] * b_dequantized_values[${xe}]`:`dot(a_data${U>0?U:""}[${xe}], b_dequantized_values[${xe}])`}`).join(" + ")};
          `}return D},R=()=>{let D=`
            var col_index = col * ${g};
            ${q?`
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
            `;for(let U=0;U<g*y;U++)D+=`
            let scale${U} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},N=()=>{let D=`col_index = col * ${g};`;for(let U=0;U<g*y;U++)D+=`
            let b${U}_data = ${z.getByIndices(`${z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,D};return`
        var<workgroup> workgroup_shared: array<${W.type.value}, ${y*_}>;
        ${k.declareVariables(...G,W)}
        ${k.mainStart([_,1,1])}
          let output_indices = ${W.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${R()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${N()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${P()}
                word_offset += ${le/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${W.setByIndices(`${W.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${g};${y};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:M}},Jp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=F.size(s),l=e[1].dims[2]/4,d=e[0].dataType,p=qe(t.k),h=qe(l),g=s.concat([i,o]),m=128,y=o%8===0?8:o%4===0?4:1,w=m/y,_=Math.floor(32/t.bits),x=w*h*_,T=x/p,v=x/t.blockSize,E=F.size(g)/y,M=[],k=[u,i,a/p],S=F.convertShape(e[1].dims).slice();S.splice(-1,1,l/h),M.push(...ce(k)),M.push(...ce(S)),M.push(...ce(e[2].dims)),e.length===4&&M.push(...ce(F.convertShape(e[3].dims)));let A=[u,i,o];M.push(...ce(A));let z=Y=>{let G=k.length,q=H("a",e[0].dataType,G,p),O=H("b",12,S.length,h),W=H("scales",e[2].dataType,e[2].dims.length),K=[q,O,W],X=e.length===4?H("zero_points",12,e[3].dims.length):void 0;X&&K.push(X);let le=A.length,L=se("output",e[0].dataType,le),P=Xe(e[0].dataType),R=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${q.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${Y.declareVariables(...K,L)}
        ${Y.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${q.getByIndices(`${q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${P}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${P}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${W.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let N=Math.floor(_/8),D="";for(let U=0;U<N;U++){let j=U*t.bits*4,te=j+t.bits;D+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${P}>(${Array.from({length:4},(re,ge)=>`${P}(b_value_lower[${ge}]), ${P}(b_value_upper[${ge}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${P}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(re,ge)=>`${`dot(a_data${ge}, b_dequantized_values[${ge}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return D})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:d}],dispatchGroup:{x:E},programUniforms:M}),getShaderSource:z}},eh=(e,t)=>{Qp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Jp(e.inputs,t)):e.compute(Zp(e.inputs,t))},th=e=>Re(e)}),nh,rh,ih,ah,oh,sh,uh,lh,ch,sw=Q(()=>{fe(),we(),be(),nh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},rh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ue("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},ih=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ue("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ue("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ah=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k = i32(${ue("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},oh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ue("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k -= i32(${ue("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},sh=(e,t,n)=>{switch(n.mode){case 0:return rh(e,t,n.pads.length);case 1:return ih(e,t,n.pads.length);case 2:return ah(e,t,n.pads.length);case 3:return oh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},uh=(e,t)=>{let n=F.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=F.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...ce(e[0].dims,n));let s=["rank"],u=l=>{let d=se("output",e[0].dataType,n.length),p=H("x",e[0].dataType,r.length),h=p.type.value,g=sh(d,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:o?h:"f32"}),`
            ${l.registerUniforms(m).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(n)/64)},programUniforms:a}),getShaderSource:u}},lh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},ch=(e,t)=>{nh(e.inputs);let n=lh(e.inputs,t);e.compute(uh(e.inputs,n),{inputs:[0]})}}),rr,Oa,Na,za,Ba,dh,ph,Pa,Da,hh,fh,Ua,mh,gh,La,yh,wh,bh,_h,uw=Q(()=>{mt(),fe(),we(),be(),rr=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Oa=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Er.adjustPoolAttributes(n,i,o,s,u,l);let d=Er.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let h=d.slice();return h.push(h.splice(1,1)[0]),[p,r?h:d]},Na=(e,t)=>{let n=t.format==="NHWC",r=F.size(e),i=F.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:d}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),a.push({type:12,data:g},{type:12,data:m},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,p,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=F.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[a,o,!!u,!1,!1]}},za=(e,t,n,r,i,a,o,s,u,l,d,p)=>{let h=i.format==="NHWC",g=t.type.value,m=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",_="",x=n-(h?2:1);if(d?y=`
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
                }`,i.kernelShape.length===2){let T=n-(h?3:2);p?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${g}(${s});
              var pad = 0;
              ${w}
              ${y}
              ${_}
              ${o}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:_=`
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

              var value = ${g}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ue("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ue("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ue("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ue("uniforms.pads","j - 2u",w)};
                  ${_}
              }
              ${o}

              output[global_idx] = value;
            }`}},Ba=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,dh=e=>`${Ba(e)};${e.countIncludePad}`,ph=e=>`${Ba(e)};${e.storageOrder};${e.dilations}`,Pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Da=(e,t,n,r)=>{let[i,a]=Oa(t,r,n),o=H("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[d,p,h,g,m]=Na(a,i);d.push(...ce(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(a)/64)},programUniforms:d}),getShaderSource:w=>za(w,o,t.dims.length,a.length,i,u,l,0,p,h,g,m)}},hh=e=>{let t=e.count_include_pad!==0,n=Pa(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:dh(r)}},fh=(e,t)=>{rr(e.inputs),e.compute(Da("AveragePool",e.inputs[0],!1,t))},Ua={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},mh=e=>{let t=e.format;return{format:t,...Ua,cacheKey:t}},gh=(e,t)=>{rr(e.inputs),e.compute(Da("GlobalAveragePool",e.inputs[0],!0,t))},La=(e,t,n,r)=>{let[i,a]=Oa(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=H("x",t.dataType,t.dims.length),l=["rank"],[d,p,h,g,m]=Na(a,i);return d.push(...ce(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(a)/64)},programUniforms:d}),getShaderSource:y=>za(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,p,h,g,m)}},yh=(e,t)=>{rr(e.inputs),e.compute(La("MaxPool",e.inputs[0],!1,t))},wh=e=>{let t=e.storage_order,n=e.dilations,r=Pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:ph(i)}},bh=e=>{let t=e.format;return{format:t,...Ua,cacheKey:t}},_h=(e,t)=>{rr(e.inputs),e.compute(La("GlobalMaxPool",e.inputs[0],!0,t))}}),$h,xh,vh,Sh,lw=Q(()=>{fe(),we(),He(),be(),$h=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},xh=(e,t)=>{let n=F.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=F.size(a),u=r===3||r===2,l=u?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(F.size(p.dims)/4)]:p.dims:void 0,g=d.length===0||d.length===1&&d[0]===1,m=g===!1&&d.length===1,y=qe(s),w=g&&(!u||y===4),_=w?y:1,x=w&&!u?y:1,T=H("input",u?12:r,l.length,x),v=H("scale",o,d.length),E=p?H("zero_point",u?12:r,h.length):void 0,M=se("output",o,a.length,_),k=[T,v];E&&k.push(E);let S=[l,d];p&&S.push(h);let A=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...ce(...S,a)],z=Y=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(G).declareVariables(...k,M)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:m?u?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:A})}},vh=(e,t)=>{$h(e.inputs,t),e.compute(xh(e.inputs,t))},Sh=e=>Re({axis:e.axis,blockSize:e.blockSize})}),Th,Eh,Ih,cw=Q(()=>{mt(),fe(),be(),Th=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Eh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...ce(a)],u=l=>{let d=se("output",r,a.length),p=d.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Ih=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&Th(t,n,r),e.compute(Eh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Mh,kh,Ch,Ah,dw=Q(()=>{fe(),we(),He(),be(),Mh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},kh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(F.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=F.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...ce(e[1].dims,e[2].dims,i)],d=p=>{let h=H("indices",e[1].dataType,e[1].dims.length),g=H("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?Pu("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,m)}
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
    ${Mh(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Ch=e=>Re({reduction:e.reduction}),Ah=(e,t)=>{e.compute(kh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rh,Oh,Nh,Fa,zh,Bh,Ph,Dh,Uh,Lh,Fh,Gh,Ga,Wh,qh,Vh,Hh,jh,Kh,Yh,pw=Q(()=>{fe(),we(),He(),be(),Rh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Oh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Nh=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(d=>a.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rh(r,t),t.axes.length>0&&Oh(r,t.axes,l).forEach((d,p)=>r[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Fa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,zh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Fa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Fa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Bh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ph=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Dh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Uh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Lh=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ue("uniforms.scales","i",r)};
        var roi_low = ${ue("uniforms.roi","i",i)};
        var roi_hi = ${ue("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ue("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Fh=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ue("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ue("uniforms.roi","i",a)};
          var roi_hi = ${ue("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",r.length)};
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
    }`,Gh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ue("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ga=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Wh=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ga(e,u,a,2)}
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
    }`},qh=(e,t,n,r,i,a,o,s,u,l)=>{let d=n.length===2,[p,h]=d?[0,1]:[2,3],g=e.type.value,m=y=>{let w=y===p?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${g} = originalIdx + ${g}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(p)};
    ${m(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
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
    `},Vh=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ga(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${o}];
      var height:${d} = originalIndices[${s}];
      var width:${d} = originalIndices[${u}];
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
    }`},Hh=(e,t,n,r,i,a)=>{let o=e.dims,s=Ph(a,t.axes,o.length),u=Dh(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Uh(o,l,t)));let d=se("output",e.dataType,u.length),p=H("input",e.dataType,o.length),h=F.size(u),g=o.length===u.length&&o.every((x,T)=>x===u[T]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=p.type.value,_=x=>`
      ${g?"":`
      ${zh(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Gh(p,o)};
              ${Bh(t.nearestMode,n,w)};
              ${Fh(p,d,o,u,l.length,s.length,m)};
              `;case"linear":return`
              ${Lh(d,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Wh(p,d,o,m,y)}`;if(o.length===3||o.length===5)return`${Vh(p,d,o,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${qh(p,d,o,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(p,d)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${g}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:s},...ce(o,u)]})}},jh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Kh=(e,t)=>{let n=[],r=[],i=[],a=jh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Nh(e.inputs,t,a,n,r,i),e.compute(Hh(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Yh=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Xh,Qh,Zh,hw=Q(()=>{fe(),we(),be(),Xh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Qh=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=F.size(a),s=a,u=o,l=a.slice(-1)[0],d=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,g=r&&n>1,m=r&&n>2,y=n>3,w=64,_=qe(l),x=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[H("x",e[0].dataType,e[0].dims,_),H("skip",e[1].dataType,e[1].dims,_),H("gamma",e[2].dataType,e[2].dims,_)];p&&k.push(H("beta",e[3].dataType,e[3].dims,_)),h&&k.push(H("bias",e[4].dataType,e[4].dims,_)),k.push(se("output",e[0].dataType,s,_)),g&&k.push(se("mean_output",1,d)),m&&k.push(se("inv_std_output",1,d)),y&&k.push(se("input_skip_bias_sum",e[0].dataType,s,_));let S=Xe(e[0].dataType),A=Xe(1,_);return`

      ${E.registerUniforms(M).declareVariables(...k)}
      var<workgroup> sum_shared : array<${A}, ${w}>;
      var<workgroup> sum_squared_shared : array<${A}, ${w}>;

      ${E.mainStart([w,1,1])}
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
          let bias_value = ${h?"bias[offset1d + i]":S+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${zn(S,_,"value")};
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
        let mean = ${en("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${en("square_sum",_)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:d,dataType:1}),n>2&&v.push({dims:d,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${g};${m};${y}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Zh=(e,t)=>{Xh(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Qh(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Jh,ir,ef,Wa,tf,nf,rf,af,fw=Q(()=>{fe(),we(),He(),be(),Jh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ir=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},ef=(e,t)=>{if(e.length>1){let n=ir(e,1),r=ir(e,2),i=ir(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Wa=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},tf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
            let steps_i = ${ue("uniforms.steps","i",n.length)};
            let signs_i = ${ue("uniforms.signs","i",n.length)};
            let starts_i = ${ue("uniforms.starts","i",n.length)};
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
      }`,nf=(e,t)=>{let n=e[0].dims,r=F.size(n),i=t.axes.length>0?F.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ir(e,4);a.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((_,x)=>Wa(_,x,n,i,a)),s=t.ends.map((_,x)=>Wa(_,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let _=0;_<n.length;++_)i.includes(_)||(o.splice(_,0,0),s.splice(_,0,n[_]),a.splice(_,0,1));let u=a.map(_=>Math.sign(_));a.forEach((_,x,T)=>{if(_<0){let v=(s[x]-o[x])/_,E=o[x],M=E+v*a[x];o[x]=M,s[x]=E,T[x]=-_}});let l=n.slice(0);i.forEach((_,x)=>{l[_]=Math.ceil((s[_]-o[_])/a[_])});let d={dims:l,dataType:e[0].dataType},p=se("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),g=F.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:g},{type:12,data:o},{type:6,data:u},{type:12,data:a},...ce(e[0].dims,l)],w=_=>`
      ${_.registerUniforms(m).declareVariables(h,p)}
        ${tf(h,p,n)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},rf=(e,t)=>{Jh(e.inputs,t);let n=ef(e.inputs,t);e.compute(nf(e.inputs,n),{inputs:[0]})},af=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),of,sf,uf,lf,mw=Q(()=>{fe(),we(),He(),tn(),be(),of=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},sf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=F.size(r),a=r.length,o=F.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,S)=>S),l[o]=a-1,l[a-1]=o,u=e.compute(pt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let d=u.dims,p=d[a-1],h=i/p,g=qe(p),m=p/g,y=64;h===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,_=H("x",u.dataType,u.dims,g),x=se("result",u.dataType,u.dims,g),T=_.type.value,v=Xe(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=k=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${k.registerUniform("packedCols","i32").declareVariables(_,x)}
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
          rowMaxShared = ${T}(${w("threadShared[0]",g)});
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
          rowSumShared = ${T}(${en("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:E},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(pt(M,l),{inputs:[M]})},uf=(e,t)=>{of(e.inputs),sf(e,t)},lf=e=>Re({axis:e.axis})}),qa,cf,df,pf,hf,gw=Q(()=>{fe(),we(),be(),qa=e=>Array.from(e.getBigInt64Array(),Number),cf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(qa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},df=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},pf=(e,t)=>{let n=e[0].dims,r=t??qa(e[1]),i=df(n,r),a=F.size(i),o=e[0].dataType,s=H("input",o,n.length),u=se("output",o,i.length),l=d=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ce(e[0].dims,i)]}),getShaderSource:l}},hf=e=>{cf(e.inputs),e.compute(pf(e.inputs),{inputs:[0]})}}),ff,mf,gf,yw=Q(()=>{fe(),we(),be(),ff=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=H("a_data",t[1].dataType,t[1].dims.length,4),s=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,h,g)=>`select(${h}, ${p}, ${g})`;if(!r)l=a.setByOffset("global_idx",d(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,g,m="")=>{let y=`a_data[index_a${g}][component_a${g}]`,w=`b_data[index_b${g}][component_b${g}]`,_=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${a.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_b${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_c${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${m}(${d(y,w,_)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},mf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(F.areEqual(t,n)&&F.areEqual(n,r)),o=t,s=F.size(t);if(a){let l=On.calcShape(On.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=F.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>ff(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...ce(r,t,n,o)]})}},gf=e=>{e.compute(mf(e.inputs))}}),yf,ww=Q(()=>{Ry(),oa(),Oy(),Ny(),zy(),By(),Py(),Gy(),qy(),Vy(),Hy(),jy(),Ky(),Yy(),Xy(),Qy(),Zy(),Jy(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),Mp(),sw(),uw(),lw(),cw(),dw(),ra(),pw(),Dp(),hw(),fw(),mw(),zp(),gw(),tn(),ca(),yw(),yf=new Map([["Abs",[Xl]],["Acos",[Ql]],["Acosh",[Zl]],["Add",[Uc]],["ArgMax",[zl,aa]],["ArgMin",[Nl,aa]],["Asin",[Jl]],["Asinh",[ec]],["Atan",[tc]],["Atanh",[nc]],["Attention",[Fl]],["AveragePool",[fh,hh]],["BatchNormalization",[Vl]],["BiasAdd",[Kl]],["BiasSplitGelu",[Bc]],["Cast",[ic,rc]],["Ceil",[sc]],["Clip",[oc]],["Concat",[Jc,ed]],["Conv",[va,$a]],["ConvTranspose",[Id,Sd]],["Cos",[uc]],["Cosh",[lc]],["CumSum",[kd,Cd]],["DepthToSpace",[Nd,zd]],["DequantizeLinear",[vh,Sh]],["Div",[Lc]],["Einsum",[Fd,Gd]],["Elu",[cc,Zn]],["Equal",[Fc]],["Erf",[dc]],["Exp",[pc]],["Expand",[Hd]],["FastGelu",[Kd]],["Floor",[hc]],["FusedConv",[va,$a]],["Gather",[Zd,Qd]],["GatherElements",[lp,up]],["GatherBlockQuantized",[ip,ap]],["GatherND",[ep,tp]],["Gelu",[fc]],["Gemm",[hp,pp]],["GlobalAveragePool",[gh,mh]],["GlobalMaxPool",[_h,bh]],["Greater",[Vc]],["GreaterOrEqual",[jc]],["GridSample",[xp,vp]],["GroupQueryAttention",[Gp]],["HardSigmoid",[xc,$c]],["InstanceNormalization",[Vp]],["LayerNormalization",[Kp]],["LeakyRelu",[mc,Zn]],["Less",[Hc]],["LessOrEqual",[Kc]],["Log",[Cc]],["MatMul",[Xp]],["MatMulNBits",[eh,th]],["MaxPool",[yh,wh]],["Mul",[Gc]],["MultiHeadAttention",[Ip,Tp]],["Neg",[yc]],["Not",[gc]],["Pad",[ch]],["Pow",[Wc]],["QuickGelu",[Oc,Zn]],["Range",[Ih]],["Reciprocal",[wc]],["ReduceMin",[kl]],["ReduceMean",[Sl]],["ReduceMax",[Ml]],["ReduceSum",[Al]],["ReduceProd",[Cl]],["ReduceL1",[Tl]],["ReduceL2",[El]],["ReduceLogSum",[Ol]],["ReduceLogSumExp",[Il]],["ReduceSumSquare",[Rl]],["Relu",[bc]],["Resize",[Kh,Yh]],["RotaryEmbedding",[Pp]],["ScatterND",[Ah,Ch]],["Sigmoid",[_c]],["Sin",[vc]],["Sinh",[Sc]],["Slice",[rf,af]],["SkipLayerNormalization",[Zh]],["Split",[Op,Np]],["Sqrt",[Tc]],["Softmax",[uf,lf]],["Sub",[qc]],["Tan",[Ec]],["Tanh",[Ic]],["ThresholdedRelu",[kc,Zn]],["Tile",[hf]],["Transpose",[Vu,Hu]],["Where",[gf]]])}),wf,bw=Q(()=>{mt(),Vt(),be(),wf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Rt(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),bt(e.programInfo.name)}dispose(){}build(e,t){Rt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Uu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Ie("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return bt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),bf={};An(bf,{WebGpuBackend:()=>vf});var _f,$f,xf,vf,_w=Q(()=>{mt(),fe(),Vt(),Tu(),Cy(),ww(),bw(),_f=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},$f=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${_f(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},xf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},vf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new xf(o),this.gpuDataManager=zu(this),this.programManager=new wf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Li(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,d=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,g=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(_=>({dims:_.dims,dataType:qt(_.dataType)})),outputsMetadata:h.map(_=>({dims:_.dims,dataType:qt(_.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let _="";p.forEach((T,v)=>{_+=`input[${v}]: [${T.dims}] | ${qt(T.dataType)}, `});let x="";h.forEach((T,v)=>{x+=`output[${v}]: [${T.dims}] | ${qt(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${d}" ${_}${x}start time: ${y} ns, execution time: ${w-y} ns`)}br("GPU",`${d}::${g}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),bt()}run(e,t,n,r,i,a){Rt(e.name);let o=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let v=this.gpuDataManager.get(T);if(!v)throw new Error(`no GPU data for input: ${T}`);o.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?s.map((x,T)=>T):n;if(d.length!==s.length)throw new Error(`Output size ${d.length} must be equal to ${s.length}.`);let p=[],h=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=a)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let T=d[x]===-1,v=d[x]===-2,E=T||v?i(s[x].dataType,s[x].dims):r(d[x],s[x].dataType,s[x].dims);if(p.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(M),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(M)}h.push(M)}if(o.length!==t.length||h.length!==p.length){if(h.length===0)return bt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(l){let x=0,T=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,z,Y;k.type===10?(Y=S.length>4?16:S.length>2?8:S.length*A,z=S.length>4?16:A*S.length):(Y=S.length<=2?S.length*A:16,z=16),x=Math.ceil(x/Y)*Y,T.push(x);let G=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/G)*z:S.length*A});let v=16;x=Math.ceil(x/v)*v;let E=new ArrayBuffer(x);l.forEach((k,S)=>{let A=T[S],z=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(E,A,z.length).set(z);else if(k.type===12)new Uint32Array(E,A,z.length).set(z);else if(k.type===10)new Uint16Array(E,A,z.length).set(z);else if(k.type===1)new Float32Array(E,A,z.length).set(z);else throw new Error(`Unsupported uniform type: ${qt(k.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,x),this.gpuDataManager.release(M.id),g={offset:0,size:x,buffer:M.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=$f(e,t,y),_=this.programManager.getArtifact(w);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(w,_),Ie("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],v=T.type,E=typeof T.data=="number"?1:T.data.length,[M,k]=_.uniformVariablesInfo[x];if(v!==M||E!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${k}, got type ${v} with size ${E} in program "${_.programInfo.name}".`)}}if(Ie("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(_,o,h,m,g),bt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=yf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ie("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Zi(this,e,t);return Fi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ie("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ie("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ie("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Sf={};An(Sf,{init:()=>Ef});var Dr,Tf,Ef,$w=Q(()=>{fe(),Vt(),we(),ky(),Dr=class oy{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new oy(this.module,this.dataType,this.data,t)}},Tf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),d=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),h=[];for(let g=0;g<p;g++)h.push(Number(e.getValue(r*i++,a)));s.push(new Dr(e,l,d,h))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Dr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=wn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Dr(this.module,s,d,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Ef=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(_w(),Vn(bf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,d=!1)=>{if(d)Ie("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Ie("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),p)}},async(s,u,l)=>{Ie("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,d)=>{Ie("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let p=new Tf(t,o,Number(u));return o.computeKernel(Number(s),p,d)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Au(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,d)=>a.ensureTensor(o,s,u,l,d),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),If,Va,Ha,nn,Mf,ja,Ur,Ka,Ya,Xa,Qa,Za,Ja,kf=Q(()=>{mt(),Ey(),Iy(),fe(),mn(),zi(),mu(),If=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},Va=async e=>{If(e.wasm.numThreads,Tr(e.logLevel))},Ha=async(e,t)=>{var r,i;(i=(r=Pe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=($w(),Vn(Sf)).init;t==="webgpu"&&await a("webgpu",Pe(),e,n),t==="webnn"&&await a("webnn",Pe(),e)}},nn=new Map,Mf=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},ja=(e,t)=>{let n=Pe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],d=[];for(let p=0;p<l;p++){let h=Number(n.getValue(i+8+p*a,"*"));d.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(p+l)*a,"*")))}return[s,u,d]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Ur=e=>{let t=Pe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ka=async(e,t)=>{var p,h,g,m;let n,r,i=Pe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Ur(e);let a=0,o=0,s=0,u=[],l=[],d=[];try{if([o,u]=await fu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let z=typeof A=="string"?A:A.path;S.push(Ui(typeof A=="string"?A:A.data).then(Y=>{i.mountExternalData(z,Y)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,z=A==null?void 0:A.context,Y=A==null?void 0:A.gpuDevice,G=A==null?void 0:A.deviceType,q=A==null?void 0:A.powerPreference;z?i.currentContext=z:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:q})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&Ne("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Mf(a),_=!!(t!=null&&t.enableGraphCapture),x=[],T=[],v=[],E=[],M=[];for(let S=0;S<y;S++){let[A,z,Y]=ja(a,S);A===0&&Ne("Can't get an input name."),l.push(A);let G=i.UTF8ToString(A);x.push(G),v.push(z===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(z),shape:Y})}for(let S=0;S<w;S++){let[A,z,Y]=ja(a,S+y);A===0&&Ne("Can't get an output name."),d.push(A);let G=i.UTF8ToString(A);T.push(G),E.push(z===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(z),shape:Y});{if(_&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let q=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[G])??"cpu",O=i.webnnIsGraphOutput;if(q==="cpu"&&O&&O(a,G)){M.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(_&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(q)}}let k=null;return M.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Di(S))}),nn.set(a,[a,l,d,k,_,!1]),[a,x,T,v,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),d.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ne("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},Ya=e=>{var u,l,d;let t=Pe(),n=nn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),nn.delete(e)},Xa=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Pe(),u=s.PTR_SIZE,l=e[0],d=e[1],p=e[3],h=p,g,m;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;m=wn(yn(l),d);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=x(r,a,_,m)}}else if(p==="ml-tensor"){let _=e[2].mlTensor;m=wn(yn(l),d);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=x(r,_,yn(l),d)}else{let _=e[2];if(Array.isArray(_)){m=u*_.length,g=s._malloc(m),n.push(g);for(let x=0;x<_.length;x++){if(typeof _[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(g+x*u,_t(_[x],n),"*")}}else{let x=s.webnnIsGraphInput,T=s.webnnIsGraphOutput;if(l!=="string"&&x&&T){let v=s.UTF8ToString(i);if(x(r,v)||T(r,v)){let E=yn(l);m=wn(E,d),h="ml-tensor";let M=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!M||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await M(r,E,d);k(S,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),g=S}else m=_.byteLength,g=s._malloc(m),n.push(g),s.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),g)}else m=_.byteLength,g=s._malloc(m),n.push(g),s.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),g)}}let y=s.stackSave(),w=s.stackAlloc(4*d.length);try{d.forEach((x,T)=>s.setValue(w+T*u,x,u===4?"i32":"i64"));let _=s._OrtCreateTensor(yn(l),g,m,w,d.length,Di(h));_===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(_)}finally{s.stackRestore(y)}},Qa=async(e,t,n,r,i,a)=>{var G,q,O,W;let o=Pe(),s=o.PTR_SIZE,u=nn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],h=u[3],g=u[4],m=u[5],y=t.length,w=r.length,_=0,x=[],T=[],v=[],E=[],M=[],k=o.stackSave(),S=o.stackAlloc(y*s),A=o.stackAlloc(y*s),z=o.stackAlloc(w*s),Y=o.stackAlloc(w*s);try{[_,x]=lu(a),hn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await Xa(n[L],T,E,e,d[t[L]],t[L],g);for(let L=0;L<w;L++)await Xa(i[L],v,E,e,p[r[L]],y+r[L],g);fn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)o.setValue(S+L*s,T[L],"*"),o.setValue(A+L*s,d[t[L]],"*");for(let L=0;L<w;L++)o.setValue(z+L*s,v[L],"*"),o.setValue(Y+L*s,p[r[L]],"*");if(h&&!m){let{handle:L,outputPreferredLocations:P,outputPreferredLocationsEncoded:R}=h;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);hn("wasm bindInputsOutputs");for(let N=0;N<y;N++){let D=t[N];await o._OrtBindInput(L,d[D],T[N])!==0&&Ne(`Can't bind input[${N}] for session=${e}.`)}for(let N=0;N<w;N++){let D=r[N];(G=i[N])!=null&&G[3]?(M.push(v[N]),o._OrtBindOutput(L,p[D],v[N],0)!==0&&Ne(`Can't bind pre-allocated output[${N}] for session=${e}.`)):o._OrtBindOutput(L,p[D],0,R[D])!==0&&Ne(`Can't bind output[${N}] to ${P[N]} for session=${e}.`)}fn("wasm bindInputsOutputs"),nn.set(e,[l,d,p,h,g,!0])}(q=o.jsepOnRunStart)==null||q.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let K;h?K=await o._OrtRunWithBinding(l,h.handle,w,z,_):K=await o._OrtRun(l,A,S,y,Y,w,z,_),K!==0&&Ne("failed to call OrtRun().");let X=[],le=[];hn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let P=Number(o.getValue(z+L*s,"*"));if(P===v[L]||M.includes(v[L])){X.push(i[L]),P!==v[L]&&o._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.");continue}let R=o.stackSave(),N=o.stackAlloc(4*s),D=!1,U,j=0;try{o._OrtGetTensorData(P,N,N+s,N+2*s,N+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let te=s===4?"i32":"i64",re=Number(o.getValue(N,te));j=o.getValue(N+s,"*");let ge=o.getValue(N+s*2,"*"),xe=Number(o.getValue(N+s*3,te)),Me=[];for(let ee=0;ee<xe;ee++)Me.push(Number(o.getValue(ge+ee*s,te)));o._OrtFree(ge)!==0&&Ne("Can't free memory for tensor dims.");let Ae=Me.reduce((ee,J)=>ee*J,1);U=qt(re);let ne=h==null?void 0:h.outputPreferredLocations[r[L]];if(U==="string"){if(ne==="gpu-buffer"||ne==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ee=[];for(let J=0;J<Ae;J++){let _e=o.getValue(j+J*s,"*"),Fe=o.getValue(j+(J+1)*s,"*"),Z=J===Ae-1?void 0:Fe-_e;ee.push(o.UTF8ToString(_e,Z))}X.push([U,Me,ee,"cpu"])}else if(ne==="gpu-buffer"&&Ae>0){let ee=o.jsepGetBuffer;if(!ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let J=ee(j),_e=wn(re,Ae);if(_e===void 0||!Bi(U))throw new Error(`Unsupported data type: ${U}`);D=!0,X.push([U,Me,{gpuBuffer:J,download:o.jsepCreateDownloader(J,_e,U),dispose:()=>{o._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(ne==="ml-tensor"&&Ae>0){let ee=o.webnnEnsureTensor,J=o.webnnIsGraphInputOutputTypeSupported;if(!ee||!J)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(wn(re,Ae)===void 0||!Pi(U))throw new Error(`Unsupported data type: ${U}`);if(!J(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let _e=await ee(e,j,re,Me,!1);D=!0,X.push([U,Me,{mlTensor:_e,download:o.webnnCreateMLTensorDownloader(j,U),dispose:()=>{o.webnnReleaseTensorId(j),o._OrtReleaseTensor(P)}},"ml-tensor"])}else if(ne==="ml-tensor-cpu-output"&&Ae>0){let ee=o.webnnCreateMLTensorDownloader(j,U)(),J=X.length;D=!0,le.push((async()=>{let _e=[J,await ee];return o.webnnReleaseTensorId(j),o._OrtReleaseTensor(P),_e})()),X.push([U,Me,[],"cpu"])}else{let ee=Sr(U),J=new ee(Ae);new Uint8Array(J.buffer,J.byteOffset,J.byteLength).set(o.HEAPU8.subarray(j,j+J.byteLength)),X.push([U,Me,J,"cpu"])}}finally{o.stackRestore(R),U==="string"&&j&&o._free(j),D||o._OrtReleaseTensor(P)}}h&&!g&&(o._OrtClearBoundOutputs(h.handle)!==0&&Ne("Can't clear bound outputs."),nn.set(e,[l,d,p,h,g,!1]));for(let[L,P]of await Promise.all(le))X[L][2]=P;return fn("wasm ProcessOutputTensor"),X}finally{(W=o.webnnOnRunEnd)==null||W.call(o,l),o.stackRestore(k),T.forEach(K=>o._OrtReleaseTensor(K)),v.forEach(K=>o._OrtReleaseTensor(K)),E.forEach(K=>o._free(K)),_!==0&&o._OrtReleaseRunOptions(_),x.forEach(K=>o._free(K))}},Za=e=>{let t=Pe(),n=nn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},Ja=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),rn,ut,Bn,ar,or,Lr,eo,Fr,Tn,En,Cf,Af,Rf,Of,Nf,zf,Bf,Pf,Df=Q(()=>{mt(),kf(),mn(),Ai(),rn=()=>!!ze.wasm.proxy&&typeof document<"u",Bn=!1,ar=!1,or=!1,Fr=new Map,Tn=(e,t)=>{let n=Fr.get(e);n?n.push(t):Fr.set(e,[t])},En=()=>{if(Bn||!ar||or||!ut)throw new Error("worker not ready")},Cf=e=>{switch(e.data.type){case"init-wasm":Bn=!1,e.data.err?(or=!0,eo[1](e.data.err)):(ar=!0,eo[0]()),Lr&&(URL.revokeObjectURL(Lr),Lr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Fr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Af=async()=>{if(!ar){if(Bn)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(Bn=!0,rn())return new Promise((e,t)=>{ut==null||ut.terminate(),iu().then(([n,r])=>{try{ut=r,ut.onerror=a=>t(a),ut.onmessage=Cf,eo=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Ii)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ut.postMessage(i),Lr=n}catch(i){t(i)}},t)});try{await Ni(ze.wasm),await Va(ze),ar=!0}catch(e){throw or=!0,e}finally{Bn=!1}}},Rf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};ut.postMessage(r)});await Ha(ze,e)},Of=async e=>rn()?(En(),new Promise((t,n)=>{Tn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ut.postMessage(r,[e.buffer])})):Ur(e),Nf=async(e,t)=>{if(rn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return En(),new Promise((n,r)=>{Tn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ut.postMessage(i,a)})}else return Ka(e,t)},zf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("release",[t,n]);let r={type:"release",in:e};ut.postMessage(r)});Ya(e)},Bf=async(e,t,n,r,i,a)=>{if(rn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return En(),new Promise((o,s)=>{Tn("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};ut.postMessage(l,Ja(u))})}else return Qa(e,t,n,r,i,a)},Pf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ut.postMessage(r)});Za(e)}}),to,Uf,Lf,xw=Q(()=>{mt(),Df(),fe(),vi(),mu(),to=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Uf=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Bi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ue.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Pi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ue.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lf=class{async fetchModelAndCopyToWasmMemory(e){return Of(await Ui(e))}async loadModel(e,t){Rt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Nf(n,t),bt()}async dispose(){return zf(this.sessionId)}async run(e,t,n){Rt();let r=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],g=p[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);r.push(g),i.push(m)});let a=[],o=[];Object.entries(t).forEach(p=>{let h=p[0],g=p[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);a.push(g),o.push(m)});let s=r.map((p,h)=>to(p,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((p,h)=>p?to(p,()=>`output "${this.outputNames[o[h]]}"`):null),l=await Bf(this.sessionId,i,s,o,u,n),d={};for(let p=0;p<l.length;p++)d[this.outputNames[o[p]]]=a[p]??Uf(l[p]);return bt(),d}startProfiling(){}endProfiling(){Pf(this.sessionId)}}}),Ff={};An(Ff,{OnnxruntimeWebAssemblyBackend:()=>ro,initializeFlags:()=>no,wasmBackend:()=>Gf});var no,ro,Gf,vw=Q(()=>{mt(),Df(),xw(),no=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?uy("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ro=class{async init(e){no(),await Af(),await Rf(e)}async createInferenceSessionHandler(e,t){let n=new Lf;return await n.loadModel(e,t),n}},Gf=new ro});mt(),mt(),mt();var Sw="1.27.0";{let e=(vw(),Vn(Ff)).wasmBackend;Rn("webgpu",e,5),Rn("webnn",e,5),Rn("cpu",e,10),Rn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:Sw,enumerable:!0});/**
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
 */const Gr=new Map;function Wf(e,t){const n=Gr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Gr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{Wf(e,performance.now()-n)}}async function tt(e,t){const n=performance.now();try{return await t()}finally{Wf(e,performance.now()-n)}}function Tw(){return[...Gr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Ew(){Gr.clear()}const Iw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Mw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),kw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function qf(e){const t=Iw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Cw(e){const t=kw.exec(e);if(t===null)return qf(e);const[,n,r,i,a]=t,o=qf(a);if(n==="both")return o;const s=Mw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${s}${u} — ${o}`}function Aw(e,t,n,r){const i=t*n,a=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return a.set(e),a;for(let o=0;o<i;o+=1)a[o*4]=e[o*r],a[o*4+1]=e[o*r+1],a[o*4+2]=e[o*r+2],a[o*4+3]=255;return a}function ot(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Pn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Vf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Rw=114;function Ow(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function io(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=(d+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(p))),g=Math.min(i-1,h+1),m=Math.max(0,Math.min(1,p-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,_=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,_+1),T=Math.max(0,Math.min(1,w-_)),v=(h*r+_)*a,E=(h*r+x)*a,M=(g*r+_)*a,k=(g*r+x)*a,S=(d*t+y)*3;for(let A=0;A<3;A++){const z=o[v+A]*(1-T)+o[E+A]*T,Y=o[M+A]*(1-T)+o[k+A]*T;s[S+A]=Math.min(255,Math.max(0,Math.round(z*(1-m)+Y*m)))}}}return s}function Dn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=d*l,h=Math.min((d+1)*l,i);for(let g=0;g<t;g++){const m=g*u,y=Math.min((g+1)*u,r);let w=0,_=0,x=0,T=0;for(let E=Math.floor(p);E<h;E++){const M=Math.min(E+1,h)-Math.max(E,p);if(!(M<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const A=S*M,z=(E*r+k)*a;w+=o[z]*A,_+=o[z+1]*A,x+=o[z+2]*A,T+=A}}const v=(d*t+g)*3;s[v]=Math.min(255,Math.max(0,ot(w/T))),s[v+1]=Math.min(255,Math.max(0,ot(_/T))),s[v+2]=Math.min(255,Math.max(0,ot(x/T)))}}return s}function Hf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function sr(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,d=h=>Math.max(0,Math.min(r-1,h)),p=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const g=(h+.5)*l-.5,m=Math.floor(g),y=Hf(g-m);for(let w=0;w<t;w++){const _=(w+.5)*u-.5,x=Math.floor(_),T=Hf(_-x),v=(h*t+w)*3;for(let E=0;E<3;E++){let M=0;for(let k=0;k<4;k++){const S=p(m-1+k)*r;let A=0;for(let z=0;z<4;z++)A+=T[z]*o[(S+d(x-1+z))*a+E];M+=y[k]*A}s[v+E]=Math.min(255,Math.max(0,Math.round(M)))}}}return s}function Wr(e,t,n=1){const r=Ow(e.width,e.height,t,n),i=io(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Rw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const p=(l+d)*3,h=u+d;o[h]=i[p]/255,o[a+h]=i[p+1]/255,o[2*a+h]=i[p+2]/255}}return{tensor:o,params:r}}function Nw(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],d=e[o*6+3],p=e[o*6+4],h=e[o*6+5];if(p<n)continue;const g=Math.round(h);if(g<0||g>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,_=(d-t.padY)/t.scale;i.push({classIndex:g,confidence:p,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(_-y)],boxFloat:[m,y,w-m,_-y]})}return i}const ur=.8,jf=.65,zw=110,Bw=1280;function Pw(e,t,n){if(n==null)return ur;if(n.length===0)return jf;const r=Math.max(e,t);if(!(r>0))return ur;const i=Bw/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return ur;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=zw?jf:ur}const Kf=.25,Yf=.6;function Dw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(_=>Number.isFinite(_)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Kf:Yf)),d=Math.trunc(u*(s>=u?Yf:Kf)),p=Math.max(0,r-l),h=Math.max(0,i-d),g=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),o+d),y=g-p,w=m-h;return y<=0||w<=0?null:{x:p,y:h,width:y,height:w}}const Xf=3,Uw=.15,Lw=.6;function ao(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Qf(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Fw(e,t,n){try{const r=Math.trunc(Number(n)),i=n!=null&&Number.isFinite(r)&&r!==0;if(!e||e.length<2)return null;const a=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...a,...o].every(E=>Number.isFinite(E)))return null;const s=ao(a,o);if(!(s>0))return null;const u=[];for(const E of t??[]){const M=Math.trunc(Number(E.n));if(!Number.isFinite(M)||M<Xf)continue;const k=Qf(E.poly);k!==null&&u.push({owner:E.owner,c:k,n:M,d0:0,d1:0,ecart:0})}if(u.length<2)return null;u.sort((E,M)=>M.n-E.n);const l=u.slice(0,2);let d=!1;u.length>2&&l[1].n>0&&(d=u[2].n/l[1].n>Lw);for(const E of l)E.d0=ao(E.c,a),E.d1=ao(E.c,o),E.ecart=Math.abs(E.d0-E.d1);const p=[...l].sort((E,M)=>M.ecart-E.ecart),h=p[0],g=p[1],m=h.d0<h.d1?0:1,y=r>0?1:0,w=i?m===y?h:g:null,_=i?m===y?g:h:null,x=m===1?h.owner:g.owner,T=m===1?g.owner:h.owner,v=h.ecart/s<Uw;return{favoredOwner:(_==null?void 0:_.owner)??null,threatenedOwner:(w==null?void 0:w.owner)??null,ownerAtEnd0:T,ownerAtEnd1:x,distance:i?Math.abs(r):null,ambiguous:!!(v||d)}}catch{return null}}function Gw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}function Ww(e){try{const t=[];for(const u of e??[]){const l=Number(u==null?void 0:u.n);if(!Number.isFinite(l)||l<Xf)continue;const d=Qf(u.poly);d!==null&&t.push({owner:u.owner,c:d,n:l})}if(t.length<2)return null;t.sort((u,l)=>l.n-u.n);const[n,r]=t;if(n.owner===r.owner)return null;const i=Math.abs(n.c[0]-r.c[0]);if(Math.abs(n.c[1]-r.c[1])>i){const[u,l]=n.c[1]<r.c[1]?[n,r]:[r,n];return{left:u.owner,right:l.owner}}const[o,s]=n.c[0]<r.c[0]?[n,r]:[r,n];return{left:o.owner,right:s.owner}}catch{return null}}const qw=10.6;function Vw(e,t,n){if(!Number.isFinite(n)||n<=0)return null;const r=Number(e[0])-Number(t[0]),i=Number(e[1])-Number(t[1]),a=Math.hypot(r,i);return!Number.isFinite(a)||a<=0||a/n<qw?null:[Number(e[0]),Number(e[1])]}const Hw=.6;function Zf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,d=(e[a*6+3]-t.padY)/t.scale,p=ot((s+l)/2),h=ot((u+d)/2),g=ot((l-s+(d-u))/4);g>=1&&r.push({cx:p,cy:h,r:g})}return r}function jw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Hw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Kw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Pn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Jf(e,t,n){const r=Zf(e,t,n);return r.length===0?[]:Kw(jw(r))}function Yw(e,t,n){return Zf(e,t,n)}function oo(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Xw=.5,Qw=.7,Zw=.55;function so(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function em(e){if(e.length===0)return[];const t=(Xw*so(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Pn(i.map(a=>a[0]))),Math.trunc(Pn(i.map(a=>a[1]))),Math.trunc(Pn(i.map(a=>a[2]))),Math.trunc(Pn(i.map(a=>a[3])))]);if(r.length>=2){const i=so(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],d=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),p=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=d*p,g=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(h>=Qw*Math.min(g,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=so(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=Zw*i)}return r}const Jw=.7;function eb(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]);if(i<=n||a<=r)return 0;const o=(i-n)*(a-r),s=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=s+u-o;return l>0?o/l:0}function tm(e,t,n,r,i,a=Jw){const o=t-4;if(o<=0||n<=0)return[];const s=[];for(let l=0;l<n;l+=1){let d=0,p=0;for(let h=0;h<o;h+=1){const g=e[(4+h)*n+l];g>d&&(d=g,p=h)}d<i||s.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:d,cls:p})}s.sort((l,d)=>d.score-l.score);const u=[];for(const l of s){let d=!1;for(const p of u)if(p.cls===l.cls&&eb(p.box,l.box)>a){d=!0;break}d||u.push(l)}return u.map(l=>l.box)}const nm=["brown","grey","blue","green","yellow","red","purple"],rm={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},tb=.7;function uo(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let d=!1;for(const p of r){const h=e[p];if(h.family===null||a.family===null||h.family!==a.family)continue;const[g,m,y,w]=h.box,_=Math.max(0,Math.min(o+u,g+y)-Math.max(o,g)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),T=Math.max(1,Math.min(u*l,y*w));if(_*x>=tb*T){d=!0;break}}d?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function qr(e,t,n,r=nm.length){const i=r<=1,a=Nw(e,t,n,r).map(o=>{const s=i?null:nm[o.classIndex];return{color:s,family:s===null?null:rm[s],box:o.box,confidence:o.confidence}});return i?a:uo(a)}const nb=8,rb=.8,im=1.25;function ib(e){if(e.length<nb)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*im?t.push(o):u>s*im&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<rb*e.length||i.length===0?[]:i.filter(o=>o.family!==null&&o.color!==null).map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const ab=2.25,am=8;function ob(e){if(e.length<am)return[];const t=e.map(p=>[p.box[0]+p.box[2]/2,p.box[1]+p.box[3]/2]),n=e.map(p=>Math.hypot(p.box[2],p.box[3])).sort((p,h)=>p-h),r=ab*n[Math.floor(n.length/2)],i=r*r,a=e.map((p,h)=>h),o=p=>{for(;a[p]!==p;)a[p]=a[a[p]],p=a[p];return p};for(let p=0;p<e.length;p++)for(let h=p+1;h<e.length;h++){const g=t[p][0]-t[h][0],m=t[p][1]-t[h][1];g*g+m*m<=i&&(a[o(p)]=o(h))}const s=new Map;for(let p=0;p<e.length;p++){const h=o(p);s.set(h,[...s.get(h)??[],p])}let u=[];for(const p of s.values())p.length>u.length&&(u=p);if(u.length<am||u.length===e.length)return[];const l=new Set(u),d=e.map((p,h)=>h).filter(p=>!l.has(p));return d.filter(p=>e[p].family!==null&&e[p].color!==null).map(p=>({family:e[p].family,color:e[p].color,box:[...e[p].box],reason:`${e[p].color} banner sits in a detached group of ${d.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const Qe={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5,classes:7},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function Et(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const sb=.42,ub=22,lb=43,cb=120,db=1.5,pb=.72,hb=110,om=3;function lr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*sb);if(l<1)return 0;let d=0;for(let p=0;p<i;p++)for(let h=0;h<r;h++){if((h-s)**2+(p-u)**2>l*l)continue;const g=(p*r+h)*a,m=o[g],y=o[g+1],w=o[g+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),d+=1)}return d}function fb(e){let t=0,n=0,r=0,i=lr(e,!1,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=lr(e,!0,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function mb(e){let t=0,n=0,r=lr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=lr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function gb(e){let t=0;const n=lr(e,!0,(r,i,a)=>{t+=Et(r,i,a).s});return n===0?null:t/n}function yb(e){const t=fb(e);if(t===null||t.s<=ub)return 1;if(t.s>=cb){const n=mb(e);return n!==null&&n>=db?6:3}return t.s>=lb?3:6}function wb(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function bb(e,t){const n=[...t];if(e.length<om||t.length!==e.length)return n;const r=e.map(o=>gb(o)),i=r.filter(o=>o!==null);if(i.length<om)return n;const a=Pn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<pb*a&&o<hb&&(n[s]=1)}),n}function sm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),d=Math.max(0,u-o),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let g=0;g<l;g++){const m=(h*l+g)*3;if((g+a-n)**2+(h+o-r)**2<=i*i){const w=((h+o)*e.width+(g+a))*e.channels;p[m]=e.data[w],p[m+1]=e.data[w+1],p[m+2]=e.data[w+2]}else p[m]=255,p[m+1]=255,p[m+2]=255}return{width:l,height:d,channels:3,data:p}}function _b(e,t){const n=t.map(a=>sm(e,a)),r=n.map(a=>yb(a)),i=wb(t,r);return bb(n,i)}function $b(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function um(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const d=l*i,p=Math.min((l+1)*i,e.width);let h=0,g=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(d);w<p;w++){const _=Math.min(w+1,p)-Math.max(w,d);_<=0||(h+=e.data[m*e.width+w]*_*y,g+=_*y)}}r[o*t+l]=Math.min(255,Math.max(0,ot(h/g)))}}return{width:t,height:n,data:r}}function xb(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,ot(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function vb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const d=o+l,p=a+u;if(!(d<0||d>=t||p<0||p>=n)&&r[p*t+d]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function Sb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const d=o+l,p=a+u;if(d>=0&&d<t&&p>=0&&p<n&&r[p*t+d]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function lm(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,d=0;o[d++]=u,i[u]=s;let p=0,h=0,g=0;for(;l<d;){const m=o[l++],y=m%t,w=m/t|0;p+=1,h+=y,g+=w;for(let _=-1;_<=1;_++)for(let x=-1;x<=1;x++){if(x===0&&_===0)continue;const T=y+x,v=w+_;if(T<0||T>=t||v<0||v>=n)continue;const E=v*t+T;r[E]>0&&i[E]===0&&(i[E]=s,o[d++]=E)}}a[s]={area:p,centroidX:h/p,centroidY:g/p},s+=1}return{labels:i,stats:a}}function Tb(e,t,n){return cm(Float32Array.from(e.data),e.width,t,n)}function cm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let d=0;d<t;d++){const p=d-a,h=l-a,g=s*p-u*h+a,m=u*p+s*h+a,y=Math.floor(g),w=Math.floor(m),_=g-y,x=m-w,T=(M,k)=>M>=0&&M<t&&k>=0&&k<t?e[k*t+M]:r,v=T(y,w)*(1-_)+T(y+1,w)*_,E=T(y,w+1)*(1-_)+T(y+1,w+1)*_;i[l*t+d]=v*(1-x)+E*x}return i}const Eb=.9,Ib=.34,Mb=[.55,.6,.66,.72],kb=22,Cb=88,Ab=35,Un=28,lo=4,Rb=Array.from({length:15},(e,t)=>-21+t*3),dm=[-2,0,2],Ob=3,Nb=.3;function zb(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Bb(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),d=Math.floor((u-o)/2),p=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+p)*u+(w+d)]=e.data[(y+r)*e.width+(w+t)];const h=Un-2*lo,g=um({width:u,height:u,data:l},h,h),m=new Float32Array(Un*Un);for(let y=0;y<h;y++)for(let w=0;w<h;w++)m[(y+lo)*Un+(w+lo)]=g.data[y*h+w]>110?1:0;return m}function Pb(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Ib);if(u<4)return null;const l=o-u,d=s-u,p=2*u,h=2*u;if(p<6||h<6)return null;const g=new Int16Array(p*h),m=new Int16Array(p*h),y=new Int16Array(p*h),w=new Uint8Array(p*h),_=[],x=Math.min(p,h)/2;for(let L=0;L<p;L++)for(let P=0;P<h;P++){const R=((L+l)*n+(P+d))*i,{h:N,s:D,v:U}=Et(a[R],a[R+1],a[R+2]),j=L*h+P;g[j]=N,m[j]=D,y[j]=U,Math.sqrt((P-h/2)**2+(L-p/2)**2)/x<=t&&(w[j]=1,_.push(U))}if(_.length<16)return null;const T=Vf(_,55);let v=0,E=0,M=0;const k=L=>g[L]>=kb&&g[L]<=Cb&&m[L]>=Ab,S=L=>y[L]>=T&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<p*h;L++)w[L]===1&&(M+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(E+=1));const A=v>.5*M&&E<.15*M,z=new Uint8Array(p*h);if(A){const L=Vf(_,45);for(let P=0;P<p*h;P++)z[P]=w[P]===1&&y[P]<=L?255:0}else for(let L=0;L<p*h;L++)z[L]=S(L)?255:0;const Y={width:h,height:p,data:z},G=vb(Y);let q=lm(G),O=q;if(q.stats.length<=1&&(q=lm(Y),O=q,q.stats.length<=1))return null;const W=Math.min(p,h)/2;let K=0,X=-1;for(let L=1;L<O.stats.length;L++){const P=O.stats[L];if(P===void 0)continue;const R=Math.hypot(P.centroidX-h/2,P.centroidY-p/2)/W,N=P.area*(1-.6*Math.min(R,1));N>X&&(X=N,K=L)}if(K===0)return null;const le=new Uint8Array(p*h);for(let L=0;L<p*h;L++)le[L]=O.labels[L]===K?255:0;return Bb(Sb({width:h,height:p,data:le}))}function Db(e,t,n,r,i,a){const o=Un;let s=0,u=0;for(let l=0;l<o;l++){const d=l-a;if(!(d<0||d>=o))for(let p=0;p<o;p++){const h=p-i;if(h<0||h>=o)continue;const g=e[d*o+h];g!==0&&(u+=g,s+=g*n[l*o+p])}}return s/(u+r-s+1e-6)}function Ub(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Rb){const a=i===0?e:cm(e,Un,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of dm)for(const u of dm){const l=Db(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Lb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of Mb){const s=Pb(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([Ub(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Nb)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Ob))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}function jt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let d=0;d<i;d++)for(let p=0;p<r;p++){let h,g;n===1?(h=i-1-d,g=p):n===2?(h=r-1-p,g=i-1-d):(h=d,g=r-1-p);const m=(d*r+p)*a,y=(g*s+h)*a;for(let w=0;w<a;w++)l[y+w]=o[m+w]}return{width:s,height:u,channels:a,data:l}}const Fb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Fb)*255));return e})();const Gb=5e3,Wb=.75,qb=15,Vb=1.25,Hb=2.4,jb=.003,Kb=.85,Yb=2600,Xb=2,co=.3,pm=.1,hm=.012,Qb=22,fm=.5,mm=.12;function ht(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Zb(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,d]=e[u],[p,h]=e[(u+1)%4];r+=l*h-p*d}const i=Math.abs(r/2)/(t*n);if(i<jb||i>Kb)return!1;const a=e.map((u,l)=>{const d=e[(l+1)%4];return Math.hypot(d[0]-u[0],d[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=Vb&&s<=Hb}function Jb(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function e_(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(co*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-o*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-o*r[G][0]-o*r[G][1];const d=ht(e,t),p=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(d,p,h,new e.Size(s,u),e.WARP_INVERSE_MAP);const g=new e.Mat;e.cvtColor(p,g,e.COLOR_RGB2Lab),d.delete(),h.delete();const m=g.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],_=(G,q)=>{const O=(q*s+G)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let G=0;G<u;G++)for(let q=0;q<s;q++)(G<y||G>=u-y||q<y||q>=s-y)&&_(q,G);const x=G=>{G.sort((O,W)=>O-W);const q=G.length>>1;return G.length%2?G[q]:(G[q-1]+G[q])/2},T=[x(w[0]),x(w[1]),x(w[2])],v=(G,q)=>{const O=(q*s+G)*3,W=m[O]-T[0],K=m[O+1]-T[1],X=m[O+2]-T[2];return Math.sqrt(W*W+K*K+X*X)>Qb},E=Math.max(6,Math.trunc(pm*i)),M=Math.max(6,Math.trunc(pm*a)),k=Math.max(2,Math.trunc(hm*i)),S=Math.max(2,Math.trunc(hm*a)),A=G=>{let q=0,O=0;for(const W of G)O=W?O+1:0,O>q&&(q=O);return q/Math.max(1,G.length)},z=G=>{let q,O,W,K,X;if(G==="L"?(q=o,O=o+a,W=Math.max(0,o-k-E),K=Math.max(0,o-k),X=!1):G==="R"?(q=o,O=o+a,W=o+i+k,K=Math.min(s,o+i+k+E),X=!1):(q=Math.max(0,o-S-M),O=Math.max(0,o-S),W=o,K=o+i,X=!0),O<=q||K<=W)return 0;const le=[];if(X)for(let L=W;L<K;L++){let P=0;for(let R=q;R<O;R++)v(L,R)&&P++;le.push(P/(O-q)>fm)}else for(let L=q;L<O;L++){let P=0;for(let R=W;R<K;R++)v(R,L)&&P++;le.push(P/(K-W)>fm)}return A(le)},Y={L:z("L"),R:z("R"),T:z("T")};return p.delete(),g.delete(),Y}const t_=.5;function n_(e){return e!==null&&e.R>=mm?["R"]:[]}function gm(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=co*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},d=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,_]=l[y],x=n[w],T=n[_];let v=-(T[1]-x[1]),E=T[0]-x[0];const M=(x[0]+T[0])/2,k=(x[1]+T[1])/2;v*(M-s)+E*(k-u)<0&&(v=-v,E=-E);const S=Math.hypot(v,E);S<=1e-6||(v=v/S*o,E=E/S*o,d.push([x[0]+v,x[1]+E],[T[0]+v,T[1]+E]))}const p=d.map(y=>y[0]),h=d.map(y=>y[1]),g=Math.round(Math.min(...p)),m=Math.round(Math.min(...h));return{x:g,y:m,width:Math.round(Math.max(...p))-g,height:Math.round(Math.max(...h))-m}}const r_=.88;function ym(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(co*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*r_),d=s-l;if(d<1)return null;const p=ht(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),g=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(h,g),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),_=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(p,x,_,new e.Size(s,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,d,u)),v=new e.Mat;T.copyTo(v);const E=v.data,M=new Uint8ClampedArray(d*u*3);M.set(E.subarray(0,M.length));for(const k of[p,h,g,m,_,x,T,v])try{k.delete()}catch{}return{width:d,height:u,channels:3,data:M}}function i_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),d=Math.max(0,Math.trunc(i-u)),p=Math.min(n.width,Math.trunc(i+o+u)),h=Math.max(0,Math.trunc(a-l)),g=Math.min(n.height,Math.trunc(a+s+l));if(p-d<8||g-h<8)return null;const m=Math.max(n.width,n.height)<Yb?Xb:1,y=ht(e,n),w=ht(e,t),_=y.roi(new e.Rect(d,h,p-d,g-h)),x=new e.Mat;m!==1?e.resize(_,x,new e.Size(0,0),m,m,e.INTER_CUBIC):_.copyTo(x);const T=new e.Mat,v=new e.Mat;e.cvtColor(w,T,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const E=new e.ORB(Gb),M=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,z=new e.Mat,Y=[y,w,_,x,T,v,M,k,S,A,z],G=te=>{for(const re of Y)try{re.delete()}catch{}try{E.delete()}catch{}return te};if(E.detectAndCompute(T,z,M,S),E.detectAndCompute(v,z,k,A),S.rows<8||A.rows<8)return G(null);const q=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;q.knnMatch(S,A,O,2);const W=[],K=[];for(let te=0;te<O.size();te++){const re=O.get(te);if(re.size()===2){const ge=re.get(0),xe=re.get(1);if(ge.distance<Wb*xe.distance){const Me=M.get(ge.queryIdx).pt,Ae=k.get(ge.trainIdx).pt;W.push(Me.x,Me.y),K.push(Ae.x,Ae.y)}}}if(O.delete(),q.delete(),W.length/2<8)return G(null);const X=e.matFromArray(W.length/2,1,e.CV_32FC2,W),le=e.matFromArray(K.length/2,1,e.CV_32FC2,K),L=new e.Mat,P=e.findHomography(X,le,e.RANSAC,5,L);let R=0;for(let te=0;te<L.rows;te++)R+=L.data[te];const N=P.rows===3?[...P.data64F]:null;if(X.delete(),le.delete(),L.delete(),P.delete(),N===null||R<qb)return G(null);const D=1/m,U=[[D,0,d],[0,D,h],[0,0,1]],j=[0,1,2].map(te=>[0,1,2].map(re=>U[te][0]*N[re]+U[te][1]*N[3+re]+U[te][2]*N[6+re]));return G({H:j,inliers:R})}const a_=620;function o_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function s_(e,t,n,r){const i=wm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(E=>Math.trunc(E));if(Math.min(s,u)>=a_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),d=Math.trunc(u*.25),p=Math.max(0,a-l),h=Math.max(0,o-d),g=Math.min(t.width,a+s+l),m=Math.min(t.height,o+u+d);if(g<=p||m<=h)return null;const y=ht(e,t),w=y.roi(new e.Rect(p,h,g-p,m-h)),_=new e.Mat;e.resize(w,_,new e.Size((g-p)*2,(m-h)*2),0,0,e.INTER_CUBIC);const x=o_(e,_);for(const E of[y,w,_])try{E.delete()}catch{}const T=[(a-p)*2,(o-h)*2,s*2,u*2],v=wm(e,x,n,T);return v===null?null:{...v,footprint:v.footprint.map(([E,M])=>[E*.5+p,M*.5+h])}}catch{return null}}function wm(e,t,n,r){const i=i_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([_,x])=>Jb(i.H,_,x));if(!Zb(o,t.width,t.height))return null;const s=ht(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const d=ht(e,n),p=new e.Mat,h=new e.Mat;e.cvtColor(l,p,e.COLOR_RGB2GRAY),e.cvtColor(d,h,e.COLOR_RGB2GRAY);const g=new e.Mat;e.matchTemplate(p,h,g,e.TM_CCOEFF_NORMED);const m=g.data32F[0];for(const _ of[s,u,l,d,p,h,g])try{_.delete()}catch{}if(m<t_)return null;const y=e_(e,t,n,i.H);if(y===null)return null;const w=n_(y);return{built:Math.max(y.L,y.R,y.T)>=mm,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}const u_=.3,l_=.3;function c_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=u_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,d=Math.max(s,u,l)<l_;if(!r&&!d)return;t.some(([h,g])=>h>=a.zone.x0&&h<=a.zone.x1&&g>=a.zone.y0&&g<=a.zone.y1)||i.push(o)}),i}const Nt=128,Ln=.5;function po(e){const t=Dn(e,Nt,Nt),n=Nt*Nt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function bm(e){const t=e[1]??0;return{built:t>=Ln,prob:t}}const cr=120,dr=179,d_=1.3,p_=3.6,h_=.45,f_=6e-4,m_=.02,g_=6e3,y_=.78,w_=1.25,b_=2.4,__=.05,$_=1.5,x_=.5,v_=.9,S_=150,T_=18,E_=34,I_=90,M_=130,k_=.13,C_=.15,Vr="magistrates-guild",ho="merchants-guild";function A_(e,t){const n=ht(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[cr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[dr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const d=new e.Mat,p=new e.Mat,h=new e.Mat,g=e.connectedComponentsWithStats(l,d,p,h,8);l.delete(),d.delete(),h.delete();const m=t.width*t.height,y=[];for(let w=1;w<g;w++){const _=p.intAt(w,0),x=p.intAt(w,1),T=p.intAt(w,2),v=p.intAt(w,3),E=p.intAt(w,4),M=E/m;M<f_||M>m_||E/Math.max(T*v,1)<h_||y.push({x:_,y:x,w:T,h:v})}return p.delete(),{blobs:y,mask:s,maskWidth:t.width}}function R_(e,t,n,r,i,a,o){const s=e,u=a,l=o,d=i;if(!d.gray){const D=ht(e,r);d.gray=new s.Mat,s.cvtColor(D,d.gray,s.COLOR_RGB2GRAY),D.delete(),d.k=new s.KeyPointVector,d.d=new s.Mat;const U=new s.Mat;u.detectAndCompute(d.gray,U,d.k,d.d),U.delete()}const p=n,h=new s.Mat,g=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(p,h,g,m),h.delete();const y=D=>(g.delete(),m.delete(),D);if(d.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(d.d,m,w,2);const _=[],x=[];for(let D=0;D<w.size();D++){const U=w.get(D);if(U.size()===2){const j=U.get(0);if(j.distance<y_*U.get(1).distance){const te=d.k.get(j.queryIdx).pt,re=g.get(j.trainIdx).pt;_.push(te.x,te.y),x.push(re.x,re.y)}}}if(w.delete(),_.length/2<8)return y(null);const T=s.matFromArray(_.length/2,1,s.CV_32FC2,_),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),E=new s.Mat,M=s.findHomography(T,v,s.RANSAC,5,E);if(T.delete(),v.delete(),E.delete(),M.rows!==3)return M.delete(),y(null);const k=[...M.data64F],S=(D,U)=>{const j=k[6]*D+k[7]*U+k[8];return[(k[0]*D+k[1]*U+k[2])/j,(k[3]*D+k[4]*U+k[5])/j]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,U])=>S(D,U));if(A.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return M.delete(),y(null);const z=A.map((D,U)=>{const j=A[(U+1)%4];return Math.hypot(j[0]-D[0],j[1]-D[1])}),Y=Math.min(...z);if(Y<1)return M.delete(),y(null);const G=Math.max(...z)/Y;let q=0;for(let D=0;D<4;D++){const[U,j]=A[D],[te,re]=A[(D+1)%4];q+=U*re-te*j}const O=t,W=Math.abs(q/2)/(O.rows*O.cols);if(G<w_||G>b_||W<__||W>$_)return M.delete(),y(null);const K=new s.Mat;s.warpPerspective(O,K,M,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),M.delete();const X=new s.Mat;s.cvtColor(K,X,s.COLOR_RGB2GRAY),K.delete();const le=Math.trunc(r.height/2),L=X.roi(new s.Rect(0,0,r.width,le)),P=d.gray.roi(new s.Rect(0,0,r.width,le)),R=new s.Mat;s.matchTemplate(L,P,R,s.TM_CCOEFF_NORMED);const N=R.data32F[0];return L.delete(),P.delete(),R.delete(),X.delete(),y(N)}function O_(e,t,n){let r,i;if(n===Vr)r=ho,i=k_;else if(n===ho)r=Vr,i=C_;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let d=0,p=null;for(const[h,g]of[[0,l],[l,s]]){let m=0,y=0;for(let _=o;_<o+u;_++)for(let x=a+h;x<a+g;x++){const T=(_*e.width+x)*e.channels,{h:v,s:E,v:M}=Et(e.data[T],e.data[T+1],e.data[T+2]);if(v>=cr&&v<=dr&&E>=30&&E<=170&&M<=170)continue;m++,(r===ho?v>=T_&&v<=E_&&E>=I_&&M>=M_:v>=95&&v<=130&&E>=80)&&y++}if(m<20)continue;const w=y/m;w>d&&(d=w,p={x:a+h,y:o,w:g-h,h:u})}return d>=i&&p!==null?{id:r,box:p}:null}const N_=1.7,z_=140,B_=170,P_=.2,D_=.1,_m=240,$m=80,xm=60,U_=50,vm="scientists-guild",Sm="tacticians-guild",Hr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function L_(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let v=0;v<o;v++){let E=0;for(let M=0;M<a;M++)e[(i+v)*t+r+M]>0&&E++;s[v]=E/a}const u=[];for(let v=0;v<o;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],d=u[u.length-1],p=d-l;if(p<5)return[];const h=a/p;if(h<d_||h>p_)return[];if(h>=N_)return[{x:r,y:i+l,w:a,h:p}];const g=new Float32Array(o),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const E=Math.exp(-(v*v)/(2*m*m));y.push(E),w+=E}for(let v=0;v<o;v++){let E=0;for(let M=-4;M<=4;M++){const k=Math.min(o-1,Math.max(0,v+M));E+=s[k]*y[M+4]}g[v]=E/w}const _=l+Math.trunc(p*.3),x=l+Math.trunc(p*.78);let T=l+Math.trunc(p/2);if(x>_){let v=1/0;for(let E=_;E<x;E++)g[E]<v&&(v=g[E],T=E)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:d-T}]}function F_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let d=0;d<o;d++){const p=((r+l)*e.width+n+d)*e.channels,h=(l*o+d)*3;u[h]=e.data[p],u[h+1]=e.data[p+1],u[h+2]=e.data[p+2]}return{width:o,height:s,channels:3,data:u}}function G_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Et(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=z_&&o<=B_&&n++)}return t===0?0:n/t}function W_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);!(a>=cr&&a<=dr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function Tm(e,t){const n=ht(e,t),r=new e.Mat;e.resize(n,r,new e.Size(_m,$m),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:_m,height:$m,channels:3,data:i}}function q_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Em(e,t){const n=q_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:_,v:x}=Et(n.data[y],n.data[y+1],n.data[y+2]);!(w>=cr&&w<=dr&&_>=30&&_<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const o=a<20,s=ht(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let d=0,p=0,h=0,g=0;for(let m=0;m<r;m++)!o&&i[m]===0||(d+=l[m*3]*100/255,p+=l[m*3+1]-128,h+=l[m*3+2]-128,g++);return u.delete(),g===0?[0,0,0]:[d/g,p/g,h/g]}function V_(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h:d,s:p,v:h}=Et(e.data[l],e.data[l+1],e.data[l+2]);d>=cr&&d<=dr&&p>=30&&p<=170&&h<=170||(t++,p>=70&&h>=50&&(d>=95&&d<=130?n++:d>=35&&d<=92?r++:d<=10?i++:d>=15&&d<=34&&h>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function H_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);o>=xm&&s>=U_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<xm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function j_(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function Im(e,t){const n=ht(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function K_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=Tm(e,a);n.set(i,Im(e,o)),Hr.includes(i)&&r.set(i,Em(e,o))}return{gray:n,warmLab:r}}function Y_(e,t,n){const r=Tm(e,t),i=V_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Vr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return vm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Sm;const a=H_(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=Vr;else if(s==="green")u=vm;else if(s==="red")u=Sm;else{const l=Im(e,r);let d="",p=-2;for(const h of Hr){const g=n.gray.get(h);if(g===void 0)continue;const m=j_(l,g);m>p&&(p=m,d=h)}u=d||Hr[0]}if(Hr.includes(u)&&n.warmLab.size>0){const l=Em(e,r);let d=u,p=1/0;for(const[h,g]of n.warmLab){const m=Math.hypot(l[0]-g[0],l[1]-g[1],l[2]-g[2]);m<p&&(p=m,d=h)}return d}return u}function X_(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=A_(e,t);if(o.length===0||n.size===0)return a;const l=e,d=new l.ORB(g_),p=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const g=ht(e,t);let m=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const _=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),T=Math.max(S_,Math.trunc(v_*Math.max(w.w,w.h))),v=Math.max(0,_-T),E=Math.max(0,x-T),M=Math.min(t.width,_+T),k=Math.min(t.height,x+T);if(M-v<16||k-E<16)continue;const S=g.roi(new l.Rect(v,E,M-v,k-E)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let z=null,Y=-2;for(const[W,K]of n){if(r!==void 0&&Date.now()>r)break;const X=R_(e,S,A,K,h.get(W),d,p);X!==null&&X>Y&&(Y=X,z=W)}S.delete(),A.delete();const G=new Set;if(z!==null&&Y>=x_){a.push({id:z,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(z);const W=O_(t,w,z);W&&(a.push({id:W.id,boundingBox:{x:W.box.x,y:W.box.y,width:W.box.w,height:W.box.h},confidence:.9}),G.add(W.id))}if(i===void 0||i.size===0)continue;const q=L_(s,u,w);if(q.length!==2)continue;const O=q.map(W=>F_(t,W));if(!O.some(W=>W.width*W.height===0||W_(W)<D_))for(let W=0;W<q.length;W++){const K=O[W];if(G_(K)<P_)continue;m===null&&(m=K_(e,i));const X=Y_(e,K,m);if(X&&!G.has(X)){G.add(X);const le=q[W];a.push({id:X,boundingBox:{x:le.x,y:le.y,width:le.w,height:le.h},confidence:1})}}}}finally{g.delete();for(const w of h.values()){const _=w;for(const x of["gray","k","d"])try{(y=_[x])==null||y.delete()}catch{}}try{d.delete(),p.delete()}catch{}}return a}const Mm=128,Q_=.56,Z_=15,J_=.58,e1=70,t1=50,n1=.12,r1=.2,i1=.1,a1=.17,km=.15;function o1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Cm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),d=Math.max(0,s-u),p=Math.min(n,o+u),h=Math.min(r,s+u),g=p-l,m=h-d,y=new Uint8Array(g*m*i);for(let w=0;w<m;w++){const _=((w+d)*n+l)*i;y.set(a.subarray(_,_+g*i),w*g*i)}return{width:g,height:m,channels:i,data:y}}function s1(e){const t=Cm(e,Q_),n=$b(t),r=um(n,Mm,Mm);return xb(r)}function u1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,d=t[u]-i;a+=l*d,o+=l*l,s+=d*d}return a/(Math.sqrt(o*s)+1e-6)}function l1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Cm(e,J_),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const g=h*a,{h:m,s:y,v:w}=Et(o[g],o[g+1],o[g+2]);y>=e1&&w>=t1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const d=u/s,p=l/s;return d>=n1&&t.set("masonry",km*Math.min(1,d/r1)),p>=i1&&t.set("strategy",km*Math.min(1,p/a1)),t}function c1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=s1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Z_)a.push(Tb(n,l,i));const o=new Map;for(const[l,d]of t){let p=-1/0;for(const h of a){const g=u1(h,d);g>p&&(p=g)}o.set(l,p)}for(const[l,d]of l1(e))d>0&&o.has(l)&&o.set(l,o.get(l)+d);let s="",u=-1/0;for(const[l,d]of o)d>u&&(s=l,u=d);return[s,u]}const an=224,d1=512,p1=[.485,.456,.406],h1=[.229,.224,.225];function f1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function m1(e){const t=io(e,an,an),n=an*an,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-p1[a])/h1[a];return r}function g1(e){const t=3*an*an,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(m1(jt(e,r)),r*t);return n}function y1(e,t=d1){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function w1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Fn=96,b1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],_1=.45;function $1(e){const t=io(e,Fn,Fn),n=Fn*Fn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function x1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=_1?b1[t]??"":"",prob:n}}const Kt=128,v1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],S1=.5;let Am=null;function T1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Am=e}function Rm(){return Am??S1}let Om=null;function E1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Om=[...e]}function I1(){return Om??v1}const Nm="__inverse";function M1(e){return e.endsWith(Nm)?[e.slice(0,-Nm.length),!0]:[e,!1]}function k1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n*3);for(let o=0;o<t*n;o++)for(let s=0;s<3;s++)a[o*3+s]=i[o*r+s];return a}function C1(e){const t=Math.min(Kt/e.width,Kt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?k1(e):t<1?Dn(e,n,r):sr(e,n,r),a=Kt*Kt,o=new Float32Array(3*a);o.fill(114/255);const s=Math.floor((Kt-r)/2),u=Math.floor((Kt-n)/2);for(let l=0;l<r;l++)for(let d=0;d<n;d++){const p=(l*n+d)*3,h=(l+s)*Kt+(d+u);for(let g=0;g<3;g++)o[g*a+h]=i[p+g]/255}return o}async function A1(e,t){const{index:n,prob:r}=R1(await t(C1(e))),[i,a]=M1(I1()[n]??"");return r<Rm()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:a}}function R1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const zt=96,O1=[1,2,3,4,5,6,7],N1=.8,z1=.99;function B1(e){const t=sr(e,e.width*2,e.height*2),n=e.width*2<zt&&e.height*2<zt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?sr(r,zt,zt):Dn(r,zt,zt),a=zt*zt,o=new Float32Array(3*a);for(let s=0;s<a;s++)for(let u=0;u<3;u++)o[u*a+s]=i[s*3+u]/255;return o}function P1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:O1[t],prob:e[t]}}const on=128,zm=.35,D1=["fp","laurel"],U1=.85,Gn=40;function L1(e){const r=(e.width<on&&e.height<on?sr:Dn)(e,on,on),i=on*on,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function F1(e){return e[D1.indexOf("fp")]}const sn=128,G1=.15,jr=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],fo=7,Bm=.9;function W1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*G1),d=Math.max(0,ot(s-l/2)),p=Math.max(0,ot(u-l/2)),h=Math.min(t,ot(s+l/2)),g=Math.min(n,ot(u+l/2));return h-d<8||g-p<8?null:{x:d,y:p,w:h-d,h:g-p}}function q1(e){const r=(e.width<sn&&e.height<sn?sr:Dn)(e,sn,sn),i=sn*sn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function V1(e){let t=0;for(let a=1;a<jr.length;a++)e[a]>e[t]&&(t=a);const n=e[t],r=t>=fo;let i=0;for(let a=1;a<fo;a++)e[a]>e[i]&&(i=a);return{className:jr[t],probability:n,rejected:r&&n>=Bm,bestColour:jr[i]}}function H1(e,t){const n=e.color,r={...e,classColor:t.className,classColorProba:Math.round(t.probability*1e4)/1e4};if(n==null||t.className===n)return r;const a=jr.indexOf(t.className)<fo?`le classifieur préfère ${t.className} (P=${t.probability.toFixed(3)}) là où le détecteur lit ${n}`:`le classifieur penche pour ${t.className} (P=${t.probability.toFixed(3)}, sous le seuil de rejet de ${Bm.toFixed(2)}) là où le détecteur lit ${n}`;return e.suspect?r:{...r,suspect:!0,suspectReason:a}}const Kr=3,j1=2.2,K1=.3,Y1=.65,X1=3,Q1=1.3,Z1=.77;function Pm(e,t,n){const[r,i,a,o]=e,s=[];return r<=Kr&&s.push("gauche"),i<=Kr&&s.push("haut"),r+a>=t-Kr&&s.push("droit"),i+o>=n-Kr&&s.push("bas"),s}function Dm(e){const t=e[3]/Math.max(e[2],1);return t>=Q1?"portrait":t<=Z1?"paysage":null}function mo(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function J1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>Y1)return!0;return!1}function e2(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Pm(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(_=>({banner:_,edgeReason:w})),suspects:[]});if(J1(n,r,i))return u("photo-piste");if(s.length<X1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=mo(s.map(w=>w.box[2]*w.box[3])),d=mo(s.map(w=>w.box[2])),p=mo(s.map(w=>w.box[3])),h=new Set(s.map(w=>Dm(w.box)).filter(w=>w!==null)),g=[...s],m=[],y=[];for(const w of o){const _=Pm(w.box,r,i),[,,x,T]=w.box,v=l>0?x*T/l:0,E=[];(_.includes("gauche")||_.includes("droit"))&&E.push(d>0?x/d:1),(_.includes("haut")||_.includes("bas"))&&E.push(p>0?T/p:1);const M=E.length>0?Math.min(...E):1,k=Dm(w.box);v>j1?m.push({banner:w,edgeReason:"bord-grosse"}):M<K1?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&h.size>0&&!h.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(g.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:g,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const t2=1,n2=1.5;function r2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function i2(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function a2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function o2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let d=null;for(const[h,g]of r2(e)){const m=i2(u,l,h,g);m!==null&&(d===null||m[0]<d[0])&&(d=m)}if(d===null)return null;const p=a2(e);return p===null?null:{distBord:d[0]/r,decalLat:d[1]/r,perpendiculaire:p!==o>s}}catch{return null}}function s2(e,t,n,r=t2,i=n2){const a=[];for(const[o,s]of t??[]){const u=o2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const gt=64,Um=.5,u2=[.67,1.24];function Lm(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const d=e.channels,p=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const _=a+w,x=_-n;for(let T=0;T<u;T++){const v=i+T,E=v-t,M=(w*u+T)*3;if(E*E+x*x<=h){const k=(_*e.width+v)*d;p[M]=e.data[k],p[M+1]=e.data[k+1],p[M+2]=e.data[k+2]}else p[M]=255,p[M+1]=255,p[M+2]=255}}const g=Dn({width:u,height:l,channels:3,data:p},gt,gt),m=gt*gt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let _=0;_<3;_++)y[_*m+w]=g[w*3+_]/255;return y}function l2(e){return e[1]}const Yr=[1,3,6],c2=.5;function d2(e){if(e.length!==Yr.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:Yr[t],prob:e[t]}}function p2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&Yr.includes(i.denomination)&&i.prob>=c2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const h2=2.25,Xr=3,f2=1.15,m2=.5,g2=2.5,y2=.75,w2=2.25,b2=1.3,_2=.77;function Qr(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function $2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Fm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const d=(u-o)*(t-s)/(l-s)+o;e<d&&(r=!r)}}return r}function x2(e,t,n){if(n.length>=3&&Fm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],d=u-o,p=l-s,h=d*d+p*p,g=h===0?0:Math.max(0,Math.min(1,((e-o)*d+(t-s)*p)/h));r=Math.min(r,Math.hypot(e-(o+g*d),t-(s+g*p)))}return r}function v2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function S2(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,d]=n;let p=0,h=1;const g=[[-a,r-s],[a,l-r],[-o,i-u],[o,d-i]];for(const[m,y]of g){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?p=Math.max(p,w):h=Math.min(h,w),p>h)return!1}return p>=h?!1:p>=.1&&h<=.95||h-p>=.15}const go=e=>e.box[3]/Math.max(1,e.box[2]),Yt=e=>go(e)>f2,Wn=e=>go(e)>=b2||go(e)<=_2;function yo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Gm(e,t,n,r,i){const a=new Set(t),o=[...e.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:a.has(R)?"card":"tucked",src:["banner",R]})),...n.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(P=>[P.box[0]+P.box[2]/2,P.box[1]+P.box[3]/2]);let d=o.filter(P=>P.kind!=="wonder").map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R);d.length===0&&(d=o.map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R));const p=d[Math.floor(d.length/2)],h=(h2*p)**2,g=o.map((P,R)=>R),m=P=>{let R=P;for(;g[R]!==R;)g[R]=g[g[R]],R=g[R];return R},y=o.map((P,R)=>P.kind==="card"?R:-1).filter(P=>P>=0),w=o.map((P,R)=>P.kind!=="card"?R:-1).filter(P=>P>=0);for(let P=0;P<y.length;P+=1)for(let R=P+1;R<y.length;R+=1){const N=y[P],D=y[R],U=o[N],j=o[D];if(Wn(U)&&Wn(j)&&Yt(U)!==Yt(j))continue;const te=l[N][0]-l[D][0],re=l[N][1]-l[D][1],ge=te*te+re*re;let xe=ge<=h;!xe&&Wn(U)&&Wn(j)&&Yt(U)===Yt(j)&&ge<=(4*p)**2&&(xe=Qr(yo(U),yo(j))<=.5*p),xe&&(g[m(N)]=m(D))}for(let P=0;P<w.length;P+=1)for(let R=P+1;R<w.length;R+=1){const N=w[P],D=w[R];Qr(o[N].box,o[D].box)<=y2*p&&(g[m(N)]=m(D))}const _=new Map;for(const P of w){const R=m(P);_.set(R,[..._.get(R)??[],P])}const x=new Map;for(const P of y){const R=m(P);x.set(R,[...x.get(R)??[],P])}for(const P of _.values()){const R=P.filter(j=>o[j].kind==="wonder"&&Wn(o[j])).map(j=>Yt(o[j])),N=R.length>0?R.filter(Boolean).length*2>R.length:null,D=[];for(const[j,te]of x){let re=Number.POSITIVE_INFINITY;for(const Me of P)for(const Ae of te)re=Math.min(re,Qr(o[Me].box,o[Ae].box));if(re>w2*p)continue;const xe=te.filter(Me=>Yt(o[Me])).length/te.length>=.5;N!==null&&xe!==N||D.push([j,re,xe])}if(D.length===0)continue;const U=new Set(D.map(j=>j[2]));if(D.length>=2&&U.size===1&&N!==null){const j=D[0][0];for(const[te]of D.slice(1))g[m(te)]=m(j);g[m(P[0])]=m(j)}else{const j=D.reduce((te,re)=>re[1]<te[1]?re:te);g[m(P[0])]=m(j[0])}}let T=new Map;for(let P=0;P<o.length;P+=1){const R=m(P);T.set(R,[...T.get(R)??[],P])}const v=o.map((P,R)=>P.kind==="wonder"?R:-1).filter(P=>P>=0);if(v.length>0){const P=(N,D)=>{const[U,j,te,re]=yo(o[N]),[ge,xe,Me,Ae]=o[D].box,ne=Math.max(0,Math.min(U+te,ge+Me)-Math.max(U,ge)),ee=Math.max(0,Math.min(j+re,xe+Ae)-Math.max(j,xe));return ne*ee>=.9*o[N].box[2]*o[N].box[3]},R=new Map;for(let N=0;N<o.length;N+=1)if(!(o[N].kind!=="card"||!Wn(o[N])))for(const D of v){const U=Qr(o[N].box,o[D].box);if(U<=.8*p&&Yt(o[N])!==Yt(o[D])&&P(N,D)){const j=R.get(D);(!j||U<j[1])&&R.set(D,[N,U])}}for(const[N,[D]]of R){const U=m(N);for(const[j,te]of T){const re=te.indexOf(D);if(re>=0&&j!==U){te.splice(re,1),T.set(U,[...T.get(U)??[],D]),o[D].kind="tucked";break}}}T=new Map([...T].filter(([,N])=>N.length>0))}const E=P=>P.filter(R=>o[R].kind==="card").length,M=P=>{const R=P.filter(N=>o[N].kind==="card"||o[N].kind==="wonder");return R.length===0?null:R.filter(N=>Yt(o[N])).length/R.length},k=P=>[P.reduce((R,N)=>R+l[N][0],0)/P.length,P.reduce((R,N)=>R+l[N][1],0)/P.length],S=[i[0]/2,i[1]/2],A=[...T.values()].sort((P,R)=>{const N=E(P),D=E(R);if(N!==D)return D-N;const U=Math.hypot(k(P)[0]-S[0],k(P)[1]-S[1]),j=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return U-j}),z=k(A[0]),Y=M(A[0]),G=A.map((P,R)=>{if(R===0||E(P)<Xr)return"player";const N=M(P),D=N!==null&&Y!==null&&Math.abs(N-Y)>=m2,U=k(P),j=r.some(te=>S2(z,U,te));return D||j?"opponent":"player"});if(!G.includes("opponent")){const P=N=>N.reduce((D,U)=>D+(o[U].kind==="wonder"?1:0),0);let R=G.map((N,D)=>D).filter(N=>N>0&&(E(A[N])>=Xr||P(A[N])>=2));if(R.reduce((N,D)=>N+P(A[D]),0)<1&&(R=[]),R.length>0&&(E(A[0])<2*Xr||R.reduce((N,D)=>N+E(A[D]),0)<2*Xr)&&(R=[]),R.length>0){const N=new Map(R.map(j=>[j,k(A[j])])),D=(j,te)=>(j[0]-te[0])**2+(j[1]-te[1])**2;if(R.every((j,te)=>R.slice(te+1).every(re=>D(N.get(j),N.get(re))<Math.min(D(N.get(j),z),D(N.get(re),z)))))for(const j of R)G[j]="opponent"}}const q=[],O=[];let W=!1;A.forEach((P,R)=>{const N=G[R];N==="opponent"&&(W=!0);const D=[],U=[];for(const j of P){const[te,re,ge,xe]=o[j].box;D.push([te,re],[te+ge,re],[te,re+xe],[te+ge,re+xe]),U.push(o[j].box);const[Me,Ae]=o[j].src;Me==="banner"?s[Ae]=N:u[Ae]=N}q.push([N,$2(D)]),O.push([N,U])});const K=(P,R,N)=>Math.min(...O[N][1].map(D=>v2(P,R,D))),X=(P,R)=>q.map(([,N],D)=>N.length>=3&&Fm(P,R,N)?D:-1).filter(N=>N>=0),le=(P,R)=>{if(q.length===0)return"player";const N=p>0?g2*p:Number.POSITIVE_INFINITY,D=X(P,R);if(D.length>0){const te=D.reduce((re,ge)=>K(P,R,ge)<K(P,R,re)?ge:re);return q[te][0]}let U=-1,j=Number.POSITIVE_INFINITY;return q.forEach(([,te],re)=>{const ge=x2(P,R,te);ge<j&&(U=re,j=ge)}),U>=0&&j<=N?q[U][0]:"none"},L=(P,R)=>{if(q.length===0)return"none";const N=X(P,R);if(N.length===0)return"none";const D=N.reduce((U,j)=>K(P,R,j)<K(P,R,U)?j:U);return q[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:W,hulls:q,hullBoxCounts:O.map(([,P])=>P.length),pointOwner:le,pointInside:L}}const T2=3;function E2(e,t=T2){const n=e.length,r=Array.from({length:n},(o,s)=>s),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let s=o+1;s<n;s+=1){const u=e[o],l=e[s],d=Number(u.center[0]),p=Number(u.center[1]),h=Number(l.center[0]),g=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![d,p,h,g,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(d-h,p-g)<=t*(m+y)&&(r[i(o)]=i(s))}const a=new Map;for(let o=0;o<n;o+=1){const s=i(o);a.has(s)||a.set(s,[]),a.get(s).push(o)}return[...a.values()]}function I2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3]),s=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(s,u)}function wo(e,t,n,r){const i=new Set(e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n));if(i.size===0)return[];const a=[];for(const o of E2(e)){const s=o.map(y=>e[y]),u=s.filter(y=>i.has(y));if(u.length===0)continue;let l=0,d=0,p=0;for(const y of s){const w=Number(y.center[0]),_=Number(y.center[1]);d+=w,p+=_,t.pointInside(w,_)===n&&(l+=1)}const h=d/s.length,g=p/s.length,m=r&&r.length>0?Math.min(...r.map(y=>I2(h,g,y))):0;a.push({cle:[...o].sort((y,w)=>y-w).join(","),membres:s,miens:u,inside:l,dPiste:m,centre:[h,g],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return a}function M2(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let a=0;a<4;a+=1){if(i[a]>r[a])return n;if(i[a]<r[a])return t}return t})}function k2(e,t,n,r){const[i,a]=e.centre,o={};for(const d of["player","opponent"]){const p=wo(t,n,d,r).filter(h=>h.cle!==e.cle);o[d]=p.length===0?1/0:Math.min(...p.map(h=>Math.hypot(i-h.centre[0],a-h.centre[1])))}if(o.player!==o.opponent)return o.player>o.opponent?"player":"opponent";const s=d=>{const p=wo(t,n,d,r).find(h=>h.cle===e.cle);return p?[p.inside,p.dPiste,p.valeur]:[-1,-1,-1]},u=s("player"),l=s("opponent");for(let d=0;d<3;d+=1){if(u[d]>l[d])return"player";if(u[d]<l[d])return"opponent"}return"player"}function C2(e,t,n){const r={player:[],opponent:[]},i={};for(const o of["player","opponent"]){const s=wo(e,t,o,n);s.length>0&&(i[o]=M2(s))}const a=Object.keys(i);if(a.length===0)return r;if(a.length===2&&i.player.cle===i.opponent.cle){const o=k2(i.player,e,t,n);return r[o]=i[o].membres,r}for(const o of a)r[o]=i[o].membres;return r}function A2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{return C2(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const R2=1280,O2=80,N2=3,z2=3,B2=.3,P2=2.4,D2=1,U2=5.2,L2=5;function bo(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function F2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=B2&&r/n<=P2&&i/n>=D2&&i/n<=U2&&i/r<=L2}function G2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*R2/r<O2}function W2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let d=n[0],p=1/0;for(const h of n){const g=(u-h.cx)**2+(l-h.cy)**2;g<p&&(p=g,d=h)}d.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function q2(e,t,n,r,i=[]){const a=bo(n);if(!G2(e,t,a))return[];const o=r.filter(l=>l.n>=z2&&l.poly.length>0).slice().sort((l,d)=>d.n-l.n).slice(0,2),s=Math.round(a*N2),u=[];for(const l of W2(o,i)){const d=l.poly.map(w=>w[0]),p=l.poly.map(w=>w[1]);if(d.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...d))-s),g=Math.max(0,Math.trunc(Math.min(...p))-s),m=Math.min(e,Math.trunc(Math.max(...d))+s),y=Math.min(t,Math.trunc(Math.max(...p))+s);m>h&&y>g&&u.push([h,g,m,y])}return u}function V2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return F2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}const H2=1.1,j2=3.2,K2=20,Y2=.5,X2=1280,Q2=.18,Z2=28,J2=.3;function e$(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(d=>d<=r),u=e.filter(d=>d>r);if(s.length===0||u.length===0)return[e.map((d,p)=>p)];const l=(s.reduce((d,p)=>d+p,0)/s.length+u.reduce((d,p)=>d+p,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function t$(e,t,n=H2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of e$(s)){if(l.length===0)continue;const d=l.map(A=>e[A]),p=d.map(A=>Math.min(A[2],A[3])).sort((A,z)=>A-z),h=p[Math.trunc(p.length/2)],g=j2*h,m=Math.max(0,Math.min(...d.map(A=>A[0]))-g),y=Math.max(0,Math.min(...d.map(A=>A[1]))-g),w=Math.min(r,Math.max(...d.map(A=>A[0]+A[2]))+g),_=Math.min(i,Math.max(...d.map(A=>A[1]+A[3]))+g),x=Math.max(w-m,_-y);if(x<=0)continue;const T=Y2*h*X2/x,v=T>0?Math.max(1,Math.ceil(K2/T)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(_)]);continue}const E=w-m>=_-y,k=(E?w-m:_-y)/v,S=k*(1+Q2);for(let A=0;A<v;A++){let z=(E?m:y)+A*k-(S-k)/2;z=Math.max(E?m:y,z);const Y=Math.min(E?w:_,z+S);u.push(E?[Math.trunc(z),Math.trunc(y),Math.trunc(Y),Math.trunc(_)]:[Math.trunc(m),Math.trunc(z),Math.trunc(w),Math.trunc(Y)])}}return u.filter(([l,d,p,h])=>Math.max(r,i)/Math.max(1,Math.max(p-l,h-d))>=n)}function n$(e,t,n,r=Z2){const[i,a]=n,o=e;for(const[s,u,l,d]of t){const p=(s+l)/2+i,h=(u+d)/2+a;o.some(([m,y,w,_])=>{const x=p-(m+w)/2,T=h-(y+_)/2;return Math.hypot(x,T)<=r})||o.push([s+i,u+a,l+i,d+a])}return o}function r$(e,t,n,r=J2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function i$(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function a$(e,t,n,r){return n.length===0?!1:i$(e,t,n)&&!r$(e,t,r)}const Wm=4,qm=8,Zr=5,In="base-game rule";function Bt(e,t){return{code:e,message:t,severity:"warning"}}function _o(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function o$(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Wm&&i.push(Bt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Wm} (${In}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=_o(n);return a.length>0&&i.push(Bt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${In}), so one of the two readings is wrong.`)),i}function s$(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>qm&&t.push(Bt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${qm} are in play (${In}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],d=[...o].filter(p=>l.has(p)).sort();d.length>0&&t.push(Bt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${d.join(", ")} — the city split misread one of them.`))}}return t}function u$(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>Zr&&n.push(Bt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${Zr} are in play (${In}) — reserve tokens sitting on the board were probably counted as owned.`));const i=_o(r);if(i.length>0&&n.push(Bt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${In}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==Zr&&n.push(Bt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${Zr} are in play (${In}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Bt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function l$(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Bt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=_o(e.filter(o=>!!o));return a.length>0&&r.push(Bt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${In}).`)),r}const c$=.25,d$=.45;function p$(e,t,n,r,i){const a=Math.cos(i),o=Math.sin(i),s=[n/2*a,n/2*o],u=[-r/2*o,r/2*a],d=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[d[1],d[2],d[3],d[0]]}function $o(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function Vm(e,t){const n=$o(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function h$(e,t,n){const r=$o(e,t),i=$o(e,n),a=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,a,!0))}finally{r.delete(),i.delete(),a.delete()}}function f$(e,t,n=d$){const r=[...t].sort((a,o)=>o.confidence-a.confidence),i=[];for(const a of r){let o=!1;for(const s of i){const u=h$(e,a.quad,s.quad);if(u<=0)continue;const l=Vm(e,a.quad)+Vm(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){o=!0;break}}o||i.push(a)}return i}function m$(e,t,n,r,i=c$){const a=[];for(let o=0;o<n;o++){const s=t[4*n+o];if(s<i)continue;const l=p$(t[o],t[n+o],t[2*n+o],t[3*n+o],t[5*n+o]).map(d=>[(d[0]-r.padX)/r.scale,(d[1]-r.padY)/r.scale]);a.push({quad:l,confidence:s})}return f$(e,a)}const g$=128,y$=88;function w$(e,t,n,r=g$,i=y$){const a=new e.Mat(t.height,t.width,e.CV_8UC3),o=a.data,s=t.channels;for(let h=0,g=t.width*t.height;h<g;h++)o[h*3]=t.data[h*s],o[h*3+1]=t.data[h*s+1],o[h*3+2]=t.data[h*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),d=e.getPerspectiveTransform(u,l),p=new e.Mat;try{return e.warpPerspective(a,p,d,new e.Size(r,i)),{data:new Uint8Array(p.data),width:r,height:i,channels:3}}finally{a.delete(),u.delete(),l.delete(),d.delete(),p.delete()}}function b$(e){return[e[2],e[3],e[0],e[1]]}const _$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],$$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],x$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],v$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],S$=[...$$,...x$,...v$,..._$];Object.fromEntries(S$.map(e=>[e.id,e]));const T$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Hm=.2,E$=.3,jm=.25,xo={total:0,idDiff:0,verdictDiff:0},Pt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},Jr={total:0,memeK:0,memeKInverse:0,detail:[]};function I$(e,t,n){for(const r of e){let i=!1;for(let a=0,o=r.length-1;a<r.length;o=a++){const s=r[a],u=r[o];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(a=>[a[0],a[1]])}return null}function M$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=jm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const d=s[2]/s[3];if(!(Math.abs(Math.log(d))<=jm)&&r>1==d>1)return!0}return!1}async function k$(e,t,n,r,i=[0,1,2,3]){const[a,o,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*Hm),d=Math.round(u*Hm),p=Math.max(0,Math.round(a-l)),h=Math.max(0,Math.round(o-d)),g=Math.min(e.width,Math.round(a+s+l)),m=Math.min(e.height,Math.round(o+u+d)),y=g-p,w=m-h;if(y<=0||w<=0)return null;const _=e.channels,x=new Uint8ClampedArray(y*w*_);for(let E=0;E<w;E++){const M=((h+E)*e.width+p)*_;x.set(e.data.subarray(M,M+y*_),E*y*_)}const T={width:y,height:w,channels:_,data:x};let v=null;for(const E of i){const M=E===0?T:jt(T,E),k=M.width,S=k-Math.floor(E$*k),A=k-S;if(A<=0)continue;const z=new Uint8ClampedArray(A*M.height*M.channels);for(let W=0;W<M.height;W++){const K=(W*k+S)*M.channels;z.set(M.data.subarray(K,K+A*M.channels),W*A*M.channels)}const Y={width:A,height:M.height,channels:M.channels,data:z},G=po(Y),O=(await n.run({[n.inputNames[0]]:new Ue("float32",G,[1,3,Nt,Nt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=O),v=v===null?O:Math.max(v,O)}return v}async function C$(e,t,n,r,i,a,o=[],s){var w;const u=async _=>(await r.run({[r.inputNames[0]]:new Ue("float32",_,[1,3,Kt,Kt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await tt("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(_){return console.warn("[wonders-obb] détection échouée, repli ORB :",_),null}});s!==void 0&&(s.n=l===null?0:l.length);const d=l===null?[]:l.map(_=>{const x=_.map(([M])=>M),T=_.map(([,M])=>M),v=Math.min(...x),E=Math.min(...T);return[Math.round(v),Math.round(E),Math.round(Math.max(...x)-v),Math.round(Math.max(...T)-E)]}),p=o.length===0?d:d.filter(([_,x,T,v])=>{const E=_+T/2,M=x+v/2;return!o.some(k=>{const S=k.x+k.width/2,A=k.y+k.height/2,z=.5*Math.min(k.width,k.height);return(E-S)**2+(M-A)**2<z*z})}),h=new Map;for(const _ of p){const[x,T,v,E]=_;if(v<=0||E<=0)continue;const M=l===null?null:I$(l,x+v/2,T+E/2);if(M===null||e.redresserQuad===void 0)continue;let k=M;const S=at("identify: redressement du quad",()=>e.redresserQuad(n,k)),A=Rm(),{id:z,prob:Y,inverse:G}=await tt("classifieur merveille (1 lecture)",()=>A1(S,u));if(z===""||Y<A)continue;G&&(k=b$(k).map(O=>[O[0],O[1]]));const q=h.get(z);(q===void 0||Y>q.prob)&&h.set(z,{prob:Y,box:_,quad:k})}const g=[],m=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[_,{prob:x,box:T,quad:v}]of h){const[E,M,k,S]=T;let A={x:Math.round(E),y:Math.round(M),width:Math.round(k),height:Math.round(S)},z=null,Y=[],G=null;if(v!==null){z=v;const N=z.map(te=>te[0]),D=z.map(te=>te[1]),U=Math.max(0,Math.round(Math.min(...N))),j=Math.max(0,Math.round(Math.min(...D)));if(A={x:U,y:j,width:Math.min(n.width,Math.round(Math.max(...N)))-U,height:Math.min(n.height,Math.round(Math.max(...D)))-j},m!==null)try{const te=await e.wonderRef(_),re=z,ge=te===null||re===null?null:at("identify: bande droite #63",()=>ym(t,n,te,re));if(ge!==null){const xe=at("identify: preprocess tuck",()=>po(ge)),Me=await m.run({[m.inputNames[0]]:new Ue("float32",xe,[1,3,Nt,Nt])});G=bm(Me[m.outputNames[0]].data).prob,Y=G>=Ln?["R"]:[]}}catch{}}else if(Date.now()<i)try{const N=await tt("chargement refs merveilles",()=>e.wonderRef(_));if(N!==null){const D=at("ORB registration (merveille)",()=>s_(t,n,N,T));if(D!==null){z=D.footprint,Y=D.overflow;const U=z.map(ge=>ge[0]),j=z.map(ge=>ge[1]),te=Math.max(0,Math.round(Math.min(...U))),re=Math.max(0,Math.round(Math.min(...j)));if(A={x:te,y:re,width:Math.min(n.width,Math.round(Math.max(...U)))-te,height:Math.min(n.height,Math.round(Math.max(...j)))-re},m!==null)try{const ge=z,xe=ge===null?null:at("identify: bande droite #63",()=>ym(t,n,N,ge));if(xe!==null){const Me=at("identify: preprocess tuck",()=>po(xe)),Ae=await m.run({[m.inputNames[0]]:new Ue("float32",Me,[1,3,Nt,Nt])});G=bm(Ae[m.outputNames[0]].data).prob}}catch{}}}}catch(N){console.warn(`[wonders-cls] ${_} registration failed:`,N)}const q=z!==null?gm(z,Y):null,O=v!==null&&z!==null?gm(z,["R"]):null,W=[];if(G!==null&&W.push(G>=Ln?1:0),y!==null)try{let N=[0,1,2,3];if(v!==null){const j=v[1][1]-v[0][1],te=v[1][0]-v[0][0],re=(Math.round(Math.atan2(j,te)*180/Math.PI/90)%4+4)%4;N=[(0+re)%4,(2+re)%4]}const D=[0,0,0,0],U=await tt("identify: sonde marges (#68)",()=>k$(n,T,y,D,N));if(U!==null&&(W.push(U>=Ln?1:0),v!==null)){const j=v[1][1]-v[0][1],te=v[1][0]-v[0][0],re=(Math.round(Math.atan2(j,te)*180/Math.PI/90)%4+4)%4,ge=Math.max(D[(0+re)%4],D[(2+re)%4]);Pt.total+=1;const xe=U>=Ln?1:0,Me=ge>=Ln?1:0;xe===1&&(Pt.positifs4+=1),Me===1&&(Pt.positifs2+=1),xe!==Me&&(Pt.divergent+=1,Pt.detail.push(`${_.slice(0,12)}:v4=${xe}/v2=${Me} p=[${D.map(Ae=>Ae.toFixed(2)).join(",")}]kQ${re}`))}}catch{}const K=O??q??A,X=a.some(N=>{const D=N.box[0]+N.box[2]/2,U=N.box[1]+N.box[3]/2;return D>=K.x&&D<=K.x+K.width&&U>=K.y&&U<=K.y+K.height});W.push(X?1:0);let le=W.length>0&&W.reduce((N,D)=>N+D,0)*2>W.length;le&&M$(K,A,a)&&(le=!1);const L=q??(le&&O!==null?O:null),P={id:_,name:((w=T$[_])==null?void 0:w.name)??_,builtWithCardUnderneath:le,boundingBox:A,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},R=L??A;g.push({obj:P,edgeScores:null,zone:{x0:R.x,y0:R.y,x1:R.x+R.width,y1:R.y+R.height},quad:z,region:L})}return g}function A$(e,t,n){if(t===n)return e;const r=`${t}: `;return e.message.startsWith(r)?{...e,message:`${n}: ${e.message.slice(r.length)}`}:e}const et="/7wd-scorer/models/",vo=[];let It=null;function R$(){vo.length=0,It=null}function O$(e){const t=performance.now();It!==null&&vo.push({nom:It.nom,ms:Math.round(t-It.debut)}),It={nom:e,debut:t}}function Km(){const e=[...vo];It!==null&&e.push({nom:`${It.nom} (en cours)`,ms:Math.round(performance.now()-It.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function Ym(){const e={};for(const t of Object.keys(Qe))e[Qe[t].onnx]=ti.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of lt)e[t]=n;return e}function N$(){var e,t;return So(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let Xm=!1;const ei=new Map;function So(){var e;Xm||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Xm=!0)}const ti=new Set;let To=0;function Qm(e){return To+=1,e.finally(()=>{To-=1})}function z$(){return To>0}function B$(e){So();let t=ei.get(e);return t===void 0&&(t=Qm(tt(`session: 1er chargement ${Qe[e].onnx}`,()=>_r.create(`${et}${Qe[e].onnx}`,{executionProviders:ti.has(e)?["wasm"]:["webgpu","wasm"]}))),ei.set(e,t),t.catch(()=>ei.delete(e))),t}const lt=new Map;let pr=0,hr=0;const ni=new Map;function Eo(e){const t=(It==null?void 0:It.nom)??"(hors etage)";ni.set(t,(ni.get(t)??0)+e)}function P$(){return[...ni.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let Io=0;function D$(){return{ms:Math.round(pr),appels:hr,preparationMs:Math.round(Io)}}function U$(){pr=0,hr=0,Io=0,Ew(),ni.clear(),xx()}const Zm=new Set(["coin_yolo.onnx","token_yolo.onnx"]),Mo=new Set;let ko=null;async function L$(e){if(ko)return await ko.catch(()=>{}),e();const t=e();return ko=t.catch(()=>{}),t}async function Co(e,t){return L$(()=>_r.create(`${et}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ft(e){return Qm(tt(`session: 1er chargement ${e}`,()=>F$(e)))}async function F$(e){So();const t=!Zm.has(e)&&!Mo.has(e);let n=null;if(t)try{n=await Co(e,!0),lt.set(e,"webgpu")}catch(o){Mo.add(e),lt.set(e,`wasm (webgpu refuse a la creation: ${String(o).slice(0,60)})`)}else lt.set(e,Zm.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Co(e,!1)}catch(o){return lt.set(e,`ECHEC wasm: ${String(o).slice(0,160)}`),null}let r=n,i=lt.get(e)==="webgpu";const a=async(o,...s)=>{const u=performance.now();try{const l=await r.run(o,...s),d=performance.now()-u;return pr+=d,Eo(d),hr+=1,l}catch(l){if(!i)throw l;Mo.add(e),lt.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Co(e,!1);const d=await r.run(o,...s),p=performance.now()-u;return pr+=p,Eo(p),hr+=1,d}};return new Proxy(r,{get(o,s,u){if(s==="run")return a;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let Ao=null,Ro=null;const G$=.65,W$=3e4;let Oo=null;function No(){return Oo===null&&(Oo=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Oo}const Jm=new Map;function zo(e){let t=Jm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${et}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Jm.set(e,t)),t}function q$(e){return zo(`wonder-refs/${e}.jpg`)}const eg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function V$(){const e=new Map;for(const t of eg){const n=await zo(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function H$(){const e=new Map;for(const t of eg){const n=await zo(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function tg(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(p,h)=>i===1?[h,r-1-p]:i===2?[n-1-p,r-1-h]:[n-1-h,p],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(p=>p[0]),u=o.map(p=>p[1]),l=Math.min(...s),d=Math.min(...u);return{x:l,y:d,width:Math.max(...s)-l,height:Math.max(...u)-d}}function j$(){return Ro===null&&(Ro=fetch(`${et}laurel_gallery.json`).then(async e=>e.ok?zb(await e.json()):[]).catch(()=>[])),Ro}function K$(e,t,n,r){return at("crop",()=>Y$(e,t,n,r))}function Y$(e,t,n,r){return un(e,t-r,n-r,2*r,2*r)}function un(e,t,n,r,i){return at("crop",()=>X$(e,t,n,r,i))}function X$(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),d=Math.max(0,u-o),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let g=0;g<l;g++){const m=((h+o)*e.width+(g+a))*e.channels,y=(h*l+g)*3;p[y]=e.data[m],p[y+1]=e.data[m+1],p[y+2]=e.data[m+2]}return{width:l,height:d,channels:3,data:p}}function Q$(){return Ao===null&&(Ao=fetch(`${et}token_templates.json`).then(async e=>e.ok?o1(await e.json()):new Map).catch(()=>new Map)),Ao}let Bo=null;function Po(){return Bo===null&&(Bo=(async()=>{try{const e=await fetch(`${et}token_embed_index.json`);if(!e.ok)return null;const t=f1(await e.json()),n=await ft("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),Bo}const Z$=.92;let Do=null;function Uo(){return Do===null&&(Do=(async()=>{try{return(await fetch(`${et}guild_classifier.onnx`,{method:"HEAD"})).ok?await ft("guild_classifier.onnx"):null}catch{return null}})()),Do}let Lo=null;function Fo(){return Lo===null&&(Lo=(async()=>{try{return(await fetch(`${et}laurel_digit.onnx`,{method:"HEAD"})).ok?await ft("laurel_digit.onnx"):null}catch{return null}})()),Lo}let Go=null,Wo=null;function qo(){return Wo===null&&(Wo=(async()=>{try{return(await fetch(`${et}banner_class.onnx`,{method:"HEAD"})).ok?await ft("banner_class.onnx"):null}catch{return null}})()),Wo}const J$=.7;function ex(e,t){const[n,r,i,a]=e,[o,s,u,l]=t;if(i<=0||a<=0||u<=0||l<=0)return!1;const d=Math.max(0,Math.min(n+i,o+u)-Math.max(n,o)),p=Math.max(0,Math.min(r+a,s+l)-Math.max(r,s));return d*p>=J$*Math.max(1,Math.min(i*a,u*l))}async function ng(e,t,n){if(t.length===0)return t;const r=await qo();if(r===null)return t;const i=[];for(const a of t)try{const o=W1(a.box,e.width,e.height);if(o===null){i.push(a);continue}const s=un(e,o.x,o.y,o.w,o.h),u=q1(s),l=await r.run({[r.inputNames[0]]:new Ue("float32",u,[1,3,sn,sn])}),d=V1(l[r.outputNames[0]].data);if(d.rejected)n==null||n.push({box:a.box,className:d.className});else{const p=a;if(p.color===null||p.color===void 0){const h=d.bestColour;i.push({...p,color:h,family:rm[h]})}else i.push(H1(p,d))}}catch{i.push(a)}return i}function Vo(){return Go===null&&(Go=(async()=>{try{return(await fetch(`${et}laurel_filter.onnx`,{method:"HEAD"})).ok?await ft("laurel_filter.onnx"):null}catch{return null}})()),Go}async function tx(e,t,n){let[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;if(s<Gn){const w=Math.floor((r+a)/2);r=w-Math.floor(Gn/2),a=w+Math.floor(Gn/2),s=a-r}if(u<Gn){const w=Math.floor((i+o)/2);i=w-Math.floor(Gn/2),o=w+Math.floor(Gn/2),u=o-i}const l=Math.trunc(zm*s),d=Math.trunc(zm*u),p=Math.max(0,r-l),h=Math.max(0,i-d),g=Math.min(e.width,a+l),m=Math.min(e.height,o+d),y=un(e,p,h,g-p,m-h);if(y.width<=0||y.height<=0)return null;try{const w=L1(y),_=await n.run({[n.inputNames[0]]:new Ue("float32",w,[1,3,on,on])});return F1(_[n.outputNames[0]].data)}catch{return null}}let Ho=null;function jo(){return Ho===null&&(Ho=(async()=>{try{return(await fetch(`${et}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ft("coin_filter_cnn.onnx"):null}catch{return null}})()),Ho}let Ko=null;function Yo(){return Ko===null&&(Ko=(async()=>{try{return(await fetch(`${et}coin_denom.onnx`,{method:"HEAD"})).ok?await ft("coin_denom.onnx"):null}catch{return null}})()),Ko}async function nx(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Lm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*gt*gt);r.forEach((u,l)=>i.set(u,l*u.length));const o=(await n.run({[n.inputNames[0]]:new Ue("float32",i,[t.length,3,gt,gt])}))[n.outputNames[0]].data,s=Yr.length;return t.map((u,l)=>d2(o.subarray(l*s,l*s+s)))}catch{return null}}async function rx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let g=0;g<t.length;g++){const m=Lm(e,Math.round(t[g].cx),Math.round(t[g].cy),Math.round(u[g]));if(m===null)return null;l.push(m)}const d=new Float32Array(t.length*3*gt*gt);l.forEach((g,m)=>d.set(g,m*g.length));const h=(await n.run({[n.inputNames[0]]:new Ue("float32",d,[t.length,3,gt,gt])}))[n.outputNames[0]].data;return t.map((g,m)=>l2(h.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,d)=>Math.max(l,u[d]))}return i}catch{return null}}let Xo=null;function Qo(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${et}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ft("tuck_classifier.onnx"):null}catch{return null}})()),Xo}const rg=.1;let Zo=null;function ri(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${et}track_band_brut.onnx`,{method:"HEAD"})).ok?await ft("track_band_brut.onnx"):null}catch{return null}})()),Zo}async function ig(e,t,n){try{const r=Wr(t,1280,Pw(t.width,t.height,n)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return tm(a.data,a.dims[1]??0,a.dims[2]??0,r.params,rg)}catch{return[]}}let Jo=null;const ix=.4;function ax(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function ox(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||ax(a,u)>=ix)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function es(){return Jo===null&&(Jo=(async()=>{try{return(await fetch(`${et}tuck_box.onnx`,{method:"HEAD"})).ok?await ft("tuck_box.onnx"):null}catch{return null}})()),Jo}let ts=null;function ns(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${et}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await sx(),await ft("wonder_classifier.onnx")):null}catch{return null}})()),ts}let ag=!1;async function sx(){if(ag)return;const e=await(await fetch(`${et}wonder_classifier_seuil.json`)).json();T1(Number(e.seuil)),E1(e.classes),ag=!0}let og=null,sg=null;async function ux(e){var p;og??(og=ft("wonder_obb.onnx"));const t=await og;if(t===null)return null;const n=await No();if(n===null)return null;sg=n;const{tensor:r,params:i}=Wr(e,1024),o=(await t.run({[t.inputNames[0]]:new Ue("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],s=o.dims[o.dims.length-1],u=o.data;let l=0;for(let h=0;h<s;h++){const g=u[4*s+h];g>l&&(l=g)}const d=m$(n,u,s,i);return lt.set("wonder_obb.onnx",`${lt.get("wonder_obb.onnx")??"?"} | dims=${o.dims} scoreMax=${l.toFixed(4)} dets=${d.length} q0=${(p=d[0])!=null&&p.quad[0]?JSON.stringify(d[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),d.map(h=>h.quad.map(g=>[g[0],g[1]]))}const lx={wonderRef:q$,tuckClassifier:Qo,tuckBoxClassifier:es,obbQuads:ux,redresserQuad:(e,t)=>w$(sg,e,t)};async function cx(e,t){const n=await Po();if(n!==null)try{const r=g1(e),i=new Ue("float32",r,[4,3,an,an]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=w1(n.index,y1(o));return u<Z$?["",-1]:[s,u]}catch{}return c1(e,t)}const ug=new WeakMap;async function ii(e){const t=ug.get(e);if(t!==void 0)return await t;const n=tt("decodage image",()=>dx(e));return ug.set(e,n),await n}async function dx(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",a=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${a}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const lg=new WeakMap;async function Dt(e,t){let n=lg.get(t);n===void 0&&(n=new Map,lg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=px(e,t);return n.set(e,i),await i}async function px(e,t){const n=Qe[e],r=performance.now(),{tensor:i,params:a}=Wr(t,n.input);Io+=performance.now()-r;const o=async()=>{const s=await B$(e),u={[s.inputNames[0]]:new Ue("float32",i,[1,3,n.input,n.input])},l=performance.now(),d=await s.run(u),p=performance.now()-l;pr+=p,Eo(p),hr+=1;const h=d[s.outputNames[0]];return{rows:new Float32Array(h.data),params:a}};try{return await o()}catch(s){if(ti.has(e))throw s;return ti.add(e),ei.delete(e),await o()}}const hx=6,fx=4,mx=5,gx=2;async function yx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ii(e),r=await Dt("banner",n),i=qr(r.rows,r.params,Qe.banner.conf,Qe.banner.classes);if(t.banners=i.length,i.length>=hx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Dt("laurel",n),o=oo(a.rows,a.params,Qe.laurel.conf);if(t.laurels=o.length,o.length>=fx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await Dt("coin",n),u=Jf(s.rows,s.params,Qe.coin.conf);return t.coins=u.length,u.length>=mx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=gx?{...t,kind:"board",confidence:.4}:t}function wx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function cg(e,t,n,r,i,a,o,s){let u=0;r(`${i}: card banners…`,.04);const l=await Dt("banner",e),d=qr(l.rows,l.params,Qe.banner.conf,Qe.banner.classes),p=[],h=await ng(e,d,p),g=p.filter(ne=>ne.className==="objet_hors_jeu").map(ne=>ne.box);let m=uo(h).filter(ne=>ne.color!==null&&ne.family!==null);r(`${i}: progress tokens…`,.08);let y=[];const w=await ri();w!==null&&(y=await ig(w,e,m)),y.length>0&&m.length>0&&(m=m.filter(ne=>{const ee=ne.box[0]+ne.box[2]/2,J=ne.box[1]+ne.box[3]/2;return!y.some(([_e,Fe,Z,ae])=>Math.min(_e,Z)<=ee&&ee<=Math.max(_e,Z)&&Math.min(Fe,ae)<=J&&J<=Math.max(Fe,ae))}));const _=await Dt("token",e),x=await Q$(),T=[],v=[];for(const ne of Yw(_.rows,_.params,Qe.token.conf)){if(v.push({cx:ne.cx,cy:ne.cy,r:ne.r}),y.some(([_e,Fe,Z,ae])=>ne.cx>=_e&&ne.cx<=Z&&ne.cy>=Fe&&ne.cy<=ae))continue;const[ee,J]=await cx(sm(e,ne),x);ee===""&&J<0?v.pop():ee===""?u+=1:!T.some(_e=>_e.id===ee)&&!s.some(_e=>_e.id===ee)&&T.push({id:ee,center:[ne.cx,ne.cy],radius:ne.r,confidence:Math.round(J*1e4)/1e4})}r(`${i}: coins…`,.14);const E=await Dt("coin",e),M=Jf(E.rows,E.params,Qe.coin.conf).filter(ne=>!v.some(ee=>(ne.cx-ee.cx)**2+(ne.cy-ee.cy)**2<=ne.r*ne.r)),k=await jo(),S=k!==null?await rx(e,M,k):null,A=(S!==null?M.filter((ne,ee)=>S[ee]>=Um).map(ne=>ne.r):[]).sort((ne,ee)=>ne-ee),z=A.length>0?A.length%2===1?A[(A.length-1)/2]:(A[A.length/2-1]+A[A.length/2])/2:null,[Y,G]=u2,q=M.map((ne,ee)=>{const J=S!==null?S[ee]:null;return J===null||J>=Um?"keep":z!==null&&z>0&&ne.r/z>=Y&&ne.r/z<=G?"suspect":"drop"}),O=M.filter((ne,ee)=>q[ee]==="keep"),W=_b(e,O),K=await Yo(),X=K!==null?await nx(e,O,K):null,le=p2(W,X??W.map(()=>null));le.map(ne=>ne.value);const L=[];let P=0;if(M.forEach((ne,ee)=>{if(q[ee]==="drop")return;if(q[ee]==="suspect"){const _e=S[ee];L.push({denomination:null,center:[ne.cx,ne.cy],radius:ne.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${_e.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const J=le[P++];L.push({denomination:J.value,center:[ne.cx,ne.cy],radius:ne.r,denomSource:J.source??"colour"})}),M.length>0&&L.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${M.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),L.length>=2){const ne=L.map(J=>J.radius).sort((J,_e)=>J-_e),ee=ne.length%2===1?ne[(ne.length-1)/2]:(ne[ne.length/2-1]+ne[ne.length/2])/2;if(ee>0)for(const J of L)J.radius/ee>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/ee).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(L.length>=2)for(let ne=0;ne<L.length;ne+=1)for(let ee=ne+1;ee<L.length;ee+=1){const J=L[ne],_e=L[ee],Fe=Math.hypot(J.center[0]-_e.center[0],J.center[1]-_e.center[1]);if(Fe<1.1*Math.min(J.radius,_e.radius))for(const Z of[J,_e])Z.suspect||(Z.suspect=!0,Z.suspectReason=`almost concentric with another coin (${Fe.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const R=[],N=[],D=[],U=Date.now()+W$;let j=null;const te=[];let re=!1;const ge={n:0},xe=await ns();if(xe!==null&&(j=await tt("opencv.js (chargement)",()=>No()),j!==null)){r(`${i}: identifying wonders…`,.35);const ne=await tt("identifyWondersByClassifier",()=>C$(lx,j,e,xe,U,m,[],ge));for(const ee of ne)R.some(J=>J.id===ee.obj.id)||o.some(J=>J.id===ee.obj.id)||(R.push(ee.obj),te.push({obj:ee.obj,edgeScores:ee.edgeScores,zone:ee.zone}),N.push(ee.zone),D.push({quad:ee.quad,region:ee.region}));re=ne.length>0}if(!re){const ne=c_(te.map(ee=>({built:ee.obj.builtWithCardUnderneath,edgeScores:ee.edgeScores,zone:ee.zone})),m.map(ee=>[ee.box[0]+ee.box[2]/2,ee.box[1]+ee.box[3]/2]));for(const ee of ne){const J=te[ee];J.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(m.length>0){const ee=new Set(ne);for(let J=0;J<te.length;J++){const _e=te[J];if(ee.has(J)||!_e.obj.builtWithCardUnderneath)continue;const Fe=_e.obj.tuckRegion;if(Fe===void 0)continue;if(!m.some(ae=>{const de=ae.box[0]+ae.box[2]/2,pe=ae.box[1]+ae.box[3]/2;return de>=Fe.x&&de<=Fe.x+Fe.width&&pe>=Fe.y&&pe<=Fe.y+Fe.height})){const ae=_e.obj;ae.builtWithCardUnderneath=!1,ae.suspect=!0,ae.suspectReason="built-unconfirmed"}}}}const Me=async()=>{let ne=R.slice();const ee=[];m.forEach((ae,de)=>{const pe=ae.box[0]+ae.box[2]/2,he=ae.box[1]+ae.box[3]/2;N.some(ye=>pe>=ye.x0&&pe<=ye.x1&&he>=ye.y0&&he<=ye.y1)||ee.push(de)});const J=[],_e=[];ne.forEach((ae,de)=>{const pe=ae.boundingBox;pe&&pe.width>0&&(J.push(de),_e.push([pe.x,pe.y,pe.width,pe.height]))});const Fe=ae=>{const de=[];return ae.forEach((pe,he)=>{const ye=pe.box[0]+pe.box[2]/2,Se=pe.box[1]+pe.box[3]/2;N.some(me=>ye>=me.x0&&ye<=me.x1&&Se>=me.y0&&Se<=me.y1)||de.push(he)}),de};let Z=Gm(m.map(ae=>ae.box),ee,_e,y,[e.width,e.height]);try{const ae=q2(e.width,e.height,m.map(de=>de.box),Z.hulls.map(([de,pe],he)=>({owner:de,poly:pe,n:Z.hullBoxCounts[he]??0})),_e);if(ae.length>0){const de=bo(m.map(he=>he.box)),pe=[];for(const he of ae){const[ye,Se,me,Oe]=he,Ge=un(e,ye,Se,me-ye,Oe-Se);if(Ge.width<=0||Ge.height<=0)continue;const Ve=await Dt("banner",Ge);for(const We of qr(Ve.rows,Ve.params,Qe.banner.conf,Qe.banner.classes)){const rt=V2(We.box,he,de);rt&&pe.push({...We,box:rt})}}if(pe.length>0){const he=Oe=>Oe.color!==null&&g.some(Ge=>ex(Oe.box,Ge)),ye=new Map((await ng(e,pe.filter(Oe=>!he(Oe)))).map(Oe=>[Oe.box.slice(0,4).join(","),Oe])),Se=pe.map(Oe=>he(Oe)?Oe:ye.get(Oe.box.slice(0,4).join(","))).filter(Oe=>Oe!==void 0&&Oe.color!==null&&Oe.family!==null),me=uo([...m,...Se]);me.length>m.length&&(m=me,Z=Gm(m.map(Oe=>Oe.box),Fe(m),_e,y,[e.width,e.height]))}}}catch(ae){console.warn("[#129 city-rescan] skipped:",ae)}return a!==void 0&&(a.hulls=Z.hulls.map(([ae,de],pe)=>({owner:ae,poly:de,n:Z.hullBoxCounts[pe]??0})),a.bandBoxes=y,a.image=e),{split:Z,photoWonders:ne,splitWonderIdx:J}};let Ae=null;try{Ae=await Me()}catch(ne){console.warn("[city-split] failed (side unfiltered):",ne)}return{bannerDetections:m,photoCoins:L,photoTokenDiscs:v,discs:M,bandBoxes:y,bandSession:w,wonderFootprints:N,wonderTuckGates:D,photoTokensList:T,geo:Ae,cv:j,regDeadline:U,unidentifiedTokens:u}}async function dg(e,t,n,r,i,a,o,s,u,l){let d=e.bannerDetections,p=e.cv;const{photoCoins:h,photoTokenDiscs:g,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:_,wonderTuckGates:x,photoTokensList:T,geo:v,regDeadline:E}=e,M={},k=[],S=[];let A=0;const z=[];let Y=0,G=0;const q=[],O=[],W=[],K=t==="opponent";let X=(Z,ae)=>!K,le=(Z,ae)=>!K,L=null;if(v!==null)try{const{split:Z,photoWonders:ae,splitWonderIdx:de}=v;X=(Se,me)=>Z.pointOwner(Se,me)==="opponent"===K;const pe=K?"opponent":"player";if(le=(Se,me)=>Z.pointOwner(Se,me)===pe,n){const Se=Z;L=me=>new Set(A2(me,Se,pe,y))}d=d.filter((Se,me)=>Z.bannerOwner[me]==="opponent"===K);const he=ae.map(()=>"player");de.forEach((Se,me)=>{he[Se]=Z.wonderOwner[me]});const ye=[];ae.forEach((Se,me)=>{he[me]==="opponent"===K&&ye.push(Se)});for(const Se of ye)O.push(Se);_.length=0;for(const Se of ye){const me=Se.tuckRegion??Se.boundingBox;me&&_.push({x0:me.x,y0:me.y,x1:me.x+me.width,y1:me.y+me.height})}for(const Se of T)X(Se.center[0],Se.center[1])&&W.push(Se)}catch(Z){console.warn("[city-split] failed (side unfiltered):",Z)}const P=L!==null?L(h):null;for(const Z of h)(P!==null?!P.has(Z):!le(Z.center[0],Z.center[1]))||(A+=Z.denomination??0,S.push(Z));const R=new Set,N=[],D=bo(d.map(Z=>Z.box));x.forEach((Z,ae)=>{if(Z.quad===null||Z.region===null){const ye=_[ae];ye&&N.push(ye);return}const de=Z.region,pe=[];d.forEach((ye,Se)=>{const me=ye.box[0]+ye.box[2]/2,Oe=ye.box[1]+ye.box[3]/2;me>=de.x&&me<=de.x+de.width&&Oe>=de.y&&Oe<=de.y+de.height&&pe.push([Se,ye.box])});const he=s2(Z.quad,pe,D);he!==null&&R.add(he)});let U=[],j=0;d.forEach((Z,ae)=>{if(R.has(ae)){G+=1,j+=1;return}const de=Z.box[0]+Z.box[2]/2,pe=Z.box[1]+Z.box[3]/2;if(N.some(he=>de>=he.x0&&de<=he.x1&&pe>=he.y0&&pe<=he.y1)){G+=1,j+=1;return}U.push(Z)});const te=e2(U,j,y,a.width,a.height);U=te.kept;for(const Z of U)M[Z.family]=(M[Z.family]??0)+1,Y+=1;const re=ib(U),ge=new Set(re.map(Z=>Z.box.join(",")));for(const Z of ob(U))ge.has(Z.box.join(","))||(re.push(Z),ge.add(Z.box.join(",")));for(const Z of te.suspects)ge.has(Z.box.join(","))||(re.push(Z),ge.add(Z.box.join(",")));for(const Z of re)q.push(Z);if(U.some(Z=>Z.family==="guild")){const Z=await Uo();if(Z!==null){s(`${u}: identifying guilds…`,.75);for(const ae of U)if(ae.family==="guild")try{const[de,pe,he,ye]=ae.box,Se=un(a,de,pe,he,ye),me=$1(Se),Oe={[Z.inputNames[0]]:new Ue("float32",me,[1,3,Fn,Fn])},Ve=(await Z.run(Oe))[Z.outputNames[0]].data,{id:We,prob:rt}=x1(Ve);We!==""&&!z.some(kt=>kt.id===We)&&!l.some(kt=>kt.id===We)&&z.push({id:We,boundingBox:{x:de,y:pe,width:he,height:ye},confidence:Math.round(rt*1e4)/1e4})}catch(de){console.warn("[guild-cls] failed:",de)}}else if(Date.now()<E)try{const ae=p??await No();if(ae!==null){const de=await V$();if(de.size>0){s(`${u}: identifying guilds…`,.75);const pe=await H$();for(const he of X_(ae,a,de,E,pe))!z.some(ye=>ye.id===he.id)&&!l.some(ye=>ye.id===he.id)&&z.push(he)}}}catch(ae){console.warn("[guilds-reg] failed:",ae)}}s(`${u}: laurels…`,.8);const Me=await tt("laurier: chargement galerie gabarits",()=>j$()),Ae=[];for(const Z of[0]){const ae=Z===0?a:jt(a,Z),de=await tt("laurier: passe PLEINE photo",()=>Dt("laurel",ae));for(const[pe,he,ye,Se]of at("laurier: decodage YOLO (JS)",()=>oo(de.rows,de.params,Qe.laurel.conf))){const me=tg({x:pe,y:he,width:ye-pe,height:Se-he},Z,a.width,a.height);Ae.push([me.x,me.y,me.x+me.width,me.y+me.height])}}let ne=at("laurier: dedup",()=>em(Ae));const ee=[];try{const Z=t$(d.map(ae=>ae.box),[a.width,a.height]);lt.set("_tta.onnx",`total=${xo.total} idDiff=${xo.idDiff} verdictDiff=${xo.verdictDiff}`),lt.set("_marge2.onnx",`total=${Pt.total} pos4=${Pt.positifs4} pos2=${Pt.positifs2} divergent=${Pt.divergent} `+Pt.detail.slice(0,10).join(" | ")),lt.set("_ttaObb.onnx",`total=${Jr.total} memeK=${Jr.memeK} inv=${Jr.memeKInverse} `+Jr.detail.slice(0,12).join(" ")),lt.set("_tuilage.onnx",`groupes=? tuiles=${Z.length} bannieres=${d.length} image=${a.width}x${a.height}`);for(const[ae,de,pe,he]of Z){const ye=un(a,ae,de,pe-ae,he-de);if(ye.width<=0||ye.height<=0)continue;const Se=[];for(const me of[0]){const Oe=me===0?ye:jt(ye,me),Ge=await tt("laurier: passe par TUILE (#113)",()=>Dt("laurel",Oe));for(const[Ve,We,rt,kt]of at("laurier: decodage YOLO (JS)",()=>oo(Ge.rows,Ge.params,Qe.laurel.conf))){const st=tg({x:Ve,y:We,width:rt-Ve,height:kt-We},me,ye.width,ye.height);Se.push([st.x,st.y,st.x+st.width,st.y+st.height])}}if(ne=n$(ne,em(Se),[ae,de]),w!==null)try{const me=await tt("laurier: bande de piste sur tuile (#114)",async()=>{const Ve=Wr(ye,1280,ur);return{sortie:await w.run({[w.inputNames[0]]:new Ue("float32",Ve.tensor,[1,3,1280,1280])}),params:Ve.params}}),Oe={params:me.params},Ge=me.sortie[w.outputNames[0]];for(const[Ve,We,rt,kt]of tm(Ge.data,Ge.dims[1]??0,Ge.dims[2]??0,Oe.params,rg))ee.push([Ve+ae,We+de,rt+ae,kt+de])}catch{}}}catch(Z){console.warn("[laurel-containers] failed:",Z)}const J=[...y,...ee];ne=ne.filter(([Z,ae,de,pe])=>!a$((Z+de)/2,(ae+pe)/2,J,d.map(he=>he.box)));const[_e,Fe]=await tt("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([Fo(),Vo()]));for(const[Z,ae,de,pe]of ne){const he=Math.trunc((Z+de)/2),ye=Math.trunc((ae+pe)/2);if([...g,...m].some(je=>(he-je.cx)**2+(ye-je.cy)**2<=je.r*je.r)||!X(he,ye))continue;if(Fe!==null){const je=await tt("laurier: filtre FP (#49)",()=>tx(a,[Math.trunc(Z),Math.trunc(ae),Math.trunc(de),Math.trunc(pe)],Fe));if(je!==null&&je>=U1)continue}const me=Math.min(Math.trunc(de-Z),Math.trunc(pe-ae)),Oe=Math.max(6,Math.trunc(Math.max(de-Z,pe-ae)*Eb)),Ge=K$(a,he,ye,Oe);let Ve=null,We=0,rt=!1;if(_e!==null&&me>=6){const je=un(a,Math.trunc(Z),Math.trunc(ae),Math.trunc(de-Z),Math.trunc(pe-ae));let Ye=null,yt=0;for(const Ct of[0,1,2,3]){const Xt=Ct===0?je:jt(je,Ct),os=B1(Xt),ss=await tt("laurier: lecture chiffre (CNN)",()=>_e.run({[_e.inputNames[0]]:new Ue("float32",os,[1,3,zt,zt])})),{value:us,prob:si}=P1(ss[_e.outputNames[0]].data);if(si>yt&&(Ye=us,yt=si),Ye!==null&&yt>=z1)break}Ye!==null&&yt>=N1&&(Ve=Ye,We=yt)}if(Ve===null&&me>=6){const je=new Map;for(const Ye of[0,1,2,3]){const yt=Ye===0?Ge:jt(Ge,Ye),[Ct,Xt]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>Lb(yt,Me));Ct!==null&&(je.set(Ct,Math.max(je.get(Ct)??0,Xt)),Xt>We&&(Ve=Ct,We=Xt))}Ve!==null&&We<G$&&(Ve=null),rt=Ve!==null&&[...je.entries()].some(([Ye,yt])=>Ye!==Ve&&yt>=We-.1)}const kt=_.some(je=>he>=je.x0&&he<=je.x1&&ye>=je.y0&&ye<=je.y1),st=[...z,...l].some(je=>{const Ye=je.boundingBox;return Ye!==void 0&&he>=Ye.x&&he<=Ye.x+Ye.width&&ye>=Ye.y&&ye<=Ye.y+Ye.height});k.push({value:Ve,valueRead:Ve!==null,center:[Math.round((Z+de)/2),Math.round((ae+pe)/2)],boundingBox:{x:Math.trunc(Z),y:Math.trunc(ae),width:Math.trunc(de-Z),height:Math.trunc(pe-ae)},confidence:Math.round(We*1e4)/1e4,excluded:kt||st,photoIndex:i-1,...rt?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:M,laurels:k,coins:S,coinTotal:A,guilds:z,bannerCount:Y,tuckedExcluded:G,bannerSuspects:q,cityWondersKept:O,cityTokensKept:W}}function pg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function hg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function fg(e,t,n){const{byFamily:r,laurels:i,coins:a,progressTokens:o,wonders:s,guilds:u,bannerSuspects:l,coinTotal:d,unidentifiedTokens:p,bannerCount:h,tuckedExcluded:g}=e;g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(T=>T.id).join(", ")+" — confirm in the review."});const y=s.filter(T=>T.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),p>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${p} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(T=>T.id).join(", ")+" — confirm in the review."}),a.length>0){const T=a.filter(E=>E.denomSource==="cnn").length,v=a.length-T;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${d} from ${a.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${d} from ${a.length} tile(s) — ${T} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=ox(u,s);for(const T of[...o$(s.map(v=>v.id),t),...l$(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:T.message});const _=i.filter(T=>!T.excluded),x=_.filter(T=>T.valueRead);return{...wx(),wonders:s,guilds:w,progressTokens:o,laurels:i,cardVictoryPoints:{value:x.reduce((T,v)=>T+(v.value??0),0),laurelsKept:_.length,laurelsUnread:_.length-x.length,complete:_.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:g,...l.length>0?{suspects:l}:{}},coins:{total:d,confidence:a.length>0?.5:0,source:a.length===0?"none":a.some(T=>T.denomSource==="cnn")?"local-cnn":"local-colour",coins:a}}}async function bx(e,t,n,r,i=()=>{},a="player",o,s=!1){const u=pg();let l=0;for(const d of e){l+=1;const p=`${t} photo ${l}/${e.length}`;r(`${p}: reading pixels…`,.01);const h=await ii(d),g=await cg(h,n,t,r,p,o,u.wonders,u.progressTokens);u.unidentifiedTokens+=g.unidentifiedTokens;const m=await dg(g,a,s,t,l,h,n,r,p,u.guilds);hg(u,m),i()}return fg(u,t,n)}const Mt=1280,_x=.3,ai=9;let rs=null;function oi(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${et}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ft("pawn_ends_brut.onnx"):null}catch{return null}})()),rs}function $x(e){const t=Mt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),a=i.getContext("2d",{willReadFrequently:!0}),o=Aw(e.data,e.width,e.height,e.channels);a.putImageData(new ImageData(o,e.width,e.height),0,0);const u=new OffscreenCanvas(Mt,Mt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Mt,Mt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Mt,Mt),d=Mt*Mt,p=new Float32Array(3*d);for(let h=0;h<d;h+=1)p[h]=l[h*4]/255,p[d+h]=l[h*4+1]/255,p[2*d+h]=l[h*4+2]/255;return{tensor:p,r:t}}const Le={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null,classes:new Set};function xx(){Le.appels=0,Le.inferences=0,Le.bandes=0,Le.detail=[],Le.premiereGagne=null,Le.classes=new Set}function mg(){lt.set("_pion.onnx",`appels=${Le.appels} inferences=${Le.inferences} bandes=${Le.bandes} premiereGagne=${Le.premiereGagne??"n/a"} classes=${Le.classes.size===0?"aucune":[...Le.classes].sort().join(",")}${vx()} | ${Le.detail.join(" ")}`)}function vx(){const e=Le.classes,t=(e.has(1)?1:0)+(e.has(2)?1:0);return e.size===0?" (piste illisible)":e.has(0)&&t===2?" (tout vu)":!e.has(0)&&t===2?" (PION manquant, geometrie disponible)":e.has(0)&&t===1?" (pion a la capitale : il masque un medaillon — TRAITE par #82)":e.has(0)&&t===0?" (pion seul, aucun medaillon)":" (un seul medaillon, pas de pion)"}async function is(e,t){Le.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>$x(t)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",n,[1,3,Mt,Mt])}))[e.outputNames[0]],o=a.data,s=a.dims[2]??0,u=(a.dims[1]??4)-4,l=at("pion: depouillement des ancres brutes",()=>{const d=new Map;for(let p=0;p<u;p+=1){const h=(4+p)*s;let g=-1,m=_x;for(let y=0;y<s;y+=1){const w=o[h+y];w>=m&&(m=w,g=y)}if(g>=0){const y=(o[g]+o[2*s+g])/2/r,w=(o[s+g]+o[3*s+g])/2/r,_=(o[2*s+g]-o[g])/r,x=(o[3*s+g]-o[s+g])/r;d.set(p,{conf:m,cx:y,cy:w,diam:(_+x)/2})}}return d});for(const d of l.keys())Le.classes.add(d);return l}async function as(e,t,n){const r=Le.inferences,i=`a${Le.appels}`;Le.appels+=1;const a=await tt("pion: UNE passe (les 4 rotations)",()=>Sx(e,t,n));return Le.detail.push(`${i}:${Le.inferences-r}inf conf=${a===null?"rien":a.confidence.toFixed(2)}`),mg(),a}async function Sx(e,t,n){let r=null;const i=1.8;for(const v of n??[0,1,2,3]){const E=v===0?t:at("pion: rotation de l'image",()=>jt(t,v)),M=await is(e,E);if(M.has(0)&&M.has(1)&&M.has(2)){const k=M.get(0).conf+M.get(1).conf+M.get(2).conf;if((r===null||k>r.score)&&(r={score:k,det:M,k:v}),k>=i)break}}if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:jt(t,v),M=await is(e,E);if(M.has(1)&&M.has(2)){const k=M.get(1).conf+M.get(2).conf;(r===null||k>r.score)&&(r={score:k,det:M,k:v})}}let a=!1;if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:jt(t,v),M=await is(e,E),k=M.get(0);if(k===void 0)continue;const S=M.has(1)&&!M.has(2)?1:!M.has(1)&&M.has(2)?2:null;if(S===null)continue;const A=M.get(S),z=Vw([k.cx,k.cy],[A.cx,A.cy],A.diam);if(z===null)continue;const Y=k.conf+A.conf;if(r===null||Y>r.score){const G=new Map(M);G.set(S===2?1:2,{conf:A.conf,cx:z[0],cy:z[1],diam:A.diam}),r={score:Y,det:G,k:v},a=!0}}if(r===null)return null;const o=!r.det.has(0),s=r.det.get(0)??{conf:0,cx:0,cy:0},u=r.det.get(1),l=r.det.get(2),d=l.cx-u.cx,p=l.cy-u.cy,h=(u.cx+l.cx)/2,g=(u.cy+l.cy)/2,m=d*d+p*p;if(m<=0)return null;const y=((s.cx-h)*d+(s.cy-g)*p)/m*(2*ai),w=o?0:Math.min(ai,Math.max(-ai,ot(y))),_=o?0:Math.min(s.conf,u.conf,l.conf),x=(v,E)=>{const M=r.k%4;return M===0?[v,E]:M===1?[E,t.height-1-v]:M===2?[t.width-1-v,t.height-1-E]:[t.width-1-E,v]},T=[u,l].map(v=>{const[E,M]=x(v.cx,v.cy);return[ot(E),ot(M)]});return{position:w,confidence:Math.round(_*1e4)/1e4,ends:T,k:r.k,found:!o,endOccluded:a}}async function gg(e,t,n){let r=null,i=null;for(const a of n){const o=Dw(t.width,t.height,a);if(o===null)continue;const s=un(t,o.x,o.y,o.width,o.height);if(s.width===0||s.height===0)continue;Le.bandes+=1;const u=await as(e,s,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Le.premiereGagne===null?Le.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Le.premiereGagne=!1),mg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,d])=>[l+o.x,d+o.y])})}return r}function yg(){const e=[Po,Uo,Fo,qo,Vo,jo,Yo,Qo,ri,es,ns,oi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function Tx(e,t){yg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(m,y=0)=>{t(m,i>0?Math.min(.99,(a+y)/i):void 0)},s=()=>{a+=1};for(const m of["left","right"]){const y=e[m];y.length>0&&(r[m]=await bx(y,m,n,o,s))}let u=null,l=null;if(e.both!==void 0){const m={},y=await ii(e.both),w=await cg(y,n,"both",o,"both photo 1/1",m,[],[]),_={player:[],opponent:[]},x=async(M,k)=>{const S=pg();S.unidentifiedTokens+=w.unidentifiedTokens;const A=_[M];return hg(S,await dg(w,M,!0,k,1,y,A,o,`${k} photo 1/1`,S.guilds)),s(),fg(S,k,A)},T={player:await x("player","left"),opponent:await x("opponent","right")};if(o("military pawn…",.95),m.image!==void 0)try{const M=await oi();M!==null&&(m.bandBoxes!==void 0&&m.bandBoxes.length>0&&(u=await gg(M,m.image,m.bandBoxes)),u===null&&(u=await as(M,m.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=Fw(u.ends,m.hulls??[],u.position));const v=l!==null&&!l.ambiguous?Gw(l):null;let E={left:"player"};if(v!==null)E={left:v.left,right:v.right},r.left=T[v.left],r.right=T[v.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`});else{const M=Ww(m.hulls??[]);M!==null?(E={left:M.left,right:M.right},r.left=T[M.left],r.right=T[M.right],n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: no readable military track, so LEFT and RIGHT were taken from the PHOTO LAYOUT (cities stacked vertically -> the TOP one is left; side by side -> the LEFTMOST one is left). Swap them in the review if the seating is the other way around."})):(r.left=T.player,r.right=T.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: neither the military track nor the photo layout could tell the two cities apart — LEFT and RIGHT are UNDECIDED and must be checked in the review."}))}for(const M of["player","opponent"]){const k=M==="player"?"left":"right",S=E.left===M?"left":"right";for(const A of _[M])n.push(A$(A,k,S))}}{const m={},y={};for(const w of["left","right"]){const _=r[w];_!=null&&(m[w]=_.wonders.map(x=>x.id),y[w]=_.progressTokens.map(x=>x.id))}for(const w of[...s$(m),...u$(y)])n.push({code:"INCONSISTENT_STATE",message:w.message})}let d={conflictPawnPosition:0,found:!1,confidence:0},p=!1;if(e.board!==void 0)try{const m=await ii(e.board),y=await oi();if(y!==null){let w=await as(y,m);if(w===null){const _=await ri();if(_!==null){const x=await Dt("banner",m),T=qr(x.rows,x.params,Qe.banner.conf,Qe.banner.classes),v=await ig(_,m,T);w=await gg(y,m,v)}}w!==null&&(d={conflictPawnPosition:w.position,found:w.found,confidence:w.confidence},p=w.endOccluded,n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${w.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(m){console.warn("[pawn] on-device read failed:",m)}else u!==null&&l!==null&&(d={conflictPawnPosition:u.position,found:u.found,confidence:u.confidence},p=u.endOccluded);if(p&&d.found&&n.push({code:"LOW_CONFIDENCE",message:`The conflict pawn appears to SIT ON its end medallion (the capital), which hides it from the detector: position ${d.conflictPawnPosition} was DEDUCED from the track length, not read end to end. Confirm it — at this distance it decides a military supremacy.`}),!d.found){const m=x=>{var T,v;return Number(((v=(T=x==null?void 0:x.cardCounts)==null?void 0:T.byFamily)==null?void 0:v.military)??0)},y=m(r.left),w=m(r.right),_=Math.abs(y-w);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:_>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${y} military cards and the other ${w}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const h=d.conflictPawnPosition,g=Math.abs(h)>=ai?{type:"military",winner:h>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:d,outcome:g,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(a,o)=>{O$(a);const s=z$()?"Initialisation des modèles de vision…":Cw(a);self.postMessage({id:t,progress:s,...o!==void 0?{fraction:o}:{},...a!==r?{perfPartiel:{providers:Ym(),etapes:Km(),etapeCourante:s}}:{}}),r=a};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){yg(),await Promise.allSettled([Po(),Uo(),Fo(),qo(),Vo(),jo(),Yo(),Qo(),ri(),es(),ns(),oi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),R$(),U$();const a=performance.now(),o=n==="classify"?await yx(e.data.file):await Tx(e.data.payload,i);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:Km(),providers:Ym(),runtime:N$(),inference:D$(),famillesJs:Tw(),inferenceParEtape:P$(),totalMs:Math.round(performance.now()-a)}})}catch(a){self.postMessage({id:t,ok:!1,error:String(a)})}})()}})();
