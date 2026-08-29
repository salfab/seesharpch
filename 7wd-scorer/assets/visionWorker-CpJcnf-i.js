var _3=Object.defineProperty;var b3=(Gt,Wt,Cn)=>Wt in Gt?_3(Gt,Wt,{enumerable:!0,configurable:!0,writable:!0,value:Cn}):Gt[Wt]=Cn;var Q0=(Gt,Wt,Cn)=>b3(Gt,typeof Wt!="symbol"?Wt+"":Wt,Cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyNames,ey=Object.prototype.hasOwnProperty,ty=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Z=(e,t)=>()=>(e&&(t=e(e=0)),t),An=(e,t)=>{for(var n in t)Gt(e,n,{get:t[n],enumerable:!0})},ny=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!ey.call(e,i)&&i!==n&&Gt(e,i,{get:()=>t[i],enumerable:!(r=Wt(t,i))||r.enumerable});return e},Vn=e=>ny(Gt({},"__esModule",{value:!0}),e),Hn,Zt,Rn,Ts,Es,Is=Z(()=>{Hn=new Map,Zt=[],Rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Hn.get(e);if(r===void 0)Hn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Zt.indexOf(e);i!==-1&&Zt.splice(i,1);for(let a=0;a<Zt.length;a++)if(Hn.get(Zt[a]).priority<=n){Zt.splice(a,0,e);return}Zt.push(e)}return}throw new TypeError("not a valid backend")},Ts=async e=>{let t=Hn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Es=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Zt:n,i,a=[],o=new Set;for(let u of r){let l=await Ts(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),ry=Z(()=>{Is()}),Ms,iy=Z(()=>{Ms="1.27.0"}),wi,Xe,ks=Z(()=>{iy(),wi="warning",Xe={wasm:{},webgl:{},webgpu:{},versions:{common:Ms},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wi=e}},get logLevel(){return wi}},Object.defineProperty(Xe,"logLevel",{enumerable:!0})}),ze,ay=Z(()=>{ks(),ze=Xe}),Cs,As,oy=Z(()=>{Cs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let d=a*i,p=0,h=d,m=d*2,g=-1;o==="RGBA"?(p=0,h=d,m=d*2,g=d*3):o==="RGB"?(p=0,h=d,m=d*2):o==="RBG"&&(p=0,m=d,h=d*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[p++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],S=(e.data[m++]-l[2])*u[2],v=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+S+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},As=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,g=1,y=2,w=3,b=0,x=p,S=p*2,v=-1;s==="RGBA"?(b=0,x=p,S=p*2,v=p*3):s==="RGB"?(b=0,x=p,S=p*2):s==="RBG"&&(b=0,S=p,x=p*2),r=n.createImageData(i,a);for(let E=0;E<a*i;m+=h,g+=h,y+=h,w+=h,E++)r.data[m]=(e.data[b++]-d[0])*l[0],r.data[g]=(e.data[x++]-d[1])*l[1],r.data[y]=(e.data[S++]-d[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),wr,Rs,Os,Ns,zs,Bs,sy=Z(()=>{bi(),wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,m=1,g=2,y=3,w=0,b=l,x=l*2,S=-1;s==="RGB"&&(p=3,h=0,m=1,g=2,y=-1),u==="RGBA"?S=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,h+=p,g+=p,m+=p,y+=p)d[w++]=(e[h]+o[0])/a[0],d[b++]=(e[m]+o[1])/a[1],d[x++]=(e[g]+o[2])/a[2],S!==-1&&y!==-1&&(d[S++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new lt("float32",d,[1,4,n,r]):new lt("float32",d,[1,3,n,r])},Rs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=h,s.width=m}else s.tensorFormat="RGBA",s.height=h,s.width=m;p.drawImage(e,0,0),o=p.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(r){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=d,s.width=p,t!==void 0){let h=u();h.width=p,h.height=d;let m=l(h);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,m=e.width;return p.drawImage(e,0,0,m,h),o=p.getImageData(0,0,m,h).data,s.height=h,s.width=m,wr(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((d,p)=>{let h=u(),m=l(h);if(!e||!m)return p();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{h.width=g.width,h.height=g.height,m.drawImage(g,0,0,h.width,h.height);let y=m.getImageData(0,0,h.width,h.height);s.height=h.height,s.width=h.width,d(wr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return wr(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Os=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Ns=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},zs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Bs=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),dn,jn,_i,Ps,uy=Z(()=>{dn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),jn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),_i=!1,Ps=()=>{if(!_i){_i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(dn.set("int64",BigInt64Array),jn.set(BigInt64Array,"int64")),t&&(dn.set("uint64",BigUint64Array),jn.set(BigUint64Array,"uint64")),r?(dn.set("float16",n),jn.set(n,"float16")):dn.set("float16",Uint16Array)}}}),Ds,Us,ly=Z(()=>{bi(),Ds=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Us=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,bi=Z(()=>{oy(),sy(),uy(),ly(),lt=class{constructor(e,t,n){Ps();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=dn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=dn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=jn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Ds(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Rs(e,t)}static fromTexture(e,t){return Os(e,t)}static fromGpuBuffer(e,t){return Ns(e,t)}static fromMLTensor(e,t){return zs(e,t)}static fromPinnedBuffer(e,t,n){return Bs(e,t,n)}toDataURL(e){return Cs(this,e)}toImageData(e){return As(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Us(this,e)}}}),Ue,Ls=Z(()=>{bi(),Ue=lt}),_r,$i,Rt,_t,pn,hn,Fs=Z(()=>{ks(),_r=(e,t)=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeStamp(`${e}::ORT::${t}`)},$i=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),_r("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Rt=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||$i("BEGIN",e)},_t=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||$i("END",e)},pn=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.time(`ORT::${e}`)},hn=e=>{(typeof Xe.trace>"u"?!Xe.wasm.trace:!Xe.trace)||console.timeEnd(`ORT::${e}`)}}),Gs,cy=Z(()=>{Is(),Ls(),Fs(),Gs=class Z0{constructor(t){this.handler=t}async run(t,n,r){Rt(),pn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let h=n[p];(h===null||h instanceof Ue)&&(l=!0,o=!1,i[p]=h)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let d=s[l];d instanceof Ue?u[l]=d:u[l]=new Ue(d.type,d.data,d.dims)}return hn("InferenceSession.run"),_t(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Rt(),pn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,h=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(h=t.byteLength-p,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(d,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Es(o),l=await s.createInferenceSessionHandler(a,u);return hn("InferenceSession.create"),_t(),new Z0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),br,dy=Z(()=>{cy(),br=Gs}),py=Z(()=>{}),hy=Z(()=>{}),fy=Z(()=>{}),my=Z(()=>{}),gy={};An(gy,{InferenceSession:()=>br,TRACE:()=>_r,TRACE_EVENT_BEGIN:()=>pn,TRACE_EVENT_END:()=>hn,TRACE_FUNC_BEGIN:()=>Rt,TRACE_FUNC_END:()=>_t,Tensor:()=>Ue,env:()=>ze,registerBackend:()=>Rn});var mt=Z(()=>{ry(),ay(),dy(),Ls(),py(),hy(),Fs(),fy(),my()}),xi=Z(()=>{}),Ws={};An(Ws,{default:()=>qs});var vi,Si,qs,yy=Z(()=>{var e;Tf(),fn(),Ci(),vi="ort-wasm-proxy-worker",Si=((e=globalThis.self)==null?void 0:e.name)===vi,Si&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Oi(r.wasm).then(()=>{qa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Va(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Ur(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ja(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ka(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;Xa(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Za([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Qa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),qs=Si?null:t=>new Worker(t??ct,{type:"module",name:vi})}),Vs={};An(Vs,{default:()=>js});async function Hs(e={}){var Y0,X0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Y0=self.name)==null?void 0:Y0.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:f[0],errors:[]},I=await c(...f);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let z=await Promise.all(C);if(z=z.filter(q=>q),0<z.length)throw Error(z.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let $=t.dd;t.jsepRegisterBuffer=(_,I,C,z)=>$.registerBuffer(_,I,C,z),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,I,C)=>$.createDownloader(_,I,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,I)=>{$.upload(_,I)}}else if(c==="webnn"){let $=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,I)=>$.createMLTensorDownloader(_,I),t.webnnRegisterMLTensor=(_,I,C,z)=>$.registerMLTensor(_,I,C,z),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,I,C,z,q,ne)=>$.registerMLConstant(_,I,C,z,q,t.Xc,ne),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let c=f=>(...$)=>{let _=Lt;return $=f(...$),Lt!=_?new Promise((I,C)=>{ps={resolve:I,reject:C}}):$};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(c,f)=>{throw f},d=self.location.href,p="";if(n||r){try{p=new URL(".",d).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async c=>{if(k(c))return new Promise(($,_)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):_(I.status)},I.onerror=_,I.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var h,m,g,y,w,b,x=console.log.bind(console),S=console.error.bind(console),v=x,E=S,M=!1,k=c=>c.startsWith("file://");function T(){Ye.buffer!=P.buffer&&N()}if(i){let c=function(f){try{var $=f.data,_=$.Sc;if(_==="load"){let I=[];self.onmessage=C=>I.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of I)c(C);self.onmessage=c};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...z)=>{postMessage({Sc:"callHandler",wd:C,args:z})},C=="print"&&(v=t[C]),C=="printErr"&&(E=t[C]));Ye=$.Od,N(),m=$.Pd,re(),gi()}else if(_==="run"){(function(I){var C=(T(),F)[I+52>>>2>>>0];I=(T(),F)[I+56>>>2>>>0],a0(C,C-I),xe(C)})($.Rc),ys($.Rc,0,0,1,0,0),Me(),ls($.Rc),R||(Jg(),R=!0);try{qe($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&li():_&&(E(`worker: received unknown command ${_}`),E($)))}catch(I){throw e0(),I}};var R=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var P,X,W,V,O,F,K,Q,ue,L,B,A=!1;function N(){var c=Ye.buffer;t.HEAP8=P=new Int8Array(c),W=new Int16Array(c),t.HEAPU8=X=new Uint8Array(c),V=new Uint16Array(c),t.HEAP32=O=new Int32Array(c),t.HEAPU32=F=new Uint32Array(c),K=new Float32Array(c),Q=new Float64Array(c),ue=new BigInt64Array(c),L=new BigUint64Array(c)}function D(){A=!0,i?b():Qt.sb()}function U(c){throw E(c="Aborted("+c+")"),M=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),w==null||w(c),c}function j(){return{a:{ma:Nv,gb:Ov,g:kt,J:Ge,f:ns,o:rs,h:is,ha:oi,b:wx,T:_x,Ha:pg,n:bx,$:gg,Xa:yg,Da:wg,Fa:_g,Ya:bg,Va:$g,Oa:xg,Ua:vg,ka:Sg,Ea:Tg,Ba:Eg,Wa:Ig,Ca:Mg,bb:$x,ea:xx,wa:vx,ua:Tx,da:Ix,O:Mx,H:kx,va:Cx,_:Px,xa:Dx,Ra:Ux,za:Fx,Ia:Gx,sa:Wx,fa:qx,Qa:ls,_a:Vx,R:Yx,r:ev,c:ss,hb:tv,y:nv,M:rv,D:iv,l:av,s:Bg,ib:ov,I:sv,S:uv,j:lv,u:cv,q:dv,k:pv,La:hv,Ma:fv,Na:mv,Ja:Lg,Ka:Fg,ta:Gg,db:yv,ab:_v,v:bv,aa:$v,ga:xv,$a:wv,W:vv,Za:Sv,Aa:Tv,F:gv,U:Ev,la:fi,ya:Mv,fb:Iv,eb:kv,Sa:Hg,Ta:jg,Ga:ee,V:Kg,ja:Yg,Pa:Xg,ia:Qg,kb:g3,na:d3,lb:m3,oa:c3,G:t3,e:Dv,t:Bv,w:zv,B:Kv,mb:s3,K:Zv,x:Fv,pa:u3,Y:p3,ba:o3,nb:a3,ob:i3,P:Yv,qa:r3,pb:n3,N:Jv,Z:l3,d:Pv,A:Lv,m:Uv,jb:y3,p:Wv,z:qv,C:Gv,E:Vv,L:Xv,qb:e3,Q:h3,ca:Qv,X:f3,rb:jv,ra:Hv,i:Av,a:Ye,cb:Ie}}}async function re(){function c(_,I){var C=Qt=_.exports;_={};for(let[z,q]of Object.entries(C))typeof q=="function"?(C=Hx(q),_[z]=C):_[z]=q;return Qt=_,Qt=(function(){var z=Qt,q=oe=>be=>oe(be)>>>0,ne=oe=>()=>oe()>>>0;return(z=Object.assign({},z)).tb=q(z.tb),z.Xb=ne(z.Xb),z.Zb=q(z.Zb),z.lc=q(z.lc),z.mc=ne(z.mc),z.qc=q(z.qc),z})(),Te.push(Qt._b),Zg=(_=Qt).tb,Jg=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,mi=_.Xb,Ft=t._free=_.Yb,mr=t._malloc=_.Zb,ys=_.ac,e0=_.bc,t0=_.cc,n0=_.dc,ws=_.ec,r0=_.fc,i0=_.gc,Se=_.hc,gr=_.ic,a0=_.jc,xe=_.kc,_s=_.lc,ve=_.mc,o0=_.nc,bs=_.oc,s0=_.pc,u0=_.qc,l0=_.rc,$s=_.sc,c0=_.tc,d0=_.uc,p0=_.vc,h0=_.wc,f0=_.xc,m0=_.yc,g0=_.zc,y0=_.Ac,w0=_.Bc,_0=_.Cc,b0=_.Dc,$0=_.Ec,x0=_.Fc,v0=_.Gc,S0=_.Hc,T0=_.Ic,E0=_.Jc,I0=_.Kc,M0=_.Lc,k0=_.Mc,C0=_.Nc,A0=_.Pc,R0=_.Qc,O0=_.$c,N0=_.ad,z0=_.fd,B0=_.jd,P0=_.kd,D0=_.ld,U0=_.md,L0=_.nd,F0=_.od,G0=_.pd,W0=_.qd,q0=_.vd,V0=_.Td,H0=_.Ud,j0=_.Vd,K0=_.Wd,m=I,Qt}var f,$=j();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(I,C)=>{_(c(I,C))})}):i?c(new WebAssembly.Instance(m,j()),m):(B??(B=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(_){var I=B;if(!h&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,q){try{var ne=await(async function(oe){if(!h)try{var be=await s(oe);return new Uint8Array(be)}catch{}if(oe==B&&h)oe=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(z);return await WebAssembly.instantiate(ne,q)}catch(oe){E(`failed to asynchronously prepare wasm: ${oe}`),U(oe)}})(I,_)})($),c(f.instance,f.module))}class te{constructor(f){Q0(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var Y=c=>{c.terminate(),c.onmessage=()=>{}},J=[],ae=0,pe=null,Ae=c=>{de.length==0&&(tt(),ye(de[0]));var f=de.pop();if(!f)return 6;fe.push(f),$e[c.Rc]=f,f.Rc=c.Rc;var $={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage($,c.rd),0},me=0,ie=(c,f,...$)=>{var _,I=16*$.length,C=ve(),z=_s(I),q=z>>>3;for(_ of $)typeof _=="bigint"?((T(),ue)[q++>>>0]=1n,(T(),ue)[q++>>>0]=_):((T(),ue)[q++>>>0]=0n,(T(),Q)[q++>>>0]=_);return c=t0(c,0,I,z,f),xe(C),c};function Ie(c){if(i)return ie(0,1,c);if(g=c,!(0<me)){for(var f of fe)Y(f);for(f of de)Y(f);de=[],fe=[],$e={},M=!0}l(0,new te(c))}function Oe(c){if(i)return ie(1,0,c);ee(c)}var ee=c=>{if(g=c,i)throw Oe(c),"unwind";Ie(c)},de=[],fe=[],Te=[],$e={},_e=c=>{var f=c.Rc;delete $e[f],de.push(c),fe.splice(fe.indexOf(c),1),c.Rc=0,n0(f)};function Me(){Te.forEach(c=>c())}var ye=c=>new Promise(f=>{c.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=mi()){var z=$e[C.Zc];z?z.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?li():I==="spawnThread"?Ae(C):I==="cleanupThread"?ui(()=>{_e($e[C.Nd])}):I==="loaded"?(c.loaded=!0,f(c)):C.target==="setimmediate"?c.postMessage(C):I==="uncaughtException"?c.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&E(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);c.postMessage({Sc:"load",xd:_,Od:Ye,Pd:m})});function tt(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});de.push(c)}var Ye,qe=(c,f)=>{me=0,c=$s(c,f),0<me?g=c:ws(c)},We=[],ft=0;function kt(c){var f=new Ct(c>>>=0);return(T(),P)[f.Tc+12>>>0]==0&&(je(f,!0),ft--),yt(f,!1),We.push(f),u0(c)}var ot=0,Ge=()=>{Se(0,0);var c=We.pop();o0(c.cd),ot=0};function je(c,f){f=f?1:0,(T(),P)[c.Tc+12>>>0]=f}function yt(c,f){f=f?1:0,(T(),P)[c.Tc+13>>>0]=f}class Ct{constructor(f){this.cd=f,this.Tc=f-24}}var Yt=c=>{var f=ot;if(!f)return gr(0),0;var $=new Ct(f);(T(),F)[$.Tc+16>>>2>>>0]=f;var _=(T(),F)[$.Tc+4>>>2>>>0];if(!_)return gr(0),f;for(var I of c){if(I===0||I===_)break;if(s0(I,_,$.Tc+16))return gr(I),f}return gr(_),f};function ns(){return Yt([])}function rs(c){return Yt([c>>>0])}function is(c,f,$,_){return Yt([c>>>0,f>>>0,$>>>0,_>>>0])}var oi=()=>{var c=We.pop();c||U("no exception to throw");var f=c.cd;throw(T(),P)[c.Tc+13>>>0]==0&&(We.push(c),yt(c,!0),je(c,!1),ft++),bs(f),ot=f};function wx(c,f,$){var _=new Ct(c>>>=0);throw f>>>=0,$>>>=0,(T(),F)[_.Tc+16>>>2>>>0]=0,(T(),F)[_.Tc+4>>>2>>>0]=f,(T(),F)[_.Tc+8>>>2>>>0]=$,bs(c),ft++,ot=c}var _x=()=>ft;function dg(c,f,$,_){return i?ie(2,1,c,f,$,_):pg(c,f,$,_)}function pg(c,f,$,_){if(c>>>=0,f>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?dg(c,f,$,_):(c={Ld:$,Rc:c,bd:_,rd:I},i?(c.Sc="spawnThread",postMessage(c,I),0):Ae(c))}function bx(c){throw ot||(ot=c>>>0),ot}var hg=globalThis.TextDecoder&&new TextDecoder,fg=(c,f,$,_)=>{if($=f+$,_)return $;for(;c[f]&&!(f>=$);)++f;return f},mg=(c,f=0,$,_)=>{if(16<($=fg(c,f>>>=0,$,_))-f&&c.buffer&&hg)return hg.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,$):c.slice(f,$));for(_="";f<$;){var I=c[f++];if(128&I){var C=63&c[f++];if((224&I)==192)_+=String.fromCharCode((31&I)<<6|C);else{var z=63&c[f++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|z:(7&I)<<18|C<<12|z<<6|63&c[f++])?_+=String.fromCharCode(I):(I-=65536,_+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else _+=String.fromCharCode(I)}return _},Ve=(c,f,$)=>(c>>>=0)?mg((T(),X),c,f,$):"";function gg(c,f,$){return i?ie(3,1,c,f,$):0}function yg(c,f){if(i)return ie(4,1,c,f)}function wg(c,f){if(i)return ie(5,1,c,f)}function _g(c,f,$){if(i)return ie(6,1,c,f,$)}function bg(c,f,$){return i?ie(7,1,c,f,$):0}function $g(c,f){if(i)return ie(8,1,c,f)}function xg(c,f,$){if(i)return ie(9,1,c,f,$)}function vg(c,f,$,_){if(i)return ie(10,1,c,f,$,_)}function Sg(c,f,$,_){if(i)return ie(11,1,c,f,$,_)}function Tg(c,f,$,_){if(i)return ie(12,1,c,f,$,_)}function Eg(c){if(i)return ie(13,1,c)}function Ig(c,f){if(i)return ie(14,1,c,f)}function Mg(c,f,$){if(i)return ie(15,1,c,f,$)}var $x=()=>U(""),Ut=c=>{c>>>=0;for(var f="";;){var $=(T(),X)[c++>>>0];if(!$)return f;f+=String.fromCharCode($)}},as={},os={},qn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Xt(c,f,$={}){return(function(_,I,C={}){var z=I.name;if(!_)throw new qn(`type "${z}" must have a positive integer typeid pointer`);if(os.hasOwnProperty(_)){if(C.yd)return;throw new qn(`Cannot register type '${z}' twice`)}os[_]=I,as.hasOwnProperty(_)&&(I=as[_],delete as[_],I.forEach(q=>q()))})(c,f,$)}var kg=(c,f,$)=>{switch(f){case 1:return $?_=>(T(),P)[_>>>0]:_=>(T(),X)[_>>>0];case 2:return $?_=>(T(),W)[_>>>1>>>0]:_=>(T(),V)[_>>>1>>>0];case 4:return $?_=>(T(),O)[_>>>2>>>0]:_=>(T(),F)[_>>>2>>>0];case 8:return $?_=>(T(),ue)[_>>>3>>>0]:_=>(T(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function xx(c,f,$,_,I){c>>>=0,$>>>=0,f=Ut(f>>>0);let C=z=>z;if(_=_===0n){let z=8*$;C=q=>BigInt.asUintN(z,q),I=C(I)}Xt(c,{name:f,Oc:C,Vc:(z,q)=>(typeof q=="number"&&(q=BigInt(q)),q),Uc:kg(f,$,!_),Wc:null})}function vx(c,f,$,_){Xt(c>>>=0,{name:f=Ut(f>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:_},Uc:function(I){return this.Oc((T(),X)[I>>>0])},Wc:null})}var Cg=[],Mn=[0,1,,1,null,1,!0,1,!1,1];function ss(c){9<(c>>>=0)&&--Mn[c+1]===0&&(Mn[c]=void 0,Cg.push(c))}var wt=c=>{if(!c)throw new qn(`Cannot use deleted val. handle = ${c}`);return Mn[c]},At=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Cg.pop()||Mn.length;return Mn[f]=c,Mn[f+1]=1,f}};function us(c){return this.Oc((T(),F)[c>>>2>>>0])}var Sx={name:"emscripten::val",Oc:c=>{var f=wt(c);return ss(c),f},Vc:(c,f)=>At(f),Uc:us,Wc:null};function Tx(c){return Xt(c>>>0,Sx)}var Ex=(c,f)=>{switch(f){case 4:return function($){return this.Oc((T(),K)[$>>>2>>>0])};case 8:return function($){return this.Oc((T(),Q)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function Ix(c,f,$){$>>>=0,Xt(c>>>=0,{name:f=Ut(f>>>0),Oc:_=>_,Vc:(_,I)=>I,Uc:Ex(f,$),Wc:null})}function Mx(c,f,$,_,I){c>>>=0,$>>>=0,f=Ut(f>>>0);let C=q=>q;if(_===0){var z=32-8*$;C=q=>q<<z>>>z,I=C(I)}Xt(c,{name:f,Oc:C,Vc:(q,ne)=>ne,Uc:kg(f,$,_!==0),Wc:null})}function kx(c,f,$){function _(C){var z=(T(),F)[C>>>2>>>0];return C=(T(),F)[C+4>>>2>>>0],new I((T(),P).buffer,C,z)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Xt(c>>>=0,{name:$=Ut($>>>0),Oc:_,Uc:_},{yd:!0})}var un=(c,f,$)=>{var _=(T(),X);if(f>>>=0,0<$){var I=f;$=f+$-1;for(var C=0;C<c.length;++C){var z=c.codePointAt(C);if(127>=z){if(f>=$)break;_[f++>>>0]=z}else if(2047>=z){if(f+1>=$)break;_[f++>>>0]=192|z>>6,_[f++>>>0]=128|63&z}else if(65535>=z){if(f+2>=$)break;_[f++>>>0]=224|z>>12,_[f++>>>0]=128|z>>6&63,_[f++>>>0]=128|63&z}else{if(f+3>=$)break;_[f++>>>0]=240|z>>18,_[f++>>>0]=128|z>>12&63,_[f++>>>0]=128|z>>6&63,_[f++>>>0]=128|63&z,C++}}_[f>>>0]=0,c=f-I}else c=0;return c},si=c=>{for(var f=0,$=0;$<c.length;++$){var _=c.charCodeAt($);127>=_?f++:2047>=_?f+=2:55296<=_&&57343>=_?(f+=4,++$):f+=3}return f};function Cx(c,f){Xt(c>>>=0,{name:f=Ut(f>>>0),Oc($){var _=(T(),F)[$>>>2>>>0];return _=Ve($+4,_,!0),Ft($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var I=typeof _=="string";if(!(I||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new qn("Cannot pass non-string to std::string");var C=I?si(_):_.length,z=mr(4+C+1),q=z+4;return(T(),F)[z>>>2>>>0]=C,I?un(_,q,C+1):(T(),X).set(_,q>>>0),$!==null&&$.push(Ft,z),z},Uc:us,Wc($){Ft($)}})}var Ag=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ax=(c,f,$)=>{if(c>>>=1,16<(f=fg((T(),V),c,f/2,$))-c&&Ag)return Ag.decode((T(),V).slice(c,f));for($="";c<f;++c){var _=(T(),V)[c>>>0];$+=String.fromCharCode(_)}return $},Rx=(c,f,$)=>{if($??($=2147483647),2>$)return 0;var _=f;$=($-=2)<2*c.length?$/2:c.length;for(var I=0;I<$;++I){var C=c.charCodeAt(I);(T(),W)[f>>>1>>>0]=C,f+=2}return(T(),W)[f>>>1>>>0]=0,f-_},Ox=c=>2*c.length,Nx=(c,f,$)=>{var _="";c>>>=2;for(var I=0;!(I>=f/4);I++){var C=(T(),F)[c+I>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},zx=(c,f,$)=>{if(f>>>=0,$??($=2147483647),4>$)return 0;var _=f;$=_+$-4;for(var I=0;I<c.length;++I){var C=c.codePointAt(I);if(65535<C&&I++,(T(),O)[f>>>2>>>0]=C,(f+=4)+4>$)break}return(T(),O)[f>>>2>>>0]=0,f-_},Bx=c=>{for(var f=0,$=0;$<c.length;++$)65535<c.codePointAt($)&&$++,f+=4;return f};function Px(c,f,$){if(c>>>=0,f>>>=0,$=Ut($>>>=0),f===2)var _=Ax,I=Rx,C=Ox;else _=Nx,I=zx,C=Bx;Xt(c,{name:$,Oc:z=>{var q=(T(),F)[z>>>2>>>0];return q=_(z+4,q*f,!0),Ft(z),q},Vc:(z,q)=>{if(typeof q!="string")throw new qn(`Cannot pass non-string to C++ string type ${$}`);var ne=C(q),oe=mr(4+ne+f);return(T(),F)[oe>>>2>>>0]=ne/f,I(q,oe+4,ne+f),z!==null&&z.push(Ft,oe),oe},Uc:us,Wc(z){Ft(z)}})}function Dx(c,f){Xt(c>>>=0,{zd:!0,name:f=Ut(f>>>0),Oc:()=>{},Vc:()=>{}})}function Ux(c){ys(c>>>0,!r,1,!n,131072,!1),Me()}var ui=c=>{if(!M)try{if(c(),!(0<me))try{i?mi()&&ws(g):ee(g)}catch(f){f instanceof te||f=="unwind"||l(0,f)}}catch(f){f instanceof te||f=="unwind"||l(0,f)}},Lx=!Atomics.waitAsync||((X0=globalThis.navigator)==null?void 0:X0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ls(c){c>>>=0,Lx||(Atomics.waitAsync((T(),O),c>>>2,c).value.then(li),c+=128,Atomics.store((T(),O),c>>>2,1))}var li=()=>ui(()=>{var c=mi();c&&(ls(c),i0())});function Fx(c,f){(c>>>=0)==f>>>0?setTimeout(li):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=$e[c])&&c.postMessage({Sc:"checkMailbox"})}var cs=[];function Gx(c,f,$,_,I){for(f>>>=0,I>>>=0,cs.length=0,$=I>>>3,_=I+_>>>3;$<_;){var C;C=(T(),ue)[$++>>>0]?(T(),ue)[$++>>>0]:(T(),Q)[$++>>>0],cs.push(C)}return(f?xs[f]:Rv[c])(...cs)}var Wx=()=>{me=0};function qx(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):_e($e[c])}function Vx(c){}var ci=c=>{try{c()}catch(f){U(f)}};function Hx(c){var f=(...$)=>{di.push(c);try{return c(...$)}finally{M||(di.pop(),Lt&&ln===1&&di.length===0&&(ln=0,me+=1,ci(H0),typeof Fibers<"u"&&Fibers.Zd()))}};return Ng.set(c,f),f}var ln=0,Lt=null,Rg=0,di=[],ds=new Map,Og=new Map,Ng=new Map,jx=0,ps=null,Kx=[],zg=c=>(function(f){if(!M){if(ln===0){var $=!1,_=!1;f((I=0)=>{if(!M&&(Rg=I,$=!0,_)){ln=2,ci(()=>j0(Lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var ne=(T(),O)[Lt+8>>>2>>>0];return ne=Og.get(ne),ne=Ng.get(ne),--me,ne()})()}catch(ne){C=ne,I=!0}var z=!1;if(!Lt){var q=ps;q&&(ps=null,(I?q.reject:q.resolve)(C),z=!0)}if(I&&!z)throw C}}),_=!0,$||(ln=1,Lt=(function(){var I=mr(65548),C=I+12;if((T(),F)[I>>>2>>>0]=C,(T(),F)[I+4>>>2>>>0]=C+65536,C=di[0],!ds.has(C)){var z=jx++;ds.set(C,z),Og.set(z,C)}return C=ds.get(C),(T(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),ci(()=>V0(Lt)))}else ln===2?(ln=0,ci(K0),Ft(Lt),Lt=null,Kx.forEach(ui)):U(`invalid state: ${ln}`);return Rg}})(f=>{c().then(f)});function Yx(c){return c>>>=0,zg(async()=>{var f=await wt(c);return At(f)})}var hs=[],Xx=c=>{var f=hs.length;return hs.push(c),f},Qx=(c,f)=>{for(var $=Array(c),_=0;_<c;++_){var I=_,C=(T(),F)[f+4*_>>>2>>>0],z=os[C];if(z===void 0)throw c=`parameter ${_}`,C=Zg(C),f=Ut(C),Ft(C),new qn(`${c} has unknown type ${f}`);$[I]=z}return $},Zx=(c,f,$)=>{var _=[];return c=c(_,$),_.length&&((T(),F)[f>>>2>>>0]=At(_)),c},Jx={},pi=c=>{var f=Jx[c];return f===void 0?Ut(c):f};function ev(c,f,$){var[_,...I]=Qx(c,f>>>0);f=_.Vc.bind(_);var C=I.map(ne=>ne.Uc.bind(ne));c--;var z={toValue:wt};switch(c=C.map((ne,oe)=>{var be=`argFromPtr${oe}`;return z[be]=ne,`${be}(args${oe?"+"+8*oe:""})`}),$){case 0:var q="toValue(handle)";break;case 2:q="new (toValue(handle))";break;case 3:q="";break;case 1:z.getStringOrSymbol=pi,q="toValue(handle)[getStringOrSymbol(methodName)]"}return q+=`(${c})`,_.zd||(z.toReturnWire=f,z.emval_returnValue=Zx,q=`return emval_returnValue(toReturnWire, destructorsRef, ${q})`),q=`return function (handle, methodName, destructorsRef, args) {
  ${q}
  }`,$=new Function(Object.keys(z),q)(...Object.values(z)),q=`methodCaller<(${I.map(ne=>ne.name)}) => ${_.name}>`,Xx(Object.defineProperty($,"name",{value:q}))}function tv(c,f){return f>>>=0,(c=wt(c>>>0))==wt(f)}function nv(c){return(c>>>=0)?(c=pi(c),At(globalThis[c])):At(globalThis)}function rv(c){return c=pi(c>>>0),At(t[c])}function iv(c,f){return f>>>=0,c=wt(c>>>0),f=wt(f),At(c[f])}function av(c){9<(c>>>=0)&&(Mn[c+1]+=1)}function Bg(c,f,$,_,I){return hs[c>>>0](f>>>0,$>>>0,_>>>0,I>>>0)}function ov(c,f,$,_,I){return Bg(c>>>0,f>>>0,$>>>0,_>>>0,I>>>0)}function sv(){return At([])}function uv(c){c=wt(c>>>0);for(var f=Array(c.length),$=0;$<c.length;$++)f[$]=c[$];return At(f)}function lv(c){return At(pi(c>>>0))}function cv(){return At({})}function dv(c){for(var f=wt(c>>>=0);f.length;){var $=f.pop();f.pop()($)}ss(c)}function pv(c,f,$){f>>>=0,$>>>=0,c=wt(c>>>0),f=wt(f),$=wt($),c[f]=$}function hv(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(T(),O)[f>>>2>>>0]=c.getUTCSeconds(),(T(),O)[f+4>>>2>>>0]=c.getUTCMinutes(),(T(),O)[f+8>>>2>>>0]=c.getUTCHours(),(T(),O)[f+12>>>2>>>0]=c.getUTCDate(),(T(),O)[f+16>>>2>>>0]=c.getUTCMonth(),(T(),O)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(T(),O)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),O)[f+28>>>2>>>0]=c}var Pg=c=>c%4==0&&(c%100!=0||c%400==0),Dg=[0,31,60,91,121,152,182,213,244,274,305,335],Ug=[0,31,59,90,120,151,181,212,243,273,304,334];function fv(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(T(),O)[f>>>2>>>0]=c.getSeconds(),(T(),O)[f+4>>>2>>>0]=c.getMinutes(),(T(),O)[f+8>>>2>>>0]=c.getHours(),(T(),O)[f+12>>>2>>>0]=c.getDate(),(T(),O)[f+16>>>2>>>0]=c.getMonth(),(T(),O)[f+20>>>2>>>0]=c.getFullYear()-1900,(T(),O)[f+24>>>2>>>0]=c.getDay();var $=(Pg(c.getFullYear())?Dg:Ug)[c.getMonth()]+c.getDate()-1|0;(T(),O)[f+28>>>2>>>0]=$,(T(),O)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var _=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=_&&c.getTimezoneOffset()==Math.min(_,$)),(T(),O)[f+32>>>2>>>0]=c}function mv(c){c>>>=0;var f=new Date((T(),O)[c+20>>>2>>>0]+1900,(T(),O)[c+16>>>2>>>0],(T(),O)[c+12>>>2>>>0],(T(),O)[c+8>>>2>>>0],(T(),O)[c+4>>>2>>>0],(T(),O)[c>>>2>>>0],0),$=(T(),O)[c+32>>>2>>>0],_=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(C,I);return 0>$?(T(),O)[c+32>>>2>>>0]=+(I!=C&&z==_):0<$!=(z==_)&&(I=Math.max(C,I),f.setTime(f.getTime()+6e4*((0<$?z:I)-_))),(T(),O)[c+24>>>2>>>0]=f.getDay(),$=(Pg(f.getFullYear())?Dg:Ug)[f.getMonth()]+f.getDate()-1|0,(T(),O)[c+28>>>2>>>0]=$,(T(),O)[c>>>2>>>0]=f.getSeconds(),(T(),O)[c+4>>>2>>>0]=f.getMinutes(),(T(),O)[c+8>>>2>>>0]=f.getHours(),(T(),O)[c+12>>>2>>>0]=f.getDate(),(T(),O)[c+16>>>2>>>0]=f.getMonth(),(T(),O)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Lg(c,f,$,_,I,C,z){return i?ie(16,1,c,f,$,_,I,C,z):-52}function Fg(c,f,$,_,I,C){if(i)return ie(17,1,c,f,$,_,I,C)}var fr={},gv=()=>performance.timeOrigin+performance.now();function Gg(c,f){if(i)return ie(18,1,c,f);if(fr[c]&&(clearTimeout(fr[c].id),delete fr[c]),!f)return 0;var $=setTimeout(()=>{delete fr[c],ui(()=>r0(c,performance.timeOrigin+performance.now()))},f);return fr[c]={id:$,Yd:f},0}function yv(c,f,$,_){c>>>=0,f>>>=0,$>>>=0,_>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var z=Math.max(C,I);(T(),F)[c>>>2>>>0]=60*z,(T(),O)[f>>>2>>>0]=+(C!=I),c=(f=q=>{var ne=Math.abs(q);return`UTC${0<=q?"-":"+"}${String(Math.floor(ne/60)).padStart(2,"0")}${String(ne%60).padStart(2,"0")}`})(C),f=f(I),I<C?(un(c,$,17),un(f,_,17)):(un(c,_,17),un(f,$,17))}var wv=()=>Date.now();function _v(c,f,$){return $>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(T(),ue)[$>>>3>>>0]=BigInt(c),0):28}var fs=[],Wg=(c,f)=>{fs.length=0;for(var $;$=(T(),X)[c++>>>0];){var _=$!=105;f+=(_&=$!=112)&&f%8?4:0,fs.push($==112?(T(),F)[f>>>2>>>0]:$==106?(T(),ue)[f>>>3>>>0]:$==105?(T(),O)[f>>>2>>>0]:(T(),Q)[f>>>3>>>0]),f+=_?8:4}return fs};function bv(c,f,$){return c>>>=0,f=Wg(f>>>0,$>>>0),xs[c](...f)}function $v(c,f,$){return c>>>=0,f=Wg(f>>>0,$>>>0),xs[c](...f)}var xv=()=>{};function vv(c,f){return E(Ve(c>>>0,f>>>0))}var Sv=()=>{throw me+=1,"unwind"};function Tv(){return 4294901760}var Ev=()=>navigator.hardwareConcurrency,kn={},hi=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},qg=c=>{for(var f of c)(c=hi(f))&&(kn[c]=f)};function Iv(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),qg(c),kn.gd=hi(c[3]),kn.Jd=c,kn.gd}function fi(c){if(!(c=kn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}Ft(fi.hd??0),f=si(c)+1;var $=mr(f);return $&&un(c,$,f),fi.hd=$,fi.hd}function Mv(c){c>>>=0;var f=(T(),X).length;if(c<=f||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var _=f*(1+.2/$);_=Math.min(_,c+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(c,_)/65536))-Ye.buffer.byteLength+65535)/65536|0;try{Ye.grow(_),N();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function kv(c,f,$){if(c>>>=0,f>>>=0,kn.gd==c)var _=kn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),qg(_);for(var I=3;_[I]&&hi(_[I])!=c;)++I;for(c=0;c<$&&_[c+I];++c)(T(),O)[f+4*c>>>2>>>0]=hi(_[c+I]);return c}var ms,gs={},Vg=()=>{var _;if(!ms){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in gs)gs[c]===void 0?delete f[c]:f[c]=gs[c];var $=[];for(c in f)$.push(`${c}=${f[c]}`);ms=$}return ms};function Hg(c,f){if(i)return ie(19,1,c,f);c>>>=0,f>>>=0;var $,_=0,I=0;for($ of Vg()){var C=f+_;(T(),F)[c+I>>>2>>>0]=C,_+=un($,C,1/0)+1,I+=4}return 0}function jg(c,f){if(i)return ie(20,1,c,f);c>>>=0,f>>>=0;var $=Vg();for(var _ of((T(),F)[c>>>2>>>0]=$.length,c=0,$))c+=si(_)+1;return(T(),F)[f>>>2>>>0]=c,0}function Kg(c){return i?ie(21,1,c):52}function Yg(c,f,$,_){return i?ie(22,1,c,f,$,_):52}function Xg(c,f,$,_){return i?ie(23,1,c,f,$,_):70}var Cv=[null,[],[]];function Qg(c,f,$,_){if(i)return ie(24,1,c,f,$,_);f>>>=0,$>>>=0,_>>>=0;for(var I=0,C=0;C<$;C++){var z=(T(),F)[f>>>2>>>0],q=(T(),F)[f+4>>>2>>>0];f+=8;for(var ne=0;ne<q;ne++){var oe=c,be=(T(),X)[z+ne>>>0],ke=Cv[oe];be===0||be===10?((oe===1?v:E)(mg(ke)),ke.length=0):ke.push(be)}I+=q}return(T(),F)[_>>>2>>>0]=I,0}function Av(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)tt();J.push(async()=>{var f=(async function(){if(!i)return Promise.all(de.map(ye))})();ae++,await f,--ae==0&&pe&&(f=pe,pe=null,f())})})(),i||(Ye=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),N()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>ve(),t.stackRestore=c=>xe(c),t.stackAlloc=c=>_s(c),t.setValue=function(c,f,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(T(),P)[c>>>0]=f;break;case"i16":(T(),W)[c>>>1>>>0]=f;break;case"i32":(T(),O)[c>>>2>>>0]=f;break;case"i64":(T(),ue)[c>>>3>>>0]=BigInt(f);break;case"float":(T(),K)[c>>>2>>>0]=f;break;case"double":(T(),Q)[c>>>3>>>0]=f;break;case"*":(T(),F)[c>>>2>>>0]=f;break;default:U(`invalid type for setValue: ${$}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(T(),P)[c>>>0];case"i16":return(T(),W)[c>>>1>>>0];case"i32":return(T(),O)[c>>>2>>>0];case"i64":return(T(),ue)[c>>>3>>>0];case"float":return(T(),K)[c>>>2>>>0];case"double":return(T(),Q)[c>>>3>>>0];case"*":return(T(),F)[c>>>2>>>0];default:U(`invalid type for getValue: ${f}`)}},t.UTF8ToString=Ve,t.stringToUTF8=un,t.lengthBytesUTF8=si;var Zg,Jg,mi,Ft,mr,ys,e0,t0,n0,ws,r0,i0,Se,gr,a0,xe,_s,ve,o0,bs,s0,u0,l0,$s,c0,d0,p0,h0,f0,m0,g0,y0,w0,_0,b0,$0,x0,v0,S0,T0,E0,I0,M0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Qt,Rv=[Ie,Oe,dg,gg,yg,wg,_g,bg,$g,xg,vg,Sg,Tg,Eg,Ig,Mg,Lg,Fg,Gg,Hg,jg,Kg,Yg,Xg,Qg],xs={1003524:(c,f,$,_,I)=>{if(t===void 0||!t.Xc)return 1;if((c=Ve(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),$=Number($>>>0),_=Number(_>>>0),f+$>c.byteLength)return 3;try{let C=c.subarray(f,f+$);switch(I){case 0:(T(),X).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,$)=>{t.td(c,(T(),X).subarray(f>>>0,f+$>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,$)=>{t.ed(Number(c),Number(f),Number($),!0)},1004704:(c,f,$)=>{t.ed(Number(c),Number(f),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,$)=>{t.$b("HardSigmoid",c,{alpha:f,beta:$})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,$)=>{t.$b("Clip",c,{min:f,max:$})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,$,_,I)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007283:(c,f,$,_,I)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007457:(c,f,$,_,I)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007631:(c,f,$,_,I)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007806:(c,f,$,_,I)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007980:(c,f,$,_,I)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008153:(c,f,$,_,I)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008326:(c,f,$,_,I)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008503:(c,f,$,_,I)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008683:(c,f,$,_,I)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!$,axes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,$)=>{t.$b("Transpose",c,{perm:f?Array.from((T(),O).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1009040:(c,f,$,_)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:Ve($),format:_?"NHWC":"NCHW"})},1009173:(c,f,$,_)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:Ve($),format:_?"NHWC":"NCHW"})},1009306:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De,cn)=>{t.$b("ConvTranspose",c,{format:ne?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[C,z],strides:[q],wIsConst:()=>!!(T(),P)[oe>>>0],outputPadding:be?Array.from((T(),O).subarray(Number(be)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((T(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:Ve(cn)})},1009739:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("ConvTranspose",c,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((T(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((T(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((T(),O).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(T(),P)[ne>>>0],outputPadding:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],outputShape:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ve(De)})},1010400:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De,cn)=>{t.$b("ConvTranspose",c,{format:ne?"NHWC":"NCHW",autoPad:f,dilations:[$],group:_,kernelShape:[I],pads:[C,z],strides:[q],wIsConst:()=>!!(T(),P)[oe>>>0],outputPadding:be?Array.from((T(),O).subarray(Number(be)>>>0,Number(ke)>>>0)):[],outputShape:Be?Array.from((T(),O).subarray(Number(Be)>>>0,Number(De)>>>0)):[],activation:Ve(cn)})},1010833:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("ConvTranspose",c,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from((T(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((T(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((T(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((T(),O).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(T(),P)[ne>>>0],outputPadding:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],outputShape:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[],activation:Ve(De)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("AveragePool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[],kernel_shape:q?Array.from((T(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("AveragePool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[],kernel_shape:q?Array.from((T(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("MaxPool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[],kernel_shape:q?Array.from((T(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De)=>{t.$b("MaxPool",c,{format:De?"NHWC":"NCHW",auto_pad:f,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[],kernel_shape:q?Array.from((T(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],pads:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],strides:ke?Array.from((T(),O).subarray(Number(ke)>>>0,Number(Be)>>>0)):[]})},1013758:(c,f,$,_,I)=>{t.$b("Gemm",c,{alpha:f,beta:$,transA:_,transB:I})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,$,_)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014024:(c,f,$,_)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!$,axis:_})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,$,_,I)=>{t.$b("Split",c,{axis:f,numOutputs:$,splitSizes:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,$,_,I,C,z,q,ne,oe,be)=>{t.$b("Resize",c,{antialias:f,axes:$?Array.from((T(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Ve(I),cubicCoeffA:C,excludeOutside:z,extrapolationValue:q,keepAspectRatioPolicy:Ve(ne),mode:Ve(oe),nearestMode:Ve(be)})},1015056:(c,f,$,_,I,C,z)=>{t.$b("Slice",c,{starts:f?Array.from((T(),O).subarray(Number(f)>>>0,Number($)>>>0)):[],ends:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[],axes:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015486:(c,f,$)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:$?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:Ve(f)})},1015734:(c,f,$,_,I)=>{t.$b("Pad",c,{mode:f,value:$,pads:_?Array.from((T(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1015877:(c,f,$,_,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(c,f,$,_,I,C)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(c,f,$)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number($)})},1016312:(c,f,$)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:$})},1016402:(c,f,$,_,I)=>{t.$b("GridSample",c,{align_corners:f,mode:Ve($),padding_mode:Ve(_),format:I?"NHWC":"NCHW"})},1016572:(c,f,$,_,I)=>{t.$b("GridSample",c,{align_corners:f,mode:Ve($),padding_mode:Ve(_),format:I?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:Ve(f)})},1016827:(c,f,$,_,I,C,z,q,ne)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C,qkvHiddenSizes:z?Array.from((T(),O).subarray(Number(q)>>>0,Number(q)+z>>>0)):[],pastPresentShareBuffer:!!ne})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De,cn,vs)=>{t.$b("Conv",c,{format:ke?"NHWC":"NCHW",auto_pad:f,dilations:$?Array.from((T(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:I,kernel_shape:C?Array.from((T(),O).subarray(Number(C)>>>0,Number(z)>>>0)):[],pads:q?Array.from((T(),O).subarray(Number(q)>>>0,Number(ne)>>>0)):[],strides:oe?Array.from((T(),O).subarray(Number(oe)>>>0,Number(be)>>>0)):[],w_is_const:()=>!!(T(),P)[Number(Be)>>>0],activation:Ve(De),activation_params:cn?Array.from((T(),K).subarray(Number(cn)>>>0,Number(vs)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,$,_,I,C,z,q,ne)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:$,scale:_,softcap:I,doRotary:C,rotaryInterleaved:z,smoothSoftmax:q,localWindowSize:ne})},1018124:(c,f,$,_)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!_})},1018235:(c,f,$,_)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:$,simplified:!!_})},1018346:(c,f,$,_,I,C)=>{t.$b("MatMulNBits",c,{k:f,n:$,accuracyLevel:_,bits:I,blockSize:C})},1018473:(c,f,$,_,I,C)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,$,_,I)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:$,rotaryEmbeddingDim:_,scale:I})},1018835:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1018937:(c,f,$)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!$})},1019039:(c,f,$,_)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:$,blockSize:_})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function Ov(c,f,$){return zg(async()=>{await t.Dd(Number(c),Number(f),Number($))})}function Nv(){return typeof wasmOffsetConverter<"u"}function zv(c,f,$,_){var I=ve();try{return y0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function Bv(c,f,$){var _=ve();try{return h0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function Pv(c){var f=ve();try{c0(c)}catch($){if(xe(f),$!==$+0)throw $;Se(1,0)}}function Dv(c,f){var $=ve();try{return $s(c,f)}catch(_){if(xe($),_!==_+0)throw _;Se(1,0)}}function Uv(c,f,$){var _=ve();try{l0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function Lv(c,f){var $=ve();try{w0(c,f)}catch(_){if(xe($),_!==_+0)throw _;Se(1,0)}}function Fv(c,f,$,_,I,C,z){var q=ve();try{return m0(c,f,$,_,I,C,z)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function Gv(c,f,$,_,I,C){var z=ve();try{d0(c,f,$,_,I,C)}catch(q){if(xe(z),q!==q+0)throw q;Se(1,0)}}function Wv(c,f,$,_){var I=ve();try{g0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function qv(c,f,$,_,I){var C=ve();try{p0(c,f,$,_,I)}catch(z){if(xe(C),z!==z+0)throw z;Se(1,0)}}function Vv(c,f,$,_,I,C,z){var q=ve();try{b0(c,f,$,_,I,C,z)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function Hv(c,f,$,_,I,C,z){var q=ve();try{$0(c,f,$,_,I,C,z)}catch(ne){if(xe(q),ne!==ne+0)throw ne;Se(1,0)}}function jv(c,f,$,_,I,C,z,q){var ne=ve();try{T0(c,f,$,_,I,C,z,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function Kv(c,f,$,_,I){var C=ve();try{return _0(c,f,$,_,I)}catch(z){if(xe(C),z!==z+0)throw z;Se(1,0)}}function Yv(c,f,$){var _=ve();try{return E0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function Xv(c,f,$,_,I,C,z,q){var ne=ve();try{I0(c,f,$,_,I,C,z,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function Qv(c,f,$,_,I,C,z,q,ne,oe,be,ke){var Be=ve();try{x0(c,f,$,_,I,C,z,q,ne,oe,be,ke)}catch(De){if(xe(Be),De!==De+0)throw De;Se(1,0)}}function Zv(c,f,$,_,I,C){var z=ve();try{return v0(c,f,$,_,I,C)}catch(q){if(xe(z),q!==q+0)throw q;Se(1,0)}}function Jv(c,f,$){var _=ve();try{return M0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;return Se(1,0),0n}}function e3(c,f,$,_,I,C,z,q,ne){var oe=ve();try{f0(c,f,$,_,I,C,z,q,ne)}catch(be){if(xe(oe),be!==be+0)throw be;Se(1,0)}}function t3(c){var f=ve();try{return k0(c)}catch($){if(xe(f),$!==$+0)throw $;Se(1,0)}}function n3(c,f){var $=ve();try{return q0(c,f)}catch(_){if(xe($),_!==_+0)throw _;return Se(1,0),0n}}function r3(c){var f=ve();try{return C0(c)}catch($){if(xe(f),$!==$+0)throw $;return Se(1,0),0n}}function i3(c,f,$,_){var I=ve();try{return B0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function a3(c,f,$,_,I){var C=ve();try{return P0(c,f,$,_,I)}catch(z){if(xe(C),z!==z+0)throw z;Se(1,0)}}function o3(c,f,$,_,I,C){var z=ve();try{return D0(c,f,$,_,I,C)}catch(q){if(xe(z),q!==q+0)throw q;Se(1,0)}}function s3(c,f,$,_,I,C){var z=ve();try{return U0(c,f,$,_,I,C)}catch(q){if(xe(z),q!==q+0)throw q;Se(1,0)}}function u3(c,f,$,_,I,C,z,q){var ne=ve();try{return S0(c,f,$,_,I,C,z,q)}catch(oe){if(xe(ne),oe!==oe+0)throw oe;Se(1,0)}}function l3(c,f,$,_,I){var C=ve();try{return L0(c,f,$,_,I)}catch(z){if(xe(C),z!==z+0)throw z;return Se(1,0),0n}}function c3(c,f,$,_){var I=ve();try{return F0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function d3(c,f,$,_){var I=ve();try{return G0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function p3(c,f,$,_,I,C,z,q,ne,oe,be,ke){var Be=ve();try{return W0(c,f,$,_,I,C,z,q,ne,oe,be,ke)}catch(De){if(xe(Be),De!==De+0)throw De;Se(1,0)}}function h3(c,f,$,_,I,C,z,q,ne,oe,be){var ke=ve();try{N0(c,f,$,_,I,C,z,q,ne,oe,be)}catch(Be){if(xe(ke),Be!==Be+0)throw Be;Se(1,0)}}function f3(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De,cn,vs){var w3=ve();try{z0(c,f,$,_,I,C,z,q,ne,oe,be,ke,Be,De,cn,vs)}catch(Ss){if(xe(w3),Ss!==Ss+0)throw Ss;Se(1,0)}}function m3(c,f,$){var _=ve();try{return A0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function g3(c,f,$){var _=ve();try{return R0(c,f,$)}catch(I){if(xe(_),I!==I+0)throw I;Se(1,0)}}function y3(c,f,$,_){var I=ve();try{O0(c,f,$,_)}catch(C){if(xe(I),C!==C+0)throw C;Se(1,0)}}function gi(){if(0<ae)pe=gi;else if(i)y==null||y(t),D();else{for(var c=J;0<c.length;)c.shift()(t);0<ae?pe=gi:(t.calledRun=!0,M||(D(),y==null||y(t)))}}return i||(Qt=await re(),gi()),t.PTR_SIZE=4,A?t:new Promise((c,f)=>{y=c,w=f})}var js,Ks,wy=Z(()=>{var e,t;js=Hs,Ks=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ks&&Hs()}),Ti,Ei,Ys,ct,Xs,$r,Qs,Zs,Ii,Js,Mi,eu,ki,tu,Ci=Z(()=>{xi(),Ti=typeof location>"u"?void 0:location.origin,Ei=self.location.href>"file:"&&self.location.href<"file;",Ys=()=>{{if(Ei){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ti).href}return self.location.href}},ct=Ys(),Xs=()=>{if(ct&&!ct.startsWith("blob:"))return ct.substring(0,ct.lastIndexOf("/")+1)},$r=(e,t)=>{try{let n=t??ct;return(n?new URL(e,n):new URL(e)).origin===Ti}catch{return!1}},Qs=(e,t)=>{let n=t??ct;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Zs=(e,t)=>`${t??"./"}${e}`,Ii=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Js=async e=>(await import(e)).default,Mi=(yy(),Vn(Ws)).default,eu=async()=>{if(!ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(ct))return[void 0,Mi()];let e=await Ii(ct);return[e,Mi(e)]},ki=(wy(),Vn(Vs)).default,tu=async(e,t,n,r)=>{let i=ki&&!(e||t);if(i)if(ct)i=$r(ct)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,ki];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??Qs(a,t),s=n&&o&&!$r(o,t),u=s?await Ii(o):o??Zs(a,t);return[s?u:void 0,await Js(u)]}}}),Ai,xr,Kn,Ri,nu,ru,iu,Oi,Pe,fn=Z(()=>{Ci(),xr=!1,Kn=!1,Ri=!1,nu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ru=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Oi=async e=>{if(xr)return Promise.resolve();if(Kn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ri)throw new Error("previous call to 'initializeWebAssembly()' failed.");Kn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!iu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ru())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=nu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[p,h]=await tu(s,a,n>1,!!d||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,w)=>{let b={numThreads:n};if(d)b.wasmBinary=d,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(p){let x=Xs();x&&(b.locateFile=S=>x+S)}h(b).then(x=>{Kn=!1,xr=!0,Ai=x,y(),p&&URL.revokeObjectURL(p)},x=>{Kn=!1,Ri=!0,w(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Pe=()=>{if(xr&&Ai)return Ai;throw new Error("WebAssembly is not initialized yet.")}}),bt,vr,Ne,Ni=Z(()=>{fn(),bt=(e,t)=>{let n=Pe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},vr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")vr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ne=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),au,_y=Z(()=>{fn(),Ni(),au=e=>{let t=Pe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=bt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&vr(e.extra,"",new WeakSet,(o,s)=>{let u=bt(o,r),l=bt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),ou,su,uu,mn,lu,cu,by=Z(()=>{fn(),Ni(),ou=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},su=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},uu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},mn=(e,t,n,r)=>{let i=bt(t,r),a=bt(n,r);Pe()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},lu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",mn(e,"session.disable_quant_qdq","1",n),mn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&mn(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);mn(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=bt(a,n),u=o.length,l=0,d=0;if(u>0){l=Pe()._malloc(u*Pe().PTR_SIZE),n.push(l),d=Pe()._malloc(u*Pe().PTR_SIZE),n.push(d);for(let p=0;p<u;p++)Pe().setValue(l+p*Pe().PTR_SIZE,o[p][0],"*"),Pe().setValue(d+p*Pe().PTR_SIZE,o[p][1],"*")}await Pe()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&Ne(`Can't append execution provider: ${a}.`)}},cu=async e=>{let t=Pe(),n=0,r=[],i=e||{};uu(i);try{let a=ou(i.graphOptimizationLevel??"all"),o=su(i.executionMode??"sequential"),s=typeof i.logId=="string"?bt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?bt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,d),n===0&&Ne("Can't create session options."),i.executionProviders&&await lu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);mn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=bt(p,r);t._OrtAddFreeDimensionOverride(n,m,h)!==0&&Ne(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&vr(i.extra,"",new WeakSet,(p,h)=>{mn(n,p,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),gn,qt,yn,Sr,Tr,zi,Bi,Pi,he=Z(()=>{gn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},qt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},yn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Sr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},zi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Bi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Di,du=Z(()=>{xi(),Di=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),pu,hu,fu,mu,Ui,gu,Ee,Vt=Z(()=>{he(),pu=["V","I","W","E","F"],hu=(e,t)=>{console.log(`[${pu[e]},${new Date().toISOString()}]${t}`)},Ui=(e,t)=>{fu=e,mu=t},gu=(e,t)=>{let n=Tr(e),r=Tr(fu);n>=r&&hu(n,typeof t=="function"?t():t)},Ee=(...e)=>{mu&&gu(...e)}}),yu,On,G,Er,wu,_u,bu,ge=Z(()=>{yu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},On=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=yu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(d>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},G=class yi{static size(t){return yi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return yi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return yi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Er=class yr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)yr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return yr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return yr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(yr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),a[s]=d-a[o],Math.floor((t+d-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},wu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!On.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},_u=-34028234663852886e22,bu=34028234663852886e22}),Li,$u=Z(()=>{he(),Li=(e,t)=>new(Sr(t))(e)}),Fi,Gi,Wi,xu,qi,vu,Vi,Hi,ji,Su,Tu,$y=Z(()=>{he(),Vt(),Fi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Gi=(e,t)=>{if(t==="int32")return e;let n=Fi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Sr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Wi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},xu=1,qi=()=>xu++,vu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Vi=(e,t)=>{let n=Fi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Hi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Vi(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Wi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ji=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=vu.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Vi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Gi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Wi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Su=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=qi();return this.tensorTrackersById.set(e,new ji(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=qi(),o=new Hi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ji(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,n)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Hi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tu=(...e)=>new Su(...e)}),Yn,Eu,Iu,xy=Z(()=>{he(),fn(),$u(),$y(),Vt(),Yn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Eu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Iu=class{constructor(e){this.tensorManager=Tu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ui(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Eu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Yn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Yn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Pe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Li(n,t)}}registerMLTensor(e,t,n,r){let i=Yn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(o){let p=Gi(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Yn.get(gn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Ki=Z(()=>{}),Yi,Ir,Mr,Mu,ku,Xi,Qi,Cu,Au,vy=Z(()=>{Vt(),Ki(),Yi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ir=[],Mr=e=>Math.ceil(Number(e)/16)*16,Mu=e=>{for(let t=0;t<Ir.length;t++){let n=Ir[t];if(e<=n)return n}return Math.ceil(e/16)*16},ku=1,Xi=()=>ku++,Qi=async(e,t,n,r)=>{let i=Mr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Cu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Yi)Ir.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Mr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Mr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Xi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Mu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Xi(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Qi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Yi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Au=(...e)=>new Cu(...e)}),Ru,Re,Fe=Z(()=>{Ru=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Ru(e)}),Nn,kr,Ke,et,ce,Le,Zi,zn,Jt,le,Xn,H,se,Ou,Ji,Nu,zu,we=Z(()=>{he(),ge(),Nn=64,kr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ke=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[0]},et=(e,t=1)=>{let n=kr(e,t);return typeof n=="string"?n:n[1]},ce=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:G.computeStrides(n)})}),t},Le=e=>e%4===0?4:e%2===0?2:1,Zi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,zn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Jt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Xn=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=kr(t,i),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:d,storage:p,tensor:t},m=A=>typeof A=="string"?A:`${A}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let A=0;A<o-1;A++)x+=`
    let dim${A} = current / ${le(b,A,o)};
    let rest${A} = current % ${le(b,A,o)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;x+=`indices[${o-1}] = current;`;let S=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=A=>(g.offsetToIndices=!0,o<2?A:`o2i_${e}(${A})`),E=[];if(o>=2)for(let A=o-1;A>=0;A--)E.push(`${le(b,A,o)} * (indices[${A}])`);let M=o<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,k=A=>(g.indicesToOffset=!0,o<2?A:`i2o_${e}(${A})`),T=(...A)=>o===0?"0u":`${h.indices}(${A.map(m).join(",")})`,R=(A,N)=>o<2?`${A}`:`${le(A,N,o)}`,P=(A,N,D)=>o<2?`${A}=${D};`:`${le(A,N,o)}=${D};`,X={},W=(A,N)=>{g.broadcastedIndicesToOffset=!0;let D=`${N.name}broadcastedIndicesTo${e}Offset`;if(D in X)return`${D}(${A})`;let U=[];for(let j=o-1;j>=0;j--){let re=N.indicesGet("outputIndices",j+N.rank-o);U.push(`${R(b,j)} * (${re} % ${R(w,j)})`)}return X[D]=`fn ${D}(outputIndices: ${N.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${D}(${A})`},V=(A,N)=>(()=>{if(h.storage===h.value)return`${e}[${A}]=${N};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${N}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),O=A=>(()=>{if(h.storage===h.value)return`${e}[${A}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${A}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${A}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),F=o<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${d} {
    return ${O(`i2o_${e}(indices)`)};
  }`,K=o<2?"":(()=>{let A=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${A}) -> ${d} {
    return get_${e}ByIndices(${T(N)});
  }`})(),Q=(...A)=>{if(A.length!==o)throw new Error(`indices length must be ${o}`);let N=A.map(m).join(",");return o===0?O("0u"):o===1?O(N[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${N})`)},ue=A=>o<2?O(A):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=o<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${d}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,B=o<2?"":(()=>{let A=s.map(D=>`d${D}: u32`).join(", "),N=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${A}, value: ${d}) {
    set_${e}ByIndices(${T(N)}, value);
  }`})();return{impl:()=>{let A=[],N=!1;return g.offsetToIndices&&(A.push(S),N=!0),g.indicesToOffset&&(A.push(M),N=!0),g.broadcastedIndicesToOffset&&(Object.values(X).forEach(D=>A.push(D)),N=!0),g.set&&(A.push(B),N=!0),g.setByIndices&&(A.push(L),N=!0),g.get&&(A.push(K),N=!0),g.getByIndices&&(A.push(F),N=!0),!a&&N&&A.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${b} = ${h.indices}(${G.computeStrides(n).join(",")});`),A.join(`
`)},type:h,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:W,indices:T,indicesGet:R,indicesSet:P,set:(...A)=>{if(A.length!==o+1)throw new Error(`indices length must be ${o}`);let N=A[o];if(typeof N!="string")throw new Error("value must be string");let D=A.slice(0,o).map(m).join(",");return o===0?V("0u",N):o===1?V(D[0],N):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${D}, ${N})`)},setByOffset:V,setByIndices:(A,N)=>o<2?V(A,N):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${N});`),get:Q,getByOffset:O,getByIndices:ue,usage:r,name:e,strides:b,shape:w,rank:o}},H=(e,t,n,r=1)=>Xn(e,t,n,"input",r),se=(e,t,n,r=1)=>Xn(e,t,n,"output",r),Ou=(e,t,n)=>Xn(e,t,n,"atomicOutput",1),Ji=(e,t,n,r=1)=>Xn(e,t,n,"internal",r),Nu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Nn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},zu=(e,t)=>new Nu(e,t)}),Bu,ea,Pu,Du,Uu,Lu,dt,Fu,Gu,en=Z(()=>{he(),ge(),Fe(),we(),Bu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ea=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Pu=(e,t)=>G.sortBasedOnPerm(e,ea(e.length,t)),Du=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Uu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Lu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},dt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ea(r,t),a=Pu(e.dims,i),o=e.dims,s=a,u=r<2||Lu(i,e.dims),l;if(u)return l=g=>{let y=H("input",n,o,4),w=se("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=Uu(e.dims,i),h=G.areEqual(p,[2,3,1]),m=G.areEqual(p,[3,1,2]);if(d.length===2||h||m){o=h?[d[0],d[1]*d[2]]:m?[d[0]*d[1],d[2]]:d,s=[o[1],o[0]];let g=16;return l=y=>{let w=H("a",n,o.length),b=se("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...ce(o,s)]}},getShaderSource:l}}return l=g=>{let y=H("a",n,o.length),w=se("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Du(i,r,y,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(o,s)]}},getShaderSource:l}},Fu=(e,t)=>{Bu(e.inputs,t.perm),e.compute(dt(e.inputs[0],t.perm))},Gu=e=>Re({perm:e.perm})}),Wu,qu,Vu,Hu,ju,Ku,Yu,Xu,Qu,Zu,$t,Ju,el,tl,nl,rl,il,al,ol,sl,ul,Sy=Z(()=>{he(),ge(),we(),na(),en(),Wu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},qu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Vu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Hu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ju=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Ku=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Yu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Xu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Qu=(e,t)=>{let n=[];if(!Xu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Zu=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=G.size(a),l=G.size(o),d=H("_A",n[0].dataType,s),p=se("output",i,a),h=64;u===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Vu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Wu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${qu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Hu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},$t=(e,t,n,r)=>{let i=e.inputs.length===1?n:ta(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=G.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=Qu(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(dt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=ju(s.length,u.dims.length));let[d,p]=Ku(u.dims,s),h=d;i.keepDims&&(h=Yu(d,o)),e.compute(Zu(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,p),{inputs:[u]})},Ju=(e,t)=>{$t(e,"ReduceMeanShared",t,"mean")},el=(e,t)=>{$t(e,"ReduceL1Shared",t,"l1")},tl=(e,t)=>{$t(e,"ReduceL2Shared",t,"l2")},nl=(e,t)=>{$t(e,"ReduceLogSumExpShared",t,"logSumExp")},rl=(e,t)=>{$t(e,"ReduceMaxShared",t,"max")},il=(e,t)=>{$t(e,"ReduceMinShared",t,"min")},al=(e,t)=>{$t(e,"ReduceProdShared",t,"prod")},ol=(e,t)=>{$t(e,"ReduceSumShared",t,"sum")},sl=(e,t)=>{$t(e,"ReduceSumSquareShared",t,"sumSquare")},ul=(e,t)=>{$t(e,"ReduceLogSumShared",t,"logSum")}}),xt,ll,Cr,ta,vt,cl,dl,pl,hl,fl,ml,gl,yl,wl,_l,St,bl,$l,xl,vl,Sl,Tl,El,Il,Ml,kl,na=Z(()=>{he(),ge(),Fe(),we(),Sy(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ll=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Cr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,d=l.length,p=G.normalizeAxes(i,d),h=!s&&p.length===0;l.forEach((y,w)=>{h||p.indexOf(w)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=G.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=H("_A",n[0].dataType,d),x=se("output",a,m),S=r(b,x,p),v=S[2];for(let E=0,M=0;E<d;E++)h||p.indexOf(E)>=0?(o&&M++,v=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${S[2].includes("last_index")?`let last_index = j${E};`:""}
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
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${v}
          ${S[3]}
          ${S.length===4?x.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(l,u)]})}},ta=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:ta(i,n);e.compute(Cr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?ll:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},cl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},dl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},pl=(e,t)=>{xt(e.inputs),vt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},hl=(e,t)=>{xt(e.inputs),vt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},fl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},ml=(e,t)=>{xt(e.inputs),vt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},gl=(e,t)=>{xt(e.inputs),vt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},yl=(e,t)=>{xt(e.inputs),vt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},wl=(e,t)=>{xt(e.inputs),vt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},_l=(e,t)=>{xt(e.inputs),vt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},St=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},bl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):Ju(e,t)},$l=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):el(e,t)},xl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):tl(e,t)},vl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):nl(e,t)},Sl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):rl(e,t)},Tl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):il(e,t)},El=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):al(e,t)},Il=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):ol(e,t)},Ml=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):sl(e,t)},kl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cl(e,t):ul(e,t)}}),ra,Cl,Al,ia,Ty=Z(()=>{he(),Fe(),na(),ra=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Cl=(e,t)=>{ra(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Al=(e,t)=>{ra(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Cr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ia=e=>Re(e)}),Rl,Ar,Ol,Nl,zl,Qn,Bl,Pl,aa=Z(()=>{he(),ge(),Ki(),we(),Rl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=g+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:d,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ar=(e,t,n)=>t&&e?`
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
    `,Ol=(e,t,n,r,i,a,o,s)=>{let u=Le(o?1:a),l=64,d=a/u;d<l&&(l=32);let p=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:d},{type:12,data:p}],m=Ke(e.dataType,u),g=et(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let x=se("x",e.dataType,e.dims,u),S=[x],v=o?H("seq_lens",o.dataType,o.dims):void 0;v&&S.push(v);let E=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;E&&S.push(E);let M=et(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...S)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},Nl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],p=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=p?[a.batchSize,h,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=Le(a.headSize),b=a.headSize/w,x=12,S={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],E=p&&r&&G.size(r.dims)>0,M=["type","type"];E&&M.push("type"),i&&M.push("type"),s&&M.push("type"),u&&M.push("type");let k=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=R=>{let P=H("q",t.dataType,t.dims,w),X=H("key",n.dataType,n.dims,w),W=[P,X];if(E){let L=H("past_key",r.dataType,r.dims,w);W.push(L)}i&&W.push(H("attention_bias",i.dataType,i.dims));let V=s?H("seq_lens",s.dataType,s.dims):void 0;V&&W.push(V);let O=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;O&&W.push(O);let F=se("output",t.dataType,d),K=[F];p&&K.push(se("present_key",t.dataType,m,w));let Q=et(1,w),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${P.type.storage}, ${x*x}>;
  ${R.registerUniforms(ue).declareVariables(...W,...K)}
  ${R.mainStart([x,x,1])}
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:T}},zl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,p=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,h,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,d],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=p&&r&&G.size(r.dims)>0,S=["type","type"];x&&S.push("type"),o&&S.push("type"),s&&S.push("type");let v=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=M=>{let k=H("probs",t.dataType,t.dims),T=H("v",n.dataType,n.dims),R=[k,T];x&&R.push(H("past_value",r.dataType,r.dims));let P=o?H("seq_lens",o.dataType,o.dims):void 0;o&&R.push(P);let X=s?H("total_sequence_length_input",s.dataType,s.dims):void 0;s&&R.push(X);let W=[se("output",t.dataType,g)];p&&W.push(se("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${M.registerUniforms(V).declareVariables(...R,...W)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ar(P,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:E}},Qn=(e,t,n,r,i,a,o,s,u,l,d=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=h>1?o:void 0,g=h>1?s:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&G.size(u.dims)>0?u:void 0,x=[t,n];m&&G.size(m.dims)>0&&x.push(m),b&&x.push(b),d&&x.push(d),p&&x.push(p);let S=e.compute(Nl(h,t,n,m,b,l,y,d,p),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Ol(S,l.batchSize,l.numHeads,y,l.sequenceLength,w,d,p),{inputs:d&&p?[S,d,p]:[S],outputs:[]});let v=[S,r];g&&G.size(g.dims)>0&&v.push(g),d&&v.push(d),p&&v.push(p),e.compute(zl(h,S,r,g,l,y,d,p),{inputs:v,outputs:h>1?[0,2]:[0]})},Bl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let h=se("output_q",u[0].dataType,n),m=se("output_k",u[0].dataType,n),g=se("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),b=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${p.registerUniforms(S).declareVariables(y,w,b,h,m,g)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},Pl=(e,t)=>{let n=Rl(e.inputs,t),[r,i,a]=Bl(e,n);return Qn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Dl,Ul,Ll,Fl,Ey=Z(()=>{mt(),he(),ge(),Fe(),we(),Dl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ul=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Le(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=G.size(a)/o,l=r,d=l?a.length:a,p=H("x",e[0].dataType,e[0].dims,o),h=H("scale",e[1].dataType,e[1].dims,s),m=H("bias",e[2].dataType,e[2].dims,s),g=H("inputMean",e[3].dataType,e[3].dims,s),y=H("inputVar",e[4].dataType,e[4].dims,s),w=se("y",e[0].dataType,d,o),b=()=>{let S="";if(r)S=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<h.rank;v++)S+=`cIndices[${v}] = outputIndices[${v}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},x=S=>`
  const epsilon = ${n};
  ${S.registerUniform("outputSize","u32").declareVariables(p,h,m,g,y,w)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ce(a)]:[{type:12,data:u}]})}},Ll=e=>Re(e),Fl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Ll({...t,outputCount:r});if(ze.webgpu.validateInputContent&&Dl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ul(n,i))}}),Gl,Wl,ql,Iy=Z(()=>{ge(),we(),Gl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Wl=e=>{let t=e[0].dims,n=e[0].dims[2],r=G.size(t)/4,i=e[0].dataType,a=H("input",i,t,4),o=H("bias",i,[n],4),s=H("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},ql=e=>{Gl(e.inputs),e.compute(Wl(e.inputs))}}),Vl,Ce,Hl,jl,Kl,Yl,Xl,Ql,Zl,Jl,ec,tc,nc,rc,ic,ac,Zn,oc,Rr,sc,uc,lc,cc,dc,pc,hc,fc,mc,gc,yc,wc,_c,bc,$c,xc,oa,vc,sa,ua,Sc,Tc,Ec,Ic,Mc,kc,la=Z(()=>{he(),ge(),Fe(),we(),Vl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[s],4),d=se("outputData",r,[s],4),p=[{name:"vec_size",type:"u32"}];return o&&p.push(...o),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ce=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(G.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Vl(l,G.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(G.size(l[0].dims)/64/4)},programUniforms:u})}},Hl=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},jl=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},Kl=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},Yl=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},Xl=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},Ql=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},Zl=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},Jl=e=>Re(e),ec=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},tc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},nc=(e,t)=>{let n=t||tc(e.inputs),r=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},rc=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},ic=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},ac=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},Zn=e=>Re(e),oc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,sc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Rr(t)))},uc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},lc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},cc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Rr(t)))},dc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},pc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},hc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},fc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},mc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},gc=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},yc=e=>Re(e),wc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},_c=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},bc=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},$c=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},xc=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},oa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,vc=e=>{e.compute(Ce(e.inputs[0],"Tanh",oa))},sa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${oa("v")};
}
`,ua=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Sc=e=>{let t=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",ua,sa(t),void 0,e.inputs[0].dataType))},Tc=(e,t)=>{let n=et(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ec=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},Ic=(e,t)=>`
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
`,Mc=e=>`quick_gelu_impl(${e})`,kc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",Mc,Ic(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Cc,Ac,Rc,My=Z(()=>{ge(),we(),la(),Cc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ac=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=G.size(t)/4,o=Ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
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
  }`}},Rc=e=>{Cc(e.inputs),e.compute(Ac(e.inputs))}}),Oc,Nc,Tt,zc,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,ky=Z(()=>{he(),ge(),we(),Oc=(e,t,n,r,i,a,o,s,u,l,d,p)=>{let h,m;typeof s=="string"?h=m=(x,S)=>`${s}((${x}),(${S}))`:typeof s=="function"?h=m=s:(h=s.scalar,m=s.vector);let g=se("outputData",d,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),b;if(i)if(a){let x=G.size(t)===1,S=G.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||S?b=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(S,v,E="")=>{let M=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${g.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${S}[${v}] = ${E}(${h(M,k)});
          `};d===9?b=`
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
      }`},Nc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!G.areEqual(s,u),d=s,p=G.size(s),h=!1,m=!1,g=[l];if(l){let y=On.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),p=G.size(d);let w=G.size(s)===1,b=G.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,S=u.length>0&&u[u.length-1]%4===0;g.push(w),g.push(b),g.push(x),g.push(S);let v=1;for(let E=1;E<d.length;E++){let M=s[s.length-E],k=u[u.length-E];if(M===k)v*=M;else break}v%4===0?(m=!0,h=!0):(w||b||x||S)&&(h=!0)}else h=!0;return g.push(h),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Oc(y,s,u,d,h,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(G.size(d)/4)},...ce(s,u,d)]})}},Tt=(e,t,n,r,i,a)=>{e.compute(Nc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},zc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},Bc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},Pc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Dc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Uc=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Lc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},Fc=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Gc=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Wc=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},qc=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Vc,Hc,jc,Kc,Yc,Xc,Cy=Z(()=>{he(),ge(),Fe(),we(),Vc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Hc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,jc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Kc=(e,t,n,r)=>{let i=G.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],d=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=H(`input${y}`,r,l[y]),u.push("rank"),d.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)d.push(...ce(e[y].dims));d.push(...ce(n));let p=se("output",r,n.length),h=p.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,p)})()}

  ${Hc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${jc(o,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:g}},Yc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=G.normalizeAxis(t.axis,r.length);Vc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>G.size(s.dims)>0);e.compute(Kc(o,i,a,n[0].dataType),{inputs:o})},Xc=e=>Re({axis:e.axis})}),wn,_n,bn,ca,$n=Z(()=>{he(),ge(),wn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},_n=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},bn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ca=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[_u,bu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Qe,Qc,da=Z(()=>{Qe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Qc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zc,Ay=Z(()=>{Zc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Jn,pa,ha=Z(()=>{he(),ge(),we(),$n(),Jn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${le(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,le(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},pa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],d=o[o.length-1],p=Le(l),h=Le(d),m=Le(u),g=G.size(n)/p/m,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[G.size(w),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:d}];_n(t,x),x.push(...ce(w,o,s)),y&&x.push(...ce(e[2].dims)),x.push(...ce(b));let S=v=>{let E=Ji("batch_dims",e[0].dataType,w.length),M=H("a",e[0].dataType,o.length,h),k=H("b",e[1].dataType,s.length,p),T=se("output",e[0].dataType,b.length,p),R=Ke(T.type.tensor),P=wn(t,T.type.value,R),X=[M,k],W="";if(y){let F=i?p:1;X.push(H("bias",e[2].dataType,e[2].dims.length,F)),W=`${i?`value += bias[col / ${F}];`:`value += ${T.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];bn(t,V);let O=()=>{let F=`var a_data: ${M.type.value};`;for(let K=0;K<h;K++)F+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<m;K++){F+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let Q=0;Q<h;Q++)F+=`
            values[${K}] = fma(${k.type.value}(a_data${h===1?"":`[${Q}]`}), b_data${Q}, values[${K}]);
`}return F};return`
  ${v.registerUniforms(V).registerInternalVariables(E).declareVariables(...X,T)}
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
    var values: array<${T.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${O()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${W}
      ${P}
      let cur_indices = ${T.type.indices}(batch, row + i, col);
      let offset = ${T.indicesToOffset("cur_indices")};
      ${T.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:S}}}),Jc,ed,fa,ma,td,ga,nd,Or,ya=Z(()=>{he(),ge(),we(),$n(),ha(),da(),Jc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ed=(e,t)=>e?`
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
        }`,fa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:a,p=i?a:u,h=d/t[0],m=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&d%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
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
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Jc(i,r)}
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

          ${ed(i,h)}
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
            `,td=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ga=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=i?l:a,h=i?a:l;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],g=p/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

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
      ${td(i)}
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
`},nd=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ke(r[0].type.tensor);return`
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
    `},Or=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),d=r?r.slice(0,-2):n.slice(0,-2),p=G.size(d),h=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,w=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(g/b[0]/w[0]),Math.ceil(h/b[1]/w[1]),Math.ceil(p/b[2]/w[2])],S=y?4:1,v=[...u,h,m/S],E=v.length,M=[...l,m,g/S],k=M.length,T=[p,h,g/S],R=[{type:6,data:h},{type:6,data:g},{type:6,data:m}];_n(t,R),R.push(...ce(d,v,M));let P=["rank","rank"],X=e.length>2;X&&(R.push(...ce(e[2].dims)),P.push("rank")),R.push(...ce(T));let W=V=>{let O=d.length,F=Ji("batchDims",e[0].dataType,O,1),K=Ke(e[0].dataType),Q=H("a",e[0].dataType,E,S),ue=H("b",e[1].dataType,k,S),L=se("result",e[0].dataType,T.length,S),B=[Q,ue];if(X){let j=i?S:1;B.push(H("bias",e[2].dataType,e[2].dims.length,j))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];bn(t,A);let N=Ke(L.type.tensor),D=wn(t,L.type.value,N),U=nd(S,X,D,[F,Q,ue,L],i);return`
  ${V.registerUniforms(A).registerInternalVariables(F).declareVariables(...B,L)}
  ${U}
  ${y?fa(w,b,K,F):ga(w,b,K,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:W}}}),rd,id,Ry=Z(()=>{he(),Vt(),we(),$n(),da(),Ay(),ya(),rd=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let d=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},h=e?`
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
      ${d(o)}
    }
    return resData;`,S=e?t&&r?`
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
    return ${Qe(s,l)}(0.0);`,E=Qe(u,l),M=Qe(e?o:s,l),k=Qe(e?s:o,l),T=wn(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?S:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Qc(i)}
      ${T}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},id=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=n[0],h=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(d%4===0||d%3===0)&&g%4===0,w=l?g:h*m,b=l?h*m:g,x=[8,8,1],S=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/S[0]),Math.ceil(b/x[1]/S[1]),Math.ceil(p/x[2]/S[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let E=y?l&&d%4!==0?3:4:1,M=x[1]*S[1],k=x[0]*S[0],T=Math.max(x[0]*E,x[1]),R=r%M===0,P=i%k===0,X=a%T===0,W=y?[E,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];_n(t,V),V.push(...ce(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(V.push(...ce(e[2].dims)),O.push("rank")),V.push(...ce(n));let F=K=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];bn(t,Q);let ue=y?4:1,L=Ke(e[0].dataType),B=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,A=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),N=H("w",e[1].dataType,e[1].dims.length,ue),D=[A,N],U=se("result",e[0].dataType,n.length,ue);if(o){let j=H("bias",e[2].dataType,e[2].dims.length,ue);D.push(j),B+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Zc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(Q).declareVariables(...D,U)}
        ${B}
        ${rd(l,R,P,X,o,t,W[0],W[1],W[2],L)}
        ${y?fa(S,x,L,void 0,!l,T):ga(S,x,L,void 0,!l,T,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${P};${X};${M};${k};${T}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:V}),getShaderSource:F}}}),ad,wa,er,od,_a,sd,ud,ld,Oy=Z(()=>{he(),Vt(),ge(),we(),$n(),da(),ad=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},wa=e=>typeof e=="number"?[e,e,e]:e,er=(e,t)=>t<=1?e:e+(e-1)*(t-1),od=(e,t,n,r=1)=>{let i=er(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},_a=(e,t,n,r,i)=>{i==null&&(i=od(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},sd=(e,t,n,r,i,a,o,s,u,l)=>{let d,p,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=_a([t,n,r,1],[s,u,l],1,[i,a,o],e);p=g[0],h=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=_a([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);p=g[0],h=g[1],m=g[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(n/a),m=Math.ceil(r/o);let g=(p-1)*i+s-t,y=(h-1)*a+u-n,w=(m-1)*o+l-r,b=Math.floor(g/2),x=g-b,S=Math.floor(y/2),v=y-S,E=Math.floor(w/2),M=w-E;d={top:S,bottom:v,left:E,right:M,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:m}},ud=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,d,p;if(o==="channelsLast")[s,u,l,d,p]=e;else if(o==="channelsFirst")[s,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${o}`);let[h,,m,g,y]=t,[w,b,x]=wa(n),[S,v,E]=wa(r),M=er(m,S),k=er(g,v),T=er(y,E),{padInfo:R,outDepth:P,outHeight:X,outWidth:W}=sd(i,u,l,d,w,b,x,M,k,T),V=a?h*p:h,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,V,P,X,W]:o==="channelsLast"&&(O=[s,P,X,W,V]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:P,outHeight:X,outWidth:W,outChannels:V,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:k,effectiveFilterWidth:T,dilationDepth:S,dilationHeight:v,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},ld=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(ad(u.x.map(w=>n[w]))/s[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=G.size(n),h=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];_n(t,h),h.push(...ce(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(h.push(...ce(e[2].dims)),m.push("rank")),h.push(...ce(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];bn(t,b);let x=1,S=Ke(e[0].dataType),v=H("x",e[0].dataType,e[0].dims.length,d),E=H("W",e[1].dataType,e[1].dims.length,x),M=[v,E],k=se("result",e[0].dataType,n.length,x),T="";if(g){let X=H("bias",e[2].dataType,e[2].dims.length,x);M.push(X),T+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${o?le("coords",4,5):le("coords",1,5)}];
        }`}let R=Qe(d,S),P=wn(t,R,S);return`
            ${T}
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
              ${P}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${d};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),cd,dd,Ny=Z(()=>{he(),ge(),we(),$n(),cd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,p=u&&d>=4?Le(l):1,h=G.size(n)/p,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];_n(t,m),m.push(...ce(o,[s[0],s[1],s[2],s[3]/p]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ce([n[0],n[1],n[2],n[3]/p]));let y=w=>{let b=se("output",e[0].dataType,n.length,p),x=Ke(b.type.tensor),S=wn(t,b.type.value,x),v=H("x",e[0].dataType,o.length),E=H("w",e[1].dataType,s.length,p),M=[v,E];i&&M.push(H("b",e[2].dataType,e[2].dims,p));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];bn(t,k);let T=u?`
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
    ${T}
    ${a}
    ${S}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},dd=(e,t,n,r)=>{let i=e.length>2,a=Le(n[3]),o=Le(n[2]),s=G.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],d=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];_n(t,p),p.push(...ce(u,l,d));let h=(o-1)*t.strides[1]+l[1],m=g=>{let y=se("output",e[0].dataType,d.length,a),w=Ke(y.type.tensor),b=wn(t,y.type.value,w),x=H("x",e[0].dataType,u.length,a),S=H("w",e[1].dataType,l.length,a),v=[x,S];i&&v.push(H("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return bn(t,M),`
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
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:m}}}),pd,Nr,hd,zr,ba,$a,fd,md,xa,zy=Z(()=>{ge(),Ry(),Oy(),ya(),Ny(),$n(),ha(),en(),pd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],d=t.slice(2).map((h,m)=>h+(h-1)*(n[m]-1)),p=s.map((h,m)=>h+r[m]+r[m+u]).map((h,m)=>Math.floor((h-d[m]+i[m])/i[m]));return p.splice(0,0,o),p.splice(a?3:1,0,l),p},Nr=[2,3,1,0],hd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},zr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Er.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ba=e=>{let t=ca(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$a=(e,t,n,r)=>{let i=n.format==="NHWC",a=pd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),M.push(k)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(dd(M,n,a,r),{inputs:M}):e.compute(cd(M,n,a,r),{inputs:M});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&d===s&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],k,T,R,P=[];if(i){let V=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let O=s*u*l;k=t[0].reshape([1,M,O]),T=V.reshape([1,O,g]),R=[1,M,g]}else k=t[0].reshape([M,s*u,l]),T=V.reshape([1,l,g]),R=[M,h*m,g];P.push(k),P.push(T)}else k=t[0].reshape([M,l,s*u]),T=t[1].reshape([1,g,l]),R=[M,g,h*m],P.push(T),P.push(k);o&&P.push(t[2]);let X=R[2],W=P[0].dims[P[0].dims.length-1];X<8&&W<8?e.compute(pa(P,n,a,R,i,r),{inputs:P}):e.compute(Or(P,n,a,R,i,r),{inputs:P});return}let w=!0,b=e.kernelCustomData.wT??e.compute(dt(t[1],Nr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let S=i?h*m:g,v=i?g:h*m,E=d*p*l;e.compute(id(x,n,a,S,v,E,o,w,r),{inputs:x})},fd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=zr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);$a(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},md=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=zr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=ud(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ld(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},xa=(e,t)=>{if(hd(e.inputs,t),e.inputs[0].dims.length===3)fd(e,t);else if(e.inputs[0].dims.length===5)md(e,e.inputs,t);else{let n=zr(t,e.inputs);$a(e,e.inputs,n)}}}),gd,By=Z(()=>{he(),Vt(),ge(),we(),gd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],d=a?Le(u):1,p=a&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/d)*d,m=u-h,g=a?Le(l):1,y=a?l===1?d:g:1,w=G.size(i)/g,b=[Math.ceil(w/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:w},{type:12,data:S},{type:12,data:v},{type:12,data:E},{type:12,data:M},{type:6,data:k},{type:12,data:h},{type:12,data:u},{type:12,data:l},...ce(e[0].dims,e[1].dims)];r&&(T.push(...ce(e[2].dims)),x.push("rank")),T.push(...ce(i));let R=P=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Ke(e[0].dataType),V=a?1:2,O=a?2:3,F=a?3:1,K=H("W",e[1].dataType,e[1].dims.length,y),Q=H("Dy",e[0].dataType,e[0].dims.length,d),ue=[Q,K];r&&ue.push(H("bias",e[2].dataType,[i[F]].length,g));let L=se("result",e[0].dataType,i.length,g),B=()=>{let D="";if(p)d===4?D+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?D+=`
          dotProd = dotProd + dot(vec4<${W}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${W}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(D+=`
          dotProd = dotProd + dot(vec4<${W}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${W}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,d===1)D+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<d;U++)D+=`
            let wValue${U} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return D},A=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let D="";if(d===1){D+="dotProd = dotProd";for(let U=0;U<m;U++)D+=`
            + ${Q.getByOffset(`x_offset + ${U}`)} * ${K.getByOffset(`w_offset + ${U}`)}`;D+=";"}else if(d===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);D+=`
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
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${B()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${A()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(X).declareVariables(...ue,L)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${N}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${g}${p}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:R}}}),yd,wd,_d,va,bd,$d,Sa,xd,vd,Py=Z(()=>{By(),$n(),en(),yd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,wd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},_d=(e,t,n,r,i,a,o,s,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let h=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-d-(s?1:0);g<d;++g,++y){let w=e[y],b=p?w*o[g]:l[g],x=yd(w,o[g],a[g],t[y],n[g],b);wd(x,r,a,g,g+d),p&&l.push(o[g]*(w-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+d])}l.splice(0,0,h),l.splice(s?3:1,0,m)},va=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}_d(s,n,u,e.autoPad,e.group,i,l,r,o,a);let d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),d},bd=e=>{let t=ca(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:d,outputShape:p,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$d=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Sa=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(dt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(gd(a,n,r),{inputs:a})},xd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=va({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Sa(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},vd=(e,t)=>{if($d(e.inputs,t),e.inputs[0].dims.length===3)xd(e,t);else{let n=va(t,e.inputs);Sa(e,e.inputs,n)}}}),Sd,Td,Ed,Dy=Z(()=>{he(),ge(),Fe(),we(),Sd=(e,t,n,r)=>{let i=G.size(t),a=t.length,o=H("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=G.normalizeAxis(u,a),d=p=>{let h=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=le("uniforms.input_shape","uniforms.axis",a),g=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?m:h+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ce(t,t)]}),getShaderSource:d}},Td=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Sd(r,n,i,t),{inputs:[0]})},Ed=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Id,Md,kd,Cd,Ad,Uy=Z(()=>{he(),ge(),Fe(),we(),Id=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Md=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},kd=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=d?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=d?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(o),h=p.dims.length,m=e.dataType,g=H("a",m,h),y=se("output",m,h),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Md(s,h,g,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],S=G.size(x),v=p.dims,E=G.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ce(v,E)]}},getShaderSource:w}},Cd=(e,t)=>{Id(e.inputs),e.compute(kd(e.inputs[0],t))},Ad=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Br,tr,Ta,Rd,Od,Nd,zd,Ea,Bd,Pd,Dd,Ly=Z(()=>{he(),ge(),Fe(),we(),Br="[a-zA-Z]|\\.\\.\\.",tr="("+Br+")+",Ta="^"+tr+"$",Rd="("+tr+",)*"+tr,Od="^"+Rd+"$",Nd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},zd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Od)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ta)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(tr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Br,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ta))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Br,"g")),l=new Nd(r);return u==null||u.forEach((d,p)=>{if(d==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+h),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,p+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[s++],r)}),l}},Ea=e=>e+"_max",Bd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,d)=>H(`input${d}`,t,l)),a=G.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",g=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,E)=>{var M;if(n.rhs.symbolToIndices.has(E)){let k=(M=n.rhs.symbolToIndices.get(E))==null?void 0:M[0];k!==void 0&&n.lhs.forEach((T,R)=>{if(v.inputIndices.includes(R)){let P=T.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(X=>{d.push(`${i[R].indicesSet(`input${R}Indices`,X,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,T)=>{if(v.inputIndices.includes(T)){let R=k.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(P=>{g.push(`${i[T].indicesSet(`input${T}Indices`,P,`${E}`)}`)}),b.push(`prod *= ${i[T].getByIndices(`input${T}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ea(E)}; ${E}++) {`),w.push("}")});let S=x?[...d,`let sum = ${i.map((v,E)=>v.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...d,h,...y,...g,p,...b,m,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ea(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(p=>n.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=n.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let d=e.map((p,h)=>[...ce(p)]).reduce((p,h)=>p.concat(h),l);return d.push(...ce(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}},getShaderSource:u}},Pd=(e,t)=>{let n=new zd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Bd(i,e.inputs[0].dataType,n,r))},Dd=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Ud,Ia,Ld,Fd,Gd,Fy=Z(()=>{he(),ge(),we(),Ud=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ia=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Ld=(e,t)=>e.length>t.length?Ia(e,t):Ia(t,e),Fd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Ld(t,n),i=e[0].dataType,a=i===9||G.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(G.size(r)/s),l=p=>{let h=H("input",i,t.length,o),m=se("output",i,r.length,s),g;if(i===9){let y=(w,b,x="")=>`
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
    ${g}`},d=[{type:12,data:u},...ce(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Gd=e=>{Ud(e.inputs),e.compute(Fd(e.inputs),{inputs:[0]})}}),Wd,qd,Gy=Z(()=>{he(),ge(),we(),la(),Wd=e=>{let t=e[0].dataType,n=G.size(e[0].dims),r=G.size(e[1].dims),i=r%4===0,a=o=>{let s=H("x",t,[1],4),u=H("bias",t,[1],4),l=se("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(d).declareVariables(s,u,l)}

    ${sa(et(t))}

    ${o.mainStart(Nn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ua("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Nn/4)}})}},qd=e=>{e.inputs.length<2||G.size(e.inputs[1].dims)===0?Sc(e):e.compute(Wd(e.inputs))}}),Vd,Hd,jd,Kd,Wy=Z(()=>{he(),ge(),Fe(),we(),Vd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Hd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(G.size(o)/u),d=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...ce(e[0].dims,e[1].dims,o)],p=h=>{let m=H("data",e[0].dataType,e[0].dims.length,u),g=H("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),w=x=>{let S=r.length,v=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let E=0;E<S;E++)v+=`${S>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let E=0,M=0;E<i;E++)E===a?(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,M+=S):(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return v},b;if(e[0].dataType===9){let x=(S,v,E="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${m.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${E}(${m.getByOffset(`index${v}`)}[component${v}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},jd=e=>Re({axis:e.axis}),Kd=(e,t)=>{let n=e.inputs;Vd(n),e.compute(Hd(e.inputs,t))}}),Yd,Xd,Qd,qy=Z(()=>{he(),ge(),we(),Yd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],d=[a];l.push(...ce(t.dims,d));let p=h=>{let m=H("indices_data",t.dataType,t.dims.length),g=se("input_slice_offsets_data",12,1,1),y=[m,g],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Xd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=G.sizeToDimension(a,a.length-1),u=G.sizeFromDimension(r,t.batchDims+o),l=G.sizeToDimension(r,t.batchDims),d=G.sizeFromDimension(r,t.batchDims),p=s/l,h=new Array(o),m=u;for(let v=0;v<o;++v)h[o-1-v]=m,m*=r[t.batchDims+o-1-v];let g=Yd(e,n[1],h,t.batchDims,r,s,p,d,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=G.size(w),x=[{type:12,data:b},{type:12,data:u},...ce(n[0].dims,g.dims,w)],S=v=>{let E=H("data",n[0].dataType,n[0].dims.length),M=H("slice_offsets",12,g.dims.length),k=se("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:S},{inputs:[n[0],g]})},Qd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Zd,Jd,ep,tp,Vy=Z(()=>{he(),ge(),Fe(),we(),Zd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=G.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Jd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.gatherAxis,i),o=G.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=G.size(s),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...ce(...e.map((m,g)=>m.dims),s)],h=m=>{let g=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),b=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),S=[g,y,w];b&&S.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(v).declareVariables(...S,x)}
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
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${et(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},ep=(e,t)=>{let n=e.inputs;Zd(n,t),e.compute(Jd(e.inputs,t))},tp=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),np,rp,ip,ap,Hy=Z(()=>{he(),ge(),Fe(),we(),np=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},rp=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=G.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),d=G.size(l),p=H("input",r,i),h=H("indicesInput",o,a.length),m=se("output",r,l.length),g=[{type:12,data:d},{type:6,data:u},{type:12,data:s}];return g.push(...ce(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:y=>`
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
  }`}},ip=e=>Re({axis:e.axis}),ap=(e,t)=>{let n=e.inputs;np(n),e.compute(rp(e.inputs,t))}}),op,sp,up,lp,jy=Z(()=>{he(),ge(),we(),op=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},sp=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=wu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),d=Math.ceil(i/u),p=!0,h=G.size(s),m=[{type:12,data:p?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ce(e[2].dims)),g.push("rank")),m.push(...ce(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",v=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),M=v.type.value,k=null,T=[v,E];e.length===3&&(k=H("c",e[2].dataType,e[2].dims.length),T.push(k));let R=se("output",e[0].dataType,s.length);T.push(R);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(P).declareVariables(...T)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${S}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${M}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=H("a",e[0].dataType,e[0].dims),S=H("b",e[1].dataType,e[1].dims),v=null,E=[x,S];e.length===3&&(v=H("c",e[2].dataType,e[2].dims.length),E.push(v));let M=se("output",e[0].dataType,s.length);E.push(M);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],T="",R="";t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(k).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
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
        ${T}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},up=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},lp=(e,t)=>{op(e.inputs),e.compute(sp(e.inputs,t))}}),Ot,Ht,xn,vn,cp,dp,pp,hp,fp,mp,gp,yp,wp,_p,Ky=Z(()=>{he(),ge(),Fe(),we(),[Ot,Ht,xn,vn]=[0,1,2,3],cp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},dp=`
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
`,pp=e=>`
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
`,hp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,fp=e=>`
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
`,mp=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ot}] = batch;
     indices[${Ht}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xn}] = u32(r);
            indices[${vn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${xn}] = u32(clamp(r, 0, H - 1));
          indices[${vn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xn}] = gs_reflect(r, border[1], border[3]);
          indices[${vn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,gp=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,yp=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ot,Ht,xn,vn]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=G.size(a),l=[{type:12,data:u},...ce(e[0].dims,r,a)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${dp}
  ${pp(s)}
  ${hp(t)}
  ${fp(t)}
  ${mp(n,s,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xn}]);
      let W_in = i32(uniforms.x_shape[${vn}]);

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
      var grid_indices = vec3<u32>(indices[${Ot}], indices[${xn}], indices[${vn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${gp(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=G.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:d}},wp=(e,t)=>{cp(e.inputs),e.compute(yp(e.inputs,t))},_p=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),nt,bp,$p,Ma,xp,nr,vp,Sp=Z(()=>{he(),ge(),Fe(),Ki(),aa(),we(),en(),nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,bp=(e,t)=>{let n=e[0],r=nt(e,1),i=nt(e,2),a=nt(e,3),o=nt(e,4),s=nt(e,5),u=nt(e,6),l=nt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],p=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,g=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&G.size(u.dims)&&G.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&G.size(u.dims)||l&&G.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&G.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&G.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,S=0;if(o&&G.size(o.dims)>0){S=8;let k=o.dims;throw k.length===1?k[0]===d?S=1:k[0]===3*d+2&&(S=3):k.length===2&&k[0]===d&&k[1]===x&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,E=h;if(i&&G.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],v=!0}}let M=!1;if(o&&G.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&G.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==d||s.dims[1]!==t.numHeads||s.dims[2]!==p||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:M,passPastInKv:v,qkvFormat:b}},$p=e=>Re({...e}),Ma=Re({perm:[0,2,1,3]}),xp=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=G.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],d=p=>{let h=se("qkv_with_bias",t.dataType,s),m=H("qkv",t.dataType,s),g=H("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(m,g,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},nr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&G.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=xp(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(dt(u,Ma.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(dt(u,Ma.perm),{inputs:[u],outputs:[-1]})[0]},vp=(e,t)=>{let n=bp(e.inputs,t),r=e.inputs[0],i=nt(e.inputs,1),a=nt(e.inputs,2),o=nt(e.inputs,3),s=nt(e.inputs,4),u=nt(e.inputs,5),l=nt(e.inputs,6),d=nt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(p)return Qn(e,h,i,a,s,void 0,l,d,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=nr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Qn(e,h,m,g,s,void 0,l,d,u,n)}}),Tp,Ep,Ip,Mp,ka,kp,Cp,Ap=Z(()=>{he(),ge(),Fe(),we(),Tp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ep=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Ip=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Mp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},ka=(e,t)=>{let n=e[0].dims,r=G.size(n),i=e[0].dataType,a=G.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=H("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[],p=0,h=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){p+=t.splitSizes[g],u[g]=p;let y=n.slice();y[a]=t.splitSizes[g],d.push(y),o[g]=se(`output${g}`,i,y.length),l.push({dims:d[g],dataType:e[0].dataType})}h.push({type:12,data:u},...ce(n,...d));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Ip(u.length)}
  ${Mp(o)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},kp=(e,t)=>{Tp(e.inputs);let n=e.inputs.length===1?t:Ep(e.inputs,t);e.compute(ka(e.inputs,n),{inputs:[0]})},Cp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Rp,Pr,Op,Np=Z(()=>{he(),ge(),Fe(),we(),Rp=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!G.areEqual(r.dims,[])&&!G.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!G.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],p=G.sizeFromDimension(n.dims,1)/l,h=s===0?i.dims[1]*2:p/o;if(s>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Pr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=G.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,d=e[2].dims[1],p=i===0?d*2:l/r,h=new Array(o,u,l/p,p-d),m=G.computeStrides(h),g=[{type:1,data:a},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,p,u*p,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),S=H("cos_cache",e[2].dataType,e[2].dims.length),v=H("sin_cache",e[3].dataType,e[3].dims.length),E=se("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(b,x,S,v,E)}

        ${w.mainStart(Nn)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
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
            let re = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(h)/Nn)},programUniforms:g})}},Op=(e,t)=>{Rp(e.inputs,t),e.compute(Pr(e.inputs,t))}}),zp,Bp,Ca,Pp,Dp,Yy=Z(()=>{Fe(),he(),aa(),Sp(),Ap(),en(),Np(),we(),zp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],d=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=l,h=0,m=!r||r.dims.length===0,g=Math.floor(m?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);m&&(d=g*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,S=!1,v=t.kvNumHeads?g*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],S=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=E.dims.reduce((k,T)=>k*T,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let k=0;k<E.dims.length;k++)if(E.dims[k]!==1&&E.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${E.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:v,headSize:g,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:b}},Bp=Re({perm:[0,2,1,3]}),Ca=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(dt(r,Bp.perm),{inputs:[r],outputs:[-1]})[0]),r},Pp=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=d=>{let p=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),m=se("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(g).declareVariables(p,h,m)}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Dp=(e,t)=>{var v;let n=zp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[h,m,g]=!i&&!a?e.compute(ka([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let E=e.compute(Pp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],k=e.inputs[8],T=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[h,E,M,k],P=[-1];y=e.compute(Pr(R,T),{inputs:R,outputs:P})[0],R.splice(0,1,m);let X=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Pr(R,X),{inputs:R,outputs:P})[0]}let b=nr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=Ca(e,t.doRotary?w:m,n),S=Ca(e,g,n);Qn(e,b,x,S,void 0,void 0,o,s,void 0,n,u,l)}}),Aa,Up,Lp,Fp,Xy=Z(()=>{he(),ge(),en(),we(),Aa=(e,t,n,r,i,a,o,s)=>{let u=Le(a),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=i*o,h=64;p===1&&(h=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],w=[];w.push(...ce(m,g));let b=x=>{let S=H("x",t.dataType,3,u),v=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),M=se("output",1,3,2),k=[S,v,E,M];return`
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
      let value = ${l}(${S.get("batch","channel","h")});
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
      let sum_final = ${Jt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Jt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:p},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Up=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=G.sizeFromDimension(r,a),l=Le(u),d=G.size(i)/l,p=Aa(e,t[0],t[1],t[2],o,u,s,n.epsilon),h=[o,s,u/l],m=[o,s],g=["type","none"],y=w=>{let b=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,m.length,2),S=se("output",t[0].dataType,h.length,l),v=[b,x,S];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ce(h,m,h)]}),getShaderSource:y},{inputs:[t[0],p]})},Lp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=G.sizeFromDimension(r,1)/o,u=Le(o),l=G.size(i)/u,d=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],p=["type","type"],h=!1,m=[0,r.length-1];for(let b=0;b<r.length-2;b++)h=h||r[b+1]!==1,m.push(b+1);h=h&&r[r.length-1]!==1;let g=h?e.compute(dt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[m[x]])),y=Aa(e,g,t[1],t[2],a,s,o,n.epsilon),w=b=>{let x=Ke(t[0].dataType),S=u===1?"vec2f":`mat${u}x2f`,v=k=>{let T=k===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${T}))`;case 2:return`vec2<${x}>(${R}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${x}>(${R}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),M=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],y]})},Fp=(e,t)=>{t.format==="NHWC"?Lp(e,e.inputs,t):Up(e,e.inputs,t)}}),Gp,Wp,qp,Qy=Z(()=>{he(),ge(),we(),Gp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Wp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=G.normalizeAxis(t.axis,i.length),l=G.sizeToDimension(i,u),d=G.sizeFromDimension(i,u),p=G.size(a.dims),h=o?G.size(o.dims):0;if(p!==d||o&&h!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let m=[];for(let E=0;E<i.length;++E)E<u?m.push(i[E]):m.push(1);let g=Le(d),y=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/g)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,S=E=>{let M=Ke(e[0].dataType),k=[H("x",e[0].dataType,e[0].dims,g),H("scale",a.dataType,a.dims,g)];o&&k.push(H("bias",o.dataType,o.dims,g)),k.push(se("output",e[0].dataType,s,g)),b&&k.push(se("mean_data_output",1,m)),x&&k.push(se("inv_std_output",1,m));let T=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(T).declareVariables(...k)}
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
    let mean = ${Jt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Jt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${zn(M,g,"x[j + offset]")};
      let f32scale = ${zn(M,g,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${zn(M,g,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:m,dataType:1}),x&&v.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:S}},qp=(e,t)=>{Gp(e.inputs),e.compute(Wp(e.inputs,t,e.outputCount))}}),Vp,Hp,Zy=Z(()=>{ge(),ha(),ya(),Vp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Hp=e=>{Vp(e.inputs);let t=On.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(pa(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=G.size(e.inputs[0].dims.slice(0,-2)),o=G.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],d=[s,u];e.compute(Or(d,{activation:""},t,l),{inputs:d})}else e.compute(Or(e.inputs,{activation:""},t))}}}),jp,Kp,Yp,Xp,Qp,Jy=Z(()=>{he(),ge(),Fe(),we(),jp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!G.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(G.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(G.size(u)!==l)throw new Error("zeroPoints input size error.")}},Kp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=G.size(s),l=e[1].dims[2]/4,d=e[0].dataType,p=Le(t.k),h=Le(l),m=Le(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,w=G.size(g)/m/y,b=64,x=[],S=[u,i,a/p],v=G.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),x.push(...ce(S)),x.push(...ce(v)),x.push(...ce(e[2].dims)),e.length===4&&x.push(...ce(G.convertShape(e[3].dims)));let E=[u,i,o/m];x.push(...ce(E));let M=k=>{let T=S.length,R=H("a",e[0].dataType,T,p),P=H("b",12,v.length,h),X=H("scales",e[2].dataType,e[2].dims.length),W=[R,P,X],V=e.length===4?H("zero_points",12,e[3].dims.length):void 0;V&&W.push(V);let O=E.length,F=se("output",e[0].dataType,O,m),K=Ke(e[0].dataType),Q=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),L=Math.floor(ue/8),B=()=>{let D="";for(let U=0;U<L;U++){let j=U*t.bits*4,re=j+t.bits;D+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${Q};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/p}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${R.getByOffset(`input_offset${U>0?U:""}`)};
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
          `}return D},A=()=>{let D=`
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
            let b${U}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,D};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${y*b}>;
        ${k.declareVariables(...W,F)}
        ${k.mainStart([b,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${A()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${N()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${B()}
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${m};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:d}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:M}},Yp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=G.size(s),l=e[1].dims[2]/4,d=e[0].dataType,p=Le(t.k),h=Le(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,w=g/y,b=Math.floor(32/t.bits),x=w*h*b,S=x/p,v=x/t.blockSize,E=G.size(m)/y,M=[],k=[u,i,a/p],T=G.convertShape(e[1].dims).slice();T.splice(-1,1,l/h),M.push(...ce(k)),M.push(...ce(T)),M.push(...ce(e[2].dims)),e.length===4&&M.push(...ce(G.convertShape(e[3].dims)));let R=[u,i,o];M.push(...ce(R));let P=X=>{let W=k.length,V=H("a",e[0].dataType,W,p),O=H("b",12,T.length,h),F=H("scales",e[2].dataType,e[2].dims.length),K=[V,O,F],Q=e.length===4?H("zero_points",12,e[3].dims.length):void 0;Q&&K.push(Q);let ue=R.length,L=se("output",e[0].dataType,ue),B=Ke(e[0].dataType),A=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${B}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${B}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${B}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${B}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${S}>;
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
            let a_col_start = tile * ${S};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${S}; a_offset += ${g})
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
            let zero_point = ${B}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${B}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let N=Math.floor(b/8),D="";for(let U=0;U<N;U++){let j=U*t.bits*4,re=j+t.bits;D+=`
              ${A()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${B}>(${Array.from({length:4},(te,Y)=>`${B}(b_value_lower[${Y}]), ${B}(b_value_upper[${Y}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${B}>(${Array(8).fill("zero_point").join(",")})) * scale;
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:E},programUniforms:M}),getShaderSource:P}},Xp=(e,t)=>{jp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Yp(e.inputs,t)):e.compute(Kp(e.inputs,t))},Qp=e=>Re(e)}),Zp,Jp,eh,th,nh,rh,ih,ah,oh,ew=Z(()=>{he(),ge(),we(),Zp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Jp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},eh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},th=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},nh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},rh=(e,t,n)=>{switch(n.mode){case 0:return Jp(e,t,n.pads.length);case 1:return eh(e,t,n.pads.length);case 2:return th(e,t,n.pads.length);case 3:return nh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},ih=(e,t)=>{let n=G.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=G.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...ce(e[0].dims,n));let s=["rank"],u=l=>{let d=se("output",e[0].dataType,n.length),p=H("x",e[0].dataType,r.length),h=p.type.value,m=rh(d,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?h:"f32"}),`
            ${l.registerUniforms(g).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(n)/64)},programUniforms:a}),getShaderSource:u}},ah=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},oh=(e,t)=>{Zp(e.inputs);let n=ah(e.inputs,t);e.compute(ih(e.inputs,n),{inputs:[0]})}}),rr,Ra,Oa,Na,za,sh,uh,Ba,Pa,lh,ch,Da,dh,ph,Ua,hh,fh,mh,gh,tw=Z(()=>{mt(),he(),ge(),we(),rr=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ra=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Er.adjustPoolAttributes(n,i,o,s,u,l);let d=Er.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let h=d.slice();return h.push(h.splice(1,1)[0]),[p,r?h:d]},Oa=(e,t)=>{let n=t.format==="NHWC",r=G.size(e),i=G.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:d}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,p,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=G.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[a,o,!!u,!1,!1]}},Na=(e,t,n,r,i,a,o,s,u,l,d,p)=>{let h=i.format==="NHWC",m=t.type.value,g=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(h?2:1);if(d?y=`
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
                }`,i.kernelShape.length===2){let S=n-(h?3:2);p?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
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
            }`}},za=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,sh=e=>`${za(e)};${e.countIncludePad}`,uh=e=>`${za(e)};${e.storageOrder};${e.dilations}`,Ba=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Pa=(e,t,n,r)=>{let[i,a]=Ra(t,r,n),o=H("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[d,p,h,m,g]=Oa(a,i);d.push(...ce(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:d}),getShaderSource:w=>Na(w,o,t.dims.length,a.length,i,u,l,0,p,h,m,g)}},lh=e=>{let t=e.count_include_pad!==0,n=Ba(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:sh(r)}},ch=(e,t)=>{rr(e.inputs),e.compute(Pa("AveragePool",e.inputs[0],!1,t))},Da={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},dh=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},ph=(e,t)=>{rr(e.inputs),e.compute(Pa("GlobalAveragePool",e.inputs[0],!0,t))},Ua=(e,t,n,r)=>{let[i,a]=Ra(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=H("x",t.dataType,t.dims.length),l=["rank"],[d,p,h,m,g]=Oa(a,i);return d.push(...ce(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:d}),getShaderSource:y=>Na(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,p,h,m,g)}},hh=(e,t)=>{rr(e.inputs),e.compute(Ua("MaxPool",e.inputs[0],!1,t))},fh=e=>{let t=e.storage_order,n=e.dilations,r=Ba(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:uh(i)}},mh=e=>{let t=e.format;return{format:t,...Da,cacheKey:t}},gh=(e,t)=>{rr(e.inputs),e.compute(Ua("GlobalMaxPool",e.inputs[0],!0,t))}}),yh,wh,_h,bh,nw=Z(()=>{he(),ge(),Fe(),we(),yh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},wh=(e,t)=>{let n=G.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=G.size(a),u=r===3||r===2,l=u?[Math.ceil(G.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(G.size(p.dims)/4)]:p.dims:void 0,m=d.length===0||d.length===1&&d[0]===1,g=m===!1&&d.length===1,y=Le(s),w=m&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,S=H("input",u?12:r,l.length,x),v=H("scale",o,d.length),E=p?H("zero_point",u?12:r,h.length):void 0,M=se("output",o,a.length,b),k=[S,v];E&&k.push(E);let T=[l,d];p&&T.push(h);let R=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...ce(...T,a)],P=X=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(W).declareVariables(...k,M)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

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
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:R})}},_h=(e,t)=>{yh(e.inputs,t),e.compute(wh(e.inputs,t))},bh=e=>Re({axis:e.axis,blockSize:e.blockSize})}),$h,xh,vh,rw=Z(()=>{mt(),he(),we(),$h=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},xh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...ce(a)],u=l=>{let d=se("output",r,a.length),p=d.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},vh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&$h(t,n,r),e.compute(xh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Sh,Th,Eh,Ih,iw=Z(()=>{he(),ge(),Fe(),we(),Sh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Th=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(G.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=G.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...ce(e[1].dims,e[2].dims,i)],d=p=>{let h=H("indices",e[1].dataType,e[1].dims.length),m=H("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Ou("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
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
    ${Sh(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Eh=e=>Re({reduction:e.reduction}),Ih=(e,t)=>{e.compute(Th(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Mh,kh,Ch,La,Ah,Rh,Oh,Nh,zh,Bh,Ph,Dh,Fa,Uh,Lh,Fh,Gh,Wh,qh,Vh,aw=Z(()=>{he(),ge(),Fe(),we(),Mh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},kh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Ch=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(d=>a.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Mh(r,t),t.axes.length>0&&kh(r,t.axes,l).forEach((d,p)=>r[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},La=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Ah=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Rh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Oh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Nh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},zh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Bh=(e,t,n,r,i)=>`
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
    }`,Ph=(e,t,n,r,i,a,o)=>`
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
    }`,Dh=(e,t)=>`
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
`:"",Uh=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
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
    }`},Lh=(e,t,n,r,i,a,o,s,u,l)=>{let d=n.length===2,[p,h]=d?[0,1]:[2,3],m=e.type.value,g=y=>{let w=y===p?"row":"col";return`
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
    `},Fh=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Fa(e,l,a,3)}
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
    }`},Gh=(e,t,n,r,i,a)=>{let o=e.dims,s=Oh(a,t.axes,o.length),u=Nh(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,S)=>x===0?1:u[S]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=zh(o,l,t)));let d=se("output",e.dataType,u.length),p=H("input",e.dataType,o.length),h=G.size(u),m=o.length===u.length&&o.every((x,S)=>x===u[S]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=p.type.value,b=x=>`
      ${m?"":`
      ${Ah(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Dh(p,o)};
              ${Rh(t.nearestMode,n,w)};
              ${Ph(p,d,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Bh(d,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Uh(p,d,o,g,y)}`;if(o.length===3||o.length===5)return`${Fh(p,d,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Lh(p,d,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(p,d)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:s},...ce(o,u)]})}},Wh=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},qh=(e,t)=>{let n=[],r=[],i=[],a=Wh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ch(e.inputs,t,a,n,r,i),e.compute(Gh(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Vh=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Hh,jh,Kh,ow=Z(()=>{he(),ge(),we(),Hh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},jh=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=G.size(a),s=a,u=o,l=a.slice(-1)[0],d=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,w=64,b=Le(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],S=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[H("x",e[0].dataType,e[0].dims,b),H("skip",e[1].dataType,e[1].dims,b),H("gamma",e[2].dataType,e[2].dims,b)];p&&k.push(H("beta",e[3].dataType,e[3].dims,b)),h&&k.push(H("bias",e[4].dataType,e[4].dims,b)),k.push(se("output",e[0].dataType,s,b)),m&&k.push(se("mean_output",1,d)),g&&k.push(se("inv_std_output",1,d)),y&&k.push(se("input_skip_bias_sum",e[0].dataType,s,b));let T=Ke(e[0].dataType),R=Ke(1,b);return`

      ${E.registerUniforms(M).declareVariables(...k)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

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
          let bias_value = ${h?"bias[offset1d + i]":T+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${zn(T,b,"value")};
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
        let mean = ${Jt("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Jt("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${T}(mean)`}) *
            ${T}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:d,dataType:1}),n>2&&v.push({dims:d,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${m};${g};${y}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:S,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Kh=(e,t)=>{Hh(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(jh(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Yh,ir,Xh,Ga,Qh,Zh,Jh,ef,sw=Z(()=>{he(),ge(),Fe(),we(),Yh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ir=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Xh=(e,t)=>{if(e.length>1){let n=ir(e,1),r=ir(e,2),i=ir(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Ga=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Qh=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Zh=(e,t)=>{let n=e[0].dims,r=G.size(n),i=t.axes.length>0?G.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ir(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,x)=>Ga(b,x,n,i,a)),s=t.ends.map((b,x)=>Ga(b,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,S)=>{if(b<0){let v=(s[x]-o[x])/b,E=o[x],M=E+v*a[x];o[x]=M,s[x]=E,S[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let d={dims:l,dataType:e[0].dataType},p=se("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),m=G.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...ce(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(g).declareVariables(h,p)}
        ${Qh(h,p,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Jh=(e,t)=>{Yh(e.inputs,t);let n=Xh(e.inputs,t);e.compute(Zh(e.inputs,n),{inputs:[0]})},ef=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),tf,nf,rf,af,uw=Z(()=>{he(),ge(),Fe(),en(),we(),tf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},nf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=G.size(r),a=r.length,o=G.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,T)=>T),l[o]=a-1,l[a-1]=o,u=e.compute(dt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let d=u.dims,p=d[a-1],h=i/p,m=Le(p),g=p/m,y=64;h===1&&(y=256);let w=(k,T)=>T===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:T===2?`max(${k}.x, ${k}.y)`:T===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=H("x",u.dataType,u.dims,m),x=se("result",u.dataType,u.dims,m),S=b.type.value,v=Ke(u.dataType)==="f32"?`var threadMax = ${S}(-3.4028234663852886e+38f);`:`var threadMax = ${S}(-65504.0h);`,E=k=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
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
          rowMaxShared = ${S}(${w("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
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
          rowSumShared = ${S}(${Jt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${S}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:g}]}),getShaderSource:E},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(dt(M,l),{inputs:[M]})},rf=(e,t)=>{tf(e.inputs),nf(e,t)},af=e=>Re({axis:e.axis})}),Wa,of,sf,uf,lf,lw=Z(()=>{he(),ge(),we(),Wa=e=>Array.from(e.getBigInt64Array(),Number),of=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Wa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},sf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},uf=(e,t)=>{let n=e[0].dims,r=t??Wa(e[1]),i=sf(n,r),a=G.size(i),o=e[0].dataType,s=H("input",o,n.length),u=se("output",o,i.length),l=d=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ce(e[0].dims,i)]}),getShaderSource:l}},lf=e=>{of(e.inputs),e.compute(uf(e.inputs),{inputs:[0]})}}),cf,df,pf,cw=Z(()=>{he(),ge(),we(),cf=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=H("a_data",t[1].dataType,t[1].dims.length,4),s=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,h,m)=>`select(${h}, ${p}, ${m})`;if(!r)l=a.setByOffset("global_idx",d(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,b=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${h}[${m}] = ${g}(${d(y,w,b)});
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
      }`},df=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(G.areEqual(t,n)&&G.areEqual(n,r)),o=t,s=G.size(t);if(a){let l=On.calcShape(On.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=G.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>cf(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...ce(r,t,n,o)]})}},pf=e=>{e.compute(df(e.inputs))}}),hf,dw=Z(()=>{Ty(),aa(),Ey(),Iy(),My(),ky(),Cy(),zy(),Py(),Dy(),Uy(),Ly(),Fy(),Gy(),Wy(),qy(),Vy(),Hy(),jy(),Ky(),Yy(),Xy(),Qy(),Zy(),Jy(),Sp(),ew(),tw(),nw(),rw(),iw(),na(),aw(),Np(),ow(),sw(),uw(),Ap(),lw(),en(),la(),cw(),hf=new Map([["Abs",[Hl]],["Acos",[jl]],["Acosh",[Kl]],["Add",[zc]],["ArgMax",[Al,ia]],["ArgMin",[Cl,ia]],["Asin",[Yl]],["Asinh",[Xl]],["Atan",[Ql]],["Atanh",[Zl]],["Attention",[Pl]],["AveragePool",[ch,lh]],["BatchNormalization",[Fl]],["BiasAdd",[ql]],["BiasSplitGelu",[Rc]],["Cast",[ec,Jl]],["Ceil",[rc]],["Clip",[nc]],["Concat",[Yc,Xc]],["Conv",[xa,ba]],["ConvTranspose",[vd,bd]],["Cos",[ic]],["Cosh",[ac]],["CumSum",[Td,Ed]],["DepthToSpace",[Cd,Ad]],["DequantizeLinear",[_h,bh]],["Div",[Bc]],["Einsum",[Pd,Dd]],["Elu",[oc,Zn]],["Equal",[Pc]],["Erf",[sc]],["Exp",[uc]],["Expand",[Gd]],["FastGelu",[qd]],["Floor",[lc]],["FusedConv",[xa,ba]],["Gather",[Kd,jd]],["GatherElements",[ap,ip]],["GatherBlockQuantized",[ep,tp]],["GatherND",[Xd,Qd]],["Gelu",[cc]],["Gemm",[lp,up]],["GlobalAveragePool",[ph,dh]],["GlobalMaxPool",[gh,mh]],["Greater",[Fc]],["GreaterOrEqual",[Wc]],["GridSample",[wp,_p]],["GroupQueryAttention",[Dp]],["HardSigmoid",[wc,yc]],["InstanceNormalization",[Fp]],["LayerNormalization",[qp]],["LeakyRelu",[dc,Zn]],["Less",[Gc]],["LessOrEqual",[qc]],["Log",[Ec]],["MatMul",[Hp]],["MatMulNBits",[Xp,Qp]],["MaxPool",[hh,fh]],["Mul",[Dc]],["MultiHeadAttention",[vp,$p]],["Neg",[hc]],["Not",[pc]],["Pad",[oh]],["Pow",[Uc]],["QuickGelu",[kc,Zn]],["Range",[vh]],["Reciprocal",[fc]],["ReduceMin",[Tl]],["ReduceMean",[bl]],["ReduceMax",[Sl]],["ReduceSum",[Il]],["ReduceProd",[El]],["ReduceL1",[$l]],["ReduceL2",[xl]],["ReduceLogSum",[kl]],["ReduceLogSumExp",[vl]],["ReduceSumSquare",[Ml]],["Relu",[mc]],["Resize",[qh,Vh]],["RotaryEmbedding",[Op]],["ScatterND",[Ih,Eh]],["Sigmoid",[gc]],["Sin",[_c]],["Sinh",[bc]],["Slice",[Jh,ef]],["SkipLayerNormalization",[Kh]],["Split",[kp,Cp]],["Sqrt",[$c]],["Softmax",[rf,af]],["Sub",[Lc]],["Tan",[xc]],["Tanh",[vc]],["ThresholdedRelu",[Tc,Zn]],["Tile",[lf]],["Transpose",[Fu,Gu]],["Where",[pf]]])}),ff,pw=Z(()=>{mt(),Vt(),we(),ff=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Rt(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),_t(e.programInfo.name)}dispose(){}build(e,t){Rt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=zu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return _t(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),mf={};An(mf,{WebGpuBackend:()=>_f});var gf,yf,wf,_f,hw=Z(()=>{mt(),he(),Vt(),$u(),vy(),dw(),pw(),gf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},yf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${gf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},wf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},_f=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new wf(o),this.gpuDataManager=Au(this),this.programManager=new ff(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ui(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,d=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),outputsMetadata:h.map(b=>({dims:b.dims,dataType:qt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let b="";p.forEach((S,v)=>{b+=`input[${v}]: [${S.dims}] | ${qt(S.dataType)}, `});let x="";h.forEach((S,v)=>{x+=`output[${v}]: [${S.dims}] | ${qt(S.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${d}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}_r("GPU",`${d}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),_t()}run(e,t,n,r,i,a){Rt(e.name);let o=[];for(let x=0;x<t.length;++x){let S=t[x].data;if(S===0)continue;let v=this.gpuDataManager.get(S);if(!v)throw new Error(`no GPU data for input: ${S}`);o.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?s.map((x,S)=>S):n;if(d.length!==s.length)throw new Error(`Output size ${d.length} must be equal to ${s.length}.`);let p=[],h=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=a)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let S=d[x]===-1,v=d[x]===-2,E=S||v?i(s[x].dataType,s[x].dims):r(d[x],s[x].dataType,s[x].dims);if(p.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(S&&this.temporaryData.push(M),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(M)}h.push(M)}if(o.length!==t.length||h.length!==p.length){if(h.length===0)return _t(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,S=[];l.forEach(k=>{let T=typeof k.data=="number"?[k.data]:k.data;if(T.length===0)return;let R=k.type===10?2:4,P,X;k.type===10?(X=T.length>4?16:T.length>2?8:T.length*R,P=T.length>4?16:R*T.length):(X=T.length<=2?T.length*R:16,P=16),x=Math.ceil(x/X)*X,S.push(x);let W=k.type===10?8:4;x+=T.length>4?Math.ceil(T.length/W)*P:T.length*R});let v=16;x=Math.ceil(x/v)*v;let E=new ArrayBuffer(x);l.forEach((k,T)=>{let R=S[T],P=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(E,R,P.length).set(P);else if(k.type===12)new Uint32Array(E,R,P.length).set(P);else if(k.type===10)new Uint16Array(E,R,P.length).set(P);else if(k.type===1)new Float32Array(E,R,P.length).set(P);else throw new Error(`Unsupported uniform type: ${qt(k.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,x),this.gpuDataManager.release(M.id),m={offset:0,size:x,buffer:M.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,w=yf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,g),this.programManager.setArtifact(w,b),Ee("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let S=l[x],v=S.type,E=typeof S.data=="number"?1:S.data.length,[M,k]=b.uniformVariablesInfo[x];if(v!==M||E!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${k}, got type ${v} with size ${E} in program "${b.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,h,g,m),_t(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=hf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Qi(this,e,t);return Li(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),bf={};An(bf,{init:()=>xf});var Dr,$f,xf,fw=Z(()=>{he(),Vt(),ge(),xy(),Dr=class J0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=G.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(G.size(t)!==G.size(this.dims))throw new Error("Invalid new shape");return new J0(this.module,this.dataType,this.data,t)}},$f=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),d=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),h=[];for(let m=0;m<p;m++)h.push(Number(e.getValue(r*i++,a)));s.push(new Dr(e,l,d,h))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Dr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=yn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Dr(this.module,s,d,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},xf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(hw(),Vn(mf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,d=!1)=>{if(d)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),p)}},async(s,u,l)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,d)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let p=new $f(t,o,Number(u));return o.computeKernel(Number(s),p,d)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Iu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,d)=>a.ensureTensor(o,s,u,l,d),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),vf,qa,Va,tn,Sf,Ha,Ur,ja,Ka,Ya,Xa,Qa,Za,Tf=Z(()=>{mt(),_y(),by(),he(),fn(),Ni(),du(),vf=(e,t)=>{Pe()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},qa=async e=>{vf(e.wasm.numThreads,Tr(e.logLevel))},Va=async(e,t)=>{var r,i;(i=(r=Pe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(fw(),Vn(bf)).init;t==="webgpu"&&await a("webgpu",Pe(),e,n),t==="webnn"&&await a("webnn",Pe(),e)}},tn=new Map,Sf=e=>{let t=Pe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Ha=(e,t)=>{let n=Pe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],d=[];for(let p=0;p<l;p++){let h=Number(n.getValue(i+8+p*a,"*"));d.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(p+l)*a,"*")))}return[s,u,d]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Ur=e=>{let t=Pe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ja=async(e,t)=>{var p,h,m,g;let n,r,i=Pe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Ur(e);let a=0,o=0,s=0,u=[],l=[],d=[];try{if([o,u]=await cu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let T=[];for(let R of t.externalData){let P=typeof R=="string"?R:R.path;T.push(Di(typeof R=="string"?R:R.data).then(X=>{i.mountExternalData(P,X)}))}await Promise.all(T)}for(let T of(t==null?void 0:t.executionProviders)??[])if((typeof T=="string"?T:T.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof T!="string"){let R=T,P=R==null?void 0:R.context,X=R==null?void 0:R.gpuDevice,W=R==null?void 0:R.deviceType,V=R==null?void 0:R.powerPreference;P?i.currentContext=P:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:W,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&Ne("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Sf(a),b=!!(t!=null&&t.enableGraphCapture),x=[],S=[],v=[],E=[],M=[];for(let T=0;T<y;T++){let[R,P,X]=Ha(a,T);R===0&&Ne("Can't get an input name."),l.push(R);let W=i.UTF8ToString(R);x.push(W),v.push(P===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:qt(P),shape:X})}for(let T=0;T<w;T++){let[R,P,X]=Ha(a,T+y);R===0&&Ne("Can't get an output name."),d.push(R);let W=i.UTF8ToString(R);S.push(W),E.push(P===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:qt(P),shape:X});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[W])??"cpu",O=i.webnnIsGraphOutput;if(V==="cpu"&&O&&O(a,W)){M.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(b&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(V)}}let k=null;return M.some(T=>T==="gpu-buffer"||T==="ml-tensor"||T==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(T=>T==="ml-tensor-cpu-output"?"ml-tensor":T).map(T=>Pi(T))}),tn.set(a,[a,l,d,k,b,!1]),[a,x,S,v,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),d.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ne("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Ka=e=>{var u,l,d;let t=Pe(),n=tn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),tn.delete(e)},Ya=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Pe(),u=s.PTR_SIZE,l=e[0],d=e[1],p=e[3],h=p,m,g;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let b=e[2].gpuBuffer;g=yn(gn(l),d);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,b,g)}}else if(p==="ml-tensor"){let b=e[2].mlTensor;g=yn(gn(l),d);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,b,gn(l),d)}else{let b=e[2];if(Array.isArray(b)){g=u*b.length,m=s._malloc(g),n.push(m);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(m+x*u,bt(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,S=s.webnnIsGraphOutput;if(l!=="string"&&x&&S){let v=s.UTF8ToString(i);if(x(r,v)||S(r,v)){let E=gn(l);g=yn(E,d),h="ml-tensor";let M=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!M||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await M(r,E,d);k(T,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),m=T}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}}let y=s.stackSave(),w=s.stackAlloc(4*d.length);try{d.forEach((x,S)=>s.setValue(w+S*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(gn(l),m,g,w,d.length,Pi(h));b===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},Xa=async(e,t,n,r,i,a)=>{var W,V,O,F;let o=Pe(),s=o.PTR_SIZE,u=tn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],h=u[3],m=u[4],g=u[5],y=t.length,w=r.length,b=0,x=[],S=[],v=[],E=[],M=[],k=o.stackSave(),T=o.stackAlloc(y*s),R=o.stackAlloc(y*s),P=o.stackAlloc(w*s),X=o.stackAlloc(w*s);try{[b,x]=au(a),pn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await Ya(n[L],S,E,e,d[t[L]],t[L],m);for(let L=0;L<w;L++)await Ya(i[L],v,E,e,p[r[L]],y+r[L],m);hn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)o.setValue(T+L*s,S[L],"*"),o.setValue(R+L*s,d[t[L]],"*");for(let L=0;L<w;L++)o.setValue(P+L*s,v[L],"*"),o.setValue(X+L*s,p[r[L]],"*");if(h&&!g){let{handle:L,outputPreferredLocations:B,outputPreferredLocationsEncoded:A}=h;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);pn("wasm bindInputsOutputs");for(let N=0;N<y;N++){let D=t[N];await o._OrtBindInput(L,d[D],S[N])!==0&&Ne(`Can't bind input[${N}] for session=${e}.`)}for(let N=0;N<w;N++){let D=r[N];(W=i[N])!=null&&W[3]?(M.push(v[N]),o._OrtBindOutput(L,p[D],v[N],0)!==0&&Ne(`Can't bind pre-allocated output[${N}] for session=${e}.`)):o._OrtBindOutput(L,p[D],0,A[D])!==0&&Ne(`Can't bind output[${N}] to ${B[N]} for session=${e}.`)}hn("wasm bindInputsOutputs"),tn.set(e,[l,d,p,h,m,!0])}(V=o.jsepOnRunStart)==null||V.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let K;h?K=await o._OrtRunWithBinding(l,h.handle,w,P,b):K=await o._OrtRun(l,R,T,y,X,w,P,b),K!==0&&Ne("failed to call OrtRun().");let Q=[],ue=[];pn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let B=Number(o.getValue(P+L*s,"*"));if(B===v[L]||M.includes(v[L])){Q.push(i[L]),B!==v[L]&&o._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.");continue}let A=o.stackSave(),N=o.stackAlloc(4*s),D=!1,U,j=0;try{o._OrtGetTensorData(B,N,N+s,N+2*s,N+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let re=s===4?"i32":"i64",te=Number(o.getValue(N,re));j=o.getValue(N+s,"*");let Y=o.getValue(N+s*2,"*"),J=Number(o.getValue(N+s*3,re)),ae=[];for(let me=0;me<J;me++)ae.push(Number(o.getValue(Y+me*s,re)));o._OrtFree(Y)!==0&&Ne("Can't free memory for tensor dims.");let pe=ae.reduce((me,ie)=>me*ie,1);U=qt(te);let Ae=h==null?void 0:h.outputPreferredLocations[r[L]];if(U==="string"){if(Ae==="gpu-buffer"||Ae==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let ie=0;ie<pe;ie++){let Ie=o.getValue(j+ie*s,"*"),Oe=o.getValue(j+(ie+1)*s,"*"),ee=ie===pe-1?void 0:Oe-Ie;me.push(o.UTF8ToString(Ie,ee))}Q.push([U,ae,me,"cpu"])}else if(Ae==="gpu-buffer"&&pe>0){let me=o.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=me(j),Ie=yn(te,pe);if(Ie===void 0||!zi(U))throw new Error(`Unsupported data type: ${U}`);D=!0,Q.push([U,ae,{gpuBuffer:ie,download:o.jsepCreateDownloader(ie,Ie,U),dispose:()=>{o._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(Ae==="ml-tensor"&&pe>0){let me=o.webnnEnsureTensor,ie=o.webnnIsGraphInputOutputTypeSupported;if(!me||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(yn(te,pe)===void 0||!Bi(U))throw new Error(`Unsupported data type: ${U}`);if(!ie(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let Ie=await me(e,j,te,ae,!1);D=!0,Q.push([U,ae,{mlTensor:Ie,download:o.webnnCreateMLTensorDownloader(j,U),dispose:()=>{o.webnnReleaseTensorId(j),o._OrtReleaseTensor(B)}},"ml-tensor"])}else if(Ae==="ml-tensor-cpu-output"&&pe>0){let me=o.webnnCreateMLTensorDownloader(j,U)(),ie=Q.length;D=!0,ue.push((async()=>{let Ie=[ie,await me];return o.webnnReleaseTensorId(j),o._OrtReleaseTensor(B),Ie})()),Q.push([U,ae,[],"cpu"])}else{let me=Sr(U),ie=new me(pe);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(o.HEAPU8.subarray(j,j+ie.byteLength)),Q.push([U,ae,ie,"cpu"])}}finally{o.stackRestore(A),U==="string"&&j&&o._free(j),D||o._OrtReleaseTensor(B)}}h&&!m&&(o._OrtClearBoundOutputs(h.handle)!==0&&Ne("Can't clear bound outputs."),tn.set(e,[l,d,p,h,m,!1]));for(let[L,B]of await Promise.all(ue))Q[L][2]=B;return hn("wasm ProcessOutputTensor"),Q}finally{(F=o.webnnOnRunEnd)==null||F.call(o,l),o.stackRestore(k),S.forEach(K=>o._OrtReleaseTensor(K)),v.forEach(K=>o._OrtReleaseTensor(K)),E.forEach(K=>o._free(K)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(K=>o._free(K))}},Qa=e=>{let t=Pe(),n=tn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},Za=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),nn,st,Bn,ar,or,Lr,Ja,Fr,Sn,Tn,Ef,If,Mf,kf,Cf,Af,Rf,Of,Nf=Z(()=>{mt(),Tf(),fn(),Ci(),nn=()=>!!ze.wasm.proxy&&typeof document<"u",Bn=!1,ar=!1,or=!1,Fr=new Map,Sn=(e,t)=>{let n=Fr.get(e);n?n.push(t):Fr.set(e,[t])},Tn=()=>{if(Bn||!ar||or||!st)throw new Error("worker not ready")},Ef=e=>{switch(e.data.type){case"init-wasm":Bn=!1,e.data.err?(or=!0,Ja[1](e.data.err)):(ar=!0,Ja[0]()),Lr&&(URL.revokeObjectURL(Lr),Lr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Fr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},If=async()=>{if(!ar){if(Bn)throw new Error("multiple calls to 'initWasm()' detected.");if(or)throw new Error("previous call to 'initWasm()' failed.");if(Bn=!0,nn())return new Promise((e,t)=>{st==null||st.terminate(),eu().then(([n,r])=>{try{st=r,st.onerror=a=>t(a),st.onmessage=Ef,Ja=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Ei)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),st.postMessage(i),Lr=n}catch(i){t(i)}},t)});try{await Oi(ze.wasm),await qa(ze),ar=!0}catch(e){throw or=!0,e}finally{Bn=!1}}},Mf=async e=>{if(nn())return Tn(),new Promise((t,n)=>{Sn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};st.postMessage(r)});await Va(ze,e)},kf=async e=>nn()?(Tn(),new Promise((t,n)=>{Sn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};st.postMessage(r,[e.buffer])})):Ur(e),Cf=async(e,t)=>{if(nn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tn(),new Promise((n,r)=>{Sn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),st.postMessage(i,a)})}else return ja(e,t)},Af=async e=>{if(nn())return Tn(),new Promise((t,n)=>{Sn("release",[t,n]);let r={type:"release",in:e};st.postMessage(r)});Ka(e)},Rf=async(e,t,n,r,i,a)=>{if(nn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tn(),new Promise((o,s)=>{Sn("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};st.postMessage(l,Za(u))})}else return Xa(e,t,n,r,i,a)},Of=async e=>{if(nn())return Tn(),new Promise((t,n)=>{Sn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};st.postMessage(r)});Qa(e)}}),eo,zf,Bf,mw=Z(()=>{mt(),Nf(),he(),xi(),du(),eo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},zf=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!zi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ue.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Bi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ue.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Bf=class{async fetchModelAndCopyToWasmMemory(e){return kf(await Di(e))}async loadModel(e,t){Rt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Cf(n,t),_t()}async dispose(){return Af(this.sessionId)}async run(e,t,n){Rt();let r=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],m=p[1],g=this.inputNames.indexOf(h);if(g===-1)throw new Error(`invalid input '${h}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(p=>{let h=p[0],m=p[1],g=this.outputNames.indexOf(h);if(g===-1)throw new Error(`invalid output '${h}'`);a.push(m),o.push(g)});let s=r.map((p,h)=>eo(p,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((p,h)=>p?eo(p,()=>`output "${this.outputNames[o[h]]}"`):null),l=await Rf(this.sessionId,i,s,o,u,n),d={};for(let p=0;p<l.length;p++)d[this.outputNames[o[p]]]=a[p]??zf(l[p]);return _t(),d}startProfiling(){}endProfiling(){Of(this.sessionId)}}}),Pf={};An(Pf,{OnnxruntimeWebAssemblyBackend:()=>no,initializeFlags:()=>to,wasmBackend:()=>Df});var to,no,Df,gw=Z(()=>{mt(),Nf(),mw(),to=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?ty("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},no=class{async init(e){to(),await If(),await Mf(e)}async createInferenceSessionHandler(e,t){let n=new Bf;return await n.loadModel(e,t),n}},Df=new no});mt(),mt(),mt();var yw="1.27.0";{let e=(gw(),Vn(Pf)).wasmBackend;Rn("webgpu",e,5),Rn("webnn",e,5),Rn("cpu",e,10),Rn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:yw,enumerable:!0});/**
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
 */const Gr=new Map;function Uf(e,t){const n=Gr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Gr.set(e,n)}function rt(e,t){const n=performance.now();try{return t()}finally{Uf(e,performance.now()-n)}}async function Je(e,t){const n=performance.now();try{return await t()}finally{Uf(e,performance.now()-n)}}function ww(){return[...Gr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function _w(){Gr.clear()}const bw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),$w=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),xw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function Lf(e){const t=bw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function vw(e){const t=xw.exec(e);if(t===null)return Lf(e);const[,n,r,i,a]=t,o=Lf(a);if(n==="both")return o;const s=$w.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${s}${u} — ${o}`}function Sw(e,t,n,r){const i=t*n,a=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return a.set(e),a;for(let o=0;o<i;o+=1)a[o*4]=e[o*r],a[o*4+1]=e[o*r+1],a[o*4+2]=e[o*r+2],a[o*4+3]=255;return a}function it(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Pn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Ff(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Tw=114;function Ew(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function ro(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=(d+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,h+1),g=Math.max(0,Math.min(1,p-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),S=Math.max(0,Math.min(1,w-b)),v=(h*r+b)*a,E=(h*r+x)*a,M=(m*r+b)*a,k=(m*r+x)*a,T=(d*t+y)*3;for(let R=0;R<3;R++){const P=o[v+R]*(1-S)+o[E+R]*S,X=o[M+R]*(1-S)+o[k+R]*S;s[T+R]=Math.min(255,Math.max(0,Math.round(P*(1-g)+X*g)))}}}return s}function Dn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const p=d*l,h=Math.min((d+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let w=0,b=0,x=0,S=0;for(let E=Math.floor(p);E<h;E++){const M=Math.min(E+1,h)-Math.max(E,p);if(!(M<=0))for(let k=Math.floor(g);k<y;k++){const T=Math.min(k+1,y)-Math.max(k,g);if(T<=0)continue;const R=T*M,P=(E*r+k)*a;w+=o[P]*R,b+=o[P+1]*R,x+=o[P+2]*R,S+=R}}const v=(d*t+m)*3;s[v]=Math.min(255,Math.max(0,it(w/S))),s[v+1]=Math.min(255,Math.max(0,it(b/S))),s[v+2]=Math.min(255,Math.max(0,it(x/S)))}}return s}function Gf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function sr(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,d=h=>Math.max(0,Math.min(r-1,h)),p=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const m=(h+.5)*l-.5,g=Math.floor(m),y=Gf(m-g);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),S=Gf(b-x),v=(h*t+w)*3;for(let E=0;E<3;E++){let M=0;for(let k=0;k<4;k++){const T=p(g-1+k)*r;let R=0;for(let P=0;P<4;P++)R+=S[P]*o[(T+d(x-1+P))*a+E];M+=y[k]*R}s[v+E]=Math.min(255,Math.max(0,Math.round(M)))}}}return s}function Wr(e,t,n=1){const r=Ew(e.width,e.height,t,n),i=ro(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Tw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const p=(l+d)*3,h=u+d;o[h]=i[p]/255,o[a+h]=i[p+1]/255,o[2*a+h]=i[p+2]/255}}return{tensor:o,params:r}}function Iw(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],d=e[o*6+3],p=e[o*6+4],h=e[o*6+5];if(p<n)continue;const m=Math.round(h);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(d-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(g),Math.trunc(y),Math.trunc(w-g),Math.trunc(b-y)],boxFloat:[g,y,w-g,b-y]})}return i}const ur=.8,Wf=.65,Mw=110,kw=1280;function Cw(e,t,n){if(n==null)return ur;if(n.length===0)return Wf;const r=Math.max(e,t);if(!(r>0))return ur;const i=kw/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return ur;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Mw?Wf:ur}const qf=.25,Vf=.6;function Aw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?qf:Vf)),d=Math.trunc(u*(s>=u?Vf:qf)),p=Math.max(0,r-l),h=Math.max(0,i-d),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+d),y=m-p,w=g-h;return y<=0||w<=0?null:{x:p,y:h,width:y,height:w}}const Rw=3,Ow=.15,Nw=.6;function io(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function zw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Bw(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],a=[Number(e[1][0]),Number(e[1][1])];if(![...i,...a].every(v=>Number.isFinite(v)))return null;const o=io(i,a);if(!(o>0))return null;const s=[];for(const v of t??[]){const E=Math.trunc(Number(v.n));if(!Number.isFinite(E)||E<Rw)continue;const M=zw(v.poly);M!==null&&s.push({owner:v.owner,c:M,n:E,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,E)=>E.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Nw);for(const v of u)v.d0=io(v.c,i),v.d1=io(v.c,a),v.ecart=Math.abs(v.d0-v.d1);const d=[...u].sort((v,E)=>E.ecart-v.ecart),p=d[0],h=d[1],m=p.d0<p.d1?0:1,g=r>0?1:0,y=m===g?p:h,w=m===g?h:p,b=m===1?p.owner:h.owner,x=m===1?h.owner:p.owner,S=p.ecart/o<Ow;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(S||l)}}catch{return null}}function Pw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const Dw=.6;function Hf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,d=(e[a*6+3]-t.padY)/t.scale,p=it((s+l)/2),h=it((u+d)/2),m=it((l-s+(d-u))/4);m>=1&&r.push({cx:p,cy:h,r:m})}return r}function Uw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Dw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Lw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Pn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function jf(e,t,n){const r=Hf(e,t,n);return r.length===0?[]:Lw(Uw(r))}function Fw(e,t,n){return Hf(e,t,n)}function ao(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Gw=.5,Ww=.7,qw=.55;function oo(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Kf(e){if(e.length===0)return[];const t=(Gw*oo(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Pn(i.map(a=>a[0]))),Math.trunc(Pn(i.map(a=>a[1]))),Math.trunc(Pn(i.map(a=>a[2]))),Math.trunc(Pn(i.map(a=>a[3])))]);if(r.length>=2){const i=oo(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],d=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),p=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=d*p,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(h>=Ww*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=oo(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=qw*i)}return r}const Vw=.7;function Hw(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]);if(i<=n||a<=r)return 0;const o=(i-n)*(a-r),s=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=s+u-o;return l>0?o/l:0}function Yf(e,t,n,r,i,a=Vw){const o=t-4;if(o<=0||n<=0)return[];const s=[];for(let l=0;l<n;l+=1){let d=0,p=0;for(let h=0;h<o;h+=1){const m=e[(4+h)*n+l];m>d&&(d=m,p=h)}d<i||s.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:d,cls:p})}s.sort((l,d)=>d.score-l.score);const u=[];for(const l of s){let d=!1;for(const p of u)if(p.cls===l.cls&&Hw(p.box,l.box)>a){d=!0;break}d||u.push(l)}return u.map(l=>l.box)}const Xf=["brown","grey","blue","green","yellow","red","purple"],jw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Kw=.7;function Qf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let d=!1;for(const p of r){const h=e[p];if(h.family!==a.family)continue;const[m,g,y,w]=h.box,b=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),x=Math.max(0,Math.min(s+l,g+w)-Math.max(s,g)),S=Math.max(1,Math.min(u*l,y*w));if(b*x>=Kw*S){d=!0;break}}d?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function qr(e,t,n){const r=Iw(e,t,n,Xf.length).map(i=>{const a=Xf[i.classIndex];return{color:a,family:jw[a],box:i.box,confidence:i.confidence}});return Qf(r)}const Yw=8,Xw=.8,Zf=1.25;function Qw(e){if(e.length<Yw)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Zf?t.push(o):u>s*Zf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Xw*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Zw=2.25,Jf=8;function Jw(e){if(e.length<Jf)return[];const t=e.map(p=>[p.box[0]+p.box[2]/2,p.box[1]+p.box[3]/2]),n=e.map(p=>Math.hypot(p.box[2],p.box[3])).sort((p,h)=>p-h),r=Zw*n[Math.floor(n.length/2)],i=r*r,a=e.map((p,h)=>h),o=p=>{for(;a[p]!==p;)a[p]=a[a[p]],p=a[p];return p};for(let p=0;p<e.length;p++)for(let h=p+1;h<e.length;h++){const m=t[p][0]-t[h][0],g=t[p][1]-t[h][1];m*m+g*g<=i&&(a[o(p)]=o(h))}const s=new Map;for(let p=0;p<e.length;p++){const h=o(p);s.set(h,[...s.get(h)??[],p])}let u=[];for(const p of s.values())p.length>u.length&&(u=p);if(u.length<Jf||u.length===e.length)return[];const l=new Set(u),d=e.map((p,h)=>h).filter(p=>!l.has(p));return d.map(p=>({family:e[p].family,color:e[p].color,box:[...e[p].box],reason:`${e[p].color} banner sits in a detached group of ${d.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const at={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function Et(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const e_=.42,t_=22,n_=43,r_=120,i_=1.5,a_=.72,o_=110,em=3;function lr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*e_);if(l<1)return 0;let d=0;for(let p=0;p<i;p++)for(let h=0;h<r;h++){if((h-s)**2+(p-u)**2>l*l)continue;const m=(p*r+h)*a,g=o[m],y=o[m+1],w=o[m+2];!t&&g>=250&&y>=250&&w>=250||(n(g,y,w),d+=1)}return d}function s_(e){let t=0,n=0,r=0,i=lr(e,!1,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=lr(e,!0,(a,o,s)=>{const u=Et(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function u_(e){let t=0,n=0,r=lr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=lr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function l_(e){let t=0;const n=lr(e,!0,(r,i,a)=>{t+=Et(r,i,a).s});return n===0?null:t/n}function c_(e){const t=s_(e);if(t===null||t.s<=t_)return 1;if(t.s>=r_){const n=u_(e);return n!==null&&n>=i_?6:3}return t.s>=n_?3:6}function d_(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function p_(e,t){const n=[...t];if(e.length<em||t.length!==e.length)return n;const r=e.map(o=>l_(o)),i=r.filter(o=>o!==null);if(i.length<em)return n;const a=Pn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<a_*a&&o<o_&&(n[s]=1)}),n}function tm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),d=Math.max(0,u-o),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let m=0;m<l;m++){const g=(h*l+m)*3;if((m+a-n)**2+(h+o-r)**2<=i*i){const w=((h+o)*e.width+(m+a))*e.channels;p[g]=e.data[w],p[g+1]=e.data[w+1],p[g+2]=e.data[w+2]}else p[g]=255,p[g+1]=255,p[g+2]=255}return{width:l,height:d,channels:3,data:p}}function h_(e,t){const n=t.map(a=>tm(e,a)),r=n.map(a=>c_(a)),i=d_(t,r);return p_(n,i)}function f_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function nm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const d=l*i,p=Math.min((l+1)*i,e.width);let h=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let w=Math.floor(d);w<p;w++){const b=Math.min(w+1,p)-Math.max(w,d);b<=0||(h+=e.data[g*e.width+w]*b*y,m+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,it(h/m)))}}return{width:t,height:n,data:r}}function m_(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,it(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function g_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const d=o+l,p=a+u;if(!(d<0||d>=t||p<0||p>=n)&&r[p*t+d]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function y_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const d=o+l,p=a+u;if(d>=0&&d<t&&p>=0&&p<n&&r[p*t+d]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function rm(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,d=0;o[d++]=u,i[u]=s;let p=0,h=0,m=0;for(;l<d;){const g=o[l++],y=g%t,w=g/t|0;p+=1,h+=y,m+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const S=y+x,v=w+b;if(S<0||S>=t||v<0||v>=n)continue;const E=v*t+S;r[E]>0&&i[E]===0&&(i[E]=s,o[d++]=E)}}a[s]={area:p,centroidX:h/p,centroidY:m/p},s+=1}return{labels:i,stats:a}}function w_(e,t,n){return im(Float32Array.from(e.data),e.width,t,n)}function im(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let d=0;d<t;d++){const p=d-a,h=l-a,m=s*p-u*h+a,g=u*p+s*h+a,y=Math.floor(m),w=Math.floor(g),b=m-y,x=g-w,S=(M,k)=>M>=0&&M<t&&k>=0&&k<t?e[k*t+M]:r,v=S(y,w)*(1-b)+S(y+1,w)*b,E=S(y,w+1)*(1-b)+S(y+1,w+1)*b;i[l*t+d]=v*(1-x)+E*x}return i}const __=.9,b_=.34,$_=[.55,.6,.66,.72],x_=22,v_=88,S_=35,Un=28,so=4,T_=Array.from({length:15},(e,t)=>-21+t*3),am=[-2,0,2],E_=3,I_=.3;function M_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function k_(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),d=Math.floor((u-o)/2),p=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+p)*u+(w+d)]=e.data[(y+r)*e.width+(w+t)];const h=Un-2*so,m=nm({width:u,height:u,data:l},h,h),g=new Float32Array(Un*Un);for(let y=0;y<h;y++)for(let w=0;w<h;w++)g[(y+so)*Un+(w+so)]=m.data[y*h+w]>110?1:0;return g}function C_(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*b_);if(u<4)return null;const l=o-u,d=s-u,p=2*u,h=2*u;if(p<6||h<6)return null;const m=new Int16Array(p*h),g=new Int16Array(p*h),y=new Int16Array(p*h),w=new Uint8Array(p*h),b=[],x=Math.min(p,h)/2;for(let L=0;L<p;L++)for(let B=0;B<h;B++){const A=((L+l)*n+(B+d))*i,{h:N,s:D,v:U}=Et(a[A],a[A+1],a[A+2]),j=L*h+B;m[j]=N,g[j]=D,y[j]=U,Math.sqrt((B-h/2)**2+(L-p/2)**2)/x<=t&&(w[j]=1,b.push(U))}if(b.length<16)return null;const S=Ff(b,55);let v=0,E=0,M=0;const k=L=>m[L]>=x_&&m[L]<=v_&&g[L]>=S_,T=L=>y[L]>=S&&g[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<p*h;L++)w[L]===1&&(M+=1,y[L]>=130&&!k(L)&&(v+=1),T(L)&&(E+=1));const R=v>.5*M&&E<.15*M,P=new Uint8Array(p*h);if(R){const L=Ff(b,45);for(let B=0;B<p*h;B++)P[B]=w[B]===1&&y[B]<=L?255:0}else for(let L=0;L<p*h;L++)P[L]=T(L)?255:0;const X={width:h,height:p,data:P},W=g_(X);let V=rm(W),O=V;if(V.stats.length<=1&&(V=rm(X),O=V,V.stats.length<=1))return null;const F=Math.min(p,h)/2;let K=0,Q=-1;for(let L=1;L<O.stats.length;L++){const B=O.stats[L];if(B===void 0)continue;const A=Math.hypot(B.centroidX-h/2,B.centroidY-p/2)/F,N=B.area*(1-.6*Math.min(A,1));N>Q&&(Q=N,K=L)}if(K===0)return null;const ue=new Uint8Array(p*h);for(let L=0;L<p*h;L++)ue[L]=O.labels[L]===K?255:0;return k_(y_({width:h,height:p,data:ue}))}function A_(e,t,n,r,i,a){const o=Un;let s=0,u=0;for(let l=0;l<o;l++){const d=l-a;if(!(d<0||d>=o))for(let p=0;p<o;p++){const h=p-i;if(h<0||h>=o)continue;const m=e[d*o+h];m!==0&&(u+=m,s+=m*n[l*o+p])}}return s/(u+r-s+1e-6)}function R_(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of T_){const a=i===0?e:im(e,Un,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of am)for(const u of am){const l=A_(a,o,t,n,s,u);l>r&&(r=l)}}return r}function O_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of $_){const s=C_(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([R_(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<I_)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,E_))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}function En(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let d=0;d<i;d++)for(let p=0;p<r;p++){let h,m;n===1?(h=i-1-d,m=p):n===2?(h=r-1-p,m=i-1-d):(h=d,m=r-1-p);const g=(d*r+p)*a,y=(m*s+h)*a;for(let w=0;w<a;w++)l[y+w]=o[g+w]}return{width:s,height:u,channels:a,data:l}}const N_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,N_)*255));return e})();const z_=5e3,B_=.75,P_=15,D_=1.25,U_=2.4,L_=.003,F_=.85,G_=2600,W_=2,uo=.3,om=.1,sm=.012,q_=22,um=.5,lm=.12;function pt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function V_(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,d]=e[u],[p,h]=e[(u+1)%4];r+=l*h-p*d}const i=Math.abs(r/2)/(t*n);if(i<L_||i>F_)return!1;const a=e.map((u,l)=>{const d=e[(l+1)%4];return Math.hypot(d[0]-u[0],d[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=D_&&s<=U_}function H_(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function j_(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(uo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(W=>[W[0],W[1],W[2]-o*(W[0]+W[1])+0]);for(let W=0;W<3;W++)l[W][2]=r[W][2]-o*r[W][0]-o*r[W][1];const d=pt(e,t),p=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(d,p,h,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),d.delete(),h.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(W,V)=>{const O=(V*s+W)*3;w[0].push(g[O]),w[1].push(g[O+1]),w[2].push(g[O+2])};for(let W=0;W<u;W++)for(let V=0;V<s;V++)(W<y||W>=u-y||V<y||V>=s-y)&&b(V,W);const x=W=>{W.sort((O,F)=>O-F);const V=W.length>>1;return W.length%2?W[V]:(W[V-1]+W[V])/2},S=[x(w[0]),x(w[1]),x(w[2])],v=(W,V)=>{const O=(V*s+W)*3,F=g[O]-S[0],K=g[O+1]-S[1],Q=g[O+2]-S[2];return Math.sqrt(F*F+K*K+Q*Q)>q_},E=Math.max(6,Math.trunc(om*i)),M=Math.max(6,Math.trunc(om*a)),k=Math.max(2,Math.trunc(sm*i)),T=Math.max(2,Math.trunc(sm*a)),R=W=>{let V=0,O=0;for(const F of W)O=F?O+1:0,O>V&&(V=O);return V/Math.max(1,W.length)},P=W=>{let V,O,F,K,Q;if(W==="L"?(V=o,O=o+a,F=Math.max(0,o-k-E),K=Math.max(0,o-k),Q=!1):W==="R"?(V=o,O=o+a,F=o+i+k,K=Math.min(s,o+i+k+E),Q=!1):(V=Math.max(0,o-T-M),O=Math.max(0,o-T),F=o,K=o+i,Q=!0),O<=V||K<=F)return 0;const ue=[];if(Q)for(let L=F;L<K;L++){let B=0;for(let A=V;A<O;A++)v(L,A)&&B++;ue.push(B/(O-V)>um)}else for(let L=V;L<O;L++){let B=0;for(let A=F;A<K;A++)v(A,L)&&B++;ue.push(B/(K-F)>um)}return R(ue)},X={L:P("L"),R:P("R"),T:P("T")};return p.delete(),m.delete(),X}const K_=.5;function Y_(e){return e!==null&&e.R>=lm?["R"]:[]}function cm(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=uo*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},d=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],S=n[b];let v=-(S[1]-x[1]),E=S[0]-x[0];const M=(x[0]+S[0])/2,k=(x[1]+S[1])/2;v*(M-s)+E*(k-u)<0&&(v=-v,E=-E);const T=Math.hypot(v,E);T<=1e-6||(v=v/T*o,E=E/T*o,d.push([x[0]+v,x[1]+E],[S[0]+v,S[1]+E]))}const p=d.map(y=>y[0]),h=d.map(y=>y[1]),m=Math.round(Math.min(...p)),g=Math.round(Math.min(...h));return{x:m,y:g,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...h))-g}}const X_=.88;function dm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(uo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*X_),d=s-l;if(d<1)return null;const p=pt(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(h,m),y=[...g.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(p,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const S=x.roi(new e.Rect(l,0,d,u)),v=new e.Mat;S.copyTo(v);const E=v.data,M=new Uint8ClampedArray(d*u*3);M.set(E.subarray(0,M.length));for(const k of[p,h,m,g,b,x,S,v])try{k.delete()}catch{}return{width:d,height:u,channels:3,data:M}}function Q_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),d=Math.max(0,Math.trunc(i-u)),p=Math.min(n.width,Math.trunc(i+o+u)),h=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(p-d<8||m-h<8)return null;const g=Math.max(n.width,n.height)<G_?W_:1,y=pt(e,n),w=pt(e,t),b=y.roi(new e.Rect(d,h,p-d,m-h)),x=new e.Mat;g!==1?e.resize(b,x,new e.Size(0,0),g,g,e.INTER_CUBIC):b.copyTo(x);const S=new e.Mat,v=new e.Mat;e.cvtColor(w,S,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const E=new e.ORB(z_),M=new e.KeyPointVector,k=new e.KeyPointVector,T=new e.Mat,R=new e.Mat,P=new e.Mat,X=[y,w,b,x,S,v,M,k,T,R,P],W=re=>{for(const te of X)try{te.delete()}catch{}try{E.delete()}catch{}return re};if(E.detectAndCompute(S,P,M,T),E.detectAndCompute(v,P,k,R),T.rows<8||R.rows<8)return W(null);const V=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;V.knnMatch(T,R,O,2);const F=[],K=[];for(let re=0;re<O.size();re++){const te=O.get(re);if(te.size()===2){const Y=te.get(0),J=te.get(1);if(Y.distance<B_*J.distance){const ae=M.get(Y.queryIdx).pt,pe=k.get(Y.trainIdx).pt;F.push(ae.x,ae.y),K.push(pe.x,pe.y)}}}if(O.delete(),V.delete(),F.length/2<8)return W(null);const Q=e.matFromArray(F.length/2,1,e.CV_32FC2,F),ue=e.matFromArray(K.length/2,1,e.CV_32FC2,K),L=new e.Mat,B=e.findHomography(Q,ue,e.RANSAC,5,L);let A=0;for(let re=0;re<L.rows;re++)A+=L.data[re];const N=B.rows===3?[...B.data64F]:null;if(Q.delete(),ue.delete(),L.delete(),B.delete(),N===null||A<P_)return W(null);const D=1/g,U=[[D,0,d],[0,D,h],[0,0,1]],j=[0,1,2].map(re=>[0,1,2].map(te=>U[re][0]*N[te]+U[re][1]*N[3+te]+U[re][2]*N[6+te]));return W({H:j,inliers:A})}const Z_=620;function J_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function eb(e,t,n,r){const i=pm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(E=>Math.trunc(E));if(Math.min(s,u)>=Z_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),d=Math.trunc(u*.25),p=Math.max(0,a-l),h=Math.max(0,o-d),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+d);if(m<=p||g<=h)return null;const y=pt(e,t),w=y.roi(new e.Rect(p,h,m-p,g-h)),b=new e.Mat;e.resize(w,b,new e.Size((m-p)*2,(g-h)*2),0,0,e.INTER_CUBIC);const x=J_(e,b);for(const E of[y,w,b])try{E.delete()}catch{}const S=[(a-p)*2,(o-h)*2,s*2,u*2],v=pm(e,x,n,S);return v===null?null:{...v,footprint:v.footprint.map(([E,M])=>[E*.5+p,M*.5+h])}}catch{return null}}function pm(e,t,n,r){const i=Q_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>H_(i.H,b,x));if(!V_(o,t.width,t.height))return null;const s=pt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const d=pt(e,n),p=new e.Mat,h=new e.Mat;e.cvtColor(l,p,e.COLOR_RGB2GRAY),e.cvtColor(d,h,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(p,h,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const b of[s,u,l,d,p,h,m])try{b.delete()}catch{}if(g<K_)return null;const y=j_(e,t,n,i.H);if(y===null)return null;const w=Y_(y);return{built:Math.max(y.L,y.R,y.T)>=lm,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}const tb=.3,nb=.3;function rb(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=tb}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,d=Math.max(s,u,l)<nb;if(!r&&!d)return;t.some(([h,m])=>h>=a.zone.x0&&h<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const Nt=128,Ln=.5;function lo(e){const t=Dn(e,Nt,Nt),n=Nt*Nt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function hm(e){const t=e[1]??0;return{built:t>=Ln,prob:t}}const cr=120,dr=179,ib=1.3,ab=3.6,ob=.45,sb=6e-4,ub=.02,lb=6e3,cb=.78,db=1.25,pb=2.4,hb=.05,fb=1.5,mb=.5,gb=.9,yb=150,wb=18,_b=34,bb=90,$b=130,xb=.13,vb=.15,Vr="magistrates-guild",co="merchants-guild";function Sb(e,t){const n=pt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[cr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[dr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const d=new e.Mat,p=new e.Mat,h=new e.Mat,m=e.connectedComponentsWithStats(l,d,p,h,8);l.delete(),d.delete(),h.delete();const g=t.width*t.height,y=[];for(let w=1;w<m;w++){const b=p.intAt(w,0),x=p.intAt(w,1),S=p.intAt(w,2),v=p.intAt(w,3),E=p.intAt(w,4),M=E/g;M<sb||M>ub||E/Math.max(S*v,1)<ob||y.push({x:b,y:x,w:S,h:v})}return p.delete(),{blobs:y,mask:s,maskWidth:t.width}}function Tb(e,t,n,r,i,a,o){const s=e,u=a,l=o,d=i;if(!d.gray){const D=pt(e,r);d.gray=new s.Mat,s.cvtColor(D,d.gray,s.COLOR_RGB2GRAY),D.delete(),d.k=new s.KeyPointVector,d.d=new s.Mat;const U=new s.Mat;u.detectAndCompute(d.gray,U,d.k,d.d),U.delete()}const p=n,h=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(p,h,m,g),h.delete();const y=D=>(m.delete(),g.delete(),D);if(d.d.rows<8||g.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(d.d,g,w,2);const b=[],x=[];for(let D=0;D<w.size();D++){const U=w.get(D);if(U.size()===2){const j=U.get(0);if(j.distance<cb*U.get(1).distance){const re=d.k.get(j.queryIdx).pt,te=m.get(j.trainIdx).pt;b.push(re.x,re.y),x.push(te.x,te.y)}}}if(w.delete(),b.length/2<8)return y(null);const S=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),E=new s.Mat,M=s.findHomography(S,v,s.RANSAC,5,E);if(S.delete(),v.delete(),E.delete(),M.rows!==3)return M.delete(),y(null);const k=[...M.data64F],T=(D,U)=>{const j=k[6]*D+k[7]*U+k[8];return[(k[0]*D+k[1]*U+k[2])/j,(k[3]*D+k[4]*U+k[5])/j]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,U])=>T(D,U));if(R.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return M.delete(),y(null);const P=R.map((D,U)=>{const j=R[(U+1)%4];return Math.hypot(j[0]-D[0],j[1]-D[1])}),X=Math.min(...P);if(X<1)return M.delete(),y(null);const W=Math.max(...P)/X;let V=0;for(let D=0;D<4;D++){const[U,j]=R[D],[re,te]=R[(D+1)%4];V+=U*te-re*j}const O=t,F=Math.abs(V/2)/(O.rows*O.cols);if(W<db||W>pb||F<hb||F>fb)return M.delete(),y(null);const K=new s.Mat;s.warpPerspective(O,K,M,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),M.delete();const Q=new s.Mat;s.cvtColor(K,Q,s.COLOR_RGB2GRAY),K.delete();const ue=Math.trunc(r.height/2),L=Q.roi(new s.Rect(0,0,r.width,ue)),B=d.gray.roi(new s.Rect(0,0,r.width,ue)),A=new s.Mat;s.matchTemplate(L,B,A,s.TM_CCOEFF_NORMED);const N=A.data32F[0];return L.delete(),B.delete(),A.delete(),Q.delete(),y(N)}function Eb(e,t,n){let r,i;if(n===Vr)r=co,i=xb;else if(n===co)r=Vr,i=vb;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let d=0,p=null;for(const[h,m]of[[0,l],[l,s]]){let g=0,y=0;for(let b=o;b<o+u;b++)for(let x=a+h;x<a+m;x++){const S=(b*e.width+x)*e.channels,{h:v,s:E,v:M}=Et(e.data[S],e.data[S+1],e.data[S+2]);if(v>=cr&&v<=dr&&E>=30&&E<=170&&M<=170)continue;g++,(r===co?v>=wb&&v<=_b&&E>=bb&&M>=$b:v>=95&&v<=130&&E>=80)&&y++}if(g<20)continue;const w=y/g;w>d&&(d=w,p={x:a+h,y:o,w:m-h,h:u})}return d>=i&&p!==null?{id:r,box:p}:null}const Ib=1.7,Mb=140,kb=170,Cb=.2,Ab=.1,fm=240,mm=80,gm=60,Rb=50,ym="scientists-guild",wm="tacticians-guild",Hr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Ob(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let v=0;v<o;v++){let E=0;for(let M=0;M<a;M++)e[(i+v)*t+r+M]>0&&E++;s[v]=E/a}const u=[];for(let v=0;v<o;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],d=u[u.length-1],p=d-l;if(p<5)return[];const h=a/p;if(h<ib||h>ab)return[];if(h>=Ib)return[{x:r,y:i+l,w:a,h:p}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const E=Math.exp(-(v*v)/(2*g*g));y.push(E),w+=E}for(let v=0;v<o;v++){let E=0;for(let M=-4;M<=4;M++){const k=Math.min(o-1,Math.max(0,v+M));E+=s[k]*y[M+4]}m[v]=E/w}const b=l+Math.trunc(p*.3),x=l+Math.trunc(p*.78);let S=l+Math.trunc(p/2);if(x>b){let v=1/0;for(let E=b;E<x;E++)m[E]<v&&(v=m[E],S=E)}return[{x:r,y:i+l,w:a,h:S-l},{x:r,y:i+S,w:a,h:d-S}]}function Nb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let d=0;d<o;d++){const p=((r+l)*e.width+n+d)*e.channels,h=(l*o+d)*3;u[h]=e.data[p],u[h+1]=e.data[p+1],u[h+2]=e.data[p+2]}return{width:o,height:s,channels:3,data:u}}function zb(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Et(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=Mb&&o<=kb&&n++)}return t===0?0:n/t}function Bb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);!(a>=cr&&a<=dr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function _m(e,t){const n=pt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(fm,mm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:fm,height:mm,channels:3,data:i}}function Pb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function bm(e,t){const n=Pb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:w,s:b,v:x}=Et(n.data[y],n.data[y+1],n.data[y+2]);!(w>=cr&&w<=dr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const o=a<20,s=pt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let d=0,p=0,h=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(d+=l[g*3]*100/255,p+=l[g*3+1]-128,h+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[d/m,p/m,h/m]}function Db(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h:d,s:p,v:h}=Et(e.data[l],e.data[l+1],e.data[l+2]);d>=cr&&d<=dr&&p>=30&&p<=170&&h<=170||(t++,p>=70&&h>=50&&(d>=95&&d<=130?n++:d>=35&&d<=92?r++:d<=10?i++:d>=15&&d<=34&&h>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function Ub(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);o>=gm&&s>=Rb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<gm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function Lb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function $m(e,t){const n=pt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function Fb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=_m(e,a);n.set(i,$m(e,o)),Hr.includes(i)&&r.set(i,bm(e,o))}return{gray:n,warmLab:r}}function Gb(e,t,n){const r=_m(e,t),i=Db(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Vr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return ym;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return wm;const a=Ub(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=Vr;else if(s==="green")u=ym;else if(s==="red")u=wm;else{const l=$m(e,r);let d="",p=-2;for(const h of Hr){const m=n.gray.get(h);if(m===void 0)continue;const g=Lb(l,m);g>p&&(p=g,d=h)}u=d||Hr[0]}if(Hr.includes(u)&&n.warmLab.size>0){const l=bm(e,r);let d=u,p=1/0;for(const[h,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<p&&(p=g,d=h)}return d}return u}function Wb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=Sb(e,t);if(o.length===0||n.size===0)return a;const l=e,d=new l.ORB(lb),p=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const m=pt(e,t);let g=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),S=Math.max(yb,Math.trunc(gb*Math.max(w.w,w.h))),v=Math.max(0,b-S),E=Math.max(0,x-S),M=Math.min(t.width,b+S),k=Math.min(t.height,x+S);if(M-v<16||k-E<16)continue;const T=m.roi(new l.Rect(v,E,M-v,k-E)),R=new l.Mat;l.cvtColor(T,R,l.COLOR_RGB2GRAY);let P=null,X=-2;for(const[F,K]of n){if(r!==void 0&&Date.now()>r)break;const Q=Tb(e,T,R,K,h.get(F),d,p);Q!==null&&Q>X&&(X=Q,P=F)}T.delete(),R.delete();const W=new Set;if(P!==null&&X>=mb){a.push({id:P,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),W.add(P);const F=Eb(t,w,P);F&&(a.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),W.add(F.id))}if(i===void 0||i.size===0)continue;const V=Ob(s,u,w);if(V.length!==2)continue;const O=V.map(F=>Nb(t,F));if(!O.some(F=>F.width*F.height===0||Bb(F)<Ab))for(let F=0;F<V.length;F++){const K=O[F];if(zb(K)<Cb)continue;g===null&&(g=Fb(e,i));const Q=Gb(e,K,g);if(Q&&!W.has(Q)){W.add(Q);const ue=V[F];a.push({id:Q,boundingBox:{x:ue.x,y:ue.y,width:ue.w,height:ue.h},confidence:1})}}}}finally{m.delete();for(const w of h.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{d.delete(),p.delete()}catch{}}return a}const xm=128,qb=.56,Vb=15,Hb=.58,jb=70,Kb=50,Yb=.12,Xb=.2,Qb=.1,Zb=.17,vm=.15;function Jb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Sm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),d=Math.max(0,s-u),p=Math.min(n,o+u),h=Math.min(r,s+u),m=p-l,g=h-d,y=new Uint8Array(m*g*i);for(let w=0;w<g;w++){const b=((w+d)*n+l)*i;y.set(a.subarray(b,b+m*i),w*m*i)}return{width:m,height:g,channels:i,data:y}}function e1(e){const t=Sm(e,qb),n=f_(t),r=nm(n,xm,xm);return m_(r)}function t1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,d=t[u]-i;a+=l*d,o+=l*l,s+=d*d}return a/(Math.sqrt(o*s)+1e-6)}function n1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Sm(e,Hb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const m=h*a,{h:g,s:y,v:w}=Et(o[m],o[m+1],o[m+2]);y>=jb&&w>=Kb&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const d=u/s,p=l/s;return d>=Yb&&t.set("masonry",vm*Math.min(1,d/Xb)),p>=Qb&&t.set("strategy",vm*Math.min(1,p/Zb)),t}function r1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=e1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Vb)a.push(w_(n,l,i));const o=new Map;for(const[l,d]of t){let p=-1/0;for(const h of a){const m=t1(h,d);m>p&&(p=m)}o.set(l,p)}for(const[l,d]of n1(e))d>0&&o.has(l)&&o.set(l,o.get(l)+d);let s="",u=-1/0;for(const[l,d]of o)d>u&&(s=l,u=d);return[s,u]}const rn=224,i1=512,a1=[.485,.456,.406],o1=[.229,.224,.225];function s1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function u1(e){const t=ro(e,rn,rn),n=rn*rn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-a1[a])/o1[a];return r}function l1(e){const t=3*rn*rn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(u1(En(e,r)),r*t);return n}function c1(e,t=i1){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function d1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Fn=96,p1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],h1=.45;function f1(e){const t=ro(e,Fn,Fn),n=Fn*Fn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function m1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=h1?p1[t]??"":"",prob:n}}const jt=128,g1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],y1=.5;let Tm=null;function w1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Tm=e}function Em(){return Tm??y1}let Im=null;function _1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Im=[...e]}function b1(){return Im??g1}const Mm="__inverse";function $1(e){return e.endsWith(Mm)?[e.slice(0,-Mm.length),!0]:[e,!1]}function x1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n*3);for(let o=0;o<t*n;o++)for(let s=0;s<3;s++)a[o*3+s]=i[o*r+s];return a}function v1(e){const t=Math.min(jt/e.width,jt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?x1(e):t<1?Dn(e,n,r):sr(e,n,r),a=jt*jt,o=new Float32Array(3*a);o.fill(114/255);const s=Math.floor((jt-r)/2),u=Math.floor((jt-n)/2);for(let l=0;l<r;l++)for(let d=0;d<n;d++){const p=(l*n+d)*3,h=(l+s)*jt+(d+u);for(let m=0;m<3;m++)o[m*a+h]=i[p+m]/255}return o}async function S1(e,t){const{index:n,prob:r}=T1(await t(v1(e))),[i,a]=$1(b1()[n]??"");return r<Em()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:a}}function T1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const zt=96,E1=[1,2,3,4,5,6,7],I1=.8,M1=.99;function k1(e){const t=sr(e,e.width*2,e.height*2),n=e.width*2<zt&&e.height*2<zt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?sr(r,zt,zt):Dn(r,zt,zt),a=zt*zt,o=new Float32Array(3*a);for(let s=0;s<a;s++)for(let u=0;u<3;u++)o[u*a+s]=i[s*3+u]/255;return o}function C1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:E1[t],prob:e[t]}}const an=128,km=.35,A1=["fp","laurel"],R1=.85,Gn=40;function O1(e){const r=(e.width<an&&e.height<an?sr:Dn)(e,an,an),i=an*an,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function N1(e){return e[A1.indexOf("fp")]}const on=128,z1=.15,Cm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],B1=7,P1=.9;function D1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*z1),d=Math.max(0,it(s-l/2)),p=Math.max(0,it(u-l/2)),h=Math.min(t,it(s+l/2)),m=Math.min(n,it(u+l/2));return h-d<8||m-p<8?null:{x:d,y:p,w:h-d,h:m-p}}function U1(e){const r=(e.width<on&&e.height<on?sr:Dn)(e,on,on),i=on*on,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function L1(e){let t=0;for(let i=1;i<Cm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=B1;return{className:Cm[t],probability:n,rejected:r&&n>=P1}}const jr=3,F1=2.2,G1=.3,W1=.65,q1=3,V1=1.3,H1=.77;function Am(e,t,n){const[r,i,a,o]=e,s=[];return r<=jr&&s.push("gauche"),i<=jr&&s.push("haut"),r+a>=t-jr&&s.push("droit"),i+o>=n-jr&&s.push("bas"),s}function Rm(e){const t=e[3]/Math.max(e[2],1);return t>=V1?"portrait":t<=H1?"paysage":null}function po(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function j1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>W1)return!0;return!1}function K1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Am(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(j1(n,r,i))return u("photo-piste");if(s.length<q1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=po(s.map(w=>w.box[2]*w.box[3])),d=po(s.map(w=>w.box[2])),p=po(s.map(w=>w.box[3])),h=new Set(s.map(w=>Rm(w.box)).filter(w=>w!==null)),m=[...s],g=[],y=[];for(const w of o){const b=Am(w.box,r,i),[,,x,S]=w.box,v=l>0?x*S/l:0,E=[];(b.includes("gauche")||b.includes("droit"))&&E.push(d>0?x/d:1),(b.includes("haut")||b.includes("bas"))&&E.push(p>0?S/p:1);const M=E.length>0?Math.min(...E):1,k=Rm(w.box);v>F1?g.push({banner:w,edgeReason:"bord-grosse"}):M<G1?g.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&h.size>0&&!h.has(k)?g.push({banner:w,edgeReason:"bord-orientation-adverse"}):(m.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:m,dropped:g,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const Y1=1,X1=1.5;function Q1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function Z1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function J1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function e2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let d=null;for(const[h,m]of Q1(e)){const g=Z1(u,l,h,m);g!==null&&(d===null||g[0]<d[0])&&(d=g)}if(d===null)return null;const p=J1(e);return p===null?null:{distBord:d[0]/r,decalLat:d[1]/r,perpendiculaire:p!==o>s}}catch{return null}}function t2(e,t,n,r=Y1,i=X1){const a=[];for(const[o,s]of t??[]){const u=e2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const gt=64,Om=.5,n2=[.67,1.24];function Nm(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const d=e.channels,p=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let S=0;S<u;S++){const v=i+S,E=v-t,M=(w*u+S)*3;if(E*E+x*x<=h){const k=(b*e.width+v)*d;p[M]=e.data[k],p[M+1]=e.data[k+1],p[M+2]=e.data[k+2]}else p[M]=255,p[M+1]=255,p[M+2]=255}}const m=Dn({width:u,height:l,channels:3,data:p},gt,gt),g=gt*gt,y=new Float32Array(3*g);for(let w=0;w<g;w++)for(let b=0;b<3;b++)y[b*g+w]=m[w*3+b]/255;return y}function r2(e){return e[1]}const Kr=[1,3,6],i2=.5;function a2(e){if(e.length!==Kr.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:Kr[t],prob:e[t]}}function o2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&Kr.includes(i.denomination)&&i.prob>=i2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const s2=2.25,Yr=3,u2=1.15,l2=.5,c2=2.5,d2=.75,p2=2.25,h2=1.3,f2=.77;function Xr(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function m2(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function zm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const d=(u-o)*(t-s)/(l-s)+o;e<d&&(r=!r)}}return r}function g2(e,t,n){if(n.length>=3&&zm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],d=u-o,p=l-s,h=d*d+p*p,m=h===0?0:Math.max(0,Math.min(1,((e-o)*d+(t-s)*p)/h));r=Math.min(r,Math.hypot(e-(o+m*d),t-(s+m*p)))}return r}function y2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function w2(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,d]=n;let p=0,h=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,d-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const w=y/g;if(g<0?p=Math.max(p,w):h=Math.min(h,w),p>h)return!1}return p>=h?!1:p>=.1&&h<=.95||h-p>=.15}const ho=e=>e.box[3]/Math.max(1,e.box[2]),Kt=e=>ho(e)>u2,Wn=e=>ho(e)>=h2||ho(e)<=f2;function fo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Bm(e,t,n,r,i){const a=new Set(t),o=[...e.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:a.has(A)?"card":"tucked",src:["banner",A]})),...n.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:"wonder",src:["wonder",A]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(B=>[B.box[0]+B.box[2]/2,B.box[1]+B.box[3]/2]);let d=o.filter(B=>B.kind!=="wonder").map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A);d.length===0&&(d=o.map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A));const p=d[Math.floor(d.length/2)],h=(s2*p)**2,m=o.map((B,A)=>A),g=B=>{let A=B;for(;m[A]!==A;)m[A]=m[m[A]],A=m[A];return A},y=o.map((B,A)=>B.kind==="card"?A:-1).filter(B=>B>=0),w=o.map((B,A)=>B.kind!=="card"?A:-1).filter(B=>B>=0);for(let B=0;B<y.length;B+=1)for(let A=B+1;A<y.length;A+=1){const N=y[B],D=y[A],U=o[N],j=o[D];if(Wn(U)&&Wn(j)&&Kt(U)!==Kt(j))continue;const re=l[N][0]-l[D][0],te=l[N][1]-l[D][1],Y=re*re+te*te;let J=Y<=h;!J&&Wn(U)&&Wn(j)&&Kt(U)===Kt(j)&&Y<=(4*p)**2&&(J=Xr(fo(U),fo(j))<=.5*p),J&&(m[g(N)]=g(D))}for(let B=0;B<w.length;B+=1)for(let A=B+1;A<w.length;A+=1){const N=w[B],D=w[A];Xr(o[N].box,o[D].box)<=d2*p&&(m[g(N)]=g(D))}const b=new Map;for(const B of w){const A=g(B);b.set(A,[...b.get(A)??[],B])}const x=new Map;for(const B of y){const A=g(B);x.set(A,[...x.get(A)??[],B])}for(const B of b.values()){const A=B.filter(j=>o[j].kind==="wonder"&&Wn(o[j])).map(j=>Kt(o[j])),N=A.length>0?A.filter(Boolean).length*2>A.length:null,D=[];for(const[j,re]of x){let te=Number.POSITIVE_INFINITY;for(const ae of B)for(const pe of re)te=Math.min(te,Xr(o[ae].box,o[pe].box));if(te>p2*p)continue;const J=re.filter(ae=>Kt(o[ae])).length/re.length>=.5;N!==null&&J!==N||D.push([j,te,J])}if(D.length===0)continue;const U=new Set(D.map(j=>j[2]));if(D.length>=2&&U.size===1&&N!==null){const j=D[0][0];for(const[re]of D.slice(1))m[g(re)]=g(j);m[g(B[0])]=g(j)}else{const j=D.reduce((re,te)=>te[1]<re[1]?te:re);m[g(B[0])]=g(j[0])}}let S=new Map;for(let B=0;B<o.length;B+=1){const A=g(B);S.set(A,[...S.get(A)??[],B])}const v=o.map((B,A)=>B.kind==="wonder"?A:-1).filter(B=>B>=0);if(v.length>0){const B=(N,D)=>{const[U,j,re,te]=fo(o[N]),[Y,J,ae,pe]=o[D].box,Ae=Math.max(0,Math.min(U+re,Y+ae)-Math.max(U,Y)),me=Math.max(0,Math.min(j+te,J+pe)-Math.max(j,J));return Ae*me>=.9*o[N].box[2]*o[N].box[3]},A=new Map;for(let N=0;N<o.length;N+=1)if(!(o[N].kind!=="card"||!Wn(o[N])))for(const D of v){const U=Xr(o[N].box,o[D].box);if(U<=.8*p&&Kt(o[N])!==Kt(o[D])&&B(N,D)){const j=A.get(D);(!j||U<j[1])&&A.set(D,[N,U])}}for(const[N,[D]]of A){const U=g(N);for(const[j,re]of S){const te=re.indexOf(D);if(te>=0&&j!==U){re.splice(te,1),S.set(U,[...S.get(U)??[],D]),o[D].kind="tucked";break}}}S=new Map([...S].filter(([,N])=>N.length>0))}const E=B=>B.filter(A=>o[A].kind==="card").length,M=B=>{const A=B.filter(N=>o[N].kind==="card"||o[N].kind==="wonder");return A.length===0?null:A.filter(N=>Kt(o[N])).length/A.length},k=B=>[B.reduce((A,N)=>A+l[N][0],0)/B.length,B.reduce((A,N)=>A+l[N][1],0)/B.length],T=[i[0]/2,i[1]/2],R=[...S.values()].sort((B,A)=>{const N=E(B),D=E(A);if(N!==D)return D-N;const U=Math.hypot(k(B)[0]-T[0],k(B)[1]-T[1]),j=Math.hypot(k(A)[0]-T[0],k(A)[1]-T[1]);return U-j}),P=k(R[0]),X=M(R[0]),W=R.map((B,A)=>{if(A===0||E(B)<Yr)return"player";const N=M(B),D=N!==null&&X!==null&&Math.abs(N-X)>=l2,U=k(B),j=r.some(re=>w2(P,U,re));return D||j?"opponent":"player"});if(!W.includes("opponent")){const B=N=>N.reduce((D,U)=>D+(o[U].kind==="wonder"?1:0),0);let A=W.map((N,D)=>D).filter(N=>N>0&&(E(R[N])>=Yr||B(R[N])>=2));if(A.reduce((N,D)=>N+B(R[D]),0)<1&&(A=[]),A.length>0&&(E(R[0])<2*Yr||A.reduce((N,D)=>N+E(R[D]),0)<2*Yr)&&(A=[]),A.length>0){const N=new Map(A.map(j=>[j,k(R[j])])),D=(j,re)=>(j[0]-re[0])**2+(j[1]-re[1])**2;if(A.every((j,re)=>A.slice(re+1).every(te=>D(N.get(j),N.get(te))<Math.min(D(N.get(j),P),D(N.get(te),P)))))for(const j of A)W[j]="opponent"}}const V=[],O=[];let F=!1;R.forEach((B,A)=>{const N=W[A];N==="opponent"&&(F=!0);const D=[],U=[];for(const j of B){const[re,te,Y,J]=o[j].box;D.push([re,te],[re+Y,te],[re,te+J],[re+Y,te+J]),U.push(o[j].box);const[ae,pe]=o[j].src;ae==="banner"?s[pe]=N:u[pe]=N}V.push([N,m2(D)]),O.push([N,U])});const K=(B,A,N)=>Math.min(...O[N][1].map(D=>y2(B,A,D))),Q=(B,A)=>V.map(([,N],D)=>N.length>=3&&zm(B,A,N)?D:-1).filter(N=>N>=0),ue=(B,A)=>{if(V.length===0)return"player";const N=p>0?c2*p:Number.POSITIVE_INFINITY,D=Q(B,A);if(D.length>0){const re=D.reduce((te,Y)=>K(B,A,Y)<K(B,A,te)?Y:te);return V[re][0]}let U=-1,j=Number.POSITIVE_INFINITY;return V.forEach(([,re],te)=>{const Y=g2(B,A,re);Y<j&&(U=te,j=Y)}),U>=0&&j<=N?V[U][0]:"none"},L=(B,A)=>{if(V.length===0)return"none";const N=Q(B,A);if(N.length===0)return"none";const D=N.reduce((U,j)=>K(B,A,j)<K(B,A,U)?j:U);return V[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:F,hulls:V,hullBoxCounts:O.map(([,B])=>B.length),pointOwner:ue,pointInside:L}}const _2=3;function b2(e,t=_2){const n=e.length,r=Array.from({length:n},(o,s)=>s),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let s=o+1;s<n;s+=1){const u=e[o],l=e[s],d=Number(u.center[0]),p=Number(u.center[1]),h=Number(l.center[0]),m=Number(l.center[1]),g=Number(u.radius??0),y=Number(l.radius??0);![d,p,h,m,g,y].every(Number.isFinite)||g<=0||y<=0||Math.hypot(d-h,p-m)<=t*(g+y)&&(r[i(o)]=i(s))}const a=new Map;for(let o=0;o<n;o+=1){const s=i(o);a.has(s)||a.set(s,[]),a.get(s).push(o)}return[...a.values()]}function $2(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3]),s=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(s,u)}function mo(e,t,n,r){const i=new Set(e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n));if(i.size===0)return[];const a=[];for(const o of b2(e)){const s=o.map(y=>e[y]),u=s.filter(y=>i.has(y));if(u.length===0)continue;let l=0,d=0,p=0;for(const y of s){const w=Number(y.center[0]),b=Number(y.center[1]);d+=w,p+=b,t.pointInside(w,b)===n&&(l+=1)}const h=d/s.length,m=p/s.length,g=r&&r.length>0?Math.min(...r.map(y=>$2(h,m,y))):0;a.push({cle:[...o].sort((y,w)=>y-w).join(","),membres:s,miens:u,inside:l,dPiste:g,centre:[h,m],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return a}function x2(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let a=0;a<4;a+=1){if(i[a]>r[a])return n;if(i[a]<r[a])return t}return t})}function v2(e,t,n,r){const[i,a]=e.centre,o={};for(const d of["player","opponent"]){const p=mo(t,n,d,r).filter(h=>h.cle!==e.cle);o[d]=p.length===0?1/0:Math.min(...p.map(h=>Math.hypot(i-h.centre[0],a-h.centre[1])))}if(o.player!==o.opponent)return o.player>o.opponent?"player":"opponent";const s=d=>{const p=mo(t,n,d,r).find(h=>h.cle===e.cle);return p?[p.inside,p.dPiste,p.valeur]:[-1,-1,-1]},u=s("player"),l=s("opponent");for(let d=0;d<3;d+=1){if(u[d]>l[d])return"player";if(u[d]<l[d])return"opponent"}return"player"}function S2(e,t,n){const r={player:[],opponent:[]},i={};for(const o of["player","opponent"]){const s=mo(e,t,o,n);s.length>0&&(i[o]=x2(s))}const a=Object.keys(i);if(a.length===0)return r;if(a.length===2&&i.player.cle===i.opponent.cle){const o=v2(i.player,e,t,n);return r[o]=i[o].membres,r}for(const o of a)r[o]=i[o].membres;return r}function T2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{return S2(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const E2=1280,I2=80,M2=3,k2=3,C2=.3,A2=2.4,R2=1,O2=5.2,N2=5;function go(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function z2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=C2&&r/n<=A2&&i/n>=R2&&i/n<=O2&&i/r<=N2}function B2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*E2/r<I2}function P2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let d=n[0],p=1/0;for(const h of n){const m=(u-h.cx)**2+(l-h.cy)**2;m<p&&(p=m,d=h)}d.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function D2(e,t,n,r,i=[]){const a=go(n);if(!B2(e,t,a))return[];const o=r.filter(l=>l.n>=k2&&l.poly.length>0).slice().sort((l,d)=>d.n-l.n).slice(0,2),s=Math.round(a*M2),u=[];for(const l of P2(o,i)){const d=l.poly.map(w=>w[0]),p=l.poly.map(w=>w[1]);if(d.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...d))-s),m=Math.max(0,Math.trunc(Math.min(...p))-s),g=Math.min(e,Math.trunc(Math.max(...d))+s),y=Math.min(t,Math.trunc(Math.max(...p))+s);g>h&&y>m&&u.push([h,m,g,y])}return u}function U2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return z2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}const L2=1.1,F2=3.2,G2=20,W2=.5,q2=1280,V2=.18,H2=28,j2=.3;function K2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(d=>d<=r),u=e.filter(d=>d>r);if(s.length===0||u.length===0)return[e.map((d,p)=>p)];const l=(s.reduce((d,p)=>d+p,0)/s.length+u.reduce((d,p)=>d+p,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function Y2(e,t,n=L2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of K2(s)){if(l.length===0)continue;const d=l.map(R=>e[R]),p=d.map(R=>Math.min(R[2],R[3])).sort((R,P)=>R-P),h=p[Math.trunc(p.length/2)],m=F2*h,g=Math.max(0,Math.min(...d.map(R=>R[0]))-m),y=Math.max(0,Math.min(...d.map(R=>R[1]))-m),w=Math.min(r,Math.max(...d.map(R=>R[0]+R[2]))+m),b=Math.min(i,Math.max(...d.map(R=>R[1]+R[3]))+m),x=Math.max(w-g,b-y);if(x<=0)continue;const S=W2*h*q2/x,v=S>0?Math.max(1,Math.ceil(G2/S)):1;if(v===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const E=w-g>=b-y,k=(E?w-g:b-y)/v,T=k*(1+V2);for(let R=0;R<v;R++){let P=(E?g:y)+R*k-(T-k)/2;P=Math.max(E?g:y,P);const X=Math.min(E?w:b,P+T);u.push(E?[Math.trunc(P),Math.trunc(y),Math.trunc(X),Math.trunc(b)]:[Math.trunc(g),Math.trunc(P),Math.trunc(w),Math.trunc(X)])}}return u.filter(([l,d,p,h])=>Math.max(r,i)/Math.max(1,Math.max(p-l,h-d))>=n)}function X2(e,t,n,r=H2){const[i,a]=n,o=e;for(const[s,u,l,d]of t){const p=(s+l)/2+i,h=(u+d)/2+a;o.some(([g,y,w,b])=>{const x=p-(g+w)/2,S=h-(y+b)/2;return Math.hypot(x,S)<=r})||o.push([s+i,u+a,l+i,d+a])}return o}function Q2(e,t,n,r=j2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function Z2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function J2(e,t,n,r){return n.length===0?!1:Z2(e,t,n)&&!Q2(e,t,r)}const Pm=4,Dm=8,Qr=5,In="base-game rule";function Bt(e,t){return{code:e,message:t,severity:"warning"}}function yo(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function e$(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Pm&&i.push(Bt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Pm} (${In}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=yo(n);return a.length>0&&i.push(Bt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${In}), so one of the two readings is wrong.`)),i}function t$(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Dm&&t.push(Bt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Dm} are in play (${In}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],d=[...o].filter(p=>l.has(p)).sort();d.length>0&&t.push(Bt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${d.join(", ")} — the city split misread one of them.`))}}return t}function n$(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>Qr&&n.push(Bt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${Qr} are in play (${In}) — reserve tokens sitting on the board were probably counted as owned.`));const i=yo(r);if(i.length>0&&n.push(Bt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${In}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==Qr&&n.push(Bt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${Qr} are in play (${In}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Bt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function r$(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Bt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=yo(e.filter(o=>!!o));return a.length>0&&r.push(Bt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${In}).`)),r}const i$=.25,a$=.45;function o$(e,t,n,r,i){const a=Math.cos(i),o=Math.sin(i),s=[n/2*a,n/2*o],u=[-r/2*o,r/2*a],d=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[d[1],d[2],d[3],d[0]]}function wo(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function Um(e,t){const n=wo(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function s$(e,t,n){const r=wo(e,t),i=wo(e,n),a=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,a,!0))}finally{r.delete(),i.delete(),a.delete()}}function u$(e,t,n=a$){const r=[...t].sort((a,o)=>o.confidence-a.confidence),i=[];for(const a of r){let o=!1;for(const s of i){const u=s$(e,a.quad,s.quad);if(u<=0)continue;const l=Um(e,a.quad)+Um(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){o=!0;break}}o||i.push(a)}return i}function l$(e,t,n,r,i=i$){const a=[];for(let o=0;o<n;o++){const s=t[4*n+o];if(s<i)continue;const l=o$(t[o],t[n+o],t[2*n+o],t[3*n+o],t[5*n+o]).map(d=>[(d[0]-r.padX)/r.scale,(d[1]-r.padY)/r.scale]);a.push({quad:l,confidence:s})}return u$(e,a)}const c$=128,d$=88;function p$(e,t,n,r=c$,i=d$){const a=new e.Mat(t.height,t.width,e.CV_8UC3),o=a.data,s=t.channels;for(let h=0,m=t.width*t.height;h<m;h++)o[h*3]=t.data[h*s],o[h*3+1]=t.data[h*s+1],o[h*3+2]=t.data[h*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),d=e.getPerspectiveTransform(u,l),p=new e.Mat;try{return e.warpPerspective(a,p,d,new e.Size(r,i)),{data:new Uint8Array(p.data),width:r,height:i,channels:3}}finally{a.delete(),u.delete(),l.delete(),d.delete(),p.delete()}}function h$(e){return[e[2],e[3],e[0],e[1]]}const f$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],m$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],g$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],y$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],w$=[...m$,...g$,...y$,...f$];Object.fromEntries(w$.map(e=>[e.id,e]));const _$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Lm=.2,b$=.3,Fm=.25,_o={total:0,idDiff:0,verdictDiff:0},Pt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},Zr={total:0,memeK:0,memeKInverse:0,detail:[]};function $$(e,t,n){for(const r of e){let i=!1;for(let a=0,o=r.length-1;a<r.length;o=a++){const s=r[a],u=r[o];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(a=>[a[0],a[1]])}return null}function x$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Fm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const d=s[2]/s[3];if(!(Math.abs(Math.log(d))<=Fm)&&r>1==d>1)return!0}return!1}async function v$(e,t,n,r,i=[0,1,2,3]){const[a,o,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*Lm),d=Math.round(u*Lm),p=Math.max(0,Math.round(a-l)),h=Math.max(0,Math.round(o-d)),m=Math.min(e.width,Math.round(a+s+l)),g=Math.min(e.height,Math.round(o+u+d)),y=m-p,w=g-h;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let E=0;E<w;E++){const M=((h+E)*e.width+p)*b;x.set(e.data.subarray(M,M+y*b),E*y*b)}const S={width:y,height:w,channels:b,data:x};let v=null;for(const E of i){const M=E===0?S:En(S,E),k=M.width,T=k-Math.floor(b$*k),R=k-T;if(R<=0)continue;const P=new Uint8ClampedArray(R*M.height*M.channels);for(let F=0;F<M.height;F++){const K=(F*k+T)*M.channels;P.set(M.data.subarray(K,K+R*M.channels),F*R*M.channels)}const X={width:R,height:M.height,channels:M.channels,data:P},W=lo(X),O=(await n.run({[n.inputNames[0]]:new Ue("float32",W,[1,3,Nt,Nt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=O),v=v===null?O:Math.max(v,O)}return v}async function S$(e,t,n,r,i,a,o=[],s){var w;const u=async b=>(await r.run({[r.inputNames[0]]:new Ue("float32",b,[1,3,jt,jt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await Je("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(b){return console.warn("[wonders-obb] détection échouée, repli ORB :",b),null}});s!==void 0&&(s.n=l===null?0:l.length);const d=l===null?[]:l.map(b=>{const x=b.map(([M])=>M),S=b.map(([,M])=>M),v=Math.min(...x),E=Math.min(...S);return[Math.round(v),Math.round(E),Math.round(Math.max(...x)-v),Math.round(Math.max(...S)-E)]}),p=o.length===0?d:d.filter(([b,x,S,v])=>{const E=b+S/2,M=x+v/2;return!o.some(k=>{const T=k.x+k.width/2,R=k.y+k.height/2,P=.5*Math.min(k.width,k.height);return(E-T)**2+(M-R)**2<P*P})}),h=new Map;for(const b of p){const[x,S,v,E]=b;if(v<=0||E<=0)continue;const M=l===null?null:$$(l,x+v/2,S+E/2);if(M===null||e.redresserQuad===void 0)continue;let k=M;const T=rt("identify: redressement du quad",()=>e.redresserQuad(n,k)),R=Em(),{id:P,prob:X,inverse:W}=await Je("classifieur merveille (1 lecture)",()=>S1(T,u));if(P===""||X<R)continue;W&&(k=h$(k).map(O=>[O[0],O[1]]));const V=h.get(P);(V===void 0||X>V.prob)&&h.set(P,{prob:X,box:b,quad:k})}const m=[],g=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[b,{prob:x,box:S,quad:v}]of h){const[E,M,k,T]=S;let R={x:Math.round(E),y:Math.round(M),width:Math.round(k),height:Math.round(T)},P=null,X=[],W=null;if(v!==null){P=v;const N=P.map(re=>re[0]),D=P.map(re=>re[1]),U=Math.max(0,Math.round(Math.min(...N))),j=Math.max(0,Math.round(Math.min(...D)));if(R={x:U,y:j,width:Math.min(n.width,Math.round(Math.max(...N)))-U,height:Math.min(n.height,Math.round(Math.max(...D)))-j},g!==null)try{const re=await e.wonderRef(b),te=P,Y=re===null||te===null?null:rt("identify: bande droite #63",()=>dm(t,n,re,te));if(Y!==null){const J=rt("identify: preprocess tuck",()=>lo(Y)),ae=await g.run({[g.inputNames[0]]:new Ue("float32",J,[1,3,Nt,Nt])});W=hm(ae[g.outputNames[0]].data).prob,X=W>=Ln?["R"]:[]}}catch{}}else if(Date.now()<i)try{const N=await Je("chargement refs merveilles",()=>e.wonderRef(b));if(N!==null){const D=rt("ORB registration (merveille)",()=>eb(t,n,N,S));if(D!==null){P=D.footprint,X=D.overflow;const U=P.map(Y=>Y[0]),j=P.map(Y=>Y[1]),re=Math.max(0,Math.round(Math.min(...U))),te=Math.max(0,Math.round(Math.min(...j)));if(R={x:re,y:te,width:Math.min(n.width,Math.round(Math.max(...U)))-re,height:Math.min(n.height,Math.round(Math.max(...j)))-te},g!==null)try{const Y=P,J=Y===null?null:rt("identify: bande droite #63",()=>dm(t,n,N,Y));if(J!==null){const ae=rt("identify: preprocess tuck",()=>lo(J)),pe=await g.run({[g.inputNames[0]]:new Ue("float32",ae,[1,3,Nt,Nt])});W=hm(pe[g.outputNames[0]].data).prob}}catch{}}}}catch(N){console.warn(`[wonders-cls] ${b} registration failed:`,N)}const V=P!==null?cm(P,X):null,O=v!==null&&P!==null?cm(P,["R"]):null,F=[];if(W!==null&&F.push(W>=Ln?1:0),y!==null)try{let N=[0,1,2,3];if(v!==null){const j=v[1][1]-v[0][1],re=v[1][0]-v[0][0],te=(Math.round(Math.atan2(j,re)*180/Math.PI/90)%4+4)%4;N=[(0+te)%4,(2+te)%4]}const D=[0,0,0,0],U=await Je("identify: sonde marges (#68)",()=>v$(n,S,y,D,N));if(U!==null&&(F.push(U>=Ln?1:0),v!==null)){const j=v[1][1]-v[0][1],re=v[1][0]-v[0][0],te=(Math.round(Math.atan2(j,re)*180/Math.PI/90)%4+4)%4,Y=Math.max(D[(0+te)%4],D[(2+te)%4]);Pt.total+=1;const J=U>=Ln?1:0,ae=Y>=Ln?1:0;J===1&&(Pt.positifs4+=1),ae===1&&(Pt.positifs2+=1),J!==ae&&(Pt.divergent+=1,Pt.detail.push(`${b.slice(0,12)}:v4=${J}/v2=${ae} p=[${D.map(pe=>pe.toFixed(2)).join(",")}]kQ${te}`))}}catch{}const K=O??V??R,Q=a.some(N=>{const D=N.box[0]+N.box[2]/2,U=N.box[1]+N.box[3]/2;return D>=K.x&&D<=K.x+K.width&&U>=K.y&&U<=K.y+K.height});F.push(Q?1:0);let ue=F.length>0&&F.reduce((N,D)=>N+D,0)*2>F.length;ue&&x$(K,R,a)&&(ue=!1);const L=V??(ue&&O!==null?O:null),B={id:b,name:((w=_$[b])==null?void 0:w.name)??b,builtWithCardUnderneath:ue,boundingBox:R,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},A=L??R;m.push({obj:B,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height},quad:P,region:L})}return m}const Ze="/7wd-scorer/models/",bo=[];let It=null;function T$(){bo.length=0,It=null}function E$(e){const t=performance.now();It!==null&&bo.push({nom:It.nom,ms:Math.round(t-It.debut)}),It={nom:e,debut:t}}function Gm(){const e=[...bo];It!==null&&e.push({nom:`${It.nom} (en cours)`,ms:Math.round(performance.now()-It.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function Wm(){const e={};for(const t of Object.keys(at))e[at[t].onnx]=ei.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ut)e[t]=n;return e}function I$(){var e,t;return $o(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let qm=!1;const Jr=new Map;function $o(){var e;qm||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,qm=!0)}const ei=new Set;let xo=0;function Vm(e){return xo+=1,e.finally(()=>{xo-=1})}function M$(){return xo>0}function k$(e){$o();let t=Jr.get(e);return t===void 0&&(t=Vm(Je(`session: 1er chargement ${at[e].onnx}`,()=>br.create(`${Ze}${at[e].onnx}`,{executionProviders:ei.has(e)?["wasm"]:["webgpu","wasm"]}))),Jr.set(e,t),t.catch(()=>Jr.delete(e))),t}const ut=new Map;let pr=0,hr=0;const ti=new Map;function vo(e){const t=(It==null?void 0:It.nom)??"(hors etage)";ti.set(t,(ti.get(t)??0)+e)}function C$(){return[...ti.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let So=0;function A$(){return{ms:Math.round(pr),appels:hr,preparationMs:Math.round(So)}}function R$(){pr=0,hr=0,So=0,_w(),ti.clear(),fx()}const Hm=new Set(["coin_yolo.onnx","token_yolo.onnx"]),To=new Set;let Eo=null;async function O$(e){if(Eo)return await Eo.catch(()=>{}),e();const t=e();return Eo=t.catch(()=>{}),t}async function Io(e,t){return O$(()=>br.create(`${Ze}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ht(e){return Vm(Je(`session: 1er chargement ${e}`,()=>N$(e)))}async function N$(e){$o();const t=!Hm.has(e)&&!To.has(e);let n=null;if(t)try{n=await Io(e,!0),ut.set(e,"webgpu")}catch(o){To.add(e),ut.set(e,`wasm (webgpu refuse a la creation: ${String(o).slice(0,60)})`)}else ut.set(e,Hm.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Io(e,!1)}catch(o){return ut.set(e,`ECHEC wasm: ${String(o).slice(0,160)}`),null}let r=n,i=ut.get(e)==="webgpu";const a=async(o,...s)=>{const u=performance.now();try{const l=await r.run(o,...s),d=performance.now()-u;return pr+=d,vo(d),hr+=1,l}catch(l){if(!i)throw l;To.add(e),ut.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Io(e,!1);const d=await r.run(o,...s),p=performance.now()-u;return pr+=p,vo(p),hr+=1,d}};return new Proxy(r,{get(o,s,u){if(s==="run")return a;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let Mo=null,ko=null;const z$=.65,B$=3e4;let Co=null;function Ao(){return Co===null&&(Co=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Co}const jm=new Map;function Ro(e){let t=jm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ze}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),jm.set(e,t)),t}function P$(e){return Ro(`wonder-refs/${e}.jpg`)}const Km=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function D$(){const e=new Map;for(const t of Km){const n=await Ro(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function U$(){const e=new Map;for(const t of Km){const n=await Ro(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function Ym(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(p,h)=>i===1?[h,r-1-p]:i===2?[n-1-p,r-1-h]:[n-1-h,p],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(p=>p[0]),u=o.map(p=>p[1]),l=Math.min(...s),d=Math.min(...u);return{x:l,y:d,width:Math.max(...s)-l,height:Math.max(...u)-d}}function L$(){return ko===null&&(ko=fetch(`${Ze}laurel_gallery.json`).then(async e=>e.ok?M_(await e.json()):[]).catch(()=>[])),ko}function F$(e,t,n,r){return rt("crop",()=>G$(e,t,n,r))}function G$(e,t,n,r){return sn(e,t-r,n-r,2*r,2*r)}function sn(e,t,n,r,i){return rt("crop",()=>W$(e,t,n,r,i))}function W$(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),d=Math.max(0,u-o),p=new Uint8Array(l*d*3);for(let h=0;h<d;h++)for(let m=0;m<l;m++){const g=((h+o)*e.width+(m+a))*e.channels,y=(h*l+m)*3;p[y]=e.data[g],p[y+1]=e.data[g+1],p[y+2]=e.data[g+2]}return{width:l,height:d,channels:3,data:p}}function q$(){return Mo===null&&(Mo=fetch(`${Ze}token_templates.json`).then(async e=>e.ok?Jb(await e.json()):new Map).catch(()=>new Map)),Mo}let Oo=null;function No(){return Oo===null&&(Oo=(async()=>{try{const e=await fetch(`${Ze}token_embed_index.json`);if(!e.ok)return null;const t=s1(await e.json()),n=await ht("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),Oo}const V$=.92;let zo=null;function Bo(){return zo===null&&(zo=(async()=>{try{return(await fetch(`${Ze}guild_classifier.onnx`,{method:"HEAD"})).ok?await ht("guild_classifier.onnx"):null}catch{return null}})()),zo}let Po=null;function Do(){return Po===null&&(Po=(async()=>{try{return(await fetch(`${Ze}laurel_digit.onnx`,{method:"HEAD"})).ok?await ht("laurel_digit.onnx"):null}catch{return null}})()),Po}let Uo=null,Lo=null;function Fo(){return Lo===null&&(Lo=(async()=>{try{return(await fetch(`${Ze}banner_class.onnx`,{method:"HEAD"})).ok?await ht("banner_class.onnx"):null}catch{return null}})()),Lo}async function H$(e,t){if(t.length===0)return t;const n=await Fo();if(n===null)return t;const r=[];for(const i of t)try{const a=D1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=sn(e,a.x,a.y,a.w,a.h),s=U1(o),u=await n.run({[n.inputNames[0]]:new Ue("float32",s,[1,3,on,on])});L1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function Go(){return Uo===null&&(Uo=(async()=>{try{return(await fetch(`${Ze}laurel_filter.onnx`,{method:"HEAD"})).ok?await ht("laurel_filter.onnx"):null}catch{return null}})()),Uo}async function j$(e,t,n){let[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;if(s<Gn){const w=Math.floor((r+a)/2);r=w-Math.floor(Gn/2),a=w+Math.floor(Gn/2),s=a-r}if(u<Gn){const w=Math.floor((i+o)/2);i=w-Math.floor(Gn/2),o=w+Math.floor(Gn/2),u=o-i}const l=Math.trunc(km*s),d=Math.trunc(km*u),p=Math.max(0,r-l),h=Math.max(0,i-d),m=Math.min(e.width,a+l),g=Math.min(e.height,o+d),y=sn(e,p,h,m-p,g-h);if(y.width<=0||y.height<=0)return null;try{const w=O1(y),b=await n.run({[n.inputNames[0]]:new Ue("float32",w,[1,3,an,an])});return N1(b[n.outputNames[0]].data)}catch{return null}}let Wo=null;function qo(){return Wo===null&&(Wo=(async()=>{try{return(await fetch(`${Ze}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ht("coin_filter_cnn.onnx"):null}catch{return null}})()),Wo}let Vo=null;function Ho(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Ze}coin_denom.onnx`,{method:"HEAD"})).ok?await ht("coin_denom.onnx"):null}catch{return null}})()),Vo}async function K$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Nm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*gt*gt);r.forEach((u,l)=>i.set(u,l*u.length));const o=(await n.run({[n.inputNames[0]]:new Ue("float32",i,[t.length,3,gt,gt])}))[n.outputNames[0]].data,s=Kr.length;return t.map((u,l)=>a2(o.subarray(l*s,l*s+s)))}catch{return null}}async function Y$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=Nm(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const d=new Float32Array(t.length*3*gt*gt);l.forEach((m,g)=>d.set(m,g*m.length));const h=(await n.run({[n.inputNames[0]]:new Ue("float32",d,[t.length,3,gt,gt])}))[n.outputNames[0]].data;return t.map((m,g)=>r2(h.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,d)=>Math.max(l,u[d]))}return i}catch{return null}}let jo=null;function Ko(){return jo===null&&(jo=(async()=>{try{return(await fetch(`${Ze}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ht("tuck_classifier.onnx"):null}catch{return null}})()),jo}const Xm=.1;let Yo=null;function ni(){return Yo===null&&(Yo=(async()=>{try{return(await fetch(`${Ze}track_band_brut.onnx`,{method:"HEAD"})).ok?await ht("track_band_brut.onnx"):null}catch{return null}})()),Yo}async function Qm(e,t,n){try{const r=Wr(t,1280,Cw(t.width,t.height,n)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return Yf(a.data,a.dims[1]??0,a.dims[2]??0,r.params,Xm)}catch{return[]}}let Xo=null;const X$=.4;function Q$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function Z$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||Q$(a,u)>=X$)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function Qo(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Ze}tuck_box.onnx`,{method:"HEAD"})).ok?await ht("tuck_box.onnx"):null}catch{return null}})()),Xo}let Zo=null;function Jo(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${Ze}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await J$(),await ht("wonder_classifier.onnx")):null}catch{return null}})()),Zo}let Zm=!1;async function J$(){if(Zm)return;const e=await(await fetch(`${Ze}wonder_classifier_seuil.json`)).json();w1(Number(e.seuil)),_1(e.classes),Zm=!0}let Jm=null,eg=null;async function ex(e){var p;Jm??(Jm=ht("wonder_obb.onnx"));const t=await Jm;if(t===null)return null;const n=await Ao();if(n===null)return null;eg=n;const{tensor:r,params:i}=Wr(e,1024),o=(await t.run({[t.inputNames[0]]:new Ue("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],s=o.dims[o.dims.length-1],u=o.data;let l=0;for(let h=0;h<s;h++){const m=u[4*s+h];m>l&&(l=m)}const d=l$(n,u,s,i);return ut.set("wonder_obb.onnx",`${ut.get("wonder_obb.onnx")??"?"} | dims=${o.dims} scoreMax=${l.toFixed(4)} dets=${d.length} q0=${(p=d[0])!=null&&p.quad[0]?JSON.stringify(d[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),d.map(h=>h.quad.map(m=>[m[0],m[1]]))}const tx={wonderRef:P$,tuckClassifier:Ko,tuckBoxClassifier:Qo,obbQuads:ex,redresserQuad:(e,t)=>p$(eg,e,t)};async function nx(e,t){const n=await No();if(n!==null)try{const r=l1(e),i=new Ue("float32",r,[4,3,rn,rn]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=d1(n.index,c1(o));return u<V$?["",-1]:[s,u]}catch{}return r1(e,t)}const tg=new WeakMap;async function ri(e){const t=tg.get(e);if(t!==void 0)return await t;const n=Je("decodage image",()=>rx(e));return tg.set(e,n),await n}async function rx(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",a=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${a}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const ng=new WeakMap;async function Dt(e,t){let n=ng.get(t);n===void 0&&(n=new Map,ng.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=ix(e,t);return n.set(e,i),await i}async function ix(e,t){const n=at[e],r=performance.now(),{tensor:i,params:a}=Wr(t,n.input);So+=performance.now()-r;const o=async()=>{const s=await k$(e),u={[s.inputNames[0]]:new Ue("float32",i,[1,3,n.input,n.input])},l=performance.now(),d=await s.run(u),p=performance.now()-l;pr+=p,vo(p),hr+=1;const h=d[s.outputNames[0]];return{rows:new Float32Array(h.data),params:a}};try{return await o()}catch(s){if(ei.has(e))throw s;return ei.add(e),Jr.delete(e),await o()}}const ax=6,ox=4,sx=5,ux=2;async function lx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ri(e),r=await Dt("banner",n),i=qr(r.rows,r.params,at.banner.conf);if(t.banners=i.length,i.length>=ax)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Dt("laurel",n),o=ao(a.rows,a.params,at.laurel.conf);if(t.laurels=o.length,o.length>=ox)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await Dt("coin",n),u=jf(s.rows,s.params,at.coin.conf);return t.coins=u.length,u.length>=sx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=ux?{...t,kind:"board",confidence:.4}:t}function cx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function rg(e,t,n,r,i,a,o,s){let u=0;r(`${i}: card banners…`,.04);const l=await Dt("banner",e);let d=qr(l.rows,l.params,at.banner.conf);d=await H$(e,d),r(`${i}: progress tokens…`,.08);let p=[];const h=await ni();h!==null&&(p=await Qm(h,e,d)),p.length>0&&d.length>0&&(d=d.filter(Y=>{const J=Y.box[0]+Y.box[2]/2,ae=Y.box[1]+Y.box[3]/2;return!p.some(([pe,Ae,me,ie])=>Math.min(pe,me)<=J&&J<=Math.max(pe,me)&&Math.min(Ae,ie)<=ae&&ae<=Math.max(Ae,ie))}));const m=await Dt("token",e),g=await q$(),y=[],w=[];for(const Y of Fw(m.rows,m.params,at.token.conf)){if(w.push({cx:Y.cx,cy:Y.cy,r:Y.r}),p.some(([pe,Ae,me,ie])=>Y.cx>=pe&&Y.cx<=me&&Y.cy>=Ae&&Y.cy<=ie))continue;const[J,ae]=await nx(tm(e,Y),g);J===""&&ae<0?w.pop():J===""?u+=1:!y.some(pe=>pe.id===J)&&!s.some(pe=>pe.id===J)&&y.push({id:J,center:[Y.cx,Y.cy],radius:Y.r,confidence:Math.round(ae*1e4)/1e4})}r(`${i}: coins…`,.14);const b=await Dt("coin",e),x=jf(b.rows,b.params,at.coin.conf).filter(Y=>!w.some(J=>(Y.cx-J.cx)**2+(Y.cy-J.cy)**2<=Y.r*Y.r)),S=await qo(),v=S!==null?await Y$(e,x,S):null,E=(v!==null?x.filter((Y,J)=>v[J]>=Om).map(Y=>Y.r):[]).sort((Y,J)=>Y-J),M=E.length>0?E.length%2===1?E[(E.length-1)/2]:(E[E.length/2-1]+E[E.length/2])/2:null,[k,T]=n2,R=x.map((Y,J)=>{const ae=v!==null?v[J]:null;return ae===null||ae>=Om?"keep":M!==null&&M>0&&Y.r/M>=k&&Y.r/M<=T?"suspect":"drop"}),P=x.filter((Y,J)=>R[J]==="keep"),X=h_(e,P),W=await Ho(),V=W!==null?await K$(e,P,W):null,O=o2(X,V??X.map(()=>null));O.map(Y=>Y.value);const F=[];let K=0;if(x.forEach((Y,J)=>{if(R[J]==="drop")return;if(R[J]==="suspect"){const pe=v[J];F.push({denomination:null,center:[Y.cx,Y.cy],radius:Y.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${pe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const ae=O[K++];F.push({denomination:ae.value,center:[Y.cx,Y.cy],radius:Y.r,denomSource:ae.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const Y=F.map(ae=>ae.radius).sort((ae,pe)=>ae-pe),J=Y.length%2===1?Y[(Y.length-1)/2]:(Y[Y.length/2-1]+Y[Y.length/2])/2;if(J>0)for(const ae of F)ae.radius/J>2&&(ae.suspect=!0,ae.suspectReason=`radius ${ae.radius}px is ${(ae.radius/J).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let Y=0;Y<F.length;Y+=1)for(let J=Y+1;J<F.length;J+=1){const ae=F[Y],pe=F[J],Ae=Math.hypot(ae.center[0]-pe.center[0],ae.center[1]-pe.center[1]);if(Ae<1.1*Math.min(ae.radius,pe.radius))for(const me of[ae,pe])me.suspect||(me.suspect=!0,me.suspectReason=`almost concentric with another coin (${Ae.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Q=[],ue=[],L=[],B=Date.now()+B$;let A=null;const N=[];let D=!1;const U={n:0},j=await Jo();if(j!==null&&(A=await Je("opencv.js (chargement)",()=>Ao()),A!==null)){r(`${i}: identifying wonders…`,.35);const Y=await Je("identifyWondersByClassifier",()=>S$(tx,A,e,j,B,d,[],U));for(const J of Y)Q.some(ae=>ae.id===J.obj.id)||o.some(ae=>ae.id===J.obj.id)||(Q.push(J.obj),N.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),ue.push(J.zone),L.push({quad:J.quad,region:J.region}));D=Y.length>0}if(!D){const Y=rb(N.map(J=>({built:J.obj.builtWithCardUnderneath,edgeScores:J.edgeScores,zone:J.zone})),d.map(J=>[J.box[0]+J.box[2]/2,J.box[1]+J.box[3]/2]));for(const J of Y){const ae=N[J];ae.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${ae.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(d.length>0){const J=new Set(Y);for(let ae=0;ae<N.length;ae++){const pe=N[ae];if(J.has(ae)||!pe.obj.builtWithCardUnderneath)continue;const Ae=pe.obj.tuckRegion;if(Ae===void 0)continue;if(!d.some(ie=>{const Ie=ie.box[0]+ie.box[2]/2,Oe=ie.box[1]+ie.box[3]/2;return Ie>=Ae.x&&Ie<=Ae.x+Ae.width&&Oe>=Ae.y&&Oe<=Ae.y+Ae.height})){const ie=pe.obj;ie.builtWithCardUnderneath=!1,ie.suspect=!0,ie.suspectReason="built-unconfirmed"}}}}const re=async()=>{let Y=Q.slice();const J=[];d.forEach((ie,Ie)=>{const Oe=ie.box[0]+ie.box[2]/2,ee=ie.box[1]+ie.box[3]/2;ue.some(de=>Oe>=de.x0&&Oe<=de.x1&&ee>=de.y0&&ee<=de.y1)||J.push(Ie)});const ae=[],pe=[];Y.forEach((ie,Ie)=>{const Oe=ie.boundingBox;Oe&&Oe.width>0&&(ae.push(Ie),pe.push([Oe.x,Oe.y,Oe.width,Oe.height]))});const Ae=ie=>{const Ie=[];return ie.forEach((Oe,ee)=>{const de=Oe.box[0]+Oe.box[2]/2,fe=Oe.box[1]+Oe.box[3]/2;ue.some(Te=>de>=Te.x0&&de<=Te.x1&&fe>=Te.y0&&fe<=Te.y1)||Ie.push(ee)}),Ie};let me=Bm(d.map(ie=>ie.box),J,pe,p,[e.width,e.height]);try{const ie=D2(e.width,e.height,d.map(Ie=>Ie.box),me.hulls.map(([Ie,Oe],ee)=>({owner:Ie,poly:Oe,n:me.hullBoxCounts[ee]??0})),pe);if(ie.length>0){const Ie=go(d.map(ee=>ee.box)),Oe=[];for(const ee of ie){const[de,fe,Te,$e]=ee,_e=sn(e,de,fe,Te-de,$e-fe);if(_e.width<=0||_e.height<=0)continue;const Me=await Dt("banner",_e);for(const ye of qr(Me.rows,Me.params,at.banner.conf)){const tt=U2(ye.box,ee,Ie);tt&&Oe.push({...ye,box:tt})}}if(Oe.length>0){const ee=Qf([...d,...Oe]);ee.length>d.length&&(d=ee,me=Bm(d.map(de=>de.box),Ae(d),pe,p,[e.width,e.height]))}}}catch(ie){console.warn("[#129 city-rescan] skipped:",ie)}return a!==void 0&&(a.hulls=me.hulls.map(([ie,Ie],Oe)=>({owner:ie,poly:Ie,n:me.hullBoxCounts[Oe]??0})),a.bandBoxes=p,a.image=e),{split:me,photoWonders:Y,splitWonderIdx:ae}};let te=null;try{te=await re()}catch(Y){console.warn("[city-split] failed (side unfiltered):",Y)}return{bannerDetections:d,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:p,bandSession:h,wonderFootprints:ue,wonderTuckGates:L,photoTokensList:y,geo:te,cv:A,regDeadline:B,unidentifiedTokens:u}}async function ig(e,t,n,r,i,a,o,s,u,l){let d=e.bannerDetections,p=e.cv;const{photoCoins:h,photoTokenDiscs:m,discs:g,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:S,geo:v,regDeadline:E}=e,M={},k=[],T=[];let R=0;const P=[];let X=0,W=0;const V=[],O=[],F=[],K=t==="opponent";let Q=(ee,de)=>!K,ue=(ee,de)=>!K,L=null;if(v!==null)try{const{split:ee,photoWonders:de,splitWonderIdx:fe}=v;Q=(Me,ye)=>ee.pointOwner(Me,ye)==="opponent"===K;const Te=K?"opponent":"player";if(ue=(Me,ye)=>ee.pointOwner(Me,ye)===Te,n){const Me=ee;L=ye=>new Set(T2(ye,Me,Te,y))}d=d.filter((Me,ye)=>ee.bannerOwner[ye]==="opponent"===K);const $e=de.map(()=>"player");fe.forEach((Me,ye)=>{$e[Me]=ee.wonderOwner[ye]});const _e=[];de.forEach((Me,ye)=>{$e[ye]==="opponent"===K&&_e.push(Me)});for(const Me of _e)O.push(Me);b.length=0;for(const Me of _e){const ye=Me.tuckRegion??Me.boundingBox;ye&&b.push({x0:ye.x,y0:ye.y,x1:ye.x+ye.width,y1:ye.y+ye.height})}for(const Me of S)Q(Me.center[0],Me.center[1])&&F.push(Me)}catch(ee){console.warn("[city-split] failed (side unfiltered):",ee)}const B=L!==null?L(h):null;for(const ee of h)(B!==null?!B.has(ee):!ue(ee.center[0],ee.center[1]))||(R+=ee.denomination??0,T.push(ee));const A=new Set,N=[],D=go(d.map(ee=>ee.box));x.forEach((ee,de)=>{if(ee.quad===null||ee.region===null){const _e=b[de];_e&&N.push(_e);return}const fe=ee.region,Te=[];d.forEach((_e,Me)=>{const ye=_e.box[0]+_e.box[2]/2,tt=_e.box[1]+_e.box[3]/2;ye>=fe.x&&ye<=fe.x+fe.width&&tt>=fe.y&&tt<=fe.y+fe.height&&Te.push([Me,_e.box])});const $e=t2(ee.quad,Te,D);$e!==null&&A.add($e)});let U=[],j=0;d.forEach((ee,de)=>{if(A.has(de)){W+=1,j+=1;return}const fe=ee.box[0]+ee.box[2]/2,Te=ee.box[1]+ee.box[3]/2;if(N.some($e=>fe>=$e.x0&&fe<=$e.x1&&Te>=$e.y0&&Te<=$e.y1)){W+=1,j+=1;return}U.push(ee)});const re=K1(U,j,y,a.width,a.height);U=re.kept;for(const ee of U)M[ee.family]=(M[ee.family]??0)+1,X+=1;const te=Qw(U),Y=new Set(te.map(ee=>ee.box.join(",")));for(const ee of Jw(U))Y.has(ee.box.join(","))||(te.push(ee),Y.add(ee.box.join(",")));for(const ee of re.suspects)Y.has(ee.box.join(","))||(te.push(ee),Y.add(ee.box.join(",")));for(const ee of te)V.push(ee);if(U.some(ee=>ee.family==="guild")){const ee=await Bo();if(ee!==null){s(`${u}: identifying guilds…`,.75);for(const de of U)if(de.family==="guild")try{const[fe,Te,$e,_e]=de.box,Me=sn(a,fe,Te,$e,_e),ye=f1(Me),tt={[ee.inputNames[0]]:new Ue("float32",ye,[1,3,Fn,Fn])},qe=(await ee.run(tt))[ee.outputNames[0]].data,{id:We,prob:ft}=m1(qe);We!==""&&!P.some(kt=>kt.id===We)&&!l.some(kt=>kt.id===We)&&P.push({id:We,boundingBox:{x:fe,y:Te,width:$e,height:_e},confidence:Math.round(ft*1e4)/1e4})}catch(fe){console.warn("[guild-cls] failed:",fe)}}else if(Date.now()<E)try{const de=p??await Ao();if(de!==null){const fe=await D$();if(fe.size>0){s(`${u}: identifying guilds…`,.75);const Te=await U$();for(const $e of Wb(de,a,fe,E,Te))!P.some(_e=>_e.id===$e.id)&&!l.some(_e=>_e.id===$e.id)&&P.push($e)}}}catch(de){console.warn("[guilds-reg] failed:",de)}}s(`${u}: laurels…`,.8);const ae=await Je("laurier: chargement galerie gabarits",()=>L$()),pe=[];for(const ee of[0]){const de=ee===0?a:En(a,ee),fe=await Je("laurier: passe PLEINE photo",()=>Dt("laurel",de));for(const[Te,$e,_e,Me]of rt("laurier: decodage YOLO (JS)",()=>ao(fe.rows,fe.params,at.laurel.conf))){const ye=Ym({x:Te,y:$e,width:_e-Te,height:Me-$e},ee,a.width,a.height);pe.push([ye.x,ye.y,ye.x+ye.width,ye.y+ye.height])}}let Ae=rt("laurier: dedup",()=>Kf(pe));const me=[];try{const ee=Y2(d.map(de=>de.box),[a.width,a.height]);ut.set("_tta.onnx",`total=${_o.total} idDiff=${_o.idDiff} verdictDiff=${_o.verdictDiff}`),ut.set("_marge2.onnx",`total=${Pt.total} pos4=${Pt.positifs4} pos2=${Pt.positifs2} divergent=${Pt.divergent} `+Pt.detail.slice(0,10).join(" | ")),ut.set("_ttaObb.onnx",`total=${Zr.total} memeK=${Zr.memeK} inv=${Zr.memeKInverse} `+Zr.detail.slice(0,12).join(" ")),ut.set("_tuilage.onnx",`groupes=? tuiles=${ee.length} bannieres=${d.length} image=${a.width}x${a.height}`);for(const[de,fe,Te,$e]of ee){const _e=sn(a,de,fe,Te-de,$e-fe);if(_e.width<=0||_e.height<=0)continue;const Me=[];for(const ye of[0]){const tt=ye===0?_e:En(_e,ye),Ye=await Je("laurier: passe par TUILE (#113)",()=>Dt("laurel",tt));for(const[qe,We,ft,kt]of rt("laurier: decodage YOLO (JS)",()=>ao(Ye.rows,Ye.params,at.laurel.conf))){const ot=Ym({x:qe,y:We,width:ft-qe,height:kt-We},ye,_e.width,_e.height);Me.push([ot.x,ot.y,ot.x+ot.width,ot.y+ot.height])}}if(Ae=X2(Ae,Kf(Me),[de,fe]),w!==null)try{const ye=await Je("laurier: bande de piste sur tuile (#114)",async()=>{const qe=Wr(_e,1280,ur);return{sortie:await w.run({[w.inputNames[0]]:new Ue("float32",qe.tensor,[1,3,1280,1280])}),params:qe.params}}),tt={params:ye.params},Ye=ye.sortie[w.outputNames[0]];for(const[qe,We,ft,kt]of Yf(Ye.data,Ye.dims[1]??0,Ye.dims[2]??0,tt.params,Xm))me.push([qe+de,We+fe,ft+de,kt+fe])}catch{}}}catch(ee){console.warn("[laurel-containers] failed:",ee)}const ie=[...y,...me];Ae=Ae.filter(([ee,de,fe,Te])=>!J2((ee+fe)/2,(de+Te)/2,ie,d.map($e=>$e.box)));const[Ie,Oe]=await Je("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([Do(),Go()]));for(const[ee,de,fe,Te]of Ae){const $e=Math.trunc((ee+fe)/2),_e=Math.trunc((de+Te)/2);if([...m,...g].some(Ge=>($e-Ge.cx)**2+(_e-Ge.cy)**2<=Ge.r*Ge.r)||!Q($e,_e))continue;if(Oe!==null){const Ge=await Je("laurier: filtre FP (#49)",()=>j$(a,[Math.trunc(ee),Math.trunc(de),Math.trunc(fe),Math.trunc(Te)],Oe));if(Ge!==null&&Ge>=R1)continue}const ye=Math.min(Math.trunc(fe-ee),Math.trunc(Te-de)),tt=Math.max(6,Math.trunc(Math.max(fe-ee,Te-de)*__)),Ye=F$(a,$e,_e,tt);let qe=null,We=0,ft=!1;if(Ie!==null&&ye>=6){const Ge=sn(a,Math.trunc(ee),Math.trunc(de),Math.trunc(fe-ee),Math.trunc(Te-de));let je=null,yt=0;for(const Ct of[0,1,2,3]){const Yt=Ct===0?Ge:En(Ge,Ct),ns=k1(Yt),rs=await Je("laurier: lecture chiffre (CNN)",()=>Ie.run({[Ie.inputNames[0]]:new Ue("float32",ns,[1,3,zt,zt])})),{value:is,prob:oi}=C1(rs[Ie.outputNames[0]].data);if(oi>yt&&(je=is,yt=oi),je!==null&&yt>=M1)break}je!==null&&yt>=I1&&(qe=je,We=yt)}if(qe===null&&ye>=6){const Ge=new Map;for(const je of[0,1,2,3]){const yt=je===0?Ye:En(Ye,je),[Ct,Yt]=rt("laurier: lecteur GABARITS (repli, JS pur)",()=>O_(yt,ae));Ct!==null&&(Ge.set(Ct,Math.max(Ge.get(Ct)??0,Yt)),Yt>We&&(qe=Ct,We=Yt))}qe!==null&&We<z$&&(qe=null),ft=qe!==null&&[...Ge.entries()].some(([je,yt])=>je!==qe&&yt>=We-.1)}const kt=b.some(Ge=>$e>=Ge.x0&&$e<=Ge.x1&&_e>=Ge.y0&&_e<=Ge.y1),ot=[...P,...l].some(Ge=>{const je=Ge.boundingBox;return je!==void 0&&$e>=je.x&&$e<=je.x+je.width&&_e>=je.y&&_e<=je.y+je.height});k.push({value:qe,valueRead:qe!==null,center:[Math.round((ee+fe)/2),Math.round((de+Te)/2)],boundingBox:{x:Math.trunc(ee),y:Math.trunc(de),width:Math.trunc(fe-ee),height:Math.trunc(Te-de)},confidence:Math.round(We*1e4)/1e4,excluded:kt||ot,photoIndex:i-1,...ft?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:M,laurels:k,coins:T,coinTotal:R,guilds:P,bannerCount:X,tuckedExcluded:W,bannerSuspects:V,cityWondersKept:O,cityTokensKept:F}}function ag(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function og(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function sg(e,t,n){const{byFamily:r,laurels:i,coins:a,progressTokens:o,wonders:s,guilds:u,bannerSuspects:l,coinTotal:d,unidentifiedTokens:p,bannerCount:h,tuckedExcluded:m}=e;m>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${m} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const g=r.guild??0;g!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${g} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(S=>S.id).join(", ")+" — confirm in the review."});const y=s.filter(S=>S.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(S=>S.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),p>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${p} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(S=>S.id).join(", ")+" — confirm in the review."}),a.length>0){const S=a.filter(E=>E.denomSource==="cnn").length,v=a.length-S;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${d} from ${a.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${d} from ${a.length} tile(s) — ${S} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=Z$(u,s);for(const S of[...e$(s.map(v=>v.id),t),...r$(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:S.message});const b=i.filter(S=>!S.excluded),x=b.filter(S=>S.valueRead);return{...cx(),wonders:s,guilds:w,progressTokens:o,laurels:i,cardVictoryPoints:{value:x.reduce((S,v)=>S+(v.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:m,...l.length>0?{suspects:l}:{}},coins:{total:d,confidence:a.length>0?.5:0,source:a.length===0?"none":a.some(S=>S.denomSource==="cnn")?"local-cnn":"local-colour",coins:a}}}async function dx(e,t,n,r,i=()=>{},a="player",o,s=!1){const u=ag();let l=0;for(const d of e){l+=1;const p=`${t} photo ${l}/${e.length}`;r(`${p}: reading pixels…`,.01);const h=await ri(d),m=await rg(h,n,t,r,p,o,u.wonders,u.progressTokens);u.unidentifiedTokens+=m.unidentifiedTokens;const g=await ig(m,a,s,t,l,h,n,r,p,u.guilds);og(u,g),i()}return sg(u,t,n)}const Mt=1280,px=.3,ii=9;let es=null;function ai(){return es===null&&(es=(async()=>{try{return(await fetch(`${Ze}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ht("pawn_ends_brut.onnx"):null}catch{return null}})()),es}function hx(e){const t=Mt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),a=i.getContext("2d",{willReadFrequently:!0}),o=Sw(e.data,e.width,e.height,e.channels);a.putImageData(new ImageData(o,e.width,e.height),0,0);const u=new OffscreenCanvas(Mt,Mt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Mt,Mt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Mt,Mt),d=Mt*Mt,p=new Float32Array(3*d);for(let h=0;h<d;h+=1)p[h]=l[h*4]/255,p[d+h]=l[h*4+1]/255,p[2*d+h]=l[h*4+2]/255;return{tensor:p,r:t}}const He={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null};function fx(){He.appels=0,He.inferences=0,He.bandes=0,He.detail=[],He.premiereGagne=null}function ug(){ut.set("_pion.onnx",`appels=${He.appels} inferences=${He.inferences} bandes=${He.bandes} premiereGagne=${He.premiereGagne??"n/a"} | ${He.detail.join(" ")}`)}async function mx(e,t){He.inferences+=1;const{tensor:n,r}=rt("pion: mise en tenseur 1280x1280",()=>hx(t)),a=(await e.run({[e.inputNames[0]]:new Ue("float32",n,[1,3,Mt,Mt])}))[e.outputNames[0]],o=a.data,s=a.dims[2]??0,u=(a.dims[1]??4)-4;return rt("pion: depouillement des ancres brutes",()=>{const d=new Map;for(let p=0;p<u;p+=1){const h=(4+p)*s;let m=-1,g=px;for(let y=0;y<s;y+=1){const w=o[h+y];w>=g&&(g=w,m=y)}if(m>=0){const y=(o[m]+o[2*s+m])/2/r,w=(o[s+m]+o[3*s+m])/2/r;d.set(p,{conf:g,cx:y,cy:w})}}return d})}async function ts(e,t,n){const r=He.inferences,i=`a${He.appels}`;He.appels+=1;const a=await Je("pion: UNE passe (les 4 rotations)",()=>gx(e,t,n));return He.detail.push(`${i}:${He.inferences-r}inf conf=${a===null?"rien":a.confidence.toFixed(2)}`),ug(),a}async function gx(e,t,n){let r=null;const i=1.8;for(const x of n??[0,1,2,3]){const S=x===0?t:rt("pion: rotation de l'image",()=>En(t,x)),v=await mx(e,S);if(v.has(0)&&v.has(1)&&v.has(2)){const E=v.get(0).conf+v.get(1).conf+v.get(2).conf;if((r===null||E>r.score)&&(r={score:E,det:v,k:x}),E>=i)break}}if(r===null)return null;const a=r.det.get(0),o=r.det.get(1),s=r.det.get(2),u=s.cx-o.cx,l=s.cy-o.cy,d=(o.cx+s.cx)/2,p=(o.cy+s.cy)/2,h=u*u+l*l;if(h<=0)return null;const m=((a.cx-d)*u+(a.cy-p)*l)/h*(2*ii),g=Math.min(ii,Math.max(-ii,it(m))),y=Math.min(a.conf,o.conf,s.conf),w=(x,S)=>{const v=r.k%4;return v===0?[x,S]:v===1?[S,t.height-1-x]:v===2?[t.width-1-x,t.height-1-S]:[t.width-1-S,x]},b=[o,s].map(x=>{const[S,v]=w(x.cx,x.cy);return[it(S),it(v)]});return{position:g,confidence:Math.round(y*1e4)/1e4,ends:b,k:r.k}}async function lg(e,t,n){let r=null,i=null;for(const a of n){const o=Aw(t.width,t.height,a);if(o===null)continue;const s=sn(t,o.x,o.y,o.width,o.height);if(s.width===0||s.height===0)continue;He.bandes+=1;const u=await ts(e,s,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(He.premiereGagne===null?He.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(He.premiereGagne=!1),ug()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,d])=>[l+o.x,d+o.y])})}return r}function cg(){const e=[No,Bo,Do,Fo,Go,qo,Ho,Ko,ni,Qo,Jo,ai];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function yx(e,t){cg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(m,g=0)=>{t(m,i>0?Math.min(.99,(a+g)/i):void 0)},s=()=>{a+=1};for(const m of["left","right"]){const g=e[m];g.length>0&&(r[m]=await dx(g,m,n,o,s))}let u=null,l=null;if(e.both!==void 0){const m={},g=await ri(e.both),y=await rg(g,n,"both",o,"both photo 1/1",m,[],[]),w=async(S,v)=>{const E=ag();return E.unidentifiedTokens+=y.unidentifiedTokens,og(E,await ig(y,S,!0,v,1,g,n,o,`${v} photo 1/1`,E.guilds)),s(),sg(E,v,n)},b={player:await w("player","left"),opponent:await w("opponent","right")};if(o("military pawn…",.95),m.image!==void 0)try{const S=await ai();S!==null&&(m.bandBoxes!==void 0&&m.bandBoxes.length>0&&(u=await lg(S,m.image,m.bandBoxes)),u===null&&(u=await ts(S,m.image)))}catch(S){console.warn("[#125] both-photo pawn read failed:",S)}u!==null&&(l=Bw(u.ends,m.hulls??[],u.position));const x=l!==null&&!l.ambiguous?Pw(l):null;x!==null?(r.left=b[x.left],r.right=b[x.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=b.player,r.right=b.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const m={},g={};for(const y of["left","right"]){const w=r[y];w!=null&&(m[y]=w.wonders.map(b=>b.id),g[y]=w.progressTokens.map(b=>b.id))}for(const y of[...t$(m),...n$(g)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let d={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const m=await ri(e.board),g=await ai();if(g!==null){let y=await ts(g,m);if(y===null){const w=await ni();if(w!==null){const b=await Dt("banner",m),x=qr(b.rows,b.params,at.banner.conf),S=await Qm(w,m,x);y=await lg(g,m,S)}}y!==null&&(d={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(m){console.warn("[pawn] on-device read failed:",m)}else u!==null&&l!==null&&(d={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!d.found){const m=b=>{var x,S;return Number(((S=(x=b==null?void 0:b.cardCounts)==null?void 0:x.byFamily)==null?void 0:S.military)??0)},g=m(r.left),y=m(r.right),w=Math.abs(g-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${g} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const p=d.conflictPawnPosition,h=Math.abs(p)>=ii?{type:"military",winner:p>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:d,outcome:h,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(a,o)=>{E$(a);const s=M$()?"Initialisation des modèles de vision…":vw(a);self.postMessage({id:t,progress:s,...o!==void 0?{fraction:o}:{},...a!==r?{perfPartiel:{providers:Wm(),etapes:Gm(),etapeCourante:s}}:{}}),r=a};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){cg(),await Promise.allSettled([No(),Bo(),Do(),Fo(),Go(),qo(),Ho(),Ko(),ni(),Qo(),Jo(),ai()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),T$(),R$();const a=performance.now(),o=n==="classify"?await lx(e.data.file):await yx(e.data.payload,i);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:Gm(),providers:Wm(),runtime:I$(),inference:A$(),famillesJs:ww(),inferenceParEtape:C$(),totalMs:Math.round(performance.now()-a)}})}catch(a){self.postMessage({id:t,ok:!1,error:String(a)})}})()}})();
