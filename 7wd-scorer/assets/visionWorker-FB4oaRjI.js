var pM=Object.defineProperty;var fM=(qt,Vt,Rn)=>Vt in qt?pM(qt,Vt,{enumerable:!0,configurable:!0,writable:!0,value:Rn}):qt[Vt]=Rn;var _y=(qt,Vt,Rn)=>fM(qt,typeof Vt!="symbol"?Vt+"":Vt,Rn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Rn=Object.getOwnPropertyNames,vy=Object.prototype.hasOwnProperty,My=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),re=(e,t)=>()=>(e&&(t=e(e=0)),t),On=(e,t)=>{for(var n in t)qt(e,n,{get:t[n],enumerable:!0})},Sy=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Rn(t))!vy.call(e,i)&&i!==n&&qt(e,i,{get:()=>t[i],enumerable:!(r=Vt(t,i))||r.enumerable});return e},Yn=e=>Sy(qt({},"__esModule",{value:!0}),e),Xn,nn,Nn,Ds,Us,Ls=re(()=>{Xn=new Map,nn=[],Nn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Xn.get(e);if(r===void 0)Xn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=nn.indexOf(e);i!==-1&&nn.splice(i,1);for(let o=0;o<nn.length;o++)if(Xn.get(nn[o]).priority<=n){nn.splice(o,0,e);return}nn.push(e)}return}throw new TypeError("not a valid backend")},Ds=async e=>{let t=Xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Us=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?nn:n,i,o=[],a=new Set;for(let u of r){let l=await Ds(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),Iy=re(()=>{Ls()}),Fs,Ty=re(()=>{Fs="1.27.0"}),Mi,Ze,Gs=re(()=>{Ty(),Mi="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:Fs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Mi=e}},get logLevel(){return Mi}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),ze,Ey=re(()=>{Gs(),ze=Ze}),Ws,qs,ky=re(()=>{Ws=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let c=o*i,d=0,p=c,f=c*2,m=-1;a==="RGBA"?(d=0,p=c,f=c*2,m=c*3):a==="RGB"?(d=0,p=c,f=c*2):a==="RBG"&&(d=0,f=c,p=c*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},qs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],a=e.dims[3]):(i=e.dims[3],o=e.dims[2],a=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=o*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=d,M=d*2,v=-1;s==="RGBA"?(b=0,x=d,M=d*2,v=d*3):s==="RGB"?(b=0,x=d,M=d*2):s==="RBG"&&(b=0,M=d,x=d*2),r=n.createImageData(i,o);for(let I=0;I<o*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-c[0])*l[0],r.data[m]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[M++]-c[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),$r,Vs,Hs,js,Ks,Ys,Cy=re(()=>{Ii(),$r=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;s==="RGB"&&(d=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,p+=d,m+=d,f+=d,y+=d)c[w++]=(e[p]+a[0])/o[0],c[b++]=(e[f]+a[1])/o[1],c[x++]=(e[m]+a[2])/o[2],M!==-1&&y!==-1&&(c[M++]=(e[y]+a[3])/o[3]);return u==="RGBA"?new dt("float32",c,[1,4,n,r]):new dt("float32",c,[1,3,n,r])},Vs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",a,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;d.drawImage(e,0,0),a=d.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=c,s.width=d,t!==void 0){let p=u();p.width=d,p.height=c;let f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let p=e.height,f=e.width;return d.drawImage(e,0,0,f,p),a=d.getImageData(0,0,f,p).data,s.height=p,s.width=f,$r(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((c,d)=>{let p=u(),f=l(p);if(!e||!f)return d();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,c($r(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return $r(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Hs=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,a=[1,r,n,4];return new dt({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:o})},js=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new dt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},Ks=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new dt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},Ys=(e,t,n)=>new dt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),fn,Qn,Si,Xs,Ay=re(()=>{fn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Si=!1,Xs=()=>{if(!Si){Si=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(fn.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(fn.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(fn.set("float16",n),Qn.set(n,"float16")):fn.set("float16",Uint16Array)}}}),Qs,Zs,Ry=re(()=>{Ii(),Qs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Zs=(e,t)=>{switch(e.location){case"cpu":return new dt(e.type,e.data,t);case"cpu-pinned":return new dt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new dt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new dt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new dt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dt,Ii=re(()=>{ky(),Cy(),Ay(),Ry(),dt=class{constructor(e,t,n){Xs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=fn.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=fn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(s===void 0)s=[a.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=a,this.dataLocation="cpu"}let o=Qs(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return Vs(e,t)}static fromTexture(e,t){return Hs(e,t)}static fromGpuBuffer(e,t){return js(e,t)}static fromMLTensor(e,t){return Ks(e,t)}static fromPinnedBuffer(e,t,n){return Ys(e,t,n)}toDataURL(e){return Ws(this,e)}toImageData(e){return qs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Zs(this,e)}}}),Be,Js=re(()=>{Ii(),Be=dt}),vr,Ti,zt,$t,mn,gn,eu=re(()=>{Gs(),vr=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ti=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(a+=`::${t}`),vr("CPU",a);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},zt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ti("BEGIN",e)},$t=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Ti("END",e)},mn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},gn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),tu,Oy=re(()=>{Ls(),Js(),eu(),tu=class xy{constructor(t){this.handler=t}async run(t,n,r){zt(),mn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof Be||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Be)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Be)&&(l=!0,a=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,o),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let c=s[l];c instanceof Be?u[l]=c:u[l]=new Be(c.type,c.data,c.dims)}return gn("InferenceSession.run"),$t(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){zt(),mn("InferenceSession.create");let o,a={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(c,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Us(a),l=await s.createInferenceSessionHandler(o,u);return gn("InferenceSession.create"),$t(),new xy(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),zn,Ny=re(()=>{Oy(),zn=tu}),zy=re(()=>{}),By=re(()=>{}),Py=re(()=>{}),Dy=re(()=>{}),Uy={};On(Uy,{InferenceSession:()=>zn,TRACE:()=>vr,TRACE_EVENT_BEGIN:()=>mn,TRACE_EVENT_END:()=>gn,TRACE_FUNC_BEGIN:()=>zt,TRACE_FUNC_END:()=>$t,Tensor:()=>Be,env:()=>ze,registerBackend:()=>Nn});var mt=re(()=>{Iy(),Ey(),Ny(),Js(),zy(),By(),eu(),Py(),Dy()}),Ei=re(()=>{}),nu={};On(nu,{default:()=>ru});var ki,Ci,ru,Ly=re(()=>{var e;Df(),yn(),Bi(),ki="ort-wasm-proxy-worker",Ci=((e=globalThis.self)==null?void 0:e.name)===ki,Ci&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Ui(r.wasm).then(()=>{Qo(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;Zo(o,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,o=Gr(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;ea(i,o).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":ta(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:a,outputIndices:s,options:u}=r;ra(i,o,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},oa([...a,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":ia(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),ru=Ci?null:t=>new Worker(t??ht,{type:"module",name:ki})}),iu={};On(iu,{default:()=>au});async function ou(e={}){var wy,by;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((wy=self.name)==null?void 0:wy.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},T=await h(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let A=_.errors;if(0<A.length){let D=await Promise.all(A);if(D=D.filter(H=>H),0<D.length)throw Error(D.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,T,A,D)=>$.registerBuffer(_,T,A,D),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,T,A)=>$.createDownloader(_,T,A),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,T)=>{$.upload(_,T)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,T)=>$.createMLTensorDownloader(_,T),t.webnnRegisterMLTensor=(_,T,A,D)=>$.registerMLTensor(_,T,A,D),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,T,A,D,H,ue)=>$.registerMLConstant(_,T,A,D,H,t.Xc,ue),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let a=()=>{let h=g=>(...$)=>{let _=Gt;return $=g(...$),Gt!=_?new Promise((T,A)=>{Ss={resolve:T,reject:A}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var s,u,l=(h,g)=>{throw g},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async h=>{if(k(h))return new Promise(($,_)=>{var T=new XMLHttpRequest;T.open("GET",h,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?$(T.response):_(T.status)},T.onerror=_,T.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),v=x,I=M,E=!1,k=h=>h.startsWith("file://");function S(){qe.buffer!=B.buffer&&z()}if(i){let h=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let T=[];self.onmessage=A=>T.push(A),b=()=>{postMessage({Sc:"loaded"});for(let A of T)h(A);self.onmessage=h};for(let A of $.xd)t[A]&&!t[A].proxy||(t[A]=(...D)=>{postMessage({Sc:"callHandler",wd:A,args:D})},A=="print"&&(v=t[A]),A=="printErr"&&(I=t[A]));qe=$.Od,z(),f=$.Pd,ie(),$i()}else if(_==="run"){(function(T){var A=(S(),F)[T+52>>>2>>>0];T=(S(),F)[T+56>>>2>>>0],E0(A,A-T),Ie(A)})($.Rc),Cs($.Rc,0,0,1,0,0),Se(),$s($.Rc),R||($0(),R=!0);try{Fe($.Md,$.bd)}catch(T){if(T!="unwind")throw T}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&mi():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(T){throw v0(),T}};var R=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var B,Y,G,q,N,F,X,Z,le,L,O,C=!1;function z(){var h=qe.buffer;t.HEAP8=B=new Int8Array(h),G=new Int16Array(h),t.HEAPU8=Y=new Uint8Array(h),q=new Uint16Array(h),t.HEAP32=N=new Int32Array(h),t.HEAPU32=F=new Uint32Array(h),X=new Float32Array(h),Z=new Float64Array(h),le=new BigInt64Array(h),L=new BigUint64Array(h)}function U(){C=!0,i?b():tn.sb()}function P(h){throw I(h="Aborted("+h+")"),E=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function j(){return{a:{ma:E3,gb:T3,g:Rt,J:He,f:ms,o:gs,h:ys,ha:hi,b:hv,T:pv,Ha:zg,n:fv,$:Ug,Xa:Lg,Da:Fg,Fa:Gg,Ya:Wg,Va:qg,Oa:Vg,Ua:Hg,ka:jg,Ea:Kg,Ba:Yg,Wa:Xg,Ca:Qg,bb:mv,ea:gv,wa:yv,ua:bv,da:xv,O:$v,H:vv,va:Mv,_:Av,xa:Rv,Ra:Ov,za:zv,Ia:Bv,sa:Pv,fa:Dv,Qa:$s,_a:Uv,R:Wv,r:Kv,c:_s,hb:Yv,y:Xv,M:Qv,D:Zv,l:Jv,s:o0,ib:e3,I:t3,S:n3,j:r3,u:i3,q:o3,k:a3,La:s3,Ma:u3,Na:l3,Ja:l0,Ka:c0,ta:d0,db:d3,ab:p3,v:f3,aa:m3,ga:g3,$a:h3,W:y3,Za:w3,Aa:b3,F:c3,U:_3,la:_i,ya:$3,fb:x3,eb:v3,Sa:m0,Ta:g0,Ga:Q,V:y0,ja:w0,Pa:b0,ia:_0,kb:cM,na:oM,lb:lM,oa:iM,G:Y3,e:R3,t:C3,w:k3,B:G3,mb:tM,K:H3,x:z3,pa:nM,Y:aM,ba:eM,nb:J3,ob:Z3,P:W3,qa:Q3,pb:X3,N:j3,Z:rM,d:A3,A:N3,m:O3,jb:dM,p:P3,z:D3,C:B3,E:U3,L:q3,qb:K3,Q:sM,ca:V3,X:uM,rb:F3,ra:L3,i:S3,a:qe,cb:xe}}}async function ie(){function h(_,T){var A=tn=_.exports;_={};for(let[D,H]of Object.entries(A))typeof H=="function"?(A=Lv(H),_[D]=A):_[D]=H;return tn=_,tn=(function(){var D=tn,H=ce=>Me=>ce(Me)>>>0,ue=ce=>()=>ce()>>>0;return(D=Object.assign({},D)).tb=H(D.tb),D.Xb=ue(D.Xb),D.Zb=H(D.Zb),D.lc=H(D.lc),D.mc=ue(D.mc),D.qc=H(D.qc),D})(),pe.push(tn._b),x0=(_=tn).tb,$0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,xi=_.Xb,Wt=t._free=_.Yb,br=t._malloc=_.Zb,Cs=_.ac,v0=_.bc,M0=_.cc,S0=_.dc,As=_.ec,I0=_.fc,T0=_.gc,ke=_.hc,_r=_.ic,E0=_.jc,Ie=_.kc,Rs=_.lc,Ee=_.mc,k0=_.nc,Os=_.oc,C0=_.pc,A0=_.qc,R0=_.rc,Ns=_.sc,O0=_.tc,N0=_.uc,z0=_.vc,B0=_.wc,P0=_.xc,D0=_.yc,U0=_.zc,L0=_.Ac,F0=_.Bc,G0=_.Cc,W0=_.Dc,q0=_.Ec,V0=_.Fc,H0=_.Gc,j0=_.Hc,K0=_.Ic,Y0=_.Jc,X0=_.Kc,Q0=_.Lc,Z0=_.Mc,J0=_.Nc,ey=_.Pc,ty=_.Qc,ny=_.$c,ry=_.ad,iy=_.fd,oy=_.jd,ay=_.kd,sy=_.ld,uy=_.md,ly=_.nd,cy=_.od,dy=_.pd,hy=_.qd,py=_.vd,fy=_.Td,my=_.Ud,gy=_.Vd,yy=_.Wd,f=T,tn}var g,$=j();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(T,A)=>{_(h(T,A))})}):i?h(new WebAssembly.Instance(f,j()),f):(O??(O=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var T=O;if(!p&&!k(T))try{var A=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,_)}catch(D){I(`wasm streaming compile failed: ${D}`),I("falling back to ArrayBuffer instantiation")}return(async function(D,H){try{var ue=await(async function(ce){if(!p)try{var Me=await s(ce);return new Uint8Array(Me)}catch{}if(ce==O&&p)ce=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ce=u(ce)}return ce})(D);return await WebAssembly.instantiate(ue,H)}catch(ce){I(`failed to asynchronously prepare wasm: ${ce}`),P(ce)}})(T,_)})($),h(g.instance,g.module))}class J{constructor(g){_y(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var me=h=>{h.terminate(),h.onmessage=()=>{}},Te=[],W=0,ee=null,ne=h=>{te.length==0&&(Ue(),ye(te[0]));var g=te.pop();if(!g)return 6;se.push(g),ge[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},oe=0,ae=(h,g,...$)=>{var _,T=16*$.length,A=Ee(),D=Rs(T),H=D>>>3;for(_ of $)typeof _=="bigint"?((S(),le)[H++>>>0]=1n,(S(),le)[H++>>>0]=_):((S(),le)[H++>>>0]=0n,(S(),Z)[H++>>>0]=_);return h=M0(h,0,T,D,g),Ie(A),h};function xe(h){if(i)return ae(0,1,h);if(m=h,!(0<oe)){for(var g of se)me(g);for(g of te)me(g);te=[],se=[],ge={},E=!0}l(0,new J(h))}function _e(h){if(i)return ae(1,0,h);Q(h)}var Q=h=>{if(m=h,i)throw _e(h),"unwind";xe(h)},te=[],se=[],pe=[],ge={},we=h=>{var g=h.Rc;delete ge[g],te.push(h),se.splice(se.indexOf(h),1),h.Rc=0,S0(g)};function Se(){pe.forEach(h=>h())}var ye=h=>new Promise(g=>{h.onmessage=T=>{var A=T.data;if(T=A.Sc,A.Zc&&A.Zc!=xi()){var D=ge[A.Zc];D?D.postMessage(A,A.rd):I(`Internal error! Worker sent a message "${T}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?mi():T==="spawnThread"?ne(A):T==="cleanupThread"?fi(()=>{we(ge[A.Nd])}):T==="loaded"?(h.loaded=!0,g(h)):A.target==="setimmediate"?h.postMessage(A):T==="uncaughtException"?h.onerror(A.error):T==="callHandler"?t[A.wd](...A.args):T&&I(`worker sent an unknown command ${T}`)},h.onerror=T=>{throw I(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);h.postMessage({Sc:"load",xd:_,Od:qe,Pd:f})});function Ue(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});te.push(h)}var qe,Fe=(h,g)=>{oe=0,h=Ns(h,g),0<oe?m=h:As(h)},Ge=[],it=0;function Rt(h){var g=new Ot(h>>>=0);return(S(),B)[g.Tc+12>>>0]==0&&(Xe(g,!0),it--),_t(g,!1),Ge.push(g),A0(h)}var lt=0,He=()=>{ke(0,0);var h=Ge.pop();k0(h.cd),lt=0};function Xe(h,g){g=g?1:0,(S(),B)[h.Tc+12>>>0]=g}function _t(h,g){g=g?1:0,(S(),B)[h.Tc+13>>>0]=g}class Ot{constructor(g){this.cd=g,this.Tc=g-24}}var Jt=h=>{var g=lt;if(!g)return _r(0),0;var $=new Ot(g);(S(),F)[$.Tc+16>>>2>>>0]=g;var _=(S(),F)[$.Tc+4>>>2>>>0];if(!_)return _r(0),g;for(var T of h){if(T===0||T===_)break;if(C0(T,_,$.Tc+16))return _r(T),g}return _r(_),g};function ms(){return Jt([])}function gs(h){return Jt([h>>>0])}function ys(h,g,$,_){return Jt([h>>>0,g>>>0,$>>>0,_>>>0])}var hi=()=>{var h=Ge.pop();h||P("no exception to throw");var g=h.cd;throw(S(),B)[h.Tc+13>>>0]==0&&(Ge.push(h),_t(h,!0),Xe(h,!1),it++),Os(g),lt=g};function hv(h,g,$){var _=new Ot(h>>>=0);throw g>>>=0,$>>>=0,(S(),F)[_.Tc+16>>>2>>>0]=0,(S(),F)[_.Tc+4>>>2>>>0]=g,(S(),F)[_.Tc+8>>>2>>>0]=$,Os(h),it++,lt=h}var pv=()=>it;function Ng(h,g,$,_){return i?ae(2,1,h,g,$,_):zg(h,g,$,_)}function zg(h,g,$,_){if(h>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?Ng(h,g,$,_):(h={Ld:$,Rc:h,bd:_,rd:T},i?(h.Sc="spawnThread",postMessage(h,T),0):ne(h))}function fv(h){throw lt||(lt=h>>>0),lt}var Bg=globalThis.TextDecoder&&new TextDecoder,Pg=(h,g,$,_)=>{if($=g+$,_)return $;for(;h[g]&&!(g>=$);)++g;return g},Dg=(h,g=0,$,_)=>{if(16<($=Pg(h,g>>>=0,$,_))-g&&h.buffer&&Bg)return Bg.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(_="";g<$;){var T=h[g++];if(128&T){var A=63&h[g++];if((224&T)==192)_+=String.fromCharCode((31&T)<<6|A);else{var D=63&h[g++];65536>(T=(240&T)==224?(15&T)<<12|A<<6|D:(7&T)<<18|A<<12|D<<6|63&h[g++])?_+=String.fromCharCode(T):(T-=65536,_+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else _+=String.fromCharCode(T)}return _},Ke=(h,g,$)=>(h>>>=0)?Dg((S(),Y),h,g,$):"";function Ug(h,g,$){return i?ae(3,1,h,g,$):0}function Lg(h,g){if(i)return ae(4,1,h,g)}function Fg(h,g){if(i)return ae(5,1,h,g)}function Gg(h,g,$){if(i)return ae(6,1,h,g,$)}function Wg(h,g,$){return i?ae(7,1,h,g,$):0}function qg(h,g){if(i)return ae(8,1,h,g)}function Vg(h,g,$){if(i)return ae(9,1,h,g,$)}function Hg(h,g,$,_){if(i)return ae(10,1,h,g,$,_)}function jg(h,g,$,_){if(i)return ae(11,1,h,g,$,_)}function Kg(h,g,$,_){if(i)return ae(12,1,h,g,$,_)}function Yg(h){if(i)return ae(13,1,h)}function Xg(h,g){if(i)return ae(14,1,h,g)}function Qg(h,g,$){if(i)return ae(15,1,h,g,$)}var mv=()=>P(""),Ft=h=>{h>>>=0;for(var g="";;){var $=(S(),Y)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},ws={},bs={},Kn=class extends Error{constructor(h){super(h),this.name="BindingError"}};function en(h,g,$={}){return(function(_,T,A={}){var D=T.name;if(!_)throw new Kn(`type "${D}" must have a positive integer typeid pointer`);if(bs.hasOwnProperty(_)){if(A.yd)return;throw new Kn(`Cannot register type '${D}' twice`)}bs[_]=T,ws.hasOwnProperty(_)&&(T=ws[_],delete ws[_],T.forEach(H=>H()))})(h,g,$)}var Zg=(h,g,$)=>{switch(g){case 1:return $?_=>(S(),B)[_>>>0]:_=>(S(),Y)[_>>>0];case 2:return $?_=>(S(),G)[_>>>1>>>0]:_=>(S(),q)[_>>>1>>>0];case 4:return $?_=>(S(),N)[_>>>2>>>0]:_=>(S(),F)[_>>>2>>>0];case 8:return $?_=>(S(),le)[_>>>3>>>0]:_=>(S(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function gv(h,g,$,_,T){h>>>=0,$>>>=0,g=Ft(g>>>0);let A=D=>D;if(_=_===0n){let D=8*$;A=H=>BigInt.asUintN(D,H),T=A(T)}en(h,{name:g,Oc:A,Vc:(D,H)=>(typeof H=="number"&&(H=BigInt(H)),H),Uc:Zg(g,$,!_),Wc:null})}function yv(h,g,$,_){en(h>>>=0,{name:g=Ft(g>>>0),Oc:function(T){return!!T},Vc:function(T,A){return A?$:_},Uc:function(T){return this.Oc((S(),Y)[T>>>0])},Wc:null})}var Jg=[],Cn=[0,1,,1,null,1,!0,1,!1,1];function _s(h){9<(h>>>=0)&&--Cn[h+1]===0&&(Cn[h]=void 0,Jg.push(h))}var xt=h=>{if(!h)throw new Kn(`Cannot use deleted val. handle = ${h}`);return Cn[h]},Nt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Jg.pop()||Cn.length;return Cn[g]=h,Cn[g+1]=1,g}};function xs(h){return this.Oc((S(),F)[h>>>2>>>0])}var wv={name:"emscripten::val",Oc:h=>{var g=xt(h);return _s(h),g},Vc:(h,g)=>Nt(g),Uc:xs,Wc:null};function bv(h){return en(h>>>0,wv)}var _v=(h,g)=>{switch(g){case 4:return function($){return this.Oc((S(),X)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Z)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function xv(h,g,$){$>>>=0,en(h>>>=0,{name:g=Ft(g>>>0),Oc:_=>_,Vc:(_,T)=>T,Uc:_v(g,$),Wc:null})}function $v(h,g,$,_,T){h>>>=0,$>>>=0,g=Ft(g>>>0);let A=H=>H;if(_===0){var D=32-8*$;A=H=>H<<D>>>D,T=A(T)}en(h,{name:g,Oc:A,Vc:(H,ue)=>ue,Uc:Zg(g,$,_!==0),Wc:null})}function vv(h,g,$){function _(A){var D=(S(),F)[A>>>2>>>0];return A=(S(),F)[A+4>>>2>>>0],new T((S(),B).buffer,A,D)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];en(h>>>=0,{name:$=Ft($>>>0),Oc:_,Uc:_},{yd:!0})}var dn=(h,g,$)=>{var _=(S(),Y);if(g>>>=0,0<$){var T=g;$=g+$-1;for(var A=0;A<h.length;++A){var D=h.codePointAt(A);if(127>=D){if(g>=$)break;_[g++>>>0]=D}else if(2047>=D){if(g+1>=$)break;_[g++>>>0]=192|D>>6,_[g++>>>0]=128|63&D}else if(65535>=D){if(g+2>=$)break;_[g++>>>0]=224|D>>12,_[g++>>>0]=128|D>>6&63,_[g++>>>0]=128|63&D}else{if(g+3>=$)break;_[g++>>>0]=240|D>>18,_[g++>>>0]=128|D>>12&63,_[g++>>>0]=128|D>>6&63,_[g++>>>0]=128|63&D,A++}}_[g>>>0]=0,h=g-T}else h=0;return h},pi=h=>{for(var g=0,$=0;$<h.length;++$){var _=h.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function Mv(h,g){en(h>>>=0,{name:g=Ft(g>>>0),Oc($){var _=(S(),F)[$>>>2>>>0];return _=Ke($+4,_,!0),Wt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var T=typeof _=="string";if(!(T||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Kn("Cannot pass non-string to std::string");var A=T?pi(_):_.length,D=br(4+A+1),H=D+4;return(S(),F)[D>>>2>>>0]=A,T?dn(_,H,A+1):(S(),Y).set(_,H>>>0),$!==null&&$.push(Wt,D),D},Uc:xs,Wc($){Wt($)}})}var e0=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Sv=(h,g,$)=>{if(h>>>=1,16<(g=Pg((S(),q),h,g/2,$))-h&&e0)return e0.decode((S(),q).slice(h,g));for($="";h<g;++h){var _=(S(),q)[h>>>0];$+=String.fromCharCode(_)}return $},Iv=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*h.length?$/2:h.length;for(var T=0;T<$;++T){var A=h.charCodeAt(T);(S(),G)[g>>>1>>>0]=A,g+=2}return(S(),G)[g>>>1>>>0]=0,g-_},Tv=h=>2*h.length,Ev=(h,g,$)=>{var _="";h>>>=2;for(var T=0;!(T>=g/4);T++){var A=(S(),F)[h+T>>>0];if(!A&&!$)break;_+=String.fromCodePoint(A)}return _},kv=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var T=0;T<h.length;++T){var A=h.codePointAt(T);if(65535<A&&T++,(S(),N)[g>>>2>>>0]=A,(g+=4)+4>$)break}return(S(),N)[g>>>2>>>0]=0,g-_},Cv=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function Av(h,g,$){if(h>>>=0,g>>>=0,$=Ft($>>>=0),g===2)var _=Sv,T=Iv,A=Tv;else _=Ev,T=kv,A=Cv;en(h,{name:$,Oc:D=>{var H=(S(),F)[D>>>2>>>0];return H=_(D+4,H*g,!0),Wt(D),H},Vc:(D,H)=>{if(typeof H!="string")throw new Kn(`Cannot pass non-string to C++ string type ${$}`);var ue=A(H),ce=br(4+ue+g);return(S(),F)[ce>>>2>>>0]=ue/g,T(H,ce+4,ue+g),D!==null&&D.push(Wt,ce),ce},Uc:xs,Wc(D){Wt(D)}})}function Rv(h,g){en(h>>>=0,{zd:!0,name:g=Ft(g>>>0),Oc:()=>{},Vc:()=>{}})}function Ov(h){Cs(h>>>0,!r,1,!n,131072,!1),Se()}var fi=h=>{if(!E)try{if(h(),!(0<oe))try{i?xi()&&As(m):Q(m)}catch(g){g instanceof J||g=="unwind"||l(0,g)}}catch(g){g instanceof J||g=="unwind"||l(0,g)}},Nv=!Atomics.waitAsync||((by=globalThis.navigator)==null?void 0:by.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function $s(h){h>>>=0,Nv||(Atomics.waitAsync((S(),N),h>>>2,h).value.then(mi),h+=128,Atomics.store((S(),N),h>>>2,1))}var mi=()=>fi(()=>{var h=xi();h&&($s(h),T0())});function zv(h,g){(h>>>=0)==g>>>0?setTimeout(mi):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=ge[h])&&h.postMessage({Sc:"checkMailbox"})}var vs=[];function Bv(h,g,$,_,T){for(g>>>=0,T>>>=0,vs.length=0,$=T>>>3,_=T+_>>>3;$<_;){var A;A=(S(),le)[$++>>>0]?(S(),le)[$++>>>0]:(S(),Z)[$++>>>0],vs.push(A)}return(g?zs[g]:I3[h])(...vs)}var Pv=()=>{oe=0};function Dv(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):we(ge[h])}function Uv(h){}var gi=h=>{try{h()}catch(g){P(g)}};function Lv(h){var g=(...$)=>{yi.push(h);try{return h(...$)}finally{E||(yi.pop(),Gt&&hn===1&&yi.length===0&&(hn=0,oe+=1,gi(my),typeof Fibers<"u"&&Fibers.Zd()))}};return r0.set(h,g),g}var hn=0,Gt=null,t0=0,yi=[],Ms=new Map,n0=new Map,r0=new Map,Fv=0,Ss=null,Gv=[],i0=h=>(function(g){if(!E){if(hn===0){var $=!1,_=!1;g((T=0)=>{if(!E&&(t0=T,$=!0,_)){hn=2,gi(()=>gy(Gt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var A=(function(){var ue=(S(),N)[Gt+8>>>2>>>0];return ue=n0.get(ue),ue=r0.get(ue),--oe,ue()})()}catch(ue){A=ue,T=!0}var D=!1;if(!Gt){var H=Ss;H&&(Ss=null,(T?H.reject:H.resolve)(A),D=!0)}if(T&&!D)throw A}}),_=!0,$||(hn=1,Gt=(function(){var T=br(65548),A=T+12;if((S(),F)[T>>>2>>>0]=A,(S(),F)[T+4>>>2>>>0]=A+65536,A=yi[0],!Ms.has(A)){var D=Fv++;Ms.set(A,D),n0.set(D,A)}return A=Ms.get(A),(S(),N)[T+8>>>2>>>0]=A,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),gi(()=>fy(Gt)))}else hn===2?(hn=0,gi(yy),Wt(Gt),Gt=null,Gv.forEach(fi)):P(`invalid state: ${hn}`);return t0}})(g=>{h().then(g)});function Wv(h){return h>>>=0,i0(async()=>{var g=await xt(h);return Nt(g)})}var Is=[],qv=h=>{var g=Is.length;return Is.push(h),g},Vv=(h,g)=>{for(var $=Array(h),_=0;_<h;++_){var T=_,A=(S(),F)[g+4*_>>>2>>>0],D=bs[A];if(D===void 0)throw h=`parameter ${_}`,A=x0(A),g=Ft(A),Wt(A),new Kn(`${h} has unknown type ${g}`);$[T]=D}return $},Hv=(h,g,$)=>{var _=[];return h=h(_,$),_.length&&((S(),F)[g>>>2>>>0]=Nt(_)),h},jv={},wi=h=>{var g=jv[h];return g===void 0?Ft(h):g};function Kv(h,g,$){var[_,...T]=Vv(h,g>>>0);g=_.Vc.bind(_);var A=T.map(ue=>ue.Uc.bind(ue));h--;var D={toValue:xt};switch(h=A.map((ue,ce)=>{var Me=`argFromPtr${ce}`;return D[Me]=ue,`${Me}(args${ce?"+"+8*ce:""})`}),$){case 0:var H="toValue(handle)";break;case 2:H="new (toValue(handle))";break;case 3:H="";break;case 1:D.getStringOrSymbol=wi,H="toValue(handle)[getStringOrSymbol(methodName)]"}return H+=`(${h})`,_.zd||(D.toReturnWire=g,D.emval_returnValue=Hv,H=`return emval_returnValue(toReturnWire, destructorsRef, ${H})`),H=`return function (handle, methodName, destructorsRef, args) {
  ${H}
  }`,$=new Function(Object.keys(D),H)(...Object.values(D)),H=`methodCaller<(${T.map(ue=>ue.name)}) => ${_.name}>`,qv(Object.defineProperty($,"name",{value:H}))}function Yv(h,g){return g>>>=0,(h=xt(h>>>0))==xt(g)}function Xv(h){return(h>>>=0)?(h=wi(h),Nt(globalThis[h])):Nt(globalThis)}function Qv(h){return h=wi(h>>>0),Nt(t[h])}function Zv(h,g){return g>>>=0,h=xt(h>>>0),g=xt(g),Nt(h[g])}function Jv(h){9<(h>>>=0)&&(Cn[h+1]+=1)}function o0(h,g,$,_,T){return Is[h>>>0](g>>>0,$>>>0,_>>>0,T>>>0)}function e3(h,g,$,_,T){return o0(h>>>0,g>>>0,$>>>0,_>>>0,T>>>0)}function t3(){return Nt([])}function n3(h){h=xt(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Nt(g)}function r3(h){return Nt(wi(h>>>0))}function i3(){return Nt({})}function o3(h){for(var g=xt(h>>>=0);g.length;){var $=g.pop();g.pop()($)}_s(h)}function a3(h,g,$){g>>>=0,$>>>=0,h=xt(h>>>0),g=xt(g),$=xt($),h[g]=$}function s3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),N)[g>>>2>>>0]=h.getUTCSeconds(),(S(),N)[g+4>>>2>>>0]=h.getUTCMinutes(),(S(),N)[g+8>>>2>>>0]=h.getUTCHours(),(S(),N)[g+12>>>2>>>0]=h.getUTCDate(),(S(),N)[g+16>>>2>>>0]=h.getUTCMonth(),(S(),N)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(S(),N)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),N)[g+28>>>2>>>0]=h}var a0=h=>h%4==0&&(h%100!=0||h%400==0),s0=[0,31,60,91,121,152,182,213,244,274,305,335],u0=[0,31,59,90,120,151,181,212,243,273,304,334];function u3(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),N)[g>>>2>>>0]=h.getSeconds(),(S(),N)[g+4>>>2>>>0]=h.getMinutes(),(S(),N)[g+8>>>2>>>0]=h.getHours(),(S(),N)[g+12>>>2>>>0]=h.getDate(),(S(),N)[g+16>>>2>>>0]=h.getMonth(),(S(),N)[g+20>>>2>>>0]=h.getFullYear()-1900,(S(),N)[g+24>>>2>>>0]=h.getDay();var $=(a0(h.getFullYear())?s0:u0)[h.getMonth()]+h.getDate()-1|0;(S(),N)[g+28>>>2>>>0]=$,(S(),N)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var _=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=_&&h.getTimezoneOffset()==Math.min(_,$)),(S(),N)[g+32>>>2>>>0]=h}function l3(h){h>>>=0;var g=new Date((S(),N)[h+20>>>2>>>0]+1900,(S(),N)[h+16>>>2>>>0],(S(),N)[h+12>>>2>>>0],(S(),N)[h+8>>>2>>>0],(S(),N)[h+4>>>2>>>0],(S(),N)[h>>>2>>>0],0),$=(S(),N)[h+32>>>2>>>0],_=g.getTimezoneOffset(),T=new Date(g.getFullYear(),6,1).getTimezoneOffset(),A=new Date(g.getFullYear(),0,1).getTimezoneOffset(),D=Math.min(A,T);return 0>$?(S(),N)[h+32>>>2>>>0]=+(T!=A&&D==_):0<$!=(D==_)&&(T=Math.max(A,T),g.setTime(g.getTime()+6e4*((0<$?D:T)-_))),(S(),N)[h+24>>>2>>>0]=g.getDay(),$=(a0(g.getFullYear())?s0:u0)[g.getMonth()]+g.getDate()-1|0,(S(),N)[h+28>>>2>>>0]=$,(S(),N)[h>>>2>>>0]=g.getSeconds(),(S(),N)[h+4>>>2>>>0]=g.getMinutes(),(S(),N)[h+8>>>2>>>0]=g.getHours(),(S(),N)[h+12>>>2>>>0]=g.getDate(),(S(),N)[h+16>>>2>>>0]=g.getMonth(),(S(),N)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function l0(h,g,$,_,T,A,D){return i?ae(16,1,h,g,$,_,T,A,D):-52}function c0(h,g,$,_,T,A){if(i)return ae(17,1,h,g,$,_,T,A)}var wr={},c3=()=>performance.timeOrigin+performance.now();function d0(h,g){if(i)return ae(18,1,h,g);if(wr[h]&&(clearTimeout(wr[h].id),delete wr[h]),!g)return 0;var $=setTimeout(()=>{delete wr[h],fi(()=>I0(h,performance.timeOrigin+performance.now()))},g);return wr[h]={id:$,Yd:g},0}function d3(h,g,$,_){h>>>=0,g>>>=0,$>>>=0,_>>>=0;var T=new Date().getFullYear(),A=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var D=Math.max(A,T);(S(),F)[h>>>2>>>0]=60*D,(S(),N)[g>>>2>>>0]=+(A!=T),h=(g=H=>{var ue=Math.abs(H);return`UTC${0<=H?"-":"+"}${String(Math.floor(ue/60)).padStart(2,"0")}${String(ue%60).padStart(2,"0")}`})(A),g=g(T),T<A?(dn(h,$,17),dn(g,_,17)):(dn(h,_,17),dn(g,$,17))}var h3=()=>Date.now();function p3(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(S(),le)[$>>>3>>>0]=BigInt(h),0):28}var Ts=[],h0=(h,g)=>{Ts.length=0;for(var $;$=(S(),Y)[h++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Ts.push($==112?(S(),F)[g>>>2>>>0]:$==106?(S(),le)[g>>>3>>>0]:$==105?(S(),N)[g>>>2>>>0]:(S(),Z)[g>>>3>>>0]),g+=_?8:4}return Ts};function f3(h,g,$){return h>>>=0,g=h0(g>>>0,$>>>0),zs[h](...g)}function m3(h,g,$){return h>>>=0,g=h0(g>>>0,$>>>0),zs[h](...g)}var g3=()=>{};function y3(h,g){return I(Ke(h>>>0,g>>>0))}var w3=()=>{throw oe+=1,"unwind"};function b3(){return 4294901760}var _3=()=>navigator.hardwareConcurrency,An={},bi=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},p0=h=>{for(var g of h)(h=bi(g))&&(An[h]=g)};function x3(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),p0(h),An.gd=bi(h[3]),An.Jd=h,An.gd}function _i(h){if(!(h=An[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Wt(_i.hd??0),g=pi(h)+1;var $=br(g);return $&&dn(h,$,g),_i.hd=$,_i.hd}function $3(h){h>>>=0;var g=(S(),Y).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,h+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(h,_)/65536))-qe.buffer.byteLength+65535)/65536|0;try{qe.grow(_),z();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function v3(h,g,$){if(h>>>=0,g>>>=0,An.gd==h)var _=An.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),p0(_);for(var T=3;_[T]&&bi(_[T])!=h;)++T;for(h=0;h<$&&_[h+T];++h)(S(),N)[g+4*h>>>2>>>0]=bi(_[h+T]);return h}var Es,ks={},f0=()=>{var _;if(!Es){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in ks)ks[h]===void 0?delete g[h]:g[h]=ks[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);Es=$}return Es};function m0(h,g){if(i)return ae(19,1,h,g);h>>>=0,g>>>=0;var $,_=0,T=0;for($ of f0()){var A=g+_;(S(),F)[h+T>>>2>>>0]=A,_+=dn($,A,1/0)+1,T+=4}return 0}function g0(h,g){if(i)return ae(20,1,h,g);h>>>=0,g>>>=0;var $=f0();for(var _ of((S(),F)[h>>>2>>>0]=$.length,h=0,$))h+=pi(_)+1;return(S(),F)[g>>>2>>>0]=h,0}function y0(h){return i?ae(21,1,h):52}function w0(h,g,$,_){return i?ae(22,1,h,g,$,_):52}function b0(h,g,$,_){return i?ae(23,1,h,g,$,_):70}var M3=[null,[],[]];function _0(h,g,$,_){if(i)return ae(24,1,h,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var T=0,A=0;A<$;A++){var D=(S(),F)[g>>>2>>>0],H=(S(),F)[g+4>>>2>>>0];g+=8;for(var ue=0;ue<H;ue++){var ce=h,Me=(S(),Y)[D+ue>>>0],Ae=M3[ce];Me===0||Me===10?((ce===1?v:I)(Dg(Ae)),Ae.length=0):Ae.push(Me)}T+=H}return(S(),F)[_>>>2>>>0]=T,0}function S3(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)Ue();Te.push(async()=>{var g=(async function(){if(!i)return Promise.all(te.map(ye))})();W++,await g,--W==0&&ee&&(g=ee,ee=null,g())})})(),i||(qe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),z()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Ee(),t.stackRestore=h=>Ie(h),t.stackAlloc=h=>Rs(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),B)[h>>>0]=g;break;case"i16":(S(),G)[h>>>1>>>0]=g;break;case"i32":(S(),N)[h>>>2>>>0]=g;break;case"i64":(S(),le)[h>>>3>>>0]=BigInt(g);break;case"float":(S(),X)[h>>>2>>>0]=g;break;case"double":(S(),Z)[h>>>3>>>0]=g;break;case"*":(S(),F)[h>>>2>>>0]=g;break;default:P(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),B)[h>>>0];case"i16":return(S(),G)[h>>>1>>>0];case"i32":return(S(),N)[h>>>2>>>0];case"i64":return(S(),le)[h>>>3>>>0];case"float":return(S(),X)[h>>>2>>>0];case"double":return(S(),Z)[h>>>3>>>0];case"*":return(S(),F)[h>>>2>>>0];default:P(`invalid type for getValue: ${g}`)}},t.UTF8ToString=Ke,t.stringToUTF8=dn,t.lengthBytesUTF8=pi;var x0,$0,xi,Wt,br,Cs,v0,M0,S0,As,I0,T0,ke,_r,E0,Ie,Rs,Ee,k0,Os,C0,A0,R0,Ns,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,oy,ay,sy,uy,ly,cy,dy,hy,py,fy,my,gy,yy,tn,I3=[xe,_e,Ng,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Qg,l0,c0,d0,m0,g0,y0,w0,b0,_0],zs={1003524:(h,g,$,_,T)=>{if(t===void 0||!t.Xc)return 1;if((h=Ke(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>h.byteLength)return 3;try{let A=h.subarray(g,g+$);switch(T){case 0:(S(),Y).set(A,_>>>0);break;case 1:t.Qd?t.Qd(_,A):t.Id(_,A);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(S(),Y).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,_,T)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007283:(h,g,$,_,T)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007457:(h,g,$,_,T)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007631:(h,g,$,_,T)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007806:(h,g,$,_,T)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1007980:(h,g,$,_,T)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008153:(h,g,$,_,T)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008326:(h,g,$,_,T)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008503:(h,g,$,_,T)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008683:(h,g,$,_,T)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((S(),N).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009173:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:Ke($),format:_?"NHWC":"NCHW"})},1009306:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le,pn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[A,D],strides:[H],wIsConst:()=>!!(S(),B)[ce>>>0],outputPadding:Me?Array.from((S(),N).subarray(Number(Me)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),N).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(pn)})},1009739:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),N).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),N).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((S(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(S(),B)[ue>>>0],outputPadding:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],outputShape:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1010400:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le,pn)=>{t.$b("ConvTranspose",h,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[T],pads:[A,D],strides:[H],wIsConst:()=>!!(S(),B)[ce>>>0],outputPadding:Me?Array.from((S(),N).subarray(Number(Me)>>>0,Number(Ae)>>>0)):[],outputShape:Pe?Array.from((S(),N).subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],activation:Ke(pn)})},1010833:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("ConvTranspose",h,{format:H?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),N).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((S(),N).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((S(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(S(),B)[ue>>>0],outputPadding:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],outputShape:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[],activation:Ke(Le)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:H?Array.from((S(),N).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],strides:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("AveragePool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:H?Array.from((S(),N).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],strides:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:H?Array.from((S(),N).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],strides:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le)=>{t.$b("MaxPool",h,{format:Le?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:T,dilations:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[],kernel_shape:H?Array.from((S(),N).subarray(Number(H)>>>0,Number(ue)>>>0)):[],pads:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],strides:Ae?Array.from((S(),N).subarray(Number(Ae)>>>0,Number(Pe)>>>0)):[]})},1013758:(h,g,$,_,T)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:_,transB:T})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,_)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(h,g,$,_)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,_,T)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,_,T,A,D,H,ue,ce,Me)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((S(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Ke(T),cubicCoeffA:A,excludeOutside:D,extrapolationValue:H,keepAspectRatioPolicy:Ke(ue),mode:Ke(ce),nearestMode:Ke(Me)})},1015056:(h,g,$,_,T,A,D)=>{t.$b("Slice",h,{starts:g?Array.from((S(),N).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[],axes:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:Ke(g)})},1015734:(h,g,$,_,T)=>{t.$b("Pad",h,{mode:g,value:$,pads:_?Array.from((S(),N).subarray(Number(_)>>>0,Number(T)>>>0)):[]})},1015877:(h,g,$,_,T,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016046:(h,g,$,_,T,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!T,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,_,T)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:T?"NHWC":"NCHW"})},1016572:(h,g,$,_,T)=>{t.$b("GridSample",h,{align_corners:g,mode:Ke($),padding_mode:Ke(_),format:T?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:Ke(g)})},1016827:(h,g,$,_,T,A,D,H,ue)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:A,qkvHiddenSizes:D?Array.from((S(),N).subarray(Number(H)>>>0,Number(H)+D>>>0)):[],pastPresentShareBuffer:!!ue})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le,pn,Bs)=>{t.$b("Conv",h,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],group:T,kernel_shape:A?Array.from((S(),N).subarray(Number(A)>>>0,Number(D)>>>0)):[],pads:H?Array.from((S(),N).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ce?Array.from((S(),N).subarray(Number(ce)>>>0,Number(Me)>>>0)):[],w_is_const:()=>!!(S(),B)[Number(Pe)>>>0],activation:Ke(Le),activation_params:pn?Array.from((S(),X).subarray(Number(pn)>>>0,Number(Bs)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,_,T,A,D,H,ue)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:_,softcap:T,doRotary:A,rotaryInterleaved:D,smoothSoftmax:H,localWindowSize:ue})},1018124:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018235:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018346:(h,g,$,_,T,A)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:_,bits:T,blockSize:A})},1018473:(h,g,$,_,T,A)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:T,doRotary:A})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,_,T)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:T})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,_)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function T3(h,g,$){return i0(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function E3(){return typeof wasmOffsetConverter<"u"}function k3(h,g,$,_){var T=Ee();try{return L0(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function C3(h,g,$){var _=Ee();try{return B0(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;ke(1,0)}}function A3(h){var g=Ee();try{O0(h)}catch($){if(Ie(g),$!==$+0)throw $;ke(1,0)}}function R3(h,g){var $=Ee();try{return Ns(h,g)}catch(_){if(Ie($),_!==_+0)throw _;ke(1,0)}}function O3(h,g,$){var _=Ee();try{R0(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;ke(1,0)}}function N3(h,g){var $=Ee();try{F0(h,g)}catch(_){if(Ie($),_!==_+0)throw _;ke(1,0)}}function z3(h,g,$,_,T,A,D){var H=Ee();try{return D0(h,g,$,_,T,A,D)}catch(ue){if(Ie(H),ue!==ue+0)throw ue;ke(1,0)}}function B3(h,g,$,_,T,A){var D=Ee();try{N0(h,g,$,_,T,A)}catch(H){if(Ie(D),H!==H+0)throw H;ke(1,0)}}function P3(h,g,$,_){var T=Ee();try{U0(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function D3(h,g,$,_,T){var A=Ee();try{z0(h,g,$,_,T)}catch(D){if(Ie(A),D!==D+0)throw D;ke(1,0)}}function U3(h,g,$,_,T,A,D){var H=Ee();try{W0(h,g,$,_,T,A,D)}catch(ue){if(Ie(H),ue!==ue+0)throw ue;ke(1,0)}}function L3(h,g,$,_,T,A,D){var H=Ee();try{q0(h,g,$,_,T,A,D)}catch(ue){if(Ie(H),ue!==ue+0)throw ue;ke(1,0)}}function F3(h,g,$,_,T,A,D,H){var ue=Ee();try{K0(h,g,$,_,T,A,D,H)}catch(ce){if(Ie(ue),ce!==ce+0)throw ce;ke(1,0)}}function G3(h,g,$,_,T){var A=Ee();try{return G0(h,g,$,_,T)}catch(D){if(Ie(A),D!==D+0)throw D;ke(1,0)}}function W3(h,g,$){var _=Ee();try{return Y0(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;ke(1,0)}}function q3(h,g,$,_,T,A,D,H){var ue=Ee();try{X0(h,g,$,_,T,A,D,H)}catch(ce){if(Ie(ue),ce!==ce+0)throw ce;ke(1,0)}}function V3(h,g,$,_,T,A,D,H,ue,ce,Me,Ae){var Pe=Ee();try{V0(h,g,$,_,T,A,D,H,ue,ce,Me,Ae)}catch(Le){if(Ie(Pe),Le!==Le+0)throw Le;ke(1,0)}}function H3(h,g,$,_,T,A){var D=Ee();try{return H0(h,g,$,_,T,A)}catch(H){if(Ie(D),H!==H+0)throw H;ke(1,0)}}function j3(h,g,$){var _=Ee();try{return Q0(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;return ke(1,0),0n}}function K3(h,g,$,_,T,A,D,H,ue){var ce=Ee();try{P0(h,g,$,_,T,A,D,H,ue)}catch(Me){if(Ie(ce),Me!==Me+0)throw Me;ke(1,0)}}function Y3(h){var g=Ee();try{return Z0(h)}catch($){if(Ie(g),$!==$+0)throw $;ke(1,0)}}function X3(h,g){var $=Ee();try{return py(h,g)}catch(_){if(Ie($),_!==_+0)throw _;return ke(1,0),0n}}function Q3(h){var g=Ee();try{return J0(h)}catch($){if(Ie(g),$!==$+0)throw $;return ke(1,0),0n}}function Z3(h,g,$,_){var T=Ee();try{return oy(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function J3(h,g,$,_,T){var A=Ee();try{return ay(h,g,$,_,T)}catch(D){if(Ie(A),D!==D+0)throw D;ke(1,0)}}function eM(h,g,$,_,T,A){var D=Ee();try{return sy(h,g,$,_,T,A)}catch(H){if(Ie(D),H!==H+0)throw H;ke(1,0)}}function tM(h,g,$,_,T,A){var D=Ee();try{return uy(h,g,$,_,T,A)}catch(H){if(Ie(D),H!==H+0)throw H;ke(1,0)}}function nM(h,g,$,_,T,A,D,H){var ue=Ee();try{return j0(h,g,$,_,T,A,D,H)}catch(ce){if(Ie(ue),ce!==ce+0)throw ce;ke(1,0)}}function rM(h,g,$,_,T){var A=Ee();try{return ly(h,g,$,_,T)}catch(D){if(Ie(A),D!==D+0)throw D;return ke(1,0),0n}}function iM(h,g,$,_){var T=Ee();try{return cy(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function oM(h,g,$,_){var T=Ee();try{return dy(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function aM(h,g,$,_,T,A,D,H,ue,ce,Me,Ae){var Pe=Ee();try{return hy(h,g,$,_,T,A,D,H,ue,ce,Me,Ae)}catch(Le){if(Ie(Pe),Le!==Le+0)throw Le;ke(1,0)}}function sM(h,g,$,_,T,A,D,H,ue,ce,Me){var Ae=Ee();try{ry(h,g,$,_,T,A,D,H,ue,ce,Me)}catch(Pe){if(Ie(Ae),Pe!==Pe+0)throw Pe;ke(1,0)}}function uM(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le,pn,Bs){var hM=Ee();try{iy(h,g,$,_,T,A,D,H,ue,ce,Me,Ae,Pe,Le,pn,Bs)}catch(Ps){if(Ie(hM),Ps!==Ps+0)throw Ps;ke(1,0)}}function lM(h,g,$){var _=Ee();try{return ey(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;ke(1,0)}}function cM(h,g,$){var _=Ee();try{return ty(h,g,$)}catch(T){if(Ie(_),T!==T+0)throw T;ke(1,0)}}function dM(h,g,$,_){var T=Ee();try{ny(h,g,$,_)}catch(A){if(Ie(T),A!==A+0)throw A;ke(1,0)}}function $i(){if(0<W)ee=$i;else if(i)y==null||y(t),U();else{for(var h=Te;0<h.length;)h.shift()(t);0<W?ee=$i:(t.calledRun=!0,E||(U(),y==null||y(t)))}}return i||(tn=await ie(),$i()),t.PTR_SIZE=4,C?t:new Promise((h,g)=>{y=h,w=g})}var au,su,Fy=re(()=>{var e,t;au=ou,su=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),su&&ou()}),Ai,Ri,uu,ht,lu,Mr,cu,du,Oi,hu,Ni,pu,zi,fu,Bi=re(()=>{Ei(),Ai=typeof location>"u"?void 0:location.origin,Ri=self.location.href>"file:"&&self.location.href<"file;",uu=()=>{{if(Ri){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ai).href}return self.location.href}},ht=uu(),lu=()=>{if(ht&&!ht.startsWith("blob:"))return ht.substring(0,ht.lastIndexOf("/")+1)},Mr=(e,t)=>{try{let n=t??ht;return(n?new URL(e,n):new URL(e)).origin===Ai}catch{return!1}},cu=(e,t)=>{let n=t??ht;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},du=(e,t)=>`${t??"./"}${e}`,Oi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},hu=async e=>(await import(e)).default,Ni=(Ly(),Yn(nu)).default,pu=async()=>{if(!ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Mr(ht))return[void 0,Ni()];let e=await Oi(ht);return[e,Ni(e)]},zi=(Fy(),Yn(iu)).default,fu=async(e,t,n,r)=>{let i=zi&&!(e||t);if(i)if(ht)i=Mr(ht)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,zi];{let o="ort-wasm-simd-threaded.jsep.mjs",a=e??cu(o,t),s=n&&a&&!Mr(a,t),u=s?await Oi(a):a??du(o,t);return[s?u:void 0,await hu(u)]}}}),Pi,Sr,Zn,Di,mu,gu,yu,Ui,De,yn=re(()=>{Bi(),Sr=!1,Zn=!1,Di=!1,mu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},yu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ui=async e=>{if(Sr)return Promise.resolve();if(Zn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Di)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!yu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!gu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=mu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,s=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,p]=await fu(s,o,n>1,!!c||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||o)b.locateFile=x=>l??o+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(d){let x=lu();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{Zn=!1,Sr=!0,Pi=x,y(),d&&URL.revokeObjectURL(d)},x=>{Zn=!1,Di=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(Sr&&Pi)return Pi;throw new Error("WebAssembly is not initialized yet.")}}),vt,Ir,Ne,Li=re(()=>{yn(),vt=(e,t)=>{let n=De(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Ir=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let a=t?t+i:i;if(typeof o=="object")Ir(o,a+".",n,r);else if(typeof o=="string"||typeof o=="number")r(a,o.toString());else if(typeof o=="boolean")r(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Ne=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),s=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),wu,Gy=re(()=>{yn(),Li(),wu=e=>{let t=De(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=vt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&Ne("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ir(e.extra,"",new WeakSet,(a,s)=>{let u=vt(a,r),l=vt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ne(`Can't set a run config entry: ${a} - ${s}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),o}}}),bu,_u,xu,wn,$u,vu,Wy=re(()=>{yn(),Li(),bu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},_u=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},wn=(e,t,n,r)=>{let i=vt(t,r),o=vt(n,r);De()._OrtAddSessionConfigEntry(e,i,o)!==0&&Ne(`Can't set a session config entry: ${t} - ${n}.`)},$u=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",wn(e,"session.disable_quant_qdq","1",n),wn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&wn(e,"deviceType",d,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);wn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=vt(o,n),u=a.length,l=0,c=0;if(u>0){l=De()._malloc(u*De().PTR_SIZE),n.push(l),c=De()._malloc(u*De().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)De().setValue(l+d*De().PTR_SIZE,a[d][0],"*"),De().setValue(c+d*De().PTR_SIZE,a[d][1],"*")}await De()._OrtAppendExecutionProvider(e,s,l,c,u)!==0&&Ne(`Can't append execution provider: ${o}.`)}},vu=async e=>{let t=De(),n=0,r=[],i=e||{};xu(i);try{let o=bu(i.graphOptimizationLevel??"all"),a=_u(i.executionMode??"sequential"),s=typeof i.logId=="string"?vt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?vt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,u,l,c),n===0&&Ne("Can't create session options."),i.executionProviders&&await $u(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);wn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=vt(d,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Ne(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Ir(i.extra,"",new WeakSet,(d,p)=>{wn(n,d,p,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ne("Can't release session options."),r.forEach(a=>t._free(a)),o}}}),bn,Ht,_n,Tr,Er,Fi,Gi,Wi,be=re(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ht=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Tr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Er=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Gi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),qi,Mu=re(()=>{Ei(),qi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let a=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(o,a,l).set(u),a+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Su,Iu,Tu,Eu,Vi,ku,Ce,jt=re(()=>{be(),Su=["V","I","W","E","F"],Iu=(e,t)=>{console.log(`[${Su[e]},${new Date().toISOString()}]${t}`)},Vi=(e,t)=>{Tu=e,Eu=t},ku=(e,t)=>{let n=Er(e),r=Er(Tu);n>=r&&Iu(n,typeof t=="function"?t():t)},Ce=(...e)=>{Eu&&ku(...e)}}),Cu,Bn,V,kr,Au,Ru,Ou,$e=re(()=>{Cu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),a=new Array(o);if(n){if(r<2||i<2)return;let s=Cu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[a[o-2],a[o-1]]=s}for(let s=n?3:1;s<=o;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)a[o-s]=Math.max(u,l);else{if(c>1)return;a[o-s]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},V=class vi{static size(t){return vi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return vi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return vi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},kr=class xr{static adjustPoolAttributes(t,n,r,i,o,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<r.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=r[s]||a[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,a,s){if(s){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)xr.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,o,a,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return xr.computeShapeHelper(t,n,u,r,i,o,a,s),u}static computeConvOutputShape(t,n,r,i,o,a,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return xr.computeShapeHelper(!1,t,u,r,i,o,a,s),u}static computeShapeHelper(t,n,r,i,o,a,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(xr.adjustPadAndReturnShape(n[l+2],i[l],o[l],a[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,a,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return o[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),o[s]=c-o[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[a]+o[s]-l)/n+1)}},Au=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,a,s;t?(o=e[1],a=e[0]):(o=e[0],a=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(o<=0||s<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Bn.isValidBroadcast(i,[o,s]))throw new Error("gemm: invalid bias shape for broadcast");return[o,s,a]}},Ru=-34028234663852886e22,Ou=34028234663852886e22}),Hi,Nu=re(()=>{be(),Hi=(e,t)=>new(Tr(t))(e)}),ji,Ki,Yi,zu,Xi,Bu,Qi,Zi,Ji,Pu,Du,qy=re(()=>{be(),jt(),ji=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ki=(e,t)=>{if(t==="int32")return e;let n=ji.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Tr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let u=o[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Yi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},zu=1,Xi=()=>zu++,Bu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Qi=(e,t)=>{let n=ji.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Zi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Qi(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Yi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Ji=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),a;if(!(o!=null&&o.input.dataTypes.includes(t))){if(a=Bu.get(t),!a||(o==null?void 0:o.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Qi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ki(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Yi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Pu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Xi();return this.tensorTrackersById.set(e,new Ji(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=Xi(),a=new Zi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new Ji(this,a)),this.externalTensors.add(a),o}async getCachedTensor(e,t,n,r,i,o,a){let s=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,n)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new Zi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Du=(...e)=>new Pu(...e)}),Jn,Uu,Lu,Vy=re(()=>{be(),yn(),Nu(),qy(),jt(),Jn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Uu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},Lu=class{constructor(e){this.tensorManager=Du(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Vi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Uu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=Jn.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Jn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Hi(n,t)}}registerMLTensor(e,t,n,r){let i=Jn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,a=!1){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=o.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(a){let d=Ki(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Jn.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),eo=re(()=>{}),to,Cr,Ar,Fu,Gu,no,ro,Wu,qu,Hy=re(()=>{jt(),eo(),to=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cr=[],Ar=e=>Math.ceil(Number(e)/16)*16,Fu=e=>{for(let t=0;t<Cr.length;t++){let n=Cr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Gu=1,no=()=>Gu++,ro=async(e,t,n,r)=>{let i=Ar(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{o.destroy()}},Wu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of to)Cr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=Ar(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,a.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ar(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=no();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Fu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:no(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ro(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=to.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},qu=(...e)=>new Wu(...e)}),Vu,Oe,Ve=re(()=>{Vu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new Vu(e)}),Pn,Rr,Qe,rt,fe,We,io,Dn,rn,he,er,K,de,Hu,oo,ju,Ku,ve=re(()=>{be(),$e(),Pn=64,Rr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let n=Rr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=Rr(e,t);return typeof n=="string"?n:n[1]},fe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:V.computeStrides(n)})}),t},We=e=>e%4===0?4:e%2===0?2:1,io=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Dn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,rn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,he=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,er=(e,t,n,r,i)=>{let o=typeof n=="number",a=o?n:n.length,s=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=Rr(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:c,storage:d,tensor:t},f=C=>typeof C=="string"?C:`${C}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let C=0;C<a-1;C++)x+=`
    let dim${C} = current / ${he(b,C,a)};
    let rest${C} = current % ${he(b,C,a)};
    indices[${C}] = dim${C};
    current = rest${C};
    `;x+=`indices[${a-1}] = current;`;let M=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=C=>(m.offsetToIndices=!0,a<2?C:`o2i_${e}(${C})`),I=[];if(a>=2)for(let C=a-1;C>=0;C--)I.push(`${he(b,C,a)} * (indices[${C}])`);let E=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,k=C=>(m.indicesToOffset=!0,a<2?C:`i2o_${e}(${C})`),S=(...C)=>a===0?"0u":`${p.indices}(${C.map(f).join(",")})`,R=(C,z)=>a<2?`${C}`:`${he(C,z,a)}`,B=(C,z,U)=>a<2?`${C}=${U};`:`${he(C,z,a)}=${U};`,Y={},G=(C,z)=>{m.broadcastedIndicesToOffset=!0;let U=`${z.name}broadcastedIndicesTo${e}Offset`;if(U in Y)return`${U}(${C})`;let P=[];for(let j=a-1;j>=0;j--){let ie=z.indicesGet("outputIndices",j+z.rank-a);P.push(`${R(b,j)} * (${ie} % ${R(w,j)})`)}return Y[U]=`fn ${U}(outputIndices: ${z.type.indices}) -> u32 {
             return ${P.length>0?P.join("+"):"0u"};
           }`,`${U}(${C})`},q=(C,z)=>(()=>{if(p.storage===p.value)return`${e}[${C}]=${z};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${C}]=vec2<u32>(u32(${z}), select(0u, 0xFFFFFFFFu, ${z} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${C}]=vec2<u32>(u32(${z}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${C}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${z}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),N=C=>(()=>{if(p.storage===p.value)return`${e}[${C}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${C}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${C}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${C}] & 0xFFu), bool(${e}[${C}] & 0xFF00u), bool(${e}[${C}] & 0xFF0000u), bool(${e}[${C}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),F=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${c} {
    return ${N(`i2o_${e}(indices)`)};
  }`,X=a<2?"":(()=>{let C=s.map(U=>`d${U}: u32`).join(", "),z=s.map(U=>`d${U}`).join(", ");return`
  fn get_${e}(${C}) -> ${c} {
    return get_${e}ByIndices(${S(z)});
  }`})(),Z=(...C)=>{if(C.length!==a)throw new Error(`indices length must be ${a}`);let z=C.map(f).join(",");return a===0?N("0u"):a===1?N(z[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${z})`)},le=C=>a<2?N(C):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${C})`),L=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${c}) {
    ${q(`i2o_${e}(indices)`,"value")}
  }`,O=a<2?"":(()=>{let C=s.map(U=>`d${U}: u32`).join(", "),z=s.map(U=>`d${U}`).join(", ");return`
  fn set_${e}(${C}, value: ${c}) {
    set_${e}ByIndices(${S(z)}, value);
  }`})();return{impl:()=>{let C=[],z=!1;return m.offsetToIndices&&(C.push(M),z=!0),m.indicesToOffset&&(C.push(E),z=!0),m.broadcastedIndicesToOffset&&(Object.values(Y).forEach(U=>C.push(U)),z=!0),m.set&&(C.push(O),z=!0),m.setByIndices&&(C.push(L),z=!0),m.get&&(C.push(X),z=!0),m.getByIndices&&(C.push(F),z=!0),!o&&z&&C.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${V.computeStrides(n).join(",")});`),C.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:G,indices:S,indicesGet:R,indicesSet:B,set:(...C)=>{if(C.length!==a+1)throw new Error(`indices length must be ${a}`);let z=C[a];if(typeof z!="string")throw new Error("value must be string");let U=C.slice(0,a).map(f).join(",");return a===0?q("0u",z):a===1?q(U[0],z):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${U}, ${z})`)},setByOffset:q,setByIndices:(C,z)=>a<2?q(C,z):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${C}, ${z});`),get:Z,getByOffset:N,getByIndices:le,usage:r,name:e,strides:b,shape:w,rank:a}},K=(e,t,n,r=1)=>er(e,t,n,"input",r),de=(e,t,n,r=1)=>er(e,t,n,"output",r),Hu=(e,t,n)=>er(e,t,n,"atomicOutput",1),oo=(e,t,n,r=1)=>er(e,t,n,"internal",r),ju=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ku=(e,t)=>new ju(e,t)}),Yu,ao,Xu,Qu,Zu,Ju,pt,el,tl,on=re(()=>{be(),$e(),Ve(),ve(),Yu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ao=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Xu=(e,t)=>V.sortBasedOnPerm(e,ao(e.length,t)),Qu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},Zu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Ju=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},pt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ao(r,t),o=Xu(e.dims,i),a=e.dims,s=o,u=r<2||Ju(i,e.dims),l;if(u)return l=m=>{let y=K("input",n,a,4),w=de("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=Zu(e.dims,i),p=V.areEqual(d,[2,3,1]),f=V.areEqual(d,[3,1,2]);if(c.length===2||p||f){a=p?[c[0],c[1]*c[2]]:f?[c[0]*c[1],c[2]]:c,s=[a[1],a[0]];let m=16;return l=y=>{let w=K("a",n,a.length),b=de("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...fe(a,s)]}},getShaderSource:l}}return l=m=>{let y=K("a",n,a.length),w=de("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Qu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=V.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(a,s)]}},getShaderSource:l}},el=(e,t)=>{Yu(e.inputs,t.perm),e.compute(pt(e.inputs[0],t.perm))},tl=e=>Oe({perm:e.perm})}),nl,rl,il,ol,al,sl,ul,ll,cl,dl,Mt,hl,pl,fl,ml,gl,yl,wl,bl,_l,xl,jy=re(()=>{be(),$e(),ve(),uo(),on(),nl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},rl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},il={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ol={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},al=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},sl=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},ul=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},ll=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},cl=(e,t)=>{let n=[];if(!ll(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},dl=(e,t,n,r,i,o,a)=>{let s=n[0].dims,u=V.size(o),l=V.size(a),c=K("_A",n[0].dataType,s),d=de("output",i,o),p=64;u===1&&(p=256);let f=`
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

          var bestValue = f32(${il[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${nl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${rl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${ol[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:so(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((f,m)=>m));let a=V.normalizeAxes(o,e.inputs[0].dims.length),s=a,u=e.inputs[0],l=cl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(pt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=al(s.length,u.dims.length));let[c,d]=sl(u.dims,s),p=c;i.keepDims&&(p=ul(c,a)),e.compute(dl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},hl=(e,t)=>{Mt(e,"ReduceMeanShared",t,"mean")},pl=(e,t)=>{Mt(e,"ReduceL1Shared",t,"l1")},fl=(e,t)=>{Mt(e,"ReduceL2Shared",t,"l2")},ml=(e,t)=>{Mt(e,"ReduceLogSumExpShared",t,"logSumExp")},gl=(e,t)=>{Mt(e,"ReduceMaxShared",t,"max")},yl=(e,t)=>{Mt(e,"ReduceMinShared",t,"min")},wl=(e,t)=>{Mt(e,"ReduceProdShared",t,"prod")},bl=(e,t)=>{Mt(e,"ReduceSumShared",t,"sum")},_l=(e,t)=>{Mt(e,"ReduceSumSquareShared",t,"sumSquare")},xl=(e,t)=>{Mt(e,"ReduceLogSumShared",t,"logSum")}}),St,$l,Or,so,It,vl,Ml,Sl,Il,Tl,El,kl,Cl,Al,Rl,Tt,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,uo=re(()=>{be(),$e(),Ve(),ve(),jy(),St=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},$l=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Or=(e,t,n,r,i,o,a=!1,s=!1)=>{let u=[],l=n[0].dims,c=l.length,d=V.normalizeAxes(i,c),p=!s&&d.length===0;l.forEach((y,w)=>{p||d.indexOf(w)>=0?a&&u.push(1):u.push(y)});let f=u.length,m=V.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=K("_A",n[0].dataType,c),x=de("output",o,f),M=r(b,x,d),v=M[2];for(let I=0,E=0;I<c;I++)p||d.indexOf(I)>=0?(a&&E++,v=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(l,u)]})}},so=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Oe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},It=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:so(i,n);e.compute(Or(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?$l:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},vl=(e,t)=>{St(e.inputs),It(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Ml=(e,t)=>{St(e.inputs),It(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Sl=(e,t)=>{St(e.inputs),It(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Il=(e,t)=>{St(e.inputs),It(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Tl=(e,t)=>{St(e.inputs),It(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",a,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},El=(e,t)=>{St(e.inputs),It(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(o*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},kl=(e,t)=>{St(e.inputs),It(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Cl=(e,t)=>{St(e.inputs),It(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Al=(e,t)=>{St(e.inputs),It(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Rl=(e,t)=>{St(e.inputs),It(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Tt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},Ol=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):hl(e,t)},Nl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):pl(e,t)},zl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sl(e,t):fl(e,t)},Bl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):ml(e,t)},Pl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):gl(e,t)},Dl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):yl(e,t)},Ul=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):wl(e,t)},Ll=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):bl(e,t)},Fl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):_l(e,t)},Gl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):xl(e,t)}}),lo,Wl,ql,co,Ky=re(()=>{be(),Ve(),uo(),lo=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Wl=(e,t)=>{lo(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Or("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ql=(e,t)=>{lo(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Or("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},co=e=>Oe(e)}),Vl,Nr,Hl,jl,Kl,tr,Yl,Xl,ho=re(()=>{be(),$e(),eo(),ve(),Vl=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let w=m+y,b=-1,x=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Nr=(e,t,n)=>t&&e?`
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
    `,Hl=(e,t,n,r,i,o,a,s)=>{let u=We(a?1:o),l=64,c=o/u;c<l&&(l=32);let d=Math.ceil(o/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],f=Qe(e.dataType,u),m=rt(1,u),y=["type"];a&&y.push("type"),s&&y.push("type");let w=b=>{let x=de("x",e.dataType,e.dims,u),M=[x],v=a?K("seq_lens",a.dataType,a.dims):void 0;v&&M.push(v);let I=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;I&&M.push(I);let E=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},jl=(e,t,n,r,i,o,a,s,u)=>{let l=a+o.kvSequenceLength,c=[o.batchSize,o.numHeads,o.sequenceLength,l],d=e>1&&r,p=o.kvNumHeads?o.kvNumHeads:o.numHeads,f=d?[o.batchSize,p,l,o.headSize]:void 0,m=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=We(o.headSize),b=o.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},v=[{type:12,data:o.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:m}],I=d&&r&&V.size(r.dims)>0,E=["type","type"];I&&E.push("type"),i&&E.push("type"),s&&E.push("type"),u&&E.push("type");let k=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=R=>{let B=K("q",t.dataType,t.dims,w),Y=K("key",n.dataType,n.dims,w),G=[B,Y];if(I){let L=K("past_key",r.dataType,r.dims,w);G.push(L)}i&&G.push(K("attention_bias",i.dataType,i.dims));let q=s?K("seq_lens",s.dataType,s.dims):void 0;q&&G.push(q);let N=u?K("total_sequence_length_input",u.dataType,u.dims):void 0;N&&G.push(N);let F=de("output",t.dataType,c),X=[F];d&&X.push(de("present_key",t.dataType,f,w));let Z=rt(1,w),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
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
    ${Nr(q,N,!0)}
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},Kl=(e,t,n,r,i,o,a=void 0,s=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=d?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&V.size(r.dims)>0,M=["type","type"];x&&M.push("type"),a&&M.push("type"),s&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];d&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=E=>{let k=K("probs",t.dataType,t.dims),S=K("v",n.dataType,n.dims),R=[k,S];x&&R.push(K("past_value",r.dataType,r.dims));let B=a?K("seq_lens",a.dataType,a.dims):void 0;a&&R.push(B);let Y=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;s&&R.push(Y);let G=[de("output",t.dataType,m)];d&&G.push(de("present_value",t.dataType,f));let q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${E.registerUniforms(q).declareVariables(...R,...G)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Nr(B,Y,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},tr=(e,t,n,r,i,o,a,s,u,l,c=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(a?1:0)+(s?1:0)),f=p>1?a:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&V.size(u.dims)>0?u:void 0,x=[t,n];f&&V.size(f.dims)>0&&x.push(f),b&&x.push(b),c&&x.push(c),d&&x.push(d);let M=e.compute(jl(p,t,n,f,b,l,y,c,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Hl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[M,c,d]:[M],outputs:[]});let v=[M,r];m&&V.size(m.dims)>0&&v.push(m),c&&v.push(c),d&&v.push(d),e.compute(Kl(p,M,r,m,l,y,c,d),{inputs:v,outputs:p>1?[0,2]:[0]})},Yl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,a=12,s={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let p=de("output_q",u[0].dataType,n),f=de("output_k",u[0].dataType,n),m=de("output_v",u[0].dataType,n),y=K("input",u[0].dataType,u[0].dims),w=K("weight",u[1].dataType,u[1].dims),b=K("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${d.registerUniforms(M).declareVariables(y,w,b,p,f,m)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Xl=(e,t)=>{let n=Vl(e.inputs,t),[r,i,o]=Yl(e,n);return tr(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Ql,Zl,Jl,ec,Yy=re(()=>{mt(),be(),$e(),Ve(),ve(),Ql=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let a=i.length;if(a!==r.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Zl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,a=r?We(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,u=V.size(o)/a,l=r,c=l?o.length:o,d=K("x",e[0].dataType,e[0].dims,a),p=K("scale",e[1].dataType,e[1].dims,s),f=K("bias",e[2].dataType,e[2].dims,s),m=K("inputMean",e[3].dataType,e[3].dims,s),y=K("inputVar",e[4].dataType,e[4].dims,s),w=de("y",e[0].dataType,c,a),b=()=>{let M="";if(r)M=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...fe(o)]:[{type:12,data:u}]})}},Jl=e=>Oe(e),ec=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Jl({...t,outputCount:r});if(ze.webgpu.validateInputContent&&Ql(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Zl(n,i))}}),tc,nc,rc,Xy=re(()=>{$e(),ve(),tc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},nc=e=>{let t=e[0].dims,n=e[0].dims[2],r=V.size(t)/4,i=e[0].dataType,o=K("input",i,t,4),a=K("bias",i,[n],4),s=K("residual",i,t,4),u=de("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,a,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},rc=e=>{tc(e.inputs),e.compute(nc(e.inputs))}}),ic,Re,oc,ac,sc,uc,lc,cc,dc,hc,pc,fc,mc,gc,yc,wc,nr,bc,zr,_c,xc,$c,vc,Mc,Sc,Ic,Tc,Ec,kc,Cc,Ac,Rc,Oc,Nc,zc,po,Bc,fo,mo,Pc,Dc,Uc,Lc,Fc,Gc,go=re(()=>{be(),$e(),Ve(),ve(),ic=(e,t,n,r,i,o,a)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=K("inputData",n,[s],4),c=de("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return a&&d.push(...a),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,o=e.dataType,a,s)=>{let u=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>ic(l,V.size(e.dims),e.dataType,o,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(V.size(l[0].dims)/64/4)},programUniforms:u})}},oc=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},ac=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},sc=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},uc=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},lc=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},cc=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},dc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},hc=e=>Oe(e),pc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},fc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:n})},mc=(e,t)=>{let n=t||fc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},gc=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},yc=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},wc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},nr=e=>Oe(e),bc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,_c=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,zr(t)))},xc=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},$c=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},vc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,zr(t)))},Mc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Sc=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Ic=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Tc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ec=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},kc=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Cc=e=>Oe(e),Ac=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Rc=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Oc=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Nc=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},zc=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},po=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Bc=e=>{e.compute(Re(e.inputs[0],"Tanh",po))},fo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${po("v")};
}
`,mo=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Pc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",mo,fo(t),void 0,e.inputs[0].dataType))},Dc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Uc=e=>{e.compute(Re(e.inputs[0],"Log","log"))},Lc=(e,t)=>`
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
`,Fc=e=>`quick_gelu_impl(${e})`,Gc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Fc,Lc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Wc,qc,Vc,Qy=re(()=>{$e(),ve(),go(),Wc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},qc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=K("input",e[0].dataType,e[0].dims,4),r=K("bias",e[0].dataType,[e[0].dims[2]],4),i=de("output",e[0].dataType,t,4),o=V.size(t)/4,a=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${zr(a)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Vc=e=>{Wc(e.inputs),e.compute(qc(e.inputs))}}),Hc,jc,Et,Kc,Yc,Xc,Qc,Zc,Jc,ed,td,nd,rd,Zy=re(()=>{be(),$e(),ve(),Hc=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=de("outputData",c,r.length,4),y=K("aData",u,t.length,4),w=K("bData",l,n.length,4),b;if(i)if(o){let x=V.size(t)===1,M=V.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,I="")=>{let E=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${I}(${p(E,k)});
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
      }`},jc=(e,t,n,r,i,o,a=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!V.areEqual(s,u),c=s,d=V.size(s),p=!1,f=!1,m=[l];if(l){let y=Bn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=V.size(c);let w=V.size(s)===1,b=V.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let v=1;for(let I=1;I<c.length;I++){let E=s[s.length-I],k=u[u.length-I];if(E===k)v*=E;else break}v%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Hc(y,s,u,c,p,l,f,i,n.dataType,r.dataType,a,o),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(c)/4)},...fe(s,u,c)]})}},Et=(e,t,n,r,i,o)=>{e.compute(jc(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},Kc=e=>{Et(e,"Add",(t,n)=>`${t}+${n}`)},Yc=e=>{Et(e,"Div",(t,n)=>`${t}/${n}`)},Xc=e=>{Et(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Qc=e=>{Et(e,"Mul",(t,n)=>`${t}*${n}`)},Zc=e=>{let t=K("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Et(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Jc=e=>{Et(e,"Sub",(t,n)=>`${t}-${n}`)},ed=e=>{Et(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},td=e=>{Et(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},nd=e=>{Et(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},rd=e=>{Et(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),id,od,ad,sd,ud,ld,Jy=re(()=>{be(),$e(),Ve(),ve(),id=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((a,s)=>{if(s!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},od=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ad=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},sd=(e,t,n,r)=>{let i=V.size(n),o=new Array(e.length),a=new Array(e.length),s=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],o[y]=s,l.push(e[y].dims.length),a[y]=K(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)c.push(...fe(e[y].dims));c.push(...fe(n));let d=de("output",r,n.length),p=d.indicesGet("indices",t),f=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...a,d)})()}

  ${od(o.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ad(a,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},ud=(e,t)=>{let n=e.inputs,r=n[0].dims,i=V.normalizeAxis(t.axis,r.length);id(n,i);let o=r.slice();o[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(s=>V.size(s.dims)>0);e.compute(sd(a,i,o,n[0].dataType),{inputs:a})},ld=e=>Oe({axis:e.axis})}),xn,$n,vn,yo,Mn=re(()=>{be(),$e(),xn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},$n=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},vn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},yo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Ru,Ou];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,cd,wo=re(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),dd,ew=re(()=>{dd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,bo,_o=re(()=>{be(),$e(),ve(),Mn(),rr=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((a,s)=>`
      if (${he(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,he(i,s+o,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},bo=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a[a.length-2],l=s[s.length-1],c=a[a.length-1],d=We(l),p=We(c),f=We(u),m=V.size(n)/d/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[V.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:c}];$n(t,x),x.push(...fe(w,a,s)),y&&x.push(...fe(e[2].dims)),x.push(...fe(b));let M=v=>{let I=oo("batch_dims",e[0].dataType,w.length),E=K("a",e[0].dataType,a.length,p),k=K("b",e[1].dataType,s.length,d),S=de("output",e[0].dataType,b.length,d),R=Qe(S.type.tensor),B=xn(t,S.type.value,R),Y=[E,k],G="";if(y){let F=i?d:1;Y.push(K("bias",e[2].dataType,e[2].dims.length,F)),G=`${i?`value += bias[col / ${F}];`:`value += ${S.type.value}(bias[row + i]);`}`}let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];vn(t,q);let N=()=>{let F=`var a_data: ${E.type.value};`;for(let X=0;X<p;X++)F+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${d}];`;for(let X=0;X<f;X++){F+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${p}];`;for(let Z=0;Z<p;Z++)F+=`
            values[${X}] = fma(${k.type.value}(a_data${p===1?"":`[${Z}]`}), b_data${Z}, values[${X}]);
`}return F};return`
  ${v.registerUniforms(q).registerInternalVariables(I).declareVariables(...Y,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${rr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${rr("b_indices",k,k.rank-2,I.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${N()}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),hd,pd,xo,$o,fd,vo,md,Br,Mo=re(()=>{be(),$e(),ve(),Mn(),_o(),wo(),hd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,pd=(e,t)=>e?`
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
        }`,xo=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:o,d=i?o:u,p=c/t[0],f=o/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&c%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${hd(i,r)}
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

          ${pd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},$o=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,fd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",vo=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:o,p=i?o:l;if(!(p%t[1]===0&&d%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=d/t[0],y=o/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${$o(i,r)}
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
      ${$o(i,r)}
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
      ${fd(i)}
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
`},md=(e,t,n,r,i=!1)=>{let[o,a,s,u]=r,l=Qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${rr("aIndices",a,a.rank-2,o.rank,"batchIndices")}
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
        ${rr("bIndices",s,s.rank-2,o.rank,"batchIndices")}
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
    `},Br=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a.slice(0,-2),l=s.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=V.size(c),p=a[a.length-2],f=a[a.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],M=y?4:1,v=[...u,p,f/M],I=v.length,E=[...l,f,m/M],k=E.length,S=[d,p,m/M],R=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];$n(t,R),R.push(...fe(c,v,E));let B=["rank","rank"],Y=e.length>2;Y&&(R.push(...fe(e[2].dims)),B.push("rank")),R.push(...fe(S));let G=q=>{let N=c.length,F=oo("batchDims",e[0].dataType,N,1),X=Qe(e[0].dataType),Z=K("a",e[0].dataType,I,M),le=K("b",e[1].dataType,k,M),L=de("result",e[0].dataType,S.length,M),O=[Z,le];if(Y){let j=i?M:1;O.push(K("bias",e[2].dataType,e[2].dims.length,j))}let C=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];vn(t,C);let z=Qe(L.type.tensor),U=xn(t,L.type.value,z),P=md(M,Y,U,[F,Z,le,L],i);return`
  ${q.registerUniforms(C).registerInternalVariables(F).declareVariables(...O,L)}
  ${P}
  ${y?xo(w,b,X,F):vo(w,b,X,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:G}}}),gd,yd,tw=re(()=>{be(),jt(),ve(),Mn(),wo(),ew(),Mo(),gd=(e,t,n,r,i=!1,o,a=4,s=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=e?`
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
    return ${Je(s,l)}(0.0);`,I=Je(u,l),E=Je(e?a:s,l),k=Je(e?s:a,l),S=xn(o,I,l);return`
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
      ${cd(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},yd=(e,t,n,r,i,o,a,s,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(d/x[2]/M[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let I=y?l&&c%4!==0?3:4:1,E=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*I,x[1]),R=r%E===0,B=i%k===0,Y=o%S===0,G=y?[I,4,4]:[1,1,1],q=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];$n(t,q),q.push(...fe(e[0].dims,e[1].dims));let N=["rank","rank"];a&&(q.push(...fe(e[2].dims)),N.push("rank")),q.push(...fe(n));let F=X=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];vn(t,Z);let le=y?4:1,L=Qe(e[0].dataType),O=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,C=K("x",e[0].dataType,e[0].dims.length,I===3?1:I),z=K("w",e[1].dataType,e[1].dims.length,le),U=[C,z],P=de("result",e[0].dataType,n.length,le);if(a){let j=K("bias",e[2].dataType,e[2].dims.length,le);U.push(j),O+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${dd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(Z).declareVariables(...U,P)}
        ${O}
        ${gd(l,R,B,Y,a,t,G[0],G[1],G[2],L)}
        ${y?xo(M,x,L,void 0,!l,S):vo(M,x,L,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${R};${B};${Y};${E};${k};${S}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:q}),getShaderSource:F}}}),wd,So,ir,bd,Io,_d,xd,$d,nw=re(()=>{be(),jt(),$e(),ve(),Mn(),wo(),wd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},So=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),bd=(e,t,n,r=1)=>{let i=ir(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Io=(e,t,n,r,i)=>{i==null&&(i=bd(e,t[0],r[0]));let o=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(o[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return o},_d=(e,t,n,r,i,o,a,s,u,l)=>{let c,d,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Io([t,n,r,1],[s,u,l],1,[i,o,a],e);d=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Io([t,n,r,1],[s,u,l],1,[i,o,a],e[0]);d=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/o),f=Math.ceil(r/a);let m=(d-1)*i+s-t,y=(p-1)*o+u-n,w=(f-1)*a+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),v=y-M,I=Math.floor(w/2),E=w-I;c={top:M,bottom:v,left:I,right:E,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:p,outWidth:f}},xd=(e,t,n,r,i,o=!1,a="channelsLast")=>{let s,u,l,c,d;if(a==="channelsLast")[s,u,l,c,d]=e;else if(a==="channelsFirst")[s,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=t,[w,b,x]=So(n),[M,v,I]=So(r),E=ir(f,M),k=ir(m,v),S=ir(y,I),{padInfo:R,outDepth:B,outHeight:Y,outWidth:G}=_d(i,u,l,c,w,b,x,E,k,S),q=o?p*d:p,N=[0,0,0,0,0];return a==="channelsFirst"?N=[s,q,B,Y,G]:a==="channelsLast"&&(N=[s,B,Y,G,q]),{batchSize:s,dataFormat:a,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:B,outHeight:Y,outWidth:G,outChannels:q,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:I,inShape:e,outShape:N,filterShape:t}},$d=(e,t,n,r,i,o)=>{let a=o==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(wd(u.x.map(w=>n[w]))/s[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=V.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];$n(t,p),p.push(...fe(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...fe(e[2].dims)),f.push("rank")),p.push(...fe(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];vn(t,b);let x=1,M=Qe(e[0].dataType),v=K("x",e[0].dataType,e[0].dims.length,c),I=K("W",e[1].dataType,e[1].dims.length,x),E=[v,I],k=de("result",e[0].dataType,n.length,x),S="";if(m){let Y=K("bias",e[2].dataType,e[2].dims.length,x);E.push(Y),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${a?he("coords",4,5):he("coords",1,5)}];
        }`}let R=Je(c,M),B=xn(t,R,M);return`
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
              let batch = ${he("coords",0,v.rank)};
              let d2 = ${a?he("coords",v.rank-1,v.rank):he("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${a?he("coords",1,v.rank):he("coords",2,v.rank)},
              ${a?he("coords",2,v.rank):he("coords",3,v.rank)},
              ${a?he("coords",3,v.rank):he("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?he("uniforms.x_shape",1,v.rank):he("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${a?he("uniforms.x_shape",2,v.rank):he("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${a?he("uniforms.x_shape",3,v.rank):he("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${a?he("uniforms.x_shape",4,v.rank):he("uniforms.x_shape",1,v.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),vd,Md,rw=re(()=>{be(),$e(),ve(),Mn(),vd=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",a=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?We(l):1,p=V.size(n)/d,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];$n(t,f),f.push(...fe(a,[s[0],s[1],s[2],s[3]/d]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...fe([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=de("output",e[0].dataType,n.length,d),x=Qe(b.type.tensor),M=xn(t,b.type.value,x),v=K("x",e[0].dataType,a.length),I=K("w",e[1].dataType,s.length,d),E=[v,I];i&&E.push(K("b",e[2].dataType,e[2].dims,d));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];vn(t,k);let S=u?`
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
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${S}
    ${o}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Md=(e,t,n,r)=>{let i=e.length>2,o=We(n[3]),a=We(n[2]),s=V.size(n)/o/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],c=[n[0],n[1],n[2],n[3]/o],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];$n(t,d),d.push(...fe(u,l,c));let p=(a-1)*t.strides[1]+l[1],f=m=>{let y=de("output",e[0].dataType,c.length,o),w=Qe(y.type.tensor),b=xn(t,y.type.value,w),x=K("x",e[0].dataType,u.length,o),M=K("w",e[1].dataType,l.length,o),v=[x,M];i&&v.push(K("b",e[2].dataType,e[2].dims,o));let I=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return vn(t,E),`
  ${m.registerUniforms(E).declareVariables(...v,y)}
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
      ${I}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}}}),Sd,Pr,Id,Dr,To,Eo,Td,Ed,ko,iw=re(()=>{$e(),tw(),nw(),Mo(),rw(),Mn(),_o(),on(),Sd=(e,t,n,r,i,o)=>{let a=e[0],s=e.slice(o?1:2,o?3:4),u=s.length,l=t[0],c=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),d=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-c[f]+i[f])/i[f]));return d.splice(0,0,a),d.splice(o?3:1,0,l),d},Pr=[2,3,1,0],Id=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Dr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();kr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},To=e=>{let t=yo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,a=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Eo=(e,t,n,r)=>{let i=n.format==="NHWC",o=Sd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),E.push(k)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Md(E,n,o,r),{inputs:E}):e.compute(vd(E,n,o,r),{inputs:E});return}let a=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],p=o[i?1:2],f=o[i?2:3],m=o[i?3:1],y=i&&c===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=o[0],k,S,R,B=[];if(i){let q=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=q),y){let N=s*u*l;k=t[0].reshape([1,E,N]),S=q.reshape([1,N,m]),R=[1,E,m]}else k=t[0].reshape([E,s*u,l]),S=q.reshape([1,l,m]),R=[E,p*f,m];B.push(k),B.push(S)}else k=t[0].reshape([E,l,s*u]),S=t[1].reshape([1,m,l]),R=[E,m,p*f],B.push(S),B.push(k);a&&B.push(t[2]);let Y=R[2],G=B[0].dims[B[0].dims.length-1];Y<8&&G<8?e.compute(bo(B,n,o,R,i,r),{inputs:B}):e.compute(Br(B,n,o,R,i,r),{inputs:B});return}let w=!0,b=e.kernelCustomData.wT??e.compute(pt(t[1],Pr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];a&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,I=c*d*l;e.compute(yd(x,n,o,M,v,I,a,w,r),{inputs:x})},Td=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),a=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Dr({...t,pads:i,strides:o,dilations:a,kernelShape:s},r);Eo(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Ed=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Dr(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=xd(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute($d(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},ko=(e,t)=>{if(Id(e.inputs,t),e.inputs[0].dims.length===3)Td(e,t);else if(e.inputs[0].dims.length===5)Ed(e,e.inputs,t);else{let n=Dr(t,e.inputs);Eo(e,e.inputs,n)}}}),kd,ow=re(()=>{be(),jt(),$e(),ve(),kd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",a=t.group,s=e[1].dims,u=s[2]/a,l=s[3],c=o?We(u):1,d=o&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/c)*c,f=u-p,m=o?We(l):1,y=o?l===1?c:m:1,w=V.size(i)/m,b=[Math.ceil(w/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],I=[t.dilations[0],t.dilations[1]],E=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],k=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:I},{type:12,data:E},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...fe(e[0].dims,e[1].dims)];r&&(S.push(...fe(e[2].dims)),x.push("rank")),S.push(...fe(i));let R=B=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Qe(e[0].dataType),q=o?1:2,N=o?2:3,F=o?3:1,X=K("W",e[1].dataType,e[1].dims.length,y),Z=K("Dy",e[0].dataType,e[0].dims.length,c),le=[Z,X];r&&le.push(K("bias",e[2].dataType,[i[F]].length,m));let L=de("result",e[0].dataType,i.length,m),O=()=>{let U="";if(d)c===4?U+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?U+=`
          dotProd = dotProd + dot(vec4<${G}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(U+=`
          dotProd = dotProd + dot(vec4<${G}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(U+=`
                  let xValue = ${o?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)U+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let P=0;P<c;P++)U+=`
            let wValue${P} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${P}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${P}] * wValue${P};`;return U},C=()=>{if(f===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let U="";if(c===1){U+="dotProd = dotProd";for(let P=0;P<f;P++)U+=`
            + ${Z.getByOffset(`x_offset + ${P}`)} * ${X.getByOffset(`w_offset + ${P}`)}`;U+=";"}else if(c===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);U+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return U},z=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",F)};
            let r = ${L.indicesGet("outputIndices",q)};
            let c = ${L.indicesGet("outputIndices",N)};
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
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${N}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${O()}
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
    ${B.registerUniforms(Y).declareVariables(...le,L)}
      ${B.mainStart()}
      ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${m}${d}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:R}}}),Cd,Ad,Rd,Co,Od,Nd,Ao,zd,Bd,aw=re(()=>{ow(),Mn(),on(),Cd=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,Ad=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},Rd=(e,t,n,r,i,o,a,s,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-c-(s?1:0);m<c;++m,++y){let w=e[y],b=d?w*a[m]:l[m],x=Cd(w,a[m],o[m],t[y],n[m],b);Ad(x,r,o,m,m+c),d&&l.push(a[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-o[m]-o[m+c])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Co=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),a=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}Rd(s,n,u,e.autoPad,e.group,i,l,r,a,o);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:a,outputShape:o,dilations:u,strides:l}),c},Od=e=>{let t=yo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,a=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,outputPadding:c,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Nd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((a,s)=>a+s,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((a,s)=>a+s,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((a,s)=>a+s,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((a,s)=>a+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ao=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(pt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(kd(o,n,r),{inputs:o})},zd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Co({...t,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:u},r);Ao(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Bd=(e,t)=>{if(Nd(e.inputs,t),e.inputs[0].dims.length===3)zd(e,t);else{let n=Co(t,e.inputs);Ao(e,e.inputs,n)}}}),Pd,Dd,Ud,sw=re(()=>{be(),$e(),Ve(),ve(),Pd=(e,t,n,r)=>{let i=V.size(t),o=t.length,a=K("input",e,o),s=de("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=V.normalizeAxis(u,o),c=d=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=he("uniforms.input_shape","uniforms.axis",o),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...fe(t,t)]}),getShaderSource:c}},Dd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Pd(r,n,i,t),{inputs:[0]})},Ud=e=>{let t=e.exclusive===1,n=e.reverse===1;return Oe({exclusive:t,reverse:n})}}),Ld,Fd,Gd,Wd,qd,uw=re(()=>{be(),$e(),Ve(),ve(),Ld=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Fd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},Gd=(e,t)=>{let n,r,i,o,a,s,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,o]=e.dims,a=c?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],s=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],s=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(a),p=d.dims.length,f=e.dataType,m=K("a",f,p),y=de("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Fd(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],M=V.size(x),v=d.dims,I=V.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...fe(v,I)]}},getShaderSource:w}},Wd=(e,t)=>{Ld(e.inputs),e.compute(Gd(e.inputs[0],t))},qd=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ur,or,Ro,Vd,Hd,jd,Kd,Oo,Yd,Xd,Qd,lw=re(()=>{be(),$e(),Ve(),ve(),Ur="[a-zA-Z]|\\.\\.\\.",or="("+Ur+")+",Ro="^"+or+"$",Vd="("+or+",)*"+or,Hd="^"+Vd+"$",jd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Kd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Hd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,a)=>{let s=e[a].dims.slice();if(!o.match(RegExp(Ro)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,s,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,a])=>a.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp(or)))throw new Error("Invalid RHS");(i=r.match(RegExp(Ur,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(o);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,a=[],s=0;if(!e.match(RegExp(Ro))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Ur,"g")),l=new jd(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,d+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[s++],r)}),l}},Oo=e=>e+"_max",Yd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>K(`input${c}`,t,l)),o=V.size(r),a=de("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,I)=>{var E;if(n.rhs.symbolToIndices.has(I)){let k=(E=n.rhs.symbolToIndices.get(I))==null?void 0:E[0];k!==void 0&&n.lhs.forEach((S,R)=>{if(v.inputIndices.includes(R)){let B=S.symbolToIndices.get(I);if(B===void 0)throw new Error("Invalid symbol error");B.forEach(Y=>{c.push(`${i[R].indicesSet(`input${R}Indices`,Y,a.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let R=k.symbolToIndices.get(I);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(B=>{m.push(`${i[S].indicesSet(`input${S}Indices`,B,`${I}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Oo(I)}; ${I}++) {`),w.push("}")});let M=x?[...c,`let sum = ${i.map((v,I)=>v.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,p,...y,...m,d,...b,f,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Oo(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((v,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:o});let c=e.map((d,p)=>[...fe(d)]).reduce((d,p)=>d.concat(p),l);return c.push(...fe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}},getShaderSource:u}},Xd=(e,t)=>{let n=new Kd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,a)=>o.dims);e.compute(Yd(i,e.inputs[0].dataType,n,r))},Qd=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),Zd,No,Jd,eh,th,cw=re(()=>{be(),$e(),ve(),Zd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},No=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Jd=(e,t)=>e.length>t.length?No(e,t):No(t,e),eh=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Jd(t,n),i=e[0].dataType,o=i===9||V.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(V.size(r)/s),l=d=>{let p=K("input",i,t.length,a),f=de("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
    ${m}`},c=[{type:12,data:u},...fe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},th=e=>{Zd(e.inputs),e.compute(eh(e.inputs),{inputs:[0]})}}),nh,rh,dw=re(()=>{be(),$e(),ve(),go(),nh=e=>{let t=e[0].dataType,n=V.size(e[0].dims),r=V.size(e[1].dims),i=r%4===0,o=a=>{let s=K("x",t,[1],4),u=K("bias",t,[1],4),l=de("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(s,u,l)}

    ${fo(rt(t))}

    ${a.mainStart(Pn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",mo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pn/4)}})}},rh=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?Pc(e):e.compute(nh(e.inputs))}}),ih,oh,ah,sh,hw=re(()=>{be(),$e(),Ve(),ve(),ih=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},oh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=V.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(o,1,...r);let s=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(V.size(a)/u),c=[{type:12,data:l},{type:6,data:s},{type:12,data:o},...fe(e[0].dims,e[1].dims,a)],d=p=>{let f=K("data",e[0].dataType,e[0].dims.length,u),m=K("inputIndices",e[1].dataType,e[1].dims.length),y=de("output",e[0].dataType,a.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<M;I++)v+=`${M>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,E=0;I<i;I++)I===o?(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,E+=M):(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return v},b;if(e[0].dataType===9){let x=(M,v,I="")=>`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},ah=e=>Oe({axis:e.axis}),sh=(e,t)=>{let n=e.inputs;ih(n),e.compute(oh(e.inputs,t))}}),uh,lh,ch,pw=re(()=>{be(),$e(),ve(),uh=(e,t,n,r,i,o,a,s,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:u}],c=[o];l.push(...fe(t.dims,c));let d=p=>{let f=K("indices_data",t.dataType,t.dims.length),m=de("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},lh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,a=o[o.length-1],s=V.sizeToDimension(o,o.length-1),u=V.sizeFromDimension(r,t.batchDims+a),l=V.sizeToDimension(r,t.batchDims),c=V.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(a),f=u;for(let v=0;v<a;++v)p[a-1-v]=f,f*=r[t.batchDims+a-1-v];let m=uh(e,n[1],p,t.batchDims,r,s,d,c,a),y=t.batchDims+a;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),b=V.size(w),x=[{type:12,data:b},{type:12,data:u},...fe(n[0].dims,m.dims,w)],M=v=>{let I=K("data",n[0].dataType,n[0].dims.length),E=K("slice_offsets",12,m.dims.length),k=de("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},ch=e=>({batchDims:e.batch_dims,cacheKey:""})}),dh,hh,ph,fh,fw=re(()=>{be(),$e(),Ve(),ve(),dh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],a=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===o.dims[u]:s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,u)=>s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=V.normalizeAxis(t.gatherAxis,i),a=V.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(o,1,...r);let u=V.size(s),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:a},{type:12,data:o},{type:12,data:t.blockSize},...fe(...e.map((f,m)=>f.dims),s)],p=f=>{let m=K("data",e[0].dataType,e[0].dims.length),y=K("inputIndices",e[1].dataType,e[1].dims.length),w=K("scales",e[2].dataType,e[2].dims.length),b=e.length>3?K("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=de("output",l,s.length),M=[m,y,w];b&&M.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},ph=(e,t)=>{let n=e.inputs;dh(n,t),e.compute(hh(e.inputs,t))},fh=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),mh,gh,yh,wh,mw=re(()=>{be(),$e(),Ve(),ve(),mh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,a=e[1].dataType,s=V.normalizeAxis(t.axis,i),u=n[s],l=o.slice(0),c=V.size(l),d=K("input",r,i),p=K("indicesInput",a,o.length),f=de("output",r,l.length),m=[{type:12,data:c},{type:6,data:u},{type:12,data:s}];return m.push(...fe(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},yh=e=>Oe({axis:e.axis}),wh=(e,t)=>{let n=e.inputs;mh(n),e.compute(gh(e.inputs,t))}}),bh,_h,xh,$h,gw=re(()=>{be(),$e(),ve(),bh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},_h=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,a]=Au.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),c=Math.ceil(i/u),d=!0,p=V.size(s),f=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...fe(e[2].dims)),m.push("rank")),f.push(...fe(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=K("a",e[0].dataType,e[0].dims),I=K("b",e[1].dataType,e[1].dims),E=v.type.value,k=null,S=[v,I];e.length===3&&(k=K("c",e[2].dataType,e[2].dims.length),S.push(k));let R=de("output",e[0].dataType,s.length);S.push(R);let B=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(B).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${E}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=K("a",e[0].dataType,e[0].dims),M=K("b",e[1].dataType,e[1].dims),v=null,I=[x,M];e.length===3&&(v=K("c",e[2].dataType,e[2].dims.length),I.push(v));let E=de("output",e[0].dataType,s.length);I.push(E);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",R="";t.transA&&t.transB?(R=`
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
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let B=t.alpha===1?"":"value *= uniforms.alpha;";return`
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
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},xh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},$h=(e,t)=>{bh(e.inputs),e.compute(_h(e.inputs,t))}}),Bt,Kt,Sn,In,vh,Mh,Sh,Ih,Th,Eh,kh,Ch,Ah,Rh,yw=re(()=>{be(),$e(),Ve(),ve(),[Bt,Kt,Sn,In]=[0,1,2,3],vh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Mh=`
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
`,Sh=e=>`
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
`,Ih=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Th=e=>`
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
`,Eh=(e,t,n)=>`
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
`,kh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ch=(e,t)=>{let n=K("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=K("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Bt,Kt,Sn,In]=[0,3,1,2]);let a=de("output",e[0].dataType,o.length),s=n.type.value,u=V.size(o),l=[{type:12,data:u},...fe(e[0].dims,r,o)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${Mh}
  ${Sh(s)}
  ${Ih(t)}
  ${Th(t)}
  ${Eh(n,s,t)}

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

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Bt}], indices[${Sn}], indices[${In}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${kh(a,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=V.size(o);return{outputs:[{dims:o,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:c}},Ah=(e,t)=>{vh(e.inputs),e.compute(Ch(e.inputs,t))},Rh=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Oh,Nh,zo,zh,ar,Bh,Ph=re(()=>{be(),$e(),Ve(),eo(),ho(),ve(),on(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Oh=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),o=ot(e,3),a=ot(e,4),s=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=d,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&V.size(u.dims)&&V.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&V.size(u.dims)||l&&V.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&V.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(o&&V.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(a&&V.size(a.dims)>0){M=8;let k=a.dims;throw k.length===1?k[0]===c?M=1:k[0]===3*c+2&&(M=3):k.length===2&&k[0]===c&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,I=p;if(i&&V.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],v=!0}}let E=!1;if(a&&V.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&V.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:E,passPastInKv:v,qkvFormat:b}},Nh=e=>Oe({...e}),zo=Oe({perm:[0,2,1,3]}),zh=(e,t,n,r,i,o,a)=>{let s=[r,i,o],u=V.size(s),l=[{type:12,data:u},{type:12,data:a},{type:12,data:o}],c=d=>{let p=de("qkv_with_bias",t.dataType,s),f=K("qkv",t.dataType,s),m=K("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(f,m,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},ar=(e,t,n,r,i,o,a,s)=>{let u=o;if(a&&V.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=zh(e,o,a,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(pt(u,zo.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(pt(u,zo.perm),{inputs:[u],outputs:[-1]})[0]},Bh=(e,t)=>{let n=Oh(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),o=ot(e.inputs,2),a=ot(e.inputs,3),s=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),c=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&o&&i.dims.length===4&&o.dims.length===4,p=ar(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(d)return tr(e,p,i,o,s,void 0,l,c,u,n);if(!i||!o)throw new Error("key and value must be provided");let f=ar(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),m=ar(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,a,2*n.hiddenSize);tr(e,p,f,m,s,void 0,l,c,u,n)}}),Dh,Uh,Lh,Fh,Bo,Gh,Wh,qh=re(()=>{be(),$e(),Ve(),ve(),Dh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Uh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Oe({numOutputs:r,axis:t.axis,splitSizes:n})},Lh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${he("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Fh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Bo=(e,t)=>{let n=e[0].dims,r=V.size(n),i=e[0].dataType,o=V.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),s=K("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){d+=t.splitSizes[m],u[m]=d;let y=n.slice();y[o]=t.splitSizes[m],c.push(y),a[m]=de(`output${m}`,i,y.length),l.push({dims:c[m],dataType:e[0].dataType})}p.push({type:12,data:u},...fe(n,...c));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...a)}
  ${Lh(u.length)}
  ${Fh(a)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${he("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Gh=(e,t)=>{Dh(e.inputs);let n=e.inputs.length===1?t:Uh(e.inputs,t);e.compute(Bo(e.inputs,n),{inputs:[0]})},Wh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:r,splitSizes:n})}}),Vh,Lr,Hh,jh=re(()=>{be(),$e(),Ve(),ve(),Vh=(e,t)=>{let[n,r,i,o]=e,{numHeads:a,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!V.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=V.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/a;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Lr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,a=e[0].dims[0],s=V.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,c=e[2].dims[1],d=i===0?c*2:l/r,p=new Array(a,u,l/d,d-c),f=V.computeStrides(p),m=[{type:1,data:o},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=K("input",e[0].dataType,e[0].dims.length),x=K("position_ids",e[1].dataType,e[1].dims.length),M=K("cos_cache",e[2].dataType,e[2].dims.length),v=K("sin_cache",e[3].dataType,e[3].dims.length),I=de("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,v,I)}

        ${w.mainStart(Pn)}
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(p)/Pn)},programUniforms:m})}},Hh=(e,t)=>{Vh(e.inputs,t),e.compute(Lr(e.inputs,t))}}),Kh,Yh,Po,Xh,Qh,ww=re(()=>{Ve(),be(),ho(),Ph(),qh(),on(),jh(),ve(),Kh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);f&&(c=m*t.numHeads);let y=o&&o.dims.length!==0,w=a&&a.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=I.dims.reduce((k,S)=>k*S,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let k=0;k<I.dims.length;k++)if(I.dims[k]!==1&&I.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${I.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},Yh=Oe({perm:[0,2,1,3]}),Po=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(pt(r,Yh.perm),{inputs:[r],outputs:[-1]})[0]),r},Xh=(e,t,n,r)=>{let i=7,o=["type","type"],a=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=c=>{let d=K("seq_lens",n.dataType,n.dims),p=K("total_seq_lens",r.dataType,r.dims),f=de("pos_ids",i,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Qh=(e,t)=>{var v;let n=Kh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Oe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[p,f,m]=!i&&!o?e.compute(Bo([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let I=e.compute(Xh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],k=e.inputs[8],S=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[p,I,E,k],B=[-1];y=e.compute(Lr(R,S),{inputs:R,outputs:B})[0],R.splice(0,1,f);let Y=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Lr(R,Y),{inputs:R,outputs:B})[0]}let b=ar(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Po(e,t.doRotary?w:f,n),M=Po(e,m,n);tr(e,b,x,M,void 0,void 0,a,s,void 0,n,u,l)}}),Do,Zh,Jh,ep,bw=re(()=>{be(),$e(),on(),ve(),Do=(e,t,n,r,i,o,a,s)=>{let u=We(o),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*a,p=64;d===1&&(p=256);let f=[i,a,o/u],m=[i,a,2],y=["rank","type","type"],w=[];w.push(...fe(f,m));let b=x=>{let M=K("x",t.dataType,3,u),v=K("scale",n.dataType,n.dims),I=K("bias",r.dataType,r.dims),E=de("output",1,3,2),k=[M,v,I,E];return`
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

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Zh=(e,t,n)=>{let r=t[0].dims,i=r,o=2,a=r[0],s=r[1],u=V.sizeFromDimension(r,o),l=We(u),c=V.size(i)/l,d=Do(e,t[0],t[1],t[2],a,u,s,n.epsilon),p=[a,s,u/l],f=[a,s],m=["type","none"],y=w=>{let b=K("x",t[0].dataType,p.length,l),x=K("scale_shift",1,f.length,2),M=de("output",t[0].dataType,p.length,l),v=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...fe(p,f,p)]}),getShaderSource:y},{inputs:[t[0],d]})},Jh=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],a=r[r.length-1],s=V.sizeFromDimension(r,1)/a,u=We(a),l=V.size(i)/u,c=[{type:12,data:s},{type:12,data:Math.floor(a/u)}],d=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(pt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Do(e,m,t[1],t[2],o,s,a,n.epsilon),w=b=>{let x=Qe(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${S}))`;case 2:return`vec2<${x}>(${R}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${R}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=K("input",t[0].dataType,t[0].dims,u),E=de("output",t[0].dataType,i,u);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},ep=(e,t)=>{t.format==="NHWC"?Jh(e,e.inputs,t):Zh(e,e.inputs,t)}}),tp,np,rp,_w=re(()=>{be(),$e(),ve(),tp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},np=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],a=!r&&e[2],s=i,u=V.normalizeAxis(t.axis,i.length),l=V.sizeToDimension(i,u),c=V.sizeFromDimension(i,u),d=V.size(o.dims),p=a?V.size(a.dims):0;if(d!==c||a&&p!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=We(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];a&&y.push("type");let b=n>1,x=n>2,M=I=>{let E=Qe(e[0].dataType),k=[K("x",e[0].dataType,e[0].dims,m),K("scale",o.dataType,o.dims,m)];a&&k.push(K("bias",a.dataType,a.dims,m)),k.push(de("output",e[0].dataType,s,m)),b&&k.push(de("mean_data_output",1,f)),x&&k.push(de("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(S).declareVariables(...k)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${io("f32",m)};
    var mean_square_vector = ${io("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dn(E,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dn(E,m,"x[j + offset]")};
      let f32scale = ${Dn(E,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Dn(E,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},rp=(e,t)=>{tp(e.inputs),e.compute(np(e.inputs,t,e.outputCount))}}),ip,op,xw=re(()=>{$e(),_o(),Mo(),ip=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},op=e=>{ip(e.inputs);let t=Bn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(bo(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=V.size(e.inputs[0].dims.slice(0,-2)),a=V.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],c=[s,u];e.compute(Br(c,{activation:""},t,l),{inputs:c})}else e.compute(Br(e.inputs,{activation:""},t))}}}),ap,sp,up,lp,cp,$w=re(()=>{be(),$e(),Ve(),ve(),ap=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,a=e[1];if(!V.areEqual(a.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(V.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(V.size(u)!==l)throw new Error("zeroPoints input size error.")}},sp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=We(a),m=s.concat([i,a]),y=i>1&&a/f%2===0?2:1,w=V.size(m)/f/y,b=64,x=[],M=[u,i,o/d],v=V.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...fe(M)),x.push(...fe(v)),x.push(...fe(e[2].dims)),e.length===4&&x.push(...fe(V.convertShape(e[3].dims)));let I=[u,i,a/f];x.push(...fe(I));let E=k=>{let S=M.length,R=K("a",e[0].dataType,S,d),B=K("b",12,v.length,p),Y=K("scales",e[2].dataType,e[2].dims.length),G=[R,B,Y],q=e.length===4?K("zero_points",12,e[3].dims.length):void 0;q&&G.push(q);let N=I.length,F=de("output",e[0].dataType,N,f),X=Qe(e[0].dataType),Z=(()=>{switch(d){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${d}-component is not supported.`)}})(),le=Math.floor(32/t.bits),L=Math.floor(le/8),O=()=>{let U="";for(let P=0;P<L;P++){let j=P*t.bits*4,ie=j+t.bits;U+=`
          // reuse a data (pass ${P})
            var input_offset${P>0?P:""} = ${P===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${P>0?P:""}: ${Z};
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
            b_value_upper = unpack4xU8((b_value >> ${ie}u) & b_mask);`}
            b_quantized_values = ${Z}(${Array.from({length:4},(me,Te)=>`${X}(b_value_lower[${Te}]), ${X}(b_value_upper[${Te}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Z}(${Array.from({length:8},(me,Te)=>`(b_quantized_values[${Te}] - ${q?`zero_point${J}`:"zero_point"}) * scale${J}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${q?`zero_point${J}`:"zero_point"}`).join(",")})) * scale${J};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(J/f)}]${f>1?`[${J%f}]`:""} += ${Array.from({length:8/d},(me,Te)=>`${d===1?`a_data${P>0?P:""}[${Te}] * b_dequantized_values[${Te}]`:`dot(a_data${P>0?P:""}[${Te}], b_dequantized_values[${Te}])`}`).join(" + ")};
          `}return U},C=()=>{let U=`
            var col_index = col * ${f};
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
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let P=0;P<f*y;P++)U+=`
            let scale${P} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${P} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return U},z=()=>{let U=`col_index = col * ${f};`;for(let P=0;P<f*y;P++)U+=`
            let b${P}_data = ${B.getByIndices(`${B.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,U};return`
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
                ${O()}
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:E}},up=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,c=e[0].dataType,d=We(t.k),p=We(l),f=s.concat([i,a]),m=128,y=a%8===0?8:a%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/d,v=x/t.blockSize,I=V.size(f)/y,E=[],k=[u,i,o/d],S=V.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),E.push(...fe(k)),E.push(...fe(S)),E.push(...fe(e[2].dims)),e.length===4&&E.push(...fe(V.convertShape(e[3].dims)));let R=[u,i,a];E.push(...fe(R));let B=Y=>{let G=k.length,q=K("a",e[0].dataType,G,d),N=K("b",12,S.length,p),F=K("scales",e[2].dataType,e[2].dims.length),X=[q,N,F],Z=e.length===4?K("zero_points",12,e[3].dims.length):void 0;Z&&X.push(Z);let le=R.length,L=de("output",e[0].dataType,le),O=Qe(e[0].dataType),C=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${O}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${O}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${O}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${O}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${q.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${Y.declareVariables(...X,L)}
        ${Y.mainStart([w,y,1])}
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
                sub_a[a_offset] = ${q.getByIndices(`${q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${q.type.value}(0);
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
            let zero_point = ${O}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${O}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${N.getByIndices(`${N.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let z=Math.floor(b/8),U="";for(let P=0;P<z;P++){let j=P*t.bits*4,ie=j+t.bits;U+=`
              ${C()}
              {${t.bits===2?`
                let half_word = b_value >> ${P*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ie}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${O}>(${Array.from({length:4},(J,me)=>`${O}(b_value_lower[${me}]), ${O}(b_value_upper[${me}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${O}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(J,me)=>`${`dot(a_data${me}, b_dequantized_values[${me}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:I},programUniforms:E}),getShaderSource:B}},lp=(e,t)=>{ap(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(up(e.inputs,t)):e.compute(sp(e.inputs,t))},cp=e=>Oe(e)}),dp,hp,pp,fp,mp,gp,yp,wp,bp,vw=re(()=>{be(),$e(),ve(),dp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},hp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${he("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${he("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${he("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},pp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${he("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${he("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${he("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${he("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},fp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${he("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${he("uniforms.x_shape",i,t)})) {
                  k = i32(${he("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${he("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},mp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${he("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${he("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${he("uniforms.x_shape",i,t)})) {
                  k -= i32(${he("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${he("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},gp=(e,t,n)=>{switch(n.mode){case 0:return hp(e,t,n.pads.length);case 1:return pp(e,t,n.pads.length);case 2:return fp(e,t,n.pads.length);case 3:return mp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},yp=(e,t)=>{let n=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=V.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...fe(e[0].dims,n));let s=["rank"],u=l=>{let c=de("output",e[0].dataType,n.length),d=K("x",e[0].dataType,r.length),p=d.type.value,f=gp(c,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(n)/64)},programUniforms:o}),getShaderSource:u}},wp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)o[Number(s[u])]=Number(n[u]),o[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>o[Number(u)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:t.mode,value:r,pads:a}}else return t},bp=(e,t)=>{dp(e.inputs);let n=wp(e.inputs,t);e.compute(yp(e.inputs,n),{inputs:[0]})}}),sr,Uo,Lo,Fo,Go,_p,xp,Wo,qo,$p,vp,Vo,Mp,Sp,Ho,Ip,Tp,Ep,kp,Mw=re(()=>{mt(),be(),$e(),ve(),sr=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Uo=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();kr.adjustPoolAttributes(n,i,a,s,u,l);let c=kr.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),d=Object.assign({},t);o?Object.assign(d,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey});let p=c.slice();return p.push(p.splice(1,1)[0]),[d,r?p:c]},Lo=(e,t)=>{let n=t.format==="NHWC",r=V.size(e),i=V.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);o.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),o.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=V.computeStrides(t.kernelShape);o.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[o,a,!!u,!1,!1]}},Fo=(e,t,n,r,i,o,a,s,u,l,c,d)=>{let p=i.format==="NHWC",f=t.type.value,m=de("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(c?y=`
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
                  offsets[j] = offset / ${he("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${he("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${he("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${he("uniforms.pads","j - 2u",w)};
                  ${b}
              }
              ${a}

              output[global_idx] = value;
            }`}},Go=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,_p=e=>`${Go(e)};${e.countIncludePad}`,xp=e=>`${Go(e)};${e.storageOrder};${e.dilations}`,Wo=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),qo=(e,t,n,r)=>{let[i,o]=Uo(t,r,n),a=K("x",t.dataType,t.dims.length),s=a.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[c,d,p,f,m]=Lo(o,i);c.push(...fe(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(o)/64)},programUniforms:c}),getShaderSource:w=>Fo(w,a,t.dims.length,o.length,i,u,l,0,d,p,f,m)}},$p=e=>{let t=e.count_include_pad!==0,n=Wo(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:_p(r)}},vp=(e,t)=>{sr(e.inputs),e.compute(qo("AveragePool",e.inputs[0],!1,t))},Vo={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Mp=e=>{let t=e.format;return{format:t,...Vo,cacheKey:t}},Sp=(e,t)=>{sr(e.inputs),e.compute(qo("GlobalAveragePool",e.inputs[0],!0,t))},Ho=(e,t,n,r)=>{let[i,o]=Uo(t,r,n),a=`
      value = max(x_val, value);
    `,s="",u=K("x",t.dataType,t.dims.length),l=["rank"],[c,d,p,f,m]=Lo(o,i);return c.push(...fe(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(o)/64)},programUniforms:c}),getShaderSource:y=>Fo(y,u,t.dims.length,o.length,i,a,s,t.dataType===10?-65504:-1e5,d,p,f,m)}},Ip=(e,t)=>{sr(e.inputs),e.compute(Ho("MaxPool",e.inputs[0],!1,t))},Tp=e=>{let t=e.storage_order,n=e.dilations,r=Wo(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:xp(i)}},Ep=e=>{let t=e.format;return{format:t,...Vo,cacheKey:t}},kp=(e,t)=>{sr(e.inputs),e.compute(Ho("GlobalMaxPool",e.inputs[0],!0,t))}}),Cp,Ap,Rp,Op,Sw=re(()=>{be(),$e(),Ve(),ve(),Cp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ap=(e,t)=>{let n=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,a=e[1].dataType,s=V.size(o),u=r===3||r===2,l=u?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(V.size(d.dims)/4)]:d.dims:void 0,f=c.length===0||c.length===1&&c[0]===1,m=f===!1&&c.length===1,y=We(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=K("input",u?12:r,l.length,x),v=K("scale",a,c.length),I=d?K("zero_point",u?12:r,p.length):void 0,E=de("output",a,o.length,b),k=[M,v];I&&k.push(I);let S=[l,c];d&&S.push(p);let R=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...fe(...S,o)],B=Y=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(G).declareVariables(...k,E)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:B,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:R})}},Rp=(e,t)=>{Cp(e.inputs,t),e.compute(Ap(e.inputs,t))},Op=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),Np,zp,Bp,Iw=re(()=>{mt(),be(),ve(),Np=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},zp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],a=i,s=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...fe(o)],u=l=>{let c=de("output",r,o.length),d=c.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},Bp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&Np(t,n,r),e.compute(zp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Pp,Dp,Up,Lp,Tw=re(()=>{be(),$e(),Ve(),ve(),Pp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Dp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,a=Math.ceil(V.sizeToDimension(r,r.length-1)/o),s=r[r.length-1],u=V.sizeFromDimension(n,s),l=[{type:12,data:a},{type:12,data:s},{type:12,data:u},...fe(e[1].dims,e[2].dims,i)],c=d=>{let p=K("indices",e[1].dataType,e[1].dims.length),f=K("updates",e[2].dataType,e[2].dims.length,o),m=t.reduction!=="none"&&t.reduction!==""?Hu("output",e[0].dataType,i.length):de("output",e[0].dataType,i.length,o);return`
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
    ${Pp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c}},Up=e=>Oe({reduction:e.reduction}),Lp=(e,t)=>{e.compute(Dp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Fp,Gp,Wp,jo,qp,Vp,Hp,jp,Kp,Yp,Xp,Qp,Ko,Zp,Jp,ef,tf,nf,rf,of,Ew=re(()=>{be(),$e(),Ve(),ve(),Fp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Gp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},Wp=(e,t,n,r,i,o)=>{let[a,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>o.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Fp(r,t),t.axes.length>0&&Gp(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},jo=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,qp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${jo("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${jo("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Vp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Hp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,a)=>{r[o]=i[a],r[a+n]=i[t.length+a]}),r):i},jp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,a)=>i[o]=n[a])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,a)=>Math.round(o*t[a]))}return i},Kp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,a)=>i[a]=Math.round(o*t[a]))),i},Yp=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${he("uniforms.scales","i",r)};
        var roi_low = ${he("uniforms.roi","i",i)};
        var roi_hi = ${he("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${he("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Xp=(e,t,n,r,i,o,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${he("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${he("uniforms.roi","i",o)};
          var roi_hi = ${he("uniforms.roi",`i + ${n.length}`,o)};
          var input_shape_i = ${he("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",r.length)};
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
    }`,Qp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${he("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ko=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Zp=(e,t,n,r,i)=>{let[o,a,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ko(e,u,o,2)}
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
    }`},Jp=(e,t,n,r,i,o,a,s,u,l)=>{let c=n.length===2,[d,p]=c?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===d?"row":"col";return`
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
    `},ef=(e,t,n,r,i)=>{let[o,a,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ko(e,l,o,3)}
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
    }`},tf=(e,t,n,r,i,o)=>{let a=e.dims,s=Hp(o,t.axes,a.length),u=jp(a,r,i,t.axes),l=r.slice();r.length===0&&(l=a.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Kp(a,l,t)));let c=de("output",e.dataType,u.length),d=K("input",e.dataType,a.length),p=V.size(u),f=a.length===u.length&&a.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=x=>`
      ${f?"":`
      ${qp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Qp(d,a)};
              ${Vp(t.nearestMode,n,w)};
              ${Xp(d,c,a,u,l.length,s.length,m)};
              `;case"linear":return`
              ${Yp(c,a,u,l.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Zp(d,c,a,m,y)}`;if(a.length===3||a.length===5)return`${ef(d,c,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Jp(d,c,a,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...fe(a,u)]})}},nf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},rf=(e,t)=>{let n=[],r=[],i=[],o=nf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Wp(e.inputs,t,o,n,r,i),e.compute(tf(e.inputs[0],t,o,n,r,i),{inputs:[0]})},of=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,a=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),af,sf,uf,kw=re(()=>{be(),$e(),ve(),af=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},sf=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,a=V.size(o),s=o,u=a,l=o.slice(-1)[0],c=r?o.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=We(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[K("x",e[0].dataType,e[0].dims,b),K("skip",e[1].dataType,e[1].dims,b),K("gamma",e[2].dataType,e[2].dims,b)];d&&k.push(K("beta",e[3].dataType,e[3].dims,b)),p&&k.push(K("bias",e[4].dataType,e[4].dims,b)),k.push(de("output",e[0].dataType,s,b)),f&&k.push(de("mean_output",1,c)),m&&k.push(de("inv_std_output",1,c)),y&&k.push(de("input_skip_bias_sum",e[0].dataType,s,b));let S=Qe(e[0].dataType),R=Qe(1,b);return`

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
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:c,dataType:1}),n>2&&v.push({dims:c,dataType:1}),n>3&&v.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},uf=(e,t)=>{af(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(sf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),lf,ur,cf,Yo,df,hf,pf,ff,Cw=re(()=>{be(),$e(),Ve(),ve(),lf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ur=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},cf=(e,t)=>{if(e.length>1){let n=ur(e,1),r=ur(e,2),i=ur(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Oe({starts:n,ends:r,axes:i})}else return t},Yo=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},df=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${he("uniforms.input_shape","i",n.length)};
            let steps_i = ${he("uniforms.steps","i",n.length)};
            let signs_i = ${he("uniforms.signs","i",n.length)};
            let starts_i = ${he("uniforms.starts","i",n.length)};
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
      }`,hf=(e,t)=>{let n=e[0].dims,r=V.size(n),i=t.axes.length>0?V.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=ur(e,4);o.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=t.starts.map((b,x)=>Yo(b,x,n,i,o)),s=t.ends.map((b,x)=>Yo(b,x,n,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(a.splice(b,0,0),s.splice(b,0,n[b]),o.splice(b,0,1));let u=o.map(b=>Math.sign(b));o.forEach((b,x,M)=>{if(b<0){let v=(s[x]-a[x])/b,I=a[x],E=I+v*o[x];a[x]=E,s[x]=I,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-a[b])/o[b])});let c={dims:l,dataType:e[0].dataType},d=de("output",e[0].dataType,l.length),p=K("input",e[0].dataType,e[0].dims.length),f=V.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:o},...fe(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,d)}
        ${df(p,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},pf=(e,t)=>{lf(e.inputs,t);let n=cf(e.inputs,t);e.compute(hf(e.inputs,n),{inputs:[0]})},ff=e=>{let t=e.starts,n=e.ends,r=e.axes;return Oe({starts:t,ends:n,axes:r})}}),mf,gf,yf,wf,Aw=re(()=>{be(),$e(),Ve(),on(),ve(),mf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},gf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=V.size(r),o=r.length,a=V.normalizeAxis(t.axis,o),s=a<r.length-1,u,l=[];s?(l=Array.from({length:o},(k,S)=>S),l[a]=o-1,l[o-1]=a,u=e.compute(pt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[o-1],p=i/d,f=We(d),m=d/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=K("x",u.dataType,u.dims,f),x=de("result",u.dataType,u.dims,f),M=b.type.value,v=Qe(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,I=k=>`
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
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(pt(E,l),{inputs:[E]})},yf=(e,t)=>{mf(e.inputs),gf(e,t)},wf=e=>Oe({axis:e.axis})}),Xo,bf,_f,xf,$f,Rw=re(()=>{be(),$e(),ve(),Xo=e=>Array.from(e.getBigInt64Array(),Number),bf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Xo(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},_f=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},xf=(e,t)=>{let n=e[0].dims,r=t??Xo(e[1]),i=_f(n,r),o=V.size(i),a=e[0].dataType,s=K("input",a,n.length),u=de("output",a,i.length),l=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...fe(e[0].dims,i)]}),getShaderSource:l}},$f=e=>{bf(e.inputs),e.compute(xf(e.inputs),{inputs:[0]})}}),vf,Mf,Sf,Ow=re(()=>{be(),$e(),ve(),vf=(e,t,n,r,i)=>{let o=de("output_data",i,n.length,4),a=K("a_data",t[1].dataType,t[1].dims.length,4),s=K("b_data",t[2].dataType,t[2].dims.length,4),u=K("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,p,f)=>`select(${p}, ${d}, ${f})`;if(!r)l=o.setByOffset("global_idx",c(a.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
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
      }`},Mf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(V.areEqual(t,n)&&V.areEqual(n,r)),a=t,s=V.size(t);if(o){let l=Bn.calcShape(Bn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,s=V.size(a)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>vf(l,e,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...fe(r,t,n,a)]})}},Sf=e=>{e.compute(Mf(e.inputs))}}),If,Nw=re(()=>{Ky(),ho(),Yy(),Xy(),Qy(),Zy(),Jy(),iw(),aw(),sw(),uw(),lw(),cw(),dw(),hw(),pw(),fw(),mw(),gw(),yw(),ww(),bw(),_w(),xw(),$w(),Ph(),vw(),Mw(),Sw(),Iw(),Tw(),uo(),Ew(),jh(),kw(),Cw(),Aw(),qh(),Rw(),on(),go(),Ow(),If=new Map([["Abs",[oc]],["Acos",[ac]],["Acosh",[sc]],["Add",[Kc]],["ArgMax",[ql,co]],["ArgMin",[Wl,co]],["Asin",[uc]],["Asinh",[lc]],["Atan",[cc]],["Atanh",[dc]],["Attention",[Xl]],["AveragePool",[vp,$p]],["BatchNormalization",[ec]],["BiasAdd",[rc]],["BiasSplitGelu",[Vc]],["Cast",[pc,hc]],["Ceil",[gc]],["Clip",[mc]],["Concat",[ud,ld]],["Conv",[ko,To]],["ConvTranspose",[Bd,Od]],["Cos",[yc]],["Cosh",[wc]],["CumSum",[Dd,Ud]],["DepthToSpace",[Wd,qd]],["DequantizeLinear",[Rp,Op]],["Div",[Yc]],["Einsum",[Xd,Qd]],["Elu",[bc,nr]],["Equal",[Xc]],["Erf",[_c]],["Exp",[xc]],["Expand",[th]],["FastGelu",[rh]],["Floor",[$c]],["FusedConv",[ko,To]],["Gather",[sh,ah]],["GatherElements",[wh,yh]],["GatherBlockQuantized",[ph,fh]],["GatherND",[lh,ch]],["Gelu",[vc]],["Gemm",[$h,xh]],["GlobalAveragePool",[Sp,Mp]],["GlobalMaxPool",[kp,Ep]],["Greater",[ed]],["GreaterOrEqual",[nd]],["GridSample",[Ah,Rh]],["GroupQueryAttention",[Qh]],["HardSigmoid",[Ac,Cc]],["InstanceNormalization",[ep]],["LayerNormalization",[rp]],["LeakyRelu",[Mc,nr]],["Less",[td]],["LessOrEqual",[rd]],["Log",[Uc]],["MatMul",[op]],["MatMulNBits",[lp,cp]],["MaxPool",[Ip,Tp]],["Mul",[Qc]],["MultiHeadAttention",[Bh,Nh]],["Neg",[Ic]],["Not",[Sc]],["Pad",[bp]],["Pow",[Zc]],["QuickGelu",[Gc,nr]],["Range",[Bp]],["Reciprocal",[Tc]],["ReduceMin",[Dl]],["ReduceMean",[Ol]],["ReduceMax",[Pl]],["ReduceSum",[Ll]],["ReduceProd",[Ul]],["ReduceL1",[Nl]],["ReduceL2",[zl]],["ReduceLogSum",[Gl]],["ReduceLogSumExp",[Bl]],["ReduceSumSquare",[Fl]],["Relu",[Ec]],["Resize",[rf,of]],["RotaryEmbedding",[Hh]],["ScatterND",[Lp,Up]],["Sigmoid",[kc]],["Sin",[Rc]],["Sinh",[Oc]],["Slice",[pf,ff]],["SkipLayerNormalization",[uf]],["Split",[Gh,Wh]],["Sqrt",[Nc]],["Softmax",[yf,wf]],["Sub",[Jc]],["Tan",[zc]],["Tanh",[Bc]],["ThresholdedRelu",[Dc,nr]],["Tile",[$f]],["Transpose",[el,tl]],["Where",[Sf]]])}),Tf,zw=re(()=>{mt(),jt(),ve(),Tf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){zt(e.programInfo.name);let o=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),$t(e.programInfo.name)}dispose(){}build(e,t){zt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Ku(t,this.backend.device.limits),o=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,s=n.createShaderModule({code:a,label:e.name});Ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return $t(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,a=Math.ceil(Math.sqrt(o));if(a>i){if(a=Math.ceil(Math.cbrt(o)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Ef={};On(Ef,{WebGpuBackend:()=>Rf});var kf,Cf,Af,Rf,Bw=re(()=>{mt(),be(),jt(),Nu(),Hy(),Nw(),zw(),kf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Cf=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${kf(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Af=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Rf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,a=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new Af(a),this.gpuDataManager=qu(this),this.programManager=new Tf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Vi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;zt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,c=o.programName,d=o.inputTensorViews,p=o.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:Ht(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Ht(b.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";d.forEach((M,v)=>{b+=`input[${v}]: [${M.dims}] | ${Ht(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${Ht(M.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}vr("GPU",`${c}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),$t()}run(e,t,n,r,i,o){zt(e.name);let a=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);a.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?s.map((x,M)=>M):n;if(c.length!==s.length)throw new Error(`Output size ${c.length} must be equal to ${s.length}.`);let d=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=o)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let M=c[x]===-1,v=c[x]===-2,I=M||v?i(s[x].dataType,s[x].dims):r(c[x],s[x].dataType,s[x].dims);if(d.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(M&&this.temporaryData.push(E),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(E)}p.push(E)}if(a.length!==t.length||p.length!==d.length){if(p.length===0)return $t(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let R=k.type===10?2:4,B,Y;k.type===10?(Y=S.length>4?16:S.length>2?8:S.length*R,B=S.length>4?16:R*S.length):(Y=S.length<=2?S.length*R:16,B=16),x=Math.ceil(x/Y)*Y,M.push(x);let G=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/G)*B:S.length*R});let v=16;x=Math.ceil(x/v)*v;let I=new ArrayBuffer(x);l.forEach((k,S)=>{let R=M[S],B=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(I,R,B.length).set(B);else if(k.type===12)new Uint32Array(I,R,B.length).set(B);else if(k.type===10)new Uint16Array(I,R,B.length).set(B);else if(k.type===1)new Float32Array(I,R,B.length).set(B);else throw new Error(`Unsupported uniform type: ${Ht(k.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,x),this.gpuDataManager.release(E.id),f={offset:0,size:x,buffer:E.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Cf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ce("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,I=typeof M.data=="number"?1:M.data.length,[E,k]=b.uniformVariablesInfo[x];if(v!==E||I!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${k}, got type ${v} with size ${I} in program "${b.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,a,p,m,f),$t(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=If.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,a=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ro(this,e,t);return Hi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Of={};On(Of,{init:()=>zf});var Fr,Nf,zf,Pw=re(()=>{be(),jt(),$e(),Vy(),Fr=class $y{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(V.size(t)!==V.size(this.dims))throw new Error("Invalid new shape");return new $y(this.module,this.dataType,this.data,t)}},Nf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let a=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let s=[];for(let u=0;u<a;u++){let l=Number(e.getValue(r*i++,o)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,o)),p=[];for(let f=0;f<d;f++)p.push(Number(e.getValue(r*i++,o)));s.push(new Fr(e,l,c,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Fr(this.module,u,this.output(s,l),l),o=(s,u)=>{let l=_n(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Fr(this.module,s,c,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(o+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},zf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(Bw(),Yn(Ef)).WebGpuBackend,a=new o;await a.initialize(n,r),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,u,l,c=!1)=>{if(c)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(s),Number(u));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));a.upload(Number(u),d)}},async(s,u,l)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await a.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>a.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>a.releaseKernel(s),(s,u,l,c)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new Nf(t,a,Number(u));return a.computeKernel(Number(s),d,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new Lu(n);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,u,l,c)=>o.ensureTensor(a,s,u,l,c),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!n.trace])}}}),Bf,Qo,Zo,an,Pf,Jo,Gr,ea,ta,na,ra,ia,oa,Df=re(()=>{mt(),Gy(),Wy(),be(),yn(),Li(),Mu(),Bf=(e,t)=>{De()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},Qo=async e=>{Bf(e.wasm.numThreads,Er(e.logLevel))},Zo=async(e,t)=>{var r,i;(i=(r=De()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(Pw(),Yn(Of)).init;t==="webgpu"&&await o("webgpu",De(),e,n),t==="webnn"&&await o("webnn",De(),e)}},an=new Map,Pf=e=>{let t=De(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ne("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},Jo=(e,t)=>{let n=De(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,a=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,a,a+o)!==0&&Ne("Can't get session input/output metadata.");let s=Number(n.getValue(a,"*"));i=Number(n.getValue(a+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*o,"*"));c.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*o,"*")))}return[s,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Gr=e=>{let t=De(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ea=async(e,t)=>{var d,p,f,m;let n,r,i=De();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Gr(e);let o=0,a=0,s=0,u=[],l=[],c=[];try{if([a,u]=await vu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let R of t.externalData){let B=typeof R=="string"?R:R.path;S.push(qi(typeof R=="string"?R:R.data).then(Y=>{i.mountExternalData(B,Y)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let R=S,B=R==null?void 0:R.context,Y=R==null?void 0:R.gpuDevice,G=R==null?void 0:R.deviceType,q=R==null?void 0:R.powerPreference;B?i.currentContext=B:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:q})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,a),(d=i.webgpuOnCreateSession)==null||d.call(i,o),o===0&&Ne("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Pf(o),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],I=[],E=[];for(let S=0;S<y;S++){let[R,B,Y]=Jo(o,S);R===0&&Ne("Can't get an input name."),l.push(R);let G=i.UTF8ToString(R);x.push(G),v.push(B===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Ht(B),shape:Y})}for(let S=0;S<w;S++){let[R,B,Y]=Jo(o,S+y);R===0&&Ne("Can't get an output name."),c.push(R);let G=i.UTF8ToString(R);M.push(G),I.push(B===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Ht(B),shape:Y});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let q=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[G])??"cpu",N=i.webnnIsGraphOutput;if(q==="cpu"&&N&&N(o,G)){E.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(b&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(q)}}let k=null;return E.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&Ne("Can't create IO binding."),k={handle:s,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Wi(S))}),an.set(o,[o,l,c,k,b,!1]),[o,x,M,v,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ne("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&Ne("Can't release session."),y}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Ne("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},ta=e=>{var u,l,c;let t=De(),n=an.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,a,s]=n;a&&(s&&t._OrtClearBoundOutputs(a.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Ne("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&Ne("Can't release session."),an.delete(e)},na=async(e,t,n,r,i,o,a=!1)=>{if(!e){t.push(0);return}let s=De(),u=s.PTR_SIZE,l=e[0],c=e[1],d=e[3],p=d,f,m;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;m=_n(bn(l),c);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,o,b,m)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;m=_n(bn(l),c);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,bn(l),c)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,vt(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=s.UTF8ToString(i);if(x(r,v)||M(r,v)){let I=bn(l);m=_n(I,c),p="ml-tensor";let E=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!E||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await E(r,I,c);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(bn(l),f,m,w,c.length,Wi(p));b===0&&Ne(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(b)}finally{s.stackRestore(y)}},ra=async(e,t,n,r,i,o)=>{var G,q,N,F;let a=De(),s=a.PTR_SIZE,u=an.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],v=[],I=[],E=[],k=a.stackSave(),S=a.stackAlloc(y*s),R=a.stackAlloc(y*s),B=a.stackAlloc(w*s),Y=a.stackAlloc(w*s);try{[b,x]=wu(o),mn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await na(n[L],M,I,e,c[t[L]],t[L],f);for(let L=0;L<w;L++)await na(i[L],v,I,e,d[r[L]],y+r[L],f);gn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)a.setValue(S+L*s,M[L],"*"),a.setValue(R+L*s,c[t[L]],"*");for(let L=0;L<w;L++)a.setValue(B+L*s,v[L],"*"),a.setValue(Y+L*s,d[r[L]],"*");if(p&&!m){let{handle:L,outputPreferredLocations:O,outputPreferredLocationsEncoded:C}=p;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);mn("wasm bindInputsOutputs");for(let z=0;z<y;z++){let U=t[z];await a._OrtBindInput(L,c[U],M[z])!==0&&Ne(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let U=r[z];(G=i[z])!=null&&G[3]?(E.push(v[z]),a._OrtBindOutput(L,d[U],v[z],0)!==0&&Ne(`Can't bind pre-allocated output[${z}] for session=${e}.`)):a._OrtBindOutput(L,d[U],0,C[U])!==0&&Ne(`Can't bind output[${z}] to ${O[z]} for session=${e}.`)}gn("wasm bindInputsOutputs"),an.set(e,[l,c,d,p,f,!0])}(q=a.jsepOnRunStart)==null||q.call(a,l),(N=a.webnnOnRunStart)==null||N.call(a,l);let X;p?X=await a._OrtRunWithBinding(l,p.handle,w,B,b):X=await a._OrtRun(l,R,S,y,Y,w,B,b),X!==0&&Ne("failed to call OrtRun().");let Z=[],le=[];mn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let O=Number(a.getValue(B+L*s,"*"));if(O===v[L]||E.includes(v[L])){Z.push(i[L]),O!==v[L]&&a._OrtReleaseTensor(O)!==0&&Ne("Can't release tensor.");continue}let C=a.stackSave(),z=a.stackAlloc(4*s),U=!1,P,j=0;try{a._OrtGetTensorData(O,z,z+s,z+2*s,z+3*s)!==0&&Ne(`Can't access output tensor data on index ${L}.`);let ie=s===4?"i32":"i64",J=Number(a.getValue(z,ie));j=a.getValue(z+s,"*");let me=a.getValue(z+s*2,"*"),Te=Number(a.getValue(z+s*3,ie)),W=[];for(let oe=0;oe<Te;oe++)W.push(Number(a.getValue(me+oe*s,ie)));a._OrtFree(me)!==0&&Ne("Can't free memory for tensor dims.");let ee=W.reduce((oe,ae)=>oe*ae,1);P=Ht(J);let ne=p==null?void 0:p.outputPreferredLocations[r[L]];if(P==="string"){if(ne==="gpu-buffer"||ne==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let oe=[];for(let ae=0;ae<ee;ae++){let xe=a.getValue(j+ae*s,"*"),_e=a.getValue(j+(ae+1)*s,"*"),Q=ae===ee-1?void 0:_e-xe;oe.push(a.UTF8ToString(xe,Q))}Z.push([P,W,oe,"cpu"])}else if(ne==="gpu-buffer"&&ee>0){let oe=a.jsepGetBuffer;if(!oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ae=oe(j),xe=_n(J,ee);if(xe===void 0||!Fi(P))throw new Error(`Unsupported data type: ${P}`);U=!0,Z.push([P,W,{gpuBuffer:ae,download:a.jsepCreateDownloader(ae,xe,P),dispose:()=>{a._OrtReleaseTensor(O)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(ne==="ml-tensor"&&ee>0){let oe=a.webnnEnsureTensor,ae=a.webnnIsGraphInputOutputTypeSupported;if(!oe||!ae)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_n(J,ee)===void 0||!Gi(P))throw new Error(`Unsupported data type: ${P}`);if(!ae(e,P,!1))throw new Error(`preferredLocation "ml-tensor" for ${P} output is not supported by current WebNN Context.`);let xe=await oe(e,j,J,W,!1);U=!0,Z.push([P,W,{mlTensor:xe,download:a.webnnCreateMLTensorDownloader(j,P),dispose:()=>{a.webnnReleaseTensorId(j),a._OrtReleaseTensor(O)}},"ml-tensor"])}else if(ne==="ml-tensor-cpu-output"&&ee>0){let oe=a.webnnCreateMLTensorDownloader(j,P)(),ae=Z.length;U=!0,le.push((async()=>{let xe=[ae,await oe];return a.webnnReleaseTensorId(j),a._OrtReleaseTensor(O),xe})()),Z.push([P,W,[],"cpu"])}else{let oe=Tr(P),ae=new oe(ee);new Uint8Array(ae.buffer,ae.byteOffset,ae.byteLength).set(a.HEAPU8.subarray(j,j+ae.byteLength)),Z.push([P,W,ae,"cpu"])}}finally{a.stackRestore(C),P==="string"&&j&&a._free(j),U||a._OrtReleaseTensor(O)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&Ne("Can't clear bound outputs."),an.set(e,[l,c,d,p,f,!1]));for(let[L,O]of await Promise.all(le))Z[L][2]=O;return gn("wasm ProcessOutputTensor"),Z}finally{(F=a.webnnOnRunEnd)==null||F.call(a,l),a.stackRestore(k),M.forEach(X=>a._OrtReleaseTensor(X)),v.forEach(X=>a._OrtReleaseTensor(X)),I.forEach(X=>a._free(X)),b!==0&&a._OrtReleaseRunOptions(b),x.forEach(X=>a._free(X))}},ia=e=>{let t=De(),n=an.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ne("Can't get an profile file name."),t._OrtFree(i)},oa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),sn,ct,Un,lr,cr,Wr,aa,qr,Tn,En,Uf,Lf,Ff,Gf,Wf,qf,Vf,Hf,jf=re(()=>{mt(),Df(),yn(),Bi(),sn=()=>!!ze.wasm.proxy&&typeof document<"u",Un=!1,lr=!1,cr=!1,qr=new Map,Tn=(e,t)=>{let n=qr.get(e);n?n.push(t):qr.set(e,[t])},En=()=>{if(Un||!lr||cr||!ct)throw new Error("worker not ready")},Uf=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(cr=!0,aa[1](e.data.err)):(lr=!0,aa[0]()),Wr&&(URL.revokeObjectURL(Wr),Wr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Lf=async()=>{if(!lr){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,sn())return new Promise((e,t)=>{ct==null||ct.terminate(),pu().then(([n,r])=>{try{ct=r,ct.onerror=o=>t(o),ct.onmessage=Uf,aa=[e,t];let i={type:"init-wasm",in:ze};!i.in.wasm.wasmPaths&&(n||Ri)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ct.postMessage(i),Wr=n}catch(i){t(i)}},t)});try{await Ui(ze.wasm),await Qo(ze),lr=!0}catch(e){throw cr=!0,e}finally{Un=!1}}},Ff=async e=>{if(sn())return En(),new Promise((t,n)=>{Tn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ze}};ct.postMessage(r)});await Zo(ze,e)},Gf=async e=>sn()?(En(),new Promise((t,n)=>{Tn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ct.postMessage(r,[e.buffer])})):Gr(e),Wf=async(e,t)=>{if(sn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return En(),new Promise((n,r)=>{Tn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),ct.postMessage(i,o)})}else return ea(e,t)},qf=async e=>{if(sn())return En(),new Promise((t,n)=>{Tn("release",[t,n]);let r={type:"release",in:e};ct.postMessage(r)});ta(e)},Vf=async(e,t,n,r,i,o)=>{if(sn()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return En(),new Promise((a,s)=>{Tn("run",[a,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};ct.postMessage(l,oa(u))})}else return ra(e,t,n,r,i,o)},Hf=async e=>{if(sn())return En(),new Promise((t,n)=>{Tn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ct.postMessage(r)});ia(e)}}),sa,Kf,Yf,Dw=re(()=>{mt(),jf(),be(),Ei(),Mu(),sa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Kf=e=>{switch(e[3]){case"cpu":return new Be(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Be.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Gi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Be.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Yf=class{async fetchModelAndCopyToWasmMemory(e){return Gf(await qi(e))}async loadModel(e,t){zt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wf(n,t),$t()}async dispose(){return qf(this.sessionId)}async run(e,t,n){zt();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],f=d[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let o=[],a=[];Object.entries(t).forEach(d=>{let p=d[0],f=d[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);o.push(f),a.push(m)});let s=r.map((d,p)=>sa(d,()=>`input "${this.inputNames[i[p]]}"`)),u=o.map((d,p)=>d?sa(d,()=>`output "${this.outputNames[a[p]]}"`):null),l=await Vf(this.sessionId,i,s,a,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[a[d]]]=o[d]??Kf(l[d]);return $t(),c}startProfiling(){}endProfiling(){Hf(this.sessionId)}}}),Xf={};On(Xf,{OnnxruntimeWebAssemblyBackend:()=>la,initializeFlags:()=>ua,wasmBackend:()=>Qf});var ua,la,Qf,Uw=re(()=>{mt(),jf(),Dw(),ua=()=>{(typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0);let e=ze.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ze.wasm.simd=!1),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let t=typeof navigator>"u"?My("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},la=class{async init(e){ua(),await Lf(),await Ff(e)}async createInferenceSessionHandler(e,t){let n=new Yf;return await n.loadModel(e,t),n}},Qf=new la});mt(),mt(),mt();var Lw="1.27.0";{let e=(Uw(),Yn(Xf)).wasmBackend;Nn("webgpu",e,5),Nn("webnn",e,5),Nn("cpu",e,10),Nn("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:Lw,enumerable:!0});/**
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
 */const Vr=new Map;function Zf(e,t){const n=Vr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Vr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{Zf(e,performance.now()-n)}}async function et(e,t){const n=performance.now();try{return await t()}finally{Zf(e,performance.now()-n)}}function Fw(){return[...Vr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Gw(){Vr.clear()}function Ww(e,t,n,r){const i=t*n,o=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return o.set(e),o;for(let a=0;a<i;a+=1)o[a*4]=e[a*r],o[a*4+1]=e[a*r+1],o[a*4+2]=e[a*r+2],o[a*4+3]=255;return o}function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ln(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Jf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,s)=>a-s),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const qw=114;function Vw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),a=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-a)/2),resizedWidth:o,resizedHeight:a}}function ca(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),v=(p*r+b)*o,I=(p*r+x)*o,E=(f*r+b)*o,k=(f*r+x)*o,S=(c*t+y)*3;for(let R=0;R<3;R++){const B=a[v+R]*(1-M)+a[I+R]*M,Y=a[E+R]*(1-M)+a[k+R]*M;s[S+R]=Math.min(255,Math.max(0,Math.round(B*(1-m)+Y*m)))}}}return s}function Fn(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,p=Math.min((c+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let I=Math.floor(d);I<p;I++){const E=Math.min(I+1,p)-Math.max(I,d);if(!(E<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const R=S*E,B=(I*r+k)*o;w+=a[B]*R,b+=a[B+1]*R,x+=a[B+2]*R,M+=R}}const v=(c*t+f)*3;s[v]=Math.min(255,Math.max(0,st(w/M))),s[v+1]=Math.min(255,Math.max(0,st(b/M))),s[v+2]=Math.min(255,Math.max(0,st(x/M)))}}return s}function em(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function dr(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,c=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=em(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=em(b-x),v=(p*t+w)*3;for(let I=0;I<3;I++){let E=0;for(let k=0;k<4;k++){const S=d(m-1+k)*r;let R=0;for(let B=0;B<4;B++)R+=M[B]*a[(S+c(x-1+B))*o+I];E+=y[k]*R}s[v+I]=Math.min(255,Math.max(0,Math.round(E)))}}}return s}function Hr(e,t,n=1){const r=Vw(e.width,e.height,t,n),i=ca(e,r.resizedWidth,r.resizedHeight),o=t*t,a=new Float32Array(3*o).fill(qw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,p=u+c;a[p]=i[d]/255,a[o+p]=i[d+1]/255,a[2*o+p]=i[d+2]/255}}return{tensor:a,params:r}}function da(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let a=0;a<o;a++){const s=e[a*6],u=e[a*6+1],l=e[a*6+2],c=e[a*6+3],d=e[a*6+4],p=e[a*6+5];if(d<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:f,confidence:d,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const hr=.8,tm=.65,Hw=110,jw=1280;function Kw(e,t,n){if(n==null)return hr;if(n.length===0)return tm;const r=Math.max(e,t);if(!(r>0))return hr;const i=jw/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return hr;const a=o.length;return(a%2===1?o[(a-1)/2]:(o[a/2-1]+o[a/2])/2)>=Hw?tm:hr}const nm=.25,rm=.6;function Yw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),a=Math.trunc(Number(n[3]));if(![r,i,o,a].every(b=>Number.isFinite(b)))return null;const s=o-r,u=a-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?nm:rm)),c=Math.trunc(u*(s>=u?rm:nm)),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(Math.trunc(e),o+l),m=Math.min(Math.trunc(t),a+c),y=f-d,w=m-p;return y<=0||w<=0?null:{x:d,y:p,width:y,height:w}}const Xw=3,Qw=.15,Zw=.6;function ha(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Jw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function eb(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...i,...o].every(v=>Number.isFinite(v)))return null;const a=ha(i,o);if(!(a>0))return null;const s=[];for(const v of t??[]){const I=Math.trunc(Number(v.n));if(!Number.isFinite(I)||I<Xw)continue;const E=Jw(v.poly);E!==null&&s.push({owner:v.owner,c:E,n:I,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,I)=>I.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Zw);for(const v of u)v.d0=ha(v.c,i),v.d1=ha(v.c,o),v.ecart=Math.abs(v.d0-v.d1);const c=[...u].sort((v,I)=>I.ecart-v.ecart),d=c[0],p=c[1],f=d.d0<d.d1?0:1,m=r>0?1:0,y=f===m?d:p,w=f===m?p:d,b=f===1?d.owner:p.owner,x=f===1?p.owner:d.owner,M=d.ecart/a<Qw;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function tb(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const nb=.6;function im(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const s=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,c=(e[o*6+3]-t.padY)/t.scale,d=st((s+l)/2),p=st((u+c)/2),f=st((l-s+(c-u))/4);f>=1&&r.push({cx:d,cy:p,r:f})}return r}function rb(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(nb*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function ib(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ln(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function om(e,t,n){const r=im(e,t,n);return r.length===0?[]:ib(rb(r))}function ob(e,t,n){return im(e,t,n)}function pa(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const ab=.5,sb=.7,ub=.55;function fa(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function am(e){if(e.length===0)return[];const t=(ab*fa(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,a=(i[1]+i[3])/2,s=n.find(u=>(u.cx-o)**2+(u.cy-a)**2<=t);if(s===void 0)n.push({cx:o,cy:a,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+o)/u,s.cy=(s.cy*(u-1)+a)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Ln(i.map(o=>o[0]))),Math.trunc(Ln(i.map(o=>o[1]))),Math.trunc(Ln(i.map(o=>o[2]))),Math.trunc(Ln(i.map(o=>o[3])))]);if(r.length>=2){const i=fa(r),o=r.map(()=>!0);for(let a=0;a<r.length;a++)if(o[a])for(let s=a+1;s<r.length;s++){if(!o[s])continue;const u=r[a],l=r[s],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=c*d,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=sb*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?s:a]=!1,!o[a])break}}r=r.filter((a,s)=>o[s])}if(r.length>=3){const i=fa(r);r=r.filter(([o,a,s,u])=>Math.min(s-o,u-a)>=ub*i)}return r}const lb=.7;function cb(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),o=Math.min(e[3],t[3]);if(i<=n||o<=r)return 0;const a=(i-n)*(o-r),s=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=s+u-a;return l>0?a/l:0}function sm(e,t,n,r,i,o=lb){const a=t-4;if(a<=0||n<=0)return[];const s=[];for(let l=0;l<n;l+=1){let c=0,d=0;for(let p=0;p<a;p+=1){const f=e[(4+p)*n+l];f>c&&(c=f,d=p)}c<i||s.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:d})}s.sort((l,c)=>c.score-l.score);const u=[];for(const l of s){let c=!1;for(const d of u)if(d.cls===l.cls&&cb(d.box,l.box)>o){c=!0;break}c||u.push(l)}return u.map(l=>l.box)}const um=["brown","grey","blue","green","yellow","red","purple"],db={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},hb=.7;function lm(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[a,s,u,l]=o.box;let c=!1;for(const d of r){const p=e[d];if(p.family!==o.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(a+u,f+y)-Math.max(a,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=hb*M){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}function jr(e,t,n){const r=da(e,t,n,um.length).map(i=>{const o=um[i.classIndex];return{color:o,family:db[o],box:i.box,confidence:i.confidence}});return lm(r)}const pb=8,fb=.8,cm=1.25;function mb(e){if(e.length<pb)return[];const t=[],n=[];for(const a of e){const[,,s,u]=a.box;s>u*cm?t.push(a):u>s*cm&&n.push(a)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<fb*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const gb=2.25,dm=8;function yb(e){if(e.length<dm)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=gb*n[Math.floor(n.length/2)],i=r*r,o=e.map((d,p)=>p),a=d=>{for(;o[d]!==d;)o[d]=o[o[d]],d=o[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const f=t[d][0]-t[p][0],m=t[d][1]-t[p][1];f*f+m*m<=i&&(o[a(d)]=a(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=a(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<dm||u.length===e.length)return[];const l=new Set(u),c=e.map((d,p)=>p).filter(d=>!l.has(d));return c.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const nt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function kt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,a=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s:a,v:r};let s;return r===e?s=60*(t-n)/o:r===t?s=120+60*(n-e)/o:s=240+60*(e-t)/o,s<0&&(s+=360),{h:Math.round(s/2),s:a,v:r}}const wb=.42,bb=22,_b=43,xb=120,$b=1.5,vb=.72,Mb=110,hm=3;function pr(e,t,n){const{width:r,height:i,channels:o,data:a}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*wb);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const f=(d*r+p)*o,m=a[f],y=a[f+1],w=a[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),c+=1)}return c}function Sb(e){let t=0,n=0,r=0,i=pr(e,!1,(o,a,s)=>{const u=kt(o,a,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=pr(e,!0,(o,a,s)=>{const u=kt(o,a,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Ib(e){let t=0,n=0,r=pr(e,!1,(o,a)=>{t+=o,n+=a});if(r===0&&(r=pr(e,!0,(o,a)=>{t+=o,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function Tb(e){let t=0;const n=pr(e,!0,(r,i,o)=>{t+=kt(r,i,o).s});return n===0?null:t/n}function Eb(e){const t=Sb(e);if(t===null||t.s<=bb)return 1;if(t.s>=xb){const n=Ib(e);return n!==null&&n>=$b?6:3}return t.s>=_b?3:6}function kb(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,s)=>a-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,s)=>e[a].r-e[s].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>o.get(a))}function Cb(e,t){const n=[...t];if(e.length<hm||t.length!==e.length)return n;const r=e.map(a=>Tb(a)),i=r.filter(a=>a!==null);if(i.length<hm)return n;const o=Ln(i);return o<=0||r.forEach((a,s)=>{a!==null&&n[s]!==1&&a<vb*o&&a<Mb&&(n[s]=1)}),n}function pm(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),a=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+o-n)**2+(p+a-r)**2<=i*i){const w=((p+a)*e.width+(f+o))*e.channels;d[m]=e.data[w],d[m+1]=e.data[w+1],d[m+2]=e.data[w+2]}else d[m]=255,d[m+1]=255,d[m+2]=255}return{width:l,height:c,channels:3,data:d}}function Ab(e,t){const n=t.map(o=>pm(e,o)),r=n.map(o=>Eb(o)),i=kb(t,r);return Cb(n,i)}function Rb(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let a=0,s=0;a<o.length;a++,s+=r)o[a]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:o}}function fm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let a=0;a<n;a++){const s=a*o,u=Math.min((a+1)*o,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,c);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[a*t+l]=Math.min(255,Math.max(0,st(p/f)))}}return{width:t,height:n,data:r}}function Ob(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),a=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],a[u]=Math.min(255,Math.max(0,st(s*o)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function Nb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){s=!1;break}}i[o*t+a]=s&&r[o*t+a]>0?255:0}return{width:t,height:n,data:i}}function zb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const c=a+l,d=o+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){s=!0;break}}i[o*t+a]=s?255:0}return{width:t,height:n,data:i}}function ma(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],a=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;a[c++]=u,i[u]=s;let d=0,p=0,f=0;for(;l<c;){const m=a[l++],y=m%t,w=m/t|0;d+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,v=w+b;if(M<0||M>=t||v<0||v>=n)continue;const I=v*t+M;r[I]>0&&i[I]===0&&(i[I]=s,a[c++]=I)}}o[s]={area:d,centroidX:p/d,centroidY:f/d},s+=1}return{labels:i,stats:o}}function Bb(e,t,n){return mm(Float32Array.from(e.data),e.width,t,n)}function mm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,a=-n*Math.PI/180,s=Math.cos(a),u=Math.sin(a);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-o,p=l-o,f=s*d-u*p+o,m=u*d+s*p+o,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(E,k)=>E>=0&&E<t&&k>=0&&k<t?e[k*t+E]:r,v=M(y,w)*(1-b)+M(y+1,w)*b,I=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+c]=v*(1-x)+I*x}return i}const Pb=.9,Db=.34,Ub=[.55,.6,.66,.72],Lb=22,Fb=88,Gb=35,Gn=28,ga=4,Wb=Array.from({length:15},(e,t)=>-21+t*3),gm=[-2,0,2],qb=3,Vb=.3;function Hb(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function jb(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const a=n-t+1,s=i-r+1,u=Math.max(s,a),l=new Uint8Array(u*u),c=Math.floor((u-a)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<a;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const p=Gn-2*ga,f=fm({width:u,height:u,data:l},p,p),m=new Float32Array(Gn*Gn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+ga)*Gn+(w+ga)]=f.data[y*p+w]>110?1:0;return m}function Kb(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Db);if(u<4)return null;const l=a-u,c=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const f=new Int16Array(d*p),m=new Int16Array(d*p),y=new Int16Array(d*p),w=new Uint8Array(d*p),b=[],x=Math.min(d,p)/2;for(let L=0;L<d;L++)for(let O=0;O<p;O++){const C=((L+l)*n+(O+c))*i,{h:z,s:U,v:P}=kt(o[C],o[C+1],o[C+2]),j=L*p+O;f[j]=z,m[j]=U,y[j]=P,Math.sqrt((O-p/2)**2+(L-d/2)**2)/x<=t&&(w[j]=1,b.push(P))}if(b.length<16)return null;const M=Jf(b,55);let v=0,I=0,E=0;const k=L=>f[L]>=Lb&&f[L]<=Fb&&m[L]>=Gb,S=L=>y[L]>=M&&m[L]<=95&&!k(L)&&w[L]===1;for(let L=0;L<d*p;L++)w[L]===1&&(E+=1,y[L]>=130&&!k(L)&&(v+=1),S(L)&&(I+=1));const R=v>.5*E&&I<.15*E,B=new Uint8Array(d*p);if(R){const L=Jf(b,45);for(let O=0;O<d*p;O++)B[O]=w[O]===1&&y[O]<=L?255:0}else for(let L=0;L<d*p;L++)B[L]=S(L)?255:0;const Y={width:p,height:d,data:B},G=Nb(Y);let q=ma(G),N=q;if(q.stats.length<=1&&(q=ma(Y),N=q,q.stats.length<=1))return null;const F=Math.min(d,p)/2;let X=0,Z=-1;for(let L=1;L<N.stats.length;L++){const O=N.stats[L];if(O===void 0)continue;const C=Math.hypot(O.centroidX-p/2,O.centroidY-d/2)/F,z=O.area*(1-.6*Math.min(C,1));z>Z&&(Z=z,X=L)}if(X===0)return null;const le=new Uint8Array(d*p);for(let L=0;L<d*p;L++)le[L]=N.labels[L]===X?255:0;return jb(zb({width:p,height:d,data:le}))}function Yb(e,t,n,r,i,o){const a=Gn;let s=0,u=0;for(let l=0;l<a;l++){const c=l-o;if(!(c<0||c>=a))for(let d=0;d<a;d++){const p=d-i;if(p<0||p>=a)continue;const f=e[c*a+p];f!==0&&(u+=f,s+=f*n[l*a+d])}}return s/(u+r-s+1e-6)}function Xb(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of Wb){const o=i===0?e:mm(e,Gn,i,0),a=o.reduce((s,u)=>s+u,0);for(const s of gm)for(const u of gm){const l=Yb(o,a,t,n,s,u);l>r&&(r=l)}}return r}function Qb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of Ub){const s=Kb(e,a);if(s!==null)for(const{label:u,bits:l}of t)n.push([Xb(s,l),u])}if(n.length===0)return[null,0];if(n.sort((a,s)=>s[0]-a[0]),n[0][0]<Vb)return[null,0];const r=new Map;for(const[a,s]of n.slice(0,qb))r.set(s,(r.get(s)??0)+a);let i=0,o=-1;for(const[a,s]of r)s>o&&(o=s,i=a);return[i,n[0][0]]}const Zb=2560,Jb=.3,e_=.5,t_=1.6,n_=3,r_=5;function i_(e){const t=Math.min(1,Zb/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,o=new Float32Array(3*i),a=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,c+1),p=Math.max(0,Math.min(1,l-c));for(let f=0;f<n;f++){const m=(f+.5)*a-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(c*e.width+y)*e.channels+M,I=(c*e.width+w)*e.channels+M,E=(d*e.width+y)*e.channels+M,k=(d*e.width+w)*e.channels+M,S=e.data[v]*(1-b)+e.data[I]*b,R=e.data[E]*(1-b)+e.data[k]*b,B=S*(1-p)+R*p;o[x*i+u*n+f]=(B/255-.5)/.5}}}return{tensor:o,width:n,height:r}}function o_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const o=i===n-1;for(let a=0;a<t;a++){const s=i*t+a;let u=e[s];if(a+1<t&&e[s+1]>u&&(u=e[s+1]),!o){const l=s+t;e[l]>u&&(u=e[l]),a+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function a_(e){if(e.length<3)return e;const t=[...e].sort((o,a)=>o[0]-a[0]||o[1]-a[1]),n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(let o=t.length-1;o>=0;o--){const a=t[o];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function s_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,o]=e[r],[a,s]=e[(r+1)%e.length],u=a-i,l=s-o,c=Math.hypot(u,l);if(c===0)continue;const d=u/c,p=l/c;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,I]of e){const E=v*d+I*p,k=-v*p+I*d;E<f&&(f=E),E>m&&(m=E),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const v=(f+m)/2,I=(y+w)/2;t={cx:v*d-I*p,cy:v*p+I*d,w:b,h:x,angle:Math.atan2(p,d)}}}return t}function u_(e,t,n,r){const i=Math.cos(r.angle),o=Math.sin(r.angle),a=r.w/2,s=r.h/2,u=Math.abs(a*i)+Math.abs(s*o),l=Math.abs(a*o)+Math.abs(s*i),c=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=c;b<=d;b++){const x=b-r.cx,M=w-r.cy,v=x*i+M*o,I=-x*o+M*i;Math.abs(v)<=a&&Math.abs(I)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function l_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,c]=a,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=c[1]?[l,c]:[c,l];return[[d[0],d[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function c_(e,t,n,r){const{width:i,height:o}=t;let a=new Uint8Array(i*o);for(let f=0;f<a.length;f++)a[f]=e[f]>Jb?255:0;a=o_(a,i,o);const s={width:i,height:o,data:a},{labels:u}=ma(s),l=new Map;for(let f=0;f<o;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const c=n/i,d=r/o,p=[];for(const[f,m]of l){const y=[];for(const[B,[Y,G]]of m)y.push([Y-.5,B-.5],[Y-.5,B+.5],[G+.5,B-.5],[G+.5,B+.5]);const w=s_(a_(y));if(Math.min(w.w,w.h)<n_)continue;const b=u_(e,i,o,w);if(b<e_)continue;const x=w.w*w.h*t_/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<r_+2)continue;const I=l_(M).map(([B,Y])=>[Math.min(n,Math.max(0,Math.round(B*c))),Math.min(r,Math.max(0,Math.round(Y*d)))]),E=I.map(B=>B[0]),k=I.map(B=>B[1]),S=Math.min(...E),R=Math.min(...k);p.push({quad:I,x:S,y:R,width:Math.max(...E)-S,height:Math.max(...k)-R,score:b})}return p.sort((f,m)=>m.score-f.score)}function d_(e,t){const[n,r,i,o]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-o[0],i[1]-o[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(o[0]-n[0],o[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=h_([[0,0],[a,0],[a,s],[0,s]],[n,r,i,o]),l=new Uint8Array(a*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<a;p++){const f=u[6]*p+u[7]*d+u[8],m=(u[0]*p+u[1]*d+u[2])/f,y=(u[3]*p+u[4]*d+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,v=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),E=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const R=e.data[(E*e.width+v)*e.channels+S],B=e.data[(E*e.width+I)*e.channels+S],Y=e.data[(k*e.width+v)*e.channels+S],G=e.data[(k*e.width+I)*e.channels+S],q=R*(1-x)+B*x,N=Y*(1-x)+G*x;l[(d*a+p)*e.channels+S]=Math.round(q*(1-M)+N*M)}}const c={width:a,height:s,channels:e.channels,data:l};return s/a>=1.5?Yt(c,3):c}function h_(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[o,a]=e[i],[s,u]=t[i];n.push([o,a,1,0,0,0,-s*o,-s*a]),r.push(s),n.push([0,0,0,o,a,1,-u*o,-u*a]),r.push(u)}for(let i=0;i<8;i++){let o=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[o][i])&&(o=s);[n[i],n[o]]=[n[o],n[i]],[r[i],r[o]]=[r[o],r[i]];const a=n[i][i];for(let s=i;s<8;s++)n[i][s]/=a;r[i]/=a;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Yt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:a}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*o);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let p,f;n===1?(p=i-1-c,f=d):n===2?(p=r-1-d,f=i-1-c):(p=c,f=r-1-d);const m=(c*r+d)*o,y=(f*s+p)*o;for(let w=0;w<o;w++)l[y+w]=a[m+w]}return{width:s,height:u,channels:o,data:l}}const p_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,p_)*255));return e})();const Xt=48,f_=320;function m_(e){return["blank",...e.characters," "]}function g_(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const s=e[a];s!==0&&(a>0&&e[a-1]===s||(r+=n[s]??"",i.push(t[a])))}if(i.length===0)return["",0];const o=i.reduce((a,s)=>a+s,0)/i.length;return[r,o]}function y_(e,t){const n=Math.trunc(Xt*t),r=e.width/e.height,i=Math.ceil(Xt*r)>n?n:Math.ceil(Xt*r),o=new Float32Array(3*Xt*n),a=Xt*n,s=e.width/i,u=e.height/Xt;for(let l=0;l<Xt;l++){const c=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(c))),p=Math.min(e.height-1,d+1),f=Math.max(0,Math.min(1,c-d));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,I=(d*e.width+w)*e.channels+v,E=(d*e.width+b)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+b)*e.channels+v,R=e.data[I]*(1-x)+e.data[E]*x,B=e.data[k]*(1-x)+e.data[S]*x,Y=R*(1-f)+B*f;o[M*a+l*n+m]=(Y/255-.5)/.5}}}return{tensor:o,width:n}}const w_=62,b_=8,__=5;function ya(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function x_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),o=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let s=1;s<=r;s++)o[s]=e[a-1]===t[s-1]?i[s-1]+1:Math.max(i[s],o[s-1]);[i,o]=[o,i]}return i[r]}function Kr(e,t){return e.length===0&&t.length===0?100:200*x_(e,t)/(e.length+t.length)}function ym(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Kr(n(e),n(t))}function $_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),o=[...n].filter(c=>!r.has(c)).sort(),a=[...r].filter(c=>!n.has(c)).sort(),s=i.join(" "),u=[s,o.join(" ")].filter(Boolean).join(" "),l=[s,a.join(" ")].filter(Boolean).join(" ");return s.length>0&&(o.length===0||a.length===0)?100:Math.max(Kr(s,u),Kr(s,l),Kr(u,l))}function v_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const o of[ya(i),ya(r.name)])if(o)for(const a of[o,o.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function M_(e,t){const n=ya(e);if(!n||t.length===0)return null;const i=v_(t).map(c=>({...c,score:$_(n,c.key)})).sort((c,d)=>d.score-c.score).slice(0,b_).filter(c=>c.score>=w_);if(i.length===0)return null;const o=i[0].score,a=i.filter(c=>o-c.score<=__),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],l=[ym(s,u.key),u.score];for(const c of a.slice(1)){const d=[ym(s,c.key),c.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=c,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const wm=5e3,wa=.75,bm=15,S_=1.25,I_=2.4,T_=.003,E_=.85,k_=4,ba=2600,_a=2,xa=.3,_m=.1,xm=.012,C_=22,$m=.5,Yr=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,a=t.width*t.height;o<a;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function A_(e,t,n,r){const i=r.map(J=>J[0]),o=r.map(J=>J[1]),a=i.reduce((J,me)=>J+me,0)/i.length,s=o.reduce((J,me)=>J+me,0)/o.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...o)-Math.min(...o));if(u<4)return null;const l=u*k_,c=Math.max(0,Math.trunc(a-l)),d=Math.min(n.width,Math.trunc(a+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<ba?_a:1,y=tt(e,n),w=tt(e,t),b=new e.Rect(c,p,d-c,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,I=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,I,e.COLOR_RGB2GRAY);const E=new e.ORB(wm),k=new e.KeyPointVector,S=new e.KeyPointVector,R=new e.Mat,B=new e.Mat,Y=new e.Mat,G=[y,w,x,M,v,I,k,S,R,B,Y],q=J=>{for(const me of G)try{me.delete()}catch{}try{E.delete()}catch{}return J};if(E.detectAndCompute(v,Y,k,R),E.detectAndCompute(I,Y,S,B),R.rows<8||B.rows<8)return q(null);const N=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;N.knnMatch(R,B,F,2);const X=[],Z=[];for(let J=0;J<F.size();J++){const me=F.get(J);if(me.size()===2){const Te=me.get(0),W=me.get(1);if(Te.distance<wa*W.distance){const ee=k.get(Te.queryIdx).pt,ne=S.get(Te.trainIdx).pt;X.push(ee.x,ee.y),Z.push(ne.x,ne.y)}}}if(F.delete(),N.delete(),X.length/2<8)return q(null);const le=e.matFromArray(X.length/2,1,e.CV_32FC2,X),L=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),O=new e.Mat,C=e.findHomography(le,L,e.RANSAC,5,O);let z=0;for(let J=0;J<O.rows;J++)z+=O.data[J];const U=C.rows===3?[...C.data64F]:null;if(le.delete(),L.delete(),O.delete(),C.delete(),U===null||z<bm)return q(null);const P=1/m,j=[[P,0,c],[0,P,p],[0,0,1]],ie=[0,1,2].map(J=>[0,1,2].map(me=>j[J][0]*U[me]+j[J][1]*U[3+me]+j[J][2]*U[6+me]));return q({H:ie,inliers:z})}function $a(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*c}const i=Math.abs(r/2)/(t*n);if(i<T_||i>E_)return!1;const o=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),a=Math.min(...o);if(a<1)return!1;const s=Math.max(...o)/a;return s>=S_&&s<=I_}function va(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ma(e,t,n,r){const i=n.width,o=n.height,a=Math.max(8,Math.trunc(xa*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-a*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-a*r[G][0]-a*r[G][1];const c=tt(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(d,f,e.COLOR_RGB2Lab),c.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(a/3)),w=[[],[],[]],b=(G,q)=>{const N=(q*s+G)*3;w[0].push(m[N]),w[1].push(m[N+1]),w[2].push(m[N+2])};for(let G=0;G<u;G++)for(let q=0;q<s;q++)(G<y||G>=u-y||q<y||q>=s-y)&&b(q,G);const x=G=>{G.sort((N,F)=>N-F);const q=G.length>>1;return G.length%2?G[q]:(G[q-1]+G[q])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(G,q)=>{const N=(q*s+G)*3,F=m[N]-M[0],X=m[N+1]-M[1],Z=m[N+2]-M[2];return Math.sqrt(F*F+X*X+Z*Z)>C_},I=Math.max(6,Math.trunc(_m*i)),E=Math.max(6,Math.trunc(_m*o)),k=Math.max(2,Math.trunc(xm*i)),S=Math.max(2,Math.trunc(xm*o)),R=G=>{let q=0,N=0;for(const F of G)N=F?N+1:0,N>q&&(q=N);return q/Math.max(1,G.length)},B=G=>{let q,N,F,X,Z;if(G==="L"?(q=a,N=a+o,F=Math.max(0,a-k-I),X=Math.max(0,a-k),Z=!1):G==="R"?(q=a,N=a+o,F=a+i+k,X=Math.min(s,a+i+k+I),Z=!1):(q=Math.max(0,a-S-E),N=Math.max(0,a-S),F=a,X=a+i,Z=!0),N<=q||X<=F)return 0;const le=[];if(Z)for(let L=F;L<X;L++){let O=0;for(let C=q;C<N;C++)v(L,C)&&O++;le.push(O/(N-q)>$m)}else for(let L=q;L<N;L++){let O=0;for(let C=F;C<X;C++)v(C,L)&&O++;le.push(O/(X-F)>$m)}return R(le)},Y={L:B("L"),R:B("R"),T:B("T")};return d.delete(),f.delete(),Y}const R_=6e3,O_=8,vm=.5,N_=.6;function z_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<ba?_a:1,o=tt(e,t),a=new e.Mat;i!==1?e.resize(o,a,new e.Size(0,0),i,i,e.INTER_CUBIC):o.copyTo(a);const s=new e.Mat;e.cvtColor(a,s,e.COLOR_RGB2GRAY),o.delete(),a.delete();const u=new e.ORB(R_),l=new e.Mat,c=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,c,d);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const v=[w,x,M],I=()=>{for(const ie of v)ie.delete();b.delete()};if(M.rows<8){I();continue}const E=new e.DMatchVectorVector;f.knnMatch(M,d,E,2);const k=[],S=[];for(let ie=0;ie<E.size();ie++){const J=E.get(ie);if(J.size()===2){const me=J.get(0);if(me.distance<wa*J.get(1).distance){const Te=x.get(me.queryIdx).pt,W=c.get(me.trainIdx).pt;k.push(Te.x,Te.y),S.push(W.x,W.y)}}}if(E.delete(),k.length/2<8){I();continue}const R=e.matFromArray(k.length/2,1,e.CV_32FC2,k),B=e.matFromArray(S.length/2,1,e.CV_32FC2,S),Y=new e.Mat,G=e.findHomography(R,B,e.RANSAC,5,Y);let q=0;for(let ie=0;ie<Y.rows;ie++)q+=Y.data[ie];const N=G.rows===3?[...G.data64F]:null;if(R.delete(),B.delete(),Y.delete(),G.delete(),N===null||q<O_){I();continue}const F=1/i,X=[[F*N[0],F*N[1],F*N[2]],[F*N[3],F*N[4],F*N[5]],[N[6],N[7],N[8]]],Z=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ie,J])=>va(X,ie,J));if(!$a(Z,t.width,t.height)){I();continue}const le=tt(e,t),L=e.matFromArray(3,3,e.CV_64F,X.flat()),O=new e.Mat;e.warpPerspective(le,O,L,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const C=new e.Mat;e.cvtColor(O,C,e.COLOR_RGB2GRAY);const z=new e.Mat;e.matchTemplate(C,b,z,e.TM_CCOEFF_NORMED);const U=z.data32F[0];if(le.delete(),L.delete(),O.delete(),C.delete(),z.delete(),U<vm){I();continue}const P=Ma(e,t,y,X),j=Sa(P);p.push({id:m,confidence:Math.max(0,U),footprint:Z,built:P!==null&&Math.max(P.L,P.R,P.T)>=Yr,tuckRegion:Xr(Z,j)}),I()}}finally{s.delete(),l.delete(),c.delete(),d.delete();try{u.delete(),f.delete()}catch{}}return p}function Sa(e){return e!==null&&e.R>=Yr?["R"]:[]}function Xr(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),a=xa*o;if(!(a>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let v=-(M[1]-x[1]),I=M[0]-x[0];const E=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(E-s)+I*(k-u)<0&&(v=-v,I=-I);const S=Math.hypot(v,I);S<=1e-6||(v=v/S*a,I=I/S*a,c.push([x[0]+v,x[1]+I],[M[0]+v,M[1]+I]))}const d=c.map(y=>y[0]),p=c.map(y=>y[1]),f=Math.round(Math.min(...d)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...d))-f,height:Math.round(Math.max(...p))-m}}function B_(e,t,n,r){const i=A_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,c])=>va(i.H,l,c));if(!$a(a,t.width,t.height))return null;const s=Ma(e,t,n,i.H);if(s===null)return null;const u=Sa(s);return{built:Math.max(s.L,s.R,s.T)>=Yr,footprint:a,overflow:u,edgeScores:s,inliers:i.inliers}}const P_=.88;function Ia(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,a=Math.max(8,Math.trunc(xa*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=a+Math.trunc(i*P_),c=s-l;if(c<1)return null;const d=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-a*y[k*3]-a*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,c,u)),v=new e.Mat;M.copyTo(v);const I=v.data,E=new Uint8ClampedArray(c*u*3);E.set(I.subarray(0,E.length));for(const k of[d,p,f,m,b,x,M,v])try{k.delete()}catch{}return{width:c,height:u,channels:3,data:E}}function D_(e,t,n,r){const[i,o,a,s]=r;if(a<8||s<8)return null;const u=Math.trunc(.06*a),l=Math.trunc(.06*s),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+a+u)),p=Math.max(0,Math.trunc(o-l)),f=Math.min(n.height,Math.trunc(o+s+l));if(d-c<8||f-p<8)return null;const m=Math.max(n.width,n.height)<ba?_a:1,y=tt(e,n),w=tt(e,t),b=y.roi(new e.Rect(c,p,d-c,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const I=new e.ORB(wm),E=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,R=new e.Mat,B=new e.Mat,Y=[y,w,b,x,M,v,E,k,S,R,B],G=ie=>{for(const J of Y)try{J.delete()}catch{}try{I.delete()}catch{}return ie};if(I.detectAndCompute(M,B,E,S),I.detectAndCompute(v,B,k,R),S.rows<8||R.rows<8)return G(null);const q=new e.BFMatcher(e.NORM_HAMMING),N=new e.DMatchVectorVector;q.knnMatch(S,R,N,2);const F=[],X=[];for(let ie=0;ie<N.size();ie++){const J=N.get(ie);if(J.size()===2){const me=J.get(0),Te=J.get(1);if(me.distance<wa*Te.distance){const W=E.get(me.queryIdx).pt,ee=k.get(me.trainIdx).pt;F.push(W.x,W.y),X.push(ee.x,ee.y)}}}if(N.delete(),q.delete(),F.length/2<8)return G(null);const Z=e.matFromArray(F.length/2,1,e.CV_32FC2,F),le=e.matFromArray(X.length/2,1,e.CV_32FC2,X),L=new e.Mat,O=e.findHomography(Z,le,e.RANSAC,5,L);let C=0;for(let ie=0;ie<L.rows;ie++)C+=L.data[ie];const z=O.rows===3?[...O.data64F]:null;if(Z.delete(),le.delete(),L.delete(),O.delete(),z===null||C<bm)return G(null);const U=1/m,P=[[U,0,c],[0,U,p],[0,0,1]],j=[0,1,2].map(ie=>[0,1,2].map(J=>P[ie][0]*z[J]+P[ie][1]*z[3+J]+P[ie][2]*z[6+J]));return G({H:j,inliers:C})}const U_=620;function L_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Mm(e,t,n,r){const i=Sm(e,t,n,r);if(i!==null)return i;try{const[o,a,s,u]=r.map(I=>Math.trunc(I));if(Math.min(s,u)>=U_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),c=Math.trunc(u*.25),d=Math.max(0,o-l),p=Math.max(0,a-c),f=Math.min(t.width,o+s+l),m=Math.min(t.height,a+u+c);if(f<=d||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(d,p,f-d,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-d)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=L_(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const M=[(o-d)*2,(a-p)*2,s*2,u*2],v=Sm(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([I,E])=>[I*.5+d,E*.5+p])}}catch{return null}}function Sm(e,t,n,r){const i=D_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>va(i.H,b,x));if(!$a(a,t.width,t.height))return null;const s=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=tt(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(d,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,c,d,p,f])try{b.delete()}catch{}if(m<vm)return null;const y=Ma(e,t,n,i.H);if(y===null)return null;const w=Sa(y);return{built:Math.max(y.L,y.R,y.T)>=Yr,footprint:a,overflow:w,edgeScores:y,inliers:i.inliers}}function F_(e,t,n,r=.03){let i=null,o=1/0;for(const a of e){const[s,u,l,c]=a;if(l<=0||c<=0)continue;const d=r*l,p=r*c;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+c+p){const f=l*c;f<o&&(o=f,i=[s,u,l,c])}}return i}const G_=.3,W_=.3;function q_(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:a,R:s,T:u}=o.edgeScores;return Math.min(a,s,u)>=G_}),i=[];return e.forEach((o,a)=>{if(!o.built||o.edgeScores===null)return;const{L:s,R:u,T:l}=o.edgeScores,c=Math.max(s,u,l)<W_;if(!r&&!c)return;t.some(([p,f])=>p>=o.zone.x0&&p<=o.zone.x1&&f>=o.zone.y0&&f<=o.zone.y1)||i.push(a)}),i}const gt=128,Wn=.5;function Qr(e){const t=Fn(e,gt,gt),n=gt*gt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function Ta(e){const t=e[1]??0;return{built:t>=Wn,prob:t}}const fr=120,mr=179,V_=1.3,H_=3.6,j_=.45,K_=6e-4,Y_=.02,X_=6e3,Q_=.78,Z_=1.25,J_=2.4,e1=.05,t1=1.5,n1=.5,r1=.9,i1=150,o1=18,a1=34,s1=90,u1=130,l1=.13,c1=.15,Zr="magistrates-guild",Ea="merchants-guild";function d1(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[fr,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[mr,255,205,255]),a=new e.Mat;e.inRange(r,i,o,a),r.delete(),i.delete(),o.delete();const s=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(a,l,e.MORPH_CLOSE,u),a.delete(),u.delete();const c=new e.Mat,d=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,c,d,p,8);l.delete(),c.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=d.intAt(w,0),x=d.intAt(w,1),M=d.intAt(w,2),v=d.intAt(w,3),I=d.intAt(w,4),E=I/m;E<K_||E>Y_||I/Math.max(M*v,1)<j_||y.push({x:b,y:x,w:M,h:v})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function h1(e,t,n,r,i,o,a){const s=e,u=o,l=a,c=i;if(!c.gray){const U=tt(e,r);c.gray=new s.Mat,s.cvtColor(U,c.gray,s.COLOR_RGB2GRAY),U.delete(),c.k=new s.KeyPointVector,c.d=new s.Mat;const P=new s.Mat;u.detectAndCompute(c.gray,P,c.k,c.d),P.delete()}const d=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(d,p,f,m),p.delete();const y=U=>(f.delete(),m.delete(),U);if(c.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(c.d,m,w,2);const b=[],x=[];for(let U=0;U<w.size();U++){const P=w.get(U);if(P.size()===2){const j=P.get(0);if(j.distance<Q_*P.get(1).distance){const ie=c.k.get(j.queryIdx).pt,J=f.get(j.trainIdx).pt;b.push(ie.x,ie.y),x.push(J.x,J.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),I=new s.Mat,E=s.findHomography(M,v,s.RANSAC,5,I);if(M.delete(),v.delete(),I.delete(),E.rows!==3)return E.delete(),y(null);const k=[...E.data64F],S=(U,P)=>{const j=k[6]*U+k[7]*P+k[8];return[(k[0]*U+k[1]*P+k[2])/j,(k[3]*U+k[4]*P+k[5])/j]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([U,P])=>S(U,P));if(R.some(U=>!Number.isFinite(U[0])||!Number.isFinite(U[1])))return E.delete(),y(null);const B=R.map((U,P)=>{const j=R[(P+1)%4];return Math.hypot(j[0]-U[0],j[1]-U[1])}),Y=Math.min(...B);if(Y<1)return E.delete(),y(null);const G=Math.max(...B)/Y;let q=0;for(let U=0;U<4;U++){const[P,j]=R[U],[ie,J]=R[(U+1)%4];q+=P*J-ie*j}const N=t,F=Math.abs(q/2)/(N.rows*N.cols);if(G<Z_||G>J_||F<e1||F>t1)return E.delete(),y(null);const X=new s.Mat;s.warpPerspective(N,X,E,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),E.delete();const Z=new s.Mat;s.cvtColor(X,Z,s.COLOR_RGB2GRAY),X.delete();const le=Math.trunc(r.height/2),L=Z.roi(new s.Rect(0,0,r.width,le)),O=c.gray.roi(new s.Rect(0,0,r.width,le)),C=new s.Mat;s.matchTemplate(L,O,C,s.TM_CCOEFF_NORMED);const z=C.data32F[0];return L.delete(),O.delete(),C.delete(),Z.delete(),y(z)}function p1(e,t,n){let r,i;if(n===Zr)r=Ea,i=l1;else if(n===Ea)r=Zr,i=c1;else return null;const{x:o,y:a,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let c=0,d=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=a;b<a+u;b++)for(let x=o+p;x<o+f;x++){const M=(b*e.width+x)*e.channels,{h:v,s:I,v:E}=kt(e.data[M],e.data[M+1],e.data[M+2]);if(v>=fr&&v<=mr&&I>=30&&I<=170&&E<=170)continue;m++,(r===Ea?v>=o1&&v<=a1&&I>=s1&&E>=u1:v>=95&&v<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>c&&(c=w,d={x:o+p,y:a,w:f-p,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const f1=1.7,m1=140,g1=170,y1=.2,w1=.1,Im=240,Tm=80,Em=60,b1=50,km="scientists-guild",Cm="tacticians-guild",Jr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function _1(e,t,n){const{x:r,y:i,w:o,h:a}=n,s=new Float32Array(a);for(let v=0;v<a;v++){let I=0;for(let E=0;E<o;E++)e[(i+v)*t+r+E]>0&&I++;s[v]=I/o}const u=[];for(let v=0;v<a;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const p=o/d;if(p<V_||p>H_)return[];if(p>=f1)return[{x:r,y:i+l,w:o,h:d}];const f=new Float32Array(a),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const I=Math.exp(-(v*v)/(2*m*m));y.push(I),w+=I}for(let v=0;v<a;v++){let I=0;for(let E=-4;E<=4;E++){const k=Math.min(a-1,Math.max(0,v+E));I+=s[k]*y[E+4]}f[v]=I/w}const b=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if(x>b){let v=1/0;for(let I=b;I<x;I++)f[I]<v&&(v=f[I],M=I)}return[{x:r,y:i+l,w:o,h:M-l},{x:r,y:i+M,w:o,h:c-M}]}function x1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),s=Math.max(0,o-r),u=new Uint8Array(a*s*3);for(let l=0;l<s;l++)for(let c=0;c<a;c++){const d=((r+l)*e.width+n+c)*e.channels,p=(l*a+c)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:a,height:s,channels:3,data:u}}function $1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:a,s,v:u}=kt(e.data[o],e.data[o+1],e.data[o+2]);s>=40&&u>=40&&u<=205&&(t++,a>=m1&&a<=g1&&n++)}return t===0?0:n/t}function v1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s:a,v:s}=kt(e.data[i],e.data[i+1],e.data[i+2]);!(o>=fr&&o<=mr)&&a>=70&&s>=50&&t++}return n===0?0:t/n}function Am(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Im,Tm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Im,height:Tm,channels:3,data:i}}function M1(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const a=o*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const a=o*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[o*3+s]=Math.max(0,Math.min(255,Math.round(e.data[a+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Rm(e,t){const n=M1(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=kt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=fr&&w<=mr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,o++)}const a=o<20,s=tt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let c=0,d=0,p=0,f=0;for(let m=0;m<r;m++)!a&&i[m]===0||(c+=l[m*3]*100/255,d+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[c/f,d/f,p/f]}function S1(e){let t=0,n=0,r=0,i=0,o=0;const a=e.width*e.height;for(let u=0;u<a;u++){const l=u*e.channels,{h:c,s:d,v:p}=kt(e.data[l],e.data[l+1],e.data[l+2]);c>=fr&&c<=mr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&p>=80&&o++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:o/s}}function I1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s:a,v:s}=kt(e.data[i],e.data[i+1],e.data[i+2]);a>=Em&&s>=b1?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&s<150&&n.brown++):a<Em&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function T1(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,o=0,a=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,o+=u*u,a+=l*l}return i/(Math.sqrt(o*a)+1e-6)}function Om(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function E1(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const a=Am(e,o);n.set(i,Om(e,a)),Jr.includes(i)&&r.set(i,Rm(e,a))}return{gray:n,warmLab:r}}function k1(e,t,n){const r=Am(e,t),i=S1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Zr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return km;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Cm;const o=I1(r),a={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let s="blue";for(const l of Object.keys(a))a[l]>a[s]&&(s=l);if(a[s]<=0)return"";let u;if(s==="blue")u=Zr;else if(s==="green")u=km;else if(s==="red")u=Cm;else{const l=Om(e,r);let c="",d=-2;for(const p of Jr){const f=n.gray.get(p);if(f===void 0)continue;const m=T1(l,f);m>d&&(d=m,c=p)}u=c||Jr[0]}if(Jr.includes(u)&&n.warmLab.size>0){const l=Rm(e,r);let c=u,d=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<d&&(d=m,c=p)}return c}return u}function C1(e,t,n,r,i){var y;const o=[],{blobs:a,mask:s,maskWidth:u}=d1(e,t);if(a.length===0||n.size===0)return o;const l=e,c=new l.ORB(X_),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of a){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(i1,Math.trunc(r1*Math.max(w.w,w.h))),v=Math.max(0,b-M),I=Math.max(0,x-M),E=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(E-v<16||k-I<16)continue;const S=f.roi(new l.Rect(v,I,E-v,k-I)),R=new l.Mat;l.cvtColor(S,R,l.COLOR_RGB2GRAY);let B=null,Y=-2;for(const[F,X]of n){if(r!==void 0&&Date.now()>r)break;const Z=h1(e,S,R,X,p.get(F),c,d);Z!==null&&Z>Y&&(Y=Z,B=F)}S.delete(),R.delete();const G=new Set;if(B!==null&&Y>=n1){o.push({id:B,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(B);const F=p1(t,w,B);F&&(o.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),G.add(F.id))}if(i===void 0||i.size===0)continue;const q=_1(s,u,w);if(q.length!==2)continue;const N=q.map(F=>x1(t,F));if(!N.some(F=>F.width*F.height===0||v1(F)<w1))for(let F=0;F<q.length;F++){const X=N[F];if($1(X)<y1)continue;m===null&&(m=E1(e,i));const Z=k1(e,X,m);if(Z&&!G.has(Z)){G.add(Z);const le=q[F];o.push({id:Z,boundingBox:{x:le.x,y:le.y,width:le.w,height:le.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return o}const Nm=128,A1=.56,R1=15,O1=.58,N1=70,z1=50,B1=.12,P1=.2,D1=.1,U1=.17,zm=.15;function L1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Bm(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,a-u),c=Math.max(0,s-u),d=Math.min(n,a+u),p=Math.min(r,s+u),f=d-l,m=p-c,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+c)*n+l)*i;y.set(o.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function F1(e){const t=Bm(e,A1),n=Rb(t),r=fm(n,Nm,Nm);return Ob(r)}function G1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,a=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;o+=l*c,a+=l*l,s+=c*c}return o/(Math.sqrt(a*s)+1e-6)}function W1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Bm(e,O1),{width:r,height:i,channels:o,data:a}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*o,{h:m,s:y,v:w}=kt(a[f],a[f+1],a[f+2]);y>=N1&&w>=z1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const c=u/s,d=l/s;return c>=B1&&t.set("masonry",zm*Math.min(1,c/P1)),d>=D1&&t.set("strategy",zm*Math.min(1,d/U1)),t}function q1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=F1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=R1)o.push(Bb(n,l,i));const a=new Map;for(const[l,c]of t){let d=-1/0;for(const p of o){const f=G1(p,c);f>d&&(d=f)}a.set(l,d)}for(const[l,c]of W1(e))c>0&&a.has(l)&&a.set(l,a.get(l)+c);let s="",u=-1/0;for(const[l,c]of a)c>u&&(s=l,u=c);return[s,u]}const un=224,V1=512,H1=[.485,.456,.406],j1=[.229,.224,.225];function K1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Y1(e){const t=ca(e,un,un),n=un*un,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-H1[o])/j1[o];return r}function X1(e){const t=3*un*un,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Y1(Yt(e,r)),r*t);return n}function Q1(e,t=V1){const n=e.length/t,r=new Float32Array(t);for(let o=0;o<n;o++)for(let a=0;a<t;a++)r[a]+=e[o*t+a];let i=0;for(let o=0;o<t;o++)r[o]/=n,i+=r[o]*r[o];i=Math.max(Math.sqrt(i),1e-9);for(let o=0;o<t;o++)r[o]/=i;return r}function Z1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let o=0;const a=i*e.dim;for(let s=0;s<e.dim;s++)o+=e.x[a+s]*t[s];o>r&&(r=o,n=i)}return{id:e.ids[n],cosine:r}}const qn=96,J1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],e2=.45;function t2(e){const t=ca(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function n2(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=e2?J1[t]??"":"",prob:n}}const Qt=128,r2=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],i2=.5;let Pm=null;function o2(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Pm=e}function Dm(){return Pm??i2}let Um=null;function a2(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Um=[...e]}function s2(){return Um??r2}const Lm="__inverse";function u2(e){return e.endsWith(Lm)?[e.slice(0,-Lm.length),!0]:[e,!1]}function l2(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n*3);for(let a=0;a<t*n;a++)for(let s=0;s<3;s++)o[a*3+s]=i[a*r+s];return o}function c2(e){const t=Math.min(Qt/e.width,Qt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?l2(e):t<1?Fn(e,n,r):dr(e,n,r),o=Qt*Qt,a=new Float32Array(3*o);a.fill(114/255);const s=Math.floor((Qt-r)/2),u=Math.floor((Qt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const d=(l*n+c)*3,p=(l+s)*Qt+(c+u);for(let f=0;f<3;f++)a[f*o+p]=i[d+f]/255}return a}async function d2(e,t){const{index:n,prob:r}=h2(await t(c2(e))),[i,o]=u2(s2()[n]??"");return r<Dm()||i==="other"||i===""?{id:"",prob:r,inverse:!1}:{id:i,prob:r,inverse:o}}function h2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Pt=96,p2=[1,2,3,4,5,6,7],f2=.8,m2=.99;function g2(e){const t=dr(e,e.width*2,e.height*2),n=e.width*2<Pt&&e.height*2<Pt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?dr(r,Pt,Pt):Fn(r,Pt,Pt),o=Pt*Pt,a=new Float32Array(3*o);for(let s=0;s<o;s++)for(let u=0;u<3;u++)a[u*o+s]=i[s*3+u]/255;return a}function y2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:p2[t],prob:e[t]}}const ln=128,Fm=.35,w2=["fp","laurel"],b2=.85,Vn=40;function _2(e){const r=(e.width<ln&&e.height<ln?dr:Fn)(e,ln,ln),i=ln*ln,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function x2(e){return e[w2.indexOf("fp")]}const cn=128,$2=.15,Gm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],v2=7,M2=.9;function S2(e,t,n){const[r,i,o,a]=e.map(Number);if(!(o>1)||!(a>1))return null;const s=r+o/2,u=i+a/2,l=Math.max(o,a)*(1+2*$2),c=Math.max(0,st(s-l/2)),d=Math.max(0,st(u-l/2)),p=Math.min(t,st(s+l/2)),f=Math.min(n,st(u+l/2));return p-c<8||f-d<8?null:{x:c,y:d,w:p-c,h:f-d}}function I2(e){const r=(e.width<cn&&e.height<cn?dr:Fn)(e,cn,cn),i=cn*cn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function T2(e){let t=0;for(let i=1;i<Gm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=v2;return{className:Gm[t],probability:n,rejected:r&&n>=M2}}const ei=3,E2=2.2,k2=.3,C2=.65,A2=3,R2=1.3,O2=.77;function Wm(e,t,n){const[r,i,o,a]=e,s=[];return r<=ei&&s.push("gauche"),i<=ei&&s.push("haut"),r+o>=t-ei&&s.push("droit"),i+a>=n-ei&&s.push("bas"),s}function qm(e){const t=e[3]/Math.max(e[2],1);return t>=R2?"portrait":t<=O2?"paysage":null}function ka(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function N2(e,t,n){for(const[r,i,o,a]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(a-i)/Math.max(n,1))>C2)return!0;return!1}function z2(e,t,n,r,i){try{const o=[...e],a=o.filter(w=>Wm(w.box,r,i).length>0);if(a.length===0)return{kept:o,dropped:[],suspects:[]};const s=o.filter(w=>!a.includes(w)),u=w=>({kept:s,dropped:a.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(N2(n,r,i))return u("photo-piste");if(s.length<A2)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:a.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(a.length>(s.length+a.length)/3)return u("debordement-structurel");const l=ka(s.map(w=>w.box[2]*w.box[3])),c=ka(s.map(w=>w.box[2])),d=ka(s.map(w=>w.box[3])),p=new Set(s.map(w=>qm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of a){const b=Wm(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&I.push(d>0?M/d:1);const E=I.length>0?Math.min(...I):1,k=qm(w.box);v>E2?m.push({banner:w,edgeReason:"bord-grosse"}):E<k2?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const B2=1,P2=1.5;function D2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function U2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(i,o);if(a<=0)return null;const s=((e-n[0])*i+(t-n[1])*o)/(a*a);return[Math.abs((e-n[0])*o-(t-n[1])*i)/a,Math.abs(s-.5)*a]}function L2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function F2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,a,s]=t,u=i+a/2,l=o+s/2;let c=null;for(const[p,f]of D2(e)){const m=U2(u,l,p,f);m!==null&&(c===null||m[0]<c[0])&&(c=m)}if(c===null)return null;const d=L2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==a>s}}catch{return null}}function G2(e,t,n,r=B2,i=P2){const o=[];for(const[a,s]of t??[]){const u=F2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,a]))}return o.length===0?null:(o.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),o[0][1])}const yt=64,Vm=.5,W2=[.67,1.24];function Hm(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),a=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=a-i,l=s-o;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=o+w,x=b-n;for(let M=0;M<u;M++){const v=i+M,I=v-t,E=(w*u+M)*3;if(I*I+x*x<=p){const k=(b*e.width+v)*c;d[E]=e.data[k],d[E+1]=e.data[k+1],d[E+2]=e.data[k+2]}else d[E]=255,d[E+1]=255,d[E+2]=255}}const f=Fn({width:u,height:l,channels:3,data:d},yt,yt),m=yt*yt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function q2(e){return e[1]}const ti=[1,3,6],V2=.5;function H2(e){if(e.length!==ti.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ti[t],prob:e[t]}}function j2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ti.includes(i.denomination)&&i.prob>=V2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const K2=2.25,ni=3,Y2=1.15,X2=.5,Q2=2.5,Z2=.75,J2=2.25,ex=1.3,tx=.77;function ri(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function nx(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),t.length<=2)return t;const n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function jm(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[(o+1)%i];if(s>t!=l>t){const c=(u-a)*(t-s)/(l-s)+a;e<c&&(r=!r)}}return r}function rx(e,t,n){if(n.length>=3&&jm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[i>1?(o+1)%i:o],c=u-a,d=l-s,p=c*c+d*d,f=p===0?0:Math.max(0,Math.min(1,((e-a)*c+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(a+f*c),t-(s+f*d)))}return r}function ix(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function ox(e,t,n){const[r,i]=e,o=t[0]-r,a=t[1]-i;if(o===0&&a===0)return!1;const[s,u,l,c]=n;let d=0,p=1;const f=[[-o,r-s],[o,l-r],[-a,i-u],[a,c-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?d=Math.max(d,w):p=Math.min(p,w),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const Ca=e=>e.box[3]/Math.max(1,e.box[2]),Zt=e=>Ca(e)>Y2,Hn=e=>Ca(e)>=ex||Ca(e)<=tx;function Aa(e){const[t,n,r,i]=e.box;if(r>=i){const a=7*i;return[t,n-a,r,i+2*a]}const o=7*r;return[t-o,n,r+2*o,i]}function Ra(e,t,n,r,i){const o=new Set(t),a=[...e.map((O,C)=>({box:[O[0],O[1],O[2],O[3]],kind:o.has(C)?"card":"tucked",src:["banner",C]})),...n.map((O,C)=>({box:[O[0],O[1],O[2],O[3]],kind:"wonder",src:["wonder",C]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(a.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=a.map(O=>[O.box[0]+O.box[2]/2,O.box[1]+O.box[3]/2]);let c=a.filter(O=>O.kind!=="wonder").map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,C)=>O-C);c.length===0&&(c=a.map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,C)=>O-C));const d=c[Math.floor(c.length/2)],p=(K2*d)**2,f=a.map((O,C)=>C),m=O=>{let C=O;for(;f[C]!==C;)f[C]=f[f[C]],C=f[C];return C},y=a.map((O,C)=>O.kind==="card"?C:-1).filter(O=>O>=0),w=a.map((O,C)=>O.kind!=="card"?C:-1).filter(O=>O>=0);for(let O=0;O<y.length;O+=1)for(let C=O+1;C<y.length;C+=1){const z=y[O],U=y[C],P=a[z],j=a[U];if(Hn(P)&&Hn(j)&&Zt(P)!==Zt(j))continue;const ie=l[z][0]-l[U][0],J=l[z][1]-l[U][1],me=ie*ie+J*J;let Te=me<=p;!Te&&Hn(P)&&Hn(j)&&Zt(P)===Zt(j)&&me<=(4*d)**2&&(Te=ri(Aa(P),Aa(j))<=.5*d),Te&&(f[m(z)]=m(U))}for(let O=0;O<w.length;O+=1)for(let C=O+1;C<w.length;C+=1){const z=w[O],U=w[C];ri(a[z].box,a[U].box)<=Z2*d&&(f[m(z)]=m(U))}const b=new Map;for(const O of w){const C=m(O);b.set(C,[...b.get(C)??[],O])}const x=new Map;for(const O of y){const C=m(O);x.set(C,[...x.get(C)??[],O])}for(const O of b.values()){const C=O.filter(j=>a[j].kind==="wonder"&&Hn(a[j])).map(j=>Zt(a[j])),z=C.length>0?C.filter(Boolean).length*2>C.length:null,U=[];for(const[j,ie]of x){let J=Number.POSITIVE_INFINITY;for(const W of O)for(const ee of ie)J=Math.min(J,ri(a[W].box,a[ee].box));if(J>J2*d)continue;const Te=ie.filter(W=>Zt(a[W])).length/ie.length>=.5;z!==null&&Te!==z||U.push([j,J,Te])}if(U.length===0)continue;const P=new Set(U.map(j=>j[2]));if(U.length>=2&&P.size===1&&z!==null){const j=U[0][0];for(const[ie]of U.slice(1))f[m(ie)]=m(j);f[m(O[0])]=m(j)}else{const j=U.reduce((ie,J)=>J[1]<ie[1]?J:ie);f[m(O[0])]=m(j[0])}}let M=new Map;for(let O=0;O<a.length;O+=1){const C=m(O);M.set(C,[...M.get(C)??[],O])}const v=a.map((O,C)=>O.kind==="wonder"?C:-1).filter(O=>O>=0);if(v.length>0){const O=(z,U)=>{const[P,j,ie,J]=Aa(a[z]),[me,Te,W,ee]=a[U].box,ne=Math.max(0,Math.min(P+ie,me+W)-Math.max(P,me)),oe=Math.max(0,Math.min(j+J,Te+ee)-Math.max(j,Te));return ne*oe>=.9*a[z].box[2]*a[z].box[3]},C=new Map;for(let z=0;z<a.length;z+=1)if(!(a[z].kind!=="card"||!Hn(a[z])))for(const U of v){const P=ri(a[z].box,a[U].box);if(P<=.8*d&&Zt(a[z])!==Zt(a[U])&&O(z,U)){const j=C.get(U);(!j||P<j[1])&&C.set(U,[z,P])}}for(const[z,[U]]of C){const P=m(z);for(const[j,ie]of M){const J=ie.indexOf(U);if(J>=0&&j!==P){ie.splice(J,1),M.set(P,[...M.get(P)??[],U]),a[U].kind="tucked";break}}}M=new Map([...M].filter(([,z])=>z.length>0))}const I=O=>O.filter(C=>a[C].kind==="card").length,E=O=>{const C=O.filter(z=>a[z].kind==="card"||a[z].kind==="wonder");return C.length===0?null:C.filter(z=>Zt(a[z])).length/C.length},k=O=>[O.reduce((C,z)=>C+l[z][0],0)/O.length,O.reduce((C,z)=>C+l[z][1],0)/O.length],S=[i[0]/2,i[1]/2],R=[...M.values()].sort((O,C)=>{const z=I(O),U=I(C);if(z!==U)return U-z;const P=Math.hypot(k(O)[0]-S[0],k(O)[1]-S[1]),j=Math.hypot(k(C)[0]-S[0],k(C)[1]-S[1]);return P-j}),B=k(R[0]),Y=E(R[0]),G=R.map((O,C)=>{if(C===0||I(O)<ni)return"player";const z=E(O),U=z!==null&&Y!==null&&Math.abs(z-Y)>=X2,P=k(O),j=r.some(ie=>ox(B,P,ie));return U||j?"opponent":"player"});if(!G.includes("opponent")){const O=z=>z.reduce((U,P)=>U+(a[P].kind==="wonder"?1:0),0);let C=G.map((z,U)=>U).filter(z=>z>0&&(I(R[z])>=ni||O(R[z])>=2));if(C.reduce((z,U)=>z+O(R[U]),0)<1&&(C=[]),C.length>0&&(I(R[0])<2*ni||C.reduce((z,U)=>z+I(R[U]),0)<2*ni)&&(C=[]),C.length>0){const z=new Map(C.map(j=>[j,k(R[j])])),U=(j,ie)=>(j[0]-ie[0])**2+(j[1]-ie[1])**2;if(C.every((j,ie)=>C.slice(ie+1).every(J=>U(z.get(j),z.get(J))<Math.min(U(z.get(j),B),U(z.get(J),B)))))for(const j of C)G[j]="opponent"}}const q=[],N=[];let F=!1;R.forEach((O,C)=>{const z=G[C];z==="opponent"&&(F=!0);const U=[],P=[];for(const j of O){const[ie,J,me,Te]=a[j].box;U.push([ie,J],[ie+me,J],[ie,J+Te],[ie+me,J+Te]),P.push(a[j].box);const[W,ee]=a[j].src;W==="banner"?s[ee]=z:u[ee]=z}q.push([z,nx(U)]),N.push([z,P])});const X=(O,C,z)=>Math.min(...N[z][1].map(U=>ix(O,C,U))),Z=(O,C)=>q.map(([,z],U)=>z.length>=3&&jm(O,C,z)?U:-1).filter(z=>z>=0),le=(O,C)=>{if(q.length===0)return"player";const z=d>0?Q2*d:Number.POSITIVE_INFINITY,U=Z(O,C);if(U.length>0){const ie=U.reduce((J,me)=>X(O,C,me)<X(O,C,J)?me:J);return q[ie][0]}let P=-1,j=Number.POSITIVE_INFINITY;return q.forEach(([,ie],J)=>{const me=rx(O,C,ie);me<j&&(P=J,j=me)}),P>=0&&j<=z?q[P][0]:"none"},L=(O,C)=>{if(q.length===0)return"none";const z=Z(O,C);if(z.length===0)return"none";const U=z.reduce((P,j)=>X(O,C,j)<X(O,C,P)?j:P);return q[U][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:F,hulls:q,hullBoxCounts:N.map(([,O])=>O.length),pointOwner:le,pointInside:L}}const ax=3;function sx(e,t=ax){const n=e.length,r=Array.from({length:n},(a,s)=>s),i=a=>{for(;r[a]!==a;)r[a]=r[r[a]],a=r[a];return a};for(let a=0;a<n;a+=1)for(let s=a+1;s<n;s+=1){const u=e[a],l=e[s],c=Number(u.center[0]),d=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![c,d,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(c-p,d-f)<=t*(m+y)&&(r[i(a)]=i(s))}const o=new Map;for(let a=0;a<n;a+=1){const s=i(a);o.has(s)||o.set(s,[]),o.get(s).push(a)}return[...o.values()]}function ux(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),a=Number(n[3]),s=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,a)-t,0,t-Math.max(i,a));return Math.hypot(s,u)}function Oa(e,t,n,r){const i=new Set(e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n));if(i.size===0)return[];const o=[];for(const a of sx(e)){const s=a.map(y=>e[y]),u=s.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,d=0;for(const y of s){const w=Number(y.center[0]),b=Number(y.center[1]);c+=w,d+=b,t.pointInside(w,b)===n&&(l+=1)}const p=c/s.length,f=d/s.length,m=r&&r.length>0?Math.min(...r.map(y=>ux(p,f,y))):0;o.push({cle:[...a].sort((y,w)=>y-w).join(","),membres:s,miens:u,inside:l,dPiste:m,centre:[p,f],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return o}function lx(e){return e.reduce((t,n)=>{const r=[t.inside>0?1:0,t.inside,t.dPiste,t.valeur],i=[n.inside>0?1:0,n.inside,n.dPiste,n.valeur];for(let o=0;o<4;o+=1){if(i[o]>r[o])return n;if(i[o]<r[o])return t}return t})}function cx(e,t,n,r){const[i,o]=e.centre,a={};for(const c of["player","opponent"]){const d=Oa(t,n,c,r).filter(p=>p.cle!==e.cle);a[c]=d.length===0?1/0:Math.min(...d.map(p=>Math.hypot(i-p.centre[0],o-p.centre[1])))}if(a.player!==a.opponent)return a.player>a.opponent?"player":"opponent";const s=c=>{const d=Oa(t,n,c,r).find(p=>p.cle===e.cle);return d?[d.inside,d.dPiste,d.valeur]:[-1,-1,-1]},u=s("player"),l=s("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function dx(e,t,n){const r={player:[],opponent:[]},i={};for(const a of["player","opponent"]){const s=Oa(e,t,a,n);s.length>0&&(i[a]=lx(s))}const o=Object.keys(i);if(o.length===0)return r;if(o.length===2&&i.player.cle===i.opponent.cle){const a=cx(i.player,e,t,n);return r[a]=i[a].membres,r}for(const a of o)r[a]=i[a].membres;return r}function hx(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{return dx(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const px=1280,fx=80,mx=3,gx=3,yx=.3,wx=2.4,bx=1,_x=5.2,xx=5;function Na(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function $x(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=yx&&r/n<=wx&&i/n>=bx&&i/n<=_x&&i/r<=xx}function vx(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*px/r<fx}function Mx(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),o=r.poly.map(s=>s[1]),a=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/a,cy:o.reduce((s,u)=>s+u,0)/a,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),a=Number(r[2]),s=Number(r[3]);if(![i,o,a,s].every(Number.isFinite))continue;const u=i+a/2,l=o+s/2;let c=n[0],d=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<d&&(d=f,c=p)}c.extra.push([i,o],[i+a,o+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Km(e,t,n,r,i=[]){const o=Na(n);if(!vx(e,t,o))return[];const a=r.filter(l=>l.n>=gx&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),s=Math.round(o*mx),u=[];for(const l of Mx(a,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...c))-s),f=Math.max(0,Math.trunc(Math.min(...d))-s),m=Math.min(e,Math.trunc(Math.max(...c))+s),y=Math.min(t,Math.trunc(Math.max(...d))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function Sx(e,t,n){if(!e||e.length<4)return null;const[r,i,o,a]=[e[0],e[1],e[2],e[3]];return $x(o,a,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(a)]:null}function Ix(e,t,n,r,i){return Km(e,t,n,r,i)}function Tx(e,t){var s,u,l,c;const[n,r,i,o]=t,a=[];for(const d of e){const p=Number((s=d.box)==null?void 0:s[0]),f=Number((u=d.box)==null?void 0:u[1]),m=Number((l=d.box)==null?void 0:l[2]),y=Number((c=d.box)==null?void 0:c[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>o||a.push({...d,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return a}function Ex(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,o=r.y+r.height/2;let a=!1;for(const s of t){if(n.id&&s.id===n.id){a=!0;break}const u=s.boundingBox,l=u.x+u.width/2,c=u.y+u.height/2,d=.5*Math.min(u.width,u.height);if((i-l)**2+(o-c)**2<d*d){a=!0;break}}a||t.push(n)}return t}function Ym(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const kx=1.1,Cx=3.2,Ax=20,Rx=.5,Ox=1280,Nx=.18,zx=28,Bx=.3;function Px(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let a=0;a<30;a++){const s=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(s.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(s.reduce((c,d)=>c+d,0)/s.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((a,s)=>(a<=r?i:o).push(s)),[i,o]}function Dx(e,t,n=kx){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),a=e.map(l=>l[1]+l[3]/2),s=Math.max(...o)-Math.min(...o)>Math.max(...a)-Math.min(...a)?o:a,u=[];for(const l of Px(s)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,B)=>R-B),p=d[Math.trunc(d.length/2)],f=Cx*p,m=Math.max(0,Math.min(...c.map(R=>R[0]))-f),y=Math.max(0,Math.min(...c.map(R=>R[1]))-f),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+f),b=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=Rx*p*Ox/x,v=M>0?Math.max(1,Math.ceil(Ax/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,k=(I?w-m:b-y)/v,S=k*(1+Nx);for(let R=0;R<v;R++){let B=(I?m:y)+R*k-(S-k)/2;B=Math.max(I?m:y,B);const Y=Math.min(I?w:b,B+S);u.push(I?[Math.trunc(B),Math.trunc(y),Math.trunc(Y),Math.trunc(b)]:[Math.trunc(m),Math.trunc(B),Math.trunc(w),Math.trunc(Y)])}}return u.filter(([l,c,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-c))>=n)}function Ux(e,t,n,r=zx){const[i,o]=n,a=e;for(const[s,u,l,c]of t){const d=(s+l)/2+i,p=(u+c)/2+o;a.some(([m,y,w,b])=>{const x=d-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||a.push([s+i,u+o,l+i,c+o])}return a}function Lx(e,t,n,r=Bx){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function Fx(e,t,n){return n.some(([r,i,o,a])=>r<=e&&e<=o&&i<=t&&t<=a)}function Gx(e,t,n,r){return n.length===0?!1:Fx(e,t,n)&&!Lx(e,t,r)}const Xm=4,Qm=8,ii=5,kn="base-game rule";function Dt(e,t){return{code:e,message:t,severity:"warning"}}function za(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function Wx(e,t=""){const n=e.filter(a=>!!a),r=t||"a player",i=[];n.length>Xm&&i.push(Dt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Xm} (${kn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=za(n);return o.length>0&&i.push(Dt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${kn}), so one of the two readings is wrong.`)),i}function qx(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(a=>!!a))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>Qm&&t.push(Dt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Qm} are in play (${kn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,a]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],c=[...a].filter(d=>l.has(d)).sort();c.length>0&&t.push(Dt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function Vx(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(a=>!!a));r.length>ii&&n.push(Dt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ii} are in play (${kn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=za(r);if(i.length>0&&n.push(Dt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${kn}).`)),t!==null){const o=t.filter(Boolean),a=r.length+o.length;a!==ii&&n.push(Dt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${a}, but exactly ${ii} are in play (${kn}) — one is missing or one was counted twice.`));const s=new Set(o),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Dt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function Hx(e,t=""){const n=t||"a player",r=[],i=e.filter(a=>!a).length;i>0&&r.push(Dt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=za(e.filter(a=>!!a));return o.length>0&&r.push(Dt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${kn}).`)),r}const jx=.25,Kx=.45;function Yx(e,t,n,r,i){const o=Math.cos(i),a=Math.sin(i),s=[n/2*o,n/2*a],u=[-r/2*a,r/2*o],c=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function Ba(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function Zm(e,t){const n=Ba(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function Xx(e,t,n){const r=Ba(e,t),i=Ba(e,n),o=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,o,!0))}finally{r.delete(),i.delete(),o.delete()}}function Qx(e,t,n=Kx){const r=[...t].sort((o,a)=>a.confidence-o.confidence),i=[];for(const o of r){let a=!1;for(const s of i){const u=Xx(e,o.quad,s.quad);if(u<=0)continue;const l=Zm(e,o.quad)+Zm(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){a=!0;break}}a||i.push(o)}return i}function Zx(e,t,n,r,i=jx){const o=[];for(let a=0;a<n;a++){const s=t[4*n+a];if(s<i)continue;const l=Yx(t[a],t[n+a],t[2*n+a],t[3*n+a],t[5*n+a]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);o.push({quad:l,confidence:s})}return Qx(e,o)}const Jx=128,e$=88;function t$(e,t,n,r=Jx,i=e$){const o=new e.Mat(t.height,t.width,e.CV_8UC3),a=o.data,s=t.channels;for(let p=0,f=t.width*t.height;p<f;p++)a[p*3]=t.data[p*s],a[p*3+1]=t.data[p*s+1],a[p*3+2]=t.data[p*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(p=>[p[0],p[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(o,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{o.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function n$(e){return[e[2],e[3],e[0],e[1]]}const r$=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],i$=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],o$=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],a$=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],s$=[...i$,...o$,...a$,...r$];Object.fromEntries(s$.map(e=>[e.id,e]));const u$=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Jm=.2,l$=.3,eg=.25,Pa={total:0,idDiff:0,verdictDiff:0},wt={pass1Calls:0,pass1Boxes:0,pass1Kept:0,pass2Calls:0,pass2Boxes:0,pass2Promoted:0},Ut={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},oi={total:0,memeK:0,memeKInverse:0,detail:[]};function c$(e,t,n){for(const r of e){let i=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const s=r[o],u=r[a];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(o=>[o[0],o[1]])}return null}function d$(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=eg)return!1;const i=e.x+e.width,o=e.y+e.height;for(const a of n){const s=a.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=o))continue;const c=s[2]/s[3];if(!(Math.abs(Math.log(c))<=eg)&&r>1==c>1)return!0}return!1}async function h$(e,t,n,r,i=[0,1,2,3]){const[o,a,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*Jm),c=Math.round(u*Jm),d=Math.max(0,Math.round(o-l)),p=Math.max(0,Math.round(a-c)),f=Math.min(e.width,Math.round(o+s+l)),m=Math.min(e.height,Math.round(a+u+c)),y=f-d,w=m-p;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let I=0;I<w;I++){const E=((p+I)*e.width+d)*b;x.set(e.data.subarray(E,E+y*b),I*y*b)}const M={width:y,height:w,channels:b,data:x};let v=null;for(const I of i){const E=I===0?M:Yt(M,I),k=E.width,S=k-Math.floor(l$*k),R=k-S;if(R<=0)continue;const B=new Uint8ClampedArray(R*E.height*E.channels);for(let F=0;F<E.height;F++){const X=(F*k+S)*E.channels;B.set(E.data.subarray(X,X+R*E.channels),F*R*E.channels)}const Y={width:R,height:E.height,channels:E.channels,data:B},G=Qr(Y),N=(await n.run({[n.inputNames[0]]:new Be("float32",G,[1,3,gt,gt])}))[n.outputNames[0]].data[1]??0;r&&(r[I]=N),v=v===null?N:Math.max(v,N)}return v}async function tg(e,t,n,r,i,o,a){var f;const s=async m=>(await i.run({[i.inputNames[0]]:new Be("float32",m,[1,3,Qt,Qt])}))[i.outputNames[0]].data,u=e.obbQuads===void 0?null:await et("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(m){return console.warn("[wonders-obb] détection échouée, repli ORB :",m),null}}),l=new Map;for(const m of r){const[y,w,b,x]=m;if(b<=0||x<=0)continue;const M=u===null?null:c$(u,y+b/2,w+x/2);if(M===null||e.redresserQuad===void 0)continue;let v=M;const I=at("identify: redressement du quad",()=>e.redresserQuad(n,v)),E=Dm(),{id:k,prob:S,inverse:R}=await et("classifieur merveille (1 lecture)",()=>d2(I,s));if(k===""||S<E)continue;R&&(v=n$(v).map(Y=>[Y[0],Y[1]]));const B=l.get(k);(B===void 0||S>B.prob)&&l.set(k,{prob:S,box:m,quad:v})}const c=[],d=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[m,{prob:y,box:w,quad:b}]of l){const[x,M,v,I]=w;let E={x:Math.round(x),y:Math.round(M),width:Math.round(v),height:Math.round(I)},k=null,S=[],R=null;if(b!==null){k=b;const L=k.map(U=>U[0]),O=k.map(U=>U[1]),C=Math.max(0,Math.round(Math.min(...L))),z=Math.max(0,Math.round(Math.min(...O)));if(E={x:C,y:z,width:Math.min(n.width,Math.round(Math.max(...L)))-C,height:Math.min(n.height,Math.round(Math.max(...O)))-z},d!==null)try{const U=await e.wonderRef(m),P=k,j=U===null||P===null?null:at("identify: bande droite #63",()=>Ia(t,n,U,P));if(j!==null){const ie=at("identify: preprocess tuck",()=>Qr(j)),J=await d.run({[d.inputNames[0]]:new Be("float32",ie,[1,3,gt,gt])});R=Ta(J[d.outputNames[0]].data).prob,S=R>=Wn?["R"]:[]}}catch{}}else if(Date.now()<o)try{const L=await et("chargement refs merveilles",()=>e.wonderRef(m));if(L!==null){const O=at("ORB registration (merveille)",()=>Mm(t,n,L,w));if(O!==null){k=O.footprint,S=O.overflow;const C=k.map(j=>j[0]),z=k.map(j=>j[1]),U=Math.max(0,Math.round(Math.min(...C))),P=Math.max(0,Math.round(Math.min(...z)));if(E={x:U,y:P,width:Math.min(n.width,Math.round(Math.max(...C)))-U,height:Math.min(n.height,Math.round(Math.max(...z)))-P},d!==null)try{const j=k,ie=j===null?null:at("identify: bande droite #63",()=>Ia(t,n,L,j));if(ie!==null){const J=at("identify: preprocess tuck",()=>Qr(ie)),me=await d.run({[d.inputNames[0]]:new Be("float32",J,[1,3,gt,gt])});R=Ta(me[d.outputNames[0]].data).prob}}catch{}}}}catch(L){console.warn(`[wonders-cls] ${m} registration failed:`,L)}const B=k!==null?Xr(k,S):null,Y=b!==null&&k!==null?Xr(k,["R"]):null,G=[];if(R!==null&&G.push(R>=Wn?1:0),p!==null)try{let L=[0,1,2,3];if(b!==null){const z=b[1][1]-b[0][1],U=b[1][0]-b[0][0],P=(Math.round(Math.atan2(z,U)*180/Math.PI/90)%4+4)%4;L=[(0+P)%4,(2+P)%4]}const O=[0,0,0,0],C=await et("identify: sonde marges (#68)",()=>h$(n,w,p,O,L));if(C!==null&&(G.push(C>=Wn?1:0),b!==null)){const z=b[1][1]-b[0][1],U=b[1][0]-b[0][0],P=(Math.round(Math.atan2(z,U)*180/Math.PI/90)%4+4)%4,j=Math.max(O[(0+P)%4],O[(2+P)%4]);Ut.total+=1;const ie=C>=Wn?1:0,J=j>=Wn?1:0;ie===1&&(Ut.positifs4+=1),J===1&&(Ut.positifs2+=1),ie!==J&&(Ut.divergent+=1,Ut.detail.push(`${m.slice(0,12)}:v4=${ie}/v2=${J} p=[${O.map(me=>me.toFixed(2)).join(",")}]kQ${P}`))}}catch{}const q=Y??B??E,N=a.some(L=>{const O=L.box[0]+L.box[2]/2,C=L.box[1]+L.box[3]/2;return O>=q.x&&O<=q.x+q.width&&C>=q.y&&C<=q.y+q.height});G.push(N?1:0);let F=G.length>0&&G.reduce((L,O)=>L+O,0)*2>G.length;F&&d$(q,E,a)&&(F=!1);const X=B??(F&&Y!==null?Y:null),Z={id:m,name:((f=u$[m])==null?void 0:f.name)??m,builtWithCardUnderneath:F,boundingBox:E,confidence:Math.round(y*1e4)/1e4,...X?{tuckRegion:X}:{}},le=X??E;c.push({obj:Z,edgeScores:null,zone:{x0:le.x,y0:le.y,x1:le.x+le.width,y1:le.y+le.height},quad:k,region:X})}return c}async function ng(e,t,n,r,i,o,a=[]){let s=await e.localiseWonders(n);return s.length===0?[]:a.length>0&&(s=s.filter(([u,l,c,d])=>{const p=u+c/2,f=l+d/2;return!a.some(m=>{const y=m.x+m.width/2,w=m.y+m.height/2,b=.5*Math.min(m.width,m.height);return(p-y)**2+(f-w)**2<b*b})}),s.length===0)?[]:tg(e,t,n,s,r,i,o)}function p$(e,t){const n=Ym(e.obj.boundingBox,t),r=e.region===null?null:Ym(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([o,a])=>[o+t[0],a+t[1]]),region:r}}async function rg(e){try{const t=Ix(e.image.width,e.image.height,e.banners.map(a=>a.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const a of t){const s=e.cropFrame(a);if(s.width<=0||s.height<=0)continue;const u=e.skipKnownNear?e.known.map(l=>({x:l.boundingBox.x-a[0],y:l.boundingBox.y-a[1],width:l.boundingBox.width,height:l.boundingBox.height})):void 0;for(const l of await e.detect(s,Tx(e.banners,a),u))n.push(p$(l,a))}if(e.builtSeenOut)for(const a of n)a.obj.id&&a.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(a.obj.id);if(n.length===0)return[];const r=[...e.known.map(a=>({boundingBox:a.boundingBox,id:a.id,neuf:-1})),...n.map((a,s)=>({boundingBox:a.obj.boundingBox,id:a.obj.id,neuf:s}))],i=Ex(r),o=[];for(const a of i){const s=a.neuf;s>=0&&o.push(n[s])}return o}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const je="/7wd-scorer/models/",Da=[];let Ct=null;function f$(){Da.length=0,Ct=null}function m$(e){const t=performance.now();Ct!==null&&Da.push({nom:Ct.nom,ms:Math.round(t-Ct.debut)}),Ct={nom:e,debut:t}}function ig(){const e=[...Da];Ct!==null&&e.push({nom:`${Ct.nom} (en cours)`,ms:Math.round(performance.now()-Ct.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function og(){const e={};for(const t of Object.keys(nt))e[nt[t].onnx]=ui.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ut)e[t]=n;return e}function g$(){var e,t;return si(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:ze.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let ag=!1;const ai=new Map;function si(){var e;ag||(ze.wasm.wasmPaths="/7wd-scorer/ort/",ze.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,ag=!0)}const ui=new Set;function y$(e){si();let t=ai.get(e);return t===void 0&&(t=et(`session: 1er chargement ${nt[e].onnx}`,()=>zn.create(`${je}${nt[e].onnx}`,{executionProviders:ui.has(e)?["wasm"]:["webgpu","wasm"]})),ai.set(e,t),t.catch(()=>ai.delete(e))),t}const ut=new Map;let gr=0,yr=0;const li=new Map;function Ua(e){const t=(Ct==null?void 0:Ct.nom)??"(hors etage)";li.set(t,(li.get(t)??0)+e)}function w$(){return[...li.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let La=0;function b$(){return{ms:Math.round(gr),appels:yr,preparationMs:Math.round(La)}}function _$(){gr=0,yr=0,La=0,Gw(),li.clear(),sv()}const sg=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx"]),Fa=new Set;let Ga=null;async function Wa(e){if(Ga)return await Ga.catch(()=>{}),e();const t=e();return Ga=t.catch(()=>{}),t}async function qa(e,t){return Wa(()=>zn.create(`${je}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function ft(e){return et(`session: 1er chargement ${e}`,()=>x$(e))}async function x$(e){si();const t=!sg.has(e)&&!Fa.has(e);let n=null;if(t)try{n=await qa(e,!0),ut.set(e,"webgpu")}catch(a){Fa.add(e),ut.set(e,`wasm (webgpu refuse a la creation: ${String(a).slice(0,60)})`)}else ut.set(e,sg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await qa(e,!1)}catch(a){return ut.set(e,`ECHEC wasm: ${String(a).slice(0,160)}`),null}let r=n,i=ut.get(e)==="webgpu";const o=async(a,...s)=>{const u=performance.now();try{const l=await r.run(a,...s),c=performance.now()-u;return gr+=c,Ua(c),yr+=1,l}catch(l){if(!i)throw l;Fa.add(e),ut.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await qa(e,!1);const c=await r.run(a,...s),d=performance.now()-u;return gr+=d,Ua(d),yr+=1,c}};return new Proxy(r,{get(a,s,u){if(s==="run")return o;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let Va=null,Ha=null;const $$=.75,v$=4,M$=.65,S$=3e4;let ja=null;function jn(){return ja===null&&(ja=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ja}const ug=new Map;function Ka(e){let t=ug.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${je}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const a=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),ug.set(e,t)),t}function Ya(e){return Ka(`wonder-refs/${e}.jpg`)}const lg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function I$(){const e=new Map;for(const t of lg){const n=await Ka(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function T$(){const e=new Map;for(const t of lg){const n=await Ka(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const E$=.6,k$=12,C$=45e3;let Xa=null;function cg(){return Xa===null&&(si(),Xa=(async()=>{try{const[e,t,n,r]=await Promise.all([Wa(()=>zn.create(`${je}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]})),Wa(()=>zn.create(`${je}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]})),fetch(`${je}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${je}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:m_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Xa}async function A$(e,t){const n=Math.max(f_/Xt,t.width/t.height),{tensor:r,width:i}=y_(t,n),o={[e.rec.inputNames[0]]:new Be("float32",r,[1,3,Xt,i])},a=(await e.rec.run(o))[e.rec.outputNames[0]],[s,u,l]=a.dims,c=a.data,d=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=c[w+b];x>y&&(y=x,m=b)}d[f]=m,p[f]=y}return g_(d,p,e.charset)}function R$(...e){return et("merveilles (OCR+ORB+opencv)",()=>O$(...e))}async function O$(e,t){const n=await cg();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+C$;let o=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){o=!0;break}t(`wonder names: rotation ${a*90}°…`,a/4);const s=Yt(e,a),u=i_(s),l={[n.det.inputNames[0]]:new Be("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(l))[n.det.outputNames[0]],d=c_(c.data,u,s.width,s.height).slice(0,k$);console.debug(`[wonders-ocr] rot ${a*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){o=!0;break e}const f=d_(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await A$(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<E$||m.trim().length<v$)continue;const w=M_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<$$||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Qa(p,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:o}}function Qa(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],a=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],s=a.map(d=>d[0]),u=a.map(d=>d[1]),l=Math.min(...s),c=Math.min(...u);return{x:l,y:c,width:Math.max(...s)-l,height:Math.max(...u)-c}}function N$(){return Ha===null&&(Ha=fetch(`${je}laurel_gallery.json`).then(async e=>e.ok?Hb(await e.json()):[]).catch(()=>[])),Ha}function z$(e,t,n,r){return at("crop",()=>B$(e,t,n,r))}function B$(e,t,n,r){return Lt(e,t-r,n-r,2*r,2*r)}function Lt(e,t,n,r,i){return at("crop",()=>P$(e,t,n,r,i))}function P$(e,t,n,r,i){const o=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-o),c=Math.max(0,u-a),d=new Uint8Array(l*c*3);for(let p=0;p<c;p++)for(let f=0;f<l;f++){const m=((p+a)*e.width+(f+o))*e.channels,y=(p*l+f)*3;d[y]=e.data[m],d[y+1]=e.data[m+1],d[y+2]=e.data[m+2]}return{width:l,height:c,channels:3,data:d}}function D$(){return Va===null&&(Va=fetch(`${je}token_templates.json`).then(async e=>e.ok?L1(await e.json()):new Map).catch(()=>new Map)),Va}let Za=null;function dg(){return Za===null&&(Za=(async()=>{try{const e=await fetch(`${je}token_embed_index.json`);if(!e.ok)return null;const t=K1(await e.json()),n=await ft("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),Za}const U$=.92;let Ja=null;function hg(){return Ja===null&&(Ja=(async()=>{try{return(await fetch(`${je}guild_classifier.onnx`,{method:"HEAD"})).ok?await ft("guild_classifier.onnx"):null}catch{return null}})()),Ja}let es=null;function pg(){return es===null&&(es=(async()=>{try{return(await fetch(`${je}laurel_digit.onnx`,{method:"HEAD"})).ok?await ft("laurel_digit.onnx"):null}catch{return null}})()),es}let ts=null,ns=null;function fg(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${je}banner_class.onnx`,{method:"HEAD"})).ok?await ft("banner_class.onnx"):null}catch{return null}})()),ns}async function L$(e,t){if(t.length===0)return t;const n=await fg();if(n===null)return t;const r=[];for(const i of t)try{const o=S2(i.box,e.width,e.height);if(o===null){r.push(i);continue}const a=Lt(e,o.x,o.y,o.w,o.h),s=I2(a),u=await n.run({[n.inputNames[0]]:new Be("float32",s,[1,3,cn,cn])});T2(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function mg(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${je}laurel_filter.onnx`,{method:"HEAD"})).ok?await ft("laurel_filter.onnx"):null}catch{return null}})()),ts}async function F$(e,t,n){let[r,i,o,a]=t,s=o-r,u=a-i;if(s<=0||u<=0)return null;if(s<Vn){const w=Math.floor((r+o)/2);r=w-Math.floor(Vn/2),o=w+Math.floor(Vn/2),s=o-r}if(u<Vn){const w=Math.floor((i+a)/2);i=w-Math.floor(Vn/2),a=w+Math.floor(Vn/2),u=a-i}const l=Math.trunc(Fm*s),c=Math.trunc(Fm*u),d=Math.max(0,r-l),p=Math.max(0,i-c),f=Math.min(e.width,o+l),m=Math.min(e.height,a+c),y=Lt(e,d,p,f-d,m-p);if(y.width<=0||y.height<=0)return null;try{const w=_2(y),b=await n.run({[n.inputNames[0]]:new Be("float32",w,[1,3,ln,ln])});return x2(b[n.outputNames[0]].data)}catch{return null}}let rs=null;function gg(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${je}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await ft("coin_filter_cnn.onnx"):null}catch{return null}})()),rs}let is=null;function yg(){return is===null&&(is=(async()=>{try{return(await fetch(`${je}coin_denom.onnx`,{method:"HEAD"})).ok?await ft("coin_denom.onnx"):null}catch{return null}})()),is}async function G$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Hm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*yt*yt);r.forEach((u,l)=>i.set(u,l*u.length));const a=(await n.run({[n.inputNames[0]]:new Be("float32",i,[t.length,3,yt,yt])}))[n.outputNames[0]].data,s=ti.length;return t.map((u,l)=>H2(a.subarray(l*s,l*s+s)))}catch{return null}}async function W$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=Hm(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const c=new Float32Array(t.length*3*yt*yt);l.forEach((f,m)=>c.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new Be("float32",c,[t.length,3,yt,yt])}))[n.outputNames[0]].data;return t.map((f,m)=>q2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),a=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,s=Math.trunc(a);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let os=null;function as(){return os===null&&(os=(async()=>{try{return(await fetch(`${je}tuck_classifier.onnx`,{method:"HEAD"})).ok?await ft("tuck_classifier.onnx"):null}catch{return null}})()),os}const wg=.1;let ss=null;function us(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${je}track_band_brut.onnx`,{method:"HEAD"})).ok?await ft("track_band_brut.onnx"):null}catch{return null}})()),ss}async function bg(e,t,n){try{const r=Hr(t,1280,Kw(t.width,t.height,n)),o=(await e.run({[e.inputNames[0]]:new Be("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return sm(o.data,o.dims[1]??0,o.dims[2]??0,r.params,wg)}catch{return[]}}let ls=null;const q$=.4;function V$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function H$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const a=o.x+o.width/2,s=o.y+o.height/2;for(const u of n)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||V$(o,u)>=q$)return!1;for(const u of r)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function _g(){return ls===null&&(ls=(async()=>{try{return(await fetch(`${je}tuck_box.onnx`,{method:"HEAD"})).ok?await ft("tuck_box.onnx"):null}catch{return null}})()),ls}let cs=null;function xg(){return cs===null&&(cs=(async()=>{try{return(await fetch(`${je}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await j$(),await ft("wonder_classifier.onnx")):null}catch{return null}})()),cs}let $g=!1;async function j$(){if($g)return;const e=await(await fetch(`${je}wonder_classifier_seuil.json`)).json();o2(Number(e.seuil)),a2(e.classes),$g=!0}let vg=null,Mg=null;async function K$(e){var d;vg??(vg=ft("wonder_obb.onnx"));const t=await vg;if(t===null)return null;const n=await jn();if(n===null)return null;Mg=n;const{tensor:r,params:i}=Hr(e,1024),a=(await t.run({[t.inputNames[0]]:new Be("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],s=a.dims[a.dims.length-1],u=a.data;let l=0;for(let p=0;p<s;p++){const f=u[4*s+p];f>l&&(l=f)}const c=Zx(n,u,s,i);return ut.set("wonder_obb.onnx",`${ut.get("wonder_obb.onnx")??"?"} | dims=${a.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(d=c[0])!=null&&d.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(p=>p.quad.map(f=>[f[0],f[1]]))}const ds={wonderRef:Ya,tuckClassifier:as,tuckBoxClassifier:_g,obbQuads:K$,redresserQuad:(e,t)=>t$(Mg,e,t),localiseWonders:async e=>{try{const{rows:t,params:n}=await bt("wonder",e);return da(t,n,nt.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function Y$(e,t){const n=await dg();if(n!==null)try{const r=X1(e),i=new Be("float32",r,[4,3,un,un]),a=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Z1(n.index,Q1(a));return u<U$?["",-1]:[s,u]}catch{}return q1(e,t)}const Sg=new WeakMap;async function ci(e){const t=Sg.get(e);if(t!==void 0)return await t;const n=et("decodage image",()=>X$(e));return Sg.set(e,n),await n}async function X$(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const Ig=new WeakMap;async function bt(e,t){let n=Ig.get(t);n===void 0&&(n=new Map,Ig.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=Q$(e,t);return n.set(e,i),await i}async function Q$(e,t){const n=nt[e],r=performance.now(),{tensor:i,params:o}=Hr(t,n.input);La+=performance.now()-r;const a=async()=>{const s=await y$(e),u={[s.inputNames[0]]:new Be("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await s.run(u),d=performance.now()-l;gr+=d,Ua(d),yr+=1;const p=c[s.outputNames[0]];return{rows:new Float32Array(p.data),params:o}};try{return await a()}catch(s){if(ui.has(e))throw s;return ui.add(e),ai.delete(e),await a()}}const Z$=6,J$=4,ev=5,tv=2;async function nv(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ci(e),r=await bt("banner",n),i=jr(r.rows,r.params,nt.banner.conf);if(t.banners=i.length,i.length>=Z$)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await bt("laurel",n),a=pa(o.rows,o.params,nt.laurel.conf);if(t.laurels=a.length,a.length>=J$)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const s=await bt("coin",n),u=om(s.rows,s.params,nt.coin.conf);return t.coins=u.length,u.length>=ev?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=tv?{...t,kind:"board",confidence:.4}:t}function rv(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Tg(e,t,n,r,i,o,a,s){let u=0;r(`${i}: card banners…`,.04);const l=await bt("banner",e);let c=jr(l.rows,l.params,nt.banner.conf);c=await L$(e,c),r(`${i}: progress tokens…`,.08);let d=[];const p=await us();p!==null&&(d=await bg(p,e,c)),d.length>0&&c.length>0&&(c=c.filter(W=>{const ee=W.box[0]+W.box[2]/2,ne=W.box[1]+W.box[3]/2;return!d.some(([oe,ae,xe,_e])=>Math.min(oe,xe)<=ee&&ee<=Math.max(oe,xe)&&Math.min(ae,_e)<=ne&&ne<=Math.max(ae,_e))}));const f=await bt("token",e),m=await D$(),y=[],w=[];for(const W of ob(f.rows,f.params,nt.token.conf)){if(w.push({cx:W.cx,cy:W.cy,r:W.r}),d.some(([oe,ae,xe,_e])=>W.cx>=oe&&W.cx<=xe&&W.cy>=ae&&W.cy<=_e))continue;const[ee,ne]=await Y$(pm(e,W),m);ee===""&&ne<0?w.pop():ee===""?u+=1:!y.some(oe=>oe.id===ee)&&!s.some(oe=>oe.id===ee)&&y.push({id:ee,center:[W.cx,W.cy],radius:W.r,confidence:Math.round(ne*1e4)/1e4})}r(`${i}: coins…`,.14);const b=await bt("coin",e),x=om(b.rows,b.params,nt.coin.conf).filter(W=>!w.some(ee=>(W.cx-ee.cx)**2+(W.cy-ee.cy)**2<=W.r*W.r)),M=await gg(),v=M!==null?await W$(e,x,M):null,I=(v!==null?x.filter((W,ee)=>v[ee]>=Vm).map(W=>W.r):[]).sort((W,ee)=>W-ee),E=I.length>0?I.length%2===1?I[(I.length-1)/2]:(I[I.length/2-1]+I[I.length/2])/2:null,[k,S]=W2,R=x.map((W,ee)=>{const ne=v!==null?v[ee]:null;return ne===null||ne>=Vm?"keep":E!==null&&E>0&&W.r/E>=k&&W.r/E<=S?"suspect":"drop"}),B=x.filter((W,ee)=>R[ee]==="keep"),Y=Ab(e,B),G=await yg(),q=G!==null?await G$(e,B,G):null,N=j2(Y,q??Y.map(()=>null));N.map(W=>W.value);const F=[];let X=0;if(x.forEach((W,ee)=>{if(R[ee]==="drop")return;if(R[ee]==="suspect"){const oe=v[ee];F.push({denomination:null,center:[W.cx,W.cy],radius:W.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${oe.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const ne=N[X++];F.push({denomination:ne.value,center:[W.cx,W.cy],radius:W.r,denomSource:ne.source??"colour"})}),x.length>0&&F.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${x.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),F.length>=2){const W=F.map(ne=>ne.radius).sort((ne,oe)=>ne-oe),ee=W.length%2===1?W[(W.length-1)/2]:(W[W.length/2-1]+W[W.length/2])/2;if(ee>0)for(const ne of F)ne.radius/ee>2&&(ne.suspect=!0,ne.suspectReason=`radius ${ne.radius}px is ${(ne.radius/ee).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(F.length>=2)for(let W=0;W<F.length;W+=1)for(let ee=W+1;ee<F.length;ee+=1){const ne=F[W],oe=F[ee],ae=Math.hypot(ne.center[0]-oe.center[0],ne.center[1]-oe.center[1]);if(ae<1.1*Math.min(ne.radius,oe.radius))for(const xe of[ne,oe])xe.suspect||(xe.suspect=!0,xe.suspectReason=`almost concentric with another coin (${ae.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Z=[],le=[],L=[],O=Date.now()+S$;let C=null,z=null;const U=()=>(z===null&&(z=(async()=>{try{const{rows:W,params:ee}=await bt("wonder",e);return da(W,ee,nt.wonder.conf,Number.POSITIVE_INFINITY).map(ne=>ne.box)}catch{return[]}})()),z),P=[];let j=!1;const ie=await xg();if(ie!==null){const W=await U();if(W.length>0&&(C=await et("opencv.js (chargement)",()=>jn()),C!==null)){r(`${i}: identifying wonders…`,.35);const ee=await et("identifyWondersByClassifier",()=>tg(ds,C,e,W,ie,O,c));for(const ne of ee)Z.some(oe=>oe.id===ne.obj.id)||a.some(oe=>oe.id===ne.obj.id)||(Z.push(ne.obj),P.push({obj:ne.obj,edgeScores:ne.edgeScores,zone:ne.zone}),le.push(ne.zone),L.push({quad:ne.quad,region:ne.region}));j=ee.length>0}}j||r(`${i}: wonder names…`,.2);const J=j?{wonders:[],aborted:!1}:await R$(e,(W,ee)=>r(`${i}: ${W}`,.2+.35*(ee??0)));C===null&&(C=J.wonders.length>0?await jn():null);for(const W of J.wonders){let ee=null;if(C!==null&&Date.now()<O){r(`${i}: registering ${W.name}…`,.6);try{const ne=await Ya(W.id);if(ne!==null){let oe=B_(C,e,ne,[[W.nameBox.x,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y],[W.nameBox.x+W.nameBox.width,W.nameBox.y+W.nameBox.height],[W.nameBox.x,W.nameBox.y+W.nameBox.height]]);if(oe===null){const ae=await U(),xe=F_(ae,W.nameBox.x+W.nameBox.width/2,W.nameBox.y+W.nameBox.height/2);xe!==null&&(oe=Mm(C,e,ne,xe))}if(oe!==null){let ae=oe.built,xe=!1;const _e=await as();if(_e!==null)try{const ge=Ia(C,e,ne,oe.footprint);if(ge!==null){const we=Qr(ge),Se=await _e.run({[_e.inputNames[0]]:new Be("float32",we,[1,3,gt,gt])});ae=Ta(Se[_e.outputNames[0]].data).built,xe=!0}}catch{}const Q=oe.footprint.map(ge=>ge[0]),te=oe.footprint.map(ge=>ge[1]),se=Math.max(0,Math.round(Math.min(...Q))),pe=Math.max(0,Math.round(Math.min(...te)));ee={built:ae,boundingBox:{x:se,y:pe,width:Math.min(e.width,Math.round(Math.max(...Q)))-se,height:Math.min(e.height,Math.round(Math.max(...te)))-pe},tuckRegion:Xr(oe.footprint,oe.overflow),footprint:oe.footprint,edgeScores:oe.edgeScores,builtByTuck:xe}}}}catch(ne){console.warn(`[wonders-reg] ${W.id} failed:`,ne)}}if(ee!==null){const ne=ee.tuckRegion??ee.boundingBox;le.push({x0:ne.x,y0:ne.y,x1:ne.x+ne.width,y1:ne.y+ne.height}),L.push({quad:ee.footprint,region:ee.tuckRegion})}else{const ne=Math.max(8,W.nameBox.height),oe=Math.round(W.nameBox.width*.15);le.push({x0:W.nameBox.x-oe,y0:W.nameBox.y-ne*2.5,x1:W.nameBox.x+W.nameBox.width+oe,y1:W.nameBox.y+W.nameBox.height+ne*2.5}),L.push({quad:null,region:null})}if(!Z.some(ne=>ne.id===W.id)&&!a.some(ne=>ne.id===W.id)){const ne=(ee==null?void 0:ee.builtByTuck)===!0,oe=ne?ee.built:!1,ae=!ne&&(ee==null?void 0:ee.built)===!0,xe={id:W.id,name:W.name,builtWithCardUnderneath:oe,boundingBox:(ee==null?void 0:ee.boundingBox)??{x:0,y:0,width:0,height:0},...ee!=null&&ee.tuckRegion?{tuckRegion:ee.tuckRegion}:{},confidence:W.confidence,...ae?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};Z.push(xe),P.push({obj:xe,edgeScores:ee&&!ee.builtByTuck?ee.edgeScores:null,zone:le[le.length-1]})}}if(!j){const W=q_(P.map(ee=>({built:ee.obj.builtWithCardUnderneath,edgeScores:ee.edgeScores,zone:ee.zone})),c.map(ee=>[ee.box[0]+ee.box[2]/2,ee.box[1]+ee.box[3]/2]));for(const ee of W){const ne=P[ee];ne.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${ne.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(c.length>0){const ee=new Set(W);for(let ne=0;ne<P.length;ne++){const oe=P[ne];if(ee.has(ne)||!oe.obj.builtWithCardUnderneath)continue;const ae=oe.obj.tuckRegion;if(ae===void 0)continue;if(!c.some(_e=>{const Q=_e.box[0]+_e.box[2]/2,te=_e.box[1]+_e.box[3]/2;return Q>=ae.x&&Q<=ae.x+ae.width&&te>=ae.y&&te<=ae.y+ae.height})){const _e=oe.obj;_e.builtWithCardUnderneath=!1,_e.suspect=!0,_e.suspectReason="built-unconfirmed"}}}}if(J.aborted&&t.push({code:"LOW_CONFIDENCE",message:`${i}: the wonder-name read ran out of its time budget on this device — ${J.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),C!==null&&J.wonders.length>0&&Date.now()<O)try{const W=await cg(),ee=(W==null?void 0:W.catalog.filter(oe=>oe.kind==="wonder").map(oe=>oe.id))??[],ne=new Map;for(const oe of ee)if(!Z.some(ae=>ae.id===oe)&&!a.some(ae=>ae.id===oe)){const ae=await Ya(oe);ae!==null&&ne.set(oe,ae)}if(ne.size>0){r(`${i}: searching occluded wonders…`,.7);const oe=z_(C,e,ne,O);for(const ae of oe){const xe=ae.footprint.map(ye=>ye[0]),_e=ae.footprint.map(ye=>ye[1]),Q=Math.max(0,Math.round(Math.min(...xe))),te=Math.max(0,Math.round(Math.min(..._e))),se={x:Q,y:te,width:Math.min(e.width,Math.round(Math.max(...xe)))-Q,height:Math.min(e.height,Math.round(Math.max(..._e)))-te},pe=ye=>{const Ue=ye.boundingBox,qe=Math.max(0,Math.min(Ue.x+Ue.width,se.x+se.width)-Math.max(Ue.x,se.x)),Fe=Math.max(0,Math.min(Ue.y+Ue.height,se.y+se.height)-Math.max(Ue.y,se.y)),Ge=qe*Fe,it=Ue.width*Ue.height+se.width*se.height-Ge;return it>0&&Ge/it>N_};if(Z.some(pe)||a.some(pe))continue;const we=W==null?void 0:W.catalog.find(ye=>ye.id===ae.id);Z.push({id:ae.id,name:(we==null?void 0:we.nameFr)??(we==null?void 0:we.name)??ae.id,builtWithCardUnderneath:ae.built,boundingBox:se,...ae.tuckRegion?{tuckRegion:ae.tuckRegion}:{},confidence:Math.round(ae.confidence*1e4)/1e4});const Se=ae.tuckRegion??se;le.push({x0:Se.x,y0:Se.y,x1:Se.x+Se.width,y1:Se.y+Se.height}),L.push({quad:ae.footprint.map(([ye,Ue])=>[ye,Ue]),region:ae.tuckRegion??null})}}}catch(W){console.warn("[wonders-reg] discovery failed:",W)}const me=async()=>{let W=Z.slice();const ee=[];c.forEach((_e,Q)=>{const te=_e.box[0]+_e.box[2]/2,se=_e.box[1]+_e.box[3]/2;le.some(pe=>te>=pe.x0&&te<=pe.x1&&se>=pe.y0&&se<=pe.y1)||ee.push(Q)});const ne=[],oe=[];W.forEach((_e,Q)=>{const te=_e.boundingBox;te&&te.width>0&&(ne.push(Q),oe.push([te.x,te.y,te.width,te.height]))});const ae=_e=>{const Q=[];return _e.forEach((te,se)=>{const pe=te.box[0]+te.box[2]/2,ge=te.box[1]+te.box[3]/2;le.some(we=>pe>=we.x0&&pe<=we.x1&&ge>=we.y0&&ge<=we.y1)||Q.push(se)}),Q};let xe=Ra(c.map(_e=>_e.box),ee,oe,d,[e.width,e.height]);if(ie!==null){r(`${i}: seconde passe merveilles (crop de cité)…`,.42),wt.pass1Calls+=1;const Q=(await rg({skipKnownNear:!0,image:e,banners:c,hulls:xe.hulls.map(([te,se],pe)=>({owner:te,poly:se,n:xe.hullBoxCounts[pe]??0})),wonderBoxes:oe,known:W,cropFrame:([te,se,pe,ge])=>Lt(e,te,se,pe-te,ge-se),detect:async(te,se,pe)=>{if(C===null&&(C=await jn()),C===null)return[];const ge=await ng(ds,C,te,ie,O,se,pe);return wt.pass1Boxes+=ge.length,ge}})).filter(te=>!Z.some(se=>se.id===te.obj.id)&&!a.some(se=>se.id===te.obj.id));if(wt.pass1Kept+=Q.length,Q.length>0){for(const te of Q)Z.push(te.obj),le.push(te.zone),L.push({quad:te.quad,region:te.region});W=Z.slice(),ne.length=0,oe.length=0,W.forEach((te,se)=>{const pe=te.boundingBox;pe&&pe.width>0&&(ne.push(se),oe.push([pe.x,pe.y,pe.width,pe.height]))}),xe=Ra(c.map(te=>te.box),ae(c),oe,d,[e.width,e.height])}}try{const _e=Km(e.width,e.height,c.map(Q=>Q.box),xe.hulls.map(([Q,te],se)=>({owner:Q,poly:te,n:xe.hullBoxCounts[se]??0})),oe);if(_e.length>0){const Q=Na(c.map(se=>se.box)),te=[];for(const se of _e){const[pe,ge,we,Se]=se,ye=Lt(e,pe,ge,we-pe,Se-ge);if(ye.width<=0||ye.height<=0)continue;const Ue=await bt("banner",ye);for(const qe of jr(Ue.rows,Ue.params,nt.banner.conf)){const Fe=Sx(qe.box,se,Q);Fe&&te.push({...qe,box:Fe})}}if(te.length>0){const se=lm([...c,...te]);se.length>c.length&&(c=se,xe=Ra(c.map(pe=>pe.box),ae(c),oe,d,[e.width,e.height]))}}}catch(_e){console.warn("[#129 city-rescan] skipped:",_e)}if(ie!==null&&W.some(_e=>_e.builtWithCardUnderneath!==!0)){r(`${i}: revote built (crop de cité)…`,.47);const _e=new Set;wt.pass2Calls+=1,await rg({builtSeenOut:_e,image:e,banners:c,hulls:xe.hulls.map(([Q,te],se)=>({owner:Q,poly:te,n:xe.hullBoxCounts[se]??0})),wonderBoxes:oe,known:W,cropFrame:([Q,te,se,pe])=>Lt(e,Q,te,se-Q,pe-te),detect:async(Q,te)=>{if(C===null&&(C=await jn()),C===null)return[];const se=await ng(ds,C,Q,ie,O,te);return wt.pass2Boxes+=se.length,se}}),wt.pass2Promoted+=[..._e].filter(Q=>W.some(te=>te.id===Q&&te.builtWithCardUnderneath!==!0)).length;for(const Q of W)Q.id&&_e.has(Q.id)&&Q.builtWithCardUnderneath!==!0&&(Q.builtWithCardUnderneath=!0,Q.builtByCityCrop=!0)}return o!==void 0&&(o.hulls=xe.hulls.map(([_e,Q],te)=>({owner:_e,poly:Q,n:xe.hullBoxCounts[te]??0})),o.bandBoxes=d,o.image=e),{split:xe,photoWonders:W,splitWonderIdx:ne}};let Te=null;try{Te=await me()}catch(W){console.warn("[city-split] failed (side unfiltered):",W)}return{bannerDetections:c,photoCoins:F,photoTokenDiscs:w,discs:x,bandBoxes:d,bandSession:p,wonderFootprints:le,wonderTuckGates:L,photoTokensList:y,geo:Te,cv:C,regDeadline:O,unidentifiedTokens:u}}async function Eg(e,t,n,r,i,o,a,s,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:p,photoTokenDiscs:f,discs:m,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:M,geo:v,regDeadline:I}=e,E={},k=[],S=[];let R=0;const B=[];let Y=0,G=0;const q=[],N=[],F=[],X=t==="opponent";let Z=(Q,te)=>!X,le=(Q,te)=>!X,L=null;if(v!==null)try{const{split:Q,photoWonders:te,splitWonderIdx:se}=v;Z=(Se,ye)=>Q.pointOwner(Se,ye)==="opponent"===X;const pe=X?"opponent":"player";if(le=(Se,ye)=>Q.pointOwner(Se,ye)===pe,n){const Se=Q;L=ye=>new Set(hx(ye,Se,pe,y))}c=c.filter((Se,ye)=>Q.bannerOwner[ye]==="opponent"===X);const ge=te.map(()=>"player");se.forEach((Se,ye)=>{ge[Se]=Q.wonderOwner[ye]});const we=[];te.forEach((Se,ye)=>{ge[ye]==="opponent"===X&&we.push(Se)});for(const Se of we)N.push(Se);b.length=0;for(const Se of we){const ye=Se.tuckRegion??Se.boundingBox;ye&&b.push({x0:ye.x,y0:ye.y,x1:ye.x+ye.width,y1:ye.y+ye.height})}for(const Se of M)Z(Se.center[0],Se.center[1])&&F.push(Se)}catch(Q){console.warn("[city-split] failed (side unfiltered):",Q)}const O=L!==null?L(p):null;for(const Q of p)(O!==null?!O.has(Q):!le(Q.center[0],Q.center[1]))||(R+=Q.denomination??0,S.push(Q));const C=new Set,z=[],U=Na(c.map(Q=>Q.box));x.forEach((Q,te)=>{if(Q.quad===null||Q.region===null){const we=b[te];we&&z.push(we);return}const se=Q.region,pe=[];c.forEach((we,Se)=>{const ye=we.box[0]+we.box[2]/2,Ue=we.box[1]+we.box[3]/2;ye>=se.x&&ye<=se.x+se.width&&Ue>=se.y&&Ue<=se.y+se.height&&pe.push([Se,we.box])});const ge=G2(Q.quad,pe,U);ge!==null&&C.add(ge)});let P=[],j=0;c.forEach((Q,te)=>{if(C.has(te)){G+=1,j+=1;return}const se=Q.box[0]+Q.box[2]/2,pe=Q.box[1]+Q.box[3]/2;if(z.some(ge=>se>=ge.x0&&se<=ge.x1&&pe>=ge.y0&&pe<=ge.y1)){G+=1,j+=1;return}P.push(Q)});const ie=z2(P,j,y,o.width,o.height);P=ie.kept;for(const Q of P)E[Q.family]=(E[Q.family]??0)+1,Y+=1;const J=mb(P),me=new Set(J.map(Q=>Q.box.join(",")));for(const Q of yb(P))me.has(Q.box.join(","))||(J.push(Q),me.add(Q.box.join(",")));for(const Q of ie.suspects)me.has(Q.box.join(","))||(J.push(Q),me.add(Q.box.join(",")));for(const Q of J)q.push(Q);if(P.some(Q=>Q.family==="guild")){const Q=await hg();if(Q!==null){s(`${u}: identifying guilds…`,.75);for(const te of P)if(te.family==="guild")try{const[se,pe,ge,we]=te.box,Se=Lt(o,se,pe,ge,we),ye=t2(Se),Ue={[Q.inputNames[0]]:new Be("float32",ye,[1,3,qn,qn])},Fe=(await Q.run(Ue))[Q.outputNames[0]].data,{id:Ge,prob:it}=n2(Fe);Ge!==""&&!B.some(Rt=>Rt.id===Ge)&&!l.some(Rt=>Rt.id===Ge)&&B.push({id:Ge,boundingBox:{x:se,y:pe,width:ge,height:we},confidence:Math.round(it*1e4)/1e4})}catch(se){console.warn("[guild-cls] failed:",se)}}else if(Date.now()<I)try{const te=d??await jn();if(te!==null){const se=await I$();if(se.size>0){s(`${u}: identifying guilds…`,.75);const pe=await T$();for(const ge of C1(te,o,se,I,pe))!B.some(we=>we.id===ge.id)&&!l.some(we=>we.id===ge.id)&&B.push(ge)}}}catch(te){console.warn("[guilds-reg] failed:",te)}}s(`${u}: laurels…`,.8);const W=await et("laurier: chargement galerie gabarits",()=>N$()),ee=[];for(const Q of[0]){const te=Q===0?o:Yt(o,Q),se=await et("laurier: passe PLEINE photo",()=>bt("laurel",te));for(const[pe,ge,we,Se]of at("laurier: decodage YOLO (JS)",()=>pa(se.rows,se.params,nt.laurel.conf))){const ye=Qa({x:pe,y:ge,width:we-pe,height:Se-ge},Q,o.width,o.height);ee.push([ye.x,ye.y,ye.x+ye.width,ye.y+ye.height])}}let ne=at("laurier: dedup",()=>am(ee));const oe=[];try{const Q=Dx(c.map(te=>te.box),[o.width,o.height]);ut.set("_tta.onnx",`total=${Pa.total} idDiff=${Pa.idDiff} verdictDiff=${Pa.verdictDiff}`),ut.set("_rescan.onnx",`p1: ${wt.pass1Calls} appels, ${wt.pass1Boxes} boites, ${wt.pass1Kept} neuves | p2: ${wt.pass2Calls} appels, ${wt.pass2Boxes} boites, ${wt.pass2Promoted} promues`),ut.set("_marge2.onnx",`total=${Ut.total} pos4=${Ut.positifs4} pos2=${Ut.positifs2} divergent=${Ut.divergent} `+Ut.detail.slice(0,10).join(" | ")),ut.set("_ttaObb.onnx",`total=${oi.total} memeK=${oi.memeK} inv=${oi.memeKInverse} `+oi.detail.slice(0,12).join(" ")),ut.set("_tuilage.onnx",`groupes=? tuiles=${Q.length} bannieres=${c.length} image=${o.width}x${o.height}`);for(const[te,se,pe,ge]of Q){const we=Lt(o,te,se,pe-te,ge-se);if(we.width<=0||we.height<=0)continue;const Se=[];for(const ye of[0]){const Ue=ye===0?we:Yt(we,ye),qe=await et("laurier: passe par TUILE (#113)",()=>bt("laurel",Ue));for(const[Fe,Ge,it,Rt]of at("laurier: decodage YOLO (JS)",()=>pa(qe.rows,qe.params,nt.laurel.conf))){const lt=Qa({x:Fe,y:Ge,width:it-Fe,height:Rt-Ge},ye,we.width,we.height);Se.push([lt.x,lt.y,lt.x+lt.width,lt.y+lt.height])}}if(ne=Ux(ne,am(Se),[te,se]),w!==null)try{const ye=await et("laurier: bande de piste sur tuile (#114)",async()=>{const Fe=Hr(we,1280,hr);return{sortie:await w.run({[w.inputNames[0]]:new Be("float32",Fe.tensor,[1,3,1280,1280])}),params:Fe.params}}),Ue={params:ye.params},qe=ye.sortie[w.outputNames[0]];for(const[Fe,Ge,it,Rt]of sm(qe.data,qe.dims[1]??0,qe.dims[2]??0,Ue.params,wg))oe.push([Fe+te,Ge+se,it+te,Rt+se])}catch{}}}catch(Q){console.warn("[laurel-containers] failed:",Q)}const ae=[...y,...oe];ne=ne.filter(([Q,te,se,pe])=>!Gx((Q+se)/2,(te+pe)/2,ae,c.map(ge=>ge.box)));const[xe,_e]=await et("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([pg(),mg()]));for(const[Q,te,se,pe]of ne){const ge=Math.trunc((Q+se)/2),we=Math.trunc((te+pe)/2);if([...f,...m].some(He=>(ge-He.cx)**2+(we-He.cy)**2<=He.r*He.r)||!Z(ge,we))continue;if(_e!==null){const He=await et("laurier: filtre FP (#49)",()=>F$(o,[Math.trunc(Q),Math.trunc(te),Math.trunc(se),Math.trunc(pe)],_e));if(He!==null&&He>=b2)continue}const ye=Math.min(Math.trunc(se-Q),Math.trunc(pe-te)),Ue=Math.max(6,Math.trunc(Math.max(se-Q,pe-te)*Pb)),qe=z$(o,ge,we,Ue);let Fe=null,Ge=0,it=!1;if(xe!==null&&ye>=6){const He=Lt(o,Math.trunc(Q),Math.trunc(te),Math.trunc(se-Q),Math.trunc(pe-te));let Xe=null,_t=0;for(const Ot of[0,1,2,3]){const Jt=Ot===0?He:Yt(He,Ot),ms=g2(Jt),gs=await et("laurier: lecture chiffre (CNN)",()=>xe.run({[xe.inputNames[0]]:new Be("float32",ms,[1,3,Pt,Pt])})),{value:ys,prob:hi}=y2(gs[xe.outputNames[0]].data);if(hi>_t&&(Xe=ys,_t=hi),Xe!==null&&_t>=m2)break}Xe!==null&&_t>=f2&&(Fe=Xe,Ge=_t)}if(Fe===null&&ye>=6){const He=new Map;for(const Xe of[0,1,2,3]){const _t=Xe===0?qe:Yt(qe,Xe),[Ot,Jt]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>Qb(_t,W));Ot!==null&&(He.set(Ot,Math.max(He.get(Ot)??0,Jt)),Jt>Ge&&(Fe=Ot,Ge=Jt))}Fe!==null&&Ge<M$&&(Fe=null),it=Fe!==null&&[...He.entries()].some(([Xe,_t])=>Xe!==Fe&&_t>=Ge-.1)}const Rt=b.some(He=>ge>=He.x0&&ge<=He.x1&&we>=He.y0&&we<=He.y1),lt=[...B,...l].some(He=>{const Xe=He.boundingBox;return Xe!==void 0&&ge>=Xe.x&&ge<=Xe.x+Xe.width&&we>=Xe.y&&we<=Xe.y+Xe.height});k.push({value:Fe,valueRead:Fe!==null,center:[Math.round((Q+se)/2),Math.round((te+pe)/2)],boundingBox:{x:Math.trunc(Q),y:Math.trunc(te),width:Math.trunc(se-Q),height:Math.trunc(pe-te)},confidence:Math.round(Ge*1e4)/1e4,excluded:Rt||lt,photoIndex:i-1,...it?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:E,laurels:k,coins:S,coinTotal:R,guilds:B,bannerCount:Y,tuckedExcluded:G,bannerSuspects:q,cityWondersKept:N,cityTokensKept:F}}function kg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function Cg(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Ag(e,t,n){const{byFamily:r,laurels:i,coins:o,progressTokens:a,wonders:s,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:p,tuckedExcluded:f}=e;f>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${f} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):p>0&&s.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const m=r.guild??0;m!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${m} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(M=>M.id).join(", ")+" — confirm in the review."});const y=s.filter(M=>M.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(M=>M.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${s.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+a.map(M=>M.id).join(", ")+" — confirm in the review."}),o.length>0){const M=o.filter(I=>I.denomSource==="cnn").length,v=o.length-M;n.push({code:"LOW_CONFIDENCE",message:v===0?`${t}: coins read as ${c} from ${o.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${o.length} tile(s) — ${M} by the learned model, ${v} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=H$(u,s);for(const M of[...Wx(s.map(v=>v.id),t),...Hx(w.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:M.message});const b=i.filter(M=>!M.excluded),x=b.filter(M=>M.valueRead);return{...rv(),wonders:s,guilds:w,progressTokens:a,laurels:i,cardVictoryPoints:{value:x.reduce((M,v)=>M+(v.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:p>0?"yolo":"none",tuckedExcluded:f,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:o.length>0?.5:0,source:o.length===0?"none":o.some(M=>M.denomSource==="cnn")?"local-cnn":"local-colour",coins:o}}}async function iv(e,t,n,r,i=()=>{},o="player",a,s=!1){const u=kg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const p=await ci(c),f=await Tg(p,n,t,r,d,a,u.wonders,u.progressTokens);u.unidentifiedTokens+=f.unidentifiedTokens;const m=await Eg(f,o,s,t,l,p,n,r,d,u.guilds);Cg(u,m),i()}return Ag(u,t,n)}const At=1280,ov=.3,di=9;let hs=null;function ps(){return hs===null&&(hs=(async()=>{try{return(await fetch(`${je}pawn_ends_brut.onnx`,{method:"HEAD"})).ok?await ft("pawn_ends_brut.onnx"):null}catch{return null}})()),hs}function av(e){const t=At/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),o=i.getContext("2d",{willReadFrequently:!0}),a=Ww(e.data,e.width,e.height,e.channels);o.putImageData(new ImageData(a,e.width,e.height),0,0);const u=new OffscreenCanvas(At,At).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,At,At),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,At,At),c=At*At,d=new Float32Array(3*c);for(let p=0;p<c;p+=1)d[p]=l[p*4]/255,d[c+p]=l[p*4+1]/255,d[2*c+p]=l[p*4+2]/255;return{tensor:d,r:t}}const Ye={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null};function sv(){Ye.appels=0,Ye.inferences=0,Ye.bandes=0,Ye.detail=[],Ye.premiereGagne=null}function Rg(){ut.set("_pion.onnx",`appels=${Ye.appels} inferences=${Ye.inferences} bandes=${Ye.bandes} premiereGagne=${Ye.premiereGagne??"n/a"} | ${Ye.detail.join(" ")}`)}async function uv(e,t){Ye.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>av(t)),o=(await e.run({[e.inputNames[0]]:new Be("float32",n,[1,3,At,At])}))[e.outputNames[0]],a=o.data,s=o.dims[2]??0,u=(o.dims[1]??4)-4;return at("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let d=0;d<u;d+=1){const p=(4+d)*s;let f=-1,m=ov;for(let y=0;y<s;y+=1){const w=a[p+y];w>=m&&(m=w,f=y)}if(f>=0){const y=(a[f]+a[2*s+f])/2/r,w=(a[s+f]+a[3*s+f])/2/r;c.set(d,{conf:m,cx:y,cy:w})}}return c})}async function fs(e,t,n){const r=Ye.inferences,i=`a${Ye.appels}`;Ye.appels+=1;const o=await et("pion: UNE passe (les 4 rotations)",()=>lv(e,t,n));return Ye.detail.push(`${i}:${Ye.inferences-r}inf conf=${o===null?"rien":o.confidence.toFixed(2)}`),Rg(),o}async function lv(e,t,n){let r=null;const i=1.8;for(const x of n??[0,1,2,3]){const M=x===0?t:at("pion: rotation de l'image",()=>Yt(t,x)),v=await uv(e,M);if(v.has(0)&&v.has(1)&&v.has(2)){const I=v.get(0).conf+v.get(1).conf+v.get(2).conf;if((r===null||I>r.score)&&(r={score:I,det:v,k:x}),I>=i)break}}if(r===null)return null;const o=r.det.get(0),a=r.det.get(1),s=r.det.get(2),u=s.cx-a.cx,l=s.cy-a.cy,c=(a.cx+s.cx)/2,d=(a.cy+s.cy)/2,p=u*u+l*l;if(p<=0)return null;const f=((o.cx-c)*u+(o.cy-d)*l)/p*(2*di),m=Math.min(di,Math.max(-di,st(f))),y=Math.min(o.conf,a.conf,s.conf),w=(x,M)=>{const v=r.k%4;return v===0?[x,M]:v===1?[M,t.height-1-x]:v===2?[t.width-1-x,t.height-1-M]:[t.width-1-M,x]},b=[a,s].map(x=>{const[M,v]=w(x.cx,x.cy);return[st(M),st(v)]});return{position:m,confidence:Math.round(y*1e4)/1e4,ends:b,k:r.k}}async function Og(e,t,n){let r=null,i=null;for(const o of n){const a=Yw(t.width,t.height,o);if(a===null)continue;const s=Lt(t,a.x,a.y,a.width,a.height);if(s.width===0||s.height===0)continue;Ye.bandes+=1;const u=await fs(e,s,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Ye.premiereGagne===null?Ye.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Ye.premiereGagne=!1),Rg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+a.x,c+a.y])})}return r}function cv(){const e=[dg,hg,pg,fg,mg,gg,yg,as,us,_g,xg,ps];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function dv(e,t){cv();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const a=(f,m=0)=>{t(f,i>0?Math.min(.99,(o+m)/i):void 0)},s=()=>{o+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await iv(m,f,n,a,s))}let u=null,l=null;if(e.both!==void 0){const f={},m=await ci(e.both),y=await Tg(m,n,"both",a,"both photo 1/1",f,[],[]),w=async(M,v)=>{const I=kg();return I.unidentifiedTokens+=y.unidentifiedTokens,Cg(I,await Eg(y,M,!0,v,1,m,n,a,`${v} photo 1/1`,I.guilds)),s(),Ag(I,v,n)},b={player:await w("player","left"),opponent:await w("opponent","right")};if(a("military pawn…",.95),f.image!==void 0)try{const M=await ps();M!==null&&(f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Og(M,f.image,f.bandBoxes)),u===null&&(u=await fs(M,f.image)))}catch(M){console.warn("[#125] both-photo pawn read failed:",M)}u!==null&&(l=eb(u.ends,f.hulls??[],u.position));const x=l!==null&&!l.ambiguous?tb(l):null;x!==null?(r.left=b[x.left],r.right=b[x.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=b.player,r.right=b.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...qx(f),...Vx(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let c={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const f=await ci(e.board),m=await ps();if(m!==null){let y=await fs(m,f);if(y===null){const w=await us();if(w!==null){const b=await bt("banner",f),x=jr(b.rows,b.params,nt.banner.conf),M=await bg(w,f,x);y=await Og(m,f,M)}}y!==null&&(c={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!c.found){const f=b=>{var x,M;return Number(((M=(x=b==null?void 0:b.cardCounts)==null?void 0:x.byFamily)==null?void 0:M.military)??0)},m=f(r.left),y=f(r.right),w=Math.abs(m-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${m} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const d=c.conflictPawnPosition,p=Math.abs(d)>=di?{type:"military",winner:d>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(o,a)=>{m$(o),self.postMessage({id:t,progress:o,...a!==void 0?{fraction:a}:{},...o!==r?{perfPartiel:{providers:og(),etapes:ig(),etapeCourante:o}}:{}}),r=o};(async()=>{try{n==="recognize"&&i("starting the on-device engine…",0),f$(),_$();const o=performance.now(),a=n==="classify"?await nv(e.data.file):await dv(e.data.payload,i);self.postMessage({id:t,ok:!0,result:a,perf:{etapes:ig(),providers:og(),runtime:g$(),inference:b$(),famillesJs:Fw(),inferenceParEtape:w$(),totalMs:Math.round(performance.now()-o)}})}catch(o){self.postMessage({id:t,ok:!1,error:String(o)})}})()}})();
