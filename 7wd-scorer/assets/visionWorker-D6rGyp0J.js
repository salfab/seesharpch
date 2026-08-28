var pM=Object.defineProperty;var fM=(Gt,Wt,An)=>Wt in Gt?pM(Gt,Wt,{enumerable:!0,configurable:!0,writable:!0,value:An}):Gt[Wt]=An;var yy=(Gt,Wt,An)=>fM(Gt,typeof Wt!="symbol"?Wt+"":Wt,An);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,An=Object.getOwnPropertyNames,by=Object.prototype.hasOwnProperty,xy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ne=(e,t)=>()=>(e&&(t=e(e=0)),t),Rn=(e,t)=>{for(var n in t)Gt(e,n,{get:t[n],enumerable:!0})},$y=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of An(t))!by.call(e,i)&&i!==n&&Gt(e,i,{get:()=>t[i],enumerable:!(r=Wt(t,i))||r.enumerable});return e},jn=e=>$y(Gt({},"__esModule",{value:!0}),e),Kn,en,On,Vs,Hs,js=ne(()=>{Kn=new Map,en=[],On=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Kn.get(e);if(r===void 0)Kn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=en.indexOf(e);i!==-1&&en.splice(i,1);for(let o=0;o<en.length;o++)if(Kn.get(en[o]).priority<=n){en.splice(o,0,e);return}en.push(e)}return}throw new TypeError("not a valid backend")},Vs=async e=>{let t=Kn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Hs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?en:n,i,o=[],a=new Set;for(let u of r){let l=await Vs(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),vy=ne(()=>{js()}),Ks,My=ne(()=>{Ks="1.27.0"}),Ei,Ze,Ys=ne(()=>{My(),Ei="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Ks},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ei=e}},get logLevel(){return Ei}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),ze,Sy=ne(()=>{Ys(),ze=Ze}),Xs,Qs,Ey=ne(()=>{Xs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let c=o*i,d=0,p=c,f=c*2,m=-1;a==="RGBA"?(d=0,p=c,f=c*2,m=c*3):a==="RGB"?(d=0,p=c,f=c*2):a==="RBG"&&(d=0,f=c,p=c*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let _=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+_+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Qs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],a=e.dims[3]):(i=e.dims[3],o=e.dims[2],a=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=o*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,_=0,x=d,M=d*2,v=-1;s==="RGBA"?(_=0,x=d,M=d*2,v=d*3):s==="RGB"?(_=0,x=d,M=d*2):s==="RBG"&&(_=0,M=d,x=d*2),r=n.createImageData(i,o);for(let E=0;E<o*i;f+=p,m+=p,y+=p,w+=p,E++)r.data[f]=(e.data[_++]-c[0])*l[0],r.data[m]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[M++]-c[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),br,Zs,Js,eu,tu,nu,Iy=ne(()=>{Ti(),br=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,f=1,m=2,y=3,w=0,_=l,x=l*2,M=-1;s==="RGB"&&(d=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,_=l*2):u==="BGR"&&(x=0,_=l,w=l*2);for(let v=0;v<l;v++,p+=d,m+=d,f+=d,y+=d)c[w++]=(e[p]+a[0])/o[0],c[_++]=(e[f]+a[1])/o[1],c[x++]=(e[m]+a[2])/o[2],M!==-1&&y!==-1&&(c[M++]=(e[y]+a[3])/o[3]);return u==="RGBA"?new dt("float32",c,[1,4,n,r]):new dt("float32",c,[1,3,n,r])},Zs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",a,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;d.drawImage(e,0,0),a=d.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=c,s.width=d,t!==void 0){let p=u();p.width=d,p.height=c;let f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;return d.drawImage(e,0,0,f,p),a=d.getImageData(0,0,f,p).data,s.height=p,s.width=f,br(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((c,d)=>{let p=u(),f=l(p);if(!e||!f)return d();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,c(br(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return br(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Js=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,a=[1,r,n,4];return new dt({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:o})},eu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new dt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},tu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new dt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},nu=(e,t,n)=>new dt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),pn,Yn,Ii,ru,Ty=ne(()=>{pn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Yn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ii=!1,ru=()=>{if(!Ii){Ii=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(pn.set("int64",BigInt64Array),Yn.set(BigInt64Array,"int64")),t&&(pn.set("uint64",BigUint64Array),Yn.set(BigUint64Array,"uint64")),r?(pn.set("float16",n),Yn.set(n,"float16")):pn.set("float16",Uint16Array)}}}),iu,ou,ky=ne(()=>{Ti(),iu=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},ou=(e,t)=>{switch(e.location){case"cpu":return new dt(e.type,e.data,t);case"cpu-pinned":return new dt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new dt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new dt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new dt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dt,Ti=ne(()=>{Ey(),Iy(),Ty(),ky(),dt=class{constructor(e,t,n){ru();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=pn.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=pn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=Yn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(s===void 0)s=[a.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=a,this.dataLocation="cpu"}let o=iu(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return Zs(e,t)}static fromTexture(e,t){return Js(e,t)}static fromGpuBuffer(e,t){return eu(e,t)}static fromMLTensor(e,t){return tu(e,t)}static fromPinnedBuffer(e,t,n){return nu(e,t,n)}toDataURL(e){return Xs(this,e)}toImageData(e){return Qs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ou(this,e)}}}),Be,au=ne(()=>{Ti(),Be=dt}),xr,ki,Nt,xt,fn,mn,su=ne(()=>{Ys(),xr=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},ki=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(a+=`::${t}`),xr("CPU",a);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},Nt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||ki("BEGIN",e)},xt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||ki("END",e)},fn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},mn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),uu,Cy=ne(()=>{js(),au(),su(),uu=class wy{constructor(t){this.handler=t}async run(t,n,r){Nt(),fn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof Be||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Be)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Be)&&(l=!0,a=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,o),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let c=s[l];c instanceof Be?u[l]=c:u[l]=new Be(c.type,c.data,c.dims)}return mn("InferenceSession.run"),xt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Nt(),fn("InferenceSession.create");let o,a={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(c,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Hs(a),l=await s.createInferenceSessionHandler(o,u);return mn("InferenceSession.create"),xt(),new wy(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Nn,Ay=ne(()=>{Cy(),Nn=uu}),Ry=ne(()=>{}),Oy=ne(()=>{}),Ny=ne(()=>{}),zy=ne(()=>{}),By={};Rn(By,{InferenceSession:()=>Nn,TRACE:()=>xr,TRACE_EVENT_BEGIN:()=>fn,TRACE_EVENT_END:()=>mn,TRACE_FUNC_BEGIN:()=>Nt,TRACE_FUNC_END:()=>xt,Tensor:()=>Be,env:()=>ze,registerBackend:()=>On});var mt=ne(()=>{vy(),Sy(),Ay(),au(),Ry(),Oy(),su(),Ny(),zy()}),Ci=ne(()=>{}),lu={};Rn(lu,{default:()=>cu});var Ai,Ri,cu,Py=ne(()=>{var e;Vf(),gn(),Di(),Ai="ort-wasm-proxy-worker",Ri=((e=globalThis.self)==null?void 0:e.name)===Ai,Ri&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Fi(r.wasm).then(()=>{Jo(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;ea(o,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,o=Lr(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;na(i,o).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":ra(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:a,outputIndices:s,options:u}=r;oa(i,o,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},sa([...a,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":aa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),cu=Ri?null:t=>new Worker(t??ht,{type:"module",name:Ai})}),du={};Rn(du,{default:()=>pu});async function hu(e={}){var my,gy;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((my=self.name)==null?void 0:my.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let b=t.Yc={Kd:g[0],errors:[]},I=await h(...g);if(t.Yc!==b)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=b.errors;if(0<C.length){let U=await Promise.all(C);if(U=U.filter(H=>H),0<U.length)throw Error(U.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(b,I,C,U)=>$.registerBuffer(b,I,C,U),t.jsepGetBuffer=b=>$.getBuffer(b),t.jsepCreateDownloader=(b,I,C)=>$.createDownloader(b,I,C),t.jsepOnCreateSession=b=>{$.onCreateSession(b)},t.jsepOnReleaseSession=b=>{$.onReleaseSession(b)},t.jsepOnRunStart=b=>$.onRunStart(b),t.Id=(b,I)=>{$.upload(b,I)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=b=>$.onRunStart(b),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=b=>{$.onReleaseSession(b)},t.webnnCreateMLTensorDownloader=(b,I)=>$.createMLTensorDownloader(b,I),t.webnnRegisterMLTensor=(b,I,C,U)=>$.registerMLTensor(b,I,C,U),t.webnnCreateMLContext=b=>$.createMLContext(b),t.webnnRegisterMLConstant=(b,I,C,U,H,ae)=>$.registerMLConstant(b,I,C,U,H,t.Xc,ae),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let a=()=>{let h=g=>(...$)=>{let b=Lt;return $=g(...$),Lt!=b?new Promise((I,C)=>{Rs={resolve:I,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var s,u,l=(h,g)=>{throw g},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async h=>{if(k(h))return new Promise(($,b)=>{var I=new XMLHttpRequest;I.open("GET",h,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):b(I.status)},I.onerror=b,I.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,_,x=console.log.bind(console),M=console.error.bind(console),v=x,E=M,T=!1,k=h=>h.startsWith("file://");function S(){qe.buffer!=N.buffer&&z()}if(i){let h=function(g){try{var $=g.data,b=$.Sc;if(b==="load"){let I=[];self.onmessage=C=>I.push(C),_=()=>{postMessage({Sc:"loaded"});for(let C of I)h(C);self.onmessage=h};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...U)=>{postMessage({Sc:"callHandler",wd:C,args:U})},C=="print"&&(v=t[C]),C=="printErr"&&(E=t[C]));qe=$.Od,z(),f=$.Pd,te(),Mi()}else if(b==="run"){(function(I){var C=(S(),F)[I+52>>>2>>>0];I=(S(),F)[I+56>>>2>>>0],S0(C,C-I),Ie(C)})($.Rc),Ps($.Rc,0,0,1,0,0),Ee(),ks($.Rc),R||(_0(),R=!0);try{Fe($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(b==="checkMailbox"?R&&yi():b&&(E(`worker: received unknown command ${b}`),E($)))}catch(I){throw b0(),I}};var R=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var N,X,G,V,O,F,j,Z,ue,L,B,A=!1;function z(){var h=qe.buffer;t.HEAP8=N=new Int8Array(h),G=new Int16Array(h),t.HEAPU8=X=new Uint8Array(h),V=new Uint16Array(h),t.HEAP32=O=new Int32Array(h),t.HEAPU32=F=new Uint32Array(h),j=new Float32Array(h),Z=new Float64Array(h),ue=new BigInt64Array(h),L=new BigUint64Array(h)}function D(){A=!0,i?_():Jt.sb()}function P(h){throw E(h="Aborted("+h+")"),T=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function K(){return{a:{ma:T3,gb:I3,g:At,J:He,f:$s,o:vs,h:Ms,ha:fi,b:hv,T:pv,Ha:Rg,n:fv,$:Bg,Xa:Pg,Da:Dg,Fa:Ug,Ya:Lg,Va:Fg,Oa:Gg,Ua:Wg,ka:qg,Ea:Vg,Ba:Hg,Wa:jg,Ca:Kg,bb:mv,ea:gv,wa:yv,ua:_v,da:xv,O:$v,H:vv,va:Mv,_:Av,xa:Rv,Ra:Ov,za:zv,Ia:Bv,sa:Pv,fa:Dv,Qa:ks,_a:Uv,R:Wv,r:Kv,c:Is,hb:Yv,y:Xv,M:Qv,D:Zv,l:Jv,s:n0,ib:e3,I:t3,S:n3,j:r3,u:i3,q:o3,k:a3,La:s3,Ma:u3,Na:l3,Ja:a0,Ka:s0,ta:u0,db:d3,ab:p3,v:f3,aa:m3,ga:g3,$a:h3,W:y3,Za:w3,Aa:_3,F:c3,U:b3,la:$i,ya:$3,fb:x3,eb:v3,Sa:h0,Ta:p0,Ga:ee,V:f0,ja:m0,Pa:g0,ia:y0,kb:cM,na:oM,lb:lM,oa:iM,G:Y3,e:R3,t:C3,w:k3,B:G3,mb:tM,K:H3,x:z3,pa:nM,Y:aM,ba:eM,nb:J3,ob:Z3,P:W3,qa:Q3,pb:X3,N:j3,Z:rM,d:A3,A:N3,m:O3,jb:dM,p:P3,z:D3,C:B3,E:U3,L:q3,qb:K3,Q:sM,ca:V3,X:uM,rb:F3,ra:L3,i:S3,a:qe,cb:$e}}}async function te(){function h(b,I){var C=Jt=b.exports;b={};for(let[U,H]of Object.entries(C))typeof H=="function"?(C=Lv(H),b[U]=C):b[U]=H;return Jt=b,Jt=(function(){var U=Jt,H=le=>Se=>le(Se)>>>0,ae=le=>()=>le()>>>0;return(U=Object.assign({},U)).tb=H(U.tb),U.Xb=ae(U.Xb),U.Zb=H(U.Zb),U.lc=H(U.lc),U.mc=ae(U.mc),U.qc=H(U.qc),U})(),_e.push(Jt._b),w0=(b=Jt).tb,_0=b.ub,t._OrtInit=b.vb,t._OrtGetLastError=b.wb,t._OrtCreateSessionOptions=b.xb,t._OrtAppendExecutionProvider=b.yb,t._OrtAddFreeDimensionOverride=b.zb,t._OrtAddSessionConfigEntry=b.Ab,t._OrtReleaseSessionOptions=b.Bb,t._OrtCreateSession=b.Cb,t._OrtReleaseSession=b.Db,t._OrtGetInputOutputCount=b.Eb,t._OrtGetInputOutputMetadata=b.Fb,t._OrtFree=b.Gb,t._OrtCreateTensor=b.Hb,t._OrtGetTensorData=b.Ib,t._OrtReleaseTensor=b.Jb,t._OrtCreateRunOptions=b.Kb,t._OrtAddRunConfigEntry=b.Lb,t._OrtReleaseRunOptions=b.Mb,t._OrtCreateBinding=b.Nb,t._OrtBindInput=b.Ob,t._OrtBindOutput=b.Pb,t._OrtClearBoundOutputs=b.Qb,t._OrtReleaseBinding=b.Rb,t._OrtRunWithBinding=b.Sb,t._OrtRun=b.Tb,t._OrtEndProfiling=b.Ub,t._JsepOutput=b.Vb,t._JsepGetNodeName=b.Wb,vi=b.Xb,Ft=t._free=b.Yb,yr=t._malloc=b.Zb,Ps=b.ac,b0=b.bc,x0=b.cc,$0=b.dc,Ds=b.ec,v0=b.fc,M0=b.gc,ke=b.hc,wr=b.ic,S0=b.jc,Ie=b.kc,Us=b.lc,Te=b.mc,E0=b.nc,Ls=b.oc,I0=b.pc,T0=b.qc,k0=b.rc,Fs=b.sc,C0=b.tc,A0=b.uc,R0=b.vc,O0=b.wc,N0=b.xc,z0=b.yc,B0=b.zc,P0=b.Ac,D0=b.Bc,U0=b.Cc,L0=b.Dc,F0=b.Ec,G0=b.Fc,W0=b.Gc,q0=b.Hc,V0=b.Ic,H0=b.Jc,j0=b.Kc,K0=b.Lc,Y0=b.Mc,X0=b.Nc,Q0=b.Pc,Z0=b.Qc,J0=b.$c,ey=b.ad,ty=b.fd,ny=b.jd,ry=b.kd,iy=b.ld,oy=b.md,ay=b.nd,sy=b.od,uy=b.pd,ly=b.qd,cy=b.vd,dy=b.Td,hy=b.Ud,py=b.Vd,fy=b.Wd,f=I,Jt}var g,$=K();return t.instantiateWasm?new Promise(b=>{t.instantiateWasm($,(I,C)=>{b(h(I,C))})}):i?h(new WebAssembly.Instance(f,K()),f):(B??(B=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(b){var I=B;if(!p&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,b)}catch(U){E(`wasm streaming compile failed: ${U}`),E("falling back to ArrayBuffer instantiation")}return(async function(U,H){try{var ae=await(async function(le){if(!p)try{var Se=await s(le);return new Uint8Array(Se)}catch{}if(le==B&&p)le=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";le=u(le)}return le})(U);return await WebAssembly.instantiate(ae,H)}catch(le){E(`failed to asynchronously prepare wasm: ${le}`),P(le)}})(I,b)})($),h(g.instance,g.module))}class Q{constructor(g){yy(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var de=h=>{h.terminate(),h.onmessage=()=>{}},be=[],W=0,J=null,re=h=>{se.length==0&&(Ue(),me(se[0]));var g=se.pop();if(!g)return 6;ce.push(g),we[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},oe=0,ie=(h,g,...$)=>{var b,I=16*$.length,C=Te(),U=Us(I),H=U>>>3;for(b of $)typeof b=="bigint"?((S(),ue)[H++>>>0]=1n,(S(),ue)[H++>>>0]=b):((S(),ue)[H++>>>0]=0n,(S(),Z)[H++>>>0]=b);return h=x0(h,0,I,U,g),Ie(C),h};function $e(h){if(i)return ie(0,1,h);if(m=h,!(0<oe)){for(var g of ce)de(g);for(g of se)de(g);se=[],ce=[],we={},T=!0}l(0,new Q(h))}function ve(h){if(i)return ie(1,0,h);ee(h)}var ee=h=>{if(m=h,i)throw ve(h),"unwind";$e(h)},se=[],ce=[],_e=[],we={},ge=h=>{var g=h.Rc;delete we[g],se.push(h),ce.splice(ce.indexOf(h),1),h.Rc=0,$0(g)};function Ee(){_e.forEach(h=>h())}var me=h=>new Promise(g=>{h.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=vi()){var U=we[C.Zc];U?U.postMessage(C,C.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?yi():I==="spawnThread"?re(C):I==="cleanupThread"?gi(()=>{ge(we[C.Nd])}):I==="loaded"?(h.loaded=!0,g(h)):C.target==="setimmediate"?h.postMessage(C):I==="uncaughtException"?h.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&E(`worker sent an unknown command ${I}`)},h.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,b=[];for($ of[])t.propertyIsEnumerable($)&&b.push($);h.postMessage({Sc:"load",xd:b,Od:qe,Pd:f})});function Ue(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});se.push(h)}var qe,Fe=(h,g)=>{oe=0,h=Fs(h,g),0<oe?m=h:Ds(h)},Ge=[],it=0;function At(h){var g=new Rt(h>>>=0);return(S(),N)[g.Tc+12>>>0]==0&&(Xe(g,!0),it--),_t(g,!1),Ge.push(g),T0(h)}var ut=0,He=()=>{ke(0,0);var h=Ge.pop();E0(h.cd),ut=0};function Xe(h,g){g=g?1:0,(S(),N)[h.Tc+12>>>0]=g}function _t(h,g){g=g?1:0,(S(),N)[h.Tc+13>>>0]=g}class Rt{constructor(g){this.cd=g,this.Tc=g-24}}var Qt=h=>{var g=ut;if(!g)return wr(0),0;var $=new Rt(g);(S(),F)[$.Tc+16>>>2>>>0]=g;var b=(S(),F)[$.Tc+4>>>2>>>0];if(!b)return wr(0),g;for(var I of h){if(I===0||I===b)break;if(I0(I,b,$.Tc+16))return wr(I),g}return wr(b),g};function $s(){return Qt([])}function vs(h){return Qt([h>>>0])}function Ms(h,g,$,b){return Qt([h>>>0,g>>>0,$>>>0,b>>>0])}var fi=()=>{var h=Ge.pop();h||P("no exception to throw");var g=h.cd;throw(S(),N)[h.Tc+13>>>0]==0&&(Ge.push(h),_t(h,!0),Xe(h,!1),it++),Ls(g),ut=g};function hv(h,g,$){var b=new Rt(h>>>=0);throw g>>>=0,$>>>=0,(S(),F)[b.Tc+16>>>2>>>0]=0,(S(),F)[b.Tc+4>>>2>>>0]=g,(S(),F)[b.Tc+8>>>2>>>0]=$,Ls(h),it++,ut=h}var pv=()=>it;function Ag(h,g,$,b){return i?ie(2,1,h,g,$,b):Rg(h,g,$,b)}function Rg(h,g,$,b){if(h>>>=0,g>>>=0,$>>>=0,b>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Ag(h,g,$,b):(h={Ld:$,Rc:h,bd:b,rd:I},i?(h.Sc="spawnThread",postMessage(h,I),0):re(h))}function fv(h){throw ut||(ut=h>>>0),ut}var Og=globalThis.TextDecoder&&new TextDecoder,Ng=(h,g,$,b)=>{if($=g+$,b)return $;for(;h[g]&&!(g>=$);)++g;return g},zg=(h,g=0,$,b)=>{if(16<($=Ng(h,g>>>=0,$,b))-g&&h.buffer&&Og)return Og.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(b="";g<$;){var I=h[g++];if(128&I){var C=63&h[g++];if((224&I)==192)b+=String.fromCharCode((31&I)<<6|C);else{var U=63&h[g++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|U:(7&I)<<18|C<<12|U<<6|63&h[g++])?b+=String.fromCharCode(I):(I-=65536,b+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else b+=String.fromCharCode(I)}return b},Ke=(h,g,$)=>(h>>>=0)?zg((S(),X),h,g,$):"";function Bg(h,g,$){return i?ie(3,1,h,g,$):0}function Pg(h,g){if(i)return ie(4,1,h,g)}function Dg(h,g){if(i)return ie(5,1,h,g)}function Ug(h,g,$){if(i)return ie(6,1,h,g,$)}function Lg(h,g,$){return i?ie(7,1,h,g,$):0}function Fg(h,g){if(i)return ie(8,1,h,g)}function Gg(h,g,$){if(i)return ie(9,1,h,g,$)}function Wg(h,g,$,b){if(i)return ie(10,1,h,g,$,b)}function qg(h,g,$,b){if(i)return ie(11,1,h,g,$,b)}function Vg(h,g,$,b){if(i)return ie(12,1,h,g,$,b)}function Hg(h){if(i)return ie(13,1,h)}function jg(h,g){if(i)return ie(14,1,h,g)}function Kg(h,g,$){if(i)return ie(15,1,h,g,$)}var mv=()=>P(""),Ut=h=>{h>>>=0;for(var g="";;){var $=(S(),X)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Ss={},Es={},Hn=class extends Error{constructor(h){super(h),this.name="BindingError"}};function Zt(h,g,$={}){return(function(b,I,C={}){var U=I.name;if(!b)throw new Hn(`type "${U}" must have a positive integer typeid pointer`);if(Es.hasOwnProperty(b)){if(C.yd)return;throw new Hn(`Cannot register type '${U}' twice`)}Es[b]=I,Ss.hasOwnProperty(b)&&(I=Ss[b],delete Ss[b],I.forEach(H=>H()))})(h,g,$)}var Yg=(h,g,$)=>{switch(g){case 1:return $?b=>(S(),N)[b>>>0]:b=>(S(),X)[b>>>0];case 2:return $?b=>(S(),G)[b>>>1>>>0]:b=>(S(),V)[b>>>1>>>0];case 4:return $?b=>(S(),O)[b>>>2>>>0]:b=>(S(),F)[b>>>2>>>0];case 8:return $?b=>(S(),ue)[b>>>3>>>0]:b=>(S(),L)[b>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function gv(h,g,$,b,I){h>>>=0,$>>>=0,g=Ut(g>>>0);let C=U=>U;if(b=b===0n){let U=8*$;C=H=>BigInt.asUintN(U,H),I=C(I)}Zt(h,{name:g,Oc:C,Vc:(U,H)=>(typeof H=="number"&&(H=BigInt(H)),H),Uc:Yg(g,$,!b),Wc:null})}function yv(h,g,$,b){Zt(h>>>=0,{name:g=Ut(g>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:b},Uc:function(I){return this.Oc((S(),X)[I>>>0])},Wc:null})}var Xg=[],kn=[0,1,,1,null,1,!0,1,!1,1];function Is(h){9<(h>>>=0)&&--kn[h+1]===0&&(kn[h]=void 0,Xg.push(h))}var bt=h=>{if(!h)throw new Hn(`Cannot use deleted val. handle = ${h}`);return kn[h]},Ot=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Xg.pop()||kn.length;return kn[g]=h,kn[g+1]=1,g}};function Ts(h){return this.Oc((S(),F)[h>>>2>>>0])}var wv={name:"emscripten::val",Oc:h=>{var g=bt(h);return Is(h),g},Vc:(h,g)=>Ot(g),Uc:Ts,Wc:null};function _v(h){return Zt(h>>>0,wv)}var bv=(h,g)=>{switch(g){case 4:return function($){return this.Oc((S(),j)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Z)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function xv(h,g,$){$>>>=0,Zt(h>>>=0,{name:g=Ut(g>>>0),Oc:b=>b,Vc:(b,I)=>I,Uc:bv(g,$),Wc:null})}function $v(h,g,$,b,I){h>>>=0,$>>>=0,g=Ut(g>>>0);let C=H=>H;if(b===0){var U=32-8*$;C=H=>H<<U>>>U,I=C(I)}Zt(h,{name:g,Oc:C,Vc:(H,ae)=>ae,Uc:Yg(g,$,b!==0),Wc:null})}function vv(h,g,$){function b(C){var U=(S(),F)[C>>>2>>>0];return C=(S(),F)[C+4>>>2>>>0],new I((S(),N).buffer,C,U)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Zt(h>>>=0,{name:$=Ut($>>>0),Oc:b,Uc:b},{yd:!0})}var cn=(h,g,$)=>{var b=(S(),X);if(g>>>=0,0<$){var I=g;$=g+$-1;for(var C=0;C<h.length;++C){var U=h.codePointAt(C);if(127>=U){if(g>=$)break;b[g++>>>0]=U}else if(2047>=U){if(g+1>=$)break;b[g++>>>0]=192|U>>6,b[g++>>>0]=128|63&U}else if(65535>=U){if(g+2>=$)break;b[g++>>>0]=224|U>>12,b[g++>>>0]=128|U>>6&63,b[g++>>>0]=128|63&U}else{if(g+3>=$)break;b[g++>>>0]=240|U>>18,b[g++>>>0]=128|U>>12&63,b[g++>>>0]=128|U>>6&63,b[g++>>>0]=128|63&U,C++}}b[g>>>0]=0,h=g-I}else h=0;return h},mi=h=>{for(var g=0,$=0;$<h.length;++$){var b=h.charCodeAt($);127>=b?g++:2047>=b?g+=2:55296<=b&&57343>=b?(g+=4,++$):g+=3}return g};function Mv(h,g){Zt(h>>>=0,{name:g=Ut(g>>>0),Oc($){var b=(S(),F)[$>>>2>>>0];return b=Ke($+4,b,!0),Ft($),b},Vc($,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var I=typeof b=="string";if(!(I||ArrayBuffer.isView(b)&&b.BYTES_PER_ELEMENT==1))throw new Hn("Cannot pass non-string to std::string");var C=I?mi(b):b.length,U=yr(4+C+1),H=U+4;return(S(),F)[U>>>2>>>0]=C,I?cn(b,H,C+1):(S(),X).set(b,H>>>0),$!==null&&$.push(Ft,U),U},Uc:Ts,Wc($){Ft($)}})}var Qg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Sv=(h,g,$)=>{if(h>>>=1,16<(g=Ng((S(),V),h,g/2,$))-h&&Qg)return Qg.decode((S(),V).slice(h,g));for($="";h<g;++h){var b=(S(),V)[h>>>0];$+=String.fromCharCode(b)}return $},Ev=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var b=g;$=($-=2)<2*h.length?$/2:h.length;for(var I=0;I<$;++I){var C=h.charCodeAt(I);(S(),G)[g>>>1>>>0]=C,g+=2}return(S(),G)[g>>>1>>>0]=0,g-b},Iv=h=>2*h.length,Tv=(h,g,$)=>{var b="";h>>>=2;for(var I=0;!(I>=g/4);I++){var C=(S(),F)[h+I>>>0];if(!C&&!$)break;b+=String.fromCodePoint(C)}return b},kv=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var b=g;$=b+$-4;for(var I=0;I<h.length;++I){var C=h.codePointAt(I);if(65535<C&&I++,(S(),O)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-b},Cv=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function Av(h,g,$){if(h>>>=0,g>>>=0,$=Ut($>>>=0),g===2)var b=Sv,I=Ev,C=Iv;else b=Tv,I=kv,C=Cv;Zt(h,{name:$,Oc:U=>{var H=(S(),F)[U>>>2>>>0];return H=b(U+4,H*g,!0),Ft(U),H},Vc:(U,H)=>{if(typeof H!="string")throw new Hn(`Cannot pass non-string to C++ string type ${$}`);var ae=C(H),le=yr(4+ae+g);return(S(),F)[le>>>2>>>0]=ae/g,I(H,le+4,ae+g),U!==null&&U.push(Ft,le),le},Uc:Ts,Wc(U){Ft(U)}})}function Rv(h,g){Zt(h>>>=0,{zd:!0,name:g=Ut(g>>>0),Oc:()=>{},Vc:()=>{}})}function Ov(h){Ps(h>>>0,!r,1,!n,131072,!1),Ee()}var gi=h=>{if(!T)try{if(h(),!(0<oe))try{i?vi()&&Ds(m):ee(m)}catch(g){g instanceof Q||g=="unwind"||l(0,g)}}catch(g){g instanceof Q||g=="unwind"||l(0,g)}},Nv=!Atomics.waitAsync||((gy=globalThis.navigator)==null?void 0:gy.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ks(h){h>>>=0,Nv||(Atomics.waitAsync((S(),O),h>>>2,h).value.then(yi),h+=128,Atomics.store((S(),O),h>>>2,1))}var yi=()=>gi(()=>{var h=vi();h&&(ks(h),M0())});function zv(h,g){(h>>>=0)==g>>>0?setTimeout(yi):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=we[h])&&h.postMessage({Sc:"checkMailbox"})}var Cs=[];function Bv(h,g,$,b,I){for(g>>>=0,I>>>=0,Cs.length=0,$=I>>>3,b=I+b>>>3;$<b;){var C;C=(S(),ue)[$++>>>0]?(S(),ue)[$++>>>0]:(S(),Z)[$++>>>0],Cs.push(C)}return(g?Gs[g]:E3[h])(...Cs)}var Pv=()=>{oe=0};function Dv(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):ge(we[h])}function Uv(h){}var wi=h=>{try{h()}catch(g){P(g)}};function Lv(h){var g=(...$)=>{_i.push(h);try{return h(...$)}finally{T||(_i.pop(),Lt&&dn===1&&_i.length===0&&(dn=0,oe+=1,wi(hy),typeof Fibers<"u"&&Fibers.Zd()))}};return e0.set(h,g),g}var dn=0,Lt=null,Zg=0,_i=[],As=new Map,Jg=new Map,e0=new Map,Fv=0,Rs=null,Gv=[],t0=h=>(function(g){if(!T){if(dn===0){var $=!1,b=!1;g((I=0)=>{if(!T&&(Zg=I,$=!0,b)){dn=2,wi(()=>py(Lt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var ae=(S(),O)[Lt+8>>>2>>>0];return ae=Jg.get(ae),ae=e0.get(ae),--oe,ae()})()}catch(ae){C=ae,I=!0}var U=!1;if(!Lt){var H=Rs;H&&(Rs=null,(I?H.reject:H.resolve)(C),U=!0)}if(I&&!U)throw C}}),b=!0,$||(dn=1,Lt=(function(){var I=yr(65548),C=I+12;if((S(),F)[I>>>2>>>0]=C,(S(),F)[I+4>>>2>>>0]=C+65536,C=_i[0],!As.has(C)){var U=Fv++;As.set(C,U),Jg.set(U,C)}return C=As.get(C),(S(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),wi(()=>dy(Lt)))}else dn===2?(dn=0,wi(fy),Ft(Lt),Lt=null,Gv.forEach(gi)):P(`invalid state: ${dn}`);return Zg}})(g=>{h().then(g)});function Wv(h){return h>>>=0,t0(async()=>{var g=await bt(h);return Ot(g)})}var Os=[],qv=h=>{var g=Os.length;return Os.push(h),g},Vv=(h,g)=>{for(var $=Array(h),b=0;b<h;++b){var I=b,C=(S(),F)[g+4*b>>>2>>>0],U=Es[C];if(U===void 0)throw h=`parameter ${b}`,C=w0(C),g=Ut(C),Ft(C),new Hn(`${h} has unknown type ${g}`);$[I]=U}return $},Hv=(h,g,$)=>{var b=[];return h=h(b,$),b.length&&((S(),F)[g>>>2>>>0]=Ot(b)),h},jv={},bi=h=>{var g=jv[h];return g===void 0?Ut(h):g};function Kv(h,g,$){var[b,...I]=Vv(h,g>>>0);g=b.Vc.bind(b);var C=I.map(ae=>ae.Uc.bind(ae));h--;var U={toValue:bt};switch(h=C.map((ae,le)=>{var Se=`argFromPtr${le}`;return U[Se]=ae,`${Se}(args${le?"+"+8*le:""})`}),$){case 0:var H="toValue(handle)";break;case 2:H="new (toValue(handle))";break;case 3:H="";break;case 1:U.getStringOrSymbol=bi,H="toValue(handle)[getStringOrSymbol(methodName)]"}return H+=`(${h})`,b.zd||(U.toReturnWire=g,U.emval_returnValue=Hv,H=`return emval_returnValue(toReturnWire, destructorsRef, ${H})`),H=`return function (handle, methodName, destructorsRef, args) {
  ${H}
  }`,$=new Function(Object.keys(U),H)(...Object.values(U)),H=`methodCaller<(${I.map(ae=>ae.name)}) => ${b.name}>`,qv(Object.defineProperty($,"name",{value:H}))}function Yv(h,g){return g>>>=0,(h=bt(h>>>0))==bt(g)}function Xv(h){return(h>>>=0)?(h=bi(h),Ot(globalThis[h])):Ot(globalThis)}function Qv(h){return h=bi(h>>>0),Ot(t[h])}function Zv(h,g){return g>>>=0,h=bt(h>>>0),g=bt(g),Ot(h[g])}function Jv(h){9<(h>>>=0)&&(kn[h+1]+=1)}function n0(h,g,$,b,I){return Os[h>>>0](g>>>0,$>>>0,b>>>0,I>>>0)}function e3(h,g,$,b,I){return n0(h>>>0,g>>>0,$>>>0,b>>>0,I>>>0)}function t3(){return Ot([])}function n3(h){h=bt(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Ot(g)}function r3(h){return Ot(bi(h>>>0))}function i3(){return Ot({})}function o3(h){for(var g=bt(h>>>=0);g.length;){var $=g.pop();g.pop()($)}Is(h)}function a3(h,g,$){g>>>=0,$>>>=0,h=bt(h>>>0),g=bt(g),$=bt($),h[g]=$}function s3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=h.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=h.getUTCHours(),(S(),O)[g+12>>>2>>>0]=h.getUTCDate(),(S(),O)[g+16>>>2>>>0]=h.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=h}var r0=h=>h%4==0&&(h%100!=0||h%400==0),i0=[0,31,60,91,121,152,182,213,244,274,305,335],o0=[0,31,59,90,120,151,181,212,243,273,304,334];function u3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getSeconds(),(S(),O)[g+4>>>2>>>0]=h.getMinutes(),(S(),O)[g+8>>>2>>>0]=h.getHours(),(S(),O)[g+12>>>2>>>0]=h.getDate(),(S(),O)[g+16>>>2>>>0]=h.getMonth(),(S(),O)[g+20>>>2>>>0]=h.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getDay();var $=(r0(h.getFullYear())?i0:o0)[h.getMonth()]+h.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var b=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=b&&h.getTimezoneOffset()==Math.min(b,$)),(S(),O)[g+32>>>2>>>0]=h}function l3(h){h>>>=0;var g=new Date((S(),O)[h+20>>>2>>>0]+1900,(S(),O)[h+16>>>2>>>0],(S(),O)[h+12>>>2>>>0],(S(),O)[h+8>>>2>>>0],(S(),O)[h+4>>>2>>>0],(S(),O)[h>>>2>>>0],0),$=(S(),O)[h+32>>>2>>>0],b=g.getTimezoneOffset(),I=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),U=Math.min(C,I);return 0>$?(S(),O)[h+32>>>2>>>0]=+(I!=C&&U==b):0<$!=(U==b)&&(I=Math.max(C,I),g.setTime(g.getTime()+6e4*((0<$?U:I)-b))),(S(),O)[h+24>>>2>>>0]=g.getDay(),$=(r0(g.getFullYear())?i0:o0)[g.getMonth()]+g.getDate()-1|0,(S(),O)[h+28>>>2>>>0]=$,(S(),O)[h>>>2>>>0]=g.getSeconds(),(S(),O)[h+4>>>2>>>0]=g.getMinutes(),(S(),O)[h+8>>>2>>>0]=g.getHours(),(S(),O)[h+12>>>2>>>0]=g.getDate(),(S(),O)[h+16>>>2>>>0]=g.getMonth(),(S(),O)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function a0(h,g,$,b,I,C,U){return i?ie(16,1,h,g,$,b,I,C,U):-52}function s0(h,g,$,b,I,C){if(i)return ie(17,1,h,g,$,b,I,C)}var gr={},c3=()=>performance.timeOrigin+performance.now();function u0(h,g){if(i)return ie(18,1,h,g);if(gr[h]&&(clearTimeout(gr[h].id),delete gr[h]),!g)return 0;var $=setTimeout(()=>{delete gr[h],gi(()=>v0(h,performance.timeOrigin+performance.now()))},g);return gr[h]={id:$,Yd:g},0}function d3(h,g,$,b){h>>>=0,g>>>=0,$>>>=0,b>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var U=Math.max(C,I);(S(),F)[h>>>2>>>0]=60*U,(S(),O)[g>>>2>>>0]=+(C!=I),h=(g=H=>{var ae=Math.abs(H);return`UTC${0<=H?"-":"+"}${String(Math.floor(ae/60)).padStart(2,"0")}${String(ae%60).padStart(2,"0")}`})(C),g=g(I),I<C?(cn(h,$,17),cn(g,b,17)):(cn(h,b,17),cn(g,$,17))}var h3=()=>Date.now();function p3(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(S(),ue)[$>>>3>>>0]=BigInt(h),0):28}var Ns=[],l0=(h,g)=>{Ns.length=0;for(var $;$=(S(),X)[h++>>>0];){var b=$!=105;g+=(b&=$!=112)&&g%8?4:0,Ns.push($==112?(S(),F)[g>>>2>>>0]:$==106?(S(),ue)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),Z)[g>>>3>>>0]),g+=b?8:4}return Ns};function f3(h,g,$){return h>>>=0,g=l0(g>>>0,$>>>0),Gs[h](...g)}function m3(h,g,$){return h>>>=0,g=l0(g>>>0,$>>>0),Gs[h](...g)}var g3=()=>{};function y3(h,g){return E(Ke(h>>>0,g>>>0))}var w3=()=>{throw oe+=1,"unwind"};function _3(){return 4294901760}var b3=()=>navigator.hardwareConcurrency,Cn={},xi=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},c0=h=>{for(var g of h)(h=xi(g))&&(Cn[h]=g)};function x3(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),c0(h),Cn.gd=xi(h[3]),Cn.Jd=h,Cn.gd}function $i(h){if(!(h=Cn[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Ft($i.hd??0),g=mi(h)+1;var $=yr(g);return $&&cn(h,$,g),$i.hd=$,$i.hd}function $3(h){h>>>=0;var g=(S(),X).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var b=g*(1+.2/$);b=Math.min(b,h+100663296);e:{b=(Math.min(4294901760,65536*Math.ceil(Math.max(h,b)/65536))-qe.buffer.byteLength+65535)/65536|0;try{qe.grow(b),z();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function v3(h,g,$){if(h>>>=0,g>>>=0,Cn.gd==h)var b=Cn.Jd;else(b=Error().stack.toString().split(`
`))[0]=="Error"&&b.shift(),c0(b);for(var I=3;b[I]&&xi(b[I])!=h;)++I;for(h=0;h<$&&b[h+I];++h)(S(),O)[g+4*h>>>2>>>0]=xi(b[h+I]);return h}var zs,Bs={},d0=()=>{var b;if(!zs){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((b=globalThis.navigator)==null?void 0:b.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Bs)Bs[h]===void 0?delete g[h]:g[h]=Bs[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);zs=$}return zs};function h0(h,g){if(i)return ie(19,1,h,g);h>>>=0,g>>>=0;var $,b=0,I=0;for($ of d0()){var C=g+b;(S(),F)[h+I>>>2>>>0]=C,b+=cn($,C,1/0)+1,I+=4}return 0}function p0(h,g){if(i)return ie(20,1,h,g);h>>>=0,g>>>=0;var $=d0();for(var b of((S(),F)[h>>>2>>>0]=$.length,h=0,$))h+=mi(b)+1;return(S(),F)[g>>>2>>>0]=h,0}function f0(h){return i?ie(21,1,h):52}function m0(h,g,$,b){return i?ie(22,1,h,g,$,b):52}function g0(h,g,$,b){return i?ie(23,1,h,g,$,b):70}var M3=[null,[],[]];function y0(h,g,$,b){if(i)return ie(24,1,h,g,$,b);g>>>=0,$>>>=0,b>>>=0;for(var I=0,C=0;C<$;C++){var U=(S(),F)[g>>>2>>>0],H=(S(),F)[g+4>>>2>>>0];g+=8;for(var ae=0;ae<H;ae++){var le=h,Se=(S(),X)[U+ae>>>0],Ae=M3[le];Se===0||Se===10?((le===1?v:E)(zg(Ae)),Ae.length=0):Ae.push(Se)}I+=H}return(S(),F)[b>>>2>>>0]=I,0}function S3(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)Ue();be.push(async()=>{var g=(async function(){if(!i)return Promise.all(se.map(me))})();W++,await g,--W==0&&J&&(g=J,J=null,g())})})(),i||(qe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),z()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=h=>Ie(h),t.stackAlloc=h=>Us(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),N)[h>>>0]=g;break;case"i16":(S(),G)[h>>>1>>>0]=g;break;case"i32":(S(),O)[h>>>2>>>0]=g;break;case"i64":(S(),ue)[h>>>3>>>0]=BigInt(g);break;case"float":(S(),j)[h>>>2>>>0]=g;break;case"double":(S(),Z)[h>>>3>>>0]=g;break;case"*":(S(),F)[h>>>2>>>0]=g;break;default:P(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),N)[h>>>0];case"i16":return(S(),G)[h>>>1>>>0];case"i32":return(S(),O)[h>>>2>>>0];case"i64":return(S(),ue)[h>>>3>>>0];case"float":return(S(),j)[h>>>2>>>0];case"double":return(S(),Z)[h>>>3>>>0];case"*":return(S(),F)[h>>>2>>>0];default:P(`invalid type for getValue: ${g}`)}},t.UTF8ToString=Ke,t.stringToUTF8=cn,t.lengthBytesUTF8=mi;var w0,_0,vi,Ft,yr,Ps,b0,x0,$0,Ds,v0,M0,ke,wr,S0,Ie,Us,Te,E0,Ls,I0,T0,k0,Fs,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,oy,ay,sy,uy,ly,cy,dy,hy,py,fy,Jt,E3=[$e,ve,Ag,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,a0,s0,u0,h0,p0,f0,m0,g0,y0],Gs={1003524:(h,g,$,b,I)=>{if(t===void 0||!t.Xc)return 1;if((h=Ke(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),b=Number(b>>>0),g+$>h.byteLength)return 3;try{let C=h.subarray(g,g+$);switch(I){case 0:(S(),X).set(C,b>>>0);break;case 1:t.Qd?t.Qd(b,C):t.Id(b,C);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(S(),X).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,b,I)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007283:(h,g,$,b,I)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007457:(h,g,$,b,I)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007631:(h,g,$,b,I)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007806:(h,g,$,b,I)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1007980:(h,g,$,b,I)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008153:(h,g,$,b,I)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008326:(h,g,$,b,I)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008503:(h,g,$,b,I)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008683:(h,g,$,b,I)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,b)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:b?"NHWC":"NCHW"})},1009173:(h,g,$,b)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:b?"NHWC":"NCHW"})},1009306:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le,hn)=>{t.$b("ConvTranspose",h,{format:ae?"NHWC":"NCHW",autoPad:g,dilations:[$],group:b,kernelShape:[I],pads:[C,U],strides:[H],wIsConst:()=>!!(S(),N)[le>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(hn)})},1009739:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[ae>>>0],outputPadding:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1010400:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le,hn)=>{t.$b("ConvTranspose",h,{format:ae?"NHWC":"NCHW",autoPad:g,dilations:[$],group:b,kernelShape:[I],pads:[C,U],strides:[H],wIsConst:()=>!!(S(),N)[le>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(hn)})},1010833:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:b,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[ae>>>0],outputPadding:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ae)>>>0)):[],pads:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ae)>>>0)):[],pads:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ae)>>>0)):[],pads:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:b,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ae)>>>0)):[],pads:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013758:(h,g,$,b,I)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:b,transB:I})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,b)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:b})},1014024:(h,g,$,b)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:b})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,b,I)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,b,I,C,U,H,ae,le,Se)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],coordinateTransformMode:Ke(I),cubicCoeffA:C,excludeOutside:U,extrapolationValue:H,keepAspectRatioPolicy:Ke(ae),mode:Ke(le),nearestMode:Ke(Se)})},1015056:(h,g,$,b,I,C,U)=>{t.$b("Slice",h,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:Ke(g)})},1015734:(h,g,$,b,I)=>{t.$b("Pad",h,{mode:g,value:$,pads:b?Array.from((S(),O).subarray(Number(b)>>>0,Number(I)>>>0)):[]})},1015877:(h,g,$,b,I,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016046:(h,g,$,b,I,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!I,trainingMode:!!b,format:C?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,b,I)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(b),format:I?"NHWC":"NCHW"})},1016572:(h,g,$,b,I)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(b),format:I?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:Ke(g)})},1016827:(h,g,$,b,I,C,U,H,ae)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C,qkvHiddenSizes:U?Array.from((S(),O).subarray(Number(H)>>>0,Number(H)+U>>>0)):[],pastPresentShareBuffer:!!ae})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le,hn,Ws)=>{t.$b("Conv",h,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(b)>>>0)):[],group:I,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],pads:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ae)>>>0)):[],strides:le?Array.from((S(),O).subarray(Number(le)>>>0,Number(Se)>>>0)):[],w_is_const:()=>!!(S(),N)[Number(Pe)>>>0],activation:Ke(Le),activation_params:hn?Array.from((S(),j).subarray(Number(hn)>>>0,Number(Ws)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,b,I,C,U,H,ae)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:b,softcap:I,doRotary:C,rotaryInterleaved:U,smoothSoftmax:H,localWindowSize:ae})},1018124:(h,g,$,b)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!b})},1018235:(h,g,$,b)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!b})},1018346:(h,g,$,b,I,C)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:b,bits:I,blockSize:C})},1018473:(h,g,$,b,I,C)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:b,scale:I,doRotary:C})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,b,I)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:b,scale:I})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,b)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:b})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function I3(h,g,$){return t0(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function T3(){return typeof wasmOffsetConverter<"u"}function k3(h,g,$,b){var I=Te();try{return P0(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function C3(h,g,$){var b=Te();try{return O0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;ke(1,0)}}function A3(h){var g=Te();try{C0(h)}catch($){if(Ie(g),$!==$+0)throw $;ke(1,0)}}function R3(h,g){var $=Te();try{return Fs(h,g)}catch(b){if(Ie($),b!==b+0)throw b;ke(1,0)}}function O3(h,g,$){var b=Te();try{k0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;ke(1,0)}}function N3(h,g){var $=Te();try{D0(h,g)}catch(b){if(Ie($),b!==b+0)throw b;ke(1,0)}}function z3(h,g,$,b,I,C,U){var H=Te();try{return z0(h,g,$,b,I,C,U)}catch(ae){if(Ie(H),ae!==ae+0)throw ae;ke(1,0)}}function B3(h,g,$,b,I,C){var U=Te();try{A0(h,g,$,b,I,C)}catch(H){if(Ie(U),H!==H+0)throw H;ke(1,0)}}function P3(h,g,$,b){var I=Te();try{B0(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function D3(h,g,$,b,I){var C=Te();try{R0(h,g,$,b,I)}catch(U){if(Ie(C),U!==U+0)throw U;ke(1,0)}}function U3(h,g,$,b,I,C,U){var H=Te();try{L0(h,g,$,b,I,C,U)}catch(ae){if(Ie(H),ae!==ae+0)throw ae;ke(1,0)}}function L3(h,g,$,b,I,C,U){var H=Te();try{F0(h,g,$,b,I,C,U)}catch(ae){if(Ie(H),ae!==ae+0)throw ae;ke(1,0)}}function F3(h,g,$,b,I,C,U,H){var ae=Te();try{V0(h,g,$,b,I,C,U,H)}catch(le){if(Ie(ae),le!==le+0)throw le;ke(1,0)}}function G3(h,g,$,b,I){var C=Te();try{return U0(h,g,$,b,I)}catch(U){if(Ie(C),U!==U+0)throw U;ke(1,0)}}function W3(h,g,$){var b=Te();try{return H0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;ke(1,0)}}function q3(h,g,$,b,I,C,U,H){var ae=Te();try{j0(h,g,$,b,I,C,U,H)}catch(le){if(Ie(ae),le!==le+0)throw le;ke(1,0)}}function V3(h,g,$,b,I,C,U,H,ae,le,Se,Ae){var Pe=Te();try{G0(h,g,$,b,I,C,U,H,ae,le,Se,Ae)}catch(Le){if(Ie(Pe),Le!==Le+0)throw Le;ke(1,0)}}function H3(h,g,$,b,I,C){var U=Te();try{return W0(h,g,$,b,I,C)}catch(H){if(Ie(U),H!==H+0)throw H;ke(1,0)}}function j3(h,g,$){var b=Te();try{return K0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;return ke(1,0),0n}}function K3(h,g,$,b,I,C,U,H,ae){var le=Te();try{N0(h,g,$,b,I,C,U,H,ae)}catch(Se){if(Ie(le),Se!==Se+0)throw Se;ke(1,0)}}function Y3(h){var g=Te();try{return Y0(h)}catch($){if(Ie(g),$!==$+0)throw $;ke(1,0)}}function X3(h,g){var $=Te();try{return cy(h,g)}catch(b){if(Ie($),b!==b+0)throw b;return ke(1,0),0n}}function Q3(h){var g=Te();try{return X0(h)}catch($){if(Ie(g),$!==$+0)throw $;return ke(1,0),0n}}function Z3(h,g,$,b){var I=Te();try{return ny(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function J3(h,g,$,b,I){var C=Te();try{return ry(h,g,$,b,I)}catch(U){if(Ie(C),U!==U+0)throw U;ke(1,0)}}function eM(h,g,$,b,I,C){var U=Te();try{return iy(h,g,$,b,I,C)}catch(H){if(Ie(U),H!==H+0)throw H;ke(1,0)}}function tM(h,g,$,b,I,C){var U=Te();try{return oy(h,g,$,b,I,C)}catch(H){if(Ie(U),H!==H+0)throw H;ke(1,0)}}function nM(h,g,$,b,I,C,U,H){var ae=Te();try{return q0(h,g,$,b,I,C,U,H)}catch(le){if(Ie(ae),le!==le+0)throw le;ke(1,0)}}function rM(h,g,$,b,I){var C=Te();try{return ay(h,g,$,b,I)}catch(U){if(Ie(C),U!==U+0)throw U;return ke(1,0),0n}}function iM(h,g,$,b){var I=Te();try{return sy(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function oM(h,g,$,b){var I=Te();try{return uy(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function aM(h,g,$,b,I,C,U,H,ae,le,Se,Ae){var Pe=Te();try{return ly(h,g,$,b,I,C,U,H,ae,le,Se,Ae)}catch(Le){if(Ie(Pe),Le!==Le+0)throw Le;ke(1,0)}}function sM(h,g,$,b,I,C,U,H,ae,le,Se){var Ae=Te();try{ey(h,g,$,b,I,C,U,H,ae,le,Se)}catch(Pe){if(Ie(Ae),Pe!==Pe+0)throw Pe;ke(1,0)}}function uM(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le,hn,Ws){var hM=Te();try{ty(h,g,$,b,I,C,U,H,ae,le,Se,Ae,Pe,Le,hn,Ws)}catch(qs){if(Ie(hM),qs!==qs+0)throw qs;ke(1,0)}}function lM(h,g,$){var b=Te();try{return Q0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;ke(1,0)}}function cM(h,g,$){var b=Te();try{return Z0(h,g,$)}catch(I){if(Ie(b),I!==I+0)throw I;ke(1,0)}}function dM(h,g,$,b){var I=Te();try{J0(h,g,$,b)}catch(C){if(Ie(I),C!==C+0)throw C;ke(1,0)}}function Mi(){if(0<W)J=Mi;else if(i)y==null||y(t),D();else{for(var h=be;0<h.length;)h.shift()(t);0<W?J=Mi:(t.calledRun=!0,T||(D(),y==null||y(t)))}}return i||(Jt=await te(),Mi()),t.PTR_SIZE=4,A?t:new Promise((h,g)=>{y=h,w=g})}var pu,fu,Dy=ne(()=>{var e,t;pu=hu,fu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),fu&&hu()}),Oi,Ni,mu,ht,gu,$r,yu,wu,zi,_u,Bi,bu,Pi,xu,Di=ne(()=>{Ci(),Oi=typeof location>"u"?void 0:location.origin,Ni=self.location.href>"file:"&&self.location.href<"file;",mu=()=>{{if(Ni){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Oi).href}return self.location.href}},ht=mu(),gu=()=>{if(ht&&!ht.startsWith("blob:"))return ht.substring(0,ht.lastIndexOf("/")+1)},$r=(e,t)=>{try{let n=t??ht;return(n?new URL(e,n):new URL(e)).origin===Oi}catch{return!1}},yu=(e,t)=>{let n=t??ht;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},wu=(e,t)=>`${t??"./"}${e}`,zi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_u=async e=>(await import(e)).default,Bi=(Py(),jn(lu)).default,bu=async()=>{if(!ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(ht))return[void 0,Bi()];let e=await zi(ht);return[e,Bi(e)]},Pi=(Dy(),jn(du)).default,xu=async(e,t,n,r)=>{let i=Pi&&!(e||t);if(i)if(ht)i=$r(ht)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Pi];{let o="ort-wasm-simd-threaded.jsep.mjs",a=e??yu(o,t),s=n&&a&&!$r(a,t),u=s?await zi(a):a??wu(o,t);return[s?u:void 0,await _u(u)]}}}),Ui,vr,Xn,Li,$u,vu,Mu,Fi,De,gn=ne(()=>{Di(),vr=!1,Xn=!1,Li=!1,$u=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},vu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Fi=async e=>{if(vr)return Promise.resolve();if(Xn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Li)throw new Error("previous call to 'initializeWebAssembly()' failed.");Xn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Mu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!vu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=$u();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,s=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,p]=await xu(s,o,n>1,!!c||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let _={numThreads:n};if(c)_.wasmBinary=c,_.locateFile=x=>x;else if(l||o)_.locateFile=x=>l??o+x;else if(s&&s.indexOf("blob:")!==0)_.locateFile=x=>new URL(x,s).href;else if(d){let x=gu();x&&(_.locateFile=M=>x+M)}p(_).then(x=>{Xn=!1,vr=!0,Ui=x,y(),d&&URL.revokeObjectURL(d)},x=>{Xn=!1,Li=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(vr&&Ui)return Ui;throw new Error("WebAssembly is not initialized yet.")}}),$t,Mr,Ne,Gi=ne(()=>{gn(),$t=(e,t)=>{let n=De(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Mr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let a=t?t+i:i;if(typeof o=="object")Mr(o,a+".",n,r);else if(typeof o=="string"||typeof o=="number")r(a,o.toString());else if(typeof o=="boolean")r(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Ne=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),s=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),Su,Uy=ne(()=>{gn(),Gi(),Su=e=>{let t=De(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=$t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Mr(e.extra,"",new WeakSet,(a,s)=>{let u=$t(a,r),l=$t(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${a} - ${s}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),o}}}),Eu,Iu,Tu,yn,ku,Cu,Ly=ne(()=>{gn(),Gi(),Eu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Iu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Tu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},yn=(e,t,n,r)=>{let i=$t(t,r),o=$t(n,r);De()._OrtAddSessionConfigEntry(e,i,o)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},ku=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",yn(e,"session.disable_quant_qdq","1",n),yn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&yn(e,"deviceType",d,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);yn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=$t(o,n),u=a.length,l=0,c=0;if(u>0){l=De()._malloc(u*De().PTR_SIZE),n.push(l),c=De()._malloc(u*De().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)De().setValue(l+d*De().PTR_SIZE,a[d][0],"*"),De().setValue(c+d*De().PTR_SIZE,a[d][1],"*")}await De()._OrtAppendExecutionProvider(e,s,l,c,u)!==0&&Ne(`Can't append execution provider: ${o}.`)}},Cu=async e=>{let t=De(),n=0,r=[],i=e||{};Tu(i);try{let o=Eu(i.graphOptimizationLevel??"all"),a=Iu(i.executionMode??"sequential"),s=typeof i.logId=="string"?$t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?$t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,u,l,c),n===0&&Ne("Can't create session options."),i.executionProviders&&await ku(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);yn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=$t(d,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Ne(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Mr(i.extra,"",new WeakSet,(d,p)=>{yn(n,d,p,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(a=>t._free(a)),o}}}),wn,qt,_n,Sr,Er,Wi,qi,Vi,ye=ne(()=>{wn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},qt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Sr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Er=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Wi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Hi,Au=ne(()=>{Ci(),Hi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let a=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(o,a,l).set(u),a+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ru,Ou,Nu,zu,ji,Bu,Ce,Vt=ne(()=>{ye(),Ru=["V","I","W","E","F"],Ou=(e,t)=>{console.log(`[${Ru[e]},${new Date().toISOString()}]${t}`)},ji=(e,t)=>{Nu=e,zu=t},Bu=(e,t)=>{let n=Er(e),r=Er(Nu);n>=r&&Ou(n,typeof t=="function"?t():t)},Ce=(...e)=>{zu&&Bu(...e)}}),Pu,zn,q,Ir,Du,Uu,Lu,xe=ne(()=>{Pu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},zn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),a=new Array(o);if(n){if(r<2||i<2)return;let s=Pu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[a[o-2],a[o-1]]=s}for(let s=n?3:1;s<=o;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)a[o-s]=Math.max(u,l);else{if(c>1)return;a[o-s]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class Si{static size(t){return Si.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Si.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Si.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Ir=class _r{static adjustPoolAttributes(t,n,r,i,o,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<r.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=r[s]||a[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,a,s){if(s){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)_r.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,o,a,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return _r.computeShapeHelper(t,n,u,r,i,o,a,s),u}static computeConvOutputShape(t,n,r,i,o,a,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return _r.computeShapeHelper(!1,t,u,r,i,o,a,s),u}static computeShapeHelper(t,n,r,i,o,a,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(_r.adjustPadAndReturnShape(n[l+2],i[l],o[l],a[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,a,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return o[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),o[s]=c-o[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[a]+o[s]-l)/n+1)}},Du=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,a,s;t?(o=e[1],a=e[0]):(o=e[0],a=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(o<=0||s<=0||a<=0)throw new Error("invalid shape specified");if(i&&!zn.isValidBroadcast(i,[o,s]))throw new Error("gemm: invalid bias shape for broadcast");return[o,s,a]}},Uu=-34028234663852886e22,Lu=34028234663852886e22}),Ki,Fu=ne(()=>{ye(),Ki=(e,t)=>new(Sr(t))(e)}),Yi,Xi,Qi,Gu,Zi,Wu,Ji,eo,to,qu,Vu,Fy=ne(()=>{ye(),Vt(),Yi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xi=(e,t)=>{if(t==="int32")return e;let n=Yi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Sr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let u=o[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Qi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Gu=1,Zi=()=>Gu++,Wu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ji=(e,t)=>{let n=Yi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},eo=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ji(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Qi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},to=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),a;if(!(o!=null&&o.input.dataTypes.includes(t))){if(a=Wu.get(t),!a||(o==null?void 0:o.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ji(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Xi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Qi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},qu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Zi();return this.tensorTrackersById.set(e,new to(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=Zi(),a=new eo({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new to(this,a)),this.externalTensors.add(a),o}async getCachedTensor(e,t,n,r,i,o,a){let s=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,n)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new eo({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Vu=(...e)=>new qu(...e)}),Qn,Hu,ju,Gy=ne(()=>{ye(),gn(),Fu(),Fy(),Vt(),Qn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Hu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},ju=class{constructor(e){this.tensorManager=Vu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ji(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Hu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=Qn.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Qn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ki(n,t)}}registerMLTensor(e,t,n,r){let i=Qn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,a=!1){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=o.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(a){let d=Xi(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Qn.get(wn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),no=ne(()=>{}),ro,Tr,kr,Ku,Yu,io,oo,Xu,Qu,Wy=ne(()=>{Vt(),no(),ro=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Tr=[],kr=e=>Math.ceil(Number(e)/16)*16,Ku=e=>{for(let t=0;t<Tr.length;t++){let n=Tr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Yu=1,io=()=>Yu++,oo=async(e,t,n,r)=>{let i=kr(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{o.destroy()}},Xu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ro)Tr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=kr(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,a.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=kr(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=io();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ku(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:io(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await oo(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ro.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qu=(...e)=>new Xu(...e)}),Zu,Oe,Ve=ne(()=>{Zu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new Zu(e)}),Bn,Cr,Qe,rt,fe,We,ao,Pn,tn,pe,Zn,Y,he,Ju,so,el,tl,Me=ne(()=>{ye(),xe(),Bn=64,Cr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let n=Cr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=Cr(e,t);return typeof n=="string"?n:n[1]},fe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},We=e=>e%4===0?4:e%2===0?2:1,ao=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Pn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,tn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Zn=(e,t,n,r,i)=>{let o=typeof n=="number",a=o?n:n.length,s=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=Cr(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:c,storage:d,tensor:t},f=A=>typeof A=="string"?A:`${A}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,_=`${y}${e}_strides`,x="";for(let A=0;A<a-1;A++)x+=`
    let dim${A} = current / ${pe(_,A,a)};
    let rest${A} = current % ${pe(_,A,a)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;x+=`indices[${a-1}] = current;`;let M=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=A=>(m.offsetToIndices=!0,a<2?A:`o2i_${e}(${A})`),E=[];if(a>=2)for(let A=a-1;A>=0;A--)E.push(`${pe(_,A,a)} * (indices[${A}])`);let T=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${E.join("+")};
  }`,k=A=>(m.indicesToOffset=!0,a<2?A:`i2o_${e}(${A})`),S=(...A)=>a===0?"0u":`${p.indices}(${A.map(f).join(",")})`,R=(A,z)=>a<2?`${A}`:`${pe(A,z,a)}`,N=(A,z,D)=>a<2?`${A}=${D};`:`${pe(A,z,a)}=${D};`,X={},G=(A,z)=>{m.broadcastedIndicesToOffset=!0;let D=`${z.name}broadcastedIndicesTo${e}Offset`;if(D in X)return`${D}(${A})`;let P=[];for(let K=a-1;K>=0;K--){let te=z.indicesGet("outputIndices",K+z.rank-a);P.push(`${R(_,K)} * (${te} % ${R(w,K)})`)}return X[D]=`fn ${D}(outputIndices: ${z.type.indices}) -> u32 {
             return ${P.length>0?P.join("+"):"0u"};
           }`,`${D}(${A})`},V=(A,z)=>(()=>{if(p.storage===p.value)return`${e}[${A}]=${z};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${z}), select(0u, 0xFFFFFFFFu, ${z} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${z}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${z}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=A=>(()=>{if(p.storage===p.value)return`${e}[${A}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${A}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${A}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),F=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${c} {
    return ${O(`i2o_${e}(indices)`)};
  }`,j=a<2?"":(()=>{let A=s.map(D=>`d${D}: u32`).join(", "),z=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${A}) -> ${c} {
    return get_${e}ByIndices(${S(z)});
  }`})(),Z=(...A)=>{if(A.length!==a)throw new Error(`indices length must be ${a}`);let z=A.map(f).join(",");return a===0?O("0u"):a===1?O(z[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${z})`)},ue=A=>a<2?O(A):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,B=a<2?"":(()=>{let A=s.map(D=>`d${D}: u32`).join(", "),z=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${A}, value: ${c}) {
    set_${e}ByIndices(${S(z)}, value);
  }`})();return{impl:()=>{let A=[],z=!1;return m.offsetToIndices&&(A.push(M),z=!0),m.indicesToOffset&&(A.push(T),z=!0),m.broadcastedIndicesToOffset&&(Object.values(X).forEach(D=>A.push(D)),z=!0),m.set&&(A.push(B),z=!0),m.setByIndices&&(A.push(L),z=!0),m.get&&(A.push(j),z=!0),m.getByIndices&&(A.push(F),z=!0),!o&&z&&A.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${_} = ${p.indices}(${q.computeStrides(n).join(",")});`),A.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:G,indices:S,indicesGet:R,indicesSet:N,set:(...A)=>{if(A.length!==a+1)throw new Error(`indices length must be ${a}`);let z=A[a];if(typeof z!="string")throw new Error("value must be string");let D=A.slice(0,a).map(f).join(",");return a===0?V("0u",z):a===1?V(D[0],z):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${z})`)},setByOffset:V,setByIndices:(A,z)=>a<2?V(A,z):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${z});`),get:Z,getByOffset:O,getByIndices:ue,usage:r,name:e,strides:_,shape:w,rank:a}},Y=(e,t,n,r=1)=>Zn(e,t,n,"input",r),he=(e,t,n,r=1)=>Zn(e,t,n,"output",r),Ju=(e,t,n)=>Zn(e,t,n,"atomicOutput",1),so=(e,t,n,r=1)=>Zn(e,t,n,"internal",r),el=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Bn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},tl=(e,t)=>new el(e,t)}),nl,uo,rl,il,ol,al,pt,sl,ul,nn=ne(()=>{ye(),xe(),Ve(),Me(),nl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},uo=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),rl=(e,t)=>q.sortBasedOnPerm(e,uo(e.length,t)),il=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},ol=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},al=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},pt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=uo(r,t),o=rl(e.dims,i),a=e.dims,s=o,u=r<2||al(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,a,4),w=he("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=ol(e.dims,i),p=q.areEqual(d,[2,3,1]),f=q.areEqual(d,[3,1,2]);if(c.length===2||p||f){a=p?[c[0],c[1]*c[2]]:f?[c[0]*c[1],c[2]]:c,s=[a[1],a[0]];let m=16;return l=y=>{let w=Y("a",n,a.length),_=he("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...fe(a,s)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,a.length),w=he("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${il(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(a,s)]}},getShaderSource:l}},sl=(e,t)=>{nl(e.inputs,t.perm),e.compute(pt(e.inputs[0],t.perm))},ul=e=>Oe({perm:e.perm})}),ll,cl,dl,hl,pl,fl,ml,gl,yl,wl,vt,_l,bl,xl,$l,vl,Ml,Sl,El,Il,Tl,qy=ne(()=>{ye(),xe(),Me(),co(),nn(),ll={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},cl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},dl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},hl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},pl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},fl=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},ml=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},gl=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},yl=(e,t)=>{let n=[];if(!gl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},wl=(e,t,n,r,i,o,a)=>{let s=n[0].dims,u=q.size(o),l=q.size(a),c=Y("_A",n[0].dataType,s),d=he("output",i,o),p=64;u===1&&(p=256);let f=`
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

          var bestValue = f32(${dl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${ll[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${cl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${hl[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},vt=(e,t,n,r)=>{let i=e.inputs.length===1?n:lo(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((f,m)=>m));let a=q.normalizeAxes(o,e.inputs[0].dims.length),s=a,u=e.inputs[0],l=yl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(pt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=pl(s.length,u.dims.length));let[c,d]=fl(u.dims,s),p=c;i.keepDims&&(p=ml(c,a)),e.compute(wl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},_l=(e,t)=>{vt(e,"ReduceMeanShared",t,"mean")},bl=(e,t)=>{vt(e,"ReduceL1Shared",t,"l1")},xl=(e,t)=>{vt(e,"ReduceL2Shared",t,"l2")},$l=(e,t)=>{vt(e,"ReduceLogSumExpShared",t,"logSumExp")},vl=(e,t)=>{vt(e,"ReduceMaxShared",t,"max")},Ml=(e,t)=>{vt(e,"ReduceMinShared",t,"min")},Sl=(e,t)=>{vt(e,"ReduceProdShared",t,"prod")},El=(e,t)=>{vt(e,"ReduceSumShared",t,"sum")},Il=(e,t)=>{vt(e,"ReduceSumSquareShared",t,"sumSquare")},Tl=(e,t)=>{vt(e,"ReduceLogSumShared",t,"logSum")}}),Mt,kl,Ar,lo,St,Cl,Al,Rl,Ol,Nl,zl,Bl,Pl,Dl,Ul,Et,Ll,Fl,Gl,Wl,ql,Vl,Hl,jl,Kl,Yl,co=ne(()=>{ye(),xe(),Ve(),Me(),qy(),Mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},kl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ar=(e,t,n,r,i,o,a=!1,s=!1)=>{let u=[],l=n[0].dims,c=l.length,d=q.normalizeAxes(i,c),p=!s&&d.length===0;l.forEach((y,w)=>{p||d.indexOf(w)>=0?a&&u.push(1):u.push(y)});let f=u.length,m=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],_=Y("_A",n[0].dataType,c),x=he("output",o,f),M=r(_,x,d),v=M[2];for(let E=0,T=0;E<c;E++)p||d.indexOf(E)>=0?(a&&T++,v=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${M[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${_.indicesSet("input_indices",E,`j${E}`)}
                  ${v}
                }`):(w.push(`${_.indicesSet("input_indices",E,x.indicesGet("output_indices",T))};`),T++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${v}
          ${M[3]}
          ${M.length===4?x.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(l,u)]})}},lo=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Oe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},St=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:lo(i,n);e.compute(Ar(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?kl:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Cl=(e,t)=>{Mt(e.inputs),St(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Al=(e,t)=>{Mt(e.inputs),St(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Rl=(e,t)=>{Mt(e.inputs),St(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ol=(e,t)=>{Mt(e.inputs),St(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Nl=(e,t)=>{Mt(e.inputs),St(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",a,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},zl=(e,t)=>{Mt(e.inputs),St(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(o*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Bl=(e,t)=>{Mt(e.inputs),St(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Pl=(e,t)=>{Mt(e.inputs),St(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Dl=(e,t)=>{Mt(e.inputs),St(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Ul=(e,t)=>{Mt(e.inputs),St(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},Ll=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zl(e,t):_l(e,t)},Fl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):bl(e,t)},Gl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):xl(e,t)},Wl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):$l(e,t)},ql=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):vl(e,t)},Vl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bl(e,t):Ml(e,t)},Hl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pl(e,t):Sl(e,t)},jl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dl(e,t):El(e,t)},Kl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ul(e,t):Il(e,t)},Yl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):Tl(e,t)}}),ho,Xl,Ql,po,Vy=ne(()=>{ye(),Ve(),co(),ho=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Xl=(e,t)=>{ho(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ar("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ql=(e,t)=>{ho(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ar("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},po=e=>Oe(e)}),Zl,Rr,Jl,ec,tc,Jn,nc,rc,fo=ne(()=>{ye(),xe(),no(),Me(),Zl=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let w=m+y,_=-1,x=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:c,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Rr=(e,t,n)=>t&&e?`
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
    `,Jl=(e,t,n,r,i,o,a,s)=>{let u=We(a?1:o),l=64,c=o/u;c<l&&(l=32);let d=Math.ceil(o/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],f=Qe(e.dataType,u),m=rt(1,u),y=["type"];a&&y.push("type"),s&&y.push("type");let w=_=>{let x=he("x",e.dataType,e.dims,u),M=[x],v=a?Y("seq_lens",a.dataType,a.dims):void 0;v&&M.push(v);let E=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;E&&M.push(E);let T=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(k).declareVariables(...M)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Rr(v,E,!1)}
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
        x[offset + i] = ${x.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},ec=(e,t,n,r,i,o,a,s,u)=>{let l=a+o.kvSequenceLength,c=[o.batchSize,o.numHeads,o.sequenceLength,l],d=e>1&&r,p=o.kvNumHeads?o.kvNumHeads:o.numHeads,f=d?[o.batchSize,p,l,o.headSize]:void 0,m=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=We(o.headSize),_=o.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},v=[{type:12,data:o.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:m}],E=d&&r&&q.size(r.dims)>0,T=["type","type"];E&&T.push("type"),i&&T.push("type"),s&&T.push("type"),u&&T.push("type");let k=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=R=>{let N=Y("q",t.dataType,t.dims,w),X=Y("key",n.dataType,n.dims,w),G=[N,X];if(E){let L=Y("past_key",r.dataType,r.dims,w);G.push(L)}i&&G.push(Y("attention_bias",i.dataType,i.dims));let V=s?Y("seq_lens",s.dataType,s.dims):void 0;V&&G.push(V);let O=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;O&&G.push(O);let F=he("output",t.dataType,c),j=[F];d&&j.push(he("present_key",t.dataType,f,w));let Z=rt(1,w),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${R.registerUniforms(ue).declareVariables(...G,...j)}
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
    ${Rr(V,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&d?`
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
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${F.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},tc=(e,t,n,r,i,o,a=void 0,s=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=d?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),a&&M.push("type"),s&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];d&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let E=T=>{let k=Y("probs",t.dataType,t.dims),S=Y("v",n.dataType,n.dims),R=[k,S];x&&R.push(Y("past_value",r.dataType,r.dims));let N=a?Y("seq_lens",a.dataType,a.dims):void 0;a&&R.push(N);let X=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&R.push(X);let G=[he("output",t.dataType,m)];d&&G.push(he("present_value",t.dataType,f));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${T.registerUniforms(V).declareVariables(...R,...G)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Rr(N,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:_}),getShaderSource:E}},Jn=(e,t,n,r,i,o,a,s,u,l,c=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(a?1:0)+(s?1:0)),f=p>1?a:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,_=u&&q.size(u.dims)>0?u:void 0,x=[t,n];f&&q.size(f.dims)>0&&x.push(f),_&&x.push(_),c&&x.push(c),d&&x.push(d);let M=e.compute(ec(p,t,n,f,_,l,y,c,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Jl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[M,c,d]:[M],outputs:[]});let v=[M,r];m&&q.size(m.dims)>0&&v.push(m),c&&v.push(c),d&&v.push(d),e.compute(tc(p,M,r,m,l,y,c,d),{inputs:v,outputs:p>1?[0,2]:[0]})},nc=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,a=12,s={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let p=he("output_q",u[0].dataType,n),f=he("output_k",u[0].dataType,n),m=he("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),_=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${d.registerUniforms(M).declareVariables(y,w,_,p,f,m)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},rc=(e,t)=>{let n=Zl(e.inputs,t),[r,i,o]=nc(e,n);return Jn(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),ic,oc,ac,sc,Hy=ne(()=>{mt(),ye(),xe(),Ve(),Me(),ic=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let a=i.length;if(a!==r.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},oc=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,a=r?We(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,u=q.size(o)/a,l=r,c=l?o.length:o,d=Y("x",e[0].dataType,e[0].dims,a),p=Y("scale",e[1].dataType,e[1].dims,s),f=Y("bias",e[2].dataType,e[2].dims,s),m=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),w=he("y",e[0].dataType,c,a),_=()=>{let M="";if(r)M=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${_()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...fe(o)]:[{type:12,data:u}]})}},ac=e=>Oe(e),sc=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ac({...t,outputCount:r});if(ze.webgpu.validateInputContent&&ic(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(oc(n,i))}}),uc,lc,cc,jy=ne(()=>{xe(),Me(),uc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},lc=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,o=Y("input",i,t,4),a=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=he("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,a,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},cc=e=>{uc(e.inputs),e.compute(lc(e.inputs))}}),dc,Re,hc,pc,fc,mc,gc,yc,wc,_c,bc,xc,$c,vc,Mc,Sc,er,Ec,Or,Ic,Tc,kc,Cc,Ac,Rc,Oc,Nc,zc,Bc,Pc,Dc,Uc,Lc,Fc,Gc,mo,Wc,go,yo,qc,Vc,Hc,jc,Kc,Yc,wo=ne(()=>{ye(),xe(),Ve(),Me(),dc=(e,t,n,r,i,o,a)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),c=he("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return a&&d.push(...a),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,o=e.dataType,a,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>dc(l,q.size(e.dims),e.dataType,o,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},hc=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},pc=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},fc=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},mc=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},gc=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},yc=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},wc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},_c=e=>Oe(e),bc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},xc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:n})},$c=(e,t)=>{let n=t||xc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},vc=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},Mc=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},Sc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},er=e=>Oe(e),Ec=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Or=(e="f32")=>`
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
}`,Ic=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Or(t)))},Tc=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},kc=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},Cc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Or(t)))},Ac=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Rc=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Oc=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Nc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},zc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Bc=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Pc=e=>Oe(e),Dc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Uc=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Lc=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Fc=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Gc=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},mo=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Wc=e=>{e.compute(Re(e.inputs[0],"Tanh",mo))},go=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${mo("v")};
}
`,yo=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,qc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",yo,go(t),void 0,e.inputs[0].dataType))},Vc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Hc=e=>{e.compute(Re(e.inputs[0],"Log","log"))},jc=(e,t)=>`
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
`,Kc=e=>`quick_gelu_impl(${e})`,Yc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Kc,jc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Xc,Qc,Zc,Ky=ne(()=>{xe(),Me(),wo(),Xc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Qc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=he("output",e[0].dataType,t,4),o=q.size(t)/4,a=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Or(a)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Zc=e=>{Xc(e.inputs),e.compute(Qc(e.inputs))}}),Jc,ed,It,td,nd,rd,id,od,ad,sd,ud,ld,cd,Yy=ne(()=>{ye(),xe(),Me(),Jc=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=he("outputData",c,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),_;if(i)if(o){let x=q.size(t)===1,M=q.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||M?_=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):_=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,E="")=>{let T=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${E}(${p(T,k)});
          `};c===9?_=`
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

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},ed=(e,t,n,r,i,o,a=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),c=s,d=q.size(s),p=!1,f=!1,m=[l];if(l){let y=zn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=q.size(c);let w=q.size(s)===1,_=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(_),m.push(x),m.push(M);let v=1;for(let E=1;E<c.length;E++){let T=s[s.length-E],k=u[u.length-E];if(T===k)v*=T;else break}v%4===0?(f=!0,p=!0):(w||_||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Jc(y,s,u,c,p,l,f,i,n.dataType,r.dataType,a,o),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(c)/4)},...fe(s,u,c)]})}},It=(e,t,n,r,i,o)=>{e.compute(ed(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},td=e=>{It(e,"Add",(t,n)=>`${t}+${n}`)},nd=e=>{It(e,"Div",(t,n)=>`${t}/${n}`)},rd=e=>{It(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},id=e=>{It(e,"Mul",(t,n)=>`${t}*${n}`)},od=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;It(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ad=e=>{It(e,"Sub",(t,n)=>`${t}-${n}`)},sd=e=>{It(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},ud=e=>{It(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},ld=e=>{It(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},cd=e=>{It(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),dd,hd,pd,fd,md,gd,Xy=ne(()=>{ye(),xe(),Ve(),Me(),dd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((a,s)=>{if(s!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},hd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,pd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},fd=(e,t,n,r)=>{let i=q.size(n),o=new Array(e.length),a=new Array(e.length),s=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],o[y]=s,l.push(e[y].dims.length),a[y]=Y(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)c.push(...fe(e[y].dims));c.push(...fe(n));let d=he("output",r,n.length),p=d.indicesGet("indices",t),f=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...a,d)})()}

  ${hd(o.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${pd(a,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},md=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);dd(n,i);let o=r.slice();o[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(s=>q.size(s.dims)>0);e.compute(fd(a,i,o,n[0].dataType),{inputs:a})},gd=e=>Oe({axis:e.axis})}),bn,xn,$n,_o,vn=ne(()=>{ye(),xe(),bn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},xn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},$n=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},_o=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Uu,Lu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,yd,bo=ne(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},yd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),wd,Qy=ne(()=>{wd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),tr,xo,$o=ne(()=>{ye(),xe(),Me(),vn(),tr=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((a,s)=>`
      if (${pe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,pe(i,s+o,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},xo=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a[a.length-2],l=s[s.length-1],c=a[a.length-1],d=We(l),p=We(c),f=We(u),m=q.size(n)/d/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),_=[q.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:c}];xn(t,x),x.push(...fe(w,a,s)),y&&x.push(...fe(e[2].dims)),x.push(...fe(_));let M=v=>{let E=so("batch_dims",e[0].dataType,w.length),T=Y("a",e[0].dataType,a.length,p),k=Y("b",e[1].dataType,s.length,d),S=he("output",e[0].dataType,_.length,d),R=Qe(S.type.tensor),N=bn(t,S.type.value,R),X=[T,k],G="";if(y){let F=i?d:1;X.push(Y("bias",e[2].dataType,e[2].dims.length,F)),G=`${i?`value += bias[col / ${F}];`:`value += ${S.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];$n(t,V);let O=()=>{let F=`var a_data: ${T.type.value};`;for(let j=0;j<p;j++)F+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${d}];`;for(let j=0;j<f;j++){F+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${p}];`;for(let Z=0;Z<p;Z++)F+=`
            values[${j}] = fma(${k.type.value}(a_data${p===1?"":`[${Z}]`}), b_data${Z}, values[${j}]);
`}return F};return`
  ${v.registerUniforms(V).registerInternalVariables(E).declareVariables(...X,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${tr("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${tr("b_indices",k,k.rank-2,E.rank,"batch_indices")}
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
      ${N}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),_d,bd,vo,Mo,xd,So,$d,Nr,Eo=ne(()=>{ye(),xe(),Me(),vn(),$o(),bo(),_d=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,bd=(e,t)=>e?`
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
          ${_d(i,r)}
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

          ${bd(i,p)}
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
            `,xd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",So=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:o,p=i?o:l;if(!(p%t[1]===0&&d%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=d/t[0],y=o/t[1],w=u?`
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
      ${xd(i)}
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
`},$d=(e,t,n,r,i=!1)=>{let[o,a,s,u]=r,l=Qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${tr("aIndices",a,a.rank-2,o.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${tr("bIndices",s,s.rank-2,o.rank,"batchIndices")}
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
    `},Nr=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a.slice(0,-2),l=s.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=q.size(c),p=a[a.length-2],f=a[a.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],_=[8,8,1],x=[Math.ceil(m/_[0]/w[0]),Math.ceil(p/_[1]/w[1]),Math.ceil(d/_[2]/w[2])],M=y?4:1,v=[...u,p,f/M],E=v.length,T=[...l,f,m/M],k=T.length,S=[d,p,m/M],R=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];xn(t,R),R.push(...fe(c,v,T));let N=["rank","rank"],X=e.length>2;X&&(R.push(...fe(e[2].dims)),N.push("rank")),R.push(...fe(S));let G=V=>{let O=c.length,F=so("batchDims",e[0].dataType,O,1),j=Qe(e[0].dataType),Z=Y("a",e[0].dataType,E,M),ue=Y("b",e[1].dataType,k,M),L=he("result",e[0].dataType,S.length,M),B=[Z,ue];if(X){let K=i?M:1;B.push(Y("bias",e[2].dataType,e[2].dims.length,K))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];$n(t,A);let z=Qe(L.type.tensor),D=bn(t,L.type.value,z),P=$d(M,X,D,[F,Z,ue,L],i);return`
  ${V.registerUniforms(A).registerInternalVariables(F).declareVariables(...B,L)}
  ${P}
  ${y?vo(w,_,j,F):So(w,_,j,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:G}}}),vd,Md,Zy=ne(()=>{ye(),Vt(),Me(),vn(),bo(),Qy(),Eo(),vd=(e,t,n,r,i=!1,o,a=4,s=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=e?`
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
    var resData = ${Je(a,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,M=e?t&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Je(a,l)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Je(a,l)}(0.0);`,v=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Je(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Je(s,l)}(0.0);`,E=Je(u,l),T=Je(e?a:s,l),k=Je(e?s:a,l),S=bn(o,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?M:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${yd(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Md=(e,t,n,r,i,o,a,s,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&m%4===0,w=l?m:p*f,_=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(_/x[1]/M[1]),Math.ceil(d/x[2]/M[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let E=y?l&&c%4!==0?3:4:1,T=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*E,x[1]),R=r%T===0,N=i%k===0,X=o%S===0,G=y?[E,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];xn(t,V),V.push(...fe(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(V.push(...fe(e[2].dims)),O.push("rank")),V.push(...fe(n));let F=j=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];$n(t,Z);let ue=y?4:1,L=Qe(e[0].dataType),B=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,A=Y("x",e[0].dataType,e[0].dims.length,E===3?1:E),z=Y("w",e[1].dataType,e[1].dims.length,ue),D=[A,z],P=he("result",e[0].dataType,n.length,ue);if(a){let K=Y("bias",e[2].dataType,e[2].dims.length,ue);D.push(K),B+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${wd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Z).declareVariables(...D,P)}
        ${B}
        ${vd(l,R,N,X,a,t,G[0],G[1],G[2],L)}
        ${y?vo(M,x,L,void 0,!l,S):So(M,x,L,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${N};${X};${T};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:V}),getShaderSource:F}}}),Sd,Io,nr,Ed,To,Id,Td,kd,Jy=ne(()=>{ye(),Vt(),xe(),Me(),vn(),bo(),Sd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Io=e=>typeof e=="number"?[e,e,e]:e,nr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ed=(e,t,n,r=1)=>{let i=nr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},To=(e,t,n,r,i)=>{i==null&&(i=Ed(e,t[0],r[0]));let o=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(o[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return o},Id=(e,t,n,r,i,o,a,s,u,l)=>{let c,d,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=To([t,n,r,1],[s,u,l],1,[i,o,a],e);d=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=To([t,n,r,1],[s,u,l],1,[i,o,a],e[0]);d=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/o),f=Math.ceil(r/a);let m=(d-1)*i+s-t,y=(p-1)*o+u-n,w=(f-1)*a+l-r,_=Math.floor(m/2),x=m-_,M=Math.floor(y/2),v=y-M,E=Math.floor(w/2),T=w-E;c={top:M,bottom:v,left:E,right:T,front:_,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:p,outWidth:f}},Td=(e,t,n,r,i,o=!1,a="channelsLast")=>{let s,u,l,c,d;if(a==="channelsLast")[s,u,l,c,d]=e;else if(a==="channelsFirst")[s,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=t,[w,_,x]=Io(n),[M,v,E]=Io(r),T=nr(f,M),k=nr(m,v),S=nr(y,E),{padInfo:R,outDepth:N,outHeight:X,outWidth:G}=Id(i,u,l,c,w,_,x,T,k,S),V=o?p*d:p,O=[0,0,0,0,0];return a==="channelsFirst"?O=[s,V,N,X,G]:a==="channelsLast"&&(O=[s,N,X,G,V]),{batchSize:s,dataFormat:a,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:N,outHeight:X,outWidth:G,outChannels:V,padInfo:R,strideDepth:w,strideHeight:_,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},kd=(e,t,n,r,i,o)=>{let a=o==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,_)=>_)},l=[Math.ceil(Sd(u.x.map(w=>n[w]))/s[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=q.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];xn(t,p),p.push(...fe(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...fe(e[2].dims)),f.push("rank")),p.push(...fe(n));let y=w=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];$n(t,_);let x=1,M=Qe(e[0].dataType),v=Y("x",e[0].dataType,e[0].dims.length,c),E=Y("W",e[1].dataType,e[1].dims.length,x),T=[v,E],k=he("result",e[0].dataType,n.length,x),S="";if(m){let X=Y("bias",e[2].dataType,e[2].dims.length,x);T.push(X),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${a?pe("coords",4,5):pe("coords",1,5)}];
        }`}let R=Je(c,M),N=bn(t,R,M);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(_).declareVariables(...T,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,v.rank)};
              let d2 = ${a?pe("coords",v.rank-1,v.rank):pe("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${a?pe("coords",1,v.rank):pe("coords",2,v.rank)},
              ${a?pe("coords",2,v.rank):pe("coords",3,v.rank)},
              ${a?pe("coords",3,v.rank):pe("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?pe("uniforms.x_shape",1,v.rank):pe("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${a?pe("uniforms.x_shape",2,v.rank):pe("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${a?pe("uniforms.x_shape",3,v.rank):pe("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${a?pe("uniforms.x_shape",4,v.rank):pe("uniforms.x_shape",1,v.rank)};
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
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Cd,Ad,ew=ne(()=>{ye(),xe(),Me(),vn(),Cd=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",a=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?We(l):1,p=q.size(n)/d,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];xn(t,f),f.push(...fe(a,[s[0],s[1],s[2],s[3]/d]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...fe([n[0],n[1],n[2],n[3]/d]));let y=w=>{let _=he("output",e[0].dataType,n.length,d),x=Qe(_.type.tensor),M=bn(t,_.type.value,x),v=Y("x",e[0].dataType,a.length),E=Y("w",e[1].dataType,s.length,d),T=[v,E];i&&T.push(Y("b",e[2].dataType,e[2].dims,d));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];$n(t,k);let S=u?`
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
  ${w.registerUniforms(k).declareVariables(...T,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${S}
    ${o}
    ${M}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Ad=(e,t,n,r)=>{let i=e.length>2,o=We(n[3]),a=We(n[2]),s=q.size(n)/o/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],c=[n[0],n[1],n[2],n[3]/o],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];xn(t,d),d.push(...fe(u,l,c));let p=(a-1)*t.strides[1]+l[1],f=m=>{let y=he("output",e[0].dataType,c.length,o),w=Qe(y.type.tensor),_=bn(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,o),M=Y("w",e[1].dataType,l.length,o),v=[x,M];i&&v.push(Y("b",e[2].dataType,e[2].dims,o));let E=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return $n(t,T),`
  ${m.registerUniforms(T).declareVariables(...v,y)}
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
          let w_val = ${M.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}}}),Rd,zr,Od,Br,ko,Co,Nd,zd,Ao,tw=ne(()=>{xe(),Zy(),Jy(),Eo(),ew(),vn(),$o(),nn(),Rd=(e,t,n,r,i,o)=>{let a=e[0],s=e.slice(o?1:2,o?3:4),u=s.length,l=t[0],c=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),d=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-c[f]+i[f])/i[f]));return d.splice(0,0,a),d.splice(o?3:1,0,l),d},zr=[2,3,1,0],Od=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Br=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();Ir.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ko=e=>{let t=_o(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,a=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Co=(e,t,n,r)=>{let i=n.format==="NHWC",o=Rd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let T=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(pt(t[1],zr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),T.push(k)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Ad(T,n,o,r),{inputs:T}):e.compute(Cd(T,n,o,r),{inputs:T});return}let a=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],p=o[i?1:2],f=o[i?2:3],m=o[i?3:1],y=i&&c===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let T=o[0],k,S,R,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(pt(t[1],zr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let O=s*u*l;k=t[0].reshape([1,T,O]),S=V.reshape([1,O,m]),R=[1,T,m]}else k=t[0].reshape([T,s*u,l]),S=V.reshape([1,l,m]),R=[T,p*f,m];N.push(k),N.push(S)}else k=t[0].reshape([T,l,s*u]),S=t[1].reshape([1,m,l]),R=[T,m,p*f],N.push(S),N.push(k);a&&N.push(t[2]);let X=R[2],G=N[0].dims[N[0].dims.length-1];X<8&&G<8?e.compute(xo(N,n,o,R,i,r),{inputs:N}):e.compute(Nr(N,n,o,R,i,r),{inputs:N});return}let w=!0,_=e.kernelCustomData.wT??e.compute(pt(t[1],zr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let x=[t[0],_];a&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,E=c*d*l;e.compute(Md(x,n,o,M,v,E,a,w,r),{inputs:x})},Nd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),a=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Br({...t,pads:i,strides:o,dilations:a,kernelShape:s},r);Co(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},zd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Br(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=Td(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute(kd(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},Ao=(e,t)=>{if(Od(e.inputs,t),e.inputs[0].dims.length===3)Nd(e,t);else if(e.inputs[0].dims.length===5)zd(e,e.inputs,t);else{let n=Br(t,e.inputs);Co(e,e.inputs,n)}}}),Bd,nw=ne(()=>{ye(),Vt(),xe(),Me(),Bd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",a=t.group,s=e[1].dims,u=s[2]/a,l=s[3],c=o?We(u):1,d=o&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/c)*c,f=u-p,m=o?We(l):1,y=o?l===1?c:m:1,w=q.size(i)/m,_=[Math.ceil(w/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],E=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:E},{type:12,data:T},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...fe(e[0].dims,e[1].dims)];r&&(S.push(...fe(e[2].dims)),x.push("rank")),S.push(...fe(i));let R=N=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Qe(e[0].dataType),V=o?1:2,O=o?2:3,F=o?3:1,j=Y("W",e[1].dataType,e[1].dims.length,y),Z=Y("Dy",e[0].dataType,e[0].dims.length,c),ue=[Z,j];r&&ue.push(Y("bias",e[2].dataType,[i[F]].length,m));let L=he("result",e[0].dataType,i.length,m),B=()=>{let D="";if(d)c===4?D+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?D+=`
          dotProd = dotProd + dot(vec4<${G}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${G}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(D+=`
          dotProd = dotProd + dot(vec4<${G}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${G}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${o?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)D+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let P=0;P<c;P++)D+=`
            let wValue${P} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${P}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${P}] * wValue${P};`;return D},A=()=>{if(f===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let D="";if(c===1){D+="dotProd = dotProd";for(let P=0;P<f;P++)D+=`
            + ${Z.getByOffset(`x_offset + ${P}`)} * ${j.getByOffset(`w_offset + ${P}`)}`;D+=";"}else if(c===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);D+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},z=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
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
                ${d?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${B()}
                  inputChannel = inputChannel + ${d?4:c};
                }
                ${A()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(X).declareVariables(...ue,L)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${m}${d}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:R}}}),Pd,Dd,Ud,Ro,Ld,Fd,Oo,Gd,Wd,rw=ne(()=>{nw(),vn(),nn(),Pd=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,Dd=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},Ud=(e,t,n,r,i,o,a,s,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-c-(s?1:0);m<c;++m,++y){let w=e[y],_=d?w*a[m]:l[m],x=Pd(w,a[m],o[m],t[y],n[m],_);Dd(x,r,o,m,m+c),d&&l.push(a[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-o[m]-o[m+c])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Ro=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),a=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}Ud(s,n,u,e.autoPad,e.group,i,l,r,a,o);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:a,outputShape:o,dilations:u,strides:l}),c},Ld=e=>{let t=_o(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,a=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,outputPadding:c,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Fd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((a,s)=>a+s,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((a,s)=>a+s,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((a,s)=>a+s,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((a,s)=>a+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Oo=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(pt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(Bd(o,n,r),{inputs:o})},Gd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Ro({...t,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:u},r);Oo(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Wd=(e,t)=>{if(Fd(e.inputs,t),e.inputs[0].dims.length===3)Gd(e,t);else{let n=Ro(t,e.inputs);Oo(e,e.inputs,n)}}}),qd,Vd,Hd,iw=ne(()=>{ye(),xe(),Ve(),Me(),qd=(e,t,n,r)=>{let i=q.size(t),o=t.length,a=Y("input",e,o),s=he("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,o),c=d=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",o),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...fe(t,t)]}),getShaderSource:c}},Vd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(qd(r,n,i,t),{inputs:[0]})},Hd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Oe({exclusive:t,reverse:n})}}),jd,Kd,Yd,Xd,Qd,ow=ne(()=>{ye(),xe(),Ve(),Me(),jd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Kd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},Yd=(e,t)=>{let n,r,i,o,a,s,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,o]=e.dims,a=c?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],s=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],s=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(a),p=d.dims.length,f=e.dataType,m=Y("a",f,p),y=he("output",f,p),w=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Kd(s,p,m,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],M=q.size(x),v=d.dims,E=q.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...fe(v,E)]}},getShaderSource:w}},Xd=(e,t)=>{jd(e.inputs),e.compute(Yd(e.inputs[0],t))},Qd=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Pr,rr,No,Zd,Jd,eh,th,zo,nh,rh,ih,aw=ne(()=>{ye(),xe(),Ve(),Me(),Pr="[a-zA-Z]|\\.\\.\\.",rr="("+Pr+")+",No="^"+rr+"$",Zd="("+rr+",)*"+rr,Jd="^"+Zd+"$",eh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},th=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Jd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,a)=>{let s=e[a].dims.slice();if(!o.match(RegExp(No)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,s,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,a])=>a.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp(rr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Pr,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(o);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,a=[],s=0;if(!e.match(RegExp(No))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Pr,"g")),l=new eh(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,d+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[s++],r)}),l}},zo=e=>e+"_max",nh=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>Y(`input${c}`,t,l)),o=q.size(r),a=he("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],_=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,E)=>{var T;if(n.rhs.symbolToIndices.has(E)){let k=(T=n.rhs.symbolToIndices.get(E))==null?void 0:T[0];k!==void 0&&n.lhs.forEach((S,R)=>{if(v.inputIndices.includes(R)){let N=S.symbolToIndices.get(E);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(X=>{c.push(`${i[R].indicesSet(`input${R}Indices`,X,a.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let R=k.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(N=>{m.push(`${i[S].indicesSet(`input${S}Indices`,N,`${E}`)}`)}),_.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${zo(E)}; ${E}++) {`),w.push("}")});let M=x?[...c,`let sum = ${i.map((v,E)=>v.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,p,...y,...m,d,..._,f,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${zo(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((v,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:o});let c=e.map((d,p)=>[...fe(d)]).reduce((d,p)=>d.concat(p),l);return c.push(...fe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}},getShaderSource:u}},rh=(e,t)=>{let n=new th(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,a)=>o.dims);e.compute(nh(i,e.inputs[0].dataType,n,r))},ih=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),oh,Bo,ah,sh,uh,sw=ne(()=>{ye(),xe(),Me(),oh=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Bo=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},ah=(e,t)=>e.length>t.length?Bo(e,t):Bo(t,e),sh=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=ah(t,n),i=e[0].dataType,o=i===9||q.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=d=>{let p=Y("input",i,t.length,a),f=he("output",i,r.length,s),m;if(i===9){let y=(w,_,x="")=>`
          let outputIndices${_} = ${f.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${p.broadcastedIndicesToOffset(`outputIndices${_}`,f)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${w}[${_}] = ${x}(${p.getByOffset(`index${_}`)}[component${_}]);
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
    ${m}`},c=[{type:12,data:u},...fe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},uh=e=>{oh(e.inputs),e.compute(sh(e.inputs),{inputs:[0]})}}),lh,ch,uw=ne(()=>{ye(),xe(),Me(),wo(),lh=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,o=a=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=he("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(s,u,l)}

    ${go(rt(t))}

    ${a.mainStart(Bn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",yo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Bn/4)}})}},ch=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?qc(e):e.compute(lh(e.inputs))}}),dh,hh,ph,fh,lw=ne(()=>{ye(),xe(),Ve(),Me(),dh=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},hh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=q.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(o,1,...r);let s=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(a)/u),c=[{type:12,data:l},{type:6,data:s},{type:12,data:o},...fe(e[0].dims,e[1].dims,a)],d=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=he("output",e[0].dataType,a.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let E=0;E<M;E++)v+=`${M>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let E=0,T=0;E<i;E++)E===o?(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,T+=M):(v+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${T}]`:`outputIndices${x}`};`,T++);return v},_;if(e[0].dataType===9){let x=(M,v,E="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${f.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${M}[${v}] = ${E}(${f.getByOffset(`index${v}`)}[component${v}]);
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
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},ph=e=>Oe({axis:e.axis}),fh=(e,t)=>{let n=e.inputs;dh(n),e.compute(hh(e.inputs,t))}}),mh,gh,yh,cw=ne(()=>{ye(),xe(),Me(),mh=(e,t,n,r,i,o,a,s,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:u}],c=[o];l.push(...fe(t.dims,c));let d=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=he("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},gh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,a=o[o.length-1],s=q.sizeToDimension(o,o.length-1),u=q.sizeFromDimension(r,t.batchDims+a),l=q.sizeToDimension(r,t.batchDims),c=q.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(a),f=u;for(let v=0;v<a;++v)p[a-1-v]=f,f*=r[t.batchDims+a-1-v];let m=mh(e,n[1],p,t.batchDims,r,s,d,c,a),y=t.batchDims+a;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),_=q.size(w),x=[{type:12,data:_},{type:12,data:u},...fe(n[0].dims,m.dims,w)],M=v=>{let E=Y("data",n[0].dataType,n[0].dims.length),T=Y("slice_offsets",12,m.dims.length),k=he("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},yh=e=>({batchDims:e.batch_dims,cacheKey:""})}),wh,_h,bh,xh,dw=ne(()=>{ye(),xe(),Ve(),Me(),wh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],a=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===o.dims[u]:s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,u)=>s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},_h=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=q.normalizeAxis(t.gatherAxis,i),a=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(o,1,...r);let u=q.size(s),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:a},{type:12,data:o},{type:12,data:t.blockSize},...fe(...e.map((f,m)=>f.dims),s)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),_=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=he("output",l,s.length),M=[m,y,w];_&&M.push(_);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},bh=(e,t)=>{let n=e.inputs;wh(n,t),e.compute(_h(e.inputs,t))},xh=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),$h,vh,Mh,Sh,hw=ne(()=>{ye(),xe(),Ve(),Me(),$h=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},vh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,a=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=o.slice(0),c=q.size(l),d=Y("input",r,i),p=Y("indicesInput",a,o.length),f=he("output",r,l.length),m=[{type:12,data:c},{type:6,data:u},{type:12,data:s}];return m.push(...fe(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},Mh=e=>Oe({axis:e.axis}),Sh=(e,t)=>{let n=e.inputs;$h(n),e.compute(vh(e.inputs,t))}}),Eh,Ih,Th,kh,pw=ne(()=>{ye(),xe(),Me(),Eh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ih=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,a]=Du.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),c=Math.ceil(i/u),d=!0,p=q.size(s),f=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...fe(e[2].dims)),m.push("rank")),f.push(...fe(s));let y=_=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=Y("a",e[0].dataType,e[0].dims),E=Y("b",e[1].dataType,e[1].dims),T=v.type.value,k=null,S=[v,E];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),S.push(k));let R=he("output",e[0].dataType,s.length);S.push(R);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(N).declareVariables(...S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${T}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=_=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),v=null,E=[x,M];e.length===3&&(v=Y("c",e[2].dataType,e[2].dims.length),E.push(v));let T=he("output",e[0].dataType,s.length);E.push(T);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",R="";t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(k).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
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
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Th=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},kh=(e,t)=>{Eh(e.inputs),e.compute(Ih(e.inputs,t))}}),zt,Ht,Mn,Sn,Ch,Ah,Rh,Oh,Nh,zh,Bh,Ph,Dh,Uh,fw=ne(()=>{ye(),xe(),Ve(),Me(),[zt,Ht,Mn,Sn]=[0,1,2,3],Ch=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ah=`
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
`,Rh=e=>`
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
`,Oh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Nh=e=>`
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
`,zh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${zt}] = batch;
     indices[${Ht}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Mn}] = u32(r);
            indices[${Sn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Mn}] = u32(clamp(r, 0, H - 1));
          indices[${Sn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Mn}] = gs_reflect(r, border[1], border[3]);
          indices[${Sn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Bh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ph=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[zt,Ht,Mn,Sn]=[0,3,1,2]);let a=he("output",e[0].dataType,o.length),s=n.type.value,u=q.size(o),l=[{type:12,data:u},...fe(e[0].dims,r,o)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${Ah}
  ${Rh(s)}
  ${Oh(t)}
  ${Nh(t)}
  ${zh(n,s,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Mn}]);
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

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${zt}], indices[${Mn}], indices[${Sn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Bh(a,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=q.size(o);return{outputs:[{dims:o,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:c}},Dh=(e,t)=>{Ch(e.inputs),e.compute(Ph(e.inputs,t))},Uh=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Lh,Fh,Po,Gh,ir,Wh,qh=ne(()=>{ye(),xe(),Ve(),no(),fo(),Me(),nn(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Lh=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),o=ot(e,3),a=ot(e,4),s=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=d,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(o&&q.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(a&&q.size(a.dims)>0){M=8;let k=a.dims;throw k.length===1?k[0]===c?M=1:k[0]===3*c+2&&(M=3):k.length===2&&k[0]===c&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,E=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],v=!0}}let T=!1;if(a&&q.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:T,passPastInKv:v,qkvFormat:_}},Fh=e=>Oe({...e}),Po=Oe({perm:[0,2,1,3]}),Gh=(e,t,n,r,i,o,a)=>{let s=[r,i,o],u=q.size(s),l=[{type:12,data:u},{type:12,data:a},{type:12,data:o}],c=d=>{let p=he("qkv_with_bias",t.dataType,s),f=Y("qkv",t.dataType,s),m=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(f,m,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},ir=(e,t,n,r,i,o,a,s)=>{let u=o;if(a&&q.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Gh(e,o,a,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(pt(u,Po.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(pt(u,Po.perm),{inputs:[u],outputs:[-1]})[0]},Wh=(e,t)=>{let n=Lh(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),o=ot(e.inputs,2),a=ot(e.inputs,3),s=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),c=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&o&&i.dims.length===4&&o.dims.length===4,p=ir(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(d)return Jn(e,p,i,o,s,void 0,l,c,u,n);if(!i||!o)throw new Error("key and value must be provided");let f=ir(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),m=ir(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,a,2*n.hiddenSize);Jn(e,p,f,m,s,void 0,l,c,u,n)}}),Vh,Hh,jh,Kh,Do,Yh,Xh,Qh=ne(()=>{ye(),xe(),Ve(),Me(),Vh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Hh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Oe({numOutputs:r,axis:t.axis,splitSizes:n})},jh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Kh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Do=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,o=q.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){d+=t.splitSizes[m],u[m]=d;let y=n.slice();y[o]=t.splitSizes[m],c.push(y),a[m]=he(`output${m}`,i,y.length),l.push({dims:c[m],dataType:e[0].dataType})}p.push({type:12,data:u},...fe(n,...c));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...a)}
  ${jh(u.length)}
  ${Kh(a)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Yh=(e,t)=>{Vh(e.inputs);let n=e.inputs.length===1?t:Hh(e.inputs,t);e.compute(Do(e.inputs,n),{inputs:[0]})},Xh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:r,splitSizes:n})}}),Zh,Dr,Jh,ep=ne(()=>{ye(),xe(),Ve(),Me(),Zh=(e,t)=>{let[n,r,i,o]=e,{numHeads:a,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!q.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/a;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Dr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,a=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,c=e[2].dims[1],d=i===0?c*2:l/r,p=new Array(a,u,l/d,d-c),f=q.computeStrides(p),m=[{type:1,data:o},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let _=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),v=Y("sin_cache",e[3].dataType,e[3].dims.length),E=he("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(_,x,M,v,E)}

        ${w.mainStart(Bn)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
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
            let re = ${_.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/Bn)},programUniforms:m})}},Jh=(e,t)=>{Zh(e.inputs,t),e.compute(Dr(e.inputs,t))}}),tp,np,Uo,rp,ip,mw=ne(()=>{Ve(),ye(),fo(),qh(),Qh(),nn(),ep(),Me(),tp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);f&&(c=m*t.numHeads);let y=o&&o.dims.length!==0,w=a&&a.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let T=E.dims.reduce((k,S)=>k*S,1);if(T!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${T}.`);for(let k=0;k<E.dims.length;k++)if(E.dims[k]!==1&&E.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${E.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:_}},np=Oe({perm:[0,2,1,3]}),Uo=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(pt(r,np.perm),{inputs:[r],outputs:[-1]})[0]),r},rp=(e,t,n,r)=>{let i=7,o=["type","type"],a=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=c=>{let d=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=he("pos_ids",i,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},ip=(e,t)=>{var v;let n=tp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Oe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[p,f,m]=!i&&!o?e.compute(Do([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let E=e.compute(rp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],T=e.inputs[7],k=e.inputs[8],S=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[p,E,T,k],N=[-1];y=e.compute(Dr(R,S),{inputs:R,outputs:N})[0],R.splice(0,1,f);let X=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Dr(R,X),{inputs:R,outputs:N})[0]}let _=ir(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Uo(e,t.doRotary?w:f,n),M=Uo(e,m,n);Jn(e,_,x,M,void 0,void 0,a,s,void 0,n,u,l)}}),Lo,op,ap,sp,gw=ne(()=>{ye(),xe(),nn(),Me(),Lo=(e,t,n,r,i,o,a,s)=>{let u=We(o),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*a,p=64;d===1&&(p=256);let f=[i,a,o/u],m=[i,a,2],y=["rank","type","type"],w=[];w.push(...fe(f,m));let _=x=>{let M=Y("x",t.dataType,3,u),v=Y("scale",n.dataType,n.dims),E=Y("bias",r.dataType,r.dims),T=he("output",1,3,2),k=[M,v,E,T];return`
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
      let value = ${l}(${M.get("batch","channel","h")});
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
      let sum_final = ${tn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${tn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:_},{inputs:[t,n,r],outputs:[-1]})[0]},op=(e,t,n)=>{let r=t[0].dims,i=r,o=2,a=r[0],s=r[1],u=q.sizeFromDimension(r,o),l=We(u),c=q.size(i)/l,d=Lo(e,t[0],t[1],t[2],a,u,s,n.epsilon),p=[a,s,u/l],f=[a,s],m=["type","none"],y=w=>{let _=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),M=he("output",t[0].dataType,p.length,l),v=[_,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...fe(p,f,p)]}),getShaderSource:y},{inputs:[t[0],d]})},ap=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],a=r[r.length-1],s=q.sizeFromDimension(r,1)/a,u=We(a),l=q.size(i)/u,c=[{type:12,data:s},{type:12,data:Math.floor(a/u)}],d=["type","type"],p=!1,f=[0,r.length-1];for(let _=0;_<r.length-2;_++)p=p||r[_+1]!==1,f.push(_+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(pt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(_,x)=>r[f[x]])),y=Lo(e,m,t[1],t[2],o,s,a,n.epsilon),w=_=>{let x=Qe(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${S}))`;case 2:return`vec2<${x}>(${R}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${R}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=Y("input",t[0].dataType,t[0].dims,u),T=he("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},sp=(e,t)=>{t.format==="NHWC"?ap(e,e.inputs,t):op(e,e.inputs,t)}}),up,lp,cp,yw=ne(()=>{ye(),xe(),Me(),up=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},lp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],a=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),c=q.sizeFromDimension(i,u),d=q.size(o.dims),p=a?q.size(a.dims):0;if(d!==c||a&&p!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let f=[];for(let E=0;E<i.length;++E)E<u?f.push(i[E]):f.push(1);let m=We(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];a&&y.push("type");let _=n>1,x=n>2,M=E=>{let T=Qe(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",o.dataType,o.dims,m)];a&&k.push(Y("bias",a.dataType,a.dims,m)),k.push(he("output",e[0].dataType,s,m)),_&&k.push(he("mean_data_output",1,f)),x&&k.push(he("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(S).declareVariables(...k)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ao("f32",m)};
    var mean_square_vector = ${ao("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Pn(T,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Pn(T,m,"x[j + offset]")};
      let f32scale = ${Pn(T,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Pn(T,m,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return _&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},cp=(e,t)=>{up(e.inputs),e.compute(lp(e.inputs,t,e.outputCount))}}),dp,hp,ww=ne(()=>{xe(),$o(),Eo(),dp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},hp=e=>{dp(e.inputs);let t=zn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(xo(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=q.size(e.inputs[0].dims.slice(0,-2)),a=q.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],c=[s,u];e.compute(Nr(c,{activation:""},t,l),{inputs:c})}else e.compute(Nr(e.inputs,{activation:""},t))}}}),pp,fp,mp,gp,yp,_w=ne(()=>{ye(),xe(),Ve(),Me(),pp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,a=e[1];if(!q.areEqual(a.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},fp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=We(a),m=s.concat([i,a]),y=i>1&&a/f%2===0?2:1,w=q.size(m)/f/y,_=64,x=[],M=[u,i,o/d],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...fe(M)),x.push(...fe(v)),x.push(...fe(e[2].dims)),e.length===4&&x.push(...fe(q.convertShape(e[3].dims)));let E=[u,i,a/f];x.push(...fe(E));let T=k=>{let S=M.length,R=Y("a",e[0].dataType,S,d),N=Y("b",12,v.length,p),X=Y("scales",e[2].dataType,e[2].dims.length),G=[R,N,X],V=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;V&&G.push(V);let O=E.length,F=he("output",e[0].dataType,O,f),j=Qe(e[0].dataType),Z=(()=>{switch(d){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${d}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),L=Math.floor(ue/8),B=()=>{let D="";for(let P=0;P<L;P++){let K=P*t.bits*4,te=K+t.bits;D+=`
          // reuse a data (pass ${P})
            var input_offset${P>0?P:""} = ${P===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${P>0?P:""}: ${Z};
            for (var j${P>0?P:""}: u32 = 0; j${P>0?P:""} < ${8/d}; j${P>0?P:""}++) {
              a_data${P>0?P:""}[j${P>0?P:""}] = ${R.getByOffset(`input_offset${P>0?P:""}`)};
              input_offset${P>0?P:""}++;
            }
          `;for(let Q=0;Q<f*y;Q++)D+=`
            b_value = ${p===1?`b${Q}_data`:`b${Q}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${P*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${K}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${Z}(${Array.from({length:4},(de,be)=>`${j}(b_value_lower[${be}]), ${j}(b_value_upper[${be}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Z}(${Array.from({length:8},(de,be)=>`(b_quantized_values[${be}] - ${V?`zero_point${Q}`:"zero_point"}) * scale${Q}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${V?`zero_point${Q}`:"zero_point"}`).join(",")})) * scale${Q};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(Q/f)}]${f>1?`[${Q%f}]`:""} += ${Array.from({length:8/d},(de,be)=>`${d===1?`a_data${P>0?P:""}[${be}] * b_dequantized_values[${be}]`:`dot(a_data${P>0?P:""}[${be}], b_dequantized_values[${be}])`}`).join(" + ")};
          `}return D},A=()=>{let D=`
            var col_index = col * ${f};
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
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let P=0;P<f*y;P++)D+=`
            let scale${P} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${P} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},z=()=>{let D=`col_index = col * ${f};`;for(let P=0;P<f*y;P++)D+=`
            let b${P}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,D};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${y*_}>;
        ${k.declareVariables(...G,F)}
        ${k.mainStart([_,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${A()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${z()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${B()}
                word_offset += ${ue/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${f};${y};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:T}},mp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=s.concat([i,a]),m=128,y=a%8===0?8:a%4===0?4:1,w=m/y,_=Math.floor(32/t.bits),x=w*p*_,M=x/d,v=x/t.blockSize,E=q.size(f)/y,T=[],k=[u,i,o/d],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),T.push(...fe(k)),T.push(...fe(S)),T.push(...fe(e[2].dims)),e.length===4&&T.push(...fe(q.convertShape(e[3].dims)));let R=[u,i,a];T.push(...fe(R));let N=X=>{let G=k.length,V=Y("a",e[0].dataType,G,d),O=Y("b",12,S.length,p),F=Y("scales",e[2].dataType,e[2].dims.length),j=[V,O,F],Z=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;Z&&j.push(Z);let ue=R.length,L=he("output",e[0].dataType,ue),B=Qe(e[0].dataType),A=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${B}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${B}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${B}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${B}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${X.declareVariables(...j,L)}
        ${X.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
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
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${Z?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${B}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${B}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let z=Math.floor(_/8),D="";for(let P=0;P<z;P++){let K=P*t.bits*4,te=K+t.bits;D+=`
              ${A()}
              {${t.bits===2?`
                let half_word = b_value >> ${P*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${K}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${B}>(${Array.from({length:4},(Q,de)=>`${B}(b_value_lower[${de}]), ${B}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${B}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Q,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return D})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:E},programUniforms:T}),getShaderSource:N}},gp=(e,t)=>{pp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(mp(e.inputs,t)):e.compute(fp(e.inputs,t))},yp=e=>Oe(e)}),wp,_p,bp,xp,$p,vp,Mp,Sp,Ep,bw=ne(()=>{ye(),xe(),Me(),wp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_p=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},bp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},xp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},$p=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},vp=(e,t,n)=>{switch(n.mode){case 0:return _p(e,t,n.pads.length);case 1:return bp(e,t,n.pads.length);case 2:return xp(e,t,n.pads.length);case 3:return $p(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Mp=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...fe(e[0].dims,n));let s=["rank"],u=l=>{let c=he("output",e[0].dataType,n.length),d=Y("x",e[0].dataType,r.length),p=d.type.value,f=vp(c,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:o}),getShaderSource:u}},Sp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)o[Number(s[u])]=Number(n[u]),o[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>o[Number(u)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:t.mode,value:r,pads:a}}else return t},Ep=(e,t)=>{wp(e.inputs);let n=Sp(e.inputs,t);e.compute(Mp(e.inputs,n),{inputs:[0]})}}),or,Fo,Go,Wo,qo,Ip,Tp,Vo,Ho,kp,Cp,jo,Ap,Rp,Ko,Op,Np,zp,Bp,xw=ne(()=>{mt(),ye(),xe(),Me(),or=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fo=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Ir.adjustPoolAttributes(n,i,a,s,u,l);let c=Ir.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),d=Object.assign({},t);o?Object.assign(d,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey});let p=c.slice();return p.push(p.splice(1,1)[0]),[d,r?p:c]},Go=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);o.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),o.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);o.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[o,a,!!u,!1,!1]}},Wo=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p=i.format==="NHWC",f=t.type.value,m=he("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",_="",x=n-(p?2:1);if(c?y=`
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
                }`,i.kernelShape.length===2){let M=n-(p?3:2);d?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${M}] < 0 || xIndices[${M}] >= uniforms.x_shape[${M}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
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
              ${_}
              ${a}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:_=`
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
                  ${_}
              }
              ${a}

              output[global_idx] = value;
            }`}},qo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ip=e=>`${qo(e)};${e.countIncludePad}`,Tp=e=>`${qo(e)};${e.storageOrder};${e.dilations}`,Vo=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ho=(e,t,n,r)=>{let[i,o]=Fo(t,r,n),a=Y("x",t.dataType,t.dims.length),s=a.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[c,d,p,f,m]=Go(o,i);c.push(...fe(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:c}),getShaderSource:w=>Wo(w,a,t.dims.length,o.length,i,u,l,0,d,p,f,m)}},kp=e=>{let t=e.count_include_pad!==0,n=Vo(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Ip(r)}},Cp=(e,t)=>{or(e.inputs),e.compute(Ho("AveragePool",e.inputs[0],!1,t))},jo={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ap=e=>{let t=e.format;return{format:t,...jo,cacheKey:t}},Rp=(e,t)=>{or(e.inputs),e.compute(Ho("GlobalAveragePool",e.inputs[0],!0,t))},Ko=(e,t,n,r)=>{let[i,o]=Fo(t,r,n),a=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[c,d,p,f,m]=Go(o,i);return c.push(...fe(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:c}),getShaderSource:y=>Wo(y,u,t.dims.length,o.length,i,a,s,t.dataType===10?-65504:-1e5,d,p,f,m)}},Op=(e,t)=>{or(e.inputs),e.compute(Ko("MaxPool",e.inputs[0],!1,t))},Np=e=>{let t=e.storage_order,n=e.dilations,r=Vo(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Tp(i)}},zp=e=>{let t=e.format;return{format:t,...jo,cacheKey:t}},Bp=(e,t)=>{or(e.inputs),e.compute(Ko("GlobalMaxPool",e.inputs[0],!0,t))}}),Pp,Dp,Up,Lp,$w=ne(()=>{ye(),xe(),Ve(),Me(),Pp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Dp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,a=e[1].dataType,s=q.size(o),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,f=c.length===0||c.length===1&&c[0]===1,m=f===!1&&c.length===1,y=We(s),w=f&&(!u||y===4),_=w?y:1,x=w&&!u?y:1,M=Y("input",u?12:r,l.length,x),v=Y("scale",a,c.length),E=d?Y("zero_point",u?12:r,p.length):void 0,T=he("output",a,o.length,_),k=[M,v];E&&k.push(E);let S=[l,c];d&&S.push(p);let R=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...fe(...S,o)],N=X=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(G).declareVariables(...k,T)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?f?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:m?u?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:R})}},Up=(e,t)=>{Pp(e.inputs,t),e.compute(Dp(e.inputs,t))},Lp=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),Fp,Gp,Wp,vw=ne(()=>{mt(),ye(),Me(),Fp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},Gp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],a=i,s=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...fe(o)],u=l=>{let c=he("output",r,o.length),d=c.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},Wp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&Fp(t,n,r),e.compute(Gp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),qp,Vp,Hp,jp,Mw=ne(()=>{ye(),xe(),Ve(),Me(),qp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Vp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,a=Math.ceil(q.sizeToDimension(r,r.length-1)/o),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:a},{type:12,data:s},{type:12,data:u},...fe(e[1].dims,e[2].dims,i)],c=d=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,o),m=t.reduction!=="none"&&t.reduction!==""?Ju("output",e[0].dataType,i.length):he("output",e[0].dataType,i.length,o);return`
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
    ${qp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c}},Hp=e=>Oe({reduction:e.reduction}),jp=(e,t)=>{e.compute(Vp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Kp,Yp,Xp,Yo,Qp,Zp,Jp,ef,tf,nf,rf,of,Xo,af,sf,uf,lf,cf,df,hf,Sw=ne(()=>{ye(),xe(),Ve(),Me(),Kp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Yp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},Xp=(e,t,n,r,i,o)=>{let[a,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>o.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Kp(r,t),t.axes.length>0&&Yp(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Yo=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Qp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Zp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Jp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,a)=>{r[o]=i[a],r[a+n]=i[t.length+a]}),r):i},ef=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,a)=>i[o]=n[a])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,a)=>Math.round(o*t[a]))}return i},tf=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,a)=>i[a]=Math.round(o*t[a]))),i},nf=(e,t,n,r,i)=>`
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
    }`,rf=(e,t,n,r,i,o,a)=>`
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
    }`,of=(e,t)=>`
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
`:"",af=(e,t,n,r,i)=>{let[o,a,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
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
    }`},sf=(e,t,n,r,i,o,a,s,u,l)=>{let c=n.length===2,[d,p]=c?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===d?"row":"col";return`
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
    `},uf=(e,t,n,r,i)=>{let[o,a,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
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
    }`},lf=(e,t,n,r,i,o)=>{let a=e.dims,s=Jp(o,t.axes,a.length),u=ef(a,r,i,t.axes),l=r.slice();r.length===0&&(l=a.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=tf(a,l,t)));let c=he("output",e.dataType,u.length),d=Y("input",e.dataType,a.length),p=q.size(u),f=a.length===u.length&&a.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,_=x=>`
      ${f?"":`
      ${Qp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${of(d,a)};
              ${Zp(t.nearestMode,n,w)};
              ${rf(d,c,a,u,l.length,s.length,m)};
              `;case"linear":return`
              ${nf(c,a,u,l.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${af(d,c,a,m,y)}`;if(a.length===3||a.length===5)return`${uf(d,c,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${sf(d,c,a,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...fe(a,u)]})}},cf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},df=(e,t)=>{let n=[],r=[],i=[],o=cf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Xp(e.inputs,t,o,n,r,i),e.compute(lf(e.inputs[0],t,o,n,r,i),{inputs:[0]})},hf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,a=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),pf,ff,mf,Ew=ne(()=>{ye(),xe(),Me(),pf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},ff=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,a=q.size(o),s=o,u=a,l=o.slice(-1)[0],c=r?o.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,_=We(l),x=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],M=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,_),Y("skip",e[1].dataType,e[1].dims,_),Y("gamma",e[2].dataType,e[2].dims,_)];d&&k.push(Y("beta",e[3].dataType,e[3].dims,_)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,_)),k.push(he("output",e[0].dataType,s,_)),f&&k.push(he("mean_output",1,c)),m&&k.push(he("inv_std_output",1,c)),y&&k.push(he("input_skip_bias_sum",e[0].dataType,s,_));let S=Qe(e[0].dataType),R=Qe(1,_);return`

      ${E.registerUniforms(T).declareVariables(...k)}
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
          let bias_value = ${p?"bias[offset1d + i]":S+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Pn(S,_,"value")};
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
        let mean = ${tn("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tn("square_sum",_)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:c,dataType:1}),n>2&&v.push({dims:c,dataType:1}),n>3&&v.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${m};${y}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},mf=(e,t)=>{pf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(ff(e.inputs,t,e.outputCount,!1),{outputs:n})}}),gf,ar,yf,Qo,wf,_f,bf,xf,Iw=ne(()=>{ye(),xe(),Ve(),Me(),gf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ar=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},yf=(e,t)=>{if(e.length>1){let n=ar(e,1),r=ar(e,2),i=ar(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Oe({starts:n,ends:r,axes:i})}else return t},Qo=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},wf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,_f=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=ar(e,4);o.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=t.starts.map((_,x)=>Qo(_,x,n,i,o)),s=t.ends.map((_,x)=>Qo(_,x,n,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let _=0;_<n.length;++_)i.includes(_)||(a.splice(_,0,0),s.splice(_,0,n[_]),o.splice(_,0,1));let u=o.map(_=>Math.sign(_));o.forEach((_,x,M)=>{if(_<0){let v=(s[x]-a[x])/_,E=a[x],T=E+v*o[x];a[x]=T,s[x]=E,M[x]=-_}});let l=n.slice(0);i.forEach((_,x)=>{l[_]=Math.ceil((s[_]-a[_])/o[_])});let c={dims:l,dataType:e[0].dataType},d=he("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=q.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:o},...fe(e[0].dims,l)],w=_=>`
      ${_.registerUniforms(m).declareVariables(p,d)}
        ${wf(p,d,n)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},bf=(e,t)=>{gf(e.inputs,t);let n=yf(e.inputs,t);e.compute(_f(e.inputs,n),{inputs:[0]})},xf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Oe({starts:t,ends:n,axes:r})}}),$f,vf,Mf,Sf,Tw=ne(()=>{ye(),xe(),Ve(),nn(),Me(),$f=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},vf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),o=r.length,a=q.normalizeAxis(t.axis,o),s=a<r.length-1,u,l=[];s?(l=Array.from({length:o},(k,S)=>S),l[a]=o-1,l[o-1]=a,u=e.compute(pt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[o-1],p=i/d,f=We(d),m=d/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,_=Y("x",u.dataType,u.dims,f),x=he("result",u.dataType,u.dims,f),M=_.type.value,v=Qe(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,E=k=>`
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
          rowSumShared = ${M}(${tn("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:E},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(pt(T,l),{inputs:[T]})},Mf=(e,t)=>{$f(e.inputs),vf(e,t)},Sf=e=>Oe({axis:e.axis})}),Zo,Ef,If,Tf,kf,kw=ne(()=>{ye(),xe(),Me(),Zo=e=>Array.from(e.getBigInt64Array(),Number),Ef=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Zo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},If=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Tf=(e,t)=>{let n=e[0].dims,r=t??Zo(e[1]),i=If(n,r),o=q.size(i),a=e[0].dataType,s=Y("input",a,n.length),u=he("output",a,i.length),l=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...fe(e[0].dims,i)]}),getShaderSource:l}},kf=e=>{Ef(e.inputs),e.compute(Tf(e.inputs),{inputs:[0]})}}),Cf,Af,Rf,Cw=ne(()=>{ye(),xe(),Me(),Cf=(e,t,n,r,i)=>{let o=he("output_data",i,n.length,4),a=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,p,f)=>`select(${p}, ${d}, ${f})`;if(!r)l=o.setByOffset("global_idx",c(a.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
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
            ${p}[${f}] = ${m}(${c(y,w,_)});
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
      }`},Af=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(q.areEqual(t,n)&&q.areEqual(n,r)),a=t,s=q.size(t);if(o){let l=zn.calcShape(zn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,s=q.size(a)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Cf(l,e,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...fe(r,t,n,a)]})}},Rf=e=>{e.compute(Af(e.inputs))}}),Of,Aw=ne(()=>{Vy(),fo(),Hy(),jy(),Ky(),Yy(),Xy(),tw(),rw(),iw(),ow(),aw(),sw(),uw(),lw(),cw(),dw(),hw(),pw(),fw(),mw(),gw(),yw(),ww(),_w(),qh(),bw(),xw(),$w(),vw(),Mw(),co(),Sw(),ep(),Ew(),Iw(),Tw(),Qh(),kw(),nn(),wo(),Cw(),Of=new Map([["Abs",[hc]],["Acos",[pc]],["Acosh",[fc]],["Add",[td]],["ArgMax",[Ql,po]],["ArgMin",[Xl,po]],["Asin",[mc]],["Asinh",[gc]],["Atan",[yc]],["Atanh",[wc]],["Attention",[rc]],["AveragePool",[Cp,kp]],["BatchNormalization",[sc]],["BiasAdd",[cc]],["BiasSplitGelu",[Zc]],["Cast",[bc,_c]],["Ceil",[vc]],["Clip",[$c]],["Concat",[md,gd]],["Conv",[Ao,ko]],["ConvTranspose",[Wd,Ld]],["Cos",[Mc]],["Cosh",[Sc]],["CumSum",[Vd,Hd]],["DepthToSpace",[Xd,Qd]],["DequantizeLinear",[Up,Lp]],["Div",[nd]],["Einsum",[rh,ih]],["Elu",[Ec,er]],["Equal",[rd]],["Erf",[Ic]],["Exp",[Tc]],["Expand",[uh]],["FastGelu",[ch]],["Floor",[kc]],["FusedConv",[Ao,ko]],["Gather",[fh,ph]],["GatherElements",[Sh,Mh]],["GatherBlockQuantized",[bh,xh]],["GatherND",[gh,yh]],["Gelu",[Cc]],["Gemm",[kh,Th]],["GlobalAveragePool",[Rp,Ap]],["GlobalMaxPool",[Bp,zp]],["Greater",[sd]],["GreaterOrEqual",[ld]],["GridSample",[Dh,Uh]],["GroupQueryAttention",[ip]],["HardSigmoid",[Dc,Pc]],["InstanceNormalization",[sp]],["LayerNormalization",[cp]],["LeakyRelu",[Ac,er]],["Less",[ud]],["LessOrEqual",[cd]],["Log",[Hc]],["MatMul",[hp]],["MatMulNBits",[gp,yp]],["MaxPool",[Op,Np]],["Mul",[id]],["MultiHeadAttention",[Wh,Fh]],["Neg",[Oc]],["Not",[Rc]],["Pad",[Ep]],["Pow",[od]],["QuickGelu",[Yc,er]],["Range",[Wp]],["Reciprocal",[Nc]],["ReduceMin",[Vl]],["ReduceMean",[Ll]],["ReduceMax",[ql]],["ReduceSum",[jl]],["ReduceProd",[Hl]],["ReduceL1",[Fl]],["ReduceL2",[Gl]],["ReduceLogSum",[Yl]],["ReduceLogSumExp",[Wl]],["ReduceSumSquare",[Kl]],["Relu",[zc]],["Resize",[df,hf]],["RotaryEmbedding",[Jh]],["ScatterND",[jp,Hp]],["Sigmoid",[Bc]],["Sin",[Uc]],["Sinh",[Lc]],["Slice",[bf,xf]],["SkipLayerNormalization",[mf]],["Split",[Yh,Xh]],["Sqrt",[Fc]],["Softmax",[Mf,Sf]],["Sub",[ad]],["Tan",[Gc]],["Tanh",[Wc]],["ThresholdedRelu",[Vc,er]],["Tile",[kf]],["Transpose",[sl,ul]],["Where",[Rf]]])}),Nf,Rw=ne(()=>{mt(),Vt(),Me(),Nf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Nt(e.programInfo.name);let o=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),xt(e.programInfo.name)}dispose(){}build(e,t){Nt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=tl(t,this.backend.device.limits),o=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,s=n.createShaderModule({code:a,label:e.name});Ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return xt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,a=Math.ceil(Math.sqrt(o));if(a>i){if(a=Math.ceil(Math.cbrt(o)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),zf={};Rn(zf,{WebGpuBackend:()=>Uf});var Bf,Pf,Df,Uf,Ow=ne(()=>{mt(),ye(),Vt(),Fu(),Wy(),Aw(),Rw(),Bf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Pf=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Bf(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Df=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Uf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,a=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new Df(a),this.gpuDataManager=Qu(this),this.programManager=new Nf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ji(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Nt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,c=o.programName,d=o.inputTensorViews,p=o.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(_=>({dims:_.dims,dataType:qt(_.dataType)})),outputsMetadata:p.map(_=>({dims:_.dims,dataType:qt(_.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let _="";d.forEach((M,v)=>{_+=`input[${v}]: [${M.dims}] | ${qt(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${qt(M.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${c}" ${_}${x}start time: ${y} ns, execution time: ${w-y} ns`)}xr("GPU",`${c}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),xt()}run(e,t,n,r,i,o){Nt(e.name);let a=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);a.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?s.map((x,M)=>M):n;if(c.length!==s.length)throw new Error(`Output size ${c.length} must be equal to ${s.length}.`);let d=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=o)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let M=c[x]===-1,v=c[x]===-2,E=M||v?i(s[x].dataType,s[x].dims):r(c[x],s[x].dataType,s[x].dims);if(d.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if(M&&this.temporaryData.push(T),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(T)}p.push(T)}if(a.length!==t.length||p.length!==d.length){if(p.length===0)return xt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let R=k.type===10?2:4,N,X;k.type===10?(X=S.length>4?16:S.length>2?8:S.length*R,N=S.length>4?16:R*S.length):(X=S.length<=2?S.length*R:16,N=16),x=Math.ceil(x/X)*X,M.push(x);let G=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/G)*N:S.length*R});let v=16;x=Math.ceil(x/v)*v;let E=new ArrayBuffer(x);l.forEach((k,S)=>{let R=M[S],N=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(E,R,N.length).set(N);else if(k.type===12)new Uint32Array(E,R,N.length).set(N);else if(k.type===10)new Uint16Array(E,R,N.length).set(N);else if(k.type===1)new Float32Array(E,R,N.length).set(N);else throw new Error(`Unsupported uniform type: ${qt(k.type)}`)});let T=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,x),this.gpuDataManager.release(T.id),f={offset:0,size:x,buffer:T.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Pf(e,t,y),_=this.programManager.getArtifact(w);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(w,_),Ce("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,E=typeof M.data=="number"?1:M.data.length,[T,k]=_.uniformVariablesInfo[x];if(v!==T||E!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${T} with size ${k}, got type ${v} with size ${E} in program "${_.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(_,a,p,m,f),xt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Of.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,a=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await oo(this,e,t);return Ki(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Lf={};Rn(Lf,{init:()=>Gf});var Ur,Ff,Gf,Nw=ne(()=>{ye(),Vt(),xe(),Gy(),Ur=class _y{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new _y(this.module,this.dataType,this.data,t)}},Ff=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let a=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let s=[];for(let u=0;u<a;u++){let l=Number(e.getValue(r*i++,o)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,o)),p=[];for(let f=0;f<d;f++)p.push(Number(e.getValue(r*i++,o)));s.push(new Ur(e,l,c,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Ur(this.module,u,this.output(s,l),l),o=(s,u)=>{let l=_n(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Ur(this.module,s,c,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(o+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Gf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(Ow(),jn(zf)).WebGpuBackend,a=new o;await a.initialize(n,r),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,u,l,c=!1)=>{if(c)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(s),Number(u));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));a.upload(Number(u),d)}},async(s,u,l)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await a.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>a.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>a.releaseKernel(s),(s,u,l,c)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new Ff(t,a,Number(u));return a.computeKernel(Number(s),d,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new ju(n);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,u,l,c)=>o.ensureTensor(a,s,u,l,c),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!n.trace])}}}),Wf,Jo,ea,rn,qf,ta,Lr,na,ra,ia,oa,aa,sa,Vf=ne(()=>{mt(),Uy(),Ly(),ye(),gn(),Gi(),Au(),Wf=(e,t)=>{De()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},Jo=async e=>{Wf(e.wasm.numThreads,Er(e.logLevel))},ea=async(e,t)=>{var r,i;(i=(r=De()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(Nw(),jn(Lf)).init;t==="webgpu"&&await o("webgpu",De(),e,n),t==="webnn"&&await o("webnn",De(),e)}},rn=new Map,qf=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},ta=(e,t)=>{let n=De(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,a=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,a,a+o)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(a,"*"));i=Number(n.getValue(a+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*o,"*"));c.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*o,"*")))}return[s,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Lr=e=>{let t=De(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},na=async(e,t)=>{var d,p,f,m;let n,r,i=De();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Lr(e);let o=0,a=0,s=0,u=[],l=[],c=[];try{if([a,u]=await Cu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let R of t.externalData){let N=typeof R=="string"?R:R.path;S.push(Hi(typeof R=="string"?R:R.data).then(X=>{i.mountExternalData(N,X)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let R=S,N=R==null?void 0:R.context,X=R==null?void 0:R.gpuDevice,G=R==null?void 0:R.deviceType,V=R==null?void 0:R.powerPreference;N?i.currentContext=N:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,a),(d=i.webgpuOnCreateSession)==null||d.call(i,o),o===0&&Ne("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=qf(o),_=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],E=[],T=[];for(let S=0;S<y;S++){let[R,N,X]=ta(o,S);R===0&&Ne("Can't get an input name."),l.push(R);let G=i.UTF8ToString(R);x.push(G),v.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(N),shape:X})}for(let S=0;S<w;S++){let[R,N,X]=ta(o,S+y);R===0&&Ne("Can't get an output name."),c.push(R);let G=i.UTF8ToString(R);M.push(G),E.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:qt(N),shape:X});{if(_&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[G])??"cpu",O=i.webnnIsGraphOutput;if(V==="cpu"&&O&&O(o,G)){T.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(_&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(V)}}let k=null;return T.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Vi(S))}),rn.set(o,[o,l,c,k,_,!1]),[o,x,M,v,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&Ne("Can't release session."),y}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},ra=e=>{var u,l,c;let t=De(),n=rn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,a,s]=n;a&&(s&&t._OrtClearBoundOutputs(a.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),rn.delete(e)},ia=async(e,t,n,r,i,o,a=!1)=>{if(!e){t.push(0);return}let s=De(),u=s.PTR_SIZE,l=e[0],c=e[1],d=e[3],p=d,f,m;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let _=e[2].gpuBuffer;m=_n(wn(l),c);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,o,_,m)}}else if(d==="ml-tensor"){let _=e[2].mlTensor;m=_n(wn(l),c);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,_,wn(l),c)}else{let _=e[2];if(Array.isArray(_)){m=u*_.length,f=s._malloc(m),n.push(f);for(let x=0;x<_.length;x++){if(typeof _[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,$t(_[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=s.UTF8ToString(i);if(x(r,v)||M(r,v)){let E=wn(l);m=_n(E,c),p="ml-tensor";let T=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!T||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await T(r,E,c);k(S,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),f=S}else m=_.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}else m=_.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let _=s._OrtCreateTensor(wn(l),f,m,w,c.length,Vi(p));_===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(_)}finally{s.stackRestore(y)}},oa=async(e,t,n,r,i,o)=>{var G,V,O,F;let a=De(),s=a.PTR_SIZE,u=rn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,_=0,x=[],M=[],v=[],E=[],T=[],k=a.stackSave(),S=a.stackAlloc(y*s),R=a.stackAlloc(y*s),N=a.stackAlloc(w*s),X=a.stackAlloc(w*s);try{[_,x]=Su(o),fn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await ia(n[L],M,E,e,c[t[L]],t[L],f);for(let L=0;L<w;L++)await ia(i[L],v,E,e,d[r[L]],y+r[L],f);mn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)a.setValue(S+L*s,M[L],"*"),a.setValue(R+L*s,c[t[L]],"*");for(let L=0;L<w;L++)a.setValue(N+L*s,v[L],"*"),a.setValue(X+L*s,d[r[L]],"*");if(p&&!m){let{handle:L,outputPreferredLocations:B,outputPreferredLocationsEncoded:A}=p;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);fn("wasm bindInputsOutputs");for(let z=0;z<y;z++){let D=t[z];await a._OrtBindInput(L,c[D],M[z])!==0&&Ne(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let D=r[z];(G=i[z])!=null&&G[3]?(T.push(v[z]),a._OrtBindOutput(L,d[D],v[z],0)!==0&&Ne(`Can't bind pre-allocated output[${z}] for session=${e}.`)):a._OrtBindOutput(L,d[D],0,A[D])!==0&&Ne(`Can't bind output[${z}] to ${B[z]} for session=${e}.`)}mn("wasm bindInputsOutputs"),rn.set(e,[l,c,d,p,f,!0])}(V=a.jsepOnRunStart)==null||V.call(a,l),(O=a.webnnOnRunStart)==null||O.call(a,l);let j;p?j=await a._OrtRunWithBinding(l,p.handle,w,N,_):j=await a._OrtRun(l,R,S,y,X,w,N,_),j!==0&&Ne("failed to call OrtRun().");let Z=[],ue=[];fn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let B=Number(a.getValue(N+L*s,"*"));if(B===v[L]||T.includes(v[L])){Z.push(i[L]),B!==v[L]&&a._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.");continue}let A=a.stackSave(),z=a.stackAlloc(4*s),D=!1,P,K=0;try{a._OrtGetTensorData(B,z,z+s,z+2*s,z+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let te=s===4?"i32":"i64",Q=Number(a.getValue(z,te));K=a.getValue(z+s,"*");let de=a.getValue(z+s*2,"*"),be=Number(a.getValue(z+s*3,te)),W=[];for(let oe=0;oe<be;oe++)W.push(Number(a.getValue(de+oe*s,te)));a._OrtFree(de)!==0&&Ne("Can't free memory for tensor dims.");let J=W.reduce((oe,ie)=>oe*ie,1);P=qt(Q);let re=p==null?void 0:p.outputPreferredLocations[r[L]];if(P==="string"){if(re==="gpu-buffer"||re==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let oe=[];for(let ie=0;ie<J;ie++){let $e=a.getValue(K+ie*s,"*"),ve=a.getValue(K+(ie+1)*s,"*"),ee=ie===J-1?void 0:ve-$e;oe.push(a.UTF8ToString($e,ee))}Z.push([P,W,oe,"cpu"])}else if(re==="gpu-buffer"&&J>0){let oe=a.jsepGetBuffer;if(!oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=oe(K),$e=_n(Q,J);if($e===void 0||!Wi(P))throw new Error(`Unsupported data type: ${P}`);D=!0,Z.push([P,W,{gpuBuffer:ie,download:a.jsepCreateDownloader(ie,$e,P),dispose:()=>{a._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(re==="ml-tensor"&&J>0){let oe=a.webnnEnsureTensor,ie=a.webnnIsGraphInputOutputTypeSupported;if(!oe||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_n(Q,J)===void 0||!qi(P))throw new Error(`Unsupported data type: ${P}`);if(!ie(e,P,!1))throw new Error(`preferredLocation "ml-tensor" for ${P} output is not supported by current WebNN Context.`);let $e=await oe(e,K,Q,W,!1);D=!0,Z.push([P,W,{mlTensor:$e,download:a.webnnCreateMLTensorDownloader(K,P),dispose:()=>{a.webnnReleaseTensorId(K),a._OrtReleaseTensor(B)}},"ml-tensor"])}else if(re==="ml-tensor-cpu-output"&&J>0){let oe=a.webnnCreateMLTensorDownloader(K,P)(),ie=Z.length;D=!0,ue.push((async()=>{let $e=[ie,await oe];return a.webnnReleaseTensorId(K),a._OrtReleaseTensor(B),$e})()),Z.push([P,W,[],"cpu"])}else{let oe=Sr(P),ie=new oe(J);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(a.HEAPU8.subarray(K,K+ie.byteLength)),Z.push([P,W,ie,"cpu"])}}finally{a.stackRestore(A),P==="string"&&K&&a._free(K),D||a._OrtReleaseTensor(B)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&Ne("Can't clear bound outputs."),rn.set(e,[l,c,d,p,f,!1]));for(let[L,B]of await Promise.all(ue))Z[L][2]=B;return mn("wasm ProcessOutputTensor"),Z}finally{(F=a.webnnOnRunEnd)==null||F.call(a,l),a.stackRestore(k),M.forEach(j=>a._OrtReleaseTensor(j)),v.forEach(j=>a._OrtReleaseTensor(j)),E.forEach(j=>a._free(j)),_!==0&&a._OrtReleaseRunOptions(_),x.forEach(j=>a._free(j))}},aa=e=>{let t=De(),n=rn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},sa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),on,lt,Dn,sr,ur,Fr,ua,Gr,En,In,Hf,jf,Kf,Yf,Xf,Qf,Zf,Jf,em=ne(()=>{mt(),Vf(),gn(),Di(),on=()=>!!ze.wasm.proxy&&typeof document<"u",Dn=!1,sr=!1,ur=!1,Gr=new Map,En=(e,t)=>{let n=Gr.get(e);n?n.push(t):Gr.set(e,[t])},In=()=>{if(Dn||!sr||ur||!lt)throw new Error("worker not ready")},Hf=e=>{switch(e.data.type){case"init-wasm":Dn=!1,e.data.err?(ur=!0,ua[1](e.data.err)):(sr=!0,ua[0]()),Fr&&(URL.revokeObjectURL(Fr),Fr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},jf=async()=>{if(!sr){if(Dn)throw new Error("multiple calls to 'initWasm()' detected.");if(ur)throw new Error("previous call to 'initWasm()' failed.");if(Dn=!0,on())return new Promise((e,t)=>{lt==null||lt.terminate(),bu().then(([n,r])=>{try{lt=r,lt.onerror=o=>t(o),lt.onmessage=Hf,ua=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Ni)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),lt.postMessage(i),Fr=n}catch(i){t(i)}},t)});try{await Fi(ze.wasm),await Jo(ze),sr=!0}catch(e){throw ur=!0,e}finally{Dn=!1}}},Kf=async e=>{if(on())return In(),new Promise((t,n)=>{En("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};lt.postMessage(r)});await ea(ze,e)},Yf=async e=>on()?(In(),new Promise((t,n)=>{En("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};lt.postMessage(r,[e.buffer])})):Lr(e),Xf=async(e,t)=>{if(on()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return In(),new Promise((n,r)=>{En("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),lt.postMessage(i,o)})}else return na(e,t)},Qf=async e=>{if(on())return In(),new Promise((t,n)=>{En("release",[t,n]);let r={type:"release",in:e};lt.postMessage(r)});ra(e)},Zf=async(e,t,n,r,i,o)=>{if(on()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return In(),new Promise((a,s)=>{En("run",[a,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};lt.postMessage(l,sa(u))})}else return oa(e,t,n,r,i,o)},Jf=async e=>{if(on())return In(),new Promise((t,n)=>{En("end-profiling",[t,n]);let r={type:"end-profiling",in:e};lt.postMessage(r)});aa(e)}}),la,tm,nm,zw=ne(()=>{mt(),em(),ye(),Ci(),Au(),la=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},tm=e=>{switch(e[3]){case"cpu":return new Be(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Wi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Be.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!qi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Be.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},nm=class{async fetchModelAndCopyToWasmMemory(e){return Yf(await Hi(e))}async loadModel(e,t){Nt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Xf(n,t),xt()}async dispose(){return Qf(this.sessionId)}async run(e,t,n){Nt();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],f=d[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let o=[],a=[];Object.entries(t).forEach(d=>{let p=d[0],f=d[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);o.push(f),a.push(m)});let s=r.map((d,p)=>la(d,()=>`input "${this.inputNames[i[p]]}"`)),u=o.map((d,p)=>d?la(d,()=>`output "${this.outputNames[a[p]]}"`):null),l=await Zf(this.sessionId,i,s,a,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[a[d]]]=o[d]??tm(l[d]);return xt(),c}startProfiling(){}endProfiling(){Jf(this.sessionId)}}}),rm={};Rn(rm,{OnnxruntimeWebAssemblyBackend:()=>da,initializeFlags:()=>ca,wasmBackend:()=>im});var ca,da,im,Bw=ne(()=>{mt(),em(),zw(),ca=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?xy("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},da=class{async init(e){ca(),await jf(),await Kf(e)}async createInferenceSessionHandler(e,t){let n=new nm;return await n.loadModel(e,t),n}},im=new da});mt(),mt(),mt();var Pw="1.27.0";{let e=(Bw(),jn(rm)).wasmBackend;On("webgpu",e,5),On("webnn",e,5),On("cpu",e,10),On("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:Pw,enumerable:!0});/**
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
 */const Wr=new Map;function om(e,t){const n=Wr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Wr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{om(e,performance.now()-n)}}async function et(e,t){const n=performance.now();try{return await t()}finally{om(e,performance.now()-n)}}function Dw(){return[...Wr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Uw(){Wr.clear()}const Lw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Fw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),Gw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function am(e){const t=Lw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Ww(e){const t=Gw.exec(e);if(t===null)return am(e);const[,n,r,i,o]=t,a=am(o);if(n==="both")return a;const s=Fw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${s}${u} — ${a}`}function qw(e,t,n,r){const i=t*n,o=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return o.set(e),o;for(let a=0;a<i;a+=1)o[a*4]=e[a*r],o[a*4+1]=e[a*r+1],o[a*4+2]=e[a*r+2],o[a*4+3]=255;return o}function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Un(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function sm(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,s)=>a-s),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const Vw=114;function Hw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),a=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-a)/2),resizedWidth:o,resizedHeight:a}}function ha(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,_=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,_+1),M=Math.max(0,Math.min(1,w-_)),v=(p*r+_)*o,E=(p*r+x)*o,T=(f*r+_)*o,k=(f*r+x)*o,S=(c*t+y)*3;for(let R=0;R<3;R++){const N=a[v+R]*(1-M)+a[E+R]*M,X=a[T+R]*(1-M)+a[k+R]*M;s[S+R]=Math.min(255,Math.max(0,Math.round(N*(1-m)+X*m)))}}}return s}function Ln(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,p=Math.min((c+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,_=0,x=0,M=0;for(let E=Math.floor(d);E<p;E++){const T=Math.min(E+1,p)-Math.max(E,d);if(!(T<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const R=S*T,N=(E*r+k)*o;w+=a[N]*R,_+=a[N+1]*R,x+=a[N+2]*R,M+=R}}const v=(c*t+f)*3;s[v]=Math.min(255,Math.max(0,st(w/M))),s[v+1]=Math.min(255,Math.max(0,st(_/M))),s[v+2]=Math.min(255,Math.max(0,st(x/M)))}}return s}function um(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function lr(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,c=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=um(f-m);for(let w=0;w<t;w++){const _=(w+.5)*u-.5,x=Math.floor(_),M=um(_-x),v=(p*t+w)*3;for(let E=0;E<3;E++){let T=0;for(let k=0;k<4;k++){const S=d(m-1+k)*r;let R=0;for(let N=0;N<4;N++)R+=M[N]*a[(S+c(x-1+N))*o+E];T+=y[k]*R}s[v+E]=Math.min(255,Math.max(0,Math.round(T)))}}}return s}function qr(e,t,n=1){const r=Hw(e.width,e.height,t,n),i=ha(e,r.resizedWidth,r.resizedHeight),o=t*t,a=new Float32Array(3*o).fill(Vw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,p=u+c;a[p]=i[d]/255,a[o+p]=i[d+1]/255,a[2*o+p]=i[d+2]/255}}return{tensor:a,params:r}}function pa(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let a=0;a<o;a++){const s=e[a*6],u=e[a*6+1],l=e[a*6+2],c=e[a*6+3],d=e[a*6+4],p=e[a*6+5];if(d<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,_=(c-t.padY)/t.scale;i.push({classIndex:f,confidence:d,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(_-y)],boxFloat:[m,y,w-m,_-y]})}return i}const cr=.8,lm=.65,jw=110,Kw=1280;function Yw(e,t,n){if(n==null)return cr;if(n.length===0)return lm;const r=Math.max(e,t);if(!(r>0))return cr;const i=Kw/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return cr;const a=o.length;return(a%2===1?o[(a-1)/2]:(o[a/2-1]+o[a/2])/2)>=jw?lm:cr}const cm=.25,dm=.6;function Xw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),a=Math.trunc(Number(n[3]));if(![r,i,o,a].every(_=>Number.isFinite(_)))return null;const s=o-r,u=a-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?cm:dm)),c=Math.trunc(u*(s>=u?dm:cm)),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(Math.trunc(e),o+l),m=Math.min(Math.trunc(t),a+c),y=f-d,w=m-p;return y<=0||w<=0?null:{x:d,y:p,width:y,height:w}}const Qw=3,Zw=.15,Jw=.6;function fa(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function e_(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function t_(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...i,...o].every(v=>Number.isFinite(v)))return null;const a=fa(i,o);if(!(a>0))return null;const s=[];for(const v of t??[]){const E=Math.trunc(Number(v.n));if(!Number.isFinite(E)||E<Qw)continue;const T=e_(v.poly);T!==null&&s.push({owner:v.owner,c:T,n:E,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,E)=>E.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Jw);for(const v of u)v.d0=fa(v.c,i),v.d1=fa(v.c,o),v.ecart=Math.abs(v.d0-v.d1);const c=[...u].sort((v,E)=>E.ecart-v.ecart),d=c[0],p=c[1],f=d.d0<d.d1?0:1,m=r>0?1:0,y=f===m?d:p,w=f===m?p:d,_=f===1?d.owner:p.owner,x=f===1?p.owner:d.owner,M=d.ecart/a<Zw;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:_,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function n_(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const r_=.6;function hm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const s=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,c=(e[o*6+3]-t.padY)/t.scale,d=st((s+l)/2),p=st((u+c)/2),f=st((l-s+(c-u))/4);f>=1&&r.push({cx:d,cy:p,r:f})}return r}function i_(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(r_*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function o_(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Un(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function pm(e,t,n){const r=hm(e,t,n);return r.length===0?[]:o_(i_(r))}function a_(e,t,n){return hm(e,t,n)}function ma(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const s_=.5,u_=.7,l_=.55;function ga(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function fm(e){if(e.length===0)return[];const t=(s_*ga(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,a=(i[1]+i[3])/2,s=n.find(u=>(u.cx-o)**2+(u.cy-a)**2<=t);if(s===void 0)n.push({cx:o,cy:a,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+o)/u,s.cy=(s.cy*(u-1)+a)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Un(i.map(o=>o[0]))),Math.trunc(Un(i.map(o=>o[1]))),Math.trunc(Un(i.map(o=>o[2]))),Math.trunc(Un(i.map(o=>o[3])))]);if(r.length>=2){const i=ga(r),o=r.map(()=>!0);for(let a=0;a<r.length;a++)if(o[a])for(let s=a+1;s<r.length;s++){if(!o[s])continue;const u=r[a],l=r[s],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=c*d,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=u_*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?s:a]=!1,!o[a])break}}r=r.filter((a,s)=>o[s])}if(r.length>=3){const i=ga(r);r=r.filter(([o,a,s,u])=>Math.min(s-o,u-a)>=l_*i)}return r}const c_=.7;function d_(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),o=Math.min(e[3],t[3]);if(i<=n||o<=r)return 0;const a=(i-n)*(o-r),s=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=s+u-a;return l>0?a/l:0}function mm(e,t,n,r,i,o=c_){const a=t-4;if(a<=0||n<=0)return[];const s=[];for(let l=0;l<n;l+=1){let c=0,d=0;for(let p=0;p<a;p+=1){const f=e[(4+p)*n+l];f>c&&(c=f,d=p)}c<i||s.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:d})}s.sort((l,c)=>c.score-l.score);const u=[];for(const l of s){let c=!1;for(const d of u)if(d.cls===l.cls&&d_(d.box,l.box)>o){c=!0;break}c||u.push(l)}return u.map(l=>l.box)}const gm=["brown","grey","blue","green","yellow","red","purple"],h_={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},p_=.7;function ym(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[a,s,u,l]=o.box;let c=!1;for(const d of r){const p=e[d];if(p.family!==o.family)continue;const[f,m,y,w]=p.box,_=Math.max(0,Math.min(a+u,f+y)-Math.max(a,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(_*x>=p_*M){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}function Vr(e,t,n){const r=pa(e,t,n,gm.length).map(i=>{const o=gm[i.classIndex];return{color:o,family:h_[o],box:i.box,confidence:i.confidence}});return ym(r)}const f_=8,m_=.8,wm=1.25;function g_(e){if(e.length<f_)return[];const t=[],n=[];for(const a of e){const[,,s,u]=a.box;s>u*wm?t.push(a):u>s*wm&&n.push(a)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<m_*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const y_=2.25,_m=8;function w_(e){if(e.length<_m)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=y_*n[Math.floor(n.length/2)],i=r*r,o=e.map((d,p)=>p),a=d=>{for(;o[d]!==d;)o[d]=o[o[d]],d=o[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const f=t[d][0]-t[p][0],m=t[d][1]-t[p][1];f*f+m*m<=i&&(o[a(d)]=a(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=a(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<_m||u.length===e.length)return[];const l=new Set(u),c=e.map((d,p)=>p).filter(d=>!l.has(d));return c.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const nt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Tt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,a=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s:a,v:r};let s;return r===e?s=60*(t-n)/o:r===t?s=120+60*(n-e)/o:s=240+60*(e-t)/o,s<0&&(s+=360),{h:Math.round(s/2),s:a,v:r}}const __=.42,b_=22,x_=43,$_=120,v_=1.5,M_=.72,S_=110,bm=3;function dr(e,t,n){const{width:r,height:i,channels:o,data:a}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*__);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const f=(d*r+p)*o,m=a[f],y=a[f+1],w=a[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),c+=1)}return c}function E_(e){let t=0,n=0,r=0,i=dr(e,!1,(o,a,s)=>{const u=Tt(o,a,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=dr(e,!0,(o,a,s)=>{const u=Tt(o,a,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function I_(e){let t=0,n=0,r=dr(e,!1,(o,a)=>{t+=o,n+=a});if(r===0&&(r=dr(e,!0,(o,a)=>{t+=o,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function T_(e){let t=0;const n=dr(e,!0,(r,i,o)=>{t+=Tt(r,i,o).s});return n===0?null:t/n}function k_(e){const t=E_(e);if(t===null||t.s<=b_)return 1;if(t.s>=$_){const n=I_(e);return n!==null&&n>=v_?6:3}return t.s>=x_?3:6}function C_(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,s)=>a-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,s)=>e[a].r-e[s].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>o.get(a))}function A_(e,t){const n=[...t];if(e.length<bm||t.length!==e.length)return n;const r=e.map(a=>T_(a)),i=r.filter(a=>a!==null);if(i.length<bm)return n;const o=Un(i);return o<=0||r.forEach((a,s)=>{a!==null&&n[s]!==1&&a<M_*o&&a<S_&&(n[s]=1)}),n}function xm(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),a=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+o-n)**2+(p+a-r)**2<=i*i){const w=((p+a)*e.width+(f+o))*e.channels;d[m]=e.data[w],d[m+1]=e.data[w+1],d[m+2]=e.data[w+2]}else d[m]=255,d[m+1]=255,d[m+2]=255}return{width:l,height:c,channels:3,data:d}}function R_(e,t){const n=t.map(o=>xm(e,o)),r=n.map(o=>k_(o)),i=C_(t,r);return A_(n,i)}function O_(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let a=0,s=0;a<o.length;a++,s+=r)o[a]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:o}}function $m(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let a=0;a<n;a++){const s=a*o,u=Math.min((a+1)*o,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const _=Math.min(w+1,d)-Math.max(w,c);_<=0||(p+=e.data[m*e.width+w]*_*y,f+=_*y)}}r[a*t+l]=Math.min(255,Math.max(0,st(p/f)))}}return{width:t,height:n,data:r}}function N_(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),a=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],a[u]=Math.min(255,Math.max(0,st(s*o)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function z_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){s=!1;break}}i[o*t+a]=s&&r[o*t+a]>0?255:0}return{width:t,height:n,data:i}}function B_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){s=!0;break}}i[o*t+a]=s?255:0}return{width:t,height:n,data:i}}function ya(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],a=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;a[c++]=u,i[u]=s;let d=0,p=0,f=0;for(;l<c;){const m=a[l++],y=m%t,w=m/t|0;d+=1,p+=y,f+=w;for(let _=-1;_<=1;_++)for(let x=-1;x<=1;x++){if(x===0&&_===0)continue;const M=y+x,v=w+_;if(M<0||M>=t||v<0||v>=n)continue;const E=v*t+M;r[E]>0&&i[E]===0&&(i[E]=s,a[c++]=E)}}o[s]={area:d,centroidX:p/d,centroidY:f/d},s+=1}return{labels:i,stats:o}}function P_(e,t,n){return vm(Float32Array.from(e.data),e.width,t,n)}function vm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,a=-n*Math.PI/180,s=Math.cos(a),u=Math.sin(a);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-o,p=l-o,f=s*d-u*p+o,m=u*d+s*p+o,y=Math.floor(f),w=Math.floor(m),_=f-y,x=m-w,M=(T,k)=>T>=0&&T<t&&k>=0&&k<t?e[k*t+T]:r,v=M(y,w)*(1-_)+M(y+1,w)*_,E=M(y,w+1)*(1-_)+M(y+1,w+1)*_;i[l*t+c]=v*(1-x)+E*x}return i}const D_=.9,U_=.34,L_=[.55,.6,.66,.72],F_=22,G_=88,W_=35,Fn=28,wa=4,q_=Array.from({length:15},(e,t)=>-21+t*3),Mm=[-2,0,2],V_=3,H_=.3;function j_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function K_(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const a=n-t+1,s=i-r+1,u=Math.max(s,a),l=new Uint8Array(u*u),c=Math.floor((u-a)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<a;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const p=Fn-2*wa,f=$m({width:u,height:u,data:l},p,p),m=new Float32Array(Fn*Fn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+wa)*Fn+(w+wa)]=f.data[y*p+w]>110?1:0;return m}function Y_(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*U_);if(u<4)return null;const l=a-u,c=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const f=new Int16Array(d*p),m=new Int16Array(d*p),y=new Int16Array(d*p),w=new Uint8Array(d*p),_=[],x=Math.min(d,p)/2;for(let L=0;L<d;L++)for(let B=0;B<p;B++){const A=((L+l)*n+(B+c))*i,{h:z,s:D,v:P}=Tt(o[A],o[A+1],o[A+2]),K=L*p+B;f[K]=z,m[K]=D,y[K]=P,Math.sqrt((B-p/2)**2+(L-d/2)**2)/x<=t&&(w[K]=1,_.push(P))}if(_.length<16)return null;const M=sm(_,55);let v=0,E=0,T=0;const k=L=>f[L]>=F_&&f[L]<=G_&&m[L]>=W_,S=L=>y[L]>=M&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<d*p;L++)w[L]===1&&(T+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(E+=1));const R=v>.5*T&&E<.15*T,N=new Uint8Array(d*p);if(R){const L=sm(_,45);for(let B=0;B<d*p;B++)N[B]=w[B]===1&&y[B]<=L?255:0}else for(let L=0;L<d*p;L++)N[L]=S(L)?255:0;const X={width:p,height:d,data:N},G=z_(X);let V=ya(G),O=V;if(V.stats.length<=1&&(V=ya(X),O=V,V.stats.length<=1))return null;const F=Math.min(d,p)/2;let j=0,Z=-1;for(let L=1;L<O.stats.length;L++){const B=O.stats[L];if(B===void 0)continue;const A=Math.hypot(B.centroidX-p/2,B.centroidY-d/2)/F,z=B.area*(1-.6*Math.min(A,1));z>Z&&(Z=z,j=L)}if(j===0)return null;const ue=new Uint8Array(d*p);for(let L=0;L<d*p;L++)ue[L]=O.labels[L]===j?255:0;return K_(B_({width:p,height:d,data:ue}))}function X_(e,t,n,r,i,o){const a=Fn;let s=0,u=0;for(let l=0;l<a;l++){const c=l-o;if(!(c<0||c>=a))for(let d=0;d<a;d++){const p=d-i;if(p<0||p>=a)continue;const f=e[c*a+p];f!==0&&(u+=f,s+=f*n[l*a+d])}}return s/(u+r-s+1e-6)}function Q_(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of q_){const o=i===0?e:vm(e,Fn,i,0),a=o.reduce((s,u)=>s+u,0);for(const s of Mm)for(const u of Mm){const l=X_(o,a,t,n,s,u);l>r&&(r=l)}}return r}function Z_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of L_){const s=Y_(e,a);if(s!==null)for(const{label:u,bits:l}of t)n.push([Q_(s,l),u])}if(n.length===0)return[null,0];if(n.sort((a,s)=>s[0]-a[0]),n[0][0]<H_)return[null,0];const r=new Map;for(const[a,s]of n.slice(0,V_))r.set(s,(r.get(s)??0)+a);let i=0,o=-1;for(const[a,s]of r)s>o&&(o=s,i=a);return[i,n[0][0]]}const J_=2560,eb=.3,tb=.5,nb=1.6,rb=3,ib=5;function ob(e){const t=Math.min(1,J_/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,o=new Float32Array(3*i),a=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,c+1),p=Math.max(0,Math.min(1,l-c));for(let f=0;f<n;f++){const m=(f+.5)*a-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),_=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(c*e.width+y)*e.channels+M,E=(c*e.width+w)*e.channels+M,T=(d*e.width+y)*e.channels+M,k=(d*e.width+w)*e.channels+M,S=e.data[v]*(1-_)+e.data[E]*_,R=e.data[T]*(1-_)+e.data[k]*_,N=S*(1-p)+R*p;o[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:o,width:n,height:r}}function ab(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const o=i===n-1;for(let a=0;a<t;a++){const s=i*t+a;let u=e[s];if(a+1<t&&e[s+1]>u&&(u=e[s+1]),!o){const l=s+t;e[l]>u&&(u=e[l]),a+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function sb(e){if(e.length<3)return e;const t=[...e].sort((o,a)=>o[0]-a[0]||o[1]-a[1]),n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(let o=t.length-1;o>=0;o--){const a=t[o];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function ub(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,o]=e[r],[a,s]=e[(r+1)%e.length],u=a-i,l=s-o,c=Math.hypot(u,l);if(c===0)continue;const d=u/c,p=l/c;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,E]of e){const T=v*d+E*p,k=-v*p+E*d;T<f&&(f=T),T>m&&(m=T),k<y&&(y=k),k>w&&(w=k)}const _=m-f,x=w-y,M=_*x;if(M<n){n=M;const v=(f+m)/2,E=(y+w)/2;t={cx:v*d-E*p,cy:v*p+E*d,w:_,h:x,angle:Math.atan2(p,d)}}}return t}function lb(e,t,n,r){const i=Math.cos(r.angle),o=Math.sin(r.angle),a=r.w/2,s=r.h/2,u=Math.abs(a*i)+Math.abs(s*o),l=Math.abs(a*o)+Math.abs(s*i),c=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let _=c;_<=d;_++){const x=_-r.cx,M=w-r.cy,v=x*i+M*o,E=-x*o+M*i;Math.abs(v)<=a&&Math.abs(E)<=s&&(m+=e[w*t+_],y+=1)}return y===0?0:m/y}function cb(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,c]=a,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=c[1]?[l,c]:[c,l];return[[d[0],d[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function db(e,t,n,r){const{width:i,height:o}=t;let a=new Uint8Array(i*o);for(let f=0;f<a.length;f++)a[f]=e[f]>eb?255:0;a=ab(a,i,o);const s={width:i,height:o,data:a},{labels:u}=ya(s),l=new Map;for(let f=0;f<o;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const _=w.get(f);_===void 0?w.set(f,[m,m]):(m<_[0]&&(_[0]=m),m>_[1]&&(_[1]=m))}const c=n/i,d=r/o,p=[];for(const[f,m]of l){const y=[];for(const[N,[X,G]]of m)y.push([X-.5,N-.5],[X-.5,N+.5],[G+.5,N-.5],[G+.5,N+.5]);const w=ub(sb(y));if(Math.min(w.w,w.h)<rb)continue;const _=lb(e,i,o,w);if(_<tb)continue;const x=w.w*w.h*nb/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<ib+2)continue;const E=cb(M).map(([N,X])=>[Math.min(n,Math.max(0,Math.round(N*c))),Math.min(r,Math.max(0,Math.round(X*d)))]),T=E.map(N=>N[0]),k=E.map(N=>N[1]),S=Math.min(...T),R=Math.min(...k);p.push({quad:E,x:S,y:R,width:Math.max(...T)-S,height:Math.max(...k)-R,score:_})}return p.sort((f,m)=>m.score-f.score)}function hb(e,t){const[n,r,i,o]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-o[0],i[1]-o[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(o[0]-n[0],o[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=pb([[0,0],[a,0],[a,s],[0,s]],[n,r,i,o]),l=new Uint8Array(a*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<a;p++){const f=u[6]*p+u[7]*d+u[8],m=(u[0]*p+u[1]*d+u[2])/f,y=(u[3]*p+u[4]*d+u[5])/f,w=Math.floor(m),_=Math.floor(y),x=m-w,M=y-_,v=Math.max(0,Math.min(e.width-1,w)),E=Math.max(0,Math.min(e.width-1,w+1)),T=Math.max(0,Math.min(e.height-1,_)),k=Math.max(0,Math.min(e.height-1,_+1));for(let S=0;S<e.channels;S++){const R=e.data[(T*e.width+v)*e.channels+S],N=e.data[(T*e.width+E)*e.channels+S],X=e.data[(k*e.width+v)*e.channels+S],G=e.data[(k*e.width+E)*e.channels+S],V=R*(1-x)+N*x,O=X*(1-x)+G*x;l[(d*a+p)*e.channels+S]=Math.round(V*(1-M)+O*M)}}const c={width:a,height:s,channels:e.channels,data:l};return s/a>=1.5?jt(c,3):c}function pb(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[o,a]=e[i],[s,u]=t[i];n.push([o,a,1,0,0,0,-s*o,-s*a]),r.push(s),n.push([0,0,0,o,a,1,-u*o,-u*a]),r.push(u)}for(let i=0;i<8;i++){let o=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[o][i])&&(o=s);[n[i],n[o]]=[n[o],n[i]],[r[i],r[o]]=[r[o],r[i]];const a=n[i][i];for(let s=i;s<8;s++)n[i][s]/=a;r[i]/=a;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function jt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:a}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*o);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let p,f;n===1?(p=i-1-c,f=d):n===2?(p=r-1-d,f=i-1-c):(p=c,f=r-1-d);const m=(c*r+d)*o,y=(f*s+p)*o;for(let w=0;w<o;w++)l[y+w]=a[m+w]}return{width:s,height:u,channels:o,data:l}}const fb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,fb)*255));return e})();const Kt=48,mb=320;function gb(e){return["blank",...e.characters," "]}function yb(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const s=e[a];s!==0&&(a>0&&e[a-1]===s||(r+=n[s]??"",i.push(t[a])))}if(i.length===0)return["",0];const o=i.reduce((a,s)=>a+s,0)/i.length;return[r,o]}function wb(e,t){const n=Math.trunc(Kt*t),r=e.width/e.height,i=Math.ceil(Kt*r)>n?n:Math.ceil(Kt*r),o=new Float32Array(3*Kt*n),a=Kt*n,s=e.width/i,u=e.height/Kt;for(let l=0;l<Kt;l++){const c=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(c))),p=Math.min(e.height-1,d+1),f=Math.max(0,Math.min(1,c-d));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),_=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,E=(d*e.width+w)*e.channels+v,T=(d*e.width+_)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+_)*e.channels+v,R=e.data[E]*(1-x)+e.data[T]*x,N=e.data[k]*(1-x)+e.data[S]*x,X=R*(1-f)+N*f;o[M*a+l*n+m]=(X/255-.5)/.5}}}return{tensor:o,width:n}}const _b=62,bb=8,xb=5;function _a(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function $b(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),o=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let s=1;s<=r;s++)o[s]=e[a-1]===t[s-1]?i[s-1]+1:Math.max(i[s],o[s-1]);[i,o]=[o,i]}return i[r]}function Hr(e,t){return e.length===0&&t.length===0?100:200*$b(e,t)/(e.length+t.length)}function Sm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Hr(n(e),n(t))}function vb(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),o=[...n].filter(c=>!r.has(c)).sort(),a=[...r].filter(c=>!n.has(c)).sort(),s=i.join(" "),u=[s,o.join(" ")].filter(Boolean).join(" "),l=[s,a.join(" ")].filter(Boolean).join(" ");return s.length>0&&(o.length===0||a.length===0)?100:Math.max(Hr(s,u),Hr(s,l),Hr(u,l))}function Mb(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const o of[_a(i),_a(r.name)])if(o)for(const a of[o,o.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function Sb(e,t){const n=_a(e);if(!n||t.length===0)return null;const i=Mb(t).map(c=>({...c,score:vb(n,c.key)})).sort((c,d)=>d.score-c.score).slice(0,bb).filter(c=>c.score>=_b);if(i.length===0)return null;const o=i[0].score,a=i.filter(c=>o-c.score<=xb),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],l=[Sm(s,u.key),u.score];for(const c of a.slice(1)){const d=[Sm(s,c.key),c.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=c,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Em=5e3,ba=.75,Im=15,Eb=1.25,Ib=2.4,Tb=.003,kb=.85,Cb=4,xa=2600,$a=2,va=.3,Tm=.1,km=.012,Ab=22,Cm=.5,jr=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,a=t.width*t.height;o<a;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function Rb(e,t,n,r){const i=r.map(Q=>Q[0]),o=r.map(Q=>Q[1]),a=i.reduce((Q,de)=>Q+de,0)/i.length,s=o.reduce((Q,de)=>Q+de,0)/o.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...o)-Math.min(...o));if(u<4)return null;const l=u*Cb,c=Math.max(0,Math.trunc(a-l)),d=Math.min(n.width,Math.trunc(a+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<xa?$a:1,y=tt(e,n),w=tt(e,t),_=new e.Rect(c,p,d-c,f-p),x=y.roi(_),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,E=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,E,e.COLOR_RGB2GRAY);const T=new e.ORB(Em),k=new e.KeyPointVector,S=new e.KeyPointVector,R=new e.Mat,N=new e.Mat,X=new e.Mat,G=[y,w,x,M,v,E,k,S,R,N,X],V=Q=>{for(const de of G)try{de.delete()}catch{}try{T.delete()}catch{}return Q};if(T.detectAndCompute(v,X,k,R),T.detectAndCompute(E,X,S,N),R.rows<8||N.rows<8)return V(null);const O=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;O.knnMatch(R,N,F,2);const j=[],Z=[];for(let Q=0;Q<F.size();Q++){const de=F.get(Q);if(de.size()===2){const be=de.get(0),W=de.get(1);if(be.distance<ba*W.distance){const J=k.get(be.queryIdx).pt,re=S.get(be.trainIdx).pt;j.push(J.x,J.y),Z.push(re.x,re.y)}}}if(F.delete(),O.delete(),j.length/2<8)return V(null);const ue=e.matFromArray(j.length/2,1,e.CV_32FC2,j),L=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),B=new e.Mat,A=e.findHomography(ue,L,e.RANSAC,5,B);let z=0;for(let Q=0;Q<B.rows;Q++)z+=B.data[Q];const D=A.rows===3?[...A.data64F]:null;if(ue.delete(),L.delete(),B.delete(),A.delete(),D===null||z<Im)return V(null);const P=1/m,K=[[P,0,c],[0,P,p],[0,0,1]],te=[0,1,2].map(Q=>[0,1,2].map(de=>K[Q][0]*D[de]+K[Q][1]*D[3+de]+K[Q][2]*D[6+de]));return V({H:te,inliers:z})}function Ma(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*c}const i=Math.abs(r/2)/(t*n);if(i<Tb||i>kb)return!1;const o=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),a=Math.min(...o);if(a<1)return!1;const s=Math.max(...o)/a;return s>=Eb&&s<=Ib}function Sa(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ea(e,t,n,r){const i=n.width,o=n.height,a=Math.max(8,Math.trunc(va*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-a*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-a*r[G][0]-a*r[G][1];const c=tt(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(d,f,e.COLOR_RGB2Lab),c.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(a/3)),w=[[],[],[]],_=(G,V)=>{const O=(V*s+G)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let G=0;G<u;G++)for(let V=0;V<s;V++)(G<y||G>=u-y||V<y||V>=s-y)&&_(V,G);const x=G=>{G.sort((O,F)=>O-F);const V=G.length>>1;return G.length%2?G[V]:(G[V-1]+G[V])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(G,V)=>{const O=(V*s+G)*3,F=m[O]-M[0],j=m[O+1]-M[1],Z=m[O+2]-M[2];return Math.sqrt(F*F+j*j+Z*Z)>Ab},E=Math.max(6,Math.trunc(Tm*i)),T=Math.max(6,Math.trunc(Tm*o)),k=Math.max(2,Math.trunc(km*i)),S=Math.max(2,Math.trunc(km*o)),R=G=>{let V=0,O=0;for(const F of G)O=F?O+1:0,O>V&&(V=O);return V/Math.max(1,G.length)},N=G=>{let V,O,F,j,Z;if(G==="L"?(V=a,O=a+o,F=Math.max(0,a-k-E),j=Math.max(0,a-k),Z=!1):G==="R"?(V=a,O=a+o,F=a+i+k,j=Math.min(s,a+i+k+E),Z=!1):(V=Math.max(0,a-S-T),O=Math.max(0,a-S),F=a,j=a+i,Z=!0),O<=V||j<=F)return 0;const ue=[];if(Z)for(let L=F;L<j;L++){let B=0;for(let A=V;A<O;A++)v(L,A)&&B++;ue.push(B/(O-V)>Cm)}else for(let L=V;L<O;L++){let B=0;for(let A=F;A<j;A++)v(A,L)&&B++;ue.push(B/(j-F)>Cm)}return R(ue)},X={L:N("L"),R:N("R"),T:N("T")};return d.delete(),f.delete(),X}const Ob=6e3,Nb=8,Am=.5,zb=.6;function Bb(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<xa?$a:1,o=tt(e,t),a=new e.Mat;i!==1?e.resize(o,a,new e.Size(0,0),i,i,e.INTER_CUBIC):o.copyTo(a);const s=new e.Mat;e.cvtColor(a,s,e.COLOR_RGB2GRAY),o.delete(),a.delete();const u=new e.ORB(Ob),l=new e.Mat,c=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,c,d);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),_=new e.Mat;e.cvtColor(w,_,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(_,l,x,M);const v=[w,x,M],E=()=>{for(const te of v)te.delete();_.delete()};if(M.rows<8){E();continue}const T=new e.DMatchVectorVector;f.knnMatch(M,d,T,2);const k=[],S=[];for(let te=0;te<T.size();te++){const Q=T.get(te);if(Q.size()===2){const de=Q.get(0);if(de.distance<ba*Q.get(1).distance){const be=x.get(de.queryIdx).pt,W=c.get(de.trainIdx).pt;k.push(be.x,be.y),S.push(W.x,W.y)}}}if(T.delete(),k.length/2<8){E();continue}const R=e.matFromArray(k.length/2,1,e.CV_32FC2,k),N=e.matFromArray(S.length/2,1,e.CV_32FC2,S),X=new e.Mat,G=e.findHomography(R,N,e.RANSAC,5,X);let V=0;for(let te=0;te<X.rows;te++)V+=X.data[te];const O=G.rows===3?[...G.data64F]:null;if(R.delete(),N.delete(),X.delete(),G.delete(),O===null||V<Nb){E();continue}const F=1/i,j=[[F*O[0],F*O[1],F*O[2]],[F*O[3],F*O[4],F*O[5]],[O[6],O[7],O[8]]],Z=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([te,Q])=>Sa(j,te,Q));if(!Ma(Z,t.width,t.height)){E();continue}const ue=tt(e,t),L=e.matFromArray(3,3,e.CV_64F,j.flat()),B=new e.Mat;e.warpPerspective(ue,B,L,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const A=new e.Mat;e.cvtColor(B,A,e.COLOR_RGB2GRAY);const z=new e.Mat;e.matchTemplate(A,_,z,e.TM_CCOEFF_NORMED);const D=z.data32F[0];if(ue.delete(),L.delete(),B.delete(),A.delete(),z.delete(),D<Am){E();continue}const P=Ea(e,t,y,j),K=Ia(P);p.push({id:m,confidence:Math.max(0,D),footprint:Z,built:P!==null&&Math.max(P.L,P.R,P.T)>=jr,tuckRegion:Kr(Z,K)}),E()}}finally{s.delete(),l.delete(),c.delete(),d.delete();try{u.delete(),f.delete()}catch{}}return p}function Ia(e){return e!==null&&e.R>=jr?["R"]:[]}function Kr(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),a=va*o;if(!(a>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,_]=l[y],x=n[w],M=n[_];let v=-(M[1]-x[1]),E=M[0]-x[0];const T=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(T-s)+E*(k-u)<0&&(v=-v,E=-E);const S=Math.hypot(v,E);S<=1e-6||(v=v/S*a,E=E/S*a,c.push([x[0]+v,x[1]+E],[M[0]+v,M[1]+E]))}const d=c.map(y=>y[0]),p=c.map(y=>y[1]),f=Math.round(Math.min(...d)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...d))-f,height:Math.round(Math.max(...p))-m}}function Pb(e,t,n,r){const i=Rb(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,c])=>Sa(i.H,l,c));if(!Ma(a,t.width,t.height))return null;const s=Ea(e,t,n,i.H);if(s===null)return null;const u=Ia(s);return{built:Math.max(s.L,s.R,s.T)>=jr,footprint:a,overflow:u,edgeScores:s,inliers:i.inliers}}const Db=.88;function Ta(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,a=Math.max(8,Math.trunc(va*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=a+Math.trunc(i*Db),c=s-l;if(c<1)return null;const d=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-a*y[k*3]-a*y[k*3+1]]),_=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,_,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,c,u)),v=new e.Mat;M.copyTo(v);const E=v.data,T=new Uint8ClampedArray(c*u*3);T.set(E.subarray(0,T.length));for(const k of[d,p,f,m,_,x,M,v])try{k.delete()}catch{}return{width:c,height:u,channels:3,data:T}}function Ub(e,t,n,r){const[i,o,a,s]=r;if(a<8||s<8)return null;const u=Math.trunc(.06*a),l=Math.trunc(.06*s),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+a+u)),p=Math.max(0,Math.trunc(o-l)),f=Math.min(n.height,Math.trunc(o+s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<xa?$a:1,y=tt(e,n),w=tt(e,t),_=y.roi(new e.Rect(c,p,d-c,f-p)),x=new e.Mat;m!==1?e.resize(_,x,new e.Size(0,0),m,m,e.INTER_CUBIC):_.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const E=new e.ORB(Em),T=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,R=new e.Mat,N=new e.Mat,X=[y,w,_,x,M,v,T,k,S,R,N],G=te=>{for(const Q of X)try{Q.delete()}catch{}try{E.delete()}catch{}return te};if(E.detectAndCompute(M,N,T,S),E.detectAndCompute(v,N,k,R),S.rows<8||R.rows<8)return G(null);const V=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;V.knnMatch(S,R,O,2);const F=[],j=[];for(let te=0;te<O.size();te++){const Q=O.get(te);if(Q.size()===2){const de=Q.get(0),be=Q.get(1);if(de.distance<ba*be.distance){const W=T.get(de.queryIdx).pt,J=k.get(de.trainIdx).pt;F.push(W.x,W.y),j.push(J.x,J.y)}}}if(O.delete(),V.delete(),F.length/2<8)return G(null);const Z=e.matFromArray(F.length/2,1,e.CV_32FC2,F),ue=e.matFromArray(j.length/2,1,e.CV_32FC2,j),L=new e.Mat,B=e.findHomography(Z,ue,e.RANSAC,5,L);let A=0;for(let te=0;te<L.rows;te++)A+=L.data[te];const z=B.rows===3?[...B.data64F]:null;if(Z.delete(),ue.delete(),L.delete(),B.delete(),z===null||A<Im)return G(null);const D=1/m,P=[[D,0,c],[0,D,p],[0,0,1]],K=[0,1,2].map(te=>[0,1,2].map(Q=>P[te][0]*z[Q]+P[te][1]*z[3+Q]+P[te][2]*z[6+Q]));return G({H:K,inliers:A})}const Lb=620;function Fb(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Rm(e,t,n,r){const i=Om(e,t,n,r);if(i!==null)return i;try{const[o,a,s,u]=r.map(E=>Math.trunc(E));if(Math.min(s,u)>=Lb||s<=0||u<=0)return null;const l=Math.trunc(s*.25),c=Math.trunc(u*.25),d=Math.max(0,o-l),p=Math.max(0,a-c),f=Math.min(t.width,o+s+l),m=Math.min(t.height,a+u+c);if(f<=d||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(d,p,f-d,m-p)),_=new e.Mat;e.resize(w,_,new e.Size((f-d)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=Fb(e,_);for(const E of[y,w,_])try{E.delete()}catch{}const M=[(o-d)*2,(a-p)*2,s*2,u*2],v=Om(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([E,T])=>[E*.5+d,T*.5+p])}}catch{return null}}function Om(e,t,n,r){const i=Ub(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([_,x])=>Sa(i.H,_,x));if(!Ma(a,t.width,t.height))return null;const s=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=tt(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(d,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const _ of[s,u,l,c,d,p,f])try{_.delete()}catch{}if(m<Am)return null;const y=Ea(e,t,n,i.H);if(y===null)return null;const w=Ia(y);return{built:Math.max(y.L,y.R,y.T)>=jr,footprint:a,overflow:w,edgeScores:y,inliers:i.inliers}}function Gb(e,t,n,r=.03){let i=null,o=1/0;for(const a of e){const[s,u,l,c]=a;if(l<=0||c<=0)continue;const d=r*l,p=r*c;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+c+p){const f=l*c;f<o&&(o=f,i=[s,u,l,c])}}return i}const Wb=.3,qb=.3;function Vb(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:a,R:s,T:u}=o.edgeScores;return Math.min(a,s,u)>=Wb}),i=[];return e.forEach((o,a)=>{if(!o.built||o.edgeScores===null)return;const{L:s,R:u,T:l}=o.edgeScores,c=Math.max(s,u,l)<qb;if(!r&&!c)return;t.some(([p,f])=>p>=o.zone.x0&&p<=o.zone.x1&&f>=o.zone.y0&&f<=o.zone.y1)||i.push(a)}),i}const gt=128,Gn=.5;function Yr(e){const t=Ln(e,gt,gt),n=gt*gt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function ka(e){const t=e[1]??0;return{built:t>=Gn,prob:t}}const hr=120,pr=179,Hb=1.3,jb=3.6,Kb=.45,Yb=6e-4,Xb=.02,Qb=6e3,Zb=.78,Jb=1.25,e1=2.4,t1=.05,n1=1.5,r1=.5,i1=.9,o1=150,a1=18,s1=34,u1=90,l1=130,c1=.13,d1=.15,Xr="magistrates-guild",Ca="merchants-guild";function h1(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[hr,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[pr,255,205,255]),a=new e.Mat;e.inRange(r,i,o,a),r.delete(),i.delete(),o.delete();const s=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(a,l,e.MORPH_CLOSE,u),a.delete(),u.delete();const c=new e.Mat,d=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,c,d,p,8);l.delete(),c.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const _=d.intAt(w,0),x=d.intAt(w,1),M=d.intAt(w,2),v=d.intAt(w,3),E=d.intAt(w,4),T=E/m;T<Yb||T>Xb||E/Math.max(M*v,1)<Kb||y.push({x:_,y:x,w:M,h:v})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function p1(e,t,n,r,i,o,a){const s=e,u=o,l=a,c=i;if(!c.gray){const D=tt(e,r);c.gray=new s.Mat,s.cvtColor(D,c.gray,s.COLOR_RGB2GRAY),D.delete(),c.k=new s.KeyPointVector,c.d=new s.Mat;const P=new s.Mat;u.detectAndCompute(c.gray,P,c.k,c.d),P.delete()}const d=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(d,p,f,m),p.delete();const y=D=>(f.delete(),m.delete(),D);if(c.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(c.d,m,w,2);const _=[],x=[];for(let D=0;D<w.size();D++){const P=w.get(D);if(P.size()===2){const K=P.get(0);if(K.distance<Zb*P.get(1).distance){const te=c.k.get(K.queryIdx).pt,Q=f.get(K.trainIdx).pt;_.push(te.x,te.y),x.push(Q.x,Q.y)}}}if(w.delete(),_.length/2<8)return y(null);const M=s.matFromArray(_.length/2,1,s.CV_32FC2,_),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),E=new s.Mat,T=s.findHomography(M,v,s.RANSAC,5,E);if(M.delete(),v.delete(),E.delete(),T.rows!==3)return T.delete(),y(null);const k=[...T.data64F],S=(D,P)=>{const K=k[6]*D+k[7]*P+k[8];return[(k[0]*D+k[1]*P+k[2])/K,(k[3]*D+k[4]*P+k[5])/K]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,P])=>S(D,P));if(R.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return T.delete(),y(null);const N=R.map((D,P)=>{const K=R[(P+1)%4];return Math.hypot(K[0]-D[0],K[1]-D[1])}),X=Math.min(...N);if(X<1)return T.delete(),y(null);const G=Math.max(...N)/X;let V=0;for(let D=0;D<4;D++){const[P,K]=R[D],[te,Q]=R[(D+1)%4];V+=P*Q-te*K}const O=t,F=Math.abs(V/2)/(O.rows*O.cols);if(G<Jb||G>e1||F<t1||F>n1)return T.delete(),y(null);const j=new s.Mat;s.warpPerspective(O,j,T,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),T.delete();const Z=new s.Mat;s.cvtColor(j,Z,s.COLOR_RGB2GRAY),j.delete();const ue=Math.trunc(r.height/2),L=Z.roi(new s.Rect(0,0,r.width,ue)),B=c.gray.roi(new s.Rect(0,0,r.width,ue)),A=new s.Mat;s.matchTemplate(L,B,A,s.TM_CCOEFF_NORMED);const z=A.data32F[0];return L.delete(),B.delete(),A.delete(),Z.delete(),y(z)}function f1(e,t,n){let r,i;if(n===Xr)r=Ca,i=c1;else if(n===Ca)r=Xr,i=d1;else return null;const{x:o,y:a,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let c=0,d=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let _=a;_<a+u;_++)for(let x=o+p;x<o+f;x++){const M=(_*e.width+x)*e.channels,{h:v,s:E,v:T}=Tt(e.data[M],e.data[M+1],e.data[M+2]);if(v>=hr&&v<=pr&&E>=30&&E<=170&&T<=170)continue;m++,(r===Ca?v>=a1&&v<=s1&&E>=u1&&T>=l1:v>=95&&v<=130&&E>=80)&&y++}if(m<20)continue;const w=y/m;w>c&&(c=w,d={x:o+p,y:a,w:f-p,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const m1=1.7,g1=140,y1=170,w1=.2,_1=.1,Nm=240,zm=80,Bm=60,b1=50,Pm="scientists-guild",Dm="tacticians-guild",Qr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function x1(e,t,n){const{x:r,y:i,w:o,h:a}=n,s=new Float32Array(a);for(let v=0;v<a;v++){let E=0;for(let T=0;T<o;T++)e[(i+v)*t+r+T]>0&&E++;s[v]=E/o}const u=[];for(let v=0;v<a;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const p=o/d;if(p<Hb||p>jb)return[];if(p>=m1)return[{x:r,y:i+l,w:o,h:d}];const f=new Float32Array(a),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const E=Math.exp(-(v*v)/(2*m*m));y.push(E),w+=E}for(let v=0;v<a;v++){let E=0;for(let T=-4;T<=4;T++){const k=Math.min(a-1,Math.max(0,v+T));E+=s[k]*y[T+4]}f[v]=E/w}const _=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if(x>_){let v=1/0;for(let E=_;E<x;E++)f[E]<v&&(v=f[E],M=E)}return[{x:r,y:i+l,w:o,h:M-l},{x:r,y:i+M,w:o,h:c-M}]}function $1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),s=Math.max(0,o-r),u=new Uint8Array(a*s*3);for(let l=0;l<s;l++)for(let c=0;c<a;c++){const d=((r+l)*e.width+n+c)*e.channels,p=(l*a+c)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:a,height:s,channels:3,data:u}}function v1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:a,s,v:u}=Tt(e.data[o],e.data[o+1],e.data[o+2]);s>=40&&u>=40&&u<=205&&(t++,a>=g1&&a<=y1&&n++)}return t===0?0:n/t}function M1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s:a,v:s}=Tt(e.data[i],e.data[i+1],e.data[i+2]);!(o>=hr&&o<=pr)&&a>=70&&s>=50&&t++}return n===0?0:t/n}function Um(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Nm,zm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Nm,height:zm,channels:3,data:i}}function S1(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const a=o*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const a=o*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[o*3+s]=Math.max(0,Math.min(255,Math.round(e.data[a+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Lm(e,t){const n=S1(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:_,v:x}=Tt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=hr&&w<=pr&&_>=30&&_<=170&&x<=170)&&x>=40&&(i[m]=1,o++)}const a=o<20,s=tt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let c=0,d=0,p=0,f=0;for(let m=0;m<r;m++)!a&&i[m]===0||(c+=l[m*3]*100/255,d+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[c/f,d/f,p/f]}function E1(e){let t=0,n=0,r=0,i=0,o=0;const a=e.width*e.height;for(let u=0;u<a;u++){const l=u*e.channels,{h:c,s:d,v:p}=Tt(e.data[l],e.data[l+1],e.data[l+2]);c>=hr&&c<=pr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&p>=80&&o++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:o/s}}function I1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s:a,v:s}=Tt(e.data[i],e.data[i+1],e.data[i+2]);a>=Bm&&s>=b1?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&s<150&&n.brown++):a<Bm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function T1(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,o=0,a=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,o+=u*u,a+=l*l}return i/(Math.sqrt(o*a)+1e-6)}function Fm(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function k1(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const a=Um(e,o);n.set(i,Fm(e,a)),Qr.includes(i)&&r.set(i,Lm(e,a))}return{gray:n,warmLab:r}}function C1(e,t,n){const r=Um(e,t),i=E1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Xr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Pm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Dm;const o=I1(r),a={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let s="blue";for(const l of Object.keys(a))a[l]>a[s]&&(s=l);if(a[s]<=0)return"";let u;if(s==="blue")u=Xr;else if(s==="green")u=Pm;else if(s==="red")u=Dm;else{const l=Fm(e,r);let c="",d=-2;for(const p of Qr){const f=n.gray.get(p);if(f===void 0)continue;const m=T1(l,f);m>d&&(d=m,c=p)}u=c||Qr[0]}if(Qr.includes(u)&&n.warmLab.size>0){const l=Lm(e,r);let c=u,d=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<d&&(d=m,c=p)}return c}return u}function A1(e,t,n,r,i){var y;const o=[],{blobs:a,mask:s,maskWidth:u}=h1(e,t);if(a.length===0||n.size===0)return o;const l=e,c=new l.ORB(Qb),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of a){if(r!==void 0&&Date.now()>r)break;const _=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(o1,Math.trunc(i1*Math.max(w.w,w.h))),v=Math.max(0,_-M),E=Math.max(0,x-M),T=Math.min(t.width,_+M),k=Math.min(t.height,x+M);if(T-v<16||k-E<16)continue;const S=f.roi(new l.Rect(v,E,T-v,k-E)),R=new l.Mat;l.cvtColor(S,R,l.COLOR_RGB2GRAY);let N=null,X=-2;for(const[F,j]of n){if(r!==void 0&&Date.now()>r)break;const Z=p1(e,S,R,j,p.get(F),c,d);Z!==null&&Z>X&&(X=Z,N=F)}S.delete(),R.delete();const G=new Set;if(N!==null&&X>=r1){o.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(N);const F=f1(t,w,N);F&&(o.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),G.add(F.id))}if(i===void 0||i.size===0)continue;const V=x1(s,u,w);if(V.length!==2)continue;const O=V.map(F=>$1(t,F));if(!O.some(F=>F.width*F.height===0||M1(F)<_1))for(let F=0;F<V.length;F++){const j=O[F];if(v1(j)<w1)continue;m===null&&(m=k1(e,i));const Z=C1(e,j,m);if(Z&&!G.has(Z)){G.add(Z);const ue=V[F];o.push({id:Z,boundingBox:{x:ue.x,y:ue.y,width:ue.w,height:ue.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const _=w;for(const x of["gray","k","d"])try{(y=_[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return o}const Gm=128,R1=.56,O1=15,N1=.58,z1=70,B1=50,P1=.12,D1=.2,U1=.1,L1=.17,Wm=.15;function F1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function qm(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,a-u),c=Math.max(0,s-u),d=Math.min(n,a+u),p=Math.min(r,s+u),f=d-l,m=p-c,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const _=((w+c)*n+l)*i;y.set(o.subarray(_,_+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function G1(e){const t=qm(e,R1),n=O_(t),r=$m(n,Gm,Gm);return N_(r)}function W1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,a=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;o+=l*c,a+=l*l,s+=c*c}return o/(Math.sqrt(a*s)+1e-6)}function q1(e){const t=new Map([["masonry",0],["strategy",0]]),n=qm(e,N1),{width:r,height:i,channels:o,data:a}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*o,{h:m,s:y,v:w}=Tt(a[f],a[f+1],a[f+2]);y>=z1&&w>=B1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const c=u/s,d=l/s;return c>=P1&&t.set("masonry",Wm*Math.min(1,c/D1)),d>=U1&&t.set("strategy",Wm*Math.min(1,d/L1)),t}function V1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=G1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=O1)o.push(P_(n,l,i));const a=new Map;for(const[l,c]of t){let d=-1/0;for(const p of o){const f=W1(p,c);f>d&&(d=f)}a.set(l,d)}for(const[l,c]of q1(e))c>0&&a.has(l)&&a.set(l,a.get(l)+c);let s="",u=-1/0;for(const[l,c]of a)c>u&&(s=l,u=c);return[s,u]}const an=224,H1=512,j1=[.485,.456,.406],K1=[.229,.224,.225];function Y1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function X1(e){const t=ha(e,an,an),n=an*an,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-j1[o])/K1[o];return r}function Q1(e){const t=3*an*an,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(X1(jt(e,r)),r*t);return n}function Z1(e,t=H1){const n=e.length/t,r=new Float32Array(t);for(let o=0;o<n;o++)for(let a=0;a<t;a++)r[a]+=e[o*t+a];let i=0;for(let o=0;o<t;o++)r[o]/=n,i+=r[o]*r[o];i=Math.max(Math.sqrt(i),1e-9);for(let o=0;o<t;o++)r[o]/=i;return r}function J1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let o=0;const a=i*e.dim;for(let s=0;s<e.dim;s++)o+=e.x[a+s]*t[s];o>r&&(r=o,n=i)}return{id:e.ids[n],cosine:r}}const Wn=96,e2=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],t2=.45;function n2(e){const t=ha(e,Wn,Wn),n=Wn*Wn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function r2(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=t2?e2[t]??"":"",prob:n}}const Yt=128,i2=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],o2=.5;let Vm=null;function a2(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Vm=e}function Hm(){return Vm??o2}let jm=null;function s2(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");jm=[...e]}function u2(){return jm??i2}const Km="__inverse";function l2(e){return e.endsWith(Km)?[e.slice(0,-Km.length),!0]:[e,!1]}function c2(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n*3);for(let a=0;a<t*n;a++)for(let s=0;s<3;s++)o[a*3+s]=i[a*r+s];return o}function d2(e){const t=Math.min(Yt/e.width,Yt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?c2(e):t<1?Ln(e,n,r):lr(e,n,r),o=Yt*Yt,a=new Float32Array(3*o);a.fill(114/255);const s=Math.floor((Yt-r)/2),u=Math.floor((Yt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const d=(l*n+c)*3,p=(l+s)*Yt+(c+u);for(let f=0;f<3;f++)a[f*o+p]=i[d+f]/255}return a}async function h2(e,t){const{index:n,prob:r}=p2(await t(d2(e))),[i,o]=l2(u2()[n]??"");return r<Hm()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:o}}function p2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Bt=96,f2=[1,2,3,4,5,6,7],m2=.8,g2=.99;function y2(e){const t=lr(e,e.width*2,e.height*2),n=e.width*2<Bt&&e.height*2<Bt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?lr(r,Bt,Bt):Ln(r,Bt,Bt),o=Bt*Bt,a=new Float32Array(3*o);for(let s=0;s<o;s++)for(let u=0;u<3;u++)a[u*o+s]=i[s*3+u]/255;return a}function w2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:f2[t],prob:e[t]}}const sn=128,Ym=.35,_2=["fp","laurel"],b2=.85,qn=40;function x2(e){const r=(e.width<sn&&e.height<sn?lr:Ln)(e,sn,sn),i=sn*sn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function $2(e){return e[_2.indexOf("fp")]}const un=128,v2=.15,Xm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],M2=7,S2=.9;function E2(e,t,n){const[r,i,o,a]=e.map(Number);if(!(o>1)||!(a>1))return null;const s=r+o/2,u=i+a/2,l=Math.max(o,a)*(1+2*v2),c=Math.max(0,st(s-l/2)),d=Math.max(0,st(u-l/2)),p=Math.min(t,st(s+l/2)),f=Math.min(n,st(u+l/2));return p-c<8||f-d<8?null:{x:c,y:d,w:p-c,h:f-d}}function I2(e){const r=(e.width<un&&e.height<un?lr:Ln)(e,un,un),i=un*un,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function T2(e){let t=0;for(let i=1;i<Xm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=M2;return{className:Xm[t],probability:n,rejected:r&&n>=S2}}const Zr=3,k2=2.2,C2=.3,A2=.65,R2=3,O2=1.3,N2=.77;function Qm(e,t,n){const[r,i,o,a]=e,s=[];return r<=Zr&&s.push("gauche"),i<=Zr&&s.push("haut"),r+o>=t-Zr&&s.push("droit"),i+a>=n-Zr&&s.push("bas"),s}function Zm(e){const t=e[3]/Math.max(e[2],1);return t>=O2?"portrait":t<=N2?"paysage":null}function Aa(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function z2(e,t,n){for(const[r,i,o,a]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(a-i)/Math.max(n,1))>A2)return!0;return!1}function B2(e,t,n,r,i){try{const o=[...e],a=o.filter(w=>Qm(w.box,r,i).length>0);if(a.length===0)return{kept:o,dropped:[],suspects:[]};const s=o.filter(w=>!a.includes(w)),u=w=>({kept:s,dropped:a.map(_=>({banner:_,edgeReason:w})),suspects:[]});if(z2(n,r,i))return u("photo-piste");if(s.length<R2)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:a.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(a.length>(s.length+a.length)/3)return u("debordement-structurel");const l=Aa(s.map(w=>w.box[2]*w.box[3])),c=Aa(s.map(w=>w.box[2])),d=Aa(s.map(w=>w.box[3])),p=new Set(s.map(w=>Zm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of a){const _=Qm(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,E=[];(_.includes("gauche")||_.includes("droit"))&&E.push(c>0?x/c:1),(_.includes("haut")||_.includes("bas"))&&E.push(d>0?M/d:1);const T=E.length>0?Math.min(...E):1,k=Zm(w.box);v>k2?m.push({banner:w,edgeReason:"bord-grosse"}):T<C2?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const P2=1,D2=1.5;function U2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function L2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(i,o);if(a<=0)return null;const s=((e-n[0])*i+(t-n[1])*o)/(a*a);return[Math.abs((e-n[0])*o-(t-n[1])*i)/a,Math.abs(s-.5)*a]}function F2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function G2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,a,s]=t,u=i+a/2,l=o+s/2;let c=null;for(const[p,f]of U2(e)){const m=L2(u,l,p,f);m!==null&&(c===null||m[0]<c[0])&&(c=m)}if(c===null)return null;const d=F2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==a>s}}catch{return null}}function W2(e,t,n,r=P2,i=D2){const o=[];for(const[a,s]of t??[]){const u=G2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,a]))}return o.length===0?null:(o.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),o[0][1])}const yt=64,Jm=.5,q2=[.67,1.24];function eg(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),a=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=a-i,l=s-o;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const _=o+w,x=_-n;for(let M=0;M<u;M++){const v=i+M,E=v-t,T=(w*u+M)*3;if(E*E+x*x<=p){const k=(_*e.width+v)*c;d[T]=e.data[k],d[T+1]=e.data[k+1],d[T+2]=e.data[k+2]}else d[T]=255,d[T+1]=255,d[T+2]=255}}const f=Ln({width:u,height:l,channels:3,data:d},yt,yt),m=yt*yt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let _=0;_<3;_++)y[_*m+w]=f[w*3+_]/255;return y}function V2(e){return e[1]}const Jr=[1,3,6],H2=.5;function j2(e){if(e.length!==Jr.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:Jr[t],prob:e[t]}}function K2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&Jr.includes(i.denomination)&&i.prob>=H2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const Y2=2.25,ei=3,X2=1.15,Q2=.5,Z2=2.5,J2=.75,ex=2.25,tx=1.3,nx=.77;function ti(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function rx(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),t.length<=2)return t;const n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function tg(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[(o+1)%i];if(s>t!=l>t){const c=(u-a)*(t-s)/(l-s)+a;e<c&&(r=!r)}}return r}function ix(e,t,n){if(n.length>=3&&tg(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[i>1?(o+1)%i:o],c=u-a,d=l-s,p=c*c+d*d,f=p===0?0:Math.max(0,Math.min(1,((e-a)*c+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(a+f*c),t-(s+f*d)))}return r}function ox(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function ax(e,t,n){const[r,i]=e,o=t[0]-r,a=t[1]-i;if(o===0&&a===0)return!1;const[s,u,l,c]=n;let d=0,p=1;const f=[[-o,r-s],[o,l-r],[-a,i-u],[a,c-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?d=Math.max(d,w):p=Math.min(p,w),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const Ra=e=>e.box[3]/Math.max(1,e.box[2]),Xt=e=>Ra(e)>X2,Vn=e=>Ra(e)>=tx||Ra(e)<=nx;function Oa(e){const[t,n,r,i]=e.box;if(r>=i){const a=7*i;return[t,n-a,r,i+2*a]}const o=7*r;return[t-o,n,r+2*o,i]}function ng(e,t,n,r,i){const o=new Set(t),a=[...e.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:o.has(A)?"card":"tucked",src:["banner",A]})),...n.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:"wonder",src:["wonder",A]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(a.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=a.map(B=>[B.box[0]+B.box[2]/2,B.box[1]+B.box[3]/2]);let c=a.filter(B=>B.kind!=="wonder").map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A);c.length===0&&(c=a.map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A));const d=c[Math.floor(c.length/2)],p=(Y2*d)**2,f=a.map((B,A)=>A),m=B=>{let A=B;for(;f[A]!==A;)f[A]=f[f[A]],A=f[A];return A},y=a.map((B,A)=>B.kind==="card"?A:-1).filter(B=>B>=0),w=a.map((B,A)=>B.kind!=="card"?A:-1).filter(B=>B>=0);for(let B=0;B<y.length;B+=1)for(let A=B+1;A<y.length;A+=1){const z=y[B],D=y[A],P=a[z],K=a[D];if(Vn(P)&&Vn(K)&&Xt(P)!==Xt(K))continue;const te=l[z][0]-l[D][0],Q=l[z][1]-l[D][1],de=te*te+Q*Q;let be=de<=p;!be&&Vn(P)&&Vn(K)&&Xt(P)===Xt(K)&&de<=(4*d)**2&&(be=ti(Oa(P),Oa(K))<=.5*d),be&&(f[m(z)]=m(D))}for(let B=0;B<w.length;B+=1)for(let A=B+1;A<w.length;A+=1){const z=w[B],D=w[A];ti(a[z].box,a[D].box)<=J2*d&&(f[m(z)]=m(D))}const _=new Map;for(const B of w){const A=m(B);_.set(A,[..._.get(A)??[],B])}const x=new Map;for(const B of y){const A=m(B);x.set(A,[...x.get(A)??[],B])}for(const B of _.values()){const A=B.filter(K=>a[K].kind==="wonder"&&Vn(a[K])).map(K=>Xt(a[K])),z=A.length>0?A.filter(Boolean).length*2>A.length:null,D=[];for(const[K,te]of x){let Q=Number.POSITIVE_INFINITY;for(const W of B)for(const J of te)Q=Math.min(Q,ti(a[W].box,a[J].box));if(Q>ex*d)continue;const be=te.filter(W=>Xt(a[W])).length/te.length>=.5;z!==null&&be!==z||D.push([K,Q,be])}if(D.length===0)continue;const P=new Set(D.map(K=>K[2]));if(D.length>=2&&P.size===1&&z!==null){const K=D[0][0];for(const[te]of D.slice(1))f[m(te)]=m(K);f[m(B[0])]=m(K)}else{const K=D.reduce((te,Q)=>Q[1]<te[1]?Q:te);f[m(B[0])]=m(K[0])}}let M=new Map;for(let B=0;B<a.length;B+=1){const A=m(B);M.set(A,[...M.get(A)??[],B])}const v=a.map((B,A)=>B.kind==="wonder"?A:-1).filter(B=>B>=0);if(v.length>0){const B=(z,D)=>{const[P,K,te,Q]=Oa(a[z]),[de,be,W,J]=a[D].box,re=Math.max(0,Math.min(P+te,de+W)-Math.max(P,de)),oe=Math.max(0,Math.min(K+Q,be+J)-Math.max(K,be));return re*oe>=.9*a[z].box[2]*a[z].box[3]},A=new Map;for(let z=0;z<a.length;z+=1)if(!(a[z].kind!=="card"||!Vn(a[z])))for(const D of v){const P=ti(a[z].box,a[D].box);if(P<=.8*d&&Xt(a[z])!==Xt(a[D])&&B(z,D)){const K=A.get(D);(!K||P<K[1])&&A.set(D,[z,P])}}for(const[z,[D]]of A){const P=m(z);for(const[K,te]of M){const Q=te.indexOf(D);if(Q>=0&&K!==P){te.splice(Q,1),M.set(P,[...M.get(P)??[],D]),a[D].kind="tucked";break}}}M=new Map([...M].filter(([,z])=>z.length>0))}const E=B=>B.filter(A=>a[A].kind==="card").length,T=B=>{const A=B.filter(z=>a[z].kind==="card"||a[z].kind==="wonder");return A.length===0?null:A.filter(z=>Xt(a[z])).length/A.length},k=B=>[B.reduce((A,z)=>A+l[z][0],0)/B.length,B.reduce((A,z)=>A+l[z][1],0)/B.length],S=[i[0]/2,i[1]/2],R=[...M.values()].sort((B,A)=>{const z=E(B),D=E(A);if(z!==D)return D-z;const P=Math.hypot(k(B)[0]-S[0],k(B)[1]-S[1]),K=Math.hypot(k(A)[0]-S[0],k(A)[1]-S[1]);return P-K}),N=k(R[0]),X=T(R[0]),G=R.map((B,A)=>{if(A===0||E(B)<ei)return"player";const z=T(B),D=z!==null&&X!==null&&Math.abs(z-X)>=Q2,P=k(B),K=r.some(te=>ax(N,P,te));return D||K?"opponent":"player"});if(!G.includes("opponent")){const B=z=>z.reduce((D,P)=>D+(a[P].kind==="wonder"?1:0),0);let A=G.map((z,D)=>D).filter(z=>z>0&&(E(R[z])>=ei||B(R[z])>=2));if(A.reduce((z,D)=>z+B(R[D]),0)<1&&(A=[]),A.length>0&&(E(R[0])<2*ei||A.reduce((z,D)=>z+E(R[D]),0)<2*ei)&&(A=[]),A.length>0){const z=new Map(A.map(K=>[K,k(R[K])])),D=(K,te)=>(K[0]-te[0])**2+(K[1]-te[1])**2;if(A.every((K,te)=>A.slice(te+1).every(Q=>D(z.get(K),z.get(Q))<Math.min(D(z.get(K),N),D(z.get(Q),N)))))for(const K of A)G[K]="opponent"}}const V=[],O=[];let F=!1;R.forEach((B,A)=>{const z=G[A];z==="opponent"&&(F=!0);const D=[],P=[];for(const K of B){const[te,Q,de,be]=a[K].box;D.push([te,Q],[te+de,Q],[te,Q+be],[te+de,Q+be]),P.push(a[K].box);const[W,J]=a[K].src;W==="banner"?s[J]=z:u[J]=z}V.push([z,rx(D)]),O.push([z,P])});const j=(B,A,z)=>Math.min(...O[z][1].map(D=>ox(B,A,D))),Z=(B,A)=>V.map(([,z],D)=>z.length>=3&&tg(B,A,z)?D:-1).filter(z=>z>=0),ue=(B,A)=>{if(V.length===0)return"player";const z=d>0?Z2*d:Number.POSITIVE_INFINITY,D=Z(B,A);if(D.length>0){const te=D.reduce((Q,de)=>j(B,A,de)<j(B,A,Q)?de:Q);return V[te][0]}let P=-1,K=Number.POSITIVE_INFINITY;return V.forEach(([,te],Q)=>{const de=ix(B,A,te);de<K&&(P=Q,K=de)}),P>=0&&K<=z?V[P][0]:"none"},L=(B,A)=>{if(V.length===0)return"none";const z=Z(B,A);if(z.length===0)return"none";const D=z.reduce((P,K)=>j(B,A,K)<j(B,A,P)?K:P);return V[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:F,hulls:V,hullBoxCounts:O.map(([,B])=>B.length),pointOwner:ue,pointInside:L}}const sx=3;function ux(e,t=sx){const n=e.length,r=Array.from({length:n},(a,s)=>s),i=a=>{for(;r[a]!==a;)r[a]=r[r[a]],a=r[a];return a};for(let a=0;a<n;a+=1)for(let s=a+1;s<n;s+=1){const u=e[a],l=e[s],c=Number(u.center[0]),d=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![c,d,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(c-p,d-f)<=t*(m+y)&&(r[i(a)]=i(s))}const o=new Map;for(let a=0;a<n;a+=1){const s=i(a);o.has(s)||o.set(s,[]),o.get(s).push(a)}return[...o.values()]}function lx(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),a=Number(n[3]),s=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,a)-t,0,t-Math.max(i,a));return Math.hypot(s,u)}function Na(e,t,n,r){const i=new Set(e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n));if(i.size===0)return[];const o=[];for(const a of ux(e)){const s=a.map(y=>e[y]),u=s.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,d=0;for(const y of s){const w=Number(y.center[0]),_=Number(y.center[1]);c+=w,d+=_,t.pointInside(w,_)===n&&(l+=1)}const p=c/s.length,f=d/s.length,m=r&&r.length>0?Math.min(...r.map(y=>lx(p,f,y))):0;o.push({cle:[...a].sort((y,w)=>y-w).join(","),membres:s,miens:u,inside:l,dPiste:m,centre:[p,f],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return o}function cx(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let o=0;o<4;o+=1){if(i[o]>r[o])return n;if(i[o]<r[o])return t}return t})}function dx(e,t,n,r){const[i,o]=e.centre,a={};for(const c of["player","opponent"]){const d=Na(t,n,c,r).filter(p=>p.cle!==e.cle);a[c]=d.length===0?1/0:Math.min(...d.map(p=>Math.hypot(i-p.centre[0],o-p.centre[1])))}if(a.player!==a.opponent)return a.player>a.opponent?"player":"opponent";const s=c=>{const d=Na(t,n,c,r).find(p=>p.cle===e.cle);return d?[d.inside,d.dPiste,d.valeur]:[-1,-1,-1]},u=s("player"),l=s("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function hx(e,t,n){const r={player:[],opponent:[]},i={};for(const a of["player","opponent"]){const s=Na(e,t,a,n);s.length>0&&(i[a]=cx(s))}const o=Object.keys(i);if(o.length===0)return r;if(o.length===2&&i.player.cle===i.opponent.cle){const a=dx(i.player,e,t,n);return r[a]=i[a].membres,r}for(const a of o)r[a]=i[a].membres;return r}function px(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{return hx(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const fx=1280,mx=80,gx=3,yx=3,wx=.3,_x=2.4,bx=1,xx=5.2,$x=5;function za(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function vx(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=wx&&r/n<=_x&&i/n>=bx&&i/n<=xx&&i/r<=$x}function Mx(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*fx/r<mx}function Sx(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),o=r.poly.map(s=>s[1]),a=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/a,cy:o.reduce((s,u)=>s+u,0)/a,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),a=Number(r[2]),s=Number(r[3]);if(![i,o,a,s].every(Number.isFinite))continue;const u=i+a/2,l=o+s/2;let c=n[0],d=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<d&&(d=f,c=p)}c.extra.push([i,o],[i+a,o+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Ex(e,t,n,r,i=[]){const o=za(n);if(!Mx(e,t,o))return[];const a=r.filter(l=>l.n>=yx&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),s=Math.round(o*gx),u=[];for(const l of Sx(a,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...c))-s),f=Math.max(0,Math.trunc(Math.min(...d))-s),m=Math.min(e,Math.trunc(Math.max(...c))+s),y=Math.min(t,Math.trunc(Math.max(...d))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function Ix(e,t,n){if(!e||e.length<4)return null;const[r,i,o,a]=[e[0],e[1],e[2],e[3]];return vx(o,a,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(a)]:null}const Tx=1.1,kx=3.2,Cx=20,Ax=.5,Rx=1280,Ox=.18,Nx=28,zx=.3;function Bx(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let a=0;a<30;a++){const s=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(s.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(s.reduce((c,d)=>c+d,0)/s.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((a,s)=>(a<=r?i:o).push(s)),[i,o]}function Px(e,t,n=Tx){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),a=e.map(l=>l[1]+l[3]/2),s=Math.max(...o)-Math.min(...o)>Math.max(...a)-Math.min(...a)?o:a,u=[];for(const l of Bx(s)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,N)=>R-N),p=d[Math.trunc(d.length/2)],f=kx*p,m=Math.max(0,Math.min(...c.map(R=>R[0]))-f),y=Math.max(0,Math.min(...c.map(R=>R[1]))-f),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+f),_=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+f),x=Math.max(w-m,_-y);if(x<=0)continue;const M=Ax*p*Rx/x,v=M>0?Math.max(1,Math.ceil(Cx/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(_)]);continue}const E=w-m>=_-y,k=(E?w-m:_-y)/v,S=k*(1+Ox);for(let R=0;R<v;R++){let N=(E?m:y)+R*k-(S-k)/2;N=Math.max(E?m:y,N);const X=Math.min(E?w:_,N+S);u.push(E?[Math.trunc(N),Math.trunc(y),Math.trunc(X),Math.trunc(_)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(X)])}}return u.filter(([l,c,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-c))>=n)}function Dx(e,t,n,r=Nx){const[i,o]=n,a=e;for(const[s,u,l,c]of t){const d=(s+l)/2+i,p=(u+c)/2+o;a.some(([m,y,w,_])=>{const x=d-(m+w)/2,M=p-(y+_)/2;return Math.hypot(x,M)<=r})||a.push([s+i,u+o,l+i,c+o])}return a}function Ux(e,t,n,r=zx){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function Lx(e,t,n){return n.some(([r,i,o,a])=>r<=e&&e<=o&&i<=t&&t<=a)}function Fx(e,t,n,r){return n.length===0?!1:Lx(e,t,n)&&!Ux(e,t,r)}const rg=4,ig=8,ni=5,Tn="base-game rule";function Pt(e,t){return{code:e,message:t,severity:"warning"}}function Ba(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function Gx(e,t=""){const n=e.filter(a=>!!a),r=t||"a player",i=[];n.length>rg&&i.push(Pt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${rg} (${Tn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=Ba(n);return o.length>0&&i.push(Pt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${Tn}), so one of the two readings is wrong.`)),i}function Wx(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(a=>!!a))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>ig&&t.push(Pt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${ig} are in play (${Tn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,a]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],c=[...a].filter(d=>l.has(d)).sort();c.length>0&&t.push(Pt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function qx(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(a=>!!a));r.length>ni&&n.push(Pt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ni} are in play (${Tn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Ba(r);if(i.length>0&&n.push(Pt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Tn}).`)),t!==null){const o=t.filter(Boolean),a=r.length+o.length;a!==ni&&n.push(Pt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${a}, but exactly ${ni} are in play (${Tn}) — one is missing or one was counted twice.`));const s=new Set(o),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Pt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function Vx(e,t=""){const n=t||"a player",r=[],i=e.filter(a=>!a).length;i>0&&r.push(Pt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=Ba(e.filter(a=>!!a));return o.length>0&&r.push(Pt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${Tn}).`)),r}const Hx=.25,jx=.45;function Kx(e,t,n,r,i){const o=Math.cos(i),a=Math.sin(i),s=[n/2*o,n/2*a],u=[-r/2*a,r/2*o],c=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function Pa(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function og(e,t){const n=Pa(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function Yx(e,t,n){const r=Pa(e,t),i=Pa(e,n),o=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,o,!0))}finally{r.delete(),i.delete(),o.delete()}}function Xx(e,t,n=jx){const r=[...t].sort((o,a)=>a.confidence-o.confidence),i=[];for(const o of r){let a=!1;for(const s of i){const u=Yx(e,o.quad,s.quad);if(u<=0)continue;const l=og(e,o.quad)+og(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){a=!0;break}}a||i.push(o)}return i}function Qx(e,t,n,r,i=Hx){const o=[];for(let a=0;a<n;a++){const s=t[4*n+a];if(s<i)continue;const l=Kx(t[a],t[n+a],t[2*n+a],t[3*n+a],t[5*n+a]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);o.push({quad:l,confidence:s})}return Xx(e,o)}const Zx=128,Jx=88;function e$(e,t,n,r=Zx,i=Jx){const o=new e.Mat(t.height,t.width,e.CV_8UC3),a=o.data,s=t.channels;for(let p=0,f=t.width*t.height;p<f;p++)a[p*3]=t.data[p*s],a[p*3+1]=t.data[p*s+1],a[p*3+2]=t.data[p*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(p=>[p[0],p[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(o,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{o.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function t$(e){return[e[2],e[3],e[0],e[1]]}const n$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],r$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],i$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],o$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],a$=[...r$,...i$,...o$,...n$];Object.fromEntries(a$.map(e=>[e.id,e]));const s$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const ag=.2,u$=.3,sg=.25,Da={total:0,idDiff:0,verdictDiff:0},Dt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},ri={total:0,memeK:0,memeKInverse:0,detail:[]};function l$(e,t,n){for(const r of e){let i=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const s=r[o],u=r[a];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(o=>[o[0],o[1]])}return null}function c$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=sg)return!1;const i=e.x+e.width,o=e.y+e.height;for(const a of n){const s=a.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=o))continue;const c=s[2]/s[3];if(!(Math.abs(Math.log(c))<=sg)&&r>1==c>1)return!0}return!1}async function d$(e,t,n,r,i=[0,1,2,3]){const[o,a,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*ag),c=Math.round(u*ag),d=Math.max(0,Math.round(o-l)),p=Math.max(0,Math.round(a-c)),f=Math.min(e.width,Math.round(o+s+l)),m=Math.min(e.height,Math.round(a+u+c)),y=f-d,w=m-p;if(y<=0||w<=0)return null;const _=e.channels,x=new Uint8ClampedArray(y*w*_);for(let E=0;E<w;E++){const T=((p+E)*e.width+d)*_;x.set(e.data.subarray(T,T+y*_),E*y*_)}const M={width:y,height:w,channels:_,data:x};let v=null;for(const E of i){const T=E===0?M:jt(M,E),k=T.width,S=k-Math.floor(u$*k),R=k-S;if(R<=0)continue;const N=new Uint8ClampedArray(R*T.height*T.channels);for(let F=0;F<T.height;F++){const j=(F*k+S)*T.channels;N.set(T.data.subarray(j,j+R*T.channels),F*R*T.channels)}const X={width:R,height:T.height,channels:T.channels,data:N},G=Yr(X),O=(await n.run({[n.inputNames[0]]:new Be("float32",G,[1,3,gt,gt])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=O),v=v===null?O:Math.max(v,O)}return v}async function h$(e,t,n,r,i,o,a,s=[]){var w;const u=async _=>(await i.run({[i.inputNames[0]]:new Be("float32",_,[1,3,Yt,Yt])}))[i.outputNames[0]].data,l=e.obbQuads===void 0?null:await et("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(_){return console.warn("[wonders-obb] détection échouée, repli ORB :",_),null}}),c=l===null?r:l.map(_=>{const x=_.map(([T])=>T),M=_.map(([,T])=>T),v=Math.min(...x),E=Math.min(...M);return[Math.round(v),Math.round(E),Math.round(Math.max(...x)-v),Math.round(Math.max(...M)-E)]}),d=s.length===0?c:c.filter(([_,x,M,v])=>{const E=_+M/2,T=x+v/2;return!s.some(k=>{const S=k.x+k.width/2,R=k.y+k.height/2,N=.5*Math.min(k.width,k.height);return(E-S)**2+(T-R)**2<N*N})}),p=new Map;for(const _ of d){const[x,M,v,E]=_;if(v<=0||E<=0)continue;const T=l===null?null:l$(l,x+v/2,M+E/2);if(T===null||e.redresserQuad===void 0)continue;let k=T;const S=at("identify: redressement du quad",()=>e.redresserQuad(n,k)),R=Hm(),{id:N,prob:X,inverse:G}=await et("classifieur merveille (1 lecture)",()=>h2(S,u));if(N===""||X<R)continue;G&&(k=t$(k).map(O=>[O[0],O[1]]));const V=p.get(N);(V===void 0||X>V.prob)&&p.set(N,{prob:X,box:_,quad:k})}const f=[],m=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[_,{prob:x,box:M,quad:v}]of p){const[E,T,k,S]=M;let R={x:Math.round(E),y:Math.round(T),width:Math.round(k),height:Math.round(S)},N=null,X=[],G=null;if(v!==null){N=v;const z=N.map(te=>te[0]),D=N.map(te=>te[1]),P=Math.max(0,Math.round(Math.min(...z))),K=Math.max(0,Math.round(Math.min(...D)));if(R={x:P,y:K,width:Math.min(n.width,Math.round(Math.max(...z)))-P,height:Math.min(n.height,Math.round(Math.max(...D)))-K},m!==null)try{const te=await e.wonderRef(_),Q=N,de=te===null||Q===null?null:at("identify: bande droite #63",()=>Ta(t,n,te,Q));if(de!==null){const be=at("identify: preprocess tuck",()=>Yr(de)),W=await m.run({[m.inputNames[0]]:new Be("float32",be,[1,3,gt,gt])});G=ka(W[m.outputNames[0]].data).prob,X=G>=Gn?["R"]:[]}}catch{}}else if(Date.now()<o)try{const z=await et("chargement refs merveilles",()=>e.wonderRef(_));if(z!==null){const D=at("ORB registration (merveille)",()=>Rm(t,n,z,M));if(D!==null){N=D.footprint,X=D.overflow;const P=N.map(de=>de[0]),K=N.map(de=>de[1]),te=Math.max(0,Math.round(Math.min(...P))),Q=Math.max(0,Math.round(Math.min(...K)));if(R={x:te,y:Q,width:Math.min(n.width,Math.round(Math.max(...P)))-te,height:Math.min(n.height,Math.round(Math.max(...K)))-Q},m!==null)try{const de=N,be=de===null?null:at("identify: bande droite #63",()=>Ta(t,n,z,de));if(be!==null){const W=at("identify: preprocess tuck",()=>Yr(be)),J=await m.run({[m.inputNames[0]]:new Be("float32",W,[1,3,gt,gt])});G=ka(J[m.outputNames[0]].data).prob}}catch{}}}}catch(z){console.warn(`[wonders-cls] ${_} registration failed:`,z)}const V=N!==null?Kr(N,X):null,O=v!==null&&N!==null?Kr(N,["R"]):null,F=[];if(G!==null&&F.push(G>=Gn?1:0),y!==null)try{let z=[0,1,2,3];if(v!==null){const K=v[1][1]-v[0][1],te=v[1][0]-v[0][0],Q=(Math.round(Math.atan2(K,te)*180/Math.PI/90)%4+4)%4;z=[(0+Q)%4,(2+Q)%4]}const D=[0,0,0,0],P=await et("identify: sonde marges (#68)",()=>d$(n,M,y,D,z));if(P!==null&&(F.push(P>=Gn?1:0),v!==null)){const K=v[1][1]-v[0][1],te=v[1][0]-v[0][0],Q=(Math.round(Math.atan2(K,te)*180/Math.PI/90)%4+4)%4,de=Math.max(D[(0+Q)%4],D[(2+Q)%4]);Dt.total+=1;const be=P>=Gn?1:0,W=de>=Gn?1:0;be===1&&(Dt.positifs4+=1),W===1&&(Dt.positifs2+=1),be!==W&&(Dt.divergent+=1,Dt.detail.push(`${_.slice(0,12)}:v4=${be}/v2=${W} p=[${D.map(J=>J.toFixed(2)).join(",")}]kQ${Q}`))}}catch{}const j=O??V??R,Z=a.some(z=>{const D=z.box[0]+z.box[2]/2,P=z.box[1]+z.box[3]/2;return D>=j.x&&D<=j.x+j.width&&P>=j.y&&P<=j.y+j.height});F.push(Z?1:0);let ue=F.length>0&&F.reduce((z,D)=>z+D,0)*2>F.length;ue&&c$(j,R,a)&&(ue=!1);const L=V??(ue&&O!==null?O:null),B={id:_,name:((w=s$[_])==null?void 0:w.name)??_,builtWithCardUnderneath:ue,boundingBox:R,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},A=L??R;f.push({obj:B,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height},quad:N,region:L})}return f}const je="/7wd-scorer/models/",Ua=[];let kt=null;function p$(){Ua.length=0,kt=null}function f$(e){const t=performance.now();kt!==null&&Ua.push({nom:kt.nom,ms:Math.round(t-kt.debut)}),kt={nom:e,debut:t}}function ug(){const e=[...Ua];kt!==null&&e.push({nom:`${kt.nom} (en cours)`,ms:Math.round(performance.now()-kt.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function lg(){const e={};for(const t of Object.keys(nt))e[nt[t].onnx]=ai.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ct)e[t]=n;return e}function m$(){var e,t;return oi(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let cg=!1;const ii=new Map;function oi(){var e;cg||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,cg=!0)}const ai=new Set;let La=0;function dg(e){return La+=1,e.finally(()=>{La-=1})}function g$(){return La>0}function y$(e){oi();let t=ii.get(e);return t===void 0&&(t=dg(et(`session: 1er chargement ${nt[e].onnx}`,()=>Nn.create(`${je}${nt[e].onnx}`,{executionProviders:ai.has(e)?["wasm"]:["webgpu","wasm"]}))),ii.set(e,t),t.catch(()=>ii.delete(e))),t}const ct=new Map;let fr=0,mr=0;const si=new Map;function Fa(e){const t=(kt==null?void 0:kt.nom)??"(hors etage)";si.set(t,(si.get(t)??0)+e)}function w$(){return[...si.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let Ga=0;function _$(){return{ms:Math.round(fr),appels:mr,preparationMs:Math.round(Ga)}}function b$(){fr=0,mr=0,Ga=0,Uw(),si.clear(),uv()}const hg=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx"]),Wa=new Set;let qa=null;async function Va(e){if(qa)return await qa.catch(()=>{}),e();const t=e();return qa=t.catch(()=>{}),t}async function Ha(e,t){return Va(()=>Nn.create(`${je}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ft(e){return dg(et(`session: 1er chargement ${e}`,()=>x$(e)))}async function x$(e){oi();const t=!hg.has(e)&&!Wa.has(e);let n=null;if(t)try{n=await Ha(e,!0),ct.set(e,"webgpu")}catch(a){Wa.add(e),ct.set(e,`wasm (webgpu refuse a la creation: ${String(a).slice(0,60)})`)}else ct.set(e,hg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Ha(e,!1)}catch(a){return ct.set(e,`ECHEC wasm: ${String(a).slice(0,160)}`),null}let r=n,i=ct.get(e)==="webgpu";const o=async(a,...s)=>{const u=performance.now();try{const l=await r.run(a,...s),c=performance.now()-u;return fr+=c,Fa(c),mr+=1,l}catch(l){if(!i)throw l;Wa.add(e),ct.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Ha(e,!1);const c=await r.run(a,...s),d=performance.now()-u;return fr+=d,Fa(d),mr+=1,c}};return new Proxy(r,{get(a,s,u){if(s==="run")return o;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let ja=null,Ka=null;const $$=.75,v$=4,M$=.65,S$=3e4;let Ya=null;function ui(){return Ya===null&&(Ya=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Ya}const pg=new Map;function Xa(e){let t=pg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${je}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const a=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),pg.set(e,t)),t}function Qa(e){return Xa(`wonder-refs/${e}.jpg`)}const fg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function E$(){const e=new Map;for(const t of fg){const n=await Xa(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function I$(){const e=new Map;for(const t of fg){const n=await Xa(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const T$=.6,k$=12,C$=45e3;let Za=null;function mg(){return Za===null&&(oi(),Za=(async()=>{try{const[e,t,n,r]=await Promise.all([Va(()=>Nn.create(`${je}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]})),Va(()=>Nn.create(`${je}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]})),fetch(`${je}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${je}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:gb(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Za}async function A$(e,t){const n=Math.max(mb/Kt,t.width/t.height),{tensor:r,width:i}=wb(t,n),o={[e.rec.inputNames[0]]:new Be("float32",r,[1,3,Kt,i])},a=(await e.rec.run(o))[e.rec.outputNames[0]],[s,u,l]=a.dims,c=a.data,d=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let _=0;_<l;_++){const x=c[w+_];x>y&&(y=x,m=_)}d[f]=m,p[f]=y}return yb(d,p,e.charset)}function R$(...e){return et("merveilles (OCR+ORB+opencv)",()=>O$(...e))}async function O$(e,t){const n=await mg();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+C$;let o=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){o=!0;break}t(`wonder names: rotation ${a*90}°…`,a/4);const s=jt(e,a),u=ob(s),l={[n.det.inputNames[0]]:new Be("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(l))[n.det.outputNames[0]],d=db(c.data,u,s.width,s.height).slice(0,k$);console.debug(`[wonders-ocr] rot ${a*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){o=!0;break e}const f=hb(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await A$(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<T$||m.trim().length<v$)continue;const w=Sb(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<$$||w.kind!=="wonder")continue;const _=r.get(w.id);(_===void 0||w.confidence>_.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Ja(p,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:o}}function Ja(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],a=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],s=a.map(d=>d[0]),u=a.map(d=>d[1]),l=Math.min(...s),c=Math.min(...u);return{x:l,y:c,width:Math.max(...s)-l,height:Math.max(...u)-c}}function N$(){return Ka===null&&(Ka=fetch(`${je}laurel_gallery.json`).then(async e=>e.ok?j_(await e.json()):[]).catch(()=>[])),Ka}function z$(e,t,n,r){return at("crop",()=>B$(e,t,n,r))}function B$(e,t,n,r){return ln(e,t-r,n-r,2*r,2*r)}function ln(e,t,n,r,i){return at("crop",()=>P$(e,t,n,r,i))}function P$(e,t,n,r,i){const o=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=((p+a)*e.width+(f+o))*e.channels,y=(p*l+f)*3;d[y]=e.data[m],d[y+1]=e.data[m+1],d[y+2]=e.data[m+2]}return{width:l,height:c,channels:3,data:d}}function D$(){return ja===null&&(ja=fetch(`${je}token_templates.json`).then(async e=>e.ok?F1(await e.json()):new Map).catch(()=>new Map)),ja}let es=null;function ts(){return es===null&&(es=(async()=>{try{const e=await fetch(`${je}token_embed_index.json`);if(!e.ok)return null;const t=Y1(await e.json()),n=await ft("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),es}const U$=.92;let ns=null;function rs(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${je}guild_classifier.onnx`,{method:"HEAD"})).ok?await ft("guild_classifier.onnx"):null}catch{return null}})()),ns}let is=null;function os(){return is===null&&(is=(async()=>{try{return(await fetch(`${je}laurel_digit.onnx`,{method:"HEAD"})).ok?await ft("laurel_digit.onnx"):null}catch{return null}})()),is}let as=null,ss=null;function us(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${je}banner_class.onnx`,{method:"HEAD"})).ok?await ft("banner_class.onnx"):null}catch{return null}})()),ss}async function L$(e,t){if(t.length===0)return t;const n=await us();if(n===null)return t;const r=[];for(const i of t)try{const o=E2(i.box,e.width,e.height);if(o===null){r.push(i);continue}const a=ln(e,o.x,o.y,o.w,o.h),s=I2(a),u=await n.run({[n.inputNames[0]]:new Be("float32",s,[1,3,un,un])});T2(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function ls(){return as===null&&(as=(async()=>{try{return(await fetch(`${je}laurel_filter.onnx`,{method:"HEAD"})).ok?await ft("laurel_filter.onnx"):null}catch{return null}})()),as}async function F$(e,t,n){let[r,i,o,a]=t,s=o-r,u=a-i;if(s<=0||u<=0)return null;if(s<qn){const w=Math.floor((r+o)/2);r=w-Math.floor(qn/2),o=w+Math.floor(qn/2),s=o-r}if(u<qn){const w=Math.floor((i+a)/2);i=w-Math.floor(qn/2),a=w+Math.floor(qn/2),u=a-i}const l=Math.trunc(Ym*s),c=Math.trunc(Ym*u),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(e.width,o+l),m=Math.min(e.height,a+c),y=ln(e,d,p,f-d,m-p);if(y.width<=0||y.height<=0)return null;try{const w=x2(y),_=await n.run({[n.inputNames[0]]:new Be("float32",w,[1,3,sn,sn])});return $2(_[n.outputNames[0]].data)}catch{return null}}let cs=null;function ds(){return cs===null&&(cs=(async()=>{try{return(await fetch(`${je}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ft("coin_filter_cnn.onnx"):null}catch{return null}})()),cs}let hs=null;function ps(){return hs===null&&(hs=(async()=>{try{return(await fetch(`${je}coin_denom.onnx`,{method:"HEAD"})).ok?await ft("coin_denom.onnx"):null}catch{return null}})()),hs}async function G$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=eg(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*yt*yt);r.forEach((u,l)=>i.set(u,l*u.length));const a=(await n.run({[n.inputNames[0]]:new Be("float32",i,[t.length,3,yt,yt])}))[n.outputNames[0]].data,s=Jr.length;return t.map((u,l)=>j2(a.subarray(l*s,l*s+s)))}catch{return null}}async function W$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=eg(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const c=new Float32Array(t.length*3*yt*yt);l.forEach((f,m)=>c.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new Be("float32",c,[t.length,3,yt,yt])}))[n.outputNames[0]].data;return t.map((f,m)=>V2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),a=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,s=Math.trunc(a);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let fs=null;function li(){return fs===null&&(fs=(async()=>{try{return(await fetch(`${je}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ft("tuck_classifier.onnx"):null}catch{return null}})()),fs}const gg=.1;let ms=null;function ci(){return ms===null&&(ms=(async()=>{try{return(await fetch(`${je}track_band_brut.onnx`,{method:"HEAD"})).ok?await ft("track_band_brut.onnx"):null}catch{return null}})()),ms}async function yg(e,t,n){try{const r=qr(t,1280,Yw(t.width,t.height,n)),o=(await e.run({[e.inputNames[0]]:new Be("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return mm(o.data,o.dims[1]??0,o.dims[2]??0,r.params,gg)}catch{return[]}}let gs=null;const q$=.4;function V$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function H$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const a=o.x+o.width/2,s=o.y+o.height/2;for(const u of n)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||V$(o,u)>=q$)return!1;for(const u of r)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function ys(){return gs===null&&(gs=(async()=>{try{return(await fetch(`${je}tuck_box.onnx`,{method:"HEAD"})).ok?await ft("tuck_box.onnx"):null}catch{return null}})()),gs}let ws=null;function _s(){return ws===null&&(ws=(async()=>{try{return(await fetch(`${je}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await j$(),await ft("wonder_classifier.onnx")):null}catch{return null}})()),ws}let wg=!1;async function j$(){if(wg)return;const e=await(await fetch(`${je}wonder_classifier_seuil.json`)).json();a2(Number(e.seuil)),s2(e.classes),wg=!0}let _g=null,bg=null;async function K$(e){var d;_g??(_g=ft("wonder_obb.onnx"));const t=await _g;if(t===null)return null;const n=await ui();if(n===null)return null;bg=n;const{tensor:r,params:i}=qr(e,1024),a=(await t.run({[t.inputNames[0]]:new Be("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],s=a.dims[a.dims.length-1],u=a.data;let l=0;for(let p=0;p<s;p++){const f=u[4*s+p];f>l&&(l=f)}const c=Qx(n,u,s,i);return ct.set("wonder_obb.onnx",`${ct.get("wonder_obb.onnx")??"?"} | dims=${a.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(d=c[0])!=null&&d.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(p=>p.quad.map(f=>[f[0],f[1]]))}const Y$={wonderRef:Qa,tuckClassifier:li,tuckBoxClassifier:ys,obbQuads:K$,redresserQuad:(e,t)=>e$(bg,e,t),localiseWonders:async e=>{try{const{rows:t,params:n}=await wt("wonder",e);return pa(t,n,nt.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function X$(e,t){const n=await ts();if(n!==null)try{const r=Q1(e),i=new Be("float32",r,[4,3,an,an]),a=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=J1(n.index,Z1(a));return u<U$?["",-1]:[s,u]}catch{}return V1(e,t)}const xg=new WeakMap;async function di(e){const t=xg.get(e);if(t!==void 0)return await t;const n=et("decodage image",()=>Q$(e));return xg.set(e,n),await n}async function Q$(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const $g=new WeakMap;async function wt(e,t){let n=$g.get(t);n===void 0&&(n=new Map,$g.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=Z$(e,t);return n.set(e,i),await i}async function Z$(e,t){const n=nt[e],r=performance.now(),{tensor:i,params:o}=qr(t,n.input);Ga+=performance.now()-r;const a=async()=>{const s=await y$(e),u={[s.inputNames[0]]:new Be("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await s.run(u),d=performance.now()-l;fr+=d,Fa(d),mr+=1;const p=c[s.outputNames[0]];return{rows:new Float32Array(p.data),params:o}};try{return await a()}catch(s){if(ai.has(e))throw s;return ai.add(e),ii.delete(e),await a()}}const J$=6,ev=4,tv=5,nv=2;async function rv(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await di(e),r=await wt("banner",n),i=Vr(r.rows,r.params,nt.banner.conf);if(t.banners=i.length,i.length>=J$)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await wt("laurel",n),a=ma(o.rows,o.params,nt.laurel.conf);if(t.laurels=a.length,a.length>=ev)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const s=await wt("coin",n),u=pm(s.rows,s.params,nt.coin.conf);return t.coins=u.length,u.length>=tv?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=nv?{...t,kind:"board",confidence:.4}:t}function iv(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function vg(e,t,n,r,i,o,a,s){let u=0;r(`${i}: card banners…`,.04);const l=await wt("banner",e);let c=Vr(l.rows,l.params,nt.banner.conf);c=await L$(e,c),r(`${i}: progress tokens…`,.08);let d=[];const p=await ci();p!==null&&(d=await yg(p,e,c)),d.length>0&&c.length>0&&(c=c.filter(W=>{const J=W.box[0]+W.box[2]/2,re=W.box[1]+W.box[3]/2;return!d.some(([oe,ie,$e,ve])=>Math.min(oe,$e)<=J&&J<=Math.max(oe,$e)&&Math.min(ie,ve)<=re&&re<=Math.max(ie,ve))}));const f=await wt("token",e),m=await D$(),y=[],w=[];for(const W of a_(f.rows,f.params,nt.token.conf)){if(w.push({cx:W.cx,cy:W.cy,r:W.r}),d.some(([oe,ie,$e,ve])=>W.cx>=oe&&W.cx<=$e&&W.cy>=ie&&W.cy<=ve))continue;const[J,re]=await X$(xm(e,W),m);J===""&&re<0?w.pop():J===""?u+=1:!y.some(oe=>oe.id===J)&&!s.some(oe=>oe.id===J)&&y.push({id:J,center:[W.cx,W.cy],radius:W.r,confidence:Math.round(re*1e4)/1e4})}r(`${i}: coins…`,.14);const _=await wt("coin",e),x=pm(_.rows,_.params,nt.coin.conf).filter(W=>!w.some(J=>(W.cx-J.cx)**2+(W.cy-J.cy)**2<=W.r*W.r)),M=await ds(),v=M!==null?await W$(e,x,M):null,E=(v!==null?x.filter((W,J)=>v[J]>=Jm).map(W=>W.r):[]).sort((W,J)=>W-J),T=E.length>0?E.length%2===1?E[(E.length-1)/2]:(E[E.length/2-1]+E[E.length/2])/2:null,[k,S]=q2,R=x.map((W,J)=>{const re=v!==null?v[J]:null;return re===null||re>=Jm?"keep":T!==null&&T>0&&W.r/T>=k&&W.r/T<=S?"suspect":"drop"}),N=x.filter((W,J)=>R[J]==="keep"),X=R_(e,N),G=await ps(),V=G!==null?await G$(e,N,G):null,O=K2(X,V??X.map(()=>null));O.map(W=>W.value);const F=[];let j=0;if(x.forEach((W,J)=>{if(R[J]==="drop")return;if(R[J]==="suspect"){const oe=v[J];F.push({denomination:null,center:[W.cx,W.cy],radius:W.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${oe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const re=O[j++];F.push({denomination:re.value,center:[W.cx,W.cy],radius:W.r,denomSource:re.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const W=F.map(re=>re.radius).sort((re,oe)=>re-oe),J=W.length%2===1?W[(W.length-1)/2]:(W[W.length/2-1]+W[W.length/2])/2;if(J>0)for(const re of F)re.radius/J>2&&(re.suspect=!0,re.suspectReason=`radius ${re.radius}px is ${(re.radius/J).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let W=0;W<F.length;W+=1)for(let J=W+1;J<F.length;J+=1){const re=F[W],oe=F[J],ie=Math.hypot(re.center[0]-oe.center[0],re.center[1]-oe.center[1]);if(ie<1.1*Math.min(re.radius,oe.radius))for(const $e of[re,oe])$e.suspect||($e.suspect=!0,$e.suspectReason=`almost concentric with another coin (${ie.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Z=[],ue=[],L=[],B=Date.now()+S$;let A=null,z=null;const D=()=>(z===null&&(z=(async()=>{try{const{rows:W,params:J}=await wt("wonder",e);return pa(W,J,nt.wonder.conf,Number.POSITIVE_INFINITY).map(re=>re.box)}catch{return[]}})()),z),P=[];let K=!1;const te=await _s();if(te!==null){const W=await D();if(W.length>0&&(A=await et("opencv.js (chargement)",()=>ui()),A!==null)){r(`${i}: identifying wonders…`,.35);const J=await et("identifyWondersByClassifier",()=>h$(Y$,A,e,W,te,B,c));for(const re of J)Z.some(oe=>oe.id===re.obj.id)||a.some(oe=>oe.id===re.obj.id)||(Z.push(re.obj),P.push({obj:re.obj,edgeScores:re.edgeScores,zone:re.zone}),ue.push(re.zone),L.push({quad:re.quad,region:re.region}));K=J.length>0}}K||r(`${i}: wonder names…`,.2);const Q=K?{wonders:[],aborted:!1}:await R$(e,(W,J)=>r(`${i}: ${W}`,.2+.35*(J??0)));A===null&&(A=Q.wonders.length>0?await ui():null);for(const W of Q.wonders){let J=null;if(A!==null&&Date.now()<B){r(`${i}: registering ${W.name}…`,.6);try{const re=await Qa(W.id);if(re!==null){let oe=Pb(A,e,re,[[W.nameBox.x,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y+W.nameBox.height],[W.nameBox.x,W.nameBox.y+W.nameBox.height]]);if(oe===null){const ie=await D(),$e=Gb(ie,W.nameBox.x+W.nameBox.width/2,W.nameBox.y+W.nameBox.height/2);$e!==null&&(oe=Rm(A,e,re,$e))}if(oe!==null){let ie=oe.built,$e=!1;const ve=await li();if(ve!==null)try{const we=Ta(A,e,re,oe.footprint);if(we!==null){const ge=Yr(we),Ee=await ve.run({[ve.inputNames[0]]:new Be("float32",ge,[1,3,gt,gt])});ie=ka(Ee[ve.outputNames[0]].data).built,$e=!0}}catch{}const ee=oe.footprint.map(we=>we[0]),se=oe.footprint.map(we=>we[1]),ce=Math.max(0,Math.round(Math.min(...ee))),_e=Math.max(0,Math.round(Math.min(...se)));J={built:ie,boundingBox:{x:ce,y:_e,width:Math.min(e.width,Math.round(Math.max(...ee)))-ce,height:Math.min(e.height,Math.round(Math.max(...se)))-_e},tuckRegion:Kr(oe.footprint,oe.overflow),footprint:oe.footprint,edgeScores:oe.edgeScores,builtByTuck:$e}}}}catch(re){console.warn(`[wonders-reg] ${W.id} failed:`,re)}}if(J!==null){const re=J.tuckRegion??J.boundingBox;ue.push({x0:re.x,y0:re.y,x1:re.x+re.width,y1:re.y+re.height}),L.push({quad:J.footprint,region:J.tuckRegion})}else{const re=Math.max(8,W.nameBox.height),oe=Math.round(W.nameBox.width*.15);ue.push({x0:W.nameBox.x-oe,y0:W.nameBox.y-re*2.5,x1:W.nameBox.x+W.nameBox.width+oe,y1:W.nameBox.y+W.nameBox.height+re*2.5}),L.push({quad:null,region:null})}if(!Z.some(re=>re.id===W.id)&&!a.some(re=>re.id===W.id)){const re=(J==null?void 0:J.builtByTuck)===!0,oe=re?J.built:!1,ie=!re&&(J==null?void 0:J.built)===!0,$e={id:W.id,name:W.name,builtWithCardUnderneath:oe,boundingBox:(J==null?void 0:J.boundingBox)??{x:0,y:0,width:0,height:0},...J!=null&&J.tuckRegion?{tuckRegion:J.tuckRegion}:{},confidence:W.confidence,...ie?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};Z.push($e),P.push({obj:$e,edgeScores:J&&!J.builtByTuck?J.edgeScores:null,zone:ue[ue.length-1]})}}if(!K){const W=Vb(P.map(J=>({built:J.obj.builtWithCardUnderneath,edgeScores:J.edgeScores,zone:J.zone})),c.map(J=>[J.box[0]+J.box[2]/2,J.box[1]+J.box[3]/2]));for(const J of W){const re=P[J];re.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${re.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(c.length>0){const J=new Set(W);for(let re=0;re<P.length;re++){const oe=P[re];if(J.has(re)||!oe.obj.builtWithCardUnderneath)continue;const ie=oe.obj.tuckRegion;if(ie===void 0)continue;if(!c.some(ve=>{const ee=ve.box[0]+ve.box[2]/2,se=ve.box[1]+ve.box[3]/2;return ee>=ie.x&&ee<=ie.x+ie.width&&se>=ie.y&&se<=ie.y+ie.height})){const ve=oe.obj;ve.builtWithCardUnderneath=!1,ve.suspect=!0,ve.suspectReason="built-unconfirmed"}}}}if(Q.aborted&&t.push({code:"LOW_CONFIDENCE",message:`${i}: the wonder-name read ran out of its time budget on this device — ${Q.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),A!==null&&Q.wonders.length>0&&Date.now()<B)try{const W=await mg(),J=(W==null?void 0:W.catalog.filter(oe=>oe.kind==="wonder").map(oe=>oe.id))??[],re=new Map;for(const oe of J)if(!Z.some(ie=>ie.id===oe)&&!a.some(ie=>ie.id===oe)){const ie=await Qa(oe);ie!==null&&re.set(oe,ie)}if(re.size>0){r(`${i}: searching occluded wonders…`,.7);const oe=Bb(A,e,re,B);for(const ie of oe){const $e=ie.footprint.map(me=>me[0]),ve=ie.footprint.map(me=>me[1]),ee=Math.max(0,Math.round(Math.min(...$e))),se=Math.max(0,Math.round(Math.min(...ve))),ce={x:ee,y:se,width:Math.min(e.width,Math.round(Math.max(...$e)))-ee,height:Math.min(e.height,Math.round(Math.max(...ve)))-se},_e=me=>{const Ue=me.boundingBox,qe=Math.max(0,Math.min(Ue.x+Ue.width,ce.x+ce.width)-Math.max(Ue.x,ce.x)),Fe=Math.max(0,Math.min(Ue.y+Ue.height,ce.y+ce.height)-Math.max(Ue.y,ce.y)),Ge=qe*Fe,it=Ue.width*Ue.height+ce.width*ce.height-Ge;return it>0&&Ge/it>zb};if(Z.some(_e)||a.some(_e))continue;const ge=W==null?void 0:W.catalog.find(me=>me.id===ie.id);Z.push({id:ie.id,name:(ge==null?void 0:ge.nameFr)??(ge==null?void 0:ge.name)??ie.id,builtWithCardUnderneath:ie.built,boundingBox:ce,...ie.tuckRegion?{tuckRegion:ie.tuckRegion}:{},confidence:Math.round(ie.confidence*1e4)/1e4});const Ee=ie.tuckRegion??ce;ue.push({x0:Ee.x,y0:Ee.y,x1:Ee.x+Ee.width,y1:Ee.y+Ee.height}),L.push({quad:ie.footprint.map(([me,Ue])=>[me,Ue]),region:ie.tuckRegion??null})}}}catch(W){console.warn("[wonders-reg] discovery failed:",W)}const de=async()=>{let W=Z.slice();const J=[];c.forEach((ve,ee)=>{const se=ve.box[0]+ve.box[2]/2,ce=ve.box[1]+ve.box[3]/2;ue.some(_e=>se>=_e.x0&&se<=_e.x1&&ce>=_e.y0&&ce<=_e.y1)||J.push(ee)});const re=[],oe=[];W.forEach((ve,ee)=>{const se=ve.boundingBox;se&&se.width>0&&(re.push(ee),oe.push([se.x,se.y,se.width,se.height]))});const ie=ve=>{const ee=[];return ve.forEach((se,ce)=>{const _e=se.box[0]+se.box[2]/2,we=se.box[1]+se.box[3]/2;ue.some(ge=>_e>=ge.x0&&_e<=ge.x1&&we>=ge.y0&&we<=ge.y1)||ee.push(ce)}),ee};let $e=ng(c.map(ve=>ve.box),J,oe,d,[e.width,e.height]);try{const ve=Ex(e.width,e.height,c.map(ee=>ee.box),$e.hulls.map(([ee,se],ce)=>({owner:ee,poly:se,n:$e.hullBoxCounts[ce]??0})),oe);if(ve.length>0){const ee=za(c.map(ce=>ce.box)),se=[];for(const ce of ve){const[_e,we,ge,Ee]=ce,me=ln(e,_e,we,ge-_e,Ee-we);if(me.width<=0||me.height<=0)continue;const Ue=await wt("banner",me);for(const qe of Vr(Ue.rows,Ue.params,nt.banner.conf)){const Fe=Ix(qe.box,ce,ee);Fe&&se.push({...qe,box:Fe})}}if(se.length>0){const ce=ym([...c,...se]);ce.length>c.length&&(c=ce,$e=ng(c.map(_e=>_e.box),ie(c),oe,d,[e.width,e.height]))}}}catch(ve){console.warn("[#129 city-rescan] skipped:",ve)}return o!==void 0&&(o.hulls=$e.hulls.map(([ve,ee],se)=>({owner:ve,poly:ee,n:$e.hullBoxCounts[se]??0})),o.bandBoxes=d,o.image=e),{split:$e,photoWonders:W,splitWonderIdx:re}};let be=null;try{be=await de()}catch(W){console.warn("[city-split] failed (side unfiltered):",W)}return{bannerDetections:c,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:d,bandSession:p,wonderFootprints:ue,wonderTuckGates:L,photoTokensList:y,geo:be,cv:A,regDeadline:B,unidentifiedTokens:u}}async function Mg(e,t,n,r,i,o,a,s,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:p,photoTokenDiscs:f,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:_,wonderTuckGates:x,photoTokensList:M,geo:v,regDeadline:E}=e,T={},k=[],S=[];let R=0;const N=[];let X=0,G=0;const V=[],O=[],F=[],j=t==="opponent";let Z=(ee,se)=>!j,ue=(ee,se)=>!j,L=null;if(v!==null)try{const{split:ee,photoWonders:se,splitWonderIdx:ce}=v;Z=(Ee,me)=>ee.pointOwner(Ee,me)==="opponent"===j;const _e=j?"opponent":"player";if(ue=(Ee,me)=>ee.pointOwner(Ee,me)===_e,n){const Ee=ee;L=me=>new Set(px(me,Ee,_e,y))}c=c.filter((Ee,me)=>ee.bannerOwner[me]==="opponent"===j);const we=se.map(()=>"player");ce.forEach((Ee,me)=>{we[Ee]=ee.wonderOwner[me]});const ge=[];se.forEach((Ee,me)=>{we[me]==="opponent"===j&&ge.push(Ee)});for(const Ee of ge)O.push(Ee);_.length=0;for(const Ee of ge){const me=Ee.tuckRegion??Ee.boundingBox;me&&_.push({x0:me.x,y0:me.y,x1:me.x+me.width,y1:me.y+me.height})}for(const Ee of M)Z(Ee.center[0],Ee.center[1])&&F.push(Ee)}catch(ee){console.warn("[city-split] failed (side unfiltered):",ee)}const B=L!==null?L(p):null;for(const ee of p)(B!==null?!B.has(ee):!ue(ee.center[0],ee.center[1]))||(R+=ee.denomination??0,S.push(ee));const A=new Set,z=[],D=za(c.map(ee=>ee.box));x.forEach((ee,se)=>{if(ee.quad===null||ee.region===null){const ge=_[se];ge&&z.push(ge);return}const ce=ee.region,_e=[];c.forEach((ge,Ee)=>{const me=ge.box[0]+ge.box[2]/2,Ue=ge.box[1]+ge.box[3]/2;me>=ce.x&&me<=ce.x+ce.width&&Ue>=ce.y&&Ue<=ce.y+ce.height&&_e.push([Ee,ge.box])});const we=W2(ee.quad,_e,D);we!==null&&A.add(we)});let P=[],K=0;c.forEach((ee,se)=>{if(A.has(se)){G+=1,K+=1;return}const ce=ee.box[0]+ee.box[2]/2,_e=ee.box[1]+ee.box[3]/2;if(z.some(we=>ce>=we.x0&&ce<=we.x1&&_e>=we.y0&&_e<=we.y1)){G+=1,K+=1;return}P.push(ee)});const te=B2(P,K,y,o.width,o.height);P=te.kept;for(const ee of P)T[ee.family]=(T[ee.family]??0)+1,X+=1;const Q=g_(P),de=new Set(Q.map(ee=>ee.box.join(",")));for(const ee of w_(P))de.has(ee.box.join(","))||(Q.push(ee),de.add(ee.box.join(",")));for(const ee of te.suspects)de.has(ee.box.join(","))||(Q.push(ee),de.add(ee.box.join(",")));for(const ee of Q)V.push(ee);if(P.some(ee=>ee.family==="guild")){const ee=await rs();if(ee!==null){s(`${u}: identifying guilds…`,.75);for(const se of P)if(se.family==="guild")try{const[ce,_e,we,ge]=se.box,Ee=ln(o,ce,_e,we,ge),me=n2(Ee),Ue={[ee.inputNames[0]]:new Be("float32",me,[1,3,Wn,Wn])},Fe=(await ee.run(Ue))[ee.outputNames[0]].data,{id:Ge,prob:it}=r2(Fe);Ge!==""&&!N.some(At=>At.id===Ge)&&!l.some(At=>At.id===Ge)&&N.push({id:Ge,boundingBox:{x:ce,y:_e,width:we,height:ge},confidence:Math.round(it*1e4)/1e4})}catch(ce){console.warn("[guild-cls] failed:",ce)}}else if(Date.now()<E)try{const se=d??await ui();if(se!==null){const ce=await E$();if(ce.size>0){s(`${u}: identifying guilds…`,.75);const _e=await I$();for(const we of A1(se,o,ce,E,_e))!N.some(ge=>ge.id===we.id)&&!l.some(ge=>ge.id===we.id)&&N.push(we)}}}catch(se){console.warn("[guilds-reg] failed:",se)}}s(`${u}: laurels…`,.8);const W=await et("laurier: chargement galerie gabarits",()=>N$()),J=[];for(const ee of[0]){const se=ee===0?o:jt(o,ee),ce=await et("laurier: passe PLEINE photo",()=>wt("laurel",se));for(const[_e,we,ge,Ee]of at("laurier: decodage YOLO (JS)",()=>ma(ce.rows,ce.params,nt.laurel.conf))){const me=Ja({x:_e,y:we,width:ge-_e,height:Ee-we},ee,o.width,o.height);J.push([me.x,me.y,me.x+me.width,me.y+me.height])}}let re=at("laurier: dedup",()=>fm(J));const oe=[];try{const ee=Px(c.map(se=>se.box),[o.width,o.height]);ct.set("_tta.onnx",`total=${Da.total} idDiff=${Da.idDiff} verdictDiff=${Da.verdictDiff}`),ct.set("_marge2.onnx",`total=${Dt.total} pos4=${Dt.positifs4} pos2=${Dt.positifs2} divergent=${Dt.divergent} `+Dt.detail.slice(0,10).join(" | ")),ct.set("_ttaObb.onnx",`total=${ri.total} memeK=${ri.memeK} inv=${ri.memeKInverse} `+ri.detail.slice(0,12).join(" ")),ct.set("_tuilage.onnx",`groupes=? tuiles=${ee.length} bannieres=${c.length} image=${o.width}x${o.height}`);for(const[se,ce,_e,we]of ee){const ge=ln(o,se,ce,_e-se,we-ce);if(ge.width<=0||ge.height<=0)continue;const Ee=[];for(const me of[0]){const Ue=me===0?ge:jt(ge,me),qe=await et("laurier: passe par TUILE (#113)",()=>wt("laurel",Ue));for(const[Fe,Ge,it,At]of at("laurier: decodage YOLO (JS)",()=>ma(qe.rows,qe.params,nt.laurel.conf))){const ut=Ja({x:Fe,y:Ge,width:it-Fe,height:At-Ge},me,ge.width,ge.height);Ee.push([ut.x,ut.y,ut.x+ut.width,ut.y+ut.height])}}if(re=Dx(re,fm(Ee),[se,ce]),w!==null)try{const me=await et("laurier: bande de piste sur tuile (#114)",async()=>{const Fe=qr(ge,1280,cr);return{sortie:await w.run({[w.inputNames[0]]:new Be("float32",Fe.tensor,[1,3,1280,1280])}),params:Fe.params}}),Ue={params:me.params},qe=me.sortie[w.outputNames[0]];for(const[Fe,Ge,it,At]of mm(qe.data,qe.dims[1]??0,qe.dims[2]??0,Ue.params,gg))oe.push([Fe+se,Ge+ce,it+se,At+ce])}catch{}}}catch(ee){console.warn("[laurel-containers] failed:",ee)}const ie=[...y,...oe];re=re.filter(([ee,se,ce,_e])=>!Fx((ee+ce)/2,(se+_e)/2,ie,c.map(we=>we.box)));const[$e,ve]=await et("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([os(),ls()]));for(const[ee,se,ce,_e]of re){const we=Math.trunc((ee+ce)/2),ge=Math.trunc((se+_e)/2);if([...f,...m].some(He=>(we-He.cx)**2+(ge-He.cy)**2<=He.r*He.r)||!Z(we,ge))continue;if(ve!==null){const He=await et("laurier: filtre FP (#49)",()=>F$(o,[Math.trunc(ee),Math.trunc(se),Math.trunc(ce),Math.trunc(_e)],ve));if(He!==null&&He>=b2)continue}const me=Math.min(Math.trunc(ce-ee),Math.trunc(_e-se)),Ue=Math.max(6,Math.trunc(Math.max(ce-ee,_e-se)*D_)),qe=z$(o,we,ge,Ue);let Fe=null,Ge=0,it=!1;if($e!==null&&me>=6){const He=ln(o,Math.trunc(ee),Math.trunc(se),Math.trunc(ce-ee),Math.trunc(_e-se));let Xe=null,_t=0;for(const Rt of[0,1,2,3]){const Qt=Rt===0?He:jt(He,Rt),$s=y2(Qt),vs=await et("laurier: lecture chiffre (CNN)",()=>$e.run({[$e.inputNames[0]]:new Be("float32",$s,[1,3,Bt,Bt])})),{value:Ms,prob:fi}=w2(vs[$e.outputNames[0]].data);if(fi>_t&&(Xe=Ms,_t=fi),Xe!==null&&_t>=g2)break}Xe!==null&&_t>=m2&&(Fe=Xe,Ge=_t)}if(Fe===null&&me>=6){const He=new Map;for(const Xe of[0,1,2,3]){const _t=Xe===0?qe:jt(qe,Xe),[Rt,Qt]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>Z_(_t,W));Rt!==null&&(He.set(Rt,Math.max(He.get(Rt)??0,Qt)),Qt>Ge&&(Fe=Rt,Ge=Qt))}Fe!==null&&Ge<M$&&(Fe=null),it=Fe!==null&&[...He.entries()].some(([Xe,_t])=>Xe!==Fe&&_t>=Ge-.1)}const At=_.some(He=>we>=He.x0&&we<=He.x1&&ge>=He.y0&&ge<=He.y1),ut=[...N,...l].some(He=>{const Xe=He.boundingBox;return Xe!==void 0&&we>=Xe.x&&we<=Xe.x+Xe.width&&ge>=Xe.y&&ge<=Xe.y+Xe.height});k.push({value:Fe,valueRead:Fe!==null,center:[Math.round((ee+ce)/2),Math.round((se+_e)/2)],boundingBox:{x:Math.trunc(ee),y:Math.trunc(se),width:Math.trunc(ce-ee),height:Math.trunc(_e-se)},confidence:Math.round(Ge*1e4)/1e4,excluded:At||ut,photoIndex:i-1,...it?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:T,laurels:k,coins:S,coinTotal:R,guilds:N,bannerCount:X,tuckedExcluded:G,bannerSuspects:V,cityWondersKept:O,cityTokensKept:F}}function Sg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function Eg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Ig(e,t,n){const{byFamily:r,laurels:i,coins:o,progressTokens:a,wonders:s,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:p,tuckedExcluded:f}=e;f>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${f} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):p>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(M=>M.id).join(", ")+" — confirm in the review."});const y=s.filter(M=>M.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(M=>M.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+a.map(M=>M.id).join(", ")+" — confirm in the review."}),o.length>0){const M=o.filter(E=>E.denomSource==="cnn").length,v=o.length-M;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${c} from ${o.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${o.length} tile(s) — ${M} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=H$(u,s);for(const M of[...Gx(s.map(v=>v.id),t),...Vx(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:M.message});const _=i.filter(M=>!M.excluded),x=_.filter(M=>M.valueRead);return{...iv(),wonders:s,guilds:w,progressTokens:a,laurels:i,cardVictoryPoints:{value:x.reduce((M,v)=>M+(v.value??0),0),laurelsKept:_.length,laurelsUnread:_.length-x.length,complete:_.length===x.length},cardCounts:{byFamily:r,source:p>0?"yolo":"none",tuckedExcluded:f,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:o.length>0?.5:0,source:o.length===0?"none":o.some(M=>M.denomSource==="cnn")?"local-cnn":"local-colour",coins:o}}}async function ov(e,t,n,r,i=()=>{},o="player",a,s=!1){const u=Sg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const p=await di(c),f=await vg(p,n,t,r,d,a,u.wonders,u.progressTokens);u.unidentifiedTokens+=f.unidentifiedTokens;const m=await Mg(f,o,s,t,l,p,n,r,d,u.guilds);Eg(u,m),i()}return Ig(u,t,n)}const Ct=1280,av=.3,hi=9;let bs=null;function pi(){return bs===null&&(bs=(async()=>{try{return(await fetch(`${je}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ft("pawn_ends_brut.onnx"):null}catch{return null}})()),bs}function sv(e){const t=Ct/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),o=i.getContext("2d",{willReadFrequently:!0}),a=qw(e.data,e.width,e.height,e.channels);o.putImageData(new ImageData(a,e.width,e.height),0,0);const u=new OffscreenCanvas(Ct,Ct).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Ct,Ct),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Ct,Ct),c=Ct*Ct,d=new Float32Array(3*c);for(let p=0;p<c;p+=1)d[p]=l[p*4]/255,d[c+p]=l[p*4+1]/255,d[2*c+p]=l[p*4+2]/255;return{tensor:d,r:t}}const Ye={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null};function uv(){Ye.appels=0,Ye.inferences=0,Ye.bandes=0,Ye.detail=[],Ye.premiereGagne=null}function Tg(){ct.set("_pion.onnx",`appels=${Ye.appels} inferences=${Ye.inferences} bandes=${Ye.bandes} premiereGagne=${Ye.premiereGagne??"n/a"} | ${Ye.detail.join(" ")}`)}async function lv(e,t){Ye.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>sv(t)),o=(await e.run({[e.inputNames[0]]:new Be("float32",n,[1,3,Ct,Ct])}))[e.outputNames[0]],a=o.data,s=o.dims[2]??0,u=(o.dims[1]??4)-4;return at("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let d=0;d<u;d+=1){const p=(4+d)*s;let f=-1,m=av;for(let y=0;y<s;y+=1){const w=a[p+y];w>=m&&(m=w,f=y)}if(f>=0){const y=(a[f]+a[2*s+f])/2/r,w=(a[s+f]+a[3*s+f])/2/r;c.set(d,{conf:m,cx:y,cy:w})}}return c})}async function xs(e,t,n){const r=Ye.inferences,i=`a${Ye.appels}`;Ye.appels+=1;const o=await et("pion: UNE passe (les 4 rotations)",()=>cv(e,t,n));return Ye.detail.push(`${i}:${Ye.inferences-r}inf conf=${o===null?"rien":o.confidence.toFixed(2)}`),Tg(),o}async function cv(e,t,n){let r=null;const i=1.8;for(const x of n??[0,1,2,3]){const M=x===0?t:at("pion: rotation de l'image",()=>jt(t,x)),v=await lv(e,M);if(v.has(0)&&v.has(1)&&v.has(2)){const E=v.get(0).conf+v.get(1).conf+v.get(2).conf;if((r===null||E>r.score)&&(r={score:E,det:v,k:x}),E>=i)break}}if(r===null)return null;const o=r.det.get(0),a=r.det.get(1),s=r.det.get(2),u=s.cx-a.cx,l=s.cy-a.cy,c=(a.cx+s.cx)/2,d=(a.cy+s.cy)/2,p=u*u+l*l;if(p<=0)return null;const f=((o.cx-c)*u+(o.cy-d)*l)/p*(2*hi),m=Math.min(hi,Math.max(-hi,st(f))),y=Math.min(o.conf,a.conf,s.conf),w=(x,M)=>{const v=r.k%4;return v===0?[x,M]:v===1?[M,t.height-1-x]:v===2?[t.width-1-x,t.height-1-M]:[t.width-1-M,x]},_=[a,s].map(x=>{const[M,v]=w(x.cx,x.cy);return[st(M),st(v)]});return{position:m,confidence:Math.round(y*1e4)/1e4,ends:_,k:r.k}}async function kg(e,t,n){let r=null,i=null;for(const o of n){const a=Xw(t.width,t.height,o);if(a===null)continue;const s=ln(t,a.x,a.y,a.width,a.height);if(s.width===0||s.height===0)continue;Ye.bandes+=1;const u=await xs(e,s,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Ye.premiereGagne===null?Ye.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Ye.premiereGagne=!1),Tg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+a.x,c+a.y])})}return r}function Cg(){const e=[ts,rs,os,us,ls,ds,ps,li,ci,ys,_s,pi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function dv(e,t){Cg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const a=(f,m=0)=>{t(f,i>0?Math.min(.99,(o+m)/i):void 0)},s=()=>{o+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await ov(m,f,n,a,s))}let u=null,l=null;if(e.both!==void 0){const f={},m=await di(e.both),y=await vg(m,n,"both",a,"both photo 1/1",f,[],[]),w=async(M,v)=>{const E=Sg();return E.unidentifiedTokens+=y.unidentifiedTokens,Eg(E,await Mg(y,M,!0,v,1,m,n,a,`${v} photo 1/1`,E.guilds)),s(),Ig(E,v,n)},_={player:await w("player","left"),opponent:await w("opponent","right")};if(a("military pawn…",.95),f.image!==void 0)try{const M=await pi();M!==null&&(f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await kg(M,f.image,f.bandBoxes)),u===null&&(u=await xs(M,f.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=t_(u.ends,f.hulls??[],u.position));const x=l!==null&&!l.ambiguous?n_(l):null;x!==null?(r.left=_[x.left],r.right=_[x.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=_.player,r.right=_.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(_=>_.id),m[y]=w.progressTokens.map(_=>_.id))}for(const y of[...Wx(f),...qx(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let c={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const f=await di(e.board),m=await pi();if(m!==null){let y=await xs(m,f);if(y===null){const w=await ci();if(w!==null){const _=await wt("banner",f),x=Vr(_.rows,_.params,nt.banner.conf),M=await yg(w,f,x);y=await kg(m,f,M)}}y!==null&&(c={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!c.found){const f=_=>{var x,M;return Number(((M=(x=_==null?void 0:_.cardCounts)==null?void 0:x.byFamily)==null?void 0:M.military)??0)},m=f(r.left),y=f(r.right),w=Math.abs(m-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${m} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const d=c.conflictPawnPosition,p=Math.abs(d)>=hi?{type:"military",winner:d>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(o,a)=>{f$(o);const s=g$()?"Initialisation des modèles de vision…":Ww(o);self.postMessage({id:t,progress:s,...a!==void 0?{fraction:a}:{},...o!==r?{perfPartiel:{providers:lg(),etapes:ug(),etapeCourante:s}}:{}}),r=o};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){Cg(),await Promise.allSettled([ts(),rs(),os(),us(),ls(),ds(),ps(),li(),ci(),ys(),_s(),pi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),p$(),b$();const o=performance.now(),a=n==="classify"?await rv(e.data.file):await dv(e.data.payload,i);self.postMessage({id:t,ok:!0,result:a,perf:{etapes:ug(),providers:lg(),runtime:m$(),inference:_$(),famillesJs:Dw(),inferenceParEtape:w$(),totalMs:Math.round(performance.now()-o)}})}catch(o){self.postMessage({id:t,ok:!1,error:String(o)})}})()}})();
