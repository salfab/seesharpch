var v3=Object.defineProperty;var S3=(Gt,Wt,Cn)=>Wt in Gt?v3(Gt,Wt,{enumerable:!0,configurable:!0,writable:!0,value:Cn}):Gt[Wt]=Cn;var ey=(Gt,Wt,Cn)=>S3(Gt,typeof Wt!="symbol"?Wt+"":Wt,Cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyNames,ry=Object.prototype.hasOwnProperty,iy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Z=(e,t)=>()=>(e&&(t=e(e=0)),t),An=(e,t)=>{for(var n in t)Gt(e,n,{get:t[n],enumerable:!0})},ay=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!ry.call(e,i)&&i!==n&&Gt(e,i,{get:()=>t[i],enumerable:!(r=Wt(t,i))||r.enumerable});return e},Vn=e=>ay(Gt({},"__esModule",{value:!0}),e),Hn,Jt,Rn,Es,Is,Ms=Z(()=>{Hn=new Map,Jt=[],Rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Hn.get(e);if(r===void 0)Hn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Jt.indexOf(e);i!==-1&&Jt.splice(i,1);for(let a=0;a<Jt.length;a++)if(Hn.get(Jt[a]).priority<=n){Jt.splice(a,0,e);return}Jt.push(e)}return}throw new TypeError("not a valid backend")},Es=async e=>{let t=Hn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Is=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Jt:n,i,a=[],o=new Set;for(let u of r){let l=await Es(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),oy=Z(()=>{Ms()}),ks,sy=Z(()=>{ks="1.27.0"}),wi,Xe,Cs=Z(()=>{sy(),wi="warning",Xe={wasm:{},webgl:{},webgpu:{},versions:{common:ks},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wi=e}},get logLevel(){return wi}},Object.defineProperty(Xe,"logLevel",{enumerable:!0})}),ze,uy=Z(()=>{Cs(),ze=Xe}),As,Rs,ly=Z(()=>{As=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let c=a*i,p=0,h=c,m=c*2,g=-1;o==="RGBA"?(p=0,h=c,m=c*2,g=c*3):o==="RGB"?(p=0,h=c,m=c*2):o==="RBG"&&(p=0,m=c,h=c*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[p++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],v=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+T+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Rs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,g=1,y=2,w=3,b=0,x=p,T=p*2,v=-1;s==="RGBA"?(b=0,x=p,T=p*2,v=p*3):s==="RGB"?(b=0,x=p,T=p*2):s==="RBG"&&(b=0,T=p,x=p*2),r=n.createImageData(i,a);for(let E=0;E<a*i;m+=h,g+=h,y+=h,w+=h,E++)r.data[m]=(e.data[b++]-c[0])*l[0],r.data[g]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[T++]-c[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),wr,Os,Ns,zs,Bs,Ps,cy=Z(()=>{bi(),wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,m=1,g=2,y=3,w=0,b=l,x=l*2,T=-1;s==="RGB"&&(p=3,h=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,h+=p,g+=p,m+=p,y+=p)c[w++]=(e[h]+o[0])/a[0],c[b++]=(e[m]+o[1])/a[1],c[x++]=(e[g]+o[2])/a[2],T!==-1&&y!==-1&&(c[T++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new lt("float32",c,[1,4,n,r]):new lt("float32",c,[1,3,n,r])},Os=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let p=l(c);if(p!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=h,s.width=m}else s.tensorFormat="RGBA",s.height=h,s.width=m;p.drawImage(e,0,0),o=p.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(r){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=c,s.width=p,t!==void 0){let h=u();h.width=p,h.height=c;let m=l(h);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let p=l(c);if(p!=null){let h=e.height,m=e.width;return p.drawImage(e,0,0,m,h),o=p.getImageData(0,0,m,h).data,s.height=h,s.width=m,wr(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,p)=>{let h=u(),m=l(h);if(!e||!m)return p();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{h.width=g.width,h.height=g.height,m.drawImage(g,0,0,h.width,h.height);let y=m.getImageData(0,0,h.width,h.height);s.height=h.height,s.width=h.width,c(wr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return wr(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Ns=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},zs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Bs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ps=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),pn,jn,_i,Ds,dy=Z(()=>{pn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),jn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),_i=!1,Ds=()=>{if(!_i){_i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(pn.set("int64",BigInt64Array),jn.set(BigInt64Array,"int64")),t&&(pn.set("uint64",BigUint64Array),jn.set(BigUint64Array,"uint64")),r?(pn.set("float16",n),jn.set(n,"float16")):pn.set("float16",Uint16Array)}}}),Us,Ls,py=Z(()=>{bi(),Us=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ls=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,bi=Z(()=>{ly(),cy(),dy(),py(),lt=class{constructor(e,t,n){Ds();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=pn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=pn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=jn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Us(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Os(e,t)}static fromTexture(e,t){return Ns(e,t)}static fromGpuBuffer(e,t){return zs(e,t)}static fromMLTensor(e,t){return Bs(e,t)}static fromPinnedBuffer(e,t,n){return Ps(e,t,n)}toDataURL(e){return As(this,e)}toImageData(e){return Rs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ls(this,e)}}}),Ue,Fs=Z(()=>{bi(),Ue=lt}),_r,$i,Rt,_t,hn,fn,Gs=Z(()=>{Cs(),_r=(e,t)=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeStamp(`${e}::ORT::${t}`)},$i=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),_r("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Rt=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||$i("BEGIN",e)},_t=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||$i("END",e)},hn=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.time(`ORT::${e}`)},fn=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeEnd(`ORT::${e}`)}}),Ws,hy=Z(()=>{Ms(),Fs(),Gs(),Ws=class ty{constructor(t){this.handler=t}async run(t,n,r){Rt(),hn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let h=n[p];(h===null||h instanceof Ue)&&(l=!0,o=!1,i[p]=h)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let c=s[l];c instanceof Ue?u[l]=c:u[l]=new Ue(c.type,c.data,c.dims)}return fn("InferenceSession.run"),_t(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Rt(),hn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,h=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-p,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Is(o),l=await s.createInferenceSessionHandler(a,u);return fn("InferenceSession.create"),_t(),new ty(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),br,fy=Z(()=>{hy(),br=Ws}),my=Z(()=>{}),gy=Z(()=>{}),yy=Z(()=>{}),wy=Z(()=>{}),_y={};An(_y,{InferenceSession:()=>br,TRACE:()=>_r,TRACE_EVENT_BEGIN:()=>hn,TRACE_EVENT_END:()=>fn,TRACE_FUNC_BEGIN:()=>Rt,TRACE_FUNC_END:()=>_t,Tensor:()=>Ue,env:()=>ze,registerBackend:()=>Rn});var mt=Z(()=>{oy(),uy(),fy(),Fs(),my(),gy(),Gs(),yy(),wy()}),xi=Z(()=>{}),qs={};An(qs,{default:()=>Vs});var vi,Si,Vs,by=Z(()=>{var e;Ef(),mn(),Ci(),vi="ort-wasm-proxy-worker",Si=((e=globalThis.self)==null?void 0:e.name)===vi,Si&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Oi(r.wasm).then(()=>{qa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Va(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Ur(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ja(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ka(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;Xa(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Za([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Qa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Vs=Si?null:t=>new Worker(t??ct,{type:"module",name:vi})}),Hs={};An(Hs,{default:()=>Ks});async function js(e={}){var Z0,J0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Z0=self.name)==null?void 0:Z0.startsWith("em-pthread"));t.mountExternalData=(d,f)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...f)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:f[0],errors:[]},I=await d(...f);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let B=await Promise.all(C);if(B=B.filter(q=>q),0<B.length)throw Error(B.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(d,f)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let $=t.dd;t.jsepRegisterBuffer=(_,I,C,B)=>$.registerBuffer(_,I,C,B),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,I,C)=>$.createDownloader(_,I,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,I)=>{$.upload(_,I)}}else if(d==="webnn"){let $=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,I)=>$.createMLTensorDownloader(_,I),t.webnnRegisterMLTensor=(_,I,C,B)=>$.registerMLTensor(_,I,C,B),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,I,C,B,q,ne)=>$.registerMLConstant(_,I,C,B,q,t.Xc,ne),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let d=f=>(...$)=>{let _=Lt;return $=f(...$),Lt!=_?new Promise((I,C)=>{hs={resolve:I,reject:C}}):$};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=d(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(d,f)=>{throw f},c=self.location.href,p="";if(n||r){try{p=new URL(".",c).href}catch{}r&&(u=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async d=>{if(k(d))return new Promise(($,_)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):_(I.status)},I.onerror=_,I.send(null)});var f=await fetch(d,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,m,g,y,w,b,x=console.log.bind(console),T=console.error.bind(console),v=x,E=T,M=!1,k=d=>d.startsWith("file://");function S(){Ye.buffer!=z.buffer&&N()}if(i){let d=function(f){try{var $=f.data,_=$.Sc;if(_==="load"){let I=[];self.onmessage=C=>I.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of I)d(C);self.onmessage=d};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...B)=>{postMessage({Sc:"callHandler",wd:C,args:B})},C=="print"&&(v=t[C]),C=="printErr"&&(E=t[C]));Ye=$.Od,N(),m=$.Pd,re(),gi()}else if(_==="run"){(function(I){var C=(S(),F)[I+52>>>2>>>0];I=(S(),F)[I+56>>>2>>>0],u0(C,C-I),xe(C)})($.Rc),ws($.Rc,0,0,1,0,0),Me(),cs($.Rc),A||(n0(),A=!0);try{Ve($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(_==="checkMailbox"?A&&li():_&&(E(`worker: received unknown command ${_}`),E($)))}catch(I){throw r0(),I}};var A=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=d}var z,X,G,V,O,F,K,Q,ue,L,P,R=!1;function N(){var d=Ye.buffer;t.HEAP8=z=new Int8Array(d),G=new Int16Array(d),t.HEAPU8=X=new Uint8Array(d),V=new Uint16Array(d),t.HEAP32=O=new Int32Array(d),t.HEAPU32=F=new Uint32Array(d),K=new Float32Array(d),Q=new Float64Array(d),ue=new BigInt64Array(d),L=new BigUint64Array(d)}function D(){R=!0,i?b():Zt.sb()}function U(d){throw E(d="Aborted("+d+")"),M=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w==null||w(d),d}function j(){return{a:{ma:Dv,gb:Pv,g:kt,J:We,f:rs,o:is,h:as,ha:oi,b:xx,T:vx,Ha:mg,n:Sx,$:_g,Xa:bg,Da:$g,Fa:xg,Ya:vg,Va:Sg,Oa:Tg,Ua:Eg,ka:Ig,Ea:Mg,Ba:kg,Wa:Cg,Ca:Ag,bb:Tx,ea:Ex,wa:Ix,ua:kx,da:Ax,O:Rx,H:Ox,va:Nx,_:Fx,xa:Gx,Ra:Wx,za:Vx,Ia:Hx,sa:jx,fa:Kx,Qa:cs,_a:Yx,R:Jx,r:iv,c:us,hb:av,y:ov,M:sv,D:uv,l:lv,s:Ug,ib:cv,I:dv,S:pv,j:hv,u:fv,q:mv,k:gv,La:yv,Ma:wv,Na:_v,Ja:Wg,Ka:qg,ta:Vg,db:$v,ab:vv,v:Sv,aa:Tv,ga:Ev,$a:xv,W:Iv,Za:Mv,Aa:kv,F:bv,U:Cv,la:fi,ya:Rv,fb:Av,eb:Ov,Sa:Yg,Ta:Xg,Ga:ee,V:Qg,ja:Zg,Pa:Jg,ia:e0,kb:b3,na:m3,lb:_3,oa:f3,G:a3,e:Gv,t:Lv,w:Uv,B:Zv,mb:d3,K:n3,x:Vv,pa:p3,Y:g3,ba:c3,nb:l3,ob:u3,P:Jv,qa:s3,pb:o3,N:r3,Z:h3,d:Fv,A:qv,m:Wv,jb:$3,p:jv,z:Kv,C:Hv,E:Yv,L:e3,qb:i3,Q:y3,ca:t3,X:w3,rb:Qv,ra:Xv,i:zv,a:Ye,cb:Ie}}}async function re(){function d(_,I){var C=Zt=_.exports;_={};for(let[B,q]of Object.entries(C))typeof q=="function"?(C=Xx(q),_[B]=C):_[B]=q;return Zt=_,Zt=(function(){var B=Zt,q=oe=>be=>oe(be)>>>0,ne=oe=>()=>oe()>>>0;return(B=Object.assign({},B)).tb=q(B.tb),B.Xb=ne(B.Xb),B.Zb=q(B.Zb),B.lc=q(B.lc),B.mc=ne(B.mc),B.qc=q(B.qc),B})(),Te.push(Zt._b),t0=(_=Zt).tb,n0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,mi=_.Xb,Ft=t._free=_.Yb,mr=t._malloc=_.Zb,ws=_.ac,r0=_.bc,i0=_.cc,a0=_.dc,_s=_.ec,o0=_.fc,s0=_.gc,Se=_.hc,gr=_.ic,u0=_.jc,xe=_.kc,bs=_.lc,ve=_.mc,l0=_.nc,$s=_.oc,c0=_.pc,d0=_.qc,p0=_.rc,xs=_.sc,h0=_.tc,f0=_.uc,m0=_.vc,g0=_.wc,y0=_.xc,w0=_.yc,_0=_.zc,b0=_.Ac,$0=_.Bc,x0=_.Cc,v0=_.Dc,S0=_.Ec,T0=_.Fc,E0=_.Gc,I0=_.Hc,M0=_.Ic,k0=_.Jc,C0=_.Kc,A0=_.Lc,R0=_.Mc,O0=_.Nc,N0=_.Pc,z0=_.Qc,B0=_.$c,P0=_.ad,D0=_.fd,U0=_.jd,L0=_.kd,F0=_.ld,G0=_.md,W0=_.nd,q0=_.od,V0=_.pd,H0=_.qd,j0=_.vd,K0=_.Td,Y0=_.Ud,X0=_.Vd,Q0=_.Wd,m=I,Zt}var f,$=j();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(I,C)=>{_(d(I,C))})}):i?d(new WebAssembly.Instance(m,j()),m):(P??(P=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(_){var I=P;if(!h&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(B){E(`wasm streaming compile failed: ${B}`),E("falling back to ArrayBuffer instantiation")}return(async function(B,q){try{var ne=await(async function(oe){if(!h)try{var be=await s(oe);return new Uint8Array(be)}catch{}if(oe==P&&h)oe=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(B);return await WebAssembly.instantiate(ne,q)}catch(oe){E(`failed to asynchronously prepare wasm: ${oe}`),U(oe)}})(I,_)})($),d(f.instance,f.module))}class te{constructor(f){ey(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var Y=d=>{d.terminate(),d.onmessage=()=>{}},J=[],ae=0,pe=null,Ae=d=>{de.length==0&&(tt(),ye(de[0]));var f=de.pop();if(!f)return 6;fe.push(f),$e[d.Rc]=f,f.Rc=d.Rc;var $={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return f.postMessage($,d.rd),0},me=0,ie=(d,f,...$)=>{var _,I=16*$.length,C=ve(),B=bs(I),q=B>>>3;for(_ of $)typeof _=="bigint"?((S(),ue)[q++>>>0]=1n,(S(),ue)[q++>>>0]=_):((S(),ue)[q++>>>0]=0n,(S(),Q)[q++>>>0]=_);return d=i0(d,0,I,B,f),xe(C),d};function Ie(d){if(i)return ie(0,1,d);if(g=d,!(0<me)){for(var f of fe)Y(f);for(f of de)Y(f);de=[],fe=[],$e={},M=!0}l(0,new te(d))}function Oe(d){if(i)return ie(1,0,d);ee(d)}var ee=d=>{if(g=d,i)throw Oe(d),"unwind";Ie(d)},de=[],fe=[],Te=[],$e={},_e=d=>{var f=d.Rc;delete $e[f],de.push(d),fe.splice(fe.indexOf(d),1),d.Rc=0,a0(f)};function Me(){Te.forEach(d=>d())}var ye=d=>new Promise(f=>{d.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=mi()){var B=$e[C.Zc];B?B.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?li():I==="spawnThread"?Ae(C):I==="cleanupThread"?ui(()=>{_e($e[C.Nd])}):I==="loaded"?(d.loaded=!0,f(d)):C.target==="setimmediate"?d.postMessage(C):I==="uncaughtException"?d.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&E(`worker sent an unknown command ${I}`)},d.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);d.postMessage({Sc:"load",xd:_,Od:Ye,Pd:m})});function tt(){var d=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});de.push(d)}var Ye,Ve=(d,f)=>{me=0,d=xs(d,f),0<me?g=d:_s(d)},qe=[],ft=0;function kt(d){var f=new Ct(d>>>=0);return(S(),z)[f.Tc+12>>>0]==0&&(je(f,!0),ft--),yt(f,!1),qe.push(f),d0(d)}var ot=0,We=()=>{Se(0,0);var d=qe.pop();l0(d.cd),ot=0};function je(d,f){f=f?1:0,(S(),z)[d.Tc+12>>>0]=f}function yt(d,f){f=f?1:0,(S(),z)[d.Tc+13>>>0]=f}class Ct{constructor(f){this.cd=f,this.Tc=f-24}}var Xt=d=>{var f=ot;if(!f)return gr(0),0;var $=new Ct(f);(S(),F)[$.Tc+16>>>2>>>0]=f;var _=(S(),F)[$.Tc+4>>>2>>>0];if(!_)return gr(0),f;for(var I of d){if(I===0||I===_)break;if(c0(I,_,$.Tc+16))return gr(I),f}return gr(_),f};function rs(){return Xt([])}function is(d){return Xt([d>>>0])}function as(d,f,$,_){return Xt([d>>>0,f>>>0,$>>>0,_>>>0])}var oi=()=>{var d=qe.pop();d||U("no exception to throw");var f=d.cd;throw(S(),z)[d.Tc+13>>>0]==0&&(qe.push(d),yt(d,!0),je(d,!1),ft++),$s(f),ot=f};function xx(d,f,$){var _=new Ct(d>>>=0);throw f>>>=0,$>>>=0,(S(),F)[_.Tc+16>>>2>>>0]=0,(S(),F)[_.Tc+4>>>2>>>0]=f,(S(),F)[_.Tc+8>>>2>>>0]=$,$s(d),ft++,ot=d}var vx=()=>ft;function fg(d,f,$,_){return i?ie(2,1,d,f,$,_):mg(d,f,$,_)}function mg(d,f,$,_){if(d>>>=0,f>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?fg(d,f,$,_):(d={Ld:$,Rc:d,bd:_,rd:I},i?(d.Sc="spawnThread",postMessage(d,I),0):Ae(d))}function Sx(d){throw ot||(ot=d>>>0),ot}var gg=globalThis.TextDecoder&&new TextDecoder,yg=(d,f,$,_)=>{if($=f+$,_)return $;for(;d[f]&&!(f>=$);)++f;return f},wg=(d,f=0,$,_)=>{if(16<($=yg(d,f>>>=0,$,_))-f&&d.buffer&&gg)return gg.decode(d.buffer instanceof ArrayBuffer?d.subarray(f,$):d.slice(f,$));for(_="";f<$;){var I=d[f++];if(128&I){var C=63&d[f++];if((224&I)==192)_+=String.fromCharCode((31&I)<<6|C);else{var B=63&d[f++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|B:(7&I)<<18|C<<12|B<<6|63&d[f++])?_+=String.fromCharCode(I):(I-=65536,_+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else _+=String.fromCharCode(I)}return _},He=(d,f,$)=>(d>>>=0)?wg((S(),X),d,f,$):"";function _g(d,f,$){return i?ie(3,1,d,f,$):0}function bg(d,f){if(i)return ie(4,1,d,f)}function $g(d,f){if(i)return ie(5,1,d,f)}function xg(d,f,$){if(i)return ie(6,1,d,f,$)}function vg(d,f,$){return i?ie(7,1,d,f,$):0}function Sg(d,f){if(i)return ie(8,1,d,f)}function Tg(d,f,$){if(i)return ie(9,1,d,f,$)}function Eg(d,f,$,_){if(i)return ie(10,1,d,f,$,_)}function Ig(d,f,$,_){if(i)return ie(11,1,d,f,$,_)}function Mg(d,f,$,_){if(i)return ie(12,1,d,f,$,_)}function kg(d){if(i)return ie(13,1,d)}function Cg(d,f){if(i)return ie(14,1,d,f)}function Ag(d,f,$){if(i)return ie(15,1,d,f,$)}var Tx=()=>U(""),Ut=d=>{d>>>=0;for(var f="";;){var $=(S(),X)[d++>>>0];if(!$)return f;f+=String.fromCharCode($)}},os={},ss={},qn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Qt(d,f,$={}){return(function(_,I,C={}){var B=I.name;if(!_)throw new qn(`type "${B}" must have a positive integer typeid pointer`);if(ss.hasOwnProperty(_)){if(C.yd)return;throw new qn(`Cannot register type '${B}' twice`)}ss[_]=I,os.hasOwnProperty(_)&&(I=os[_],delete os[_],I.forEach(q=>q()))})(d,f,$)}var Rg=(d,f,$)=>{switch(f){case 1:return $?_=>(S(),z)[_>>>0]:_=>(S(),X)[_>>>0];case 2:return $?_=>(S(),G)[_>>>1>>>0]:_=>(S(),V)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),F)[_>>>2>>>0];case 8:return $?_=>(S(),ue)[_>>>3>>>0]:_=>(S(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${d}`)}};function Ex(d,f,$,_,I){d>>>=0,$>>>=0,f=Ut(f>>>0);let C=B=>B;if(_=_===0n){let B=8*$;C=q=>BigInt.asUintN(B,q),I=C(I)}Qt(d,{name:f,Oc:C,Vc:(B,q)=>(typeof q=="number"&&(q=BigInt(q)),q),Uc:Rg(f,$,!_),Wc:null})}function Ix(d,f,$,_){Qt(d>>>=0,{name:f=Ut(f>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:_},Uc:function(I){return this.Oc((S(),X)[I>>>0])},Wc:null})}var Og=[],Mn=[0,1,,1,null,1,!0,1,!1,1];function us(d){9<(d>>>=0)&&--Mn[d+1]===0&&(Mn[d]=void 0,Og.push(d))}var wt=d=>{if(!d)throw new qn(`Cannot use deleted val. handle = ${d}`);return Mn[d]},At=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Og.pop()||Mn.length;return Mn[f]=d,Mn[f+1]=1,f}};function ls(d){return this.Oc((S(),F)[d>>>2>>>0])}var Mx={name:"emscripten::val",Oc:d=>{var f=wt(d);return us(d),f},Vc:(d,f)=>At(f),Uc:ls,Wc:null};function kx(d){return Qt(d>>>0,Mx)}var Cx=(d,f)=>{switch(f){case 4:return function($){return this.Oc((S(),K)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Q)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${d}`)}};function Ax(d,f,$){$>>>=0,Qt(d>>>=0,{name:f=Ut(f>>>0),Oc:_=>_,Vc:(_,I)=>I,Uc:Cx(f,$),Wc:null})}function Rx(d,f,$,_,I){d>>>=0,$>>>=0,f=Ut(f>>>0);let C=q=>q;if(_===0){var B=32-8*$;C=q=>q<<B>>>B,I=C(I)}Qt(d,{name:f,Oc:C,Vc:(q,ne)=>ne,Uc:Rg(f,$,_!==0),Wc:null})}function Ox(d,f,$){function _(C){var B=(S(),F)[C>>>2>>>0];return C=(S(),F)[C+4>>>2>>>0],new I((S(),z).buffer,C,B)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Qt(d>>>=0,{name:$=Ut($>>>0),Oc:_,Uc:_},{yd:!0})}var ln=(d,f,$)=>{var _=(S(),X);if(f>>>=0,0<$){var I=f;$=f+$-1;for(var C=0;C<d.length;++C){var B=d.codePointAt(C);if(127>=B){if(f>=$)break;_[f++>>>0]=B}else if(2047>=B){if(f+1>=$)break;_[f++>>>0]=192|B>>6,_[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=$)break;_[f++>>>0]=224|B>>12,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B}else{if(f+3>=$)break;_[f++>>>0]=240|B>>18,_[f++>>>0]=128|B>>12&63,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B,C++}}_[f>>>0]=0,d=f-I}else d=0;return d},si=d=>{for(var f=0,$=0;$<d.length;++$){var _=d.charCodeAt($);127>=_?f++:2047>=_?f+=2:55296<=_&&57343>=_?(f+=4,++$):f+=3}return f};function Nx(d,f){Qt(d>>>=0,{name:f=Ut(f>>>0),Oc($){var _=(S(),F)[$>>>2>>>0];return _=He($+4,_,!0),Ft($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var I=typeof _=="string";if(!(I||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new qn("Cannot pass non-string to std::string");var C=I?si(_):_.length,B=mr(4+C+1),q=B+4;return(S(),F)[B>>>2>>>0]=C,I?ln(_,q,C+1):(S(),X).set(_,q>>>0),$!==null&&$.push(Ft,B),B},Uc:ls,Wc($){Ft($)}})}var Ng=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,zx=(d,f,$)=>{if(d>>>=1,16<(f=yg((S(),V),d,f/2,$))-d&&Ng)return Ng.decode((S(),V).slice(d,f));for($="";d<f;++d){var _=(S(),V)[d>>>0];$+=String.fromCharCode(_)}return $},Bx=(d,f,$)=>{if($??($=2147483647),2>$)return 0;var _=f;$=($-=2)<2*d.length?$/2:d.length;for(var I=0;I<$;++I){var C=d.charCodeAt(I);(S(),G)[f>>>1>>>0]=C,f+=2}return(S(),G)[f>>>1>>>0]=0,f-_},Px=d=>2*d.length,Dx=(d,f,$)=>{var _="";d>>>=2;for(var I=0;!(I>=f/4);I++){var C=(S(),F)[d+I>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},Ux=(d,f,$)=>{if(f>>>=0,$??($=2147483647),4>$)return 0;var _=f;$=_+$-4;for(var I=0;I<d.length;++I){var C=d.codePointAt(I);if(65535<C&&I++,(S(),O)[f>>>2>>>0]=C,(f+=4)+4>$)break}return(S(),O)[f>>>2>>>0]=0,f-_},Lx=d=>{for(var f=0,$=0;$<d.length;++$)65535<d.codePointAt($)&&$++,f+=4;return f};function Fx(d,f,$){if(d>>>=0,f>>>=0,$=Ut($>>>=0),f===2)var _=zx,I=Bx,C=Px;else _=Dx,I=Ux,C=Lx;Qt(d,{name:$,Oc:B=>{var q=(S(),F)[B>>>2>>>0];return q=_(B+4,q*f,!0),Ft(B),q},Vc:(B,q)=>{if(typeof q!="string")throw new qn(`Cannot pass non-string to C++ string type ${$}`);var ne=C(q),oe=mr(4+ne+f);return(S(),F)[oe>>>2>>>0]=ne/f,I(q,oe+4,ne+f),B!==null&&B.push(Ft,oe),oe},Uc:ls,Wc(B){Ft(B)}})}function Gx(d,f){Qt(d>>>=0,{zd:!0,name:f=Ut(f>>>0),Oc:()=>{},Vc:()=>{}})}function Wx(d){ws(d>>>0,!r,1,!n,131072,!1),Me()}var ui=d=>{if(!M)try{if(d(),!(0<me))try{i?mi()&&_s(g):ee(g)}catch(f){f instanceof te||f=="unwind"||l(0,f)}}catch(f){f instanceof te||f=="unwind"||l(0,f)}},qx=!Atomics.waitAsync||((J0=globalThis.navigator)==null?void 0:J0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function cs(d){d>>>=0,qx||(Atomics.waitAsync((S(),O),d>>>2,d).value.then(li),d+=128,Atomics.store((S(),O),d>>>2,1))}var li=()=>ui(()=>{var d=mi();d&&(cs(d),s0())});function Vx(d,f){(d>>>=0)==f>>>0?setTimeout(li):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=$e[d])&&d.postMessage({Sc:"checkMailbox"})}var ds=[];function Hx(d,f,$,_,I){for(f>>>=0,I>>>=0,ds.length=0,$=I>>>3,_=I+_>>>3;$<_;){var C;C=(S(),ue)[$++>>>0]?(S(),ue)[$++>>>0]:(S(),Q)[$++>>>0],ds.push(C)}return(f?vs[f]:Bv[d])(...ds)}var jx=()=>{me=0};function Kx(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):_e($e[d])}function Yx(d){}var ci=d=>{try{d()}catch(f){U(f)}};function Xx(d){var f=(...$)=>{di.push(d);try{return d(...$)}finally{M||(di.pop(),Lt&&cn===1&&di.length===0&&(cn=0,me+=1,ci(Y0),typeof Fibers<"u"&&Fibers.Zd()))}};return Pg.set(d,f),f}var cn=0,Lt=null,zg=0,di=[],ps=new Map,Bg=new Map,Pg=new Map,Qx=0,hs=null,Zx=[],Dg=d=>(function(f){if(!M){if(cn===0){var $=!1,_=!1;f((I=0)=>{if(!M&&(zg=I,$=!0,_)){cn=2,ci(()=>X0(Lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var ne=(S(),O)[Lt+8>>>2>>>0];return ne=Bg.get(ne),ne=Pg.get(ne),--me,ne()})()}catch(ne){C=ne,I=!0}var B=!1;if(!Lt){var q=hs;q&&(hs=null,(I?q.reject:q.resolve)(C),B=!0)}if(I&&!B)throw C}}),_=!0,$||(cn=1,Lt=(function(){var I=mr(65548),C=I+12;if((S(),F)[I>>>2>>>0]=C,(S(),F)[I+4>>>2>>>0]=C+65536,C=di[0],!ps.has(C)){var B=Qx++;ps.set(C,B),Bg.set(B,C)}return C=ps.get(C),(S(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),ci(()=>K0(Lt)))}else cn===2?(cn=0,ci(Q0),Ft(Lt),Lt=null,Zx.forEach(ui)):U(`invalid state: ${cn}`);return zg}})(f=>{d().then(f)});function Jx(d){return d>>>=0,Dg(async()=>{var f=await wt(d);return At(f)})}var fs=[],ev=d=>{var f=fs.length;return fs.push(d),f},tv=(d,f)=>{for(var $=Array(d),_=0;_<d;++_){var I=_,C=(S(),F)[f+4*_>>>2>>>0],B=ss[C];if(B===void 0)throw d=`parameter ${_}`,C=t0(C),f=Ut(C),Ft(C),new qn(`${d} has unknown type ${f}`);$[I]=B}return $},nv=(d,f,$)=>{var _=[];return d=d(_,$),_.length&&((S(),F)[f>>>2>>>0]=At(_)),d},rv={},pi=d=>{var f=rv[d];return f===void 0?Ut(d):f};function iv(d,f,$){var[_,...I]=tv(d,f>>>0);f=_.Vc.bind(_);var C=I.map(ne=>ne.Uc.bind(ne));d--;var B={toValue:wt};switch(d=C.map((ne,oe)=>{var be=`argFromPtr${oe}`;return B[be]=ne,`${be}(args${oe?"+"+8*oe:""})`}),$){case 0:var q="toValue(handle)";break;case 2:q="new (toValue(handle))";break;case 3:q="";break;case 1:B.getStringOrSymbol=pi,q="toValue(handle)[getStringOrSymbol(methodName)]"}return q+=`(${d})`,_.zd||(B.toReturnWire=f,B.emval_returnValue=nv,q=`return emval_returnValue(toReturnWire, destructorsRef, ${q})`),q=`return function (handle, methodName, destructorsRef, args) {
  ${q}
  }`,$=new Function(Object.keys(B),q)(...Object.values(B)),q=`methodCaller<(${I.map(ne=>ne.name)}) => ${_.name}>`,ev(Object.defineProperty($,"name",{value:q}))}function av(d,f){return f>>>=0,(d=wt(d>>>0))==wt(f)}function ov(d){return(d>>>=0)?(d=pi(d),At(globalThis[d])):At(globalThis)}function sv(d){return d=pi(d>>>0),At(t[d])}function uv(d,f){return f>>>=0,d=wt(d>>>0),f=wt(f),At(d[f])}function lv(d){9<(d>>>=0)&&(Mn[d+1]+=1)}function Ug(d,f,$,_,I){return fs[d>>>0](f>>>0,$>>>0,_>>>0,I>>>0)}function cv(d,f,$,_,I){return Ug(d>>>0,f>>>0,$>>>0,_>>>0,I>>>0)}function dv(){return At([])}function pv(d){d=wt(d>>>0);for(var f=Array(d.length),$=0;$<d.length;$++)f[$]=d[$];return At(f)}function hv(d){return At(pi(d>>>0))}function fv(){return At({})}function mv(d){for(var f=wt(d>>>=0);f.length;){var $=f.pop();f.pop()($)}us(d)}function gv(d,f,$){f>>>=0,$>>>=0,d=wt(d>>>0),f=wt(f),$=wt($),d[f]=$}function yv(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(S(),O)[f>>>2>>>0]=d.getUTCSeconds(),(S(),O)[f+4>>>2>>>0]=d.getUTCMinutes(),(S(),O)[f+8>>>2>>>0]=d.getUTCHours(),(S(),O)[f+12>>>2>>>0]=d.getUTCDate(),(S(),O)[f+16>>>2>>>0]=d.getUTCMonth(),(S(),O)[f+20>>>2>>>0]=d.getUTCFullYear()-1900,(S(),O)[f+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[f+28>>>2>>>0]=d}var Lg=d=>d%4==0&&(d%100!=0||d%400==0),Fg=[0,31,60,91,121,152,182,213,244,274,305,335],Gg=[0,31,59,90,120,151,181,212,243,273,304,334];function wv(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(S(),O)[f>>>2>>>0]=d.getSeconds(),(S(),O)[f+4>>>2>>>0]=d.getMinutes(),(S(),O)[f+8>>>2>>>0]=d.getHours(),(S(),O)[f+12>>>2>>>0]=d.getDate(),(S(),O)[f+16>>>2>>>0]=d.getMonth(),(S(),O)[f+20>>>2>>>0]=d.getFullYear()-1900,(S(),O)[f+24>>>2>>>0]=d.getDay();var $=(Lg(d.getFullYear())?Fg:Gg)[d.getMonth()]+d.getDate()-1|0;(S(),O)[f+28>>>2>>>0]=$,(S(),O)[f+36>>>2>>>0]=-60*d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset();var _=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|($!=_&&d.getTimezoneOffset()==Math.min(_,$)),(S(),O)[f+32>>>2>>>0]=d}function _v(d){d>>>=0;var f=new Date((S(),O)[d+20>>>2>>>0]+1900,(S(),O)[d+16>>>2>>>0],(S(),O)[d+12>>>2>>>0],(S(),O)[d+8>>>2>>>0],(S(),O)[d+4>>>2>>>0],(S(),O)[d>>>2>>>0],0),$=(S(),O)[d+32>>>2>>>0],_=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(C,I);return 0>$?(S(),O)[d+32>>>2>>>0]=+(I!=C&&B==_):0<$!=(B==_)&&(I=Math.max(C,I),f.setTime(f.getTime()+6e4*((0<$?B:I)-_))),(S(),O)[d+24>>>2>>>0]=f.getDay(),$=(Lg(f.getFullYear())?Fg:Gg)[f.getMonth()]+f.getDate()-1|0,(S(),O)[d+28>>>2>>>0]=$,(S(),O)[d>>>2>>>0]=f.getSeconds(),(S(),O)[d+4>>>2>>>0]=f.getMinutes(),(S(),O)[d+8>>>2>>>0]=f.getHours(),(S(),O)[d+12>>>2>>>0]=f.getDate(),(S(),O)[d+16>>>2>>>0]=f.getMonth(),(S(),O)[d+20>>>2>>>0]=f.getYear(),d=f.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function Wg(d,f,$,_,I,C,B){return i?ie(16,1,d,f,$,_,I,C,B):-52}function qg(d,f,$,_,I,C){if(i)return ie(17,1,d,f,$,_,I,C)}var fr={},bv=()=>performance.timeOrigin+performance.now();function Vg(d,f){if(i)return ie(18,1,d,f);if(fr[d]&&(clearTimeout(fr[d].id),delete fr[d]),!f)return 0;var $=setTimeout(()=>{delete fr[d],ui(()=>o0(d,performance.timeOrigin+performance.now()))},f);return fr[d]={id:$,Yd:f},0}function $v(d,f,$,_){d>>>=0,f>>>=0,$>>>=0,_>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var B=Math.max(C,I);(S(),F)[d>>>2>>>0]=60*B,(S(),O)[f>>>2>>>0]=+(C!=I),d=(f=q=>{var ne=Math.abs(q);return`UTC${0<=q?"-":"+"}${String(Math.floor(ne/60)).padStart(2,"0")}${String(ne%60).padStart(2,"0")}`})(C),f=f(I),I<C?(ln(d,$,17),ln(f,_,17)):(ln(d,_,17),ln(f,$,17))}var xv=()=>Date.now();function vv(d,f,$){return $>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(S(),ue)[$>>>3>>>0]=BigInt(d),0):28}var ms=[],Hg=(d,f)=>{ms.length=0;for(var $;$=(S(),X)[d++>>>0];){var _=$!=105;f+=(_&=$!=112)&&f%8?4:0,ms.push($==112?(S(),F)[f>>>2>>>0]:$==106?(S(),ue)[f>>>3>>>0]:$==105?(S(),O)[f>>>2>>>0]:(S(),Q)[f>>>3>>>0]),f+=_?8:4}return ms};function Sv(d,f,$){return d>>>=0,f=Hg(f>>>0,$>>>0),vs[d](...f)}function Tv(d,f,$){return d>>>=0,f=Hg(f>>>0,$>>>0),vs[d](...f)}var Ev=()=>{};function Iv(d,f){return E(He(d>>>0,f>>>0))}var Mv=()=>{throw me+=1,"unwind"};function kv(){return 4294901760}var Cv=()=>navigator.hardwareConcurrency,kn={},hi=d=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+f[1]:0},jg=d=>{for(var f of d)(d=hi(f))&&(kn[d]=f)};function Av(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),jg(d),kn.gd=hi(d[3]),kn.Jd=d,kn.gd}function fi(d){if(!(d=kn[d>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(d))d=f[1];else{if(!(f=/^(.+?)@/.exec(d)))return 0;d=f[1]}Ft(fi.hd??0),f=si(d)+1;var $=mr(f);return $&&ln(d,$,f),fi.hd=$,fi.hd}function Rv(d){d>>>=0;var f=(S(),X).length;if(d<=f||4294901760<d)return!1;for(var $=1;4>=$;$*=2){var _=f*(1+.2/$);_=Math.min(_,d+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(d,_)/65536))-Ye.buffer.byteLength+65535)/65536|0;try{Ye.grow(_),N();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function Ov(d,f,$){if(d>>>=0,f>>>=0,kn.gd==d)var _=kn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),jg(_);for(var I=3;_[I]&&hi(_[I])!=d;)++I;for(d=0;d<$&&_[d+I];++d)(S(),O)[f+4*d>>>2>>>0]=hi(_[d+I]);return d}var gs,ys={},Kg=()=>{var _;if(!gs){var d,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ys)ys[d]===void 0?delete f[d]:f[d]=ys[d];var $=[];for(d in f)$.push(`${d}=${f[d]}`);gs=$}return gs};function Yg(d,f){if(i)return ie(19,1,d,f);d>>>=0,f>>>=0;var $,_=0,I=0;for($ of Kg()){var C=f+_;(S(),F)[d+I>>>2>>>0]=C,_+=ln($,C,1/0)+1,I+=4}return 0}function Xg(d,f){if(i)return ie(20,1,d,f);d>>>=0,f>>>=0;var $=Kg();for(var _ of((S(),F)[d>>>2>>>0]=$.length,d=0,$))d+=si(_)+1;return(S(),F)[f>>>2>>>0]=d,0}function Qg(d){return i?ie(21,1,d):52}function Zg(d,f,$,_){return i?ie(22,1,d,f,$,_):52}function Jg(d,f,$,_){return i?ie(23,1,d,f,$,_):70}var Nv=[null,[],[]];function e0(d,f,$,_){if(i)return ie(24,1,d,f,$,_);f>>>=0,$>>>=0,_>>>=0;for(var I=0,C=0;C<$;C++){var B=(S(),F)[f>>>2>>>0],q=(S(),F)[f+4>>>2>>>0];f+=8;for(var ne=0;ne<q;ne++){var oe=d,be=(S(),X)[B+ne>>>0],ke=Nv[oe];be===0||be===10?((oe===1?v:E)(wg(ke)),ke.length=0):ke.push(be)}I+=q}return(S(),F)[_>>>2>>>0]=I,0}function zv(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)tt();J.push(async()=>{var f=(async function(){if(!i)return Promise.all(de.map(ye))})();ae++,await f,--ae==0&&pe&&(f=pe,pe=null,f())})})(),i||(Ye=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),N()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>ve(),t.stackRestore=d=>xe(d),t.stackAlloc=d=>bs(d),t.setValue=function(d,f,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),z)[d>>>0]=f;break;case"i16":(S(),G)[d>>>1>>>0]=f;break;case"i32":(S(),O)[d>>>2>>>0]=f;break;case"i64":(S(),ue)[d>>>3>>>0]=BigInt(f);break;case"float":(S(),K)[d>>>2>>>0]=f;break;case"double":(S(),Q)[d>>>3>>>0]=f;break;case"*":(S(),F)[d>>>2>>>0]=f;break;default:U(`invalid type for setValue: ${$}`)}},t.getValue=function(d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(S(),z)[d>>>0];case"i16":return(S(),G)[d>>>1>>>0];case"i32":return(S(),O)[d>>>2>>>0];case"i64":return(S(),ue)[d>>>3>>>0];case"float":return(S(),K)[d>>>2>>>0];case"double":return(S(),Q)[d>>>3>>>0];case"*":return(S(),F)[d>>>2>>>0];default:U(`invalid type for getValue: ${f}`)}},t.UTF8ToString=He,t.stringToUTF8=ln,t.lengthBytesUTF8=si;var t0,n0,mi,Ft,mr,ws,r0,i0,a0,_s,o0,s0,Se,gr,u0,xe,bs,ve,l0,$s,c0,d0,p0,xs,h0,f0,m0,g0,y0,w0,_0,b0,$0,x0,v0,S0,T0,E0,I0,M0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Zt,Bv=[Ie,Oe,fg,_g,bg,$g,xg,vg,Sg,Tg,Eg,Ig,Mg,kg,Cg,Ag,Wg,qg,Vg,Yg,Xg,Qg,Zg,Jg,e0],vs={1003524:(d,f,$,_,I)=>{if(t===void 0||!t.Xc)return 1;if((d=He(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(f=Number(f>>>0),$=Number($>>>0),_=Number(_>>>0),f+$>d.byteLength)return 3;try{let C=d.subarray(f,f+$);switch(I){case 0:(S(),X).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,f,$)=>{t.td(d,(S(),X).subarray(f>>>0,f+$>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,f,$)=>{t.ed(Number(d),Number(f),Number($),!0)},1004704:(d,f,$)=>{t.ed(Number(d),Number(f),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,f,$)=>{t.$b("HardSigmoid",d,{alpha:f,beta:$})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,f,$)=>{t.$b("Clip",d,{min:f,max:$})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,f)=>{t.$b("Elu",d,{alpha:f})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,f)=>{t.$b("LeakyRelu",d,{alpha:f})},1006444:(d,f)=>{t.$b("ThresholdedRelu",d,{alpha:f})},1006514:(d,f)=>{t.$b("Cast",d,{to:f})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,f,$,_,I)=>{t.$b("ReduceMean",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007283:(d,f,$,_,I)=>{t.$b("ReduceMax",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007457:(d,f,$,_,I)=>{t.$b("ReduceMin",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007631:(d,f,$,_,I)=>{t.$b("ReduceProd",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007806:(d,f,$,_,I)=>{t.$b("ReduceSum",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007980:(d,f,$,_,I)=>{t.$b("ReduceL1",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008153:(d,f,$,_,I)=>{t.$b("ReduceL2",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008326:(d,f,$,_,I)=>{t.$b("ReduceLogSum",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008503:(d,f,$,_,I)=>{t.$b("ReduceSumSquare",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008683:(d,f,$,_,I)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,f,$)=>{t.$b("Transpose",d,{perm:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1009040:(d,f,$,_)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:He($),format:_?"NHWC":"NCHW"})},1009173:(d,f,$,_)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:He($),format:_?"NHWC":"NCHW"})},1009306:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De,dn)=>{t.$b("ConvTranspose",d,{format:ne?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[C,B],strides:[q],wIsConst:()=>!!(S(),z)[oe>>>0],outputPadding:be?Array.from((S(),O).subarray(Number(be)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:He(dn)})},1009739:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("ConvTranspose",d,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[ne>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],outputShape:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:He(De)})},1010400:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De,dn)=>{t.$b("ConvTranspose",d,{format:ne?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[C,B],strides:[q],wIsConst:()=>!!(S(),z)[oe>>>0],outputPadding:be?Array.from((S(),O).subarray(Number(be)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((S(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:He(dn)})},1010833:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("ConvTranspose",d,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(S(),z)[ne>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],outputShape:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:He(De)})},1011494:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1011585:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("AveragePool",d,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:q?Array.from((S(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012064:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1012155:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("AveragePool",d,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:q?Array.from((S(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012634:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1012721:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("MaxPool",d,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:q?Array.from((S(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013196:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1013283:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De)=>{t.$b("MaxPool",d,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:q?Array.from((S(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((S(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013758:(d,f,$,_,I)=>{t.$b("Gemm",d,{alpha:f,beta:$,transA:_,transB:I})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,f,$,_)=>{t.$b("ArgMax",d,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014024:(d,f,$,_)=>{t.$b("ArgMin",d,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014132:(d,f)=>{t.$b("Softmax",d,{axis:f})},1014195:(d,f)=>{t.$b("Concat",d,{axis:f})},1014255:(d,f,$,_,I)=>{t.$b("Split",d,{axis:f,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,f)=>{t.$b("Gather",d,{axis:Number(f)})},1014536:(d,f)=>{t.$b("GatherElements",d,{axis:Number(f)})},1014615:(d,f)=>{t.$b("GatherND",d,{batch_dims:Number(f)})},1014694:(d,f,$,_,I,C,B,q,ne,oe,be)=>{t.$b("Resize",d,{antialias:f,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:He(I),cubicCoeffA:C,excludeOutside:B,extrapolationValue:q,keepAspectRatioPolicy:He(ne),mode:He(oe),nearestMode:He(be)})},1015056:(d,f,$,_,I,C,B)=>{t.$b("Slice",d,{starts:f?Array.from((S(),O).subarray(Number(f)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,f,$)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:$?"NHWC":"NCHW"})},1015486:(d,f,$)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:$?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,f)=>{t.$b("Einsum",d,{equation:He(f)})},1015734:(d,f,$,_,I)=>{t.$b("Pad",d,{mode:f,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1015877:(d,f,$,_,I,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(d,f,$,_,I,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(d,f,$)=>{t.$b("CumSum",d,{exclusive:Number(f),reverse:Number($)})},1016312:(d,f,$)=>{t.$b("DequantizeLinear",d,{axis:f,blockSize:$})},1016402:(d,f,$,_,I)=>{t.$b("GridSample",d,{align_corners:f,mode:He($),padding_mode:He(_),format:I?"NHWC":"NCHW"})},1016572:(d,f,$,_,I)=>{t.$b("GridSample",d,{align_corners:f,mode:He($),padding_mode:He(_),format:I?"NHWC":"NCHW"})},1016742:(d,f)=>{t.$b("ScatterND",d,{reduction:He(f)})},1016827:(d,f,$,_,I,C,B,q,ne)=>{t.$b("Attention",d,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C,qkvHiddenSizes:B?Array.from((S(),O).subarray(Number(q)>>>0,Number(q)+B>>>0)):[],pastPresentShareBuffer:!!ne})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De,dn,Ss)=>{t.$b("Conv",d,{format:ke?"NHWC":"NCHW",auto_pad:f,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:I,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(B)>>>0)):[],pads:q?Array.from((S(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],strides:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],w_is_const:()=>!!(S(),z)[Number(Be)>>>0],activation:He(De),activation_params:dn?Array.from((S(),K).subarray(Number(dn)>>>0,Number(Ss)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,f,$,_,I,C,B,q,ne)=>{t.$b("GroupQueryAttention",d,{numHeads:f,kvNumHeads:$,scale:_,softcap:I,doRotary:C,rotaryInterleaved:B,smoothSoftmax:q,localWindowSize:ne})},1018124:(d,f,$,_)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:$,simplified:!!_})},1018235:(d,f,$,_)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:$,simplified:!!_})},1018346:(d,f,$,_,I,C)=>{t.$b("MatMulNBits",d,{k:f,n:$,accuracyLevel:_,bits:I,blockSize:C})},1018473:(d,f,$,_,I,C)=>{t.$b("MultiHeadAttention",d,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C})},1018632:(d,f)=>{t.$b("QuickGelu",d,{alpha:f})},1018696:(d,f,$,_,I)=>{t.$b("RotaryEmbedding",d,{interleaved:!!f,numHeads:$,rotaryEmbeddingDim:_,scale:I})},1018835:(d,f,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!$})},1018937:(d,f,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!$})},1019039:(d,f,$,_)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:f,quantizeAxis:$,blockSize:_})},1019160:d=>{t.Fd(d)},1019194:(d,f)=>t.Hd(Number(d),Number(f),t.Yc.Kd,t.Yc.errors)};function Pv(d,f,$){return Dg(async()=>{await t.Dd(Number(d),Number(f),Number($))})}function Dv(){return typeof wasmOffsetConverter<"u"}function Uv(d,f,$,_){var I=ve();try{return b0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function Lv(d,f,$){var _=ve();try{return g0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function Fv(d){var f=ve();try{h0(d)}catch($){if(xe(f),$!==$+0)throw $;Se(1,0)}}function Gv(d,f){var $=ve();try{return xs(d,f)}catch(_){if(xe($),_!==_+0)throw _;Se(1,0)}}function Wv(d,f,$){var _=ve();try{p0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function qv(d,f){var $=ve();try{$0(d,f)}catch(_){if(xe($),_!==_+0)throw _;Se(1,0)}}function Vv(d,f,$,_,I,C,B){var q=ve();try{return w0(d,f,$,_,I,C,B)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function Hv(d,f,$,_,I,C){var B=ve();try{f0(d,f,$,_,I,C)}catch(q){if(xe(B),q!==q+0)throw q;Se(1,0)}}function jv(d,f,$,_){var I=ve();try{_0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function Kv(d,f,$,_,I){var C=ve();try{m0(d,f,$,_,I)}catch(B){if(xe(C),B!==B+0)throw B;Se(1,0)}}function Yv(d,f,$,_,I,C,B){var q=ve();try{v0(d,f,$,_,I,C,B)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function Xv(d,f,$,_,I,C,B){var q=ve();try{S0(d,f,$,_,I,C,B)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function Qv(d,f,$,_,I,C,B,q){var ne=ve();try{M0(d,f,$,_,I,C,B,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function Zv(d,f,$,_,I){var C=ve();try{return x0(d,f,$,_,I)}catch(B){if(xe(C),B!==B+0)throw B;Se(1,0)}}function Jv(d,f,$){var _=ve();try{return k0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function e3(d,f,$,_,I,C,B,q){var ne=ve();try{C0(d,f,$,_,I,C,B,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function t3(d,f,$,_,I,C,B,q,ne,oe,be,ke){var Be=ve();try{T0(d,f,$,_,I,C,B,q,ne,oe,be,ke)}catch(De){if(xe(Be),De!==De+0)throw De;Se(1,0)}}function n3(d,f,$,_,I,C){var B=ve();try{return E0(d,f,$,_,I,C)}catch(q){if(xe(B),q!==q+0)throw q;Se(1,0)}}function r3(d,f,$){var _=ve();try{return A0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;return Se(1,0),0n}}function i3(d,f,$,_,I,C,B,q,ne){var oe=ve();try{y0(d,f,$,_,I,C,B,q,ne)}catch(be){if(xe(oe),be!==be+0)throw be;Se(1,0)}}function a3(d){var f=ve();try{return R0(d)}catch($){if(xe(f),$!==$+0)throw $;Se(1,0)}}function o3(d,f){var $=ve();try{return j0(d,f)}catch(_){if(xe($),_!==_+0)throw _;return Se(1,0),0n}}function s3(d){var f=ve();try{return O0(d)}catch($){if(xe(f),$!==$+0)throw $;return Se(1,0),0n}}function u3(d,f,$,_){var I=ve();try{return U0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function l3(d,f,$,_,I){var C=ve();try{return L0(d,f,$,_,I)}catch(B){if(xe(C),B!==B+0)throw B;Se(1,0)}}function c3(d,f,$,_,I,C){var B=ve();try{return F0(d,f,$,_,I,C)}catch(q){if(xe(B),q!==q+0)throw q;Se(1,0)}}function d3(d,f,$,_,I,C){var B=ve();try{return G0(d,f,$,_,I,C)}catch(q){if(xe(B),q!==q+0)throw q;Se(1,0)}}function p3(d,f,$,_,I,C,B,q){var ne=ve();try{return I0(d,f,$,_,I,C,B,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function h3(d,f,$,_,I){var C=ve();try{return W0(d,f,$,_,I)}catch(B){if(xe(C),B!==B+0)throw B;return Se(1,0),0n}}function f3(d,f,$,_){var I=ve();try{return q0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function m3(d,f,$,_){var I=ve();try{return V0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function g3(d,f,$,_,I,C,B,q,ne,oe,be,ke){var Be=ve();try{return H0(d,f,$,_,I,C,B,q,ne,oe,be,ke)}catch(De){if(xe(Be),De!==De+0)throw De;Se(1,0)}}function y3(d,f,$,_,I,C,B,q,ne,oe,be){var ke=ve();try{P0(d,f,$,_,I,C,B,q,ne,oe,be)}catch(Be){if(xe(ke),Be!==Be+0)throw Be;Se(1,0)}}function w3(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De,dn,Ss){var x3=ve();try{D0(d,f,$,_,I,C,B,q,ne,oe,be,ke,Be,De,dn,Ss)}catch(Ts){if(xe(x3),Ts!==Ts+0)throw Ts;Se(1,0)}}function _3(d,f,$){var _=ve();try{return N0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function b3(d,f,$){var _=ve();try{return z0(d,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function $3(d,f,$,_){var I=ve();try{B0(d,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function gi(){if(0<ae)pe=gi;else if(i)y==null||y(t),D();else{for(var d=J;0<d.length;)d.shift()(t);0<ae?pe=gi:(t.calledRun=!0,M||(D(),y==null||y(t)))}}return i||(Zt=await re(),gi()),t.PTR_SIZE=4,R?t:new Promise((d,f)=>{y=d,w=f})}var Ks,Ys,$y=Z(()=>{var e,t;Ks=js,Ys=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ys&&js()}),Ti,Ei,Xs,ct,Qs,$r,Zs,Js,Ii,eu,Mi,tu,ki,nu,Ci=Z(()=>{xi(),Ti=typeof location>"u"?void 0:location.origin,Ei=self.location.href>"file:"&&self.location.href<"file;",Xs=()=>{{if(Ei){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ti).href}return self.location.href}},ct=Xs(),Qs=()=>{if(ct&&!ct.startsWith("blob:"))return ct.substring(0,ct.lastIndexOf("/")+1)},$r=(e,t)=>{try{let n=t??ct;return(n?new URL(e,n):new URL(e)).origin===Ti}catch{return!1}},Zs=(e,t)=>{let n=t??ct;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Js=(e,t)=>`${t??"./"}${e}`,Ii=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},eu=async e=>(await import(e)).default,Mi=(by(),Vn(qs)).default,tu=async()=>{if(!ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(ct))return[void 0,Mi()];let e=await Ii(ct);return[e,Mi(e)]},ki=($y(),Vn(Hs)).default,nu=async(e,t,n,r)=>{let i=ki&&!(e||t);if(i)if(ct)i=$r(ct)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,ki];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??Zs(a,t),s=n&&o&&!$r(o,t),u=s?await Ii(o):o??Js(a,t);return[s?u:void 0,await eu(u)]}}}),Ai,xr,Kn,Ri,ru,iu,au,Oi,Pe,mn=Z(()=>{Ci(),xr=!1,Kn=!1,Ri=!1,ru=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},au=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Oi=async e=>{if(xr)return Promise.resolve();if(Kn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ri)throw new Error("previous call to 'initializeWebAssembly()' failed.");Kn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!au())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!iu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ru();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[p,h]=await nu(s,a,n>1,!!c||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(p){let x=Qs();x&&(b.locateFile=T=>x+T)}h(b).then(x=>{Kn=!1,xr=!0,Ai=x,y(),p&&URL.revokeObjectURL(p)},x=>{Kn=!1,Ri=!0,w(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(xr&&Ai)return Ai;throw new Error("WebAssembly is not initialized yet.")}}),bt,vr,Ne,Ni=Z(()=>{mn(),bt=(e,t)=>{let n=Pe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},vr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")vr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ne=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),ou,xy=Z(()=>{mn(),Ni(),ou=e=>{let t=Pe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=bt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&vr(e.extra,"",new WeakSet,(o,s)=>{let u=bt(o,r),l=bt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),su,uu,lu,gn,cu,du,vy=Z(()=>{mn(),Ni(),su=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},uu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},lu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},gn=(e,t,n,r)=>{let i=bt(t,r),a=bt(n,r);Pe()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},cu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",gn(e,"session.disable_quant_qdq","1",n),gn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&gn(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);gn(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=bt(a,n),u=o.length,l=0,c=0;if(u>0){l=Pe()._malloc(u*Pe().PTR_SIZE),n.push(l),c=Pe()._malloc(u*Pe().PTR_SIZE),n.push(c);for(let p=0;p<u;p++)Pe().setValue(l+p*Pe().PTR_SIZE,o[p][0],"*"),Pe().setValue(c+p*Pe().PTR_SIZE,o[p][1],"*")}await Pe()._OrtAppendExecutionProvider(e,s,l,c,u)!==0&&Ne(`Can't append execution provider: ${a}.`)}},du=async e=>{let t=Pe(),n=0,r=[],i=e||{};lu(i);try{let a=su(i.graphOptimizationLevel??"all"),o=uu(i.executionMode??"sequential"),s=typeof i.logId=="string"?bt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?bt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,c),n===0&&Ne("Can't create session options."),i.executionProviders&&await cu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);gn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=bt(p,r);t._OrtAddFreeDimensionOverride(n,m,h)!==0&&Ne(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&vr(i.extra,"",new WeakSet,(p,h)=>{gn(n,p,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),yn,qt,wn,Sr,Tr,zi,Bi,Pi,he=Z(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},qt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},wn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Sr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},zi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Bi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Di,pu=Z(()=>{xi(),Di=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),hu,fu,mu,gu,Ui,yu,Ee,Vt=Z(()=>{he(),hu=["V","I","W","E","F"],fu=(e,t)=>{console.log(`[${hu[e]},${new Date().toISOString()}]${t}`)},Ui=(e,t)=>{mu=e,gu=t},yu=(e,t)=>{let n=Tr(e),r=Tr(mu);n>=r&&fu(n,typeof t=="function"?t():t)},Ee=(...e)=>{gu&&yu(...e)}}),wu,On,W,Er,_u,bu,$u,ge=Z(()=>{wu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},On=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=wu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(c>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},W=class yi{static size(t){return yi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return yi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return yi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Er=class yr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)yr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return yr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return yr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(yr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[s]=c-a[o],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},_u=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!On.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},bu=-34028234663852886e22,$u=34028234663852886e22}),Li,xu=Z(()=>{he(),Li=(e,t)=>new(Sr(t))(e)}),Fi,Gi,Wi,vu,qi,Su,Vi,Hi,ji,Tu,Eu,Sy=Z(()=>{he(),Vt(),Fi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Gi=(e,t)=>{if(t==="int32")return e;let n=Fi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Sr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Wi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},vu=1,qi=()=>vu++,Su=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Vi=(e,t)=>{let n=Fi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Hi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Vi(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Wi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ji=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Su.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Vi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Gi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Wi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=qi();return this.tensorTrackersById.set(e,new ji(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=qi(),o=new Hi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ji(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,n)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Hi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Eu=(...e)=>new Tu(...e)}),Yn,Iu,Mu,Ty=Z(()=>{he(),mn(),xu(),Sy(),Vt(),Yn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Iu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Mu=class{constructor(e){this.tensorManager=Eu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ui(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Iu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Yn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Yn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Li(n,t)}}registerMLTensor(e,t,n,r){let i=Yn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(o){let p=Gi(new Uint8Array(l),"int64");c=new Int32Array(p.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Yn.get(yn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Ki=Z(()=>{}),Yi,Ir,Mr,ku,Cu,Xi,Qi,Au,Ru,Ey=Z(()=>{Vt(),Ki(),Yi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ir=[],Mr=e=>Math.ceil(Number(e)/16)*16,ku=e=>{for(let t=0;t<Ir.length;t++){let n=Ir[t];if(e<=n)return n}return Math.ceil(e/16)*16},Cu=1,Xi=()=>Cu++,Qi=async(e,t,n,r)=>{let i=Mr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Au=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Yi)Ir.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Mr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Mr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Xi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=ku(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Xi(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Qi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Yi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ru=(...e)=>new Au(...e)}),Ou,Re,Ge=Z(()=>{Ou=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Ou(e)}),Nn,kr,Ke,et,ce,Fe,Zi,zn,en,le,Xn,H,se,Nu,Ji,zu,Bu,we=Z(()=>{he(),ge(),Nn=64,kr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ke=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[0]},et=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[1]},ce=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:W.computeStrides(n)})}),t},Fe=e=>e%4===0?4:e%2===0?2:1,Zi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,zn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,en=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Xn=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=kr(t,i),c=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:c,storage:p,tensor:t},m=R=>typeof R=="string"?R:`${R}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let R=0;R<o-1;R++)x+=`
    let dim${R} = current / ${le(b,R,o)};
    let rest${R} = current % ${le(b,R,o)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(g.offsetToIndices=!0,o<2?R:`o2i_${e}(${R})`),E=[];if(o>=2)for(let R=o-1;R>=0;R--)E.push(`${le(b,R,o)} * (indices[${R}])`);let M=o<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,k=R=>(g.indicesToOffset=!0,o<2?R:`i2o_${e}(${R})`),S=(...R)=>o===0?"0u":`${h.indices}(${R.map(m).join(",")})`,A=(R,N)=>o<2?`${R}`:`${le(R,N,o)}`,z=(R,N,D)=>o<2?`${R}=${D};`:`${le(R,N,o)}=${D};`,X={},G=(R,N)=>{g.broadcastedIndicesToOffset=!0;let D=`${N.name}broadcastedIndicesTo${e}Offset`;if(D in X)return`${D}(${R})`;let U=[];for(let j=o-1;j>=0;j--){let re=N.indicesGet("outputIndices",j+N.rank-o);U.push(`${A(b,j)} * (${re} % ${A(w,j)})`)}return X[D]=`fn ${D}(outputIndices: ${N.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${D}(${R})`},V=(R,N)=>(()=>{if(h.storage===h.value)return`${e}[${R}]=${N};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${N}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),O=R=>(()=>{if(h.storage===h.value)return`${e}[${R}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${R}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${R}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),F=o<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${O(`i2o_${e}(indices)`)};
  }`,K=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${R}) -> ${c} {
    return get_${e}ByIndices(${S(N)});
  }`})(),Q=(...R)=>{if(R.length!==o)throw new Error(`indices length must be ${o}`);let N=R.map(m).join(",");return o===0?O("0u"):o===1?O(N[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${N})`)},ue=R=>o<2?O(R):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${R})`),L=o<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,P=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${R}, value: ${c}) {
    set_${e}ByIndices(${S(N)}, value);
  }`})();return{impl:()=>{let R=[],N=!1;return g.offsetToIndices&&(R.push(T),N=!0),g.indicesToOffset&&(R.push(M),N=!0),g.broadcastedIndicesToOffset&&(Object.values(X).forEach(D=>R.push(D)),N=!0),g.set&&(R.push(P),N=!0),g.setByIndices&&(R.push(L),N=!0),g.get&&(R.push(K),N=!0),g.getByIndices&&(R.push(F),N=!0),!a&&N&&R.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${b} = ${h.indices}(${W.computeStrides(n).join(",")});`),R.join(`
`)},type:h,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:G,indices:S,indicesGet:A,indicesSet:z,set:(...R)=>{if(R.length!==o+1)throw new Error(`indices length must be ${o}`);let N=R[o];if(typeof N!="string")throw new Error("value must be string");let D=R.slice(0,o).map(m).join(",");return o===0?V("0u",N):o===1?V(D[0],N):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${D}, ${N})`)},setByOffset:V,setByIndices:(R,N)=>o<2?V(R,N):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${N});`),get:Q,getByOffset:O,getByIndices:ue,usage:r,name:e,strides:b,shape:w,rank:o}},H=(e,t,n,r=1)=>Xn(e,t,n,"input",r),se=(e,t,n,r=1)=>Xn(e,t,n,"output",r),Nu=(e,t,n)=>Xn(e,t,n,"atomicOutput",1),Ji=(e,t,n,r=1)=>Xn(e,t,n,"internal",r),zu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Nn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Bu=(e,t)=>new zu(e,t)}),Pu,ea,Du,Uu,Lu,Fu,dt,Gu,Wu,tn=Z(()=>{he(),ge(),Ge(),we(),Pu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ea=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Du=(e,t)=>W.sortBasedOnPerm(e,ea(e.length,t)),Uu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Lu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Fu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},dt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ea(r,t),a=Du(e.dims,i),o=e.dims,s=a,u=r<2||Fu(i,e.dims),l;if(u)return l=g=>{let y=H("input",n,o,4),w=se("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:c,newPerm:p}=Lu(e.dims,i),h=W.areEqual(p,[2,3,1]),m=W.areEqual(p,[3,1,2]);if(c.length===2||h||m){o=h?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,s=[o[1],o[0]];let g=16;return l=y=>{let w=H("a",n,o.length),b=se("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...ce(o,s)]}},getShaderSource:l}}return l=g=>{let y=H("a",n,o.length),w=se("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Uu(i,r,y,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(o,s)]}},getShaderSource:l}},Gu=(e,t)=>{Pu(e.inputs,t.perm),e.compute(dt(e.inputs[0],t.perm))},Wu=e=>Re({perm:e.perm})}),qu,Vu,Hu,ju,Ku,Yu,Xu,Qu,Zu,Ju,$t,el,tl,nl,rl,il,al,ol,sl,ul,ll,Iy=Z(()=>{he(),ge(),we(),na(),tn(),qu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ju={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ku=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Yu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Xu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Qu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Zu=(e,t)=>{let n=[];if(!Qu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Ju=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=W.size(a),l=W.size(o),c=H("_A",n[0].dataType,s),p=se("output",i,a),h=64;u===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${qu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${ju[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},$t=(e,t,n,r)=>{let i=e.inputs.length===1?n:ta(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=W.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=Zu(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(dt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Ku(s.length,u.dims.length));let[c,p]=Yu(u.dims,s),h=c;i.keepDims&&(h=Xu(c,o)),e.compute(Ju(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,p),{inputs:[u]})},el=(e,t)=>{$t(e,"ReduceMeanShared",t,"mean")},tl=(e,t)=>{$t(e,"ReduceL1Shared",t,"l1")},nl=(e,t)=>{$t(e,"ReduceL2Shared",t,"l2")},rl=(e,t)=>{$t(e,"ReduceLogSumExpShared",t,"logSumExp")},il=(e,t)=>{$t(e,"ReduceMaxShared",t,"max")},al=(e,t)=>{$t(e,"ReduceMinShared",t,"min")},ol=(e,t)=>{$t(e,"ReduceProdShared",t,"prod")},sl=(e,t)=>{$t(e,"ReduceSumShared",t,"sum")},ul=(e,t)=>{$t(e,"ReduceSumSquareShared",t,"sumSquare")},ll=(e,t)=>{$t(e,"ReduceLogSumShared",t,"logSum")}}),xt,cl,Cr,ta,vt,dl,pl,hl,fl,ml,gl,yl,wl,_l,bl,St,$l,xl,vl,Sl,Tl,El,Il,Ml,kl,Cl,na=Z(()=>{he(),ge(),Ge(),we(),Iy(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},cl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Cr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,c=l.length,p=W.normalizeAxes(i,c),h=!s&&p.length===0;l.forEach((y,w)=>{h||p.indexOf(w)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=W.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=H("_A",n[0].dataType,c),x=se("output",a,m),T=r(b,x,p),v=T[2];for(let E=0,M=0;E<c;E++)h||p.indexOf(E)>=0?(o&&M++,v=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${b.indicesSet("input_indices",E,`j${E}`)}
                  ${v}
                }`):(w.push(`${b.indicesSet("input_indices",E,x.indicesGet("output_indices",M))};`),M++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${v}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(l,u)]})}},ta=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:ta(i,n);e.compute(Cr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?cl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},dl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},pl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},hl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},fl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},ml=(e,t)=>{xt(e.inputs),vt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},gl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},yl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},wl=(e,t)=>{xt(e.inputs),vt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},_l=(e,t)=>{xt(e.inputs),vt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},bl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},St=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},$l=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):el(e,t)},xl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):tl(e,t)},vl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):nl(e,t)},Sl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):rl(e,t)},Tl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):il(e,t)},El=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):al(e,t)},Il=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):ol(e,t)},Ml=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):sl(e,t)},kl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bl(e,t):ul(e,t)},Cl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):ll(e,t)}}),ra,Al,Rl,ia,My=Z(()=>{he(),Ge(),na(),ra=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Al=(e,t)=>{ra(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Rl=(e,t)=>{ra(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ia=e=>Re(e)}),Ol,Ar,Nl,zl,Bl,Qn,Pl,Dl,aa=Z(()=>{he(),ge(),Ki(),we(),Ol=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=g+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ar=(e,t,n)=>t&&e?`
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
    `,Nl=(e,t,n,r,i,a,o,s)=>{let u=Fe(o?1:a),l=64,c=a/u;c<l&&(l=32);let p=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:p}],m=Ke(e.dataType,u),g=et(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let x=se("x",e.dataType,e.dims,u),T=[x],v=o?H("seq_lens",o.dataType,o.dims):void 0;v&&T.push(v);let E=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;E&&T.push(E);let M=et(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...T)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ar(v,E,!1)}
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
        x[offset + i] = ${x.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},zl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,l],p=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=p?[a.batchSize,h,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=Fe(a.headSize),b=a.headSize/w,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],E=p&&r&&W.size(r.dims)>0,M=["type","type"];E&&M.push("type"),i&&M.push("type"),s&&M.push("type"),u&&M.push("type");let k=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let S=A=>{let z=H("q",t.dataType,t.dims,w),X=H("key",n.dataType,n.dims,w),G=[z,X];if(E){let L=H("past_key",r.dataType,r.dims,w);G.push(L)}i&&G.push(H("attention_bias",i.dataType,i.dims));let V=s?H("seq_lens",s.dataType,s.dims):void 0;V&&G.push(V);let O=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;O&&G.push(O);let F=se("output",t.dataType,c),K=[F];p&&K.push(se("present_key",t.dataType,m,w));let Q=et(1,w),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${z.type.storage}, ${x*x}>;
  ${A.registerUniforms(ue).declareVariables(...G,...K)}
  ${A.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ar(V,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
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
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${F.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:k,dispatchGroup:T,programUniforms:v}),getShaderSource:S}},Bl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,p=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,h,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=p&&r&&W.size(r.dims)>0,T=["type","type"];x&&T.push("type"),o&&T.push("type"),s&&T.push("type");let v=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=M=>{let k=H("probs",t.dataType,t.dims),S=H("v",n.dataType,n.dims),A=[k,S];x&&A.push(H("past_value",r.dataType,r.dims));let z=o?H("seq_lens",o.dataType,o.dims):void 0;o&&A.push(z);let X=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(X);let G=[se("output",t.dataType,g)];p&&G.push(se("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${M.registerUniforms(V).declareVariables(...A,...G)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ar(z,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:E}},Qn=(e,t,n,r,i,a,o,s,u,l,c=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=h>1?o:void 0,g=h>1?s:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&W.size(u.dims)>0?u:void 0,x=[t,n];m&&W.size(m.dims)>0&&x.push(m),b&&x.push(b),c&&x.push(c),p&&x.push(p);let T=e.compute(zl(h,t,n,m,b,l,y,c,p),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Nl(T,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,p),{inputs:c&&p?[T,c,p]:[T],outputs:[]});let v=[T,r];g&&W.size(g.dims)>0&&v.push(g),c&&v.push(c),p&&v.push(p),e.compute(Bl(h,T,r,g,l,y,c,p),{inputs:v,outputs:h>1?[0,2]:[0]})},Pl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let h=se("output_q",u[0].dataType,n),m=se("output_k",u[0].dataType,n),g=se("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),b=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${p.registerUniforms(T).declareVariables(y,w,b,h,m,g)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Dl=(e,t)=>{let n=Ol(e.inputs,t),[r,i,a]=Pl(e,n);return Qn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Ul,Ll,Fl,Gl,ky=Z(()=>{mt(),he(),ge(),Ge(),we(),Ul=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ll=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Fe(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=W.size(a)/o,l=r,c=l?a.length:a,p=H("x",e[0].dataType,e[0].dims,o),h=H("scale",e[1].dataType,e[1].dims,s),m=H("bias",e[2].dataType,e[2].dims,s),g=H("inputMean",e[3].dataType,e[3].dims,s),y=H("inputVar",e[4].dataType,e[4].dims,s),w=se("y",e[0].dataType,c,o),b=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<h.rank;v++)T+=`cIndices[${v}] = outputIndices[${v}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,m,g,y,w)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ce(a)]:[{type:12,data:u}]})}},Fl=e=>Re(e),Gl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Fl({...t,outputCount:r});if(ze.webgpu.validateInputContent&&Ul(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ll(n,i))}}),Wl,ql,Vl,Cy=Z(()=>{ge(),we(),Wl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ql=e=>{let t=e[0].dims,n=e[0].dims[2],r=W.size(t)/4,i=e[0].dataType,a=H("input",i,t,4),o=H("bias",i,[n],4),s=H("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Vl=e=>{Wl(e.inputs),e.compute(ql(e.inputs))}}),Hl,Ce,jl,Kl,Yl,Xl,Ql,Zl,Jl,ec,tc,nc,rc,ic,ac,oc,Zn,sc,Rr,uc,lc,cc,dc,pc,hc,fc,mc,gc,yc,wc,_c,bc,$c,xc,vc,oa,Sc,sa,ua,Tc,Ec,Ic,Mc,kc,Cc,la=Z(()=>{he(),ge(),Ge(),we(),Hl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[s],4),c=se("outputData",r,[s],4),p=[{name:"vec_size",type:"u32"}];return o&&p.push(...o),`
      ${e.registerUniforms(p).declareVariables(l,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Ce=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Hl(l,W.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(W.size(l[0].dims)/64/4)},programUniforms:u})}},jl=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Kl=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},Yl=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},Xl=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},Ql=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},Zl=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},Jl=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},ec=e=>Re(e),tc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},nc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},rc=(e,t)=>{let n=t||nc(e.inputs),r=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},ic=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},ac=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},oc=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},Zn=e=>Re(e),sc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,uc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Rr(t)))},lc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},cc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},dc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Rr(t)))},pc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},hc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},fc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},mc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},gc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},yc=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},wc=e=>Re(e),_c=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},bc=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},$c=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},xc=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},vc=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},oa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Sc=e=>{e.compute(Ce(e.inputs[0],"Tanh",oa))},sa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${oa("v")};
}
`,ua=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Tc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",ua,sa(t),void 0,e.inputs[0].dataType))},Ec=(e,t)=>{let n=et(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ic=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},Mc=(e,t)=>`
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
`,kc=e=>`quick_gelu_impl(${e})`,Cc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",kc,Mc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ac,Rc,Oc,Ay=Z(()=>{ge(),we(),la(),Ac=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Rc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=W.size(t)/4,o=Ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
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
  }`}},Oc=e=>{Ac(e.inputs),e.compute(Rc(e.inputs))}}),Nc,zc,Tt,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,Ry=Z(()=>{he(),ge(),we(),Nc=(e,t,n,r,i,a,o,s,u,l,c,p)=>{let h,m;typeof s=="string"?h=m=(x,T)=>`${s}((${x}),(${T}))`:typeof s=="function"?h=m=s:(h=s.scalar,m=s.vector);let g=se("outputData",c,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),b;if(i)if(a){let x=W.size(t)===1,T=W.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?b=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,v,E="")=>{let M=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${g.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${T}[${v}] = ${E}(${h(M,k)});
          `};c===9?b=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,g)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},zc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!W.areEqual(s,u),c=s,p=W.size(s),h=!1,m=!1,g=[l];if(l){let y=On.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),p=W.size(c);let w=W.size(s)===1,b=W.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(w),g.push(b),g.push(x),g.push(T);let v=1;for(let E=1;E<c.length;E++){let M=s[s.length-E],k=u[u.length-E];if(M===k)v*=M;else break}v%4===0?(m=!0,h=!0):(w||b||x||T)&&(h=!0)}else h=!0;return g.push(h),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Nc(y,s,u,c,h,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:c,dataType:o}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(c)/4)},...ce(s,u,c)]})}},Tt=(e,t,n,r,i,a)=>{e.compute(zc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Bc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},Pc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},Dc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Uc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Lc=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Fc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},Gc=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Wc=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},qc=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Vc=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Hc,jc,Kc,Yc,Xc,Qc,Oy=Z(()=>{he(),ge(),Ge(),we(),Hc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},jc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Kc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Yc=(e,t,n,r)=>{let i=W.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=H(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)c.push(...ce(e[y].dims));c.push(...ce(n));let p=se("output",r,n.length),h=p.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,p)})()}

  ${jc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Kc(o,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:g}},Xc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=W.normalizeAxis(t.axis,r.length);Hc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>W.size(s.dims)>0);e.compute(Yc(o,i,a,n[0].dataType),{inputs:o})},Qc=e=>Re({axis:e.axis})}),_n,bn,$n,ca,xn=Z(()=>{he(),ge(),_n=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},bn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},$n=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ca=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[bu,$u];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Qe,Zc,da=Z(()=>{Qe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jc,Ny=Z(()=>{Jc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Jn,pa,ha=Z(()=>{he(),ge(),we(),xn(),Jn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${le(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,le(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},pa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],c=o[o.length-1],p=Fe(l),h=Fe(c),m=Fe(u),g=W.size(n)/p/m,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[W.size(w),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:c}];bn(t,x),x.push(...ce(w,o,s)),y&&x.push(...ce(e[2].dims)),x.push(...ce(b));let T=v=>{let E=Ji("batch_dims",e[0].dataType,w.length),M=H("a",e[0].dataType,o.length,h),k=H("b",e[1].dataType,s.length,p),S=se("output",e[0].dataType,b.length,p),A=Ke(S.type.tensor),z=_n(t,S.type.value,A),X=[M,k],G="";if(y){let F=i?p:1;X.push(H("bias",e[2].dataType,e[2].dims.length,F)),G=`${i?`value += bias[col / ${F}];`:`value += ${S.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];$n(t,V);let O=()=>{let F=`var a_data: ${M.type.value};`;for(let K=0;K<h;K++)F+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<m;K++){F+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let Q=0;Q<h;Q++)F+=`
            values[${K}] = fma(${k.type.value}(a_data${h===1?"":`[${Q}]`}), b_data${Q}, values[${K}]);
`}return F};return`
  ${v.registerUniforms(V).registerInternalVariables(E).declareVariables(...X,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
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
    var values: array<${S.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${O()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${G}
      ${z}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:T}}}),ed,td,fa,ma,nd,ga,rd,Or,ya=Z(()=>{he(),ge(),we(),xn(),ha(),da(),ed=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,td=(e,t)=>e?`
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
        }`,fa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:a,p=i?a:u,h=c/t[0],m=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${c/h}>, ${p}>;
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
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ed(i,r)}
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
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${td(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ma=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,nd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ga=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],p=i?l:a,h=i?a:l;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],g=p/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${ma(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
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
      ${ma(i,r)}
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
      ${nd(i)}
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
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${a}>;
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
`},rd=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ke(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Qe(e,l)} {
      var value = ${Qe(e,l)}(0.0);
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

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Qe(e,l)} {
      var value = ${Qe(e,l)}(0.0);
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

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Qe(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Qe(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Or=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),p=W.size(c),h=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,w=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(g/b[0]/w[0]),Math.ceil(h/b[1]/w[1]),Math.ceil(p/b[2]/w[2])],T=y?4:1,v=[...u,h,m/T],E=v.length,M=[...l,m,g/T],k=M.length,S=[p,h,g/T],A=[{type:6,data:h},{type:6,data:g},{type:6,data:m}];bn(t,A),A.push(...ce(c,v,M));let z=["rank","rank"],X=e.length>2;X&&(A.push(...ce(e[2].dims)),z.push("rank")),A.push(...ce(S));let G=V=>{let O=c.length,F=Ji("batchDims",e[0].dataType,O,1),K=Ke(e[0].dataType),Q=H("a",e[0].dataType,E,T),ue=H("b",e[1].dataType,k,T),L=se("result",e[0].dataType,S.length,T),P=[Q,ue];if(X){let j=i?T:1;P.push(H("bias",e[2].dataType,e[2].dims.length,j))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];$n(t,R);let N=Ke(L.type.tensor),D=_n(t,L.type.value,N),U=rd(T,X,D,[F,Q,ue,L],i);return`
  ${V.registerUniforms(R).registerInternalVariables(F).declareVariables(...P,L)}
  ${U}
  ${y?fa(w,b,K,F):ga(w,b,K,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:G}}}),id,ad,zy=Z(()=>{he(),Vt(),we(),xn(),da(),Ny(),ya(),id=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let c=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},h=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",b=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${Qe(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(o)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Qe(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Qe(o,l)}(0.0);`,v=e?r&&n?p(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(s)}
    }
    return ${Qe(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(s)}
    }
    return ${Qe(s,l)}(0.0);`,E=Qe(u,l),M=Qe(e?o:s,l),k=Qe(e?s:o,l),S=_n(a,E,l);return`
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
      ${m}
      ${Zc(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ad=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],p=n[0],h=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&g%4===0,w=l?g:h*m,b=l?h*m:g,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/T[0]),Math.ceil(b/x[1]/T[1]),Math.ceil(p/x[2]/T[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let E=y?l&&c%4!==0?3:4:1,M=x[1]*T[1],k=x[0]*T[0],S=Math.max(x[0]*E,x[1]),A=r%M===0,z=i%k===0,X=a%S===0,G=y?[E,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];bn(t,V),V.push(...ce(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(V.push(...ce(e[2].dims)),O.push("rank")),V.push(...ce(n));let F=K=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];$n(t,Q);let ue=y?4:1,L=Ke(e[0].dataType),P=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),N=H("w",e[1].dataType,e[1].dims.length,ue),D=[R,N],U=se("result",e[0].dataType,n.length,ue);if(o){let j=H("bias",e[2].dataType,e[2].dims.length,ue);D.push(j),P+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Jc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(Q).declareVariables(...D,U)}
        ${P}
        ${id(l,A,z,X,o,t,G[0],G[1],G[2],L)}
        ${y?fa(T,x,L,void 0,!l,S):ga(T,x,L,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${A};${z};${X};${M};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:V}),getShaderSource:F}}}),od,wa,er,sd,_a,ud,ld,cd,By=Z(()=>{he(),Vt(),ge(),we(),xn(),da(),od=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},wa=e=>typeof e=="number"?[e,e,e]:e,er=(e,t)=>t<=1?e:e+(e-1)*(t-1),sd=(e,t,n,r=1)=>{let i=er(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},_a=(e,t,n,r,i)=>{i==null&&(i=sd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},ud=(e,t,n,r,i,a,o,s,u,l)=>{let c,p,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=_a([t,n,r,1],[s,u,l],1,[i,a,o],e);p=g[0],h=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=_a([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);p=g[0],h=g[1],m=g[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(n/a),m=Math.ceil(r/o);let g=(p-1)*i+s-t,y=(h-1)*a+u-n,w=(m-1)*o+l-r,b=Math.floor(g/2),x=g-b,T=Math.floor(y/2),v=y-T,E=Math.floor(w/2),M=w-E;c={top:T,bottom:v,left:E,right:M,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:h,outWidth:m}},ld=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,c,p;if(o==="channelsLast")[s,u,l,c,p]=e;else if(o==="channelsFirst")[s,p,u,l,c]=e;else throw new Error(`Unknown dataFormat ${o}`);let[h,,m,g,y]=t,[w,b,x]=wa(n),[T,v,E]=wa(r),M=er(m,T),k=er(g,v),S=er(y,E),{padInfo:A,outDepth:z,outHeight:X,outWidth:G}=ud(i,u,l,c,w,b,x,M,k,S),V=a?h*p:h,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,V,z,X,G]:o==="channelsLast"&&(O=[s,z,X,G,V]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:c,inChannels:p,outDepth:z,outHeight:X,outWidth:G,outChannels:V,padInfo:A,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:T,dilationHeight:v,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},cd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(od(u.x.map(w=>n[w]))/s[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,p=W.size(n),h=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];bn(t,h),h.push(...ce(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(h.push(...ce(e[2].dims)),m.push("rank")),h.push(...ce(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];$n(t,b);let x=1,T=Ke(e[0].dataType),v=H("x",e[0].dataType,e[0].dims.length,c),E=H("W",e[1].dataType,e[1].dims.length,x),M=[v,E],k=se("result",e[0].dataType,n.length,x),S="";if(g){let X=H("bias",e[2].dataType,e[2].dims.length,x);M.push(X),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?le("coords",4,5):le("coords",1,5)}];
        }`}let A=Qe(c,T),z=_n(t,A,T);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...M,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,v.rank)};
              let d2 = ${o?le("coords",v.rank-1,v.rank):le("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${o?le("coords",1,v.rank):le("coords",2,v.rank)},
              ${o?le("coords",2,v.rank):le("coords",3,v.rank)},
              ${o?le("coords",3,v.rank):le("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?le("uniforms.x_shape",1,v.rank):le("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${o?le("uniforms.x_shape",2,v.rank):le("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${o?le("uniforms.x_shape",3,v.rank):le("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${o?le("uniforms.x_shape",4,v.rank):le("uniforms.x_shape",1,v.rank)};
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
              ${z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${c};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),dd,pd,Py=Z(()=>{he(),ge(),we(),xn(),dd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,p=u&&c>=4?Fe(l):1,h=W.size(n)/p,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];bn(t,m),m.push(...ce(o,[s[0],s[1],s[2],s[3]/p]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ce([n[0],n[1],n[2],n[3]/p]));let y=w=>{let b=se("output",e[0].dataType,n.length,p),x=Ke(b.type.tensor),T=_n(t,b.type.value,x),v=H("x",e[0].dataType,o.length),E=H("w",e[1].dataType,s.length,p),M=[v,E];i&&M.push(H("b",e[2].dataType,e[2].dims,p));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];$n(t,k);let S=u?`
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
  ${w.registerUniforms(k).declareVariables(...M,b)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${S}
    ${a}
    ${T}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},pd=(e,t,n,r)=>{let i=e.length>2,a=Fe(n[3]),o=Fe(n[2]),s=W.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];bn(t,p),p.push(...ce(u,l,c));let h=(o-1)*t.strides[1]+l[1],m=g=>{let y=se("output",e[0].dataType,c.length,a),w=Ke(y.type.tensor),b=_n(t,y.type.value,w),x=H("x",e[0].dataType,u.length,a),T=H("w",e[1].dataType,l.length,a),v=[x,T];i&&v.push(H("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return $n(t,M),`
  ${g.registerUniforms(M).declareVariables(...v,y)}
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
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:m}}}),hd,Nr,fd,zr,ba,$a,md,gd,xa,Dy=Z(()=>{ge(),zy(),By(),ya(),Py(),xn(),ha(),tn(),hd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],c=t.slice(2).map((h,m)=>h+(h-1)*(n[m]-1)),p=s.map((h,m)=>h+r[m]+r[m+u]).map((h,m)=>Math.floor((h-c[m]+i[m])/i[m]));return p.splice(0,0,o),p.splice(a?3:1,0,l),p},Nr=[2,3,1,0],fd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},zr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Er.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ba=e=>{let t=ca(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$a=(e,t,n,r)=>{let i=n.format==="NHWC",a=hd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),M.push(k)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(pd(M,n,a,r),{inputs:M}):e.compute(dd(M,n,a,r),{inputs:M});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&c===s&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],k,S,A,z=[];if(i){let V=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let O=s*u*l;k=t[0].reshape([1,M,O]),S=V.reshape([1,O,g]),A=[1,M,g]}else k=t[0].reshape([M,s*u,l]),S=V.reshape([1,l,g]),A=[M,h*m,g];z.push(k),z.push(S)}else k=t[0].reshape([M,l,s*u]),S=t[1].reshape([1,g,l]),A=[M,g,h*m],z.push(S),z.push(k);o&&z.push(t[2]);let X=A[2],G=z[0].dims[z[0].dims.length-1];X<8&&G<8?e.compute(pa(z,n,a,A,i,r),{inputs:z}):e.compute(Or(z,n,a,A,i,r),{inputs:z});return}let w=!0,b=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let T=i?h*m:g,v=i?g:h*m,E=c*p*l;e.compute(ad(x,n,a,T,v,E,o,w,r),{inputs:x})},md=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=zr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);$a(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},gd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=zr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=ld(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(cd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},xa=(e,t)=>{if(fd(e.inputs,t),e.inputs[0].dims.length===3)md(e,t);else if(e.inputs[0].dims.length===5)gd(e,e.inputs,t);else{let n=zr(t,e.inputs);$a(e,e.inputs,n)}}}),yd,Uy=Z(()=>{he(),Vt(),ge(),we(),yd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],c=a?Fe(u):1,p=a&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/c)*c,m=u-h,g=a?Fe(l):1,y=a?l===1?c:g:1,w=W.size(i)/g,b=[Math.ceil(w/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:T},{type:12,data:v},{type:12,data:E},{type:12,data:M},{type:6,data:k},{type:12,data:h},{type:12,data:u},{type:12,data:l},...ce(e[0].dims,e[1].dims)];r&&(S.push(...ce(e[2].dims)),x.push("rank")),S.push(...ce(i));let A=z=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Ke(e[0].dataType),V=a?1:2,O=a?2:3,F=a?3:1,K=H("W",e[1].dataType,e[1].dims.length,y),Q=H("Dy",e[0].dataType,e[0].dims.length,c),ue=[Q,K];r&&ue.push(H("bias",e[2].dataType,[i[F]].length,g));let L=se("result",e[0].dataType,i.length,g),P=()=>{let D="";if(p)c===4?D+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?D+=`
          dotProd = dotProd + dot(vec4<${G}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(D+=`
          dotProd = dotProd + dot(vec4<${G}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,c===1)D+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<c;U++)D+=`
            let wValue${U} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return D},R=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let D="";if(c===1){D+="dotProd = dotProd";for(let U=0;U<m;U++)D+=`
            + ${Q.getByOffset(`x_offset + ${U}`)} * ${K.getByOffset(`w_offset + ${U}`)}`;D+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);D+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},N=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",F)};
            let r = ${L.indicesGet("outputIndices",V)};
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
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${P()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(X).declareVariables(...ue,L)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${N}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${g}${p}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),wd,_d,bd,va,$d,xd,Sa,vd,Sd,Ly=Z(()=>{Uy(),xn(),tn(),wd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,_d=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},bd=(e,t,n,r,i,a,o,s,u,l)=>{let c=e.length-2,p=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let h=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-c-(s?1:0);g<c;++g,++y){let w=e[y],b=p?w*o[g]:l[g],x=wd(w,o[g],a[g],t[y],n[g],b);_d(x,r,a,g,g+c),p&&l.push(o[g]*(w-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+c])}l.splice(0,0,h),l.splice(s?3:1,0,m)},va=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}bd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),c},$d=e=>{let t=ca(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:c,outputShape:p,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},xd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Sa=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(dt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(yd(a,n,r),{inputs:a})},vd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=va({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Sa(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Sd=(e,t)=>{if(xd(e.inputs,t),e.inputs[0].dims.length===3)vd(e,t);else{let n=va(t,e.inputs);Sa(e,e.inputs,n)}}}),Td,Ed,Id,Fy=Z(()=>{he(),ge(),Ge(),we(),Td=(e,t,n,r)=>{let i=W.size(t),a=t.length,o=H("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=W.normalizeAxis(u,a),c=p=>{let h=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=le("uniforms.input_shape","uniforms.axis",a),g=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?m:h+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ce(t,t)]}),getShaderSource:c}},Ed=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Td(r,n,i,t),{inputs:[0]})},Id=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Md,kd,Cd,Ad,Rd,Gy=Z(()=>{he(),ge(),Ge(),we(),Md=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},kd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Cd=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=c?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=c?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(o),h=p.dims.length,m=e.dataType,g=H("a",m,h),y=se("output",m,h),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(g,y)}

  ${kd(s,h,g,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=W.size(x),v=p.dims,E=W.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ce(v,E)]}},getShaderSource:w}},Ad=(e,t)=>{Md(e.inputs),e.compute(Cd(e.inputs[0],t))},Rd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Br,tr,Ta,Od,Nd,zd,Bd,Ea,Pd,Dd,Ud,Wy=Z(()=>{he(),ge(),Ge(),we(),Br="[a-zA-Z]|\\.\\.\\.",tr="("+Br+")+",Ta="^"+tr+"$",Od="("+tr+",)*"+tr,Nd="^"+Od+"$",zd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Bd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Nd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ta)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(tr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Br,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ta))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Br,"g")),l=new zd(r);return u==null||u.forEach((c,p)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+h),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,p+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[s++],r)}),l}},Ea=e=>e+"_max",Pd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>H(`input${c}`,t,l)),a=W.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],p="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",g=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,E)=>{var M;if(n.rhs.symbolToIndices.has(E)){let k=(M=n.rhs.symbolToIndices.get(E))==null?void 0:M[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let z=S.symbolToIndices.get(E);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(X=>{c.push(`${i[A].indicesSet(`input${A}Indices`,X,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(E);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(z=>{g.push(`${i[S].indicesSet(`input${S}Indices`,z,`${E}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ea(E)}; ${E}++) {`),w.push("}")});let T=x?[...c,`let sum = ${i.map((v,E)=>v.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...y,...g,p,...b,m,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ea(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(p=>n.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=n.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let c=e.map((p,h)=>[...ce(p)]).reduce((p,h)=>p.concat(h),l);return c.push(...ce(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},Dd=(e,t)=>{let n=new Bd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Pd(i,e.inputs[0].dataType,n,r))},Ud=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Ld,Ia,Fd,Gd,Wd,qy=Z(()=>{he(),ge(),we(),Ld=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ia=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Fd=(e,t)=>e.length>t.length?Ia(e,t):Ia(t,e),Gd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Fd(t,n),i=e[0].dataType,a=i===9||W.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(W.size(r)/s),l=p=>{let h=H("input",i,t.length,o),m=se("output",i,r.length,s),g;if(i===9){let y=(w,b,x="")=>`
          let outputIndices${b} = ${m.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${x}(${h.getByOffset(`index${b}`)}[component${b}]);
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
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${h.getByOffset(`inputOffset / ${o}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,m)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},c=[{type:12,data:u},...ce(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Wd=e=>{Ld(e.inputs),e.compute(Gd(e.inputs),{inputs:[0]})}}),qd,Vd,Vy=Z(()=>{he(),ge(),we(),la(),qd=e=>{let t=e[0].dataType,n=W.size(e[0].dims),r=W.size(e[1].dims),i=r%4===0,a=o=>{let s=H("x",t,[1],4),u=H("bias",t,[1],4),l=se("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(c).declareVariables(s,u,l)}

    ${sa(et(t))}

    ${o.mainStart(Nn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ua("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Nn/4)}})}},Vd=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?Tc(e):e.compute(qd(e.inputs))}}),Hd,jd,Kd,Yd,Hy=Z(()=>{he(),ge(),Ge(),we(),Hd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},jd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(W.size(o)/u),c=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...ce(e[0].dims,e[1].dims,o)],p=h=>{let m=H("data",e[0].dataType,e[0].dims.length,u),g=H("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),w=x=>{let T=r.length,v=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let E=0;E<T;E++)v+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let E=0,M=0;E<i;E++)E===a?(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return v},b;if(e[0].dataType===9){let x=(T,v,E="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${m.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${T}[${v}] = ${E}(${m.getByOffset(`index${v}`)}[component${v}]);
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
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:p}},Kd=e=>Re({axis:e.axis}),Yd=(e,t)=>{let n=e.inputs;Hd(n),e.compute(jd(e.inputs,t))}}),Xd,Qd,Zd,jy=Z(()=>{he(),ge(),we(),Xd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],c=[a];l.push(...ce(t.dims,c));let p=h=>{let m=H("indices_data",t.dataType,t.dims.length),g=se("input_slice_offsets_data",12,1,1),y=[m,g],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Qd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=W.sizeToDimension(a,a.length-1),u=W.sizeFromDimension(r,t.batchDims+o),l=W.sizeToDimension(r,t.batchDims),c=W.sizeFromDimension(r,t.batchDims),p=s/l,h=new Array(o),m=u;for(let v=0;v<o;++v)h[o-1-v]=m,m*=r[t.batchDims+o-1-v];let g=Xd(e,n[1],h,t.batchDims,r,s,p,c,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=W.size(w),x=[{type:12,data:b},{type:12,data:u},...ce(n[0].dims,g.dims,w)],T=v=>{let E=H("data",n[0].dataType,n[0].dims.length),M=H("slice_offsets",12,g.dims.length),k=se("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],g]})},Zd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Jd,ep,tp,np,Ky=Z(()=>{he(),ge(),Ge(),we(),Jd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ep=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.gatherAxis,i),o=W.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=W.size(s),l=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...ce(...e.map((m,g)=>m.dims),s)],h=m=>{let g=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),b=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),T=[g,y,w];b&&T.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(v).declareVariables(...T,x)}
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
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${et(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},tp=(e,t)=>{let n=e.inputs;Jd(n,t),e.compute(ep(e.inputs,t))},np=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),rp,ip,ap,op,Yy=Z(()=>{he(),ge(),Ge(),we(),rp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ip=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=W.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),c=W.size(l),p=H("input",r,i),h=H("indicesInput",o,a.length),m=se("output",r,l.length),g=[{type:12,data:c},{type:6,data:u},{type:12,data:s}];return g.push(...ce(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},ap=e=>Re({axis:e.axis}),op=(e,t)=>{let n=e.inputs;rp(n),e.compute(ip(e.inputs,t))}}),sp,up,lp,cp,Xy=Z(()=>{he(),ge(),we(),sp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},up=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=_u.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),c=Math.ceil(i/u),p=!0,h=W.size(s),m=[{type:12,data:p?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ce(e[2].dims)),g.push("rank")),m.push(...ce(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",v=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),M=v.type.value,k=null,S=[v,E];e.length===3&&(k=H("c",e[2].dataType,e[2].dims.length),S.push(k));let A=se("output",e[0].dataType,s.length);S.push(A);let z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(z).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${M}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=H("a",e[0].dataType,e[0].dims),T=H("b",e[1].dataType,e[1].dims),v=null,E=[x,T];e.length===3&&(v=H("c",e[2].dataType,e[2].dims.length),E.push(v));let M=se("output",e[0].dataType,s.length);E.push(M);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
  ${b.registerUniforms(k).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
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
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},lp=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},cp=(e,t)=>{sp(e.inputs),e.compute(up(e.inputs,t))}}),Ot,Ht,vn,Sn,dp,pp,hp,fp,mp,gp,yp,wp,_p,bp,Qy=Z(()=>{he(),ge(),Ge(),we(),[Ot,Ht,vn,Sn]=[0,1,2,3],dp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},pp=`
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
`,hp=e=>`
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
`,fp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,mp=e=>`
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
`,gp=(e,t,n)=>`
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
`,yp=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,wp=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ot,Ht,vn,Sn]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=W.size(a),l=[{type:12,data:u},...ce(e[0].dims,r,a)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${pp}
  ${hp(s)}
  ${fp(t)}
  ${mp(t)}
  ${gp(n,s,t)}

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

      ${yp(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=W.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:c}},_p=(e,t)=>{dp(e.inputs),e.compute(wp(e.inputs,t))},bp=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),nt,$p,xp,Ma,vp,nr,Sp,Tp=Z(()=>{he(),ge(),Ge(),Ki(),aa(),we(),tn(),nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,$p=(e,t)=>{let n=e[0],r=nt(e,1),i=nt(e,2),a=nt(e,3),o=nt(e,4),s=nt(e,5),u=nt(e,6),l=nt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],p=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,g=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&W.size(u.dims)&&W.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&W.size(u.dims)||l&&W.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&W.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&W.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,T=0;if(o&&W.size(o.dims)>0){T=8;let k=o.dims;throw k.length===1?k[0]===c?T=1:k[0]===3*c+2&&(T=3):k.length===2&&k[0]===c&&k[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,E=h;if(i&&W.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],v=!0}}let M=!1;if(o&&W.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&W.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==p||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:v,qkvFormat:b}},xp=e=>Re({...e}),Ma=Re({perm:[0,2,1,3]}),vp=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=W.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],c=p=>{let h=se("qkv_with_bias",t.dataType,s),m=H("qkv",t.dataType,s),g=H("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(m,g,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},nr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&W.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=vp(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(dt(u,Ma.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(dt(u,Ma.perm),{inputs:[u],outputs:[-1]})[0]},Sp=(e,t)=>{let n=$p(e.inputs,t),r=e.inputs[0],i=nt(e.inputs,1),a=nt(e.inputs,2),o=nt(e.inputs,3),s=nt(e.inputs,4),u=nt(e.inputs,5),l=nt(e.inputs,6),c=nt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(p)return Qn(e,h,i,a,s,void 0,l,c,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Qn(e,h,m,g,s,void 0,l,c,u,n)}}),Ep,Ip,Mp,kp,ka,Cp,Ap,Rp=Z(()=>{he(),ge(),Ge(),we(),Ep=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ip=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Mp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,kp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},ka=(e,t)=>{let n=e[0].dims,r=W.size(n),i=e[0].dataType,a=W.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=H("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],p=0,h=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){p+=t.splitSizes[g],u[g]=p;let y=n.slice();y[a]=t.splitSizes[g],c.push(y),o[g]=se(`output${g}`,i,y.length),l.push({dims:c[g],dataType:e[0].dataType})}h.push({type:12,data:u},...ce(n,...c));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Mp(u.length)}
  ${kp(o)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Cp=(e,t)=>{Ep(e.inputs);let n=e.inputs.length===1?t:Ip(e.inputs,t);e.compute(ka(e.inputs,n),{inputs:[0]})},Ap=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Op,Pr,Np,zp=Z(()=>{he(),ge(),Ge(),we(),Op=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!W.areEqual(r.dims,[])&&!W.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!W.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],p=W.sizeFromDimension(n.dims,1)/l,h=s===0?i.dims[1]*2:p/o;if(s>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Pr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=W.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,c=e[2].dims[1],p=i===0?c*2:l/r,h=new Array(o,u,l/p,p-c),m=W.computeStrides(h),g=[{type:1,data:a},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,p,u*p,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),T=H("cos_cache",e[2].dataType,e[2].dims.length),v=H("sin_cache",e[3].dataType,e[3].dims.length),E=se("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(b,x,T,v,E)}

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
            let re = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(h)/Nn)},programUniforms:g})}},Np=(e,t)=>{Op(e.inputs,t),e.compute(Pr(e.inputs,t))}}),Bp,Pp,Ca,Dp,Up,Zy=Z(()=>{Ge(),he(),aa(),Tp(),Rp(),tn(),zp(),we(),Bp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=l,h=0,m=!r||r.dims.length===0,g=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=g*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,T=!1,v=t.kvNumHeads?g*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=E.dims.reduce((k,S)=>k*S,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let k=0;k<E.dims.length;k++)if(E.dims[k]!==1&&E.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${E.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:g,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:b}},Pp=Re({perm:[0,2,1,3]}),Ca=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(dt(r,Pp.perm),{inputs:[r],outputs:[-1]})[0]),r},Dp=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=c=>{let p=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),m=se("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(p,h,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Up=(e,t)=>{var v;let n=Bp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[h,m,g]=!i&&!a?e.compute(ka([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let E=e.compute(Dp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],k=e.inputs[8],S=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[h,E,M,k],z=[-1];y=e.compute(Pr(A,S),{inputs:A,outputs:z})[0],A.splice(0,1,m);let X=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Pr(A,X),{inputs:A,outputs:z})[0]}let b=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=Ca(e,t.doRotary?w:m,n),T=Ca(e,g,n);Qn(e,b,x,T,void 0,void 0,o,s,void 0,n,u,l)}}),Aa,Lp,Fp,Gp,Jy=Z(()=>{he(),ge(),tn(),we(),Aa=(e,t,n,r,i,a,o,s)=>{let u=Fe(a),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,p=i*o,h=64;p===1&&(h=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],w=[];w.push(...ce(m,g));let b=x=>{let T=H("x",t.dataType,3,u),v=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),M=se("output",1,3,2),k=[T,v,E,M];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
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
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:p},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Lp=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=W.sizeFromDimension(r,a),l=Fe(u),c=W.size(i)/l,p=Aa(e,t[0],t[1],t[2],o,u,s,n.epsilon),h=[o,s,u/l],m=[o,s],g=["type","none"],y=w=>{let b=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,m.length,2),T=se("output",t[0].dataType,h.length,l),v=[b,x,T];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ce(h,m,h)]}),getShaderSource:y},{inputs:[t[0],p]})},Fp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=W.sizeFromDimension(r,1)/o,u=Fe(o),l=W.size(i)/u,c=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],p=["type","type"],h=!1,m=[0,r.length-1];for(let b=0;b<r.length-2;b++)h=h||r[b+1]!==1,m.push(b+1);h=h&&r[r.length-1]!==1;let g=h?e.compute(dt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[m[x]])),y=Aa(e,g,t[1],t[2],a,s,o,n.epsilon),w=b=>{let x=Ke(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),M=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},Gp=(e,t)=>{t.format==="NHWC"?Fp(e,e.inputs,t):Lp(e,e.inputs,t)}}),Wp,qp,Vp,ew=Z(()=>{he(),ge(),we(),Wp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},qp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=W.normalizeAxis(t.axis,i.length),l=W.sizeToDimension(i,u),c=W.sizeFromDimension(i,u),p=W.size(a.dims),h=o?W.size(o.dims):0;if(p!==c||o&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let m=[];for(let E=0;E<i.length;++E)E<u?m.push(i[E]):m.push(1);let g=Fe(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,T=E=>{let M=Ke(e[0].dataType),k=[H("x",e[0].dataType,e[0].dims,g),H("scale",a.dataType,a.dims,g)];o&&k.push(H("bias",o.dataType,o.dims,g)),k.push(se("output",e[0].dataType,s,g)),b&&k.push(se("mean_data_output",1,m)),x&&k.push(se("inv_std_output",1,m));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(S).declareVariables(...k)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Zi("f32",g)};
    var mean_square_vector = ${Zi("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${zn(M,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${en("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${en("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${zn(M,g,"x[j + offset]")};
      let f32scale = ${zn(M,g,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${zn(M,g,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:m,dataType:1}),x&&v.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:T}},Vp=(e,t)=>{Wp(e.inputs),e.compute(qp(e.inputs,t,e.outputCount))}}),Hp,jp,tw=Z(()=>{ge(),ha(),ya(),Hp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jp=e=>{Hp(e.inputs);let t=On.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(pa(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=W.size(e.inputs[0].dims.slice(0,-2)),o=W.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],c=[s,u];e.compute(Or(c,{activation:""},t,l),{inputs:c})}else e.compute(Or(e.inputs,{activation:""},t))}}}),Kp,Yp,Xp,Qp,Zp,nw=Z(()=>{he(),ge(),Ge(),we(),Kp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!W.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(W.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(W.size(u)!==l)throw new Error("zeroPoints input size error.")}},Yp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=W.size(s),l=e[1].dims[2]/4,c=e[0].dataType,p=Fe(t.k),h=Fe(l),m=Fe(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,w=W.size(g)/m/y,b=64,x=[],T=[u,i,a/p],v=W.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),x.push(...ce(T)),x.push(...ce(v)),x.push(...ce(e[2].dims)),e.length===4&&x.push(...ce(W.convertShape(e[3].dims)));let E=[u,i,o/m];x.push(...ce(E));let M=k=>{let S=T.length,A=H("a",e[0].dataType,S,p),z=H("b",12,v.length,h),X=H("scales",e[2].dataType,e[2].dims.length),G=[A,z,X],V=e.length===4?H("zero_points",12,e[3].dims.length):void 0;V&&G.push(V);let O=E.length,F=se("output",e[0].dataType,O,m),K=Ke(e[0].dataType),Q=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),L=Math.floor(ue/8),P=()=>{let D="";for(let U=0;U<L;U++){let j=U*t.bits*4,re=j+t.bits;D+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${Q};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/p}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${A.getByOffset(`input_offset${U>0?U:""}`)};
              input_offset${U>0?U:""}++;
            }
          `;for(let te=0;te<m*y;te++)D+=`
            b_value = ${h===1?`b${te}_data`:`b${te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${U*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${re}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(Y,J)=>`${K}(b_value_lower[${J}]), ${K}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Q}(${Array.from({length:8},(Y,J)=>`(b_quantized_values[${J}] - ${V?`zero_point${te}`:"zero_point"}) * scale${te}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${V?`zero_point${te}`:"zero_point"}`).join(",")})) * scale${te};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(te/m)}]${m>1?`[${te%m}]`:""} += ${Array.from({length:8/p},(Y,J)=>`${p===1?`a_data${U>0?U:""}[${J}] * b_dequantized_values[${J}]`:`dot(a_data${U>0?U:""}[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `}return D},R=()=>{let D=`
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
            `;for(let U=0;U<m*y;U++)D+=`
            let scale${U} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},N=()=>{let D=`col_index = col * ${m};`;for(let U=0;U<m*y;U++)D+=`
            let b${U}_data = ${z.getByIndices(`${z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,D};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${y*b}>;
        ${k.declareVariables(...G,F)}
        ${k.mainStart([b,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${R()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${N()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${P()}
                word_offset += ${ue/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${m};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:M}},Xp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=W.size(s),l=e[1].dims[2]/4,c=e[0].dataType,p=Fe(t.k),h=Fe(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,w=g/y,b=Math.floor(32/t.bits),x=w*h*b,T=x/p,v=x/t.blockSize,E=W.size(m)/y,M=[],k=[u,i,a/p],S=W.convertShape(e[1].dims).slice();S.splice(-1,1,l/h),M.push(...ce(k)),M.push(...ce(S)),M.push(...ce(e[2].dims)),e.length===4&&M.push(...ce(W.convertShape(e[3].dims)));let A=[u,i,o];M.push(...ce(A));let z=X=>{let G=k.length,V=H("a",e[0].dataType,G,p),O=H("b",12,S.length,h),F=H("scales",e[2].dataType,e[2].dims.length),K=[V,O,F],Q=e.length===4?H("zero_points",12,e[3].dims.length):void 0;Q&&K.push(Q);let ue=A.length,L=se("output",e[0].dataType,ue),P=Ke(e[0].dataType),R=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${X.declareVariables(...K,L)}
        ${X.mainStart([w,y,1])}
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
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${g})
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
            let block = tile * ${v} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${P}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${P}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let N=Math.floor(b/8),D="";for(let U=0;U<N;U++){let j=U*t.bits*4,re=j+t.bits;D+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${P}>(${Array.from({length:4},(te,Y)=>`${P}(b_value_lower[${Y}]), ${P}(b_value_upper[${Y}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${P}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(te,Y)=>`${`dot(a_data${Y}, b_dequantized_values[${Y}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:E},programUniforms:M}),getShaderSource:z}},Qp=(e,t)=>{Kp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Xp(e.inputs,t)):e.compute(Yp(e.inputs,t))},Zp=e=>Re(e)}),Jp,eh,th,nh,rh,ih,ah,oh,sh,rw=Z(()=>{he(),ge(),we(),Jp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},eh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},th=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},nh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",i,t)})) {
                  k = i32(${le("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},rh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",i,t)})) {
                  k -= i32(${le("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ih=(e,t,n)=>{switch(n.mode){case 0:return eh(e,t,n.pads.length);case 1:return th(e,t,n.pads.length);case 2:return nh(e,t,n.pads.length);case 3:return rh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},ah=(e,t)=>{let n=W.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=W.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...ce(e[0].dims,n));let s=["rank"],u=l=>{let c=se("output",e[0].dataType,n.length),p=H("x",e[0].dataType,r.length),h=p.type.value,m=ih(c,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?h:"f32"}),`
            ${l.registerUniforms(g).declareVariables(p,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(n)/64)},programUniforms:a}),getShaderSource:u}},oh=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},sh=(e,t)=>{Jp(e.inputs);let n=oh(e.inputs,t);e.compute(ah(e.inputs,n),{inputs:[0]})}}),rr,Ra,Oa,Na,za,uh,lh,Ba,Pa,ch,dh,Da,ph,hh,Ua,fh,mh,gh,yh,iw=Z(()=>{mt(),he(),ge(),we(),rr=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ra=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Er.adjustPoolAttributes(n,i,o,s,u,l);let c=Er.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[p,r?h:c]},Oa=(e,t)=>{let n=t.format==="NHWC",r=W.size(e),i=W.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(l+c);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:c}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,p,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=W.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[a,o,!!u,!1,!1]}},Na=(e,t,n,r,i,a,o,s,u,l,c,p)=>{let h=i.format==="NHWC",m=t.type.value,g=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(h?2:1);if(c?y=`
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
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${m}(${s});
              var pad = 0;
              ${w}
              ${y}
              ${b}
              ${o}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,b="";return l?b=`
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
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${le("uniforms.pads","j - 2u",w)};
                  ${b}
              }
              ${o}

              output[global_idx] = value;
            }`}},za=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,uh=e=>`${za(e)};${e.countIncludePad}`,lh=e=>`${za(e)};${e.storageOrder};${e.dilations}`,Ba=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Pa=(e,t,n,r)=>{let[i,a]=Ra(t,r,n),o=H("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[c,p,h,m,g]=Oa(a,i);c.push(...ce(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:c}),getShaderSource:w=>Na(w,o,t.dims.length,a.length,i,u,l,0,p,h,m,g)}},ch=e=>{let t=e.count_include_pad!==0,n=Ba(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:uh(r)}},dh=(e,t)=>{rr(e.inputs),e.compute(Pa("AveragePool",e.inputs[0],!1,t))},Da={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ph=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},hh=(e,t)=>{rr(e.inputs),e.compute(Pa("GlobalAveragePool",e.inputs[0],!0,t))},Ua=(e,t,n,r)=>{let[i,a]=Ra(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=H("x",t.dataType,t.dims.length),l=["rank"],[c,p,h,m,g]=Oa(a,i);return c.push(...ce(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:c}),getShaderSource:y=>Na(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,p,h,m,g)}},fh=(e,t)=>{rr(e.inputs),e.compute(Ua("MaxPool",e.inputs[0],!1,t))},mh=e=>{let t=e.storage_order,n=e.dilations,r=Ba(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:lh(i)}},gh=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},yh=(e,t)=>{rr(e.inputs),e.compute(Ua("GlobalMaxPool",e.inputs[0],!0,t))}}),wh,_h,bh,$h,aw=Z(()=>{he(),ge(),Ge(),we(),wh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},_h=(e,t)=>{let n=W.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=W.size(a),u=r===3||r===2,l=u?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(W.size(p.dims)/4)]:p.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,g=m===!1&&c.length===1,y=Fe(s),w=m&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,T=H("input",u?12:r,l.length,x),v=H("scale",o,c.length),E=p?H("zero_point",u?12:r,h.length):void 0,M=se("output",o,a.length,b),k=[T,v];E&&k.push(E);let S=[l,c];p&&S.push(h);let A=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...ce(...S,a)],z=X=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(G).declareVariables(...k,M)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${v.getByOffset("0")}`:g?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:g?u?`
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:A})}},bh=(e,t)=>{wh(e.inputs,t),e.compute(_h(e.inputs,t))},$h=e=>Re({axis:e.axis,blockSize:e.blockSize})}),xh,vh,Sh,ow=Z(()=>{mt(),he(),we(),xh=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},vh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...ce(a)],u=l=>{let c=se("output",r,a.length),p=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Sh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&xh(t,n,r),e.compute(vh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Th,Eh,Ih,Mh,sw=Z(()=>{he(),ge(),Ge(),we(),Th=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Eh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(W.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=W.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...ce(e[1].dims,e[2].dims,i)],c=p=>{let h=H("indices",e[1].dataType,e[1].dims.length),m=H("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Nu("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,g)}
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
    ${Th(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:c}},Ih=e=>Re({reduction:e.reduction}),Mh=(e,t)=>{e.compute(Eh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),kh,Ch,Ah,La,Rh,Oh,Nh,zh,Bh,Ph,Dh,Uh,Fa,Lh,Fh,Gh,Wh,qh,Vh,Hh,uw=Z(()=>{he(),ge(),Ge(),we(),kh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ch=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Ah=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");kh(r,t),t.axes.length>0&&Ch(r,t.axes,l).forEach((c,p)=>r[p]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},La=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Rh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${La("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${La("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Oh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Nh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},zh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Bh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Ph=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",r)};
        var roi_low = ${le("uniforms.roi","i",i)};
        var roi_hi = ${le("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Dh=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",a)};
          var roi_hi = ${le("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${le("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",r.length)};
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
    }`,Uh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Fa=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Lh=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Fa(e,u,a,2)}
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
    }`},Fh=(e,t,n,r,i,a,o,s,u,l)=>{let c=n.length===2,[p,h]=c?[0,1]:[2,3],m=e.type.value,g=y=>{let w=y===p?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
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
          var ${w}: ${m} = originalIdx + ${m}(i);
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
    ${g(p)};
    ${g(h)};
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
    `},Gh=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Fa(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${o}];
      var height:${c} = originalIndices[${s}];
      var width:${c} = originalIndices[${u}];
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
    }`},Wh=(e,t,n,r,i,a)=>{let o=e.dims,s=Nh(a,t.axes,o.length),u=zh(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Bh(o,l,t)));let c=se("output",e.dataType,u.length),p=H("input",e.dataType,o.length),h=W.size(u),m=o.length===u.length&&o.every((x,T)=>x===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=p.type.value,b=x=>`
      ${m?"":`
      ${Rh(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Uh(p,o)};
              ${Oh(t.nearestMode,n,w)};
              ${Dh(p,c,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Ph(c,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Lh(p,c,o,g,y)}`;if(o.length===3||o.length===5)return`${Gh(p,c,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Fh(p,c,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(p,c)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:s},...ce(o,u)]})}},qh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Vh=(e,t)=>{let n=[],r=[],i=[],a=qh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ah(e.inputs,t,a,n,r,i),e.compute(Wh(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Hh=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),jh,Kh,Yh,lw=Z(()=>{he(),ge(),we(),jh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Kh=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=W.size(a),s=a,u=o,l=a.slice(-1)[0],c=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,w=64,b=Fe(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[H("x",e[0].dataType,e[0].dims,b),H("skip",e[1].dataType,e[1].dims,b),H("gamma",e[2].dataType,e[2].dims,b)];p&&k.push(H("beta",e[3].dataType,e[3].dims,b)),h&&k.push(H("bias",e[4].dataType,e[4].dims,b)),k.push(se("output",e[0].dataType,s,b)),m&&k.push(se("mean_output",1,c)),g&&k.push(se("inv_std_output",1,c)),y&&k.push(se("input_skip_bias_sum",e[0].dataType,s,b));let S=Ke(e[0].dataType),A=Ke(1,b);return`

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
          let f32_value = ${zn(S,b,"value")};
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
        let mean = ${en("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${en("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:c,dataType:1}),n>2&&v.push({dims:c,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${m};${g};${y}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Yh=(e,t)=>{jh(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Kh(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Xh,ir,Qh,Ga,Zh,Jh,ef,tf,cw=Z(()=>{he(),ge(),Ge(),we(),Xh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ir=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Qh=(e,t)=>{if(e.length>1){let n=ir(e,1),r=ir(e,2),i=ir(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Ga=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Zh=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",n.length)};
            let steps_i = ${le("uniforms.steps","i",n.length)};
            let signs_i = ${le("uniforms.signs","i",n.length)};
            let starts_i = ${le("uniforms.starts","i",n.length)};
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
      }`,Jh=(e,t)=>{let n=e[0].dims,r=W.size(n),i=t.axes.length>0?W.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ir(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,x)=>Ga(b,x,n,i,a)),s=t.ends.map((b,x)=>Ga(b,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,T)=>{if(b<0){let v=(s[x]-o[x])/b,E=o[x],M=E+v*a[x];o[x]=M,s[x]=E,T[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let c={dims:l,dataType:e[0].dataType},p=se("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),m=W.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...ce(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(g).declareVariables(h,p)}
        ${Zh(h,p,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},ef=(e,t)=>{Xh(e.inputs,t);let n=Qh(e.inputs,t);e.compute(Jh(e.inputs,n),{inputs:[0]})},tf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),nf,rf,af,of,dw=Z(()=>{he(),ge(),Ge(),tn(),we(),nf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},rf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=W.size(r),a=r.length,o=W.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,S)=>S),l[o]=a-1,l[a-1]=o,u=e.compute(dt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,p=c[a-1],h=i/p,m=Fe(p),g=p/m,y=64;h===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=H("x",u.dataType,u.dims,m),x=se("result",u.dataType,u.dims,m),T=b.type.value,v=Ke(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=k=>`
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
          rowMaxShared = ${T}(${w("threadShared[0]",m)});
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
          rowSumShared = ${T}(${en("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:g}]}),getShaderSource:E},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(dt(M,l),{inputs:[M]})},af=(e,t)=>{nf(e.inputs),rf(e,t)},of=e=>Re({axis:e.axis})}),Wa,sf,uf,lf,cf,pw=Z(()=>{he(),ge(),we(),Wa=e=>Array.from(e.getBigInt64Array(),Number),sf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Wa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},uf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},lf=(e,t)=>{let n=e[0].dims,r=t??Wa(e[1]),i=uf(n,r),a=W.size(i),o=e[0].dataType,s=H("input",o,n.length),u=se("output",o,i.length),l=c=>`
      const inputShape = ${s.indices(...n)};
      ${c.registerUniform("output_size","u32").declareVariables(s,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ce(e[0].dims,i)]}),getShaderSource:l}},cf=e=>{sf(e.inputs),e.compute(lf(e.inputs),{inputs:[0]})}}),df,pf,hf,hw=Z(()=>{he(),ge(),we(),df=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=H("a_data",t[1].dataType,t[1].dims.length,4),s=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,c=(p,h,m)=>`select(${h}, ${p}, ${m})`;if(!r)l=a.setByOffset("global_idx",c(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,b=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${h}[${m}] = ${g}(${c(y,w,b)});
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
      }`},pf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(W.areEqual(t,n)&&W.areEqual(n,r)),o=t,s=W.size(t);if(a){let l=On.calcShape(On.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=W.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>df(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...ce(r,t,n,o)]})}},hf=e=>{e.compute(pf(e.inputs))}}),ff,fw=Z(()=>{My(),aa(),ky(),Cy(),Ay(),Ry(),Oy(),Dy(),Ly(),Fy(),Gy(),Wy(),qy(),Vy(),Hy(),jy(),Ky(),Yy(),Xy(),Qy(),Zy(),Jy(),ew(),tw(),nw(),Tp(),rw(),iw(),aw(),ow(),sw(),na(),uw(),zp(),lw(),cw(),dw(),Rp(),pw(),tn(),la(),hw(),ff=new Map([["Abs",[jl]],["Acos",[Kl]],["Acosh",[Yl]],["Add",[Bc]],["ArgMax",[Rl,ia]],["ArgMin",[Al,ia]],["Asin",[Xl]],["Asinh",[Ql]],["Atan",[Zl]],["Atanh",[Jl]],["Attention",[Dl]],["AveragePool",[dh,ch]],["BatchNormalization",[Gl]],["BiasAdd",[Vl]],["BiasSplitGelu",[Oc]],["Cast",[tc,ec]],["Ceil",[ic]],["Clip",[rc]],["Concat",[Xc,Qc]],["Conv",[xa,ba]],["ConvTranspose",[Sd,$d]],["Cos",[ac]],["Cosh",[oc]],["CumSum",[Ed,Id]],["DepthToSpace",[Ad,Rd]],["DequantizeLinear",[bh,$h]],["Div",[Pc]],["Einsum",[Dd,Ud]],["Elu",[sc,Zn]],["Equal",[Dc]],["Erf",[uc]],["Exp",[lc]],["Expand",[Wd]],["FastGelu",[Vd]],["Floor",[cc]],["FusedConv",[xa,ba]],["Gather",[Yd,Kd]],["GatherElements",[op,ap]],["GatherBlockQuantized",[tp,np]],["GatherND",[Qd,Zd]],["Gelu",[dc]],["Gemm",[cp,lp]],["GlobalAveragePool",[hh,ph]],["GlobalMaxPool",[yh,gh]],["Greater",[Gc]],["GreaterOrEqual",[qc]],["GridSample",[_p,bp]],["GroupQueryAttention",[Up]],["HardSigmoid",[_c,wc]],["InstanceNormalization",[Gp]],["LayerNormalization",[Vp]],["LeakyRelu",[pc,Zn]],["Less",[Wc]],["LessOrEqual",[Vc]],["Log",[Ic]],["MatMul",[jp]],["MatMulNBits",[Qp,Zp]],["MaxPool",[fh,mh]],["Mul",[Uc]],["MultiHeadAttention",[Sp,xp]],["Neg",[fc]],["Not",[hc]],["Pad",[sh]],["Pow",[Lc]],["QuickGelu",[Cc,Zn]],["Range",[Sh]],["Reciprocal",[mc]],["ReduceMin",[El]],["ReduceMean",[$l]],["ReduceMax",[Tl]],["ReduceSum",[Ml]],["ReduceProd",[Il]],["ReduceL1",[xl]],["ReduceL2",[vl]],["ReduceLogSum",[Cl]],["ReduceLogSumExp",[Sl]],["ReduceSumSquare",[kl]],["Relu",[gc]],["Resize",[Vh,Hh]],["RotaryEmbedding",[Np]],["ScatterND",[Mh,Ih]],["Sigmoid",[yc]],["Sin",[bc]],["Sinh",[$c]],["Slice",[ef,tf]],["SkipLayerNormalization",[Yh]],["Split",[Cp,Ap]],["Sqrt",[xc]],["Softmax",[af,of]],["Sub",[Fc]],["Tan",[vc]],["Tanh",[Sc]],["ThresholdedRelu",[Ec,Zn]],["Tile",[cf]],["Transpose",[Gu,Wu]],["Where",[hf]]])}),mf,mw=Z(()=>{mt(),Vt(),we(),mf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Rt(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),_t(e.programInfo.name)}dispose(){}build(e,t){Rt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Bu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return _t(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),gf={};An(gf,{WebGpuBackend:()=>bf});var yf,wf,_f,bf,gw=Z(()=>{mt(),he(),Vt(),xu(),Ey(),fw(),mw(),yf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},wf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${yf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},_f=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},bf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new _f(o),this.gpuDataManager=Ru(this),this.programManager=new mf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ui(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,c=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),outputsMetadata:h.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";p.forEach((T,v)=>{b+=`input[${v}]: [${T.dims}] | ${qt(T.dataType)}, `});let x="";h.forEach((T,v)=>{x+=`output[${v}]: [${T.dims}] | ${qt(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}_r("GPU",`${c}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),_t()}run(e,t,n,r,i,a){Rt(e.name);let o=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let v=this.gpuDataManager.get(T);if(!v)throw new Error(`no GPU data for input: ${T}`);o.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?s.map((x,T)=>T):n;if(c.length!==s.length)throw new Error(`Output size ${c.length} must be equal to ${s.length}.`);let p=[],h=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=a)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let T=c[x]===-1,v=c[x]===-2,E=T||v?i(s[x].dataType,s[x].dims):r(c[x],s[x].dataType,s[x].dims);if(p.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(M),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(M)}h.push(M)}if(o.length!==t.length||h.length!==p.length){if(h.length===0)return _t(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,T=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,z,X;k.type===10?(X=S.length>4?16:S.length>2?8:S.length*A,z=S.length>4?16:A*S.length):(X=S.length<=2?S.length*A:16,z=16),x=Math.ceil(x/X)*X,T.push(x);let G=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/G)*z:S.length*A});let v=16;x=Math.ceil(x/v)*v;let E=new ArrayBuffer(x);l.forEach((k,S)=>{let A=T[S],z=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(E,A,z.length).set(z);else if(k.type===12)new Uint32Array(E,A,z.length).set(z);else if(k.type===10)new Uint16Array(E,A,z.length).set(z);else if(k.type===1)new Float32Array(E,A,z.length).set(z);else throw new Error(`Unsupported uniform type: ${qt(k.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,x),this.gpuDataManager.release(M.id),m={offset:0,size:x,buffer:M.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,w=wf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,g),this.programManager.setArtifact(w,b),Ee("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],v=T.type,E=typeof T.data=="number"?1:T.data.length,[M,k]=b.uniformVariablesInfo[x];if(v!==M||E!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${k}, got type ${v} with size ${E} in program "${b.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,h,g,m),_t(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=ff.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Qi(this,e,t);return Li(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),$f={};An($f,{init:()=>vf});var Dr,xf,vf,yw=Z(()=>{he(),Vt(),ge(),Ty(),Dr=class ny{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new ny(this.module,this.dataType,this.data,t)}},xf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),c=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),h=[];for(let m=0;m<p;m++)h.push(Number(e.getValue(r*i++,a)));s.push(new Dr(e,l,c,h))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Dr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=wn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Dr(this.module,s,c,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},vf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(gw(),Vn(gf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,c=!1)=>{if(c)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),p)}},async(s,u,l)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,c)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let p=new xf(t,o,Number(u));return o.computeKernel(Number(s),p,c)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Mu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,c)=>a.ensureTensor(o,s,u,l,c),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),Sf,qa,Va,nn,Tf,Ha,Ur,ja,Ka,Ya,Xa,Qa,Za,Ef=Z(()=>{mt(),xy(),vy(),he(),mn(),Ni(),pu(),Sf=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},qa=async e=>{Sf(e.wasm.numThreads,Tr(e.logLevel))},Va=async(e,t)=>{var r,i;(i=(r=Pe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(yw(),Vn($f)).init;t==="webgpu"&&await a("webgpu",Pe(),e,n),t==="webnn"&&await a("webnn",Pe(),e)}},nn=new Map,Tf=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Ha=(e,t)=>{let n=Pe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],c=[];for(let p=0;p<l;p++){let h=Number(n.getValue(i+8+p*a,"*"));c.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(p+l)*a,"*")))}return[s,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Ur=e=>{let t=Pe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ja=async(e,t)=>{var p,h,m,g;let n,r,i=Pe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Ur(e);let a=0,o=0,s=0,u=[],l=[],c=[];try{if([o,u]=await du(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let z=typeof A=="string"?A:A.path;S.push(Di(typeof A=="string"?A:A.data).then(X=>{i.mountExternalData(z,X)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,z=A==null?void 0:A.context,X=A==null?void 0:A.gpuDevice,G=A==null?void 0:A.deviceType,V=A==null?void 0:A.powerPreference;z?i.currentContext=z:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&Ne("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Tf(a),b=!!(t!=null&&t.enableGraphCapture),x=[],T=[],v=[],E=[],M=[];for(let S=0;S<y;S++){let[A,z,X]=Ha(a,S);A===0&&Ne("Can't get an input name."),l.push(A);let G=i.UTF8ToString(A);x.push(G),v.push(z===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(z),shape:X})}for(let S=0;S<w;S++){let[A,z,X]=Ha(a,S+y);A===0&&Ne("Can't get an output name."),c.push(A);let G=i.UTF8ToString(A);T.push(G),E.push(z===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(z),shape:X});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[G])??"cpu",O=i.webnnIsGraphOutput;if(V==="cpu"&&O&&O(a,G)){M.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(b&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(V)}}let k=null;return M.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Pi(S))}),nn.set(a,[a,l,c,k,b,!1]),[a,x,T,v,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ne("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Ka=e=>{var u,l,c;let t=Pe(),n=nn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),nn.delete(e)},Ya=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Pe(),u=s.PTR_SIZE,l=e[0],c=e[1],p=e[3],h=p,m,g;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let b=e[2].gpuBuffer;g=wn(yn(l),c);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,b,g)}}else if(p==="ml-tensor"){let b=e[2].mlTensor;g=wn(yn(l),c);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,b,yn(l),c)}else{let b=e[2];if(Array.isArray(b)){g=u*b.length,m=s._malloc(g),n.push(m);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(m+x*u,bt(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,T=s.webnnIsGraphOutput;if(l!=="string"&&x&&T){let v=s.UTF8ToString(i);if(x(r,v)||T(r,v)){let E=yn(l);g=wn(E,c),h="ml-tensor";let M=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!M||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await M(r,E,c);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),m=S}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}}let y=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach((x,T)=>s.setValue(w+T*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(yn(l),m,g,w,c.length,Pi(h));b===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},Xa=async(e,t,n,r,i,a)=>{var G,V,O,F;let o=Pe(),s=o.PTR_SIZE,u=nn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],p=u[2],h=u[3],m=u[4],g=u[5],y=t.length,w=r.length,b=0,x=[],T=[],v=[],E=[],M=[],k=o.stackSave(),S=o.stackAlloc(y*s),A=o.stackAlloc(y*s),z=o.stackAlloc(w*s),X=o.stackAlloc(w*s);try{[b,x]=ou(a),hn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await Ya(n[L],T,E,e,c[t[L]],t[L],m);for(let L=0;L<w;L++)await Ya(i[L],v,E,e,p[r[L]],y+r[L],m);fn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)o.setValue(S+L*s,T[L],"*"),o.setValue(A+L*s,c[t[L]],"*");for(let L=0;L<w;L++)o.setValue(z+L*s,v[L],"*"),o.setValue(X+L*s,p[r[L]],"*");if(h&&!g){let{handle:L,outputPreferredLocations:P,outputPreferredLocationsEncoded:R}=h;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);hn("wasm bindInputsOutputs");for(let N=0;N<y;N++){let D=t[N];await o._OrtBindInput(L,c[D],T[N])!==0&&Ne(`Can't bind input[${N}] for session=${e}.`)}for(let N=0;N<w;N++){let D=r[N];(G=i[N])!=null&&G[3]?(M.push(v[N]),o._OrtBindOutput(L,p[D],v[N],0)!==0&&Ne(`Can't bind pre-allocated output[${N}] for session=${e}.`)):o._OrtBindOutput(L,p[D],0,R[D])!==0&&Ne(`Can't bind output[${N}] to ${P[N]} for session=${e}.`)}fn("wasm bindInputsOutputs"),nn.set(e,[l,c,p,h,m,!0])}(V=o.jsepOnRunStart)==null||V.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let K;h?K=await o._OrtRunWithBinding(l,h.handle,w,z,b):K=await o._OrtRun(l,A,S,y,X,w,z,b),K!==0&&Ne("failed to call OrtRun().");let Q=[],ue=[];hn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let P=Number(o.getValue(z+L*s,"*"));if(P===v[L]||M.includes(v[L])){Q.push(i[L]),P!==v[L]&&o._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.");continue}let R=o.stackSave(),N=o.stackAlloc(4*s),D=!1,U,j=0;try{o._OrtGetTensorData(P,N,N+s,N+2*s,N+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let re=s===4?"i32":"i64",te=Number(o.getValue(N,re));j=o.getValue(N+s,"*");let Y=o.getValue(N+s*2,"*"),J=Number(o.getValue(N+s*3,re)),ae=[];for(let me=0;me<J;me++)ae.push(Number(o.getValue(Y+me*s,re)));o._OrtFree(Y)!==0&&Ne("Can't free memory for tensor dims.");let pe=ae.reduce((me,ie)=>me*ie,1);U=qt(te);let Ae=h==null?void 0:h.outputPreferredLocations[r[L]];if(U==="string"){if(Ae==="gpu-buffer"||Ae==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let ie=0;ie<pe;ie++){let Ie=o.getValue(j+ie*s,"*"),Oe=o.getValue(j+(ie+1)*s,"*"),ee=ie===pe-1?void 0:Oe-Ie;me.push(o.UTF8ToString(Ie,ee))}Q.push([U,ae,me,"cpu"])}else if(Ae==="gpu-buffer"&&pe>0){let me=o.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=me(j),Ie=wn(te,pe);if(Ie===void 0||!zi(U))throw new Error(`Unsupported data type: ${U}`);D=!0,Q.push([U,ae,{gpuBuffer:ie,download:o.jsepCreateDownloader(ie,Ie,U),dispose:()=>{o._OrtReleaseTensor(P)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(Ae==="ml-tensor"&&pe>0){let me=o.webnnEnsureTensor,ie=o.webnnIsGraphInputOutputTypeSupported;if(!me||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(wn(te,pe)===void 0||!Bi(U))throw new Error(`Unsupported data type: ${U}`);if(!ie(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let Ie=await me(e,j,te,ae,!1);D=!0,Q.push([U,ae,{mlTensor:Ie,download:o.webnnCreateMLTensorDownloader(j,U),dispose:()=>{o.webnnReleaseTensorId(j),o._OrtReleaseTensor(P)}},"ml-tensor"])}else if(Ae==="ml-tensor-cpu-output"&&pe>0){let me=o.webnnCreateMLTensorDownloader(j,U)(),ie=Q.length;D=!0,ue.push((async()=>{let Ie=[ie,await me];return o.webnnReleaseTensorId(j),o._OrtReleaseTensor(P),Ie})()),Q.push([U,ae,[],"cpu"])}else{let me=Sr(U),ie=new me(pe);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(o.HEAPU8.subarray(j,j+ie.byteLength)),Q.push([U,ae,ie,"cpu"])}}finally{o.stackRestore(R),U==="string"&&j&&o._free(j),D||o._OrtReleaseTensor(P)}}h&&!m&&(o._OrtClearBoundOutputs(h.handle)!==0&&Ne("Can't clear bound outputs."),nn.set(e,[l,c,p,h,m,!1]));for(let[L,P]of await Promise.all(ue))Q[L][2]=P;return fn("wasm ProcessOutputTensor"),Q}finally{(F=o.webnnOnRunEnd)==null||F.call(o,l),o.stackRestore(k),T.forEach(K=>o._OrtReleaseTensor(K)),v.forEach(K=>o._OrtReleaseTensor(K)),E.forEach(K=>o._free(K)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(K=>o._free(K))}},Qa=e=>{let t=Pe(),n=nn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},Za=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),rn,st,Bn,ar,or,Lr,Ja,Fr,Tn,En,If,Mf,kf,Cf,Af,Rf,Of,Nf,zf=Z(()=>{mt(),Ef(),mn(),Ci(),rn=()=>!!ze.wasm.proxy&&typeof document<"u",Bn=!1,ar=!1,or=!1,Fr=new Map,Tn=(e,t)=>{let n=Fr.get(e);n?n.push(t):Fr.set(e,[t])},En=()=>{if(Bn||!ar||or||!st)throw new Error("worker not ready")},If=e=>{switch(e.data.type){case"init-wasm":Bn=!1,e.data.err?(or=!0,Ja[1](e.data.err)):(ar=!0,Ja[0]()),Lr&&(URL.revokeObjectURL(Lr),Lr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Fr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Mf=async()=>{if(!ar){if(Bn)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(Bn=!0,rn())return new Promise((e,t)=>{st==null||st.terminate(),tu().then(([n,r])=>{try{st=r,st.onerror=a=>t(a),st.onmessage=If,Ja=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Ei)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),st.postMessage(i),Lr=n}catch(i){t(i)}},t)});try{await Oi(ze.wasm),await qa(ze),ar=!0}catch(e){throw or=!0,e}finally{Bn=!1}}},kf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};st.postMessage(r)});await Va(ze,e)},Cf=async e=>rn()?(En(),new Promise((t,n)=>{Tn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};st.postMessage(r,[e.buffer])})):Ur(e),Af=async(e,t)=>{if(rn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return En(),new Promise((n,r)=>{Tn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),st.postMessage(i,a)})}else return ja(e,t)},Rf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("release",[t,n]);let r={type:"release",in:e};st.postMessage(r)});Ka(e)},Of=async(e,t,n,r,i,a)=>{if(rn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return En(),new Promise((o,s)=>{Tn("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};st.postMessage(l,Za(u))})}else return Xa(e,t,n,r,i,a)},Nf=async e=>{if(rn())return En(),new Promise((t,n)=>{Tn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};st.postMessage(r)});Qa(e)}}),eo,Bf,Pf,ww=Z(()=>{mt(),zf(),he(),xi(),pu(),eo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Bf=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!zi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ue.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Bi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ue.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Pf=class{async fetchModelAndCopyToWasmMemory(e){return Cf(await Di(e))}async loadModel(e,t){Rt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Af(n,t),_t()}async dispose(){return Rf(this.sessionId)}async run(e,t,n){Rt();let r=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],m=p[1],g=this.inputNames.indexOf(h);if(g===-1)throw new Error(`invalid input '${h}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(p=>{let h=p[0],m=p[1],g=this.outputNames.indexOf(h);if(g===-1)throw new Error(`invalid output '${h}'`);a.push(m),o.push(g)});let s=r.map((p,h)=>eo(p,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((p,h)=>p?eo(p,()=>`output "${this.outputNames[o[h]]}"`):null),l=await Of(this.sessionId,i,s,o,u,n),c={};for(let p=0;p<l.length;p++)c[this.outputNames[o[p]]]=a[p]??Bf(l[p]);return _t(),c}startProfiling(){}endProfiling(){Nf(this.sessionId)}}}),Df={};An(Df,{OnnxruntimeWebAssemblyBackend:()=>no,initializeFlags:()=>to,wasmBackend:()=>Uf});var to,no,Uf,_w=Z(()=>{mt(),zf(),ww(),to=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?iy("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},no=class{async init(e){to(),await Mf(),await kf(e)}async createInferenceSessionHandler(e,t){let n=new Pf;return await n.loadModel(e,t),n}},Uf=new no});mt(),mt(),mt();var bw="1.27.0";{let e=(_w(),Vn(Df)).wasmBackend;Rn("webgpu",e,5),Rn("webnn",e,5),Rn("cpu",e,10),Rn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:bw,enumerable:!0});/**
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
 */const Gr=new Map;function Lf(e,t){const n=Gr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Gr.set(e,n)}function rt(e,t){const n=performance.now();try{return t()}finally{Lf(e,performance.now()-n)}}async function Je(e,t){const n=performance.now();try{return await t()}finally{Lf(e,performance.now()-n)}}function $w(){return[...Gr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function xw(){Gr.clear()}const vw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Sw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),Tw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function Ff(e){const t=vw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Ew(e){const t=Tw.exec(e);if(t===null)return Ff(e);const[,n,r,i,a]=t,o=Ff(a);if(n==="both")return o;const s=Sw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${s}${u} — ${o}`}function Iw(e,t,n,r){const i=t*n,a=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return a.set(e),a;for(let o=0;o<i;o+=1)a[o*4]=e[o*r],a[o*4+1]=e[o*r+1],a[o*4+2]=e[o*r+2],a[o*4+3]=255;return a}function it(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Pn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Gf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Mw=114;function kw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function ro(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const p=(c+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,h+1),g=Math.max(0,Math.min(1,p-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),T=Math.max(0,Math.min(1,w-b)),v=(h*r+b)*a,E=(h*r+x)*a,M=(m*r+b)*a,k=(m*r+x)*a,S=(c*t+y)*3;for(let A=0;A<3;A++){const z=o[v+A]*(1-T)+o[E+A]*T,X=o[M+A]*(1-T)+o[k+A]*T;s[S+A]=Math.min(255,Math.max(0,Math.round(z*(1-g)+X*g)))}}}return s}function Dn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const p=c*l,h=Math.min((c+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let w=0,b=0,x=0,T=0;for(let E=Math.floor(p);E<h;E++){const M=Math.min(E+1,h)-Math.max(E,p);if(!(M<=0))for(let k=Math.floor(g);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,g);if(S<=0)continue;const A=S*M,z=(E*r+k)*a;w+=o[z]*A,b+=o[z+1]*A,x+=o[z+2]*A,T+=A}}const v=(c*t+m)*3;s[v]=Math.min(255,Math.max(0,it(w/T))),s[v+1]=Math.min(255,Math.max(0,it(b/T))),s[v+2]=Math.min(255,Math.max(0,it(x/T)))}}return s}function Wf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function sr(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,c=h=>Math.max(0,Math.min(r-1,h)),p=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const m=(h+.5)*l-.5,g=Math.floor(m),y=Wf(m-g);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),T=Wf(b-x),v=(h*t+w)*3;for(let E=0;E<3;E++){let M=0;for(let k=0;k<4;k++){const S=p(g-1+k)*r;let A=0;for(let z=0;z<4;z++)A+=T[z]*o[(S+c(x-1+z))*a+E];M+=y[k]*A}s[v+E]=Math.min(255,Math.max(0,Math.round(M)))}}}return s}function Wr(e,t,n=1){const r=kw(e.width,e.height,t,n),i=ro(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Mw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const p=(l+c)*3,h=u+c;o[h]=i[p]/255,o[a+h]=i[p+1]/255,o[2*a+h]=i[p+2]/255}}return{tensor:o,params:r}}function Cw(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],c=e[o*6+3],p=e[o*6+4],h=e[o*6+5];if(p<n)continue;const m=Math.round(h);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(g),Math.trunc(y),Math.trunc(w-g),Math.trunc(b-y)],boxFloat:[g,y,w-g,b-y]})}return i}const ur=.8,qf=.65,Aw=110,Rw=1280;function Ow(e,t,n){if(n==null)return ur;if(n.length===0)return qf;const r=Math.max(e,t);if(!(r>0))return ur;const i=Rw/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return ur;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Aw?qf:ur}const Vf=.25,Hf=.6;function Nw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Vf:Hf)),c=Math.trunc(u*(s>=u?Hf:Vf)),p=Math.max(0,r-l),h=Math.max(0,i-c),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+c),y=m-p,w=g-h;return y<=0||w<=0?null:{x:p,y:h,width:y,height:w}}const jf=3,zw=.15,Bw=.6;function io(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Kf(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Pw(e,t,n){try{const r=Math.trunc(Number(n)),i=n!=null&&Number.isFinite(r)&&r!==0;if(!e||e.length<2)return null;const a=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...a,...o].every(E=>Number.isFinite(E)))return null;const s=io(a,o);if(!(s>0))return null;const u=[];for(const E of t??[]){const M=Math.trunc(Number(E.n));if(!Number.isFinite(M)||M<jf)continue;const k=Kf(E.poly);k!==null&&u.push({owner:E.owner,c:k,n:M,d0:0,d1:0,ecart:0})}if(u.length<2)return null;u.sort((E,M)=>M.n-E.n);const l=u.slice(0,2);let c=!1;u.length>2&&l[1].n>0&&(c=u[2].n/l[1].n>Bw);for(const E of l)E.d0=io(E.c,a),E.d1=io(E.c,o),E.ecart=Math.abs(E.d0-E.d1);const p=[...l].sort((E,M)=>M.ecart-E.ecart),h=p[0],m=p[1],g=h.d0<h.d1?0:1,y=r>0?1:0,w=i?g===y?h:m:null,b=i?g===y?m:h:null,x=g===1?h.owner:m.owner,T=g===1?m.owner:h.owner,v=h.ecart/s<zw;return{favoredOwner:(b==null?void 0:b.owner)??null,threatenedOwner:(w==null?void 0:w.owner)??null,ownerAtEnd0:T,ownerAtEnd1:x,distance:i?Math.abs(r):null,ambiguous:!!(v||c)}}catch{return null}}function Dw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}function Uw(e){try{const t=[];for(const u of e??[]){const l=Number(u==null?void 0:u.n);if(!Number.isFinite(l)||l<jf)continue;const c=Kf(u.poly);c!==null&&t.push({owner:u.owner,c,n:l})}if(t.length<2)return null;t.sort((u,l)=>l.n-u.n);const[n,r]=t;if(n.owner===r.owner)return null;const i=Math.abs(n.c[0]-r.c[0]);if(Math.abs(n.c[1]-r.c[1])>i){const[u,l]=n.c[1]<r.c[1]?[n,r]:[r,n];return{left:u.owner,right:l.owner}}const[o,s]=n.c[0]<r.c[0]?[n,r]:[r,n];return{left:o.owner,right:s.owner}}catch{return null}}const Lw=10.6;function Fw(e,t,n){if(!Number.isFinite(n)||n<=0)return null;const r=Number(e[0])-Number(t[0]),i=Number(e[1])-Number(t[1]),a=Math.hypot(r,i);return!Number.isFinite(a)||a<=0||a/n<Lw?null:[Number(e[0]),Number(e[1])]}const Gw=.6;function Yf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,c=(e[a*6+3]-t.padY)/t.scale,p=it((s+l)/2),h=it((u+c)/2),m=it((l-s+(c-u))/4);m>=1&&r.push({cx:p,cy:h,r:m})}return r}function Ww(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Gw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function qw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Pn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Xf(e,t,n){const r=Yf(e,t,n);return r.length===0?[]:qw(Ww(r))}function Vw(e,t,n){return Yf(e,t,n)}function ao(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Hw=.5,jw=.7,Kw=.55;function oo(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Qf(e){if(e.length===0)return[];const t=(Hw*oo(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Pn(i.map(a=>a[0]))),Math.trunc(Pn(i.map(a=>a[1]))),Math.trunc(Pn(i.map(a=>a[2]))),Math.trunc(Pn(i.map(a=>a[3])))]);if(r.length>=2){const i=oo(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),p=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=c*p,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(h>=jw*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=oo(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=Kw*i)}return r}const Yw=.7;function Xw(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]);if(i<=n||a<=r)return 0;const o=(i-n)*(a-r),s=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=s+u-o;return l>0?o/l:0}function Zf(e,t,n,r,i,a=Yw){const o=t-4;if(o<=0||n<=0)return[];const s=[];for(let l=0;l<n;l+=1){let c=0,p=0;for(let h=0;h<o;h+=1){const m=e[(4+h)*n+l];m>c&&(c=m,p=h)}c<i||s.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:p})}s.sort((l,c)=>c.score-l.score);const u=[];for(const l of s){let c=!1;for(const p of u)if(p.cls===l.cls&&Xw(p.box,l.box)>a){c=!0;break}c||u.push(l)}return u.map(l=>l.box)}const Jf=["brown","grey","blue","green","yellow","red","purple"],Qw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Zw=.7;function em(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let c=!1;for(const p of r){const h=e[p];if(h.family!==a.family)continue;const[m,g,y,w]=h.box,b=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),x=Math.max(0,Math.min(s+l,g+w)-Math.max(s,g)),T=Math.max(1,Math.min(u*l,y*w));if(b*x>=Zw*T){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function qr(e,t,n){const r=Cw(e,t,n,Jf.length).map(i=>{const a=Jf[i.classIndex];return{color:a,family:Qw[a],box:i.box,confidence:i.confidence}});return em(r)}const Jw=8,e_=.8,tm=1.25;function t_(e){if(e.length<Jw)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*tm?t.push(o):u>s*tm&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<e_*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const n_=2.25,nm=8;function r_(e){if(e.length<nm)return[];const t=e.map(p=>[p.box[0]+p.box[2]/2,p.box[1]+p.box[3]/2]),n=e.map(p=>Math.hypot(p.box[2],p.box[3])).sort((p,h)=>p-h),r=n_*n[Math.floor(n.length/2)],i=r*r,a=e.map((p,h)=>h),o=p=>{for(;a[p]!==p;)a[p]=a[a[p]],p=a[p];return p};for(let p=0;p<e.length;p++)for(let h=p+1;h<e.length;h++){const m=t[p][0]-t[h][0],g=t[p][1]-t[h][1];m*m+g*g<=i&&(a[o(p)]=o(h))}const s=new Map;for(let p=0;p<e.length;p++){const h=o(p);s.set(h,[...s.get(h)??[],p])}let u=[];for(const p of s.values())p.length>u.length&&(u=p);if(u.length<nm||u.length===e.length)return[];const l=new Set(u),c=e.map((p,h)=>h).filter(p=>!l.has(p));return c.map(p=>({family:e[p].family,color:e[p].color,box:[...e[p].box],reason:`${e[p].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const at={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function Et(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const i_=.42,a_=22,o_=43,s_=120,u_=1.5,l_=.72,c_=110,rm=3;function lr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*i_);if(l<1)return 0;let c=0;for(let p=0;p<i;p++)for(let h=0;h<r;h++){if((h-s)**2+(p-u)**2>l*l)continue;const m=(p*r+h)*a,g=o[m],y=o[m+1],w=o[m+2];!t&&g>=250&&y>=250&&w>=250||(n(g,y,w),c+=1)}return c}function d_(e){let t=0,n=0,r=0,i=lr(e,!1,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=lr(e,!0,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function p_(e){let t=0,n=0,r=lr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=lr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function h_(e){let t=0;const n=lr(e,!0,(r,i,a)=>{t+=Et(r,i,a).s});return n===0?null:t/n}function f_(e){const t=d_(e);if(t===null||t.s<=a_)return 1;if(t.s>=s_){const n=p_(e);return n!==null&&n>=u_?6:3}return t.s>=o_?3:6}function m_(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function g_(e,t){const n=[...t];if(e.length<rm||t.length!==e.length)return n;const r=e.map(o=>h_(o)),i=r.filter(o=>o!==null);if(i.length<rm)return n;const a=Pn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<l_*a&&o<c_&&(n[s]=1)}),n}function im(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),c=Math.max(0,u-o),p=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let m=0;m<l;m++){const g=(h*l+m)*3;if((m+a-n)**2+(h+o-r)**2<=i*i){const w=((h+o)*e.width+(m+a))*e.channels;p[g]=e.data[w],p[g+1]=e.data[w+1],p[g+2]=e.data[w+2]}else p[g]=255,p[g+1]=255,p[g+2]=255}return{width:l,height:c,channels:3,data:p}}function y_(e,t){const n=t.map(a=>im(e,a)),r=n.map(a=>f_(a)),i=m_(t,r);return g_(n,i)}function w_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function am(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const c=l*i,p=Math.min((l+1)*i,e.width);let h=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let w=Math.floor(c);w<p;w++){const b=Math.min(w+1,p)-Math.max(w,c);b<=0||(h+=e.data[g*e.width+w]*b*y,m+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,it(h/m)))}}return{width:t,height:n,data:r}}function __(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,it(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function b_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const c=o+l,p=a+u;if(!(c<0||c>=t||p<0||p>=n)&&r[p*t+c]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function $_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const c=o+l,p=a+u;if(c>=0&&c<t&&p>=0&&p<n&&r[p*t+c]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function om(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;o[c++]=u,i[u]=s;let p=0,h=0,m=0;for(;l<c;){const g=o[l++],y=g%t,w=g/t|0;p+=1,h+=y,m+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const T=y+x,v=w+b;if(T<0||T>=t||v<0||v>=n)continue;const E=v*t+T;r[E]>0&&i[E]===0&&(i[E]=s,o[c++]=E)}}a[s]={area:p,centroidX:h/p,centroidY:m/p},s+=1}return{labels:i,stats:a}}function x_(e,t,n){return sm(Float32Array.from(e.data),e.width,t,n)}function sm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const p=c-a,h=l-a,m=s*p-u*h+a,g=u*p+s*h+a,y=Math.floor(m),w=Math.floor(g),b=m-y,x=g-w,T=(M,k)=>M>=0&&M<t&&k>=0&&k<t?e[k*t+M]:r,v=T(y,w)*(1-b)+T(y+1,w)*b,E=T(y,w+1)*(1-b)+T(y+1,w+1)*b;i[l*t+c]=v*(1-x)+E*x}return i}const v_=.9,S_=.34,T_=[.55,.6,.66,.72],E_=22,I_=88,M_=35,Un=28,so=4,k_=Array.from({length:15},(e,t)=>-21+t*3),um=[-2,0,2],C_=3,A_=.3;function R_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function O_(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),c=Math.floor((u-o)/2),p=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+p)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const h=Un-2*so,m=am({width:u,height:u,data:l},h,h),g=new Float32Array(Un*Un);for(let y=0;y<h;y++)for(let w=0;w<h;w++)g[(y+so)*Un+(w+so)]=m.data[y*h+w]>110?1:0;return g}function N_(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*S_);if(u<4)return null;const l=o-u,c=s-u,p=2*u,h=2*u;if(p<6||h<6)return null;const m=new Int16Array(p*h),g=new Int16Array(p*h),y=new Int16Array(p*h),w=new Uint8Array(p*h),b=[],x=Math.min(p,h)/2;for(let L=0;L<p;L++)for(let P=0;P<h;P++){const R=((L+l)*n+(P+c))*i,{h:N,s:D,v:U}=Et(a[R],a[R+1],a[R+2]),j=L*h+P;m[j]=N,g[j]=D,y[j]=U,Math.sqrt((P-h/2)**2+(L-p/2)**2)/x<=t&&(w[j]=1,b.push(U))}if(b.length<16)return null;const T=Gf(b,55);let v=0,E=0,M=0;const k=L=>m[L]>=E_&&m[L]<=I_&&g[L]>=M_,S=L=>y[L]>=T&&g[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<p*h;L++)w[L]===1&&(M+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(E+=1));const A=v>.5*M&&E<.15*M,z=new Uint8Array(p*h);if(A){const L=Gf(b,45);for(let P=0;P<p*h;P++)z[P]=w[P]===1&&y[P]<=L?255:0}else for(let L=0;L<p*h;L++)z[L]=S(L)?255:0;const X={width:h,height:p,data:z},G=b_(X);let V=om(G),O=V;if(V.stats.length<=1&&(V=om(X),O=V,V.stats.length<=1))return null;const F=Math.min(p,h)/2;let K=0,Q=-1;for(let L=1;L<O.stats.length;L++){const P=O.stats[L];if(P===void 0)continue;const R=Math.hypot(P.centroidX-h/2,P.centroidY-p/2)/F,N=P.area*(1-.6*Math.min(R,1));N>Q&&(Q=N,K=L)}if(K===0)return null;const ue=new Uint8Array(p*h);for(let L=0;L<p*h;L++)ue[L]=O.labels[L]===K?255:0;return O_($_({width:h,height:p,data:ue}))}function z_(e,t,n,r,i,a){const o=Un;let s=0,u=0;for(let l=0;l<o;l++){const c=l-a;if(!(c<0||c>=o))for(let p=0;p<o;p++){const h=p-i;if(h<0||h>=o)continue;const m=e[c*o+h];m!==0&&(u+=m,s+=m*n[l*o+p])}}return s/(u+r-s+1e-6)}function B_(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of k_){const a=i===0?e:sm(e,Un,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of um)for(const u of um){const l=z_(a,o,t,n,s,u);l>r&&(r=l)}}return r}function P_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of T_){const s=N_(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([B_(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<A_)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,C_))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}function jt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let c=0;c<i;c++)for(let p=0;p<r;p++){let h,m;n===1?(h=i-1-c,m=p):n===2?(h=r-1-p,m=i-1-c):(h=c,m=r-1-p);const g=(c*r+p)*a,y=(m*s+h)*a;for(let w=0;w<a;w++)l[y+w]=o[g+w]}return{width:s,height:u,channels:a,data:l}}const D_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,D_)*255));return e})();const U_=5e3,L_=.75,F_=15,G_=1.25,W_=2.4,q_=.003,V_=.85,H_=2600,j_=2,uo=.3,lm=.1,cm=.012,K_=22,dm=.5,pm=.12;function pt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Y_(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[p,h]=e[(u+1)%4];r+=l*h-p*c}const i=Math.abs(r/2)/(t*n);if(i<q_||i>V_)return!1;const a=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=G_&&s<=W_}function X_(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Q_(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(uo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-o*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-o*r[G][0]-o*r[G][1];const c=pt(e,t),p=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,p,h,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),c.delete(),h.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(G,V)=>{const O=(V*s+G)*3;w[0].push(g[O]),w[1].push(g[O+1]),w[2].push(g[O+2])};for(let G=0;G<u;G++)for(let V=0;V<s;V++)(G<y||G>=u-y||V<y||V>=s-y)&&b(V,G);const x=G=>{G.sort((O,F)=>O-F);const V=G.length>>1;return G.length%2?G[V]:(G[V-1]+G[V])/2},T=[x(w[0]),x(w[1]),x(w[2])],v=(G,V)=>{const O=(V*s+G)*3,F=g[O]-T[0],K=g[O+1]-T[1],Q=g[O+2]-T[2];return Math.sqrt(F*F+K*K+Q*Q)>K_},E=Math.max(6,Math.trunc(lm*i)),M=Math.max(6,Math.trunc(lm*a)),k=Math.max(2,Math.trunc(cm*i)),S=Math.max(2,Math.trunc(cm*a)),A=G=>{let V=0,O=0;for(const F of G)O=F?O+1:0,O>V&&(V=O);return V/Math.max(1,G.length)},z=G=>{let V,O,F,K,Q;if(G==="L"?(V=o,O=o+a,F=Math.max(0,o-k-E),K=Math.max(0,o-k),Q=!1):G==="R"?(V=o,O=o+a,F=o+i+k,K=Math.min(s,o+i+k+E),Q=!1):(V=Math.max(0,o-S-M),O=Math.max(0,o-S),F=o,K=o+i,Q=!0),O<=V||K<=F)return 0;const ue=[];if(Q)for(let L=F;L<K;L++){let P=0;for(let R=V;R<O;R++)v(L,R)&&P++;ue.push(P/(O-V)>dm)}else for(let L=V;L<O;L++){let P=0;for(let R=F;R<K;R++)v(R,L)&&P++;ue.push(P/(K-F)>dm)}return A(ue)},X={L:z("L"),R:z("R"),T:z("T")};return p.delete(),m.delete(),X}const Z_=.5;function J_(e){return e!==null&&e.R>=pm?["R"]:[]}function hm(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=uo*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],T=n[b];let v=-(T[1]-x[1]),E=T[0]-x[0];const M=(x[0]+T[0])/2,k=(x[1]+T[1])/2;v*(M-s)+E*(k-u)<0&&(v=-v,E=-E);const S=Math.hypot(v,E);S<=1e-6||(v=v/S*o,E=E/S*o,c.push([x[0]+v,x[1]+E],[T[0]+v,T[1]+E]))}const p=c.map(y=>y[0]),h=c.map(y=>y[1]),m=Math.round(Math.min(...p)),g=Math.round(Math.min(...h));return{x:m,y:g,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...h))-g}}const eb=.88;function fm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(uo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*eb),c=s-l;if(c<1)return null;const p=pt(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(h,m),y=[...g.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(p,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,c,u)),v=new e.Mat;T.copyTo(v);const E=v.data,M=new Uint8ClampedArray(c*u*3);M.set(E.subarray(0,M.length));for(const k of[p,h,m,g,b,x,T,v])try{k.delete()}catch{}return{width:c,height:u,channels:3,data:M}}function tb(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),c=Math.max(0,Math.trunc(i-u)),p=Math.min(n.width,Math.trunc(i+o+u)),h=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(p-c<8||m-h<8)return null;const g=Math.max(n.width,n.height)<H_?j_:1,y=pt(e,n),w=pt(e,t),b=y.roi(new e.Rect(c,h,p-c,m-h)),x=new e.Mat;g!==1?e.resize(b,x,new e.Size(0,0),g,g,e.INTER_CUBIC):b.copyTo(x);const T=new e.Mat,v=new e.Mat;e.cvtColor(w,T,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const E=new e.ORB(U_),M=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,z=new e.Mat,X=[y,w,b,x,T,v,M,k,S,A,z],G=re=>{for(const te of X)try{te.delete()}catch{}try{E.delete()}catch{}return re};if(E.detectAndCompute(T,z,M,S),E.detectAndCompute(v,z,k,A),S.rows<8||A.rows<8)return G(null);const V=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;V.knnMatch(S,A,O,2);const F=[],K=[];for(let re=0;re<O.size();re++){const te=O.get(re);if(te.size()===2){const Y=te.get(0),J=te.get(1);if(Y.distance<L_*J.distance){const ae=M.get(Y.queryIdx).pt,pe=k.get(Y.trainIdx).pt;F.push(ae.x,ae.y),K.push(pe.x,pe.y)}}}if(O.delete(),V.delete(),F.length/2<8)return G(null);const Q=e.matFromArray(F.length/2,1,e.CV_32FC2,F),ue=e.matFromArray(K.length/2,1,e.CV_32FC2,K),L=new e.Mat,P=e.findHomography(Q,ue,e.RANSAC,5,L);let R=0;for(let re=0;re<L.rows;re++)R+=L.data[re];const N=P.rows===3?[...P.data64F]:null;if(Q.delete(),ue.delete(),L.delete(),P.delete(),N===null||R<F_)return G(null);const D=1/g,U=[[D,0,c],[0,D,h],[0,0,1]],j=[0,1,2].map(re=>[0,1,2].map(te=>U[re][0]*N[te]+U[re][1]*N[3+te]+U[re][2]*N[6+te]));return G({H:j,inliers:R})}const nb=620;function rb(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function ib(e,t,n,r){const i=mm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(E=>Math.trunc(E));if(Math.min(s,u)>=nb||s<=0||u<=0)return null;const l=Math.trunc(s*.25),c=Math.trunc(u*.25),p=Math.max(0,a-l),h=Math.max(0,o-c),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+c);if(m<=p||g<=h)return null;const y=pt(e,t),w=y.roi(new e.Rect(p,h,m-p,g-h)),b=new e.Mat;e.resize(w,b,new e.Size((m-p)*2,(g-h)*2),0,0,e.INTER_CUBIC);const x=rb(e,b);for(const E of[y,w,b])try{E.delete()}catch{}const T=[(a-p)*2,(o-h)*2,s*2,u*2],v=mm(e,x,n,T);return v===null?null:{...v,footprint:v.footprint.map(([E,M])=>[E*.5+p,M*.5+h])}}catch{return null}}function mm(e,t,n,r){const i=tb(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>X_(i.H,b,x));if(!Y_(o,t.width,t.height))return null;const s=pt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=pt(e,n),p=new e.Mat,h=new e.Mat;e.cvtColor(l,p,e.COLOR_RGB2GRAY),e.cvtColor(c,h,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(p,h,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const b of[s,u,l,c,p,h,m])try{b.delete()}catch{}if(g<Z_)return null;const y=Q_(e,t,n,i.H);if(y===null)return null;const w=J_(y);return{built:Math.max(y.L,y.R,y.T)>=pm,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}const ab=.3,ob=.3;function sb(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=ab}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,c=Math.max(s,u,l)<ob;if(!r&&!c)return;t.some(([h,m])=>h>=a.zone.x0&&h<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const Nt=128,Ln=.5;function lo(e){const t=Dn(e,Nt,Nt),n=Nt*Nt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function gm(e){const t=e[1]??0;return{built:t>=Ln,prob:t}}const cr=120,dr=179,ub=1.3,lb=3.6,cb=.45,db=6e-4,pb=.02,hb=6e3,fb=.78,mb=1.25,gb=2.4,yb=.05,wb=1.5,_b=.5,bb=.9,$b=150,xb=18,vb=34,Sb=90,Tb=130,Eb=.13,Ib=.15,Vr="magistrates-guild",co="merchants-guild";function Mb(e,t){const n=pt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[cr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[dr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const c=new e.Mat,p=new e.Mat,h=new e.Mat,m=e.connectedComponentsWithStats(l,c,p,h,8);l.delete(),c.delete(),h.delete();const g=t.width*t.height,y=[];for(let w=1;w<m;w++){const b=p.intAt(w,0),x=p.intAt(w,1),T=p.intAt(w,2),v=p.intAt(w,3),E=p.intAt(w,4),M=E/g;M<db||M>pb||E/Math.max(T*v,1)<cb||y.push({x:b,y:x,w:T,h:v})}return p.delete(),{blobs:y,mask:s,maskWidth:t.width}}function kb(e,t,n,r,i,a,o){const s=e,u=a,l=o,c=i;if(!c.gray){const D=pt(e,r);c.gray=new s.Mat,s.cvtColor(D,c.gray,s.COLOR_RGB2GRAY),D.delete(),c.k=new s.KeyPointVector,c.d=new s.Mat;const U=new s.Mat;u.detectAndCompute(c.gray,U,c.k,c.d),U.delete()}const p=n,h=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(p,h,m,g),h.delete();const y=D=>(m.delete(),g.delete(),D);if(c.d.rows<8||g.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(c.d,g,w,2);const b=[],x=[];for(let D=0;D<w.size();D++){const U=w.get(D);if(U.size()===2){const j=U.get(0);if(j.distance<fb*U.get(1).distance){const re=c.k.get(j.queryIdx).pt,te=m.get(j.trainIdx).pt;b.push(re.x,re.y),x.push(te.x,te.y)}}}if(w.delete(),b.length/2<8)return y(null);const T=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),E=new s.Mat,M=s.findHomography(T,v,s.RANSAC,5,E);if(T.delete(),v.delete(),E.delete(),M.rows!==3)return M.delete(),y(null);const k=[...M.data64F],S=(D,U)=>{const j=k[6]*D+k[7]*U+k[8];return[(k[0]*D+k[1]*U+k[2])/j,(k[3]*D+k[4]*U+k[5])/j]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,U])=>S(D,U));if(A.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return M.delete(),y(null);const z=A.map((D,U)=>{const j=A[(U+1)%4];return Math.hypot(j[0]-D[0],j[1]-D[1])}),X=Math.min(...z);if(X<1)return M.delete(),y(null);const G=Math.max(...z)/X;let V=0;for(let D=0;D<4;D++){const[U,j]=A[D],[re,te]=A[(D+1)%4];V+=U*te-re*j}const O=t,F=Math.abs(V/2)/(O.rows*O.cols);if(G<mb||G>gb||F<yb||F>wb)return M.delete(),y(null);const K=new s.Mat;s.warpPerspective(O,K,M,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),M.delete();const Q=new s.Mat;s.cvtColor(K,Q,s.COLOR_RGB2GRAY),K.delete();const ue=Math.trunc(r.height/2),L=Q.roi(new s.Rect(0,0,r.width,ue)),P=c.gray.roi(new s.Rect(0,0,r.width,ue)),R=new s.Mat;s.matchTemplate(L,P,R,s.TM_CCOEFF_NORMED);const N=R.data32F[0];return L.delete(),P.delete(),R.delete(),Q.delete(),y(N)}function Cb(e,t,n){let r,i;if(n===Vr)r=co,i=Eb;else if(n===co)r=Vr,i=Ib;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let c=0,p=null;for(const[h,m]of[[0,l],[l,s]]){let g=0,y=0;for(let b=o;b<o+u;b++)for(let x=a+h;x<a+m;x++){const T=(b*e.width+x)*e.channels,{h:v,s:E,v:M}=Et(e.data[T],e.data[T+1],e.data[T+2]);if(v>=cr&&v<=dr&&E>=30&&E<=170&&M<=170)continue;g++,(r===co?v>=xb&&v<=vb&&E>=Sb&&M>=Tb:v>=95&&v<=130&&E>=80)&&y++}if(g<20)continue;const w=y/g;w>c&&(c=w,p={x:a+h,y:o,w:m-h,h:u})}return c>=i&&p!==null?{id:r,box:p}:null}const Ab=1.7,Rb=140,Ob=170,Nb=.2,zb=.1,ym=240,wm=80,_m=60,Bb=50,bm="scientists-guild",$m="tacticians-guild",Hr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Pb(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let v=0;v<o;v++){let E=0;for(let M=0;M<a;M++)e[(i+v)*t+r+M]>0&&E++;s[v]=E/a}const u=[];for(let v=0;v<o;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],c=u[u.length-1],p=c-l;if(p<5)return[];const h=a/p;if(h<ub||h>lb)return[];if(h>=Ab)return[{x:r,y:i+l,w:a,h:p}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const E=Math.exp(-(v*v)/(2*g*g));y.push(E),w+=E}for(let v=0;v<o;v++){let E=0;for(let M=-4;M<=4;M++){const k=Math.min(o-1,Math.max(0,v+M));E+=s[k]*y[M+4]}m[v]=E/w}const b=l+Math.trunc(p*.3),x=l+Math.trunc(p*.78);let T=l+Math.trunc(p/2);if(x>b){let v=1/0;for(let E=b;E<x;E++)m[E]<v&&(v=m[E],T=E)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:c-T}]}function Db(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let c=0;c<o;c++){const p=((r+l)*e.width+n+c)*e.channels,h=(l*o+c)*3;u[h]=e.data[p],u[h+1]=e.data[p+1],u[h+2]=e.data[p+2]}return{width:o,height:s,channels:3,data:u}}function Ub(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Et(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=Rb&&o<=Ob&&n++)}return t===0?0:n/t}function Lb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);!(a>=cr&&a<=dr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function xm(e,t){const n=pt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(ym,wm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:ym,height:wm,channels:3,data:i}}function Fb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function vm(e,t){const n=Fb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:w,s:b,v:x}=Et(n.data[y],n.data[y+1],n.data[y+2]);!(w>=cr&&w<=dr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const o=a<20,s=pt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let c=0,p=0,h=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(c+=l[g*3]*100/255,p+=l[g*3+1]-128,h+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[c/m,p/m,h/m]}function Gb(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h:c,s:p,v:h}=Et(e.data[l],e.data[l+1],e.data[l+2]);c>=cr&&c<=dr&&p>=30&&p<=170&&h<=170||(t++,p>=70&&h>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&h>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function Wb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);o>=_m&&s>=Bb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<_m&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function qb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function Sm(e,t){const n=pt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function Vb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=xm(e,a);n.set(i,Sm(e,o)),Hr.includes(i)&&r.set(i,vm(e,o))}return{gray:n,warmLab:r}}function Hb(e,t,n){const r=xm(e,t),i=Gb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Vr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return bm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return $m;const a=Wb(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=Vr;else if(s==="green")u=bm;else if(s==="red")u=$m;else{const l=Sm(e,r);let c="",p=-2;for(const h of Hr){const m=n.gray.get(h);if(m===void 0)continue;const g=qb(l,m);g>p&&(p=g,c=h)}u=c||Hr[0]}if(Hr.includes(u)&&n.warmLab.size>0){const l=vm(e,r);let c=u,p=1/0;for(const[h,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<p&&(p=g,c=h)}return c}return u}function jb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=Mb(e,t);if(o.length===0||n.size===0)return a;const l=e,c=new l.ORB(hb),p=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const m=pt(e,t);let g=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),T=Math.max($b,Math.trunc(bb*Math.max(w.w,w.h))),v=Math.max(0,b-T),E=Math.max(0,x-T),M=Math.min(t.width,b+T),k=Math.min(t.height,x+T);if(M-v<16||k-E<16)continue;const S=m.roi(new l.Rect(v,E,M-v,k-E)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let z=null,X=-2;for(const[F,K]of n){if(r!==void 0&&Date.now()>r)break;const Q=kb(e,S,A,K,h.get(F),c,p);Q!==null&&Q>X&&(X=Q,z=F)}S.delete(),A.delete();const G=new Set;if(z!==null&&X>=_b){a.push({id:z,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(z);const F=Cb(t,w,z);F&&(a.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),G.add(F.id))}if(i===void 0||i.size===0)continue;const V=Pb(s,u,w);if(V.length!==2)continue;const O=V.map(F=>Db(t,F));if(!O.some(F=>F.width*F.height===0||Lb(F)<zb))for(let F=0;F<V.length;F++){const K=O[F];if(Ub(K)<Nb)continue;g===null&&(g=Vb(e,i));const Q=Hb(e,K,g);if(Q&&!G.has(Q)){G.add(Q);const ue=V[F];a.push({id:Q,boundingBox:{x:ue.x,y:ue.y,width:ue.w,height:ue.h},confidence:1})}}}}finally{m.delete();for(const w of h.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),p.delete()}catch{}}return a}const Tm=128,Kb=.56,Yb=15,Xb=.58,Qb=70,Zb=50,Jb=.12,e1=.2,t1=.1,n1=.17,Em=.15;function r1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Im(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),c=Math.max(0,s-u),p=Math.min(n,o+u),h=Math.min(r,s+u),m=p-l,g=h-c,y=new Uint8Array(m*g*i);for(let w=0;w<g;w++){const b=((w+c)*n+l)*i;y.set(a.subarray(b,b+m*i),w*m*i)}return{width:m,height:g,channels:i,data:y}}function i1(e){const t=Im(e,Kb),n=w_(t),r=am(n,Tm,Tm);return __(r)}function a1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;a+=l*c,o+=l*l,s+=c*c}return a/(Math.sqrt(o*s)+1e-6)}function o1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Im(e,Xb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const m=h*a,{h:g,s:y,v:w}=Et(o[m],o[m+1],o[m+2]);y>=Qb&&w>=Zb&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const c=u/s,p=l/s;return c>=Jb&&t.set("masonry",Em*Math.min(1,c/e1)),p>=t1&&t.set("strategy",Em*Math.min(1,p/n1)),t}function s1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=i1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Yb)a.push(x_(n,l,i));const o=new Map;for(const[l,c]of t){let p=-1/0;for(const h of a){const m=a1(h,c);m>p&&(p=m)}o.set(l,p)}for(const[l,c]of o1(e))c>0&&o.has(l)&&o.set(l,o.get(l)+c);let s="",u=-1/0;for(const[l,c]of o)c>u&&(s=l,u=c);return[s,u]}const an=224,u1=512,l1=[.485,.456,.406],c1=[.229,.224,.225];function d1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function p1(e){const t=ro(e,an,an),n=an*an,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-l1[a])/c1[a];return r}function h1(e){const t=3*an*an,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(p1(jt(e,r)),r*t);return n}function f1(e,t=u1){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function m1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Fn=96,g1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],y1=.45;function w1(e){const t=ro(e,Fn,Fn),n=Fn*Fn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function _1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=y1?g1[t]??"":"",prob:n}}const Kt=128,b1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],$1=.5;let Mm=null;function x1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Mm=e}function km(){return Mm??$1}let Cm=null;function v1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Cm=[...e]}function S1(){return Cm??b1}const Am="__inverse";function T1(e){return e.endsWith(Am)?[e.slice(0,-Am.length),!0]:[e,!1]}function E1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n*3);for(let o=0;o<t*n;o++)for(let s=0;s<3;s++)a[o*3+s]=i[o*r+s];return a}function I1(e){const t=Math.min(Kt/e.width,Kt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?E1(e):t<1?Dn(e,n,r):sr(e,n,r),a=Kt*Kt,o=new Float32Array(3*a);o.fill(114/255);const s=Math.floor((Kt-r)/2),u=Math.floor((Kt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const p=(l*n+c)*3,h=(l+s)*Kt+(c+u);for(let m=0;m<3;m++)o[m*a+h]=i[p+m]/255}return o}async function M1(e,t){const{index:n,prob:r}=k1(await t(I1(e))),[i,a]=T1(S1()[n]??"");return r<km()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:a}}function k1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const zt=96,C1=[1,2,3,4,5,6,7],A1=.8,R1=.99;function O1(e){const t=sr(e,e.width*2,e.height*2),n=e.width*2<zt&&e.height*2<zt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?sr(r,zt,zt):Dn(r,zt,zt),a=zt*zt,o=new Float32Array(3*a);for(let s=0;s<a;s++)for(let u=0;u<3;u++)o[u*a+s]=i[s*3+u]/255;return o}function N1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:C1[t],prob:e[t]}}const on=128,Rm=.35,z1=["fp","laurel"],B1=.85,Gn=40;function P1(e){const r=(e.width<on&&e.height<on?sr:Dn)(e,on,on),i=on*on,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function D1(e){return e[z1.indexOf("fp")]}const sn=128,U1=.15,Om=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],L1=7,F1=.9;function G1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*U1),c=Math.max(0,it(s-l/2)),p=Math.max(0,it(u-l/2)),h=Math.min(t,it(s+l/2)),m=Math.min(n,it(u+l/2));return h-c<8||m-p<8?null:{x:c,y:p,w:h-c,h:m-p}}function W1(e){const r=(e.width<sn&&e.height<sn?sr:Dn)(e,sn,sn),i=sn*sn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function q1(e){let t=0;for(let i=1;i<Om.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=L1;return{className:Om[t],probability:n,rejected:r&&n>=F1}}const jr=3,V1=2.2,H1=.3,j1=.65,K1=3,Y1=1.3,X1=.77;function Nm(e,t,n){const[r,i,a,o]=e,s=[];return r<=jr&&s.push("gauche"),i<=jr&&s.push("haut"),r+a>=t-jr&&s.push("droit"),i+o>=n-jr&&s.push("bas"),s}function zm(e){const t=e[3]/Math.max(e[2],1);return t>=Y1?"portrait":t<=X1?"paysage":null}function po(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function Q1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>j1)return!0;return!1}function Z1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Nm(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(Q1(n,r,i))return u("photo-piste");if(s.length<K1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=po(s.map(w=>w.box[2]*w.box[3])),c=po(s.map(w=>w.box[2])),p=po(s.map(w=>w.box[3])),h=new Set(s.map(w=>zm(w.box)).filter(w=>w!==null)),m=[...s],g=[],y=[];for(const w of o){const b=Nm(w.box,r,i),[,,x,T]=w.box,v=l>0?x*T/l:0,E=[];(b.includes("gauche")||b.includes("droit"))&&E.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&E.push(p>0?T/p:1);const M=E.length>0?Math.min(...E):1,k=zm(w.box);v>V1?g.push({banner:w,edgeReason:"bord-grosse"}):M<H1?g.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&h.size>0&&!h.has(k)?g.push({banner:w,edgeReason:"bord-orientation-adverse"}):(m.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:m,dropped:g,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const J1=1,e2=1.5;function t2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function n2(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function r2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function i2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let c=null;for(const[h,m]of t2(e)){const g=n2(u,l,h,m);g!==null&&(c===null||g[0]<c[0])&&(c=g)}if(c===null)return null;const p=r2(e);return p===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:p!==o>s}}catch{return null}}function a2(e,t,n,r=J1,i=e2){const a=[];for(const[o,s]of t??[]){const u=i2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const gt=64,Bm=.5,o2=[.67,1.24];function Pm(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const c=e.channels,p=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let T=0;T<u;T++){const v=i+T,E=v-t,M=(w*u+T)*3;if(E*E+x*x<=h){const k=(b*e.width+v)*c;p[M]=e.data[k],p[M+1]=e.data[k+1],p[M+2]=e.data[k+2]}else p[M]=255,p[M+1]=255,p[M+2]=255}}const m=Dn({width:u,height:l,channels:3,data:p},gt,gt),g=gt*gt,y=new Float32Array(3*g);for(let w=0;w<g;w++)for(let b=0;b<3;b++)y[b*g+w]=m[w*3+b]/255;return y}function s2(e){return e[1]}const Kr=[1,3,6],u2=.5;function l2(e){if(e.length!==Kr.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:Kr[t],prob:e[t]}}function c2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&Kr.includes(i.denomination)&&i.prob>=u2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const d2=2.25,Yr=3,p2=1.15,h2=.5,f2=2.5,m2=.75,g2=2.25,y2=1.3,w2=.77;function Xr(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function _2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Dm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const c=(u-o)*(t-s)/(l-s)+o;e<c&&(r=!r)}}return r}function b2(e,t,n){if(n.length>=3&&Dm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],c=u-o,p=l-s,h=c*c+p*p,m=h===0?0:Math.max(0,Math.min(1,((e-o)*c+(t-s)*p)/h));r=Math.min(r,Math.hypot(e-(o+m*c),t-(s+m*p)))}return r}function $2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function x2(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,c]=n;let p=0,h=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,c-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const w=y/g;if(g<0?p=Math.max(p,w):h=Math.min(h,w),p>h)return!1}return p>=h?!1:p>=.1&&h<=.95||h-p>=.15}const ho=e=>e.box[3]/Math.max(1,e.box[2]),Yt=e=>ho(e)>p2,Wn=e=>ho(e)>=y2||ho(e)<=w2;function fo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Um(e,t,n,r,i){const a=new Set(t),o=[...e.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:a.has(R)?"card":"tucked",src:["banner",R]})),...n.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(P=>[P.box[0]+P.box[2]/2,P.box[1]+P.box[3]/2]);let c=o.filter(P=>P.kind!=="wonder").map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R);c.length===0&&(c=o.map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R));const p=c[Math.floor(c.length/2)],h=(d2*p)**2,m=o.map((P,R)=>R),g=P=>{let R=P;for(;m[R]!==R;)m[R]=m[m[R]],R=m[R];return R},y=o.map((P,R)=>P.kind==="card"?R:-1).filter(P=>P>=0),w=o.map((P,R)=>P.kind!=="card"?R:-1).filter(P=>P>=0);for(let P=0;P<y.length;P+=1)for(let R=P+1;R<y.length;R+=1){const N=y[P],D=y[R],U=o[N],j=o[D];if(Wn(U)&&Wn(j)&&Yt(U)!==Yt(j))continue;const re=l[N][0]-l[D][0],te=l[N][1]-l[D][1],Y=re*re+te*te;let J=Y<=h;!J&&Wn(U)&&Wn(j)&&Yt(U)===Yt(j)&&Y<=(4*p)**2&&(J=Xr(fo(U),fo(j))<=.5*p),J&&(m[g(N)]=g(D))}for(let P=0;P<w.length;P+=1)for(let R=P+1;R<w.length;R+=1){const N=w[P],D=w[R];Xr(o[N].box,o[D].box)<=m2*p&&(m[g(N)]=g(D))}const b=new Map;for(const P of w){const R=g(P);b.set(R,[...b.get(R)??[],P])}const x=new Map;for(const P of y){const R=g(P);x.set(R,[...x.get(R)??[],P])}for(const P of b.values()){const R=P.filter(j=>o[j].kind==="wonder"&&Wn(o[j])).map(j=>Yt(o[j])),N=R.length>0?R.filter(Boolean).length*2>R.length:null,D=[];for(const[j,re]of x){let te=Number.POSITIVE_INFINITY;for(const ae of P)for(const pe of re)te=Math.min(te,Xr(o[ae].box,o[pe].box));if(te>g2*p)continue;const J=re.filter(ae=>Yt(o[ae])).length/re.length>=.5;N!==null&&J!==N||D.push([j,te,J])}if(D.length===0)continue;const U=new Set(D.map(j=>j[2]));if(D.length>=2&&U.size===1&&N!==null){const j=D[0][0];for(const[re]of D.slice(1))m[g(re)]=g(j);m[g(P[0])]=g(j)}else{const j=D.reduce((re,te)=>te[1]<re[1]?te:re);m[g(P[0])]=g(j[0])}}let T=new Map;for(let P=0;P<o.length;P+=1){const R=g(P);T.set(R,[...T.get(R)??[],P])}const v=o.map((P,R)=>P.kind==="wonder"?R:-1).filter(P=>P>=0);if(v.length>0){const P=(N,D)=>{const[U,j,re,te]=fo(o[N]),[Y,J,ae,pe]=o[D].box,Ae=Math.max(0,Math.min(U+re,Y+ae)-Math.max(U,Y)),me=Math.max(0,Math.min(j+te,J+pe)-Math.max(j,J));return Ae*me>=.9*o[N].box[2]*o[N].box[3]},R=new Map;for(let N=0;N<o.length;N+=1)if(!(o[N].kind!=="card"||!Wn(o[N])))for(const D of v){const U=Xr(o[N].box,o[D].box);if(U<=.8*p&&Yt(o[N])!==Yt(o[D])&&P(N,D)){const j=R.get(D);(!j||U<j[1])&&R.set(D,[N,U])}}for(const[N,[D]]of R){const U=g(N);for(const[j,re]of T){const te=re.indexOf(D);if(te>=0&&j!==U){re.splice(te,1),T.set(U,[...T.get(U)??[],D]),o[D].kind="tucked";break}}}T=new Map([...T].filter(([,N])=>N.length>0))}const E=P=>P.filter(R=>o[R].kind==="card").length,M=P=>{const R=P.filter(N=>o[N].kind==="card"||o[N].kind==="wonder");return R.length===0?null:R.filter(N=>Yt(o[N])).length/R.length},k=P=>[P.reduce((R,N)=>R+l[N][0],0)/P.length,P.reduce((R,N)=>R+l[N][1],0)/P.length],S=[i[0]/2,i[1]/2],A=[...T.values()].sort((P,R)=>{const N=E(P),D=E(R);if(N!==D)return D-N;const U=Math.hypot(k(P)[0]-S[0],k(P)[1]-S[1]),j=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return U-j}),z=k(A[0]),X=M(A[0]),G=A.map((P,R)=>{if(R===0||E(P)<Yr)return"player";const N=M(P),D=N!==null&&X!==null&&Math.abs(N-X)>=h2,U=k(P),j=r.some(re=>x2(z,U,re));return D||j?"opponent":"player"});if(!G.includes("opponent")){const P=N=>N.reduce((D,U)=>D+(o[U].kind==="wonder"?1:0),0);let R=G.map((N,D)=>D).filter(N=>N>0&&(E(A[N])>=Yr||P(A[N])>=2));if(R.reduce((N,D)=>N+P(A[D]),0)<1&&(R=[]),R.length>0&&(E(A[0])<2*Yr||R.reduce((N,D)=>N+E(A[D]),0)<2*Yr)&&(R=[]),R.length>0){const N=new Map(R.map(j=>[j,k(A[j])])),D=(j,re)=>(j[0]-re[0])**2+(j[1]-re[1])**2;if(R.every((j,re)=>R.slice(re+1).every(te=>D(N.get(j),N.get(te))<Math.min(D(N.get(j),z),D(N.get(te),z)))))for(const j of R)G[j]="opponent"}}const V=[],O=[];let F=!1;A.forEach((P,R)=>{const N=G[R];N==="opponent"&&(F=!0);const D=[],U=[];for(const j of P){const[re,te,Y,J]=o[j].box;D.push([re,te],[re+Y,te],[re,te+J],[re+Y,te+J]),U.push(o[j].box);const[ae,pe]=o[j].src;ae==="banner"?s[pe]=N:u[pe]=N}V.push([N,_2(D)]),O.push([N,U])});const K=(P,R,N)=>Math.min(...O[N][1].map(D=>$2(P,R,D))),Q=(P,R)=>V.map(([,N],D)=>N.length>=3&&Dm(P,R,N)?D:-1).filter(N=>N>=0),ue=(P,R)=>{if(V.length===0)return"player";const N=p>0?f2*p:Number.POSITIVE_INFINITY,D=Q(P,R);if(D.length>0){const re=D.reduce((te,Y)=>K(P,R,Y)<K(P,R,te)?Y:te);return V[re][0]}let U=-1,j=Number.POSITIVE_INFINITY;return V.forEach(([,re],te)=>{const Y=b2(P,R,re);Y<j&&(U=te,j=Y)}),U>=0&&j<=N?V[U][0]:"none"},L=(P,R)=>{if(V.length===0)return"none";const N=Q(P,R);if(N.length===0)return"none";const D=N.reduce((U,j)=>K(P,R,j)<K(P,R,U)?j:U);return V[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:F,hulls:V,hullBoxCounts:O.map(([,P])=>P.length),pointOwner:ue,pointInside:L}}const v2=3;function S2(e,t=v2){const n=e.length,r=Array.from({length:n},(o,s)=>s),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let s=o+1;s<n;s+=1){const u=e[o],l=e[s],c=Number(u.center[0]),p=Number(u.center[1]),h=Number(l.center[0]),m=Number(l.center[1]),g=Number(u.radius??0),y=Number(l.radius??0);![c,p,h,m,g,y].every(Number.isFinite)||g<=0||y<=0||Math.hypot(c-h,p-m)<=t*(g+y)&&(r[i(o)]=i(s))}const a=new Map;for(let o=0;o<n;o+=1){const s=i(o);a.has(s)||a.set(s,[]),a.get(s).push(o)}return[...a.values()]}function T2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3]),s=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(s,u)}function mo(e,t,n,r){const i=new Set(e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n));if(i.size===0)return[];const a=[];for(const o of S2(e)){const s=o.map(y=>e[y]),u=s.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,p=0;for(const y of s){const w=Number(y.center[0]),b=Number(y.center[1]);c+=w,p+=b,t.pointInside(w,b)===n&&(l+=1)}const h=c/s.length,m=p/s.length,g=r&&r.length>0?Math.min(...r.map(y=>T2(h,m,y))):0;a.push({cle:[...o].sort((y,w)=>y-w).join(","),membres:s,miens:u,inside:l,dPiste:g,centre:[h,m],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return a}function E2(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let a=0;a<4;a+=1){if(i[a]>r[a])return n;if(i[a]<r[a])return t}return t})}function I2(e,t,n,r){const[i,a]=e.centre,o={};for(const c of["player","opponent"]){const p=mo(t,n,c,r).filter(h=>h.cle!==e.cle);o[c]=p.length===0?1/0:Math.min(...p.map(h=>Math.hypot(i-h.centre[0],a-h.centre[1])))}if(o.player!==o.opponent)return o.player>o.opponent?"player":"opponent";const s=c=>{const p=mo(t,n,c,r).find(h=>h.cle===e.cle);return p?[p.inside,p.dPiste,p.valeur]:[-1,-1,-1]},u=s("player"),l=s("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function M2(e,t,n){const r={player:[],opponent:[]},i={};for(const o of["player","opponent"]){const s=mo(e,t,o,n);s.length>0&&(i[o]=E2(s))}const a=Object.keys(i);if(a.length===0)return r;if(a.length===2&&i.player.cle===i.opponent.cle){const o=I2(i.player,e,t,n);return r[o]=i[o].membres,r}for(const o of a)r[o]=i[o].membres;return r}function k2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{return M2(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const C2=1280,A2=80,R2=3,O2=3,N2=.3,z2=2.4,B2=1,P2=5.2,D2=5;function go(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function U2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=N2&&r/n<=z2&&i/n>=B2&&i/n<=P2&&i/r<=D2}function L2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*C2/r<A2}function F2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let c=n[0],p=1/0;for(const h of n){const m=(u-h.cx)**2+(l-h.cy)**2;m<p&&(p=m,c=h)}c.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function G2(e,t,n,r,i=[]){const a=go(n);if(!L2(e,t,a))return[];const o=r.filter(l=>l.n>=O2&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),s=Math.round(a*R2),u=[];for(const l of F2(o,i)){const c=l.poly.map(w=>w[0]),p=l.poly.map(w=>w[1]);if(c.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.max(0,Math.trunc(Math.min(...p))-s),g=Math.min(e,Math.trunc(Math.max(...c))+s),y=Math.min(t,Math.trunc(Math.max(...p))+s);g>h&&y>m&&u.push([h,m,g,y])}return u}function W2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return U2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}const q2=1.1,V2=3.2,H2=20,j2=.5,K2=1280,Y2=.18,X2=28,Q2=.3;function Z2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(s.length===0||u.length===0)return[e.map((c,p)=>p)];const l=(s.reduce((c,p)=>c+p,0)/s.length+u.reduce((c,p)=>c+p,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function J2(e,t,n=q2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of Z2(s)){if(l.length===0)continue;const c=l.map(A=>e[A]),p=c.map(A=>Math.min(A[2],A[3])).sort((A,z)=>A-z),h=p[Math.trunc(p.length/2)],m=V2*h,g=Math.max(0,Math.min(...c.map(A=>A[0]))-m),y=Math.max(0,Math.min(...c.map(A=>A[1]))-m),w=Math.min(r,Math.max(...c.map(A=>A[0]+A[2]))+m),b=Math.min(i,Math.max(...c.map(A=>A[1]+A[3]))+m),x=Math.max(w-g,b-y);if(x<=0)continue;const T=j2*h*K2/x,v=T>0?Math.max(1,Math.ceil(H2/T)):1;if(v===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const E=w-g>=b-y,k=(E?w-g:b-y)/v,S=k*(1+Y2);for(let A=0;A<v;A++){let z=(E?g:y)+A*k-(S-k)/2;z=Math.max(E?g:y,z);const X=Math.min(E?w:b,z+S);u.push(E?[Math.trunc(z),Math.trunc(y),Math.trunc(X),Math.trunc(b)]:[Math.trunc(g),Math.trunc(z),Math.trunc(w),Math.trunc(X)])}}return u.filter(([l,c,p,h])=>Math.max(r,i)/Math.max(1,Math.max(p-l,h-c))>=n)}function e$(e,t,n,r=X2){const[i,a]=n,o=e;for(const[s,u,l,c]of t){const p=(s+l)/2+i,h=(u+c)/2+a;o.some(([g,y,w,b])=>{const x=p-(g+w)/2,T=h-(y+b)/2;return Math.hypot(x,T)<=r})||o.push([s+i,u+a,l+i,c+a])}return o}function t$(e,t,n,r=Q2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function n$(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function r$(e,t,n,r){return n.length===0?!1:n$(e,t,n)&&!t$(e,t,r)}const Lm=4,Fm=8,Qr=5,In="base-game rule";function Bt(e,t){return{code:e,message:t,severity:"warning"}}function yo(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function i$(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Lm&&i.push(Bt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Lm} (${In}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=yo(n);return a.length>0&&i.push(Bt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${In}), so one of the two readings is wrong.`)),i}function a$(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Fm&&t.push(Bt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Fm} are in play (${In}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],c=[...o].filter(p=>l.has(p)).sort();c.length>0&&t.push(Bt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function o$(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>Qr&&n.push(Bt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${Qr} are in play (${In}) — reserve tokens sitting on the board were probably counted as owned.`));const i=yo(r);if(i.length>0&&n.push(Bt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${In}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==Qr&&n.push(Bt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${Qr} are in play (${In}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Bt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function s$(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Bt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=yo(e.filter(o=>!!o));return a.length>0&&r.push(Bt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${In}).`)),r}const u$=.25,l$=.45;function c$(e,t,n,r,i){const a=Math.cos(i),o=Math.sin(i),s=[n/2*a,n/2*o],u=[-r/2*o,r/2*a],c=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function wo(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function Gm(e,t){const n=wo(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function d$(e,t,n){const r=wo(e,t),i=wo(e,n),a=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,a,!0))}finally{r.delete(),i.delete(),a.delete()}}function p$(e,t,n=l$){const r=[...t].sort((a,o)=>o.confidence-a.confidence),i=[];for(const a of r){let o=!1;for(const s of i){const u=d$(e,a.quad,s.quad);if(u<=0)continue;const l=Gm(e,a.quad)+Gm(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){o=!0;break}}o||i.push(a)}return i}function h$(e,t,n,r,i=u$){const a=[];for(let o=0;o<n;o++){const s=t[4*n+o];if(s<i)continue;const l=c$(t[o],t[n+o],t[2*n+o],t[3*n+o],t[5*n+o]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);a.push({quad:l,confidence:s})}return p$(e,a)}const f$=128,m$=88;function g$(e,t,n,r=f$,i=m$){const a=new e.Mat(t.height,t.width,e.CV_8UC3),o=a.data,s=t.channels;for(let h=0,m=t.width*t.height;h<m;h++)o[h*3]=t.data[h*s],o[h*3+1]=t.data[h*s+1],o[h*3+2]=t.data[h*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),p=new e.Mat;try{return e.warpPerspective(a,p,c,new e.Size(r,i)),{data:new Uint8Array(p.data),width:r,height:i,channels:3}}finally{a.delete(),u.delete(),l.delete(),c.delete(),p.delete()}}function y$(e){return[e[2],e[3],e[0],e[1]]}const w$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],_$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],b$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],$$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],x$=[..._$,...b$,...$$,...w$];Object.fromEntries(x$.map(e=>[e.id,e]));const v$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Wm=.2,S$=.3,qm=.25,_o={total:0,idDiff:0,verdictDiff:0},Pt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},Zr={total:0,memeK:0,memeKInverse:0,detail:[]};function T$(e,t,n){for(const r of e){let i=!1;for(let a=0,o=r.length-1;a<r.length;o=a++){const s=r[a],u=r[o];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(a=>[a[0],a[1]])}return null}function E$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=qm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const c=s[2]/s[3];if(!(Math.abs(Math.log(c))<=qm)&&r>1==c>1)return!0}return!1}async function I$(e,t,n,r,i=[0,1,2,3]){const[a,o,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*Wm),c=Math.round(u*Wm),p=Math.max(0,Math.round(a-l)),h=Math.max(0,Math.round(o-c)),m=Math.min(e.width,Math.round(a+s+l)),g=Math.min(e.height,Math.round(o+u+c)),y=m-p,w=g-h;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let E=0;E<w;E++){const M=((h+E)*e.width+p)*b;x.set(e.data.subarray(M,M+y*b),E*y*b)}const T={width:y,height:w,channels:b,data:x};let v=null;for(const E of i){const M=E===0?T:jt(T,E),k=M.width,S=k-Math.floor(S$*k),A=k-S;if(A<=0)continue;const z=new Uint8ClampedArray(A*M.height*M.channels);for(let F=0;F<M.height;F++){const K=(F*k+S)*M.channels;z.set(M.data.subarray(K,K+A*M.channels),F*A*M.channels)}const X={width:A,height:M.height,channels:M.channels,data:z},G=lo(X),O=(await n.run({[n.inputNames[0]]:new Ue("float32",G,[1,3,Nt,Nt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=O),v=v===null?O:Math.max(v,O)}return v}async function M$(e,t,n,r,i,a,o=[],s){var w;const u=async b=>(await r.run({[r.inputNames[0]]:new Ue("float32",b,[1,3,Kt,Kt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await Je("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(b){return console.warn("[wonders-obb] détection échouée, repli ORB :",b),null}});s!==void 0&&(s.n=l===null?0:l.length);const c=l===null?[]:l.map(b=>{const x=b.map(([M])=>M),T=b.map(([,M])=>M),v=Math.min(...x),E=Math.min(...T);return[Math.round(v),Math.round(E),Math.round(Math.max(...x)-v),Math.round(Math.max(...T)-E)]}),p=o.length===0?c:c.filter(([b,x,T,v])=>{const E=b+T/2,M=x+v/2;return!o.some(k=>{const S=k.x+k.width/2,A=k.y+k.height/2,z=.5*Math.min(k.width,k.height);return(E-S)**2+(M-A)**2<z*z})}),h=new Map;for(const b of p){const[x,T,v,E]=b;if(v<=0||E<=0)continue;const M=l===null?null:T$(l,x+v/2,T+E/2);if(M===null||e.redresserQuad===void 0)continue;let k=M;const S=rt("identify: redressement du quad",()=>e.redresserQuad(n,k)),A=km(),{id:z,prob:X,inverse:G}=await Je("classifieur merveille (1 lecture)",()=>M1(S,u));if(z===""||X<A)continue;G&&(k=y$(k).map(O=>[O[0],O[1]]));const V=h.get(z);(V===void 0||X>V.prob)&&h.set(z,{prob:X,box:b,quad:k})}const m=[],g=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[b,{prob:x,box:T,quad:v}]of h){const[E,M,k,S]=T;let A={x:Math.round(E),y:Math.round(M),width:Math.round(k),height:Math.round(S)},z=null,X=[],G=null;if(v!==null){z=v;const N=z.map(re=>re[0]),D=z.map(re=>re[1]),U=Math.max(0,Math.round(Math.min(...N))),j=Math.max(0,Math.round(Math.min(...D)));if(A={x:U,y:j,width:Math.min(n.width,Math.round(Math.max(...N)))-U,height:Math.min(n.height,Math.round(Math.max(...D)))-j},g!==null)try{const re=await e.wonderRef(b),te=z,Y=re===null||te===null?null:rt("identify: bande droite #63",()=>fm(t,n,re,te));if(Y!==null){const J=rt("identify: preprocess tuck",()=>lo(Y)),ae=await g.run({[g.inputNames[0]]:new Ue("float32",J,[1,3,Nt,Nt])});G=gm(ae[g.outputNames[0]].data).prob,X=G>=Ln?["R"]:[]}}catch{}}else if(Date.now()<i)try{const N=await Je("chargement refs merveilles",()=>e.wonderRef(b));if(N!==null){const D=rt("ORB registration (merveille)",()=>ib(t,n,N,T));if(D!==null){z=D.footprint,X=D.overflow;const U=z.map(Y=>Y[0]),j=z.map(Y=>Y[1]),re=Math.max(0,Math.round(Math.min(...U))),te=Math.max(0,Math.round(Math.min(...j)));if(A={x:re,y:te,width:Math.min(n.width,Math.round(Math.max(...U)))-re,height:Math.min(n.height,Math.round(Math.max(...j)))-te},g!==null)try{const Y=z,J=Y===null?null:rt("identify: bande droite #63",()=>fm(t,n,N,Y));if(J!==null){const ae=rt("identify: preprocess tuck",()=>lo(J)),pe=await g.run({[g.inputNames[0]]:new Ue("float32",ae,[1,3,Nt,Nt])});G=gm(pe[g.outputNames[0]].data).prob}}catch{}}}}catch(N){console.warn(`[wonders-cls] ${b} registration failed:`,N)}const V=z!==null?hm(z,X):null,O=v!==null&&z!==null?hm(z,["R"]):null,F=[];if(G!==null&&F.push(G>=Ln?1:0),y!==null)try{let N=[0,1,2,3];if(v!==null){const j=v[1][1]-v[0][1],re=v[1][0]-v[0][0],te=(Math.round(Math.atan2(j,re)*180/Math.PI/90)%4+4)%4;N=[(0+te)%4,(2+te)%4]}const D=[0,0,0,0],U=await Je("identify: sonde marges (#68)",()=>I$(n,T,y,D,N));if(U!==null&&(F.push(U>=Ln?1:0),v!==null)){const j=v[1][1]-v[0][1],re=v[1][0]-v[0][0],te=(Math.round(Math.atan2(j,re)*180/Math.PI/90)%4+4)%4,Y=Math.max(D[(0+te)%4],D[(2+te)%4]);Pt.total+=1;const J=U>=Ln?1:0,ae=Y>=Ln?1:0;J===1&&(Pt.positifs4+=1),ae===1&&(Pt.positifs2+=1),J!==ae&&(Pt.divergent+=1,Pt.detail.push(`${b.slice(0,12)}:v4=${J}/v2=${ae} p=[${D.map(pe=>pe.toFixed(2)).join(",")}]kQ${te}`))}}catch{}const K=O??V??A,Q=a.some(N=>{const D=N.box[0]+N.box[2]/2,U=N.box[1]+N.box[3]/2;return D>=K.x&&D<=K.x+K.width&&U>=K.y&&U<=K.y+K.height});F.push(Q?1:0);let ue=F.length>0&&F.reduce((N,D)=>N+D,0)*2>F.length;ue&&E$(K,A,a)&&(ue=!1);const L=V??(ue&&O!==null?O:null),P={id:b,name:((w=v$[b])==null?void 0:w.name)??b,builtWithCardUnderneath:ue,boundingBox:A,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},R=L??A;m.push({obj:P,edgeScores:null,zone:{x0:R.x,y0:R.y,x1:R.x+R.width,y1:R.y+R.height},quad:z,region:L})}return m}const Ze="/7wd-scorer/models/",bo=[];let It=null;function k$(){bo.length=0,It=null}function C$(e){const t=performance.now();It!==null&&bo.push({nom:It.nom,ms:Math.round(t-It.debut)}),It={nom:e,debut:t}}function Vm(){const e=[...bo];It!==null&&e.push({nom:`${It.nom} (en cours)`,ms:Math.round(performance.now()-It.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function Hm(){const e={};for(const t of Object.keys(at))e[at[t].onnx]=ei.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ut)e[t]=n;return e}function A$(){var e,t;return $o(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let jm=!1;const Jr=new Map;function $o(){var e;jm||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,jm=!0)}const ei=new Set;let xo=0;function Km(e){return xo+=1,e.finally(()=>{xo-=1})}function R$(){return xo>0}function O$(e){$o();let t=Jr.get(e);return t===void 0&&(t=Km(Je(`session: 1er chargement ${at[e].onnx}`,()=>br.create(`${Ze}${at[e].onnx}`,{executionProviders:ei.has(e)?["wasm"]:["webgpu","wasm"]}))),Jr.set(e,t),t.catch(()=>Jr.delete(e))),t}const ut=new Map;let pr=0,hr=0;const ti=new Map;function vo(e){const t=(It==null?void 0:It.nom)??"(hors etage)";ti.set(t,(ti.get(t)??0)+e)}function N$(){return[...ti.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let So=0;function z$(){return{ms:Math.round(pr),appels:hr,preparationMs:Math.round(So)}}function B$(){pr=0,hr=0,So=0,xw(),ti.clear(),wx()}const Ym=new Set(["coin_yolo.onnx","token_yolo.onnx"]),To=new Set;let Eo=null;async function P$(e){if(Eo)return await Eo.catch(()=>{}),e();const t=e();return Eo=t.catch(()=>{}),t}async function Io(e,t){return P$(()=>br.create(`${Ze}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ht(e){return Km(Je(`session: 1er chargement ${e}`,()=>D$(e)))}async function D$(e){$o();const t=!Ym.has(e)&&!To.has(e);let n=null;if(t)try{n=await Io(e,!0),ut.set(e,"webgpu")}catch(o){To.add(e),ut.set(e,`wasm (webgpu refuse a la creation: ${String(o).slice(0,60)})`)}else ut.set(e,Ym.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Io(e,!1)}catch(o){return ut.set(e,`ECHEC wasm: ${String(o).slice(0,160)}`),null}let r=n,i=ut.get(e)==="webgpu";const a=async(o,...s)=>{const u=performance.now();try{const l=await r.run(o,...s),c=performance.now()-u;return pr+=c,vo(c),hr+=1,l}catch(l){if(!i)throw l;To.add(e),ut.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Io(e,!1);const c=await r.run(o,...s),p=performance.now()-u;return pr+=p,vo(p),hr+=1,c}};return new Proxy(r,{get(o,s,u){if(s==="run")return a;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let Mo=null,ko=null;const U$=.65,L$=3e4;let Co=null;function Ao(){return Co===null&&(Co=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Co}const Xm=new Map;function Ro(e){let t=Xm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ze}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Xm.set(e,t)),t}function F$(e){return Ro(`wonder-refs/${e}.jpg`)}const Qm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function G$(){const e=new Map;for(const t of Qm){const n=await Ro(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function W$(){const e=new Map;for(const t of Qm){const n=await Ro(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function Zm(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(p,h)=>i===1?[h,r-1-p]:i===2?[n-1-p,r-1-h]:[n-1-h,p],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(p=>p[0]),u=o.map(p=>p[1]),l=Math.min(...s),c=Math.min(...u);return{x:l,y:c,width:Math.max(...s)-l,height:Math.max(...u)-c}}function q$(){return ko===null&&(ko=fetch(`${Ze}laurel_gallery.json`).then(async e=>e.ok?R_(await e.json()):[]).catch(()=>[])),ko}function V$(e,t,n,r){return rt("crop",()=>H$(e,t,n,r))}function H$(e,t,n,r){return un(e,t-r,n-r,2*r,2*r)}function un(e,t,n,r,i){return rt("crop",()=>j$(e,t,n,r,i))}function j$(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),c=Math.max(0,u-o),p=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let m=0;m<l;m++){const g=((h+o)*e.width+(m+a))*e.channels,y=(h*l+m)*3;p[y]=e.data[g],p[y+1]=e.data[g+1],p[y+2]=e.data[g+2]}return{width:l,height:c,channels:3,data:p}}function K$(){return Mo===null&&(Mo=fetch(`${Ze}token_templates.json`).then(async e=>e.ok?r1(await e.json()):new Map).catch(()=>new Map)),Mo}let Oo=null;function No(){return Oo===null&&(Oo=(async()=>{try{const e=await fetch(`${Ze}token_embed_index.json`);if(!e.ok)return null;const t=d1(await e.json()),n=await ht("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),Oo}const Y$=.92;let zo=null;function Bo(){return zo===null&&(zo=(async()=>{try{return(await fetch(`${Ze}guild_classifier.onnx`,{method:"HEAD"})).ok?await ht("guild_classifier.onnx"):null}catch{return null}})()),zo}let Po=null;function Do(){return Po===null&&(Po=(async()=>{try{return(await fetch(`${Ze}laurel_digit.onnx`,{method:"HEAD"})).ok?await ht("laurel_digit.onnx"):null}catch{return null}})()),Po}let Uo=null,Lo=null;function Fo(){return Lo===null&&(Lo=(async()=>{try{return(await fetch(`${Ze}banner_class.onnx`,{method:"HEAD"})).ok?await ht("banner_class.onnx"):null}catch{return null}})()),Lo}async function X$(e,t){if(t.length===0)return t;const n=await Fo();if(n===null)return t;const r=[];for(const i of t)try{const a=G1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=un(e,a.x,a.y,a.w,a.h),s=W1(o),u=await n.run({[n.inputNames[0]]:new Ue("float32",s,[1,3,sn,sn])});q1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function Go(){return Uo===null&&(Uo=(async()=>{try{return(await fetch(`${Ze}laurel_filter.onnx`,{method:"HEAD"})).ok?await ht("laurel_filter.onnx"):null}catch{return null}})()),Uo}async function Q$(e,t,n){let[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;if(s<Gn){const w=Math.floor((r+a)/2);r=w-Math.floor(Gn/2),a=w+Math.floor(Gn/2),s=a-r}if(u<Gn){const w=Math.floor((i+o)/2);i=w-Math.floor(Gn/2),o=w+Math.floor(Gn/2),u=o-i}const l=Math.trunc(Rm*s),c=Math.trunc(Rm*u),p=Math.max(0,r-l),h=Math.max(0,i-c),m=Math.min(e.width,a+l),g=Math.min(e.height,o+c),y=un(e,p,h,m-p,g-h);if(y.width<=0||y.height<=0)return null;try{const w=P1(y),b=await n.run({[n.inputNames[0]]:new Ue("float32",w,[1,3,on,on])});return D1(b[n.outputNames[0]].data)}catch{return null}}let Wo=null;function qo(){return Wo===null&&(Wo=(async()=>{try{return(await fetch(`${Ze}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ht("coin_filter_cnn.onnx"):null}catch{return null}})()),Wo}let Vo=null;function Ho(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Ze}coin_denom.onnx`,{method:"HEAD"})).ok?await ht("coin_denom.onnx"):null}catch{return null}})()),Vo}async function Z$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Pm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*gt*gt);r.forEach((u,l)=>i.set(u,l*u.length));const o=(await n.run({[n.inputNames[0]]:new Ue("float32",i,[t.length,3,gt,gt])}))[n.outputNames[0]].data,s=Kr.length;return t.map((u,l)=>l2(o.subarray(l*s,l*s+s)))}catch{return null}}async function J$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=Pm(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const c=new Float32Array(t.length*3*gt*gt);l.forEach((m,g)=>c.set(m,g*m.length));const h=(await n.run({[n.inputNames[0]]:new Ue("float32",c,[t.length,3,gt,gt])}))[n.outputNames[0]].data;return t.map((m,g)=>s2(h.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let jo=null;function Ko(){return jo===null&&(jo=(async()=>{try{return(await fetch(`${Ze}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ht("tuck_classifier.onnx"):null}catch{return null}})()),jo}const Jm=.1;let Yo=null;function ni(){return Yo===null&&(Yo=(async()=>{try{return(await fetch(`${Ze}track_band_brut.onnx`,{method:"HEAD"})).ok?await ht("track_band_brut.onnx"):null}catch{return null}})()),Yo}async function eg(e,t,n){try{const r=Wr(t,1280,Ow(t.width,t.height,n)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return Zf(a.data,a.dims[1]??0,a.dims[2]??0,r.params,Jm)}catch{return[]}}let Xo=null;const ex=.4;function tx(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function nx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||tx(a,u)>=ex)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function Qo(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Ze}tuck_box.onnx`,{method:"HEAD"})).ok?await ht("tuck_box.onnx"):null}catch{return null}})()),Xo}let Zo=null;function Jo(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${Ze}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await rx(),await ht("wonder_classifier.onnx")):null}catch{return null}})()),Zo}let tg=!1;async function rx(){if(tg)return;const e=await(await fetch(`${Ze}wonder_classifier_seuil.json`)).json();x1(Number(e.seuil)),v1(e.classes),tg=!0}let ng=null,rg=null;async function ix(e){var p;ng??(ng=ht("wonder_obb.onnx"));const t=await ng;if(t===null)return null;const n=await Ao();if(n===null)return null;rg=n;const{tensor:r,params:i}=Wr(e,1024),o=(await t.run({[t.inputNames[0]]:new Ue("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],s=o.dims[o.dims.length-1],u=o.data;let l=0;for(let h=0;h<s;h++){const m=u[4*s+h];m>l&&(l=m)}const c=h$(n,u,s,i);return ut.set("wonder_obb.onnx",`${ut.get("wonder_obb.onnx")??"?"} | dims=${o.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(p=c[0])!=null&&p.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(h=>h.quad.map(m=>[m[0],m[1]]))}const ax={wonderRef:F$,tuckClassifier:Ko,tuckBoxClassifier:Qo,obbQuads:ix,redresserQuad:(e,t)=>g$(rg,e,t)};async function ox(e,t){const n=await No();if(n!==null)try{const r=h1(e),i=new Ue("float32",r,[4,3,an,an]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=m1(n.index,f1(o));return u<Y$?["",-1]:[s,u]}catch{}return s1(e,t)}const ig=new WeakMap;async function ri(e){const t=ig.get(e);if(t!==void 0)return await t;const n=Je("decodage image",()=>sx(e));return ig.set(e,n),await n}async function sx(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",a=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${a}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const ag=new WeakMap;async function Dt(e,t){let n=ag.get(t);n===void 0&&(n=new Map,ag.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=ux(e,t);return n.set(e,i),await i}async function ux(e,t){const n=at[e],r=performance.now(),{tensor:i,params:a}=Wr(t,n.input);So+=performance.now()-r;const o=async()=>{const s=await O$(e),u={[s.inputNames[0]]:new Ue("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await s.run(u),p=performance.now()-l;pr+=p,vo(p),hr+=1;const h=c[s.outputNames[0]];return{rows:new Float32Array(h.data),params:a}};try{return await o()}catch(s){if(ei.has(e))throw s;return ei.add(e),Jr.delete(e),await o()}}const lx=6,cx=4,dx=5,px=2;async function hx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ri(e),r=await Dt("banner",n),i=qr(r.rows,r.params,at.banner.conf);if(t.banners=i.length,i.length>=lx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Dt("laurel",n),o=ao(a.rows,a.params,at.laurel.conf);if(t.laurels=o.length,o.length>=cx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await Dt("coin",n),u=Xf(s.rows,s.params,at.coin.conf);return t.coins=u.length,u.length>=dx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=px?{...t,kind:"board",confidence:.4}:t}function fx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function og(e,t,n,r,i,a,o,s){let u=0;r(`${i}: card banners…`,.04);const l=await Dt("banner",e);let c=qr(l.rows,l.params,at.banner.conf);c=await X$(e,c),r(`${i}: progress tokens…`,.08);let p=[];const h=await ni();h!==null&&(p=await eg(h,e,c)),p.length>0&&c.length>0&&(c=c.filter(Y=>{const J=Y.box[0]+Y.box[2]/2,ae=Y.box[1]+Y.box[3]/2;return!p.some(([pe,Ae,me,ie])=>Math.min(pe,me)<=J&&J<=Math.max(pe,me)&&Math.min(Ae,ie)<=ae&&ae<=Math.max(Ae,ie))}));const m=await Dt("token",e),g=await K$(),y=[],w=[];for(const Y of Vw(m.rows,m.params,at.token.conf)){if(w.push({cx:Y.cx,cy:Y.cy,r:Y.r}),p.some(([pe,Ae,me,ie])=>Y.cx>=pe&&Y.cx<=me&&Y.cy>=Ae&&Y.cy<=ie))continue;const[J,ae]=await ox(im(e,Y),g);J===""&&ae<0?w.pop():J===""?u+=1:!y.some(pe=>pe.id===J)&&!s.some(pe=>pe.id===J)&&y.push({id:J,center:[Y.cx,Y.cy],radius:Y.r,confidence:Math.round(ae*1e4)/1e4})}r(`${i}: coins…`,.14);const b=await Dt("coin",e),x=Xf(b.rows,b.params,at.coin.conf).filter(Y=>!w.some(J=>(Y.cx-J.cx)**2+(Y.cy-J.cy)**2<=Y.r*Y.r)),T=await qo(),v=T!==null?await J$(e,x,T):null,E=(v!==null?x.filter((Y,J)=>v[J]>=Bm).map(Y=>Y.r):[]).sort((Y,J)=>Y-J),M=E.length>0?E.length%2===1?E[(E.length-1)/2]:(E[E.length/2-1]+E[E.length/2])/2:null,[k,S]=o2,A=x.map((Y,J)=>{const ae=v!==null?v[J]:null;return ae===null||ae>=Bm?"keep":M!==null&&M>0&&Y.r/M>=k&&Y.r/M<=S?"suspect":"drop"}),z=x.filter((Y,J)=>A[J]==="keep"),X=y_(e,z),G=await Ho(),V=G!==null?await Z$(e,z,G):null,O=c2(X,V??X.map(()=>null));O.map(Y=>Y.value);const F=[];let K=0;if(x.forEach((Y,J)=>{if(A[J]==="drop")return;if(A[J]==="suspect"){const pe=v[J];F.push({denomination:null,center:[Y.cx,Y.cy],radius:Y.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${pe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const ae=O[K++];F.push({denomination:ae.value,center:[Y.cx,Y.cy],radius:Y.r,denomSource:ae.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const Y=F.map(ae=>ae.radius).sort((ae,pe)=>ae-pe),J=Y.length%2===1?Y[(Y.length-1)/2]:(Y[Y.length/2-1]+Y[Y.length/2])/2;if(J>0)for(const ae of F)ae.radius/J>2&&(ae.suspect=!0,ae.suspectReason=`radius ${ae.radius}px is ${(ae.radius/J).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let Y=0;Y<F.length;Y+=1)for(let J=Y+1;J<F.length;J+=1){const ae=F[Y],pe=F[J],Ae=Math.hypot(ae.center[0]-pe.center[0],ae.center[1]-pe.center[1]);if(Ae<1.1*Math.min(ae.radius,pe.radius))for(const me of[ae,pe])me.suspect||(me.suspect=!0,me.suspectReason=`almost concentric with another coin (${Ae.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Q=[],ue=[],L=[],P=Date.now()+L$;let R=null;const N=[];let D=!1;const U={n:0},j=await Jo();if(j!==null&&(R=await Je("opencv.js (chargement)",()=>Ao()),R!==null)){r(`${i}: identifying wonders…`,.35);const Y=await Je("identifyWondersByClassifier",()=>M$(ax,R,e,j,P,c,[],U));for(const J of Y)Q.some(ae=>ae.id===J.obj.id)||o.some(ae=>ae.id===J.obj.id)||(Q.push(J.obj),N.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),ue.push(J.zone),L.push({quad:J.quad,region:J.region}));D=Y.length>0}if(!D){const Y=sb(N.map(J=>({built:J.obj.builtWithCardUnderneath,edgeScores:J.edgeScores,zone:J.zone})),c.map(J=>[J.box[0]+J.box[2]/2,J.box[1]+J.box[3]/2]));for(const J of Y){const ae=N[J];ae.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${ae.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(c.length>0){const J=new Set(Y);for(let ae=0;ae<N.length;ae++){const pe=N[ae];if(J.has(ae)||!pe.obj.builtWithCardUnderneath)continue;const Ae=pe.obj.tuckRegion;if(Ae===void 0)continue;if(!c.some(ie=>{const Ie=ie.box[0]+ie.box[2]/2,Oe=ie.box[1]+ie.box[3]/2;return Ie>=Ae.x&&Ie<=Ae.x+Ae.width&&Oe>=Ae.y&&Oe<=Ae.y+Ae.height})){const ie=pe.obj;ie.builtWithCardUnderneath=!1,ie.suspect=!0,ie.suspectReason="built-unconfirmed"}}}}const re=async()=>{let Y=Q.slice();const J=[];c.forEach((ie,Ie)=>{const Oe=ie.box[0]+ie.box[2]/2,ee=ie.box[1]+ie.box[3]/2;ue.some(de=>Oe>=de.x0&&Oe<=de.x1&&ee>=de.y0&&ee<=de.y1)||J.push(Ie)});const ae=[],pe=[];Y.forEach((ie,Ie)=>{const Oe=ie.boundingBox;Oe&&Oe.width>0&&(ae.push(Ie),pe.push([Oe.x,Oe.y,Oe.width,Oe.height]))});const Ae=ie=>{const Ie=[];return ie.forEach((Oe,ee)=>{const de=Oe.box[0]+Oe.box[2]/2,fe=Oe.box[1]+Oe.box[3]/2;ue.some(Te=>de>=Te.x0&&de<=Te.x1&&fe>=Te.y0&&fe<=Te.y1)||Ie.push(ee)}),Ie};let me=Um(c.map(ie=>ie.box),J,pe,p,[e.width,e.height]);try{const ie=G2(e.width,e.height,c.map(Ie=>Ie.box),me.hulls.map(([Ie,Oe],ee)=>({owner:Ie,poly:Oe,n:me.hullBoxCounts[ee]??0})),pe);if(ie.length>0){const Ie=go(c.map(ee=>ee.box)),Oe=[];for(const ee of ie){const[de,fe,Te,$e]=ee,_e=un(e,de,fe,Te-de,$e-fe);if(_e.width<=0||_e.height<=0)continue;const Me=await Dt("banner",_e);for(const ye of qr(Me.rows,Me.params,at.banner.conf)){const tt=W2(ye.box,ee,Ie);tt&&Oe.push({...ye,box:tt})}}if(Oe.length>0){const ee=em([...c,...Oe]);ee.length>c.length&&(c=ee,me=Um(c.map(de=>de.box),Ae(c),pe,p,[e.width,e.height]))}}}catch(ie){console.warn("[#129 city-rescan] skipped:",ie)}return a!==void 0&&(a.hulls=me.hulls.map(([ie,Ie],Oe)=>({owner:ie,poly:Ie,n:me.hullBoxCounts[Oe]??0})),a.bandBoxes=p,a.image=e),{split:me,photoWonders:Y,splitWonderIdx:ae}};let te=null;try{te=await re()}catch(Y){console.warn("[city-split] failed (side unfiltered):",Y)}return{bannerDetections:c,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:p,bandSession:h,wonderFootprints:ue,wonderTuckGates:L,photoTokensList:y,geo:te,cv:R,regDeadline:P,unidentifiedTokens:u}}async function sg(e,t,n,r,i,a,o,s,u,l){let c=e.bannerDetections,p=e.cv;const{photoCoins:h,photoTokenDiscs:m,discs:g,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:T,geo:v,regDeadline:E}=e,M={},k=[],S=[];let A=0;const z=[];let X=0,G=0;const V=[],O=[],F=[],K=t==="opponent";let Q=(ee,de)=>!K,ue=(ee,de)=>!K,L=null;if(v!==null)try{const{split:ee,photoWonders:de,splitWonderIdx:fe}=v;Q=(Me,ye)=>ee.pointOwner(Me,ye)==="opponent"===K;const Te=K?"opponent":"player";if(ue=(Me,ye)=>ee.pointOwner(Me,ye)===Te,n){const Me=ee;L=ye=>new Set(k2(ye,Me,Te,y))}c=c.filter((Me,ye)=>ee.bannerOwner[ye]==="opponent"===K);const $e=de.map(()=>"player");fe.forEach((Me,ye)=>{$e[Me]=ee.wonderOwner[ye]});const _e=[];de.forEach((Me,ye)=>{$e[ye]==="opponent"===K&&_e.push(Me)});for(const Me of _e)O.push(Me);b.length=0;for(const Me of _e){const ye=Me.tuckRegion??Me.boundingBox;ye&&b.push({x0:ye.x,y0:ye.y,x1:ye.x+ye.width,y1:ye.y+ye.height})}for(const Me of T)Q(Me.center[0],Me.center[1])&&F.push(Me)}catch(ee){console.warn("[city-split] failed (side unfiltered):",ee)}const P=L!==null?L(h):null;for(const ee of h)(P!==null?!P.has(ee):!ue(ee.center[0],ee.center[1]))||(A+=ee.denomination??0,S.push(ee));const R=new Set,N=[],D=go(c.map(ee=>ee.box));x.forEach((ee,de)=>{if(ee.quad===null||ee.region===null){const _e=b[de];_e&&N.push(_e);return}const fe=ee.region,Te=[];c.forEach((_e,Me)=>{const ye=_e.box[0]+_e.box[2]/2,tt=_e.box[1]+_e.box[3]/2;ye>=fe.x&&ye<=fe.x+fe.width&&tt>=fe.y&&tt<=fe.y+fe.height&&Te.push([Me,_e.box])});const $e=a2(ee.quad,Te,D);$e!==null&&R.add($e)});let U=[],j=0;c.forEach((ee,de)=>{if(R.has(de)){G+=1,j+=1;return}const fe=ee.box[0]+ee.box[2]/2,Te=ee.box[1]+ee.box[3]/2;if(N.some($e=>fe>=$e.x0&&fe<=$e.x1&&Te>=$e.y0&&Te<=$e.y1)){G+=1,j+=1;return}U.push(ee)});const re=Z1(U,j,y,a.width,a.height);U=re.kept;for(const ee of U)M[ee.family]=(M[ee.family]??0)+1,X+=1;const te=t_(U),Y=new Set(te.map(ee=>ee.box.join(",")));for(const ee of r_(U))Y.has(ee.box.join(","))||(te.push(ee),Y.add(ee.box.join(",")));for(const ee of re.suspects)Y.has(ee.box.join(","))||(te.push(ee),Y.add(ee.box.join(",")));for(const ee of te)V.push(ee);if(U.some(ee=>ee.family==="guild")){const ee=await Bo();if(ee!==null){s(`${u}: identifying guilds…`,.75);for(const de of U)if(de.family==="guild")try{const[fe,Te,$e,_e]=de.box,Me=un(a,fe,Te,$e,_e),ye=w1(Me),tt={[ee.inputNames[0]]:new Ue("float32",ye,[1,3,Fn,Fn])},Ve=(await ee.run(tt))[ee.outputNames[0]].data,{id:qe,prob:ft}=_1(Ve);qe!==""&&!z.some(kt=>kt.id===qe)&&!l.some(kt=>kt.id===qe)&&z.push({id:qe,boundingBox:{x:fe,y:Te,width:$e,height:_e},confidence:Math.round(ft*1e4)/1e4})}catch(fe){console.warn("[guild-cls] failed:",fe)}}else if(Date.now()<E)try{const de=p??await Ao();if(de!==null){const fe=await G$();if(fe.size>0){s(`${u}: identifying guilds…`,.75);const Te=await W$();for(const $e of jb(de,a,fe,E,Te))!z.some(_e=>_e.id===$e.id)&&!l.some(_e=>_e.id===$e.id)&&z.push($e)}}}catch(de){console.warn("[guilds-reg] failed:",de)}}s(`${u}: laurels…`,.8);const ae=await Je("laurier: chargement galerie gabarits",()=>q$()),pe=[];for(const ee of[0]){const de=ee===0?a:jt(a,ee),fe=await Je("laurier: passe PLEINE photo",()=>Dt("laurel",de));for(const[Te,$e,_e,Me]of rt("laurier: decodage YOLO (JS)",()=>ao(fe.rows,fe.params,at.laurel.conf))){const ye=Zm({x:Te,y:$e,width:_e-Te,height:Me-$e},ee,a.width,a.height);pe.push([ye.x,ye.y,ye.x+ye.width,ye.y+ye.height])}}let Ae=rt("laurier: dedup",()=>Qf(pe));const me=[];try{const ee=J2(c.map(de=>de.box),[a.width,a.height]);ut.set("_tta.onnx",`total=${_o.total} idDiff=${_o.idDiff} verdictDiff=${_o.verdictDiff}`),ut.set("_marge2.onnx",`total=${Pt.total} pos4=${Pt.positifs4} pos2=${Pt.positifs2} divergent=${Pt.divergent} `+Pt.detail.slice(0,10).join(" | ")),ut.set("_ttaObb.onnx",`total=${Zr.total} memeK=${Zr.memeK} inv=${Zr.memeKInverse} `+Zr.detail.slice(0,12).join(" ")),ut.set("_tuilage.onnx",`groupes=? tuiles=${ee.length} bannieres=${c.length} image=${a.width}x${a.height}`);for(const[de,fe,Te,$e]of ee){const _e=un(a,de,fe,Te-de,$e-fe);if(_e.width<=0||_e.height<=0)continue;const Me=[];for(const ye of[0]){const tt=ye===0?_e:jt(_e,ye),Ye=await Je("laurier: passe par TUILE (#113)",()=>Dt("laurel",tt));for(const[Ve,qe,ft,kt]of rt("laurier: decodage YOLO (JS)",()=>ao(Ye.rows,Ye.params,at.laurel.conf))){const ot=Zm({x:Ve,y:qe,width:ft-Ve,height:kt-qe},ye,_e.width,_e.height);Me.push([ot.x,ot.y,ot.x+ot.width,ot.y+ot.height])}}if(Ae=e$(Ae,Qf(Me),[de,fe]),w!==null)try{const ye=await Je("laurier: bande de piste sur tuile (#114)",async()=>{const Ve=Wr(_e,1280,ur);return{sortie:await w.run({[w.inputNames[0]]:new Ue("float32",Ve.tensor,[1,3,1280,1280])}),params:Ve.params}}),tt={params:ye.params},Ye=ye.sortie[w.outputNames[0]];for(const[Ve,qe,ft,kt]of Zf(Ye.data,Ye.dims[1]??0,Ye.dims[2]??0,tt.params,Jm))me.push([Ve+de,qe+fe,ft+de,kt+fe])}catch{}}}catch(ee){console.warn("[laurel-containers] failed:",ee)}const ie=[...y,...me];Ae=Ae.filter(([ee,de,fe,Te])=>!r$((ee+fe)/2,(de+Te)/2,ie,c.map($e=>$e.box)));const[Ie,Oe]=await Je("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([Do(),Go()]));for(const[ee,de,fe,Te]of Ae){const $e=Math.trunc((ee+fe)/2),_e=Math.trunc((de+Te)/2);if([...m,...g].some(We=>($e-We.cx)**2+(_e-We.cy)**2<=We.r*We.r)||!Q($e,_e))continue;if(Oe!==null){const We=await Je("laurier: filtre FP (#49)",()=>Q$(a,[Math.trunc(ee),Math.trunc(de),Math.trunc(fe),Math.trunc(Te)],Oe));if(We!==null&&We>=B1)continue}const ye=Math.min(Math.trunc(fe-ee),Math.trunc(Te-de)),tt=Math.max(6,Math.trunc(Math.max(fe-ee,Te-de)*v_)),Ye=V$(a,$e,_e,tt);let Ve=null,qe=0,ft=!1;if(Ie!==null&&ye>=6){const We=un(a,Math.trunc(ee),Math.trunc(de),Math.trunc(fe-ee),Math.trunc(Te-de));let je=null,yt=0;for(const Ct of[0,1,2,3]){const Xt=Ct===0?We:jt(We,Ct),rs=O1(Xt),is=await Je("laurier: lecture chiffre (CNN)",()=>Ie.run({[Ie.inputNames[0]]:new Ue("float32",rs,[1,3,zt,zt])})),{value:as,prob:oi}=N1(is[Ie.outputNames[0]].data);if(oi>yt&&(je=as,yt=oi),je!==null&&yt>=R1)break}je!==null&&yt>=A1&&(Ve=je,qe=yt)}if(Ve===null&&ye>=6){const We=new Map;for(const je of[0,1,2,3]){const yt=je===0?Ye:jt(Ye,je),[Ct,Xt]=rt("laurier: lecteur GABARITS (repli, JS pur)",()=>P_(yt,ae));Ct!==null&&(We.set(Ct,Math.max(We.get(Ct)??0,Xt)),Xt>qe&&(Ve=Ct,qe=Xt))}Ve!==null&&qe<U$&&(Ve=null),ft=Ve!==null&&[...We.entries()].some(([je,yt])=>je!==Ve&&yt>=qe-.1)}const kt=b.some(We=>$e>=We.x0&&$e<=We.x1&&_e>=We.y0&&_e<=We.y1),ot=[...z,...l].some(We=>{const je=We.boundingBox;return je!==void 0&&$e>=je.x&&$e<=je.x+je.width&&_e>=je.y&&_e<=je.y+je.height});k.push({value:Ve,valueRead:Ve!==null,center:[Math.round((ee+fe)/2),Math.round((de+Te)/2)],boundingBox:{x:Math.trunc(ee),y:Math.trunc(de),width:Math.trunc(fe-ee),height:Math.trunc(Te-de)},confidence:Math.round(qe*1e4)/1e4,excluded:kt||ot,photoIndex:i-1,...ft?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:M,laurels:k,coins:S,coinTotal:A,guilds:z,bannerCount:X,tuckedExcluded:G,bannerSuspects:V,cityWondersKept:O,cityTokensKept:F}}function ug(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function lg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function cg(e,t,n){const{byFamily:r,laurels:i,coins:a,progressTokens:o,wonders:s,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:p,bannerCount:h,tuckedExcluded:m}=e;m>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${m} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const g=r.guild??0;g!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${g} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(T=>T.id).join(", ")+" — confirm in the review."});const y=s.filter(T=>T.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),p>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${p} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(T=>T.id).join(", ")+" — confirm in the review."}),a.length>0){const T=a.filter(E=>E.denomSource==="cnn").length,v=a.length-T;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${c} from ${a.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${a.length} tile(s) — ${T} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=nx(u,s);for(const T of[...i$(s.map(v=>v.id),t),...s$(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:T.message});const b=i.filter(T=>!T.excluded),x=b.filter(T=>T.valueRead);return{...fx(),wonders:s,guilds:w,progressTokens:o,laurels:i,cardVictoryPoints:{value:x.reduce((T,v)=>T+(v.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:m,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:a.length>0?.5:0,source:a.length===0?"none":a.some(T=>T.denomSource==="cnn")?"local-cnn":"local-colour",coins:a}}}async function mx(e,t,n,r,i=()=>{},a="player",o,s=!1){const u=ug();let l=0;for(const c of e){l+=1;const p=`${t} photo ${l}/${e.length}`;r(`${p}: reading pixels…`,.01);const h=await ri(c),m=await og(h,n,t,r,p,o,u.wonders,u.progressTokens);u.unidentifiedTokens+=m.unidentifiedTokens;const g=await sg(m,a,s,t,l,h,n,r,p,u.guilds);lg(u,g),i()}return cg(u,t,n)}const Mt=1280,gx=.3,ii=9;let es=null;function ai(){return es===null&&(es=(async()=>{try{return(await fetch(`${Ze}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ht("pawn_ends_brut.onnx"):null}catch{return null}})()),es}function yx(e){const t=Mt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),a=i.getContext("2d",{willReadFrequently:!0}),o=Iw(e.data,e.width,e.height,e.channels);a.putImageData(new ImageData(o,e.width,e.height),0,0);const u=new OffscreenCanvas(Mt,Mt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Mt,Mt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Mt,Mt),c=Mt*Mt,p=new Float32Array(3*c);for(let h=0;h<c;h+=1)p[h]=l[h*4]/255,p[c+h]=l[h*4+1]/255,p[2*c+h]=l[h*4+2]/255;return{tensor:p,r:t}}const Le={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null,classes:new Set};function wx(){Le.appels=0,Le.inferences=0,Le.bandes=0,Le.detail=[],Le.premiereGagne=null,Le.classes=new Set}function dg(){ut.set("_pion.onnx",`appels=${Le.appels} inferences=${Le.inferences} bandes=${Le.bandes} premiereGagne=${Le.premiereGagne??"n/a"} classes=${Le.classes.size===0?"aucune":[...Le.classes].sort().join(",")}${_x()} | ${Le.detail.join(" ")}`)}function _x(){const e=Le.classes,t=(e.has(1)?1:0)+(e.has(2)?1:0);return e.size===0?" (piste illisible)":e.has(0)&&t===2?" (tout vu)":!e.has(0)&&t===2?" (PION manquant, geometrie disponible)":e.has(0)&&t===1?" (PION A LA CAPITALE ? il masque un medaillon — #82)":e.has(0)&&t===0?" (pion seul, aucun medaillon)":" (un seul medaillon, pas de pion)"}async function ts(e,t){Le.inferences+=1;const{tensor:n,r}=rt("pion: mise en tenseur 1280x1280",()=>yx(t)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",n,[1,3,Mt,Mt])}))[e.outputNames[0]],o=a.data,s=a.dims[2]??0,u=(a.dims[1]??4)-4,l=rt("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let p=0;p<u;p+=1){const h=(4+p)*s;let m=-1,g=gx;for(let y=0;y<s;y+=1){const w=o[h+y];w>=g&&(g=w,m=y)}if(m>=0){const y=(o[m]+o[2*s+m])/2/r,w=(o[s+m]+o[3*s+m])/2/r,b=(o[2*s+m]-o[m])/r,x=(o[3*s+m]-o[s+m])/r;c.set(p,{conf:g,cx:y,cy:w,diam:(b+x)/2})}}return c});for(const c of l.keys())Le.classes.add(c);return l}async function ns(e,t,n){const r=Le.inferences,i=`a${Le.appels}`;Le.appels+=1;const a=await Je("pion: UNE passe (les 4 rotations)",()=>bx(e,t,n));return Le.detail.push(`${i}:${Le.inferences-r}inf conf=${a===null?"rien":a.confidence.toFixed(2)}`),dg(),a}async function bx(e,t,n){let r=null;const i=1.8;for(const v of n??[0,1,2,3]){const E=v===0?t:rt("pion: rotation de l'image",()=>jt(t,v)),M=await ts(e,E);if(M.has(0)&&M.has(1)&&M.has(2)){const k=M.get(0).conf+M.get(1).conf+M.get(2).conf;if((r===null||k>r.score)&&(r={score:k,det:M,k:v}),k>=i)break}}if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:jt(t,v),M=await ts(e,E);if(M.has(1)&&M.has(2)){const k=M.get(1).conf+M.get(2).conf;(r===null||k>r.score)&&(r={score:k,det:M,k:v})}}let a=!1;if(r===null)for(const v of n??[0,1,2,3]){const E=v===0?t:jt(t,v),M=await ts(e,E),k=M.get(0);if(k===void 0)continue;const S=M.has(1)&&!M.has(2)?1:!M.has(1)&&M.has(2)?2:null;if(S===null)continue;const A=M.get(S),z=Fw([k.cx,k.cy],[A.cx,A.cy],A.diam);if(z===null)continue;const X=k.conf+A.conf;if(r===null||X>r.score){const G=new Map(M);G.set(S===2?1:2,{conf:A.conf,cx:z[0],cy:z[1],diam:A.diam}),r={score:X,det:G,k:v},a=!0}}if(r===null)return null;const o=!r.det.has(0),s=r.det.get(0)??{conf:0,cx:0,cy:0},u=r.det.get(1),l=r.det.get(2),c=l.cx-u.cx,p=l.cy-u.cy,h=(u.cx+l.cx)/2,m=(u.cy+l.cy)/2,g=c*c+p*p;if(g<=0)return null;const y=((s.cx-h)*c+(s.cy-m)*p)/g*(2*ii),w=o?0:Math.min(ii,Math.max(-ii,it(y))),b=o?0:Math.min(s.conf,u.conf,l.conf),x=(v,E)=>{const M=r.k%4;return M===0?[v,E]:M===1?[E,t.height-1-v]:M===2?[t.width-1-v,t.height-1-E]:[t.width-1-E,v]},T=[u,l].map(v=>{const[E,M]=x(v.cx,v.cy);return[it(E),it(M)]});return{position:w,confidence:Math.round(b*1e4)/1e4,ends:T,k:r.k,found:!o,endOccluded:a}}async function pg(e,t,n){let r=null,i=null;for(const a of n){const o=Nw(t.width,t.height,a);if(o===null)continue;const s=un(t,o.x,o.y,o.width,o.height);if(s.width===0||s.height===0)continue;Le.bandes+=1;const u=await ns(e,s,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Le.premiereGagne===null?Le.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Le.premiereGagne=!1),dg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+o.x,c+o.y])})}return r}function hg(){const e=[No,Bo,Do,Fo,Go,qo,Ho,Ko,ni,Qo,Jo,ai];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function $x(e,t){hg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(g,y=0)=>{t(g,i>0?Math.min(.99,(a+y)/i):void 0)},s=()=>{a+=1};for(const g of["left","right"]){const y=e[g];y.length>0&&(r[g]=await mx(y,g,n,o,s))}let u=null,l=null;if(e.both!==void 0){const g={},y=await ri(e.both),w=await og(y,n,"both",o,"both photo 1/1",g,[],[]),b=async(v,E)=>{const M=ug();return M.unidentifiedTokens+=w.unidentifiedTokens,lg(M,await sg(w,v,!0,E,1,y,n,o,`${E} photo 1/1`,M.guilds)),s(),cg(M,E,n)},x={player:await b("player","left"),opponent:await b("opponent","right")};if(o("military pawn…",.95),g.image!==void 0)try{const v=await ai();v!==null&&(g.bandBoxes!==void 0&&g.bandBoxes.length>0&&(u=await pg(v,g.image,g.bandBoxes)),u===null&&(u=await ns(v,g.image)))}catch(v){console.warn("[#125] both-photo pawn read failed:",v)}u!==null&&(l=Pw(u.ends,g.hulls??[],u.position));const T=l!==null&&!l.ambiguous?Dw(l):null;if(T!==null)r.left=x[T.left],r.right=x[T.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`});else{const v=Uw(g.hulls??[]);v!==null?(r.left=x[v.left],r.right=x[v.right],n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: no readable military track, so LEFT and RIGHT were taken from the PHOTO LAYOUT (cities stacked vertically -> the TOP one is left; side by side -> the LEFTMOST one is left). Swap them in the review if the seating is the other way around."})):(r.left=x.player,r.right=x.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: neither the military track nor the photo layout could tell the two cities apart — LEFT and RIGHT are UNDECIDED and must be checked in the review."}))}}{const g={},y={};for(const w of["left","right"]){const b=r[w];b!=null&&(g[w]=b.wonders.map(x=>x.id),y[w]=b.progressTokens.map(x=>x.id))}for(const w of[...a$(g),...o$(y)])n.push({code:"INCONSISTENT_STATE",message:w.message})}let c={conflictPawnPosition:0,found:!1,confidence:0},p=!1;if(e.board!==void 0)try{const g=await ri(e.board),y=await ai();if(y!==null){let w=await ns(y,g);if(w===null){const b=await ni();if(b!==null){const x=await Dt("banner",g),T=qr(x.rows,x.params,at.banner.conf),v=await eg(b,g,T);w=await pg(y,g,v)}}w!==null&&(c={conflictPawnPosition:w.position,found:w.found,confidence:w.confidence},p=w.endOccluded,n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${w.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(g){console.warn("[pawn] on-device read failed:",g)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:u.found,confidence:u.confidence},p=u.endOccluded);if(p&&c.found&&n.push({code:"LOW_CONFIDENCE",message:`The conflict pawn appears to SIT ON its end medallion (the capital), which hides it from the detector: position ${c.conflictPawnPosition} was DEDUCED from the track length, not read end to end. Confirm it — at this distance it decides a military supremacy.`}),!c.found){const g=x=>{var T,v;return Number(((v=(T=x==null?void 0:x.cardCounts)==null?void 0:T.byFamily)==null?void 0:v.military)??0)},y=g(r.left),w=g(r.right),b=Math.abs(y-w);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:b>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${y} military cards and the other ${w}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const h=c.conflictPawnPosition,m=Math.abs(h)>=ii?{type:"military",winner:h>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:m,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(a,o)=>{C$(a);const s=R$()?"Initialisation des modèles de vision…":Ew(a);self.postMessage({id:t,progress:s,...o!==void 0?{fraction:o}:{},...a!==r?{perfPartiel:{providers:Hm(),etapes:Vm(),etapeCourante:s}}:{}}),r=a};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){hg(),await Promise.allSettled([No(),Bo(),Do(),Fo(),Go(),qo(),Ho(),Ko(),ni(),Qo(),Jo(),ai()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),k$(),B$();const a=performance.now(),o=n==="classify"?await hx(e.data.file):await $x(e.data.payload,i);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:Vm(),providers:Hm(),runtime:A$(),inference:z$(),famillesJs:$w(),inferenceParEtape:N$(),totalMs:Math.round(performance.now()-a)}})}catch(a){self.postMessage({id:t,ok:!1,error:String(a)})}})()}})();
