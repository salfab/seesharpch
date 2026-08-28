var xM=Object.defineProperty;var $M=(qt,Vt,Rn)=>Vt in qt?xM(qt,Vt,{enumerable:!0,configurable:!0,writable:!0,value:Rn}):qt[Vt]=Rn;var My=(qt,Vt,Rn)=>$M(qt,typeof Vt!="symbol"?Vt+"":Vt,Rn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Rn=Object.getOwnPropertyNames,Ey=Object.prototype.hasOwnProperty,Ty=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ie=(e,t)=>()=>(e&&(t=e(e=0)),t),On=(e,t)=>{for(var n in t)qt(e,n,{get:t[n],enumerable:!0})},ky=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Rn(t))!Ey.call(e,i)&&i!==n&&qt(e,i,{get:()=>t[i],enumerable:!(r=Vt(t,i))||r.enumerable});return e},Yn=e=>ky(qt({},"__esModule",{value:!0}),e),Xn,nn,Nn,Ka,Ya,Xa=ie(()=>{Xn=new Map,nn=[],Nn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Xn.get(e);if(r===void 0)Xn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=nn.indexOf(e);i!==-1&&nn.splice(i,1);for(let s=0;s<nn.length;s++)if(Xn.get(nn[s]).priority<=n){nn.splice(s,0,e);return}nn.push(e)}return}throw new TypeError("not a valid backend")},Ka=async e=>{let t=Xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ya=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?nn:n,i,s=[],o=new Set;for(let u of r){let l=await Ka(u);typeof l=="string"?s.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of s)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let a=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?a:Reflect.get(u,l)})]}}),Cy=ie(()=>{Xa()}),Qa,Ay=ie(()=>{Qa="1.27.0"}),Ei,Ze,Za=ie(()=>{Ay(),Ei="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Qa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ei=e}},get logLevel(){return Ei}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),ze,Ry=ie(()=>{Za(),ze=Ze}),Ja,eu,Oy=ie(()=>{Ja=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",a=t==null?void 0:t.norm,u,l;a===void 0||a.mean===void 0?u=[255,255,255,255]:typeof a.mean=="number"?u=[a.mean,a.mean,a.mean,a.mean]:(u=[a.mean[0],a.mean[1],a.mean[2],0],a.mean[3]!==void 0&&(u[3]=a.mean[3])),a===void 0||a.bias===void 0?l=[0,0,0,0]:typeof a.bias=="number"?l=[a.bias,a.bias,a.bias,a.bias]:(l=[a.bias[0],a.bias[1],a.bias[2],0],a.bias[3]!==void 0&&(l[3]=a.bias[3]));let c=s*i,d=0,p=c,f=c*2,m=-1;o==="RGBA"?(d=0,p=c,f=c*2,m=c*3):o==="RGB"?(d=0,p=c,f=c*2):o==="RBG"&&(d=0,f=c,p=c*2);for(let y=0;y<s;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},eu=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,s,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],o=e.dims[3]):(i=e.dims[3],s=e.dims[2],o=e.dims[1]);let a=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=s*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=d,M=d*2,v=-1;a==="RGBA"?(b=0,x=d,M=d*2,v=d*3):a==="RGB"?(b=0,x=d,M=d*2):a==="RBG"&&(b=0,M=d,x=d*2),r=n.createImageData(i,s);for(let I=0;I<s*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-c[0])*l[0],r.data[m]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[M++]-c[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),$r,tu,nu,ru,iu,ou,Ny=ie(()=>{ki(),$r=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},s,o;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let a=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;a==="RGB"&&(d=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,p+=d,m+=d,f+=d,y+=d)c[w++]=(e[p]+o[0])/s[0],c[b++]=(e[f]+o[1])/s[1],c[x++]=(e[m]+o[2])/s[2],M!==-1&&y!==-1&&(c[M++]=(e[y]+o[3])/s[3]);return u==="RGBA"?new dt("float32",c,[1,4,n,r]):new dt("float32",c,[1,3,n,r])},tu=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",o,a=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(a=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");a.tensorFormat="RGBA",a.height=p,a.width=f}else a.tensorFormat="RGBA",a.height=p,a.width=f;d.drawImage(e,0,0),o=d.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(a=t),a.format="RGBA",a.height=c,a.width=d,t!==void 0){let p=u();p.width=d,p.height=c;let f=l(p);if(f!=null)f.putImageData(e,0,0),o=f.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;return d.drawImage(e,0,0,f,p),o=d.getImageData(0,0,f,p).data,a.height=p,a.width=f,$r(o,a)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,d)=>{let p=u(),f=l(p);if(!e||!f)return d();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);a.height=p.height,a.width=p.width,c($r(y.data,a))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return $r(o,a);throw new Error("Input data provided is not supported - aborted tensor creation")},nu=(e,t)=>{let{width:n,height:r,download:i,dispose:s}=t,o=[1,r,n,4];return new dt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:s})},ru=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new dt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:s})},iu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new dt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:s})},ou=(e,t,n)=>new dt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),fn,Qn,Ti,su,zy=ie(()=>{fn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ti=!1,su=()=>{if(!Ti){Ti=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(fn.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(fn.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(fn.set("float16",n),Qn.set(n,"float16")):fn.set("float16",Uint16Array)}}}),au,uu,By=ie(()=>{ki(),au=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},uu=(e,t)=>{switch(e.location){case"cpu":return new dt(e.type,e.data,t);case"cpu-pinned":return new dt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new dt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new dt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new dt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dt,ki=ie(()=>{Oy(),Ny(),zy(),By(),dt=class{constructor(e,t,n){su();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=fn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,a;if(typeof e=="string")if(r=e,a=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=fn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(a=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(a===void 0)a=[o.length];else if(!Array.isArray(a))throw new TypeError("A tensor's dims must be a number array");i=a,this.cpuData=o,this.dataLocation="cpu"}let s=au(i);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=s}static async fromImage(e,t){return tu(e,t)}static fromTexture(e,t){return nu(e,t)}static fromGpuBuffer(e,t){return ru(e,t)}static fromMLTensor(e,t){return iu(e,t)}static fromPinnedBuffer(e,t,n){return ou(e,t,n)}toDataURL(e){return Ja(this,e)}toImageData(e){return eu(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return uu(this,e)}}}),Be,lu=ie(()=>{ki(),Be=dt}),vr,Ci,zt,$t,mn,gn,cu=ie(()=>{Za(),vr=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ci=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<n.length;s++){if(r&&!n[s].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[s].trim().split(" ")[1]}`;t&&(o+=`::${t}`),vr("CPU",o);return}n[s].includes("TRACE_FUNC")&&(r=!0)}},zt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ci("BEGIN",e)},$t=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ci("END",e)},mn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},gn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),du,Py=ie(()=>{Xa(),lu(),cu(),du=class Sy{constructor(t){this.handler=t}async run(t,n,r){zt(),mn("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Be||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Be)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Be)&&(l=!0,o=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let a=await this.handler.run(t,i,s),u={};for(let l in a)if(Object.hasOwnProperty.call(a,l)){let c=a[l];c instanceof Be?u[l]=c:u[l]=new Be(c.type,c.data,c.dims)}return gn("InferenceSession.run"),$t(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){zt(),mn("InferenceSession.create");let s,o={};if(typeof t=="string"){if(s=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[a,u]=await Ya(o),l=await a.createInferenceSessionHandler(s,u);return gn("InferenceSession.create"),$t(),new Sy(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),zn,Dy=ie(()=>{Py(),zn=du}),Uy=ie(()=>{}),Ly=ie(()=>{}),Fy=ie(()=>{}),Gy=ie(()=>{}),Wy={};On(Wy,{InferenceSession:()=>zn,TRACE:()=>vr,TRACE_EVENT_BEGIN:()=>mn,TRACE_EVENT_END:()=>gn,TRACE_FUNC_BEGIN:()=>zt,TRACE_FUNC_END:()=>$t,Tensor:()=>Be,env:()=>ze,registerBackend:()=>Nn});var mt=ie(()=>{Cy(),Ry(),Dy(),lu(),Uy(),Ly(),cu(),Fy(),Gy()}),Ai=ie(()=>{}),hu={};On(hu,{default:()=>pu});var Ri,Oi,pu,qy=ie(()=>{var e;Kf(),yn(),Ui(),Ri="ort-wasm-proxy-worker",Oi=((e=globalThis.self)==null?void 0:e.name)===Ri,Oi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Gi(r.wasm).then(()=>{es(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:s}=r;ts(s,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,s=Gr(i);postMessage({type:n,out:s});break}case"create":{let{model:i,options:s}=r;rs(i,s).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":is(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:s,inputs:o,outputIndices:a,options:u}=r;ss(i,s,o,a,new Array(a.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},us([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":as(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),pu=Oi?null:t=>new Worker(t??ht,{type:"module",name:Ri})}),fu={};On(fu,{default:()=>gu});async function mu(e={}){var $y,vy;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&(($y=self.name)==null?void 0:$y.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},E=await h(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let U=await Promise.all(C);if(U=U.filter(H=>H),0<U.length)throw Error(U.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,E,C,U)=>$.registerBuffer(_,E,C,U),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,E,C)=>$.createDownloader(_,E,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,E)=>{$.upload(_,E)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>$.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,C,U)=>$.registerMLTensor(_,E,C,U),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,E,C,U,H,ue)=>$.registerMLConstant(_,E,C,U,H,t.Xc,ue),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let h=g=>(...$)=>{let _=Gt;return $=g(...$),Gt!=_?new Promise((E,C)=>{za={resolve:E,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var a,u,l=(h,g)=>{throw g},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),a=async h=>{if(k(h))return new Promise(($,_)=>{var E=new XMLHttpRequest;E.open("GET",h,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?$(E.response):_(E.status)},E.onerror=_,E.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),v=x,I=M,T=!1,k=h=>h.startsWith("file://");function S(){qe.buffer!=N.buffer&&z()}if(i){let h=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let E=[];self.onmessage=C=>E.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of E)h(C);self.onmessage=h};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...U)=>{postMessage({Sc:"callHandler",wd:C,args:U})},C=="print"&&(v=t[C]),C=="printErr"&&(I=t[C]));qe=$.Od,z(),f=$.Pd,ne(),Si()}else if(_==="run"){(function(E){var C=(S(),F)[E+52>>>2>>>0];E=(S(),F)[E+56>>>2>>>0],R0(C,C-E),Ee(C)})($.Rc),La($.Rc,0,0,1,0,0),Ie(),Ra($.Rc),R||(I0(),R=!0);try{Fe($.Md,$.bd)}catch(E){if(E!="unwind")throw E}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&wi():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(E){throw E0(),E}};var R=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var N,X,W,V,O,F,j,Z,le,L,B,A=!1;function z(){var h=qe.buffer;t.HEAP8=N=new Int8Array(h),W=new Int16Array(h),t.HEAPU8=X=new Uint8Array(h),V=new Uint16Array(h),t.HEAP32=O=new Int32Array(h),t.HEAPU32=F=new Uint32Array(h),j=new Float32Array(h),Z=new Float64Array(h),le=new BigInt64Array(h),L=new BigUint64Array(h)}function D(){A=!0,i?b():tn.sb()}function P(h){throw I(h="Aborted("+h+")"),T=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function K(){return{a:{ma:B3,gb:z3,g:Rt,J:He,f:Sa,o:Ia,h:Ea,ha:mi,b:_v,T:xv,Ha:Ug,n:$v,$:Wg,Xa:qg,Da:Vg,Fa:Hg,Ya:jg,Va:Kg,Oa:Yg,Ua:Xg,ka:Qg,Ea:Zg,Ba:Jg,Wa:e0,Ca:t0,bb:vv,ea:Mv,wa:Sv,ua:Ev,da:kv,O:Cv,H:Av,va:Rv,_:Uv,xa:Lv,Ra:Fv,za:Wv,Ia:qv,sa:Vv,fa:Hv,Qa:Ra,_a:jv,R:Qv,r:n3,c:Ca,hb:r3,y:i3,M:o3,D:s3,l:a3,s:l0,ib:u3,I:l3,S:c3,j:d3,u:h3,q:p3,k:f3,La:m3,Ma:g3,Na:y3,Ja:p0,Ka:f0,ta:m0,db:b3,ab:x3,v:$3,aa:v3,ga:M3,$a:_3,W:S3,Za:I3,Aa:E3,F:w3,U:T3,la:vi,ya:C3,fb:k3,eb:A3,Sa:b0,Ta:_0,Ga:Q,V:x0,ja:$0,Pa:v0,ia:M0,kb:wM,na:pM,lb:yM,oa:hM,G:rM,e:L3,t:D3,w:P3,B:X3,mb:lM,K:eM,x:W3,pa:cM,Y:fM,ba:uM,nb:aM,ob:sM,P:Q3,qa:oM,pb:iM,N:tM,Z:dM,d:U3,A:G3,m:F3,jb:bM,p:V3,z:H3,C:q3,E:j3,L:Z3,qb:nM,Q:mM,ca:J3,X:gM,rb:Y3,ra:K3,i:O3,a:qe,cb:xe}}}async function ne(){function h(_,E){var C=tn=_.exports;_={};for(let[U,H]of Object.entries(C))typeof H=="function"?(C=Kv(H),_[U]=C):_[U]=H;return tn=_,tn=(function(){var U=tn,H=ce=>Se=>ce(Se)>>>0,ue=ce=>()=>ce()>>>0;return(U=Object.assign({},U)).tb=H(U.tb),U.Xb=ue(U.Xb),U.Zb=H(U.Zb),U.lc=H(U.lc),U.mc=ue(U.mc),U.qc=H(U.qc),U})(),fe.push(tn._b),S0=(_=tn).tb,I0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Mi=_.Xb,Wt=t._free=_.Yb,br=t._malloc=_.Zb,La=_.ac,E0=_.bc,T0=_.cc,k0=_.dc,Fa=_.ec,C0=_.fc,A0=_.gc,ke=_.hc,_r=_.ic,R0=_.jc,Ee=_.kc,Ga=_.lc,Te=_.mc,O0=_.nc,Wa=_.oc,N0=_.pc,z0=_.qc,B0=_.rc,qa=_.sc,P0=_.tc,D0=_.uc,U0=_.vc,L0=_.wc,F0=_.xc,G0=_.yc,W0=_.zc,q0=_.Ac,V0=_.Bc,H0=_.Cc,j0=_.Dc,K0=_.Ec,Y0=_.Fc,X0=_.Gc,Q0=_.Hc,Z0=_.Ic,J0=_.Jc,ey=_.Kc,ty=_.Lc,ny=_.Mc,ry=_.Nc,iy=_.Pc,oy=_.Qc,sy=_.$c,ay=_.ad,uy=_.fd,ly=_.jd,cy=_.kd,dy=_.ld,hy=_.md,py=_.nd,fy=_.od,my=_.pd,gy=_.qd,yy=_.vd,wy=_.Td,by=_.Ud,_y=_.Vd,xy=_.Wd,f=E,tn}var g,$=K();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(E,C)=>{_(h(E,C))})}):i?h(new WebAssembly.Instance(f,K()),f):(B??(B=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var E=B;if(!p&&!k(E))try{var C=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(U){I(`wasm streaming compile failed: ${U}`),I("falling back to ArrayBuffer instantiation")}return(async function(U,H){try{var ue=await(async function(ce){if(!p)try{var Se=await a(ce);return new Uint8Array(Se)}catch{}if(ce==B&&p)ce=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ce=u(ce)}return ce})(U);return await WebAssembly.instantiate(ue,H)}catch(ce){I(`failed to asynchronously prepare wasm: ${ce}`),P(ce)}})(E,_)})($),h(g.instance,g.module))}class J{constructor(g){My(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var de=h=>{h.terminate(),h.onmessage=()=>{}},$e=[],G=0,ee=null,re=h=>{te.length==0&&(Ue(),ye(te[0]));var g=te.pop();if(!g)return 6;ae.push(g),ge[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},oe=0,se=(h,g,...$)=>{var _,E=16*$.length,C=Te(),U=Ga(E),H=U>>>3;for(_ of $)typeof _=="bigint"?((S(),le)[H++>>>0]=1n,(S(),le)[H++>>>0]=_):((S(),le)[H++>>>0]=0n,(S(),Z)[H++>>>0]=_);return h=T0(h,0,E,U,g),Ee(C),h};function xe(h){if(i)return se(0,1,h);if(m=h,!(0<oe)){for(var g of ae)de(g);for(g of te)de(g);te=[],ae=[],ge={},T=!0}l(0,new J(h))}function _e(h){if(i)return se(1,0,h);Q(h)}var Q=h=>{if(m=h,i)throw _e(h),"unwind";xe(h)},te=[],ae=[],fe=[],ge={},we=h=>{var g=h.Rc;delete ge[g],te.push(h),ae.splice(ae.indexOf(h),1),h.Rc=0,k0(g)};function Ie(){fe.forEach(h=>h())}var ye=h=>new Promise(g=>{h.onmessage=E=>{var C=E.data;if(E=C.Sc,C.Zc&&C.Zc!=Mi()){var U=ge[C.Zc];U?U.postMessage(C,C.rd):I(`Internal error! Worker sent a message "${E}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?wi():E==="spawnThread"?re(C):E==="cleanupThread"?yi(()=>{we(ge[C.Nd])}):E==="loaded"?(h.loaded=!0,g(h)):C.target==="setimmediate"?h.postMessage(C):E==="uncaughtException"?h.onerror(C.error):E==="callHandler"?t[C.wd](...C.args):E&&I(`worker sent an unknown command ${E}`)},h.onerror=E=>{throw I(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);h.postMessage({Sc:"load",xd:_,Od:qe,Pd:f})});function Ue(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});te.push(h)}var qe,Fe=(h,g)=>{oe=0,h=qa(h,g),0<oe?m=h:Fa(h)},Ge=[],it=0;function Rt(h){var g=new Ot(h>>>=0);return(S(),N)[g.Tc+12>>>0]==0&&(Xe(g,!0),it--),_t(g,!1),Ge.push(g),z0(h)}var lt=0,He=()=>{ke(0,0);var h=Ge.pop();O0(h.cd),lt=0};function Xe(h,g){g=g?1:0,(S(),N)[h.Tc+12>>>0]=g}function _t(h,g){g=g?1:0,(S(),N)[h.Tc+13>>>0]=g}class Ot{constructor(g){this.cd=g,this.Tc=g-24}}var Jt=h=>{var g=lt;if(!g)return _r(0),0;var $=new Ot(g);(S(),F)[$.Tc+16>>>2>>>0]=g;var _=(S(),F)[$.Tc+4>>>2>>>0];if(!_)return _r(0),g;for(var E of h){if(E===0||E===_)break;if(N0(E,_,$.Tc+16))return _r(E),g}return _r(_),g};function Sa(){return Jt([])}function Ia(h){return Jt([h>>>0])}function Ea(h,g,$,_){return Jt([h>>>0,g>>>0,$>>>0,_>>>0])}var mi=()=>{var h=Ge.pop();h||P("no exception to throw");var g=h.cd;throw(S(),N)[h.Tc+13>>>0]==0&&(Ge.push(h),_t(h,!0),Xe(h,!1),it++),Wa(g),lt=g};function _v(h,g,$){var _=new Ot(h>>>=0);throw g>>>=0,$>>>=0,(S(),F)[_.Tc+16>>>2>>>0]=0,(S(),F)[_.Tc+4>>>2>>>0]=g,(S(),F)[_.Tc+8>>>2>>>0]=$,Wa(h),it++,lt=h}var xv=()=>it;function Dg(h,g,$,_){return i?se(2,1,h,g,$,_):Ug(h,g,$,_)}function Ug(h,g,$,_){if(h>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?Dg(h,g,$,_):(h={Ld:$,Rc:h,bd:_,rd:E},i?(h.Sc="spawnThread",postMessage(h,E),0):re(h))}function $v(h){throw lt||(lt=h>>>0),lt}var Lg=globalThis.TextDecoder&&new TextDecoder,Fg=(h,g,$,_)=>{if($=g+$,_)return $;for(;h[g]&&!(g>=$);)++g;return g},Gg=(h,g=0,$,_)=>{if(16<($=Fg(h,g>>>=0,$,_))-g&&h.buffer&&Lg)return Lg.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(_="";g<$;){var E=h[g++];if(128&E){var C=63&h[g++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|C);else{var U=63&h[g++];65536>(E=(240&E)==224?(15&E)<<12|C<<6|U:(7&E)<<18|C<<12|U<<6|63&h[g++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},Ke=(h,g,$)=>(h>>>=0)?Gg((S(),X),h,g,$):"";function Wg(h,g,$){return i?se(3,1,h,g,$):0}function qg(h,g){if(i)return se(4,1,h,g)}function Vg(h,g){if(i)return se(5,1,h,g)}function Hg(h,g,$){if(i)return se(6,1,h,g,$)}function jg(h,g,$){return i?se(7,1,h,g,$):0}function Kg(h,g){if(i)return se(8,1,h,g)}function Yg(h,g,$){if(i)return se(9,1,h,g,$)}function Xg(h,g,$,_){if(i)return se(10,1,h,g,$,_)}function Qg(h,g,$,_){if(i)return se(11,1,h,g,$,_)}function Zg(h,g,$,_){if(i)return se(12,1,h,g,$,_)}function Jg(h){if(i)return se(13,1,h)}function e0(h,g){if(i)return se(14,1,h,g)}function t0(h,g,$){if(i)return se(15,1,h,g,$)}var vv=()=>P(""),Ft=h=>{h>>>=0;for(var g="";;){var $=(S(),X)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Ta={},ka={},Kn=class extends Error{constructor(h){super(h),this.name="BindingError"}};function en(h,g,$={}){return(function(_,E,C={}){var U=E.name;if(!_)throw new Kn(`type "${U}" must have a positive integer typeid pointer`);if(ka.hasOwnProperty(_)){if(C.yd)return;throw new Kn(`Cannot register type '${U}' twice`)}ka[_]=E,Ta.hasOwnProperty(_)&&(E=Ta[_],delete Ta[_],E.forEach(H=>H()))})(h,g,$)}var n0=(h,g,$)=>{switch(g){case 1:return $?_=>(S(),N)[_>>>0]:_=>(S(),X)[_>>>0];case 2:return $?_=>(S(),W)[_>>>1>>>0]:_=>(S(),V)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),F)[_>>>2>>>0];case 8:return $?_=>(S(),le)[_>>>3>>>0]:_=>(S(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function Mv(h,g,$,_,E){h>>>=0,$>>>=0,g=Ft(g>>>0);let C=U=>U;if(_=_===0n){let U=8*$;C=H=>BigInt.asUintN(U,H),E=C(E)}en(h,{name:g,Oc:C,Vc:(U,H)=>(typeof H=="number"&&(H=BigInt(H)),H),Uc:n0(g,$,!_),Wc:null})}function Sv(h,g,$,_){en(h>>>=0,{name:g=Ft(g>>>0),Oc:function(E){return!!E},Vc:function(E,C){return C?$:_},Uc:function(E){return this.Oc((S(),X)[E>>>0])},Wc:null})}var r0=[],Cn=[0,1,,1,null,1,!0,1,!1,1];function Ca(h){9<(h>>>=0)&&--Cn[h+1]===0&&(Cn[h]=void 0,r0.push(h))}var xt=h=>{if(!h)throw new Kn(`Cannot use deleted val. handle = ${h}`);return Cn[h]},Nt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=r0.pop()||Cn.length;return Cn[g]=h,Cn[g+1]=1,g}};function Aa(h){return this.Oc((S(),F)[h>>>2>>>0])}var Iv={name:"emscripten::val",Oc:h=>{var g=xt(h);return Ca(h),g},Vc:(h,g)=>Nt(g),Uc:Aa,Wc:null};function Ev(h){return en(h>>>0,Iv)}var Tv=(h,g)=>{switch(g){case 4:return function($){return this.Oc((S(),j)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Z)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function kv(h,g,$){$>>>=0,en(h>>>=0,{name:g=Ft(g>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:Tv(g,$),Wc:null})}function Cv(h,g,$,_,E){h>>>=0,$>>>=0,g=Ft(g>>>0);let C=H=>H;if(_===0){var U=32-8*$;C=H=>H<<U>>>U,E=C(E)}en(h,{name:g,Oc:C,Vc:(H,ue)=>ue,Uc:n0(g,$,_!==0),Wc:null})}function Av(h,g,$){function _(C){var U=(S(),F)[C>>>2>>>0];return C=(S(),F)[C+4>>>2>>>0],new E((S(),N).buffer,C,U)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];en(h>>>=0,{name:$=Ft($>>>0),Oc:_,Uc:_},{yd:!0})}var dn=(h,g,$)=>{var _=(S(),X);if(g>>>=0,0<$){var E=g;$=g+$-1;for(var C=0;C<h.length;++C){var U=h.codePointAt(C);if(127>=U){if(g>=$)break;_[g++>>>0]=U}else if(2047>=U){if(g+1>=$)break;_[g++>>>0]=192|U>>6,_[g++>>>0]=128|63&U}else if(65535>=U){if(g+2>=$)break;_[g++>>>0]=224|U>>12,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U}else{if(g+3>=$)break;_[g++>>>0]=240|U>>18,_[g++>>>0]=128|U>>12&63,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U,C++}}_[g>>>0]=0,h=g-E}else h=0;return h},gi=h=>{for(var g=0,$=0;$<h.length;++$){var _=h.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function Rv(h,g){en(h>>>=0,{name:g=Ft(g>>>0),Oc($){var _=(S(),F)[$>>>2>>>0];return _=Ke($+4,_,!0),Wt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Kn("Cannot pass non-string to std::string");var C=E?gi(_):_.length,U=br(4+C+1),H=U+4;return(S(),F)[U>>>2>>>0]=C,E?dn(_,H,C+1):(S(),X).set(_,H>>>0),$!==null&&$.push(Wt,U),U},Uc:Aa,Wc($){Wt($)}})}var i0=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ov=(h,g,$)=>{if(h>>>=1,16<(g=Fg((S(),V),h,g/2,$))-h&&i0)return i0.decode((S(),V).slice(h,g));for($="";h<g;++h){var _=(S(),V)[h>>>0];$+=String.fromCharCode(_)}return $},Nv=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*h.length?$/2:h.length;for(var E=0;E<$;++E){var C=h.charCodeAt(E);(S(),W)[g>>>1>>>0]=C,g+=2}return(S(),W)[g>>>1>>>0]=0,g-_},zv=h=>2*h.length,Bv=(h,g,$)=>{var _="";h>>>=2;for(var E=0;!(E>=g/4);E++){var C=(S(),F)[h+E>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},Pv=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var E=0;E<h.length;++E){var C=h.codePointAt(E);if(65535<C&&E++,(S(),O)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-_},Dv=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function Uv(h,g,$){if(h>>>=0,g>>>=0,$=Ft($>>>=0),g===2)var _=Ov,E=Nv,C=zv;else _=Bv,E=Pv,C=Dv;en(h,{name:$,Oc:U=>{var H=(S(),F)[U>>>2>>>0];return H=_(U+4,H*g,!0),Wt(U),H},Vc:(U,H)=>{if(typeof H!="string")throw new Kn(`Cannot pass non-string to C++ string type ${$}`);var ue=C(H),ce=br(4+ue+g);return(S(),F)[ce>>>2>>>0]=ue/g,E(H,ce+4,ue+g),U!==null&&U.push(Wt,ce),ce},Uc:Aa,Wc(U){Wt(U)}})}function Lv(h,g){en(h>>>=0,{zd:!0,name:g=Ft(g>>>0),Oc:()=>{},Vc:()=>{}})}function Fv(h){La(h>>>0,!r,1,!n,131072,!1),Ie()}var yi=h=>{if(!T)try{if(h(),!(0<oe))try{i?Mi()&&Fa(m):Q(m)}catch(g){g instanceof J||g=="unwind"||l(0,g)}}catch(g){g instanceof J||g=="unwind"||l(0,g)}},Gv=!Atomics.waitAsync||((vy=globalThis.navigator)==null?void 0:vy.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ra(h){h>>>=0,Gv||(Atomics.waitAsync((S(),O),h>>>2,h).value.then(wi),h+=128,Atomics.store((S(),O),h>>>2,1))}var wi=()=>yi(()=>{var h=Mi();h&&(Ra(h),A0())});function Wv(h,g){(h>>>=0)==g>>>0?setTimeout(wi):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=ge[h])&&h.postMessage({Sc:"checkMailbox"})}var Oa=[];function qv(h,g,$,_,E){for(g>>>=0,E>>>=0,Oa.length=0,$=E>>>3,_=E+_>>>3;$<_;){var C;C=(S(),le)[$++>>>0]?(S(),le)[$++>>>0]:(S(),Z)[$++>>>0],Oa.push(C)}return(g?Va[g]:N3[h])(...Oa)}var Vv=()=>{oe=0};function Hv(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):we(ge[h])}function jv(h){}var bi=h=>{try{h()}catch(g){P(g)}};function Kv(h){var g=(...$)=>{_i.push(h);try{return h(...$)}finally{T||(_i.pop(),Gt&&hn===1&&_i.length===0&&(hn=0,oe+=1,bi(by),typeof Fibers<"u"&&Fibers.Zd()))}};return a0.set(h,g),g}var hn=0,Gt=null,o0=0,_i=[],Na=new Map,s0=new Map,a0=new Map,Yv=0,za=null,Xv=[],u0=h=>(function(g){if(!T){if(hn===0){var $=!1,_=!1;g((E=0)=>{if(!T&&(o0=E,$=!0,_)){hn=2,bi(()=>_y(Gt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var C=(function(){var ue=(S(),O)[Gt+8>>>2>>>0];return ue=s0.get(ue),ue=a0.get(ue),--oe,ue()})()}catch(ue){C=ue,E=!0}var U=!1;if(!Gt){var H=za;H&&(za=null,(E?H.reject:H.resolve)(C),U=!0)}if(E&&!U)throw C}}),_=!0,$||(hn=1,Gt=(function(){var E=br(65548),C=E+12;if((S(),F)[E>>>2>>>0]=C,(S(),F)[E+4>>>2>>>0]=C+65536,C=_i[0],!Na.has(C)){var U=Yv++;Na.set(C,U),s0.set(U,C)}return C=Na.get(C),(S(),O)[E+8>>>2>>>0]=C,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),bi(()=>wy(Gt)))}else hn===2?(hn=0,bi(xy),Wt(Gt),Gt=null,Xv.forEach(yi)):P(`invalid state: ${hn}`);return o0}})(g=>{h().then(g)});function Qv(h){return h>>>=0,u0(async()=>{var g=await xt(h);return Nt(g)})}var Ba=[],Zv=h=>{var g=Ba.length;return Ba.push(h),g},Jv=(h,g)=>{for(var $=Array(h),_=0;_<h;++_){var E=_,C=(S(),F)[g+4*_>>>2>>>0],U=ka[C];if(U===void 0)throw h=`parameter ${_}`,C=S0(C),g=Ft(C),Wt(C),new Kn(`${h} has unknown type ${g}`);$[E]=U}return $},e3=(h,g,$)=>{var _=[];return h=h(_,$),_.length&&((S(),F)[g>>>2>>>0]=Nt(_)),h},t3={},xi=h=>{var g=t3[h];return g===void 0?Ft(h):g};function n3(h,g,$){var[_,...E]=Jv(h,g>>>0);g=_.Vc.bind(_);var C=E.map(ue=>ue.Uc.bind(ue));h--;var U={toValue:xt};switch(h=C.map((ue,ce)=>{var Se=`argFromPtr${ce}`;return U[Se]=ue,`${Se}(args${ce?"+"+8*ce:""})`}),$){case 0:var H="toValue(handle)";break;case 2:H="new (toValue(handle))";break;case 3:H="";break;case 1:U.getStringOrSymbol=xi,H="toValue(handle)[getStringOrSymbol(methodName)]"}return H+=`(${h})`,_.zd||(U.toReturnWire=g,U.emval_returnValue=e3,H=`return emval_returnValue(toReturnWire, destructorsRef, ${H})`),H=`return function (handle, methodName, destructorsRef, args) {
  ${H}
  }`,$=new Function(Object.keys(U),H)(...Object.values(U)),H=`methodCaller<(${E.map(ue=>ue.name)}) => ${_.name}>`,Zv(Object.defineProperty($,"name",{value:H}))}function r3(h,g){return g>>>=0,(h=xt(h>>>0))==xt(g)}function i3(h){return(h>>>=0)?(h=xi(h),Nt(globalThis[h])):Nt(globalThis)}function o3(h){return h=xi(h>>>0),Nt(t[h])}function s3(h,g){return g>>>=0,h=xt(h>>>0),g=xt(g),Nt(h[g])}function a3(h){9<(h>>>=0)&&(Cn[h+1]+=1)}function l0(h,g,$,_,E){return Ba[h>>>0](g>>>0,$>>>0,_>>>0,E>>>0)}function u3(h,g,$,_,E){return l0(h>>>0,g>>>0,$>>>0,_>>>0,E>>>0)}function l3(){return Nt([])}function c3(h){h=xt(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Nt(g)}function d3(h){return Nt(xi(h>>>0))}function h3(){return Nt({})}function p3(h){for(var g=xt(h>>>=0);g.length;){var $=g.pop();g.pop()($)}Ca(h)}function f3(h,g,$){g>>>=0,$>>>=0,h=xt(h>>>0),g=xt(g),$=xt($),h[g]=$}function m3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=h.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=h.getUTCHours(),(S(),O)[g+12>>>2>>>0]=h.getUTCDate(),(S(),O)[g+16>>>2>>>0]=h.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=h}var c0=h=>h%4==0&&(h%100!=0||h%400==0),d0=[0,31,60,91,121,152,182,213,244,274,305,335],h0=[0,31,59,90,120,151,181,212,243,273,304,334];function g3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getSeconds(),(S(),O)[g+4>>>2>>>0]=h.getMinutes(),(S(),O)[g+8>>>2>>>0]=h.getHours(),(S(),O)[g+12>>>2>>>0]=h.getDate(),(S(),O)[g+16>>>2>>>0]=h.getMonth(),(S(),O)[g+20>>>2>>>0]=h.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getDay();var $=(c0(h.getFullYear())?d0:h0)[h.getMonth()]+h.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var _=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=_&&h.getTimezoneOffset()==Math.min(_,$)),(S(),O)[g+32>>>2>>>0]=h}function y3(h){h>>>=0;var g=new Date((S(),O)[h+20>>>2>>>0]+1900,(S(),O)[h+16>>>2>>>0],(S(),O)[h+12>>>2>>>0],(S(),O)[h+8>>>2>>>0],(S(),O)[h+4>>>2>>>0],(S(),O)[h>>>2>>>0],0),$=(S(),O)[h+32>>>2>>>0],_=g.getTimezoneOffset(),E=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),U=Math.min(C,E);return 0>$?(S(),O)[h+32>>>2>>>0]=+(E!=C&&U==_):0<$!=(U==_)&&(E=Math.max(C,E),g.setTime(g.getTime()+6e4*((0<$?U:E)-_))),(S(),O)[h+24>>>2>>>0]=g.getDay(),$=(c0(g.getFullYear())?d0:h0)[g.getMonth()]+g.getDate()-1|0,(S(),O)[h+28>>>2>>>0]=$,(S(),O)[h>>>2>>>0]=g.getSeconds(),(S(),O)[h+4>>>2>>>0]=g.getMinutes(),(S(),O)[h+8>>>2>>>0]=g.getHours(),(S(),O)[h+12>>>2>>>0]=g.getDate(),(S(),O)[h+16>>>2>>>0]=g.getMonth(),(S(),O)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function p0(h,g,$,_,E,C,U){return i?se(16,1,h,g,$,_,E,C,U):-52}function f0(h,g,$,_,E,C){if(i)return se(17,1,h,g,$,_,E,C)}var wr={},w3=()=>performance.timeOrigin+performance.now();function m0(h,g){if(i)return se(18,1,h,g);if(wr[h]&&(clearTimeout(wr[h].id),delete wr[h]),!g)return 0;var $=setTimeout(()=>{delete wr[h],yi(()=>C0(h,performance.timeOrigin+performance.now()))},g);return wr[h]={id:$,Yd:g},0}function b3(h,g,$,_){h>>>=0,g>>>=0,$>>>=0,_>>>=0;var E=new Date().getFullYear(),C=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var U=Math.max(C,E);(S(),F)[h>>>2>>>0]=60*U,(S(),O)[g>>>2>>>0]=+(C!=E),h=(g=H=>{var ue=Math.abs(H);return`UTC${0<=H?"-":"+"}${String(Math.floor(ue/60)).padStart(2,"0")}${String(ue%60).padStart(2,"0")}`})(C),g=g(E),E<C?(dn(h,$,17),dn(g,_,17)):(dn(h,_,17),dn(g,$,17))}var _3=()=>Date.now();function x3(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(S(),le)[$>>>3>>>0]=BigInt(h),0):28}var Pa=[],g0=(h,g)=>{Pa.length=0;for(var $;$=(S(),X)[h++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Pa.push($==112?(S(),F)[g>>>2>>>0]:$==106?(S(),le)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),Z)[g>>>3>>>0]),g+=_?8:4}return Pa};function $3(h,g,$){return h>>>=0,g=g0(g>>>0,$>>>0),Va[h](...g)}function v3(h,g,$){return h>>>=0,g=g0(g>>>0,$>>>0),Va[h](...g)}var M3=()=>{};function S3(h,g){return I(Ke(h>>>0,g>>>0))}var I3=()=>{throw oe+=1,"unwind"};function E3(){return 4294901760}var T3=()=>navigator.hardwareConcurrency,An={},$i=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},y0=h=>{for(var g of h)(h=$i(g))&&(An[h]=g)};function k3(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),y0(h),An.gd=$i(h[3]),An.Jd=h,An.gd}function vi(h){if(!(h=An[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Wt(vi.hd??0),g=gi(h)+1;var $=br(g);return $&&dn(h,$,g),vi.hd=$,vi.hd}function C3(h){h>>>=0;var g=(S(),X).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,h+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(h,_)/65536))-qe.buffer.byteLength+65535)/65536|0;try{qe.grow(_),z();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function A3(h,g,$){if(h>>>=0,g>>>=0,An.gd==h)var _=An.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),y0(_);for(var E=3;_[E]&&$i(_[E])!=h;)++E;for(h=0;h<$&&_[h+E];++h)(S(),O)[g+4*h>>>2>>>0]=$i(_[h+E]);return h}var Da,Ua={},w0=()=>{var _;if(!Da){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Ua)Ua[h]===void 0?delete g[h]:g[h]=Ua[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);Da=$}return Da};function b0(h,g){if(i)return se(19,1,h,g);h>>>=0,g>>>=0;var $,_=0,E=0;for($ of w0()){var C=g+_;(S(),F)[h+E>>>2>>>0]=C,_+=dn($,C,1/0)+1,E+=4}return 0}function _0(h,g){if(i)return se(20,1,h,g);h>>>=0,g>>>=0;var $=w0();for(var _ of((S(),F)[h>>>2>>>0]=$.length,h=0,$))h+=gi(_)+1;return(S(),F)[g>>>2>>>0]=h,0}function x0(h){return i?se(21,1,h):52}function $0(h,g,$,_){return i?se(22,1,h,g,$,_):52}function v0(h,g,$,_){return i?se(23,1,h,g,$,_):70}var R3=[null,[],[]];function M0(h,g,$,_){if(i)return se(24,1,h,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var E=0,C=0;C<$;C++){var U=(S(),F)[g>>>2>>>0],H=(S(),F)[g+4>>>2>>>0];g+=8;for(var ue=0;ue<H;ue++){var ce=h,Se=(S(),X)[U+ue>>>0],Ae=R3[ce];Se===0||Se===10?((ce===1?v:I)(Gg(Ae)),Ae.length=0):Ae.push(Se)}E+=H}return(S(),F)[_>>>2>>>0]=E,0}function O3(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)Ue();$e.push(async()=>{var g=(async function(){if(!i)return Promise.all(te.map(ye))})();G++,await g,--G==0&&ee&&(g=ee,ee=null,g())})})(),i||(qe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),z()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=h=>Ee(h),t.stackAlloc=h=>Ga(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),N)[h>>>0]=g;break;case"i16":(S(),W)[h>>>1>>>0]=g;break;case"i32":(S(),O)[h>>>2>>>0]=g;break;case"i64":(S(),le)[h>>>3>>>0]=BigInt(g);break;case"float":(S(),j)[h>>>2>>>0]=g;break;case"double":(S(),Z)[h>>>3>>>0]=g;break;case"*":(S(),F)[h>>>2>>>0]=g;break;default:P(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),N)[h>>>0];case"i16":return(S(),W)[h>>>1>>>0];case"i32":return(S(),O)[h>>>2>>>0];case"i64":return(S(),le)[h>>>3>>>0];case"float":return(S(),j)[h>>>2>>>0];case"double":return(S(),Z)[h>>>3>>>0];case"*":return(S(),F)[h>>>2>>>0];default:P(`invalid type for getValue: ${g}`)}},t.UTF8ToString=Ke,t.stringToUTF8=dn,t.lengthBytesUTF8=gi;var S0,I0,Mi,Wt,br,La,E0,T0,k0,Fa,C0,A0,ke,_r,R0,Ee,Ga,Te,O0,Wa,N0,z0,B0,qa,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,oy,sy,ay,uy,ly,cy,dy,hy,py,fy,my,gy,yy,wy,by,_y,xy,tn,N3=[xe,_e,Dg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Qg,Zg,Jg,e0,t0,p0,f0,m0,b0,_0,x0,$0,v0,M0],Va={1003524:(h,g,$,_,E)=>{if(t===void 0||!t.Xc)return 1;if((h=Ke(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>h.byteLength)return 3;try{let C=h.subarray(g,g+$);switch(E){case 0:(S(),X).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(S(),X).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,_,E)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(h,g,$,_,E)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(h,g,$,_,E)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(h,g,$,_,E)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(h,g,$,_,E)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(h,g,$,_,E)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(h,g,$,_,E)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(h,g,$,_,E)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(h,g,$,_,E)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(h,g,$,_,E)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009173:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009306:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le,pn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,U],strides:[H],wIsConst:()=>!!(S(),N)[ce>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(pn)})},1009739:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[ue>>>0],outputPadding:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1010400:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le,pn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,U],strides:[H],wIsConst:()=>!!(S(),N)[ce>>>0],outputPadding:Se?Array.from((S(),O).subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),O).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(pn)})},1010833:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[ue>>>0],outputPadding:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],kernel_shape:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013758:(h,g,$,_,E)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:_,transB:E})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,_)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(h,g,$,_)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,_,E)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,_,E,C,U,H,ue,ce,Se)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Ke(E),cubicCoeffA:C,excludeOutside:U,extrapolationValue:H,keepAspectRatioPolicy:Ke(ue),mode:Ke(ce),nearestMode:Ke(Se)})},1015056:(h,g,$,_,E,C,U)=>{t.$b("Slice",h,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:Ke(g)})},1015734:(h,g,$,_,E)=>{t.$b("Pad",h,{mode:g,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(h,g,$,_,E,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(h,g,$,_,E,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:E?"NHWC":"NCHW"})},1016572:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:E?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:Ke(g)})},1016827:(h,g,$,_,E,C,U,H,ue)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C,qkvHiddenSizes:U?Array.from((S(),O).subarray(Number(H)>>>0,Number(H)+U>>>0)):[],pastPresentShareBuffer:!!ue})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le,pn,Ha)=>{t.$b("Conv",h,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(U)>>>0)):[],pads:H?Array.from((S(),O).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ce?Array.from((S(),O).subarray(Number(ce)>>>0,Number(Se)>>>0)):[],w_is_const:()=>!!(S(),N)[Number(Pe)>>>0],activation:Ke(Le),activation_params:pn?Array.from((S(),j).subarray(Number(pn)>>>0,Number(Ha)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,_,E,C,U,H,ue)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:_,softcap:E,doRotary:C,rotaryInterleaved:U,smoothSoftmax:H,localWindowSize:ue})},1018124:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018235:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018346:(h,g,$,_,E,C)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:_,bits:E,blockSize:C})},1018473:(h,g,$,_,E,C)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,_,E)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:E})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,_)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function z3(h,g,$){return u0(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function B3(){return typeof wasmOffsetConverter<"u"}function P3(h,g,$,_){var E=Te();try{return q0(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function D3(h,g,$){var _=Te();try{return L0(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;ke(1,0)}}function U3(h){var g=Te();try{P0(h)}catch($){if(Ee(g),$!==$+0)throw $;ke(1,0)}}function L3(h,g){var $=Te();try{return qa(h,g)}catch(_){if(Ee($),_!==_+0)throw _;ke(1,0)}}function F3(h,g,$){var _=Te();try{B0(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;ke(1,0)}}function G3(h,g){var $=Te();try{V0(h,g)}catch(_){if(Ee($),_!==_+0)throw _;ke(1,0)}}function W3(h,g,$,_,E,C,U){var H=Te();try{return G0(h,g,$,_,E,C,U)}catch(ue){if(Ee(H),ue!==ue+0)throw ue;ke(1,0)}}function q3(h,g,$,_,E,C){var U=Te();try{D0(h,g,$,_,E,C)}catch(H){if(Ee(U),H!==H+0)throw H;ke(1,0)}}function V3(h,g,$,_){var E=Te();try{W0(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function H3(h,g,$,_,E){var C=Te();try{U0(h,g,$,_,E)}catch(U){if(Ee(C),U!==U+0)throw U;ke(1,0)}}function j3(h,g,$,_,E,C,U){var H=Te();try{j0(h,g,$,_,E,C,U)}catch(ue){if(Ee(H),ue!==ue+0)throw ue;ke(1,0)}}function K3(h,g,$,_,E,C,U){var H=Te();try{K0(h,g,$,_,E,C,U)}catch(ue){if(Ee(H),ue!==ue+0)throw ue;ke(1,0)}}function Y3(h,g,$,_,E,C,U,H){var ue=Te();try{Z0(h,g,$,_,E,C,U,H)}catch(ce){if(Ee(ue),ce!==ce+0)throw ce;ke(1,0)}}function X3(h,g,$,_,E){var C=Te();try{return H0(h,g,$,_,E)}catch(U){if(Ee(C),U!==U+0)throw U;ke(1,0)}}function Q3(h,g,$){var _=Te();try{return J0(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;ke(1,0)}}function Z3(h,g,$,_,E,C,U,H){var ue=Te();try{ey(h,g,$,_,E,C,U,H)}catch(ce){if(Ee(ue),ce!==ce+0)throw ce;ke(1,0)}}function J3(h,g,$,_,E,C,U,H,ue,ce,Se,Ae){var Pe=Te();try{Y0(h,g,$,_,E,C,U,H,ue,ce,Se,Ae)}catch(Le){if(Ee(Pe),Le!==Le+0)throw Le;ke(1,0)}}function eM(h,g,$,_,E,C){var U=Te();try{return X0(h,g,$,_,E,C)}catch(H){if(Ee(U),H!==H+0)throw H;ke(1,0)}}function tM(h,g,$){var _=Te();try{return ty(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;return ke(1,0),0n}}function nM(h,g,$,_,E,C,U,H,ue){var ce=Te();try{F0(h,g,$,_,E,C,U,H,ue)}catch(Se){if(Ee(ce),Se!==Se+0)throw Se;ke(1,0)}}function rM(h){var g=Te();try{return ny(h)}catch($){if(Ee(g),$!==$+0)throw $;ke(1,0)}}function iM(h,g){var $=Te();try{return yy(h,g)}catch(_){if(Ee($),_!==_+0)throw _;return ke(1,0),0n}}function oM(h){var g=Te();try{return ry(h)}catch($){if(Ee(g),$!==$+0)throw $;return ke(1,0),0n}}function sM(h,g,$,_){var E=Te();try{return ly(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function aM(h,g,$,_,E){var C=Te();try{return cy(h,g,$,_,E)}catch(U){if(Ee(C),U!==U+0)throw U;ke(1,0)}}function uM(h,g,$,_,E,C){var U=Te();try{return dy(h,g,$,_,E,C)}catch(H){if(Ee(U),H!==H+0)throw H;ke(1,0)}}function lM(h,g,$,_,E,C){var U=Te();try{return hy(h,g,$,_,E,C)}catch(H){if(Ee(U),H!==H+0)throw H;ke(1,0)}}function cM(h,g,$,_,E,C,U,H){var ue=Te();try{return Q0(h,g,$,_,E,C,U,H)}catch(ce){if(Ee(ue),ce!==ce+0)throw ce;ke(1,0)}}function dM(h,g,$,_,E){var C=Te();try{return py(h,g,$,_,E)}catch(U){if(Ee(C),U!==U+0)throw U;return ke(1,0),0n}}function hM(h,g,$,_){var E=Te();try{return fy(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function pM(h,g,$,_){var E=Te();try{return my(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function fM(h,g,$,_,E,C,U,H,ue,ce,Se,Ae){var Pe=Te();try{return gy(h,g,$,_,E,C,U,H,ue,ce,Se,Ae)}catch(Le){if(Ee(Pe),Le!==Le+0)throw Le;ke(1,0)}}function mM(h,g,$,_,E,C,U,H,ue,ce,Se){var Ae=Te();try{ay(h,g,$,_,E,C,U,H,ue,ce,Se)}catch(Pe){if(Ee(Ae),Pe!==Pe+0)throw Pe;ke(1,0)}}function gM(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le,pn,Ha){var _M=Te();try{uy(h,g,$,_,E,C,U,H,ue,ce,Se,Ae,Pe,Le,pn,Ha)}catch(ja){if(Ee(_M),ja!==ja+0)throw ja;ke(1,0)}}function yM(h,g,$){var _=Te();try{return iy(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;ke(1,0)}}function wM(h,g,$){var _=Te();try{return oy(h,g,$)}catch(E){if(Ee(_),E!==E+0)throw E;ke(1,0)}}function bM(h,g,$,_){var E=Te();try{sy(h,g,$,_)}catch(C){if(Ee(E),C!==C+0)throw C;ke(1,0)}}function Si(){if(0<G)ee=Si;else if(i)y==null||y(t),D();else{for(var h=$e;0<h.length;)h.shift()(t);0<G?ee=Si:(t.calledRun=!0,T||(D(),y==null||y(t)))}}return i||(tn=await ne(),Si()),t.PTR_SIZE=4,A?t:new Promise((h,g)=>{y=h,w=g})}var gu,yu,Vy=ie(()=>{var e,t;gu=mu,yu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),yu&&mu()}),Ni,zi,wu,ht,bu,Mr,_u,xu,Bi,$u,Pi,vu,Di,Mu,Ui=ie(()=>{Ai(),Ni=typeof location>"u"?void 0:location.origin,zi=self.location.href>"file:"&&self.location.href<"file;",wu=()=>{{if(zi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ni).href}return self.location.href}},ht=wu(),bu=()=>{if(ht&&!ht.startsWith("blob:"))return ht.substring(0,ht.lastIndexOf("/")+1)},Mr=(e,t)=>{try{let n=t??ht;return(n?new URL(e,n):new URL(e)).origin===Ni}catch{return!1}},_u=(e,t)=>{let n=t??ht;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},xu=(e,t)=>`${t??"./"}${e}`,Bi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$u=async e=>(await import(e)).default,Pi=(qy(),Yn(hu)).default,vu=async()=>{if(!ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Mr(ht))return[void 0,Pi()];let e=await Bi(ht);return[e,Pi(e)]},Di=(Vy(),Yn(fu)).default,Mu=async(e,t,n,r)=>{let i=Di&&!(e||t);if(i)if(ht)i=Mr(ht)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Di];{let s="ort-wasm-simd-threaded.jsep.mjs",o=e??_u(s,t),a=n&&o&&!Mr(o,t),u=a?await Bi(o):o??xu(s,t);return[a?u:void 0,await $u(u)]}}}),Li,Sr,Zn,Fi,Su,Iu,Eu,Gi,De,yn=ie(()=>{Ui(),Sr=!1,Zn=!1,Fi=!1,Su=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Eu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Gi=async e=>{if(Sr)return Promise.resolve();if(Zn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Fi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Eu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Iu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Su();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,a=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,p]=await Mu(a,s,n>1,!!c||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||s)b.locateFile=x=>l??s+x;else if(a&&a.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,a).href;else if(d){let x=bu();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{Zn=!1,Sr=!0,Li=x,y(),d&&URL.revokeObjectURL(d)},x=>{Zn=!1,Fi=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(Sr&&Li)return Li;throw new Error("WebAssembly is not initialized yet.")}}),vt,Ir,Ne,Wi=ie(()=>{yn(),vt=(e,t)=>{let n=De(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Ir=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,s])=>{let o=t?t+i:i;if(typeof s=="object")Ir(s,o+".",n,r);else if(typeof s=="string"||typeof s=="number")r(o,s.toString());else if(typeof s=="boolean")r(o,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Ne=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let s=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),a=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(n)}}}),Tu,Hy=ie(()=>{yn(),Wi(),Tu=e=>{let t=De(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=vt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ir(e.extra,"",new WeakSet,(o,a)=>{let u=vt(o,r),l=vt(a,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${o} - ${a}.`)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),s}}}),ku,Cu,Au,wn,Ru,Ou,jy=ie(()=>{yn(),Wi(),ku=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Cu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Au=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},wn=(e,t,n,r)=>{let i=vt(t,r),s=vt(n,r);De()._OrtAddSessionConfigEntry(e,i,s)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},Ru=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let s=typeof i=="string"?i:i.name,o=[];switch(s){case"webnn":if(s="WEBNN",wn(e,"session.disable_quant_qdq","1",n),wn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&wn(e,"deviceType",d,n)}break;case"webgpu":if(s="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);wn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let a=vt(s,n),u=o.length,l=0,c=0;if(u>0){l=De()._malloc(u*De().PTR_SIZE),n.push(l),c=De()._malloc(u*De().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)De().setValue(l+d*De().PTR_SIZE,o[d][0],"*"),De().setValue(c+d*De().PTR_SIZE,o[d][1],"*")}await De()._OrtAppendExecutionProvider(e,a,l,c,u)!==0&&Ne(`Can't append execution provider: ${s}.`)}},Ou=async e=>{let t=De(),n=0,r=[],i=e||{};Au(i);try{let s=ku(i.graphOptimizationLevel??"all"),o=Cu(i.executionMode??"sequential"),a=typeof i.logId=="string"?vt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?vt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,a,u,l,c),n===0&&Ne("Can't create session options."),i.executionProviders&&await Ru(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);wn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=vt(d,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Ne(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Ir(i.extra,"",new WeakSet,(d,p)=>{wn(n,d,p,r)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(o=>t._free(o)),s}}}),bn,Ht,_n,Er,Tr,qi,Vi,Hi,be=ie(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ht=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return n>0?Math.ceil(r*n):void 0},Er=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},qi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Hi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ji,Nu=ie(()=>{Ai(),ji=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(a){if(a instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw a}let o=0;for(;;){let{done:a,value:u}=await i.read();if(a)break;let l=u.byteLength;new Uint8Array(s,o,l).set(u),o+=l}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zu,Bu,Pu,Du,Ki,Uu,Ce,jt=ie(()=>{be(),zu=["V","I","W","E","F"],Bu=(e,t)=>{console.log(`[${zu[e]},${new Date().toISOString()}]${t}`)},Ki=(e,t)=>{Pu=e,Du=t},Uu=(e,t)=>{let n=Tr(e),r=Tr(Pu);n>=r&&Bu(n,typeof t=="function"?t():t)},Ce=(...e)=>{Du&&Uu(...e)}}),Lu,Bn,q,kr,Fu,Gu,Wu,ve=ie(()=>{Lu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),o=new Array(s);if(n){if(r<2||i<2)return;let a=Lu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(a===void 0)return;[o[s-2],o[s-1]]=a}for(let a=n?3:1;a<=s;a++){let u=r-a<0?1:e[r-a],l=i-a<0?1:t[i-a];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)o[s-a]=Math.max(u,l);else{if(c>1)return;o[s-a]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class Ii{static size(t){return Ii.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),s=r-1;for(;s>=0;){if(t[s]%n===0){i[s]=t[s]/n;break}if(n%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,n/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let s=n;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,s)=>i+n[s]+n[s+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},kr=class xr{static adjustPoolAttributes(t,n,r,i,s,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let a=0;a<n.length-2;a++)a>=r.length?r.push(n[a+2]):r[a]=n[a+2];for(let a=0;a<r.length;a++)if(a<i.length){if(i[a]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let a=0;a<r.length;a++)if(a<s.length){if(s[a]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let a=0;a<r.length*2;a++)if(a<o.length){if(o[a]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let a=0;a<r.length;a++){if(r[a]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[a]>=r[a]||o[a+r.length]>=r[a])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,s,o,a){if(a){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)xr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],s,u,u+t.length-2,a)}}static computePoolOutputShape(t,n,r,i,s,o,a){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return xr.computeShapeHelper(t,n,u,r,i,s,o,a),u}static computeConvOutputShape(t,n,r,i,s,o,a){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return xr.computeShapeHelper(!1,t,u,r,i,s,o,a),u}static computeShapeHelper(t,n,r,i,s,o,a,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(xr.adjustPadAndReturnShape(n[l+2],i[l],s[l],o[l],a,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,s,o,a,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[o]=0,s[a]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return s[o]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),s[a]=c-s[o],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[o]+s[a]-l)/n+1)}},Fu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,o,a;t?(s=e[1],o=e[0]):(s=e[0],o=e[1]);let u=-1;if(r?(a=n[0],u=1):(a=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(s<=0||a<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Bn.isValidBroadcast(i,[s,a]))throw new Error("gemm: invalid bias shape for broadcast");return[s,a,o]}},Gu=-34028234663852886e22,Wu=34028234663852886e22}),Yi,qu=ie(()=>{be(),Yi=(e,t)=>new(Er(t))(e)}),Xi,Qi,Zi,Vu,Ji,Hu,eo,to,no,ju,Ku,Ky=ie(()=>{be(),jt(),Xi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qi=(e,t)=>{if(t==="int32")return e;let n=Xi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,s=new(Er(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let a=0;a<i;a++){let u=s[a];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[a]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(a=>a>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Zi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Vu=1,Ji=()=>Vu++,Hu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),eo=(e,t)=>{let n=Xi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},to=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:s,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=s,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return eo(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Zi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},no=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),o;if(!(s!=null&&s.input.dataTypes.includes(t))){if(o=Hu.get(t),!o||(s==null?void 0:s.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==eo(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Zi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ju=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ji();return this.tensorTrackersById.set(e,new no(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),s=Ji(),o=new to({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(s,new no(this,o)),this.externalTensors.add(o),s}async getCachedTensor(e,t,n,r,i,s,o){let a=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(a,t,n)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await a.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:s});return new to({sessionId:e,context:a,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ku=(...e)=>new ju(...e)}),Jn,Yu,Xu,Yy=ie(()=>{be(),yn(),qu(),Ky(),jt(),Jn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Yu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,s)=>i===r[s]&&e[i]===t[i])},Xu=class{constructor(e){this.tensorManager=Ku(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ki(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Yu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let s=Jn.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,i)}async createTemporaryTensor(e,t,n){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Jn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Yi(n,t)}}registerMLTensor(e,t,n,r){let i=Jn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(e,t,i,r);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,n,r,i,s,o=!1){if(!s)throw new Error("External mounted files are not available.");let a=e;e.startsWith("./")&&(a=e.substring(2));let u=s.get(a);if(!u)throw new Error(`File with name ${a} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(o){let d=Qi(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Jn.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ro=ie(()=>{}),io,Cr,Ar,Qu,Zu,oo,so,Ju,el,Xy=ie(()=>{jt(),ro(),io=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cr=[],Ar=e=>Math.ceil(Number(e)/16)*16,Qu=e=>{for(let t=0;t<Cr.length;t++){let n=Cr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Zu=1,oo=()=>Zu++,so=async(e,t,n,r)=>{let i=Ar(n),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let a=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(a,0,n)),u}else return new Uint8Array(a.slice(0,n))}finally{s.destroy()}},Ju=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of io)Cr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,s=Ar(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let a=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=a.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),a.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(a,0,o.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),a.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ar(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=oo();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Qu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let a=(i?this.freeBuffers:this.freeUniformBuffers).get(n);a?a.length>0?r=a.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:oo(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await so(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=io.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},el=(...e)=>new Ju(...e)}),tl,Oe,Ve=ie(()=>{tl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new tl(e)}),Pn,Rr,Qe,rt,me,We,ao,Dn,rn,pe,er,Y,he,nl,uo,rl,il,Me=ie(()=>{be(),ve(),Pn=64,Rr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let n=Rr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=Rr(e,t);return typeof n=="string"?n:n[1]},me=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},We=e=>e%4===0?4:e%2===0?2:1,ao=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Dn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,rn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,er=(e,t,n,r,i)=>{let s=typeof n=="number",o=s?n:n.length,a=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Rr(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:c,storage:d,tensor:t},f=A=>typeof A=="string"?A:`${A}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let A=0;A<o-1;A++)x+=`
    let dim${A} = current / ${pe(b,A,o)};
    let rest${A} = current % ${pe(b,A,o)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=A=>(m.offsetToIndices=!0,o<2?A:`o2i_${e}(${A})`),I=[];if(o>=2)for(let A=o-1;A>=0;A--)I.push(`${pe(b,A,o)} * (indices[${A}])`);let T=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,k=A=>(m.indicesToOffset=!0,o<2?A:`i2o_${e}(${A})`),S=(...A)=>o===0?"0u":`${p.indices}(${A.map(f).join(",")})`,R=(A,z)=>o<2?`${A}`:`${pe(A,z,o)}`,N=(A,z,D)=>o<2?`${A}=${D};`:`${pe(A,z,o)}=${D};`,X={},W=(A,z)=>{m.broadcastedIndicesToOffset=!0;let D=`${z.name}broadcastedIndicesTo${e}Offset`;if(D in X)return`${D}(${A})`;let P=[];for(let K=o-1;K>=0;K--){let ne=z.indicesGet("outputIndices",K+z.rank-o);P.push(`${R(b,K)} * (${ne} % ${R(w,K)})`)}return X[D]=`fn ${D}(outputIndices: ${z.type.indices}) -> u32 {
             return ${P.length>0?P.join("+"):"0u"};
           }`,`${D}(${A})`},V=(A,z)=>(()=>{if(p.storage===p.value)return`${e}[${A}]=${z};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${z}), select(0u, 0xFFFFFFFFu, ${z} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${z}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${z}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=A=>(()=>{if(p.storage===p.value)return`${e}[${A}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${A}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${A}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),F=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${c} {
    return ${O(`i2o_${e}(indices)`)};
  }`,j=o<2?"":(()=>{let A=a.map(D=>`d${D}: u32`).join(", "),z=a.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${A}) -> ${c} {
    return get_${e}ByIndices(${S(z)});
  }`})(),Z=(...A)=>{if(A.length!==o)throw new Error(`indices length must be ${o}`);let z=A.map(f).join(",");return o===0?O("0u"):o===1?O(z[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${z})`)},le=A=>o<2?O(A):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,B=o<2?"":(()=>{let A=a.map(D=>`d${D}: u32`).join(", "),z=a.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${A}, value: ${c}) {
    set_${e}ByIndices(${S(z)}, value);
  }`})();return{impl:()=>{let A=[],z=!1;return m.offsetToIndices&&(A.push(M),z=!0),m.indicesToOffset&&(A.push(T),z=!0),m.broadcastedIndicesToOffset&&(Object.values(X).forEach(D=>A.push(D)),z=!0),m.set&&(A.push(B),z=!0),m.setByIndices&&(A.push(L),z=!0),m.get&&(A.push(j),z=!0),m.getByIndices&&(A.push(F),z=!0),!s&&z&&A.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${q.computeStrides(n).join(",")});`),A.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:W,indices:S,indicesGet:R,indicesSet:N,set:(...A)=>{if(A.length!==o+1)throw new Error(`indices length must be ${o}`);let z=A[o];if(typeof z!="string")throw new Error("value must be string");let D=A.slice(0,o).map(f).join(",");return o===0?V("0u",z):o===1?V(D[0],z):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${z})`)},setByOffset:V,setByIndices:(A,z)=>o<2?V(A,z):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${z});`),get:Z,getByOffset:O,getByIndices:le,usage:r,name:e,strides:b,shape:w,rank:o}},Y=(e,t,n,r=1)=>er(e,t,n,"input",r),he=(e,t,n,r=1)=>er(e,t,n,"output",r),nl=(e,t,n)=>er(e,t,n,"atomicOutput",1),uo=(e,t,n,r=1)=>er(e,t,n,"internal",r),rl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
  fn main(${s}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},il=(e,t)=>new rl(e,t)}),ol,lo,sl,al,ul,ll,pt,cl,dl,on=ie(()=>{be(),ve(),Ve(),Me(),ol=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},lo=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),sl=(e,t)=>q.sortBasedOnPerm(e,lo(e.length,t)),al=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},ul=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},ll=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},pt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=lo(r,t),s=sl(e.dims,i),o=e.dims,a=s,u=r<2||ll(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,o,4),w=he("output",n,a,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=ul(e.dims,i),p=q.areEqual(d,[2,3,1]),f=q.areEqual(d,[3,1,2]);if(c.length===2||p||f){o=p?[c[0],c[1]*c[2]]:f?[c[0]*c[1],c[2]]:c,a=[o[1],o[0]];let m=16;return l=y=>{let w=Y("a",n,o.length),b=he("output",n,a.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(a[1]/m),y:Math.ceil(a[0]/m)},programUniforms:[{type:12,data:y},...me(o,a)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,o.length),w=he("output",n,a.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${al(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...me(o,a)]}},getShaderSource:l}},cl=(e,t)=>{ol(e.inputs,t.perm),e.compute(pt(e.inputs[0],t.perm))},dl=e=>Oe({perm:e.perm})}),hl,pl,fl,ml,gl,yl,wl,bl,_l,xl,Mt,$l,vl,Ml,Sl,Il,El,Tl,kl,Cl,Al,Qy=ie(()=>{be(),ve(),Me(),ho(),on(),hl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},pl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},fl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ml={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},gl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},yl=(e,t)=>{let n=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&n.push(e[s]);let i=t.map(s=>e[s]);return[n,i]},wl=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let s=0;s<n;s++)t.indexOf(s)===-1?r.push(e[i++]):r.push(1);return r},bl=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},_l=(e,t)=>{let n=[];if(!bl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},xl=(e,t,n,r,i,s,o)=>{let a=n[0].dims,u=q.size(s),l=q.size(o),c=Y("_A",n[0].dataType,a),d=he("output",i,s),p=64;u===1&&(p=256);let f=`
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

          var bestValue = f32(${fl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${hl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${pl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${ml[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:co(e.inputs,n),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((f,m)=>m));let o=q.normalizeAxes(s,e.inputs[0].dims.length),a=o,u=e.inputs[0],l=_l(a,e.inputs[0].dims.length);l.length>0&&(u=e.compute(pt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],a=gl(a.length,u.dims.length));let[c,d]=yl(u.dims,a),p=c;i.keepDims&&(p=wl(c,o)),e.compute(xl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},$l=(e,t)=>{Mt(e,"ReduceMeanShared",t,"mean")},vl=(e,t)=>{Mt(e,"ReduceL1Shared",t,"l1")},Ml=(e,t)=>{Mt(e,"ReduceL2Shared",t,"l2")},Sl=(e,t)=>{Mt(e,"ReduceLogSumExpShared",t,"logSumExp")},Il=(e,t)=>{Mt(e,"ReduceMaxShared",t,"max")},El=(e,t)=>{Mt(e,"ReduceMinShared",t,"min")},Tl=(e,t)=>{Mt(e,"ReduceProdShared",t,"prod")},kl=(e,t)=>{Mt(e,"ReduceSumShared",t,"sum")},Cl=(e,t)=>{Mt(e,"ReduceSumSquareShared",t,"sumSquare")},Al=(e,t)=>{Mt(e,"ReduceLogSumShared",t,"logSum")}}),St,Rl,Or,co,It,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Et,Wl,ql,Vl,Hl,jl,Kl,Yl,Xl,Ql,Zl,ho=ie(()=>{be(),ve(),Ve(),Me(),Qy(),St=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Rl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Or=(e,t,n,r,i,s,o=!1,a=!1)=>{let u=[],l=n[0].dims,c=l.length,d=q.normalizeAxes(i,c),p=!a&&d.length===0;l.forEach((y,w)=>{p||d.indexOf(w)>=0?o&&u.push(1):u.push(y)});let f=u.length,m=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=Y("_A",n[0].dataType,c),x=he("output",s,f),M=r(b,x,d),v=M[2];for(let I=0,T=0;I<c;I++)p||d.indexOf(I)>=0?(o&&T++,v=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${M[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${v}
                }`):(w.push(`${b.indicesSet("input_indices",I,x.indicesGet("output_indices",T))};`),T++);return`

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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...me(l,u)]})}},co=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Oe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},It=(e,t,n,r)=>{let i=e.inputs,s=i.length===1?n:co(i,n);e.compute(Or(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Rl:r,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Ol=(e,t)=>{St(e.inputs),It(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Nl=(e,t)=>{St(e.inputs),It(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},zl=(e,t)=>{St(e.inputs),It(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Bl=(e,t)=>{St(e.inputs),It(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Pl=(e,t)=>{St(e.inputs),It(e,"ReduceMax",t,(n,r,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(n.indicesSet("input_indices",o,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Dl=(e,t)=>{St(e.inputs),It(e,"ReduceMean",t,(n,r,i)=>{let s=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(s*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},Ul=(e,t)=>{St(e.inputs),It(e,"ReduceMin",t,(n,r,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Ll=(e,t)=>{St(e.inputs),It(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Fl=(e,t)=>{St(e.inputs),It(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Gl=(e,t)=>{St(e.inputs),It(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:i*=e[s];return i<32&&r>1024},Wl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dl(e,t):$l(e,t)},ql=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):vl(e,t)},Vl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zl(e,t):Ml(e,t)},Hl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bl(e,t):Sl(e,t)},jl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pl(e,t):Il(e,t)},Kl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ul(e,t):El(e,t)},Yl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ll(e,t):Tl(e,t)},Xl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fl(e,t):kl(e,t)},Ql=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gl(e,t):Cl(e,t)},Zl=(e,t)=>{Et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):Al(e,t)}}),po,Jl,ec,fo,Zy=ie(()=>{be(),Ve(),ho(),po=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Jl=(e,t)=>{po(e.inputs);let n=(r,i,s)=>{let o=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Or("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ec=(e,t)=>{po(e.inputs);let n=(r,i,s)=>{let o=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Or("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},fo=e=>Oe(e)}),tc,Nr,nc,rc,ic,tr,oc,sc,mo=ie(()=>{be(),ve(),ro(),Me(),tc=(e,t)=>{let n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5];if(o&&a)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=m+y,b=-1,x=0;if(s)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(a){if(a.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(a.dims[0]!==u||a.dims[1]!==t.numHeads||a.dims[2]!==l||a.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Nr=(e,t,n)=>t&&e?`
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
    `,nc=(e,t,n,r,i,s,o,a)=>{let u=We(o?1:s),l=64,c=s/u;c<l&&(l=32);let d=Math.ceil(s/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],f=Qe(e.dataType,u),m=rt(1,u),y=["type"];o&&y.push("type"),a&&y.push("type");let w=b=>{let x=he("x",e.dataType,e.dims,u),M=[x],v=o?Y("seq_lens",o.dataType,o.dims):void 0;v&&M.push(v);let I=a?Y("total_sequence_length_input",a.dataType,a.dims):void 0;I&&M.push(I);let T=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Nr(v,I,!1)}
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
        x[offset + i] = ${x.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},rc=(e,t,n,r,i,s,o,a,u)=>{let l=o+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,l],d=e>1&&r,p=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=d?[s.batchSize,p,l,s.headSize]:void 0,m=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,w=We(s.headSize),b=s.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(s.sequenceLength/x),z:s.batchSize*s.numHeads},v=[{type:12,data:s.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:m}],I=d&&r&&q.size(r.dims)>0,T=["type","type"];I&&T.push("type"),i&&T.push("type"),a&&T.push("type"),u&&T.push("type");let k=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=R=>{let N=Y("q",t.dataType,t.dims,w),X=Y("key",n.dataType,n.dims,w),W=[N,X];if(I){let L=Y("past_key",r.dataType,r.dims,w);W.push(L)}i&&W.push(Y("attention_bias",i.dataType,i.dims));let V=a?Y("seq_lens",a.dataType,a.dims):void 0;V&&W.push(V);let O=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;O&&W.push(O);let F=he("output",t.dataType,c),j=[F];d&&j.push(he("present_key",t.dataType,f,w));let Z=rt(1,w),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${R.registerUniforms(le).declareVariables(...W,...j)}
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
    ${Nr(V,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},ic=(e,t,n,r,i,s,o=void 0,a=void 0)=>{let u=s+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=d?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),a&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];d&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=T=>{let k=Y("probs",t.dataType,t.dims),S=Y("v",n.dataType,n.dims),R=[k,S];x&&R.push(Y("past_value",r.dataType,r.dims));let N=o?Y("seq_lens",o.dataType,o.dims):void 0;o&&R.push(N);let X=a?Y("total_sequence_length_input",a.dataType,a.dims):void 0;a&&R.push(X);let W=[he("output",t.dataType,m)];d&&W.push(he("present_value",t.dataType,f));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${T.registerUniforms(V).declareVariables(...R,...W)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Nr(N,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},tr=(e,t,n,r,i,s,o,a,u,l,c=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(a?1:0)),f=p>1?o:void 0,m=p>1?a:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&q.size(u.dims)>0?u:void 0,x=[t,n];f&&q.size(f.dims)>0&&x.push(f),b&&x.push(b),c&&x.push(c),d&&x.push(d);let M=e.compute(rc(p,t,n,f,b,l,y,c,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(nc(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[M,c,d]:[M],outputs:[]});let v=[M,r];m&&q.size(m.dims)>0&&v.push(m),c&&v.push(c),d&&v.push(d),e.compute(ic(p,M,r,m,l,y,c,d),{inputs:v,outputs:p>1?[0,2]:[0]})},oc=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,o=12,a={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let p=he("output_q",u[0].dataType,n),f=he("output_k",u[0].dataType,n),m=he("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),b=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${d.registerUniforms(M).declareVariables(y,w,b,p,f,m)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:a,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},sc=(e,t)=>{let n=tc(e.inputs,t),[r,i,s]=oc(e,n);return tr(e,r,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),ac,uc,lc,cc,Jy=ie(()=>{mt(),be(),ve(),Ve(),Me(),ac=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,s)=>{let o=i.length;if(o!==r.length)throw new Error(`${s}: num dimensions != ${o}`);i.forEach((a,u)=>{if(a!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},uc=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,s=e[0].dims,o=r?We(s[s.length-1]):1,a=i==="NHWC"&&s.length>1?o:1,u=q.size(s)/o,l=r,c=l?s.length:s,d=Y("x",e[0].dataType,e[0].dims,o),p=Y("scale",e[1].dataType,e[1].dims,a),f=Y("bias",e[2].dataType,e[2].dims,a),m=Y("inputMean",e[3].dataType,e[3].dims,a),y=Y("inputVar",e[4].dataType,e[4].dims,a),w=he("y",e[0].dataType,c,o),b=()=>{let M="";if(r)M=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...me(s)]:[{type:12,data:u}]})}},lc=e=>Oe(e),cc=(e,t)=>{let{inputs:n,outputCount:r}=e,i=lc({...t,outputCount:r});if(ze.webgpu.validateInputContent&&ac(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(uc(n,i))}}),dc,hc,pc,ew=ie(()=>{ve(),Me(),dc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hc=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,s=Y("input",i,t,4),o=Y("bias",i,[n],4),a=Y("residual",i,t,4),u=he("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(s,o,a,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${a.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},pc=e=>{dc(e.inputs),e.compute(hc(e.inputs))}}),fc,Re,mc,gc,yc,wc,bc,_c,xc,$c,vc,Mc,Sc,Ic,Ec,Tc,nr,kc,zr,Cc,Ac,Rc,Oc,Nc,zc,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,go,Hc,yo,wo,jc,Kc,Yc,Xc,Qc,Zc,bo=ie(()=>{be(),ve(),Ve(),Me(),fc=(e,t,n,r,i,s,o)=>{let a=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[a],4),c=he("outputData",r,[a],4),d=[{name:"vec_size",type:"u32"}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,s=e.dataType,o,a)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>fc(l,q.size(e.dims),e.dataType,s,n,r,a),getRunData:l=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},mc=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},gc=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},yc=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},wc=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},bc=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},_c=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},xc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},$c=e=>Oe(e),vc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Mc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:n})},Sc=(e,t)=>{let n=t||Mc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Ic=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},Ec=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},Tc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},nr=e=>Oe(e),kc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},zr=(e="f32")=>`
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
}`,Cc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,zr(t)))},Ac=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},Rc=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},Oc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,zr(t)))},Nc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},zc=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Bc=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Pc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Dc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Uc=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Lc=e=>Oe(e),Fc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Gc=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Wc=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},qc=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Vc=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},go=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Hc=e=>{e.compute(Re(e.inputs[0],"Tanh",go))},yo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${go("v")};
}
`,wo=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,jc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",wo,yo(t),void 0,e.inputs[0].dataType))},Kc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Yc=e=>{e.compute(Re(e.inputs[0],"Log","log"))},Xc=(e,t)=>`
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
`,Qc=e=>`quick_gelu_impl(${e})`,Zc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Qc,Xc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Jc,ed,td,tw=ie(()=>{ve(),Me(),bo(),Jc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ed=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=he("output",e[0].dataType,t,4),s=q.size(t)/4,o=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:a=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${a.declareVariables(n,r,i)}

  ${zr(o)}

  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},td=e=>{Jc(e.inputs),e.compute(ed(e.inputs))}}),nd,rd,Tt,id,od,sd,ad,ud,ld,cd,dd,hd,pd,nw=ie(()=>{be(),ve(),Me(),nd=(e,t,n,r,i,s,o,a,u,l,c,d)=>{let p,f;typeof a=="string"?p=f=(x,M)=>`${a}((${x}),(${M}))`:typeof a=="function"?p=f=a:(p=a.scalar,f=a.vector);let m=he("outputData",c,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),b;if(i)if(s){let x=q.size(t)===1,M=q.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,I="")=>{let T=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${I}(${p(T,k)});
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
      }`},rd=(e,t,n,r,i,s,o=n.dataType)=>{let a=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(a,u),c=a,d=q.size(a),p=!1,f=!1,m=[l];if(l){let y=Bn.calcShape(a,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=q.size(c);let w=q.size(a)===1,b=q.size(u)===1,x=a.length>0&&a[a.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let v=1;for(let I=1;I<c.length;I++){let T=a[a.length-I],k=u[u.length-I];if(T===k)v*=T;else break}v%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>nd(y,a,u,c,p,l,f,i,n.dataType,r.dataType,o,s),getRunData:()=>({outputs:[{dims:c,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(c)/4)},...me(a,u,c)]})}},Tt=(e,t,n,r,i,s)=>{e.compute(rd(t,i??"",e.inputs[0],e.inputs[1],n,r,s))},id=e=>{Tt(e,"Add",(t,n)=>`${t}+${n}`)},od=e=>{Tt(e,"Div",(t,n)=>`${t}/${n}`)},sd=e=>{Tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},ad=e=>{Tt(e,"Mul",(t,n)=>`${t}*${n}`)},ud=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ld=e=>{Tt(e,"Sub",(t,n)=>`${t}-${n}`)},cd=e=>{Tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},dd=e=>{Tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},hd=e=>{Tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},pd=e=>{Tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),fd,md,gd,yd,wd,bd,rw=ie(()=>{be(),ve(),Ve(),Me(),fd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,s=r.dims.length;e.forEach((o,a)=>{if(a!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==s)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},md=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,gd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(s):i===0?r.push(`if (inputIndex == ${i}u) { ${s} }`):i===n-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${i}) { ${s} }`)}return r.join(`
`)},yd=(e,t,n,r)=>{let i=q.size(n),s=new Array(e.length),o=new Array(e.length),a=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)a+=e[y].dims[t],s[y]=a,l.push(e[y].dims.length),o[y]=Y(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)c.push(...me(e[y].dims));c.push(...me(n));let d=he("output",r,n.length),p=d.indicesGet("indices",t),f=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,d)})()}

  ${md(s.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${gd(o,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},wd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);fd(n,i);let s=r.slice();s[i]=n.reduce((a,u)=>a+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(a=>q.size(a.dims)>0);e.compute(yd(o,i,s,n[0].dataType),{inputs:o})},bd=e=>Oe({axis:e.axis})}),xn,$n,vn,_o,Mn=ie(()=>{be(),ve(),xn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},$n=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},vn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},_o=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Gu,Wu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,_d,xo=ie(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},_d=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),xd,iw=ie(()=>{xd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,$o,vo=ie(()=>{be(),ve(),Me(),Mn(),rr=(e,t,n,r,i)=>{let s=r-n;return`
      ${Array.from({length:n}).map((o,a)=>`
      if (${pe(t.shape,a,t.rank)} != 1) {
        ${t.indicesSet(e,a,pe(i,a+s,r))}
      } else {
        ${t.indicesSet(e,a,0)}
      }`).join("")}
`},$o=(e,t,n,r,i=!1,s)=>{let o=e[0].dims,a=e[1].dims,u=o[o.length-2],l=a[a.length-1],c=o[o.length-1],d=We(l),p=We(c),f=We(u),m=q.size(n)/d/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[q.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:c}];$n(t,x),x.push(...me(w,o,a)),y&&x.push(...me(e[2].dims)),x.push(...me(b));let M=v=>{let I=uo("batch_dims",e[0].dataType,w.length),T=Y("a",e[0].dataType,o.length,p),k=Y("b",e[1].dataType,a.length,d),S=he("output",e[0].dataType,b.length,d),R=Qe(S.type.tensor),N=xn(t,S.type.value,R),X=[T,k],W="";if(y){let F=i?d:1;X.push(Y("bias",e[2].dataType,e[2].dims.length,F)),W=`${i?`value += bias[col / ${F}];`:`value += ${S.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];vn(t,V);let O=()=>{let F=`var a_data: ${T.type.value};`;for(let j=0;j<p;j++)F+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${d}];`;for(let j=0;j<f;j++){F+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${p}];`;for(let Z=0;Z<p;Z++)F+=`
            values[${j}] = fma(${k.type.value}(a_data${p===1?"":`[${Z}]`}), b_data${Z}, values[${j}]);
`}return F};return`
  ${v.registerUniforms(V).registerInternalVariables(I).declareVariables(...X,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${rr("a_indices",T,T.rank-2,I.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${rr("b_indices",k,k.rank-2,I.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${O()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${W}
      ${N}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),$d,vd,Mo,So,Md,Io,Sd,Br,Eo=ie(()=>{be(),ve(),Me(),Mn(),vo(),xo(),$d=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,vd=(e,t)=>e?`
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
        }`,Mo=(e,t,n="f32",r,i=!1,s=32,o=!1,a=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:s,d=i?s:u,p=c/t[0],f=s/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${c/p}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
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
  let batch = ${o?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${o?`${Math.ceil(a/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${a}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${$d(i,r)}
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

          ${vd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},So=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Md=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Io=(e,t,n="f32",r,i=!1,s=32,o=!1,a=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:s,p=i?s:l;if(!(p%t[1]===0&&d%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=d/t[0],y=s/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${So(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
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
      ${So(i,r)}
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
      ${Md(i)}
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
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(a/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${a}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},Sd=(e,t,n,r,i=!1)=>{let[s,o,a,u]=r,l=Qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${rr("aIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${a.type.indices};
        ${rr("bIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("bIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("bIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("bIndices")};
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
    `},Br=(e,t,n,r,i=!1,s)=>{let o=e[0].dims,a=e[1].dims,u=o.slice(0,-2),l=a.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=q.size(c),p=o[o.length-2],f=o[o.length-1],m=a[a.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],M=y?4:1,v=[...u,p,f/M],I=v.length,T=[...l,f,m/M],k=T.length,S=[d,p,m/M],R=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];$n(t,R),R.push(...me(c,v,T));let N=["rank","rank"],X=e.length>2;X&&(R.push(...me(e[2].dims)),N.push("rank")),R.push(...me(S));let W=V=>{let O=c.length,F=uo("batchDims",e[0].dataType,O,1),j=Qe(e[0].dataType),Z=Y("a",e[0].dataType,I,M),le=Y("b",e[1].dataType,k,M),L=he("result",e[0].dataType,S.length,M),B=[Z,le];if(X){let K=i?M:1;B.push(Y("bias",e[2].dataType,e[2].dims.length,K))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];vn(t,A);let z=Qe(L.type.tensor),D=xn(t,L.type.value,z),P=Sd(M,X,D,[F,Z,le,L],i);return`
  ${V.registerUniforms(A).registerInternalVariables(F).declareVariables(...B,L)}
  ${P}
  ${y?Mo(w,b,j,F):Io(w,b,j,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:W}}}),Id,Ed,ow=ie(()=>{be(),jt(),Me(),Mn(),xo(),iw(),Eo(),Id=(e,t,n,r,i=!1,s,o=4,a=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=e?`
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
    var resData = ${Je(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(o)}
    }
    return resData;`,M=e?t&&r?`
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
    return ${Je(o,l)}(0.0);`,v=e?r&&n?d(a):`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(a)}
    }
    return ${Je(a,l)}(0.0);`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(a)}
    }
    return ${Je(a,l)}(0.0);`,I=Je(u,l),T=Je(e?o:a,l),k=Je(e?a:o,l),S=xn(s,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
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
      ${_d(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ed=(e,t,n,r,i,s,o,a,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(d/x[2]/M[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let I=y?l&&c%4!==0?3:4:1,T=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*I,x[1]),R=r%T===0,N=i%k===0,X=s%S===0,W=y?[I,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];$n(t,V),V.push(...me(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(V.push(...me(e[2].dims)),O.push("rank")),V.push(...me(n));let F=j=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];vn(t,Z);let le=y?4:1,L=Qe(e[0].dataType),B=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,A=Y("x",e[0].dataType,e[0].dims.length,I===3?1:I),z=Y("w",e[1].dataType,e[1].dims.length,le),D=[A,z],P=he("result",e[0].dataType,n.length,le);if(o){let K=Y("bias",e[2].dataType,e[2].dims.length,le);D.push(K),B+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${xd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Z).declareVariables(...D,P)}
        ${B}
        ${Id(l,R,N,X,o,t,W[0],W[1],W[2],L)}
        ${y?Mo(M,x,L,void 0,!l,S):Io(M,x,L,void 0,!l,S,!1,void 0,a)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${R};${N};${X};${T};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:V}),getShaderSource:F}}}),Td,To,ir,kd,ko,Cd,Ad,Rd,sw=ie(()=>{be(),jt(),ve(),Me(),Mn(),xo(),Td=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},To=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),kd=(e,t,n,r=1)=>{let i=ir(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ko=(e,t,n,r,i)=>{i==null&&(i=kd(e,t[0],r[0]));let s=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(s[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return s},Cd=(e,t,n,r,i,s,o,a,u,l)=>{let c,d,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=ko([t,n,r,1],[a,u,l],1,[i,s,o],e);d=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=ko([t,n,r,1],[a,u,l],1,[i,s,o],e[0]);d=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/s),f=Math.ceil(r/o);let m=(d-1)*i+a-t,y=(p-1)*s+u-n,w=(f-1)*o+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),v=y-M,I=Math.floor(w/2),T=w-I;c={top:M,bottom:v,left:I,right:T,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:p,outWidth:f}},Ad=(e,t,n,r,i,s=!1,o="channelsLast")=>{let a,u,l,c,d;if(o==="channelsLast")[a,u,l,c,d]=e;else if(o==="channelsFirst")[a,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,f,m,y]=t,[w,b,x]=To(n),[M,v,I]=To(r),T=ir(f,M),k=ir(m,v),S=ir(y,I),{padInfo:R,outDepth:N,outHeight:X,outWidth:W}=Cd(i,u,l,c,w,b,x,T,k,S),V=s?p*d:p,O=[0,0,0,0,0];return o==="channelsFirst"?O=[a,V,N,X,W]:o==="channelsLast"&&(O=[a,N,X,W,V]),{batchSize:a,dataFormat:o,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:N,outHeight:X,outWidth:W,outChannels:V,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},Rd=(e,t,n,r,i,s)=>{let o=s==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let a=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(Td(u.x.map(w=>n[w]))/a[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=q.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];$n(t,p),p.push(...me(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...me(e[2].dims)),f.push("rank")),p.push(...me(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];vn(t,b);let x=1,M=Qe(e[0].dataType),v=Y("x",e[0].dataType,e[0].dims.length,c),I=Y("W",e[1].dataType,e[1].dims.length,x),T=[v,I],k=he("result",e[0].dataType,n.length,x),S="";if(m){let X=Y("bias",e[2].dataType,e[2].dims.length,x);T.push(X),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?pe("coords",4,5):pe("coords",1,5)}];
        }`}let R=Je(c,M),N=xn(t,R,M);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...T,k)}
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${c};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Od,Nd,aw=ie(()=>{be(),ve(),Me(),Mn(),Od=(e,t,n,r)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",o=e[0].dims,a=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?We(l):1,p=q.size(n)/d,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];$n(t,f),f.push(...me(o,[a[0],a[1],a[2],a[3]/d]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...me([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=he("output",e[0].dataType,n.length,d),x=Qe(b.type.tensor),M=xn(t,b.type.value,x),v=Y("x",e[0].dataType,o.length),I=Y("w",e[1].dataType,a.length,d),T=[v,I];i&&T.push(Y("b",e[2].dataType,e[2].dims,d));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];vn(t,k);let S=u?`
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
  ${w.registerUniforms(k).declareVariables(...T,b)}

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
    ${s}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Nd=(e,t,n,r)=>{let i=e.length>2,s=We(n[3]),o=We(n[2]),a=q.size(n)/s/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[n[0],n[1],n[2],n[3]/s],d=[{type:12,data:a},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];$n(t,d),d.push(...me(u,l,c));let p=(o-1)*t.strides[1]+l[1],f=m=>{let y=he("output",e[0].dataType,c.length,s),w=Qe(y.type.tensor),b=xn(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,s),M=Y("w",e[1].dataType,l.length,s),v=[x,M];i&&v.push(Y("b",e[2].dataType,e[2].dims,s));let I=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return vn(t,T),`
  ${m.registerUniforms(T).declareVariables(...v,y)}
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}}}),zd,Pr,Bd,Dr,Co,Ao,Pd,Dd,Ro,uw=ie(()=>{ve(),ow(),sw(),Eo(),aw(),Mn(),vo(),on(),zd=(e,t,n,r,i,s)=>{let o=e[0],a=e.slice(s?1:2,s?3:4),u=a.length,l=t[0],c=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),d=a.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-c[f]+i[f])/i[f]));return d.splice(0,0,o),d.splice(s?3:1,0,l),d},Pr=[2,3,1,0],Bd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Dr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let s=2;s<t[1].dims.length;++s)n[s-2]===0&&(n[s-2]=t[1].dims[s]);let r=e.pads.slice();kr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Co=e=>{let t=_o(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,o=e.kernel_shape,a=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:s,kernelShape:o,pads:a,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ao=(e,t,n,r)=>{let i=n.format==="NHWC",s=zd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let T=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),T.push(k)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Nd(T,n,s,r),{inputs:T}):e.compute(Od(T,n,s,r),{inputs:T});return}let o=t.length===3,a=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],p=s[i?1:2],f=s[i?2:3],m=s[i?3:1],y=i&&c===a&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let T=s[0],k,S,R,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let O=a*u*l;k=t[0].reshape([1,T,O]),S=V.reshape([1,O,m]),R=[1,T,m]}else k=t[0].reshape([T,a*u,l]),S=V.reshape([1,l,m]),R=[T,p*f,m];N.push(k),N.push(S)}else k=t[0].reshape([T,l,a*u]),S=t[1].reshape([1,m,l]),R=[T,m,p*f],N.push(S),N.push(k);o&&N.push(t[2]);let X=R[2],W=N[0].dims[N[0].dims.length-1];X<8&&W<8?e.compute($o(N,n,s,R,i,r),{inputs:N}):e.compute(Br(N,n,s,R,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,I=c*d*l;e.compute(Ed(x,n,s,M,v,I,o,w,r),{inputs:x})},Pd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),o=[1].concat(t.dilations),a=[1].concat(t.kernelShape),u=Dr({...t,pads:i,strides:s,dilations:o,kernelShape:a},r);Ao(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Dd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Dr(n,t),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=Ad(t[0].dims,t[1].dims,n.strides,n.dilations,s,!1,r);e.compute(Rd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ro=(e,t)=>{if(Bd(e.inputs,t),e.inputs[0].dims.length===3)Pd(e,t);else if(e.inputs[0].dims.length===5)Dd(e,e.inputs,t);else{let n=Dr(t,e.inputs);Ao(e,e.inputs,n)}}}),Ud,lw=ie(()=>{be(),jt(),ve(),Me(),Ud=(e,t,n)=>{let r=e.length>2,i=t.outputShape,s=t.format==="NHWC",o=t.group,a=e[1].dims,u=a[2]/o,l=a[3],c=s?We(u):1,d=s&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/c)*c,f=u-p,m=s?We(l):1,y=s?l===1?c:m:1,w=q.size(i)/m,b=[Math.ceil(w/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],I=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:I},{type:12,data:T},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...me(e[0].dims,e[1].dims)];r&&(S.push(...me(e[2].dims)),x.push("rank")),S.push(...me(i));let R=N=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Qe(e[0].dataType),V=s?1:2,O=s?2:3,F=s?3:1,j=Y("W",e[1].dataType,e[1].dims.length,y),Z=Y("Dy",e[0].dataType,e[0].dims.length,c),le=[Z,j];r&&le.push(Y("bias",e[2].dataType,[i[F]].length,m));let L=he("result",e[0].dataType,i.length,m),B=()=>{let D="";if(d)c===4?D+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?D+=`
          dotProd = dotProd + dot(vec4<${W}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${W}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(D+=`
          dotProd = dotProd + dot(vec4<${W}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${W}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${s?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
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
    ${N.registerUniforms(X).declareVariables(...le,L)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${m}${d}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:R}}}),Ld,Fd,Gd,Oo,Wd,qd,No,Vd,Hd,cw=ie(()=>{lw(),Mn(),on(),Ld=(e,t,n,r,i,s)=>(e-1)*t+n+(r-1)*i+1-s,Fd=(e,t,n,r,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=s,n[i]=e-s):t==="SAME_LOWER"&&(n[r]=e-s,n[i]=s)},Gd=(e,t,n,r,i,s,o,a,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let p=e[0],f=t[a?3:1]*i;for(let m=0,y=e.length-c-(a?1:0);m<c;++m,++y){let w=e[y],b=d?w*o[m]:l[m],x=Ld(w,o[m],s[m],t[y],n[m],b);Fd(x,r,s,m,m+c),d&&l.push(o[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-s[m]-s[m+c])}l.splice(0,0,p),l.splice(a?3:1,0,f)},Oo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),o=e.outputPadding.slice(),a=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}Gd(a,n,u,e.autoPad,e.group,i,l,r,o,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:o,outputShape:s,dilations:u,strides:l}),c},Wd=e=>{let t=_o(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,o=e.kernelShape,a=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:s,kernelShape:o,outputPadding:c,outputShape:d,pads:a,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},qd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((o,a)=>o+a,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((o,a)=>o+a,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((o,a)=>o+a,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((o,a)=>o+a,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},No=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(pt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(Ud(s,n,r),{inputs:s})},Vd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let a=t.pads;a.length===0&&(a=[0,0]),a=[0,a[0],0,a[1]],o=[1].concat(o),s=[1].concat(s),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Oo({...t,pads:a,strides:o,dilations:s,kernelShape:i,outputPadding:u},r);No(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Hd=(e,t)=>{if(qd(e.inputs,t),e.inputs[0].dims.length===3)Vd(e,t);else{let n=Oo(t,e.inputs);No(e,e.inputs,n)}}}),jd,Kd,Yd,dw=ie(()=>{be(),ve(),Ve(),Me(),jd=(e,t,n,r)=>{let i=q.size(t),s=t.length,o=Y("input",e,s),a=he("output",e,s),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,s),c=d=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",s),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,a)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${a.offsetToIndices("global_idx")};
                  var sum = ${a.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${a.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...me(t,t)]}),getShaderSource:c}},Kd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(jd(r,n,i,t),{inputs:[0]})},Yd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Oe({exclusive:t,reverse:n})}}),Xd,Qd,Zd,Jd,eh,hw=ie(()=>{be(),ve(),Ve(),Me(),Xd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Qd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<t;++s)i.push(n.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Zd=(e,t)=>{let n,r,i,s,o,a,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,s]=e.dims,o=c?[n,r,i,l,l,s/l**2]:[n,r,i,s/l**2,l,l],a=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=c?[n,l,l,s/l**2,r,i]:[n,s/l**2,l,l,r,i],a=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),p=d.dims.length,f=e.dataType,m=Y("a",f,p),y=he("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Qd(a,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,s/l**2]:[n,s/l**2,r*l,i*l],M=q.size(x),v=d.dims,I=q.sortBasedOnPerm(v,a);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...me(v,I)]}},getShaderSource:w}},Jd=(e,t)=>{Xd(e.inputs),e.compute(Zd(e.inputs[0],t))},eh=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ur,or,zo,th,nh,rh,ih,Bo,oh,sh,ah,pw=ie(()=>{be(),ve(),Ve(),Me(),Ur="[a-zA-Z]|\\.\\.\\.",or="("+Ur+")+",zo="^"+or+"$",th="("+or+",)*"+or,nh="^"+th+"$",rh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},ih=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(nh)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,o)=>{let a=e[o].dims.slice();if(!s.match(RegExp(zo)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,a,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,o])=>o.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(or)))throw new Error("Invalid RHS");(i=r.match(RegExp(Ur,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(s);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,s=!1,o=[],a=0;if(!e.match(RegExp(zo))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Ur,"g")),l=new rh(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(a,a+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<o.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,d+f),this.addSymbol(m,n[a++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[a++],r)}),l}},Bo=e=>e+"_max",oh=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>Y(`input${c}`,t,l)),s=q.size(r),o=he("output",t,r.length),a=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,I)=>{var T;if(n.rhs.symbolToIndices.has(I)){let k=(T=n.rhs.symbolToIndices.get(I))==null?void 0:T[0];k!==void 0&&n.lhs.forEach((S,R)=>{if(v.inputIndices.includes(R)){let N=S.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(X=>{c.push(`${i[R].indicesSet(`input${R}Indices`,X,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let R=k.symbolToIndices.get(I);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(N=>{m.push(`${i[S].indicesSet(`input${S}Indices`,N,`${I}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Bo(I)}; ${I}++) {`),w.push("}")});let M=x?[...c,`let sum = ${i.map((v,I)=>v.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,p,...y,...m,d,...b,f,...w];return`
            ${l.registerUniforms(a.map(v=>({name:`${Bo(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=a.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:s});let c=e.map((d,p)=>[...me(d)]).reduce((d,p)=>d.concat(p),l);return c.push(...me(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:u}},sh=(e,t)=>{let n=new ih(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((s,o)=>s.dims);e.compute(oh(i,e.inputs[0].dataType,n,r))},ah=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),uh,Po,lh,ch,dh,fw=ie(()=>{be(),ve(),Me(),uh=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Po=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},lh=(e,t)=>e.length>t.length?Po(e,t):Po(t,e),ch=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=lh(t,n),i=e[0].dataType,s=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,a=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/a),l=d=>{let p=Y("input",i,t.length,o),f=he("output",i,r.length,a),m;if(i===9){let y=(w,b,x="")=>`
          let outputIndices${b} = ${f.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${p.broadcastedIndicesToOffset(`outputIndices${b}`,f)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${x}(${p.getByOffset(`index${b}`)}[component${b}]);
        `;m=`
        let outputOffset = global_idx * ${a};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${a}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${o}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},c=[{type:12,data:u},...me(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${a}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},dh=e=>{uh(e.inputs),e.compute(ch(e.inputs),{inputs:[0]})}}),hh,ph,mw=ie(()=>{be(),ve(),Me(),bo(),hh=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,s=o=>{let a=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=he("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${a.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(c).declareVariables(a,u,l)}

    ${yo(rt(t))}

    ${o.mainStart(Pn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${a.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",wo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pn/4)}})}},ph=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?jc(e):e.compute(hh(e.inputs))}}),fh,mh,gh,yh,gw=ie(()=>{be(),ve(),Ve(),Me(),fh=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},mh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(s,1,...r);let a=n[s],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/u),c=[{type:12,data:l},{type:6,data:a},{type:12,data:s},...me(e[0].dims,e[1].dims,o)],d=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=he("output",e[0].dataType,o.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<M;I++)v+=`${M>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,T=0;I<i;I++)I===s?(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,T+=M):(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${T}]`:`outputIndices${x}`};`,T++);return v},b;if(e[0].dataType===9){let x=(M,v,I="")=>`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},gh=e=>Oe({axis:e.axis}),yh=(e,t)=>{let n=e.inputs;fh(n),e.compute(mh(e.inputs,t))}}),wh,bh,_h,yw=ie(()=>{be(),ve(),Me(),wh=(e,t,n,r,i,s,o,a,u)=>{let l=[{type:12,data:s},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:a},{type:12,data:u}],c=[s];l.push(...me(t.dims,c));let d=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=he("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},bh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,s=n[1].dims,o=s[s.length-1],a=q.sizeToDimension(s,s.length-1),u=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),c=q.sizeFromDimension(r,t.batchDims),d=a/l,p=new Array(o),f=u;for(let v=0;v<o;++v)p[o-1-v]=f,f*=r[t.batchDims+o-1-v];let m=wh(e,n[1],p,t.batchDims,r,a,d,c,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=s.slice(0,-1).concat(r.slice(y)),b=q.size(w),x=[{type:12,data:b},{type:12,data:u},...me(n[0].dims,m.dims,w)],M=v=>{let I=Y("data",n[0].dataType,n[0].dims.length),T=Y("slice_offsets",12,m.dims.length),k=he("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,T,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},_h=e=>({batchDims:e.batch_dims,cacheKey:""})}),xh,$h,vh,Mh,ww=ie(()=>{be(),ve(),Ve(),Me(),xh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],s=e[2],o=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((a,u)=>u===n?Math.ceil(a/r)===s.dims[u]:a===s.dims[u]).reduce((a,u)=>a&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==s.dims.length||!o.dims.map((a,u)=>a===s.dims[u]).reduce((a,u)=>a&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},$h=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),a=n.slice(0);a.splice(s,1,...r);let u=q.size(a),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:o},{type:12,data:s},{type:12,data:t.blockSize},...me(...e.map((f,m)=>f.dims),a)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),b=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=he("output",l,a.length),M=[m,y,w];b&&M.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
          index_from_indices += ${n[s]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${a.length}; i++) {
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
        let dequantized_data = ${rt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:a,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},vh=(e,t)=>{let n=e.inputs;xh(n,t),e.compute($h(e.inputs,t))},Mh=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Sh,Ih,Eh,Th,bw=ie(()=>{be(),ve(),Ve(),Me(),Sh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ih=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,s=e[1].dims,o=e[1].dataType,a=q.normalizeAxis(t.axis,i),u=n[a],l=s.slice(0),c=q.size(l),d=Y("input",r,i),p=Y("indicesInput",o,s.length),f=he("output",r,l.length),m=[{type:12,data:c},{type:6,data:u},{type:12,data:a}];return m.push(...me(n,s,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},Eh=e=>Oe({axis:e.axis}),Th=(e,t)=>{let n=e.inputs;Sh(n),e.compute(Ih(e.inputs,t))}}),kh,Ch,Ah,Rh,_w=ie(()=>{be(),ve(),Me(),kh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ch=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,s,o]=Fu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),a=[i,s];if(!a)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(s/u),c=Math.ceil(i/u),d=!0,p=q.size(a),f=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:s},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...me(e[2].dims)),m.push("rank")),f.push(...me(a));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=Y("a",e[0].dataType,e[0].dims),I=Y("b",e[1].dataType,e[1].dims),T=v.type.value,k=null,S=[v,I];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),S.push(k));let R=he("output",e[0].dataType,a.length);S.push(R);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${T}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),v=null,I=[x,M];e.length===3&&(v=Y("c",e[2].dataType,e[2].dims.length),I.push(v));let T=he("output",e[0].dataType,a.length);I.push(T);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",R="";t.transA&&t.transB?(R=`
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
  ${b.registerUniforms(k).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
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
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Ah=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Rh=(e,t)=>{kh(e.inputs),e.compute(Ch(e.inputs,t))}}),Bt,Kt,Sn,In,Oh,Nh,zh,Bh,Ph,Dh,Uh,Lh,Fh,Gh,xw=ie(()=>{be(),ve(),Ve(),Me(),[Bt,Kt,Sn,In]=[0,1,2,3],Oh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Nh=`
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
`,zh=e=>`
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
`,Bh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ph=e=>`
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
`,Dh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Bt}] = batch;
     indices[${Kt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Sn}] = u32(r);
            indices[${In}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Sn}] = u32(clamp(r, 0, H - 1));
          indices[${In}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Sn}] = gs_reflect(r, border[1], border[3]);
          indices[${In}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Uh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Bt}], indices[${Kt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Bt}], indices[${Kt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Bt}], indices[${Kt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Bt}], indices[${Kt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Bt}], indices[${Kt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Bt}], indices[${Kt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Lh=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Bt,Kt,Sn,In]=[0,3,1,2]);let o=he("output",e[0].dataType,s.length),a=n.type.value,u=q.size(s),l=[{type:12,data:u},...me(e[0].dims,r,s)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${Nh}
  ${zh(a)}
  ${Bh(t)}
  ${Ph(t)}
  ${Dh(n,a,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Sn}]);
      let W_in = i32(uniforms.x_shape[${In}]);

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
      var grid_indices = vec3<u32>(indices[${Bt}], indices[${Sn}], indices[${In}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Uh(o,a,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=q.size(s);return{outputs:[{dims:s,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:c}},Fh=(e,t)=>{Oh(e.inputs),e.compute(Lh(e.inputs,t))},Gh=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Wh,qh,Do,Vh,sr,Hh,jh=ie(()=>{be(),ve(),Ve(),ro(),mo(),Me(),on(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Wh=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),s=ot(e,3),o=ot(e,4),a=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=d,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(s&&q.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(o&&q.size(o.dims)>0){M=8;let k=o.dims;throw k.length===1?k[0]===c?M=1:k[0]===3*c+2&&(M=3):k.length===2&&k[0]===c&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,I=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],v=!0}}let T=!1;if(o&&q.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(a&&q.size(a.dims)>0){if(a.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(a.dims[0]!==c||a.dims[1]!==t.numHeads||a.dims[2]!==d||a.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:T,passPastInKv:v,qkvFormat:b}},qh=e=>Oe({...e}),Do=Oe({perm:[0,2,1,3]}),Vh=(e,t,n,r,i,s,o)=>{let a=[r,i,s],u=q.size(a),l=[{type:12,data:u},{type:12,data:o},{type:12,data:s}],c=d=>{let p=he("qkv_with_bias",t.dataType,a),f=Y("qkv",t.dataType,a),m=Y("bias",n.dataType,a),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(f,m,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,s,o,a)=>{let u=s;if(o&&q.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Vh(e,s,o,t,r,n*i,a),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(pt(u,Do.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,n,i])),n===1||r===1?u:e.compute(pt(u,Do.perm),{inputs:[u],outputs:[-1]})[0]},Hh=(e,t)=>{let n=Wh(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),s=ot(e.inputs,2),o=ot(e.inputs,3),a=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),c=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&s&&i.dims.length===4&&s.dims.length===4,p=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return tr(e,p,i,s,a,void 0,l,c,u,n);if(!i||!s)throw new Error("key and value must be provided");let f=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,o,2*n.hiddenSize);tr(e,p,f,m,a,void 0,l,c,u,n)}}),Kh,Yh,Xh,Qh,Uo,Zh,Jh,ep=ie(()=>{be(),ve(),Ve(),Me(),Kh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Yh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Oe({numOutputs:r,axis:t.axis,splitSizes:n})},Xh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Qh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Uo=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,s=q.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),a=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){d+=t.splitSizes[m],u[m]=d;let y=n.slice();y[s]=t.splitSizes[m],c.push(y),o[m]=he(`output${m}`,i,y.length),l.push({dims:c[m],dataType:e[0].dataType})}p.push({type:12,data:u},...me(n,...c));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(a,...o)}
  ${Xh(u.length)}
  ${Qh(o)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${a.offsetToIndices("global_idx")};
    var index = ${a.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${a.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Zh=(e,t)=>{Kh(e.inputs);let n=e.inputs.length===1?t:Yh(e.inputs,t);e.compute(Uo(e.inputs,n),{inputs:[0]})},Jh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:r,splitSizes:n})}}),tp,Lr,np,rp=ie(()=>{be(),ve(),Ve(),Me(),tp=(e,t)=>{let[n,r,i,s]=e,{numHeads:o,rotaryEmbeddingDim:a}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!q.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(a>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,p=a===0?i.dims[1]*2:d/o;if(a>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&a/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Lr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:s}=t,o=e[0].dims[0],a=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=a/u,c=e[2].dims[1],d=i===0?c*2:l/r,p=new Array(o,u,l/d,d-c),f=q.computeStrides(p),m=[{type:1,data:s},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[a,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[a,d,u*d,1]}):[],...me(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),v=Y("sin_cache",e[3].dataType,e[3].dims.length),I=he("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,v,I)}

        ${w.mainStart(Pn)}
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/Pn)},programUniforms:m})}},np=(e,t)=>{tp(e.inputs,t),e.compute(Lr(e.inputs,t))}}),ip,op,Lo,sp,ap,$w=ie(()=>{Ve(),be(),mo(),jh(),ep(),on(),rp(),Me(),ip=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],s=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let a=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?a?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);f&&(c=m*t.numHeads);let y=s&&s.dims.length!==0,w=o&&o.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=s.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let T=I.dims.reduce((k,S)=>k*S,1);if(T!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${T}.`);for(let k=0;k<I.dims.length;k++)if(I.dims[k]!==1&&I.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${I.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},op=Oe({perm:[0,2,1,3]}),Lo=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(pt(r,op.perm),{inputs:[r],outputs:[-1]})[0]),r},sp=(e,t,n,r)=>{let i=7,s=["type","type"],o=[e*t],a=e*t,u=[{type:12,data:a},{type:12,data:t},{type:12,data:e}],l=c=>{let d=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=he("pos_ids",i,o),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:l}},ap=(e,t)=>{var v;let n=ip(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,a=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Oe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[p,f,m]=!i&&!s?e.compute(Uo([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,s],y,w;if(t.doRotary){let I=e.compute(sp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],T=e.inputs[7],k=e.inputs[8],S=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[p,I,T,k],N=[-1];y=e.compute(Lr(R,S),{inputs:R,outputs:N})[0],R.splice(0,1,f);let X=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Lr(R,X),{inputs:R,outputs:N})[0]}let b=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Lo(e,t.doRotary?w:f,n),M=Lo(e,m,n);tr(e,b,x,M,void 0,void 0,o,a,void 0,n,u,l)}}),Fo,up,lp,cp,vw=ie(()=>{be(),ve(),on(),Me(),Fo=(e,t,n,r,i,s,o,a)=>{let u=We(s),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*o,p=64;d===1&&(p=256);let f=[i,o,s/u],m=[i,o,2],y=["rank","type","type"],w=[];w.push(...me(f,m));let b=x=>{let M=Y("x",t.dataType,3,u),v=Y("scale",n.dataType,n.dims),I=Y("bias",r.dataType,r.dims),T=he("output",1,3,2),k=[M,v,I,T];return`
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
      let sum_final = ${rn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${rn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${a}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${a};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},up=(e,t,n)=>{let r=t[0].dims,i=r,s=2,o=r[0],a=r[1],u=q.sizeFromDimension(r,s),l=We(u),c=q.size(i)/l,d=Fo(e,t[0],t[1],t[2],o,u,a,n.epsilon),p=[o,a,u/l],f=[o,a],m=["type","none"],y=w=>{let b=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),M=he("output",t[0].dataType,p.length,l),v=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...me(p,f,p)]}),getShaderSource:y},{inputs:[t[0],d]})},lp=(e,t,n)=>{let r=t[0].dims,i=r,s=r[0],o=r[r.length-1],a=q.sizeFromDimension(r,1)/o,u=We(o),l=q.size(i)/u,c=[{type:12,data:a},{type:12,data:Math.floor(o/u)}],d=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(pt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Fo(e,m,t[1],t[2],s,a,o,n.epsilon),w=b=>{let x=Qe(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${S}))`;case 2:return`vec2<${x}>(${R}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${R}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=Y("input",t[0].dataType,t[0].dims,u),T=he("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},cp=(e,t)=>{t.format==="NHWC"?lp(e,e.inputs,t):up(e,e.inputs,t)}}),dp,hp,pp,Mw=ie(()=>{be(),ve(),Me(),dp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},hp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,s=e[1],o=!r&&e[2],a=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),c=q.sizeFromDimension(i,u),d=q.size(s.dims),p=o?q.size(o.dims):0;if(d!==c||o&&p!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=We(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,M=I=>{let T=Qe(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",s.dataType,s.dims,m)];o&&k.push(Y("bias",o.dataType,o.dims,m)),k.push(he("output",e[0].dataType,a,m)),b&&k.push(he("mean_data_output",1,f)),x&&k.push(he("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(S).declareVariables(...k)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ao("f32",m)};
    var mean_square_vector = ${ao("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dn(T,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dn(T,m,"x[j + offset]")};
      let f32scale = ${Dn(T,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Dn(T,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:a,dataType:e[0].dataType}];return b&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},pp=(e,t)=>{dp(e.inputs),e.compute(hp(e.inputs,t,e.outputCount))}}),fp,mp,Sw=ie(()=>{ve(),vo(),Eo(),fp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},mp=e=>{fp(e.inputs);let t=Bn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute($o(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&o===1){let a=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,s,n],c=[a,u];e.compute(Br(c,{activation:""},t,l),{inputs:c})}else e.compute(Br(e.inputs,{activation:""},t))}}}),gp,yp,wp,bp,_p,Iw=ie(()=>{be(),ve(),Ve(),Me(),gp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let a=e[2].dims;if(q.size(a)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},yp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,o=t.n,a=n.slice(0,r-2),u=q.size(a),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=We(o),m=a.concat([i,o]),y=i>1&&o/f%2===0?2:1,w=q.size(m)/f/y,b=64,x=[],M=[u,i,s/d],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...me(M)),x.push(...me(v)),x.push(...me(e[2].dims)),e.length===4&&x.push(...me(q.convertShape(e[3].dims)));let I=[u,i,o/f];x.push(...me(I));let T=k=>{let S=M.length,R=Y("a",e[0].dataType,S,d),N=Y("b",12,v.length,p),X=Y("scales",e[2].dataType,e[2].dims.length),W=[R,N,X],V=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;V&&W.push(V);let O=I.length,F=he("output",e[0].dataType,O,f),j=Qe(e[0].dataType),Z=(()=>{switch(d){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${d}-component is not supported.`)}})(),le=Math.floor(32/t.bits),L=Math.floor(le/8),B=()=>{let D="";for(let P=0;P<L;P++){let K=P*t.bits*4,ne=K+t.bits;D+=`
          // reuse a data (pass ${P})
            var input_offset${P>0?P:""} = ${P===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${P>0?P:""}: ${Z};
            for (var j${P>0?P:""}: u32 = 0; j${P>0?P:""} < ${8/d}; j${P>0?P:""}++) {
              a_data${P>0?P:""}[j${P>0?P:""}] = ${R.getByOffset(`input_offset${P>0?P:""}`)};
              input_offset${P>0?P:""}++;
            }
          `;for(let J=0;J<f*y;J++)D+=`
            b_value = ${p===1?`b${J}_data`:`b${J}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${P*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${K}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ne}u) & b_mask);`}
            b_quantized_values = ${Z}(${Array.from({length:4},(de,$e)=>`${j}(b_value_lower[${$e}]), ${j}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Z}(${Array.from({length:8},(de,$e)=>`(b_quantized_values[${$e}] - ${V?`zero_point${J}`:"zero_point"}) * scale${J}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${V?`zero_point${J}`:"zero_point"}`).join(",")})) * scale${J};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(J/f)}]${f>1?`[${J%f}]`:""} += ${Array.from({length:8/d},(de,$e)=>`${d===1?`a_data${P>0?P:""}[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data${P>0?P:""}[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
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
            var word_offset: u32 = block * ${t.blockSize/d};
            ${A()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${z()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${B()}
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:T}},wp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,o=t.n,a=n.slice(0,r-2),u=q.size(a),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=a.concat([i,o]),m=128,y=o%8===0?8:o%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/d,v=x/t.blockSize,I=q.size(f)/y,T=[],k=[u,i,s/d],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),T.push(...me(k)),T.push(...me(S)),T.push(...me(e[2].dims)),e.length===4&&T.push(...me(q.convertShape(e[3].dims)));let R=[u,i,o];T.push(...me(R));let N=X=>{let W=k.length,V=Y("a",e[0].dataType,W,d),O=Y("b",12,S.length,p),F=Y("scales",e[2].dataType,e[2].dims.length),j=[V,O,F],Z=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;Z&&j.push(Z);let le=R.length,L=he("output",e[0].dataType,le),B=Qe(e[0].dataType),A=()=>{switch(d){case 1:return`
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
              ${(()=>{let z=Math.floor(b/8),D="";for(let P=0;P<z;P++){let K=P*t.bits*4,ne=K+t.bits;D+=`
              ${A()}
              {${t.bits===2?`
                let half_word = b_value >> ${P*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${K}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${B}>(${Array.from({length:4},(J,de)=>`${B}(b_value_lower[${de}]), ${B}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${B}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(J,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:I},programUniforms:T}),getShaderSource:N}},bp=(e,t)=>{gp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(wp(e.inputs,t)):e.compute(yp(e.inputs,t))},_p=e=>Oe(e)}),xp,$p,vp,Mp,Sp,Ip,Ep,Tp,kp,Ew=ie(()=>{be(),ve(),Me(),xp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},$p=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},vp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Mp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Sp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Ip=(e,t,n)=>{switch(n.mode){case 0:return $p(e,t,n.pads.length);case 1:return vp(e,t,n.pads.length);case 2:return Mp(e,t,n.pads.length);case 3:return Sp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Ep=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),s=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&s.push({type:o?e[2].dataType:1,data:t.value}),s.push(...me(e[0].dims,n));let a=["rank"],u=l=>{let c=he("output",e[0].dataType,n.length),d=Y("x",e[0].dataType,r.length),p=d.type.value,f=Ip(c,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:s}),getShaderSource:u}},Tp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let a=e[3].getBigInt64Array();for(let u=0;u<a.length;u++)s[Number(a[u])]=Number(n[u]),s[Number(a[u])+i]=Number(n[u+a.length])}else n.forEach((a,u)=>s[Number(u)]=Number(a));let o=[];return s.forEach(a=>o.push(a)),{mode:t.mode,value:r,pads:o}}else return t},kp=(e,t)=>{xp(e.inputs);let n=Tp(e.inputs,t);e.compute(Ep(e.inputs,n),{inputs:[0]})}}),ar,Go,Wo,qo,Vo,Cp,Ap,Ho,jo,Rp,Op,Ko,Np,zp,Yo,Bp,Pp,Dp,Up,Tw=ie(()=>{mt(),be(),ve(),Me(),ar=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Go=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),a=t.strides.slice(),u=s?t.dilations.slice():[],l=t.pads.slice();kr.adjustPoolAttributes(n,i,o,a,u,l);let c=kr.computePoolOutputShape(n,i,a,u,o,l,t.autoPad),d=Object.assign({},t);s?Object.assign(d,{kernelShape:o,strides:a,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:a,pads:l,cacheKey:t.cacheKey});let p=c.slice();return p.push(p.splice(1,1)[0]),[d,r?p:c]},Wo=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let a=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);s.push({type:12,data:a},{type:12,data:u},{type:12,data:l},{type:12,data:c}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),s.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,o,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let a=q.computeStrides(t.kernelShape);s.push({type:12,data:a},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:a.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[s,o,!!u,!1,!1]}},qo=(e,t,n,r,i,s,o,a,u,l,c,d)=>{let p=i.format==="NHWC",f=t.type.value,m=he("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
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
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${a});
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
                ${s}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${a});
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
            }`}},Vo=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Cp=e=>`${Vo(e)};${e.countIncludePad}`,Ap=e=>`${Vo(e)};${e.storageOrder};${e.dilations}`,Ho=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),jo=(e,t,n,r)=>{let[i,s]=Go(t,r,n),o=Y("x",t.dataType,t.dims.length),a=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${a}(uniforms.kernelSize);`:l+=`value /= ${a}(i32(uniforms.kernelSize) - pad);`;let[c,d,p,f,m]=Wo(s,i);c.push(...me(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:w=>qo(w,o,t.dims.length,s.length,i,u,l,0,d,p,f,m)}},Rp=e=>{let t=e.count_include_pad!==0,n=Ho(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Cp(r)}},Op=(e,t)=>{ar(e.inputs),e.compute(jo("AveragePool",e.inputs[0],!1,t))},Ko={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Np=e=>{let t=e.format;return{format:t,...Ko,cacheKey:t}},zp=(e,t)=>{ar(e.inputs),e.compute(jo("GlobalAveragePool",e.inputs[0],!0,t))},Yo=(e,t,n,r)=>{let[i,s]=Go(t,r,n),o=`
      value = max(x_val, value);
    `,a="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[c,d,p,f,m]=Wo(s,i);return c.push(...me(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:y=>qo(y,u,t.dims.length,s.length,i,o,a,t.dataType===10?-65504:-1e5,d,p,f,m)}},Bp=(e,t)=>{ar(e.inputs),e.compute(Yo("MaxPool",e.inputs[0],!1,t))},Pp=e=>{let t=e.storage_order,n=e.dilations,r=Ho(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Ap(i)}},Dp=e=>{let t=e.format;return{format:t,...Ko,cacheKey:t}},Up=(e,t)=>{ar(e.inputs),e.compute(Yo("GlobalMaxPool",e.inputs[0],!0,t))}}),Lp,Fp,Gp,Wp,kw=ie(()=>{be(),ve(),Ve(),Me(),Lp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Fp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,s=e[0].dims,o=e[1].dataType,a=q.size(s),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,f=c.length===0||c.length===1&&c[0]===1,m=f===!1&&c.length===1,y=We(a),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=Y("input",u?12:r,l.length,x),v=Y("scale",o,c.length),I=d?Y("zero_point",u?12:r,p.length):void 0,T=he("output",o,s.length,b),k=[M,v];I&&k.push(I);let S=[l,c];d&&S.push(p);let R=[{type:12,data:a/b},{type:12,data:n},{type:12,data:t.blockSize},...me(...S,s)],N=X=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(W).declareVariables(...k,T)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:o}],dispatchGroup:{x:Math.ceil(a/b/64),y:1,z:1},programUniforms:R})}},Gp=(e,t)=>{Lp(e.inputs,t),e.compute(Fp(e.inputs,t))},Wp=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),qp,Vp,Hp,Cw=ie(()=>{mt(),be(),Me(),qp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,s=e>t&&n>0;if(r||i||s)throw new Error("Range these inputs' contents are invalid.")},Vp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),s=[i],o=i,a=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...me(s)],u=l=>{let c=he("output",r,s.length),d=c.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:a})}},Hp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&qp(t,n,r),e.compute(Vp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),jp,Kp,Yp,Xp,Aw=ie(()=>{be(),ve(),Ve(),Me(),jp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${s}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${s}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Kp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,s=1,o=Math.ceil(q.sizeToDimension(r,r.length-1)/s),a=r[r.length-1],u=q.sizeFromDimension(n,a),l=[{type:12,data:o},{type:12,data:a},{type:12,data:u},...me(e[1].dims,e[2].dims,i)],c=d=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,s),m=t.reduction!=="none"&&t.reduction!==""?nl("output",e[0].dataType,i.length):he("output",e[0].dataType,i.length,s);return`
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
    ${jp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:c}},Yp=e=>Oe({reduction:e.reduction}),Xp=(e,t)=>{e.compute(Kp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Qp,Zp,Jp,Xo,ef,tf,nf,rf,of,sf,af,uf,Qo,lf,cf,df,hf,pf,ff,mf,Rw=ie(()=>{be(),ve(),Ve(),Me(),Qp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Zp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,s)=>r[i]=e[s]),r},Jp=(e,t,n,r,i,s)=>{let[o,a,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(a>0&&e.length>a&&e[a].dims.length===1&&e[a].dims[0]>0){if(e[a].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Qp(r,t),t.axes.length>0&&Zp(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Xo=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ef=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Xo("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Xo("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",tf=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nf=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,o)=>{r[s]=i[o],r[o+n]=i[t.length+o]}),r):i},rf=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(s=>i.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,o)=>i[s]=n[o])}else n.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,o)=>Math.round(s*t[o]))}return i},of=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(s=>t[s]=r),n.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),i.forEach((s,o)=>i[o]=Math.round(s*t[o]))),i},sf=(e,t,n,r,i)=>`
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
    }`,af=(e,t,n,r,i,s,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",s)};
          var roi_hi = ${pe("uniforms.roi",`i + ${n.length}`,s)};
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
    }`,uf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Qo=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",lf=(e,t,n,r,i)=>{let[s,o,a,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",a,`max(0, min(col, ${n[a]} - 1))`)};
      ${Qo(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${a}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[a]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[a]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${s}])`:"0"};
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
    }`},cf=(e,t,n,r,i,s,o,a,u,l)=>{let c=n.length===2,[d,p]=c?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===d?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${s[y]}, ${s[y]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${a} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${f} = originalIdx + ${f}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:a?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
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
    `},df=(e,t,n,r,i)=>{let[s,o,a,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",a,`max(0, min(height, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Qo(e,l,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${o}];
      var height:${c} = originalIndices[${a}];
      var width:${c} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[a]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[a]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${s}])`:"0"};

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
    }`},hf=(e,t,n,r,i,s)=>{let o=e.dims,a=nf(s,t.axes,o.length),u=rf(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=of(o,l,t)));let c=he("output",e.dataType,u.length),d=Y("input",e.dataType,o.length),p=q.size(u),f=o.length===u.length&&o.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=x=>`
      ${f?"":`
      ${ef(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${uf(d,o)};
              ${tf(t.nearestMode,n,w)};
              ${af(d,c,o,u,l.length,a.length,m)};
              `;case"linear":return`
              ${sf(c,o,u,l.length,a.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${lf(d,c,o,m,y)}`;if(o.length===3||o.length===5)return`${df(d,c,o,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${cf(d,c,o,u,l,a,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",a.length).declareVariables(d,c)}
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
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${a.length>0?a:""}|${f}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:a},...me(o,u)]})}},pf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ff=(e,t)=>{let n=[],r=[],i=[],s=pf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Jp(e.inputs,t,s,n,r,i),e.compute(hf(e.inputs[0],t,s,n,r,i),{inputs:[0]})},mf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,o=e.extrapolationValue,a=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:s,extrapolationValue:o,keepAspectRatioPolicy:a,mode:u,nearestMode:l})}}),gf,yf,wf,Ow=ie(()=>{be(),ve(),Me(),gf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},yf=(e,t,n,r)=>{let i=t.simplified,s=e[0].dims,o=q.size(s),a=s,u=o,l=s.slice(-1)[0],c=r?s.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=We(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=I=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,b),Y("skip",e[1].dataType,e[1].dims,b),Y("gamma",e[2].dataType,e[2].dims,b)];d&&k.push(Y("beta",e[3].dataType,e[3].dims,b)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,b)),k.push(he("output",e[0].dataType,a,b)),f&&k.push(he("mean_output",1,c)),m&&k.push(he("inv_std_output",1,c)),y&&k.push(he("input_skip_bias_sum",e[0].dataType,a,b));let S=Qe(e[0].dataType),R=Qe(1,b);return`

      ${I.registerUniforms(T).declareVariables(...k)}
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
          let f32_value = ${Dn(S,b,"value")};
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
        let mean = ${rn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${rn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:a,dataType:e[0].dataType}];return n>1&&v.push({dims:c,dataType:1}),n>2&&v.push({dims:c,dataType:1}),n>3&&v.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,T)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},wf=(e,t)=>{gf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(yf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),bf,ur,_f,Zo,xf,$f,vf,Mf,Nw=ie(()=>{be(),ve(),Ve(),Me(),bf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ur=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},_f=(e,t)=>{if(e.length>1){let n=ur(e,1),r=ur(e,2),i=ur(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Oe({starts:n,ends:r,axes:i})}else return t},Zo=(e,t,n,r,i)=>{let s=e;return e<0&&(s+=n[r[t]]),i[t]<0?Math.max(0,Math.min(s,n[r[t]]-1)):Math.max(0,Math.min(s,n[r[t]]))},xf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,$f=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],s=ur(e,4);s.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let o=t.starts.map((b,x)=>Zo(b,x,n,i,s)),a=t.ends.map((b,x)=>Zo(b,x,n,i,s));if(i.length!==o.length||i.length!==a.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),a.splice(b,0,n[b]),s.splice(b,0,1));let u=s.map(b=>Math.sign(b));s.forEach((b,x,M)=>{if(b<0){let v=(a[x]-o[x])/b,I=o[x],T=I+v*s[x];o[x]=T,a[x]=I,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((a[b]-o[b])/s[b])});let c={dims:l,dataType:e[0].dataType},d=he("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=q.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:f},{type:12,data:o},{type:6,data:u},{type:12,data:s},...me(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,d)}
        ${xf(p,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},vf=(e,t)=>{bf(e.inputs,t);let n=_f(e.inputs,t);e.compute($f(e.inputs,n),{inputs:[0]})},Mf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Oe({starts:t,ends:n,axes:r})}}),Sf,If,Ef,Tf,zw=ie(()=>{be(),ve(),Ve(),on(),Me(),Sf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},If=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),s=r.length,o=q.normalizeAxis(t.axis,s),a=o<r.length-1,u,l=[];a?(l=Array.from({length:s},(k,S)=>S),l[o]=s-1,l[s-1]=o,u=e.compute(pt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[s-1],p=i/d,f=We(d),m=d/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=Y("x",u.dataType,u.dims,f),x=he("result",u.dataType,u.dims,f),M=b.type.value,v=Qe(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,I=k=>`
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
          rowSumShared = ${M}(${rn("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[a?-1:0]})[0];a&&e.compute(pt(T,l),{inputs:[T]})},Ef=(e,t)=>{Sf(e.inputs),If(e,t)},Tf=e=>Oe({axis:e.axis})}),Jo,kf,Cf,Af,Rf,Bw=ie(()=>{be(),ve(),Me(),Jo=e=>Array.from(e.getBigInt64Array(),Number),kf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Jo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Af=(e,t)=>{let n=e[0].dims,r=t??Jo(e[1]),i=Cf(n,r),s=q.size(i),o=e[0].dataType,a=Y("input",o,n.length),u=he("output",o,i.length),l=c=>`
      const inputShape = ${a.indices(...n)};
      ${c.registerUniform("output_size","u32").declareVariables(a,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${a.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${a.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${a.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",a.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...me(e[0].dims,i)]}),getShaderSource:l}},Rf=e=>{kf(e.inputs),e.compute(Af(e.inputs),{inputs:[0]})}}),Of,Nf,zf,Pw=ie(()=>{be(),ve(),Me(),Of=(e,t,n,r,i)=>{let s=he("output_data",i,n.length,4),o=Y("a_data",t[1].dataType,t[1].dims.length,4),a=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,p,f)=>`select(${p}, ${d}, ${f})`;if(!r)l=s.setByOffset("global_idx",c(o.getByOffset("global_idx"),a.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${s.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_b${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,s)};
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,a,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Nf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,s=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,a=q.size(t);if(s){let l=Bn.calcShape(Bn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,a=q.size(o)}let u=Math.ceil(a/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Of(l,e,o,s,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(a/64/4)},programUniforms:[{type:12,data:u},...me(r,t,n,o)]})}},zf=e=>{e.compute(Nf(e.inputs))}}),Bf,Dw=ie(()=>{Zy(),mo(),Jy(),ew(),tw(),nw(),rw(),uw(),cw(),dw(),hw(),pw(),fw(),mw(),gw(),yw(),ww(),bw(),_w(),xw(),$w(),vw(),Mw(),Sw(),Iw(),jh(),Ew(),Tw(),kw(),Cw(),Aw(),ho(),Rw(),rp(),Ow(),Nw(),zw(),ep(),Bw(),on(),bo(),Pw(),Bf=new Map([["Abs",[mc]],["Acos",[gc]],["Acosh",[yc]],["Add",[id]],["ArgMax",[ec,fo]],["ArgMin",[Jl,fo]],["Asin",[wc]],["Asinh",[bc]],["Atan",[_c]],["Atanh",[xc]],["Attention",[sc]],["AveragePool",[Op,Rp]],["BatchNormalization",[cc]],["BiasAdd",[pc]],["BiasSplitGelu",[td]],["Cast",[vc,$c]],["Ceil",[Ic]],["Clip",[Sc]],["Concat",[wd,bd]],["Conv",[Ro,Co]],["ConvTranspose",[Hd,Wd]],["Cos",[Ec]],["Cosh",[Tc]],["CumSum",[Kd,Yd]],["DepthToSpace",[Jd,eh]],["DequantizeLinear",[Gp,Wp]],["Div",[od]],["Einsum",[sh,ah]],["Elu",[kc,nr]],["Equal",[sd]],["Erf",[Cc]],["Exp",[Ac]],["Expand",[dh]],["FastGelu",[ph]],["Floor",[Rc]],["FusedConv",[Ro,Co]],["Gather",[yh,gh]],["GatherElements",[Th,Eh]],["GatherBlockQuantized",[vh,Mh]],["GatherND",[bh,_h]],["Gelu",[Oc]],["Gemm",[Rh,Ah]],["GlobalAveragePool",[zp,Np]],["GlobalMaxPool",[Up,Dp]],["Greater",[cd]],["GreaterOrEqual",[hd]],["GridSample",[Fh,Gh]],["GroupQueryAttention",[ap]],["HardSigmoid",[Fc,Lc]],["InstanceNormalization",[cp]],["LayerNormalization",[pp]],["LeakyRelu",[Nc,nr]],["Less",[dd]],["LessOrEqual",[pd]],["Log",[Yc]],["MatMul",[mp]],["MatMulNBits",[bp,_p]],["MaxPool",[Bp,Pp]],["Mul",[ad]],["MultiHeadAttention",[Hh,qh]],["Neg",[Bc]],["Not",[zc]],["Pad",[kp]],["Pow",[ud]],["QuickGelu",[Zc,nr]],["Range",[Hp]],["Reciprocal",[Pc]],["ReduceMin",[Kl]],["ReduceMean",[Wl]],["ReduceMax",[jl]],["ReduceSum",[Xl]],["ReduceProd",[Yl]],["ReduceL1",[ql]],["ReduceL2",[Vl]],["ReduceLogSum",[Zl]],["ReduceLogSumExp",[Hl]],["ReduceSumSquare",[Ql]],["Relu",[Dc]],["Resize",[ff,mf]],["RotaryEmbedding",[np]],["ScatterND",[Xp,Yp]],["Sigmoid",[Uc]],["Sin",[Gc]],["Sinh",[Wc]],["Slice",[vf,Mf]],["SkipLayerNormalization",[wf]],["Split",[Zh,Jh]],["Sqrt",[qc]],["Softmax",[Ef,Tf]],["Sub",[ld]],["Tan",[Vc]],["Tanh",[Hc]],["ThresholdedRelu",[Kc,nr]],["Tile",[Rf]],["Transpose",[cl,dl]],["Where",[zf]]])}),Pf,Uw=ie(()=>{mt(),jt(),Me(),Pf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){zt(e.programInfo.name);let s=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let a=[];for(let l of t)a.push({binding:a.length,resource:{buffer:l.buffer}});for(let l of n)a.push({binding:a.length,resource:{buffer:l.buffer}});i&&a.push({binding:a.length,resource:i});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:a,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),$t(e.programInfo.name)}dispose(){}build(e,t){zt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=il(t,this.backend.device.limits),s=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${s}`,a=n.createShaderModule({code:o,label:e.name});Ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:a,entryPoint:"main"},layout:"auto",label:e.name});return $t(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let s=t*n*r,o=Math.ceil(Math.sqrt(s));if(o>i){if(o=Math.ceil(Math.cbrt(s)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),Df={};On(Df,{WebGpuBackend:()=>Gf});var Uf,Lf,Ff,Gf,Lw=ie(()=>{mt(),be(),jt(),qu(),Xy(),Dw(),Uw(),Uf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let s=e[r].dims.length;n.push(`${i};${s}`);break}case"dims":{let s=e[r].dims.join(",");n.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Lf=(e,t,n)=>{var i,s;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Uf(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Ff=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=a=>t.features.has(a)&&n.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let s=t,o=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Ff(o),this.gpuDataManager=el(this),this.programManager=new Pf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ki(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;zt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=n[i],o=s.kernelId,a=this.kernels.get(o),u=a.kernelType,l=a.kernelName,c=s.programName,d=s.inputTensorViews,p=s.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:Ht(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Ht(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";d.forEach((M,v)=>{b+=`input[${v}]: [${M.dims}] | ${Ht(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${Ht(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}vr("GPU",`${c}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),$t()}run(e,t,n,r,i,s){zt(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);o.push(v)}let{outputs:a,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?a.map((x,M)=>M):n;if(c.length!==a.length)throw new Error(`Output size ${c.length} must be equal to ${a.length}.`);let d=[],p=[];for(let x=0;x<a.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=s)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let M=c[x]===-1,v=c[x]===-2,I=M||v?i(a[x].dataType,a[x].dims):r(c[x],a[x].dataType,a[x].dims);if(d.push(I),I.data===0)continue;let T=this.gpuDataManager.get(I.data);if(!T)throw new Error(`no GPU data for output: ${I.data}`);if(M&&this.temporaryData.push(T),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(T)}p.push(T)}if(o.length!==t.length||p.length!==d.length){if(p.length===0)return $t(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let R=k.type===10?2:4,N,X;k.type===10?(X=S.length>4?16:S.length>2?8:S.length*R,N=S.length>4?16:R*S.length):(X=S.length<=2?S.length*R:16,N=16),x=Math.ceil(x/X)*X,M.push(x);let W=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/W)*N:S.length*R});let v=16;x=Math.ceil(x/v)*v;let I=new ArrayBuffer(x);l.forEach((k,S)=>{let R=M[S],N=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(I,R,N.length).set(N);else if(k.type===12)new Uint32Array(I,R,N.length).set(N);else if(k.type===10)new Uint16Array(I,R,N.length).set(N);else if(k.type===1)new Float32Array(I,R,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Ht(k.type)}`)});let T=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,I,0,x),this.gpuDataManager.release(T.id),f={offset:0,size:x,buffer:T.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Lf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ce("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,I=typeof M.data=="number"?1:M.data.length,[T,k]=b.uniformVariablesInfo[x];if(v!==T||I!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${T} with size ${k}, got type ${v} with size ${I} in program "${b.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,p,m,f),$t(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Bf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,s=r.kernelName,o=r.kernelEntry,a=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,a[0]&&(a[1]=a[0](a[1]),a[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,a[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${s}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,s);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await so(this,e,t);return Yi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Wf={};On(Wf,{init:()=>Vf});var Fr,qf,Vf,Fw=ie(()=>{be(),jt(),ve(),Yy(),Fr=class Iy{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new Iy(this.module,this.dataType,this.data,t)}},qf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,s));let o=Number(e.getValue(r*i++,s));this.outputCount=Number(e.getValue(r*i++,s)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,s));let a=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,s)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,s)),p=[];for(let f=0;f<d;f++)p.push(Number(e.getValue(r*i++,s)));a.push(new Fr(e,l,c,p))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(a=>typeof a=="number"?this.inputs[a]:a))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(a,u,l)=>new Fr(this.module,u,this.output(a,l),l),s=(a,u)=>{let l=_n(a,u);if(!l)throw new Error(`Unsupported data type: ${a}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Fr(this.module,a,c,u)};return this.backend.run(e,n,r,i,s,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(s+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Vf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Lw(),Yn(Df)).WebGpuBackend,o=new s;await o.initialize(n,r),i("webgpu",[o,a=>o.alloc(Number(a)),a=>o.free(a),(a,u,l,c=!1)=>{if(c)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(a)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(a),Number(u));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(a)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(a>>>0),Number(a>>>0)+Number(l));o.upload(Number(u),d)}},async(a,u,l)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${u}, size=${l}`),await o.download(Number(a),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(a,u,l)=>o.createKernel(a,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),a=>o.releaseKernel(a),(a,u,l,c)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${a}, contextDataOffset=${u}`);let d=new qf(t,o,Number(u));return o.computeKernel(Number(a),d,c)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let s=new Xu(n);i("webnn",[s,()=>s.reserveTensorId(),o=>s.releaseTensorId(o),async(o,a,u,l,c)=>s.ensureTensor(o,a,u,l,c),(o,a)=>{s.uploadTensor(o,a)},async(o,a)=>s.downloadTensor(o,a),(o,a)=>s.registerMLContext(o,a),!!n.trace])}}}),Hf,es,ts,sn,jf,ns,Gr,rs,is,os,ss,as,us,Kf=ie(()=>{mt(),Hy(),jy(),be(),yn(),Wi(),Nu(),Hf=(e,t)=>{De()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},es=async e=>{Hf(e.wasm.numThreads,Tr(e.logLevel))},ts=async(e,t)=>{var r,i;(i=(r=De()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(Fw(),Yn(Wf)).init;t==="webgpu"&&await s("webgpu",De(),e,n),t==="webnn"&&await s("webnn",De(),e)}},sn=new Map,jf=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+r,s))]}finally{t.stackRestore(n)}},ns=(e,t)=>{let n=De(),r=n.stackSave(),i=0;try{let s=n.PTR_SIZE,o=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(e,t,o,o+s)!==0&&Ne("Can't get session input/output metadata.");let a=Number(n.getValue(o,"*"));i=Number(n.getValue(o+s,"*"));let u=n.HEAP32[i/4];if(u===0)return[a,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*s,"*"));c.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*s,"*")))}return[a,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Gr=e=>{let t=De(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},rs=async(e,t)=>{var d,p,f,m;let n,r,i=De();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Gr(e);let s=0,o=0,a=0,u=[],l=[],c=[];try{if([o,u]=await Ou(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let R of t.externalData){let N=typeof R=="string"?R:R.path;S.push(ji(typeof R=="string"?R:R.data).then(X=>{i.mountExternalData(N,X)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let R=S,N=R==null?void 0:R.context,X=R==null?void 0:R.gpuDevice,W=R==null?void 0:R.deviceType,V=R==null?void 0:R.powerPreference;N?i.currentContext=N:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:W,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(n,r,o),(d=i.webgpuOnCreateSession)==null||d.call(i,s),s===0&&Ne("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=jf(s),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],I=[],T=[];for(let S=0;S<y;S++){let[R,N,X]=ns(s,S);R===0&&Ne("Can't get an input name."),l.push(R);let W=i.UTF8ToString(R);x.push(W),v.push(N===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:Ht(N),shape:X})}for(let S=0;S<w;S++){let[R,N,X]=ns(s,S+y);R===0&&Ne("Can't get an output name."),c.push(R);let W=i.UTF8ToString(R);M.push(W),I.push(N===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:Ht(N),shape:X});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[W])??"cpu",O=i.webnnIsGraphOutput;if(V==="cpu"&&O&&O(s,W)){T.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(b&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(V)}}let k=null;return T.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(a=i._OrtCreateBinding(s),a===0&&Ne("Can't create IO binding."),k={handle:a,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Hi(S))}),sn.set(s,[s,l,c,k,b,!1]),[s,x,M,v,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),a!==0&&i._OrtReleaseBinding(a)!==0&&Ne("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&Ne("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},is=e=>{var u,l,c;let t=De(),n=sn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,s,o,a]=n;o&&(a&&t._OrtClearBoundOutputs(o.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),s.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),sn.delete(e)},os=async(e,t,n,r,i,s,o=!1)=>{if(!e){t.push(0);return}let a=De(),u=a.PTR_SIZE,l=e[0],c=e[1],d=e[3],p=d,f,m;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;m=_n(bn(l),c);{let x=a.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,s,b,m)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;m=_n(bn(l),c);let x=a.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,bn(l),c)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=a._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);a.setValue(f+x*u,vt(b[x],n),"*")}}else{let x=a.webnnIsGraphInput,M=a.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=a.UTF8ToString(i);if(x(r,v)||M(r,v)){let I=bn(l);m=_n(I,c),p="ml-tensor";let T=a.webnnCreateTemporaryTensor,k=a.webnnUploadTensor;if(!T||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await T(r,I,c);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=a._malloc(m),n.push(f),a.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=a._malloc(m),n.push(f),a.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=a.stackSave(),w=a.stackAlloc(4*c.length);try{c.forEach((x,M)=>a.setValue(w+M*u,x,u===4?"i32":"i64"));let b=a._OrtCreateTensor(bn(l),f,m,w,c.length,Hi(p));b===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(b)}finally{a.stackRestore(y)}},ss=async(e,t,n,r,i,s)=>{var W,V,O,F;let o=De(),a=o.PTR_SIZE,u=sn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],v=[],I=[],T=[],k=o.stackSave(),S=o.stackAlloc(y*a),R=o.stackAlloc(y*a),N=o.stackAlloc(w*a),X=o.stackAlloc(w*a);try{[b,x]=Tu(s),mn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await os(n[L],M,I,e,c[t[L]],t[L],f);for(let L=0;L<w;L++)await os(i[L],v,I,e,d[r[L]],y+r[L],f);gn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)o.setValue(S+L*a,M[L],"*"),o.setValue(R+L*a,c[t[L]],"*");for(let L=0;L<w;L++)o.setValue(N+L*a,v[L],"*"),o.setValue(X+L*a,d[r[L]],"*");if(p&&!m){let{handle:L,outputPreferredLocations:B,outputPreferredLocationsEncoded:A}=p;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);mn("wasm bindInputsOutputs");for(let z=0;z<y;z++){let D=t[z];await o._OrtBindInput(L,c[D],M[z])!==0&&Ne(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let D=r[z];(W=i[z])!=null&&W[3]?(T.push(v[z]),o._OrtBindOutput(L,d[D],v[z],0)!==0&&Ne(`Can't bind pre-allocated output[${z}] for session=${e}.`)):o._OrtBindOutput(L,d[D],0,A[D])!==0&&Ne(`Can't bind output[${z}] to ${B[z]} for session=${e}.`)}gn("wasm bindInputsOutputs"),sn.set(e,[l,c,d,p,f,!0])}(V=o.jsepOnRunStart)==null||V.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let j;p?j=await o._OrtRunWithBinding(l,p.handle,w,N,b):j=await o._OrtRun(l,R,S,y,X,w,N,b),j!==0&&Ne("failed to call OrtRun().");let Z=[],le=[];mn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let B=Number(o.getValue(N+L*a,"*"));if(B===v[L]||T.includes(v[L])){Z.push(i[L]),B!==v[L]&&o._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.");continue}let A=o.stackSave(),z=o.stackAlloc(4*a),D=!1,P,K=0;try{o._OrtGetTensorData(B,z,z+a,z+2*a,z+3*a)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let ne=a===4?"i32":"i64",J=Number(o.getValue(z,ne));K=o.getValue(z+a,"*");let de=o.getValue(z+a*2,"*"),$e=Number(o.getValue(z+a*3,ne)),G=[];for(let oe=0;oe<$e;oe++)G.push(Number(o.getValue(de+oe*a,ne)));o._OrtFree(de)!==0&&Ne("Can't free memory for tensor dims.");let ee=G.reduce((oe,se)=>oe*se,1);P=Ht(J);let re=p==null?void 0:p.outputPreferredLocations[r[L]];if(P==="string"){if(re==="gpu-buffer"||re==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let oe=[];for(let se=0;se<ee;se++){let xe=o.getValue(K+se*a,"*"),_e=o.getValue(K+(se+1)*a,"*"),Q=se===ee-1?void 0:_e-xe;oe.push(o.UTF8ToString(xe,Q))}Z.push([P,G,oe,"cpu"])}else if(re==="gpu-buffer"&&ee>0){let oe=o.jsepGetBuffer;if(!oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=oe(K),xe=_n(J,ee);if(xe===void 0||!qi(P))throw new Error(`Unsupported data type: ${P}`);D=!0,Z.push([P,G,{gpuBuffer:se,download:o.jsepCreateDownloader(se,xe,P),dispose:()=>{o._OrtReleaseTensor(B)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(re==="ml-tensor"&&ee>0){let oe=o.webnnEnsureTensor,se=o.webnnIsGraphInputOutputTypeSupported;if(!oe||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_n(J,ee)===void 0||!Vi(P))throw new Error(`Unsupported data type: ${P}`);if(!se(e,P,!1))throw new Error(`preferredLocation "ml-tensor" for ${P} output is not supported by current WebNN Context.`);let xe=await oe(e,K,J,G,!1);D=!0,Z.push([P,G,{mlTensor:xe,download:o.webnnCreateMLTensorDownloader(K,P),dispose:()=>{o.webnnReleaseTensorId(K),o._OrtReleaseTensor(B)}},"ml-tensor"])}else if(re==="ml-tensor-cpu-output"&&ee>0){let oe=o.webnnCreateMLTensorDownloader(K,P)(),se=Z.length;D=!0,le.push((async()=>{let xe=[se,await oe];return o.webnnReleaseTensorId(K),o._OrtReleaseTensor(B),xe})()),Z.push([P,G,[],"cpu"])}else{let oe=Er(P),se=new oe(ee);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(o.HEAPU8.subarray(K,K+se.byteLength)),Z.push([P,G,se,"cpu"])}}finally{o.stackRestore(A),P==="string"&&K&&o._free(K),D||o._OrtReleaseTensor(B)}}p&&!f&&(o._OrtClearBoundOutputs(p.handle)!==0&&Ne("Can't clear bound outputs."),sn.set(e,[l,c,d,p,f,!1]));for(let[L,B]of await Promise.all(le))Z[L][2]=B;return gn("wasm ProcessOutputTensor"),Z}finally{(F=o.webnnOnRunEnd)==null||F.call(o,l),o.stackRestore(k),M.forEach(j=>o._OrtReleaseTensor(j)),v.forEach(j=>o._OrtReleaseTensor(j)),I.forEach(j=>o._free(j)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(j=>o._free(j))}},as=e=>{let t=De(),n=sn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},us=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),an,ct,Un,lr,cr,Wr,ls,qr,En,Tn,Yf,Xf,Qf,Zf,Jf,em,tm,nm,rm=ie(()=>{mt(),Kf(),yn(),Ui(),an=()=>!!ze.wasm.proxy&&typeof document<"u",Un=!1,lr=!1,cr=!1,qr=new Map,En=(e,t)=>{let n=qr.get(e);n?n.push(t):qr.set(e,[t])},Tn=()=>{if(Un||!lr||cr||!ct)throw new Error("worker not ready")},Yf=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(cr=!0,ls[1](e.data.err)):(lr=!0,ls[0]()),Wr&&(URL.revokeObjectURL(Wr),Wr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Xf=async()=>{if(!lr){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,an())return new Promise((e,t)=>{ct==null||ct.terminate(),vu().then(([n,r])=>{try{ct=r,ct.onerror=s=>t(s),ct.onmessage=Yf,ls=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||zi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ct.postMessage(i),Wr=n}catch(i){t(i)}},t)});try{await Gi(ze.wasm),await es(ze),lr=!0}catch(e){throw cr=!0,e}finally{Un=!1}}},Qf=async e=>{if(an())return Tn(),new Promise((t,n)=>{En("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};ct.postMessage(r)});await ts(ze,e)},Zf=async e=>an()?(Tn(),new Promise((t,n)=>{En("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ct.postMessage(r,[e.buffer])})):Gr(e),Jf=async(e,t)=>{if(an()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tn(),new Promise((n,r)=>{En("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),ct.postMessage(i,s)})}else return rs(e,t)},em=async e=>{if(an())return Tn(),new Promise((t,n)=>{En("release",[t,n]);let r={type:"release",in:e};ct.postMessage(r)});is(e)},tm=async(e,t,n,r,i,s)=>{if(an()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tn(),new Promise((o,a)=>{En("run",[o,a]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};ct.postMessage(l,us(u))})}else return ss(e,t,n,r,i,s)},nm=async e=>{if(an())return Tn(),new Promise((t,n)=>{En("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ct.postMessage(r)});as(e)}}),cs,im,om,Gw=ie(()=>{mt(),rm(),be(),Ai(),Nu(),cs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},im=e=>{switch(e[3]){case"cpu":return new Be(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!qi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Be.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Vi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Be.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},om=class{async fetchModelAndCopyToWasmMemory(e){return Zf(await ji(e))}async loadModel(e,t){zt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Jf(n,t),$t()}async dispose(){return em(this.sessionId)}async run(e,t,n){zt();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],f=d[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let s=[],o=[];Object.entries(t).forEach(d=>{let p=d[0],f=d[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);s.push(f),o.push(m)});let a=r.map((d,p)=>cs(d,()=>`input "${this.inputNames[i[p]]}"`)),u=s.map((d,p)=>d?cs(d,()=>`output "${this.outputNames[o[p]]}"`):null),l=await tm(this.sessionId,i,a,o,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[o[d]]]=s[d]??im(l[d]);return $t(),c}startProfiling(){}endProfiling(){nm(this.sessionId)}}}),sm={};On(sm,{OnnxruntimeWebAssemblyBackend:()=>hs,initializeFlags:()=>ds,wasmBackend:()=>am});var ds,hs,am,Ww=ie(()=>{mt(),rm(),Gw(),ds=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?Ty("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},hs=class{async init(e){ds(),await Xf(),await Qf(e)}async createInferenceSessionHandler(e,t){let n=new om;return await n.loadModel(e,t),n}},am=new hs});mt(),mt(),mt();var qw="1.27.0";{let e=(Ww(),Yn(sm)).wasmBackend;Nn("webgpu",e,5),Nn("webnn",e,5),Nn("cpu",e,10),Nn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:qw,enumerable:!0});/**
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
 */const Vr=new Map;function um(e,t){const n=Vr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Vr.set(e,n)}function st(e,t){const n=performance.now();try{return t()}finally{um(e,performance.now()-n)}}async function et(e,t){const n=performance.now();try{return await t()}finally{um(e,performance.now()-n)}}function Vw(){return[...Vr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Hw(){Vr.clear()}const jw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Kw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),Yw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function lm(e){const t=jw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Xw(e){const t=Yw.exec(e);if(t===null)return lm(e);const[,n,r,i,s]=t,o=lm(s);if(n==="both")return o;const a=Kw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${a}${u} — ${o}`}function Qw(e,t,n,r){const i=t*n,s=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return s.set(e),s;for(let o=0;o<i;o+=1)s[o*4]=e[o*r],s[o*4+1]=e[o*r+1],s[o*4+2]=e[o*r+2],s[o*4+3]=255;return s}function at(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ln(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function cm(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,a)=>o-a),r=t/100*(n.length-1),i=Math.floor(r),s=Math.ceil(r);return i===s?n[i]:n[i]*(s-r)+n[s]*(r-i)}const Zw=114;function Jw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),s=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-s)/2),padY:Math.floor((n-o)/2),resizedWidth:s,resizedHeight:o}}function ps(e,t,n){const{width:r,height:i,channels:s,data:o}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),v=(p*r+b)*s,I=(p*r+x)*s,T=(f*r+b)*s,k=(f*r+x)*s,S=(c*t+y)*3;for(let R=0;R<3;R++){const N=o[v+R]*(1-M)+o[I+R]*M,X=o[T+R]*(1-M)+o[k+R]*M;a[S+R]=Math.min(255,Math.max(0,Math.round(N*(1-m)+X*m)))}}}return a}function Fn(e,t,n){const{width:r,height:i,channels:s,data:o}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,p=Math.min((c+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let I=Math.floor(d);I<p;I++){const T=Math.min(I+1,p)-Math.max(I,d);if(!(T<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const R=S*T,N=(I*r+k)*s;w+=o[N]*R,b+=o[N+1]*R,x+=o[N+2]*R,M+=R}}const v=(c*t+f)*3;a[v]=Math.min(255,Math.max(0,at(w/M))),a[v+1]=Math.min(255,Math.max(0,at(b/M))),a[v+2]=Math.min(255,Math.max(0,at(x/M)))}}return a}function dm(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function dr(e,t,n){const{width:r,height:i,channels:s,data:o}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n,c=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=dm(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=dm(b-x),v=(p*t+w)*3;for(let I=0;I<3;I++){let T=0;for(let k=0;k<4;k++){const S=d(m-1+k)*r;let R=0;for(let N=0;N<4;N++)R+=M[N]*o[(S+c(x-1+N))*s+I];T+=y[k]*R}a[v+I]=Math.min(255,Math.max(0,Math.round(T)))}}}return a}function Hr(e,t,n=1){const r=Jw(e.width,e.height,t,n),i=ps(e,r.resizedWidth,r.resizedHeight),s=t*t,o=new Float32Array(3*s).fill(Zw/255);for(let a=0;a<r.resizedHeight;a++){const u=(a+r.padY)*t+r.padX,l=a*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,p=u+c;o[p]=i[d]/255,o[s+p]=i[d+1]/255,o[2*s+p]=i[d+2]/255}}return{tensor:o,params:r}}function fs(e,t,n,r){const i=[],s=Math.floor(e.length/6);for(let o=0;o<s;o++){const a=e[o*6],u=e[o*6+1],l=e[o*6+2],c=e[o*6+3],d=e[o*6+4],p=e[o*6+5];if(d<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(a-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:f,confidence:d,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const hr=.8,hm=.65,eb=110,tb=1280;function nb(e,t,n){if(n==null)return hr;if(n.length===0)return hm;const r=Math.max(e,t);if(!(r>0))return hr;const i=tb/r,s=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(s.length===0)return hr;const o=s.length;return(o%2===1?s[(o-1)/2]:(s[o/2-1]+s[o/2])/2)>=eb?hm:hr}const pm=.25,fm=.6;function rb(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),s=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,s,o].every(b=>Number.isFinite(b)))return null;const a=s-r,u=o-i;if(a<=0||u<=0)return null;const l=Math.trunc(a*(a>=u?pm:fm)),c=Math.trunc(u*(a>=u?fm:pm)),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(Math.trunc(e),s+l),m=Math.min(Math.trunc(t),o+c),y=f-d,w=m-p;return y<=0||w<=0?null:{x:d,y:p,width:y,height:w}}const ib=3,ob=.15,sb=.6;function ms(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function ab(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function ub(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],s=[Number(e[1][0]),Number(e[1][1])];if(![...i,...s].every(v=>Number.isFinite(v)))return null;const o=ms(i,s);if(!(o>0))return null;const a=[];for(const v of t??[]){const I=Math.trunc(Number(v.n));if(!Number.isFinite(I)||I<ib)continue;const T=ab(v.poly);T!==null&&a.push({owner:v.owner,c:T,n:I,d0:0,d1:0,ecart:0})}if(a.length<2)return null;a.sort((v,I)=>I.n-v.n);const u=a.slice(0,2);let l=!1;a.length>2&&u[1].n>0&&(l=a[2].n/u[1].n>sb);for(const v of u)v.d0=ms(v.c,i),v.d1=ms(v.c,s),v.ecart=Math.abs(v.d0-v.d1);const c=[...u].sort((v,I)=>I.ecart-v.ecart),d=c[0],p=c[1],f=d.d0<d.d1?0:1,m=r>0?1:0,y=f===m?d:p,w=f===m?p:d,b=f===1?d.owner:p.owner,x=f===1?p.owner:d.owner,M=d.ecart/o<ob;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function lb(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const cb=.6;function mm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<n)continue;const a=(e[s*6]-t.padX)/t.scale,u=(e[s*6+1]-t.padY)/t.scale,l=(e[s*6+2]-t.padX)/t.scale,c=(e[s*6+3]-t.padY)/t.scale,d=at((a+l)/2),p=at((u+c)/2),f=at((l-a+(c-u))/4);f>=1&&r.push({cx:d,cy:p,r:f})}return r}function db(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(cb*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function hb(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ln(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),s=Math.floor(r.cy/t);return i!==s?i-s:n.cx-r.cx})}function gm(e,t,n){const r=mm(e,t,n);return r.length===0?[]:hb(db(r))}function pb(e,t,n){return mm(e,t,n)}function gs(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<n||r.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return r}const fb=.5,mb=.7,gb=.55;function ys(e){const t=e.map(([n,r,i,s])=>Math.min(i-n,s-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function ym(e){if(e.length===0)return[];const t=(fb*ys(e))**2,n=[];for(const i of e){const s=(i[0]+i[2])/2,o=(i[1]+i[3])/2,a=n.find(u=>(u.cx-s)**2+(u.cy-o)**2<=t);if(a===void 0)n.push({cx:s,cy:o,boxes:[i]});else{a.boxes.push(i);const u=a.boxes.length;a.cx=(a.cx*(u-1)+s)/u,a.cy=(a.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Ln(i.map(s=>s[0]))),Math.trunc(Ln(i.map(s=>s[1]))),Math.trunc(Ln(i.map(s=>s[2]))),Math.trunc(Ln(i.map(s=>s[3])))]);if(r.length>=2){const i=ys(r),s=r.map(()=>!0);for(let o=0;o<r.length;o++)if(s[o])for(let a=o+1;a<r.length;a++){if(!s[a])continue;const u=r[o],l=r[a],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=c*d,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=mb*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(s[y<=w?a:o]=!1,!s[o])break}}r=r.filter((o,a)=>s[a])}if(r.length>=3){const i=ys(r);r=r.filter(([s,o,a,u])=>Math.min(a-s,u-o)>=gb*i)}return r}const yb=.7;function wb(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),s=Math.min(e[3],t[3]);if(i<=n||s<=r)return 0;const o=(i-n)*(s-r),a=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=a+u-o;return l>0?o/l:0}function wm(e,t,n,r,i,s=yb){const o=t-4;if(o<=0||n<=0)return[];const a=[];for(let l=0;l<n;l+=1){let c=0,d=0;for(let p=0;p<o;p+=1){const f=e[(4+p)*n+l];f>c&&(c=f,d=p)}c<i||a.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:d})}a.sort((l,c)=>c.score-l.score);const u=[];for(const l of a){let c=!1;for(const d of u)if(d.cls===l.cls&&wb(d.box,l.box)>s){c=!0;break}c||u.push(l)}return u.map(l=>l.box)}const bm=["brown","grey","blue","green","yellow","red","purple"],bb={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},_b=.7;function _m(e){const t=e.map((i,s)=>s).sort((i,s)=>e[s].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const s=e[i],[o,a,u,l]=s.box;let c=!1;for(const d of r){const p=e[d];if(p.family!==s.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(o+u,f+y)-Math.max(o,f)),x=Math.max(0,Math.min(a+l,m+w)-Math.max(a,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=_b*M){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,s)=>!n.has(s))}function jr(e,t,n){const r=fs(e,t,n,bm.length).map(i=>{const s=bm[i.classIndex];return{color:s,family:bb[s],box:i.box,confidence:i.confidence}});return _m(r)}const xb=8,$b=.8,xm=1.25;function vb(e){if(e.length<xb)return[];const t=[],n=[];for(const o of e){const[,,a,u]=o.box;a>u*xm?t.push(o):u>a*xm&&n.push(o)}const[r,i,s]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<$b*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${s} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Mb=2.25,$m=8;function Sb(e){if(e.length<$m)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=Mb*n[Math.floor(n.length/2)],i=r*r,s=e.map((d,p)=>p),o=d=>{for(;s[d]!==d;)s[d]=s[s[d]],d=s[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const f=t[d][0]-t[p][0],m=t[d][1]-t[p][1];f*f+m*m<=i&&(s[o(d)]=o(p))}const a=new Map;for(let d=0;d<e.length;d++){const p=o(d);a.set(p,[...a.get(p)??[],d])}let u=[];for(const d of a.values())d.length>u.length&&(u=d);if(u.length<$m||u.length===e.length)return[];const l=new Set(u),c=e.map((d,p)=>p).filter(d=>!l.has(d));return c.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const nt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function kt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),s=r-i,o=r===0?0:Math.round(255*s/r);if(s===0)return{h:0,s:o,v:r};let a;return r===e?a=60*(t-n)/s:r===t?a=120+60*(n-e)/s:a=240+60*(e-t)/s,a<0&&(a+=360),{h:Math.round(a/2),s:o,v:r}}const Ib=.42,Eb=22,Tb=43,kb=120,Cb=1.5,Ab=.72,Rb=110,vm=3;function pr(e,t,n){const{width:r,height:i,channels:s,data:o}=e;if(r<4||i<4)return 0;const a=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*Ib);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-a)**2+(d-u)**2>l*l)continue;const f=(d*r+p)*s,m=o[f],y=o[f+1],w=o[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),c+=1)}return c}function Ob(e){let t=0,n=0,r=0,i=pr(e,!1,(s,o,a)=>{const u=kt(s,o,a);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=pr(e,!0,(s,o,a)=>{const u=kt(s,o,a);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Nb(e){let t=0,n=0,r=pr(e,!1,(s,o)=>{t+=s,n+=o});if(r===0&&(r=pr(e,!0,(s,o)=>{t+=s,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function zb(e){let t=0;const n=pr(e,!0,(r,i,s)=>{t+=kt(r,i,s).s});return n===0?null:t/n}function Bb(e){const t=Ob(e);if(t===null||t.s<=Eb)return 1;if(t.s>=kb){const n=Nb(e);return n!==null&&n>=Cb?6:3}return t.s>=Tb?3:6}function Pb(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,a)=>o-a);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,a)=>e[o].r-e[a].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>s.get(o))}function Db(e,t){const n=[...t];if(e.length<vm||t.length!==e.length)return n;const r=e.map(o=>zb(o)),i=r.filter(o=>o!==null);if(i.length<vm)return n;const s=Ln(i);return s<=0||r.forEach((o,a)=>{o!==null&&n[a]!==1&&o<Ab*s&&o<Rb&&(n[a]=1)}),n}function Mm(e,t){const{cx:n,cy:r,r:i}=t,s=Math.max(0,n-i),o=Math.max(0,r-i),a=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,a-s),c=Math.max(0,u-o),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+s-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(f+s))*e.channels;d[m]=e.data[w],d[m+1]=e.data[w+1],d[m+2]=e.data[w+2]}else d[m]=255,d[m+1]=255,d[m+2]=255}return{width:l,height:c,channels:3,data:d}}function Ub(e,t){const n=t.map(s=>Mm(e,s)),r=n.map(s=>Bb(s)),i=Pb(t,r);return Db(n,i)}function Lb(e){const{width:t,height:n,channels:r,data:i}=e,s=new Uint8Array(t*n);for(let o=0,a=0;o<s.length;o++,a+=r)s[o]=i[a]*4899+i[a+1]*9617+i[a+2]*1868+8192>>14;return{width:t,height:n,data:s}}function Sm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,s=e.height/n;for(let o=0;o<n;o++){const a=o*s,u=Math.min((o+1)*s,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(a);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,a);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,c);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,at(p/f)))}}return{width:t,height:n,data:r}}function Fb(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const s=255/(n-t[r]),o=new Uint8Array(256);let a=0;for(let u=r+1;u<256;u++)a+=t[u],o[u]=Math.min(255,Math.max(0,at(a*s)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function Gb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){let a=!0;for(let u=-1;u<=1&&a;u++)for(let l=-1;l<=1;l++){const c=o+l,d=s+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){a=!1;break}}i[s*t+o]=a&&r[s*t+o]>0?255:0}return{width:t,height:n,data:i}}function Wb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){let a=!1;for(let u=-1;u<=1&&!a;u++)for(let l=-1;l<=1;l++){const c=o+l,d=s+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){a=!0;break}}i[s*t+o]=a?255:0}return{width:t,height:n,data:i}}function ws(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),s=[],o=new Int32Array(t*n);let a=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;o[c++]=u,i[u]=a;let d=0,p=0,f=0;for(;l<c;){const m=o[l++],y=m%t,w=m/t|0;d+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,v=w+b;if(M<0||M>=t||v<0||v>=n)continue;const I=v*t+M;r[I]>0&&i[I]===0&&(i[I]=a,o[c++]=I)}}s[a]={area:d,centroidX:p/d,centroidY:f/d},a+=1}return{labels:i,stats:s}}function qb(e,t,n){return Im(Float32Array.from(e.data),e.width,t,n)}function Im(e,t,n,r){const i=new Float32Array(t*t),s=t/2,o=-n*Math.PI/180,a=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-s,p=l-s,f=a*d-u*p+s,m=u*d+a*p+s,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(T,k)=>T>=0&&T<t&&k>=0&&k<t?e[k*t+T]:r,v=M(y,w)*(1-b)+M(y+1,w)*b,I=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+c]=v*(1-x)+I*x}return i}const Vb=.9,Hb=.34,jb=[.55,.6,.66,.72],Kb=22,Yb=88,Xb=35,Gn=28,bs=4,Qb=Array.from({length:15},(e,t)=>-21+t*3),Em=[-2,0,2],Zb=3,Jb=.3;function e_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function t_(e){let t=e.width,n=-1,r=e.height,i=-1,s=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(s+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(s<8)return null;const o=n-t+1,a=i-r+1,u=Math.max(a,o),l=new Uint8Array(u*u),c=Math.floor((u-o)/2),d=Math.floor((u-a)/2);for(let y=0;y<a;y++)for(let w=0;w<o;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const p=Gn-2*bs,f=Sm({width:u,height:u,data:l},p,p),m=new Float32Array(Gn*Gn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+bs)*Gn+(w+bs)]=f.data[y*p+w]>110?1:0;return m}function n_(e,t){const{width:n,height:r,channels:i,data:s}=e,o=Math.floor(r/2),a=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Hb);if(u<4)return null;const l=o-u,c=a-u,d=2*u,p=2*u;if(d<6||p<6)return null;const f=new Int16Array(d*p),m=new Int16Array(d*p),y=new Int16Array(d*p),w=new Uint8Array(d*p),b=[],x=Math.min(d,p)/2;for(let L=0;L<d;L++)for(let B=0;B<p;B++){const A=((L+l)*n+(B+c))*i,{h:z,s:D,v:P}=kt(s[A],s[A+1],s[A+2]),K=L*p+B;f[K]=z,m[K]=D,y[K]=P,Math.sqrt((B-p/2)**2+(L-d/2)**2)/x<=t&&(w[K]=1,b.push(P))}if(b.length<16)return null;const M=cm(b,55);let v=0,I=0,T=0;const k=L=>f[L]>=Kb&&f[L]<=Yb&&m[L]>=Xb,S=L=>y[L]>=M&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<d*p;L++)w[L]===1&&(T+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(I+=1));const R=v>.5*T&&I<.15*T,N=new Uint8Array(d*p);if(R){const L=cm(b,45);for(let B=0;B<d*p;B++)N[B]=w[B]===1&&y[B]<=L?255:0}else for(let L=0;L<d*p;L++)N[L]=S(L)?255:0;const X={width:p,height:d,data:N},W=Gb(X);let V=ws(W),O=V;if(V.stats.length<=1&&(V=ws(X),O=V,V.stats.length<=1))return null;const F=Math.min(d,p)/2;let j=0,Z=-1;for(let L=1;L<O.stats.length;L++){const B=O.stats[L];if(B===void 0)continue;const A=Math.hypot(B.centroidX-p/2,B.centroidY-d/2)/F,z=B.area*(1-.6*Math.min(A,1));z>Z&&(Z=z,j=L)}if(j===0)return null;const le=new Uint8Array(d*p);for(let L=0;L<d*p;L++)le[L]=O.labels[L]===j?255:0;return t_(Wb({width:p,height:d,data:le}))}function r_(e,t,n,r,i,s){const o=Gn;let a=0,u=0;for(let l=0;l<o;l++){const c=l-s;if(!(c<0||c>=o))for(let d=0;d<o;d++){const p=d-i;if(p<0||p>=o)continue;const f=e[c*o+p];f!==0&&(u+=f,a+=f*n[l*o+d])}}return a/(u+r-a+1e-6)}function i_(e,t){const n=t.reduce((i,s)=>i+s,0);let r=-1;for(const i of Qb){const s=i===0?e:Im(e,Gn,i,0),o=s.reduce((a,u)=>a+u,0);for(const a of Em)for(const u of Em){const l=r_(s,o,t,n,a,u);l>r&&(r=l)}}return r}function o_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of jb){const a=n_(e,o);if(a!==null)for(const{label:u,bits:l}of t)n.push([i_(a,l),u])}if(n.length===0)return[null,0];if(n.sort((o,a)=>a[0]-o[0]),n[0][0]<Jb)return[null,0];const r=new Map;for(const[o,a]of n.slice(0,Zb))r.set(a,(r.get(a)??0)+o);let i=0,s=-1;for(const[o,a]of r)a>s&&(s=a,i=o);return[i,n[0][0]]}const s_=2560,a_=.3,u_=.5,l_=1.6,c_=3,d_=5;function h_(e){const t=Math.min(1,s_/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,s=new Float32Array(3*i),o=e.width/n,a=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*a-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,c+1),p=Math.max(0,Math.min(1,l-c));for(let f=0;f<n;f++){const m=(f+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(c*e.width+y)*e.channels+M,I=(c*e.width+w)*e.channels+M,T=(d*e.width+y)*e.channels+M,k=(d*e.width+w)*e.channels+M,S=e.data[v]*(1-b)+e.data[I]*b,R=e.data[T]*(1-b)+e.data[k]*b,N=S*(1-p)+R*p;s[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:s,width:n,height:r}}function p_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const s=i===n-1;for(let o=0;o<t;o++){const a=i*t+o;let u=e[a];if(o+1<t&&e[a+1]>u&&(u=e[a+1]),!s){const l=a+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[a]=u}}return r}function f_(e){if(e.length<3)return e;const t=[...e].sort((s,o)=>s[0]-o[0]||s[1]-o[1]),n=(s,o,a)=>(o[0]-s[0])*(a[1]-s[1])-(o[1]-s[1])*(a[0]-s[0]),r=[];for(const s of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const o=t[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function m_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,s]=e[r],[o,a]=e[(r+1)%e.length],u=o-i,l=a-s,c=Math.hypot(u,l);if(c===0)continue;const d=u/c,p=l/c;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,I]of e){const T=v*d+I*p,k=-v*p+I*d;T<f&&(f=T),T>m&&(m=T),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const v=(f+m)/2,I=(y+w)/2;t={cx:v*d-I*p,cy:v*p+I*d,w:b,h:x,angle:Math.atan2(p,d)}}}return t}function g_(e,t,n,r){const i=Math.cos(r.angle),s=Math.sin(r.angle),o=r.w/2,a=r.h/2,u=Math.abs(o*i)+Math.abs(a*s),l=Math.abs(o*s)+Math.abs(a*i),c=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=c;b<=d;b++){const x=b-r.cx,M=w-r.cy,v=x*i+M*s,I=-x*s+M*i;Math.abs(v)<=o&&Math.abs(I)<=a&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function y_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[a,u,l,c]=o,[d,p]=a[1]<=u[1]?[a,u]:[u,a],[f,m]=l[1]<=c[1]?[l,c]:[c,l];return[[d[0],d[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function w_(e,t,n,r){const{width:i,height:s}=t;let o=new Uint8Array(i*s);for(let f=0;f<o.length;f++)o[f]=e[f]>a_?255:0;o=p_(o,i,s);const a={width:i,height:s,data:o},{labels:u}=ws(a),l=new Map;for(let f=0;f<s;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const c=n/i,d=r/s,p=[];for(const[f,m]of l){const y=[];for(const[N,[X,W]]of m)y.push([X-.5,N-.5],[X-.5,N+.5],[W+.5,N-.5],[W+.5,N+.5]);const w=m_(f_(y));if(Math.min(w.w,w.h)<c_)continue;const b=g_(e,i,s,w);if(b<u_)continue;const x=w.w*w.h*l_/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<d_+2)continue;const I=y_(M).map(([N,X])=>[Math.min(n,Math.max(0,Math.round(N*c))),Math.min(r,Math.max(0,Math.round(X*d)))]),T=I.map(N=>N[0]),k=I.map(N=>N[1]),S=Math.min(...T),R=Math.min(...k);p.push({quad:I,x:S,y:R,width:Math.max(...T)-S,height:Math.max(...k)-R,score:b})}return p.sort((f,m)=>m.score-f.score)}function b_(e,t){const[n,r,i,s]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),a=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-n[0],s[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=__([[0,0],[o,0],[o,a],[0,a]],[n,r,i,s]),l=new Uint8Array(o*a*e.channels);for(let d=0;d<a;d++)for(let p=0;p<o;p++){const f=u[6]*p+u[7]*d+u[8],m=(u[0]*p+u[1]*d+u[2])/f,y=(u[3]*p+u[4]*d+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,v=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),T=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const R=e.data[(T*e.width+v)*e.channels+S],N=e.data[(T*e.width+I)*e.channels+S],X=e.data[(k*e.width+v)*e.channels+S],W=e.data[(k*e.width+I)*e.channels+S],V=R*(1-x)+N*x,O=X*(1-x)+W*x;l[(d*o+p)*e.channels+S]=Math.round(V*(1-M)+O*M)}}const c={width:o,height:a,channels:e.channels,data:l};return a/o>=1.5?Yt(c,3):c}function __(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[s,o]=e[i],[a,u]=t[i];n.push([s,o,1,0,0,0,-a*s,-a*o]),r.push(a),n.push([0,0,0,s,o,1,-u*s,-u*o]),r.push(u)}for(let i=0;i<8;i++){let s=i;for(let a=i+1;a<8;a++)Math.abs(n[a][i])>Math.abs(n[s][i])&&(s=a);[n[i],n[s]]=[n[s],n[i]],[r[i],r[s]]=[r[s],r[i]];const o=n[i][i];for(let a=i;a<8;a++)n[i][a]/=o;r[i]/=o;for(let a=0;a<8;a++){if(a===i)continue;const u=n[a][i];if(u!==0){for(let l=i;l<8;l++)n[a][l]-=u*n[i][l];r[a]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Yt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:s,data:o}=e,a=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(a*u*s);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let p,f;n===1?(p=i-1-c,f=d):n===2?(p=r-1-d,f=i-1-c):(p=c,f=r-1-d);const m=(c*r+d)*s,y=(f*a+p)*s;for(let w=0;w<s;w++)l[y+w]=o[m+w]}return{width:a,height:u,channels:s,data:l}}const x_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,x_)*255));return e})();const Xt=48,$_=320;function v_(e){return["blank",...e.characters," "]}function M_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const a=e[o];a!==0&&(o>0&&e[o-1]===a||(r+=n[a]??"",i.push(t[o])))}if(i.length===0)return["",0];const s=i.reduce((o,a)=>o+a,0)/i.length;return[r,s]}function S_(e,t){const n=Math.trunc(Xt*t),r=e.width/e.height,i=Math.ceil(Xt*r)>n?n:Math.ceil(Xt*r),s=new Float32Array(3*Xt*n),o=Xt*n,a=e.width/i,u=e.height/Xt;for(let l=0;l<Xt;l++){const c=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(c))),p=Math.min(e.height-1,d+1),f=Math.max(0,Math.min(1,c-d));for(let m=0;m<i;m++){const y=(m+.5)*a-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,I=(d*e.width+w)*e.channels+v,T=(d*e.width+b)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+b)*e.channels+v,R=e.data[I]*(1-x)+e.data[T]*x,N=e.data[k]*(1-x)+e.data[S]*x,X=R*(1-f)+N*f;s[M*o+l*n+m]=(X/255-.5)/.5}}}return{tensor:s,width:n}}const I_=62,E_=8,T_=5;function _s(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function k_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),s=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let a=1;a<=r;a++)s[a]=e[o-1]===t[a-1]?i[a-1]+1:Math.max(i[a],s[a-1]);[i,s]=[s,i]}return i[r]}function Kr(e,t){return e.length===0&&t.length===0?100:200*k_(e,t)/(e.length+t.length)}function Tm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Kr(n(e),n(t))}function C_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),s=[...n].filter(c=>!r.has(c)).sort(),o=[...r].filter(c=>!n.has(c)).sort(),a=i.join(" "),u=[a,s.join(" ")].filter(Boolean).join(" "),l=[a,o.join(" ")].filter(Boolean).join(" ");return a.length>0&&(s.length===0||o.length===0)?100:Math.max(Kr(a,u),Kr(a,l),Kr(u,l))}function A_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const s of[_s(i),_s(r.name)])if(s)for(const o of[s,s.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function R_(e,t){const n=_s(e);if(!n||t.length===0)return null;const i=A_(t).map(c=>({...c,score:C_(n,c.key)})).sort((c,d)=>d.score-c.score).slice(0,E_).filter(c=>c.score>=I_);if(i.length===0)return null;const s=i[0].score,o=i.filter(c=>s-c.score<=T_),a=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[Tm(a,u.key),u.score];for(const c of o.slice(1)){const d=[Tm(a,c.key),c.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=c,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const km=5e3,xs=.75,Cm=15,O_=1.25,N_=2.4,z_=.003,B_=.85,P_=4,$s=2600,vs=2,Ms=.3,Am=.1,Rm=.012,D_=22,Om=.5,Yr=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let s=0,o=t.width*t.height;s<o;s++)r[s*3]=t.data[s*i],r[s*3+1]=t.data[s*i+1],r[s*3+2]=t.data[s*i+2];return n}function U_(e,t,n,r){const i=r.map(J=>J[0]),s=r.map(J=>J[1]),o=i.reduce((J,de)=>J+de,0)/i.length,a=s.reduce((J,de)=>J+de,0)/s.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s));if(u<4)return null;const l=u*P_,c=Math.max(0,Math.trunc(o-l)),d=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(a-l)),f=Math.min(n.height,Math.trunc(a+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<$s?vs:1,y=tt(e,n),w=tt(e,t),b=new e.Rect(c,p,d-c,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,I=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,I,e.COLOR_RGB2GRAY);const T=new e.ORB(km),k=new e.KeyPointVector,S=new e.KeyPointVector,R=new e.Mat,N=new e.Mat,X=new e.Mat,W=[y,w,x,M,v,I,k,S,R,N,X],V=J=>{for(const de of W)try{de.delete()}catch{}try{T.delete()}catch{}return J};if(T.detectAndCompute(v,X,k,R),T.detectAndCompute(I,X,S,N),R.rows<8||N.rows<8)return V(null);const O=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;O.knnMatch(R,N,F,2);const j=[],Z=[];for(let J=0;J<F.size();J++){const de=F.get(J);if(de.size()===2){const $e=de.get(0),G=de.get(1);if($e.distance<xs*G.distance){const ee=k.get($e.queryIdx).pt,re=S.get($e.trainIdx).pt;j.push(ee.x,ee.y),Z.push(re.x,re.y)}}}if(F.delete(),O.delete(),j.length/2<8)return V(null);const le=e.matFromArray(j.length/2,1,e.CV_32FC2,j),L=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),B=new e.Mat,A=e.findHomography(le,L,e.RANSAC,5,B);let z=0;for(let J=0;J<B.rows;J++)z+=B.data[J];const D=A.rows===3?[...A.data64F]:null;if(le.delete(),L.delete(),B.delete(),A.delete(),D===null||z<Cm)return V(null);const P=1/m,K=[[P,0,c],[0,P,p],[0,0,1]],ne=[0,1,2].map(J=>[0,1,2].map(de=>K[J][0]*D[de]+K[J][1]*D[3+de]+K[J][2]*D[6+de]));return V({H:ne,inliers:z})}function Ss(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*c}const i=Math.abs(r/2)/(t*n);if(i<z_||i>B_)return!1;const s=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),o=Math.min(...s);if(o<1)return!1;const a=Math.max(...s)/o;return a>=O_&&a<=N_}function Is(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Es(e,t,n,r){const i=n.width,s=n.height,o=Math.max(8,Math.trunc(Ms*i)),a=i+2*o,u=s+2*o;if(a*u>4e7)return null;const l=r.map(W=>[W[0],W[1],W[2]-o*(W[0]+W[1])+0]);for(let W=0;W<3;W++)l[W][2]=r[W][2]-o*r[W][0]-o*r[W][1];const c=tt(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,p,new e.Size(a,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(d,f,e.COLOR_RGB2Lab),c.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(W,V)=>{const O=(V*a+W)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let W=0;W<u;W++)for(let V=0;V<a;V++)(W<y||W>=u-y||V<y||V>=a-y)&&b(V,W);const x=W=>{W.sort((O,F)=>O-F);const V=W.length>>1;return W.length%2?W[V]:(W[V-1]+W[V])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(W,V)=>{const O=(V*a+W)*3,F=m[O]-M[0],j=m[O+1]-M[1],Z=m[O+2]-M[2];return Math.sqrt(F*F+j*j+Z*Z)>D_},I=Math.max(6,Math.trunc(Am*i)),T=Math.max(6,Math.trunc(Am*s)),k=Math.max(2,Math.trunc(Rm*i)),S=Math.max(2,Math.trunc(Rm*s)),R=W=>{let V=0,O=0;for(const F of W)O=F?O+1:0,O>V&&(V=O);return V/Math.max(1,W.length)},N=W=>{let V,O,F,j,Z;if(W==="L"?(V=o,O=o+s,F=Math.max(0,o-k-I),j=Math.max(0,o-k),Z=!1):W==="R"?(V=o,O=o+s,F=o+i+k,j=Math.min(a,o+i+k+I),Z=!1):(V=Math.max(0,o-S-T),O=Math.max(0,o-S),F=o,j=o+i,Z=!0),O<=V||j<=F)return 0;const le=[];if(Z)for(let L=F;L<j;L++){let B=0;for(let A=V;A<O;A++)v(L,A)&&B++;le.push(B/(O-V)>Om)}else for(let L=V;L<O;L++){let B=0;for(let A=F;A<j;A++)v(A,L)&&B++;le.push(B/(j-F)>Om)}return R(le)},X={L:N("L"),R:N("R"),T:N("T")};return d.delete(),f.delete(),X}const L_=6e3,F_=8,Nm=.5,G_=.6;function W_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<$s?vs:1,s=tt(e,t),o=new e.Mat;i!==1?e.resize(s,o,new e.Size(0,0),i,i,e.INTER_CUBIC):s.copyTo(o);const a=new e.Mat;e.cvtColor(o,a,e.COLOR_RGB2GRAY),s.delete(),o.delete();const u=new e.ORB(L_),l=new e.Mat,c=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(a,l,c,d);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const v=[w,x,M],I=()=>{for(const ne of v)ne.delete();b.delete()};if(M.rows<8){I();continue}const T=new e.DMatchVectorVector;f.knnMatch(M,d,T,2);const k=[],S=[];for(let ne=0;ne<T.size();ne++){const J=T.get(ne);if(J.size()===2){const de=J.get(0);if(de.distance<xs*J.get(1).distance){const $e=x.get(de.queryIdx).pt,G=c.get(de.trainIdx).pt;k.push($e.x,$e.y),S.push(G.x,G.y)}}}if(T.delete(),k.length/2<8){I();continue}const R=e.matFromArray(k.length/2,1,e.CV_32FC2,k),N=e.matFromArray(S.length/2,1,e.CV_32FC2,S),X=new e.Mat,W=e.findHomography(R,N,e.RANSAC,5,X);let V=0;for(let ne=0;ne<X.rows;ne++)V+=X.data[ne];const O=W.rows===3?[...W.data64F]:null;if(R.delete(),N.delete(),X.delete(),W.delete(),O===null||V<F_){I();continue}const F=1/i,j=[[F*O[0],F*O[1],F*O[2]],[F*O[3],F*O[4],F*O[5]],[O[6],O[7],O[8]]],Z=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ne,J])=>Is(j,ne,J));if(!Ss(Z,t.width,t.height)){I();continue}const le=tt(e,t),L=e.matFromArray(3,3,e.CV_64F,j.flat()),B=new e.Mat;e.warpPerspective(le,B,L,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const A=new e.Mat;e.cvtColor(B,A,e.COLOR_RGB2GRAY);const z=new e.Mat;e.matchTemplate(A,b,z,e.TM_CCOEFF_NORMED);const D=z.data32F[0];if(le.delete(),L.delete(),B.delete(),A.delete(),z.delete(),D<Nm){I();continue}const P=Es(e,t,y,j),K=Ts(P);p.push({id:m,confidence:Math.max(0,D),footprint:Z,built:P!==null&&Math.max(P.L,P.R,P.T)>=Yr,tuckRegion:Xr(Z,K)}),I()}}finally{a.delete(),l.delete(),c.delete(),d.delete();try{u.delete(),f.delete()}catch{}}return p}function Ts(e){return e!==null&&e.R>=Yr?["R"]:[]}function Xr(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),s=.5*(r+i),o=Ms*s;if(!(o>0))return null;const a=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let v=-(M[1]-x[1]),I=M[0]-x[0];const T=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(T-a)+I*(k-u)<0&&(v=-v,I=-I);const S=Math.hypot(v,I);S<=1e-6||(v=v/S*o,I=I/S*o,c.push([x[0]+v,x[1]+I],[M[0]+v,M[1]+I]))}const d=c.map(y=>y[0]),p=c.map(y=>y[1]),f=Math.round(Math.min(...d)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...d))-f,height:Math.round(Math.max(...p))-m}}function q_(e,t,n,r){const i=U_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,c])=>Is(i.H,l,c));if(!Ss(o,t.width,t.height))return null;const a=Es(e,t,n,i.H);if(a===null)return null;const u=Ts(a);return{built:Math.max(a.L,a.R,a.T)>=Yr,footprint:o,overflow:u,edgeScores:a,inliers:i.inliers}}const V_=.88;function ks(e,t,n,r){if(r.length!==4)return null;const i=n.width,s=n.height,o=Math.max(8,Math.trunc(Ms*i)),a=i+2*o,u=s+2*o;if(a*u>4e7)return null;const l=o+Math.trunc(i*V_),c=a-l;if(c<1)return null;const d=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,s,0,s]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,b,new e.Size(a,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,c,u)),v=new e.Mat;M.copyTo(v);const I=v.data,T=new Uint8ClampedArray(c*u*3);T.set(I.subarray(0,T.length));for(const k of[d,p,f,m,b,x,M,v])try{k.delete()}catch{}return{width:c,height:u,channels:3,data:T}}function H_(e,t,n,r){const[i,s,o,a]=r;if(o<8||a<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*a),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+a+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<$s?vs:1,y=tt(e,n),w=tt(e,t),b=y.roi(new e.Rect(c,p,d-c,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const I=new e.ORB(km),T=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,R=new e.Mat,N=new e.Mat,X=[y,w,b,x,M,v,T,k,S,R,N],W=ne=>{for(const J of X)try{J.delete()}catch{}try{I.delete()}catch{}return ne};if(I.detectAndCompute(M,N,T,S),I.detectAndCompute(v,N,k,R),S.rows<8||R.rows<8)return W(null);const V=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;V.knnMatch(S,R,O,2);const F=[],j=[];for(let ne=0;ne<O.size();ne++){const J=O.get(ne);if(J.size()===2){const de=J.get(0),$e=J.get(1);if(de.distance<xs*$e.distance){const G=T.get(de.queryIdx).pt,ee=k.get(de.trainIdx).pt;F.push(G.x,G.y),j.push(ee.x,ee.y)}}}if(O.delete(),V.delete(),F.length/2<8)return W(null);const Z=e.matFromArray(F.length/2,1,e.CV_32FC2,F),le=e.matFromArray(j.length/2,1,e.CV_32FC2,j),L=new e.Mat,B=e.findHomography(Z,le,e.RANSAC,5,L);let A=0;for(let ne=0;ne<L.rows;ne++)A+=L.data[ne];const z=B.rows===3?[...B.data64F]:null;if(Z.delete(),le.delete(),L.delete(),B.delete(),z===null||A<Cm)return W(null);const D=1/m,P=[[D,0,c],[0,D,p],[0,0,1]],K=[0,1,2].map(ne=>[0,1,2].map(J=>P[ne][0]*z[J]+P[ne][1]*z[3+J]+P[ne][2]*z[6+J]));return W({H:K,inliers:A})}const j_=620;function K_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function zm(e,t,n,r){const i=Bm(e,t,n,r);if(i!==null)return i;try{const[s,o,a,u]=r.map(I=>Math.trunc(I));if(Math.min(a,u)>=j_||a<=0||u<=0)return null;const l=Math.trunc(a*.25),c=Math.trunc(u*.25),d=Math.max(0,s-l),p=Math.max(0,o-c),f=Math.min(t.width,s+a+l),m=Math.min(t.height,o+u+c);if(f<=d||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(d,p,f-d,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-d)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=K_(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const M=[(s-d)*2,(o-p)*2,a*2,u*2],v=Bm(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([I,T])=>[I*.5+d,T*.5+p])}}catch{return null}}function Bm(e,t,n,r){const i=H_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Is(i.H,b,x));if(!Ss(o,t.width,t.height))return null;const a=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(a,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=tt(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(d,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[a,u,l,c,d,p,f])try{b.delete()}catch{}if(m<Nm)return null;const y=Es(e,t,n,i.H);if(y===null)return null;const w=Ts(y);return{built:Math.max(y.L,y.R,y.T)>=Yr,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function Y_(e,t,n,r=.03){let i=null,s=1/0;for(const o of e){const[a,u,l,c]=o;if(l<=0||c<=0)continue;const d=r*l,p=r*c;if(t>=a-d&&t<=a+l+d&&n>=u-p&&n<=u+c+p){const f=l*c;f<s&&(s=f,i=[a,u,l,c])}}return i}const X_=.3,Q_=.3;function Z_(e,t){const n=e.filter(s=>s.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(s=>{const{L:o,R:a,T:u}=s.edgeScores;return Math.min(o,a,u)>=X_}),i=[];return e.forEach((s,o)=>{if(!s.built||s.edgeScores===null)return;const{L:a,R:u,T:l}=s.edgeScores,c=Math.max(a,u,l)<Q_;if(!r&&!c)return;t.some(([p,f])=>p>=s.zone.x0&&p<=s.zone.x1&&f>=s.zone.y0&&f<=s.zone.y1)||i.push(o)}),i}const gt=128,Wn=.5;function Qr(e){const t=Fn(e,gt,gt),n=gt*gt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let s=0;s<3;s++)r[s*n+i]=t[i*3+s]/255;return r}function Cs(e){const t=e[1]??0;return{built:t>=Wn,prob:t}}const fr=120,mr=179,J_=1.3,e1=3.6,t1=.45,n1=6e-4,r1=.02,i1=6e3,o1=.78,s1=1.25,a1=2.4,u1=.05,l1=1.5,c1=.5,d1=.9,h1=150,p1=18,f1=34,m1=90,g1=130,y1=.13,w1=.15,Zr="magistrates-guild",As="merchants-guild";function b1(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[fr,30,40,0]),s=new e.Mat(r.rows,r.cols,r.type(),[mr,255,205,255]),o=new e.Mat;e.inRange(r,i,s,o),r.delete(),i.delete(),s.delete();const a=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const c=new e.Mat,d=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,c,d,p,8);l.delete(),c.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=d.intAt(w,0),x=d.intAt(w,1),M=d.intAt(w,2),v=d.intAt(w,3),I=d.intAt(w,4),T=I/m;T<n1||T>r1||I/Math.max(M*v,1)<t1||y.push({x:b,y:x,w:M,h:v})}return d.delete(),{blobs:y,mask:a,maskWidth:t.width}}function _1(e,t,n,r,i,s,o){const a=e,u=s,l=o,c=i;if(!c.gray){const D=tt(e,r);c.gray=new a.Mat,a.cvtColor(D,c.gray,a.COLOR_RGB2GRAY),D.delete(),c.k=new a.KeyPointVector,c.d=new a.Mat;const P=new a.Mat;u.detectAndCompute(c.gray,P,c.k,c.d),P.delete()}const d=n,p=new a.Mat,f=new a.KeyPointVector,m=new a.Mat;u.detectAndCompute(d,p,f,m),p.delete();const y=D=>(f.delete(),m.delete(),D);if(c.d.rows<8||m.rows<8)return y(null);const w=new a.DMatchVectorVector;l.knnMatch(c.d,m,w,2);const b=[],x=[];for(let D=0;D<w.size();D++){const P=w.get(D);if(P.size()===2){const K=P.get(0);if(K.distance<o1*P.get(1).distance){const ne=c.k.get(K.queryIdx).pt,J=f.get(K.trainIdx).pt;b.push(ne.x,ne.y),x.push(J.x,J.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=a.matFromArray(b.length/2,1,a.CV_32FC2,b),v=a.matFromArray(x.length/2,1,a.CV_32FC2,x),I=new a.Mat,T=a.findHomography(M,v,a.RANSAC,5,I);if(M.delete(),v.delete(),I.delete(),T.rows!==3)return T.delete(),y(null);const k=[...T.data64F],S=(D,P)=>{const K=k[6]*D+k[7]*P+k[8];return[(k[0]*D+k[1]*P+k[2])/K,(k[3]*D+k[4]*P+k[5])/K]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,P])=>S(D,P));if(R.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return T.delete(),y(null);const N=R.map((D,P)=>{const K=R[(P+1)%4];return Math.hypot(K[0]-D[0],K[1]-D[1])}),X=Math.min(...N);if(X<1)return T.delete(),y(null);const W=Math.max(...N)/X;let V=0;for(let D=0;D<4;D++){const[P,K]=R[D],[ne,J]=R[(D+1)%4];V+=P*J-ne*K}const O=t,F=Math.abs(V/2)/(O.rows*O.cols);if(W<s1||W>a1||F<u1||F>l1)return T.delete(),y(null);const j=new a.Mat;a.warpPerspective(O,j,T,new a.Size(r.width,r.height),a.WARP_INVERSE_MAP),T.delete();const Z=new a.Mat;a.cvtColor(j,Z,a.COLOR_RGB2GRAY),j.delete();const le=Math.trunc(r.height/2),L=Z.roi(new a.Rect(0,0,r.width,le)),B=c.gray.roi(new a.Rect(0,0,r.width,le)),A=new a.Mat;a.matchTemplate(L,B,A,a.TM_CCOEFF_NORMED);const z=A.data32F[0];return L.delete(),B.delete(),A.delete(),Z.delete(),y(z)}function x1(e,t,n){let r,i;if(n===Zr)r=As,i=y1;else if(n===As)r=Zr,i=w1;else return null;const{x:s,y:o,w:a,h:u}=t;if(a<8||u<8)return null;const l=Math.trunc(a/2);let c=0,d=null;for(const[p,f]of[[0,l],[l,a]]){let m=0,y=0;for(let b=o;b<o+u;b++)for(let x=s+p;x<s+f;x++){const M=(b*e.width+x)*e.channels,{h:v,s:I,v:T}=kt(e.data[M],e.data[M+1],e.data[M+2]);if(v>=fr&&v<=mr&&I>=30&&I<=170&&T<=170)continue;m++,(r===As?v>=p1&&v<=f1&&I>=m1&&T>=g1:v>=95&&v<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>c&&(c=w,d={x:s+p,y:o,w:f-p,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const $1=1.7,v1=140,M1=170,S1=.2,I1=.1,Pm=240,Dm=80,Um=60,E1=50,Lm="scientists-guild",Fm="tacticians-guild",Jr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function T1(e,t,n){const{x:r,y:i,w:s,h:o}=n,a=new Float32Array(o);for(let v=0;v<o;v++){let I=0;for(let T=0;T<s;T++)e[(i+v)*t+r+T]>0&&I++;a[v]=I/s}const u=[];for(let v=0;v<o;v++)a[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const p=s/d;if(p<J_||p>e1)return[];if(p>=$1)return[{x:r,y:i+l,w:s,h:d}];const f=new Float32Array(o),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const I=Math.exp(-(v*v)/(2*m*m));y.push(I),w+=I}for(let v=0;v<o;v++){let I=0;for(let T=-4;T<=4;T++){const k=Math.min(o-1,Math.max(0,v+T));I+=a[k]*y[T+4]}f[v]=I/w}const b=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if(x>b){let v=1/0;for(let I=b;I<x;I++)f[I]<v&&(v=f[I],M=I)}return[{x:r,y:i+l,w:s,h:M-l},{x:r,y:i+M,w:s,h:c-M}]}function k1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),s=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),a=Math.max(0,s-r),u=new Uint8Array(o*a*3);for(let l=0;l<a;l++)for(let c=0;c<o;c++){const d=((r+l)*e.width+n+c)*e.channels,p=(l*o+c)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:o,height:a,channels:3,data:u}}function C1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const s=r*e.channels,{h:o,s:a,v:u}=kt(e.data[s],e.data[s+1],e.data[s+2]);a>=40&&u>=40&&u<=205&&(t++,o>=v1&&o<=M1&&n++)}return t===0?0:n/t}function A1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:s,s:o,v:a}=kt(e.data[i],e.data[i+1],e.data[i+2]);!(s>=fr&&s<=mr)&&o>=70&&a>=50&&t++}return n===0?0:t/n}function Gm(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Pm,Dm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Pm,height:Dm,channels:3,data:i}}function R1(e){const t=e.width*e.height,n=[0,0,0];for(let s=0;s<t;s++){const o=s*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let s=0;s<t;s++){const o=s*e.channels;for(let a=0;a<3;a++){const u=n[a]>1e-6?r/n[a]:1;i[s*3+a]=Math.max(0,Math.min(255,Math.round(e.data[o+a]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Wm(e,t){const n=R1(t),r=n.width*n.height,i=new Uint8Array(r);let s=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=kt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=fr&&w<=mr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,s++)}const o=s<20,a=tt(e,n),u=new e.Mat;e.cvtColor(a,u,e.COLOR_RGB2Lab),a.delete();const l=u.data;let c=0,d=0,p=0,f=0;for(let m=0;m<r;m++)!o&&i[m]===0||(c+=l[m*3]*100/255,d+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[c/f,d/f,p/f]}function O1(e){let t=0,n=0,r=0,i=0,s=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h:c,s:d,v:p}=kt(e.data[l],e.data[l+1],e.data[l+2]);c>=fr&&c<=mr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&p>=80&&s++))}const a=Math.max(t,1);return{blue:n/a,green:r/a,red:i/a,gold:s/a}}function N1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:s,s:o,v:a}=kt(e.data[i],e.data[i+1],e.data[i+2]);o>=Um&&a>=E1?(s>=95&&s<=128&&n.blue++,s>=35&&s<=85&&n.green++,(s<=8||s>=170)&&n.red++,s>=18&&s<=34&&n.gold++,s>=4&&s<=17&&a<150&&n.brown++):o<Um&&a>=70&&a<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function z1(e,t){let n=0,r=0;for(let a=0;a<e.length;a++)n+=e[a],r+=t[a];n/=e.length,r/=t.length;let i=0,s=0,o=0;for(let a=0;a<e.length;a++){const u=e[a]-n,l=t[a]-r;i+=u*l,s+=u*u,o+=l*l}return i/(Math.sqrt(s*o)+1e-6)}function qm(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function B1(e,t){const n=new Map,r=new Map;for(const[i,s]of t){const o=Gm(e,s);n.set(i,qm(e,o)),Jr.includes(i)&&r.set(i,Wm(e,o))}return{gray:n,warmLab:r}}function P1(e,t,n){const r=Gm(e,t),i=O1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Zr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Lm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Fm;const s=N1(r),o={blue:s.blue,green:s.green,red:s.red,gold:s.gold,browngrey:s.brown+s.grey};let a="blue";for(const l of Object.keys(o))o[l]>o[a]&&(a=l);if(o[a]<=0)return"";let u;if(a==="blue")u=Zr;else if(a==="green")u=Lm;else if(a==="red")u=Fm;else{const l=qm(e,r);let c="",d=-2;for(const p of Jr){const f=n.gray.get(p);if(f===void 0)continue;const m=z1(l,f);m>d&&(d=m,c=p)}u=c||Jr[0]}if(Jr.includes(u)&&n.warmLab.size>0){const l=Wm(e,r);let c=u,d=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<d&&(d=m,c=p)}return c}return u}function D1(e,t,n,r,i){var y;const s=[],{blobs:o,mask:a,maskWidth:u}=b1(e,t);if(o.length===0||n.size===0)return s;const l=e,c=new l.ORB(i1),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(h1,Math.trunc(d1*Math.max(w.w,w.h))),v=Math.max(0,b-M),I=Math.max(0,x-M),T=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(T-v<16||k-I<16)continue;const S=f.roi(new l.Rect(v,I,T-v,k-I)),R=new l.Mat;l.cvtColor(S,R,l.COLOR_RGB2GRAY);let N=null,X=-2;for(const[F,j]of n){if(r!==void 0&&Date.now()>r)break;const Z=_1(e,S,R,j,p.get(F),c,d);Z!==null&&Z>X&&(X=Z,N=F)}S.delete(),R.delete();const W=new Set;if(N!==null&&X>=c1){s.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),W.add(N);const F=x1(t,w,N);F&&(s.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),W.add(F.id))}if(i===void 0||i.size===0)continue;const V=T1(a,u,w);if(V.length!==2)continue;const O=V.map(F=>k1(t,F));if(!O.some(F=>F.width*F.height===0||A1(F)<I1))for(let F=0;F<V.length;F++){const j=O[F];if(C1(j)<S1)continue;m===null&&(m=B1(e,i));const Z=P1(e,j,m);if(Z&&!W.has(Z)){W.add(Z);const le=V[F];s.push({id:Z,boundingBox:{x:le.x,y:le.y,width:le.w,height:le.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return s}const Vm=128,U1=.56,L1=15,F1=.58,G1=70,W1=50,q1=.12,V1=.2,H1=.1,j1=.17,Hm=.15;function K1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function jm(e,t){const{width:n,height:r,channels:i,data:s}=e,o=Math.floor(n/2),a=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),c=Math.max(0,a-u),d=Math.min(n,o+u),p=Math.min(r,a+u),f=d-l,m=p-c,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+c)*n+l)*i;y.set(s.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function Y1(e){const t=jm(e,U1),n=Lb(t),r=Sm(n,Vm,Vm);return Fb(r)}function X1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let s=0,o=0,a=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;s+=l*c,o+=l*l,a+=c*c}return s/(Math.sqrt(o*a)+1e-6)}function Q1(e){const t=new Map([["masonry",0],["strategy",0]]),n=jm(e,F1),{width:r,height:i,channels:s,data:o}=n,a=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*s,{h:m,s:y,v:w}=kt(o[f],o[f+1],o[f+2]);y>=G1&&w>=W1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const c=u/a,d=l/a;return c>=q1&&t.set("masonry",Hm*Math.min(1,c/V1)),d>=H1&&t.set("strategy",Hm*Math.min(1,d/j1)),t}function Z1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Y1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,s=[];for(let l=0;l<360;l+=L1)s.push(qb(n,l,i));const o=new Map;for(const[l,c]of t){let d=-1/0;for(const p of s){const f=X1(p,c);f>d&&(d=f)}o.set(l,d)}for(const[l,c]of Q1(e))c>0&&o.has(l)&&o.set(l,o.get(l)+c);let a="",u=-1/0;for(const[l,c]of o)c>u&&(a=l,u=c);return[a,u]}const un=224,J1=512,e2=[.485,.456,.406],t2=[.229,.224,.225];function n2(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function r2(e){const t=ps(e,un,un),n=un*un,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let s=0;s<3;s++)r[s*n+i]=(t[i*3+s]/255-e2[s])/t2[s];return r}function i2(e){const t=3*un*un,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(r2(Yt(e,r)),r*t);return n}function o2(e,t=J1){const n=e.length/t,r=new Float32Array(t);for(let s=0;s<n;s++)for(let o=0;o<t;o++)r[o]+=e[s*t+o];let i=0;for(let s=0;s<t;s++)r[s]/=n,i+=r[s]*r[s];i=Math.max(Math.sqrt(i),1e-9);for(let s=0;s<t;s++)r[s]/=i;return r}function s2(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let s=0;const o=i*e.dim;for(let a=0;a<e.dim;a++)s+=e.x[o+a]*t[a];s>r&&(r=s,n=i)}return{id:e.ids[n],cosine:r}}const qn=96,a2=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],u2=.45;function l2(e){const t=ps(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let s=0;s<3;s++)r[s*n+i]=t[i*3+s]/255;return r}function c2(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=u2?a2[t]??"":"",prob:n}}const Qt=128,d2=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],h2=.5;let Km=null;function p2(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Km=e}function Ym(){return Km??h2}let Xm=null;function f2(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Xm=[...e]}function m2(){return Xm??d2}const Qm="__inverse";function g2(e){return e.endsWith(Qm)?[e.slice(0,-Qm.length),!0]:[e,!1]}function y2(e){const{width:t,height:n,channels:r,data:i}=e,s=new Uint8Array(t*n*3);for(let o=0;o<t*n;o++)for(let a=0;a<3;a++)s[o*3+a]=i[o*r+a];return s}function w2(e){const t=Math.min(Qt/e.width,Qt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?y2(e):t<1?Fn(e,n,r):dr(e,n,r),s=Qt*Qt,o=new Float32Array(3*s);o.fill(114/255);const a=Math.floor((Qt-r)/2),u=Math.floor((Qt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const d=(l*n+c)*3,p=(l+a)*Qt+(c+u);for(let f=0;f<3;f++)o[f*s+p]=i[d+f]/255}return o}async function b2(e,t){const{index:n,prob:r}=_2(await t(w2(e))),[i,s]=g2(m2()[n]??"");return r<Ym()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:s}}function _2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Pt=96,x2=[1,2,3,4,5,6,7],$2=.8,v2=.99;function M2(e){const t=dr(e,e.width*2,e.height*2),n=e.width*2<Pt&&e.height*2<Pt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?dr(r,Pt,Pt):Fn(r,Pt,Pt),s=Pt*Pt,o=new Float32Array(3*s);for(let a=0;a<s;a++)for(let u=0;u<3;u++)o[u*s+a]=i[a*3+u]/255;return o}function S2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:x2[t],prob:e[t]}}const ln=128,Zm=.35,I2=["fp","laurel"],E2=.85,Vn=40;function T2(e){const r=(e.width<ln&&e.height<ln?dr:Fn)(e,ln,ln),i=ln*ln,s=new Float32Array(3*i);for(let o=0;o<i;o++)for(let a=0;a<3;a++)s[a*i+o]=r[o*3+a]/255;return s}function k2(e){return e[I2.indexOf("fp")]}const cn=128,C2=.15,Jm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],A2=7,R2=.9;function O2(e,t,n){const[r,i,s,o]=e.map(Number);if(!(s>1)||!(o>1))return null;const a=r+s/2,u=i+o/2,l=Math.max(s,o)*(1+2*C2),c=Math.max(0,at(a-l/2)),d=Math.max(0,at(u-l/2)),p=Math.min(t,at(a+l/2)),f=Math.min(n,at(u+l/2));return p-c<8||f-d<8?null:{x:c,y:d,w:p-c,h:f-d}}function N2(e){const r=(e.width<cn&&e.height<cn?dr:Fn)(e,cn,cn),i=cn*cn,s=new Float32Array(3*i);for(let o=0;o<i;o++)for(let a=0;a<3;a++)s[a*i+o]=r[o*3+a]/255;return s}function z2(e){let t=0;for(let i=1;i<Jm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=A2;return{className:Jm[t],probability:n,rejected:r&&n>=R2}}const ei=3,B2=2.2,P2=.3,D2=.65,U2=3,L2=1.3,F2=.77;function eg(e,t,n){const[r,i,s,o]=e,a=[];return r<=ei&&a.push("gauche"),i<=ei&&a.push("haut"),r+s>=t-ei&&a.push("droit"),i+o>=n-ei&&a.push("bas"),a}function tg(e){const t=e[3]/Math.max(e[2],1);return t>=L2?"portrait":t<=F2?"paysage":null}function Rs(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function G2(e,t,n){for(const[r,i,s,o]of e??[])if(Math.max(Math.abs(s-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>D2)return!0;return!1}function W2(e,t,n,r,i){try{const s=[...e],o=s.filter(w=>eg(w.box,r,i).length>0);if(o.length===0)return{kept:s,dropped:[],suspects:[]};const a=s.filter(w=>!o.includes(w)),u=w=>({kept:a,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(G2(n,r,i))return u("photo-piste");if(a.length<U2)return t>0?u("photo-merveilles"):{kept:s,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(a.length+o.length)/3)return u("debordement-structurel");const l=Rs(a.map(w=>w.box[2]*w.box[3])),c=Rs(a.map(w=>w.box[2])),d=Rs(a.map(w=>w.box[3])),p=new Set(a.map(w=>tg(w.box)).filter(w=>w!==null)),f=[...a],m=[],y=[];for(const w of o){const b=eg(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&I.push(d>0?M/d:1);const T=I.length>0?Math.min(...I):1,k=tg(w.box);v>B2?m.push({banner:w,edgeReason:"bord-grosse"}):T<P2?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const q2=1,V2=1.5;function H2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function j2(e,t,n,r){const i=r[0]-n[0],s=r[1]-n[1],o=Math.hypot(i,s);if(o<=0)return null;const a=((e-n[0])*i+(t-n[1])*s)/(o*o);return[Math.abs((e-n[0])*s-(t-n[1])*i)/o,Math.abs(a-.5)*o]}function K2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function Y2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,s,o,a]=t,u=i+o/2,l=s+a/2;let c=null;for(const[p,f]of H2(e)){const m=j2(u,l,p,f);m!==null&&(c===null||m[0]<c[0])&&(c=m)}if(c===null)return null;const d=K2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==o>a}}catch{return null}}function X2(e,t,n,r=q2,i=V2){const s=[];for(const[o,a]of t??[]){const u=Y2(e,a,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||s.push([u.decalLat,o]))}return s.length===0?null:(s.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),s[0][1])}const yt=64,ng=.5,Q2=[.67,1.24];function rg(e,t,n,r){const i=Math.max(0,t-r),s=Math.max(0,n-r),o=Math.min(e.width,t+r),a=Math.min(e.height,n+r),u=o-i,l=a-s;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=s+w,x=b-n;for(let M=0;M<u;M++){const v=i+M,I=v-t,T=(w*u+M)*3;if(I*I+x*x<=p){const k=(b*e.width+v)*c;d[T]=e.data[k],d[T+1]=e.data[k+1],d[T+2]=e.data[k+2]}else d[T]=255,d[T+1]=255,d[T+2]=255}}const f=Fn({width:u,height:l,channels:3,data:d},yt,yt),m=yt*yt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function Z2(e){return e[1]}const ti=[1,3,6],J2=.5;function ex(e){if(e.length!==ti.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ti[t],prob:e[t]}}function tx(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ti.includes(i.denomination)&&i.prob>=J2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const nx=2.25,ni=3,rx=1.15,ix=.5,ox=2.5,sx=.75,ax=2.25,ux=1.3,lx=.77;function ri(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function cx(e){const t=Array.from(new Map(e.map(s=>[`${s[0]},${s[1]}`,s])).values());if(t.sort((s,o)=>s[0]-o[0]||s[1]-o[1]),t.length<=2)return t;const n=(s,o,a)=>(o[0]-s[0])*(a[1]-s[1])-(o[1]-s[1])*(a[0]-s[0]),r=[];for(const s of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(const s of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return[...r.slice(0,-1),...i.slice(0,-1)]}function ig(e,t,n){let r=!1;const i=n.length;for(let s=0;s<i;s+=1){const[o,a]=n[s],[u,l]=n[(s+1)%i];if(a>t!=l>t){const c=(u-o)*(t-a)/(l-a)+o;e<c&&(r=!r)}}return r}function dx(e,t,n){if(n.length>=3&&ig(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let s=0;s<i;s+=1){const[o,a]=n[s],[u,l]=n[i>1?(s+1)%i:s],c=u-o,d=l-a,p=c*c+d*d,f=p===0?0:Math.max(0,Math.min(1,((e-o)*c+(t-a)*d)/p));r=Math.min(r,Math.hypot(e-(o+f*c),t-(a+f*d)))}return r}function hx(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function px(e,t,n){const[r,i]=e,s=t[0]-r,o=t[1]-i;if(s===0&&o===0)return!1;const[a,u,l,c]=n;let d=0,p=1;const f=[[-s,r-a],[s,l-r],[-o,i-u],[o,c-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?d=Math.max(d,w):p=Math.min(p,w),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const Os=e=>e.box[3]/Math.max(1,e.box[2]),Zt=e=>Os(e)>rx,Hn=e=>Os(e)>=ux||Os(e)<=lx;function Ns(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const s=7*r;return[t-s,n,r+2*s,i]}function zs(e,t,n,r,i){const s=new Set(t),o=[...e.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:s.has(A)?"card":"tucked",src:["banner",A]})),...n.map((B,A)=>({box:[B[0],B[1],B[2],B[3]],kind:"wonder",src:["wonder",A]}))],a=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:a,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(B=>[B.box[0]+B.box[2]/2,B.box[1]+B.box[3]/2]);let c=o.filter(B=>B.kind!=="wonder").map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A);c.length===0&&(c=o.map(B=>Math.hypot(B.box[2],B.box[3])).sort((B,A)=>B-A));const d=c[Math.floor(c.length/2)],p=(nx*d)**2,f=o.map((B,A)=>A),m=B=>{let A=B;for(;f[A]!==A;)f[A]=f[f[A]],A=f[A];return A},y=o.map((B,A)=>B.kind==="card"?A:-1).filter(B=>B>=0),w=o.map((B,A)=>B.kind!=="card"?A:-1).filter(B=>B>=0);for(let B=0;B<y.length;B+=1)for(let A=B+1;A<y.length;A+=1){const z=y[B],D=y[A],P=o[z],K=o[D];if(Hn(P)&&Hn(K)&&Zt(P)!==Zt(K))continue;const ne=l[z][0]-l[D][0],J=l[z][1]-l[D][1],de=ne*ne+J*J;let $e=de<=p;!$e&&Hn(P)&&Hn(K)&&Zt(P)===Zt(K)&&de<=(4*d)**2&&($e=ri(Ns(P),Ns(K))<=.5*d),$e&&(f[m(z)]=m(D))}for(let B=0;B<w.length;B+=1)for(let A=B+1;A<w.length;A+=1){const z=w[B],D=w[A];ri(o[z].box,o[D].box)<=sx*d&&(f[m(z)]=m(D))}const b=new Map;for(const B of w){const A=m(B);b.set(A,[...b.get(A)??[],B])}const x=new Map;for(const B of y){const A=m(B);x.set(A,[...x.get(A)??[],B])}for(const B of b.values()){const A=B.filter(K=>o[K].kind==="wonder"&&Hn(o[K])).map(K=>Zt(o[K])),z=A.length>0?A.filter(Boolean).length*2>A.length:null,D=[];for(const[K,ne]of x){let J=Number.POSITIVE_INFINITY;for(const G of B)for(const ee of ne)J=Math.min(J,ri(o[G].box,o[ee].box));if(J>ax*d)continue;const $e=ne.filter(G=>Zt(o[G])).length/ne.length>=.5;z!==null&&$e!==z||D.push([K,J,$e])}if(D.length===0)continue;const P=new Set(D.map(K=>K[2]));if(D.length>=2&&P.size===1&&z!==null){const K=D[0][0];for(const[ne]of D.slice(1))f[m(ne)]=m(K);f[m(B[0])]=m(K)}else{const K=D.reduce((ne,J)=>J[1]<ne[1]?J:ne);f[m(B[0])]=m(K[0])}}let M=new Map;for(let B=0;B<o.length;B+=1){const A=m(B);M.set(A,[...M.get(A)??[],B])}const v=o.map((B,A)=>B.kind==="wonder"?A:-1).filter(B=>B>=0);if(v.length>0){const B=(z,D)=>{const[P,K,ne,J]=Ns(o[z]),[de,$e,G,ee]=o[D].box,re=Math.max(0,Math.min(P+ne,de+G)-Math.max(P,de)),oe=Math.max(0,Math.min(K+J,$e+ee)-Math.max(K,$e));return re*oe>=.9*o[z].box[2]*o[z].box[3]},A=new Map;for(let z=0;z<o.length;z+=1)if(!(o[z].kind!=="card"||!Hn(o[z])))for(const D of v){const P=ri(o[z].box,o[D].box);if(P<=.8*d&&Zt(o[z])!==Zt(o[D])&&B(z,D)){const K=A.get(D);(!K||P<K[1])&&A.set(D,[z,P])}}for(const[z,[D]]of A){const P=m(z);for(const[K,ne]of M){const J=ne.indexOf(D);if(J>=0&&K!==P){ne.splice(J,1),M.set(P,[...M.get(P)??[],D]),o[D].kind="tucked";break}}}M=new Map([...M].filter(([,z])=>z.length>0))}const I=B=>B.filter(A=>o[A].kind==="card").length,T=B=>{const A=B.filter(z=>o[z].kind==="card"||o[z].kind==="wonder");return A.length===0?null:A.filter(z=>Zt(o[z])).length/A.length},k=B=>[B.reduce((A,z)=>A+l[z][0],0)/B.length,B.reduce((A,z)=>A+l[z][1],0)/B.length],S=[i[0]/2,i[1]/2],R=[...M.values()].sort((B,A)=>{const z=I(B),D=I(A);if(z!==D)return D-z;const P=Math.hypot(k(B)[0]-S[0],k(B)[1]-S[1]),K=Math.hypot(k(A)[0]-S[0],k(A)[1]-S[1]);return P-K}),N=k(R[0]),X=T(R[0]),W=R.map((B,A)=>{if(A===0||I(B)<ni)return"player";const z=T(B),D=z!==null&&X!==null&&Math.abs(z-X)>=ix,P=k(B),K=r.some(ne=>px(N,P,ne));return D||K?"opponent":"player"});if(!W.includes("opponent")){const B=z=>z.reduce((D,P)=>D+(o[P].kind==="wonder"?1:0),0);let A=W.map((z,D)=>D).filter(z=>z>0&&(I(R[z])>=ni||B(R[z])>=2));if(A.reduce((z,D)=>z+B(R[D]),0)<1&&(A=[]),A.length>0&&(I(R[0])<2*ni||A.reduce((z,D)=>z+I(R[D]),0)<2*ni)&&(A=[]),A.length>0){const z=new Map(A.map(K=>[K,k(R[K])])),D=(K,ne)=>(K[0]-ne[0])**2+(K[1]-ne[1])**2;if(A.every((K,ne)=>A.slice(ne+1).every(J=>D(z.get(K),z.get(J))<Math.min(D(z.get(K),N),D(z.get(J),N)))))for(const K of A)W[K]="opponent"}}const V=[],O=[];let F=!1;R.forEach((B,A)=>{const z=W[A];z==="opponent"&&(F=!0);const D=[],P=[];for(const K of B){const[ne,J,de,$e]=o[K].box;D.push([ne,J],[ne+de,J],[ne,J+$e],[ne+de,J+$e]),P.push(o[K].box);const[G,ee]=o[K].src;G==="banner"?a[ee]=z:u[ee]=z}V.push([z,cx(D)]),O.push([z,P])});const j=(B,A,z)=>Math.min(...O[z][1].map(D=>hx(B,A,D))),Z=(B,A)=>V.map(([,z],D)=>z.length>=3&&ig(B,A,z)?D:-1).filter(z=>z>=0),le=(B,A)=>{if(V.length===0)return"player";const z=d>0?ox*d:Number.POSITIVE_INFINITY,D=Z(B,A);if(D.length>0){const ne=D.reduce((J,de)=>j(B,A,de)<j(B,A,J)?de:J);return V[ne][0]}let P=-1,K=Number.POSITIVE_INFINITY;return V.forEach(([,ne],J)=>{const de=dx(B,A,ne);de<K&&(P=J,K=de)}),P>=0&&K<=z?V[P][0]:"none"},L=(B,A)=>{if(V.length===0)return"none";const z=Z(B,A);if(z.length===0)return"none";const D=z.reduce((P,K)=>j(B,A,K)<j(B,A,P)?K:P);return V[D][0]};return{bannerOwner:a,wonderOwner:u,opponentFound:F,hulls:V,hullBoxCounts:O.map(([,B])=>B.length),pointOwner:le,pointInside:L}}const fx=3;function mx(e,t=fx){const n=e.length,r=Array.from({length:n},(o,a)=>a),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let a=o+1;a<n;a+=1){const u=e[o],l=e[a],c=Number(u.center[0]),d=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![c,d,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(c-p,d-f)<=t*(m+y)&&(r[i(o)]=i(a))}const s=new Map;for(let o=0;o<n;o+=1){const a=i(o);s.has(a)||s.set(a,[]),s.get(a).push(o)}return[...s.values()]}function gx(e,t,n){const r=Number(n[0]),i=Number(n[1]),s=Number(n[2]),o=Number(n[3]),a=Math.max(Math.min(r,s)-e,0,e-Math.max(r,s)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(a,u)}function Bs(e,t,n,r){const i=new Set(e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n));if(i.size===0)return[];const s=[];for(const o of mx(e)){const a=o.map(y=>e[y]),u=a.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,d=0;for(const y of a){const w=Number(y.center[0]),b=Number(y.center[1]);c+=w,d+=b,t.pointInside(w,b)===n&&(l+=1)}const p=c/a.length,f=d/a.length,m=r&&r.length>0?Math.min(...r.map(y=>gx(p,f,y))):0;s.push({cle:[...o].sort((y,w)=>y-w).join(","),membres:a,miens:u,inside:l,dPiste:m,centre:[p,f],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return s}function yx(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let s=0;s<4;s+=1){if(i[s]>r[s])return n;if(i[s]<r[s])return t}return t})}function wx(e,t,n,r){const[i,s]=e.centre,o={};for(const c of["player","opponent"]){const d=Bs(t,n,c,r).filter(p=>p.cle!==e.cle);o[c]=d.length===0?1/0:Math.min(...d.map(p=>Math.hypot(i-p.centre[0],s-p.centre[1])))}if(o.player!==o.opponent)return o.player>o.opponent?"player":"opponent";const a=c=>{const d=Bs(t,n,c,r).find(p=>p.cle===e.cle);return d?[d.inside,d.dPiste,d.valeur]:[-1,-1,-1]},u=a("player"),l=a("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function bx(e,t,n){const r={player:[],opponent:[]},i={};for(const o of["player","opponent"]){const a=Bs(e,t,o,n);a.length>0&&(i[o]=yx(a))}const s=Object.keys(i);if(s.length===0)return r;if(s.length===2&&i.player.cle===i.opponent.cle){const o=wx(i.player,e,t,n);return r[o]=i[o].membres,r}for(const o of s)r[o]=i[o].membres;return r}function _x(e,t,n,r){const i=()=>e.filter(s=>t.pointOwner(Number(s.center[0]),Number(s.center[1]))===n);try{return bx(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const xx=1280,$x=80,vx=3,Mx=3,Sx=.3,Ix=2.4,Ex=1,Tx=5.2,kx=5;function Ps(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function Cx(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=Sx&&r/n<=Ix&&i/n>=Ex&&i/n<=Tx&&i/r<=kx}function Ax(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*xx/r<$x}function Rx(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(a=>a[0]),s=r.poly.map(a=>a[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((a,u)=>a+u,0)/o,cy:s.reduce((a,u)=>a+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),s=Number(r[1]),o=Number(r[2]),a=Number(r[3]);if(![i,s,o,a].every(Number.isFinite))continue;const u=i+o/2,l=s+a/2;let c=n[0],d=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<d&&(d=f,c=p)}c.extra.push([i,s],[i+o,s+a])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function og(e,t,n,r,i=[]){const s=Ps(n);if(!Ax(e,t,s))return[];const o=r.filter(l=>l.n>=Mx&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),a=Math.round(s*vx),u=[];for(const l of Rx(o,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...c))-a),f=Math.max(0,Math.trunc(Math.min(...d))-a),m=Math.min(e,Math.trunc(Math.max(...c))+a),y=Math.min(t,Math.trunc(Math.max(...d))+a);m>p&&y>f&&u.push([p,f,m,y])}return u}function Ox(e,t,n){if(!e||e.length<4)return null;const[r,i,s,o]=[e[0],e[1],e[2],e[3]];return Cx(s,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(s),Math.round(o)]:null}function Nx(e,t,n,r,i){return og(e,t,n,r,i)}function zx(e,t){var a,u,l,c;const[n,r,i,s]=t,o=[];for(const d of e){const p=Number((a=d.box)==null?void 0:a[0]),f=Number((u=d.box)==null?void 0:u[1]),m=Number((l=d.box)==null?void 0:l[2]),y=Number((c=d.box)==null?void 0:c[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>s||o.push({...d,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return o}function Bx(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,s=r.y+r.height/2;let o=!1;for(const a of t){if(n.id&&a.id===n.id){o=!0;break}const u=a.boundingBox,l=u.x+u.width/2,c=u.y+u.height/2,d=.5*Math.min(u.width,u.height);if((i-l)**2+(s-c)**2<d*d){o=!0;break}}o||t.push(n)}return t}function sg(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const Px=1.1,Dx=3.2,Ux=20,Lx=.5,Fx=1280,Gx=.18,Wx=28,qx=.3;function Vx(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const a=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(a.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(a.reduce((c,d)=>c+d,0)/a.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],s=[];return e.forEach((o,a)=>(o<=r?i:s).push(a)),[i,s]}function Hx(e,t,n=Px){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const s=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),a=Math.max(...s)-Math.min(...s)>Math.max(...o)-Math.min(...o)?s:o,u=[];for(const l of Vx(a)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,N)=>R-N),p=d[Math.trunc(d.length/2)],f=Dx*p,m=Math.max(0,Math.min(...c.map(R=>R[0]))-f),y=Math.max(0,Math.min(...c.map(R=>R[1]))-f),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+f),b=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=Lx*p*Fx/x,v=M>0?Math.max(1,Math.ceil(Ux/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,k=(I?w-m:b-y)/v,S=k*(1+Gx);for(let R=0;R<v;R++){let N=(I?m:y)+R*k-(S-k)/2;N=Math.max(I?m:y,N);const X=Math.min(I?w:b,N+S);u.push(I?[Math.trunc(N),Math.trunc(y),Math.trunc(X),Math.trunc(b)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(X)])}}return u.filter(([l,c,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-c))>=n)}function jx(e,t,n,r=Wx){const[i,s]=n,o=e;for(const[a,u,l,c]of t){const d=(a+l)/2+i,p=(u+c)/2+s;o.some(([m,y,w,b])=>{const x=d-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||o.push([a+i,u+s,l+i,c+s])}return o}function Kx(e,t,n,r=qx){for(const i of n){const s=r*Math.min(i[2],i[3]);if(i[0]-s<=e&&e<=i[0]+i[2]+s&&i[1]-s<=t&&t<=i[1]+i[3]+s)return!0}return!1}function Yx(e,t,n){return n.some(([r,i,s,o])=>r<=e&&e<=s&&i<=t&&t<=o)}function Xx(e,t,n,r){return n.length===0?!1:Yx(e,t,n)&&!Kx(e,t,r)}const ag=4,ug=8,ii=5,kn="base-game rule";function Dt(e,t){return{code:e,message:t,severity:"warning"}}function Ds(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function Qx(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>ag&&i.push(Dt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${ag} (${kn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const s=Ds(n);return s.length>0&&i.push(Dt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${s.join(", ")}. Only one copy of each wonder exists (${kn}), so one of the two readings is wrong.`)),i}function Zx(e){const t=[],n=Object.entries(e).map(([i,s])=>[i,new Set(s.filter(o=>!!o))]),r=Object.values(e).reduce((i,s)=>i+s.filter(Boolean).length,0);r>ug&&t.push(Dt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${ug} are in play (${kn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[s,o]=n[i];for(let a=i+1;a<n.length;a++){const[u,l]=n[a],c=[...o].filter(d=>l.has(d)).sort();c.length>0&&t.push(Dt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${s} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function Jx(e,t=null){const n=[],r=Object.values(e).flatMap(s=>s.filter(o=>!!o));r.length>ii&&n.push(Dt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ii} are in play (${kn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Ds(r);if(i.length>0&&n.push(Dt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${kn}).`)),t!==null){const s=t.filter(Boolean),o=r.length+s.length;o!==ii&&n.push(Dt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ii} are in play (${kn}) — one is missing or one was counted twice.`));const a=new Set(s),u=[...new Set(r.filter(l=>a.has(l)))].sort();u.length>0&&n.push(Dt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function e$(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Dt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const s=Ds(e.filter(o=>!!o));return s.length>0&&r.push(Dt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${s.join(", ")}. Only one copy of each guild exists (${kn}).`)),r}const t$=.25,n$=.45;function r$(e,t,n,r,i){const s=Math.cos(i),o=Math.sin(i),a=[n/2*s,n/2*o],u=[-r/2*o,r/2*s],c=[...[[e+a[0]+u[0],t+a[1]+u[1]],[e+a[0]-u[0],t+a[1]-u[1]],[e-a[0]-u[0],t-a[1]-u[1]],[e-a[0]+u[0],t-a[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function Us(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function lg(e,t){const n=Us(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function i$(e,t,n){const r=Us(e,t),i=Us(e,n),s=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,s,!0))}finally{r.delete(),i.delete(),s.delete()}}function o$(e,t,n=n$){const r=[...t].sort((s,o)=>o.confidence-s.confidence),i=[];for(const s of r){let o=!1;for(const a of i){const u=i$(e,s.quad,a.quad);if(u<=0)continue;const l=lg(e,s.quad)+lg(e,a.quad)-u;if(u/Math.max(1e-6,l)>=n){o=!0;break}}o||i.push(s)}return i}function s$(e,t,n,r,i=t$){const s=[];for(let o=0;o<n;o++){const a=t[4*n+o];if(a<i)continue;const l=r$(t[o],t[n+o],t[2*n+o],t[3*n+o],t[5*n+o]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);s.push({quad:l,confidence:a})}return o$(e,s)}const a$=128,u$=88;function l$(e,t,n,r=a$,i=u$){const s=new e.Mat(t.height,t.width,e.CV_8UC3),o=s.data,a=t.channels;for(let p=0,f=t.width*t.height;p<f;p++)o[p*3]=t.data[p*a],o[p*3+1]=t.data[p*a+1],o[p*3+2]=t.data[p*a+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(p=>[p[0],p[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(s,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{s.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function c$(e){return[e[2],e[3],e[0],e[1]]}const d$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],h$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],p$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],f$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],m$=[...h$,...p$,...f$,...d$];Object.fromEntries(m$.map(e=>[e.id,e]));const g$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const cg=.2,y$=.3,dg=.25,Ls={total:0,idDiff:0,verdictDiff:0},wt={pass1Calls:0,pass1Boxes:0,pass1Kept:0,pass2Calls:0,pass2Boxes:0,pass2Promoted:0},Ut={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},oi={total:0,memeK:0,memeKInverse:0,detail:[]};function w$(e,t,n){for(const r of e){let i=!1;for(let s=0,o=r.length-1;s<r.length;o=s++){const a=r[s],u=r[o];a[1]>n!=u[1]>n&&t<(u[0]-a[0])*(n-a[1])/(u[1]-a[1])+a[0]&&(i=!i)}if(i)return r.map(s=>[s[0],s[1]])}return null}function b$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=dg)return!1;const i=e.x+e.width,s=e.y+e.height;for(const o of n){const a=o.box;if(!a||a.length<4||a[3]<=0)continue;const u=a[0]+a[2]/2,l=a[1]+a[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=s))continue;const c=a[2]/a[3];if(!(Math.abs(Math.log(c))<=dg)&&r>1==c>1)return!0}return!1}async function _$(e,t,n,r,i=[0,1,2,3]){const[s,o,a,u]=t;if(a<=0||u<=0)return null;const l=Math.round(a*cg),c=Math.round(u*cg),d=Math.max(0,Math.round(s-l)),p=Math.max(0,Math.round(o-c)),f=Math.min(e.width,Math.round(s+a+l)),m=Math.min(e.height,Math.round(o+u+c)),y=f-d,w=m-p;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let I=0;I<w;I++){const T=((p+I)*e.width+d)*b;x.set(e.data.subarray(T,T+y*b),I*y*b)}const M={width:y,height:w,channels:b,data:x};let v=null;for(const I of i){const T=I===0?M:Yt(M,I),k=T.width,S=k-Math.floor(y$*k),R=k-S;if(R<=0)continue;const N=new Uint8ClampedArray(R*T.height*T.channels);for(let F=0;F<T.height;F++){const j=(F*k+S)*T.channels;N.set(T.data.subarray(j,j+R*T.channels),F*R*T.channels)}const X={width:R,height:T.height,channels:T.channels,data:N},W=Qr(X),O=(await n.run({[n.inputNames[0]]:new Be("float32",W,[1,3,gt,gt])}))[n.outputNames[0]].data[1]??0;r&&(r[I]=O),v=v===null?O:Math.max(v,O)}return v}async function hg(e,t,n,r,i,s,o,a=[]){var w;const u=async b=>(await i.run({[i.inputNames[0]]:new Be("float32",b,[1,3,Qt,Qt])}))[i.outputNames[0]].data,l=e.obbQuads===void 0?null:await et("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(b){return console.warn("[wonders-obb] détection échouée, repli ORB :",b),null}}),c=l===null?r:l.map(b=>{const x=b.map(([T])=>T),M=b.map(([,T])=>T),v=Math.min(...x),I=Math.min(...M);return[Math.round(v),Math.round(I),Math.round(Math.max(...x)-v),Math.round(Math.max(...M)-I)]}),d=a.length===0?c:c.filter(([b,x,M,v])=>{const I=b+M/2,T=x+v/2;return!a.some(k=>{const S=k.x+k.width/2,R=k.y+k.height/2,N=.5*Math.min(k.width,k.height);return(I-S)**2+(T-R)**2<N*N})}),p=new Map;for(const b of d){const[x,M,v,I]=b;if(v<=0||I<=0)continue;const T=l===null?null:w$(l,x+v/2,M+I/2);if(T===null||e.redresserQuad===void 0)continue;let k=T;const S=st("identify: redressement du quad",()=>e.redresserQuad(n,k)),R=Ym(),{id:N,prob:X,inverse:W}=await et("classifieur merveille (1 lecture)",()=>b2(S,u));if(N===""||X<R)continue;W&&(k=c$(k).map(O=>[O[0],O[1]]));const V=p.get(N);(V===void 0||X>V.prob)&&p.set(N,{prob:X,box:b,quad:k})}const f=[],m=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[b,{prob:x,box:M,quad:v}]of p){const[I,T,k,S]=M;let R={x:Math.round(I),y:Math.round(T),width:Math.round(k),height:Math.round(S)},N=null,X=[],W=null;if(v!==null){N=v;const z=N.map(ne=>ne[0]),D=N.map(ne=>ne[1]),P=Math.max(0,Math.round(Math.min(...z))),K=Math.max(0,Math.round(Math.min(...D)));if(R={x:P,y:K,width:Math.min(n.width,Math.round(Math.max(...z)))-P,height:Math.min(n.height,Math.round(Math.max(...D)))-K},m!==null)try{const ne=await e.wonderRef(b),J=N,de=ne===null||J===null?null:st("identify: bande droite #63",()=>ks(t,n,ne,J));if(de!==null){const $e=st("identify: preprocess tuck",()=>Qr(de)),G=await m.run({[m.inputNames[0]]:new Be("float32",$e,[1,3,gt,gt])});W=Cs(G[m.outputNames[0]].data).prob,X=W>=Wn?["R"]:[]}}catch{}}else if(Date.now()<s)try{const z=await et("chargement refs merveilles",()=>e.wonderRef(b));if(z!==null){const D=st("ORB registration (merveille)",()=>zm(t,n,z,M));if(D!==null){N=D.footprint,X=D.overflow;const P=N.map(de=>de[0]),K=N.map(de=>de[1]),ne=Math.max(0,Math.round(Math.min(...P))),J=Math.max(0,Math.round(Math.min(...K)));if(R={x:ne,y:J,width:Math.min(n.width,Math.round(Math.max(...P)))-ne,height:Math.min(n.height,Math.round(Math.max(...K)))-J},m!==null)try{const de=N,$e=de===null?null:st("identify: bande droite #63",()=>ks(t,n,z,de));if($e!==null){const G=st("identify: preprocess tuck",()=>Qr($e)),ee=await m.run({[m.inputNames[0]]:new Be("float32",G,[1,3,gt,gt])});W=Cs(ee[m.outputNames[0]].data).prob}}catch{}}}}catch(z){console.warn(`[wonders-cls] ${b} registration failed:`,z)}const V=N!==null?Xr(N,X):null,O=v!==null&&N!==null?Xr(N,["R"]):null,F=[];if(W!==null&&F.push(W>=Wn?1:0),y!==null)try{let z=[0,1,2,3];if(v!==null){const K=v[1][1]-v[0][1],ne=v[1][0]-v[0][0],J=(Math.round(Math.atan2(K,ne)*180/Math.PI/90)%4+4)%4;z=[(0+J)%4,(2+J)%4]}const D=[0,0,0,0],P=await et("identify: sonde marges (#68)",()=>_$(n,M,y,D,z));if(P!==null&&(F.push(P>=Wn?1:0),v!==null)){const K=v[1][1]-v[0][1],ne=v[1][0]-v[0][0],J=(Math.round(Math.atan2(K,ne)*180/Math.PI/90)%4+4)%4,de=Math.max(D[(0+J)%4],D[(2+J)%4]);Ut.total+=1;const $e=P>=Wn?1:0,G=de>=Wn?1:0;$e===1&&(Ut.positifs4+=1),G===1&&(Ut.positifs2+=1),$e!==G&&(Ut.divergent+=1,Ut.detail.push(`${b.slice(0,12)}:v4=${$e}/v2=${G} p=[${D.map(ee=>ee.toFixed(2)).join(",")}]kQ${J}`))}}catch{}const j=O??V??R,Z=o.some(z=>{const D=z.box[0]+z.box[2]/2,P=z.box[1]+z.box[3]/2;return D>=j.x&&D<=j.x+j.width&&P>=j.y&&P<=j.y+j.height});F.push(Z?1:0);let le=F.length>0&&F.reduce((z,D)=>z+D,0)*2>F.length;le&&b$(j,R,o)&&(le=!1);const L=V??(le&&O!==null?O:null),B={id:b,name:((w=g$[b])==null?void 0:w.name)??b,builtWithCardUnderneath:le,boundingBox:R,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},A=L??R;f.push({obj:B,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height},quad:N,region:L})}return f}async function pg(e,t,n,r,i,s,o=[]){const a=await e.localiseWonders(n);return hg(e,t,n,a,r,i,s,o)}function x$(e,t){const n=sg(e.obj.boundingBox,t),r=e.region===null?null:sg(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([s,o])=>[s+t[0],o+t[1]]),region:r}}async function fg(e){try{const t=Nx(e.image.width,e.image.height,e.banners.map(o=>o.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const o of t){const a=e.cropFrame(o);if(a.width<=0||a.height<=0)continue;const u=e.skipKnownNear?e.known.map(l=>({x:l.boundingBox.x-o[0],y:l.boundingBox.y-o[1],width:l.boundingBox.width,height:l.boundingBox.height})):void 0;for(const l of await e.detect(a,zx(e.banners,o),u))n.push(x$(l,o))}if(e.builtSeenOut)for(const o of n)o.obj.id&&o.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(o.obj.id);if(n.length===0)return[];const r=[...e.known.map(o=>({boundingBox:o.boundingBox,id:o.id,neuf:-1})),...n.map((o,a)=>({boundingBox:o.obj.boundingBox,id:o.obj.id,neuf:a}))],i=Bx(r),s=[];for(const o of i){const a=o.neuf;a>=0&&s.push(n[a])}return s}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const je="/7wd-scorer/models/",Fs=[];let Ct=null;function $$(){Fs.length=0,Ct=null}function v$(e){const t=performance.now();Ct!==null&&Fs.push({nom:Ct.nom,ms:Math.round(t-Ct.debut)}),Ct={nom:e,debut:t}}function mg(){const e=[...Fs];Ct!==null&&e.push({nom:`${Ct.nom} (en cours)`,ms:Math.round(performance.now()-Ct.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function gg(){const e={};for(const t of Object.keys(nt))e[nt[t].onnx]=ui.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ut)e[t]=n;return e}function M$(){var e,t;return ai(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let yg=!1;const si=new Map;function ai(){var e;yg||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,yg=!0)}const ui=new Set;let Gs=0;function wg(e){return Gs+=1,e.finally(()=>{Gs-=1})}function S$(){return Gs>0}function I$(e){ai();let t=si.get(e);return t===void 0&&(t=wg(et(`session: 1er chargement ${nt[e].onnx}`,()=>zn.create(`${je}${nt[e].onnx}`,{executionProviders:ui.has(e)?["wasm"]:["webgpu","wasm"]}))),si.set(e,t),t.catch(()=>si.delete(e))),t}const ut=new Map;let gr=0,yr=0;const li=new Map;function Ws(e){const t=(Ct==null?void 0:Ct.nom)??"(hors etage)";li.set(t,(li.get(t)??0)+e)}function E$(){return[...li.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let qs=0;function T$(){return{ms:Math.round(gr),appels:yr,preparationMs:Math.round(qs)}}function k$(){gr=0,yr=0,qs=0,Hw(),li.clear(),gv()}const bg=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx"]),Vs=new Set;let Hs=null;async function js(e){if(Hs)return await Hs.catch(()=>{}),e();const t=e();return Hs=t.catch(()=>{}),t}async function Ks(e,t){return js(()=>zn.create(`${je}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ft(e){return wg(et(`session: 1er chargement ${e}`,()=>C$(e)))}async function C$(e){ai();const t=!bg.has(e)&&!Vs.has(e);let n=null;if(t)try{n=await Ks(e,!0),ut.set(e,"webgpu")}catch(o){Vs.add(e),ut.set(e,`wasm (webgpu refuse a la creation: ${String(o).slice(0,60)})`)}else ut.set(e,bg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await Ks(e,!1)}catch(o){return ut.set(e,`ECHEC wasm: ${String(o).slice(0,160)}`),null}let r=n,i=ut.get(e)==="webgpu";const s=async(o,...a)=>{const u=performance.now();try{const l=await r.run(o,...a),c=performance.now()-u;return gr+=c,Ws(c),yr+=1,l}catch(l){if(!i)throw l;Vs.add(e),ut.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await Ks(e,!1);const c=await r.run(o,...a),d=performance.now()-u;return gr+=d,Ws(d),yr+=1,c}};return new Proxy(r,{get(o,a,u){if(a==="run")return s;const l=Reflect.get(r,a,u);return typeof l=="function"?l.bind(r):l}})}let Ys=null,Xs=null;const A$=.75,R$=4,O$=.65,N$=3e4;let Qs=null;function jn(){return Qs===null&&(Qs=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Qs}const _g=new Map;function Zs(e){let t=_g.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${je}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),s=new OffscreenCanvas(r.width,r.height).getContext("2d");s.drawImage(r,0,0);const o=s.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),_g.set(e,t)),t}function Js(e){return Zs(`wonder-refs/${e}.jpg`)}const xg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function z$(){const e=new Map;for(const t of xg){const n=await Zs(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function B$(){const e=new Map;for(const t of xg){const n=await Zs(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const P$=.6,D$=12,U$=45e3;let ea=null;function $g(){return ea===null&&(ai(),ea=(async()=>{try{const[e,t,n,r]=await Promise.all([js(()=>zn.create(`${je}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]})),js(()=>zn.create(`${je}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]})),fetch(`${je}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${je}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:v_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ea}async function L$(e,t){const n=Math.max($_/Xt,t.width/t.height),{tensor:r,width:i}=S_(t,n),s={[e.rec.inputNames[0]]:new Be("float32",r,[1,3,Xt,i])},o=(await e.rec.run(s))[e.rec.outputNames[0]],[a,u,l]=o.dims,c=o.data,d=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=c[w+b];x>y&&(y=x,m=b)}d[f]=m,p[f]=y}return M_(d,p,e.charset)}function F$(...e){return et("merveilles (OCR+ORB+opencv)",()=>G$(...e))}async function G$(e,t){const n=await $g();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+U$;let s=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const a=Yt(e,o),u=h_(a),l={[n.det.inputNames[0]]:new Be("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(l))[n.det.outputNames[0]],d=w_(c.data,u,a.width,a.height).slice(0,D$);console.debug(`[wonders-ocr] rot ${o*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){s=!0;break e}const f=b_(a,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await L$(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<P$||m.trim().length<R$)continue;const w=R_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<A$||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:ta(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:s}}function ta(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const s=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],o=[s(e.x,e.y),s(e.x+e.width,e.y+e.height)],a=o.map(d=>d[0]),u=o.map(d=>d[1]),l=Math.min(...a),c=Math.min(...u);return{x:l,y:c,width:Math.max(...a)-l,height:Math.max(...u)-c}}function W$(){return Xs===null&&(Xs=fetch(`${je}laurel_gallery.json`).then(async e=>e.ok?e_(await e.json()):[]).catch(()=>[])),Xs}function q$(e,t,n,r){return st("crop",()=>V$(e,t,n,r))}function V$(e,t,n,r){return Lt(e,t-r,n-r,2*r,2*r)}function Lt(e,t,n,r,i){return st("crop",()=>H$(e,t,n,r,i))}function H$(e,t,n,r,i){const s=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),a=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,a-s),c=Math.max(0,u-o),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=((p+o)*e.width+(f+s))*e.channels,y=(p*l+f)*3;d[y]=e.data[m],d[y+1]=e.data[m+1],d[y+2]=e.data[m+2]}return{width:l,height:c,channels:3,data:d}}function j$(){return Ys===null&&(Ys=fetch(`${je}token_templates.json`).then(async e=>e.ok?K1(await e.json()):new Map).catch(()=>new Map)),Ys}let na=null;function ra(){return na===null&&(na=(async()=>{try{const e=await fetch(`${je}token_embed_index.json`);if(!e.ok)return null;const t=n2(await e.json()),n=await ft("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),na}const K$=.92;let ia=null;function oa(){return ia===null&&(ia=(async()=>{try{return(await fetch(`${je}guild_classifier.onnx`,{method:"HEAD"})).ok?await ft("guild_classifier.onnx"):null}catch{return null}})()),ia}let sa=null;function aa(){return sa===null&&(sa=(async()=>{try{return(await fetch(`${je}laurel_digit.onnx`,{method:"HEAD"})).ok?await ft("laurel_digit.onnx"):null}catch{return null}})()),sa}let ua=null,la=null;function ca(){return la===null&&(la=(async()=>{try{return(await fetch(`${je}banner_class.onnx`,{method:"HEAD"})).ok?await ft("banner_class.onnx"):null}catch{return null}})()),la}async function Y$(e,t){if(t.length===0)return t;const n=await ca();if(n===null)return t;const r=[];for(const i of t)try{const s=O2(i.box,e.width,e.height);if(s===null){r.push(i);continue}const o=Lt(e,s.x,s.y,s.w,s.h),a=N2(o),u=await n.run({[n.inputNames[0]]:new Be("float32",a,[1,3,cn,cn])});z2(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function da(){return ua===null&&(ua=(async()=>{try{return(await fetch(`${je}laurel_filter.onnx`,{method:"HEAD"})).ok?await ft("laurel_filter.onnx"):null}catch{return null}})()),ua}async function X$(e,t,n){let[r,i,s,o]=t,a=s-r,u=o-i;if(a<=0||u<=0)return null;if(a<Vn){const w=Math.floor((r+s)/2);r=w-Math.floor(Vn/2),s=w+Math.floor(Vn/2),a=s-r}if(u<Vn){const w=Math.floor((i+o)/2);i=w-Math.floor(Vn/2),o=w+Math.floor(Vn/2),u=o-i}const l=Math.trunc(Zm*a),c=Math.trunc(Zm*u),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(e.width,s+l),m=Math.min(e.height,o+c),y=Lt(e,d,p,f-d,m-p);if(y.width<=0||y.height<=0)return null;try{const w=T2(y),b=await n.run({[n.inputNames[0]]:new Be("float32",w,[1,3,ln,ln])});return k2(b[n.outputNames[0]].data)}catch{return null}}let ha=null;function pa(){return ha===null&&(ha=(async()=>{try{return(await fetch(`${je}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ft("coin_filter_cnn.onnx"):null}catch{return null}})()),ha}let fa=null;function ma(){return fa===null&&(fa=(async()=>{try{return(await fetch(`${je}coin_denom.onnx`,{method:"HEAD"})).ok?await ft("coin_denom.onnx"):null}catch{return null}})()),fa}async function Q$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=rg(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*yt*yt);r.forEach((u,l)=>i.set(u,l*u.length));const o=(await n.run({[n.inputNames[0]]:new Be("float32",i,[t.length,3,yt,yt])}))[n.outputNames[0]].data,a=ti.length;return t.map((u,l)=>ex(o.subarray(l*a,l*a+a)))}catch{return null}}async function Z$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=rg(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const c=new Float32Array(t.length*3*yt*yt);l.forEach((f,m)=>c.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new Be("float32",c,[t.length,3,yt,yt])}))[n.outputNames[0]].data;return t.map((f,m)=>Z2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const s=t.map(u=>u.r).sort((u,l)=>u-l),o=s.length%2===1?s[(s.length-1)/2]:(s[s.length/2-1]+s[s.length/2])/2,a=Math.trunc(o);if(a>=8){const u=await r(t.map(()=>a));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let ga=null;function ci(){return ga===null&&(ga=(async()=>{try{return(await fetch(`${je}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ft("tuck_classifier.onnx"):null}catch{return null}})()),ga}const vg=.1;let ya=null;function di(){return ya===null&&(ya=(async()=>{try{return(await fetch(`${je}track_band_brut.onnx`,{method:"HEAD"})).ok?await ft("track_band_brut.onnx"):null}catch{return null}})()),ya}async function Mg(e,t,n){try{const r=Hr(t,1280,nb(t.width,t.height,n)),s=(await e.run({[e.inputNames[0]]:new Be("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return wm(s.data,s.dims[1]??0,s.dims[2]??0,r.params,vg)}catch{return[]}}let wa=null;const J$=.4;function ev(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function tv(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const s=i.tuckRegion;s&&r.push(s)}return n.length===0&&r.length===0?e:e.filter(i=>{const s=i.boundingBox;if(!s)return!0;const o=s.x+s.width/2,a=s.y+s.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&a>=u.y&&a<=u.y+u.height||ev(s,u)>=J$)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&a>=u.y&&a<=u.y+u.height)return!1;return!0})}function ba(){return wa===null&&(wa=(async()=>{try{return(await fetch(`${je}tuck_box.onnx`,{method:"HEAD"})).ok?await ft("tuck_box.onnx"):null}catch{return null}})()),wa}let _a=null;function xa(){return _a===null&&(_a=(async()=>{try{return(await fetch(`${je}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await nv(),await ft("wonder_classifier.onnx")):null}catch{return null}})()),_a}let Sg=!1;async function nv(){if(Sg)return;const e=await(await fetch(`${je}wonder_classifier_seuil.json`)).json();p2(Number(e.seuil)),f2(e.classes),Sg=!0}let Ig=null,Eg=null;async function rv(e){var d;Ig??(Ig=ft("wonder_obb.onnx"));const t=await Ig;if(t===null)return null;const n=await jn();if(n===null)return null;Eg=n;const{tensor:r,params:i}=Hr(e,1024),o=(await t.run({[t.inputNames[0]]:new Be("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],a=o.dims[o.dims.length-1],u=o.data;let l=0;for(let p=0;p<a;p++){const f=u[4*a+p];f>l&&(l=f)}const c=s$(n,u,a,i);return ut.set("wonder_obb.onnx",`${ut.get("wonder_obb.onnx")??"?"} | dims=${o.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(d=c[0])!=null&&d.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(p=>p.quad.map(f=>[f[0],f[1]]))}const $a={wonderRef:Js,tuckClassifier:ci,tuckBoxClassifier:ba,obbQuads:rv,redresserQuad:(e,t)=>l$(Eg,e,t),localiseWonders:async e=>{try{const{rows:t,params:n}=await bt("wonder",e);return fs(t,n,nt.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function iv(e,t){const n=await ra();if(n!==null)try{const r=i2(e),i=new Be("float32",r,[4,3,un,un]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:a,cosine:u}=s2(n.index,o2(o));return u<K$?["",-1]:[a,u]}catch{}return Z1(e,t)}const Tg=new WeakMap;async function hi(e){const t=Tg.get(e);if(t!==void 0)return await t;const n=et("decodage image",()=>ov(e));return Tg.set(e,n),await n}async function ov(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",s=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${s}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const kg=new WeakMap;async function bt(e,t){let n=kg.get(t);n===void 0&&(n=new Map,kg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=sv(e,t);return n.set(e,i),await i}async function sv(e,t){const n=nt[e],r=performance.now(),{tensor:i,params:s}=Hr(t,n.input);qs+=performance.now()-r;const o=async()=>{const a=await I$(e),u={[a.inputNames[0]]:new Be("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await a.run(u),d=performance.now()-l;gr+=d,Ws(d),yr+=1;const p=c[a.outputNames[0]];return{rows:new Float32Array(p.data),params:s}};try{return await o()}catch(a){if(ui.has(e))throw a;return ui.add(e),si.delete(e),await o()}}const av=6,uv=4,lv=5,cv=2;async function dv(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await hi(e),r=await bt("banner",n),i=jr(r.rows,r.params,nt.banner.conf);if(t.banners=i.length,i.length>=av)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await bt("laurel",n),o=gs(s.rows,s.params,nt.laurel.conf);if(t.laurels=o.length,o.length>=uv)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const a=await bt("coin",n),u=gm(a.rows,a.params,nt.coin.conf);return t.coins=u.length,u.length>=lv?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=cv?{...t,kind:"board",confidence:.4}:t}function hv(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Cg(e,t,n,r,i,s,o,a){let u=0;r(`${i}: card banners…`,.04);const l=await bt("banner",e);let c=jr(l.rows,l.params,nt.banner.conf);c=await Y$(e,c),r(`${i}: progress tokens…`,.08);let d=[];const p=await di();p!==null&&(d=await Mg(p,e,c)),d.length>0&&c.length>0&&(c=c.filter(G=>{const ee=G.box[0]+G.box[2]/2,re=G.box[1]+G.box[3]/2;return!d.some(([oe,se,xe,_e])=>Math.min(oe,xe)<=ee&&ee<=Math.max(oe,xe)&&Math.min(se,_e)<=re&&re<=Math.max(se,_e))}));const f=await bt("token",e),m=await j$(),y=[],w=[];for(const G of pb(f.rows,f.params,nt.token.conf)){if(w.push({cx:G.cx,cy:G.cy,r:G.r}),d.some(([oe,se,xe,_e])=>G.cx>=oe&&G.cx<=xe&&G.cy>=se&&G.cy<=_e))continue;const[ee,re]=await iv(Mm(e,G),m);ee===""&&re<0?w.pop():ee===""?u+=1:!y.some(oe=>oe.id===ee)&&!a.some(oe=>oe.id===ee)&&y.push({id:ee,center:[G.cx,G.cy],radius:G.r,confidence:Math.round(re*1e4)/1e4})}r(`${i}: coins…`,.14);const b=await bt("coin",e),x=gm(b.rows,b.params,nt.coin.conf).filter(G=>!w.some(ee=>(G.cx-ee.cx)**2+(G.cy-ee.cy)**2<=G.r*G.r)),M=await pa(),v=M!==null?await Z$(e,x,M):null,I=(v!==null?x.filter((G,ee)=>v[ee]>=ng).map(G=>G.r):[]).sort((G,ee)=>G-ee),T=I.length>0?I.length%2===1?I[(I.length-1)/2]:(I[I.length/2-1]+I[I.length/2])/2:null,[k,S]=Q2,R=x.map((G,ee)=>{const re=v!==null?v[ee]:null;return re===null||re>=ng?"keep":T!==null&&T>0&&G.r/T>=k&&G.r/T<=S?"suspect":"drop"}),N=x.filter((G,ee)=>R[ee]==="keep"),X=Ub(e,N),W=await ma(),V=W!==null?await Q$(e,N,W):null,O=tx(X,V??X.map(()=>null));O.map(G=>G.value);const F=[];let j=0;if(x.forEach((G,ee)=>{if(R[ee]==="drop")return;if(R[ee]==="suspect"){const oe=v[ee];F.push({denomination:null,center:[G.cx,G.cy],radius:G.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${oe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const re=O[j++];F.push({denomination:re.value,center:[G.cx,G.cy],radius:G.r,denomSource:re.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const G=F.map(re=>re.radius).sort((re,oe)=>re-oe),ee=G.length%2===1?G[(G.length-1)/2]:(G[G.length/2-1]+G[G.length/2])/2;if(ee>0)for(const re of F)re.radius/ee>2&&(re.suspect=!0,re.suspectReason=`radius ${re.radius}px is ${(re.radius/ee).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let G=0;G<F.length;G+=1)for(let ee=G+1;ee<F.length;ee+=1){const re=F[G],oe=F[ee],se=Math.hypot(re.center[0]-oe.center[0],re.center[1]-oe.center[1]);if(se<1.1*Math.min(re.radius,oe.radius))for(const xe of[re,oe])xe.suspect||(xe.suspect=!0,xe.suspectReason=`almost concentric with another coin (${se.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Z=[],le=[],L=[],B=Date.now()+N$;let A=null,z=null;const D=()=>(z===null&&(z=(async()=>{try{const{rows:G,params:ee}=await bt("wonder",e);return fs(G,ee,nt.wonder.conf,Number.POSITIVE_INFINITY).map(re=>re.box)}catch{return[]}})()),z),P=[];let K=!1;const ne=await xa();if(ne!==null){const G=await D();if(G.length>0&&(A=await et("opencv.js (chargement)",()=>jn()),A!==null)){r(`${i}: identifying wonders…`,.35);const ee=await et("identifyWondersByClassifier",()=>hg($a,A,e,G,ne,B,c));for(const re of ee)Z.some(oe=>oe.id===re.obj.id)||o.some(oe=>oe.id===re.obj.id)||(Z.push(re.obj),P.push({obj:re.obj,edgeScores:re.edgeScores,zone:re.zone}),le.push(re.zone),L.push({quad:re.quad,region:re.region}));K=ee.length>0}}K||r(`${i}: wonder names…`,.2);const J=K?{wonders:[],aborted:!1}:await F$(e,(G,ee)=>r(`${i}: ${G}`,.2+.35*(ee??0)));A===null&&(A=J.wonders.length>0?await jn():null);for(const G of J.wonders){let ee=null;if(A!==null&&Date.now()<B){r(`${i}: registering ${G.name}…`,.6);try{const re=await Js(G.id);if(re!==null){let oe=q_(A,e,re,[[G.nameBox.x,G.nameBox.y],[G.nameBox.x+G.nameBox.width,G.nameBox.y],[G.nameBox.x+G.nameBox.width,G.nameBox.y+G.nameBox.height],[G.nameBox.x,G.nameBox.y+G.nameBox.height]]);if(oe===null){const se=await D(),xe=Y_(se,G.nameBox.x+G.nameBox.width/2,G.nameBox.y+G.nameBox.height/2);xe!==null&&(oe=zm(A,e,re,xe))}if(oe!==null){let se=oe.built,xe=!1;const _e=await ci();if(_e!==null)try{const ge=ks(A,e,re,oe.footprint);if(ge!==null){const we=Qr(ge),Ie=await _e.run({[_e.inputNames[0]]:new Be("float32",we,[1,3,gt,gt])});se=Cs(Ie[_e.outputNames[0]].data).built,xe=!0}}catch{}const Q=oe.footprint.map(ge=>ge[0]),te=oe.footprint.map(ge=>ge[1]),ae=Math.max(0,Math.round(Math.min(...Q))),fe=Math.max(0,Math.round(Math.min(...te)));ee={built:se,boundingBox:{x:ae,y:fe,width:Math.min(e.width,Math.round(Math.max(...Q)))-ae,height:Math.min(e.height,Math.round(Math.max(...te)))-fe},tuckRegion:Xr(oe.footprint,oe.overflow),footprint:oe.footprint,edgeScores:oe.edgeScores,builtByTuck:xe}}}}catch(re){console.warn(`[wonders-reg] ${G.id} failed:`,re)}}if(ee!==null){const re=ee.tuckRegion??ee.boundingBox;le.push({x0:re.x,y0:re.y,x1:re.x+re.width,y1:re.y+re.height}),L.push({quad:ee.footprint,region:ee.tuckRegion})}else{const re=Math.max(8,G.nameBox.height),oe=Math.round(G.nameBox.width*.15);le.push({x0:G.nameBox.x-oe,y0:G.nameBox.y-re*2.5,x1:G.nameBox.x+G.nameBox.width+oe,y1:G.nameBox.y+G.nameBox.height+re*2.5}),L.push({quad:null,region:null})}if(!Z.some(re=>re.id===G.id)&&!o.some(re=>re.id===G.id)){const re=(ee==null?void 0:ee.builtByTuck)===!0,oe=re?ee.built:!1,se=!re&&(ee==null?void 0:ee.built)===!0,xe={id:G.id,name:G.name,builtWithCardUnderneath:oe,boundingBox:(ee==null?void 0:ee.boundingBox)??{x:0,y:0,width:0,height:0},...ee!=null&&ee.tuckRegion?{tuckRegion:ee.tuckRegion}:{},confidence:G.confidence,...se?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};Z.push(xe),P.push({obj:xe,edgeScores:ee&&!ee.builtByTuck?ee.edgeScores:null,zone:le[le.length-1]})}}if(!K){const G=Z_(P.map(ee=>({built:ee.obj.builtWithCardUnderneath,edgeScores:ee.edgeScores,zone:ee.zone})),c.map(ee=>[ee.box[0]+ee.box[2]/2,ee.box[1]+ee.box[3]/2]));for(const ee of G){const re=P[ee];re.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${re.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(c.length>0){const ee=new Set(G);for(let re=0;re<P.length;re++){const oe=P[re];if(ee.has(re)||!oe.obj.builtWithCardUnderneath)continue;const se=oe.obj.tuckRegion;if(se===void 0)continue;if(!c.some(_e=>{const Q=_e.box[0]+_e.box[2]/2,te=_e.box[1]+_e.box[3]/2;return Q>=se.x&&Q<=se.x+se.width&&te>=se.y&&te<=se.y+se.height})){const _e=oe.obj;_e.builtWithCardUnderneath=!1,_e.suspect=!0,_e.suspectReason="built-unconfirmed"}}}}if(J.aborted&&t.push({code:"LOW_CONFIDENCE",message:`${i}: the wonder-name read ran out of its time budget on this device — ${J.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),A!==null&&J.wonders.length>0&&Date.now()<B)try{const G=await $g(),ee=(G==null?void 0:G.catalog.filter(oe=>oe.kind==="wonder").map(oe=>oe.id))??[],re=new Map;for(const oe of ee)if(!Z.some(se=>se.id===oe)&&!o.some(se=>se.id===oe)){const se=await Js(oe);se!==null&&re.set(oe,se)}if(re.size>0){r(`${i}: searching occluded wonders…`,.7);const oe=W_(A,e,re,B);for(const se of oe){const xe=se.footprint.map(ye=>ye[0]),_e=se.footprint.map(ye=>ye[1]),Q=Math.max(0,Math.round(Math.min(...xe))),te=Math.max(0,Math.round(Math.min(..._e))),ae={x:Q,y:te,width:Math.min(e.width,Math.round(Math.max(...xe)))-Q,height:Math.min(e.height,Math.round(Math.max(..._e)))-te},fe=ye=>{const Ue=ye.boundingBox,qe=Math.max(0,Math.min(Ue.x+Ue.width,ae.x+ae.width)-Math.max(Ue.x,ae.x)),Fe=Math.max(0,Math.min(Ue.y+Ue.height,ae.y+ae.height)-Math.max(Ue.y,ae.y)),Ge=qe*Fe,it=Ue.width*Ue.height+ae.width*ae.height-Ge;return it>0&&Ge/it>G_};if(Z.some(fe)||o.some(fe))continue;const we=G==null?void 0:G.catalog.find(ye=>ye.id===se.id);Z.push({id:se.id,name:(we==null?void 0:we.nameFr)??(we==null?void 0:we.name)??se.id,builtWithCardUnderneath:se.built,boundingBox:ae,...se.tuckRegion?{tuckRegion:se.tuckRegion}:{},confidence:Math.round(se.confidence*1e4)/1e4});const Ie=se.tuckRegion??ae;le.push({x0:Ie.x,y0:Ie.y,x1:Ie.x+Ie.width,y1:Ie.y+Ie.height}),L.push({quad:se.footprint.map(([ye,Ue])=>[ye,Ue]),region:se.tuckRegion??null})}}}catch(G){console.warn("[wonders-reg] discovery failed:",G)}const de=async()=>{let G=Z.slice();const ee=[];c.forEach((_e,Q)=>{const te=_e.box[0]+_e.box[2]/2,ae=_e.box[1]+_e.box[3]/2;le.some(fe=>te>=fe.x0&&te<=fe.x1&&ae>=fe.y0&&ae<=fe.y1)||ee.push(Q)});const re=[],oe=[];G.forEach((_e,Q)=>{const te=_e.boundingBox;te&&te.width>0&&(re.push(Q),oe.push([te.x,te.y,te.width,te.height]))});const se=_e=>{const Q=[];return _e.forEach((te,ae)=>{const fe=te.box[0]+te.box[2]/2,ge=te.box[1]+te.box[3]/2;le.some(we=>fe>=we.x0&&fe<=we.x1&&ge>=we.y0&&ge<=we.y1)||Q.push(ae)}),Q};let xe=zs(c.map(_e=>_e.box),ee,oe,d,[e.width,e.height]);if(ne!==null){r(`${i}: seconde passe merveilles (crop de cité)…`,.42),wt.pass1Calls+=1;const Q=(await fg({skipKnownNear:!0,image:e,banners:c,hulls:xe.hulls.map(([te,ae],fe)=>({owner:te,poly:ae,n:xe.hullBoxCounts[fe]??0})),wonderBoxes:oe,known:G,cropFrame:([te,ae,fe,ge])=>Lt(e,te,ae,fe-te,ge-ae),detect:async(te,ae,fe)=>{if(A===null&&(A=await jn()),A===null)return[];const ge=await pg($a,A,te,ne,B,ae,fe);return wt.pass1Boxes+=ge.length,ge}})).filter(te=>!Z.some(ae=>ae.id===te.obj.id)&&!o.some(ae=>ae.id===te.obj.id));if(wt.pass1Kept+=Q.length,Q.length>0){for(const te of Q)Z.push(te.obj),le.push(te.zone),L.push({quad:te.quad,region:te.region});G=Z.slice(),re.length=0,oe.length=0,G.forEach((te,ae)=>{const fe=te.boundingBox;fe&&fe.width>0&&(re.push(ae),oe.push([fe.x,fe.y,fe.width,fe.height]))}),xe=zs(c.map(te=>te.box),se(c),oe,d,[e.width,e.height])}}try{const _e=og(e.width,e.height,c.map(Q=>Q.box),xe.hulls.map(([Q,te],ae)=>({owner:Q,poly:te,n:xe.hullBoxCounts[ae]??0})),oe);if(_e.length>0){const Q=Ps(c.map(ae=>ae.box)),te=[];for(const ae of _e){const[fe,ge,we,Ie]=ae,ye=Lt(e,fe,ge,we-fe,Ie-ge);if(ye.width<=0||ye.height<=0)continue;const Ue=await bt("banner",ye);for(const qe of jr(Ue.rows,Ue.params,nt.banner.conf)){const Fe=Ox(qe.box,ae,Q);Fe&&te.push({...qe,box:Fe})}}if(te.length>0){const ae=_m([...c,...te]);ae.length>c.length&&(c=ae,xe=zs(c.map(fe=>fe.box),se(c),oe,d,[e.width,e.height]))}}}catch(_e){console.warn("[#129 city-rescan] skipped:",_e)}if(ne!==null&&G.some(_e=>_e.builtWithCardUnderneath!==!0)){r(`${i}: revote built (crop de cité)…`,.47);const _e=new Set;wt.pass2Calls+=1,await fg({builtSeenOut:_e,image:e,banners:c,hulls:xe.hulls.map(([Q,te],ae)=>({owner:Q,poly:te,n:xe.hullBoxCounts[ae]??0})),wonderBoxes:oe,known:G,cropFrame:([Q,te,ae,fe])=>Lt(e,Q,te,ae-Q,fe-te),detect:async(Q,te)=>{if(A===null&&(A=await jn()),A===null)return[];const ae=await pg($a,A,Q,ne,B,te);return wt.pass2Boxes+=ae.length,ae}}),wt.pass2Promoted+=[..._e].filter(Q=>G.some(te=>te.id===Q&&te.builtWithCardUnderneath!==!0)).length;for(const Q of G)Q.id&&_e.has(Q.id)&&Q.builtWithCardUnderneath!==!0&&(Q.builtWithCardUnderneath=!0,Q.builtByCityCrop=!0)}return s!==void 0&&(s.hulls=xe.hulls.map(([_e,Q],te)=>({owner:_e,poly:Q,n:xe.hullBoxCounts[te]??0})),s.bandBoxes=d,s.image=e),{split:xe,photoWonders:G,splitWonderIdx:re}};let $e=null;try{$e=await de()}catch(G){console.warn("[city-split] failed (side unfiltered):",G)}return{bannerDetections:c,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:d,bandSession:p,wonderFootprints:le,wonderTuckGates:L,photoTokensList:y,geo:$e,cv:A,regDeadline:B,unidentifiedTokens:u}}async function Ag(e,t,n,r,i,s,o,a,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:p,photoTokenDiscs:f,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:M,geo:v,regDeadline:I}=e,T={},k=[],S=[];let R=0;const N=[];let X=0,W=0;const V=[],O=[],F=[],j=t==="opponent";let Z=(Q,te)=>!j,le=(Q,te)=>!j,L=null;if(v!==null)try{const{split:Q,photoWonders:te,splitWonderIdx:ae}=v;Z=(Ie,ye)=>Q.pointOwner(Ie,ye)==="opponent"===j;const fe=j?"opponent":"player";if(le=(Ie,ye)=>Q.pointOwner(Ie,ye)===fe,n){const Ie=Q;L=ye=>new Set(_x(ye,Ie,fe,y))}c=c.filter((Ie,ye)=>Q.bannerOwner[ye]==="opponent"===j);const ge=te.map(()=>"player");ae.forEach((Ie,ye)=>{ge[Ie]=Q.wonderOwner[ye]});const we=[];te.forEach((Ie,ye)=>{ge[ye]==="opponent"===j&&we.push(Ie)});for(const Ie of we)O.push(Ie);b.length=0;for(const Ie of we){const ye=Ie.tuckRegion??Ie.boundingBox;ye&&b.push({x0:ye.x,y0:ye.y,x1:ye.x+ye.width,y1:ye.y+ye.height})}for(const Ie of M)Z(Ie.center[0],Ie.center[1])&&F.push(Ie)}catch(Q){console.warn("[city-split] failed (side unfiltered):",Q)}const B=L!==null?L(p):null;for(const Q of p)(B!==null?!B.has(Q):!le(Q.center[0],Q.center[1]))||(R+=Q.denomination??0,S.push(Q));const A=new Set,z=[],D=Ps(c.map(Q=>Q.box));x.forEach((Q,te)=>{if(Q.quad===null||Q.region===null){const we=b[te];we&&z.push(we);return}const ae=Q.region,fe=[];c.forEach((we,Ie)=>{const ye=we.box[0]+we.box[2]/2,Ue=we.box[1]+we.box[3]/2;ye>=ae.x&&ye<=ae.x+ae.width&&Ue>=ae.y&&Ue<=ae.y+ae.height&&fe.push([Ie,we.box])});const ge=X2(Q.quad,fe,D);ge!==null&&A.add(ge)});let P=[],K=0;c.forEach((Q,te)=>{if(A.has(te)){W+=1,K+=1;return}const ae=Q.box[0]+Q.box[2]/2,fe=Q.box[1]+Q.box[3]/2;if(z.some(ge=>ae>=ge.x0&&ae<=ge.x1&&fe>=ge.y0&&fe<=ge.y1)){W+=1,K+=1;return}P.push(Q)});const ne=W2(P,K,y,s.width,s.height);P=ne.kept;for(const Q of P)T[Q.family]=(T[Q.family]??0)+1,X+=1;const J=vb(P),de=new Set(J.map(Q=>Q.box.join(",")));for(const Q of Sb(P))de.has(Q.box.join(","))||(J.push(Q),de.add(Q.box.join(",")));for(const Q of ne.suspects)de.has(Q.box.join(","))||(J.push(Q),de.add(Q.box.join(",")));for(const Q of J)V.push(Q);if(P.some(Q=>Q.family==="guild")){const Q=await oa();if(Q!==null){a(`${u}: identifying guilds…`,.75);for(const te of P)if(te.family==="guild")try{const[ae,fe,ge,we]=te.box,Ie=Lt(s,ae,fe,ge,we),ye=l2(Ie),Ue={[Q.inputNames[0]]:new Be("float32",ye,[1,3,qn,qn])},Fe=(await Q.run(Ue))[Q.outputNames[0]].data,{id:Ge,prob:it}=c2(Fe);Ge!==""&&!N.some(Rt=>Rt.id===Ge)&&!l.some(Rt=>Rt.id===Ge)&&N.push({id:Ge,boundingBox:{x:ae,y:fe,width:ge,height:we},confidence:Math.round(it*1e4)/1e4})}catch(ae){console.warn("[guild-cls] failed:",ae)}}else if(Date.now()<I)try{const te=d??await jn();if(te!==null){const ae=await z$();if(ae.size>0){a(`${u}: identifying guilds…`,.75);const fe=await B$();for(const ge of D1(te,s,ae,I,fe))!N.some(we=>we.id===ge.id)&&!l.some(we=>we.id===ge.id)&&N.push(ge)}}}catch(te){console.warn("[guilds-reg] failed:",te)}}a(`${u}: laurels…`,.8);const G=await et("laurier: chargement galerie gabarits",()=>W$()),ee=[];for(const Q of[0]){const te=Q===0?s:Yt(s,Q),ae=await et("laurier: passe PLEINE photo",()=>bt("laurel",te));for(const[fe,ge,we,Ie]of st("laurier: decodage YOLO (JS)",()=>gs(ae.rows,ae.params,nt.laurel.conf))){const ye=ta({x:fe,y:ge,width:we-fe,height:Ie-ge},Q,s.width,s.height);ee.push([ye.x,ye.y,ye.x+ye.width,ye.y+ye.height])}}let re=st("laurier: dedup",()=>ym(ee));const oe=[];try{const Q=Hx(c.map(te=>te.box),[s.width,s.height]);ut.set("_tta.onnx",`total=${Ls.total} idDiff=${Ls.idDiff} verdictDiff=${Ls.verdictDiff}`),ut.set("_rescan.onnx",`p1: ${wt.pass1Calls} appels, ${wt.pass1Boxes} boites, ${wt.pass1Kept} neuves | p2: ${wt.pass2Calls} appels, ${wt.pass2Boxes} boites, ${wt.pass2Promoted} promues`),ut.set("_marge2.onnx",`total=${Ut.total} pos4=${Ut.positifs4} pos2=${Ut.positifs2} divergent=${Ut.divergent} `+Ut.detail.slice(0,10).join(" | ")),ut.set("_ttaObb.onnx",`total=${oi.total} memeK=${oi.memeK} inv=${oi.memeKInverse} `+oi.detail.slice(0,12).join(" ")),ut.set("_tuilage.onnx",`groupes=? tuiles=${Q.length} bannieres=${c.length} image=${s.width}x${s.height}`);for(const[te,ae,fe,ge]of Q){const we=Lt(s,te,ae,fe-te,ge-ae);if(we.width<=0||we.height<=0)continue;const Ie=[];for(const ye of[0]){const Ue=ye===0?we:Yt(we,ye),qe=await et("laurier: passe par TUILE (#113)",()=>bt("laurel",Ue));for(const[Fe,Ge,it,Rt]of st("laurier: decodage YOLO (JS)",()=>gs(qe.rows,qe.params,nt.laurel.conf))){const lt=ta({x:Fe,y:Ge,width:it-Fe,height:Rt-Ge},ye,we.width,we.height);Ie.push([lt.x,lt.y,lt.x+lt.width,lt.y+lt.height])}}if(re=jx(re,ym(Ie),[te,ae]),w!==null)try{const ye=await et("laurier: bande de piste sur tuile (#114)",async()=>{const Fe=Hr(we,1280,hr);return{sortie:await w.run({[w.inputNames[0]]:new Be("float32",Fe.tensor,[1,3,1280,1280])}),params:Fe.params}}),Ue={params:ye.params},qe=ye.sortie[w.outputNames[0]];for(const[Fe,Ge,it,Rt]of wm(qe.data,qe.dims[1]??0,qe.dims[2]??0,Ue.params,vg))oe.push([Fe+te,Ge+ae,it+te,Rt+ae])}catch{}}}catch(Q){console.warn("[laurel-containers] failed:",Q)}const se=[...y,...oe];re=re.filter(([Q,te,ae,fe])=>!Xx((Q+ae)/2,(te+fe)/2,se,c.map(ge=>ge.box)));const[xe,_e]=await et("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([aa(),da()]));for(const[Q,te,ae,fe]of re){const ge=Math.trunc((Q+ae)/2),we=Math.trunc((te+fe)/2);if([...f,...m].some(He=>(ge-He.cx)**2+(we-He.cy)**2<=He.r*He.r)||!Z(ge,we))continue;if(_e!==null){const He=await et("laurier: filtre FP (#49)",()=>X$(s,[Math.trunc(Q),Math.trunc(te),Math.trunc(ae),Math.trunc(fe)],_e));if(He!==null&&He>=E2)continue}const ye=Math.min(Math.trunc(ae-Q),Math.trunc(fe-te)),Ue=Math.max(6,Math.trunc(Math.max(ae-Q,fe-te)*Vb)),qe=q$(s,ge,we,Ue);let Fe=null,Ge=0,it=!1;if(xe!==null&&ye>=6){const He=Lt(s,Math.trunc(Q),Math.trunc(te),Math.trunc(ae-Q),Math.trunc(fe-te));let Xe=null,_t=0;for(const Ot of[0,1,2,3]){const Jt=Ot===0?He:Yt(He,Ot),Sa=M2(Jt),Ia=await et("laurier: lecture chiffre (CNN)",()=>xe.run({[xe.inputNames[0]]:new Be("float32",Sa,[1,3,Pt,Pt])})),{value:Ea,prob:mi}=S2(Ia[xe.outputNames[0]].data);if(mi>_t&&(Xe=Ea,_t=mi),Xe!==null&&_t>=v2)break}Xe!==null&&_t>=$2&&(Fe=Xe,Ge=_t)}if(Fe===null&&ye>=6){const He=new Map;for(const Xe of[0,1,2,3]){const _t=Xe===0?qe:Yt(qe,Xe),[Ot,Jt]=st("laurier: lecteur GABARITS (repli, JS pur)",()=>o_(_t,G));Ot!==null&&(He.set(Ot,Math.max(He.get(Ot)??0,Jt)),Jt>Ge&&(Fe=Ot,Ge=Jt))}Fe!==null&&Ge<O$&&(Fe=null),it=Fe!==null&&[...He.entries()].some(([Xe,_t])=>Xe!==Fe&&_t>=Ge-.1)}const Rt=b.some(He=>ge>=He.x0&&ge<=He.x1&&we>=He.y0&&we<=He.y1),lt=[...N,...l].some(He=>{const Xe=He.boundingBox;return Xe!==void 0&&ge>=Xe.x&&ge<=Xe.x+Xe.width&&we>=Xe.y&&we<=Xe.y+Xe.height});k.push({value:Fe,valueRead:Fe!==null,center:[Math.round((Q+ae)/2),Math.round((te+fe)/2)],boundingBox:{x:Math.trunc(Q),y:Math.trunc(te),width:Math.trunc(ae-Q),height:Math.trunc(fe-te)},confidence:Math.round(Ge*1e4)/1e4,excluded:Rt||lt,photoIndex:i-1,...it?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:T,laurels:k,coins:S,coinTotal:R,guilds:N,bannerCount:X,tuckedExcluded:W,bannerSuspects:V,cityWondersKept:O,cityTokensKept:F}}function Rg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function Og(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Ng(e,t,n){const{byFamily:r,laurels:i,coins:s,progressTokens:o,wonders:a,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:p,tuckedExcluded:f}=e;f>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${f} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):p>0&&a.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(M=>M.id).join(", ")+" — confirm in the review."});const y=a.filter(M=>M.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(M=>M.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${a.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(M=>M.id).join(", ")+" — confirm in the review."}),s.length>0){const M=s.filter(I=>I.denomSource==="cnn").length,v=s.length-M;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${c} from ${s.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${s.length} tile(s) — ${M} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=tv(u,a);for(const M of[...Qx(a.map(v=>v.id),t),...e$(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:M.message});const b=i.filter(M=>!M.excluded),x=b.filter(M=>M.valueRead);return{...hv(),wonders:a,guilds:w,progressTokens:o,laurels:i,cardVictoryPoints:{value:x.reduce((M,v)=>M+(v.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:p>0?"yolo":"none",tuckedExcluded:f,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:s.length>0?.5:0,source:s.length===0?"none":s.some(M=>M.denomSource==="cnn")?"local-cnn":"local-colour",coins:s}}}async function pv(e,t,n,r,i=()=>{},s="player",o,a=!1){const u=Rg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const p=await hi(c),f=await Cg(p,n,t,r,d,o,u.wonders,u.progressTokens);u.unidentifiedTokens+=f.unidentifiedTokens;const m=await Ag(f,s,a,t,l,p,n,r,d,u.guilds);Og(u,m),i()}return Ng(u,t,n)}const At=1280,fv=.3,pi=9;let va=null;function fi(){return va===null&&(va=(async()=>{try{return(await fetch(`${je}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ft("pawn_ends_brut.onnx"):null}catch{return null}})()),va}function mv(e){const t=At/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),s=i.getContext("2d",{willReadFrequently:!0}),o=Qw(e.data,e.width,e.height,e.channels);s.putImageData(new ImageData(o,e.width,e.height),0,0);const u=new OffscreenCanvas(At,At).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,At,At),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,At,At),c=At*At,d=new Float32Array(3*c);for(let p=0;p<c;p+=1)d[p]=l[p*4]/255,d[c+p]=l[p*4+1]/255,d[2*c+p]=l[p*4+2]/255;return{tensor:d,r:t}}const Ye={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null};function gv(){Ye.appels=0,Ye.inferences=0,Ye.bandes=0,Ye.detail=[],Ye.premiereGagne=null}function zg(){ut.set("_pion.onnx",`appels=${Ye.appels} inferences=${Ye.inferences} bandes=${Ye.bandes} premiereGagne=${Ye.premiereGagne??"n/a"} | ${Ye.detail.join(" ")}`)}async function yv(e,t){Ye.inferences+=1;const{tensor:n,r}=st("pion: mise en tenseur 1280x1280",()=>mv(t)),s=(await e.run({[e.inputNames[0]]:new Be("float32",n,[1,3,At,At])}))[e.outputNames[0]],o=s.data,a=s.dims[2]??0,u=(s.dims[1]??4)-4;return st("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let d=0;d<u;d+=1){const p=(4+d)*a;let f=-1,m=fv;for(let y=0;y<a;y+=1){const w=o[p+y];w>=m&&(m=w,f=y)}if(f>=0){const y=(o[f]+o[2*a+f])/2/r,w=(o[a+f]+o[3*a+f])/2/r;c.set(d,{conf:m,cx:y,cy:w})}}return c})}async function Ma(e,t,n){const r=Ye.inferences,i=`a${Ye.appels}`;Ye.appels+=1;const s=await et("pion: UNE passe (les 4 rotations)",()=>wv(e,t,n));return Ye.detail.push(`${i}:${Ye.inferences-r}inf conf=${s===null?"rien":s.confidence.toFixed(2)}`),zg(),s}async function wv(e,t,n){let r=null;const i=1.8;for(const x of n??[0,1,2,3]){const M=x===0?t:st("pion: rotation de l'image",()=>Yt(t,x)),v=await yv(e,M);if(v.has(0)&&v.has(1)&&v.has(2)){const I=v.get(0).conf+v.get(1).conf+v.get(2).conf;if((r===null||I>r.score)&&(r={score:I,det:v,k:x}),I>=i)break}}if(r===null)return null;const s=r.det.get(0),o=r.det.get(1),a=r.det.get(2),u=a.cx-o.cx,l=a.cy-o.cy,c=(o.cx+a.cx)/2,d=(o.cy+a.cy)/2,p=u*u+l*l;if(p<=0)return null;const f=((s.cx-c)*u+(s.cy-d)*l)/p*(2*pi),m=Math.min(pi,Math.max(-pi,at(f))),y=Math.min(s.conf,o.conf,a.conf),w=(x,M)=>{const v=r.k%4;return v===0?[x,M]:v===1?[M,t.height-1-x]:v===2?[t.width-1-x,t.height-1-M]:[t.width-1-M,x]},b=[o,a].map(x=>{const[M,v]=w(x.cx,x.cy);return[at(M),at(v)]});return{position:m,confidence:Math.round(y*1e4)/1e4,ends:b,k:r.k}}async function Bg(e,t,n){let r=null,i=null;for(const s of n){const o=rb(t.width,t.height,s);if(o===null)continue;const a=Lt(t,o.x,o.y,o.width,o.height);if(a.width===0||a.height===0)continue;Ye.bandes+=1;const u=await Ma(e,a,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Ye.premiereGagne===null?Ye.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Ye.premiereGagne=!1),zg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+o.x,c+o.y])})}return r}function Pg(){const e=[ra,oa,aa,ca,da,pa,ma,ci,di,ba,xa,fi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function bv(e,t){Pg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let s=0;const o=(f,m=0)=>{t(f,i>0?Math.min(.99,(s+m)/i):void 0)},a=()=>{s+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await pv(m,f,n,o,a))}let u=null,l=null;if(e.both!==void 0){const f={},m=await hi(e.both),y=await Cg(m,n,"both",o,"both photo 1/1",f,[],[]),w=async(M,v)=>{const I=Rg();return I.unidentifiedTokens+=y.unidentifiedTokens,Og(I,await Ag(y,M,!0,v,1,m,n,o,`${v} photo 1/1`,I.guilds)),a(),Ng(I,v,n)},b={player:await w("player","left"),opponent:await w("opponent","right")};if(o("military pawn…",.95),f.image!==void 0)try{const M=await fi();M!==null&&(f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Bg(M,f.image,f.bandBoxes)),u===null&&(u=await Ma(M,f.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=ub(u.ends,f.hulls??[],u.position));const x=l!==null&&!l.ambiguous?lb(l):null;x!==null?(r.left=b[x.left],r.right=b[x.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=b.player,r.right=b.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...Zx(f),...Jx(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let c={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const f=await hi(e.board),m=await fi();if(m!==null){let y=await Ma(m,f);if(y===null){const w=await di();if(w!==null){const b=await bt("banner",f),x=jr(b.rows,b.params,nt.banner.conf),M=await Mg(w,f,x);y=await Bg(m,f,M)}}y!==null&&(c={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!c.found){const f=b=>{var x,M;return Number(((M=(x=b==null?void 0:b.cardCounts)==null?void 0:x.byFamily)==null?void 0:M.military)??0)},m=f(r.left),y=f(r.right),w=Math.abs(m-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${m} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const d=c.conflictPawnPosition,p=Math.abs(d)>=pi?{type:"military",winner:d>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(s,o)=>{v$(s);const a=S$()?"Initialisation des modèles de vision…":Xw(s);self.postMessage({id:t,progress:a,...o!==void 0?{fraction:o}:{},...s!==r?{perfPartiel:{providers:gg(),etapes:mg(),etapeCourante:a}}:{}}),r=s};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){Pg(),await Promise.allSettled([ra(),oa(),aa(),ca(),da(),pa(),ma(),ci(),di(),ba(),xa(),fi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),$$(),k$();const s=performance.now(),o=n==="classify"?await dv(e.data.file):await bv(e.data.payload,i);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:mg(),providers:gg(),runtime:M$(),inference:T$(),famillesJs:Vw(),inferenceParEtape:E$(),totalMs:Math.round(performance.now()-s)}})}catch(s){self.postMessage({id:t,ok:!1,error:String(s)})}})()}})();
