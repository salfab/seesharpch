var q3=Object.defineProperty;var V3=(Ft,Gt,Cn)=>Gt in Ft?q3(Ft,Gt,{enumerable:!0,configurable:!0,writable:!0,value:Cn}):Ft[Gt]=Cn;var iy=(Ft,Gt,Cn)=>V3(Ft,typeof Gt!="symbol"?Gt+"":Gt,Cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ft=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyNames,sy=Object.prototype.hasOwnProperty,uy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ie=(e,t)=>()=>(e&&(t=e(e=0)),t),An=(e,t)=>{for(var n in t)Ft(e,n,{get:t[n],enumerable:!0})},ly=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!sy.call(e,i)&&i!==n&&Ft(e,i,{get:()=>t[i],enumerable:!(r=Gt(t,i))||r.enumerable});return e},Xn=e=>ly(Ft({},"__esModule",{value:!0}),e),Qn,Jt,Rn,zs,Bs,Ps=ie(()=>{Qn=new Map,Jt=[],Rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Qn.get(e);if(r===void 0)Qn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Jt.indexOf(e);i!==-1&&Jt.splice(i,1);for(let o=0;o<Jt.length;o++)if(Qn.get(Jt[o]).priority<=n){Jt.splice(o,0,e);return}Jt.push(e)}return}throw new TypeError("not a valid backend")},zs=async e=>{let t=Qn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Bs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Jt:n,i,o=[],a=new Set;for(let u of r){let l=await zs(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),cy=ie(()=>{Ps()}),Ds,dy=ie(()=>{Ds="1.27.0"}),Ii,Qe,Us=ie(()=>{dy(),Ii="warning",Qe={wasm:{},webgl:{},webgpu:{},versions:{common:Ds},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ii=e}},get logLevel(){return Ii}},Object.defineProperty(Qe,"logLevel",{enumerable:!0})}),Be,hy=ie(()=>{Us(),Be=Qe}),Ls,Fs,py=ie(()=>{Ls=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let c=o*i,d=0,p=c,f=c*2,m=-1;a==="RGBA"?(d=0,p=c,f=c*2,m=c*3):a==="RGB"?(d=0,p=c,f=c*2):a==="RBG"&&(d=0,f=c,p=c*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],v=(e.data[f++]-l[2])*u[2],M=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+v+","+M+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Fs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],a=e.dims[3]):(i=e.dims[3],o=e.dims[2],a=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=o*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=d,v=d*2,M=-1;s==="RGBA"?(b=0,x=d,v=d*2,M=d*3):s==="RGB"?(b=0,x=d,v=d*2):s==="RBG"&&(b=0,v=d,x=d*2),r=n.createImageData(i,o);for(let I=0;I<o*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-c[0])*l[0],r.data[m]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[v++]-c[2])*l[2],r.data[w]=M===-1?255:(e.data[M++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),vr,Gs,Ws,qs,Vs,Hs,fy=ie(()=>{Ei(),vr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,v=-1;s==="RGB"&&(d=3,p=0,f=1,m=2,y=-1),u==="RGBA"?v=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let M=0;M<l;M++,p+=d,m+=d,f+=d,y+=d)c[w++]=(e[p]+a[0])/o[0],c[b++]=(e[f]+a[1])/o[1],c[x++]=(e[m]+a[2])/o[2],v!==-1&&y!==-1&&(c[v++]=(e[y]+a[3])/o[3]);return u==="RGBA"?new lt("float32",c,[1,4,n,r]):new lt("float32",c,[1,3,n,r])},Gs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",a,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;d.drawImage(e,0,0),a=d.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=c,s.width=d,t!==void 0){let p=u();p.width=d,p.height=c;let f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;return d.drawImage(e,0,0,f,p),a=d.getImageData(0,0,f,p).data,s.height=p,s.width=f,vr(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((c,d)=>{let p=u(),f=l(p);if(!e||!f)return d();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,c(vr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return vr(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Ws=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,a=[1,r,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:o})},qs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},Vs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},Hs=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),hn,Zn,Ti,js,my=ie(()=>{hn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Zn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ti=!1,js=()=>{if(!Ti){Ti=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(hn.set("int64",BigInt64Array),Zn.set(BigInt64Array,"int64")),t&&(hn.set("uint64",BigUint64Array),Zn.set(BigUint64Array,"uint64")),r?(hn.set("float16",n),Zn.set(n,"float16")):hn.set("float16",Uint16Array)}}}),Ks,Ys,gy=ie(()=>{Ei(),Ks=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ys=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,Ei=ie(()=>{py(),fy(),my(),gy(),lt=class{constructor(e,t,n){js();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=hn.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=hn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=Zn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(s===void 0)s=[a.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=a,this.dataLocation="cpu"}let o=Ks(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return Gs(e,t)}static fromTexture(e,t){return Ws(e,t)}static fromGpuBuffer(e,t){return qs(e,t)}static fromMLTensor(e,t){return Vs(e,t)}static fromPinnedBuffer(e,t,n){return Hs(e,t,n)}toDataURL(e){return Ls(this,e)}toImageData(e){return Fs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ys(this,e)}}}),ze,Xs=ie(()=>{Ei(),ze=lt}),Mr,ki,Ot,xt,pn,fn,Qs=ie(()=>{Us(),Mr=(e,t)=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},ki=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Mr("CPU",a);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},Ot=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||ki("BEGIN",e)},xt=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||ki("END",e)},pn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.time(`ORT::${e}`)},fn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeEnd(`ORT::${e}`)}}),Zs,yy=ie(()=>{Ps(),Xs(),Qs(),Zs=class oy{constructor(t){this.handler=t}async run(t,n,r){Ot(),pn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof ze)&&(l=!0,a=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,o),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let c=s[l];c instanceof ze?u[l]=c:u[l]=new ze(c.type,c.data,c.dims)}return fn("InferenceSession.run"),xt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ot(),pn("InferenceSession.create");let o,a={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(c,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Bs(a),l=await s.createInferenceSessionHandler(o,u);return fn("InferenceSession.create"),xt(),new oy(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),On,wy=ie(()=>{yy(),On=Zs}),by=ie(()=>{}),_y=ie(()=>{}),xy=ie(()=>{}),$y=ie(()=>{}),vy={};An(vy,{InferenceSession:()=>On,TRACE:()=>Mr,TRACE_EVENT_BEGIN:()=>pn,TRACE_EVENT_END:()=>fn,TRACE_FUNC_BEGIN:()=>Ot,TRACE_FUNC_END:()=>xt,Tensor:()=>ze,env:()=>Be,registerBackend:()=>Rn});var pt=ie(()=>{cy(),hy(),wy(),Xs(),by(),_y(),Qs(),xy(),$y()}),Ci=ie(()=>{}),Js={};An(Js,{default:()=>eu});var Ai,Ri,eu,My=ie(()=>{var e;zf(),mn(),Di(),Ai="ort-wasm-proxy-worker",Ri=((e=globalThis.self)==null?void 0:e.name)===Ai,Ri&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Fi(r.wasm).then(()=>{Jo(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;ea(o,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,o=Wr(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;na(i,o).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":ra(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:a,outputIndices:s,options:u}=r;oa(i,o,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},sa([...a,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":aa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),eu=Ri?null:t=>new Worker(t??ct,{type:"module",name:Ai})}),tu={};An(tu,{default:()=>ru});async function nu(e={}){var ny,ry;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((ny=self.name)==null?void 0:ny.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},T=await h(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let A=_.errors;if(0<A.length){let D=await Promise.all(A);if(D=D.filter(K=>K),0<D.length)throw Error(D.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,T,A,D)=>$.registerBuffer(_,T,A,D),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,T,A)=>$.createDownloader(_,T,A),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,T)=>{$.upload(_,T)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,T)=>$.createMLTensorDownloader(_,T),t.webnnRegisterMLTensor=(_,T,A,D)=>$.registerMLTensor(_,T,A,D),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,T,A,D,K,ue)=>$.registerMLConstant(_,T,A,D,K,t.Xc,ue),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let a=()=>{let h=g=>(...$)=>{let _=Ut;return $=g(...$),Ut!=_?new Promise((T,A)=>{$s={resolve:T,reject:A}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var s,u,l=(h,g)=>{throw g},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async h=>{if(k(h))return new Promise(($,_)=>{var T=new XMLHttpRequest;T.open("GET",h,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?$(T.response):_(T.status)},T.onerror=_,T.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),v=console.error.bind(console),M=x,I=v,E=!1,k=h=>h.startsWith("file://");function S(){He.buffer!=B.buffer&&z()}if(i){let h=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let T=[];self.onmessage=A=>T.push(A),b=()=>{postMessage({Sc:"loaded"});for(let A of T)h(A);self.onmessage=h};for(let A of $.xd)t[A]&&!t[A].proxy||(t[A]=(...D)=>{postMessage({Sc:"callHandler",wd:A,args:D})},A=="print"&&(M=t[A]),A=="printErr"&&(I=t[A]));He=$.Od,z(),f=$.Pd,ne(),Mi()}else if(_==="run"){(function(T){var A=(S(),F)[T+52>>>2>>>0];T=(S(),F)[T+56>>>2>>>0],h0(A,A-T),Te(A)})($.Rc),Ts($.Rc,0,0,1,0,0),Ie(),bs($.Rc),R||(a0(),R=!0);try{qe($.Md,$.bd)}catch(T){if(T!="unwind")throw T}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&yi():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(T){throw s0(),T}};var R=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var B,q,G,H,O,F,X,Q,le,L,N,C=!1;function z(){var h=He.buffer;t.HEAP8=B=new Int8Array(h),G=new Int16Array(h),t.HEAPU8=q=new Uint8Array(h),H=new Uint16Array(h),t.HEAP32=O=new Int32Array(h),t.HEAPU32=F=new Uint32Array(h),X=new Float32Array(h),Q=new Float64Array(h),le=new BigInt64Array(h),L=new BigUint64Array(h)}function U(){C=!0,i?b():Zt.sb()}function P(h){throw I(h="Aborted("+h+")"),E=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function j(){return{a:{ma:o3,gb:i3,g:Yt,J:Ve,f:hs,o:ps,h:fs,ha:fi,b:W$,T:q$,Ha:bg,n:V$,$:vg,Xa:Mg,Da:Sg,Fa:Ig,Ya:Tg,Va:Eg,Oa:kg,Ua:Cg,ka:Ag,Ea:Rg,Ba:Og,Wa:Ng,Ca:zg,bb:H$,ea:j$,wa:K$,ua:X$,da:Z$,O:J$,H:ev,va:tv,_:uv,xa:lv,Ra:cv,za:hv,Ia:pv,sa:fv,fa:mv,Qa:bs,_a:gv,R:_v,r:Sv,c:ys,hb:Iv,y:Tv,M:Ev,D:kv,l:Cv,s:Wg,ib:Av,I:Rv,S:Ov,j:Nv,u:zv,q:Bv,k:Pv,La:Dv,Ma:Uv,Na:Lv,Ja:jg,Ka:Kg,ta:Yg,db:Gv,ab:qv,v:Vv,aa:Hv,ga:jv,$a:Wv,W:Kv,Za:Yv,Aa:Xv,F:Fv,U:Qv,la:$i,ya:Jv,fb:Zv,eb:e3,Sa:Jg,Ta:e0,Ga:Z,V:t0,ja:n0,Pa:r0,ia:i0,kb:F3,na:B3,lb:L3,oa:z3,G:I3,e:l3,t:s3,w:a3,B:b3,mb:R3,K:v3,x:h3,pa:O3,Y:P3,ba:A3,nb:C3,ob:k3,P:_3,qa:E3,pb:T3,N:M3,Z:N3,d:u3,A:d3,m:c3,jb:G3,p:f3,z:m3,C:p3,E:g3,L:x3,qb:S3,Q:D3,ca:$3,X:U3,rb:w3,ra:y3,i:n3,a:He,cb:xe}}}async function ne(){function h(_,T){var A=Zt=_.exports;_={};for(let[D,K]of Object.entries(A))typeof K=="function"?(A=yv(K),_[D]=A):_[D]=K;return Zt=_,Zt=(function(){var D=Zt,K=ce=>Se=>ce(Se)>>>0,ue=ce=>()=>ce()>>>0;return(D=Object.assign({},D)).tb=K(D.tb),D.Xb=ue(D.Xb),D.Zb=K(D.Zb),D.lc=K(D.lc),D.mc=ue(D.mc),D.qc=K(D.qc),D})(),fe.push(Zt._b),o0=(_=Zt).tb,a0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,vi=_.Xb,Lt=t._free=_.Yb,_r=t._malloc=_.Zb,Ts=_.ac,s0=_.bc,u0=_.cc,l0=_.dc,Es=_.ec,c0=_.fc,d0=_.gc,ke=_.hc,xr=_.ic,h0=_.jc,Te=_.kc,ks=_.lc,Ee=_.mc,p0=_.nc,Cs=_.oc,f0=_.pc,m0=_.qc,g0=_.rc,As=_.sc,y0=_.tc,w0=_.uc,b0=_.vc,_0=_.wc,x0=_.xc,$0=_.yc,v0=_.zc,M0=_.Ac,S0=_.Bc,I0=_.Cc,T0=_.Dc,E0=_.Ec,k0=_.Fc,C0=_.Gc,A0=_.Hc,R0=_.Ic,O0=_.Jc,N0=_.Kc,z0=_.Lc,B0=_.Mc,P0=_.Nc,D0=_.Pc,U0=_.Qc,L0=_.$c,F0=_.ad,G0=_.fd,W0=_.jd,q0=_.kd,V0=_.ld,H0=_.md,j0=_.nd,K0=_.od,Y0=_.pd,X0=_.qd,Q0=_.vd,Z0=_.Td,J0=_.Ud,ey=_.Vd,ty=_.Wd,f=T,Zt}var g,$=j();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(T,A)=>{_(h(T,A))})}):i?h(new WebAssembly.Instance(f,j()),f):(N??(N=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var T=N;if(!p&&!k(T))try{var A=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,_)}catch(D){I(`wasm streaming compile failed: ${D}`),I("falling back to ArrayBuffer instantiation")}return(async function(D,K){try{var ue=await(async function(ce){if(!p)try{var Se=await s(ce);return new Uint8Array(Se)}catch{}if(ce==N&&p)ce=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ce=u(ce)}return ce})(D);return await WebAssembly.instantiate(ue,K)}catch(ce){I(`failed to asynchronously prepare wasm: ${ce}`),P(ce)}})(T,_)})($),h(g.instance,g.module))}class J{constructor(g){iy(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var de=h=>{h.terminate(),h.onmessage=()=>{}},$e=[],W=0,ee=null,re=h=>{te.length==0&&(Ue(),ye(te[0]));var g=te.pop();if(!g)return 6;se.push(g),ge[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},oe=0,ae=(h,g,...$)=>{var _,T=16*$.length,A=Ee(),D=ks(T),K=D>>>3;for(_ of $)typeof _=="bigint"?((S(),le)[K++>>>0]=1n,(S(),le)[K++>>>0]=_):((S(),le)[K++>>>0]=0n,(S(),Q)[K++>>>0]=_);return h=u0(h,0,T,D,g),Te(A),h};function xe(h){if(i)return ae(0,1,h);if(m=h,!(0<oe)){for(var g of se)de(g);for(g of te)de(g);te=[],se=[],ge={},E=!0}l(0,new J(h))}function _e(h){if(i)return ae(1,0,h);Z(h)}var Z=h=>{if(m=h,i)throw _e(h),"unwind";xe(h)},te=[],se=[],fe=[],ge={},we=h=>{var g=h.Rc;delete ge[g],te.push(h),se.splice(se.indexOf(h),1),h.Rc=0,l0(g)};function Ie(){fe.forEach(h=>h())}var ye=h=>new Promise(g=>{h.onmessage=T=>{var A=T.data;if(T=A.Sc,A.Zc&&A.Zc!=vi()){var D=ge[A.Zc];D?D.postMessage(A,A.rd):I(`Internal error! Worker sent a message "${T}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?yi():T==="spawnThread"?re(A):T==="cleanupThread"?gi(()=>{we(ge[A.Nd])}):T==="loaded"?(h.loaded=!0,g(h)):A.target==="setimmediate"?h.postMessage(A):T==="uncaughtException"?h.onerror(A.error):T==="callHandler"?t[A.wd](...A.args):T&&I(`worker sent an unknown command ${T}`)},h.onerror=T=>{throw I(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);h.postMessage({Sc:"load",xd:_,Od:He,Pd:f})});function Ue(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});te.push(h)}var He,qe=(h,g)=>{oe=0,h=As(h,g),0<oe?m=h:Es(h)},Ge=[],nt=0;function Yt(h){var g=new At(h>>>=0);return(S(),B)[g.Tc+12>>>0]==0&&(Ye(g,!0),nt--),bt(g,!1),Ge.push(g),m0(h)}var ot=0,Ve=()=>{ke(0,0);var h=Ge.pop();p0(h.cd),ot=0};function Ye(h,g){g=g?1:0,(S(),B)[h.Tc+12>>>0]=g}function bt(h,g){g=g?1:0,(S(),B)[h.Tc+13>>>0]=g}class At{constructor(g){this.cd=g,this.Tc=g-24}}var Xt=h=>{var g=ot;if(!g)return xr(0),0;var $=new At(g);(S(),F)[$.Tc+16>>>2>>>0]=g;var _=(S(),F)[$.Tc+4>>>2>>>0];if(!_)return xr(0),g;for(var T of h){if(T===0||T===_)break;if(f0(T,_,$.Tc+16))return xr(T),g}return xr(_),g};function hs(){return Xt([])}function ps(h){return Xt([h>>>0])}function fs(h,g,$,_){return Xt([h>>>0,g>>>0,$>>>0,_>>>0])}var fi=()=>{var h=Ge.pop();h||P("no exception to throw");var g=h.cd;throw(S(),B)[h.Tc+13>>>0]==0&&(Ge.push(h),bt(h,!0),Ye(h,!1),nt++),Cs(g),ot=g};function W$(h,g,$){var _=new At(h>>>=0);throw g>>>=0,$>>>=0,(S(),F)[_.Tc+16>>>2>>>0]=0,(S(),F)[_.Tc+4>>>2>>>0]=g,(S(),F)[_.Tc+8>>>2>>>0]=$,Cs(h),nt++,ot=h}var q$=()=>nt;function wg(h,g,$,_){return i?ae(2,1,h,g,$,_):bg(h,g,$,_)}function bg(h,g,$,_){if(h>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?wg(h,g,$,_):(h={Ld:$,Rc:h,bd:_,rd:T},i?(h.Sc="spawnThread",postMessage(h,T),0):re(h))}function V$(h){throw ot||(ot=h>>>0),ot}var _g=globalThis.TextDecoder&&new TextDecoder,xg=(h,g,$,_)=>{if($=g+$,_)return $;for(;h[g]&&!(g>=$);)++g;return g},$g=(h,g=0,$,_)=>{if(16<($=xg(h,g>>>=0,$,_))-g&&h.buffer&&_g)return _g.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(_="";g<$;){var T=h[g++];if(128&T){var A=63&h[g++];if((224&T)==192)_+=String.fromCharCode((31&T)<<6|A);else{var D=63&h[g++];65536>(T=(240&T)==224?(15&T)<<12|A<<6|D:(7&T)<<18|A<<12|D<<6|63&h[g++])?_+=String.fromCharCode(T):(T-=65536,_+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else _+=String.fromCharCode(T)}return _},Ke=(h,g,$)=>(h>>>=0)?$g((S(),q),h,g,$):"";function vg(h,g,$){return i?ae(3,1,h,g,$):0}function Mg(h,g){if(i)return ae(4,1,h,g)}function Sg(h,g){if(i)return ae(5,1,h,g)}function Ig(h,g,$){if(i)return ae(6,1,h,g,$)}function Tg(h,g,$){return i?ae(7,1,h,g,$):0}function Eg(h,g){if(i)return ae(8,1,h,g)}function kg(h,g,$){if(i)return ae(9,1,h,g,$)}function Cg(h,g,$,_){if(i)return ae(10,1,h,g,$,_)}function Ag(h,g,$,_){if(i)return ae(11,1,h,g,$,_)}function Rg(h,g,$,_){if(i)return ae(12,1,h,g,$,_)}function Og(h){if(i)return ae(13,1,h)}function Ng(h,g){if(i)return ae(14,1,h,g)}function zg(h,g,$){if(i)return ae(15,1,h,g,$)}var H$=()=>P(""),Dt=h=>{h>>>=0;for(var g="";;){var $=(S(),q)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},ms={},gs={},Yn=class extends Error{constructor(h){super(h),this.name="BindingError"}};function Qt(h,g,$={}){return(function(_,T,A={}){var D=T.name;if(!_)throw new Yn(`type "${D}" must have a positive integer typeid pointer`);if(gs.hasOwnProperty(_)){if(A.yd)return;throw new Yn(`Cannot register type '${D}' twice`)}gs[_]=T,ms.hasOwnProperty(_)&&(T=ms[_],delete ms[_],T.forEach(K=>K()))})(h,g,$)}var Bg=(h,g,$)=>{switch(g){case 1:return $?_=>(S(),B)[_>>>0]:_=>(S(),q)[_>>>0];case 2:return $?_=>(S(),G)[_>>>1>>>0]:_=>(S(),H)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),F)[_>>>2>>>0];case 8:return $?_=>(S(),le)[_>>>3>>>0]:_=>(S(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function j$(h,g,$,_,T){h>>>=0,$>>>=0,g=Dt(g>>>0);let A=D=>D;if(_=_===0n){let D=8*$;A=K=>BigInt.asUintN(D,K),T=A(T)}Qt(h,{name:g,Oc:A,Vc:(D,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:Bg(g,$,!_),Wc:null})}function K$(h,g,$,_){Qt(h>>>=0,{name:g=Dt(g>>>0),Oc:function(T){return!!T},Vc:function(T,A){return A?$:_},Uc:function(T){return this.Oc((S(),q)[T>>>0])},Wc:null})}var Pg=[],En=[0,1,,1,null,1,!0,1,!1,1];function ys(h){9<(h>>>=0)&&--En[h+1]===0&&(En[h]=void 0,Pg.push(h))}var _t=h=>{if(!h)throw new Yn(`Cannot use deleted val. handle = ${h}`);return En[h]},Rt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Pg.pop()||En.length;return En[g]=h,En[g+1]=1,g}};function ws(h){return this.Oc((S(),F)[h>>>2>>>0])}var Y$={name:"emscripten::val",Oc:h=>{var g=_t(h);return ys(h),g},Vc:(h,g)=>Rt(g),Uc:ws,Wc:null};function X$(h){return Qt(h>>>0,Y$)}var Q$=(h,g)=>{switch(g){case 4:return function($){return this.Oc((S(),X)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Q)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function Z$(h,g,$){$>>>=0,Qt(h>>>=0,{name:g=Dt(g>>>0),Oc:_=>_,Vc:(_,T)=>T,Uc:Q$(g,$),Wc:null})}function J$(h,g,$,_,T){h>>>=0,$>>>=0,g=Dt(g>>>0);let A=K=>K;if(_===0){var D=32-8*$;A=K=>K<<D>>>D,T=A(T)}Qt(h,{name:g,Oc:A,Vc:(K,ue)=>ue,Uc:Bg(g,$,_!==0),Wc:null})}function ev(h,g,$){function _(A){var D=(S(),F)[A>>>2>>>0];return A=(S(),F)[A+4>>>2>>>0],new T((S(),B).buffer,A,D)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Qt(h>>>=0,{name:$=Dt($>>>0),Oc:_,Uc:_},{yd:!0})}var ln=(h,g,$)=>{var _=(S(),q);if(g>>>=0,0<$){var T=g;$=g+$-1;for(var A=0;A<h.length;++A){var D=h.codePointAt(A);if(127>=D){if(g>=$)break;_[g++>>>0]=D}else if(2047>=D){if(g+1>=$)break;_[g++>>>0]=192|D>>6,_[g++>>>0]=128|63&D}else if(65535>=D){if(g+2>=$)break;_[g++>>>0]=224|D>>12,_[g++>>>0]=128|D>>6&63,_[g++>>>0]=128|63&D}else{if(g+3>=$)break;_[g++>>>0]=240|D>>18,_[g++>>>0]=128|D>>12&63,_[g++>>>0]=128|D>>6&63,_[g++>>>0]=128|63&D,A++}}_[g>>>0]=0,h=g-T}else h=0;return h},mi=h=>{for(var g=0,$=0;$<h.length;++$){var _=h.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function tv(h,g){Qt(h>>>=0,{name:g=Dt(g>>>0),Oc($){var _=(S(),F)[$>>>2>>>0];return _=Ke($+4,_,!0),Lt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var T=typeof _=="string";if(!(T||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Yn("Cannot pass non-string to std::string");var A=T?mi(_):_.length,D=_r(4+A+1),K=D+4;return(S(),F)[D>>>2>>>0]=A,T?ln(_,K,A+1):(S(),q).set(_,K>>>0),$!==null&&$.push(Lt,D),D},Uc:ws,Wc($){Lt($)}})}var Dg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,nv=(h,g,$)=>{if(h>>>=1,16<(g=xg((S(),H),h,g/2,$))-h&&Dg)return Dg.decode((S(),H).slice(h,g));for($="";h<g;++h){var _=(S(),H)[h>>>0];$+=String.fromCharCode(_)}return $},rv=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*h.length?$/2:h.length;for(var T=0;T<$;++T){var A=h.charCodeAt(T);(S(),G)[g>>>1>>>0]=A,g+=2}return(S(),G)[g>>>1>>>0]=0,g-_},iv=h=>2*h.length,ov=(h,g,$)=>{var _="";h>>>=2;for(var T=0;!(T>=g/4);T++){var A=(S(),F)[h+T>>>0];if(!A&&!$)break;_+=String.fromCodePoint(A)}return _},av=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var T=0;T<h.length;++T){var A=h.codePointAt(T);if(65535<A&&T++,(S(),O)[g>>>2>>>0]=A,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-_},sv=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function uv(h,g,$){if(h>>>=0,g>>>=0,$=Dt($>>>=0),g===2)var _=nv,T=rv,A=iv;else _=ov,T=av,A=sv;Qt(h,{name:$,Oc:D=>{var K=(S(),F)[D>>>2>>>0];return K=_(D+4,K*g,!0),Lt(D),K},Vc:(D,K)=>{if(typeof K!="string")throw new Yn(`Cannot pass non-string to C++ string type ${$}`);var ue=A(K),ce=_r(4+ue+g);return(S(),F)[ce>>>2>>>0]=ue/g,T(K,ce+4,ue+g),D!==null&&D.push(Lt,ce),ce},Uc:ws,Wc(D){Lt(D)}})}function lv(h,g){Qt(h>>>=0,{zd:!0,name:g=Dt(g>>>0),Oc:()=>{},Vc:()=>{}})}function cv(h){Ts(h>>>0,!r,1,!n,131072,!1),Ie()}var gi=h=>{if(!E)try{if(h(),!(0<oe))try{i?vi()&&Es(m):Z(m)}catch(g){g instanceof J||g=="unwind"||l(0,g)}}catch(g){g instanceof J||g=="unwind"||l(0,g)}},dv=!Atomics.waitAsync||((ry=globalThis.navigator)==null?void 0:ry.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function bs(h){h>>>=0,dv||(Atomics.waitAsync((S(),O),h>>>2,h).value.then(yi),h+=128,Atomics.store((S(),O),h>>>2,1))}var yi=()=>gi(()=>{var h=vi();h&&(bs(h),d0())});function hv(h,g){(h>>>=0)==g>>>0?setTimeout(yi):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=ge[h])&&h.postMessage({Sc:"checkMailbox"})}var _s=[];function pv(h,g,$,_,T){for(g>>>=0,T>>>=0,_s.length=0,$=T>>>3,_=T+_>>>3;$<_;){var A;A=(S(),le)[$++>>>0]?(S(),le)[$++>>>0]:(S(),Q)[$++>>>0],_s.push(A)}return(g?Rs[g]:r3[h])(..._s)}var fv=()=>{oe=0};function mv(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):we(ge[h])}function gv(h){}var wi=h=>{try{h()}catch(g){P(g)}};function yv(h){var g=(...$)=>{bi.push(h);try{return h(...$)}finally{E||(bi.pop(),Ut&&cn===1&&bi.length===0&&(cn=0,oe+=1,wi(J0),typeof Fibers<"u"&&Fibers.Zd()))}};return Fg.set(h,g),g}var cn=0,Ut=null,Ug=0,bi=[],xs=new Map,Lg=new Map,Fg=new Map,wv=0,$s=null,bv=[],Gg=h=>(function(g){if(!E){if(cn===0){var $=!1,_=!1;g((T=0)=>{if(!E&&(Ug=T,$=!0,_)){cn=2,wi(()=>ey(Ut)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var A=(function(){var ue=(S(),O)[Ut+8>>>2>>>0];return ue=Lg.get(ue),ue=Fg.get(ue),--oe,ue()})()}catch(ue){A=ue,T=!0}var D=!1;if(!Ut){var K=$s;K&&($s=null,(T?K.reject:K.resolve)(A),D=!0)}if(T&&!D)throw A}}),_=!0,$||(cn=1,Ut=(function(){var T=_r(65548),A=T+12;if((S(),F)[T>>>2>>>0]=A,(S(),F)[T+4>>>2>>>0]=A+65536,A=bi[0],!xs.has(A)){var D=wv++;xs.set(A,D),Lg.set(D,A)}return A=xs.get(A),(S(),O)[T+8>>>2>>>0]=A,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),wi(()=>Z0(Ut)))}else cn===2?(cn=0,wi(ty),Lt(Ut),Ut=null,bv.forEach(gi)):P(`invalid state: ${cn}`);return Ug}})(g=>{h().then(g)});function _v(h){return h>>>=0,Gg(async()=>{var g=await _t(h);return Rt(g)})}var vs=[],xv=h=>{var g=vs.length;return vs.push(h),g},$v=(h,g)=>{for(var $=Array(h),_=0;_<h;++_){var T=_,A=(S(),F)[g+4*_>>>2>>>0],D=gs[A];if(D===void 0)throw h=`parameter ${_}`,A=o0(A),g=Dt(A),Lt(A),new Yn(`${h} has unknown type ${g}`);$[T]=D}return $},vv=(h,g,$)=>{var _=[];return h=h(_,$),_.length&&((S(),F)[g>>>2>>>0]=Rt(_)),h},Mv={},_i=h=>{var g=Mv[h];return g===void 0?Dt(h):g};function Sv(h,g,$){var[_,...T]=$v(h,g>>>0);g=_.Vc.bind(_);var A=T.map(ue=>ue.Uc.bind(ue));h--;var D={toValue:_t};switch(h=A.map((ue,ce)=>{var Se=`argFromPtr${ce}`;return D[Se]=ue,`${Se}(args${ce?"+"+8*ce:""})`}),$){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:D.getStringOrSymbol=_i,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${h})`,_.zd||(D.toReturnWire=g,D.emval_returnValue=vv,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,$=new Function(Object.keys(D),K)(...Object.values(D)),K=`methodCaller<(${T.map(ue=>ue.name)}) => ${_.name}>`,xv(Object.defineProperty($,"name",{value:K}))}function Iv(h,g){return g>>>=0,(h=_t(h>>>0))==_t(g)}function Tv(h){return(h>>>=0)?(h=_i(h),Rt(globalThis[h])):Rt(globalThis)}function Ev(h){return h=_i(h>>>0),Rt(t[h])}function kv(h,g){return g>>>=0,h=_t(h>>>0),g=_t(g),Rt(h[g])}function Cv(h){9<(h>>>=0)&&(En[h+1]+=1)}function Wg(h,g,$,_,T){return vs[h>>>0](g>>>0,$>>>0,_>>>0,T>>>0)}function Av(h,g,$,_,T){return Wg(h>>>0,g>>>0,$>>>0,_>>>0,T>>>0)}function Rv(){return Rt([])}function Ov(h){h=_t(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Rt(g)}function Nv(h){return Rt(_i(h>>>0))}function zv(){return Rt({})}function Bv(h){for(var g=_t(h>>>=0);g.length;){var $=g.pop();g.pop()($)}ys(h)}function Pv(h,g,$){g>>>=0,$>>>=0,h=_t(h>>>0),g=_t(g),$=_t($),h[g]=$}function Dv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=h.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=h.getUTCHours(),(S(),O)[g+12>>>2>>>0]=h.getUTCDate(),(S(),O)[g+16>>>2>>>0]=h.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=h}var qg=h=>h%4==0&&(h%100!=0||h%400==0),Vg=[0,31,60,91,121,152,182,213,244,274,305,335],Hg=[0,31,59,90,120,151,181,212,243,273,304,334];function Uv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getSeconds(),(S(),O)[g+4>>>2>>>0]=h.getMinutes(),(S(),O)[g+8>>>2>>>0]=h.getHours(),(S(),O)[g+12>>>2>>>0]=h.getDate(),(S(),O)[g+16>>>2>>>0]=h.getMonth(),(S(),O)[g+20>>>2>>>0]=h.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getDay();var $=(qg(h.getFullYear())?Vg:Hg)[h.getMonth()]+h.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var _=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=_&&h.getTimezoneOffset()==Math.min(_,$)),(S(),O)[g+32>>>2>>>0]=h}function Lv(h){h>>>=0;var g=new Date((S(),O)[h+20>>>2>>>0]+1900,(S(),O)[h+16>>>2>>>0],(S(),O)[h+12>>>2>>>0],(S(),O)[h+8>>>2>>>0],(S(),O)[h+4>>>2>>>0],(S(),O)[h>>>2>>>0],0),$=(S(),O)[h+32>>>2>>>0],_=g.getTimezoneOffset(),T=new Date(g.getFullYear(),6,1).getTimezoneOffset(),A=new Date(g.getFullYear(),0,1).getTimezoneOffset(),D=Math.min(A,T);return 0>$?(S(),O)[h+32>>>2>>>0]=+(T!=A&&D==_):0<$!=(D==_)&&(T=Math.max(A,T),g.setTime(g.getTime()+6e4*((0<$?D:T)-_))),(S(),O)[h+24>>>2>>>0]=g.getDay(),$=(qg(g.getFullYear())?Vg:Hg)[g.getMonth()]+g.getDate()-1|0,(S(),O)[h+28>>>2>>>0]=$,(S(),O)[h>>>2>>>0]=g.getSeconds(),(S(),O)[h+4>>>2>>>0]=g.getMinutes(),(S(),O)[h+8>>>2>>>0]=g.getHours(),(S(),O)[h+12>>>2>>>0]=g.getDate(),(S(),O)[h+16>>>2>>>0]=g.getMonth(),(S(),O)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function jg(h,g,$,_,T,A,D){return i?ae(16,1,h,g,$,_,T,A,D):-52}function Kg(h,g,$,_,T,A){if(i)return ae(17,1,h,g,$,_,T,A)}var br={},Fv=()=>performance.timeOrigin+performance.now();function Yg(h,g){if(i)return ae(18,1,h,g);if(br[h]&&(clearTimeout(br[h].id),delete br[h]),!g)return 0;var $=setTimeout(()=>{delete br[h],gi(()=>c0(h,performance.timeOrigin+performance.now()))},g);return br[h]={id:$,Yd:g},0}function Gv(h,g,$,_){h>>>=0,g>>>=0,$>>>=0,_>>>=0;var T=new Date().getFullYear(),A=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var D=Math.max(A,T);(S(),F)[h>>>2>>>0]=60*D,(S(),O)[g>>>2>>>0]=+(A!=T),h=(g=K=>{var ue=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(ue/60)).padStart(2,"0")}${String(ue%60).padStart(2,"0")}`})(A),g=g(T),T<A?(ln(h,$,17),ln(g,_,17)):(ln(h,_,17),ln(g,$,17))}var Wv=()=>Date.now();function qv(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(S(),le)[$>>>3>>>0]=BigInt(h),0):28}var Ms=[],Xg=(h,g)=>{Ms.length=0;for(var $;$=(S(),q)[h++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Ms.push($==112?(S(),F)[g>>>2>>>0]:$==106?(S(),le)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),Q)[g>>>3>>>0]),g+=_?8:4}return Ms};function Vv(h,g,$){return h>>>=0,g=Xg(g>>>0,$>>>0),Rs[h](...g)}function Hv(h,g,$){return h>>>=0,g=Xg(g>>>0,$>>>0),Rs[h](...g)}var jv=()=>{};function Kv(h,g){return I(Ke(h>>>0,g>>>0))}var Yv=()=>{throw oe+=1,"unwind"};function Xv(){return 4294901760}var Qv=()=>navigator.hardwareConcurrency,kn={},xi=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},Qg=h=>{for(var g of h)(h=xi(g))&&(kn[h]=g)};function Zv(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),Qg(h),kn.gd=xi(h[3]),kn.Jd=h,kn.gd}function $i(h){if(!(h=kn[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Lt($i.hd??0),g=mi(h)+1;var $=_r(g);return $&&ln(h,$,g),$i.hd=$,$i.hd}function Jv(h){h>>>=0;var g=(S(),q).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,h+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(h,_)/65536))-He.buffer.byteLength+65535)/65536|0;try{He.grow(_),z();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function e3(h,g,$){if(h>>>=0,g>>>=0,kn.gd==h)var _=kn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),Qg(_);for(var T=3;_[T]&&xi(_[T])!=h;)++T;for(h=0;h<$&&_[h+T];++h)(S(),O)[g+4*h>>>2>>>0]=xi(_[h+T]);return h}var Ss,Is={},Zg=()=>{var _;if(!Ss){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Is)Is[h]===void 0?delete g[h]:g[h]=Is[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);Ss=$}return Ss};function Jg(h,g){if(i)return ae(19,1,h,g);h>>>=0,g>>>=0;var $,_=0,T=0;for($ of Zg()){var A=g+_;(S(),F)[h+T>>>2>>>0]=A,_+=ln($,A,1/0)+1,T+=4}return 0}function e0(h,g){if(i)return ae(20,1,h,g);h>>>=0,g>>>=0;var $=Zg();for(var _ of((S(),F)[h>>>2>>>0]=$.length,h=0,$))h+=mi(_)+1;return(S(),F)[g>>>2>>>0]=h,0}function t0(h){return i?ae(21,1,h):52}function n0(h,g,$,_){return i?ae(22,1,h,g,$,_):52}function r0(h,g,$,_){return i?ae(23,1,h,g,$,_):70}var t3=[null,[],[]];function i0(h,g,$,_){if(i)return ae(24,1,h,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var T=0,A=0;A<$;A++){var D=(S(),F)[g>>>2>>>0],K=(S(),F)[g+4>>>2>>>0];g+=8;for(var ue=0;ue<K;ue++){var ce=h,Se=(S(),q)[D+ue>>>0],Ae=t3[ce];Se===0||Se===10?((ce===1?M:I)($g(Ae)),Ae.length=0):Ae.push(Se)}T+=K}return(S(),F)[_>>>2>>>0]=T,0}function n3(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)Ue();$e.push(async()=>{var g=(async function(){if(!i)return Promise.all(te.map(ye))})();W++,await g,--W==0&&ee&&(g=ee,ee=null,g())})})(),i||(He=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),z()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Ee(),t.stackRestore=h=>Te(h),t.stackAlloc=h=>ks(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),B)[h>>>0]=g;break;case"i16":(S(),G)[h>>>1>>>0]=g;break;case"i32":(S(),O)[h>>>2>>>0]=g;break;case"i64":(S(),le)[h>>>3>>>0]=BigInt(g);break;case"float":(S(),X)[h>>>2>>>0]=g;break;case"double":(S(),Q)[h>>>3>>>0]=g;break;case"*":(S(),F)[h>>>2>>>0]=g;break;default:P(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),B)[h>>>0];case"i16":return(S(),G)[h>>>1>>>0];case"i32":return(S(),O)[h>>>2>>>0];case"i64":return(S(),le)[h>>>3>>>0];case"float":return(S(),X)[h>>>2>>>0];case"double":return(S(),Q)[h>>>3>>>0];case"*":return(S(),F)[h>>>2>>>0];default:P(`invalid type for getValue: ${g}`)}},t.UTF8ToString=Ke,t.stringToUTF8=ln,t.lengthBytesUTF8=mi;var o0,a0,vi,Lt,_r,Ts,s0,u0,l0,Es,c0,d0,ke,xr,h0,Te,ks,Ee,p0,Cs,f0,m0,g0,As,y0,w0,b0,_0,x0,$0,v0,M0,S0,I0,T0,E0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,Zt,r3=[xe,_e,wg,vg,Mg,Sg,Ig,Tg,Eg,kg,Cg,Ag,Rg,Og,Ng,zg,jg,Kg,Yg,Jg,e0,t0,n0,r0,i0],Rs={1003524:(h,g,$,_,T)=>{if(t===void 0||!t.Xc)return 1;if((h=Ke(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>h.byteLength)return 3;try{let A=h.subarray(g,g+$);switch(T){case 0:(S(),q).set(A,_>>>0);break;case 1:t.Qd?t.Qd(_,A):t.Id(_,A);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(S(),q).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,_,T)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007283:(h,g,$,_,T)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007457:(h,g,$,_,T)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007631:(h,g,$,_,T)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007806:(h,g,$,_,T)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007980:(h,g,$,_,T)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008153:(h,g,$,_,T)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008326:(h,g,$,_,T)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008503:(h,g,$,_,T)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008683:(h,g,$,_,T)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009173:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009306:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le,dn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[A,D],strides:[K],wIsConst:()=>!!(S(),B)[ce>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(dn)})},1009739:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(S(),B)[ue>>>0],outputPadding:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1010400:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le,dn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[A,D],strides:[K],wIsConst:()=>!!(S(),B)[ce>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(dn)})},1010833:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(S(),B)[ue>>>0],outputPadding:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013758:(h,g,$,_,T)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:_,transB:T})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,_)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(h,g,$,_)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,_,T)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,_,T,A,D,K,ue,ce,Se)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Ke(T),cubicCoeffA:A,excludeOutside:D,extrapolationValue:K,keepAspectRatioPolicy:Ke(ue),mode:Ke(ce),nearestMode:Ke(Se)})},1015056:(h,g,$,_,T,A,D)=>{t.$b("Slice",h,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[],axes:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:Ke(g)})},1015734:(h,g,$,_,T)=>{t.$b("Pad",h,{mode:g,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1015877:(h,g,$,_,T,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016046:(h,g,$,_,T,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,_,T)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:T?"NHWC":"NCHW"})},1016572:(h,g,$,_,T)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:T?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:Ke(g)})},1016827:(h,g,$,_,T,A,D,K,ue)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:A,qkvHiddenSizes:D?Array.from((S(),O).subarray(Number(K)>>>0,Number(K)+D>>>0)):[],pastPresentShareBuffer:!!ue})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le,dn,Os)=>{t.$b("Conv",h,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:T,kernel_shape:A?Array.from((S(),O).subarray(Number(A)>>>0,Number(D)>>>0)):[],pads:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(ue)>>>0)):[],strides:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],w_is_const:()=>!!(S(),B)[Number(Pe)>>>0],activation:Ke(Le),activation_params:dn?Array.from((S(),X).subarray(Number(dn)>>>0,Number(Os)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,_,T,A,D,K,ue)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:_,softcap:T,doRotary:A,rotaryInterleaved:D,smoothSoftmax:K,localWindowSize:ue})},1018124:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018235:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018346:(h,g,$,_,T,A)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:_,bits:T,blockSize:A})},1018473:(h,g,$,_,T,A)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:A})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,_,T)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:T})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,_)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function i3(h,g,$){return Gg(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function o3(){return typeof wasmOffsetConverter<"u"}function a3(h,g,$,_){var T=Ee();try{return M0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function s3(h,g,$){var _=Ee();try{return _0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;ke(1,0)}}function u3(h){var g=Ee();try{y0(h)}catch($){if(Te(g),$!==$+0)throw $;ke(1,0)}}function l3(h,g){var $=Ee();try{return As(h,g)}catch(_){if(Te($),_!==_+0)throw _;ke(1,0)}}function c3(h,g,$){var _=Ee();try{g0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;ke(1,0)}}function d3(h,g){var $=Ee();try{S0(h,g)}catch(_){if(Te($),_!==_+0)throw _;ke(1,0)}}function h3(h,g,$,_,T,A,D){var K=Ee();try{return $0(h,g,$,_,T,A,D)}catch(ue){if(Te(K),ue!==ue+0)throw ue;ke(1,0)}}function p3(h,g,$,_,T,A){var D=Ee();try{w0(h,g,$,_,T,A)}catch(K){if(Te(D),K!==K+0)throw K;ke(1,0)}}function f3(h,g,$,_){var T=Ee();try{v0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function m3(h,g,$,_,T){var A=Ee();try{b0(h,g,$,_,T)}catch(D){if(Te(A),D!==D+0)throw D;ke(1,0)}}function g3(h,g,$,_,T,A,D){var K=Ee();try{T0(h,g,$,_,T,A,D)}catch(ue){if(Te(K),ue!==ue+0)throw ue;ke(1,0)}}function y3(h,g,$,_,T,A,D){var K=Ee();try{E0(h,g,$,_,T,A,D)}catch(ue){if(Te(K),ue!==ue+0)throw ue;ke(1,0)}}function w3(h,g,$,_,T,A,D,K){var ue=Ee();try{R0(h,g,$,_,T,A,D,K)}catch(ce){if(Te(ue),ce!==ce+0)throw ce;ke(1,0)}}function b3(h,g,$,_,T){var A=Ee();try{return I0(h,g,$,_,T)}catch(D){if(Te(A),D!==D+0)throw D;ke(1,0)}}function _3(h,g,$){var _=Ee();try{return O0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;ke(1,0)}}function x3(h,g,$,_,T,A,D,K){var ue=Ee();try{N0(h,g,$,_,T,A,D,K)}catch(ce){if(Te(ue),ce!==ce+0)throw ce;ke(1,0)}}function $3(h,g,$,_,T,A,D,K,ue,ce,Se,Ae){var Pe=Ee();try{k0(h,g,$,_,T,A,D,K,ue,ce,Se,Ae)}catch(Le){if(Te(Pe),Le!==Le+0)throw Le;ke(1,0)}}function v3(h,g,$,_,T,A){var D=Ee();try{return C0(h,g,$,_,T,A)}catch(K){if(Te(D),K!==K+0)throw K;ke(1,0)}}function M3(h,g,$){var _=Ee();try{return z0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;return ke(1,0),0n}}function S3(h,g,$,_,T,A,D,K,ue){var ce=Ee();try{x0(h,g,$,_,T,A,D,K,ue)}catch(Se){if(Te(ce),Se!==Se+0)throw Se;ke(1,0)}}function I3(h){var g=Ee();try{return B0(h)}catch($){if(Te(g),$!==$+0)throw $;ke(1,0)}}function T3(h,g){var $=Ee();try{return Q0(h,g)}catch(_){if(Te($),_!==_+0)throw _;return ke(1,0),0n}}function E3(h){var g=Ee();try{return P0(h)}catch($){if(Te(g),$!==$+0)throw $;return ke(1,0),0n}}function k3(h,g,$,_){var T=Ee();try{return W0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function C3(h,g,$,_,T){var A=Ee();try{return q0(h,g,$,_,T)}catch(D){if(Te(A),D!==D+0)throw D;ke(1,0)}}function A3(h,g,$,_,T,A){var D=Ee();try{return V0(h,g,$,_,T,A)}catch(K){if(Te(D),K!==K+0)throw K;ke(1,0)}}function R3(h,g,$,_,T,A){var D=Ee();try{return H0(h,g,$,_,T,A)}catch(K){if(Te(D),K!==K+0)throw K;ke(1,0)}}function O3(h,g,$,_,T,A,D,K){var ue=Ee();try{return A0(h,g,$,_,T,A,D,K)}catch(ce){if(Te(ue),ce!==ce+0)throw ce;ke(1,0)}}function N3(h,g,$,_,T){var A=Ee();try{return j0(h,g,$,_,T)}catch(D){if(Te(A),D!==D+0)throw D;return ke(1,0),0n}}function z3(h,g,$,_){var T=Ee();try{return K0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function B3(h,g,$,_){var T=Ee();try{return Y0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function P3(h,g,$,_,T,A,D,K,ue,ce,Se,Ae){var Pe=Ee();try{return X0(h,g,$,_,T,A,D,K,ue,ce,Se,Ae)}catch(Le){if(Te(Pe),Le!==Le+0)throw Le;ke(1,0)}}function D3(h,g,$,_,T,A,D,K,ue,ce,Se){var Ae=Ee();try{F0(h,g,$,_,T,A,D,K,ue,ce,Se)}catch(Pe){if(Te(Ae),Pe!==Pe+0)throw Pe;ke(1,0)}}function U3(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le,dn,Os){var W3=Ee();try{G0(h,g,$,_,T,A,D,K,ue,ce,Se,Ae,Pe,Le,dn,Os)}catch(Ns){if(Te(W3),Ns!==Ns+0)throw Ns;ke(1,0)}}function L3(h,g,$){var _=Ee();try{return D0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;ke(1,0)}}function F3(h,g,$){var _=Ee();try{return U0(h,g,$)}catch(T){if(Te(_),T!==T+0)throw T;ke(1,0)}}function G3(h,g,$,_){var T=Ee();try{L0(h,g,$,_)}catch(A){if(Te(T),A!==A+0)throw A;ke(1,0)}}function Mi(){if(0<W)ee=Mi;else if(i)y==null||y(t),U();else{for(var h=$e;0<h.length;)h.shift()(t);0<W?ee=Mi:(t.calledRun=!0,E||(U(),y==null||y(t)))}}return i||(Zt=await ne(),Mi()),t.PTR_SIZE=4,C?t:new Promise((h,g)=>{y=h,w=g})}var ru,iu,Sy=ie(()=>{var e,t;ru=nu,iu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),iu&&nu()}),Oi,Ni,ou,ct,au,Sr,su,uu,zi,lu,Bi,cu,Pi,du,Di=ie(()=>{Ci(),Oi=typeof location>"u"?void 0:location.origin,Ni=self.location.href>"file:"&&self.location.href<"file;",ou=()=>{{if(Ni){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Oi).href}return self.location.href}},ct=ou(),au=()=>{if(ct&&!ct.startsWith("blob:"))return ct.substring(0,ct.lastIndexOf("/")+1)},Sr=(e,t)=>{try{let n=t??ct;return(n?new URL(e,n):new URL(e)).origin===Oi}catch{return!1}},su=(e,t)=>{let n=t??ct;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},uu=(e,t)=>`${t??"./"}${e}`,zi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},lu=async e=>(await import(e)).default,Bi=(My(),Xn(Js)).default,cu=async()=>{if(!ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Sr(ct))return[void 0,Bi()];let e=await zi(ct);return[e,Bi(e)]},Pi=(Sy(),Xn(tu)).default,du=async(e,t,n,r)=>{let i=Pi&&!(e||t);if(i)if(ct)i=Sr(ct)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Pi];{let o="ort-wasm-simd-threaded.jsep.mjs",a=e??su(o,t),s=n&&a&&!Sr(a,t),u=s?await zi(a):a??uu(o,t);return[s?u:void 0,await lu(u)]}}}),Ui,Ir,Jn,Li,hu,pu,fu,Fi,De,mn=ie(()=>{Di(),Ir=!1,Jn=!1,Li=!1,hu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},pu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},fu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Fi=async e=>{if(Ir)return Promise.resolve();if(Jn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Li)throw new Error("previous call to 'initializeWebAssembly()' failed.");Jn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!fu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!pu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=hu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,s=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,p]=await du(s,o,n>1,!!c||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||o)b.locateFile=x=>l??o+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(d){let x=au();x&&(b.locateFile=v=>x+v)}p(b).then(x=>{Jn=!1,Ir=!0,Ui=x,y(),d&&URL.revokeObjectURL(d)},x=>{Jn=!1,Li=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(Ir&&Ui)return Ui;throw new Error("WebAssembly is not initialized yet.")}}),$t,Tr,Ne,Gi=ie(()=>{mn(),$t=(e,t)=>{let n=De(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Tr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let a=t?t+i:i;if(typeof o=="object")Tr(o,a+".",n,r);else if(typeof o=="string"||typeof o=="number")r(a,o.toString());else if(typeof o=="boolean")r(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Ne=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),s=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),mu,Iy=ie(()=>{mn(),Gi(),mu=e=>{let t=De(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=$t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Tr(e.extra,"",new WeakSet,(a,s)=>{let u=$t(a,r),l=$t(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${a} - ${s}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),o}}}),gu,yu,wu,gn,bu,_u,Ty=ie(()=>{mn(),Gi(),gu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},yu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},wu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},gn=(e,t,n,r)=>{let i=$t(t,r),o=$t(n,r);De()._OrtAddSessionConfigEntry(e,i,o)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},bu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",gn(e,"session.disable_quant_qdq","1",n),gn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&gn(e,"deviceType",d,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);gn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=$t(o,n),u=a.length,l=0,c=0;if(u>0){l=De()._malloc(u*De().PTR_SIZE),n.push(l),c=De()._malloc(u*De().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)De().setValue(l+d*De().PTR_SIZE,a[d][0],"*"),De().setValue(c+d*De().PTR_SIZE,a[d][1],"*")}await De()._OrtAppendExecutionProvider(e,s,l,c,u)!==0&&Ne(`Can't append execution provider: ${o}.`)}},_u=async e=>{let t=De(),n=0,r=[],i=e||{};wu(i);try{let o=gu(i.graphOptimizationLevel??"all"),a=yu(i.executionMode??"sequential"),s=typeof i.logId=="string"?$t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?$t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,u,l,c),n===0&&Ne("Can't create session options."),i.executionProviders&&await bu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);gn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=$t(d,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Ne(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Tr(i.extra,"",new WeakSet,(d,p)=>{gn(n,d,p,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(a=>t._free(a)),o}}}),yn,Wt,wn,Er,kr,Wi,qi,Vi,be=ie(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Wt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},wn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Er=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},kr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Wi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Hi,xu=ie(()=>{Ci(),Hi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let a=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(o,a,l).set(u),a+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),$u,vu,Mu,Su,ji,Iu,Ce,qt=ie(()=>{be(),$u=["V","I","W","E","F"],vu=(e,t)=>{console.log(`[${$u[e]},${new Date().toISOString()}]${t}`)},ji=(e,t)=>{Mu=e,Su=t},Iu=(e,t)=>{let n=kr(e),r=kr(Mu);n>=r&&vu(n,typeof t=="function"?t():t)},Ce=(...e)=>{Su&&Iu(...e)}}),Tu,Nn,V,Cr,Eu,ku,Cu,ve=ie(()=>{Tu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Nn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),a=new Array(o);if(n){if(r<2||i<2)return;let s=Tu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[a[o-2],a[o-1]]=s}for(let s=n?3:1;s<=o;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)a[o-s]=Math.max(u,l);else{if(c>1)return;a[o-s]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},V=class Si{static size(t){return Si.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Si.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Si.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Cr=class $r{static adjustPoolAttributes(t,n,r,i,o,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<r.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=r[s]||a[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,a,s){if(s){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)$r.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,o,a,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return $r.computeShapeHelper(t,n,u,r,i,o,a,s),u}static computeConvOutputShape(t,n,r,i,o,a,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return $r.computeShapeHelper(!1,t,u,r,i,o,a,s),u}static computeShapeHelper(t,n,r,i,o,a,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push($r.adjustPadAndReturnShape(n[l+2],i[l],o[l],a[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,a,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return o[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),o[s]=c-o[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[a]+o[s]-l)/n+1)}},Eu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,a,s;t?(o=e[1],a=e[0]):(o=e[0],a=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(o<=0||s<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Nn.isValidBroadcast(i,[o,s]))throw new Error("gemm: invalid bias shape for broadcast");return[o,s,a]}},ku=-34028234663852886e22,Cu=34028234663852886e22}),Ki,Au=ie(()=>{be(),Ki=(e,t)=>new(Er(t))(e)}),Yi,Xi,Qi,Ru,Zi,Ou,Ji,eo,to,Nu,zu,Ey=ie(()=>{be(),qt(),Yi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xi=(e,t)=>{if(t==="int32")return e;let n=Yi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Er(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let u=o[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Qi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ru=1,Zi=()=>Ru++,Ou=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ji=(e,t)=>{let n=Yi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},eo=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ji(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Qi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},to=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),a;if(!(o!=null&&o.input.dataTypes.includes(t))){if(a=Ou.get(t),!a||(o==null?void 0:o.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ji(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Xi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Qi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Nu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Zi();return this.tensorTrackersById.set(e,new to(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=Zi(),a=new eo({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new to(this,a)),this.externalTensors.add(a),o}async getCachedTensor(e,t,n,r,i,o,a){let s=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,n)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new eo({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},zu=(...e)=>new Nu(...e)}),er,Bu,Pu,ky=ie(()=>{be(),mn(),Au(),Ey(),qt(),er=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},Pu=class{constructor(e){this.tensorManager=zu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ji(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Bu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=er.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=er.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ki(n,t)}}registerMLTensor(e,t,n,r){let i=er.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,a=!1){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=o.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(a){let d=Xi(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=er.get(yn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),no=ie(()=>{}),ro,Ar,Rr,Du,Uu,io,oo,Lu,Fu,Cy=ie(()=>{qt(),no(),ro=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ar=[],Rr=e=>Math.ceil(Number(e)/16)*16,Du=e=>{for(let t=0;t<Ar.length;t++){let n=Ar[t];if(e<=n)return n}return Math.ceil(e/16)*16},Uu=1,io=()=>Uu++,oo=async(e,t,n,r)=>{let i=Rr(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{o.destroy()}},Lu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ro)Ar.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=Rr(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,a.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Rr(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=io();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Du(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:io(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await oo(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ro.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Fu=(...e)=>new Lu(...e)}),Gu,Oe,We=ie(()=>{Gu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new Gu(e)}),zn,Or,Xe,et,me,Fe,ao,Bn,en,pe,tr,Y,he,Wu,so,qu,Vu,Me=ie(()=>{be(),ve(),zn=64,Or=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Xe=(e,t=1)=>{let n=Or(e,t);return typeof n=="string"?n:n[0]},et=(e,t=1)=>{let n=Or(e,t);return typeof n=="string"?n:n[1]},me=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:V.computeStrides(n)})}),t},Fe=e=>e%4===0?4:e%2===0?2:1,ao=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Bn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,en=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,tr=(e,t,n,r,i)=>{let o=typeof n=="number",a=o?n:n.length,s=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=Or(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:c,storage:d,tensor:t},f=C=>typeof C=="string"?C:`${C}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let C=0;C<a-1;C++)x+=`
    let dim${C} = current / ${pe(b,C,a)};
    let rest${C} = current % ${pe(b,C,a)};
    indices[${C}] = dim${C};
    current = rest${C};
    `;x+=`indices[${a-1}] = current;`;let v=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,M=C=>(m.offsetToIndices=!0,a<2?C:`o2i_${e}(${C})`),I=[];if(a>=2)for(let C=a-1;C>=0;C--)I.push(`${pe(b,C,a)} * (indices[${C}])`);let E=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,k=C=>(m.indicesToOffset=!0,a<2?C:`i2o_${e}(${C})`),S=(...C)=>a===0?"0u":`${p.indices}(${C.map(f).join(",")})`,R=(C,z)=>a<2?`${C}`:`${pe(C,z,a)}`,B=(C,z,U)=>a<2?`${C}=${U};`:`${pe(C,z,a)}=${U};`,q={},G=(C,z)=>{m.broadcastedIndicesToOffset=!0;let U=`${z.name}broadcastedIndicesTo${e}Offset`;if(U in q)return`${U}(${C})`;let P=[];for(let j=a-1;j>=0;j--){let ne=z.indicesGet("outputIndices",j+z.rank-a);P.push(`${R(b,j)} * (${ne} % ${R(w,j)})`)}return q[U]=`fn ${U}(outputIndices: ${z.type.indices}) -> u32 {
             return ${P.length>0?P.join("+"):"0u"};
           }`,`${U}(${C})`},H=(C,z)=>(()=>{if(p.storage===p.value)return`${e}[${C}]=${z};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${C}]=vec2<u32>(u32(${z}), select(0u, 0xFFFFFFFFu, ${z} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${C}]=vec2<u32>(u32(${z}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${C}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${z}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=C=>(()=>{if(p.storage===p.value)return`${e}[${C}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${C}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${C}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${C}] & 0xFFu), bool(${e}[${C}] & 0xFF00u), bool(${e}[${C}] & 0xFF0000u), bool(${e}[${C}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),F=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${c} {
    return ${O(`i2o_${e}(indices)`)};
  }`,X=a<2?"":(()=>{let C=s.map(U=>`d${U}: u32`).join(", "),z=s.map(U=>`d${U}`).join(", ");return`
  fn get_${e}(${C}) -> ${c} {
    return get_${e}ByIndices(${S(z)});
  }`})(),Q=(...C)=>{if(C.length!==a)throw new Error(`indices length must be ${a}`);let z=C.map(f).join(",");return a===0?O("0u"):a===1?O(z[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${z})`)},le=C=>a<2?O(C):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${C})`),L=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${c}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,N=a<2?"":(()=>{let C=s.map(U=>`d${U}: u32`).join(", "),z=s.map(U=>`d${U}`).join(", ");return`
  fn set_${e}(${C}, value: ${c}) {
    set_${e}ByIndices(${S(z)}, value);
  }`})();return{impl:()=>{let C=[],z=!1;return m.offsetToIndices&&(C.push(v),z=!0),m.indicesToOffset&&(C.push(E),z=!0),m.broadcastedIndicesToOffset&&(Object.values(q).forEach(U=>C.push(U)),z=!0),m.set&&(C.push(N),z=!0),m.setByIndices&&(C.push(L),z=!0),m.get&&(C.push(X),z=!0),m.getByIndices&&(C.push(F),z=!0),!o&&z&&C.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${V.computeStrides(n).join(",")});`),C.join(`
`)},type:p,offsetToIndices:M,indicesToOffset:k,broadcastedIndicesToOffset:G,indices:S,indicesGet:R,indicesSet:B,set:(...C)=>{if(C.length!==a+1)throw new Error(`indices length must be ${a}`);let z=C[a];if(typeof z!="string")throw new Error("value must be string");let U=C.slice(0,a).map(f).join(",");return a===0?H("0u",z):a===1?H(U[0],z):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${U}, ${z})`)},setByOffset:H,setByIndices:(C,z)=>a<2?H(C,z):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${C}, ${z});`),get:Q,getByOffset:O,getByIndices:le,usage:r,name:e,strides:b,shape:w,rank:a}},Y=(e,t,n,r=1)=>tr(e,t,n,"input",r),he=(e,t,n,r=1)=>tr(e,t,n,"output",r),Wu=(e,t,n)=>tr(e,t,n,"atomicOutput",1),so=(e,t,n,r=1)=>tr(e,t,n,"internal",r),qu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=zn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
  fn main(${o}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Vu=(e,t)=>new qu(e,t)}),Hu,uo,ju,Ku,Yu,Xu,dt,Qu,Zu,tn=ie(()=>{be(),ve(),We(),Me(),Hu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},uo=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ju=(e,t)=>V.sortBasedOnPerm(e,uo(e.length,t)),Ku=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},Yu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Xu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},dt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=uo(r,t),o=ju(e.dims,i),a=e.dims,s=o,u=r<2||Xu(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,a,4),w=he("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=Yu(e.dims,i),p=V.areEqual(d,[2,3,1]),f=V.areEqual(d,[3,1,2]);if(c.length===2||p||f){a=p?[c[0],c[1]*c[2]]:f?[c[0]*c[1],c[2]]:c,s=[a[1],a[0]];let m=16;return l=y=>{let w=Y("a",n,a.length),b=he("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...me(a,s)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,a.length),w=he("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Ku(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...me(a,s)]}},getShaderSource:l}},Qu=(e,t)=>{Hu(e.inputs,t.perm),e.compute(dt(e.inputs[0],t.perm))},Zu=e=>Oe({perm:e.perm})}),Ju,el,tl,nl,rl,il,ol,al,sl,ul,vt,ll,cl,dl,hl,pl,fl,ml,gl,yl,wl,Ay=ie(()=>{be(),ve(),Me(),co(),tn(),Ju={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},el={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},tl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},nl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},rl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},il=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},ol=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},al=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},sl=(e,t)=>{let n=[];if(!al(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},ul=(e,t,n,r,i,o,a)=>{let s=n[0].dims,u=V.size(o),l=V.size(a),c=Y("_A",n[0].dataType,s),d=he("output",i,o),p=64;u===1&&(p=256);let f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,d)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${tl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Ju[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${el[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${nl[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},vt=(e,t,n,r)=>{let i=e.inputs.length===1?n:lo(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((f,m)=>m));let a=V.normalizeAxes(o,e.inputs[0].dims.length),s=a,u=e.inputs[0],l=sl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(dt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=rl(s.length,u.dims.length));let[c,d]=il(u.dims,s),p=c;i.keepDims&&(p=ol(c,a)),e.compute(ul(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},ll=(e,t)=>{vt(e,"ReduceMeanShared",t,"mean")},cl=(e,t)=>{vt(e,"ReduceL1Shared",t,"l1")},dl=(e,t)=>{vt(e,"ReduceL2Shared",t,"l2")},hl=(e,t)=>{vt(e,"ReduceLogSumExpShared",t,"logSumExp")},pl=(e,t)=>{vt(e,"ReduceMaxShared",t,"max")},fl=(e,t)=>{vt(e,"ReduceMinShared",t,"min")},ml=(e,t)=>{vt(e,"ReduceProdShared",t,"prod")},gl=(e,t)=>{vt(e,"ReduceSumShared",t,"sum")},yl=(e,t)=>{vt(e,"ReduceSumSquareShared",t,"sumSquare")},wl=(e,t)=>{vt(e,"ReduceLogSumShared",t,"logSum")}}),Mt,bl,Nr,lo,St,_l,xl,$l,vl,Ml,Sl,Il,Tl,El,kl,It,Cl,Al,Rl,Ol,Nl,zl,Bl,Pl,Dl,Ul,co=ie(()=>{be(),ve(),We(),Me(),Ay(),Mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},bl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Nr=(e,t,n,r,i,o,a=!1,s=!1)=>{let u=[],l=n[0].dims,c=l.length,d=V.normalizeAxes(i,c),p=!s&&d.length===0;l.forEach((y,w)=>{p||d.indexOf(w)>=0?a&&u.push(1):u.push(y)});let f=u.length,m=V.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=Y("_A",n[0].dataType,c),x=he("output",o,f),v=r(b,x,d),M=v[2];for(let I=0,E=0;I<c;I++)p||d.indexOf(I)>=0?(a&&E++,M=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${v[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${M}
                }`):(w.push(`${b.indicesSet("input_indices",I,x.indicesGet("output_indices",E))};`),E++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${v[0]}       // init ops for reduce max/min
          ${v[1]}
          ${M}
          ${v[3]}
          ${v.length===4?x.setByOffset("global_idx","value"):v.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...me(l,u)]})}},lo=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Oe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},St=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:lo(i,n);e.compute(Nr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?bl:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},_l=(e,t)=>{Mt(e.inputs),St(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},xl=(e,t)=>{Mt(e.inputs),St(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},$l=(e,t)=>{Mt(e.inputs),St(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},vl=(e,t)=>{Mt(e.inputs),St(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Ml=(e,t)=>{Mt(e.inputs),St(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",a,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Sl=(e,t)=>{Mt(e.inputs),St(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(o*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Il=(e,t)=>{Mt(e.inputs),St(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Tl=(e,t)=>{Mt(e.inputs),St(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},El=(e,t)=>{Mt(e.inputs),St(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},kl=(e,t)=>{Mt(e.inputs),St(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},It=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},Cl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):ll(e,t)},Al=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):cl(e,t)},Rl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):dl(e,t)},Ol=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):hl(e,t)},Nl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):pl(e,t)},zl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):fl(e,t)},Bl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):ml(e,t)},Pl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):gl(e,t)},Dl=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):yl(e,t)},Ul=(e,t)=>{It(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):wl(e,t)}}),ho,Ll,Fl,po,Ry=ie(()=>{be(),We(),co(),ho=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ll=(e,t)=>{ho(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Nr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Fl=(e,t)=>{ho(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Nr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},po=e=>Oe(e)}),Gl,zr,Wl,ql,Vl,nr,Hl,jl,fo=ie(()=>{be(),ve(),no(),Me(),Gl=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let v of t.qkvHiddenSizes)if(v%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let w=m+y,b=-1,x=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},zr=(e,t,n)=>t&&e?`
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
    `,Wl=(e,t,n,r,i,o,a,s)=>{let u=Fe(a?1:o),l=64,c=o/u;c<l&&(l=32);let d=Math.ceil(o/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],f=Xe(e.dataType,u),m=et(1,u),y=["type"];a&&y.push("type"),s&&y.push("type");let w=b=>{let x=he("x",e.dataType,e.dims,u),v=[x],M=a?Y("seq_lens",a.dataType,a.dims):void 0;M&&v.push(M);let I=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;I&&v.push(I);let E=et(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...v)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${zr(M,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},ql=(e,t,n,r,i,o,a,s,u)=>{let l=a+o.kvSequenceLength,c=[o.batchSize,o.numHeads,o.sequenceLength,l],d=e>1&&r,p=o.kvNumHeads?o.kvNumHeads:o.numHeads,f=d?[o.batchSize,p,l,o.headSize]:void 0,m=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=Fe(o.headSize),b=o.headSize/w,x=12,v={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},M=[{type:12,data:o.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:m}],I=d&&r&&V.size(r.dims)>0,E=["type","type"];I&&E.push("type"),i&&E.push("type"),s&&E.push("type"),u&&E.push("type");let k=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=R=>{let B=Y("q",t.dataType,t.dims,w),q=Y("key",n.dataType,n.dims,w),G=[B,q];if(I){let L=Y("past_key",r.dataType,r.dims,w);G.push(L)}i&&G.push(Y("attention_bias",i.dataType,i.dims));let H=s?Y("seq_lens",s.dataType,s.dims):void 0;H&&G.push(H);let O=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;O&&G.push(O);let F=he("output",t.dataType,c),X=[F];d&&X.push(he("present_key",t.dataType,f,w));let Q=et(1,w),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${B.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${B.type.storage}, ${x*x}>;
  ${R.registerUniforms(le).declareVariables(...G,...X)}
  ${R.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${zr(H,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&d?`
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:k,dispatchGroup:v,programUniforms:M}),getShaderSource:S}},Vl=(e,t,n,r,i,o,a=void 0,s=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=d?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&V.size(r.dims)>0,v=["type","type"];x&&v.push("type"),a&&v.push("type"),s&&v.push("type");let M=[{dims:m,dataType:t.dataType,gpuDataType:0}];d&&M.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=E=>{let k=Y("probs",t.dataType,t.dims),S=Y("v",n.dataType,n.dims),R=[k,S];x&&R.push(Y("past_value",r.dataType,r.dims));let B=a?Y("seq_lens",a.dataType,a.dims):void 0;a&&R.push(B);let q=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&R.push(q);let G=[he("output",t.dataType,m)];d&&G.push(he("present_value",t.dataType,f));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${E.registerUniforms(H).declareVariables(...R,...G)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${zr(B,q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:M,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},nr=(e,t,n,r,i,o,a,s,u,l,c=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(a?1:0)+(s?1:0)),f=p>1?a:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&V.size(u.dims)>0?u:void 0,x=[t,n];f&&V.size(f.dims)>0&&x.push(f),b&&x.push(b),c&&x.push(c),d&&x.push(d);let v=e.compute(ql(p,t,n,f,b,l,y,c,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Wl(v,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[v,c,d]:[v],outputs:[]});let M=[v,r];m&&V.size(m.dims)>0&&M.push(m),c&&M.push(c),d&&M.push(d),e.compute(Vl(p,v,r,m,l,y,c,d),{inputs:M,outputs:p>1?[0,2]:[0]})},Hl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,a=12,s={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let p=he("output_q",u[0].dataType,n),f=he("output_k",u[0].dataType,n),m=he("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),b=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,v=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${d.registerUniforms(v).declareVariables(y,w,b,p,f,m)}
  ${d.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},jl=(e,t)=>{let n=Gl(e.inputs,t),[r,i,o]=Hl(e,n);return nr(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Kl,Yl,Xl,Ql,Oy=ie(()=>{pt(),be(),ve(),We(),Me(),Kl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let a=i.length;if(a!==r.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Yl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,a=r?Fe(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,u=V.size(o)/a,l=r,c=l?o.length:o,d=Y("x",e[0].dataType,e[0].dims,a),p=Y("scale",e[1].dataType,e[1].dims,s),f=Y("bias",e[2].dataType,e[2].dims,s),m=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),w=he("y",e[0].dataType,c,a),b=()=>{let v="";if(r)v=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")v=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{v=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let M=1;M<p.rank;M++)v+=`cIndices[${M}] = outputIndices[${M}];`;v+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return v},x=v=>`
  const epsilon = ${n};
  ${v.registerUniform("outputSize","u32").declareVariables(d,p,f,m,y,w)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...me(o)]:[{type:12,data:u}]})}},Xl=e=>Oe(e),Ql=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Xl({...t,outputCount:r});if(Be.webgpu.validateInputContent&&Kl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Yl(n,i))}}),Zl,Jl,ec,Ny=ie(()=>{ve(),Me(),Zl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Jl=e=>{let t=e[0].dims,n=e[0].dims[2],r=V.size(t)/4,i=e[0].dataType,o=Y("input",i,t,4),a=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=he("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,a,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},ec=e=>{Zl(e.inputs),e.compute(Jl(e.inputs))}}),tc,Re,nc,rc,ic,oc,ac,sc,uc,lc,cc,dc,hc,pc,fc,mc,rr,gc,Br,yc,wc,bc,_c,xc,$c,vc,Mc,Sc,Ic,Tc,Ec,kc,Cc,Ac,Rc,mo,Oc,go,yo,Nc,zc,Bc,Pc,Dc,Uc,wo=ie(()=>{be(),ve(),We(),Me(),tc=(e,t,n,r,i,o,a)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),c=he("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return a&&d.push(...a),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,o=e.dataType,a,s)=>{let u=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>tc(l,V.size(e.dims),e.dataType,o,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(V.size(l[0].dims)/64/4)},programUniforms:u})}},nc=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},rc=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},ic=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},oc=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},ac=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},sc=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},uc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},lc=e=>Oe(e),cc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},dc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:n})},hc=(e,t)=>{let n=t||dc(e.inputs),r=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},pc=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},fc=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},mc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},rr=e=>Oe(e),gc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Br=(e="f32")=>`
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
}`,yc=e=>{let t=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Br(t)))},wc=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},bc=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},_c=e=>{let t=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Br(t)))},xc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},$c=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},vc=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Mc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Sc=e=>{let t=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Ic=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Tc=e=>Oe(e),Ec=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},kc=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Cc=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Ac=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Rc=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},mo=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Oc=e=>{e.compute(Re(e.inputs[0],"Tanh",mo))},go=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${mo("v")};
}
`,yo=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Nc=e=>{let t=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",yo,go(t),void 0,e.inputs[0].dataType))},zc=(e,t)=>{let n=et(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Bc=e=>{e.compute(Re(e.inputs[0],"Log","log"))},Pc=(e,t)=>`
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
`,Dc=e=>`quick_gelu_impl(${e})`,Uc=(e,t)=>{let n=et(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Dc,Pc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Lc,Fc,Gc,zy=ie(()=>{ve(),Me(),wo(),Lc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Fc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=he("output",e[0].dataType,t,4),o=V.size(t)/4,a=Xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Br(a)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Gc=e=>{Lc(e.inputs),e.compute(Fc(e.inputs))}}),Wc,qc,Tt,Vc,Hc,jc,Kc,Yc,Xc,Qc,Zc,Jc,ed,By=ie(()=>{be(),ve(),Me(),Wc=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p,f;typeof s=="string"?p=f=(x,v)=>`${s}((${x}),(${v}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=he("outputData",c,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),b;if(i)if(o){let x=V.size(t)===1,v=V.size(n)===1,M=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||v?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),v?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||M?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(v,M,I="")=>{let E=`aData[indexA${M}][componentA${M}]`,k=`bData[indexB${M}][componentB${M}]`;return`
            let outputIndices${M} = ${m.offsetToIndices(`global_idx * 4u + ${M}u`)};
            let offsetA${M} = ${y.broadcastedIndicesToOffset(`outputIndices${M}`,m)};
            let offsetB${M} = ${w.broadcastedIndicesToOffset(`outputIndices${M}`,m)};
            let indexA${M} = offsetA${M} / 4u;
            let indexB${M} = offsetB${M} / 4u;
            let componentA${M} = offsetA${M} % 4u;
            let componentB${M} = offsetB${M} % 4u;
            ${v}[${M}] = ${I}(${p(E,k)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,m)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},qc=(e,t,n,r,i,o,a=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!V.areEqual(s,u),c=s,d=V.size(s),p=!1,f=!1,m=[l];if(l){let y=Nn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=V.size(c);let w=V.size(s)===1,b=V.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,v=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(v);let M=1;for(let I=1;I<c.length;I++){let E=s[s.length-I],k=u[u.length-I];if(E===k)M*=E;else break}M%4===0?(f=!0,p=!0):(w||b||x||v)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Wc(y,s,u,c,p,l,f,i,n.dataType,r.dataType,a,o),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(c)/4)},...me(s,u,c)]})}},Tt=(e,t,n,r,i,o)=>{e.compute(qc(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},Vc=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},Hc=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},jc=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Kc=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},Yc=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Xc=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},Qc=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Zc=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Jc=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},ed=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),td,nd,rd,id,od,ad,Py=ie(()=>{be(),ve(),We(),Me(),td=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((a,s)=>{if(s!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},nd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,rd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},id=(e,t,n,r)=>{let i=V.size(n),o=new Array(e.length),a=new Array(e.length),s=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],o[y]=s,l.push(e[y].dims.length),a[y]=Y(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)c.push(...me(e[y].dims));c.push(...me(n));let d=he("output",r,n.length),p=d.indicesGet("indices",t),f=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...a,d)})()}

  ${nd(o.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${rd(a,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},od=(e,t)=>{let n=e.inputs,r=n[0].dims,i=V.normalizeAxis(t.axis,r.length);td(n,i);let o=r.slice();o[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(s=>V.size(s.dims)>0);e.compute(id(a,i,o,n[0].dataType),{inputs:a})},ad=e=>Oe({axis:e.axis})}),bn,_n,xn,bo,$n=ie(()=>{be(),ve(),bn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},_n=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},xn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},bo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[ku,Cu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ze,sd,_o=ie(()=>{Ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},sd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ud,Dy=ie(()=>{ud=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ir,xo,$o=ie(()=>{be(),ve(),Me(),$n(),ir=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((a,s)=>`
      if (${pe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,pe(i,s+o,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},xo=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a[a.length-2],l=s[s.length-1],c=a[a.length-1],d=Fe(l),p=Fe(c),f=Fe(u),m=V.size(n)/d/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[V.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:c}];_n(t,x),x.push(...me(w,a,s)),y&&x.push(...me(e[2].dims)),x.push(...me(b));let v=M=>{let I=so("batch_dims",e[0].dataType,w.length),E=Y("a",e[0].dataType,a.length,p),k=Y("b",e[1].dataType,s.length,d),S=he("output",e[0].dataType,b.length,d),R=Xe(S.type.tensor),B=bn(t,S.type.value,R),q=[E,k],G="";if(y){let F=i?d:1;q.push(Y("bias",e[2].dataType,e[2].dims.length,F)),G=`${i?`value += bias[col / ${F}];`:`value += ${S.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];xn(t,H);let O=()=>{let F=`var a_data: ${E.type.value};`;for(let X=0;X<p;X++)F+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${d}];`;for(let X=0;X<f;X++){F+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${p}];`;for(let Q=0;Q<p;Q++)F+=`
            values[${X}] = fma(${k.type.value}(a_data${p===1?"":`[${Q}]`}), b_data${Q}, values[${X}]);
`}return F};return`
  ${M.registerUniforms(H).registerInternalVariables(I).declareVariables(...q,S)}
  ${M.mainStart()}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${ir("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${ir("b_indices",k,k.rank-2,I.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${O()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${G}
      ${B}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:v}}}),ld,cd,vo,Mo,dd,So,hd,Pr,Io=ie(()=>{be(),ve(),Me(),$n(),$o(),_o(),ld=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,cd=(e,t)=>e?`
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
        }`,vo=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:o,d=i?o:u,p=c/t[0],f=o/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&c%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${c/p}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${o};

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

  let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ld(i,r)}
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

          ${cd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Mo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,dd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",So=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:o,p=i?o:l;if(!(p%t[1]===0&&d%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=d/t[0],y=o/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Mo(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
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
      ${Mo(i,r)}
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
      ${dd(i)}
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
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},hd=(e,t,n,r,i=!1)=>{let[o,a,s,u]=r,l=Xe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ze(e,l)} {
      var value = ${Ze(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${ir("aIndices",a,a.rank-2,o.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ze(e,l)} {
      var value = ${Ze(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${ir("bIndices",s,s.rank-2,o.rank,"batchIndices")}
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
    `},Pr=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a.slice(0,-2),l=s.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=V.size(c),p=a[a.length-2],f=a[a.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],v=y?4:1,M=[...u,p,f/v],I=M.length,E=[...l,f,m/v],k=E.length,S=[d,p,m/v],R=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];_n(t,R),R.push(...me(c,M,E));let B=["rank","rank"],q=e.length>2;q&&(R.push(...me(e[2].dims)),B.push("rank")),R.push(...me(S));let G=H=>{let O=c.length,F=so("batchDims",e[0].dataType,O,1),X=Xe(e[0].dataType),Q=Y("a",e[0].dataType,I,v),le=Y("b",e[1].dataType,k,v),L=he("result",e[0].dataType,S.length,v),N=[Q,le];if(q){let j=i?v:1;N.push(Y("bias",e[2].dataType,e[2].dims.length,j))}let C=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];xn(t,C);let z=Xe(L.type.tensor),U=bn(t,L.type.value,z),P=hd(v,q,U,[F,Q,le,L],i);return`
  ${H.registerUniforms(C).registerInternalVariables(F).declareVariables(...N,L)}
  ${P}
  ${y?vo(w,b,X,F):So(w,b,X,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:G}}}),pd,fd,Uy=ie(()=>{be(),qt(),Me(),$n(),_o(),Dy(),Io(),pd=(e,t,n,r,i=!1,o,a=4,s=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=e?`
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
    var resData = ${Ze(a,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,v=e?t&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Ze(a,l)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Ze(a,l)}(0.0);`,M=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Ze(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Ze(s,l)}(0.0);`,I=Ze(u,l),E=Ze(e?a:s,l),k=Ze(e?s:a,l),S=bn(o,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?v:M}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?M:v}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${sd(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},fd=(e,t,n,r,i,o,a,s,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],v=r<=8?[4,1,1]:[4,4,1],M=[Math.ceil(w/x[0]/v[0]),Math.ceil(b/x[1]/v[1]),Math.ceil(d/x[2]/v[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${M}`);let I=y?l&&c%4!==0?3:4:1,E=x[1]*v[1],k=x[0]*v[0],S=Math.max(x[0]*I,x[1]),R=r%E===0,B=i%k===0,q=o%S===0,G=y?[I,4,4]:[1,1,1],H=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];_n(t,H),H.push(...me(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(H.push(...me(e[2].dims)),O.push("rank")),H.push(...me(n));let F=X=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];xn(t,Q);let le=y?4:1,L=Xe(e[0].dataType),N=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,C=Y("x",e[0].dataType,e[0].dims.length,I===3?1:I),z=Y("w",e[1].dataType,e[1].dims.length,le),U=[C,z],P=he("result",e[0].dataType,n.length,le);if(a){let j=Y("bias",e[2].dataType,e[2].dims.length,le);U.push(j),N+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${ud("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(Q).declareVariables(...U,P)}
        ${N}
        ${pd(l,R,B,q,a,t,G[0],G[1],G[2],L)}
        ${y?vo(v,x,L,void 0,!l,S):So(v,x,L,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${R};${B};${q};${E};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:M[0],y:M[1],z:M[2]},programUniforms:H}),getShaderSource:F}}}),md,To,or,gd,Eo,yd,wd,bd,Ly=ie(()=>{be(),qt(),ve(),Me(),$n(),_o(),md=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},To=e=>typeof e=="number"?[e,e,e]:e,or=(e,t)=>t<=1?e:e+(e-1)*(t-1),gd=(e,t,n,r=1)=>{let i=or(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Eo=(e,t,n,r,i)=>{i==null&&(i=gd(e,t[0],r[0]));let o=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(o[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return o},yd=(e,t,n,r,i,o,a,s,u,l)=>{let c,d,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Eo([t,n,r,1],[s,u,l],1,[i,o,a],e);d=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Eo([t,n,r,1],[s,u,l],1,[i,o,a],e[0]);d=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/o),f=Math.ceil(r/a);let m=(d-1)*i+s-t,y=(p-1)*o+u-n,w=(f-1)*a+l-r,b=Math.floor(m/2),x=m-b,v=Math.floor(y/2),M=y-v,I=Math.floor(w/2),E=w-I;c={top:v,bottom:M,left:I,right:E,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:p,outWidth:f}},wd=(e,t,n,r,i,o=!1,a="channelsLast")=>{let s,u,l,c,d;if(a==="channelsLast")[s,u,l,c,d]=e;else if(a==="channelsFirst")[s,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=t,[w,b,x]=To(n),[v,M,I]=To(r),E=or(f,v),k=or(m,M),S=or(y,I),{padInfo:R,outDepth:B,outHeight:q,outWidth:G}=yd(i,u,l,c,w,b,x,E,k,S),H=o?p*d:p,O=[0,0,0,0,0];return a==="channelsFirst"?O=[s,H,B,q,G]:a==="channelsLast"&&(O=[s,B,q,G,H]),{batchSize:s,dataFormat:a,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:B,outHeight:q,outWidth:G,outChannels:H,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:v,dilationHeight:M,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},bd=(e,t,n,r,i,o)=>{let a=o==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(md(u.x.map(w=>n[w]))/s[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=V.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];_n(t,p),p.push(...me(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...me(e[2].dims)),f.push("rank")),p.push(...me(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];xn(t,b);let x=1,v=Xe(e[0].dataType),M=Y("x",e[0].dataType,e[0].dims.length,c),I=Y("W",e[1].dataType,e[1].dims.length,x),E=[M,I],k=he("result",e[0].dataType,n.length,x),S="";if(m){let q=Y("bias",e[2].dataType,e[2].dims.length,x);E.push(q),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${v} {
          return bias[${a?pe("coords",4,5):pe("coords",1,5)}];
        }`}let R=Ze(c,v),B=bn(t,R,v);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...E,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,M.rank)};
              let d2 = ${a?pe("coords",M.rank-1,M.rank):pe("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${a?pe("coords",1,M.rank):pe("coords",2,M.rank)},
              ${a?pe("coords",2,M.rank):pe("coords",3,M.rank)},
              ${a?pe("coords",3,M.rank):pe("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?pe("uniforms.x_shape",1,M.rank):pe("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${a?pe("uniforms.x_shape",2,M.rank):pe("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${a?pe("uniforms.x_shape",3,M.rank):pe("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${a?pe("uniforms.x_shape",4,M.rank):pe("uniforms.x_shape",1,M.rank)};
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${B}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),_d,xd,Fy=ie(()=>{be(),ve(),Me(),$n(),_d=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",a=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?Fe(l):1,p=V.size(n)/d,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];_n(t,f),f.push(...me(a,[s[0],s[1],s[2],s[3]/d]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...me([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=he("output",e[0].dataType,n.length,d),x=Xe(b.type.tensor),v=bn(t,b.type.value,x),M=Y("x",e[0].dataType,a.length),I=Y("w",e[1].dataType,s.length,d),E=[M,I];i&&E.push(Y("b",e[2].dataType,e[2].dims,d));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];xn(t,k);let S=u?`
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
            let xVal = ${M.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${M.get("batch","input_channel","xHeight","xWidth")};
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
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${S}
    ${o}
    ${v}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},xd=(e,t,n,r)=>{let i=e.length>2,o=Fe(n[3]),a=Fe(n[2]),s=V.size(n)/o/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],c=[n[0],n[1],n[2],n[3]/o],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];_n(t,d),d.push(...me(u,l,c));let p=(a-1)*t.strides[1]+l[1],f=m=>{let y=he("output",e[0].dataType,c.length,o),w=Xe(y.type.tensor),b=bn(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,o),v=Y("w",e[1].dataType,l.length,o),M=[x,v];i&&M.push(Y("b",e[2].dataType,e[2].dims,o));let I=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return xn(t,E),`
  ${m.registerUniforms(E).declareVariables(...M,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${a}>;
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
          let w_val = ${v.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${I}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}}}),$d,Dr,vd,Ur,ko,Co,Md,Sd,Ao,Gy=ie(()=>{ve(),Uy(),Ly(),Io(),Fy(),$n(),$o(),tn(),$d=(e,t,n,r,i,o)=>{let a=e[0],s=e.slice(o?1:2,o?3:4),u=s.length,l=t[0],c=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),d=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-c[f]+i[f])/i[f]));return d.splice(0,0,a),d.splice(o?3:1,0,l),d},Dr=[2,3,1,0],vd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ur=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();Cr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ko=e=>{let t=bo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,a=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Co=(e,t,n,r)=>{let i=n.format==="NHWC",o=$d(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(dt(t[1],Dr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),E.push(k)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(xd(E,n,o,r),{inputs:E}):e.compute(_d(E,n,o,r),{inputs:E});return}let a=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],p=o[i?1:2],f=o[i?2:3],m=o[i?3:1],y=i&&c===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=o[0],k,S,R,B=[];if(i){let H=e.kernelCustomData.wT??e.compute(dt(t[1],Dr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),y){let O=s*u*l;k=t[0].reshape([1,E,O]),S=H.reshape([1,O,m]),R=[1,E,m]}else k=t[0].reshape([E,s*u,l]),S=H.reshape([1,l,m]),R=[E,p*f,m];B.push(k),B.push(S)}else k=t[0].reshape([E,l,s*u]),S=t[1].reshape([1,m,l]),R=[E,m,p*f],B.push(S),B.push(k);a&&B.push(t[2]);let q=R[2],G=B[0].dims[B[0].dims.length-1];q<8&&G<8?e.compute(xo(B,n,o,R,i,r),{inputs:B}):e.compute(Pr(B,n,o,R,i,r),{inputs:B});return}let w=!0,b=e.kernelCustomData.wT??e.compute(dt(t[1],Dr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];a&&x.push(t[2]);let v=i?p*f:m,M=i?m:p*f,I=c*d*l;e.compute(fd(x,n,o,v,M,I,a,w,r),{inputs:x})},Md=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),a=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Ur({...t,pads:i,strides:o,dilations:a,kernelShape:s},r);Co(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Sd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Ur(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=wd(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute(bd(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},Ao=(e,t)=>{if(vd(e.inputs,t),e.inputs[0].dims.length===3)Md(e,t);else if(e.inputs[0].dims.length===5)Sd(e,e.inputs,t);else{let n=Ur(t,e.inputs);Co(e,e.inputs,n)}}}),Id,Wy=ie(()=>{be(),qt(),ve(),Me(),Id=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",a=t.group,s=e[1].dims,u=s[2]/a,l=s[3],c=o?Fe(u):1,d=o&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/c)*c,f=u-p,m=o?Fe(l):1,y=o?l===1?c:m:1,w=V.size(i)/m,b=[Math.ceil(w/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],v=[t.strides[0],t.strides[1]],M=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],I=[t.dilations[0],t.dilations[1]],E=[M[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),M[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],k=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:v},{type:12,data:M},{type:12,data:I},{type:12,data:E},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...me(e[0].dims,e[1].dims)];r&&(S.push(...me(e[2].dims)),x.push("rank")),S.push(...me(i));let R=B=>{let q=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:v.length},{name:"filter_dims",type:"u32",length:M.length},{name:"dilations",type:"u32",length:M.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Xe(e[0].dataType),H=o?1:2,O=o?2:3,F=o?3:1,X=Y("W",e[1].dataType,e[1].dims.length,y),Q=Y("Dy",e[0].dataType,e[0].dims.length,c),le=[Q,X];r&&le.push(Y("bias",e[2].dataType,[i[F]].length,m));let L=he("result",e[0].dataType,i.length,m),N=()=>{let U="";if(d)c===4?U+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?U+=`
          dotProd = dotProd + dot(vec4<${G}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(U+=`
          dotProd = dotProd + dot(vec4<${G}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(U+=`
                  let xValue = ${o?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,c===1)U+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let P=0;P<c;P++)U+=`
            let wValue${P} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${P}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${P}] * wValue${P};`;return U},C=()=>{if(f===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let U="";if(c===1){U+="dotProd = dotProd";for(let P=0;P<f;P++)U+=`
            + ${Q.getByOffset(`x_offset + ${P}`)} * ${X.getByOffset(`w_offset + ${P}`)}`;U+=";"}else if(c===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);U+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return U},z=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",F)};
            let r = ${L.indicesGet("outputIndices",H)};
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
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
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
                ${d?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${N()}
                  inputChannel = inputChannel + ${d?4:c};
                }
                ${C()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${B.registerUniforms(q).declareVariables(...le,L)}
      ${B.mainStart()}
      ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${m}${d}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:R}}}),Td,Ed,kd,Ro,Cd,Ad,Oo,Rd,Od,qy=ie(()=>{Wy(),$n(),tn(),Td=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,Ed=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},kd=(e,t,n,r,i,o,a,s,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-c-(s?1:0);m<c;++m,++y){let w=e[y],b=d?w*a[m]:l[m],x=Td(w,a[m],o[m],t[y],n[m],b);Ed(x,r,o,m,m+c),d&&l.push(a[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-o[m]-o[m+c])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Ro=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),a=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}kd(s,n,u,e.autoPad,e.group,i,l,r,a,o);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:a,outputShape:o,dilations:u,strides:l}),c},Cd=e=>{let t=bo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,a=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,outputPadding:c,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ad=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((a,s)=>a+s,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((a,s)=>a+s,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((a,s)=>a+s,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((a,s)=>a+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Oo=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(dt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(Id(o,n,r),{inputs:o})},Rd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Ro({...t,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:u},r);Oo(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Od=(e,t)=>{if(Ad(e.inputs,t),e.inputs[0].dims.length===3)Rd(e,t);else{let n=Ro(t,e.inputs);Oo(e,e.inputs,n)}}}),Nd,zd,Bd,Vy=ie(()=>{be(),ve(),We(),Me(),Nd=(e,t,n,r)=>{let i=V.size(t),o=t.length,a=Y("input",e,o),s=he("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=V.normalizeAxis(u,o),c=d=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",o),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,s)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...me(t,t)]}),getShaderSource:c}},zd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Nd(r,n,i,t),{inputs:[0]})},Bd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Oe({exclusive:t,reverse:n})}}),Pd,Dd,Ud,Ld,Fd,Hy=ie(()=>{be(),ve(),We(),Me(),Pd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Dd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},Ud=(e,t)=>{let n,r,i,o,a,s,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,o]=e.dims,a=c?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],s=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],s=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(a),p=d.dims.length,f=e.dataType,m=Y("a",f,p),y=he("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Dd(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],v=V.size(x),M=d.dims,I=V.sortBasedOnPerm(M,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...me(M,I)]}},getShaderSource:w}},Ld=(e,t)=>{Pd(e.inputs),e.compute(Ud(e.inputs[0],t))},Fd=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Lr,ar,No,Gd,Wd,qd,Vd,zo,Hd,jd,Kd,jy=ie(()=>{be(),ve(),We(),Me(),Lr="[a-zA-Z]|\\.\\.\\.",ar="("+Lr+")+",No="^"+ar+"$",Gd="("+ar+",)*"+ar,Wd="^"+Gd+"$",qd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Vd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Wd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,a)=>{let s=e[a].dims.slice();if(!o.match(RegExp(No)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,s,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,a])=>a.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp(ar)))throw new Error("Invalid RHS");(i=r.match(RegExp(Lr,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(o);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,a=[],s=0;if(!e.match(RegExp(No))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Lr,"g")),l=new qd(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,d+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[s++],r)}),l}},zo=e=>e+"_max",Hd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>Y(`input${c}`,t,l)),o=V.size(r),a=he("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((M,I)=>{var E;if(n.rhs.symbolToIndices.has(I)){let k=(E=n.rhs.symbolToIndices.get(I))==null?void 0:E[0];k!==void 0&&n.lhs.forEach((S,R)=>{if(M.inputIndices.includes(R)){let B=S.symbolToIndices.get(I);if(B===void 0)throw new Error("Invalid symbol error");B.forEach(q=>{c.push(`${i[R].indicesSet(`input${R}Indices`,q,a.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(M.inputIndices.includes(S)){let R=k.symbolToIndices.get(I);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(B=>{m.push(`${i[S].indicesSet(`input${S}Indices`,B,`${I}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${zo(I)}; ${I}++) {`),w.push("}")});let v=x?[...c,`let sum = ${i.map((M,I)=>M.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,p,...y,...m,d,...b,f,...w];return`
            ${l.registerUniforms(s.map(M=>({name:`${zo(M)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((M,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${v.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:o});let c=e.map((d,p)=>[...me(d)]).reduce((d,p)=>d.concat(p),l);return c.push(...me(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}},getShaderSource:u}},jd=(e,t)=>{let n=new Vd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,a)=>o.dims);e.compute(Hd(i,e.inputs[0].dataType,n,r))},Kd=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),Yd,Bo,Xd,Qd,Zd,Ky=ie(()=>{be(),ve(),Me(),Yd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Bo=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Xd=(e,t)=>e.length>t.length?Bo(e,t):Bo(t,e),Qd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Xd(t,n),i=e[0].dataType,o=i===9||V.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(V.size(r)/s),l=d=>{let p=Y("input",i,t.length,a),f=he("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${a}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},c=[{type:12,data:u},...me(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Zd=e=>{Yd(e.inputs),e.compute(Qd(e.inputs),{inputs:[0]})}}),Jd,eh,Yy=ie(()=>{be(),ve(),Me(),wo(),Jd=e=>{let t=e[0].dataType,n=V.size(e[0].dims),r=V.size(e[1].dims),i=r%4===0,o=a=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=he("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(s,u,l)}

    ${go(et(t))}

    ${a.mainStart(zn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",yo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/zn/4)}})}},eh=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?Nc(e):e.compute(Jd(e.inputs))}}),th,nh,rh,ih,Xy=ie(()=>{be(),ve(),We(),Me(),th=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},nh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=V.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(o,1,...r);let s=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(V.size(a)/u),c=[{type:12,data:l},{type:6,data:s},{type:12,data:o},...me(e[0].dims,e[1].dims,a)],d=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=he("output",e[0].dataType,a.length,u),w=x=>{let v=r.length,M=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<v;I++)M+=`${v>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;M+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,E=0;I<i;I++)I===o?(M+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,E+=v):(M+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return M},b;if(e[0].dataType===9){let x=(v,M,I="")=>`
          let outputIndices${M} = ${y.offsetToIndices(`outputOffset + ${M}u`)};
          ${w(M)};
          let offset${M} = ${f.indicesToOffset(`dataIndices${M}`)};
          let index${M} = offset${M} / 4u;
          let component${M} = offset${M} % 4u;
          ${v}[${M}] = ${I}(${f.getByOffset(`index${M}`)}[component${M}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},rh=e=>Oe({axis:e.axis}),ih=(e,t)=>{let n=e.inputs;th(n),e.compute(nh(e.inputs,t))}}),oh,ah,sh,Qy=ie(()=>{be(),ve(),Me(),oh=(e,t,n,r,i,o,a,s,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:u}],c=[o];l.push(...me(t.dims,c));let d=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=he("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},ah=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,a=o[o.length-1],s=V.sizeToDimension(o,o.length-1),u=V.sizeFromDimension(r,t.batchDims+a),l=V.sizeToDimension(r,t.batchDims),c=V.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(a),f=u;for(let M=0;M<a;++M)p[a-1-M]=f,f*=r[t.batchDims+a-1-M];let m=oh(e,n[1],p,t.batchDims,r,s,d,c,a),y=t.batchDims+a;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),b=V.size(w),x=[{type:12,data:b},{type:12,data:u},...me(n[0].dims,m.dims,w)],v=M=>{let I=Y("data",n[0].dataType,n[0].dims.length),E=Y("slice_offsets",12,m.dims.length),k=he("output",n[0].dataType,w.length);return`
          ${M.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,k)}
            ${M.mainStart()}
            ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:v},{inputs:[n[0],m]})},sh=e=>({batchDims:e.batch_dims,cacheKey:""})}),uh,lh,ch,dh,Zy=ie(()=>{be(),ve(),We(),Me(),uh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],a=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===o.dims[u]:s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,u)=>s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},lh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=V.normalizeAxis(t.gatherAxis,i),a=V.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(o,1,...r);let u=V.size(s),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:a},{type:12,data:o},{type:12,data:t.blockSize},...me(...e.map((f,m)=>f.dims),s)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),b=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=he("output",l,s.length),v=[m,y,w];b&&v.push(b);let M=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(M).declareVariables(...v,x)}
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
          index_from_indices += ${n[o]};
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},ch=(e,t)=>{let n=e.inputs;uh(n,t),e.compute(lh(e.inputs,t))},dh=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hh,ph,fh,mh,Jy=ie(()=>{be(),ve(),We(),Me(),hh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ph=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,a=e[1].dataType,s=V.normalizeAxis(t.axis,i),u=n[s],l=o.slice(0),c=V.size(l),d=Y("input",r,i),p=Y("indicesInput",a,o.length),f=he("output",r,l.length),m=[{type:12,data:c},{type:6,data:u},{type:12,data:s}];return m.push(...me(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,p,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},fh=e=>Oe({axis:e.axis}),mh=(e,t)=>{let n=e.inputs;hh(n),e.compute(ph(e.inputs,t))}}),gh,yh,wh,bh,ew=ie(()=>{be(),ve(),Me(),gh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,a]=Eu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),c=Math.ceil(i/u),d=!0,p=V.size(s),f=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...me(e[2].dims)),m.push("rank")),f.push(...me(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let v=t.alpha===1?"":"value *= uniforms.alpha;",M=Y("a",e[0].dataType,e[0].dims),I=Y("b",e[1].dataType,e[1].dims),E=M.type.value,k=null,S=[M,I];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),S.push(k));let R=he("output",e[0].dataType,s.length);S.push(R);let B=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(B).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${v}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${E}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=Y("a",e[0].dataType,e[0].dims),v=Y("b",e[1].dataType,e[1].dims),M=null,I=[x,v];e.length===3&&(M=Y("c",e[2].dataType,e[2].dims.length),I.push(M));let E=he("output",e[0].dataType,s.length);I.push(E);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",R="";t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
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
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let B=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(k).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${v.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${S}
      }
      workgroupBarrier();
    }

    ${B}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},wh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bh=(e,t)=>{gh(e.inputs),e.compute(yh(e.inputs,t))}}),Nt,Vt,vn,Mn,_h,xh,$h,vh,Mh,Sh,Ih,Th,Eh,kh,tw=ie(()=>{be(),ve(),We(),Me(),[Nt,Vt,vn,Mn]=[0,1,2,3],_h=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},xh=`
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
`,$h=e=>`
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
`,vh=e=>`
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
`,Sh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Nt}] = batch;
     indices[${Vt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${vn}] = u32(r);
            indices[${Mn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${vn}] = u32(clamp(r, 0, H - 1));
          indices[${Mn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${vn}] = gs_reflect(r, border[1], border[3]);
          indices[${Mn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ih=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Nt}], indices[${Vt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Nt}], indices[${Vt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Nt}], indices[${Vt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Nt}], indices[${Vt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Nt}], indices[${Vt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Nt}], indices[${Vt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Th=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Nt,Vt,vn,Mn]=[0,3,1,2]);let a=he("output",e[0].dataType,o.length),s=n.type.value,u=V.size(o),l=[{type:12,data:u},...me(e[0].dims,r,o)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${xh}
  ${$h(s)}
  ${vh(t)}
  ${Mh(t)}
  ${Sh(n,s,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${vn}]);
      let W_in = i32(uniforms.x_shape[${Mn}]);

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
      var grid_indices = vec3<u32>(indices[${Nt}], indices[${vn}], indices[${Mn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ih(a,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=V.size(o);return{outputs:[{dims:o,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:c}},Eh=(e,t)=>{_h(e.inputs),e.compute(Th(e.inputs,t))},kh=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),rt,Ch,Ah,Po,Rh,sr,Oh,Nh=ie(()=>{be(),ve(),We(),no(),fo(),Me(),tn(),rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ch=(e,t)=>{let n=e[0],r=rt(e,1),i=rt(e,2),o=rt(e,3),a=rt(e,4),s=rt(e,5),u=rt(e,6),l=rt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=d,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&V.size(u.dims)&&V.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&V.size(u.dims)||l&&V.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&V.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(o&&V.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,v=0;if(a&&V.size(a.dims)>0){v=8;let k=a.dims;throw k.length===1?k[0]===c?v=1:k[0]===3*c+2&&(v=3):k.length===2&&k[0]===c&&k[1]===x&&(v=5),v===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let M=!1,I=p;if(i&&V.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],M=!0}}let E=!1;if(a&&V.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&V.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:E,passPastInKv:M,qkvFormat:b}},Ah=e=>Oe({...e}),Po=Oe({perm:[0,2,1,3]}),Rh=(e,t,n,r,i,o,a)=>{let s=[r,i,o],u=V.size(s),l=[{type:12,data:u},{type:12,data:a},{type:12,data:o}],c=d=>{let p=he("qkv_with_bias",t.dataType,s),f=Y("qkv",t.dataType,s),m=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(f,m,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,o,a,s)=>{let u=o;if(a&&V.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Rh(e,o,a,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(dt(u,Po.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(dt(u,Po.perm),{inputs:[u],outputs:[-1]})[0]},Oh=(e,t)=>{let n=Ch(e.inputs,t),r=e.inputs[0],i=rt(e.inputs,1),o=rt(e.inputs,2),a=rt(e.inputs,3),s=rt(e.inputs,4),u=rt(e.inputs,5),l=rt(e.inputs,6),c=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&o&&i.dims.length===4&&o.dims.length===4,p=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(d)return nr(e,p,i,o,s,void 0,l,c,u,n);if(!i||!o)throw new Error("key and value must be provided");let f=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),m=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,a,2*n.hiddenSize);nr(e,p,f,m,s,void 0,l,c,u,n)}}),zh,Bh,Ph,Dh,Do,Uh,Lh,Fh=ie(()=>{be(),ve(),We(),Me(),zh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Bh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Oe({numOutputs:r,axis:t.axis,splitSizes:n})},Ph=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Dh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Do=(e,t)=>{let n=e[0].dims,r=V.size(n),i=e[0].dataType,o=V.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){d+=t.splitSizes[m],u[m]=d;let y=n.slice();y[o]=t.splitSizes[m],c.push(y),a[m]=he(`output${m}`,i,y.length),l.push({dims:c[m],dataType:e[0].dataType})}p.push({type:12,data:u},...me(n,...c));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...a)}
  ${Ph(u.length)}
  ${Dh(a)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Uh=(e,t)=>{zh(e.inputs);let n=e.inputs.length===1?t:Bh(e.inputs,t);e.compute(Do(e.inputs,n),{inputs:[0]})},Lh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:r,splitSizes:n})}}),Gh,Fr,Wh,qh=ie(()=>{be(),ve(),We(),Me(),Gh=(e,t)=>{let[n,r,i,o]=e,{numHeads:a,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!V.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=V.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/a;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Fr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,a=e[0].dims[0],s=V.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,c=e[2].dims[1],d=i===0?c*2:l/r,p=new Array(a,u,l/d,d-c),f=V.computeStrides(p),m=[{type:1,data:o},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...me(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),v=Y("cos_cache",e[2].dataType,e[2].dims.length),M=Y("sin_cache",e[3].dataType,e[3].dims.length),I=he("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,v,M,I)}

        ${w.mainStart(zn)}
          let half_rotary_emb_dim = uniforms.${v.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",he("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(p)/zn)},programUniforms:m})}},Wh=(e,t)=>{Gh(e.inputs,t),e.compute(Fr(e.inputs,t))}}),Vh,Hh,Uo,jh,Kh,nw=ie(()=>{We(),be(),fo(),Nh(),Fh(),tn(),qh(),Me(),Vh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);f&&(c=m*t.numHeads);let y=o&&o.dims.length!==0,w=a&&a.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,v=!1,M=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');M=i.dims[1]*i.dims[3],v=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=I.dims.reduce((k,S)=>k*S,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let k=0;k<I.dims.length;k++)if(I.dims[k]!==1&&I.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${I.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:M,headSize:m,vHeadSize:Math.floor(M/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:v,qkvFormat:b}},Hh=Oe({perm:[0,2,1,3]}),Uo=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(dt(r,Hh.perm),{inputs:[r],outputs:[-1]})[0]),r},jh=(e,t,n,r)=>{let i=7,o=["type","type"],a=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=c=>{let d=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=he("pos_ids",i,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(m).declareVariables(d,p,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Kh=(e,t)=>{var M;let n=Vh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((M=e.inputs[1])==null?void 0:M.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Oe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[p,f,m]=!i&&!o?e.compute(Do([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let I=e.compute(jh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],k=e.inputs[8],S=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[p,I,E,k],B=[-1];y=e.compute(Fr(R,S),{inputs:R,outputs:B})[0],R.splice(0,1,f);let q=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Fr(R,q),{inputs:R,outputs:B})[0]}let b=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Uo(e,t.doRotary?w:f,n),v=Uo(e,m,n);nr(e,b,x,v,void 0,void 0,a,s,void 0,n,u,l)}}),Lo,Yh,Xh,Qh,rw=ie(()=>{be(),ve(),tn(),Me(),Lo=(e,t,n,r,i,o,a,s)=>{let u=Fe(o),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*a,p=64;d===1&&(p=256);let f=[i,a,o/u],m=[i,a,2],y=["rank","type","type"],w=[];w.push(...me(f,m));let b=x=>{let v=Y("x",t.dataType,3,u),M=Y("scale",n.dataType,n.dims),I=Y("bias",r.dataType,r.dims),E=he("output",1,3,2),k=[v,M,I,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${p}>;
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
      let value = ${l}(${v.get("batch","channel","h")});
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Yh=(e,t,n)=>{let r=t[0].dims,i=r,o=2,a=r[0],s=r[1],u=V.sizeFromDimension(r,o),l=Fe(u),c=V.size(i)/l,d=Lo(e,t[0],t[1],t[2],a,u,s,n.epsilon),p=[a,s,u/l],f=[a,s],m=["type","none"],y=w=>{let b=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),v=he("output",t[0].dataType,p.length,l),M=[b,x,v];return`
  ${w.registerUniform("output_size","u32").declareVariables(...M)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${v.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${v.type.value}(scale_shift.x) + ${v.type.value}(scale_shift.y);
      ${v.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...me(p,f,p)]}),getShaderSource:y},{inputs:[t[0],d]})},Xh=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],a=r[r.length-1],s=V.sizeFromDimension(r,1)/a,u=Fe(a),l=V.size(i)/u,c=[{type:12,data:s},{type:12,data:Math.floor(a/u)}],d=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(dt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Lo(e,m,t[1],t[2],o,s,a,n.epsilon),w=b=>{let x=Xe(t[0].dataType),v=u===1?"vec2f":`mat${u}x2f`,M=k=>{let S=k===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${S}))`;case 2:return`vec2<${x}>(${R}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${R}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=Y("input",t[0].dataType,t[0].dims,u),E=he("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${v}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${M(0)}, ${M(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},Qh=(e,t)=>{t.format==="NHWC"?Xh(e,e.inputs,t):Yh(e,e.inputs,t)}}),Zh,Jh,ep,iw=ie(()=>{be(),ve(),Me(),Zh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Jh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],a=!r&&e[2],s=i,u=V.normalizeAxis(t.axis,i.length),l=V.sizeToDimension(i,u),c=V.sizeFromDimension(i,u),d=V.size(o.dims),p=a?V.size(a.dims):0;if(d!==c||a&&p!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=Fe(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];a&&y.push("type");let b=n>1,x=n>2,v=I=>{let E=Xe(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",o.dataType,o.dims,m)];a&&k.push(Y("bias",a.dataType,a.dims,m)),k.push(he("output",e[0].dataType,s,m)),b&&k.push(he("mean_data_output",1,f)),x&&k.push(he("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(S).declareVariables(...k)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ao("f32",m)};
    var mean_square_vector = ${ao("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Bn(E,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${en("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${en("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Bn(E,m,"x[j + offset]")};
      let f32scale = ${Bn(E,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Bn(E,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},M=[{dims:s,dataType:e[0].dataType}];return b&&M.push({dims:f,dataType:1}),x&&M.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:M,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:v}},ep=(e,t)=>{Zh(e.inputs),e.compute(Jh(e.inputs,t,e.outputCount))}}),tp,np,ow=ie(()=>{ve(),$o(),Io(),tp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},np=e=>{tp(e.inputs);let t=Nn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(xo(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=V.size(e.inputs[0].dims.slice(0,-2)),a=V.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],c=[s,u];e.compute(Pr(c,{activation:""},t,l),{inputs:c})}else e.compute(Pr(e.inputs,{activation:""},t))}}}),rp,ip,op,ap,sp,aw=ie(()=>{be(),ve(),We(),Me(),rp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,a=e[1];if(!V.areEqual(a.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(V.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(V.size(u)!==l)throw new Error("zeroPoints input size error.")}},ip=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=Fe(t.k),p=Fe(l),f=Fe(a),m=s.concat([i,a]),y=i>1&&a/f%2===0?2:1,w=V.size(m)/f/y,b=64,x=[],v=[u,i,o/d],M=V.convertShape(e[1].dims).slice();M.splice(-1,1,l/p),x.push(...me(v)),x.push(...me(M)),x.push(...me(e[2].dims)),e.length===4&&x.push(...me(V.convertShape(e[3].dims)));let I=[u,i,a/f];x.push(...me(I));let E=k=>{let S=v.length,R=Y("a",e[0].dataType,S,d),B=Y("b",12,M.length,p),q=Y("scales",e[2].dataType,e[2].dims.length),G=[R,B,q],H=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;H&&G.push(H);let O=I.length,F=he("output",e[0].dataType,O,f),X=Xe(e[0].dataType),Q=(()=>{switch(d){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${d}-component is not supported.`)}})(),le=Math.floor(32/t.bits),L=Math.floor(le/8),N=()=>{let U="";for(let P=0;P<L;P++){let j=P*t.bits*4,ne=j+t.bits;U+=`
          // reuse a data (pass ${P})
            var input_offset${P>0?P:""} = ${P===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${P>0?P:""}: ${Q};
            for (var j${P>0?P:""}: u32 = 0; j${P>0?P:""} < ${8/d}; j${P>0?P:""}++) {
              a_data${P>0?P:""}[j${P>0?P:""}] = ${R.getByOffset(`input_offset${P>0?P:""}`)};
              input_offset${P>0?P:""}++;
            }
          `;for(let J=0;J<f*y;J++)U+=`
            b_value = ${p===1?`b${J}_data`:`b${J}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${P*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ne}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(de,$e)=>`${X}(b_value_lower[${$e}]), ${X}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Q}(${Array.from({length:8},(de,$e)=>`(b_quantized_values[${$e}] - ${H?`zero_point${J}`:"zero_point"}) * scale${J}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${H?`zero_point${J}`:"zero_point"}`).join(",")})) * scale${J};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(J/f)}]${f>1?`[${J%f}]`:""} += ${Array.from({length:8/d},(de,$e)=>`${d===1?`a_data${P>0?P:""}[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data${P>0?P:""}[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `}return U},C=()=>{let U=`
            var col_index = col * ${f};
            ${H?`
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
            `;for(let P=0;P<f*y;P++)U+=`
            let scale${P} = ${q.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${P} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return U},z=()=>{let U=`col_index = col * ${f};`;for(let P=0;P<f*y;P++)U+=`
            let b${P}_data = ${B.getByIndices(`${B.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,U};return`
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
            var word_offset: u32 = block * ${t.blockSize/d};
            ${C()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${z()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${N()}
                word_offset += ${le/d};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:E}},op=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=Fe(t.k),p=Fe(l),f=s.concat([i,a]),m=128,y=a%8===0?8:a%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,v=x/d,M=x/t.blockSize,I=V.size(f)/y,E=[],k=[u,i,o/d],S=V.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),E.push(...me(k)),E.push(...me(S)),E.push(...me(e[2].dims)),e.length===4&&E.push(...me(V.convertShape(e[3].dims)));let R=[u,i,a];E.push(...me(R));let B=q=>{let G=k.length,H=Y("a",e[0].dataType,G,d),O=Y("b",12,S.length,p),F=Y("scales",e[2].dataType,e[2].dims.length),X=[H,O,F],Q=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;Q&&X.push(Q);let le=R.length,L=he("output",e[0].dataType,le),N=Xe(e[0].dataType),C=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${N}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${N}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${N}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${N}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${q.declareVariables(...X,L)}
        ${q.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${M} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${M} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${N}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${N}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let z=Math.floor(b/8),U="";for(let P=0;P<z;P++){let j=P*t.bits*4,ne=j+t.bits;U+=`
              ${C()}
              {${t.bits===2?`
                let half_word = b_value >> ${P*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${N}>(${Array.from({length:4},(J,de)=>`${N}(b_value_lower[${de}]), ${N}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${N}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(J,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return U})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:I},programUniforms:E}),getShaderSource:B}},ap=(e,t)=>{rp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(op(e.inputs,t)):e.compute(ip(e.inputs,t))},sp=e=>Oe(e)}),up,lp,cp,dp,hp,pp,fp,mp,gp,sw=ie(()=>{be(),ve(),Me(),up=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},lp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},cp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},dp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},hp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},pp=(e,t,n)=>{switch(n.mode){case 0:return lp(e,t,n.pads.length);case 1:return cp(e,t,n.pads.length);case 2:return dp(e,t,n.pads.length);case 3:return hp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},fp=(e,t)=>{let n=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=V.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...me(e[0].dims,n));let s=["rank"],u=l=>{let c=he("output",e[0].dataType,n.length),d=Y("x",e[0].dataType,r.length),p=d.type.value,f=pp(c,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(n)/64)},programUniforms:o}),getShaderSource:u}},mp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)o[Number(s[u])]=Number(n[u]),o[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>o[Number(u)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:t.mode,value:r,pads:a}}else return t},gp=(e,t)=>{up(e.inputs);let n=mp(e.inputs,t);e.compute(fp(e.inputs,n),{inputs:[0]})}}),ur,Fo,Go,Wo,qo,yp,wp,Vo,Ho,bp,_p,jo,xp,$p,Ko,vp,Mp,Sp,Ip,uw=ie(()=>{pt(),be(),ve(),Me(),ur=e=>{if(Be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fo=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Cr.adjustPoolAttributes(n,i,a,s,u,l);let c=Cr.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),d=Object.assign({},t);o?Object.assign(d,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey});let p=c.slice();return p.push(p.splice(1,1)[0]),[d,r?p:c]},Go=(e,t)=>{let n=t.format==="NHWC",r=V.size(e),i=V.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);o.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),o.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=V.computeStrides(t.kernelShape);o.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[o,a,!!u,!1,!1]}},Wo=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p=i.format==="NHWC",f=t.type.value,m=he("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,i.kernelShape.length===2){let v=n-(p?3:2);d?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${v}] < 0 || xIndices[${v}] >= uniforms.x_shape[${v}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sh - uniforms.phStart + j;
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
              ${a}

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
                ${o}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
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
              ${a}

              output[global_idx] = value;
            }`}},qo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,yp=e=>`${qo(e)};${e.countIncludePad}`,wp=e=>`${qo(e)};${e.storageOrder};${e.dilations}`,Vo=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ho=(e,t,n,r)=>{let[i,o]=Fo(t,r,n),a=Y("x",t.dataType,t.dims.length),s=a.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[c,d,p,f,m]=Go(o,i);c.push(...me(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(o)/64)},programUniforms:c}),getShaderSource:w=>Wo(w,a,t.dims.length,o.length,i,u,l,0,d,p,f,m)}},bp=e=>{let t=e.count_include_pad!==0,n=Vo(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:yp(r)}},_p=(e,t)=>{ur(e.inputs),e.compute(Ho("AveragePool",e.inputs[0],!1,t))},jo={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xp=e=>{let t=e.format;return{format:t,...jo,cacheKey:t}},$p=(e,t)=>{ur(e.inputs),e.compute(Ho("GlobalAveragePool",e.inputs[0],!0,t))},Ko=(e,t,n,r)=>{let[i,o]=Fo(t,r,n),a=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[c,d,p,f,m]=Go(o,i);return c.push(...me(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(o)/64)},programUniforms:c}),getShaderSource:y=>Wo(y,u,t.dims.length,o.length,i,a,s,t.dataType===10?-65504:-1e5,d,p,f,m)}},vp=(e,t)=>{ur(e.inputs),e.compute(Ko("MaxPool",e.inputs[0],!1,t))},Mp=e=>{let t=e.storage_order,n=e.dilations,r=Vo(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:wp(i)}},Sp=e=>{let t=e.format;return{format:t,...jo,cacheKey:t}},Ip=(e,t)=>{ur(e.inputs),e.compute(Ko("GlobalMaxPool",e.inputs[0],!0,t))}}),Tp,Ep,kp,Cp,lw=ie(()=>{be(),ve(),We(),Me(),Tp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ep=(e,t)=>{let n=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,a=e[1].dataType,s=V.size(o),u=r===3||r===2,l=u?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(V.size(d.dims)/4)]:d.dims:void 0,f=c.length===0||c.length===1&&c[0]===1,m=f===!1&&c.length===1,y=Fe(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,v=Y("input",u?12:r,l.length,x),M=Y("scale",a,c.length),I=d?Y("zero_point",u?12:r,p.length):void 0,E=he("output",a,o.length,b),k=[v,M];I&&k.push(I);let S=[l,c];d&&S.push(p);let R=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...me(...S,o)],B=q=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${q.registerUniforms(G).declareVariables(...k,E)}
      ${q.mainStart()}
          ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${M.getByOffset("0")}`:m?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${M.getByOffset("scale_index")};`:`
            var scale_indices: ${M.type.indices} = output_indices;
            let index = ${M.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${M.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${M.getByIndices("scale_indices")};`};

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
                let zero_point_offset = ${M.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:B,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:R})}},kp=(e,t)=>{Tp(e.inputs,t),e.compute(Ep(e.inputs,t))},Cp=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),Ap,Rp,Op,cw=ie(()=>{pt(),be(),Me(),Ap=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},Rp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],a=i,s=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...me(o)],u=l=>{let c=he("output",r,o.length),d=c.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},Op=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Be.webgpu.validateInputContent&&Ap(t,n,r),e.compute(Rp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Np,zp,Bp,Pp,dw=ie(()=>{be(),ve(),We(),Me(),Np=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${o}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,a=Math.ceil(V.sizeToDimension(r,r.length-1)/o),s=r[r.length-1],u=V.sizeFromDimension(n,s),l=[{type:12,data:a},{type:12,data:s},{type:12,data:u},...me(e[1].dims,e[2].dims,i)],c=d=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,o),m=t.reduction!=="none"&&t.reduction!==""?Wu("output",e[0].dataType,i.length):he("output",e[0].dataType,i.length,o);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,f,m)}
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
    ${Np(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c}},Bp=e=>Oe({reduction:e.reduction}),Pp=(e,t)=>{e.compute(zp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Dp,Up,Lp,Yo,Fp,Gp,Wp,qp,Vp,Hp,jp,Kp,Xo,Yp,Xp,Qp,Zp,Jp,ef,tf,hw=ie(()=>{be(),ve(),We(),Me(),Dp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Up=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},Lp=(e,t,n,r,i,o)=>{let[a,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>o.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Dp(r,t),t.axes.length>0&&Up(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Yo=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Fp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Yo("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Yo("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Gp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Wp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,a)=>{r[o]=i[a],r[a+n]=i[t.length+a]}),r):i},qp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,a)=>i[o]=n[a])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,a)=>Math.round(o*t[a]))}return i},Vp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,a)=>i[a]=Math.round(o*t[a]))),i},Hp=(e,t,n,r,i)=>`
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
    }`,jp=(e,t,n,r,i,o,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",o)};
          var roi_hi = ${pe("uniforms.roi",`i + ${n.length}`,o)};
          var input_shape_i = ${pe("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",r.length)};
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
    }`,Kp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Xo=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Yp=(e,t,n,r,i)=>{let[o,a,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Xo(e,u,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${a}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${o}])`:"0"};
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
    }`},Xp=(e,t,n,r,i,o,a,s,u,l)=>{let c=n.length===2,[d,p]=c?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===d?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${o[y]}, ${o[y]} + ${n.length});
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
          data[i + 1] = ${y===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(d)};
    ${m(p)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
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
    `},Qp=(e,t,n,r,i)=>{let[o,a,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Xo(e,l,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${s}];
      var width:${c} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${o}])`:"0"};

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
    }`},Zp=(e,t,n,r,i,o)=>{let a=e.dims,s=Wp(o,t.axes,a.length),u=qp(a,r,i,t.axes),l=r.slice();r.length===0&&(l=a.map((x,v)=>x===0?1:u[v]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Vp(a,l,t)));let c=he("output",e.dataType,u.length),d=Y("input",e.dataType,a.length),p=V.size(u),f=a.length===u.length&&a.every((x,v)=>x===u[v]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=x=>`
      ${f?"":`
      ${Fp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Kp(d,a)};
              ${Gp(t.nearestMode,n,w)};
              ${jp(d,c,a,u,l.length,s.length,m)};
              `;case"linear":return`
              ${Hp(c,a,u,l.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Yp(d,c,a,m,y)}`;if(a.length===3||a.length===5)return`${Qp(d,c,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Xp(d,c,a,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(d,c)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...me(a,u)]})}},Jp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ef=(e,t)=>{let n=[],r=[],i=[],o=Jp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Lp(e.inputs,t,o,n,r,i),e.compute(Zp(e.inputs[0],t,o,n,r,i),{inputs:[0]})},tf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,a=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),nf,rf,of,pw=ie(()=>{be(),ve(),Me(),nf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},rf=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,a=V.size(o),s=o,u=a,l=o.slice(-1)[0],c=r?o.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=Fe(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],v=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,b),Y("skip",e[1].dataType,e[1].dims,b),Y("gamma",e[2].dataType,e[2].dims,b)];d&&k.push(Y("beta",e[3].dataType,e[3].dims,b)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,b)),k.push(he("output",e[0].dataType,s,b)),f&&k.push(he("mean_output",1,c)),m&&k.push(he("inv_std_output",1,c)),y&&k.push(he("input_skip_bias_sum",e[0].dataType,s,b));let S=Xe(e[0].dataType),R=Xe(1,b);return`

      ${I.registerUniforms(E).declareVariables(...k)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

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
          let f32_value = ${Bn(S,b,"value")};
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
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},M=[{dims:s,dataType:e[0].dataType}];return n>1&&M.push({dims:c,dataType:1}),n>2&&M.push({dims:c,dataType:1}),n>3&&M.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:v,getRunData:()=>({outputs:M,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},of=(e,t)=>{nf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(rf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),af,lr,sf,Qo,uf,lf,cf,df,fw=ie(()=>{be(),ve(),We(),Me(),af=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},lr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},sf=(e,t)=>{if(e.length>1){let n=lr(e,1),r=lr(e,2),i=lr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Oe({starts:n,ends:r,axes:i})}else return t},Qo=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},uf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,lf=(e,t)=>{let n=e[0].dims,r=V.size(n),i=t.axes.length>0?V.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=lr(e,4);o.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=t.starts.map((b,x)=>Qo(b,x,n,i,o)),s=t.ends.map((b,x)=>Qo(b,x,n,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(a.splice(b,0,0),s.splice(b,0,n[b]),o.splice(b,0,1));let u=o.map(b=>Math.sign(b));o.forEach((b,x,v)=>{if(b<0){let M=(s[x]-a[x])/b,I=a[x],E=I+M*o[x];a[x]=E,s[x]=I,v[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-a[b])/o[b])});let c={dims:l,dataType:e[0].dataType},d=he("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=V.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:o},...me(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,d)}
        ${uf(p,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},cf=(e,t)=>{af(e.inputs,t);let n=sf(e.inputs,t);e.compute(lf(e.inputs,n),{inputs:[0]})},df=e=>{let t=e.starts,n=e.ends,r=e.axes;return Oe({starts:t,ends:n,axes:r})}}),hf,pf,ff,mf,mw=ie(()=>{be(),ve(),We(),tn(),Me(),hf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},pf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=V.size(r),o=r.length,a=V.normalizeAxis(t.axis,o),s=a<r.length-1,u,l=[];s?(l=Array.from({length:o},(k,S)=>S),l[a]=o-1,l[o-1]=a,u=e.compute(dt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[o-1],p=i/d,f=Fe(d),m=d/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=Y("x",u.dataType,u.dims,f),x=he("result",u.dataType,u.dims,f),v=b.type.value,M=Xe(u.dataType)==="f32"?`var threadMax = ${v}(-3.4028234663852886e+38f);`:`var threadMax = ${v}(-65504.0h);`,I=k=>`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
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
        ${M}
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
          rowMaxShared = ${v}(${w("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
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
          rowSumShared = ${v}(${en("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${v}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(dt(E,l),{inputs:[E]})},ff=(e,t)=>{hf(e.inputs),pf(e,t)},mf=e=>Oe({axis:e.axis})}),Zo,gf,yf,wf,bf,gw=ie(()=>{be(),ve(),Me(),Zo=e=>Array.from(e.getBigInt64Array(),Number),gf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Zo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},yf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},wf=(e,t)=>{let n=e[0].dims,r=t??Zo(e[1]),i=yf(n,r),o=V.size(i),a=e[0].dataType,s=Y("input",a,n.length),u=he("output",a,i.length),l=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...me(e[0].dims,i)]}),getShaderSource:l}},bf=e=>{gf(e.inputs),e.compute(wf(e.inputs),{inputs:[0]})}}),_f,xf,$f,yw=ie(()=>{be(),ve(),Me(),_f=(e,t,n,r,i)=>{let o=he("output_data",i,n.length,4),a=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,p,f)=>`select(${p}, ${d}, ${f})`;if(!r)l=o.setByOffset("global_idx",c(a.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${o.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let offset_b${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${m}(${c(y,w,b)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,s,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},xf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(V.areEqual(t,n)&&V.areEqual(n,r)),a=t,s=V.size(t);if(o){let l=Nn.calcShape(Nn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,s=V.size(a)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>_f(l,e,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...me(r,t,n,a)]})}},$f=e=>{e.compute(xf(e.inputs))}}),vf,ww=ie(()=>{Ry(),fo(),Oy(),Ny(),zy(),By(),Py(),Gy(),qy(),Vy(),Hy(),jy(),Ky(),Yy(),Xy(),Qy(),Zy(),Jy(),ew(),tw(),nw(),rw(),iw(),ow(),aw(),Nh(),sw(),uw(),lw(),cw(),dw(),co(),hw(),qh(),pw(),fw(),mw(),Fh(),gw(),tn(),wo(),yw(),vf=new Map([["Abs",[nc]],["Acos",[rc]],["Acosh",[ic]],["Add",[Vc]],["ArgMax",[Fl,po]],["ArgMin",[Ll,po]],["Asin",[oc]],["Asinh",[ac]],["Atan",[sc]],["Atanh",[uc]],["Attention",[jl]],["AveragePool",[_p,bp]],["BatchNormalization",[Ql]],["BiasAdd",[ec]],["BiasSplitGelu",[Gc]],["Cast",[cc,lc]],["Ceil",[pc]],["Clip",[hc]],["Concat",[od,ad]],["Conv",[Ao,ko]],["ConvTranspose",[Od,Cd]],["Cos",[fc]],["Cosh",[mc]],["CumSum",[zd,Bd]],["DepthToSpace",[Ld,Fd]],["DequantizeLinear",[kp,Cp]],["Div",[Hc]],["Einsum",[jd,Kd]],["Elu",[gc,rr]],["Equal",[jc]],["Erf",[yc]],["Exp",[wc]],["Expand",[Zd]],["FastGelu",[eh]],["Floor",[bc]],["FusedConv",[Ao,ko]],["Gather",[ih,rh]],["GatherElements",[mh,fh]],["GatherBlockQuantized",[ch,dh]],["GatherND",[ah,sh]],["Gelu",[_c]],["Gemm",[bh,wh]],["GlobalAveragePool",[$p,xp]],["GlobalMaxPool",[Ip,Sp]],["Greater",[Qc]],["GreaterOrEqual",[Jc]],["GridSample",[Eh,kh]],["GroupQueryAttention",[Kh]],["HardSigmoid",[Ec,Tc]],["InstanceNormalization",[Qh]],["LayerNormalization",[ep]],["LeakyRelu",[xc,rr]],["Less",[Zc]],["LessOrEqual",[ed]],["Log",[Bc]],["MatMul",[np]],["MatMulNBits",[ap,sp]],["MaxPool",[vp,Mp]],["Mul",[Kc]],["MultiHeadAttention",[Oh,Ah]],["Neg",[vc]],["Not",[$c]],["Pad",[gp]],["Pow",[Yc]],["QuickGelu",[Uc,rr]],["Range",[Op]],["Reciprocal",[Mc]],["ReduceMin",[zl]],["ReduceMean",[Cl]],["ReduceMax",[Nl]],["ReduceSum",[Pl]],["ReduceProd",[Bl]],["ReduceL1",[Al]],["ReduceL2",[Rl]],["ReduceLogSum",[Ul]],["ReduceLogSumExp",[Ol]],["ReduceSumSquare",[Dl]],["Relu",[Sc]],["Resize",[ef,tf]],["RotaryEmbedding",[Wh]],["ScatterND",[Pp,Bp]],["Sigmoid",[Ic]],["Sin",[kc]],["Sinh",[Cc]],["Slice",[cf,df]],["SkipLayerNormalization",[of]],["Split",[Uh,Lh]],["Sqrt",[Ac]],["Softmax",[ff,mf]],["Sub",[Xc]],["Tan",[Rc]],["Tanh",[Oc]],["ThresholdedRelu",[zc,rr]],["Tile",[bf]],["Transpose",[Qu,Zu]],["Where",[$f]]])}),Mf,bw=ie(()=>{pt(),qt(),Me(),Mf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ot(e.programInfo.name);let o=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),xt(e.programInfo.name)}dispose(){}build(e,t){Ot(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Vu(t,this.backend.device.limits),o=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,s=n.createShaderModule({code:a,label:e.name});Ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return xt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,a=Math.ceil(Math.sqrt(o));if(a>i){if(a=Math.ceil(Math.cbrt(o)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Sf={};An(Sf,{WebGpuBackend:()=>kf});var If,Tf,Ef,kf,_w=ie(()=>{pt(),be(),qt(),Au(),Cy(),ww(),bw(),If=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Tf=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${If(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Ef=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},kf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,a=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new Ef(a),this.gpuDataManager=Fu(this),this.programManager=new Mf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ji(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ot(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,c=o.programName,d=o.inputTensorViews,p=o.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:Wt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Wt(b.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";d.forEach((v,M)=>{b+=`input[${M}]: [${v.dims}] | ${Wt(v.dataType)}, `});let x="";p.forEach((v,M)=>{x+=`output[${M}]: [${v.dims}] | ${Wt(v.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Mr("GPU",`${c}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),xt()}run(e,t,n,r,i,o){Ot(e.name);let a=[];for(let x=0;x<t.length;++x){let v=t[x].data;if(v===0)continue;let M=this.gpuDataManager.get(v);if(!M)throw new Error(`no GPU data for input: ${v}`);a.push(M)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?s.map((x,v)=>v):n;if(c.length!==s.length)throw new Error(`Output size ${c.length} must be equal to ${s.length}.`);let d=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=o)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let v=c[x]===-1,M=c[x]===-2,I=v||M?i(s[x].dataType,s[x].dims):r(c[x],s[x].dataType,s[x].dims);if(d.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(v&&this.temporaryData.push(E),M){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(E)}p.push(E)}if(a.length!==t.length||p.length!==d.length){if(p.length===0)return xt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,v=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let R=k.type===10?2:4,B,q;k.type===10?(q=S.length>4?16:S.length>2?8:S.length*R,B=S.length>4?16:R*S.length):(q=S.length<=2?S.length*R:16,B=16),x=Math.ceil(x/q)*q,v.push(x);let G=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/G)*B:S.length*R});let M=16;x=Math.ceil(x/M)*M;let I=new ArrayBuffer(x);l.forEach((k,S)=>{let R=v[S],B=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(I,R,B.length).set(B);else if(k.type===12)new Uint32Array(I,R,B.length).set(B);else if(k.type===10)new Uint16Array(I,R,B.length).set(B);else if(k.type===1)new Float32Array(I,R,B.length).set(B);else throw new Error(`Unsupported uniform type: ${Wt(k.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,x),this.gpuDataManager.release(E.id),f={offset:0,size:x,buffer:E.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Tf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ce("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let v=l[x],M=v.type,I=typeof v.data=="number"?1:v.data.length,[E,k]=b.uniformVariablesInfo[x];if(M!==E||I!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${k}, got type ${M} with size ${I} in program "${b.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,a,p,m,f),xt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=vf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,a=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await oo(this,e,t);return Ki(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Cf={};An(Cf,{init:()=>Rf});var Gr,Af,Rf,xw=ie(()=>{be(),qt(),ve(),ky(),Gr=class ay{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(V.size(t)!==V.size(this.dims))throw new Error("Invalid new shape");return new ay(this.module,this.dataType,this.data,t)}},Af=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let a=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let s=[];for(let u=0;u<a;u++){let l=Number(e.getValue(r*i++,o)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,o)),p=[];for(let f=0;f<d;f++)p.push(Number(e.getValue(r*i++,o)));s.push(new Gr(e,l,c,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Gr(this.module,u,this.output(s,l),l),o=(s,u)=>{let l=wn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Gr(this.module,s,c,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(o+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Rf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(_w(),Xn(Sf)).WebGpuBackend,a=new o;await a.initialize(n,r),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,u,l,c=!1)=>{if(c)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(s),Number(u));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));a.upload(Number(u),d)}},async(s,u,l)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await a.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>a.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>a.releaseKernel(s),(s,u,l,c)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new Af(t,a,Number(u));return a.computeKernel(Number(s),d,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new Pu(n);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,u,l,c)=>o.ensureTensor(a,s,u,l,c),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!n.trace])}}}),Of,Jo,ea,nn,Nf,ta,Wr,na,ra,ia,oa,aa,sa,zf=ie(()=>{pt(),Iy(),Ty(),be(),mn(),Gi(),xu(),Of=(e,t)=>{De()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},Jo=async e=>{Of(e.wasm.numThreads,kr(e.logLevel))},ea=async(e,t)=>{var r,i;(i=(r=De()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(xw(),Xn(Cf)).init;t==="webgpu"&&await o("webgpu",De(),e,n),t==="webnn"&&await o("webnn",De(),e)}},nn=new Map,Nf=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},ta=(e,t)=>{let n=De(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,a=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,a,a+o)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(a,"*"));i=Number(n.getValue(a+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*o,"*"));c.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*o,"*")))}return[s,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Wr=e=>{let t=De(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},na=async(e,t)=>{var d,p,f,m;let n,r,i=De();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Wr(e);let o=0,a=0,s=0,u=[],l=[],c=[];try{if([a,u]=await _u(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let R of t.externalData){let B=typeof R=="string"?R:R.path;S.push(Hi(typeof R=="string"?R:R.data).then(q=>{i.mountExternalData(B,q)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let R=S,B=R==null?void 0:R.context,q=R==null?void 0:R.gpuDevice,G=R==null?void 0:R.deviceType,H=R==null?void 0:R.powerPreference;B?i.currentContext=B:q?i.currentContext=await i.webnnCreateMLContext(q):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:H})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,a),(d=i.webgpuOnCreateSession)==null||d.call(i,o),o===0&&Ne("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Nf(o),b=!!(t!=null&&t.enableGraphCapture),x=[],v=[],M=[],I=[],E=[];for(let S=0;S<y;S++){let[R,B,q]=ta(o,S);R===0&&Ne("Can't get an input name."),l.push(R);let G=i.UTF8ToString(R);x.push(G),M.push(B===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Wt(B),shape:q})}for(let S=0;S<w;S++){let[R,B,q]=ta(o,S+y);R===0&&Ne("Can't get an output name."),c.push(R);let G=i.UTF8ToString(R);v.push(G),I.push(B===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Wt(B),shape:q});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let H=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[G])??"cpu",O=i.webnnIsGraphOutput;if(H==="cpu"&&O&&O(o,G)){E.push("ml-tensor-cpu-output");continue}if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if(b&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(H)}}let k=null;return E.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Vi(S))}),nn.set(o,[o,l,c,k,b,!1]),[o,x,v,M,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&Ne("Can't release session."),y}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},ra=e=>{var u,l,c;let t=De(),n=nn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,a,s]=n;a&&(s&&t._OrtClearBoundOutputs(a.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),nn.delete(e)},ia=async(e,t,n,r,i,o,a=!1)=>{if(!e){t.push(0);return}let s=De(),u=s.PTR_SIZE,l=e[0],c=e[1],d=e[3],p=d,f,m;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;m=wn(yn(l),c);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,o,b,m)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;m=wn(yn(l),c);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,yn(l),c)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,$t(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,v=s.webnnIsGraphOutput;if(l!=="string"&&x&&v){let M=s.UTF8ToString(i);if(x(r,M)||v(r,M)){let I=yn(l);m=wn(I,c),p="ml-tensor";let E=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!E||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await E(r,I,c);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach((x,v)=>s.setValue(w+v*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(yn(l),f,m,w,c.length,Vi(p));b===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(b)}finally{s.stackRestore(y)}},oa=async(e,t,n,r,i,o)=>{var G,H,O,F;let a=De(),s=a.PTR_SIZE,u=nn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],v=[],M=[],I=[],E=[],k=a.stackSave(),S=a.stackAlloc(y*s),R=a.stackAlloc(y*s),B=a.stackAlloc(w*s),q=a.stackAlloc(w*s);try{[b,x]=mu(o),pn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await ia(n[L],v,I,e,c[t[L]],t[L],f);for(let L=0;L<w;L++)await ia(i[L],M,I,e,d[r[L]],y+r[L],f);fn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)a.setValue(S+L*s,v[L],"*"),a.setValue(R+L*s,c[t[L]],"*");for(let L=0;L<w;L++)a.setValue(B+L*s,M[L],"*"),a.setValue(q+L*s,d[r[L]],"*");if(p&&!m){let{handle:L,outputPreferredLocations:N,outputPreferredLocationsEncoded:C}=p;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);pn("wasm bindInputsOutputs");for(let z=0;z<y;z++){let U=t[z];await a._OrtBindInput(L,c[U],v[z])!==0&&Ne(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let U=r[z];(G=i[z])!=null&&G[3]?(E.push(M[z]),a._OrtBindOutput(L,d[U],M[z],0)!==0&&Ne(`Can't bind pre-allocated output[${z}] for session=${e}.`)):a._OrtBindOutput(L,d[U],0,C[U])!==0&&Ne(`Can't bind output[${z}] to ${N[z]} for session=${e}.`)}fn("wasm bindInputsOutputs"),nn.set(e,[l,c,d,p,f,!0])}(H=a.jsepOnRunStart)==null||H.call(a,l),(O=a.webnnOnRunStart)==null||O.call(a,l);let X;p?X=await a._OrtRunWithBinding(l,p.handle,w,B,b):X=await a._OrtRun(l,R,S,y,q,w,B,b),X!==0&&Ne("failed to call OrtRun().");let Q=[],le=[];pn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let N=Number(a.getValue(B+L*s,"*"));if(N===M[L]||E.includes(M[L])){Q.push(i[L]),N!==M[L]&&a._OrtReleaseTensor(N)!==0&&Ne("Can't release tensor.");continue}let C=a.stackSave(),z=a.stackAlloc(4*s),U=!1,P,j=0;try{a._OrtGetTensorData(N,z,z+s,z+2*s,z+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let ne=s===4?"i32":"i64",J=Number(a.getValue(z,ne));j=a.getValue(z+s,"*");let de=a.getValue(z+s*2,"*"),$e=Number(a.getValue(z+s*3,ne)),W=[];for(let oe=0;oe<$e;oe++)W.push(Number(a.getValue(de+oe*s,ne)));a._OrtFree(de)!==0&&Ne("Can't free memory for tensor dims.");let ee=W.reduce((oe,ae)=>oe*ae,1);P=Wt(J);let re=p==null?void 0:p.outputPreferredLocations[r[L]];if(P==="string"){if(re==="gpu-buffer"||re==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let oe=[];for(let ae=0;ae<ee;ae++){let xe=a.getValue(j+ae*s,"*"),_e=a.getValue(j+(ae+1)*s,"*"),Z=ae===ee-1?void 0:_e-xe;oe.push(a.UTF8ToString(xe,Z))}Q.push([P,W,oe,"cpu"])}else if(re==="gpu-buffer"&&ee>0){let oe=a.jsepGetBuffer;if(!oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ae=oe(j),xe=wn(J,ee);if(xe===void 0||!Wi(P))throw new Error(`Unsupported data type: ${P}`);U=!0,Q.push([P,W,{gpuBuffer:ae,download:a.jsepCreateDownloader(ae,xe,P),dispose:()=>{a._OrtReleaseTensor(N)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(re==="ml-tensor"&&ee>0){let oe=a.webnnEnsureTensor,ae=a.webnnIsGraphInputOutputTypeSupported;if(!oe||!ae)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(wn(J,ee)===void 0||!qi(P))throw new Error(`Unsupported data type: ${P}`);if(!ae(e,P,!1))throw new Error(`preferredLocation "ml-tensor" for ${P} output is not supported by current WebNN Context.`);let xe=await oe(e,j,J,W,!1);U=!0,Q.push([P,W,{mlTensor:xe,download:a.webnnCreateMLTensorDownloader(j,P),dispose:()=>{a.webnnReleaseTensorId(j),a._OrtReleaseTensor(N)}},"ml-tensor"])}else if(re==="ml-tensor-cpu-output"&&ee>0){let oe=a.webnnCreateMLTensorDownloader(j,P)(),ae=Q.length;U=!0,le.push((async()=>{let xe=[ae,await oe];return a.webnnReleaseTensorId(j),a._OrtReleaseTensor(N),xe})()),Q.push([P,W,[],"cpu"])}else{let oe=Er(P),ae=new oe(ee);new Uint8Array(ae.buffer,ae.byteOffset,ae.byteLength).set(a.HEAPU8.subarray(j,j+ae.byteLength)),Q.push([P,W,ae,"cpu"])}}finally{a.stackRestore(C),P==="string"&&j&&a._free(j),U||a._OrtReleaseTensor(N)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&Ne("Can't clear bound outputs."),nn.set(e,[l,c,d,p,f,!1]));for(let[L,N]of await Promise.all(le))Q[L][2]=N;return fn("wasm ProcessOutputTensor"),Q}finally{(F=a.webnnOnRunEnd)==null||F.call(a,l),a.stackRestore(k),v.forEach(X=>a._OrtReleaseTensor(X)),M.forEach(X=>a._OrtReleaseTensor(X)),I.forEach(X=>a._free(X)),b!==0&&a._OrtReleaseRunOptions(b),x.forEach(X=>a._free(X))}},aa=e=>{let t=De(),n=nn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},sa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),rn,at,Pn,cr,dr,qr,ua,Vr,Sn,In,Bf,Pf,Df,Uf,Lf,Ff,Gf,Wf,qf=ie(()=>{pt(),zf(),mn(),Di(),rn=()=>!!Be.wasm.proxy&&typeof document<"u",Pn=!1,cr=!1,dr=!1,Vr=new Map,Sn=(e,t)=>{let n=Vr.get(e);n?n.push(t):Vr.set(e,[t])},In=()=>{if(Pn||!cr||dr||!at)throw new Error("worker not ready")},Bf=e=>{switch(e.data.type){case"init-wasm":Pn=!1,e.data.err?(dr=!0,ua[1](e.data.err)):(cr=!0,ua[0]()),qr&&(URL.revokeObjectURL(qr),qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Vr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Pf=async()=>{if(!cr){if(Pn)throw new Error("multiple calls to 'initWasm()' detected.");if(dr)throw new Error("previous call to 'initWasm()' failed.");if(Pn=!0,rn())return new Promise((e,t)=>{at==null||at.terminate(),cu().then(([n,r])=>{try{at=r,at.onerror=o=>t(o),at.onmessage=Bf,ua=[e,t];let i={type:"init-wasm",in:Be};!i.in.wasm.wasmPaths&&(n||Ni)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),at.postMessage(i),qr=n}catch(i){t(i)}},t)});try{await Fi(Be.wasm),await Jo(Be),cr=!0}catch(e){throw dr=!0,e}finally{Pn=!1}}},Df=async e=>{if(rn())return In(),new Promise((t,n)=>{Sn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Be}};at.postMessage(r)});await ea(Be,e)},Uf=async e=>rn()?(In(),new Promise((t,n)=>{Sn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};at.postMessage(r,[e.buffer])})):Wr(e),Lf=async(e,t)=>{if(rn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return In(),new Promise((n,r)=>{Sn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),at.postMessage(i,o)})}else return na(e,t)},Ff=async e=>{if(rn())return In(),new Promise((t,n)=>{Sn("release",[t,n]);let r={type:"release",in:e};at.postMessage(r)});ra(e)},Gf=async(e,t,n,r,i,o)=>{if(rn()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return In(),new Promise((a,s)=>{Sn("run",[a,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};at.postMessage(l,sa(u))})}else return oa(e,t,n,r,i,o)},Wf=async e=>{if(rn())return In(),new Promise((t,n)=>{Sn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};at.postMessage(r)});aa(e)}}),la,Vf,Hf,$w=ie(()=>{pt(),qf(),be(),Ci(),xu(),la=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Vf=e=>{switch(e[3]){case"cpu":return new ze(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Wi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return ze.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!qi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return ze.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Hf=class{async fetchModelAndCopyToWasmMemory(e){return Uf(await Hi(e))}async loadModel(e,t){Ot();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Lf(n,t),xt()}async dispose(){return Ff(this.sessionId)}async run(e,t,n){Ot();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],f=d[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let o=[],a=[];Object.entries(t).forEach(d=>{let p=d[0],f=d[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);o.push(f),a.push(m)});let s=r.map((d,p)=>la(d,()=>`input "${this.inputNames[i[p]]}"`)),u=o.map((d,p)=>d?la(d,()=>`output "${this.outputNames[a[p]]}"`):null),l=await Gf(this.sessionId,i,s,a,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[a[d]]]=o[d]??Vf(l[d]);return xt(),c}startProfiling(){}endProfiling(){Wf(this.sessionId)}}}),jf={};An(jf,{OnnxruntimeWebAssemblyBackend:()=>da,initializeFlags:()=>ca,wasmBackend:()=>Kf});var ca,da,Kf,vw=ie(()=>{pt(),qf(),$w(),ca=()=>{(typeof Be.wasm.initTimeout!="number"||Be.wasm.initTimeout<0)&&(Be.wasm.initTimeout=0);let e=Be.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Be.wasm.simd=!1),typeof Be.wasm.proxy!="boolean"&&(Be.wasm.proxy=!1),typeof Be.wasm.trace!="boolean"&&(Be.wasm.trace=!1),typeof Be.wasm.numThreads!="number"||!Number.isInteger(Be.wasm.numThreads)||Be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Be.wasm.numThreads=1;else{let t=typeof navigator>"u"?uy("node:os").cpus().length:navigator.hardwareConcurrency;Be.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},da=class{async init(e){ca(),await Pf(),await Df(e)}async createInferenceSessionHandler(e,t){let n=new Hf;return await n.loadModel(e,t),n}},Kf=new da});pt(),pt(),pt();var Mw="1.27.0";{let e=(vw(),Xn(jf)).wasmBackend;Rn("webgpu",e,5),Rn("webnn",e,5),Rn("cpu",e,10),Rn("wasm",e,10)}Object.defineProperty(Be.versions,"web",{value:Mw,enumerable:!0});/**
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
 */const Hr=new Map;function Yf(e,t){const n=Hr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Hr.set(e,n)}function ft(e,t){const n=performance.now();try{return t()}finally{Yf(e,performance.now()-n)}}async function ht(e,t){const n=performance.now();try{return await t()}finally{Yf(e,performance.now()-n)}}function Sw(){return[...Hr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Iw(){Hr.clear()}function Tw(e,t,n,r){const i=t*n,o=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return o.set(e),o;for(let a=0;a<i;a+=1)o[a*4]=e[a*r],o[a*4+1]=e[a*r+1],o[a*4+2]=e[a*r+2],o[a*4+3]=255;return o}function it(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Dn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Xf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,s)=>a-s),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const Ew=114;function kw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),a=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-a)/2),resizedWidth:o,resizedHeight:a}}function ha(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),v=Math.max(0,Math.min(1,w-b)),M=(p*r+b)*o,I=(p*r+x)*o,E=(f*r+b)*o,k=(f*r+x)*o,S=(c*t+y)*3;for(let R=0;R<3;R++){const B=a[M+R]*(1-v)+a[I+R]*v,q=a[E+R]*(1-v)+a[k+R]*v;s[S+R]=Math.min(255,Math.max(0,Math.round(B*(1-m)+q*m)))}}}return s}function Un(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,p=Math.min((c+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,v=0;for(let I=Math.floor(d);I<p;I++){const E=Math.min(I+1,p)-Math.max(I,d);if(!(E<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const R=S*E,B=(I*r+k)*o;w+=a[B]*R,b+=a[B+1]*R,x+=a[B+2]*R,v+=R}}const M=(c*t+f)*3;s[M]=Math.min(255,Math.max(0,it(w/v))),s[M+1]=Math.min(255,Math.max(0,it(b/v))),s[M+2]=Math.min(255,Math.max(0,it(x/v)))}}return s}function Qf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function pa(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,c=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=Qf(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),v=Qf(b-x),M=(p*t+w)*3;for(let I=0;I<3;I++){let E=0;for(let k=0;k<4;k++){const S=d(m-1+k)*r;let R=0;for(let B=0;B<4;B++)R+=v[B]*a[(S+c(x-1+B))*o+I];E+=y[k]*R}s[M+I]=Math.min(255,Math.max(0,Math.round(E)))}}}return s}function jr(e,t,n=1){const r=kw(e.width,e.height,t,n),i=ha(e,r.resizedWidth,r.resizedHeight),o=t*t,a=new Float32Array(3*o).fill(Ew/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,p=u+c;a[p]=i[d]/255,a[o+p]=i[d+1]/255,a[2*o+p]=i[d+2]/255}}return{tensor:a,params:r}}function fa(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let a=0;a<o;a++){const s=e[a*6],u=e[a*6+1],l=e[a*6+2],c=e[a*6+3],d=e[a*6+4],p=e[a*6+5];if(d<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:f,confidence:d,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const hr=.8,Zf=.65,Cw=110,Aw=1280;function Rw(e,t,n){if(n==null)return hr;if(n.length===0)return Zf;const r=Math.max(e,t);if(!(r>0))return hr;const i=Aw/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return hr;const a=o.length;return(a%2===1?o[(a-1)/2]:(o[a/2-1]+o[a/2])/2)>=Cw?Zf:hr}const Jf=.25,em=.6;function Ow(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),a=Math.trunc(Number(n[3]));if(![r,i,o,a].every(b=>Number.isFinite(b)))return null;const s=o-r,u=a-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Jf:em)),c=Math.trunc(u*(s>=u?em:Jf)),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(Math.trunc(e),o+l),m=Math.min(Math.trunc(t),a+c),y=f-d,w=m-p;return y<=0||w<=0?null:{x:d,y:p,width:y,height:w}}const Nw=3,zw=.15,Bw=.6;function ma(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Pw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Dw(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...i,...o].every(M=>Number.isFinite(M)))return null;const a=ma(i,o);if(!(a>0))return null;const s=[];for(const M of t??[]){const I=Math.trunc(Number(M.n));if(!Number.isFinite(I)||I<Nw)continue;const E=Pw(M.poly);E!==null&&s.push({owner:M.owner,c:E,n:I,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((M,I)=>I.n-M.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Bw);for(const M of u)M.d0=ma(M.c,i),M.d1=ma(M.c,o),M.ecart=Math.abs(M.d0-M.d1);const c=[...u].sort((M,I)=>I.ecart-M.ecart),d=c[0],p=c[1],f=d.d0<d.d1?0:1,m=r>0?1:0,y=f===m?d:p,w=f===m?p:d,b=f===1?d.owner:p.owner,x=f===1?p.owner:d.owner,v=d.ecart/a<zw;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(v||l)}}catch{return null}}function Uw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const Lw=.6;function tm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const s=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,c=(e[o*6+3]-t.padY)/t.scale,d=it((s+l)/2),p=it((u+c)/2),f=it((l-s+(c-u))/4);f>=1&&r.push({cx:d,cy:p,r:f})}return r}function Fw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Lw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Gw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Dn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function nm(e,t,n){const r=tm(e,t,n);return r.length===0?[]:Gw(Fw(r))}function Ww(e,t,n){return tm(e,t,n)}function pr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const qw=.5,Vw=.7,Hw=.55;function ga(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function rm(e){if(e.length===0)return[];const t=(qw*ga(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,a=(i[1]+i[3])/2,s=n.find(u=>(u.cx-o)**2+(u.cy-a)**2<=t);if(s===void 0)n.push({cx:o,cy:a,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+o)/u,s.cy=(s.cy*(u-1)+a)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Dn(i.map(o=>o[0]))),Math.trunc(Dn(i.map(o=>o[1]))),Math.trunc(Dn(i.map(o=>o[2]))),Math.trunc(Dn(i.map(o=>o[3])))]);if(r.length>=2){const i=ga(r),o=r.map(()=>!0);for(let a=0;a<r.length;a++)if(o[a])for(let s=a+1;s<r.length;s++){if(!o[s])continue;const u=r[a],l=r[s],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=c*d,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=Vw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?s:a]=!1,!o[a])break}}r=r.filter((a,s)=>o[s])}if(r.length>=3){const i=ga(r);r=r.filter(([o,a,s,u])=>Math.min(s-o,u-a)>=Hw*i)}return r}const im=["brown","grey","blue","green","yellow","red","purple"],jw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Kw=.7;function om(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[a,s,u,l]=o.box;let c=!1;for(const d of r){const p=e[d];if(p.family!==o.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(a+u,f+y)-Math.max(a,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),v=Math.max(1,Math.min(u*l,y*w));if(b*x>=Kw*v){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}function Kr(e,t,n){const r=fa(e,t,n,im.length).map(i=>{const o=im[i.classIndex];return{color:o,family:jw[o],box:i.box,confidence:i.confidence}});return om(r)}const Yw=8,Xw=.8,am=1.25;function Qw(e){if(e.length<Yw)return[];const t=[],n=[];for(const a of e){const[,,s,u]=a.box;s>u*am?t.push(a):u>s*am&&n.push(a)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Xw*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Zw=2.25,sm=8;function Jw(e){if(e.length<sm)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=Zw*n[Math.floor(n.length/2)],i=r*r,o=e.map((d,p)=>p),a=d=>{for(;o[d]!==d;)o[d]=o[o[d]],d=o[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const f=t[d][0]-t[p][0],m=t[d][1]-t[p][1];f*f+m*m<=i&&(o[a(d)]=a(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=a(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<sm||u.length===e.length)return[];const l=new Set(u),c=e.map((d,p)=>p).filter(d=>!l.has(d));return c.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const tt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Et(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,a=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s:a,v:r};let s;return r===e?s=60*(t-n)/o:r===t?s=120+60*(n-e)/o:s=240+60*(e-t)/o,s<0&&(s+=360),{h:Math.round(s/2),s:a,v:r}}const eb=.42,tb=22,nb=43,rb=120,ib=1.5,ob=.72,ab=110,um=3;function fr(e,t,n){const{width:r,height:i,channels:o,data:a}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*eb);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const f=(d*r+p)*o,m=a[f],y=a[f+1],w=a[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),c+=1)}return c}function sb(e){let t=0,n=0,r=0,i=fr(e,!1,(o,a,s)=>{const u=Et(o,a,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=fr(e,!0,(o,a,s)=>{const u=Et(o,a,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function ub(e){let t=0,n=0,r=fr(e,!1,(o,a)=>{t+=o,n+=a});if(r===0&&(r=fr(e,!0,(o,a)=>{t+=o,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function lb(e){let t=0;const n=fr(e,!0,(r,i,o)=>{t+=Et(r,i,o).s});return n===0?null:t/n}function cb(e){const t=sb(e);if(t===null||t.s<=tb)return 1;if(t.s>=rb){const n=ub(e);return n!==null&&n>=ib?6:3}return t.s>=nb?3:6}function db(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,s)=>a-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,s)=>e[a].r-e[s].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>o.get(a))}function hb(e,t){const n=[...t];if(e.length<um||t.length!==e.length)return n;const r=e.map(a=>lb(a)),i=r.filter(a=>a!==null);if(i.length<um)return n;const o=Dn(i);return o<=0||r.forEach((a,s)=>{a!==null&&n[s]!==1&&a<ob*o&&a<ab&&(n[s]=1)}),n}function lm(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),a=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+o-n)**2+(p+a-r)**2<=i*i){const w=((p+a)*e.width+(f+o))*e.channels;d[m]=e.data[w],d[m+1]=e.data[w+1],d[m+2]=e.data[w+2]}else d[m]=255,d[m+1]=255,d[m+2]=255}return{width:l,height:c,channels:3,data:d}}function pb(e,t){const n=t.map(o=>lm(e,o)),r=n.map(o=>cb(o)),i=db(t,r);return hb(n,i)}function fb(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let a=0,s=0;a<o.length;a++,s+=r)o[a]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:o}}function cm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let a=0;a<n;a++){const s=a*o,u=Math.min((a+1)*o,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,c);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[a*t+l]=Math.min(255,Math.max(0,it(p/f)))}}return{width:t,height:n,data:r}}function mb(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),a=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],a[u]=Math.min(255,Math.max(0,it(s*o)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function gb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){s=!1;break}}i[o*t+a]=s&&r[o*t+a]>0?255:0}return{width:t,height:n,data:i}}function yb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){s=!0;break}}i[o*t+a]=s?255:0}return{width:t,height:n,data:i}}function ya(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],a=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;a[c++]=u,i[u]=s;let d=0,p=0,f=0;for(;l<c;){const m=a[l++],y=m%t,w=m/t|0;d+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const v=y+x,M=w+b;if(v<0||v>=t||M<0||M>=n)continue;const I=M*t+v;r[I]>0&&i[I]===0&&(i[I]=s,a[c++]=I)}}o[s]={area:d,centroidX:p/d,centroidY:f/d},s+=1}return{labels:i,stats:o}}function wb(e,t,n){return dm(Float32Array.from(e.data),e.width,t,n)}function dm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,a=-n*Math.PI/180,s=Math.cos(a),u=Math.sin(a);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-o,p=l-o,f=s*d-u*p+o,m=u*d+s*p+o,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,v=(E,k)=>E>=0&&E<t&&k>=0&&k<t?e[k*t+E]:r,M=v(y,w)*(1-b)+v(y+1,w)*b,I=v(y,w+1)*(1-b)+v(y+1,w+1)*b;i[l*t+c]=M*(1-x)+I*x}return i}const bb=.9,_b=.34,xb=[.55,.6,.66,.72],$b=22,vb=88,Mb=35,Ln=28,wa=4,Sb=Array.from({length:15},(e,t)=>-21+t*3),hm=[-2,0,2],Ib=3,Tb=.3;function Eb(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function kb(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const a=n-t+1,s=i-r+1,u=Math.max(s,a),l=new Uint8Array(u*u),c=Math.floor((u-a)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<a;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const p=Ln-2*wa,f=cm({width:u,height:u,data:l},p,p),m=new Float32Array(Ln*Ln);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+wa)*Ln+(w+wa)]=f.data[y*p+w]>110?1:0;return m}function Cb(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*_b);if(u<4)return null;const l=a-u,c=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const f=new Int16Array(d*p),m=new Int16Array(d*p),y=new Int16Array(d*p),w=new Uint8Array(d*p),b=[],x=Math.min(d,p)/2;for(let L=0;L<d;L++)for(let N=0;N<p;N++){const C=((L+l)*n+(N+c))*i,{h:z,s:U,v:P}=Et(o[C],o[C+1],o[C+2]),j=L*p+N;f[j]=z,m[j]=U,y[j]=P,Math.sqrt((N-p/2)**2+(L-d/2)**2)/x<=t&&(w[j]=1,b.push(P))}if(b.length<16)return null;const v=Xf(b,55);let M=0,I=0,E=0;const k=L=>f[L]>=$b&&f[L]<=vb&&m[L]>=Mb,S=L=>y[L]>=v&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<d*p;L++)w[L]===1&&(E+=1,y[L]>=130&&!k(L)&&(M+=1),S(L)&&(I+=1));const R=M>.5*E&&I<.15*E,B=new Uint8Array(d*p);if(R){const L=Xf(b,45);for(let N=0;N<d*p;N++)B[N]=w[N]===1&&y[N]<=L?255:0}else for(let L=0;L<d*p;L++)B[L]=S(L)?255:0;const q={width:p,height:d,data:B},G=gb(q);let H=ya(G),O=H;if(H.stats.length<=1&&(H=ya(q),O=H,H.stats.length<=1))return null;const F=Math.min(d,p)/2;let X=0,Q=-1;for(let L=1;L<O.stats.length;L++){const N=O.stats[L];if(N===void 0)continue;const C=Math.hypot(N.centroidX-p/2,N.centroidY-d/2)/F,z=N.area*(1-.6*Math.min(C,1));z>Q&&(Q=z,X=L)}if(X===0)return null;const le=new Uint8Array(d*p);for(let L=0;L<d*p;L++)le[L]=O.labels[L]===X?255:0;return kb(yb({width:p,height:d,data:le}))}function Ab(e,t,n,r,i,o){const a=Ln;let s=0,u=0;for(let l=0;l<a;l++){const c=l-o;if(!(c<0||c>=a))for(let d=0;d<a;d++){const p=d-i;if(p<0||p>=a)continue;const f=e[c*a+p];f!==0&&(u+=f,s+=f*n[l*a+d])}}return s/(u+r-s+1e-6)}function Rb(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of Sb){const o=i===0?e:dm(e,Ln,i,0),a=o.reduce((s,u)=>s+u,0);for(const s of hm)for(const u of hm){const l=Ab(o,a,t,n,s,u);l>r&&(r=l)}}return r}function Ob(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of xb){const s=Cb(e,a);if(s!==null)for(const{label:u,bits:l}of t)n.push([Rb(s,l),u])}if(n.length===0)return[null,0];if(n.sort((a,s)=>s[0]-a[0]),n[0][0]<Tb)return[null,0];const r=new Map;for(const[a,s]of n.slice(0,Ib))r.set(s,(r.get(s)??0)+a);let i=0,o=-1;for(const[a,s]of r)s>o&&(o=s,i=a);return[i,n[0][0]]}const Nb=2560,zb=.3,Bb=.5,Pb=1.6,Db=3,Ub=5;function Lb(e){const t=Math.min(1,Nb/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,o=new Float32Array(3*i),a=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,c+1),p=Math.max(0,Math.min(1,l-c));for(let f=0;f<n;f++){const m=(f+.5)*a-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const v=2-x,M=(c*e.width+y)*e.channels+v,I=(c*e.width+w)*e.channels+v,E=(d*e.width+y)*e.channels+v,k=(d*e.width+w)*e.channels+v,S=e.data[M]*(1-b)+e.data[I]*b,R=e.data[E]*(1-b)+e.data[k]*b,B=S*(1-p)+R*p;o[x*i+u*n+f]=(B/255-.5)/.5}}}return{tensor:o,width:n,height:r}}function Fb(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const o=i===n-1;for(let a=0;a<t;a++){const s=i*t+a;let u=e[s];if(a+1<t&&e[s+1]>u&&(u=e[s+1]),!o){const l=s+t;e[l]>u&&(u=e[l]),a+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function Gb(e){if(e.length<3)return e;const t=[...e].sort((o,a)=>o[0]-a[0]||o[1]-a[1]),n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(let o=t.length-1;o>=0;o--){const a=t[o];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function Wb(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,o]=e[r],[a,s]=e[(r+1)%e.length],u=a-i,l=s-o,c=Math.hypot(u,l);if(c===0)continue;const d=u/c,p=l/c;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[M,I]of e){const E=M*d+I*p,k=-M*p+I*d;E<f&&(f=E),E>m&&(m=E),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,v=b*x;if(v<n){n=v;const M=(f+m)/2,I=(y+w)/2;t={cx:M*d-I*p,cy:M*p+I*d,w:b,h:x,angle:Math.atan2(p,d)}}}return t}function qb(e,t,n,r){const i=Math.cos(r.angle),o=Math.sin(r.angle),a=r.w/2,s=r.h/2,u=Math.abs(a*i)+Math.abs(s*o),l=Math.abs(a*o)+Math.abs(s*i),c=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=c;b<=d;b++){const x=b-r.cx,v=w-r.cy,M=x*i+v*o,I=-x*o+v*i;Math.abs(M)<=a&&Math.abs(I)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function Vb(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,c]=a,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=c[1]?[l,c]:[c,l];return[[d[0],d[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function Hb(e,t,n,r){const{width:i,height:o}=t;let a=new Uint8Array(i*o);for(let f=0;f<a.length;f++)a[f]=e[f]>zb?255:0;a=Fb(a,i,o);const s={width:i,height:o,data:a},{labels:u}=ya(s),l=new Map;for(let f=0;f<o;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const c=n/i,d=r/o,p=[];for(const[f,m]of l){const y=[];for(const[B,[q,G]]of m)y.push([q-.5,B-.5],[q-.5,B+.5],[G+.5,B-.5],[G+.5,B+.5]);const w=Wb(Gb(y));if(Math.min(w.w,w.h)<Db)continue;const b=qb(e,i,o,w);if(b<Bb)continue;const x=w.w*w.h*Pb/(2*(w.w+w.h)),v={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(v.w,v.h)<Ub+2)continue;const I=Vb(v).map(([B,q])=>[Math.min(n,Math.max(0,Math.round(B*c))),Math.min(r,Math.max(0,Math.round(q*d)))]),E=I.map(B=>B[0]),k=I.map(B=>B[1]),S=Math.min(...E),R=Math.min(...k);p.push({quad:I,x:S,y:R,width:Math.max(...E)-S,height:Math.max(...k)-R,score:b})}return p.sort((f,m)=>m.score-f.score)}function jb(e,t){const[n,r,i,o]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-o[0],i[1]-o[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(o[0]-n[0],o[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Kb([[0,0],[a,0],[a,s],[0,s]],[n,r,i,o]),l=new Uint8Array(a*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<a;p++){const f=u[6]*p+u[7]*d+u[8],m=(u[0]*p+u[1]*d+u[2])/f,y=(u[3]*p+u[4]*d+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,v=y-b,M=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),E=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const R=e.data[(E*e.width+M)*e.channels+S],B=e.data[(E*e.width+I)*e.channels+S],q=e.data[(k*e.width+M)*e.channels+S],G=e.data[(k*e.width+I)*e.channels+S],H=R*(1-x)+B*x,O=q*(1-x)+G*x;l[(d*a+p)*e.channels+S]=Math.round(H*(1-v)+O*v)}}const c={width:a,height:s,channels:e.channels,data:l};return s/a>=1.5?Ht(c,3):c}function Kb(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[o,a]=e[i],[s,u]=t[i];n.push([o,a,1,0,0,0,-s*o,-s*a]),r.push(s),n.push([0,0,0,o,a,1,-u*o,-u*a]),r.push(u)}for(let i=0;i<8;i++){let o=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[o][i])&&(o=s);[n[i],n[o]]=[n[o],n[i]],[r[i],r[o]]=[r[o],r[i]];const a=n[i][i];for(let s=i;s<8;s++)n[i][s]/=a;r[i]/=a;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Ht(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:a}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*o);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let p,f;n===1?(p=i-1-c,f=d):n===2?(p=r-1-d,f=i-1-c):(p=c,f=r-1-d);const m=(c*r+d)*o,y=(f*s+p)*o;for(let w=0;w<o;w++)l[y+w]=a[m+w]}return{width:s,height:u,channels:o,data:l}}const Yb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Yb)*255));return e})();const jt=48,Xb=320;function Qb(e){return["blank",...e.characters," "]}function Zb(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const s=e[a];s!==0&&(a>0&&e[a-1]===s||(r+=n[s]??"",i.push(t[a])))}if(i.length===0)return["",0];const o=i.reduce((a,s)=>a+s,0)/i.length;return[r,o]}function Jb(e,t){const n=Math.trunc(jt*t),r=e.width/e.height,i=Math.ceil(jt*r)>n?n:Math.ceil(jt*r),o=new Float32Array(3*jt*n),a=jt*n,s=e.width/i,u=e.height/jt;for(let l=0;l<jt;l++){const c=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(c))),p=Math.min(e.height-1,d+1),f=Math.max(0,Math.min(1,c-d));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let v=0;v<3;v++){const M=2-v,I=(d*e.width+w)*e.channels+M,E=(d*e.width+b)*e.channels+M,k=(p*e.width+w)*e.channels+M,S=(p*e.width+b)*e.channels+M,R=e.data[I]*(1-x)+e.data[E]*x,B=e.data[k]*(1-x)+e.data[S]*x,q=R*(1-f)+B*f;o[v*a+l*n+m]=(q/255-.5)/.5}}}return{tensor:o,width:n}}const e_=62,t_=8,n_=5;function ba(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function r_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),o=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let s=1;s<=r;s++)o[s]=e[a-1]===t[s-1]?i[s-1]+1:Math.max(i[s],o[s-1]);[i,o]=[o,i]}return i[r]}function Yr(e,t){return e.length===0&&t.length===0?100:200*r_(e,t)/(e.length+t.length)}function pm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Yr(n(e),n(t))}function i_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),o=[...n].filter(c=>!r.has(c)).sort(),a=[...r].filter(c=>!n.has(c)).sort(),s=i.join(" "),u=[s,o.join(" ")].filter(Boolean).join(" "),l=[s,a.join(" ")].filter(Boolean).join(" ");return s.length>0&&(o.length===0||a.length===0)?100:Math.max(Yr(s,u),Yr(s,l),Yr(u,l))}function o_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const o of[ba(i),ba(r.name)])if(o)for(const a of[o,o.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function a_(e,t){const n=ba(e);if(!n||t.length===0)return null;const i=o_(t).map(c=>({...c,score:i_(n,c.key)})).sort((c,d)=>d.score-c.score).slice(0,t_).filter(c=>c.score>=e_);if(i.length===0)return null;const o=i[0].score,a=i.filter(c=>o-c.score<=n_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],l=[pm(s,u.key),u.score];for(const c of a.slice(1)){const d=[pm(s,c.key),c.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=c,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const fm=5e3,_a=.75,mm=15,s_=1.25,u_=2.4,l_=.003,c_=.85,d_=4,xa=2600,$a=2,va=.3,gm=.1,ym=.012,h_=22,wm=.5,Xr=.12;function Je(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,a=t.width*t.height;o<a;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function p_(e,t,n,r){const i=r.map(J=>J[0]),o=r.map(J=>J[1]),a=i.reduce((J,de)=>J+de,0)/i.length,s=o.reduce((J,de)=>J+de,0)/o.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...o)-Math.min(...o));if(u<4)return null;const l=u*d_,c=Math.max(0,Math.trunc(a-l)),d=Math.min(n.width,Math.trunc(a+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<xa?$a:1,y=Je(e,n),w=Je(e,t),b=new e.Rect(c,p,d-c,f-p),x=y.roi(b),v=new e.Mat;m!==1?e.resize(x,v,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(v);const M=new e.Mat,I=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(v,I,e.COLOR_RGB2GRAY);const E=new e.ORB(fm),k=new e.KeyPointVector,S=new e.KeyPointVector,R=new e.Mat,B=new e.Mat,q=new e.Mat,G=[y,w,x,v,M,I,k,S,R,B,q],H=J=>{for(const de of G)try{de.delete()}catch{}try{E.delete()}catch{}return J};if(E.detectAndCompute(M,q,k,R),E.detectAndCompute(I,q,S,B),R.rows<8||B.rows<8)return H(null);const O=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;O.knnMatch(R,B,F,2);const X=[],Q=[];for(let J=0;J<F.size();J++){const de=F.get(J);if(de.size()===2){const $e=de.get(0),W=de.get(1);if($e.distance<_a*W.distance){const ee=k.get($e.queryIdx).pt,re=S.get($e.trainIdx).pt;X.push(ee.x,ee.y),Q.push(re.x,re.y)}}}if(F.delete(),O.delete(),X.length/2<8)return H(null);const le=e.matFromArray(X.length/2,1,e.CV_32FC2,X),L=e.matFromArray(Q.length/2,1,e.CV_32FC2,Q),N=new e.Mat,C=e.findHomography(le,L,e.RANSAC,5,N);let z=0;for(let J=0;J<N.rows;J++)z+=N.data[J];const U=C.rows===3?[...C.data64F]:null;if(le.delete(),L.delete(),N.delete(),C.delete(),U===null||z<mm)return H(null);const P=1/m,j=[[P,0,c],[0,P,p],[0,0,1]],ne=[0,1,2].map(J=>[0,1,2].map(de=>j[J][0]*U[de]+j[J][1]*U[3+de]+j[J][2]*U[6+de]));return H({H:ne,inliers:z})}function Ma(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*c}const i=Math.abs(r/2)/(t*n);if(i<l_||i>c_)return!1;const o=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),a=Math.min(...o);if(a<1)return!1;const s=Math.max(...o)/a;return s>=s_&&s<=u_}function Sa(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ia(e,t,n,r){const i=n.width,o=n.height,a=Math.max(8,Math.trunc(va*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-a*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-a*r[G][0]-a*r[G][1];const c=Je(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(d,f,e.COLOR_RGB2Lab),c.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(a/3)),w=[[],[],[]],b=(G,H)=>{const O=(H*s+G)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let G=0;G<u;G++)for(let H=0;H<s;H++)(G<y||G>=u-y||H<y||H>=s-y)&&b(H,G);const x=G=>{G.sort((O,F)=>O-F);const H=G.length>>1;return G.length%2?G[H]:(G[H-1]+G[H])/2},v=[x(w[0]),x(w[1]),x(w[2])],M=(G,H)=>{const O=(H*s+G)*3,F=m[O]-v[0],X=m[O+1]-v[1],Q=m[O+2]-v[2];return Math.sqrt(F*F+X*X+Q*Q)>h_},I=Math.max(6,Math.trunc(gm*i)),E=Math.max(6,Math.trunc(gm*o)),k=Math.max(2,Math.trunc(ym*i)),S=Math.max(2,Math.trunc(ym*o)),R=G=>{let H=0,O=0;for(const F of G)O=F?O+1:0,O>H&&(H=O);return H/Math.max(1,G.length)},B=G=>{let H,O,F,X,Q;if(G==="L"?(H=a,O=a+o,F=Math.max(0,a-k-I),X=Math.max(0,a-k),Q=!1):G==="R"?(H=a,O=a+o,F=a+i+k,X=Math.min(s,a+i+k+I),Q=!1):(H=Math.max(0,a-S-E),O=Math.max(0,a-S),F=a,X=a+i,Q=!0),O<=H||X<=F)return 0;const le=[];if(Q)for(let L=F;L<X;L++){let N=0;for(let C=H;C<O;C++)M(L,C)&&N++;le.push(N/(O-H)>wm)}else for(let L=H;L<O;L++){let N=0;for(let C=F;C<X;C++)M(C,L)&&N++;le.push(N/(X-F)>wm)}return R(le)},q={L:B("L"),R:B("R"),T:B("T")};return d.delete(),f.delete(),q}const f_=6e3,m_=8,bm=.5,g_=.6;function y_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<xa?$a:1,o=Je(e,t),a=new e.Mat;i!==1?e.resize(o,a,new e.Size(0,0),i,i,e.INTER_CUBIC):o.copyTo(a);const s=new e.Mat;e.cvtColor(a,s,e.COLOR_RGB2GRAY),o.delete(),a.delete();const u=new e.ORB(f_),l=new e.Mat,c=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,c,d);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=Je(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,v=new e.Mat;u.detectAndCompute(b,l,x,v);const M=[w,x,v],I=()=>{for(const ne of M)ne.delete();b.delete()};if(v.rows<8){I();continue}const E=new e.DMatchVectorVector;f.knnMatch(v,d,E,2);const k=[],S=[];for(let ne=0;ne<E.size();ne++){const J=E.get(ne);if(J.size()===2){const de=J.get(0);if(de.distance<_a*J.get(1).distance){const $e=x.get(de.queryIdx).pt,W=c.get(de.trainIdx).pt;k.push($e.x,$e.y),S.push(W.x,W.y)}}}if(E.delete(),k.length/2<8){I();continue}const R=e.matFromArray(k.length/2,1,e.CV_32FC2,k),B=e.matFromArray(S.length/2,1,e.CV_32FC2,S),q=new e.Mat,G=e.findHomography(R,B,e.RANSAC,5,q);let H=0;for(let ne=0;ne<q.rows;ne++)H+=q.data[ne];const O=G.rows===3?[...G.data64F]:null;if(R.delete(),B.delete(),q.delete(),G.delete(),O===null||H<m_){I();continue}const F=1/i,X=[[F*O[0],F*O[1],F*O[2]],[F*O[3],F*O[4],F*O[5]],[O[6],O[7],O[8]]],Q=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ne,J])=>Sa(X,ne,J));if(!Ma(Q,t.width,t.height)){I();continue}const le=Je(e,t),L=e.matFromArray(3,3,e.CV_64F,X.flat()),N=new e.Mat;e.warpPerspective(le,N,L,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const C=new e.Mat;e.cvtColor(N,C,e.COLOR_RGB2GRAY);const z=new e.Mat;e.matchTemplate(C,b,z,e.TM_CCOEFF_NORMED);const U=z.data32F[0];if(le.delete(),L.delete(),N.delete(),C.delete(),z.delete(),U<bm){I();continue}const P=Ia(e,t,y,X),j=Ta(P);p.push({id:m,confidence:Math.max(0,U),footprint:Q,built:P!==null&&Math.max(P.L,P.R,P.T)>=Xr,tuckRegion:Qr(Q,j)}),I()}}finally{s.delete(),l.delete(),c.delete(),d.delete();try{u.delete(),f.delete()}catch{}}return p}function Ta(e){return e!==null&&e.R>=Xr?["R"]:[]}function Qr(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),a=va*o;if(!(a>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],v=n[b];let M=-(v[1]-x[1]),I=v[0]-x[0];const E=(x[0]+v[0])/2,k=(x[1]+v[1])/2;M*(E-s)+I*(k-u)<0&&(M=-M,I=-I);const S=Math.hypot(M,I);S<=1e-6||(M=M/S*a,I=I/S*a,c.push([x[0]+M,x[1]+I],[v[0]+M,v[1]+I]))}const d=c.map(y=>y[0]),p=c.map(y=>y[1]),f=Math.round(Math.min(...d)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...d))-f,height:Math.round(Math.max(...p))-m}}function w_(e,t,n,r){const i=p_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,c])=>Sa(i.H,l,c));if(!Ma(a,t.width,t.height))return null;const s=Ia(e,t,n,i.H);if(s===null)return null;const u=Ta(s);return{built:Math.max(s.L,s.R,s.T)>=Xr,footprint:a,overflow:u,edgeScores:s,inliers:i.inliers}}const b_=.88;function Ea(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,a=Math.max(8,Math.trunc(va*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=a+Math.trunc(i*b_),c=s-l;if(c<1)return null;const d=Je(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-a*y[k*3]-a*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const v=x.roi(new e.Rect(l,0,c,u)),M=new e.Mat;v.copyTo(M);const I=M.data,E=new Uint8ClampedArray(c*u*3);E.set(I.subarray(0,E.length));for(const k of[d,p,f,m,b,x,v,M])try{k.delete()}catch{}return{width:c,height:u,channels:3,data:E}}function __(e,t,n,r){const[i,o,a,s]=r;if(a<8||s<8)return null;const u=Math.trunc(.06*a),l=Math.trunc(.06*s),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+a+u)),p=Math.max(0,Math.trunc(o-l)),f=Math.min(n.height,Math.trunc(o+s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<xa?$a:1,y=Je(e,n),w=Je(e,t),b=y.roi(new e.Rect(c,p,d-c,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const v=new e.Mat,M=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(x,M,e.COLOR_RGB2GRAY);const I=new e.ORB(fm),E=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,R=new e.Mat,B=new e.Mat,q=[y,w,b,x,v,M,E,k,S,R,B],G=ne=>{for(const J of q)try{J.delete()}catch{}try{I.delete()}catch{}return ne};if(I.detectAndCompute(v,B,E,S),I.detectAndCompute(M,B,k,R),S.rows<8||R.rows<8)return G(null);const H=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;H.knnMatch(S,R,O,2);const F=[],X=[];for(let ne=0;ne<O.size();ne++){const J=O.get(ne);if(J.size()===2){const de=J.get(0),$e=J.get(1);if(de.distance<_a*$e.distance){const W=E.get(de.queryIdx).pt,ee=k.get(de.trainIdx).pt;F.push(W.x,W.y),X.push(ee.x,ee.y)}}}if(O.delete(),H.delete(),F.length/2<8)return G(null);const Q=e.matFromArray(F.length/2,1,e.CV_32FC2,F),le=e.matFromArray(X.length/2,1,e.CV_32FC2,X),L=new e.Mat,N=e.findHomography(Q,le,e.RANSAC,5,L);let C=0;for(let ne=0;ne<L.rows;ne++)C+=L.data[ne];const z=N.rows===3?[...N.data64F]:null;if(Q.delete(),le.delete(),L.delete(),N.delete(),z===null||C<mm)return G(null);const U=1/m,P=[[U,0,c],[0,U,p],[0,0,1]],j=[0,1,2].map(ne=>[0,1,2].map(J=>P[ne][0]*z[J]+P[ne][1]*z[3+J]+P[ne][2]*z[6+J]));return G({H:j,inliers:C})}const x_=620;function $_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function _m(e,t,n,r){const i=xm(e,t,n,r);if(i!==null)return i;try{const[o,a,s,u]=r.map(I=>Math.trunc(I));if(Math.min(s,u)>=x_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),c=Math.trunc(u*.25),d=Math.max(0,o-l),p=Math.max(0,a-c),f=Math.min(t.width,o+s+l),m=Math.min(t.height,a+u+c);if(f<=d||m<=p)return null;const y=Je(e,t),w=y.roi(new e.Rect(d,p,f-d,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-d)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=$_(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const v=[(o-d)*2,(a-p)*2,s*2,u*2],M=xm(e,x,n,v);return M===null?null:{...M,footprint:M.footprint.map(([I,E])=>[I*.5+d,E*.5+p])}}catch{return null}}function xm(e,t,n,r){const i=__(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Sa(i.H,b,x));if(!Ma(a,t.width,t.height))return null;const s=Je(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=Je(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(d,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,c,d,p,f])try{b.delete()}catch{}if(m<bm)return null;const y=Ia(e,t,n,i.H);if(y===null)return null;const w=Ta(y);return{built:Math.max(y.L,y.R,y.T)>=Xr,footprint:a,overflow:w,edgeScores:y,inliers:i.inliers}}function v_(e,t,n,r=.03){let i=null,o=1/0;for(const a of e){const[s,u,l,c]=a;if(l<=0||c<=0)continue;const d=r*l,p=r*c;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+c+p){const f=l*c;f<o&&(o=f,i=[s,u,l,c])}}return i}const M_=.3,S_=.3;function I_(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:a,R:s,T:u}=o.edgeScores;return Math.min(a,s,u)>=M_}),i=[];return e.forEach((o,a)=>{if(!o.built||o.edgeScores===null)return;const{L:s,R:u,T:l}=o.edgeScores,c=Math.max(s,u,l)<S_;if(!r&&!c)return;t.some(([p,f])=>p>=o.zone.x0&&p<=o.zone.x1&&f>=o.zone.y0&&f<=o.zone.y1)||i.push(a)}),i}const mt=128,Fn=.5;function Zr(e){const t=Un(e,mt,mt),n=mt*mt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function ka(e){const t=e[1]??0;return{built:t>=Fn,prob:t}}const mr=120,gr=179,T_=1.3,E_=3.6,k_=.45,C_=6e-4,A_=.02,R_=6e3,O_=.78,N_=1.25,z_=2.4,B_=.05,P_=1.5,D_=.5,U_=.9,L_=150,F_=18,G_=34,W_=90,q_=130,V_=.13,H_=.15,Jr="magistrates-guild",Ca="merchants-guild";function j_(e,t){const n=Je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[mr,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[gr,255,205,255]),a=new e.Mat;e.inRange(r,i,o,a),r.delete(),i.delete(),o.delete();const s=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(a,l,e.MORPH_CLOSE,u),a.delete(),u.delete();const c=new e.Mat,d=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,c,d,p,8);l.delete(),c.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=d.intAt(w,0),x=d.intAt(w,1),v=d.intAt(w,2),M=d.intAt(w,3),I=d.intAt(w,4),E=I/m;E<C_||E>A_||I/Math.max(v*M,1)<k_||y.push({x:b,y:x,w:v,h:M})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function K_(e,t,n,r,i,o,a){const s=e,u=o,l=a,c=i;if(!c.gray){const U=Je(e,r);c.gray=new s.Mat,s.cvtColor(U,c.gray,s.COLOR_RGB2GRAY),U.delete(),c.k=new s.KeyPointVector,c.d=new s.Mat;const P=new s.Mat;u.detectAndCompute(c.gray,P,c.k,c.d),P.delete()}const d=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(d,p,f,m),p.delete();const y=U=>(f.delete(),m.delete(),U);if(c.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(c.d,m,w,2);const b=[],x=[];for(let U=0;U<w.size();U++){const P=w.get(U);if(P.size()===2){const j=P.get(0);if(j.distance<O_*P.get(1).distance){const ne=c.k.get(j.queryIdx).pt,J=f.get(j.trainIdx).pt;b.push(ne.x,ne.y),x.push(J.x,J.y)}}}if(w.delete(),b.length/2<8)return y(null);const v=s.matFromArray(b.length/2,1,s.CV_32FC2,b),M=s.matFromArray(x.length/2,1,s.CV_32FC2,x),I=new s.Mat,E=s.findHomography(v,M,s.RANSAC,5,I);if(v.delete(),M.delete(),I.delete(),E.rows!==3)return E.delete(),y(null);const k=[...E.data64F],S=(U,P)=>{const j=k[6]*U+k[7]*P+k[8];return[(k[0]*U+k[1]*P+k[2])/j,(k[3]*U+k[4]*P+k[5])/j]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([U,P])=>S(U,P));if(R.some(U=>!Number.isFinite(U[0])||!Number.isFinite(U[1])))return E.delete(),y(null);const B=R.map((U,P)=>{const j=R[(P+1)%4];return Math.hypot(j[0]-U[0],j[1]-U[1])}),q=Math.min(...B);if(q<1)return E.delete(),y(null);const G=Math.max(...B)/q;let H=0;for(let U=0;U<4;U++){const[P,j]=R[U],[ne,J]=R[(U+1)%4];H+=P*J-ne*j}const O=t,F=Math.abs(H/2)/(O.rows*O.cols);if(G<N_||G>z_||F<B_||F>P_)return E.delete(),y(null);const X=new s.Mat;s.warpPerspective(O,X,E,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),E.delete();const Q=new s.Mat;s.cvtColor(X,Q,s.COLOR_RGB2GRAY),X.delete();const le=Math.trunc(r.height/2),L=Q.roi(new s.Rect(0,0,r.width,le)),N=c.gray.roi(new s.Rect(0,0,r.width,le)),C=new s.Mat;s.matchTemplate(L,N,C,s.TM_CCOEFF_NORMED);const z=C.data32F[0];return L.delete(),N.delete(),C.delete(),Q.delete(),y(z)}function Y_(e,t,n){let r,i;if(n===Jr)r=Ca,i=V_;else if(n===Ca)r=Jr,i=H_;else return null;const{x:o,y:a,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let c=0,d=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=a;b<a+u;b++)for(let x=o+p;x<o+f;x++){const v=(b*e.width+x)*e.channels,{h:M,s:I,v:E}=Et(e.data[v],e.data[v+1],e.data[v+2]);if(M>=mr&&M<=gr&&I>=30&&I<=170&&E<=170)continue;m++,(r===Ca?M>=F_&&M<=G_&&I>=W_&&E>=q_:M>=95&&M<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>c&&(c=w,d={x:o+p,y:a,w:f-p,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const X_=1.7,Q_=140,Z_=170,J_=.2,e1=.1,$m=240,vm=80,Mm=60,t1=50,Sm="scientists-guild",Im="tacticians-guild",ei=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function n1(e,t,n){const{x:r,y:i,w:o,h:a}=n,s=new Float32Array(a);for(let M=0;M<a;M++){let I=0;for(let E=0;E<o;E++)e[(i+M)*t+r+E]>0&&I++;s[M]=I/o}const u=[];for(let M=0;M<a;M++)s[M]>.3&&u.push(M);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const p=o/d;if(p<T_||p>E_)return[];if(p>=X_)return[{x:r,y:i+l,w:o,h:d}];const f=new Float32Array(a),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let M=-4;M<=4;M++){const I=Math.exp(-(M*M)/(2*m*m));y.push(I),w+=I}for(let M=0;M<a;M++){let I=0;for(let E=-4;E<=4;E++){const k=Math.min(a-1,Math.max(0,M+E));I+=s[k]*y[E+4]}f[M]=I/w}const b=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let v=l+Math.trunc(d/2);if(x>b){let M=1/0;for(let I=b;I<x;I++)f[I]<M&&(M=f[I],v=I)}return[{x:r,y:i+l,w:o,h:v-l},{x:r,y:i+v,w:o,h:c-v}]}function r1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),s=Math.max(0,o-r),u=new Uint8Array(a*s*3);for(let l=0;l<s;l++)for(let c=0;c<a;c++){const d=((r+l)*e.width+n+c)*e.channels,p=(l*a+c)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:a,height:s,channels:3,data:u}}function i1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:a,s,v:u}=Et(e.data[o],e.data[o+1],e.data[o+2]);s>=40&&u>=40&&u<=205&&(t++,a>=Q_&&a<=Z_&&n++)}return t===0?0:n/t}function o1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s:a,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);!(o>=mr&&o<=gr)&&a>=70&&s>=50&&t++}return n===0?0:t/n}function Tm(e,t){const n=Je(e,t),r=new e.Mat;e.resize(n,r,new e.Size($m,vm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:$m,height:vm,channels:3,data:i}}function a1(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const a=o*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const a=o*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[o*3+s]=Math.max(0,Math.min(255,Math.round(e.data[a+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Em(e,t){const n=a1(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=Et(n.data[y],n.data[y+1],n.data[y+2]);!(w>=mr&&w<=gr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,o++)}const a=o<20,s=Je(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let c=0,d=0,p=0,f=0;for(let m=0;m<r;m++)!a&&i[m]===0||(c+=l[m*3]*100/255,d+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[c/f,d/f,p/f]}function s1(e){let t=0,n=0,r=0,i=0,o=0;const a=e.width*e.height;for(let u=0;u<a;u++){const l=u*e.channels,{h:c,s:d,v:p}=Et(e.data[l],e.data[l+1],e.data[l+2]);c>=mr&&c<=gr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&p>=80&&o++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:o/s}}function u1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s:a,v:s}=Et(e.data[i],e.data[i+1],e.data[i+2]);a>=Mm&&s>=t1?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&s<150&&n.brown++):a<Mm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function l1(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,o=0,a=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,o+=u*u,a+=l*l}return i/(Math.sqrt(o*a)+1e-6)}function km(e,t){const n=Je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function c1(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const a=Tm(e,o);n.set(i,km(e,a)),ei.includes(i)&&r.set(i,Em(e,a))}return{gray:n,warmLab:r}}function d1(e,t,n){const r=Tm(e,t),i=s1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Jr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Sm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Im;const o=u1(r),a={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let s="blue";for(const l of Object.keys(a))a[l]>a[s]&&(s=l);if(a[s]<=0)return"";let u;if(s==="blue")u=Jr;else if(s==="green")u=Sm;else if(s==="red")u=Im;else{const l=km(e,r);let c="",d=-2;for(const p of ei){const f=n.gray.get(p);if(f===void 0)continue;const m=l1(l,f);m>d&&(d=m,c=p)}u=c||ei[0]}if(ei.includes(u)&&n.warmLab.size>0){const l=Em(e,r);let c=u,d=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<d&&(d=m,c=p)}return c}return u}function h1(e,t,n,r,i){var y;const o=[],{blobs:a,mask:s,maskWidth:u}=j_(e,t);if(a.length===0||n.size===0)return o;const l=e,c=new l.ORB(R_),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=Je(e,t);let m=null;try{for(const w of a){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),v=Math.max(L_,Math.trunc(U_*Math.max(w.w,w.h))),M=Math.max(0,b-v),I=Math.max(0,x-v),E=Math.min(t.width,b+v),k=Math.min(t.height,x+v);if(E-M<16||k-I<16)continue;const S=f.roi(new l.Rect(M,I,E-M,k-I)),R=new l.Mat;l.cvtColor(S,R,l.COLOR_RGB2GRAY);let B=null,q=-2;for(const[F,X]of n){if(r!==void 0&&Date.now()>r)break;const Q=K_(e,S,R,X,p.get(F),c,d);Q!==null&&Q>q&&(q=Q,B=F)}S.delete(),R.delete();const G=new Set;if(B!==null&&q>=D_){o.push({id:B,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(B);const F=Y_(t,w,B);F&&(o.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),G.add(F.id))}if(i===void 0||i.size===0)continue;const H=n1(s,u,w);if(H.length!==2)continue;const O=H.map(F=>r1(t,F));if(!O.some(F=>F.width*F.height===0||o1(F)<e1))for(let F=0;F<H.length;F++){const X=O[F];if(i1(X)<J_)continue;m===null&&(m=c1(e,i));const Q=d1(e,X,m);if(Q&&!G.has(Q)){G.add(Q);const le=H[F];o.push({id:Q,boundingBox:{x:le.x,y:le.y,width:le.w,height:le.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return o}const Cm=128,p1=.56,f1=15,m1=.58,g1=70,y1=50,w1=.12,b1=.2,_1=.1,x1=.17,Am=.15;function $1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Rm(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,a-u),c=Math.max(0,s-u),d=Math.min(n,a+u),p=Math.min(r,s+u),f=d-l,m=p-c,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+c)*n+l)*i;y.set(o.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function v1(e){const t=Rm(e,p1),n=fb(t),r=cm(n,Cm,Cm);return mb(r)}function M1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,a=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;o+=l*c,a+=l*l,s+=c*c}return o/(Math.sqrt(a*s)+1e-6)}function S1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Rm(e,m1),{width:r,height:i,channels:o,data:a}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*o,{h:m,s:y,v:w}=Et(a[f],a[f+1],a[f+2]);y>=g1&&w>=y1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const c=u/s,d=l/s;return c>=w1&&t.set("masonry",Am*Math.min(1,c/b1)),d>=_1&&t.set("strategy",Am*Math.min(1,d/x1)),t}function I1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=v1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=f1)o.push(wb(n,l,i));const a=new Map;for(const[l,c]of t){let d=-1/0;for(const p of o){const f=M1(p,c);f>d&&(d=f)}a.set(l,d)}for(const[l,c]of S1(e))c>0&&a.has(l)&&a.set(l,a.get(l)+c);let s="",u=-1/0;for(const[l,c]of a)c>u&&(s=l,u=c);return[s,u]}const on=224,T1=512,E1=[.485,.456,.406],k1=[.229,.224,.225];function C1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function A1(e){const t=ha(e,on,on),n=on*on,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-E1[o])/k1[o];return r}function R1(e){const t=3*on*on,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(A1(Ht(e,r)),r*t);return n}function O1(e,t=T1){const n=e.length/t,r=new Float32Array(t);for(let o=0;o<n;o++)for(let a=0;a<t;a++)r[a]+=e[o*t+a];let i=0;for(let o=0;o<t;o++)r[o]/=n,i+=r[o]*r[o];i=Math.max(Math.sqrt(i),1e-9);for(let o=0;o<t;o++)r[o]/=i;return r}function N1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let o=0;const a=i*e.dim;for(let s=0;s<e.dim;s++)o+=e.x[a+s]*t[s];o>r&&(r=o,n=i)}return{id:e.ids[n],cosine:r}}const Gn=96,z1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],B1=.45;function P1(e){const t=ha(e,Gn,Gn),n=Gn*Gn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function D1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=B1?z1[t]??"":"",prob:n}}const Wn=128,Om=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],Aa=.5,Ra=.9;function U1(e){const t=Un(e,Wn,Wn),n=Wn*Wn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function L1(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8ClampedArray(t*n*r);for(let a=0;a<t;a++)for(let s=0;s<n;s++){const u=a,c=((n-1-s)*t+u)*r,d=(a*n+s)*r;for(let p=0;p<r;p++)o[d+p]=i[c+p]}return{width:n,height:t,channels:r,data:o}}function F1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=L1(n);return n}function G1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function W1(e,t,n){const r=n===void 0?[0,1,2,3]:[(n%4+4)%4];let i=0,o=-1,a=r[0],s=0,u=-1;const l=new Set,c=async f=>{l.add(f);const m=f===0?e:F1(e,f),y=await t(U1(m)),w=G1(y);f===0&&(s=w.index,u=w.prob),w.prob>o&&(o=w.prob,i=w.index,a=f)};for(const f of r)await c(f);if(n!==void 0&&o<Aa)for(let f=0;f<4;f++)l.has(f)||await c(f);const d=o>=Aa?Om[i]??"":"",p=u>=Aa?Om[s]??"":"";return{id:d==="other"?"":d,prob:o,k0Id:p==="other"?"":p,k0Prob:u,kBest:a}}const qn=96,q1=[1,2,3,4,5,6,7],V1=.8,H1=.99;function j1(e){const t=pa(e,e.width*2,e.height*2),n=Un({width:e.width*2,height:e.height*2,channels:3,data:t},qn,qn),r=qn*qn,i=new Float32Array(3*r);for(let o=0;o<r;o++)for(let a=0;a<3;a++)i[a*r+o]=n[o*3+a]/255;return i}function K1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:q1[t],prob:e[t]}}const an=128,Nm=.35,Y1=["fp","laurel"],X1=.85,Vn=40;function Q1(e){const r=(e.width<an&&e.height<an?pa:Un)(e,an,an),i=an*an,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function Z1(e){return e[Y1.indexOf("fp")]}const sn=128,J1=.15,zm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],e2=7,t2=.9;function n2(e,t,n){const[r,i,o,a]=e.map(Number);if(!(o>1)||!(a>1))return null;const s=r+o/2,u=i+a/2,l=Math.max(o,a)*(1+2*J1),c=Math.max(0,it(s-l/2)),d=Math.max(0,it(u-l/2)),p=Math.min(t,it(s+l/2)),f=Math.min(n,it(u+l/2));return p-c<8||f-d<8?null:{x:c,y:d,w:p-c,h:f-d}}function r2(e){const r=(e.width<sn&&e.height<sn?pa:Un)(e,sn,sn),i=sn*sn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function i2(e){let t=0;for(let i=1;i<zm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=e2;return{className:zm[t],probability:n,rejected:r&&n>=t2}}const ti=3,o2=2.2,a2=.3,s2=.65,u2=3,l2=1.3,c2=.77;function Bm(e,t,n){const[r,i,o,a]=e,s=[];return r<=ti&&s.push("gauche"),i<=ti&&s.push("haut"),r+o>=t-ti&&s.push("droit"),i+a>=n-ti&&s.push("bas"),s}function Pm(e){const t=e[3]/Math.max(e[2],1);return t>=l2?"portrait":t<=c2?"paysage":null}function Oa(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function d2(e,t,n){for(const[r,i,o,a]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(a-i)/Math.max(n,1))>s2)return!0;return!1}function h2(e,t,n,r,i){try{const o=[...e],a=o.filter(w=>Bm(w.box,r,i).length>0);if(a.length===0)return{kept:o,dropped:[],suspects:[]};const s=o.filter(w=>!a.includes(w)),u=w=>({kept:s,dropped:a.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(d2(n,r,i))return u("photo-piste");if(s.length<u2)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:a.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(a.length>(s.length+a.length)/3)return u("debordement-structurel");const l=Oa(s.map(w=>w.box[2]*w.box[3])),c=Oa(s.map(w=>w.box[2])),d=Oa(s.map(w=>w.box[3])),p=new Set(s.map(w=>Pm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of a){const b=Bm(w.box,r,i),[,,x,v]=w.box,M=l>0?x*v/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&I.push(d>0?v/d:1);const E=I.length>0?Math.min(...I):1,k=Pm(w.box);M>o2?m.push({banner:w,edgeReason:"bord-grosse"}):E<a2?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const p2=1,f2=1.5;function m2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function g2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(i,o);if(a<=0)return null;const s=((e-n[0])*i+(t-n[1])*o)/(a*a);return[Math.abs((e-n[0])*o-(t-n[1])*i)/a,Math.abs(s-.5)*a]}function y2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function w2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,a,s]=t,u=i+a/2,l=o+s/2;let c=null;for(const[p,f]of m2(e)){const m=g2(u,l,p,f);m!==null&&(c===null||m[0]<c[0])&&(c=m)}if(c===null)return null;const d=y2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==a>s}}catch{return null}}function b2(e,t,n,r=p2,i=f2){const o=[];for(const[a,s]of t??[]){const u=w2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,a]))}return o.length===0?null:(o.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),o[0][1])}const gt=64,Dm=.5,_2=[.67,1.24];function Um(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),a=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=a-i,l=s-o;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=o+w,x=b-n;for(let v=0;v<u;v++){const M=i+v,I=M-t,E=(w*u+v)*3;if(I*I+x*x<=p){const k=(b*e.width+M)*c;d[E]=e.data[k],d[E+1]=e.data[k+1],d[E+2]=e.data[k+2]}else d[E]=255,d[E+1]=255,d[E+2]=255}}const f=Un({width:u,height:l,channels:3,data:d},gt,gt),m=gt*gt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function x2(e){return e[1]}const ni=[1,3,6],$2=.5;function v2(e){if(e.length!==ni.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ni[t],prob:e[t]}}function M2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ni.includes(i.denomination)&&i.prob>=$2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const S2=2.25,ri=3,I2=1.15,T2=.5,E2=2.5,k2=.75,C2=2.25,A2=1.3,R2=.77;function ii(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function O2(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),t.length<=2)return t;const n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Lm(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[(o+1)%i];if(s>t!=l>t){const c=(u-a)*(t-s)/(l-s)+a;e<c&&(r=!r)}}return r}function N2(e,t,n){if(n.length>=3&&Lm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[i>1?(o+1)%i:o],c=u-a,d=l-s,p=c*c+d*d,f=p===0?0:Math.max(0,Math.min(1,((e-a)*c+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(a+f*c),t-(s+f*d)))}return r}function z2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function B2(e,t,n){const[r,i]=e,o=t[0]-r,a=t[1]-i;if(o===0&&a===0)return!1;const[s,u,l,c]=n;let d=0,p=1;const f=[[-o,r-s],[o,l-r],[-a,i-u],[a,c-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?d=Math.max(d,w):p=Math.min(p,w),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const Na=e=>e.box[3]/Math.max(1,e.box[2]),Kt=e=>Na(e)>I2,Hn=e=>Na(e)>=A2||Na(e)<=R2;function za(e){const[t,n,r,i]=e.box;if(r>=i){const a=7*i;return[t,n-a,r,i+2*a]}const o=7*r;return[t-o,n,r+2*o,i]}function Ba(e,t,n,r,i){const o=new Set(t),a=[...e.map((N,C)=>({box:[N[0],N[1],N[2],N[3]],kind:o.has(C)?"card":"tucked",src:["banner",C]})),...n.map((N,C)=>({box:[N[0],N[1],N[2],N[3]],kind:"wonder",src:["wonder",C]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(a.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=a.map(N=>[N.box[0]+N.box[2]/2,N.box[1]+N.box[3]/2]);let c=a.filter(N=>N.kind!=="wonder").map(N=>Math.hypot(N.box[2],N.box[3])).sort((N,C)=>N-C);c.length===0&&(c=a.map(N=>Math.hypot(N.box[2],N.box[3])).sort((N,C)=>N-C));const d=c[Math.floor(c.length/2)],p=(S2*d)**2,f=a.map((N,C)=>C),m=N=>{let C=N;for(;f[C]!==C;)f[C]=f[f[C]],C=f[C];return C},y=a.map((N,C)=>N.kind==="card"?C:-1).filter(N=>N>=0),w=a.map((N,C)=>N.kind!=="card"?C:-1).filter(N=>N>=0);for(let N=0;N<y.length;N+=1)for(let C=N+1;C<y.length;C+=1){const z=y[N],U=y[C],P=a[z],j=a[U];if(Hn(P)&&Hn(j)&&Kt(P)!==Kt(j))continue;const ne=l[z][0]-l[U][0],J=l[z][1]-l[U][1],de=ne*ne+J*J;let $e=de<=p;!$e&&Hn(P)&&Hn(j)&&Kt(P)===Kt(j)&&de<=(4*d)**2&&($e=ii(za(P),za(j))<=.5*d),$e&&(f[m(z)]=m(U))}for(let N=0;N<w.length;N+=1)for(let C=N+1;C<w.length;C+=1){const z=w[N],U=w[C];ii(a[z].box,a[U].box)<=k2*d&&(f[m(z)]=m(U))}const b=new Map;for(const N of w){const C=m(N);b.set(C,[...b.get(C)??[],N])}const x=new Map;for(const N of y){const C=m(N);x.set(C,[...x.get(C)??[],N])}for(const N of b.values()){const C=N.filter(j=>a[j].kind==="wonder"&&Hn(a[j])).map(j=>Kt(a[j])),z=C.length>0?C.filter(Boolean).length*2>C.length:null,U=[];for(const[j,ne]of x){let J=Number.POSITIVE_INFINITY;for(const W of N)for(const ee of ne)J=Math.min(J,ii(a[W].box,a[ee].box));if(J>C2*d)continue;const $e=ne.filter(W=>Kt(a[W])).length/ne.length>=.5;z!==null&&$e!==z||U.push([j,J,$e])}if(U.length===0)continue;const P=new Set(U.map(j=>j[2]));if(U.length>=2&&P.size===1&&z!==null){const j=U[0][0];for(const[ne]of U.slice(1))f[m(ne)]=m(j);f[m(N[0])]=m(j)}else{const j=U.reduce((ne,J)=>J[1]<ne[1]?J:ne);f[m(N[0])]=m(j[0])}}let v=new Map;for(let N=0;N<a.length;N+=1){const C=m(N);v.set(C,[...v.get(C)??[],N])}const M=a.map((N,C)=>N.kind==="wonder"?C:-1).filter(N=>N>=0);if(M.length>0){const N=(z,U)=>{const[P,j,ne,J]=za(a[z]),[de,$e,W,ee]=a[U].box,re=Math.max(0,Math.min(P+ne,de+W)-Math.max(P,de)),oe=Math.max(0,Math.min(j+J,$e+ee)-Math.max(j,$e));return re*oe>=.9*a[z].box[2]*a[z].box[3]},C=new Map;for(let z=0;z<a.length;z+=1)if(!(a[z].kind!=="card"||!Hn(a[z])))for(const U of M){const P=ii(a[z].box,a[U].box);if(P<=.8*d&&Kt(a[z])!==Kt(a[U])&&N(z,U)){const j=C.get(U);(!j||P<j[1])&&C.set(U,[z,P])}}for(const[z,[U]]of C){const P=m(z);for(const[j,ne]of v){const J=ne.indexOf(U);if(J>=0&&j!==P){ne.splice(J,1),v.set(P,[...v.get(P)??[],U]),a[U].kind="tucked";break}}}v=new Map([...v].filter(([,z])=>z.length>0))}const I=N=>N.filter(C=>a[C].kind==="card").length,E=N=>{const C=N.filter(z=>a[z].kind==="card"||a[z].kind==="wonder");return C.length===0?null:C.filter(z=>Kt(a[z])).length/C.length},k=N=>[N.reduce((C,z)=>C+l[z][0],0)/N.length,N.reduce((C,z)=>C+l[z][1],0)/N.length],S=[i[0]/2,i[1]/2],R=[...v.values()].sort((N,C)=>{const z=I(N),U=I(C);if(z!==U)return U-z;const P=Math.hypot(k(N)[0]-S[0],k(N)[1]-S[1]),j=Math.hypot(k(C)[0]-S[0],k(C)[1]-S[1]);return P-j}),B=k(R[0]),q=E(R[0]),G=R.map((N,C)=>{if(C===0||I(N)<ri)return"player";const z=E(N),U=z!==null&&q!==null&&Math.abs(z-q)>=T2,P=k(N),j=r.some(ne=>B2(B,P,ne));return U||j?"opponent":"player"});if(!G.includes("opponent")){const N=z=>z.reduce((U,P)=>U+(a[P].kind==="wonder"?1:0),0);let C=G.map((z,U)=>U).filter(z=>z>0&&(I(R[z])>=ri||N(R[z])>=2));if(C.reduce((z,U)=>z+N(R[U]),0)<1&&(C=[]),C.length>0&&(I(R[0])<2*ri||C.reduce((z,U)=>z+I(R[U]),0)<2*ri)&&(C=[]),C.length>0){const z=new Map(C.map(j=>[j,k(R[j])])),U=(j,ne)=>(j[0]-ne[0])**2+(j[1]-ne[1])**2;if(C.every((j,ne)=>C.slice(ne+1).every(J=>U(z.get(j),z.get(J))<Math.min(U(z.get(j),B),U(z.get(J),B)))))for(const j of C)G[j]="opponent"}}const H=[],O=[];let F=!1;R.forEach((N,C)=>{const z=G[C];z==="opponent"&&(F=!0);const U=[],P=[];for(const j of N){const[ne,J,de,$e]=a[j].box;U.push([ne,J],[ne+de,J],[ne,J+$e],[ne+de,J+$e]),P.push(a[j].box);const[W,ee]=a[j].src;W==="banner"?s[ee]=z:u[ee]=z}H.push([z,O2(U)]),O.push([z,P])});const X=(N,C,z)=>Math.min(...O[z][1].map(U=>z2(N,C,U))),Q=(N,C)=>H.map(([,z],U)=>z.length>=3&&Lm(N,C,z)?U:-1).filter(z=>z>=0),le=(N,C)=>{if(H.length===0)return"player";const z=d>0?E2*d:Number.POSITIVE_INFINITY,U=Q(N,C);if(U.length>0){const ne=U.reduce((J,de)=>X(N,C,de)<X(N,C,J)?de:J);return H[ne][0]}let P=-1,j=Number.POSITIVE_INFINITY;return H.forEach(([,ne],J)=>{const de=N2(N,C,ne);de<j&&(P=J,j=de)}),P>=0&&j<=z?H[P][0]:"none"},L=(N,C)=>{if(H.length===0)return"none";const z=Q(N,C);if(z.length===0)return"none";const U=z.reduce((P,j)=>X(N,C,j)<X(N,C,P)?j:P);return H[U][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:F,hulls:H,hullBoxCounts:O.map(([,N])=>N.length),pointOwner:le,pointInside:L}}const P2=3;function D2(e,t=P2){const n=e.length,r=Array.from({length:n},(a,s)=>s),i=a=>{for(;r[a]!==a;)r[a]=r[r[a]],a=r[a];return a};for(let a=0;a<n;a+=1)for(let s=a+1;s<n;s+=1){const u=e[a],l=e[s],c=Number(u.center[0]),d=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![c,d,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(c-p,d-f)<=t*(m+y)&&(r[i(a)]=i(s))}const o=new Map;for(let a=0;a<n;a+=1){const s=i(a);o.has(s)||o.set(s,[]),o.get(s).push(a)}return[...o.values()]}function U2(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),a=Number(n[3]),s=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,a)-t,0,t-Math.max(i,a));return Math.hypot(s,u)}function L2(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{const o=new Set(i());if(o.size===0)return[];const a=D2(e),s=[];for(const l of a){const c=l.map(v=>e[v]),d=c.filter(v=>o.has(v));if(d.length===0)continue;let p=0,f=0,m=0;for(const v of c){const M=Number(v.center[0]),I=Number(v.center[1]);f+=M,m+=I,t.pointInside(M,I)===n&&(p+=1)}const y=f/c.length,w=m/c.length,b=r&&r.length>0?Math.min(...r.map(v=>U2(y,w,v))):0,x=d.reduce((v,M)=>v+(Number(M.denomination??0)||0),0);s.push({miens:d,inside:p,dPiste:b,valeur:x})}return s.length===0?[]:s.length===1?s[0].miens:s.reduce((l,c)=>{const d=[l.inside>0?1:0,l.inside,l.dPiste,l.valeur],p=[c.inside>0?1:0,c.inside,c.dPiste,c.valeur];for(let f=0;f<4;f+=1){if(p[f]>d[f])return c;if(p[f]<d[f])return l}return l}).miens}catch{try{return i()}catch{return[...e]}}}const F2=1280,G2=80,W2=3,q2=3,V2=.3,H2=2.4,j2=1,K2=5.2,Y2=5;function Pa(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function X2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=V2&&r/n<=H2&&i/n>=j2&&i/n<=K2&&i/r<=Y2}function Q2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*F2/r<G2}function Z2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),o=r.poly.map(s=>s[1]),a=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/a,cy:o.reduce((s,u)=>s+u,0)/a,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),a=Number(r[2]),s=Number(r[3]);if(![i,o,a,s].every(Number.isFinite))continue;const u=i+a/2,l=o+s/2;let c=n[0],d=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<d&&(d=f,c=p)}c.extra.push([i,o],[i+a,o+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Fm(e,t,n,r,i=[]){const o=Pa(n);if(!Q2(e,t,o))return[];const a=r.filter(l=>l.n>=q2&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),s=Math.round(o*W2),u=[];for(const l of Z2(a,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...c))-s),f=Math.max(0,Math.trunc(Math.min(...d))-s),m=Math.min(e,Math.trunc(Math.max(...c))+s),y=Math.min(t,Math.trunc(Math.max(...d))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function J2(e,t,n){if(!e||e.length<4)return null;const[r,i,o,a]=[e[0],e[1],e[2],e[3]];return X2(o,a,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(a)]:null}function ex(e,t,n,r,i){return Fm(e,t,n,r,i)}function tx(e,t){var s,u,l,c;const[n,r,i,o]=t,a=[];for(const d of e){const p=Number((s=d.box)==null?void 0:s[0]),f=Number((u=d.box)==null?void 0:u[1]),m=Number((l=d.box)==null?void 0:l[2]),y=Number((c=d.box)==null?void 0:c[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>o||a.push({...d,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return a}function nx(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,o=r.y+r.height/2;let a=!1;for(const s of t){if(n.id&&s.id===n.id){a=!0;break}const u=s.boundingBox,l=u.x+u.width/2,c=u.y+u.height/2,d=.5*Math.min(u.width,u.height);if((i-l)**2+(o-c)**2<d*d){a=!0;break}}a||t.push(n)}return t}function Gm(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const rx=1.1,ix=3.2,ox=20,ax=.5,sx=1280,ux=.18,lx=28,cx=.3;function dx(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let a=0;a<30;a++){const s=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(s.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(s.reduce((c,d)=>c+d,0)/s.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((a,s)=>(a<=r?i:o).push(s)),[i,o]}function hx(e,t,n=rx){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),a=e.map(l=>l[1]+l[3]/2),s=Math.max(...o)-Math.min(...o)>Math.max(...a)-Math.min(...a)?o:a,u=[];for(const l of dx(s)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,B)=>R-B),p=d[Math.trunc(d.length/2)],f=ix*p,m=Math.max(0,Math.min(...c.map(R=>R[0]))-f),y=Math.max(0,Math.min(...c.map(R=>R[1]))-f),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+f),b=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const v=ax*p*sx/x,M=v>0?Math.max(1,Math.ceil(ox/v)):1;if(M===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,k=(I?w-m:b-y)/M,S=k*(1+ux);for(let R=0;R<M;R++){let B=(I?m:y)+R*k-(S-k)/2;B=Math.max(I?m:y,B);const q=Math.min(I?w:b,B+S);u.push(I?[Math.trunc(B),Math.trunc(y),Math.trunc(q),Math.trunc(b)]:[Math.trunc(m),Math.trunc(B),Math.trunc(w),Math.trunc(q)])}}return u.filter(([l,c,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-c))>=n)}function px(e,t,n,r=lx){const[i,o]=n,a=e;for(const[s,u,l,c]of t){const d=(s+l)/2+i,p=(u+c)/2+o;a.some(([m,y,w,b])=>{const x=d-(m+w)/2,v=p-(y+b)/2;return Math.hypot(x,v)<=r})||a.push([s+i,u+o,l+i,c+o])}return a}function fx(e,t,n,r=cx){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function mx(e,t,n){return n.some(([r,i,o,a])=>r<=e&&e<=o&&i<=t&&t<=a)}function gx(e,t,n,r){return n.length===0?!1:mx(e,t,n)&&!fx(e,t,r)}const Wm=4,qm=8,oi=5,Tn="base-game rule";function zt(e,t){return{code:e,message:t,severity:"warning"}}function Da(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function yx(e,t=""){const n=e.filter(a=>!!a),r=t||"a player",i=[];n.length>Wm&&i.push(zt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Wm} (${Tn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=Da(n);return o.length>0&&i.push(zt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${Tn}), so one of the two readings is wrong.`)),i}function wx(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(a=>!!a))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>qm&&t.push(zt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${qm} are in play (${Tn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,a]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],c=[...a].filter(d=>l.has(d)).sort();c.length>0&&t.push(zt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function bx(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(a=>!!a));r.length>oi&&n.push(zt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${oi} are in play (${Tn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Da(r);if(i.length>0&&n.push(zt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Tn}).`)),t!==null){const o=t.filter(Boolean),a=r.length+o.length;a!==oi&&n.push(zt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${a}, but exactly ${oi} are in play (${Tn}) — one is missing or one was counted twice.`));const s=new Set(o),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(zt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function _x(e,t=""){const n=t||"a player",r=[],i=e.filter(a=>!a).length;i>0&&r.push(zt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=Da(e.filter(a=>!!a));return o.length>0&&r.push(zt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${Tn}).`)),r}const xx=.25,$x=.45;function vx(e,t,n,r,i){const o=Math.cos(i),a=Math.sin(i),s=[n/2*o,n/2*a],u=[-r/2*a,r/2*o],c=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function Ua(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function Vm(e,t){const n=Ua(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function Mx(e,t,n){const r=Ua(e,t),i=Ua(e,n),o=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,o,!0))}finally{r.delete(),i.delete(),o.delete()}}function Sx(e,t,n=$x){const r=[...t].sort((o,a)=>a.confidence-o.confidence),i=[];for(const o of r){let a=!1;for(const s of i){const u=Mx(e,o.quad,s.quad);if(u<=0)continue;const l=Vm(e,o.quad)+Vm(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){a=!0;break}}a||i.push(o)}return i}function Ix(e,t,n,r,i=xx){const o=[];for(let a=0;a<n;a++){const s=t[4*n+a];if(s<i)continue;const l=vx(t[a],t[n+a],t[2*n+a],t[3*n+a],t[5*n+a]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);o.push({quad:l,confidence:s})}return Sx(e,o)}const ai=128,si=88;function Tx(e,t,n,r=ai,i=si){const o=new e.Mat(t.height,t.width,e.CV_8UC3),a=o.data,s=t.channels;for(let p=0,f=t.width*t.height;p<f;p++)a[p*3]=t.data[p*s],a[p*3+1]=t.data[p*s+1],a[p*3+2]=t.data[p*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(p=>[p[0],p[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(o,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{o.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function Ex(e){return[e[2],e[3],e[0],e[1]]}const kx=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Cx=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],Ax=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],Rx=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],Ox=[...Cx,...Ax,...Rx,...kx];Object.fromEntries(Ox.map(e=>[e.id,e]));const Nx=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Hm=.2,zx=.3,jm=.25,jn={total:0,idDiff:0,verdictDiff:0},yt={pass1Calls:0,pass1Boxes:0,pass1Kept:0,pass2Calls:0,pass2Boxes:0,pass2Promoted:0},Bt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},un={total:0,memeK:0,memeKInverse:0,detail:[]};function Km(e,t,n){for(const r of e){let i=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const s=r[o],u=r[a];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(o=>[o[0],o[1]])}return null}function Bx(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=jm)return!1;const i=e.x+e.width,o=e.y+e.height;for(const a of n){const s=a.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=o))continue;const c=s[2]/s[3];if(!(Math.abs(Math.log(c))<=jm)&&r>1==c>1)return!0}return!1}async function Px(e,t,n,r,i=[0,1,2,3]){const[o,a,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*Hm),c=Math.round(u*Hm),d=Math.max(0,Math.round(o-l)),p=Math.max(0,Math.round(a-c)),f=Math.min(e.width,Math.round(o+s+l)),m=Math.min(e.height,Math.round(a+u+c)),y=f-d,w=m-p;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let I=0;I<w;I++){const E=((p+I)*e.width+d)*b;x.set(e.data.subarray(E,E+y*b),I*y*b)}const v={width:y,height:w,channels:b,data:x};let M=null;for(const I of i){const E=I===0?v:Ht(v,I),k=E.width,S=k-Math.floor(zx*k),R=k-S;if(R<=0)continue;const B=new Uint8ClampedArray(R*E.height*E.channels);for(let F=0;F<E.height;F++){const X=(F*k+S)*E.channels;B.set(E.data.subarray(X,X+R*E.channels),F*R*E.channels)}const q={width:R,height:E.height,channels:E.channels,data:B},G=Zr(q),O=(await n.run({[n.inputNames[0]]:new ze("float32",G,[1,3,mt,mt])}))[n.outputNames[0]].data[1]??0;r&&(r[I]=O),M=M===null?O:Math.max(M,O)}return M}async function Ym(e,t,n,r,i,o,a){var m;const s=(y,w,b,x)=>{const v=Math.max(0,Math.round(y)),M=Math.max(0,Math.round(w)),I=Math.min(n.width,Math.round(y+b)),E=Math.min(n.height,Math.round(w+x)),k=I-v,S=E-M;if(k<=0||S<=0)return null;const R=n.channels,B=new Uint8ClampedArray(k*S*R);for(let q=0;q<S;q++){const G=((M+q)*n.width+v)*R;B.set(n.data.subarray(G,G+k*R),q*k*R)}return{width:k,height:S,channels:R,data:B}},u=async y=>(await i.run({[i.inputNames[0]]:new ze("float32",y,[1,3,Wn,Wn])}))[i.outputNames[0]].data,l=e.obbQuads===void 0?null:await ht("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(y){return console.warn("[wonders-obb] détection échouée, repli ORB :",y),null}}),c=new Map;for(const y of r){const[w,b,x,v]=y;if(x<=0||v<=0)continue;const M=ft("identify: crop de boite",()=>s(w,b,x,v));if(M===null)continue;const I=l===null?null:Km(l,w+x/2,b+v/2),E=I===null?void 0:(4-(Math.round(Math.atan2(I[1][1]-I[0][1],I[1][0]-I[0][0])*180/Math.PI/90)%4+4)%4)%4,{id:k,prob:S,k0Id:R,k0Prob:B,kBest:q}=await ht("classifieur merveille (TTA)",()=>W1(M,u,E));if(E===void 0&&(jn.total+=1,(R??"")!==k&&(jn.idDiff+=1),k!==""&&S>=Ra&&((R??"")!==k||(B??0)<Ra)&&(jn.verdictDiff+=1)),k===""||S<Ra)continue;const G=c.get(k);(G===void 0||S>G.prob)&&c.set(k,{prob:S,box:y,kBest:q??0})}const d=[],p=await e.tuckClassifier(),f=await e.tuckBoxClassifier();for(const[y,{prob:w,box:b,kBest:x}]of c){const[v,M,I,E]=b;let k={x:Math.round(v),y:Math.round(M),width:Math.round(I),height:Math.round(E)},S=null,R=[],B=null;const q=l===null?null:Km(l,v+I/2,M+E/2);if(q!==null){const C=q[1][1]-q[0][1],z=q[1][0]-q[0][0],U=Math.atan2(C,z)*180/Math.PI,P=(Math.round(U/90)%4+4)%4;un.total+=1,x===P&&(un.memeK+=1),x===(4-P)%4&&(un.memeKInverse+=1),un.detail.push(`${y.slice(0,14)}:tta${x}/quad${P}`)}if(q!==null){S=q;const C=S.map(j=>j[0]),z=S.map(j=>j[1]),U=Math.max(0,Math.round(Math.min(...C))),P=Math.max(0,Math.round(Math.min(...z)));if(k={x:U,y:P,width:Math.min(n.width,Math.round(Math.max(...C)))-U,height:Math.min(n.height,Math.round(Math.max(...z)))-P},p!==null)try{const j=await e.wonderRef(y),ne=S,J=j===null||ne===null?null:ft("identify: bande droite #63",()=>Ea(t,n,j,ne));if(J!==null){const de=ft("identify: preprocess tuck",()=>Zr(J)),$e=await p.run({[p.inputNames[0]]:new ze("float32",de,[1,3,mt,mt])});B=ka($e[p.outputNames[0]].data).prob,R=B>=Fn?["R"]:[]}}catch{}}else if(Date.now()<o)try{const C=await ht("chargement refs merveilles",()=>e.wonderRef(y));if(C!==null){const z=ft("ORB registration (merveille)",()=>_m(t,n,C,b));if(z!==null){S=z.footprint,R=z.overflow;const U=S.map(J=>J[0]),P=S.map(J=>J[1]),j=Math.max(0,Math.round(Math.min(...U))),ne=Math.max(0,Math.round(Math.min(...P)));if(k={x:j,y:ne,width:Math.min(n.width,Math.round(Math.max(...U)))-j,height:Math.min(n.height,Math.round(Math.max(...P)))-ne},p!==null)try{const J=S,de=J===null?null:ft("identify: bande droite #63",()=>Ea(t,n,C,J));if(de!==null){const $e=ft("identify: preprocess tuck",()=>Zr(de)),W=await p.run({[p.inputNames[0]]:new ze("float32",$e,[1,3,mt,mt])});B=ka(W[p.outputNames[0]].data).prob}}catch{}}}}catch(C){console.warn(`[wonders-cls] ${y} registration failed:`,C)}const G=S!==null?Qr(S,R):null,H=q!==null&&S!==null?Qr(S,["R"]):null,O=[];if(B!==null&&O.push(B>=Fn?1:0),f!==null)try{let C=[0,1,2,3];if(q!==null){const P=q[1][1]-q[0][1],j=q[1][0]-q[0][0],ne=(Math.round(Math.atan2(P,j)*180/Math.PI/90)%4+4)%4;C=[(0+ne)%4,(2+ne)%4]}const z=[0,0,0,0],U=await ht("identify: sonde marges (#68)",()=>Px(n,b,f,z,C));if(U!==null&&(O.push(U>=Fn?1:0),q!==null)){const P=q[1][1]-q[0][1],j=q[1][0]-q[0][0],ne=(Math.round(Math.atan2(P,j)*180/Math.PI/90)%4+4)%4,J=Math.max(z[(0+ne)%4],z[(2+ne)%4]);Bt.total+=1;const de=U>=Fn?1:0,$e=J>=Fn?1:0;de===1&&(Bt.positifs4+=1),$e===1&&(Bt.positifs2+=1),de!==$e&&(Bt.divergent+=1,Bt.detail.push(`${y.slice(0,12)}:v4=${de}/v2=${$e} p=[${z.map(W=>W.toFixed(2)).join(",")}]kQ${ne}`))}}catch{}const F=H??G??k,X=a.some(C=>{const z=C.box[0]+C.box[2]/2,U=C.box[1]+C.box[3]/2;return z>=F.x&&z<=F.x+F.width&&U>=F.y&&U<=F.y+F.height});O.push(X?1:0);let Q=O.length>0&&O.reduce((C,z)=>C+z,0)*2>O.length;Q&&Bx(F,k,a)&&(Q=!1);const le=G??(Q&&H!==null?H:null),L={id:y,name:((m=Nx[y])==null?void 0:m.name)??y,builtWithCardUnderneath:Q,boundingBox:k,confidence:Math.round(w*1e4)/1e4,...le?{tuckRegion:le}:{}},N=le??k;d.push({obj:L,edgeScores:null,zone:{x0:N.x,y0:N.y,x1:N.x+N.width,y1:N.y+N.height},quad:S,region:le})}return d}async function Xm(e,t,n,r,i,o,a=[]){let s=await e.localiseWonders(n);return s.length===0?[]:a.length>0&&(s=s.filter(([u,l,c,d])=>{const p=u+c/2,f=l+d/2;return!a.some(m=>{const y=m.x+m.width/2,w=m.y+m.height/2,b=.5*Math.min(m.width,m.height);return(p-y)**2+(f-w)**2<b*b})}),s.length===0)?[]:Ym(e,t,n,s,r,i,o)}function Dx(e,t){const n=Gm(e.obj.boundingBox,t),r=e.region===null?null:Gm(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([o,a])=>[o+t[0],a+t[1]]),region:r}}async function Qm(e){try{const t=ex(e.image.width,e.image.height,e.banners.map(a=>a.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const a of t){const s=e.cropFrame(a);if(s.width<=0||s.height<=0)continue;const u=e.skipKnownNear?e.known.map(l=>({x:l.boundingBox.x-a[0],y:l.boundingBox.y-a[1],width:l.boundingBox.width,height:l.boundingBox.height})):void 0;for(const l of await e.detect(s,tx(e.banners,a),u))n.push(Dx(l,a))}if(e.builtSeenOut)for(const a of n)a.obj.id&&a.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(a.obj.id);if(n.length===0)return[];const r=[...e.known.map(a=>({boundingBox:a.boundingBox,id:a.id,neuf:-1})),...n.map((a,s)=>({boundingBox:a.obj.boundingBox,id:a.obj.id,neuf:s}))],i=nx(r),o=[];for(const a of i){const s=a.neuf;s>=0&&o.push(n[s])}return o}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const je="/7wd-scorer/models/",La=[];let kt=null;function Ux(){La.length=0,kt=null}function Lx(e){const t=performance.now();kt!==null&&La.push({nom:kt.nom,ms:Math.round(t-kt.debut)}),kt={nom:e,debut:t}}function Fx(){const e=[...La];kt!==null&&e.push({nom:`${kt.nom} (en cours)`,ms:Math.round(performance.now()-kt.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function Gx(){const e={};for(const t of Object.keys(tt))e[tt[t].onnx]=ci.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of st)e[t]=n;return e}function Wx(){var e,t;return li(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:Be.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let Zm=!1;const ui=new Map;function li(){var e;Zm||(Be.wasm.wasmPaths="/7wd-scorer/ort/",Be.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Zm=!0)}const ci=new Set;function qx(e){li();let t=ui.get(e);return t===void 0&&(t=On.create(`${je}${tt[e].onnx}`,{executionProviders:ci.has(e)?["wasm"]:["webgpu","wasm"]}),ui.set(e,t),t.catch(()=>ui.delete(e))),t}const st=new Map;let yr=0,wr=0;const di=new Map;function Fa(e){const t=(kt==null?void 0:kt.nom)??"(hors etage)";di.set(t,(di.get(t)??0)+e)}function Vx(){return[...di.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let Ga=0;function Hx(){return{ms:Math.round(yr),appels:wr,preparationMs:Math.round(Ga)}}function jx(){yr=0,wr=0,Ga=0,Iw(),di.clear()}const Jm=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx","pawn_ends.onnx","track_band.onnx"]),Wa=new Set;async function qa(e,t){return On.create(`${je}${e}`,{executionProviders:t?["webgpu"]:["wasm"]})}async function ut(e){li();const t=!Jm.has(e)&&!Wa.has(e);let n=null;if(t)try{n=await qa(e,!0),st.set(e,"webgpu")}catch(a){Wa.add(e),st.set(e,`wasm (webgpu refuse a la creation: ${String(a).slice(0,60)})`)}else st.set(e,Jm.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await qa(e,!1)}catch(a){return st.set(e,`ECHEC wasm: ${String(a).slice(0,160)}`),null}let r=n,i=st.get(e)==="webgpu";const o=async(a,...s)=>{const u=performance.now();try{const l=await r.run(a,...s),c=performance.now()-u;return yr+=c,Fa(c),wr+=1,l}catch(l){if(!i)throw l;Wa.add(e),st.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await qa(e,!1);const c=await r.run(a,...s),d=performance.now()-u;return yr+=d,Fa(d),wr+=1,c}};return new Proxy(r,{get(a,s,u){if(s==="run")return o;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let Va=null,Ha=null;const Kx=.75,Yx=4,Xx=.65,Qx=3e4;let ja=null;function Kn(){return ja===null&&(ja=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ja}const eg=new Map;function Ka(e){let t=eg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${je}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const a=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),eg.set(e,t)),t}function Ya(e){return Ka(`wonder-refs/${e}.jpg`)}const tg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Zx(){const e=new Map;for(const t of tg){const n=await Ka(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function Jx(){const e=new Map;for(const t of tg){const n=await Ka(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const e$=.6,t$=12,n$=45e3;let Xa=null;function ng(){return Xa===null&&(li(),Xa=(async()=>{try{const[e,t,n,r]=await Promise.all([On.create(`${je}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),On.create(`${je}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${je}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${je}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Qb(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Xa}async function r$(e,t){const n=Math.max(Xb/jt,t.width/t.height),{tensor:r,width:i}=Jb(t,n),o={[e.rec.inputNames[0]]:new ze("float32",r,[1,3,jt,i])},a=(await e.rec.run(o))[e.rec.outputNames[0]],[s,u,l]=a.dims,c=a.data,d=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=c[w+b];x>y&&(y=x,m=b)}d[f]=m,p[f]=y}return Zb(d,p,e.charset)}function i$(...e){return ht("merveilles (OCR+ORB+opencv)",()=>o$(...e))}async function o$(e,t){const n=await ng();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+n$;let o=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){o=!0;break}t(`wonder names: rotation ${a*90}°…`,a/4);const s=Ht(e,a),u=Lb(s),l={[n.det.inputNames[0]]:new ze("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(l))[n.det.outputNames[0]],d=Hb(c.data,u,s.width,s.height).slice(0,t$);console.debug(`[wonders-ocr] rot ${a*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){o=!0;break e}const f=jb(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await r$(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<e$||m.trim().length<Yx)continue;const w=a_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<Kx||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Qa(p,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:o}}function Qa(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],a=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],s=a.map(d=>d[0]),u=a.map(d=>d[1]),l=Math.min(...s),c=Math.min(...u);return{x:l,y:c,width:Math.max(...s)-l,height:Math.max(...u)-c}}function a$(){return Ha===null&&(Ha=fetch(`${je}laurel_gallery.json`).then(async e=>e.ok?Eb(await e.json()):[]).catch(()=>[])),Ha}function s$(e,t,n,r){return ft("crop",()=>u$(e,t,n,r))}function u$(e,t,n,r){return Pt(e,t-r,n-r,2*r,2*r)}function Pt(e,t,n,r,i){return ft("crop",()=>l$(e,t,n,r,i))}function l$(e,t,n,r,i){const o=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=((p+a)*e.width+(f+o))*e.channels,y=(p*l+f)*3;d[y]=e.data[m],d[y+1]=e.data[m+1],d[y+2]=e.data[m+2]}return{width:l,height:c,channels:3,data:d}}function c$(){return Va===null&&(Va=fetch(`${je}token_templates.json`).then(async e=>e.ok?$1(await e.json()):new Map).catch(()=>new Map)),Va}let Za=null;function d$(){return Za===null&&(Za=(async()=>{try{const e=await fetch(`${je}token_embed_index.json`);if(!e.ok)return null;const t=C1(await e.json()),n=await ut("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),Za}const h$=.92;let Ja=null;function p$(){return Ja===null&&(Ja=(async()=>{try{return(await fetch(`${je}guild_classifier.onnx`,{method:"HEAD"})).ok?await ut("guild_classifier.onnx"):null}catch{return null}})()),Ja}let es=null;function f$(){return es===null&&(es=(async()=>{try{return(await fetch(`${je}laurel_digit.onnx`,{method:"HEAD"})).ok?await ut("laurel_digit.onnx"):null}catch{return null}})()),es}let ts=null,ns=null;function m$(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${je}banner_class.onnx`,{method:"HEAD"})).ok?await ut("banner_class.onnx"):null}catch{return null}})()),ns}async function g$(e,t){if(t.length===0)return t;const n=await m$();if(n===null)return t;const r=[];for(const i of t)try{const o=n2(i.box,e.width,e.height);if(o===null){r.push(i);continue}const a=Pt(e,o.x,o.y,o.w,o.h),s=r2(a),u=await n.run({[n.inputNames[0]]:new ze("float32",s,[1,3,sn,sn])});i2(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function y$(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${je}laurel_filter.onnx`,{method:"HEAD"})).ok?await ut("laurel_filter.onnx"):null}catch{return null}})()),ts}async function w$(e,t,n){let[r,i,o,a]=t,s=o-r,u=a-i;if(s<=0||u<=0)return null;if(s<Vn){const w=Math.floor((r+o)/2);r=w-Math.floor(Vn/2),o=w+Math.floor(Vn/2),s=o-r}if(u<Vn){const w=Math.floor((i+a)/2);i=w-Math.floor(Vn/2),a=w+Math.floor(Vn/2),u=a-i}const l=Math.trunc(Nm*s),c=Math.trunc(Nm*u),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(e.width,o+l),m=Math.min(e.height,a+c),y=Pt(e,d,p,f-d,m-p);if(y.width<=0||y.height<=0)return null;try{const w=Q1(y),b=await n.run({[n.inputNames[0]]:new ze("float32",w,[1,3,an,an])});return Z1(b[n.outputNames[0]].data)}catch{return null}}let rs=null;function b$(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${je}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ut("coin_filter_cnn.onnx"):null}catch{return null}})()),rs}let is=null;function _$(){return is===null&&(is=(async()=>{try{return(await fetch(`${je}coin_denom.onnx`,{method:"HEAD"})).ok?await ut("coin_denom.onnx"):null}catch{return null}})()),is}async function x$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Um(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*gt*gt);r.forEach((u,l)=>i.set(u,l*u.length));const a=(await n.run({[n.inputNames[0]]:new ze("float32",i,[t.length,3,gt,gt])}))[n.outputNames[0]].data,s=ni.length;return t.map((u,l)=>v2(a.subarray(l*s,l*s+s)))}catch{return null}}async function $$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=Um(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const c=new Float32Array(t.length*3*gt*gt);l.forEach((f,m)=>c.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new ze("float32",c,[t.length,3,gt,gt])}))[n.outputNames[0]].data;return t.map((f,m)=>x2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),a=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,s=Math.trunc(a);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let os=null;function rg(){return os===null&&(os=(async()=>{try{return(await fetch(`${je}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ut("tuck_classifier.onnx"):null}catch{return null}})()),os}const ig=.1;let as=null;function og(){return as===null&&(as=(async()=>{try{return(await fetch(`${je}track_band.onnx`,{method:"HEAD"})).ok?await ut("track_band.onnx"):null}catch{return null}})()),as}async function ag(e,t,n){try{const r=jr(t,1280,Rw(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new ze("float32",r.tensor,[1,3,1280,1280])});return pr(i[e.outputNames[0]].data,r.params,ig)}catch{return[]}}let ss=null;const v$=.4;function M$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function S$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const a=o.x+o.width/2,s=o.y+o.height/2;for(const u of n)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||M$(o,u)>=v$)return!1;for(const u of r)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function I$(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${je}tuck_box.onnx`,{method:"HEAD"})).ok?await ut("tuck_box.onnx"):null}catch{return null}})()),ss}let us=null;function T$(){return us===null&&(us=(async()=>{try{return(await fetch(`${je}wonder_classifier.onnx`,{method:"HEAD"})).ok?await ut("wonder_classifier.onnx"):null}catch{return null}})()),us}let sg=null,ug=null;async function E$(e){var f;sg??(sg=ut("wonder_obb.onnx")),ug??(ug=ut("wonder_upright.onnx"));const[t,n]=await Promise.all([sg,ug]);if(t===null||n===null)return null;const r=await Kn();if(r===null)return null;const{tensor:i,params:o}=jr(e,1024),s=(await t.run({[t.inputNames[0]]:new ze("float32",i,[1,3,1024,1024])}))[t.outputNames[0]],u=s.dims[s.dims.length-1],l=s.data;let c=0;for(let m=0;m<u;m++){const y=l[4*u+m];y>c&&(c=y)}const d=Ix(r,l,u,o);st.set("wonder_obb.onnx",`${st.get("wonder_obb.onnx")??"?"} | dims=${s.dims} scoreMax=${c.toFixed(4)} dets=${d.length} q0=${(f=d[0])!=null&&f.quad[0]?JSON.stringify(d[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${o.scale.toFixed(4)} pad=${o.padX},${o.padY}`);const p=[];for(const m of d){let y=m.quad;try{const w=Tx(r,e,y),b=new Float32Array(3*si*ai),x=[.485,.456,.406],v=[.229,.224,.225];for(let E=0,k=ai*si;E<k;E++)for(let S=0;S<3;S++)b[S*k+E]=(w.data[E*3+S]/255-x[S])/v[S];const I=(await n.run({[n.inputNames[0]]:new ze("float32",b,[1,3,si,ai])}))[n.outputNames[0]].data[0];1/(1+Math.exp(-I))<.5&&(y=Ex(y))}catch(w){console.warn("[wonders-obb] head-tail indisponible sur une carte :",w)}p.push(y.map(w=>[w[0],w[1]]))}return p}const ls={wonderRef:Ya,tuckClassifier:rg,tuckBoxClassifier:I$,obbQuads:E$,localiseWonders:async e=>{try{const{rows:t,params:n}=await wt("wonder",e);return fa(t,n,tt.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function k$(e,t){const n=await d$();if(n!==null)try{const r=R1(e),i=new ze("float32",r,[4,3,on,on]),a=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=N1(n.index,O1(a));return u<h$?["",-1]:[s,u]}catch{}return I1(e,t)}const lg=new WeakMap;async function hi(e){const t=lg.get(e);if(t!==void 0)return await t;const n=ht("decodage image",()=>C$(e));return lg.set(e,n),await n}async function C$(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const cg=new WeakMap;async function wt(e,t){let n=cg.get(t);n===void 0&&(n=new Map,cg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=A$(e,t);return n.set(e,i),await i}async function A$(e,t){const n=tt[e],r=performance.now(),{tensor:i,params:o}=jr(t,n.input);Ga+=performance.now()-r;const a=async()=>{const s=await qx(e),u={[s.inputNames[0]]:new ze("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await s.run(u),d=performance.now()-l;yr+=d,Fa(d),wr+=1;const p=c[s.outputNames[0]];return{rows:new Float32Array(p.data),params:o}};try{return await a()}catch(s){if(ci.has(e))throw s;return ci.add(e),ui.delete(e),await a()}}const R$=6,O$=4,N$=5,z$=2;async function B$(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await hi(e),r=await wt("banner",n),i=Kr(r.rows,r.params,tt.banner.conf);if(t.banners=i.length,i.length>=R$)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await wt("laurel",n),a=pr(o.rows,o.params,tt.laurel.conf);if(t.laurels=a.length,a.length>=O$)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const s=await wt("coin",n),u=nm(s.rows,s.params,tt.coin.conf);return t.coins=u.length,u.length>=N$?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=z$?{...t,kind:"board",confidence:.4}:t}function P$(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function dg(e,t,n,r,i,o,a,s){let u=0;r(`${i}: card banners…`,.04);const l=await wt("banner",e);let c=Kr(l.rows,l.params,tt.banner.conf);c=await g$(e,c),r(`${i}: progress tokens…`,.08);let d=[];const p=await og();p!==null&&(d=await ag(p,e,c)),d.length>0&&c.length>0&&(c=c.filter(W=>{const ee=W.box[0]+W.box[2]/2,re=W.box[1]+W.box[3]/2;return!d.some(([oe,ae,xe,_e])=>Math.min(oe,xe)<=ee&&ee<=Math.max(oe,xe)&&Math.min(ae,_e)<=re&&re<=Math.max(ae,_e))}));const f=await wt("token",e),m=await c$(),y=[],w=[];for(const W of Ww(f.rows,f.params,tt.token.conf)){if(w.push({cx:W.cx,cy:W.cy,r:W.r}),d.some(([oe,ae,xe,_e])=>W.cx>=oe&&W.cx<=xe&&W.cy>=ae&&W.cy<=_e))continue;const[ee,re]=await k$(lm(e,W),m);ee===""&&re<0?w.pop():ee===""?u+=1:!y.some(oe=>oe.id===ee)&&!s.some(oe=>oe.id===ee)&&y.push({id:ee,center:[W.cx,W.cy],radius:W.r,confidence:Math.round(re*1e4)/1e4})}r(`${i}: coins…`,.14);const b=await wt("coin",e),x=nm(b.rows,b.params,tt.coin.conf).filter(W=>!w.some(ee=>(W.cx-ee.cx)**2+(W.cy-ee.cy)**2<=W.r*W.r)),v=await b$(),M=v!==null?await $$(e,x,v):null,I=(M!==null?x.filter((W,ee)=>M[ee]>=Dm).map(W=>W.r):[]).sort((W,ee)=>W-ee),E=I.length>0?I.length%2===1?I[(I.length-1)/2]:(I[I.length/2-1]+I[I.length/2])/2:null,[k,S]=_2,R=x.map((W,ee)=>{const re=M!==null?M[ee]:null;return re===null||re>=Dm?"keep":E!==null&&E>0&&W.r/E>=k&&W.r/E<=S?"suspect":"drop"}),B=x.filter((W,ee)=>R[ee]==="keep"),q=pb(e,B),G=await _$(),H=G!==null?await x$(e,B,G):null,O=M2(q,H??q.map(()=>null));O.map(W=>W.value);const F=[];let X=0;if(x.forEach((W,ee)=>{if(R[ee]==="drop")return;if(R[ee]==="suspect"){const oe=M[ee];F.push({denomination:null,center:[W.cx,W.cy],radius:W.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${oe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const re=O[X++];F.push({denomination:re.value,center:[W.cx,W.cy],radius:W.r,denomSource:re.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const W=F.map(re=>re.radius).sort((re,oe)=>re-oe),ee=W.length%2===1?W[(W.length-1)/2]:(W[W.length/2-1]+W[W.length/2])/2;if(ee>0)for(const re of F)re.radius/ee>2&&(re.suspect=!0,re.suspectReason=`radius ${re.radius}px is ${(re.radius/ee).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let W=0;W<F.length;W+=1)for(let ee=W+1;ee<F.length;ee+=1){const re=F[W],oe=F[ee],ae=Math.hypot(re.center[0]-oe.center[0],re.center[1]-oe.center[1]);if(ae<1.1*Math.min(re.radius,oe.radius))for(const xe of[re,oe])xe.suspect||(xe.suspect=!0,xe.suspectReason=`almost concentric with another coin (${ae.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Q=[],le=[],L=[],N=Date.now()+Qx;let C=null,z=null;const U=()=>(z===null&&(z=(async()=>{try{const{rows:W,params:ee}=await wt("wonder",e);return fa(W,ee,tt.wonder.conf,Number.POSITIVE_INFINITY).map(re=>re.box)}catch{return[]}})()),z),P=[];let j=!1;const ne=await T$();if(ne!==null){const W=await U();if(W.length>0&&(C=await ht("opencv.js (chargement)",()=>Kn()),C!==null)){r(`${i}: identifying wonders…`,.35);const ee=await ht("identifyWondersByClassifier",()=>Ym(ls,C,e,W,ne,N,c));for(const re of ee)Q.some(oe=>oe.id===re.obj.id)||a.some(oe=>oe.id===re.obj.id)||(Q.push(re.obj),P.push({obj:re.obj,edgeScores:re.edgeScores,zone:re.zone}),le.push(re.zone),L.push({quad:re.quad,region:re.region}));j=ee.length>0}}j||r(`${i}: wonder names…`,.2);const J=j?{wonders:[],aborted:!1}:await i$(e,(W,ee)=>r(`${i}: ${W}`,.2+.35*(ee??0)));C===null&&(C=J.wonders.length>0?await Kn():null);for(const W of J.wonders){let ee=null;if(C!==null&&Date.now()<N){r(`${i}: registering ${W.name}…`,.6);try{const re=await Ya(W.id);if(re!==null){let oe=w_(C,e,re,[[W.nameBox.x,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y+W.nameBox.height],[W.nameBox.x,W.nameBox.y+W.nameBox.height]]);if(oe===null){const ae=await U(),xe=v_(ae,W.nameBox.x+W.nameBox.width/2,W.nameBox.y+W.nameBox.height/2);xe!==null&&(oe=_m(C,e,re,xe))}if(oe!==null){let ae=oe.built,xe=!1;const _e=await rg();if(_e!==null)try{const ge=Ea(C,e,re,oe.footprint);if(ge!==null){const we=Zr(ge),Ie=await _e.run({[_e.inputNames[0]]:new ze("float32",we,[1,3,mt,mt])});ae=ka(Ie[_e.outputNames[0]].data).built,xe=!0}}catch{}const Z=oe.footprint.map(ge=>ge[0]),te=oe.footprint.map(ge=>ge[1]),se=Math.max(0,Math.round(Math.min(...Z))),fe=Math.max(0,Math.round(Math.min(...te)));ee={built:ae,boundingBox:{x:se,y:fe,width:Math.min(e.width,Math.round(Math.max(...Z)))-se,height:Math.min(e.height,Math.round(Math.max(...te)))-fe},tuckRegion:Qr(oe.footprint,oe.overflow),footprint:oe.footprint,edgeScores:oe.edgeScores,builtByTuck:xe}}}}catch(re){console.warn(`[wonders-reg] ${W.id} failed:`,re)}}if(ee!==null){const re=ee.tuckRegion??ee.boundingBox;le.push({x0:re.x,y0:re.y,x1:re.x+re.width,y1:re.y+re.height}),L.push({quad:ee.footprint,region:ee.tuckRegion})}else{const re=Math.max(8,W.nameBox.height),oe=Math.round(W.nameBox.width*.15);le.push({x0:W.nameBox.x-oe,y0:W.nameBox.y-re*2.5,x1:W.nameBox.x+W.nameBox.width+oe,y1:W.nameBox.y+W.nameBox.height+re*2.5}),L.push({quad:null,region:null})}if(!Q.some(re=>re.id===W.id)&&!a.some(re=>re.id===W.id)){const re=(ee==null?void 0:ee.builtByTuck)===!0,oe=re?ee.built:!1,ae=!re&&(ee==null?void 0:ee.built)===!0,xe={id:W.id,name:W.name,builtWithCardUnderneath:oe,boundingBox:(ee==null?void 0:ee.boundingBox)??{x:0,y:0,width:0,height:0},...ee!=null&&ee.tuckRegion?{tuckRegion:ee.tuckRegion}:{},confidence:W.confidence,...ae?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};Q.push(xe),P.push({obj:xe,edgeScores:ee&&!ee.builtByTuck?ee.edgeScores:null,zone:le[le.length-1]})}}if(!j){const W=I_(P.map(ee=>({built:ee.obj.builtWithCardUnderneath,edgeScores:ee.edgeScores,zone:ee.zone})),c.map(ee=>[ee.box[0]+ee.box[2]/2,ee.box[1]+ee.box[3]/2]));for(const ee of W){const re=P[ee];re.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${re.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(c.length>0){const ee=new Set(W);for(let re=0;re<P.length;re++){const oe=P[re];if(ee.has(re)||!oe.obj.builtWithCardUnderneath)continue;const ae=oe.obj.tuckRegion;if(ae===void 0)continue;if(!c.some(_e=>{const Z=_e.box[0]+_e.box[2]/2,te=_e.box[1]+_e.box[3]/2;return Z>=ae.x&&Z<=ae.x+ae.width&&te>=ae.y&&te<=ae.y+ae.height})){const _e=oe.obj;_e.builtWithCardUnderneath=!1,_e.suspect=!0,_e.suspectReason="built-unconfirmed"}}}}if(J.aborted&&t.push({code:"LOW_CONFIDENCE",message:`${i}: the wonder-name read ran out of its time budget on this device — ${J.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),C!==null&&J.wonders.length>0&&Date.now()<N)try{const W=await ng(),ee=(W==null?void 0:W.catalog.filter(oe=>oe.kind==="wonder").map(oe=>oe.id))??[],re=new Map;for(const oe of ee)if(!Q.some(ae=>ae.id===oe)&&!a.some(ae=>ae.id===oe)){const ae=await Ya(oe);ae!==null&&re.set(oe,ae)}if(re.size>0){r(`${i}: searching occluded wonders…`,.7);const oe=y_(C,e,re,N);for(const ae of oe){const xe=ae.footprint.map(ye=>ye[0]),_e=ae.footprint.map(ye=>ye[1]),Z=Math.max(0,Math.round(Math.min(...xe))),te=Math.max(0,Math.round(Math.min(..._e))),se={x:Z,y:te,width:Math.min(e.width,Math.round(Math.max(...xe)))-Z,height:Math.min(e.height,Math.round(Math.max(..._e)))-te},fe=ye=>{const Ue=ye.boundingBox,He=Math.max(0,Math.min(Ue.x+Ue.width,se.x+se.width)-Math.max(Ue.x,se.x)),qe=Math.max(0,Math.min(Ue.y+Ue.height,se.y+se.height)-Math.max(Ue.y,se.y)),Ge=He*qe,nt=Ue.width*Ue.height+se.width*se.height-Ge;return nt>0&&Ge/nt>g_};if(Q.some(fe)||a.some(fe))continue;const we=W==null?void 0:W.catalog.find(ye=>ye.id===ae.id);Q.push({id:ae.id,name:(we==null?void 0:we.nameFr)??(we==null?void 0:we.name)??ae.id,builtWithCardUnderneath:ae.built,boundingBox:se,...ae.tuckRegion?{tuckRegion:ae.tuckRegion}:{},confidence:Math.round(ae.confidence*1e4)/1e4});const Ie=ae.tuckRegion??se;le.push({x0:Ie.x,y0:Ie.y,x1:Ie.x+Ie.width,y1:Ie.y+Ie.height}),L.push({quad:ae.footprint.map(([ye,Ue])=>[ye,Ue]),region:ae.tuckRegion??null})}}}catch(W){console.warn("[wonders-reg] discovery failed:",W)}const de=async()=>{let W=Q.slice();const ee=[];c.forEach((_e,Z)=>{const te=_e.box[0]+_e.box[2]/2,se=_e.box[1]+_e.box[3]/2;le.some(fe=>te>=fe.x0&&te<=fe.x1&&se>=fe.y0&&se<=fe.y1)||ee.push(Z)});const re=[],oe=[];W.forEach((_e,Z)=>{const te=_e.boundingBox;te&&te.width>0&&(re.push(Z),oe.push([te.x,te.y,te.width,te.height]))});const ae=_e=>{const Z=[];return _e.forEach((te,se)=>{const fe=te.box[0]+te.box[2]/2,ge=te.box[1]+te.box[3]/2;le.some(we=>fe>=we.x0&&fe<=we.x1&&ge>=we.y0&&ge<=we.y1)||Z.push(se)}),Z};let xe=Ba(c.map(_e=>_e.box),ee,oe,d,[e.width,e.height]);if(ne!==null){r(`${i}: seconde passe merveilles (crop de cité)…`,.42),yt.pass1Calls+=1;const Z=(await Qm({skipKnownNear:!0,image:e,banners:c,hulls:xe.hulls.map(([te,se],fe)=>({owner:te,poly:se,n:xe.hullBoxCounts[fe]??0})),wonderBoxes:oe,known:W,cropFrame:([te,se,fe,ge])=>Pt(e,te,se,fe-te,ge-se),detect:async(te,se,fe)=>{if(C===null&&(C=await Kn()),C===null)return[];const ge=await Xm(ls,C,te,ne,N,se,fe);return yt.pass1Boxes+=ge.length,ge}})).filter(te=>!Q.some(se=>se.id===te.obj.id)&&!a.some(se=>se.id===te.obj.id));if(yt.pass1Kept+=Z.length,Z.length>0){for(const te of Z)Q.push(te.obj),le.push(te.zone),L.push({quad:te.quad,region:te.region});W=Q.slice(),re.length=0,oe.length=0,W.forEach((te,se)=>{const fe=te.boundingBox;fe&&fe.width>0&&(re.push(se),oe.push([fe.x,fe.y,fe.width,fe.height]))}),xe=Ba(c.map(te=>te.box),ae(c),oe,d,[e.width,e.height])}}try{const _e=Fm(e.width,e.height,c.map(Z=>Z.box),xe.hulls.map(([Z,te],se)=>({owner:Z,poly:te,n:xe.hullBoxCounts[se]??0})),oe);if(_e.length>0){const Z=Pa(c.map(se=>se.box)),te=[];for(const se of _e){const[fe,ge,we,Ie]=se,ye=Pt(e,fe,ge,we-fe,Ie-ge);if(ye.width<=0||ye.height<=0)continue;const Ue=await wt("banner",ye);for(const He of Kr(Ue.rows,Ue.params,tt.banner.conf)){const qe=J2(He.box,se,Z);qe&&te.push({...He,box:qe})}}if(te.length>0){const se=om([...c,...te]);se.length>c.length&&(c=se,xe=Ba(c.map(fe=>fe.box),ae(c),oe,d,[e.width,e.height]))}}}catch(_e){console.warn("[#129 city-rescan] skipped:",_e)}if(ne!==null&&W.some(_e=>_e.builtWithCardUnderneath!==!0)){r(`${i}: revote built (crop de cité)…`,.47);const _e=new Set;yt.pass2Calls+=1,await Qm({builtSeenOut:_e,image:e,banners:c,hulls:xe.hulls.map(([Z,te],se)=>({owner:Z,poly:te,n:xe.hullBoxCounts[se]??0})),wonderBoxes:oe,known:W,cropFrame:([Z,te,se,fe])=>Pt(e,Z,te,se-Z,fe-te),detect:async(Z,te)=>{if(C===null&&(C=await Kn()),C===null)return[];const se=await Xm(ls,C,Z,ne,N,te);return yt.pass2Boxes+=se.length,se}}),yt.pass2Promoted+=[..._e].filter(Z=>W.some(te=>te.id===Z&&te.builtWithCardUnderneath!==!0)).length;for(const Z of W)Z.id&&_e.has(Z.id)&&Z.builtWithCardUnderneath!==!0&&(Z.builtWithCardUnderneath=!0,Z.builtByCityCrop=!0)}return o!==void 0&&(o.hulls=xe.hulls.map(([_e,Z],te)=>({owner:_e,poly:Z,n:xe.hullBoxCounts[te]??0})),o.bandBoxes=d,o.image=e),{split:xe,photoWonders:W,splitWonderIdx:re}};let $e=null;try{$e=await de()}catch(W){console.warn("[city-split] failed (side unfiltered):",W)}return{bannerDetections:c,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:d,bandSession:p,wonderFootprints:le,wonderTuckGates:L,photoTokensList:y,geo:$e,cv:C,regDeadline:N,unidentifiedTokens:u}}async function hg(e,t,n,r,i,o,a,s,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:p,photoTokenDiscs:f,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:v,geo:M,regDeadline:I}=e,E={},k=[],S=[];let R=0;const B=[];let q=0,G=0;const H=[],O=[],F=[],X=t==="opponent";let Q=(Z,te)=>!X,le=(Z,te)=>!X,L=null;if(M!==null)try{const{split:Z,photoWonders:te,splitWonderIdx:se}=M;Q=(Ie,ye)=>Z.pointOwner(Ie,ye)==="opponent"===X;const fe=X?"opponent":"player";if(le=(Ie,ye)=>Z.pointOwner(Ie,ye)===fe,n){const Ie=Z;L=ye=>new Set(L2(ye,Ie,fe,y))}c=c.filter((Ie,ye)=>Z.bannerOwner[ye]==="opponent"===X);const ge=te.map(()=>"player");se.forEach((Ie,ye)=>{ge[Ie]=Z.wonderOwner[ye]});const we=[];te.forEach((Ie,ye)=>{ge[ye]==="opponent"===X&&we.push(Ie)});for(const Ie of we)O.push(Ie);b.length=0;for(const Ie of we){const ye=Ie.tuckRegion??Ie.boundingBox;ye&&b.push({x0:ye.x,y0:ye.y,x1:ye.x+ye.width,y1:ye.y+ye.height})}for(const Ie of v)Q(Ie.center[0],Ie.center[1])&&F.push(Ie)}catch(Z){console.warn("[city-split] failed (side unfiltered):",Z)}const N=L!==null?L(p):null;for(const Z of p)(N!==null?!N.has(Z):!le(Z.center[0],Z.center[1]))||(R+=Z.denomination??0,S.push(Z));const C=new Set,z=[],U=Pa(c.map(Z=>Z.box));x.forEach((Z,te)=>{if(Z.quad===null||Z.region===null){const we=b[te];we&&z.push(we);return}const se=Z.region,fe=[];c.forEach((we,Ie)=>{const ye=we.box[0]+we.box[2]/2,Ue=we.box[1]+we.box[3]/2;ye>=se.x&&ye<=se.x+se.width&&Ue>=se.y&&Ue<=se.y+se.height&&fe.push([Ie,we.box])});const ge=b2(Z.quad,fe,U);ge!==null&&C.add(ge)});let P=[],j=0;c.forEach((Z,te)=>{if(C.has(te)){G+=1,j+=1;return}const se=Z.box[0]+Z.box[2]/2,fe=Z.box[1]+Z.box[3]/2;if(z.some(ge=>se>=ge.x0&&se<=ge.x1&&fe>=ge.y0&&fe<=ge.y1)){G+=1,j+=1;return}P.push(Z)});const ne=h2(P,j,y,o.width,o.height);P=ne.kept;for(const Z of P)E[Z.family]=(E[Z.family]??0)+1,q+=1;const J=Qw(P),de=new Set(J.map(Z=>Z.box.join(",")));for(const Z of Jw(P))de.has(Z.box.join(","))||(J.push(Z),de.add(Z.box.join(",")));for(const Z of ne.suspects)de.has(Z.box.join(","))||(J.push(Z),de.add(Z.box.join(",")));for(const Z of J)H.push(Z);if(P.some(Z=>Z.family==="guild")){const Z=await p$();if(Z!==null){s(`${u}: identifying guilds…`,.75);for(const te of P)if(te.family==="guild")try{const[se,fe,ge,we]=te.box,Ie=Pt(o,se,fe,ge,we),ye=P1(Ie),Ue={[Z.inputNames[0]]:new ze("float32",ye,[1,3,Gn,Gn])},qe=(await Z.run(Ue))[Z.outputNames[0]].data,{id:Ge,prob:nt}=D1(qe);Ge!==""&&!B.some(Yt=>Yt.id===Ge)&&!l.some(Yt=>Yt.id===Ge)&&B.push({id:Ge,boundingBox:{x:se,y:fe,width:ge,height:we},confidence:Math.round(nt*1e4)/1e4})}catch(se){console.warn("[guild-cls] failed:",se)}}else if(Date.now()<I)try{const te=d??await Kn();if(te!==null){const se=await Zx();if(se.size>0){s(`${u}: identifying guilds…`,.75);const fe=await Jx();for(const ge of h1(te,o,se,I,fe))!B.some(we=>we.id===ge.id)&&!l.some(we=>we.id===ge.id)&&B.push(ge)}}}catch(te){console.warn("[guilds-reg] failed:",te)}}s(`${u}: laurels…`,.8);const W=await ht("laurier: chargement galerie gabarits",()=>a$()),ee=[];for(const Z of[0]){const te=Z===0?o:Ht(o,Z),se=await ht("laurier: passe PLEINE photo",()=>wt("laurel",te));for(const[fe,ge,we,Ie]of ft("laurier: decodage YOLO (JS)",()=>pr(se.rows,se.params,tt.laurel.conf))){const ye=Qa({x:fe,y:ge,width:we-fe,height:Ie-ge},Z,o.width,o.height);ee.push([ye.x,ye.y,ye.x+ye.width,ye.y+ye.height])}}let re=ft("laurier: dedup",()=>rm(ee));const oe=[];try{const Z=hx(c.map(te=>te.box),[o.width,o.height]);st.set("_tta.onnx",`total=${jn.total} idDiff=${jn.idDiff} verdictDiff=${jn.verdictDiff}`),st.set("_rescan.onnx",`p1: ${yt.pass1Calls} appels, ${yt.pass1Boxes} boites, ${yt.pass1Kept} neuves | p2: ${yt.pass2Calls} appels, ${yt.pass2Boxes} boites, ${yt.pass2Promoted} promues`),st.set("_marge2.onnx",`total=${Bt.total} pos4=${Bt.positifs4} pos2=${Bt.positifs2} divergent=${Bt.divergent} `+Bt.detail.slice(0,10).join(" | ")),st.set("_ttaObb.onnx",`total=${un.total} memeK=${un.memeK} inv=${un.memeKInverse} `+un.detail.slice(0,12).join(" ")),st.set("_tuilage.onnx",`groupes=? tuiles=${Z.length} bannieres=${c.length} image=${o.width}x${o.height}`);for(const[te,se,fe,ge]of Z){const we=Pt(o,te,se,fe-te,ge-se);if(we.width<=0||we.height<=0)continue;const Ie=[];for(const ye of[0]){const Ue=ye===0?we:Ht(we,ye),He=await ht("laurier: passe par TUILE (#113)",()=>wt("laurel",Ue));for(const[qe,Ge,nt,Yt]of ft("laurier: decodage YOLO (JS)",()=>pr(He.rows,He.params,tt.laurel.conf))){const ot=Qa({x:qe,y:Ge,width:nt-qe,height:Yt-Ge},ye,we.width,we.height);Ie.push([ot.x,ot.y,ot.x+ot.width,ot.y+ot.height])}}if(re=px(re,rm(Ie),[te,se]),w!==null)try{const ye=jr(we,1280,hr),Ue=await w.run({[w.inputNames[0]]:new ze("float32",ye.tensor,[1,3,1280,1280])});for(const[He,qe,Ge,nt]of pr(Ue[w.outputNames[0]].data,ye.params,ig))oe.push([He+te,qe+se,Ge+te,nt+se])}catch{}}}catch(Z){console.warn("[laurel-containers] failed:",Z)}const ae=[...y,...oe];re=re.filter(([Z,te,se,fe])=>!gx((Z+se)/2,(te+fe)/2,ae,c.map(ge=>ge.box)));const xe=await f$(),_e=await y$();for(const[Z,te,se,fe]of re){const ge=Math.trunc((Z+se)/2),we=Math.trunc((te+fe)/2);if([...f,...m].some(Ve=>(ge-Ve.cx)**2+(we-Ve.cy)**2<=Ve.r*Ve.r)||!Q(ge,we))continue;if(_e!==null){const Ve=await ht("laurier: filtre FP (#49)",()=>w$(o,[Math.trunc(Z),Math.trunc(te),Math.trunc(se),Math.trunc(fe)],_e));if(Ve!==null&&Ve>=X1)continue}const ye=Math.min(Math.trunc(se-Z),Math.trunc(fe-te)),Ue=Math.max(6,Math.trunc(Math.max(se-Z,fe-te)*bb)),He=s$(o,ge,we,Ue);let qe=null,Ge=0,nt=!1;if(xe!==null&&ye>=6){const Ve=Pt(o,Math.trunc(Z),Math.trunc(te),Math.trunc(se-Z),Math.trunc(fe-te));let Ye=null,bt=0;for(const At of[0,1,2,3]){const Xt=At===0?Ve:Ht(Ve,At),hs=j1(Xt),ps=await ht("laurier: lecture chiffre (CNN)",()=>xe.run({[xe.inputNames[0]]:new ze("float32",hs,[1,3,qn,qn])})),{value:fs,prob:fi}=K1(ps[xe.outputNames[0]].data);if(fi>bt&&(Ye=fs,bt=fi),Ye!==null&&bt>=H1)break}Ye!==null&&bt>=V1&&(qe=Ye,Ge=bt)}if(qe===null&&ye>=6){const Ve=new Map;for(const Ye of[0,1,2,3]){const bt=Ye===0?He:Ht(He,Ye),[At,Xt]=ft("laurier: lecteur GABARITS (repli, JS pur)",()=>Ob(bt,W));At!==null&&(Ve.set(At,Math.max(Ve.get(At)??0,Xt)),Xt>Ge&&(qe=At,Ge=Xt))}qe!==null&&Ge<Xx&&(qe=null),nt=qe!==null&&[...Ve.entries()].some(([Ye,bt])=>Ye!==qe&&bt>=Ge-.1)}const Yt=b.some(Ve=>ge>=Ve.x0&&ge<=Ve.x1&&we>=Ve.y0&&we<=Ve.y1),ot=[...B,...l].some(Ve=>{const Ye=Ve.boundingBox;return Ye!==void 0&&ge>=Ye.x&&ge<=Ye.x+Ye.width&&we>=Ye.y&&we<=Ye.y+Ye.height});k.push({value:qe,valueRead:qe!==null,center:[Math.round((Z+se)/2),Math.round((te+fe)/2)],boundingBox:{x:Math.trunc(Z),y:Math.trunc(te),width:Math.trunc(se-Z),height:Math.trunc(fe-te)},confidence:Math.round(Ge*1e4)/1e4,excluded:Yt||ot,photoIndex:i-1,...nt?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:E,laurels:k,coins:S,coinTotal:R,guilds:B,bannerCount:q,tuckedExcluded:G,bannerSuspects:H,cityWondersKept:O,cityTokensKept:F}}function pg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function fg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function mg(e,t,n){const{byFamily:r,laurels:i,coins:o,progressTokens:a,wonders:s,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:p,tuckedExcluded:f}=e;f>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${f} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):p>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(v=>v.id).join(", ")+" — confirm in the review."});const y=s.filter(v=>v.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(v=>v.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+a.map(v=>v.id).join(", ")+" — confirm in the review."}),o.length>0){const v=o.filter(I=>I.denomSource==="cnn").length,M=o.length-v;n.push({code:"LOW_CONFIDENCE",message:M===0?`${t}: coins read as ${c} from ${o.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${o.length} tile(s) — ${v} by the learned model, ${M} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=S$(u,s);for(const v of[...yx(s.map(M=>M.id),t),..._x(w.map(M=>M.id),t)])n.push({code:"INCONSISTENT_STATE",message:v.message});const b=i.filter(v=>!v.excluded),x=b.filter(v=>v.valueRead);return{...P$(),wonders:s,guilds:w,progressTokens:a,laurels:i,cardVictoryPoints:{value:x.reduce((v,M)=>v+(M.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:p>0?"yolo":"none",tuckedExcluded:f,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:o.length>0?.5:0,source:o.length===0?"none":o.some(v=>v.denomSource==="cnn")?"local-cnn":"local-colour",coins:o}}}async function D$(e,t,n,r,i=()=>{},o="player",a,s=!1){const u=pg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const p=await hi(c),f=await dg(p,n,t,r,d,a,u.wonders,u.progressTokens);u.unidentifiedTokens+=f.unidentifiedTokens;const m=await hg(f,o,s,t,l,p,n,r,d,u.guilds);fg(u,m),i()}return mg(u,t,n)}const Ct=1280,U$=.3,pi=9;let cs=null;function gg(){return cs===null&&(cs=(async()=>{try{return(await fetch(`${je}pawn_ends.onnx`,{method:"HEAD"})).ok?await ut("pawn_ends.onnx"):null}catch{return null}})()),cs}function L$(e){const t=Ct/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),o=i.getContext("2d",{willReadFrequently:!0}),a=Tw(e.data,e.width,e.height,e.channels);o.putImageData(new ImageData(a,e.width,e.height),0,0);const u=new OffscreenCanvas(Ct,Ct).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Ct,Ct),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Ct,Ct),c=Ct*Ct,d=new Float32Array(3*c);for(let p=0;p<c;p+=1)d[p]=l[p*4]/255,d[c+p]=l[p*4+1]/255,d[2*c+p]=l[p*4+2]/255;return{tensor:d,r:t}}async function F$(e,t){const{tensor:n,r}=L$(t),o=(await e.run({[e.inputNames[0]]:new ze("float32",n,[1,3,Ct,Ct])}))[e.outputNames[0]].data,a=new Map;for(let s=0;s+5<o.length;s+=6){const u=o[s+4];if(u<U$)continue;const l=Math.round(o[s+5]),c=a.get(l);if(c===void 0||u>c.conf){const d=(o[s]+o[s+2])/2/r,p=(o[s+1]+o[s+3])/2/r;a.set(l,{conf:u,cx:d,cy:p})}}return a}async function ds(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:Ht(t,w),x=await F$(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const v=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||v>n.score)&&(n={score:v,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),o=n.det.get(2),a=o.cx-i.cx,s=o.cy-i.cy,u=(i.cx+o.cx)/2,l=(i.cy+o.cy)/2,c=a*a+s*s;if(c<=0)return null;const d=((r.cx-u)*a+(r.cy-l)*s)/c*(2*pi),p=Math.min(pi,Math.max(-pi,it(d))),f=Math.min(r.conf,i.conf,o.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,o].map(w=>{const[b,x]=m(w.cx,w.cy);return[it(b),it(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function yg(e,t,n){let r=null;for(const i of n){const o=Ow(t.width,t.height,i);if(o===null)continue;const a=Pt(t,o.x,o.y,o.width,o.height);if(a.width===0||a.height===0)continue;const s=await ds(e,a);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+o.x,l+o.y])})}return r}async function G$(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const a=(f,m=0)=>{t(f,i>0?Math.min(.99,(o+m)/i):void 0)},s=()=>{o+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await D$(m,f,n,a,s))}let u=null,l=null;if(e.both!==void 0){const f={},m=await hi(e.both),y=await dg(m,n,"both",a,"both photo 1/1",f,[],[]),w=async(v,M)=>{const I=pg();return I.unidentifiedTokens+=y.unidentifiedTokens,fg(I,await hg(y,v,!0,M,1,m,n,a,`${M} photo 1/1`,I.guilds)),s(),mg(I,M,n)},b={player:await w("player","left"),opponent:await w("opponent","right")};if(f.image!==void 0)try{const v=await gg();v!==null&&(u=await ds(v,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await yg(v,f.image,f.bandBoxes)))}catch(v){console.warn("[#125] both-photo pawn read failed:",v)}u!==null&&(l=Dw(u.ends,f.hulls??[],u.position));const x=l!==null&&!l.ambiguous?Uw(l):null;x!==null?(r.left=b[x.left],r.right=b[x.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=b.player,r.right=b.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...wx(f),...bx(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let c={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const f=await hi(e.board),m=await gg();if(m!==null){let y=await ds(m,f);if(y===null){const w=await og();if(w!==null){const b=await wt("banner",f),x=Kr(b.rows,b.params,tt.banner.conf),v=await ag(w,f,x);y=await yg(m,f,v)}}y!==null&&(c={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!c.found){const f=b=>{var x,v;return Number(((v=(x=b==null?void 0:b.cardCounts)==null?void 0:x.byFamily)==null?void 0:v.military)??0)},m=f(r.left),y=f(r.right),w=Math.abs(m-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${m} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const d=c.conflictPawnPosition,p=Math.abs(d)>=pi?{type:"military",winner:d>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,o)=>{Lx(i),self.postMessage({id:t,progress:i,...o!==void 0?{fraction:o}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0),Ux(),jx();const i=performance.now(),o=n==="classify"?await B$(e.data.file):await G$(e.data.payload,r);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:Fx(),providers:Gx(),runtime:Wx(),inference:Hx(),famillesJs:Sw(),inferenceParEtape:Vx(),totalMs:Math.round(performance.now()-i)}})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
