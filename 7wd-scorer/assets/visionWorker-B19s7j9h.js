var I$=Object.defineProperty;var k$=(At,Rt,wn)=>Rt in At?I$(At,Rt,{enumerable:!0,configurable:!0,writable:!0,value:wn}):At[Rt]=wn;var Rg=(At,Rt,wn)=>k$(At,typeof Rt!="symbol"?Rt+"":Rt,wn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var At=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,wn=Object.getOwnPropertyNames,Ng=Object.prototype.hasOwnProperty,Bg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Q=(e,t)=>()=>(e&&(t=e(e=0)),t),_n=(e,t)=>{for(var n in t)At(e,n,{get:t[n],enumerable:!0})},Pg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of wn(t))!Ng.call(e,i)&&i!==n&&At(e,i,{get:()=>t[i],enumerable:!(r=Rt(t,i))||r.enumerable});return e},zn=e=>Pg(At({},"__esModule",{value:!0}),e),On,Ft,bn,Ds,Us,Ls=Q(()=>{On=new Map,Ft=[],bn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=On.get(e);if(r===void 0)On.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Ft.indexOf(e);i!==-1&&Ft.splice(i,1);for(let a=0;a<Ft.length;a++)if(On.get(Ft[a]).priority<=n){Ft.splice(a,0,e);return}Ft.push(e)}return}throw new TypeError("not a valid backend")},Ds=async e=>{let t=On.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Us=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Ft:n,i,a=[],s=new Set;for(let u of r){let l=await Ds(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Dg=Q(()=>{Ls()}),Fs,Ug=Q(()=>{Fs="1.27.0"}),Vr,je,Gs=Q(()=>{Ug(),Vr="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:Fs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Vr=e}},get logLevel(){return Vr}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),Oe,Lg=Q(()=>{Gs(),Oe=je}),Ws,qs,Fg=Q(()=>{Ws=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let h=a*i,c=0,p=h,m=h*2,g=-1;s==="RGBA"?(c=0,p=h,m=h*2,g=h*3):s==="RGB"?(c=0,p=h,m=h*2):s==="RBG"&&(c=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let b=0;b<i;b++){let $=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+T+","+S+")",r.fillRect(b,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},qs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,b=3,$=0,x=c,T=c*2,S=-1;o==="RGBA"?($=0,x=c,T=c*2,S=c*3):o==="RGB"?($=0,x=c,T=c*2):o==="RBG"&&($=0,T=c,x=c*2),r=n.createImageData(i,a);for(let I=0;I<a*i;m+=p,g+=p,y+=p,b+=p,I++)r.data[m]=(e.data[$++]-h[0])*l[0],r.data[g]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[T++]-h[2])*l[2],r.data[b]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),ir,Vs,Hs,js,Ks,Xs,Gg=Q(()=>{jr(),ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,m=1,g=2,y=3,b=0,$=l,x=l*2,T=-1;o==="RGB"&&(c=3,p=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(b=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,b=l*2);for(let S=0;S<l;S++,p+=c,g+=c,m+=c,y+=c)h[b++]=(e[p]+s[0])/a[0],h[$++]=(e[m]+s[1])/a[1],h[x++]=(e[g]+s[2])/a[2],T!==-1&&y!==-1&&(h[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new ot("float32",h,[1,4,n,r]):new ot("float32",h,[1,3,n,r])},Vs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=m}else o.tensorFormat="RGBA",o.height=p,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;return c.drawImage(e,0,0,m,p),s=c.getImageData(0,0,m,p).data,o.height=p,o.width=m,ir(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),m=l(p);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,h(ir(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ir(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Hs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new ot({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},js=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ks=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ot({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Xs=(e,t,n)=>new ot({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Jt,Nn,Hr,Ys,Wg=Q(()=>{Jt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Nn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Hr=!1,Ys=()=>{if(!Hr){Hr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Jt.set("int64",BigInt64Array),Nn.set(BigInt64Array,"int64")),t&&(Jt.set("uint64",BigUint64Array),Nn.set(BigUint64Array,"uint64")),r?(Jt.set("float16",n),Nn.set(n,"float16")):Jt.set("float16",Uint16Array)}}}),Zs,Qs,qg=Q(()=>{jr(),Zs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Qs=(e,t)=>{switch(e.location){case"cpu":return new ot(e.type,e.data,t);case"cpu-pinned":return new ot({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ot({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ot({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ot({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ot,jr=Q(()=>{Fg(),Gg(),Wg(),qg(),ot=class{constructor(e,t,n){Ys();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Jt.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Jt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=Nn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Zs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Vs(e,t)}static fromTexture(e,t){return Hs(e,t)}static fromGpuBuffer(e,t){return js(e,t)}static fromMLTensor(e,t){return Ks(e,t)}static fromPinnedBuffer(e,t,n){return Xs(e,t,n)}toDataURL(e){return Ws(this,e)}toImageData(e){return qs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Qs(this,e)}}}),Ge,Js=Q(()=>{jr(),Ge=ot}),ar,Kr,St,pt,en,tn,eo=Q(()=>{Gs(),ar=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Kr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ar("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},St=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Kr("BEGIN",e)},pt=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Kr("END",e)},en=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.time(`ORT::${e}`)},tn=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeEnd(`ORT::${e}`)}}),to,Vg=Q(()=>{Ls(),Js(),eo(),to=class zg{constructor(t){this.handler=t}async run(t,n,r){St(),en("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ge||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ge)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof Ge)&&(l=!0,s=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let h=o[l];h instanceof Ge?u[l]=h:u[l]=new Ge(h.type,h.data,h.dims)}return tn("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){St(),en("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Us(s),l=await o.createInferenceSessionHandler(a,u);return tn("InferenceSession.create"),pt(),new zg(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),it,Hg=Q(()=>{Vg(),it=to}),jg=Q(()=>{}),Kg=Q(()=>{}),Xg=Q(()=>{}),Yg=Q(()=>{}),Zg={};_n(Zg,{InferenceSession:()=>it,TRACE:()=>ar,TRACE_EVENT_BEGIN:()=>en,TRACE_EVENT_END:()=>tn,TRACE_FUNC_BEGIN:()=>St,TRACE_FUNC_END:()=>pt,Tensor:()=>Ge,env:()=>Oe,registerBackend:()=>bn});var ct=Q(()=>{Dg(),Lg(),Hg(),Js(),jg(),Kg(),eo(),Xg(),Yg()}),Xr=Q(()=>{}),no={};_n(no,{default:()=>ro});var Yr,Zr,ro,Qg=Q(()=>{var e;Dp(),nn(),ri(),Yr="ort-wasm-proxy-worker",Zr=((e=globalThis.self)==null?void 0:e.name)===Yr,Zr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":si(r.wasm).then(()=>{ya(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;wa(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=Sr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ba(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":$a(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;va(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Ta([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Sa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),ro=Zr?null:t=>new Worker(t??ut,{type:"module",name:Yr})}),io={};_n(io,{default:()=>so});async function ao(e={}){var Cg,Ag;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Cg=self.name)==null?void 0:Cg.startsWith("em-pthread"));t.mountExternalData=(d,f)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...f)=>{var _;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:f[0],errors:[]},k=await d(...f);if(t.Yc!==w)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let C=w.errors;if(0<C.length){let N=await Promise.all(C);if(N=N.filter(V=>V),0<N.length)throw Error(N.join(`
`))}return k}finally{t.Yc=null}};t.jsepInit=(d,f)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let _=t.dd;t.jsepRegisterBuffer=(w,k,C,N)=>_.registerBuffer(w,k,C,N),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,k,C)=>_.createDownloader(w,k,C),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Id=(w,k)=>{_.upload(w,k)}}else if(d==="webnn"){let _=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,k)=>_.createMLTensorDownloader(w,k),t.webnnRegisterMLTensor=(w,k,C,N)=>_.registerMLTensor(w,k,C,N),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterMLConstant=(w,k,C,N,V,ee)=>_.registerMLConstant(w,k,C,N,V,t.Xc,ee),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let d=f=>(..._)=>{let w=Mt;return _=f(..._),Mt!=w?new Promise((k,C)=>{Ts={resolve:k,reject:C}}):_};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=d(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(d,f)=>{throw f},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),o=async d=>{if(E(d))return new Promise((_,w)=>{var k=new XMLHttpRequest;k.open("GET",d,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?_(k.response):w(k.status)},k.onerror=w,k.send(null)});var f=await fetch(d,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,b,$,x=console.log.bind(console),T=console.error.bind(console),S=x,I=T,M=!1,E=d=>d.startsWith("file://");function v(){ce.buffer!=D.buffer&&q()}if(i){let d=function(f){try{var _=f.data,w=_.Sc;if(w==="load"){let k=[];self.onmessage=C=>k.push(C),$=()=>{postMessage({Sc:"loaded"});for(let C of k)d(C);self.onmessage=d};for(let C of _.xd)t[C]&&!t[C].proxy||(t[C]=(...N)=>{postMessage({Sc:"callHandler",wd:C,args:N})},C=="print"&&(S=t[C]),C=="printErr"&&(I=t[C]));ce=_.Od,q(),m=_.Pd,ue(),Wr()}else if(w==="run"){(function(k){var C=(v(),F)[k+52>>>2>>>0];k=(v(),F)[k+56>>>2>>>0],Lm(C,C-k),_e(C)})(_.Rc),Cs(_.Rc,0,0,1,0,0),le(),xs(_.Rc),z||(Om(),z=!0);try{me(_.Md,_.bd)}catch(k){if(k!="unwind")throw k}}else _.target!=="setimmediate"&&(w==="checkMailbox"?z&&Br():w&&(I(`worker: received unknown command ${w}`),I(_)))}catch(k){throw Nm(),k}};var z=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=d}var D,X,L,H,A,F,R,P,Y,O,Z,B=!1;function q(){var d=ce.buffer;t.HEAP8=D=new Int8Array(d),L=new Int16Array(d),t.HEAPU8=X=new Uint8Array(d),H=new Uint16Array(d),t.HEAP32=A=new Int32Array(d),t.HEAPU32=F=new Uint32Array(d),R=new Float32Array(d),P=new Float64Array(d),Y=new BigInt64Array(d),O=new BigUint64Array(d)}function U(){B=!0,i?$():Lt.sb()}function G(d){throw I(d="Aborted("+d+")"),M=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),b==null||b(d),d}function ne(){return{a:{ma:F2,gb:L2,g:qe,J:Je,f:et,o:xt,h:fs,ha:ms,b:gs,T:ys,Ha:jf,n:k1,$:Zf,Xa:Qf,Da:Jf,Fa:em,Ya:tm,Va:nm,Oa:rm,Ua:im,ka:am,Ea:sm,Ba:om,Wa:um,Ca:lm,bb:E1,ea:M1,wa:C1,ua:R1,da:O1,O:N1,H:B1,va:P1,_:q1,xa:V1,Ra:H1,za:K1,Ia:X1,sa:Y1,fa:Z1,Qa:xs,_a:Q1,R:n2,r:o2,c:bs,hb:u2,y:l2,M:d2,D:c2,l:h2,s:ym,ib:p2,I:f2,S:m2,j:g2,u:y2,q:w2,k:_2,La:b2,Ma:$2,Na:x2,Ja:$m,Ka:xm,ta:vm,db:S2,ab:I2,v:k2,aa:E2,ga:M2,$a:T2,W:C2,Za:A2,Aa:R2,F:v2,U:z2,la:Fr,ya:N2,fb:O2,eb:B2,Sa:km,Ta:Em,Ga:Dt,V:Mm,ja:Cm,Pa:Am,ia:Rm,kb:v$,na:w$,lb:x$,oa:y$,G:u$,e:V2,t:W2,w:G2,B:t$,mb:f$,K:a$,x:K2,pa:m$,Y:_$,ba:p$,nb:h$,ob:c$,P:n$,qa:d$,pb:l$,N:s$,Z:g$,d:q2,A:j2,m:H2,jb:S$,p:Y2,z:Z2,C:X2,E:Q2,L:r$,qb:o$,Q:b$,ca:i$,X:$$,rb:e$,ra:J2,i:D2,a:ce,cb:st}}}async function ue(){function d(w,k){var C=Lt=w.exports;w={};for(let[N,V]of Object.entries(C))typeof V=="function"?(C=J1(V),w[N]=C):w[N]=V;return Lt=w,Lt=(function(){var N=Lt,V=ie=>ye=>ie(ye)>>>0,ee=ie=>()=>ie()>>>0;return(N=Object.assign({},N)).tb=V(N.tb),N.Xb=ee(N.Xb),N.Zb=V(N.Zb),N.lc=V(N.lc),N.mc=ee(N.mc),N.qc=V(N.qc),N})(),j.push(Lt._b),zm=(w=Lt).tb,Om=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,Gr=w.Xb,Ct=t._free=w.Yb,tr=t._malloc=w.Zb,Cs=w.ac,Nm=w.bc,Bm=w.cc,Pm=w.dc,As=w.ec,Dm=w.fc,Um=w.gc,$e=w.hc,nr=w.ic,Lm=w.jc,_e=w.kc,Rs=w.lc,be=w.mc,Fm=w.nc,zs=w.oc,Gm=w.pc,Wm=w.qc,qm=w.rc,Os=w.sc,Vm=w.tc,Hm=w.uc,jm=w.vc,Km=w.wc,Xm=w.xc,Ym=w.yc,Zm=w.zc,Qm=w.Ac,Jm=w.Bc,eg=w.Cc,tg=w.Dc,ng=w.Ec,rg=w.Fc,ig=w.Gc,ag=w.Hc,sg=w.Ic,og=w.Jc,ug=w.Kc,lg=w.Lc,dg=w.Mc,cg=w.Nc,hg=w.Pc,pg=w.Qc,fg=w.$c,mg=w.ad,gg=w.fd,yg=w.jd,wg=w.kd,_g=w.ld,bg=w.md,$g=w.nd,xg=w.od,vg=w.pd,Sg=w.qd,Tg=w.vd,Ig=w.Td,kg=w.Ud,Eg=w.Vd,Mg=w.Wd,m=k,Lt}var f,_=ne();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(k,C)=>{w(d(k,C))})}):i?d(new WebAssembly.Instance(m,ne()),m):(Z??(Z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(w){var k=Z;if(!p&&!E(k))try{var C=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,w)}catch(N){I(`wasm streaming compile failed: ${N}`),I("falling back to ArrayBuffer instantiation")}return(async function(N,V){try{var ee=await(async function(ie){if(!p)try{var ye=await o(ie);return new Uint8Array(ye)}catch{}if(ie==Z&&p)ie=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ie=u(ie)}return ie})(N);return await WebAssembly.instantiate(ee,V)}catch(ie){I(`failed to asynchronously prepare wasm: ${ie}`),G(ie)}})(k,w)})(_),d(f.instance,f.module))}class re{constructor(f){Rg(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var we=d=>{d.terminate(),d.onmessage=()=>{}},Ce=[],Ue=0,Le=null,Ze=d=>{dt.length==0&&(Ie(),de(dt[0]));var f=dt.pop();if(!f)return 6;Xt.push(f),J[d.Rc]=f,f.Rc=d.Rc;var _={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return f.postMessage(_,d.rd),0},Ae=0,pe=(d,f,..._)=>{var w,k=16*_.length,C=be(),N=Rs(k),V=N>>>3;for(w of _)typeof w=="bigint"?((v(),Y)[V++>>>0]=1n,(v(),Y)[V++>>>0]=w):((v(),Y)[V++>>>0]=0n,(v(),P)[V++>>>0]=w);return d=Bm(d,0,k,N,f),_e(C),d};function st(d){if(i)return pe(0,1,d);if(g=d,!(0<Ae)){for(var f of Xt)we(f);for(f of dt)we(f);dt=[],Xt=[],J={},M=!0}l(0,new re(d))}function An(d){if(i)return pe(1,0,d);Dt(d)}var Dt=d=>{if(g=d,i)throw An(d),"unwind";st(d)},dt=[],Xt=[],j=[],J={},te=d=>{var f=d.Rc;delete J[f],dt.push(d),Xt.splice(Xt.indexOf(d),1),d.Rc=0,Pm(f)};function le(){j.forEach(d=>d())}var de=d=>new Promise(f=>{d.onmessage=k=>{var C=k.data;if(k=C.Sc,C.Zc&&C.Zc!=Gr()){var N=J[C.Zc];N?N.postMessage(C,C.rd):I(`Internal error! Worker sent a message "${k}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else k==="checkMailbox"?Br():k==="spawnThread"?Ze(C):k==="cleanupThread"?Nr(()=>{te(J[C.Nd])}):k==="loaded"?(d.loaded=!0,f(d)):C.target==="setimmediate"?d.postMessage(C):k==="uncaughtException"?d.onerror(C.error):k==="callHandler"?t[C.wd](...C.args):k&&I(`worker sent an unknown command ${k}`)},d.onerror=k=>{throw I(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);d.postMessage({Sc:"load",xd:w,Od:ce,Pd:m})});function Ie(){var d=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});dt.push(d)}var ce,me=(d,f)=>{Ae=0,d=Os(d,f),0<Ae?g=d:As(d)},Me=[],ke=0;function qe(d){var f=new Be(d>>>=0);return(v(),D)[f.Tc+12>>>0]==0&&(Ye(f,!0),ke--),nt(f,!1),Me.push(f),Wm(d)}var Re=0,Je=()=>{$e(0,0);var d=Me.pop();Fm(d.cd),Re=0};function Ye(d,f){f=f?1:0,(v(),D)[d.Tc+12>>>0]=f}function nt(d,f){f=f?1:0,(v(),D)[d.Tc+13>>>0]=f}class Be{constructor(f){this.cd=f,this.Tc=f-24}}var rt=d=>{var f=Re;if(!f)return nr(0),0;var _=new Be(f);(v(),F)[_.Tc+16>>>2>>>0]=f;var w=(v(),F)[_.Tc+4>>>2>>>0];if(!w)return nr(0),f;for(var k of d){if(k===0||k===w)break;if(Gm(k,w,_.Tc+16))return nr(k),f}return nr(w),f};function et(){return rt([])}function xt(d){return rt([d>>>0])}function fs(d,f,_,w){return rt([d>>>0,f>>>0,_>>>0,w>>>0])}var ms=()=>{var d=Me.pop();d||G("no exception to throw");var f=d.cd;throw(v(),D)[d.Tc+13>>>0]==0&&(Me.push(d),nt(d,!0),Ye(d,!1),ke++),zs(f),Re=f};function gs(d,f,_){var w=new Be(d>>>=0);throw f>>>=0,_>>>=0,(v(),F)[w.Tc+16>>>2>>>0]=0,(v(),F)[w.Tc+4>>>2>>>0]=f,(v(),F)[w.Tc+8>>>2>>>0]=_,zs(d),ke++,Re=d}var ys=()=>ke;function Jn(d,f,_,w){return i?pe(2,1,d,f,_,w):jf(d,f,_,w)}function jf(d,f,_,w){if(d>>>=0,f>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var k=[];return i&&k.length===0?Jn(d,f,_,w):(d={Ld:_,Rc:d,bd:w,rd:k},i?(d.Sc="spawnThread",postMessage(d,k),0):Ze(d))}function k1(d){throw Re||(Re=d>>>0),Re}var Kf=globalThis.TextDecoder&&new TextDecoder,Xf=(d,f,_,w)=>{if(_=f+_,w)return _;for(;d[f]&&!(f>=_);)++f;return f},Yf=(d,f=0,_,w)=>{if(16<(_=Xf(d,f>>>=0,_,w))-f&&d.buffer&&Kf)return Kf.decode(d.buffer instanceof ArrayBuffer?d.subarray(f,_):d.slice(f,_));for(w="";f<_;){var k=d[f++];if(128&k){var C=63&d[f++];if((224&k)==192)w+=String.fromCharCode((31&k)<<6|C);else{var N=63&d[f++];65536>(k=(240&k)==224?(15&k)<<12|C<<6|N:(7&k)<<18|C<<12|N<<6|63&d[f++])?w+=String.fromCharCode(k):(k-=65536,w+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else w+=String.fromCharCode(k)}return w},Ve=(d,f,_)=>(d>>>=0)?Yf((v(),X),d,f,_):"";function Zf(d,f,_){return i?pe(3,1,d,f,_):0}function Qf(d,f){if(i)return pe(4,1,d,f)}function Jf(d,f){if(i)return pe(5,1,d,f)}function em(d,f,_){if(i)return pe(6,1,d,f,_)}function tm(d,f,_){return i?pe(7,1,d,f,_):0}function nm(d,f){if(i)return pe(8,1,d,f)}function rm(d,f,_){if(i)return pe(9,1,d,f,_)}function im(d,f,_,w){if(i)return pe(10,1,d,f,_,w)}function am(d,f,_,w){if(i)return pe(11,1,d,f,_,w)}function sm(d,f,_,w){if(i)return pe(12,1,d,f,_,w)}function om(d){if(i)return pe(13,1,d)}function um(d,f){if(i)return pe(14,1,d,f)}function lm(d,f,_){if(i)return pe(15,1,d,f,_)}var E1=()=>G(""),Et=d=>{d>>>=0;for(var f="";;){var _=(v(),X)[d++>>>0];if(!_)return f;f+=String.fromCharCode(_)}},ws={},_s={},Rn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Ut(d,f,_={}){return(function(w,k,C={}){var N=k.name;if(!w)throw new Rn(`type "${N}" must have a positive integer typeid pointer`);if(_s.hasOwnProperty(w)){if(C.yd)return;throw new Rn(`Cannot register type '${N}' twice`)}_s[w]=k,ws.hasOwnProperty(w)&&(k=ws[w],delete ws[w],k.forEach(V=>V()))})(d,f,_)}var dm=(d,f,_)=>{switch(f){case 1:return _?w=>(v(),D)[w>>>0]:w=>(v(),X)[w>>>0];case 2:return _?w=>(v(),L)[w>>>1>>>0]:w=>(v(),H)[w>>>1>>>0];case 4:return _?w=>(v(),A)[w>>>2>>>0]:w=>(v(),F)[w>>>2>>>0];case 8:return _?w=>(v(),Y)[w>>>3>>>0]:w=>(v(),O)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${d}`)}};function M1(d,f,_,w,k){d>>>=0,_>>>=0,f=Et(f>>>0);let C=N=>N;if(w=w===0n){let N=8*_;C=V=>BigInt.asUintN(N,V),k=C(k)}Ut(d,{name:f,Oc:C,Vc:(N,V)=>(typeof V=="number"&&(V=BigInt(V)),V),Uc:dm(f,_,!w),Wc:null})}function C1(d,f,_,w){Ut(d>>>=0,{name:f=Et(f>>>0),Oc:function(k){return!!k},Vc:function(k,C){return C?_:w},Uc:function(k){return this.Oc((v(),X)[k>>>0])},Wc:null})}var cm=[],gn=[0,1,,1,null,1,!0,1,!1,1];function bs(d){9<(d>>>=0)&&--gn[d+1]===0&&(gn[d]=void 0,cm.push(d))}var ht=d=>{if(!d)throw new Rn(`Cannot use deleted val. handle = ${d}`);return gn[d]},vt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=cm.pop()||gn.length;return gn[f]=d,gn[f+1]=1,f}};function $s(d){return this.Oc((v(),F)[d>>>2>>>0])}var A1={name:"emscripten::val",Oc:d=>{var f=ht(d);return bs(d),f},Vc:(d,f)=>vt(f),Uc:$s,Wc:null};function R1(d){return Ut(d>>>0,A1)}var z1=(d,f)=>{switch(f){case 4:return function(_){return this.Oc((v(),R)[_>>>2>>>0])};case 8:return function(_){return this.Oc((v(),P)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${d}`)}};function O1(d,f,_){_>>>=0,Ut(d>>>=0,{name:f=Et(f>>>0),Oc:w=>w,Vc:(w,k)=>k,Uc:z1(f,_),Wc:null})}function N1(d,f,_,w,k){d>>>=0,_>>>=0,f=Et(f>>>0);let C=V=>V;if(w===0){var N=32-8*_;C=V=>V<<N>>>N,k=C(k)}Ut(d,{name:f,Oc:C,Vc:(V,ee)=>ee,Uc:dm(f,_,w!==0),Wc:null})}function B1(d,f,_){function w(C){var N=(v(),F)[C>>>2>>>0];return C=(v(),F)[C+4>>>2>>>0],new k((v(),D).buffer,C,N)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Ut(d>>>=0,{name:_=Et(_>>>0),Oc:w,Uc:w},{yd:!0})}var Yt=(d,f,_)=>{var w=(v(),X);if(f>>>=0,0<_){var k=f;_=f+_-1;for(var C=0;C<d.length;++C){var N=d.codePointAt(C);if(127>=N){if(f>=_)break;w[f++>>>0]=N}else if(2047>=N){if(f+1>=_)break;w[f++>>>0]=192|N>>6,w[f++>>>0]=128|63&N}else if(65535>=N){if(f+2>=_)break;w[f++>>>0]=224|N>>12,w[f++>>>0]=128|N>>6&63,w[f++>>>0]=128|63&N}else{if(f+3>=_)break;w[f++>>>0]=240|N>>18,w[f++>>>0]=128|N>>12&63,w[f++>>>0]=128|N>>6&63,w[f++>>>0]=128|63&N,C++}}w[f>>>0]=0,d=f-k}else d=0;return d},Or=d=>{for(var f=0,_=0;_<d.length;++_){var w=d.charCodeAt(_);127>=w?f++:2047>=w?f+=2:55296<=w&&57343>=w?(f+=4,++_):f+=3}return f};function P1(d,f){Ut(d>>>=0,{name:f=Et(f>>>0),Oc(_){var w=(v(),F)[_>>>2>>>0];return w=Ve(_+4,w,!0),Ct(_),w},Vc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var k=typeof w=="string";if(!(k||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Rn("Cannot pass non-string to std::string");var C=k?Or(w):w.length,N=tr(4+C+1),V=N+4;return(v(),F)[N>>>2>>>0]=C,k?Yt(w,V,C+1):(v(),X).set(w,V>>>0),_!==null&&_.push(Ct,N),N},Uc:$s,Wc(_){Ct(_)}})}var hm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,D1=(d,f,_)=>{if(d>>>=1,16<(f=Xf((v(),H),d,f/2,_))-d&&hm)return hm.decode((v(),H).slice(d,f));for(_="";d<f;++d){var w=(v(),H)[d>>>0];_+=String.fromCharCode(w)}return _},U1=(d,f,_)=>{if(_??(_=2147483647),2>_)return 0;var w=f;_=(_-=2)<2*d.length?_/2:d.length;for(var k=0;k<_;++k){var C=d.charCodeAt(k);(v(),L)[f>>>1>>>0]=C,f+=2}return(v(),L)[f>>>1>>>0]=0,f-w},L1=d=>2*d.length,F1=(d,f,_)=>{var w="";d>>>=2;for(var k=0;!(k>=f/4);k++){var C=(v(),F)[d+k>>>0];if(!C&&!_)break;w+=String.fromCodePoint(C)}return w},G1=(d,f,_)=>{if(f>>>=0,_??(_=2147483647),4>_)return 0;var w=f;_=w+_-4;for(var k=0;k<d.length;++k){var C=d.codePointAt(k);if(65535<C&&k++,(v(),A)[f>>>2>>>0]=C,(f+=4)+4>_)break}return(v(),A)[f>>>2>>>0]=0,f-w},W1=d=>{for(var f=0,_=0;_<d.length;++_)65535<d.codePointAt(_)&&_++,f+=4;return f};function q1(d,f,_){if(d>>>=0,f>>>=0,_=Et(_>>>=0),f===2)var w=D1,k=U1,C=L1;else w=F1,k=G1,C=W1;Ut(d,{name:_,Oc:N=>{var V=(v(),F)[N>>>2>>>0];return V=w(N+4,V*f,!0),Ct(N),V},Vc:(N,V)=>{if(typeof V!="string")throw new Rn(`Cannot pass non-string to C++ string type ${_}`);var ee=C(V),ie=tr(4+ee+f);return(v(),F)[ie>>>2>>>0]=ee/f,k(V,ie+4,ee+f),N!==null&&N.push(Ct,ie),ie},Uc:$s,Wc(N){Ct(N)}})}function V1(d,f){Ut(d>>>=0,{zd:!0,name:f=Et(f>>>0),Oc:()=>{},Vc:()=>{}})}function H1(d){Cs(d>>>0,!r,1,!n,131072,!1),le()}var Nr=d=>{if(!M)try{if(d(),!(0<Ae))try{i?Gr()&&As(g):Dt(g)}catch(f){f instanceof re||f=="unwind"||l(0,f)}}catch(f){f instanceof re||f=="unwind"||l(0,f)}},j1=!Atomics.waitAsync||((Ag=globalThis.navigator)==null?void 0:Ag.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function xs(d){d>>>=0,j1||(Atomics.waitAsync((v(),A),d>>>2,d).value.then(Br),d+=128,Atomics.store((v(),A),d>>>2,1))}var Br=()=>Nr(()=>{var d=Gr();d&&(xs(d),Um())});function K1(d,f){(d>>>=0)==f>>>0?setTimeout(Br):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=J[d])&&d.postMessage({Sc:"checkMailbox"})}var vs=[];function X1(d,f,_,w,k){for(f>>>=0,k>>>=0,vs.length=0,_=k>>>3,w=k+w>>>3;_<w;){var C;C=(v(),Y)[_++>>>0]?(v(),Y)[_++>>>0]:(v(),P)[_++>>>0],vs.push(C)}return(f?Ns[f]:U2[d])(...vs)}var Y1=()=>{Ae=0};function Z1(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):te(J[d])}function Q1(d){}var Pr=d=>{try{d()}catch(f){G(f)}};function J1(d){var f=(..._)=>{Dr.push(d);try{return d(..._)}finally{M||(Dr.pop(),Mt&&Zt===1&&Dr.length===0&&(Zt=0,Ae+=1,Pr(kg),typeof Fibers<"u"&&Fibers.Zd()))}};return mm.set(d,f),f}var Zt=0,Mt=null,pm=0,Dr=[],Ss=new Map,fm=new Map,mm=new Map,e2=0,Ts=null,t2=[],gm=d=>(function(f){if(!M){if(Zt===0){var _=!1,w=!1;f((k=0)=>{if(!M&&(pm=k,_=!0,w)){Zt=2,Pr(()=>Eg(Mt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),k=!1;try{var C=(function(){var ee=(v(),A)[Mt+8>>>2>>>0];return ee=fm.get(ee),ee=mm.get(ee),--Ae,ee()})()}catch(ee){C=ee,k=!0}var N=!1;if(!Mt){var V=Ts;V&&(Ts=null,(k?V.reject:V.resolve)(C),N=!0)}if(k&&!N)throw C}}),w=!0,_||(Zt=1,Mt=(function(){var k=tr(65548),C=k+12;if((v(),F)[k>>>2>>>0]=C,(v(),F)[k+4>>>2>>>0]=C+65536,C=Dr[0],!Ss.has(C)){var N=e2++;Ss.set(C,N),fm.set(N,C)}return C=Ss.get(C),(v(),A)[k+8>>>2>>>0]=C,k})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Pr(()=>Ig(Mt)))}else Zt===2?(Zt=0,Pr(Mg),Ct(Mt),Mt=null,t2.forEach(Nr)):G(`invalid state: ${Zt}`);return pm}})(f=>{d().then(f)});function n2(d){return d>>>=0,gm(async()=>{var f=await ht(d);return vt(f)})}var Is=[],r2=d=>{var f=Is.length;return Is.push(d),f},i2=(d,f)=>{for(var _=Array(d),w=0;w<d;++w){var k=w,C=(v(),F)[f+4*w>>>2>>>0],N=_s[C];if(N===void 0)throw d=`parameter ${w}`,C=zm(C),f=Et(C),Ct(C),new Rn(`${d} has unknown type ${f}`);_[k]=N}return _},a2=(d,f,_)=>{var w=[];return d=d(w,_),w.length&&((v(),F)[f>>>2>>>0]=vt(w)),d},s2={},Ur=d=>{var f=s2[d];return f===void 0?Et(d):f};function o2(d,f,_){var[w,...k]=i2(d,f>>>0);f=w.Vc.bind(w);var C=k.map(ee=>ee.Uc.bind(ee));d--;var N={toValue:ht};switch(d=C.map((ee,ie)=>{var ye=`argFromPtr${ie}`;return N[ye]=ee,`${ye}(args${ie?"+"+8*ie:""})`}),_){case 0:var V="toValue(handle)";break;case 2:V="new (toValue(handle))";break;case 3:V="";break;case 1:N.getStringOrSymbol=Ur,V="toValue(handle)[getStringOrSymbol(methodName)]"}return V+=`(${d})`,w.zd||(N.toReturnWire=f,N.emval_returnValue=a2,V=`return emval_returnValue(toReturnWire, destructorsRef, ${V})`),V=`return function (handle, methodName, destructorsRef, args) {
  ${V}
  }`,_=new Function(Object.keys(N),V)(...Object.values(N)),V=`methodCaller<(${k.map(ee=>ee.name)}) => ${w.name}>`,r2(Object.defineProperty(_,"name",{value:V}))}function u2(d,f){return f>>>=0,(d=ht(d>>>0))==ht(f)}function l2(d){return(d>>>=0)?(d=Ur(d),vt(globalThis[d])):vt(globalThis)}function d2(d){return d=Ur(d>>>0),vt(t[d])}function c2(d,f){return f>>>=0,d=ht(d>>>0),f=ht(f),vt(d[f])}function h2(d){9<(d>>>=0)&&(gn[d+1]+=1)}function ym(d,f,_,w,k){return Is[d>>>0](f>>>0,_>>>0,w>>>0,k>>>0)}function p2(d,f,_,w,k){return ym(d>>>0,f>>>0,_>>>0,w>>>0,k>>>0)}function f2(){return vt([])}function m2(d){d=ht(d>>>0);for(var f=Array(d.length),_=0;_<d.length;_++)f[_]=d[_];return vt(f)}function g2(d){return vt(Ur(d>>>0))}function y2(){return vt({})}function w2(d){for(var f=ht(d>>>=0);f.length;){var _=f.pop();f.pop()(_)}bs(d)}function _2(d,f,_){f>>>=0,_>>>=0,d=ht(d>>>0),f=ht(f),_=ht(_),d[f]=_}function b2(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),A)[f>>>2>>>0]=d.getUTCSeconds(),(v(),A)[f+4>>>2>>>0]=d.getUTCMinutes(),(v(),A)[f+8>>>2>>>0]=d.getUTCHours(),(v(),A)[f+12>>>2>>>0]=d.getUTCDate(),(v(),A)[f+16>>>2>>>0]=d.getUTCMonth(),(v(),A)[f+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),A)[f+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[f+28>>>2>>>0]=d}var wm=d=>d%4==0&&(d%100!=0||d%400==0),_m=[0,31,60,91,121,152,182,213,244,274,305,335],bm=[0,31,59,90,120,151,181,212,243,273,304,334];function $2(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),A)[f>>>2>>>0]=d.getSeconds(),(v(),A)[f+4>>>2>>>0]=d.getMinutes(),(v(),A)[f+8>>>2>>>0]=d.getHours(),(v(),A)[f+12>>>2>>>0]=d.getDate(),(v(),A)[f+16>>>2>>>0]=d.getMonth(),(v(),A)[f+20>>>2>>>0]=d.getFullYear()-1900,(v(),A)[f+24>>>2>>>0]=d.getDay();var _=(wm(d.getFullYear())?_m:bm)[d.getMonth()]+d.getDate()-1|0;(v(),A)[f+28>>>2>>>0]=_,(v(),A)[f+36>>>2>>>0]=-60*d.getTimezoneOffset(),_=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(_!=w&&d.getTimezoneOffset()==Math.min(w,_)),(v(),A)[f+32>>>2>>>0]=d}function x2(d){d>>>=0;var f=new Date((v(),A)[d+20>>>2>>>0]+1900,(v(),A)[d+16>>>2>>>0],(v(),A)[d+12>>>2>>>0],(v(),A)[d+8>>>2>>>0],(v(),A)[d+4>>>2>>>0],(v(),A)[d>>>2>>>0],0),_=(v(),A)[d+32>>>2>>>0],w=f.getTimezoneOffset(),k=new Date(f.getFullYear(),6,1).getTimezoneOffset(),C=new Date(f.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(C,k);return 0>_?(v(),A)[d+32>>>2>>>0]=+(k!=C&&N==w):0<_!=(N==w)&&(k=Math.max(C,k),f.setTime(f.getTime()+6e4*((0<_?N:k)-w))),(v(),A)[d+24>>>2>>>0]=f.getDay(),_=(wm(f.getFullYear())?_m:bm)[f.getMonth()]+f.getDate()-1|0,(v(),A)[d+28>>>2>>>0]=_,(v(),A)[d>>>2>>>0]=f.getSeconds(),(v(),A)[d+4>>>2>>>0]=f.getMinutes(),(v(),A)[d+8>>>2>>>0]=f.getHours(),(v(),A)[d+12>>>2>>>0]=f.getDate(),(v(),A)[d+16>>>2>>>0]=f.getMonth(),(v(),A)[d+20>>>2>>>0]=f.getYear(),d=f.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function $m(d,f,_,w,k,C,N){return i?pe(16,1,d,f,_,w,k,C,N):-52}function xm(d,f,_,w,k,C){if(i)return pe(17,1,d,f,_,w,k,C)}var er={},v2=()=>performance.timeOrigin+performance.now();function vm(d,f){if(i)return pe(18,1,d,f);if(er[d]&&(clearTimeout(er[d].id),delete er[d]),!f)return 0;var _=setTimeout(()=>{delete er[d],Nr(()=>Dm(d,performance.timeOrigin+performance.now()))},f);return er[d]={id:_,Yd:f},0}function S2(d,f,_,w){d>>>=0,f>>>=0,_>>>=0,w>>>=0;var k=new Date().getFullYear(),C=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var N=Math.max(C,k);(v(),F)[d>>>2>>>0]=60*N,(v(),A)[f>>>2>>>0]=+(C!=k),d=(f=V=>{var ee=Math.abs(V);return`UTC${0<=V?"-":"+"}${String(Math.floor(ee/60)).padStart(2,"0")}${String(ee%60).padStart(2,"0")}`})(C),f=f(k),k<C?(Yt(d,_,17),Yt(f,w,17)):(Yt(d,w,17),Yt(f,_,17))}var T2=()=>Date.now();function I2(d,f,_){return _>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),Y)[_>>>3>>>0]=BigInt(d),0):28}var ks=[],Sm=(d,f)=>{ks.length=0;for(var _;_=(v(),X)[d++>>>0];){var w=_!=105;f+=(w&=_!=112)&&f%8?4:0,ks.push(_==112?(v(),F)[f>>>2>>>0]:_==106?(v(),Y)[f>>>3>>>0]:_==105?(v(),A)[f>>>2>>>0]:(v(),P)[f>>>3>>>0]),f+=w?8:4}return ks};function k2(d,f,_){return d>>>=0,f=Sm(f>>>0,_>>>0),Ns[d](...f)}function E2(d,f,_){return d>>>=0,f=Sm(f>>>0,_>>>0),Ns[d](...f)}var M2=()=>{};function C2(d,f){return I(Ve(d>>>0,f>>>0))}var A2=()=>{throw Ae+=1,"unwind"};function R2(){return 4294901760}var z2=()=>navigator.hardwareConcurrency,yn={},Lr=d=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+f[1]:0},Tm=d=>{for(var f of d)(d=Lr(f))&&(yn[d]=f)};function O2(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),Tm(d),yn.gd=Lr(d[3]),yn.Jd=d,yn.gd}function Fr(d){if(!(d=yn[d>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(d))d=f[1];else{if(!(f=/^(.+?)@/.exec(d)))return 0;d=f[1]}Ct(Fr.hd??0),f=Or(d)+1;var _=tr(f);return _&&Yt(d,_,f),Fr.hd=_,Fr.hd}function N2(d){d>>>=0;var f=(v(),X).length;if(d<=f||4294901760<d)return!1;for(var _=1;4>=_;_*=2){var w=f*(1+.2/_);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-ce.buffer.byteLength+65535)/65536|0;try{ce.grow(w),q();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}function B2(d,f,_){if(d>>>=0,f>>>=0,yn.gd==d)var w=yn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Tm(w);for(var k=3;w[k]&&Lr(w[k])!=d;)++k;for(d=0;d<_&&w[d+k];++d)(v(),A)[f+4*d>>>2>>>0]=Lr(w[d+k]);return d}var Es,Ms={},Im=()=>{var w;if(!Es){var d,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in Ms)Ms[d]===void 0?delete f[d]:f[d]=Ms[d];var _=[];for(d in f)_.push(`${d}=${f[d]}`);Es=_}return Es};function km(d,f){if(i)return pe(19,1,d,f);d>>>=0,f>>>=0;var _,w=0,k=0;for(_ of Im()){var C=f+w;(v(),F)[d+k>>>2>>>0]=C,w+=Yt(_,C,1/0)+1,k+=4}return 0}function Em(d,f){if(i)return pe(20,1,d,f);d>>>=0,f>>>=0;var _=Im();for(var w of((v(),F)[d>>>2>>>0]=_.length,d=0,_))d+=Or(w)+1;return(v(),F)[f>>>2>>>0]=d,0}function Mm(d){return i?pe(21,1,d):52}function Cm(d,f,_,w){return i?pe(22,1,d,f,_,w):52}function Am(d,f,_,w){return i?pe(23,1,d,f,_,w):70}var P2=[null,[],[]];function Rm(d,f,_,w){if(i)return pe(24,1,d,f,_,w);f>>>=0,_>>>=0,w>>>=0;for(var k=0,C=0;C<_;C++){var N=(v(),F)[f>>>2>>>0],V=(v(),F)[f+4>>>2>>>0];f+=8;for(var ee=0;ee<V;ee++){var ie=d,ye=(v(),X)[N+ee>>>0],ve=P2[ie];ye===0||ye===10?((ie===1?S:I)(Yf(ve)),ve.length=0):ve.push(ye)}k+=V}return(v(),F)[w>>>2>>>0]=k,0}function D2(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Ie();Ce.push(async()=>{var f=(async function(){if(!i)return Promise.all(dt.map(de))})();Ue++,await f,--Ue==0&&Le&&(f=Le,Le=null,f())})})(),i||(ce=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),q()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>be(),t.stackRestore=d=>_e(d),t.stackAlloc=d=>Rs(d),t.setValue=function(d,f,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(v(),D)[d>>>0]=f;break;case"i16":(v(),L)[d>>>1>>>0]=f;break;case"i32":(v(),A)[d>>>2>>>0]=f;break;case"i64":(v(),Y)[d>>>3>>>0]=BigInt(f);break;case"float":(v(),R)[d>>>2>>>0]=f;break;case"double":(v(),P)[d>>>3>>>0]=f;break;case"*":(v(),F)[d>>>2>>>0]=f;break;default:G(`invalid type for setValue: ${_}`)}},t.getValue=function(d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),D)[d>>>0];case"i16":return(v(),L)[d>>>1>>>0];case"i32":return(v(),A)[d>>>2>>>0];case"i64":return(v(),Y)[d>>>3>>>0];case"float":return(v(),R)[d>>>2>>>0];case"double":return(v(),P)[d>>>3>>>0];case"*":return(v(),F)[d>>>2>>>0];default:G(`invalid type for getValue: ${f}`)}},t.UTF8ToString=Ve,t.stringToUTF8=Yt,t.lengthBytesUTF8=Or;var zm,Om,Gr,Ct,tr,Cs,Nm,Bm,Pm,As,Dm,Um,$e,nr,Lm,_e,Rs,be,Fm,zs,Gm,Wm,qm,Os,Vm,Hm,jm,Km,Xm,Ym,Zm,Qm,Jm,eg,tg,ng,rg,ig,ag,sg,og,ug,lg,dg,cg,hg,pg,fg,mg,gg,yg,wg,_g,bg,$g,xg,vg,Sg,Tg,Ig,kg,Eg,Mg,Lt,U2=[st,An,Jn,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,$m,xm,vm,km,Em,Mm,Cm,Am,Rm],Ns={1003524:(d,f,_,w,k)=>{if(t===void 0||!t.Xc)return 1;if((d=Ve(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(f=Number(f>>>0),_=Number(_>>>0),w=Number(w>>>0),f+_>d.byteLength)return 3;try{let C=d.subarray(f,f+_);switch(k){case 0:(v(),X).set(C,w>>>0);break;case 1:t.Qd?t.Qd(w,C):t.Id(w,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,f,_)=>{t.td(d,(v(),X).subarray(f>>>0,f+_>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,f,_)=>{t.ed(Number(d),Number(f),Number(_),!0)},1004704:(d,f,_)=>{t.ed(Number(d),Number(f),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,f,_)=>{t.$b("HardSigmoid",d,{alpha:f,beta:_})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,f,_)=>{t.$b("Clip",d,{min:f,max:_})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,f)=>{t.$b("Elu",d,{alpha:f})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,f)=>{t.$b("LeakyRelu",d,{alpha:f})},1006444:(d,f)=>{t.$b("ThresholdedRelu",d,{alpha:f})},1006514:(d,f)=>{t.$b("Cast",d,{to:f})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,f,_,w,k)=>{t.$b("ReduceMean",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007283:(d,f,_,w,k)=>{t.$b("ReduceMax",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007457:(d,f,_,w,k)=>{t.$b("ReduceMin",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007631:(d,f,_,w,k)=>{t.$b("ReduceProd",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007806:(d,f,_,w,k)=>{t.$b("ReduceSum",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1007980:(d,f,_,w,k)=>{t.$b("ReduceL1",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008153:(d,f,_,w,k)=>{t.$b("ReduceL2",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008326:(d,f,_,w,k)=>{t.$b("ReduceLogSum",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008503:(d,f,_,w,k)=>{t.$b("ReduceSumSquare",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008683:(d,f,_,w,k)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!f,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,f,_)=>{t.$b("Transpose",d,{perm:f?Array.from((v(),A).subarray(Number(f)>>>0,Number(_)>>>0)):[]})},1009040:(d,f,_,w)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:Ve(_),format:w?"NHWC":"NCHW"})},1009173:(d,f,_,w)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:Ve(_),format:w?"NHWC":"NCHW"})},1009306:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe,Qt)=>{t.$b("ConvTranspose",d,{format:ee?"NHWC":"NCHW",autoPad:f,dilations:[_],group:w,kernelShape:[k],pads:[C,N],strides:[V],wIsConst:()=>!!(v(),D)[ie>>>0],outputPadding:ye?Array.from((v(),A).subarray(Number(ye)>>>0,Number(ve)>>>0)):[],outputShape:ze?Array.from((v(),A).subarray(Number(ze)>>>0,Number(Pe)>>>0)):[],activation:Ve(Qt)})},1009739:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("ConvTranspose",d,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(N)>>>0,(Number(N)>>>0)+2>>>0)),wIsConst:()=>!!(v(),D)[ee>>>0],outputPadding:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],outputShape:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[],activation:Ve(Pe)})},1010400:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe,Qt)=>{t.$b("ConvTranspose",d,{format:ee?"NHWC":"NCHW",autoPad:f,dilations:[_],group:w,kernelShape:[k],pads:[C,N],strides:[V],wIsConst:()=>!!(v(),D)[ie>>>0],outputPadding:ye?Array.from((v(),A).subarray(Number(ye)>>>0,Number(ve)>>>0)):[],outputShape:ze?Array.from((v(),A).subarray(Number(ze)>>>0,Number(Pe)>>>0)):[],activation:Ve(Qt)})},1010833:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("ConvTranspose",d,{format:V?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(N)>>>0,(Number(N)>>>0)+2>>>0)),wIsConst:()=>!!(v(),D)[ee>>>0],outputPadding:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],outputShape:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[],activation:Ve(Pe)})},1011494:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1011585:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("AveragePool",d,{format:Pe?"NHWC":"NCHW",auto_pad:f,ceil_mode:_,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:V?Array.from((v(),A).subarray(Number(V)>>>0,Number(ee)>>>0)):[],pads:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],strides:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[]})},1012064:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1012155:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("AveragePool",d,{format:Pe?"NHWC":"NCHW",auto_pad:f,ceil_mode:_,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:V?Array.from((v(),A).subarray(Number(V)>>>0,Number(ee)>>>0)):[],pads:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],strides:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[]})},1012634:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1012721:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("MaxPool",d,{format:Pe?"NHWC":"NCHW",auto_pad:f,ceil_mode:_,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:V?Array.from((v(),A).subarray(Number(V)>>>0,Number(ee)>>>0)):[],pads:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],strides:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[]})},1013196:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1013283:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe)=>{t.$b("MaxPool",d,{format:Pe?"NHWC":"NCHW",auto_pad:f,ceil_mode:_,count_include_pad:w,storage_order:k,dilations:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:V?Array.from((v(),A).subarray(Number(V)>>>0,Number(ee)>>>0)):[],pads:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],strides:ve?Array.from((v(),A).subarray(Number(ve)>>>0,Number(ze)>>>0)):[]})},1013758:(d,f,_,w,k)=>{t.$b("Gemm",d,{alpha:f,beta:_,transA:w,transB:k})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,f,_,w)=>{t.$b("ArgMax",d,{keepDims:!!f,selectLastIndex:!!_,axis:w})},1014024:(d,f,_,w)=>{t.$b("ArgMin",d,{keepDims:!!f,selectLastIndex:!!_,axis:w})},1014132:(d,f)=>{t.$b("Softmax",d,{axis:f})},1014195:(d,f)=>{t.$b("Concat",d,{axis:f})},1014255:(d,f,_,w,k)=>{t.$b("Split",d,{axis:f,numOutputs:_,splitSizes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,f)=>{t.$b("Gather",d,{axis:Number(f)})},1014536:(d,f)=>{t.$b("GatherElements",d,{axis:Number(f)})},1014615:(d,f)=>{t.$b("GatherND",d,{batch_dims:Number(f)})},1014694:(d,f,_,w,k,C,N,V,ee,ie,ye)=>{t.$b("Resize",d,{antialias:f,axes:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Ve(k),cubicCoeffA:C,excludeOutside:N,extrapolationValue:V,keepAspectRatioPolicy:Ve(ee),mode:Ve(ie),nearestMode:Ve(ye)})},1015056:(d,f,_,w,k,C,N)=>{t.$b("Slice",d,{starts:f?Array.from((v(),A).subarray(Number(f)>>>0,Number(_)>>>0)):[],ends:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[],axes:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,f,_)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:_?"NHWC":"NCHW"})},1015486:(d,f,_)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:_?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,f)=>{t.$b("Einsum",d,{equation:Ve(f)})},1015734:(d,f,_,w,k)=>{t.$b("Pad",d,{mode:f,value:_,pads:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},1015877:(d,f,_,w,k,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:_,spatial:!!k,trainingMode:!!w,format:C?"NHWC":"NCHW"})},1016046:(d,f,_,w,k,C)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:_,spatial:!!k,trainingMode:!!w,format:C?"NHWC":"NCHW"})},1016215:(d,f,_)=>{t.$b("CumSum",d,{exclusive:Number(f),reverse:Number(_)})},1016312:(d,f,_)=>{t.$b("DequantizeLinear",d,{axis:f,blockSize:_})},1016402:(d,f,_,w,k)=>{t.$b("GridSample",d,{align_corners:f,mode:Ve(_),padding_mode:Ve(w),format:k?"NHWC":"NCHW"})},1016572:(d,f,_,w,k)=>{t.$b("GridSample",d,{align_corners:f,mode:Ve(_),padding_mode:Ve(w),format:k?"NHWC":"NCHW"})},1016742:(d,f)=>{t.$b("ScatterND",d,{reduction:Ve(f)})},1016827:(d,f,_,w,k,C,N,V,ee)=>{t.$b("Attention",d,{numHeads:f,isUnidirectional:_,maskFilterValue:w,scale:k,doRotary:C,qkvHiddenSizes:N?Array.from((v(),A).subarray(Number(V)>>>0,Number(V)+N>>>0)):[],pastPresentShareBuffer:!!ee})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe,Qt,Bs)=>{t.$b("Conv",d,{format:ve?"NHWC":"NCHW",auto_pad:f,dilations:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:k,kernel_shape:C?Array.from((v(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],pads:V?Array.from((v(),A).subarray(Number(V)>>>0,Number(ee)>>>0)):[],strides:ie?Array.from((v(),A).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],w_is_const:()=>!!(v(),D)[Number(ze)>>>0],activation:Ve(Pe),activation_params:Qt?Array.from((v(),R).subarray(Number(Qt)>>>0,Number(Bs)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,f,_,w,k,C,N,V,ee)=>{t.$b("GroupQueryAttention",d,{numHeads:f,kvNumHeads:_,scale:w,softcap:k,doRotary:C,rotaryInterleaved:N,smoothSoftmax:V,localWindowSize:ee})},1018124:(d,f,_,w)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:_,simplified:!!w})},1018235:(d,f,_,w)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:_,simplified:!!w})},1018346:(d,f,_,w,k,C)=>{t.$b("MatMulNBits",d,{k:f,n:_,accuracyLevel:w,bits:k,blockSize:C})},1018473:(d,f,_,w,k,C)=>{t.$b("MultiHeadAttention",d,{numHeads:f,isUnidirectional:_,maskFilterValue:w,scale:k,doRotary:C})},1018632:(d,f)=>{t.$b("QuickGelu",d,{alpha:f})},1018696:(d,f,_,w,k)=>{t.$b("RotaryEmbedding",d,{interleaved:!!f,numHeads:_,rotaryEmbeddingDim:w,scale:k})},1018835:(d,f,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!_})},1018937:(d,f,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!_})},1019039:(d,f,_,w)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:f,quantizeAxis:_,blockSize:w})},1019160:d=>{t.Fd(d)},1019194:(d,f)=>t.Hd(Number(d),Number(f),t.Yc.Kd,t.Yc.errors)};function L2(d,f,_){return gm(async()=>{await t.Dd(Number(d),Number(f),Number(_))})}function F2(){return typeof wasmOffsetConverter<"u"}function G2(d,f,_,w){var k=be();try{return Qm(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function W2(d,f,_){var w=be();try{return Km(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;$e(1,0)}}function q2(d){var f=be();try{Vm(d)}catch(_){if(_e(f),_!==_+0)throw _;$e(1,0)}}function V2(d,f){var _=be();try{return Os(d,f)}catch(w){if(_e(_),w!==w+0)throw w;$e(1,0)}}function H2(d,f,_){var w=be();try{qm(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;$e(1,0)}}function j2(d,f){var _=be();try{Jm(d,f)}catch(w){if(_e(_),w!==w+0)throw w;$e(1,0)}}function K2(d,f,_,w,k,C,N){var V=be();try{return Ym(d,f,_,w,k,C,N)}catch(ee){if(_e(V),ee!==ee+0)throw ee;$e(1,0)}}function X2(d,f,_,w,k,C){var N=be();try{Hm(d,f,_,w,k,C)}catch(V){if(_e(N),V!==V+0)throw V;$e(1,0)}}function Y2(d,f,_,w){var k=be();try{Zm(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function Z2(d,f,_,w,k){var C=be();try{jm(d,f,_,w,k)}catch(N){if(_e(C),N!==N+0)throw N;$e(1,0)}}function Q2(d,f,_,w,k,C,N){var V=be();try{tg(d,f,_,w,k,C,N)}catch(ee){if(_e(V),ee!==ee+0)throw ee;$e(1,0)}}function J2(d,f,_,w,k,C,N){var V=be();try{ng(d,f,_,w,k,C,N)}catch(ee){if(_e(V),ee!==ee+0)throw ee;$e(1,0)}}function e$(d,f,_,w,k,C,N,V){var ee=be();try{sg(d,f,_,w,k,C,N,V)}catch(ie){if(_e(ee),ie!==ie+0)throw ie;$e(1,0)}}function t$(d,f,_,w,k){var C=be();try{return eg(d,f,_,w,k)}catch(N){if(_e(C),N!==N+0)throw N;$e(1,0)}}function n$(d,f,_){var w=be();try{return og(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;$e(1,0)}}function r$(d,f,_,w,k,C,N,V){var ee=be();try{ug(d,f,_,w,k,C,N,V)}catch(ie){if(_e(ee),ie!==ie+0)throw ie;$e(1,0)}}function i$(d,f,_,w,k,C,N,V,ee,ie,ye,ve){var ze=be();try{rg(d,f,_,w,k,C,N,V,ee,ie,ye,ve)}catch(Pe){if(_e(ze),Pe!==Pe+0)throw Pe;$e(1,0)}}function a$(d,f,_,w,k,C){var N=be();try{return ig(d,f,_,w,k,C)}catch(V){if(_e(N),V!==V+0)throw V;$e(1,0)}}function s$(d,f,_){var w=be();try{return lg(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;return $e(1,0),0n}}function o$(d,f,_,w,k,C,N,V,ee){var ie=be();try{Xm(d,f,_,w,k,C,N,V,ee)}catch(ye){if(_e(ie),ye!==ye+0)throw ye;$e(1,0)}}function u$(d){var f=be();try{return dg(d)}catch(_){if(_e(f),_!==_+0)throw _;$e(1,0)}}function l$(d,f){var _=be();try{return Tg(d,f)}catch(w){if(_e(_),w!==w+0)throw w;return $e(1,0),0n}}function d$(d){var f=be();try{return cg(d)}catch(_){if(_e(f),_!==_+0)throw _;return $e(1,0),0n}}function c$(d,f,_,w){var k=be();try{return yg(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function h$(d,f,_,w,k){var C=be();try{return wg(d,f,_,w,k)}catch(N){if(_e(C),N!==N+0)throw N;$e(1,0)}}function p$(d,f,_,w,k,C){var N=be();try{return _g(d,f,_,w,k,C)}catch(V){if(_e(N),V!==V+0)throw V;$e(1,0)}}function f$(d,f,_,w,k,C){var N=be();try{return bg(d,f,_,w,k,C)}catch(V){if(_e(N),V!==V+0)throw V;$e(1,0)}}function m$(d,f,_,w,k,C,N,V){var ee=be();try{return ag(d,f,_,w,k,C,N,V)}catch(ie){if(_e(ee),ie!==ie+0)throw ie;$e(1,0)}}function g$(d,f,_,w,k){var C=be();try{return $g(d,f,_,w,k)}catch(N){if(_e(C),N!==N+0)throw N;return $e(1,0),0n}}function y$(d,f,_,w){var k=be();try{return xg(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function w$(d,f,_,w){var k=be();try{return vg(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function _$(d,f,_,w,k,C,N,V,ee,ie,ye,ve){var ze=be();try{return Sg(d,f,_,w,k,C,N,V,ee,ie,ye,ve)}catch(Pe){if(_e(ze),Pe!==Pe+0)throw Pe;$e(1,0)}}function b$(d,f,_,w,k,C,N,V,ee,ie,ye){var ve=be();try{mg(d,f,_,w,k,C,N,V,ee,ie,ye)}catch(ze){if(_e(ve),ze!==ze+0)throw ze;$e(1,0)}}function $$(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe,Qt,Bs){var T$=be();try{gg(d,f,_,w,k,C,N,V,ee,ie,ye,ve,ze,Pe,Qt,Bs)}catch(Ps){if(_e(T$),Ps!==Ps+0)throw Ps;$e(1,0)}}function x$(d,f,_){var w=be();try{return hg(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;$e(1,0)}}function v$(d,f,_){var w=be();try{return pg(d,f,_)}catch(k){if(_e(w),k!==k+0)throw k;$e(1,0)}}function S$(d,f,_,w){var k=be();try{fg(d,f,_,w)}catch(C){if(_e(k),C!==C+0)throw C;$e(1,0)}}function Wr(){if(0<Ue)Le=Wr;else if(i)y==null||y(t),U();else{for(var d=Ce;0<d.length;)d.shift()(t);0<Ue?Le=Wr:(t.calledRun=!0,M||(U(),y==null||y(t)))}}return i||(Lt=await ue(),Wr()),t.PTR_SIZE=4,B?t:new Promise((d,f)=>{y=d,b=f})}var so,oo,Jg=Q(()=>{var e,t;so=ao,oo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),oo&&ao()}),Qr,Jr,uo,ut,lo,sr,co,ho,ei,po,ti,fo,ni,mo,ri=Q(()=>{Xr(),Qr=typeof location>"u"?void 0:location.origin,Jr=self.location.href>"file:"&&self.location.href<"file;",uo=()=>{{if(Jr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Qr).href}return self.location.href}},ut=uo(),lo=()=>{if(ut&&!ut.startsWith("blob:"))return ut.substring(0,ut.lastIndexOf("/")+1)},sr=(e,t)=>{try{let n=t??ut;return(n?new URL(e,n):new URL(e)).origin===Qr}catch{return!1}},co=(e,t)=>{let n=t??ut;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ho=(e,t)=>`${t??"./"}${e}`,ei=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},po=async e=>(await import(e)).default,ti=(Qg(),zn(no)).default,fo=async()=>{if(!ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(sr(ut))return[void 0,ti()];let e=await ei(ut);return[e,ti(e)]},ni=(Jg(),zn(io)).default,mo=async(e,t,n,r)=>{let i=ni&&!(e||t);if(i)if(ut)i=sr(ut)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,ni];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??co(a,t),o=n&&s&&!sr(s,t),u=o?await ei(s):s??ho(a,t);return[o?u:void 0,await po(u)]}}}),ii,or,Bn,ai,go,yo,wo,si,Ne,nn=Q(()=>{ri(),or=!1,Bn=!1,ai=!1,go=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},yo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},wo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},si=async e=>{if(or)return Promise.resolve();if(Bn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ai)throw new Error("previous call to 'initializeWebAssembly()' failed.");Bn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!wo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!yo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=go();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await mo(o,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,b)=>{let $={numThreads:n};if(h)$.wasmBinary=h,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,o).href;else if(c){let x=lo();x&&($.locateFile=T=>x+T)}p($).then(x=>{Bn=!1,or=!0,ii=x,y(),c&&URL.revokeObjectURL(c)},x=>{Bn=!1,ai=!0,b(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ne=()=>{if(or&&ii)return ii;throw new Error("WebAssembly is not initialized yet.")}}),ft,ur,Ee,oi=Q(()=>{nn(),ft=(e,t)=>{let n=Ne(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},ur=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")ur(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ee=e=>{let t=Ne(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),_o,e0=Q(()=>{nn(),oi(),_o=e=>{let t=Ne(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=ft(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ee("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ur(e.extra,"",new WeakSet,(s,o)=>{let u=ft(s,r),l=ft(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Ee(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),bo,$o,xo,rn,vo,So,t0=Q(()=>{nn(),oi(),bo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},$o=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},rn=(e,t,n,r)=>{let i=ft(t,r),a=ft(n,r);Ne()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ee(`Can't set a session config entry: ${t} - ${n}.`)},vo=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",rn(e,"session.disable_quant_qdq","1",n),rn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&rn(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);rn(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=ft(a,n),u=s.length,l=0,h=0;if(u>0){l=Ne()._malloc(u*Ne().PTR_SIZE),n.push(l),h=Ne()._malloc(u*Ne().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Ne().setValue(l+c*Ne().PTR_SIZE,s[c][0],"*"),Ne().setValue(h+c*Ne().PTR_SIZE,s[c][1],"*")}await Ne()._OrtAppendExecutionProvider(e,o,l,h,u)!==0&&Ee(`Can't append execution provider: ${a}.`)}},So=async e=>{let t=Ne(),n=0,r=[],i=e||{};xo(i);try{let a=bo(i.graphOptimizationLevel??"all"),s=$o(i.executionMode??"sequential"),o=typeof i.logId=="string"?ft(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?ft(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,h),n===0&&Ee("Can't create session options."),i.executionProviders&&await vo(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);rn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=ft(c,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&Ee(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&ur(i.extra,"",new WeakSet,(c,p)=>{rn(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ee("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),an,zt,sn,lr,dr,ui,li,di,he=Q(()=>{an=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},zt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},sn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},lr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},dr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ui=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",li=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",di=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ci,To=Q(()=>{Xr(),ci=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Io,ko,Eo,Mo,hi,Co,xe,Ot=Q(()=>{he(),Io=["V","I","W","E","F"],ko=(e,t)=>{console.log(`[${Io[e]},${new Date().toISOString()}]${t}`)},hi=(e,t)=>{Eo=e,Mo=t},Co=(e,t)=>{let n=dr(e),r=dr(Eo);n>=r&&ko(n,typeof t=="function"?t():t)},xe=(...e)=>{Mo&&Co(...e)}}),Ao,$n,W,cr,Ro,zo,Oo,fe=Q(()=>{Ao=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},$n=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=Ao.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(h>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},W=class qr{static size(t){return qr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return qr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return qr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},cr=class rr{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)rr.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return rr.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return rr.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(rr.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[o]=h-a[s],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},Ro=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!$n.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},zo=-34028234663852886e22,Oo=34028234663852886e22}),pi,No=Q(()=>{he(),pi=(e,t)=>new(lr(t))(e)}),fi,mi,gi,Bo,yi,Po,wi,_i,bi,Do,Uo,n0=Q(()=>{he(),Ot(),fi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),mi=(e,t)=>{if(t==="int32")return e;let n=fi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(lr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},gi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Bo=1,yi=()=>Bo++,Po=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),wi=(e,t)=>{let n=fi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},_i=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return wi(this.dataType,this.tensorShape)}destroy(){xe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=gi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},bi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Po.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);xe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==wi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=mi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else xe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?gi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Do=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=yi();return this.tensorTrackersById.set(e,new bi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){xe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){xe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=yi(),s=new _i({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new bi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,n)){xe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}xe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new _i({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Uo=(...e)=>new Do(...e)}),Pn,Lo,Fo,r0=Q(()=>{he(),nn(),No(),n0(),Ot(),Pn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Lo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Fo=class{constructor(e){this.tensorManager=Uo(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,hi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){xe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){xe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)xe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Lo(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){xe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Pn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){xe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Pn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ne().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");xe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return pi(n,t)}}registerMLTensor(e,t,n,r){let i=Pn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return xe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(s){let c=mi(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return xe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Pn.get(an(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),$i=Q(()=>{}),xi,hr,pr,Go,Wo,vi,Si,qo,Vo,i0=Q(()=>{Ot(),$i(),xi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),hr=[],pr=e=>Math.ceil(Number(e)/16)*16,Go=e=>{for(let t=0;t<hr.length;t++){let n=hr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Wo=1,vi=()=>Wo++,Si=async(e,t,n,r)=>{let i=pr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},qo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of xi)hr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=pr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),xe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=pr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return xe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=vi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),xe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),xe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Go(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:vi(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),xe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return xe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Si(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=xi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(xe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Vo=(...e)=>new qo(...e)}),Ho,Te,We=Q(()=>{Ho=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Te=e=>new Ho(e)}),xn,fr,He,Qe,oe,Fe,Ti,vn,Gt,se,Dn,K,ae,jo,Ii,Ko,Xo,ge=Q(()=>{he(),fe(),xn=64,fr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},He=(e,t=1)=>{let n=fr(e,t);return typeof n=="string"?n:n[0]},Qe=(e,t=1)=>{let n=fr(e,t);return typeof n=="string"?n:n[1]},oe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:W.computeStrides(n)})}),t},Fe=e=>e%4===0?4:e%2===0?2:1,Ti=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,vn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Gt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,se=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Dn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=fr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},m=B=>typeof B=="string"?B:`${B}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",b=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let B=0;B<s-1;B++)x+=`
    let dim${B} = current / ${se($,B,s)};
    let rest${B} = current % ${se($,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=B=>(g.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),I=[];if(s>=2)for(let B=s-1;B>=0;B--)I.push(`${se($,B,s)} * (indices[${B}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,E=B=>(g.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),v=(...B)=>s===0?"0u":`${p.indices}(${B.map(m).join(",")})`,z=(B,q)=>s<2?`${B}`:`${se(B,q,s)}`,D=(B,q,U)=>s<2?`${B}=${U};`:`${se(B,q,s)}=${U};`,X={},L=(B,q)=>{g.broadcastedIndicesToOffset=!0;let U=`${q.name}broadcastedIndicesTo${e}Offset`;if(U in X)return`${U}(${B})`;let G=[];for(let ne=s-1;ne>=0;ne--){let ue=q.indicesGet("outputIndices",ne+q.rank-s);G.push(`${z($,ne)} * (${ue} % ${z(b,ne)})`)}return X[U]=`fn ${U}(outputIndices: ${q.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${U}(${B})`},H=(B,q)=>(()=>{if(p.storage===p.value)return`${e}[${B}]=${q};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${q}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),A=B=>(()=>{if(p.storage===p.value)return`${e}[${B}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${B}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${B}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),F=s<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${A(`i2o_${e}(indices)`)};
  }`,R=s<2?"":(()=>{let B=o.map(U=>`d${U}: u32`).join(", "),q=o.map(U=>`d${U}`).join(", ");return`
  fn get_${e}(${B}) -> ${h} {
    return get_${e}ByIndices(${v(q)});
  }`})(),P=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let q=B.map(m).join(",");return s===0?A("0u"):s===1?A(q[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${q})`)},Y=B=>s<2?A(B):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${B})`),O=s<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,Z=s<2?"":(()=>{let B=o.map(U=>`d${U}: u32`).join(", "),q=o.map(U=>`d${U}`).join(", ");return`
  fn set_${e}(${B}, value: ${h}) {
    set_${e}ByIndices(${v(q)}, value);
  }`})();return{impl:()=>{let B=[],q=!1;return g.offsetToIndices&&(B.push(T),q=!0),g.indicesToOffset&&(B.push(M),q=!0),g.broadcastedIndicesToOffset&&(Object.values(X).forEach(U=>B.push(U)),q=!0),g.set&&(B.push(Z),q=!0),g.setByIndices&&(B.push(O),q=!0),g.get&&(B.push(R),q=!0),g.getByIndices&&(B.push(F),q=!0),!a&&q&&B.unshift(`const ${b} = ${p.indices}(${n.join(",")});`,`const ${$} = ${p.indices}(${W.computeStrides(n).join(",")});`),B.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:E,broadcastedIndicesToOffset:L,indices:v,indicesGet:z,indicesSet:D,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let q=B[s];if(typeof q!="string")throw new Error("value must be string");let U=B.slice(0,s).map(m).join(",");return s===0?H("0u",q):s===1?H(U[0],q):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${U}, ${q})`)},setByOffset:H,setByIndices:(B,q)=>s<2?H(B,q):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${q});`),get:P,getByOffset:A,getByIndices:Y,usage:r,name:e,strides:$,shape:b,rank:s}},K=(e,t,n,r=1)=>Dn(e,t,n,"input",r),ae=(e,t,n,r=1)=>Dn(e,t,n,"output",r),jo=(e,t,n)=>Dn(e,t,n,"atomicOutput",1),Ii=(e,t,n,r=1)=>Dn(e,t,n,"internal",r),Ko=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=xn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Xo=(e,t)=>new Ko(e,t)}),Yo,ki,Zo,Qo,Jo,eu,lt,tu,nu,Wt=Q(()=>{he(),fe(),We(),ge(),Yo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ki=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Zo=(e,t)=>W.sortBasedOnPerm(e,ki(e.length,t)),Qo=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Jo=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},eu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},lt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ki(r,t),a=Zo(e.dims,i),s=e.dims,o=a,u=r<2||eu(i,e.dims),l;if(u)return l=g=>{let y=K("input",n,s,4),b=ae("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=Jo(e.dims,i),p=W.areEqual(c,[2,3,1]),m=W.areEqual(c,[3,1,2]);if(h.length===2||p||m){s=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,o=[s[1],s[0]];let g=16;return l=y=>{let b=K("a",n,s.length),$=ae("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
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
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...oe(s,o)]}},getShaderSource:l}}return l=g=>{let y=K("a",n,s.length),b=ae("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}

  ${Qo(i,r,y,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=W.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(s,o)]}},getShaderSource:l}},tu=(e,t)=>{Yo(e.inputs,t.perm),e.compute(lt(e.inputs[0],t.perm))},nu=e=>Te({perm:e.perm})}),ru,iu,au,su,ou,uu,lu,du,cu,hu,mt,pu,fu,mu,gu,yu,wu,_u,bu,$u,xu,a0=Q(()=>{he(),fe(),ge(),Mi(),Wt(),ru={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},iu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},au={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},su={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ou=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},uu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},lu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},du=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},cu=(e,t)=>{let n=[];if(!du(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},hu=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=W.size(a),l=W.size(s),h=K("_A",n[0].dataType,o),c=ae("output",i,a),p=64;u===1&&(p=256);let m=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${au[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${ru[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${iu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${su[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:Ei(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=W.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=cu(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(lt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=ou(o.length,u.dims.length));let[h,c]=uu(u.dims,o),p=h;i.keepDims&&(p=lu(h,s)),e.compute(hu(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},pu=(e,t)=>{mt(e,"ReduceMeanShared",t,"mean")},fu=(e,t)=>{mt(e,"ReduceL1Shared",t,"l1")},mu=(e,t)=>{mt(e,"ReduceL2Shared",t,"l2")},gu=(e,t)=>{mt(e,"ReduceLogSumExpShared",t,"logSumExp")},yu=(e,t)=>{mt(e,"ReduceMaxShared",t,"max")},wu=(e,t)=>{mt(e,"ReduceMinShared",t,"min")},_u=(e,t)=>{mt(e,"ReduceProdShared",t,"prod")},bu=(e,t)=>{mt(e,"ReduceSumShared",t,"sum")},$u=(e,t)=>{mt(e,"ReduceSumSquareShared",t,"sumSquare")},xu=(e,t)=>{mt(e,"ReduceLogSumShared",t,"logSum")}}),gt,vu,mr,Ei,yt,Su,Tu,Iu,ku,Eu,Mu,Cu,Au,Ru,zu,wt,Ou,Nu,Bu,Pu,Du,Uu,Lu,Fu,Gu,Wu,Mi=Q(()=>{he(),fe(),We(),ge(),a0(),gt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},vu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],mr=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,h=l.length,c=W.normalizeAxes(i,h),p=!o&&c.length===0;l.forEach((y,b)=>{p||c.indexOf(b)>=0?s&&u.push(1):u.push(y)});let m=u.length,g=W.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let b=[],$=K("_A",n[0].dataType,h),x=ae("output",a,m),T=r($,x,c),S=T[2];for(let I=0,M=0;I<h;I++)p||c.indexOf(I)>=0?(s&&M++,S=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(b.push(`${$.indicesSet("input_indices",I,x.indicesGet("output_indices",M))};`),M++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(l,u)]})}},Ei=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Te({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},yt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Ei(i,n);e.compute(mr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?vu:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Su=(e,t)=>{gt(e.inputs),yt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Tu=(e,t)=>{gt(e.inputs),yt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Iu=(e,t)=>{gt(e.inputs),yt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ku=(e,t)=>{gt(e.inputs),yt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Eu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Mu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Cu=(e,t)=>{gt(e.inputs),yt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Au=(e,t)=>{gt(e.inputs),yt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Ru=(e,t)=>{gt(e.inputs),yt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},zu=(e,t)=>{gt(e.inputs),yt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},wt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Ou=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mu(e,t):pu(e,t)},Nu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tu(e,t):fu(e,t)},Bu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):mu(e,t)},Pu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ku(e,t):gu(e,t)},Du=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eu(e,t):yu(e,t)},Uu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):wu(e,t)},Lu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Au(e,t):_u(e,t)},Fu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ru(e,t):bu(e,t)},Gu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zu(e,t):$u(e,t)},Wu=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Su(e,t):xu(e,t)}}),Ci,qu,Vu,Ai,s0=Q(()=>{he(),We(),Mi(),Ci=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},qu=(e,t)=>{Ci(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(mr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Vu=(e,t)=>{Ci(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(mr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ai=e=>Te(e)}),Hu,gr,ju,Ku,Xu,Un,Yu,Zu,Ri=Q(()=>{he(),fe(),$i(),ge(),Hu=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let b=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},gr=(e,t,n)=>t&&e?`
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
    `,ju=(e,t,n,r,i,a,s,o)=>{let u=Fe(s?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],m=He(e.dataType,u),g=Qe(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let b=$=>{let x=ae("x",e.dataType,e.dims,u),T=[x],S=s?K("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let I=o?K("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let M=Qe(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(E).declareVariables(...T)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${gr(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Ku=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=Fe(a.headSize),$=a.headSize/b,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],I=c&&r&&W.size(r.dims)>0,M=["type","type"];I&&M.push("type"),i&&M.push("type"),o&&M.push("type"),u&&M.push("type");let E=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&E.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=z=>{let D=K("q",t.dataType,t.dims,b),X=K("key",n.dataType,n.dims,b),L=[D,X];if(I){let O=K("past_key",r.dataType,r.dims,b);L.push(O)}i&&L.push(K("attention_bias",i.dataType,i.dims));let H=o?K("seq_lens",o.dataType,o.dims):void 0;H&&L.push(H);let A=u?K("total_sequence_length_input",u.dataType,u.dims):void 0;A&&L.push(A);let F=ae("output",t.dataType,h),R=[F];c&&R.push(ae("present_key",t.dataType,m,b));let P=Qe(1,b),Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${D.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${D.type.storage}, ${x*x}>;
  ${z.registerUniforms(Y).declareVariables(...L,...R)}
  ${z.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${gr(H,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${P}(0);
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
          value += ${P}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${F.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:E,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Xu=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,b={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&W.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let I=M=>{let E=K("probs",t.dataType,t.dims),v=K("v",n.dataType,n.dims),z=[E,v];x&&z.push(K("past_value",r.dataType,r.dims));let D=s?K("seq_lens",s.dataType,s.dims):void 0;s&&z.push(D);let X=o?K("total_sequence_length_input",o.dataType,o.dims):void 0;o&&z.push(X);let L=[ae("output",t.dataType,g)];c&&L.push(ae("present_value",t.dataType,m));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${M.registerUniforms(H).declareVariables(...z,...L)}
  ${M.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${gr(D,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:$}),getShaderSource:I}},Un=(e,t,n,r,i,a,s,o,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=p>1?s:void 0,g=p>1?o:void 0,y=p>1?l.pastSequenceLength:0,b=y+l.kvSequenceLength,$=u&&W.size(u.dims)>0?u:void 0,x=[t,n];m&&W.size(m.dims)>0&&x.push(m),$&&x.push($),h&&x.push(h),c&&x.push(c);let T=e.compute(Ku(p,t,n,m,$,l,y,h,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(ju(T,l.batchSize,l.numHeads,y,l.sequenceLength,b,h,c),{inputs:h&&c?[T,h,c]:[T],outputs:[]});let S=[T,r];g&&W.size(g.dims)>0&&S.push(g),h&&S.push(h),c&&S.push(c),e.compute(Xu(p,T,r,g,l,y,h,c),{inputs:S,outputs:p>1?[0,2]:[0]})},Yu=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=ae("output_q",u[0].dataType,n),m=ae("output_k",u[0].dataType,n),g=ae("output_v",u[0].dataType,n),y=K("input",u[0].dataType,u[0].dims),b=K("weight",u[1].dataType,u[1].dims),$=K("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(y,b,$,p,m,g)}
  ${c.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Zu=(e,t)=>{let n=Hu(e.inputs,t),[r,i,a]=Yu(e,n);return Un(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Qu,Ju,el,tl,o0=Q(()=>{ct(),he(),fe(),We(),ge(),Qu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ju=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Fe(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=W.size(a)/s,l=r,h=l?a.length:a,c=K("x",e[0].dataType,e[0].dims,s),p=K("scale",e[1].dataType,e[1].dims,o),m=K("bias",e[2].dataType,e[2].dims,o),g=K("inputMean",e[3].dataType,e[3].dims,o),y=K("inputVar",e[4].dataType,e[4].dims,o),b=ae("y",e[0].dataType,h,s),$=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,p,m,g,y,b)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...oe(a)]:[{type:12,data:u}]})}},el=e=>Te(e),tl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=el({...t,outputCount:r});if(Oe.webgpu.validateInputContent&&Qu(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ju(n,i))}}),nl,rl,il,u0=Q(()=>{fe(),ge(),nl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},rl=e=>{let t=e[0].dims,n=e[0].dims[2],r=W.size(t)/4,i=e[0].dataType,a=K("input",i,t,4),s=K("bias",i,[n],4),o=K("residual",i,t,4),u=ae("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},il=e=>{nl(e.inputs),e.compute(rl(e.inputs))}}),al,Se,sl,ol,ul,ll,dl,cl,hl,pl,fl,ml,gl,yl,wl,_l,Ln,bl,yr,$l,xl,vl,Sl,Tl,Il,kl,El,Ml,Cl,Al,Rl,zl,Ol,Nl,Bl,zi,Pl,Oi,Ni,Dl,Ul,Ll,Fl,Gl,Wl,Bi=Q(()=>{he(),fe(),We(),ge(),al=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=K("inputData",n,[o],4),h=ae("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Se=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>al(l,W.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(W.size(l[0].dims)/64/4)},programUniforms:u})}},sl=e=>{e.compute(Se(e.inputs[0],"Abs","abs"))},ol=e=>{e.compute(Se(e.inputs[0],"Acos","acos"))},ul=e=>{e.compute(Se(e.inputs[0],"Acosh","acosh"))},ll=e=>{e.compute(Se(e.inputs[0],"Asin","asin"))},dl=e=>{e.compute(Se(e.inputs[0],"Asinh","asinh"))},cl=e=>{e.compute(Se(e.inputs[0],"Atan","atan"))},hl=e=>{e.compute(Se(e.inputs[0],"Atanh","atanh"))},pl=e=>Te(e),fl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Se(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},ml=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Te({min:t,max:n})},gl=(e,t)=>{let n=t||ml(e.inputs),r=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},yl=e=>{e.compute(Se(e.inputs[0],"Ceil","ceil"))},wl=e=>{e.compute(Se(e.inputs[0],"Cos","cos"))},_l=e=>{e.compute(Se(e.inputs[0],"Cosh","cosh"))},Ln=e=>Te(e),bl=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},yr=(e="f32")=>`
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
}`,$l=e=>{let t=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,yr(t)))},xl=e=>{e.compute(Se(e.inputs[0],"Exp","exp"))},vl=e=>{e.compute(Se(e.inputs[0],"Floor","floor"))},Sl=e=>{let t=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,yr(t)))},Tl=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Il=e=>{e.compute(Se(e.inputs[0],"Not",t=>`!${t}`))},kl=e=>{e.compute(Se(e.inputs[0],"Neg",t=>`-${t}`))},El=e=>{e.compute(Se(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ml=e=>{let t=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Cl=e=>{e.compute(Se(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Al=e=>Te(e),Rl=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},zl=e=>{e.compute(Se(e.inputs[0],"Sin","sin"))},Ol=e=>{e.compute(Se(e.inputs[0],"Sinh","sinh"))},Nl=e=>{e.compute(Se(e.inputs[0],"Sqrt","sqrt"))},Bl=e=>{e.compute(Se(e.inputs[0],"Tan","tan"))},zi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Pl=e=>{e.compute(Se(e.inputs[0],"Tanh",zi))},Oi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${zi("v")};
}
`,Ni=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Dl=e=>{let t=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"FastGelu",Ni,Oi(t),void 0,e.inputs[0].dataType))},Ul=(e,t)=>{let n=Qe(e.inputs[0].dataType);return e.compute(Se(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ll=e=>{e.compute(Se(e.inputs[0],"Log","log"))},Fl=(e,t)=>`
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
`,Gl=e=>`quick_gelu_impl(${e})`,Wl=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"QuickGelu",Gl,Fl(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ql,Vl,Hl,l0=Q(()=>{fe(),ge(),Bi(),ql=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Vl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=K("input",e[0].dataType,e[0].dims,4),r=K("bias",e[0].dataType,[e[0].dims[2]],4),i=ae("output",e[0].dataType,t,4),a=W.size(t)/4,s=He(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${yr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Hl=e=>{ql(e.inputs),e.compute(Vl(e.inputs))}}),jl,Kl,_t,Xl,Yl,Zl,Ql,Jl,ed,td,nd,rd,id,d0=Q(()=>{he(),fe(),ge(),jl=(e,t,n,r,i,a,s,o,u,l,h,c)=>{let p,m;typeof o=="string"?p=m=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?p=m=o:(p=o.scalar,m=o.vector);let g=ae("outputData",h,r.length,4),y=K("aData",u,t.length,4),b=K("bData",l,n.length,4),$;if(i)if(a){let x=W.size(t)===1,T=W.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||T?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,I="")=>{let M=`aData[indexA${S}][componentA${S}]`,E=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${I}(${p(M,E)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,b,g)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Kl=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!W.areEqual(o,u),h=o,c=W.size(o),p=!1,m=!1,g=[l];if(l){let y=$n.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=W.size(h);let b=W.size(o)===1,$=W.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push($),g.push(x),g.push(T);let S=1;for(let I=1;I<h.length;I++){let M=o[o.length-I],E=u[u.length-I];if(M===E)S*=M;else break}S%4===0?(m=!0,p=!0):(b||$||x||T)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>jl(y,o,u,h,p,l,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(h)/4)},...oe(o,u,h)]})}},_t=(e,t,n,r,i,a)=>{e.compute(Kl(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Xl=e=>{_t(e,"Add",(t,n)=>`${t}+${n}`)},Yl=e=>{_t(e,"Div",(t,n)=>`${t}/${n}`)},Zl=e=>{_t(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Ql=e=>{_t(e,"Mul",(t,n)=>`${t}*${n}`)},Jl=e=>{let t=K("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;_t(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ed=e=>{_t(e,"Sub",(t,n)=>`${t}-${n}`)},td=e=>{_t(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},nd=e=>{_t(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},rd=e=>{_t(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},id=e=>{_t(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),ad,sd,od,ud,ld,dd,c0=Q(()=>{he(),fe(),We(),ge(),ad=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},sd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,od=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ud=(e,t,n,r)=>{let i=W.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=K(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...oe(e[y].dims));h.push(...oe(n));let c=ae("output",r,n.length),p=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)y.registerUniform(`sizeInConcatAxis${b}`,"u32");return y.declareVariables(...s,c)})()}

  ${sd(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${od(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},ld=(e,t)=>{let n=e.inputs,r=n[0].dims,i=W.normalizeAxis(t.axis,r.length);ad(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>W.size(o.dims)>0);e.compute(ud(s,i,a,n[0].dataType),{inputs:s})},dd=e=>Te({axis:e.axis})}),on,un,ln,Pi,dn=Q(()=>{he(),fe(),on=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},un=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ln=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Pi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[zo,Oo];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ke,cd,Di=Q(()=>{Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),hd,h0=Q(()=>{hd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Fn,Ui,Li=Q(()=>{he(),fe(),ge(),dn(),Fn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${se(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,se(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Ui=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],h=s[s.length-1],c=Fe(l),p=Fe(h),m=Fe(u),g=W.size(n)/c/m,y=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),$=[W.size(b),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];un(t,x),x.push(...oe(b,s,o)),y&&x.push(...oe(e[2].dims)),x.push(...oe($));let T=S=>{let I=Ii("batch_dims",e[0].dataType,b.length),M=K("a",e[0].dataType,s.length,p),E=K("b",e[1].dataType,o.length,c),v=ae("output",e[0].dataType,$.length,c),z=He(v.type.tensor),D=on(t,v.type.value,z),X=[M,E],L="";if(y){let F=i?c:1;X.push(K("bias",e[2].dataType,e[2].dims.length,F)),L=`${i?`value += bias[col / ${F}];`:`value += ${v.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ln(t,H);let A=()=>{let F=`var a_data: ${M.type.value};`;for(let R=0;R<p;R++)F+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${c}];`;for(let R=0;R<m;R++){F+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${p}];`;for(let P=0;P<p;P++)F+=`
            values[${R}] = fma(${E.type.value}(a_data${p===1?"":`[${P}]`}), b_data${P}, values[${R}]);
`}return F};return`
  ${S.registerUniforms(H).registerInternalVariables(I).declareVariables(...X,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${Fn("a_indices",M,M.rank-2,I.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${Fn("b_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${L}
      ${D}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:T}}}),pd,fd,Fi,Gi,md,Wi,gd,wr,qi=Q(()=>{he(),fe(),ge(),dn(),Li(),Di(),pd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,fd=(e,t)=>e?`
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
        }`,Fi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${pd(i,r)}
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

          ${fd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Gi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,md=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Wi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=c/t[0],y=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Gi(i,r)}
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
      ${Gi(i,r)}
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
      ${md(i)}
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
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${b}
  }
`},gd=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=He(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ke(e,l)} {
      var value = ${Ke(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Fn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ke(e,l)} {
      var value = ${Ke(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Fn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ke(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ke(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},wr=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=W.size(h),p=s[s.length-2],m=s[s.length-1],g=o[o.length-1],y=m%4===0&&g%4===0,b=p<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/b[0]),Math.ceil(p/$[1]/b[1]),Math.ceil(c/$[2]/b[2])],T=y?4:1,S=[...u,p,m/T],I=S.length,M=[...l,m,g/T],E=M.length,v=[c,p,g/T],z=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];un(t,z),z.push(...oe(h,S,M));let D=["rank","rank"],X=e.length>2;X&&(z.push(...oe(e[2].dims)),D.push("rank")),z.push(...oe(v));let L=H=>{let A=h.length,F=Ii("batchDims",e[0].dataType,A,1),R=He(e[0].dataType),P=K("a",e[0].dataType,I,T),Y=K("b",e[1].dataType,E,T),O=ae("result",e[0].dataType,v.length,T),Z=[P,Y];if(X){let ne=i?T:1;Z.push(K("bias",e[2].dataType,e[2].dims.length,ne))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ln(t,B);let q=He(O.type.tensor),U=on(t,O.type.value,q),G=gd(T,X,U,[F,P,Y,O],i);return`
  ${H.registerUniforms(B).registerInternalVariables(F).declareVariables(...Z,O)}
  ${G}
  ${y?Fi(b,$,R,F):Wi(b,$,R,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${y};${i}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:z}),getShaderSource:L}}}),yd,wd,p0=Q(()=>{he(),Ot(),ge(),dn(),Di(),h0(),qi(),yd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let h=z=>{switch(z){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},c=z=>{switch(z){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${z} is not supported.`)}},p=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",$=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ke(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${Ke(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Ke(s,l)}(0.0);`,S=e?r&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Ke(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Ke(o,l)}(0.0);`,I=Ke(u,l),M=Ke(e?s:o,l),E=Ke(e?o:s,l),v=on(a,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${cd(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},wd=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,b=l?g:p*m,$=l?p*m:g,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/x[0]/T[0]),Math.ceil($/x[1]/T[1]),Math.ceil(c/x[2]/T[2])];xe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=y?l&&h%4!==0?3:4:1,M=x[1]*T[1],E=x[0]*T[0],v=Math.max(x[0]*I,x[1]),z=r%M===0,D=i%E===0,X=a%v===0,L=y?[I,4,4]:[1,1,1],H=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];un(t,H),H.push(...oe(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(H.push(...oe(e[2].dims)),A.push("rank")),H.push(...oe(n));let F=R=>{let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ln(t,P);let Y=y?4:1,O=He(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${O}>`:O}) {
        result[flatIndex] = ${y?`vec4<${O}>`:O}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${O}>`:O}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,B=K("x",e[0].dataType,e[0].dims.length,I===3?1:I),q=K("w",e[1].dataType,e[1].dims.length,Y),U=[B,q],G=ae("result",e[0].dataType,n.length,Y);if(s){let ne=K("bias",e[2].dataType,e[2].dims.length,Y);U.push(ne),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${O}>`:O} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${hd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${R.registerUniforms(P).declareVariables(...U,G)}
        ${Z}
        ${yd(l,z,D,X,s,t,L[0],L[1],L[2],O)}
        ${y?Fi(T,x,O,void 0,!l,v):Wi(T,x,O,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${z};${D};${X};${M};${E};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:H}),getShaderSource:F}}}),_d,Vi,Gn,bd,Hi,$d,xd,vd,f0=Q(()=>{he(),Ot(),fe(),ge(),dn(),Di(),_d=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Vi=e=>typeof e=="number"?[e,e,e]:e,Gn=(e,t)=>t<=1?e:e+(e-1)*(t-1),bd=(e,t,n,r=1)=>{let i=Gn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Hi=(e,t,n,r,i)=>{i==null&&(i=bd(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},$d=(e,t,n,r,i,a,s,o,u,l)=>{let h,c,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Hi([t,n,r,1],[o,u,l],1,[i,a,s],e);c=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,b,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Hi([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);c=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,y=(p-1)*a+u-n,b=(m-1)*s+l-r,$=Math.floor(g/2),x=g-$,T=Math.floor(y/2),S=y-T,I=Math.floor(b/2),M=b-I;h={top:T,bottom:S,left:I,right:M,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:m}},xd=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,h,c;if(s==="channelsLast")[o,u,l,h,c]=e;else if(s==="channelsFirst")[o,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[p,,m,g,y]=t,[b,$,x]=Vi(n),[T,S,I]=Vi(r),M=Gn(m,T),E=Gn(g,S),v=Gn(y,I),{padInfo:z,outDepth:D,outHeight:X,outWidth:L}=$d(i,u,l,h,b,$,x,M,E,v),H=a?p*c:p,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,H,D,X,L]:s==="channelsLast"&&(A=[o,D,X,L,H]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:D,outHeight:X,outWidth:L,outChannels:H,padInfo:z,strideDepth:b,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:I,inShape:e,outShape:A,filterShape:t}},vd=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,$)=>$)},l=[Math.ceil(_d(u.x.map(b=>n[b]))/o[0]),1,1];xe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=W.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];un(t,p),p.push(...oe(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...oe(e[2].dims)),m.push("rank")),p.push(...oe(n));let y=b=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ln(t,$);let x=1,T=He(e[0].dataType),S=K("x",e[0].dataType,e[0].dims.length,h),I=K("W",e[1].dataType,e[1].dims.length,x),M=[S,I],E=ae("result",e[0].dataType,n.length,x),v="";if(g){let X=K("bias",e[2].dataType,e[2].dims.length,x);M.push(X),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?se("coords",4,5):se("coords",1,5)}];
        }`}let z=Ke(h,T),D=on(t,z,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${b.registerUniforms($).declareVariables(...M,E)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${se("coords",0,S.rank)};
              let d2 = ${s?se("coords",S.rank-1,S.rank):se("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?se("coords",1,S.rank):se("coords",2,S.rank)},
              ${s?se("coords",2,S.rank):se("coords",3,S.rank)},
              ${s?se("coords",3,S.rank):se("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?se("uniforms.x_shape",1,S.rank):se("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?se("uniforms.x_shape",2,S.rank):se("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?se("uniforms.x_shape",3,S.rank):se("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?se("uniforms.x_shape",4,S.rank):se("uniforms.x_shape",1,S.rank)};
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
              ${D}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Sd,Td,m0=Q(()=>{he(),fe(),ge(),dn(),Sd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?Fe(l):1,p=W.size(n)/c,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];un(t,m),m.push(...oe(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...oe([n[0],n[1],n[2],n[3]/c]));let y=b=>{let $=ae("output",e[0].dataType,n.length,c),x=He($.type.tensor),T=on(t,$.type.value,x),S=K("x",e[0].dataType,s.length),I=K("w",e[1].dataType,o.length,c),M=[S,I];i&&M.push(K("b",e[2].dataType,e[2].dims,c));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ln(t,E);let v=u?`
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

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(E).declareVariables(...M,$)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${a}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},Td=(e,t,n,r)=>{let i=e.length>2,a=Fe(n[3]),s=Fe(n[2]),o=W.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];un(t,c),c.push(...oe(u,l,h));let p=(s-1)*t.strides[1]+l[1],m=g=>{let y=ae("output",e[0].dataType,h.length,a),b=He(y.type.tensor),$=on(t,y.type.value,b),x=K("x",e[0].dataType,u.length,a),T=K("w",e[1].dataType,l.length,a),S=[x,T];i&&S.push(K("b",e[2].dataType,e[2].dims,a));let I=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ln(t,M),`
  ${g.registerUniforms(M).declareVariables(...S,y)}
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

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${s}>;
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
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),Id,_r,kd,br,ji,Ki,Ed,Md,Xi,g0=Q(()=>{fe(),p0(),f0(),qi(),m0(),dn(),Li(),Wt(),Id=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),c=o.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},_r=[2,3,1,0],kd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},br=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();cr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ji=e=>{let t=Pi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ki=(e,t,n,r)=>{let i=n.format==="NHWC",a=Id(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(lt(t[1],_r),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),M.push(E)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Td(M,n,a,r),{inputs:M}):e.compute(Sd(M,n,a,r),{inputs:M});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],E,v,z,D=[];if(i){let H=e.kernelCustomData.wT??e.compute(lt(t[1],_r),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),y){let A=o*u*l;E=t[0].reshape([1,M,A]),v=H.reshape([1,A,g]),z=[1,M,g]}else E=t[0].reshape([M,o*u,l]),v=H.reshape([1,l,g]),z=[M,p*m,g];D.push(E),D.push(v)}else E=t[0].reshape([M,l,o*u]),v=t[1].reshape([1,g,l]),z=[M,g,p*m],D.push(v),D.push(E);s&&D.push(t[2]);let X=z[2],L=D[0].dims[D[0].dims.length-1];X<8&&L<8?e.compute(Ui(D,n,a,z,i,r),{inputs:D}):e.compute(wr(D,n,a,z,i,r),{inputs:D});return}let b=!0,$=e.kernelCustomData.wT??e.compute(lt(t[1],_r),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];s&&x.push(t[2]);let T=i?p*m:g,S=i?g:p*m,I=h*c*l;e.compute(wd(x,n,a,T,S,I,s,b,r),{inputs:x})},Ed=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=br({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Ki(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Md=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=br(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=xd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(vd(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Xi=(e,t)=>{if(kd(e.inputs,t),e.inputs[0].dims.length===3)Ed(e,t);else if(e.inputs[0].dims.length===5)Md(e,e.inputs,t);else{let n=br(t,e.inputs);Ki(e,e.inputs,n)}}}),Cd,y0=Q(()=>{he(),Ot(),fe(),ge(),Cd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],h=a?Fe(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?Fe(l):1,y=a?l===1?h:g:1,b=W.size(i)/g,$=[Math.ceil(b/64),1,1];xe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],M=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],E=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:T},{type:12,data:S},{type:12,data:I},{type:12,data:M},{type:6,data:E},{type:12,data:p},{type:12,data:u},{type:12,data:l},...oe(e[0].dims,e[1].dims)];r&&(v.push(...oe(e[2].dims)),x.push("rank")),v.push(...oe(i));let z=D=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=He(e[0].dataType),H=a?1:2,A=a?2:3,F=a?3:1,R=K("W",e[1].dataType,e[1].dims.length,y),P=K("Dy",e[0].dataType,e[0].dims.length,h),Y=[P,R];r&&Y.push(K("bias",e[2].dataType,[i[F]].length,g));let O=ae("result",e[0].dataType,i.length,g),Z=()=>{let U="";if(c)h===4?U+=`
        let xValue = ${P.getByOffset("x_offset")};
        let wValue = ${R.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?U+=`
          dotProd = dotProd + dot(vec4<${L}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}), vec4<${L}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(U+=`
          dotProd = dotProd + dot(vec4<${L}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}, ${P.getByOffset("x_offset + 2u")}, ${P.getByOffset("x_offset + 3u")}), vec4<${L}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}, ${R.getByOffset("w_offset + 2u")}, ${R.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(U+=`
                  let xValue = ${a?P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):P.get("batch","inputChannel","idyR","idyC")};
        `,h===1)U+=`
          let w_offset = ${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${R.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<h;G++)U+=`
            let wValue${G} = ${R.getByOffset(`${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return U},B=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let U="";if(h===1){U+="dotProd = dotProd";for(let G=0;G<m;G++)U+=`
            + ${P.getByOffset(`x_offset + ${G}`)} * ${R.getByOffset(`w_offset + ${G}`)}`;U+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);U+=`
          let xValue = ${P.getByOffset("x_offset")};
          let wValue = ${R.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return U},q=`
            let outputIndices = ${O.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${O.indicesGet("outputIndices",0)};
            let d1 = ${O.indicesGet("outputIndices",F)};
            let r = ${O.indicesGet("outputIndices",H)};
            let c = ${O.indicesGet("outputIndices",A)};
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
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
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
                var x_offset = ${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${R.indicesToOffset(`${R.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${Z()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${B()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${O.setByOffset("global_idx","value")};
          `;return`
    ${D.registerUniforms(X).declareVariables(...Y,O)}
      ${D.mainStart()}
      ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${c}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:z}}}),Ad,Rd,zd,Yi,Od,Nd,Zi,Bd,Pd,w0=Q(()=>{y0(),dn(),Wt(),Ad=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Rd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},zd=(e,t,n,r,i,a,s,o,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[o?3:1]*i;for(let g=0,y=e.length-h-(o?1:0);g<h;++g,++y){let b=e[y],$=c?b*s[g]:l[g],x=Ad(b,s[g],a[g],t[y],n[g],$);Rd(x,r,a,g,g+h),c&&l.push(s[g]*(b-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(o?3:1,0,m)},Yi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}zd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),h},Od=e=>{let t=Pi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:h,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Nd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Zi=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(lt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Cd(a,n,r),{inputs:a})},Bd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Yi({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Zi(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Pd=(e,t)=>{if(Nd(e.inputs,t),e.inputs[0].dims.length===3)Bd(e,t);else{let n=Yi(t,e.inputs);Zi(e,e.inputs,n)}}}),Dd,Ud,Ld,_0=Q(()=>{he(),fe(),We(),ge(),Dd=(e,t,n,r)=>{let i=W.size(t),a=t.length,s=K("input",e,a),o=ae("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=W.normalizeAxis(u,a),h=c=>{let p=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=se("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...oe(t,t)]}),getShaderSource:h}},Ud=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Dd(r,n,i,t),{inputs:[0]})},Ld=e=>{let t=e.exclusive===1,n=e.reverse===1;return Te({exclusive:t,reverse:n})}}),Fd,Gd,Wd,qd,Vd,b0=Q(()=>{he(),fe(),We(),ge(),Fd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Wd=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),p=c.dims.length,m=e.dataType,g=K("a",m,p),y=ae("output",m,p),b=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Gd(o,p,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=W.size(x),S=c.dims,I=W.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...oe(S,I)]}},getShaderSource:b}},qd=(e,t)=>{Fd(e.inputs),e.compute(Wd(e.inputs[0],t))},Vd=e=>Te({blocksize:e.blocksize,mode:e.mode,format:e.format})}),$r,Wn,Qi,Hd,jd,Kd,Xd,Ji,Yd,Zd,Qd,$0=Q(()=>{he(),fe(),We(),ge(),$r="[a-zA-Z]|\\.\\.\\.",Wn="("+$r+")+",Qi="^"+Wn+"$",Hd="("+Wn+",)*"+Wn,jd="^"+Hd+"$",Kd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Xd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(jd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Qi)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Wn)))throw new Error("Invalid RHS");(i=r.match(RegExp($r,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(Qi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp($r,"g")),l=new Kd(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[o++],r)}),l}},Ji=e=>e+"_max",Yd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>K(`input${h}`,t,l)),a=W.size(r),s=ae("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],b=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,I)=>{var M;if(n.rhs.symbolToIndices.has(I)){let E=(M=n.rhs.symbolToIndices.get(I))==null?void 0:M[0];E!==void 0&&n.lhs.forEach((v,z)=>{if(S.inputIndices.includes(z)){let D=v.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(X=>{h.push(`${i[z].indicesSet(`input${z}Indices`,X,s.indicesGet("outputIndices",E))}`)})}})}else n.lhs.forEach((E,v)=>{if(S.inputIndices.includes(v)){let z=E.symbolToIndices.get(I);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(D=>{g.push(`${i[v].indicesSet(`input${v}Indices`,D,`${I}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ji(I)}; ${I}++) {`),b.push("}")});let T=x?[...h,`let sum = ${i.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,p,...y,...g,c,...$,m,...b];return`
            ${l.registerUniforms(o.map(S=>({name:`${Ji(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...oe(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...oe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Zd=(e,t)=>{let n=new Xd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Yd(i,e.inputs[0].dataType,n,r))},Qd=e=>{let t=e.equation.replace(/\s+/g,"");return Te({equation:t})}}),Jd,ea,ec,tc,nc,x0=Q(()=>{he(),fe(),ge(),Jd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ea=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},ec=(e,t)=>e.length>t.length?ea(e,t):ea(t,e),tc=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=ec(t,n),i=e[0].dataType,a=i===9||W.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(W.size(r)/o),l=c=>{let p=K("input",i,t.length,s),m=ae("output",i,r.length,o),g;if(i===9){let y=(b,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${p.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${b}[${$}] = ${x}(${p.getByOffset(`index${$}`)}[component${$}]);
        `;g=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${p.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,m)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},h=[{type:12,data:u},...oe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},nc=e=>{Jd(e.inputs),e.compute(tc(e.inputs),{inputs:[0]})}}),rc,ic,v0=Q(()=>{he(),fe(),ge(),Bi(),rc=e=>{let t=e[0].dataType,n=W.size(e[0].dims),r=W.size(e[1].dims),i=r%4===0,a=s=>{let o=K("x",t,[1],4),u=K("bias",t,[1],4),l=ae("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(o,u,l)}

    ${Oi(Qe(t))}

    ${s.mainStart(xn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Ni("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/xn/4)}})}},ic=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?Dl(e):e.compute(rc(e.inputs))}}),ac,sc,oc,uc,S0=Q(()=>{he(),fe(),We(),ge(),ac=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},sc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(W.size(s)/u),h=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...oe(e[0].dims,e[1].dims,s)],c=p=>{let m=K("data",e[0].dataType,e[0].dims.length,u),g=K("inputIndices",e[1].dataType,e[1].dims.length),y=ae("output",e[0].dataType,s.length,u),b=x=>{let T=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let I=0;I<T;I++)S+=`${T>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let I=0,M=0;I<i;I++)I===a?(S+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,M+=T):(S+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${M}]`:`outputIndices${x}`};`,M++);return S},$;if(e[0].dataType===9){let x=(T,S,I="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${I}(${m.getByOffset(`index${S}`)}[component${S}]);
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
      ${b("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},oc=e=>Te({axis:e.axis}),uc=(e,t)=>{let n=e.inputs;ac(n),e.compute(sc(e.inputs,t))}}),lc,dc,cc,T0=Q(()=>{he(),fe(),ge(),lc=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],h=[a];l.push(...oe(t.dims,h));let c=p=>{let m=K("indices_data",t.dataType,t.dims.length),g=ae("input_slice_offsets_data",12,1,1),y=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(b).declareVariables(...y)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},dc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=W.sizeToDimension(a,a.length-1),u=W.sizeFromDimension(r,t.batchDims+s),l=W.sizeToDimension(r,t.batchDims),h=W.sizeFromDimension(r,t.batchDims),c=o/l,p=new Array(s),m=u;for(let S=0;S<s;++S)p[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=lc(e,n[1],p,t.batchDims,r,o,c,h,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(y)),$=W.size(b),x=[{type:12,data:$},{type:12,data:u},...oe(n[0].dims,g.dims,b)],T=S=>{let I=K("data",n[0].dataType,n[0].dims.length),M=K("slice_offsets",12,g.dims.length),E=ae("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,M,E)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],g]})},cc=e=>({batchDims:e.batch_dims,cacheKey:""})}),hc,pc,fc,mc,I0=Q(()=>{he(),fe(),We(),ge(),hc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=W.normalizeAxis(t.gatherAxis,i),s=W.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=W.size(o),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...oe(...e.map((m,g)=>m.dims),o)],p=m=>{let g=K("data",e[0].dataType,e[0].dims.length),y=K("inputIndices",e[1].dataType,e[1].dims.length),b=K("scales",e[2].dataType,e[2].dims.length),$=e.length>3?K("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ae("output",l,o.length),T=[g,y,b];$&&T.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...T,x)}
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
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
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
        let quantize_axis_index = ${b.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${b.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${b.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Qe(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},fc=(e,t)=>{let n=e.inputs;hc(n,t),e.compute(pc(e.inputs,t))},mc=e=>Te({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),gc,yc,wc,_c,k0=Q(()=>{he(),fe(),We(),ge(),gc=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},yc=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=W.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),h=W.size(l),c=K("input",r,i),p=K("indicesInput",s,a.length),m=ae("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:o}];return g.push(...oe(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},wc=e=>Te({axis:e.axis}),_c=(e,t)=>{let n=e.inputs;gc(n),e.compute(yc(e.inputs,t))}}),bc,$c,xc,vc,E0=Q(()=>{he(),fe(),ge(),bc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},$c=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Ro.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=W.size(o),m=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...oe(e[2].dims)),g.push("rank")),m.push(...oe(o));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=K("a",e[0].dataType,e[0].dims),I=K("b",e[1].dataType,e[1].dims),M=S.type.value,E=null,v=[S,I];e.length===3&&(E=K("c",e[2].dataType,e[2].dims.length),v.push(E));let z=ae("output",e[0].dataType,o.length);v.push(z);let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(D).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${M}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=$=>{let x=K("a",e[0].dataType,e[0].dims),T=K("b",e[1].dataType,e[1].dims),S=null,I=[x,T];e.length===3&&(S=K("c",e[2].dataType,e[2].dims.length),I.push(S));let M=ae("output",e[0].dataType,o.length);I.push(M);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",z="";t.transA&&t.transB?(z=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(z=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(z=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(z=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let D=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(E).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${z}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${D}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},xc=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},vc=(e,t)=>{bc(e.inputs),e.compute($c(e.inputs,t))}}),Tt,Nt,cn,hn,Sc,Tc,Ic,kc,Ec,Mc,Cc,Ac,Rc,zc,M0=Q(()=>{he(),fe(),We(),ge(),[Tt,Nt,cn,hn]=[0,1,2,3],Sc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Tc=`
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
`,Ic=e=>`
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
`,kc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ec=e=>`
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
`,Mc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Tt}] = batch;
     indices[${Nt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${cn}] = u32(r);
            indices[${hn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${cn}] = u32(clamp(r, 0, H - 1));
          indices[${hn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${cn}] = gs_reflect(r, border[1], border[3]);
          indices[${hn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Cc=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Tt}], indices[${Nt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Tt}], indices[${Nt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Tt}], indices[${Nt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Tt}], indices[${Nt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Tt}], indices[${Nt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Tt}], indices[${Nt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ac=(e,t)=>{let n=K("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=K("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Tt,Nt,cn,hn]=[0,3,1,2]);let s=ae("output",e[0].dataType,a.length),o=n.type.value,u=W.size(a),l=[{type:12,data:u},...oe(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Tc}
  ${Ic(o)}
  ${kc(t)}
  ${Ec(t)}
  ${Mc(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${cn}]);
      let W_in = i32(uniforms.x_shape[${hn}]);

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
      var grid_indices = vec3<u32>(indices[${Tt}], indices[${cn}], indices[${hn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Cc(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=W.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},Rc=(e,t)=>{Sc(e.inputs),e.compute(Ac(e.inputs,t))},zc=e=>Te({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),tt,Oc,Nc,ta,Bc,qn,Pc,Dc=Q(()=>{he(),fe(),We(),$i(),Ri(),ge(),Wt(),tt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Oc=(e,t)=>{let n=e[0],r=tt(e,1),i=tt(e,2),a=tt(e,3),s=tt(e,4),o=tt(e,5),u=tt(e,6),l=tt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,b=Math.floor(p/t.numHeads);if(u&&l&&W.size(u.dims)&&W.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&W.size(u.dims)||l&&W.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&W.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&W.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,T=0;if(s&&W.size(s.dims)>0){T=8;let E=s.dims;throw E.length===1?E[0]===h?T=1:E[0]===3*h+2&&(T=3):E.length===2&&E[0]===h&&E[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=p;if(i&&W.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],S=!0}}let M=!1;if(s&&W.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&W.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:b,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:M,passPastInKv:S,qkvFormat:$}},Nc=e=>Te({...e}),ta=Te({perm:[0,2,1,3]}),Bc=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=W.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],h=c=>{let p=ae("qkv_with_bias",t.dataType,o),m=K("qkv",t.dataType,o),g=K("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},qn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&W.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Bc(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(lt(u,ta.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(lt(u,ta.perm),{inputs:[u],outputs:[-1]})[0]},Pc=(e,t)=>{let n=Oc(e.inputs,t),r=e.inputs[0],i=tt(e.inputs,1),a=tt(e.inputs,2),s=tt(e.inputs,3),o=tt(e.inputs,4),u=tt(e.inputs,5),l=tt(e.inputs,6),h=tt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=qn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return Un(e,p,i,a,o,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=qn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=qn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);Un(e,p,m,g,o,void 0,l,h,u,n)}}),Uc,Lc,Fc,Gc,na,Wc,qc,Vc=Q(()=>{he(),fe(),We(),ge(),Uc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Lc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Te({numOutputs:r,axis:t.axis,splitSizes:n})},Fc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${se("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Gc=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},na=(e,t)=>{let n=e[0].dims,r=W.size(n),i=e[0].dataType,a=W.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=K("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),s[g]=ae(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...oe(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Fc(u.length)}
  ${Gc(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${se("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Wc=(e,t)=>{Uc(e.inputs);let n=e.inputs.length===1?t:Lc(e.inputs,t);e.compute(na(e.inputs,n),{inputs:[0]})},qc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Te({axis:t,numOutputs:r,splitSizes:n})}}),Hc,xr,jc,Kc=Q(()=>{he(),fe(),We(),ge(),Hc=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!W.areEqual(r.dims,[])&&!W.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!W.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=W.sizeFromDimension(n.dims,1)/l,p=o===0?i.dims[1]*2:c/s;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},xr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=W.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(s,u,l/c,c-h),m=W.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=b=>{let $=K("input",e[0].dataType,e[0].dims.length),x=K("position_ids",e[1].dataType,e[1].dims.length),T=K("cos_cache",e[2].dataType,e[2].dims.length),S=K("sin_cache",e[3].dataType,e[3].dims.length),I=ae("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables($,x,T,S,I)}

        ${b.mainStart(xn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",ae("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Te({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(p)/xn)},programUniforms:g})}},jc=(e,t)=>{Hc(e.inputs,t),e.compute(xr(e.inputs,t))}}),Xc,Yc,ra,Zc,Qc,C0=Q(()=>{We(),he(),Ri(),Dc(),Vc(),Wt(),Kc(),ge(),Xc=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=I.dims.reduce((E,v)=>E*v,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let E=0;E<I.dims.length;E++)if(I.dims[E]!==1&&I.dims[E]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${E}] = ${I.dims[E]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},Yc=Te({perm:[0,2,1,3]}),ra=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(lt(r,Yc.perm),{inputs:[r],outputs:[-1]})[0]),r},Zc=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=h=>{let c=K("seq_lens",n.dataType,n.dims),p=K("total_seq_lens",r.dataType,r.dims),m=ae("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(g).declareVariables(c,p,m)}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Qc=(e,t)=>{var S;let n=Xc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Te({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(na([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,b;if(t.doRotary){let I=e.compute(Zc(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],M=e.inputs[7],E=e.inputs[8],v=Te({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[p,I,M,E],D=[-1];y=e.compute(xr(z,v),{inputs:z,outputs:D})[0],z.splice(0,1,m);let X=Te({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(xr(z,X),{inputs:z,outputs:D})[0]}let $=qn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=ra(e,t.doRotary?b:m,n),T=ra(e,g,n);Un(e,$,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),ia,Jc,eh,th,A0=Q(()=>{he(),fe(),Wt(),ge(),ia=(e,t,n,r,i,a,s,o)=>{let u=Fe(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*s,p=64;c===1&&(p=256);let m=[i,s,a/u],g=[i,s,2],y=["rank","type","type"],b=[];b.push(...oe(m,g));let $=x=>{let T=K("x",t.dataType,3,u),S=K("scale",n.dataType,n.dims),I=K("bias",r.dataType,r.dims),M=ae("output",1,3,2),E=[T,S,I,M];return`
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
      let value = ${l}(${T.get("batch","channel","h")});
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
      let sum_final = ${Gt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Gt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Jc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=W.sizeFromDimension(r,a),l=Fe(u),h=W.size(i)/l,c=ia(e,t[0],t[1],t[2],s,u,o,n.epsilon),p=[s,o,u/l],m=[s,o],g=["type","none"],y=b=>{let $=K("x",t[0].dataType,p.length,l),x=K("scale_shift",1,m.length,2),T=ae("output",t[0].dataType,p.length,l),S=[$,x,T];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...oe(p,m,p)]}),getShaderSource:y},{inputs:[t[0],c]})},eh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=W.sizeFromDimension(r,1)/s,u=Fe(s),l=W.size(i)/u,h=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],p=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)p=p||r[$+1]!==1,m.push($+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(lt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=ia(e,g,t[1],t[2],a,o,s,n.epsilon),b=$=>{let x=He(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=E=>{let v=E===0?"x":"y",z=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${z}(scale.${v}))`;case 2:return`vec2<${x}>(${z}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${z}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=K("input",t[0].dataType,t[0].dims,u),M=ae("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:b},{inputs:[t[0],y]})},th=(e,t)=>{t.format==="NHWC"?eh(e,e.inputs,t):Jc(e,e.inputs,t)}}),nh,rh,ih,R0=Q(()=>{he(),fe(),ge(),nh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},rh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=W.normalizeAxis(t.axis,i.length),l=W.sizeToDimension(i,u),h=W.sizeFromDimension(i,u),c=W.size(a.dims),p=s?W.size(s.dims):0;if(c!==h||s&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let m=[];for(let I=0;I<i.length;++I)I<u?m.push(i[I]):m.push(1);let g=Fe(h),y=["type","type"],b=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];s&&y.push("type");let $=n>1,x=n>2,T=I=>{let M=He(e[0].dataType),E=[K("x",e[0].dataType,e[0].dims,g),K("scale",a.dataType,a.dims,g)];s&&E.push(K("bias",s.dataType,s.dims,g)),E.push(ae("output",e[0].dataType,o,g)),$&&E.push(ae("mean_data_output",1,m)),x&&E.push(ae("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...E)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ti("f32",g)};
    var mean_square_vector = ${Ti("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${vn(M,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Gt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Gt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${vn(M,g,"x[j + offset]")};
      let f32scale = ${vn(M,g,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${vn(M,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:b}),getShaderSource:T}},ih=(e,t)=>{nh(e.inputs),e.compute(rh(e.inputs,t,e.outputCount))}}),ah,sh,z0=Q(()=>{fe(),Li(),qi(),ah=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},sh=e=>{ah(e.inputs);let t=$n.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ui(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=W.size(e.inputs[0].dims.slice(0,-2)),s=W.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[o,u];e.compute(wr(h,{activation:""},t,l),{inputs:h})}else e.compute(wr(e.inputs,{activation:""},t))}}}),oh,uh,lh,dh,ch,O0=Q(()=>{he(),fe(),We(),ge(),oh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!W.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(W.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(W.size(u)!==l)throw new Error("zeroPoints input size error.")}},uh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=W.size(o),l=e[1].dims[2]/4,h=e[0].dataType,c=Fe(t.k),p=Fe(l),m=Fe(s),g=o.concat([i,s]),y=i>1&&s/m%2===0?2:1,b=W.size(g)/m/y,$=64,x=[],T=[u,i,a/c],S=W.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),x.push(...oe(T)),x.push(...oe(S)),x.push(...oe(e[2].dims)),e.length===4&&x.push(...oe(W.convertShape(e[3].dims)));let I=[u,i,s/m];x.push(...oe(I));let M=E=>{let v=T.length,z=K("a",e[0].dataType,v,c),D=K("b",12,S.length,p),X=K("scales",e[2].dataType,e[2].dims.length),L=[z,D,X],H=e.length===4?K("zero_points",12,e[3].dims.length):void 0;H&&L.push(H);let A=I.length,F=ae("output",e[0].dataType,A,m),R=He(e[0].dataType),P=(()=>{switch(c){case 1:return`array<${R}, 8>`;case 2:return`mat4x2<${R}>`;case 4:return`mat2x4<${R}>`;default:throw new Error(`${c}-component is not supported.`)}})(),Y=Math.floor(32/t.bits),O=Math.floor(Y/8),Z=()=>{let U="";for(let G=0;G<O;G++){let ne=G*t.bits*4,ue=ne+t.bits;U+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?z.indicesToOffset(`${z.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${P};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/c}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${z.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let re=0;re<m*y;re++)U+=`
            b_value = ${p===1?`b${re}_data`:`b${re}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ne}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ue}u) & b_mask);`}
            b_quantized_values = ${P}(${Array.from({length:4},(we,Ce)=>`${R}(b_value_lower[${Ce}]), ${R}(b_value_upper[${Ce}])`).join(", ")});
            b_dequantized_values = ${c===1?`${P}(${Array.from({length:8},(we,Ce)=>`(b_quantized_values[${Ce}] - ${H?`zero_point${re}`:"zero_point"}) * scale${re}`).join(", ")});`:`(b_quantized_values - ${P}(${Array(8).fill(`${H?`zero_point${re}`:"zero_point"}`).join(",")})) * scale${re};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(re/m)}]${m>1?`[${re%m}]`:""} += ${Array.from({length:8/c},(we,Ce)=>`${c===1?`a_data${G>0?G:""}[${Ce}] * b_dequantized_values[${Ce}]`:`dot(a_data${G>0?G:""}[${Ce}], b_dequantized_values[${Ce}])`}`).join(" + ")};
          `}return U},B=()=>{let U=`
            var col_index = col * ${m};
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
            let zero_point = ${R}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<m*y;G++)U+=`
            let scale${G} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${R}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return U},q=()=>{let U=`col_index = col * ${m};`;for(let G=0;G<m*y;G++)U+=`
            let b${G}_data = ${D.getByIndices(`${D.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${P};
            var b_dequantized_values: ${P};`,U};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${y*$}>;
        ${E.declareVariables(...L,F)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${B()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${q()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${Z()}
                word_offset += ${Y/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:M}},lh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=W.size(o),l=e[1].dims[2]/4,h=e[0].dataType,c=Fe(t.k),p=Fe(l),m=o.concat([i,s]),g=128,y=s%8===0?8:s%4===0?4:1,b=g/y,$=Math.floor(32/t.bits),x=b*p*$,T=x/c,S=x/t.blockSize,I=W.size(m)/y,M=[],E=[u,i,a/c],v=W.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),M.push(...oe(E)),M.push(...oe(v)),M.push(...oe(e[2].dims)),e.length===4&&M.push(...oe(W.convertShape(e[3].dims)));let z=[u,i,s];M.push(...oe(z));let D=X=>{let L=E.length,H=K("a",e[0].dataType,L,c),A=K("b",12,v.length,p),F=K("scales",e[2].dataType,e[2].dims.length),R=[H,A,F],P=e.length===4?K("zero_points",12,e[3].dims.length):void 0;P&&R.push(P);let Y=z.length,O=ae("output",e[0].dataType,Y),Z=He(e[0].dataType),B=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${O.type.value}, ${b}>, ${y}>;
        ${X.declareVariables(...R,O)}
        ${X.mainStart([b,y,1])}
          let output_indices = ${O.offsetToIndices(`workgroup_index * ${y}`)};
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
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
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
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let q=Math.floor($/8),U="";for(let G=0;G<q;G++){let ne=G*t.bits*4,ue=ne+t.bits;U+=`
              ${B()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(re,we)=>`${Z}(b_value_lower[${we}]), ${Z}(b_value_upper[${we}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(re,we)=>`${`dot(a_data${we}, b_dequantized_values[${we}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return U})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${O.setByIndices(`${O.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${b};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:I},programUniforms:M}),getShaderSource:D}},dh=(e,t)=>{oh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(lh(e.inputs,t)):e.compute(uh(e.inputs,t))},ch=e=>Te(e)}),hh,ph,fh,mh,gh,yh,wh,_h,bh,N0=Q(()=>{he(),fe(),ge(),hh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ph=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${se("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${se("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},fh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${se("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${se("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},mh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${se("uniforms.x_shape",i,t)})) {
                  k = i32(${se("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},gh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${se("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${se("uniforms.x_shape",i,t)})) {
                  k -= i32(${se("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},yh=(e,t,n)=>{switch(n.mode){case 0:return ph(e,t,n.pads.length);case 1:return fh(e,t,n.pads.length);case 2:return mh(e,t,n.pads.length);case 3:return gh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},wh=(e,t)=>{let n=W.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=W.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...oe(e[0].dims,n));let o=["rank"],u=l=>{let h=ae("output",e[0].dataType,n.length),c=K("x",e[0].dataType,r.length),p=c.type.value,m=yh(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(n)/64)},programUniforms:a}),getShaderSource:u}},_h=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},bh=(e,t)=>{hh(e.inputs);let n=_h(e.inputs,t);e.compute(wh(e.inputs,n),{inputs:[0]})}}),Vn,aa,sa,oa,ua,$h,xh,la,da,vh,Sh,ca,Th,Ih,ha,kh,Eh,Mh,Ch,B0=Q(()=>{ct(),he(),fe(),ge(),Vn=e=>{if(Oe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},aa=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();cr.adjustPoolAttributes(n,i,s,o,u,l);let h=cr.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},sa=(e,t)=>{let n=t.format==="NHWC",r=W.size(e),i=W.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];p=!!(y+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=W.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,s,!!u,!1,!1]}},oa=(e,t,n,r,i,a,s,o,u,l,h,c)=>{let p=i.format==="NHWC",m=t.type.value,g=ae("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",b="",$="",x=n-(p?2:1);if(h?y=`
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
                }`,i.kernelShape.length===2){let T=n-(p?3:2);c?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
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
              ${y}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,b=i.pads.length,$="";return l?$=`
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

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${se("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${se("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${se("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${se("uniforms.pads","j - 2u",b)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},ua=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,$h=e=>`${ua(e)};${e.countIncludePad}`,xh=e=>`${ua(e)};${e.storageOrder};${e.dilations}`,la=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),da=(e,t,n,r)=>{let[i,a]=aa(t,r,n),s=K("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,m,g]=sa(a,i);h.push(...oe(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:h}),getShaderSource:b=>oa(b,s,t.dims.length,a.length,i,u,l,0,c,p,m,g)}},vh=e=>{let t=e.count_include_pad!==0,n=la(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:$h(r)}},Sh=(e,t)=>{Vn(e.inputs),e.compute(da("AveragePool",e.inputs[0],!1,t))},ca={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Th=e=>{let t=e.format;return{format:t,...ca,cacheKey:t}},Ih=(e,t)=>{Vn(e.inputs),e.compute(da("GlobalAveragePool",e.inputs[0],!0,t))},ha=(e,t,n,r)=>{let[i,a]=aa(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=K("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,m,g]=sa(a,i);return h.push(...oe(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(a)/64)},programUniforms:h}),getShaderSource:y=>oa(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,p,m,g)}},kh=(e,t)=>{Vn(e.inputs),e.compute(ha("MaxPool",e.inputs[0],!1,t))},Eh=e=>{let t=e.storage_order,n=e.dilations,r=la(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:xh(i)}},Mh=e=>{let t=e.format;return{format:t,...ca,cacheKey:t}},Ch=(e,t)=>{Vn(e.inputs),e.compute(ha("GlobalMaxPool",e.inputs[0],!0,t))}}),Ah,Rh,zh,Oh,P0=Q(()=>{he(),fe(),We(),ge(),Ah=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Rh=(e,t)=>{let n=W.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=W.size(a),u=r===3||r===2,l=u?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(W.size(c.dims)/4)]:c.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=Fe(o),b=m&&(!u||y===4),$=b?y:1,x=b&&!u?y:1,T=K("input",u?12:r,l.length,x),S=K("scale",s,h.length),I=c?K("zero_point",u?12:r,p.length):void 0,M=ae("output",s,a.length,$),E=[T,S];I&&E.push(I);let v=[l,h];c&&v.push(p);let z=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...oe(...v,a)],D=X=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(L).declareVariables(...E,M)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?m?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:g?u?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:D,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:z})}},zh=(e,t)=>{Ah(e.inputs,t),e.compute(Rh(e.inputs,t))},Oh=e=>Te({axis:e.axis,blockSize:e.blockSize})}),Nh,Bh,Ph,D0=Q(()=>{ct(),he(),ge(),Nh=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Bh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...oe(a)],u=l=>{let h=ae("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Ph=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Oe.webgpu.validateInputContent&&Nh(t,n,r),e.compute(Bh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Dh,Uh,Lh,Fh,U0=Q(()=>{he(),fe(),We(),ge(),Dh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Uh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(W.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=W.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...oe(e[1].dims,e[2].dims,i)],h=c=>{let p=K("indices",e[1].dataType,e[1].dims.length),m=K("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?jo("output",e[0].dataType,i.length):ae("output",e[0].dataType,i.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,m,g)}
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
    ${Dh(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:h}},Lh=e=>Te({reduction:e.reduction}),Fh=(e,t)=>{e.compute(Uh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Gh,Wh,qh,pa,Vh,Hh,jh,Kh,Xh,Yh,Zh,Qh,fa,Jh,ep,tp,np,rp,ip,ap,L0=Q(()=>{he(),fe(),We(),ge(),Gh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Wh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},qh=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Gh(r,t),t.axes.length>0&&Wh(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},pa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Vh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${pa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${pa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Hh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",jh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Kh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Xh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Yh=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${se("uniforms.scales","i",r)};
        var roi_low = ${se("uniforms.roi","i",i)};
        var roi_hi = ${se("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${se("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Zh=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${se("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${se("uniforms.roi","i",a)};
          var roi_hi = ${se("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${se("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",r.length)};
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
    }`,Qh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${se("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,fa=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Jh=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${fa(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
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
    }`},ep=(e,t,n,r,i,a,s,o,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let b=y===c?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${m} = originalIdx + ${m}(i);
          if (${b} < 0 || ${b} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${b} = max(0, min(${b}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${b})`)};
          data[i + 1] = ${y===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(c)};
    ${g(p)};
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
    `},tp=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${fa(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${u}];
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
    }`},np=(e,t,n,r,i,a)=>{let s=e.dims,o=jh(a,t.axes,s.length),u=Kh(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Xh(s,l,t)));let h=ae("output",e.dataType,u.length),c=K("input",e.dataType,s.length),p=W.size(u),m=s.length===u.length&&s.every((x,T)=>x===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,b=c.type.value,$=x=>`
      ${m?"":`
      ${Vh(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Qh(c,s)};
              ${Hh(t.nearestMode,n,b)};
              ${Zh(c,h,s,u,l.length,o.length,g)};
              `;case"linear":return`
              ${Yh(h,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Jh(c,h,s,g,y)}`;if(s.length===3||s.length===5)return`${tp(c,h,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ep(c,h,s,u,l,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,h)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:o},...oe(s,u)]})}},rp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ip=(e,t)=>{let n=[],r=[],i=[],a=rp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");qh(e.inputs,t,a,n,r,i),e.compute(np(e.inputs[0],t,a,n,r,i),{inputs:[0]})},ap=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Te({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),sp,op,up,F0=Q(()=>{he(),fe(),ge(),sp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},op=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=W.size(a),o=a,u=s,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,b=64,$=Fe(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],T=I=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[K("x",e[0].dataType,e[0].dims,$),K("skip",e[1].dataType,e[1].dims,$),K("gamma",e[2].dataType,e[2].dims,$)];c&&E.push(K("beta",e[3].dataType,e[3].dims,$)),p&&E.push(K("bias",e[4].dataType,e[4].dims,$)),E.push(ae("output",e[0].dataType,o,$)),m&&E.push(ae("mean_output",1,h)),g&&E.push(ae("inv_std_output",1,h)),y&&E.push(ae("input_skip_bias_sum",e[0].dataType,o,$));let v=He(e[0].dataType),z=He(1,$);return`

      ${I.registerUniforms(M).declareVariables(...E)}
      var<workgroup> sum_shared : array<${z}, ${b}>;
      var<workgroup> sum_squared_shared : array<${z}, ${b}>;

      ${I.mainStart([b,1,1])}
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
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${vn(v,$,"value")};
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
        let mean = ${Gt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Gt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((I,M)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},up=(e,t)=>{sp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(op(e.inputs,t,e.outputCount,!1),{outputs:n})}}),lp,Hn,dp,ma,cp,hp,pp,fp,G0=Q(()=>{he(),fe(),We(),ge(),lp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Hn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},dp=(e,t)=>{if(e.length>1){let n=Hn(e,1),r=Hn(e,2),i=Hn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Te({starts:n,ends:r,axes:i})}else return t},ma=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},cp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${se("uniforms.input_shape","i",n.length)};
            let steps_i = ${se("uniforms.steps","i",n.length)};
            let signs_i = ${se("uniforms.signs","i",n.length)};
            let starts_i = ${se("uniforms.starts","i",n.length)};
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
      }`,hp=(e,t)=>{let n=e[0].dims,r=W.size(n),i=t.axes.length>0?W.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Hn(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map(($,x)=>ma($,x,n,i,a)),o=t.ends.map(($,x)=>ma($,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(s.splice($,0,0),o.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,T)=>{if($<0){let S=(o[x]-s[x])/$,I=s[x],M=I+S*a[x];s[x]=M,o[x]=I,T[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((o[$]-s[$])/a[$])});let h={dims:l,dataType:e[0].dataType},c=ae("output",e[0].dataType,l.length),p=K("input",e[0].dataType,e[0].dims.length),m=W.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...oe(e[0].dims,l)],b=$=>`
      ${$.registerUniforms(g).declareVariables(p,c)}
        ${cp(p,c,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},pp=(e,t)=>{lp(e.inputs,t);let n=dp(e.inputs,t);e.compute(hp(e.inputs,n),{inputs:[0]})},fp=e=>{let t=e.starts,n=e.ends,r=e.axes;return Te({starts:t,ends:n,axes:r})}}),mp,gp,yp,wp,W0=Q(()=>{he(),fe(),We(),Wt(),ge(),mp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},gp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=W.size(r),a=r.length,s=W.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(E,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(lt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,m=Fe(c),g=c/m,y=64;p===1&&(y=256);let b=(E,v)=>v===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:v===2?`max(${E}.x, ${E}.y)`:v===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=K("x",u.dataType,u.dims,m),x=ae("result",u.dataType,u.dims,m),T=$.type.value,S=He(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=E=>`
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
          rowSumShared = ${T}(${Gt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:I},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(lt(M,l),{inputs:[M]})},yp=(e,t)=>{mp(e.inputs),gp(e,t)},wp=e=>Te({axis:e.axis})}),ga,_p,bp,$p,xp,q0=Q(()=>{he(),fe(),ge(),ga=e=>Array.from(e.getBigInt64Array(),Number),_p=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ga(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},bp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},$p=(e,t)=>{let n=e[0].dims,r=t??ga(e[1]),i=bp(n,r),a=W.size(i),s=e[0].dataType,o=K("input",s,n.length),u=ae("output",s,i.length),l=h=>`
      const inputShape = ${o.indices(...n)};
      ${h.registerUniform("output_size","u32").declareVariables(o,u)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...oe(e[0].dims,i)]}),getShaderSource:l}},xp=e=>{_p(e.inputs),e.compute($p(e.inputs),{inputs:[0]})}}),vp,Sp,Tp,V0=Q(()=>{he(),fe(),ge(),vp=(e,t,n,r,i)=>{let a=ae("output_data",i,n.length,4),s=K("a_data",t[1].dataType,t[1].dims.length,4),o=K("b_data",t[2].dataType,t[2].dims.length,4),u=K("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,m)=>`select(${p}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${p}[${m}] = ${g}(${h(y,b,$)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Sp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(W.areEqual(t,n)&&W.areEqual(n,r)),s=t,o=W.size(t);if(a){let l=$n.calcShape($n.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=W.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>vp(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...oe(r,t,n,s)]})}},Tp=e=>{e.compute(Sp(e.inputs))}}),Ip,H0=Q(()=>{s0(),Ri(),o0(),u0(),l0(),d0(),c0(),g0(),w0(),_0(),b0(),$0(),x0(),v0(),S0(),T0(),I0(),k0(),E0(),M0(),C0(),A0(),R0(),z0(),O0(),Dc(),N0(),B0(),P0(),D0(),U0(),Mi(),L0(),Kc(),F0(),G0(),W0(),Vc(),q0(),Wt(),Bi(),V0(),Ip=new Map([["Abs",[sl]],["Acos",[ol]],["Acosh",[ul]],["Add",[Xl]],["ArgMax",[Vu,Ai]],["ArgMin",[qu,Ai]],["Asin",[ll]],["Asinh",[dl]],["Atan",[cl]],["Atanh",[hl]],["Attention",[Zu]],["AveragePool",[Sh,vh]],["BatchNormalization",[tl]],["BiasAdd",[il]],["BiasSplitGelu",[Hl]],["Cast",[fl,pl]],["Ceil",[yl]],["Clip",[gl]],["Concat",[ld,dd]],["Conv",[Xi,ji]],["ConvTranspose",[Pd,Od]],["Cos",[wl]],["Cosh",[_l]],["CumSum",[Ud,Ld]],["DepthToSpace",[qd,Vd]],["DequantizeLinear",[zh,Oh]],["Div",[Yl]],["Einsum",[Zd,Qd]],["Elu",[bl,Ln]],["Equal",[Zl]],["Erf",[$l]],["Exp",[xl]],["Expand",[nc]],["FastGelu",[ic]],["Floor",[vl]],["FusedConv",[Xi,ji]],["Gather",[uc,oc]],["GatherElements",[_c,wc]],["GatherBlockQuantized",[fc,mc]],["GatherND",[dc,cc]],["Gelu",[Sl]],["Gemm",[vc,xc]],["GlobalAveragePool",[Ih,Th]],["GlobalMaxPool",[Ch,Mh]],["Greater",[td]],["GreaterOrEqual",[rd]],["GridSample",[Rc,zc]],["GroupQueryAttention",[Qc]],["HardSigmoid",[Rl,Al]],["InstanceNormalization",[th]],["LayerNormalization",[ih]],["LeakyRelu",[Tl,Ln]],["Less",[nd]],["LessOrEqual",[id]],["Log",[Ll]],["MatMul",[sh]],["MatMulNBits",[dh,ch]],["MaxPool",[kh,Eh]],["Mul",[Ql]],["MultiHeadAttention",[Pc,Nc]],["Neg",[kl]],["Not",[Il]],["Pad",[bh]],["Pow",[Jl]],["QuickGelu",[Wl,Ln]],["Range",[Ph]],["Reciprocal",[El]],["ReduceMin",[Uu]],["ReduceMean",[Ou]],["ReduceMax",[Du]],["ReduceSum",[Fu]],["ReduceProd",[Lu]],["ReduceL1",[Nu]],["ReduceL2",[Bu]],["ReduceLogSum",[Wu]],["ReduceLogSumExp",[Pu]],["ReduceSumSquare",[Gu]],["Relu",[Ml]],["Resize",[ip,ap]],["RotaryEmbedding",[jc]],["ScatterND",[Fh,Lh]],["Sigmoid",[Cl]],["Sin",[zl]],["Sinh",[Ol]],["Slice",[pp,fp]],["SkipLayerNormalization",[up]],["Split",[Wc,qc]],["Sqrt",[Nl]],["Softmax",[yp,wp]],["Sub",[ed]],["Tan",[Bl]],["Tanh",[Pl]],["ThresholdedRelu",[Ul,Ln]],["Tile",[xp]],["Transpose",[tu,nu]],["Where",[Tp]]])}),kp,j0=Q(()=>{ct(),Ot(),ge(),kp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){St(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){St(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Xo(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});xe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ep={};_n(Ep,{WebGpuBackend:()=>Rp});var Mp,Cp,Ap,Rp,K0=Q(()=>{ct(),he(),Ot(),No(),i0(),H0(),j0(),Mp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Cp=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Mp(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Ap=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Rp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Ap(s),this.gpuDataManager=Vo(this),this.programManager=new kp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,hi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;St(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map($=>({dims:$.dims,dataType:zt($.dataType)})),outputsMetadata:p.map($=>({dims:$.dims,dataType:zt($.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:b});else{let $="";c.forEach((T,S)=>{$+=`input[${S}]: [${T.dims}] | ${zt(T.dataType)}, `});let x="";p.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${zt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${h}" ${$}${x}start time: ${y} ns, execution time: ${b-y} ns`)}ar("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,n,r,i,a){St(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?o.map((x,T)=>T):n;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let c=[],p=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let T=h[x]===-1,S=h[x]===-2,I=T||S?i(o[x].dataType,o[x].dims):r(h[x],o[x].dataType,o[x].dims);if(c.push(I),I.data===0)continue;let M=this.gpuDataManager.get(I.data);if(!M)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(M),S){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(M)}p.push(M)}if(s.length!==t.length||p.length!==c.length){if(p.length===0)return pt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,T=[];l.forEach(E=>{let v=typeof E.data=="number"?[E.data]:E.data;if(v.length===0)return;let z=E.type===10?2:4,D,X;E.type===10?(X=v.length>4?16:v.length>2?8:v.length*z,D=v.length>4?16:z*v.length):(X=v.length<=2?v.length*z:16,D=16),x=Math.ceil(x/X)*X,T.push(x);let L=E.type===10?8:4;x+=v.length>4?Math.ceil(v.length/L)*D:v.length*z});let S=16;x=Math.ceil(x/S)*S;let I=new ArrayBuffer(x);l.forEach((E,v)=>{let z=T[v],D=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(I,z,D.length).set(D);else if(E.type===12)new Uint32Array(I,z,D.length).set(D);else if(E.type===10)new Uint16Array(I,z,D.length).set(D);else if(E.type===1)new Float32Array(I,z,D.length).set(D);else throw new Error(`Unsupported uniform type: ${zt(E.type)}`)});let M=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,I,0,x),this.gpuDataManager.release(M.id),m={offset:0,size:x,buffer:M.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,b=Cp(e,t,y),$=this.programManager.getArtifact(b);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(b,$),xe("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,I=typeof T.data=="number"?1:T.data.length,[M,E]=$.uniformVariablesInfo[x];if(S!==M||I!==E)throw new Error(`Uniform variable ${x} mismatch: expect type ${M} with size ${E}, got type ${S} with size ${I} in program "${$.programInfo.name}".`)}}if(xe("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,s,p,g,m),pt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Ip.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),xe("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Si(this,e,t);return pi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){xe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){xe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){xe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),zp={};_n(zp,{init:()=>Np});var vr,Op,Np,X0=Q(()=>{he(),Ot(),fe(),r0(),vr=class Og{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new Og(this.module,this.dataType,this.data,t)}},Op=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<c;m++)p.push(Number(e.getValue(r*i++,a)));o.push(new vr(e,l,h,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new vr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=sn(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new vr(this.module,o,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Np=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(K0(),zn(Ep)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,h=!1)=>{if(h)xe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{xe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{xe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,h)=>{xe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new Op(t,s,Number(u));return s.computeKernel(Number(o),c,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Fo(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,h)=>a.ensureTensor(s,o,u,l,h),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Bp,ya,wa,qt,Pp,_a,Sr,ba,$a,xa,va,Sa,Ta,Dp=Q(()=>{ct(),e0(),t0(),he(),nn(),oi(),To(),Bp=(e,t)=>{Ne()._OrtInit(e,t)!==0&&Ee("Can't initialize onnxruntime.")},ya=async e=>{Bp(e.wasm.numThreads,dr(e.logLevel))},wa=async(e,t)=>{var r,i;(i=(r=Ne()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(X0(),zn(zp)).init;t==="webgpu"&&await a("webgpu",Ne(),e,n),t==="webnn"&&await a("webnn",Ne(),e)}},qt=new Map,Pp=e=>{let t=Ne(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ee("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},_a=(e,t)=>{let n=Ne(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ee("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[o,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Sr=e=>{let t=Ne(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ba=async(e,t)=>{var c,p,m,g;let n,r,i=Ne();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Sr(e);let a=0,s=0,o=0,u=[],l=[],h=[];try{if([s,u]=await So(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let z of t.externalData){let D=typeof z=="string"?z:z.path;v.push(ci(typeof z=="string"?z:z.data).then(X=>{i.mountExternalData(D,X)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let z=v,D=z==null?void 0:z.context,X=z==null?void 0:z.gpuDevice,L=z==null?void 0:z.deviceType,H=z==null?void 0:z.powerPreference;D?i.currentContext=D:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:L,powerPreference:H})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Ee("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,b]=Pp(a),$=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],I=[],M=[];for(let v=0;v<y;v++){let[z,D,X]=_a(a,v);z===0&&Ee("Can't get an input name."),l.push(z);let L=i.UTF8ToString(z);x.push(L),S.push(D===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:zt(D),shape:X})}for(let v=0;v<b;v++){let[z,D,X]=_a(a,v+y);z===0&&Ee("Can't get an output name."),h.push(z);let L=i.UTF8ToString(z);T.push(L),I.push(D===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:zt(D),shape:X});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let H=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[L])??"cpu",A=i.webnnIsGraphOutput;if(H==="cpu"&&A&&A(a,L)){M.push("ml-tensor-cpu-output");continue}if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if($&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(H)}}let E=null;return M.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Ee("Can't create IO binding."),E={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>di(v))}),qt.set(a,[a,l,h,E,$,!1]),[a,x,T,S,I]}catch(y){throw l.forEach(b=>i._OrtFree(b)),h.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ee("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ee("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Ee("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},$a=e=>{var u,l,h;let t=Ne(),n=qt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ee("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ee("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Ee("Can't release session."),qt.delete(e)},xa=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Ne(),u=o.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;g=sn(an(l),h);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;g=sn(an(l),h);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,an(l),h)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=o._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(m+x*u,ft($[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=o.UTF8ToString(i);if(x(r,S)||T(r,S)){let I=an(l);g=sn(I,h),p="ml-tensor";let M=o.webnnCreateTemporaryTensor,E=o.webnnUploadTensor;if(!M||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await M(r,I,h);E(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=o.stackSave(),b=o.stackAlloc(4*h.length);try{h.forEach((x,T)=>o.setValue(b+T*u,x,u===4?"i32":"i64"));let $=o._OrtCreateTensor(an(l),m,g,b,h.length,di(p));$===0&&Ee(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{o.stackRestore(y)}},va=async(e,t,n,r,i,a)=>{var L,H,A,F;let s=Ne(),o=s.PTR_SIZE,u=qt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],m=u[4],g=u[5],y=t.length,b=r.length,$=0,x=[],T=[],S=[],I=[],M=[],E=s.stackSave(),v=s.stackAlloc(y*o),z=s.stackAlloc(y*o),D=s.stackAlloc(b*o),X=s.stackAlloc(b*o);try{[$,x]=_o(a),en("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)await xa(n[O],T,I,e,h[t[O]],t[O],m);for(let O=0;O<b;O++)await xa(i[O],S,I,e,c[r[O]],y+r[O],m);tn("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)s.setValue(v+O*o,T[O],"*"),s.setValue(z+O*o,h[t[O]],"*");for(let O=0;O<b;O++)s.setValue(D+O*o,S[O],"*"),s.setValue(X+O*o,c[r[O]],"*");if(p&&!g){let{handle:O,outputPreferredLocations:Z,outputPreferredLocationsEncoded:B}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);en("wasm bindInputsOutputs");for(let q=0;q<y;q++){let U=t[q];await s._OrtBindInput(O,h[U],T[q])!==0&&Ee(`Can't bind input[${q}] for session=${e}.`)}for(let q=0;q<b;q++){let U=r[q];(L=i[q])!=null&&L[3]?(M.push(S[q]),s._OrtBindOutput(O,c[U],S[q],0)!==0&&Ee(`Can't bind pre-allocated output[${q}] for session=${e}.`)):s._OrtBindOutput(O,c[U],0,B[U])!==0&&Ee(`Can't bind output[${q}] to ${Z[q]} for session=${e}.`)}tn("wasm bindInputsOutputs"),qt.set(e,[l,h,c,p,m,!0])}(H=s.jsepOnRunStart)==null||H.call(s,l),(A=s.webnnOnRunStart)==null||A.call(s,l);let R;p?R=await s._OrtRunWithBinding(l,p.handle,b,D,$):R=await s._OrtRun(l,z,v,y,X,b,D,$),R!==0&&Ee("failed to call OrtRun().");let P=[],Y=[];en("wasm ProcessOutputTensor");for(let O=0;O<b;O++){let Z=Number(s.getValue(D+O*o,"*"));if(Z===S[O]||M.includes(S[O])){P.push(i[O]),Z!==S[O]&&s._OrtReleaseTensor(Z)!==0&&Ee("Can't release tensor.");continue}let B=s.stackSave(),q=s.stackAlloc(4*o),U=!1,G,ne=0;try{s._OrtGetTensorData(Z,q,q+o,q+2*o,q+3*o)!==0&&Ee(`Can't access output tensor data on index ${O}.`);let ue=o===4?"i32":"i64",re=Number(s.getValue(q,ue));ne=s.getValue(q+o,"*");let we=s.getValue(q+o*2,"*"),Ce=Number(s.getValue(q+o*3,ue)),Ue=[];for(let Ae=0;Ae<Ce;Ae++)Ue.push(Number(s.getValue(we+Ae*o,ue)));s._OrtFree(we)!==0&&Ee("Can't free memory for tensor dims.");let Le=Ue.reduce((Ae,pe)=>Ae*pe,1);G=zt(re);let Ze=p==null?void 0:p.outputPreferredLocations[r[O]];if(G==="string"){if(Ze==="gpu-buffer"||Ze==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ae=[];for(let pe=0;pe<Le;pe++){let st=s.getValue(ne+pe*o,"*"),An=s.getValue(ne+(pe+1)*o,"*"),Dt=pe===Le-1?void 0:An-st;Ae.push(s.UTF8ToString(st,Dt))}P.push([G,Ue,Ae,"cpu"])}else if(Ze==="gpu-buffer"&&Le>0){let Ae=s.jsepGetBuffer;if(!Ae)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let pe=Ae(ne),st=sn(re,Le);if(st===void 0||!ui(G))throw new Error(`Unsupported data type: ${G}`);U=!0,P.push([G,Ue,{gpuBuffer:pe,download:s.jsepCreateDownloader(pe,st,G),dispose:()=>{s._OrtReleaseTensor(Z)!==0&&Ee("Can't release tensor.")}},"gpu-buffer"])}else if(Ze==="ml-tensor"&&Le>0){let Ae=s.webnnEnsureTensor,pe=s.webnnIsGraphInputOutputTypeSupported;if(!Ae||!pe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(sn(re,Le)===void 0||!li(G))throw new Error(`Unsupported data type: ${G}`);if(!pe(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let st=await Ae(e,ne,re,Ue,!1);U=!0,P.push([G,Ue,{mlTensor:st,download:s.webnnCreateMLTensorDownloader(ne,G),dispose:()=>{s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(Ze==="ml-tensor-cpu-output"&&Le>0){let Ae=s.webnnCreateMLTensorDownloader(ne,G)(),pe=P.length;U=!0,Y.push((async()=>{let st=[pe,await Ae];return s.webnnReleaseTensorId(ne),s._OrtReleaseTensor(Z),st})()),P.push([G,Ue,[],"cpu"])}else{let Ae=lr(G),pe=new Ae(Le);new Uint8Array(pe.buffer,pe.byteOffset,pe.byteLength).set(s.HEAPU8.subarray(ne,ne+pe.byteLength)),P.push([G,Ue,pe,"cpu"])}}finally{s.stackRestore(B),G==="string"&&ne&&s._free(ne),U||s._OrtReleaseTensor(Z)}}p&&!m&&(s._OrtClearBoundOutputs(p.handle)!==0&&Ee("Can't clear bound outputs."),qt.set(e,[l,h,c,p,m,!1]));for(let[O,Z]of await Promise.all(Y))P[O][2]=Z;return tn("wasm ProcessOutputTensor"),P}finally{(F=s.webnnOnRunEnd)==null||F.call(s,l),s.stackRestore(E),T.forEach(R=>s._OrtReleaseTensor(R)),S.forEach(R=>s._OrtReleaseTensor(R)),I.forEach(R=>s._free(R)),$!==0&&s._OrtReleaseRunOptions($),x.forEach(R=>s._free(R))}},Sa=e=>{let t=Ne(),n=qt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ee("Can't get an profile file name."),t._OrtFree(i)},Ta=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Vt,at,Sn,jn,Kn,Tr,Ia,Ir,pn,fn,Up,Lp,Fp,Gp,Wp,qp,Vp,Hp,jp=Q(()=>{ct(),Dp(),nn(),ri(),Vt=()=>!!Oe.wasm.proxy&&typeof document<"u",Sn=!1,jn=!1,Kn=!1,Ir=new Map,pn=(e,t)=>{let n=Ir.get(e);n?n.push(t):Ir.set(e,[t])},fn=()=>{if(Sn||!jn||Kn||!at)throw new Error("worker not ready")},Up=e=>{switch(e.data.type){case"init-wasm":Sn=!1,e.data.err?(Kn=!0,Ia[1](e.data.err)):(jn=!0,Ia[0]()),Tr&&(URL.revokeObjectURL(Tr),Tr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ir.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Lp=async()=>{if(!jn){if(Sn)throw new Error("multiple calls to 'initWasm()' detected.");if(Kn)throw new Error("previous call to 'initWasm()' failed.");if(Sn=!0,Vt())return new Promise((e,t)=>{at==null||at.terminate(),fo().then(([n,r])=>{try{at=r,at.onerror=a=>t(a),at.onmessage=Up,Ia=[e,t];let i={type:"init-wasm",in:Oe};!i.in.wasm.wasmPaths&&(n||Jr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),at.postMessage(i),Tr=n}catch(i){t(i)}},t)});try{await si(Oe.wasm),await ya(Oe),jn=!0}catch(e){throw Kn=!0,e}finally{Sn=!1}}},Fp=async e=>{if(Vt())return fn(),new Promise((t,n)=>{pn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Oe}};at.postMessage(r)});await wa(Oe,e)},Gp=async e=>Vt()?(fn(),new Promise((t,n)=>{pn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};at.postMessage(r,[e.buffer])})):Sr(e),Wp=async(e,t)=>{if(Vt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return fn(),new Promise((n,r)=>{pn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),at.postMessage(i,a)})}else return ba(e,t)},qp=async e=>{if(Vt())return fn(),new Promise((t,n)=>{pn("release",[t,n]);let r={type:"release",in:e};at.postMessage(r)});$a(e)},Vp=async(e,t,n,r,i,a)=>{if(Vt()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return fn(),new Promise((s,o)=>{pn("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};at.postMessage(l,Ta(u))})}else return va(e,t,n,r,i,a)},Hp=async e=>{if(Vt())return fn(),new Promise((t,n)=>{pn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};at.postMessage(r)});Sa(e)}}),ka,Kp,Xp,Y0=Q(()=>{ct(),jp(),he(),Xr(),To(),ka=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Kp=e=>{switch(e[3]){case"cpu":return new Ge(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ui(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ge.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!li(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ge.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Xp=class{async fetchModelAndCopyToWasmMemory(e){return Gp(await ci(e))}async loadModel(e,t){St();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wp(n,t),pt()}async dispose(){return qp(this.sessionId)}async run(e,t,n){St();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],m=c[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let p=c[0],m=c[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),s.push(g)});let o=r.map((c,p)=>ka(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?ka(c,()=>`output "${this.outputNames[s[p]]}"`):null),l=await Vp(this.sessionId,i,o,s,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[s[c]]]=a[c]??Kp(l[c]);return pt(),h}startProfiling(){}endProfiling(){Hp(this.sessionId)}}}),Yp={};_n(Yp,{OnnxruntimeWebAssemblyBackend:()=>Ma,initializeFlags:()=>Ea,wasmBackend:()=>Zp});var Ea,Ma,Zp,Z0=Q(()=>{ct(),jp(),Y0(),Ea=()=>{(typeof Oe.wasm.initTimeout!="number"||Oe.wasm.initTimeout<0)&&(Oe.wasm.initTimeout=0);let e=Oe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Oe.wasm.simd=!1),typeof Oe.wasm.proxy!="boolean"&&(Oe.wasm.proxy=!1),typeof Oe.wasm.trace!="boolean"&&(Oe.wasm.trace=!1),typeof Oe.wasm.numThreads!="number"||!Number.isInteger(Oe.wasm.numThreads)||Oe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Oe.wasm.numThreads=1;else{let t=typeof navigator>"u"?Bg("node:os").cpus().length:navigator.hardwareConcurrency;Oe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ma=class{async init(e){Ea(),await Lp(),await Fp(e)}async createInferenceSessionHandler(e,t){let n=new Xp;return await n.loadModel(e,t),n}},Zp=new Ma});ct(),ct(),ct();var Q0="1.27.0";{let e=(Z0(),zn(Yp)).wasmBackend;bn("webgpu",e,5),bn("webnn",e,5),bn("cpu",e,10),bn("wasm",e,10)}Object.defineProperty(Oe.versions,"web",{value:Q0,enumerable:!0});/**
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
 */const J0=114;function ey(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function mn(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const b=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(b))),x=Math.min(r-1,$+1),T=Math.max(0,Math.min(1,b-$)),S=(p*r+$)*a,I=(p*r+x)*a,M=(m*r+$)*a,E=(m*r+x)*a,v=(h*t+y)*3;for(let z=0;z<3;z++){const D=s[S+z]*(1-T)+s[I+z]*T,X=s[M+z]*(1-T)+s[E+z]*T;o[v+z]=Math.min(255,Math.max(0,Math.round(D*(1-g)+X*g)))}}}return o}function Qp(e,t){const n=ey(e.width,e.height,t),r=mn(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(J0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let l=0;l<n.resizedWidth;l++){const h=(u+l)*3,c=o+l;a[c]=r[h]/255,a[i+c]=r[h+1]/255,a[2*i+c]=r[h+2]/255}}return{tensor:a,params:n}}function Jp(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],h=e[s*6+3],c=e[s*6+4],p=e[s*6+5];if(c<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,b=(l-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(b-g),Math.trunc($-y)],boxFloat:[g,y,b-g,$-y]})}return i}function Xn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function ef(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function tf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const ty=.6,ny=.74;function nf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=Xn((o+l)/2),p=Xn((u+h)/2),m=Xn((l-o+(h-u))/4);m>=1&&r.push({cx:c,cy:p,r:m})}return r}function ry(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(ty*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function iy(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=ny*(n.r+r.r))&&t.push(n);return t}function ay(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(ef(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function rf(e,t,n){const r=nf(e,t,n);return r.length===0?[]:ay(iy(ry(r)))}function sy(e,t,n){return nf(e,t,n)}function Ca(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const af=["brown","grey","blue","green","yellow","red","purple"],oy={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},uy=.7;function ly(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[s,o,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[m,g,y,b]=p.box,$=Math.max(0,Math.min(s+u,m+y)-Math.max(s,m)),x=Math.max(0,Math.min(o+l,g+b)-Math.max(o,g)),T=Math.max(1,Math.min(u*l,y*b));if($*x>=uy*T){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function sf(e,t,n){const r=Jp(e,t,n,af.length).map(i=>{const a=af[i.classIndex];return{color:a,family:oy[a],box:i.box,confidence:i.confidence}});return ly(r)}const dy=8,cy=.8,of=1.25;function hy(e){if(e.length<dy)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*of?t.push(s):u>o*of&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<cy*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const py=2.25,uf=8;function fy(e){if(e.length<uf)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=py*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const m=t[c][0]-t[p][0],g=t[c][1]-t[p][1];m*m+g*g<=i&&(a[s(c)]=s(p))}const o=new Map;for(let c=0;c<e.length;c++){const p=s(c);o.set(p,[...o.get(p)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<uf||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const It={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function bt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const my=.42,gy=22,yy=43,wy=120,_y=1.5,by=.72,$y=110,lf=3;function Yn(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*my);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-o)**2+(c-u)**2>l*l)continue;const m=(c*r+p)*a,g=s[m],y=s[m+1],b=s[m+2];!t&&g>=250&&y>=250&&b>=250||(n(g,y,b),h+=1)}return h}function xy(e){let t=0,n=0,r=0,i=Yn(e,!1,(a,s,o)=>{const u=bt(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Yn(e,!0,(a,s,o)=>{const u=bt(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function vy(e){let t=0,n=0,r=Yn(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=Yn(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function Sy(e){let t=0;const n=Yn(e,!0,(r,i,a)=>{t+=bt(r,i,a).s});return n===0?null:t/n}function Ty(e){const t=xy(e);if(t===null||t.s<=gy)return 1;if(t.s>=wy){const n=vy(e);return n!==null&&n>=_y?6:3}return t.s>=yy?3:6}function Iy(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function ky(e,t){const n=[...t];if(e.length<lf||t.length!==e.length)return n;const r=e.map(s=>Sy(s)),i=r.filter(s=>s!==null);if(i.length<lf)return n;const a=ef(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<by*a&&s<$y&&(n[o]=1)}),n}function df(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),h=Math.max(0,u-s),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+s-r)**2<=i*i){const b=((p+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:h,channels:3,data:c}}function Ey(e,t){const n=t.map(a=>df(e,a)),r=n.map(a=>Ty(a)),i=Iy(t,r);return ky(n,i)}function My(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function cf(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(o);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,o);if(!(y<=0))for(let b=Math.floor(h);b<c;b++){const $=Math.min(b+1,c)-Math.max(b,h);$<=0||(p+=e.data[g*e.width+b]*$*y,m+=$*y)}}r[s*t+l]=Math.min(255,Math.max(0,Xn(p/m)))}}return{width:t,height:n,data:r}}function Cy(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Xn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function Ay(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const h=s+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function Ry(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const h=s+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function Aa(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;s[h++]=u,i[u]=o;let c=0,p=0,m=0;for(;l<h;){const g=s[l++],y=g%t,b=g/t|0;c+=1,p+=y,m+=b;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const T=y+x,S=b+$;if(T<0||T>=t||S<0||S>=n)continue;const I=S*t+T;r[I]>0&&i[I]===0&&(i[I]=o,s[h++]=I)}}a[o]={area:c,centroidX:p/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function zy(e,t,n){return hf(Float32Array.from(e.data),e.width,t,n)}function hf(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,m=o*c-u*p+a,g=u*c+o*p+a,y=Math.floor(m),b=Math.floor(g),$=m-y,x=g-b,T=(M,E)=>M>=0&&M<t&&E>=0&&E<t?e[E*t+M]:r,S=T(y,b)*(1-$)+T(y+1,b)*$,I=T(y,b+1)*(1-$)+T(y+1,b+1)*$;i[l*t+h]=S*(1-x)+I*x}return i}const Oy=.9,Ny=.34,By=[.55,.6,.66,.72],Py=22,Dy=88,Uy=35,Tn=28,Ra=4,Ly=Array.from({length:15},(e,t)=>-21+t*3),pf=[-2,0,2],Fy=3,Gy=.3;function Wy(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function qy(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let b=0;b<e.width;b++)e.data[y*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),h=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let b=0;b<s;b++)l[(y+c)*u+(b+h)]=e.data[(y+r)*e.width+(b+t)];const p=Tn-2*Ra,m=cf({width:u,height:u,data:l},p,p),g=new Float32Array(Tn*Tn);for(let y=0;y<p;y++)for(let b=0;b<p;b++)g[(y+Ra)*Tn+(b+Ra)]=m.data[y*p+b]>110?1:0;return g}function Vy(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Ny);if(u<4)return null;const l=s-u,h=o-u,c=2*u,p=2*u;if(c<6||p<6)return null;const m=new Int16Array(c*p),g=new Int16Array(c*p),y=new Int16Array(c*p),b=new Uint8Array(c*p),$=[],x=Math.min(c,p)/2;for(let O=0;O<c;O++)for(let Z=0;Z<p;Z++){const B=((O+l)*n+(Z+h))*i,{h:q,s:U,v:G}=bt(a[B],a[B+1],a[B+2]),ne=O*p+Z;m[ne]=q,g[ne]=U,y[ne]=G,Math.sqrt((Z-p/2)**2+(O-c/2)**2)/x<=t&&(b[ne]=1,$.push(G))}if($.length<16)return null;const T=tf($,55);let S=0,I=0,M=0;const E=O=>m[O]>=Py&&m[O]<=Dy&&g[O]>=Uy,v=O=>y[O]>=T&&g[O]<=95&&!E(O)&&b[O]===1;for(let O=0;O<c*p;O++)b[O]===1&&(M+=1,y[O]>=130&&!E(O)&&(S+=1),v(O)&&(I+=1));const z=S>.5*M&&I<.15*M,D=new Uint8Array(c*p);if(z){const O=tf($,45);for(let Z=0;Z<c*p;Z++)D[Z]=b[Z]===1&&y[Z]<=O?255:0}else for(let O=0;O<c*p;O++)D[O]=v(O)?255:0;const X={width:p,height:c,data:D},L=Ay(X);let H=Aa(L),A=H;if(H.stats.length<=1&&(H=Aa(X),A=H,H.stats.length<=1))return null;const F=Math.min(c,p)/2;let R=0,P=-1;for(let O=1;O<A.stats.length;O++){const Z=A.stats[O];if(Z===void 0)continue;const B=Math.hypot(Z.centroidX-p/2,Z.centroidY-c/2)/F,q=Z.area*(1-.6*Math.min(B,1));q>P&&(P=q,R=O)}if(R===0)return null;const Y=new Uint8Array(c*p);for(let O=0;O<c*p;O++)Y[O]=A.labels[O]===R?255:0;return qy(Ry({width:p,height:c,data:Y}))}function Hy(e,t,n,r,i,a){const s=Tn;let o=0,u=0;for(let l=0;l<s;l++){const h=l-a;if(!(h<0||h>=s))for(let c=0;c<s;c++){const p=c-i;if(p<0||p>=s)continue;const m=e[h*s+p];m!==0&&(u+=m,o+=m*n[l*s+c])}}return o/(u+r-o+1e-6)}function jy(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Ly){const a=i===0?e:hf(e,Tn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of pf)for(const u of pf){const l=Hy(a,s,t,n,o,u);l>r&&(r=l)}}return r}function Ky(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of By){const o=Vy(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([jy(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Gy)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,Fy))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const Xy=2560,Yy=.3,Zy=.5,Qy=1.6,Jy=3,ew=5;function tw(e){const t=Math.min(1,Xy/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*o-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const T=2-x,S=(h*e.width+y)*e.channels+T,I=(h*e.width+b)*e.channels+T,M=(c*e.width+y)*e.channels+T,E=(c*e.width+b)*e.channels+T,v=e.data[S]*(1-$)+e.data[I]*$,z=e.data[M]*(1-$)+e.data[E]*$,D=v*(1-p)+z*p;a[x*i+u*n+m]=(D/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function nw(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const l=o+t;e[l]>u&&(u=e[l]),s+1<t&&e[l+1]>u&&(u=e[l+1])}r[o]=u}}return r}function rw(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function iw(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,l=o-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,b=-1/0;for(const[S,I]of e){const M=S*c+I*p,E=-S*p+I*c;M<m&&(m=M),M>g&&(g=M),E<y&&(y=E),E>b&&(b=E)}const $=g-m,x=b-y,T=$*x;if(T<n){n=T;const S=(m+g)/2,I=(y+b)/2;t={cx:S*c-I*p,cy:S*p+I*c,w:$,h:x,angle:Math.atan2(p,c)}}}return t}function aw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),l=Math.abs(s*a)+Math.abs(o*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let b=p;b<=m;b++)for(let $=h;$<=c;$++){const x=$-r.cx,T=b-r.cy,S=x*i+T*a,I=-x*a+T*i;Math.abs(S)<=s&&Math.abs(I)<=o&&(g+=e[b*t+$],y+=1)}return y===0?0:g/y}function sw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,b)=>y[0]-b[0]),[o,u,l,h]=s,[c,p]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function ow(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>Yy?255:0;s=nw(s,i,a);const o={width:i,height:a,data:s},{labels:u}=Aa(o),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let b=l.get(y);b===void 0&&(b=new Map,l.set(y,b));const $=b.get(m);$===void 0?b.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const h=n/i,c=r/a,p=[];for(const[m,g]of l){const y=[];for(const[D,[X,L]]of g)y.push([X-.5,D-.5],[X-.5,D+.5],[L+.5,D-.5],[L+.5,D+.5]);const b=iw(rw(y));if(Math.min(b.w,b.h)<Jy)continue;const $=aw(e,i,a,b);if($<Zy)continue;const x=b.w*b.h*Qy/(2*(b.w+b.h)),T={...b,w:b.w+2*x,h:b.h+2*x};if(Math.min(T.w,T.h)<ew+2)continue;const I=sw(T).map(([D,X])=>[Math.min(n,Math.max(0,Math.round(D*h))),Math.min(r,Math.max(0,Math.round(X*c)))]),M=I.map(D=>D[0]),E=I.map(D=>D[1]),v=Math.min(...M),z=Math.min(...E);p.push({quad:I,x:v,y:z,width:Math.max(...M)-v,height:Math.max(...E)-z,score:$})}return p.sort((m,g)=>g.score-m.score)}function uw(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=lw([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),l=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let p=0;p<s;p++){const m=u[6]*p+u[7]*c+u[8],g=(u[0]*p+u[1]*c+u[2])/m,y=(u[3]*p+u[4]*c+u[5])/m,b=Math.floor(g),$=Math.floor(y),x=g-b,T=y-$,S=Math.max(0,Math.min(e.width-1,b)),I=Math.max(0,Math.min(e.width-1,b+1)),M=Math.max(0,Math.min(e.height-1,$)),E=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const z=e.data[(M*e.width+S)*e.channels+v],D=e.data[(M*e.width+I)*e.channels+v],X=e.data[(E*e.width+S)*e.channels+v],L=e.data[(E*e.width+I)*e.channels+v],H=z*(1-x)+D*x,A=X*(1-x)+L*x;l[(c*s+p)*e.channels+v]=Math.round(H*(1-T)+A*T)}}const h={width:s,height:o,channels:e.channels,data:l};return o/s>=1.5?Ht(h,3):h}function lw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let l=i;l<8;l++)n[o][l]-=u*n[i][l];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Ht(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,m;n===1?(p=i-1-h,m=c):n===2?(p=r-1-c,m=i-1-h):(p=h,m=r-1-c);const g=(h*r+c)*a,y=(m*o+p)*a;for(let b=0;b<a;b++)l[y+b]=s[g+b]}return{width:o,height:u,channels:a,data:l}}const dw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,dw)*255));return e})();const Bt=48,cw=320;function hw(e){return["blank",...e.characters," "]}function pw(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function fw(e,t){const n=Math.trunc(Bt*t),r=e.width/e.height,i=Math.ceil(Bt*r)>n?n:Math.ceil(Bt*r),a=new Float32Array(3*Bt*n),s=Bt*n,o=e.width/i,u=e.height/Bt;for(let l=0;l<Bt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,h-c));for(let g=0;g<i;g++){const y=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,b+1),x=Math.max(0,Math.min(1,y-b));for(let T=0;T<3;T++){const S=2-T,I=(c*e.width+b)*e.channels+S,M=(c*e.width+$)*e.channels+S,E=(p*e.width+b)*e.channels+S,v=(p*e.width+$)*e.channels+S,z=e.data[I]*(1-x)+e.data[M]*x,D=e.data[E]*(1-x)+e.data[v]*x,X=z*(1-m)+D*m;a[T*s+l*n+g]=(X/255-.5)/.5}}}return{tensor:a,width:n}}const mw=62,gw=8,yw=5;function za(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function ww(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function kr(e,t){return e.length===0&&t.length===0?100:200*ww(e,t)/(e.length+t.length)}function ff(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return kr(n(e),n(t))}function _w(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),s=[...r].filter(h=>!n.has(h)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),l=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(kr(o,u),kr(o,l),kr(u,l))}function bw(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[za(i),za(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function $w(e,t){const n=za(e);if(!n||t.length===0)return null;const i=bw(t).map(h=>({...h,score:_w(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,gw).filter(h=>h.score>=mw);if(i.length===0)return null;const a=i[0].score,s=i.filter(h=>a-h.score<=yw),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],l=[ff(o,u.key),u.score];for(const h of s.slice(1)){const c=[ff(o,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const mf=5e3,Oa=.75,gf=15,xw=1.25,vw=2.4,Sw=.003,Tw=.85,Iw=4,Na=2600,Ba=2,Pa=.3,yf=.1,wf=.012,kw=22,_f=.5,Er=.12;function Xe(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Ew(e,t,n,r){const i=r.map(re=>re[0]),a=r.map(re=>re[1]),s=i.reduce((re,we)=>re+we,0)/i.length,o=a.reduce((re,we)=>re+we,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*Iw,h=Math.max(0,Math.trunc(s-l)),c=Math.min(n.width,Math.trunc(s+l)),p=Math.max(0,Math.trunc(o-l)),m=Math.min(n.height,Math.trunc(o+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<Na?Ba:1,y=Xe(e,n),b=Xe(e,t),$=new e.Rect(h,p,c-h,m-p),x=y.roi($),T=new e.Mat;g!==1?e.resize(x,T,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(T);const S=new e.Mat,I=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(T,I,e.COLOR_RGB2GRAY);const M=new e.ORB(mf),E=new e.KeyPointVector,v=new e.KeyPointVector,z=new e.Mat,D=new e.Mat,X=new e.Mat,L=[y,b,x,T,S,I,E,v,z,D,X],H=re=>{for(const we of L)try{we.delete()}catch{}try{M.delete()}catch{}return re};if(M.detectAndCompute(S,X,E,z),M.detectAndCompute(I,X,v,D),z.rows<8||D.rows<8)return H(null);const A=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;A.knnMatch(z,D,F,2);const R=[],P=[];for(let re=0;re<F.size();re++){const we=F.get(re);if(we.size()===2){const Ce=we.get(0),Ue=we.get(1);if(Ce.distance<Oa*Ue.distance){const Le=E.get(Ce.queryIdx).pt,Ze=v.get(Ce.trainIdx).pt;R.push(Le.x,Le.y),P.push(Ze.x,Ze.y)}}}if(F.delete(),A.delete(),R.length/2<8)return H(null);const Y=e.matFromArray(R.length/2,1,e.CV_32FC2,R),O=e.matFromArray(P.length/2,1,e.CV_32FC2,P),Z=new e.Mat,B=e.findHomography(Y,O,e.RANSAC,5,Z);let q=0;for(let re=0;re<Z.rows;re++)q+=Z.data[re];const U=B.rows===3?[...B.data64F]:null;if(Y.delete(),O.delete(),Z.delete(),B.delete(),U===null||q<gf)return H(null);const G=1/g,ne=[[G,0,h],[0,G,p],[0,0,1]],ue=[0,1,2].map(re=>[0,1,2].map(we=>ne[re][0]*U[we]+ne[re][1]*U[3+we]+ne[re][2]*U[6+we]));return H({H:ue,inliers:q})}function Da(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<Sw||i>Tw)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=xw&&o<=vw}function Ua(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function La(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Pa*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(L=>[L[0],L[1],L[2]-s*(L[0]+L[1])+0]);for(let L=0;L<3;L++)l[L][2]=r[L][2]-s*r[L][0]-s*r[L][1];const h=Xe(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],$=(L,H)=>{const A=(H*o+L)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let L=0;L<u;L++)for(let H=0;H<o;H++)(L<y||L>=u-y||H<y||H>=o-y)&&$(H,L);const x=L=>{L.sort((A,F)=>A-F);const H=L.length>>1;return L.length%2?L[H]:(L[H-1]+L[H])/2},T=[x(b[0]),x(b[1]),x(b[2])],S=(L,H)=>{const A=(H*o+L)*3,F=g[A]-T[0],R=g[A+1]-T[1],P=g[A+2]-T[2];return Math.sqrt(F*F+R*R+P*P)>kw},I=Math.max(6,Math.trunc(yf*i)),M=Math.max(6,Math.trunc(yf*a)),E=Math.max(2,Math.trunc(wf*i)),v=Math.max(2,Math.trunc(wf*a)),z=L=>{let H=0,A=0;for(const F of L)A=F?A+1:0,A>H&&(H=A);return H/Math.max(1,L.length)},D=L=>{let H,A,F,R,P;if(L==="L"?(H=s,A=s+a,F=Math.max(0,s-E-I),R=Math.max(0,s-E),P=!1):L==="R"?(H=s,A=s+a,F=s+i+E,R=Math.min(o,s+i+E+I),P=!1):(H=Math.max(0,s-v-M),A=Math.max(0,s-v),F=s,R=s+i,P=!0),A<=H||R<=F)return 0;const Y=[];if(P)for(let O=F;O<R;O++){let Z=0;for(let B=H;B<A;B++)S(O,B)&&Z++;Y.push(Z/(A-H)>_f)}else for(let O=H;O<A;O++){let Z=0;for(let B=F;B<R;B++)S(B,O)&&Z++;Y.push(Z/(R-F)>_f)}return z(Y)},X={L:D("L"),R:D("R"),T:D("T")};return c.delete(),m.delete(),X}const Mw=6e3,Cw=8,bf=.5,Aw=.6;function Rw(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Na?Ba:1,a=Xe(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(Mw),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,l,h,c);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const b=Xe(e,y),$=new e.Mat;e.cvtColor(b,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute($,l,x,T);const S=[b,x,T],I=()=>{for(const ue of S)ue.delete();$.delete()};if(T.rows<8){I();continue}const M=new e.DMatchVectorVector;m.knnMatch(T,c,M,2);const E=[],v=[];for(let ue=0;ue<M.size();ue++){const re=M.get(ue);if(re.size()===2){const we=re.get(0);if(we.distance<Oa*re.get(1).distance){const Ce=x.get(we.queryIdx).pt,Ue=h.get(we.trainIdx).pt;E.push(Ce.x,Ce.y),v.push(Ue.x,Ue.y)}}}if(M.delete(),E.length/2<8){I();continue}const z=e.matFromArray(E.length/2,1,e.CV_32FC2,E),D=e.matFromArray(v.length/2,1,e.CV_32FC2,v),X=new e.Mat,L=e.findHomography(z,D,e.RANSAC,5,X);let H=0;for(let ue=0;ue<X.rows;ue++)H+=X.data[ue];const A=L.rows===3?[...L.data64F]:null;if(z.delete(),D.delete(),X.delete(),L.delete(),A===null||H<Cw){I();continue}const F=1/i,R=[[F*A[0],F*A[1],F*A[2]],[F*A[3],F*A[4],F*A[5]],[A[6],A[7],A[8]]],P=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ue,re])=>Ua(R,ue,re));if(!Da(P,t.width,t.height)){I();continue}const Y=Xe(e,t),O=e.matFromArray(3,3,e.CV_64F,R.flat()),Z=new e.Mat;e.warpPerspective(Y,Z,O,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const B=new e.Mat;e.cvtColor(Z,B,e.COLOR_RGB2GRAY);const q=new e.Mat;e.matchTemplate(B,$,q,e.TM_CCOEFF_NORMED);const U=q.data32F[0];if(Y.delete(),O.delete(),Z.delete(),B.delete(),q.delete(),U<bf){I();continue}const G=La(e,t,y,R),ne=Fa(G);p.push({id:g,confidence:Math.max(0,U),footprint:P,built:G!==null&&Math.max(G.L,G.R,G.T)>=Er,tuckRegion:Ga(P,ne)}),I()}}finally{o.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return p}function Fa(e){return e!==null&&e.R>=Er?["R"]:[]}function Ga(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=Pa*a;if(!(s>0))return null;const o=n.reduce((y,b)=>y+b[0],0)/n.length,u=n.reduce((y,b)=>y+b[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[b,$]=l[y],x=n[b],T=n[$];let S=-(T[1]-x[1]),I=T[0]-x[0];const M=(x[0]+T[0])/2,E=(x[1]+T[1])/2;S*(M-o)+I*(E-u)<0&&(S=-S,I=-I);const v=Math.hypot(S,I);v<=1e-6||(S=S/v*s,I=I/v*s,h.push([x[0]+S,x[1]+I],[T[0]+S,T[1]+I]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...p))-g}}function zw(e,t,n,r){const i=Ew(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>Ua(i.H,l,h));if(!Da(s,t.width,t.height))return null;const o=La(e,t,n,i.H);if(o===null)return null;const u=Fa(o);return{built:Math.max(o.L,o.R,o.T)>=Er,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const Ow=.88;function $f(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Pa*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*Ow),h=o-l;if(h<1)return null;const c=Xe(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],b=[0,1,2].flatMap(E=>[y[E*3],y[E*3+1],y[E*3+2]-s*y[E*3]-s*y[E*3+1]]),$=e.matFromArray(3,3,e.CV_64F,b),x=new e.Mat;e.warpPerspective(c,x,$,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,h,u)),S=new e.Mat;T.copyTo(S);const I=S.data,M=new Uint8ClampedArray(h*u*3);M.set(I.subarray(0,M.length));for(const E of[c,p,m,g,$,x,T,S])try{E.delete()}catch{}return{width:h,height:u,channels:3,data:M}}function Nw(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+s+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+o+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<Na?Ba:1,y=Xe(e,n),b=Xe(e,t),$=y.roi(new e.Rect(h,p,c-h,m-p)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(b,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const I=new e.ORB(mf),M=new e.KeyPointVector,E=new e.KeyPointVector,v=new e.Mat,z=new e.Mat,D=new e.Mat,X=[y,b,$,x,T,S,M,E,v,z,D],L=ue=>{for(const re of X)try{re.delete()}catch{}try{I.delete()}catch{}return ue};if(I.detectAndCompute(T,D,M,v),I.detectAndCompute(S,D,E,z),v.rows<8||z.rows<8)return L(null);const H=new e.BFMatcher(e.NORM_HAMMING),A=new e.DMatchVectorVector;H.knnMatch(v,z,A,2);const F=[],R=[];for(let ue=0;ue<A.size();ue++){const re=A.get(ue);if(re.size()===2){const we=re.get(0),Ce=re.get(1);if(we.distance<Oa*Ce.distance){const Ue=M.get(we.queryIdx).pt,Le=E.get(we.trainIdx).pt;F.push(Ue.x,Ue.y),R.push(Le.x,Le.y)}}}if(A.delete(),H.delete(),F.length/2<8)return L(null);const P=e.matFromArray(F.length/2,1,e.CV_32FC2,F),Y=e.matFromArray(R.length/2,1,e.CV_32FC2,R),O=new e.Mat,Z=e.findHomography(P,Y,e.RANSAC,5,O);let B=0;for(let ue=0;ue<O.rows;ue++)B+=O.data[ue];const q=Z.rows===3?[...Z.data64F]:null;if(P.delete(),Y.delete(),O.delete(),Z.delete(),q===null||B<gf)return L(null);const U=1/g,G=[[U,0,h],[0,U,p],[0,0,1]],ne=[0,1,2].map(ue=>[0,1,2].map(re=>G[ue][0]*q[re]+G[ue][1]*q[3+re]+G[ue][2]*q[6+re]));return L({H:ne,inliers:B})}const Bw=620;function Pw(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function xf(e,t,n,r){const i=vf(e,t,n,r);if(i!==null)return i;try{const[a,s,o,u]=r.map(I=>Math.trunc(I));if(Math.min(o,u)>=Bw||o<=0||u<=0)return null;const l=Math.trunc(o*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,s-h),m=Math.min(t.width,a+o+l),g=Math.min(t.height,s+u+h);if(m<=c||g<=p)return null;const y=Xe(e,t),b=y.roi(new e.Rect(c,p,m-c,g-p)),$=new e.Mat;e.resize(b,$,new e.Size((m-c)*2,(g-p)*2),0,0,e.INTER_CUBIC);const x=Pw(e,$);for(const I of[y,b,$])try{I.delete()}catch{}const T=[(a-c)*2,(s-p)*2,o*2,u*2],S=vf(e,x,n,T);return S===null?null:{...S,footprint:S.footprint.map(([I,M])=>[I*.5+c,M*.5+p])}}catch{return null}}function vf(e,t,n,r){const i=Nw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>Ua(i.H,$,x));if(!Da(s,t.width,t.height))return null;const o=Xe(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=Xe(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[o,u,l,h,c,p,m])try{$.delete()}catch{}if(g<bf)return null;const y=La(e,t,n,i.H);if(y===null)return null;const b=Fa(y);return{built:Math.max(y.L,y.R,y.T)>=Er,footprint:s,overflow:b,edgeScores:y,inliers:i.inliers}}function Dw(e,t,n,r=.03){let i=null,a=1/0;for(const s of e){const[o,u,l,h]=s;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=o-c&&t<=o+l+c&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[o,u,l,h])}}return i}const Uw=.3,Lw=.3;function Fw(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=Uw}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,h=Math.max(o,u,l)<Lw;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const kt=128,Wa=.5;function qa(e){const t=mn(e,kt,kt),n=kt*kt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Sf(e){const t=e[1]??0;return{built:t>=Wa,prob:t}}const Zn=120,Qn=179,Gw=1.3,Ww=3.6,qw=.45,Vw=6e-4,Hw=.02,jw=6e3,Kw=.78,Xw=1.25,Yw=2.4,Zw=.05,Qw=1.5,Jw=.5,e_=.9,t_=150,n_=18,r_=34,i_=90,a_=130,s_=.13,o_=.15,Mr="magistrates-guild",Va="merchants-guild";function u_(e,t){const n=Xe(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Zn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[Qn,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let b=1;b<m;b++){const $=c.intAt(b,0),x=c.intAt(b,1),T=c.intAt(b,2),S=c.intAt(b,3),I=c.intAt(b,4),M=I/g;M<Vw||M>Hw||I/Math.max(T*S,1)<qw||y.push({x:$,y:x,w:T,h:S})}return c.delete(),{blobs:y,mask:o,maskWidth:t.width}}function l_(e,t,n,r,i,a,s){const o=e,u=a,l=s,h=i;if(!h.gray){const U=Xe(e,r);h.gray=new o.Mat,o.cvtColor(U,h.gray,o.COLOR_RGB2GRAY),U.delete(),h.k=new o.KeyPointVector,h.d=new o.Mat;const G=new o.Mat;u.detectAndCompute(h.gray,G,h.k,h.d),G.delete()}const c=n,p=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,p,m,g),p.delete();const y=U=>(m.delete(),g.delete(),U);if(h.d.rows<8||g.rows<8)return y(null);const b=new o.DMatchVectorVector;l.knnMatch(h.d,g,b,2);const $=[],x=[];for(let U=0;U<b.size();U++){const G=b.get(U);if(G.size()===2){const ne=G.get(0);if(ne.distance<Kw*G.get(1).distance){const ue=h.k.get(ne.queryIdx).pt,re=m.get(ne.trainIdx).pt;$.push(ue.x,ue.y),x.push(re.x,re.y)}}}if(b.delete(),$.length/2<8)return y(null);const T=o.matFromArray($.length/2,1,o.CV_32FC2,$),S=o.matFromArray(x.length/2,1,o.CV_32FC2,x),I=new o.Mat,M=o.findHomography(T,S,o.RANSAC,5,I);if(T.delete(),S.delete(),I.delete(),M.rows!==3)return M.delete(),y(null);const E=[...M.data64F],v=(U,G)=>{const ne=E[6]*U+E[7]*G+E[8];return[(E[0]*U+E[1]*G+E[2])/ne,(E[3]*U+E[4]*G+E[5])/ne]},z=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([U,G])=>v(U,G));if(z.some(U=>!Number.isFinite(U[0])||!Number.isFinite(U[1])))return M.delete(),y(null);const D=z.map((U,G)=>{const ne=z[(G+1)%4];return Math.hypot(ne[0]-U[0],ne[1]-U[1])}),X=Math.min(...D);if(X<1)return M.delete(),y(null);const L=Math.max(...D)/X;let H=0;for(let U=0;U<4;U++){const[G,ne]=z[U],[ue,re]=z[(U+1)%4];H+=G*re-ue*ne}const A=t,F=Math.abs(H/2)/(A.rows*A.cols);if(L<Xw||L>Yw||F<Zw||F>Qw)return M.delete(),y(null);const R=new o.Mat;o.warpPerspective(A,R,M,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),M.delete();const P=new o.Mat;o.cvtColor(R,P,o.COLOR_RGB2GRAY),R.delete();const Y=Math.trunc(r.height/2),O=P.roi(new o.Rect(0,0,r.width,Y)),Z=h.gray.roi(new o.Rect(0,0,r.width,Y)),B=new o.Mat;o.matchTemplate(O,Z,B,o.TM_CCOEFF_NORMED);const q=B.data32F[0];return O.delete(),Z.delete(),B.delete(),P.delete(),y(q)}function d_(e,t,n){let r,i;if(n===Mr)r=Va,i=s_;else if(n===Va)r=Mr,i=o_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let h=0,c=null;for(const[p,m]of[[0,l],[l,o]]){let g=0,y=0;for(let $=s;$<s+u;$++)for(let x=a+p;x<a+m;x++){const T=($*e.width+x)*e.channels,{h:S,s:I,v:M}=bt(e.data[T],e.data[T+1],e.data[T+2]);if(S>=Zn&&S<=Qn&&I>=30&&I<=170&&M<=170)continue;g++,(r===Va?S>=n_&&S<=r_&&I>=i_&&M>=a_:S>=95&&S<=130&&I>=80)&&y++}if(g<20)continue;const b=y/g;b>h&&(h=b,c={x:a+p,y:s,w:m-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const c_=1.7,h_=140,p_=170,f_=.2,m_=.1,Tf=240,If=80,kf=60,g_=50,Ef="scientists-guild",Mf="tacticians-guild",Cr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function y_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let I=0;for(let M=0;M<a;M++)e[(i+S)*t+r+M]>0&&I++;o[S]=I/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<Gw||p>Ww)return[];if(p>=c_)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,y=[];let b=0;for(let S=-4;S<=4;S++){const I=Math.exp(-(S*S)/(2*g*g));y.push(I),b+=I}for(let S=0;S<s;S++){let I=0;for(let M=-4;M<=4;M++){const E=Math.min(s-1,Math.max(0,S+M));I+=o[E]*y[M+4]}m[S]=I/b}const $=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let T=l+Math.trunc(c/2);if(x>$){let S=1/0;for(let I=$;I<x;I++)m[I]<S&&(S=m[I],T=I)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:h-T}]}function w_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let h=0;h<s;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*s+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function __(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=bt(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=h_&&s<=p_&&n++)}return t===0?0:n/t}function b_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=bt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=Zn&&a<=Qn)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Cf(e,t){const n=Xe(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Tf,If),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Tf,height:If,channels:3,data:i}}function $_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Af(e,t){const n=$_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:b,s:$,v:x}=bt(n.data[y],n.data[y+1],n.data[y+2]);!(b>=Zn&&b<=Qn&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const s=a<20,o=Xe(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let h=0,c=0,p=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(h+=l[g*3]*100/255,c+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,c/m,p/m]}function x_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h,s:c,v:p}=bt(e.data[l],e.data[l+1],e.data[l+2]);h>=Zn&&h<=Qn&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function v_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=bt(e.data[i],e.data[i+1],e.data[i+2]);s>=kf&&o>=g_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<kf&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function S_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function Rf(e,t){const n=Xe(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function T_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Cf(e,a);n.set(i,Rf(e,s)),Cr.includes(i)&&r.set(i,Af(e,s))}return{gray:n,warmLab:r}}function I_(e,t,n){const r=Cf(e,t),i=x_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Mr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Ef;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Mf;const a=v_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=Mr;else if(o==="green")u=Ef;else if(o==="red")u=Mf;else{const l=Rf(e,r);let h="",c=-2;for(const p of Cr){const m=n.gray.get(p);if(m===void 0)continue;const g=S_(l,m);g>c&&(c=g,h=p)}u=h||Cr[0]}if(Cr.includes(u)&&n.warmLab.size>0){const l=Af(e,r);let h=u,c=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,h=p)}return h}return u}function k_(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=u_(e,t);if(s.length===0||n.size===0)return a;const l=e,h=new l.ORB(jw),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const b of n.keys())p.set(b,{});const m=Xe(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const $=b.x+Math.trunc(b.w/2),x=b.y+Math.trunc(b.h/2),T=Math.max(t_,Math.trunc(e_*Math.max(b.w,b.h))),S=Math.max(0,$-T),I=Math.max(0,x-T),M=Math.min(t.width,$+T),E=Math.min(t.height,x+T);if(M-S<16||E-I<16)continue;const v=m.roi(new l.Rect(S,I,M-S,E-I)),z=new l.Mat;l.cvtColor(v,z,l.COLOR_RGB2GRAY);let D=null,X=-2;for(const[F,R]of n){if(r!==void 0&&Date.now()>r)break;const P=l_(e,v,z,R,p.get(F),h,c);P!==null&&P>X&&(X=P,D=F)}v.delete(),z.delete();const L=new Set;if(D!==null&&X>=Jw){a.push({id:D,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),L.add(D);const F=d_(t,b,D);F&&(a.push({id:F.id,boundingBox:{x:F.box.x,y:F.box.y,width:F.box.w,height:F.box.h},confidence:.9}),L.add(F.id))}if(i===void 0||i.size===0)continue;const H=y_(o,u,b);if(H.length!==2)continue;const A=H.map(F=>w_(t,F));if(!A.some(F=>F.width*F.height===0||b_(F)<m_))for(let F=0;F<H.length;F++){const R=A[F];if(__(R)<f_)continue;g===null&&(g=T_(e,i));const P=I_(e,R,g);if(P&&!L.has(P)){L.add(P);const Y=H[F];a.push({id:P,boundingBox:{x:Y.x,y:Y.y,width:Y.w,height:Y.h},confidence:1})}}}}finally{m.delete();for(const b of p.values()){const $=b;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const zf=128,E_=.56,M_=15,C_=.58,A_=70,R_=50,z_=.12,O_=.2,N_=.1,B_=.17,Of=.15;function P_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Nf(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),h=Math.max(0,o-u),c=Math.min(n,s+u),p=Math.min(r,o+u),m=c-l,g=p-h,y=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const $=((b+h)*n+l)*i;y.set(a.subarray($,$+m*i),b*m*i)}return{width:m,height:g,channels:i,data:y}}function D_(e){const t=Nf(e,E_),n=My(t),r=cf(n,zf,zf);return Cy(r)}function U_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,s+=l*l,o+=h*h}return a/(Math.sqrt(s*o)+1e-6)}function L_(e){const t=new Map([["masonry",0],["strategy",0]]),n=Nf(e,C_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:b}=bt(s[m],s[m+1],s[m+2]);y>=A_&&b>=R_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/o,c=l/o;return h>=z_&&t.set("masonry",Of*Math.min(1,h/O_)),c>=N_&&t.set("strategy",Of*Math.min(1,c/B_)),t}function F_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=D_(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=M_)a.push(zy(n,l,i));const s=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const m=U_(p,h);m>c&&(c=m)}s.set(l,c)}for(const[l,h]of L_(e))h>0&&s.has(l)&&s.set(l,s.get(l)+h);let o="",u=-1/0;for(const[l,h]of s)h>u&&(o=l,u=h);return[o,u]}const jt=224,G_=512,W_=[.485,.456,.406],q_=[.229,.224,.225];function V_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function H_(e){const t=mn(e,jt,jt),n=jt*jt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-W_[a])/q_[a];return r}function j_(e){const t=3*jt*jt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(H_(Ht(e,r)),r*t);return n}function K_(e,t=G_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function X_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const In=96,Y_=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Z_=.45;function Q_(e){const t=mn(e,In,In),n=In*In,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function J_(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Z_?Y_[t]??"":"",prob:n}}const kn=128,eb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],tb=.5,nb=.9;function rb(e){const t=mn(e,kn,kn),n=kn*kn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function ib(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let s=0;s<t;s++)for(let o=0;o<n;o++){const u=s,h=((n-1-o)*t+u)*r,c=(s*n+o)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function ab(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=ib(n);return n}function sb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function ob(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:ab(e,i),s=await t(rb(a)),o=sb(s);o.prob>r&&(r=o.prob,n=o.index)}return{id:r>=tb?eb[n]??"":"",prob:r}}const En=96,ub=[1,2,3,4,5,6,7],lb=.8;function db(e){const t=mn(e,En,En),n=En*En,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function cb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:ub[t],prob:e[t]}}const Mn=128,Bf=.35,hb=["fp","laurel"],pb=.85;function fb(e){const t=mn(e,Mn,Mn),n=Mn*Mn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function mb(e){return e[hb.indexOf("fp")]}const gb=2.25,yb=3,wb=1.15,_b=.5,bb=2.5,$b=.75,xb=2.25,vb=1.3,Sb=.77;function Ar(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function Tb(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),t.length<=2)return t;const n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Pf(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[(a+1)%i];if(o>t!=l>t){const h=(u-s)*(t-o)/(l-o)+s;e<h&&(r=!r)}}return r}function Ib(e,t,n){if(n.length>=3&&Pf(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[s,o]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-s,c=l-o,p=h*h+c*c,m=p===0?0:Math.max(0,Math.min(1,((e-s)*h+(t-o)*c)/p));r=Math.min(r,Math.hypot(e-(s+m*h),t-(o+m*c)))}return r}function kb(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function Eb(e,t,n){const[r,i]=e,a=t[0]-r,s=t[1]-i;if(a===0&&s===0)return!1;const[o,u,l,h]=n;let c=0,p=1;const m=[[-a,r-o],[a,l-r],[-s,i-u],[s,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const b=y/g;if(g<0?c=Math.max(c,b):p=Math.min(p,b),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const Ha=e=>e.box[3]/Math.max(1,e.box[2]),Pt=e=>Ha(e)>wb,Cn=e=>Ha(e)>=vb||Ha(e)<=Sb;function ja(e){const[t,n,r,i]=e.box;if(r>=i){const s=7*i;return[t,n-s,r,i+2*s]}const a=7*r;return[t-a,n,r+2*a,i]}function Mb(e,t,n,r,i){const a=new Set(t),s=[...e.map((R,P)=>({box:[R[0],R[1],R[2],R[3]],kind:a.has(P)?"card":"tucked",src:["banner",P]})),...n.map((R,P)=>({box:[R[0],R[1],R[2],R[3]],kind:"wonder",src:["wonder",P]}))],o=e.map(()=>"player"),u=n.map(()=>"player");if(s.length===0)return{bannerOwner:o,wonderOwner:u,opponentFound:!1,hulls:[],pointOwner:()=>"player"};const l=s.map(R=>[R.box[0]+R.box[2]/2,R.box[1]+R.box[3]/2]);let h=s.filter(R=>R.kind!=="wonder").map(R=>Math.hypot(R.box[2],R.box[3])).sort((R,P)=>R-P);h.length===0&&(h=s.map(R=>Math.hypot(R.box[2],R.box[3])).sort((R,P)=>R-P));const c=h[Math.floor(h.length/2)],p=(gb*c)**2,m=s.map((R,P)=>P),g=R=>{let P=R;for(;m[P]!==P;)m[P]=m[m[P]],P=m[P];return P},y=s.map((R,P)=>R.kind==="card"?P:-1).filter(R=>R>=0),b=s.map((R,P)=>R.kind!=="card"?P:-1).filter(R=>R>=0);for(let R=0;R<y.length;R+=1)for(let P=R+1;P<y.length;P+=1){const Y=y[R],O=y[P],Z=s[Y],B=s[O];if(Cn(Z)&&Cn(B)&&Pt(Z)!==Pt(B))continue;const q=l[Y][0]-l[O][0],U=l[Y][1]-l[O][1],G=q*q+U*U;let ne=G<=p;!ne&&Cn(Z)&&Cn(B)&&Pt(Z)===Pt(B)&&G<=(4*c)**2&&(ne=Ar(ja(Z),ja(B))<=.5*c),ne&&(m[g(Y)]=g(O))}for(let R=0;R<b.length;R+=1)for(let P=R+1;P<b.length;P+=1){const Y=b[R],O=b[P];Ar(s[Y].box,s[O].box)<=$b*c&&(m[g(Y)]=g(O))}const $=new Map;for(const R of b){const P=g(R);$.set(P,[...$.get(P)??[],R])}const x=new Map;for(const R of y){const P=g(R);x.set(P,[...x.get(P)??[],R])}for(const R of $.values()){const P=R.filter(B=>s[B].kind==="wonder"&&Cn(s[B])).map(B=>Pt(s[B])),Y=P.length>0?P.filter(Boolean).length*2>P.length:null,O=[];for(const[B,q]of x){let U=Number.POSITIVE_INFINITY;for(const ue of R)for(const re of q)U=Math.min(U,Ar(s[ue].box,s[re].box));if(U>xb*c)continue;const ne=q.filter(ue=>Pt(s[ue])).length/q.length>=.5;Y!==null&&ne!==Y||O.push([B,U,ne])}if(O.length===0)continue;const Z=new Set(O.map(B=>B[2]));if(O.length>=2&&Z.size===1&&Y!==null){const B=O[0][0];for(const[q]of O.slice(1))m[g(q)]=g(B);m[g(R[0])]=g(B)}else{const B=O.reduce((q,U)=>U[1]<q[1]?U:q);m[g(R[0])]=g(B[0])}}let T=new Map;for(let R=0;R<s.length;R+=1){const P=g(R);T.set(P,[...T.get(P)??[],R])}const S=s.map((R,P)=>R.kind==="wonder"?P:-1).filter(R=>R>=0);if(S.length>0){const R=(Y,O)=>{const[Z,B,q,U]=ja(s[Y]),[G,ne,ue,re]=s[O].box,we=Math.max(0,Math.min(Z+q,G+ue)-Math.max(Z,G)),Ce=Math.max(0,Math.min(B+U,ne+re)-Math.max(B,ne));return we*Ce>=.9*s[Y].box[2]*s[Y].box[3]},P=new Map;for(let Y=0;Y<s.length;Y+=1)if(!(s[Y].kind!=="card"||!Cn(s[Y])))for(const O of S){const Z=Ar(s[Y].box,s[O].box);if(Z<=.8*c&&Pt(s[Y])!==Pt(s[O])&&R(Y,O)){const B=P.get(O);(!B||Z<B[1])&&P.set(O,[Y,Z])}}for(const[Y,[O]]of P){const Z=g(Y);for(const[B,q]of T){const U=q.indexOf(O);if(U>=0&&B!==Z){q.splice(U,1),T.set(Z,[...T.get(Z)??[],O]),s[O].kind="tucked";break}}}T=new Map([...T].filter(([,Y])=>Y.length>0))}const I=R=>R.filter(P=>s[P].kind==="card").length,M=R=>{const P=R.filter(Y=>s[Y].kind==="card"||s[Y].kind==="wonder");return P.length===0?null:P.filter(Y=>Pt(s[Y])).length/P.length},E=R=>[R.reduce((P,Y)=>P+l[Y][0],0)/R.length,R.reduce((P,Y)=>P+l[Y][1],0)/R.length],v=[i[0]/2,i[1]/2],z=[...T.values()].sort((R,P)=>{const Y=I(R),O=I(P);if(Y!==O)return O-Y;const Z=Math.hypot(E(R)[0]-v[0],E(R)[1]-v[1]),B=Math.hypot(E(P)[0]-v[0],E(P)[1]-v[1]);return Z-B}),D=E(z[0]),X=M(z[0]),L=[],H=[];let A=!1;return z.forEach((R,P)=>{let Y;if(P===0||I(R)<yb)Y="player";else{const B=M(R),q=B!==null&&X!==null&&Math.abs(B-X)>=_b,U=E(R),G=r.some(ne=>Eb(D,U,ne));Y=q||G?"opponent":"player"}Y==="opponent"&&(A=!0);const O=[],Z=[];for(const B of R){const[q,U,G,ne]=s[B].box;O.push([q,U],[q+G,U],[q,U+ne],[q+G,U+ne]),Z.push(s[B].box);const[ue,re]=s[B].src;ue==="banner"?o[re]=Y:u[re]=Y}L.push([Y,Tb(O)]),H.push([Y,Z])}),{bannerOwner:o,wonderOwner:u,opponentFound:A,hulls:L,pointOwner:(R,P)=>{if(L.length===0)return"player";const Y=c>0?bb*c:Number.POSITIVE_INFINITY,O=U=>Math.min(...H[U][1].map(G=>kb(R,P,G))),Z=L.map(([,U],G)=>U.length>=3&&Pf(R,P,U)?G:-1).filter(U=>U>=0);if(Z.length>0){const U=Z.reduce((G,ne)=>O(ne)<O(G)?ne:G);return L[U][0]}let B=-1,q=Number.POSITIVE_INFINITY;return L.forEach(([,U],G)=>{const ne=Ib(R,P,U);ne<q&&(B=G,q=ne)}),B>=0&&q<=Y?L[B][0]:"none"}}}const Cb=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Ab=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],Rb=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],zb=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],Ob=[...Ab,...Rb,...zb,...Cb];Object.fromEntries(Ob.map(e=>[e.id,e]));const Nb=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const De="/7wd-scorer/models/";let Df=!1;const Rr=new Map;function Uf(){var e;Df||(Oe.wasm.wasmPaths="/7wd-scorer/ort/",Oe.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Df=!0)}const Ka=new Set;function Bb(e){Uf();let t=Rr.get(e);return t===void 0&&(t=it.create(`${De}${It[e].onnx}`,{executionProviders:Ka.has(e)?["wasm"]:["webgpu","wasm"]}),Rr.set(e,t),t.catch(()=>Rr.delete(e))),t}let Xa=null,Ya=null;const Pb=.75,Db=4,Ub=.65,Lb=3e4;let Za=null;function Qa(){return Za===null&&(Za=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Za}const Lf=new Map;function Ja(e){let t=Lf.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${De}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),Lf.set(e,t)),t}function es(e){return Ja(`wonder-refs/${e}.jpg`)}const Ff=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Fb(){const e=new Map;for(const t of Ff){const n=await Ja(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function Gb(){const e=new Map;for(const t of Ff){const n=await Ja(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const Wb=.6,qb=12,Vb=45e3;let ts=null;function Gf(){return ts===null&&(Uf(),ts=(async()=>{try{const[e,t,n,r]=await Promise.all([it.create(`${De}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),it.create(`${De}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${De}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${De}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:hw(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ts}async function Hb(e,t){const n=Math.max(cw/Bt,t.width/t.height),{tensor:r,width:i}=fw(t,n),a={[e.rec.inputNames[0]]:new Ge("float32",r,[1,3,Bt,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,l]=s.dims,h=s.data,c=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const b=m*l;for(let $=0;$<l;$++){const x=h[b+$];x>y&&(y=x,g=$)}c[m]=g,p[m]=y}return pw(c,p,e.charset)}async function jb(e,t){const n=await Gf();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+Vb;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=Ht(e,s),u=tw(o),l={[n.det.inputNames[0]]:new Ge("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=ow(h.data,u,o.width,o.height).slice(0,qb);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const m=uw(o,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await Hb(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<Wb||g.trim().length<Db)continue;const b=$w(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<Pb||b.kind!=="wonder")continue;const $=r.get(b.id);($===void 0||b.confidence>$.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:Wf(p,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Wf(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),l=Math.min(...o),h=Math.min(...u);return{x:l,y:h,width:Math.max(...o)-l,height:Math.max(...u)-h}}function Kb(){return Ya===null&&(Ya=fetch(`${De}laurel_gallery.json`).then(async e=>e.ok?Wy(await e.json()):[]).catch(()=>[])),Ya}function Xb(e,t,n,r){return zr(e,t-r,n-r,2*r,2*r)}function zr(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),h=Math.max(0,u-s),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+s)*e.width+(m+a))*e.channels,y=(p*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:c}}function Yb(){return Xa===null&&(Xa=fetch(`${De}token_templates.json`).then(async e=>e.ok?P_(await e.json()):new Map).catch(()=>new Map)),Xa}let ns=null;function Zb(){return ns===null&&(ns=(async()=>{try{const e=await fetch(`${De}token_embed_index.json`);if(!e.ok)return null;const t=V_(await e.json());return{session:await it.create(`${De}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),ns}const Qb=.92;let rs=null;function Jb(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${De}guild_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${De}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),rs}let is=null;function e1(){return is===null&&(is=(async()=>{try{return(await fetch(`${De}laurel_digit.onnx`,{method:"HEAD"})).ok?await it.create(`${De}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),is}let as=null;function t1(){return as===null&&(as=(async()=>{try{return(await fetch(`${De}laurel_filter.onnx`,{method:"HEAD"})).ok?await it.create(`${De}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),as}async function n1(e,t,n){const[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(Bf*o),h=Math.trunc(Bf*u),c=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,s+h),y=zr(e,c,p,m-c,g-p);if(y.width<=0||y.height<=0)return null;try{const b=fb(y),$=await n.run({[n.inputNames[0]]:new Ge("float32",b,[1,3,Mn,Mn])});return mb($[n.outputNames[0]].data)}catch{return null}}let ss=null;function qf(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${De}tuck_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${De}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ss}const Vf=.2,r1=.3,Hf=.25,i1=.1;let os=null;function a1(){return os===null&&(os=(async()=>{try{return(await fetch(`${De}track_band.onnx`,{method:"HEAD"})).ok?await it.create(`${De}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),os}let us=null;function s1(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Hf)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=o[2]/o[3];if(!(Math.abs(Math.log(h))<=Hf)&&r>1==h>1)return!0}return!1}const o1=.4;function u1(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function l1(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||u1(a,u)>=o1)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function d1(){return us===null&&(us=(async()=>{try{return(await fetch(`${De}tuck_box.onnx`,{method:"HEAD"})).ok?await it.create(`${De}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),us}async function c1(e,t,n){const[r,i,a,s]=t;if(a<=0||s<=0)return null;const o=Math.round(a*Vf),u=Math.round(s*Vf),l=Math.max(0,Math.round(r-o)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+o)),p=Math.min(e.height,Math.round(i+s+u)),m=c-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,b=new Uint8ClampedArray(m*g*y);for(let T=0;T<g;T++){const S=((h+T)*e.width+l)*y;b.set(e.data.subarray(S,S+m*y),T*m*y)}const $={width:m,height:g,channels:y,data:b};let x=null;for(let T=0;T<4;T++){const S=T===0?$:Ht($,T),I=S.width,M=I-Math.floor(r1*I),E=I-M;if(E<=0)continue;const v=new Uint8ClampedArray(E*S.height*S.channels);for(let H=0;H<S.height;H++){const A=(H*I+M)*S.channels;v.set(S.data.subarray(A,A+E*S.channels),H*E*S.channels)}const z={width:E,height:S.height,channels:S.channels,data:v},D=qa(z),L=(await n.run({[n.inputNames[0]]:new Ge("float32",D,[1,3,kt,kt])}))[n.outputNames[0]].data[1]??0;x=x===null?L:Math.max(x,L)}return x}let ls=null;function h1(){return ls===null&&(ls=(async()=>{try{return(await fetch(`${De}wonder_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${De}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ls}async function p1(e,t,n,r,i,a){var p;const s=(m,g,y,b)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),T=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+b)),I=T-$,M=S-x;if(I<=0||M<=0)return null;const E=t.channels,v=new Uint8ClampedArray(I*M*E);for(let z=0;z<M;z++){const D=((x+z)*t.width+$)*E;v.set(t.data.subarray(D,D+I*E),z*I*E)}return{width:I,height:M,channels:E,data:v}},o=async m=>(await r.run({[r.inputNames[0]]:new Ge("float32",m,[1,3,kn,kn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,b,$]=m;if(b<=0||$<=0)continue;const x=s(g,y,b,$);if(x===null)continue;const{id:T,prob:S}=await ob(x,o);if(T===""||S<nb)continue;const I=u.get(T);(I===void 0||S>I.prob)&&u.set(T,{prob:S,box:m})}const l=[],h=await qf(),c=await d1();for(const[m,{prob:g,box:y}]of u){const[b,$,x,T]=y;let S={x:Math.round(b),y:Math.round($),width:Math.round(x),height:Math.round(T)},I=null,M=[],E=null;if(Date.now()<i)try{const F=await es(m);if(F!==null){const R=xf(e,t,F,y);if(R!==null){I=R.footprint,M=R.overflow;const P=I.map(B=>B[0]),Y=I.map(B=>B[1]),O=Math.max(0,Math.round(Math.min(...P))),Z=Math.max(0,Math.round(Math.min(...Y)));if(S={x:O,y:Z,width:Math.min(t.width,Math.round(Math.max(...P)))-O,height:Math.min(t.height,Math.round(Math.max(...Y)))-Z},h!==null)try{const B=$f(e,t,F,I);if(B!==null){const q=qa(B),U=await h.run({[h.inputNames[0]]:new Ge("float32",q,[1,3,kt,kt])});E=Sf(U[h.outputNames[0]].data).prob}}catch{}}}}catch(F){console.warn(`[wonders-cls] ${m} registration failed:`,F)}const v=I!==null?Ga(I,M):null,z=[];if(E!==null&&z.push(E>=Wa?1:0),c!==null)try{const F=await c1(t,y,c);F!==null&&z.push(F>=Wa?1:0)}catch{}const D=v??S,X=a.some(F=>{const R=F.box[0]+F.box[2]/2,P=F.box[1]+F.box[3]/2;return R>=D.x&&R<=D.x+D.width&&P>=D.y&&P<=D.y+D.height});z.push(X?1:0);let L=z.length>0&&z.reduce((F,R)=>F+R,0)*2>z.length;L&&s1(D,S,a)&&(L=!1);const H={id:m,name:((p=Nb[m])==null?void 0:p.name)??m,builtWithCardUnderneath:L,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},A=v??S;l.push({obj:H,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height}})}return l}async function f1(e,t){const n=await Zb();if(n!==null)try{const r=j_(e),i=new Ge("float32",r,[4,3,jt,jt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=X_(n.index,K_(s));return u<Qb?["",-1]:[o,u]}catch{}return F_(e,t)}async function ds(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Kt(e,t){const n=It[e],{tensor:r,params:i}=Qp(t,n.input),a=async()=>{const s=await Bb(e),o={[s.inputNames[0]]:new Ge("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(Ka.has(e))throw s;return Ka.add(e),Rr.delete(e),await a()}}const m1=6,g1=2,y1=5,w1=2;async function _1(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await ds(e),r=await Kt("banner",n),i=sf(r.rows,r.params,It.banner.conf);if(t.banners=i.length,i.length>=m1)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Kt("laurel",n),s=Ca(a.rows,a.params,It.laurel.conf);if(t.laurels=s.length,s.length>=g1)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Kt("coin",n),u=rf(o.rows,o.params,It.coin.conf);return t.coins=u.length,u.length>=y1?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=w1?{...t,kind:"board",confidence:.4}:t}function b1(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function cs(e,t,n,r,i=()=>{},a="player"){const s={},o=[],u=[],l=[],h=[],c=[],p=[];let m=0,g=0,y=0,b=0,$=0;for(const I of e){$+=1;const M=`${t} photo ${$}/${e.length}`;r(`${M}: reading pixels…`,.01);const E=await ds(I);r(`${M}: card banners…`,.04);const v=await Kt("banner",E);let z=sf(v.rows,v.params,It.banner.conf);r(`${M}: progress tokens…`,.08);let D=[];const X=await a1();if(X!==null)try{const j=Qp(E,1280),J=await X.run({[X.inputNames[0]]:new Ge("float32",j.tensor,[1,3,1280,1280])});D=Ca(J[X.outputNames[0]].data,j.params,i1)}catch{}const L=await Kt("token",E),H=await Yb(),A=l.length,F=[];for(const j of sy(L.rows,L.params,It.token.conf)){if(F.push({cx:j.cx,cy:j.cy,r:j.r}),D.some(([le,de,Ie,ce])=>j.cx>=le&&j.cx<=Ie&&j.cy>=de&&j.cy<=ce))continue;const[J,te]=await f1(df(E,j),H);J===""&&te<0?F.pop():J===""?g+=1:l.some(le=>le.id===J)||l.push({id:J,center:[j.cx,j.cy],radius:j.r,confidence:Math.round(te*1e4)/1e4})}r(`${M}: coins…`,.14);const R=await Kt("coin",E),P=rf(R.rows,R.params,It.coin.conf).filter(j=>!F.some(J=>(j.cx-J.cx)**2+(j.cy-J.cy)**2<=j.r*j.r)),Y=Ey(E,P),O=[];if(P.forEach((j,J)=>{const te=Y[J];O.push({denomination:te,center:[j.cx,j.cy],radius:j.r,denomSource:"colour"})}),O.length>=2){const j=O.map(te=>te.radius).sort((te,le)=>te-le),J=j.length%2===1?j[(j.length-1)/2]:(j[j.length/2-1]+j[j.length/2])/2;if(J>0)for(const te of O)te.radius/J>2&&(te.suspect=!0,te.suspectReason=`radius ${te.radius}px is ${(te.radius/J).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const Z=h.length,B=[],q=Date.now()+Lb;let U=null,G=null;const ne=()=>(G===null&&(G=(async()=>{try{const{rows:j,params:J}=await Kt("wonder",E);return Jp(j,J,It.wonder.conf,1).map(te=>te.box)}catch{return[]}})()),G),ue=[];let re=!1;const we=await h1();if(we!==null){const j=await ne();if(j.length>0&&(U=await Qa(),U!==null)){r(`${M}: identifying wonders…`,.35);const J=await p1(U,E,j,we,q,z);for(const te of J)h.some(le=>le.id===te.obj.id)||(h.push(te.obj),ue.push({obj:te.obj,edgeScores:te.edgeScores,zone:te.zone}),B.push(te.zone));re=J.length>0}}re||r(`${M}: wonder names…`,.2);const Ce=re?{wonders:[],aborted:!1}:await jb(E,(j,J)=>r(`${M}: ${j}`,.2+.35*(J??0)));U===null&&(U=Ce.wonders.length>0?await Qa():null);for(const j of Ce.wonders){let J=null;if(U!==null&&Date.now()<q){r(`${M}: registering ${j.name}…`,.6);try{const te=await es(j.id);if(te!==null){let le=zw(U,E,te,[[j.nameBox.x,j.nameBox.y],[j.nameBox.x+j.nameBox.width,j.nameBox.y],[j.nameBox.x+j.nameBox.width,j.nameBox.y+j.nameBox.height],[j.nameBox.x,j.nameBox.y+j.nameBox.height]]);if(le===null){const de=await ne(),Ie=Dw(de,j.nameBox.x+j.nameBox.width/2,j.nameBox.y+j.nameBox.height/2);Ie!==null&&(le=xf(U,E,te,Ie))}if(le!==null){let de=le.built,Ie=!1;const ce=await qf();if(ce!==null)try{const Re=$f(U,E,te,le.footprint);if(Re!==null){const Je=qa(Re),Ye=await ce.run({[ce.inputNames[0]]:new Ge("float32",Je,[1,3,kt,kt])});de=Sf(Ye[ce.outputNames[0]].data).built,Ie=!0}}catch{}const me=le.footprint.map(Re=>Re[0]),Me=le.footprint.map(Re=>Re[1]),ke=Math.max(0,Math.round(Math.min(...me))),qe=Math.max(0,Math.round(Math.min(...Me)));J={built:de,boundingBox:{x:ke,y:qe,width:Math.min(E.width,Math.round(Math.max(...me)))-ke,height:Math.min(E.height,Math.round(Math.max(...Me)))-qe},tuckRegion:Ga(le.footprint,le.overflow),edgeScores:le.edgeScores,builtByTuck:Ie}}}}catch(te){console.warn(`[wonders-reg] ${j.id} failed:`,te)}}if(J!==null){const te=J.tuckRegion??J.boundingBox;B.push({x0:te.x,y0:te.y,x1:te.x+te.width,y1:te.y+te.height})}else{const te=Math.max(8,j.nameBox.height),le=Math.round(j.nameBox.width*.15);B.push({x0:j.nameBox.x-le,y0:j.nameBox.y-te*2.5,x1:j.nameBox.x+j.nameBox.width+le,y1:j.nameBox.y+j.nameBox.height+te*2.5})}if(!h.some(te=>te.id===j.id)){const te=(J==null?void 0:J.builtByTuck)===!0,le=te?J.built:!1,de=!te&&(J==null?void 0:J.built)===!0,Ie={id:j.id,name:j.name,builtWithCardUnderneath:le,boundingBox:(J==null?void 0:J.boundingBox)??{x:0,y:0,width:0,height:0},...J!=null&&J.tuckRegion?{tuckRegion:J.tuckRegion}:{},confidence:j.confidence,...de?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(Ie),ue.push({obj:Ie,edgeScores:J&&!J.builtByTuck?J.edgeScores:null,zone:B[B.length-1]})}}if(!re){const j=Fw(ue.map(J=>({built:J.obj.builtWithCardUnderneath,edgeScores:J.edgeScores,zone:J.zone})),z.map(J=>[J.box[0]+J.box[2]/2,J.box[1]+J.box[3]/2]));for(const J of j){const te=ue[J];te.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${te.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(z.length>0){const J=new Set(j);for(let te=0;te<ue.length;te++){const le=ue[te];if(J.has(te)||!le.obj.builtWithCardUnderneath)continue;const de=le.obj.tuckRegion;if(de===void 0)continue;if(!z.some(ce=>{const me=ce.box[0]+ce.box[2]/2,Me=ce.box[1]+ce.box[3]/2;return me>=de.x&&me<=de.x+de.width&&Me>=de.y&&Me<=de.y+de.height})){const ce=le.obj;ce.builtWithCardUnderneath=!1,ce.suspect=!0,ce.suspectReason="built-unconfirmed"}}}}if(Ce.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${M}: the wonder-name read ran out of its time budget on this device — ${Ce.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),U!==null&&Ce.wonders.length>0&&Date.now()<q)try{const j=await Gf(),J=(j==null?void 0:j.catalog.filter(le=>le.kind==="wonder").map(le=>le.id))??[],te=new Map;for(const le of J)if(!h.some(de=>de.id===le)){const de=await es(le);de!==null&&te.set(le,de)}if(te.size>0){r(`${M}: searching occluded wonders…`,.7);const le=Rw(U,E,te,q);for(const de of le){const Ie=de.footprint.map(Ye=>Ye[0]),ce=de.footprint.map(Ye=>Ye[1]),me=Math.max(0,Math.round(Math.min(...Ie))),Me=Math.max(0,Math.round(Math.min(...ce))),ke={x:me,y:Me,width:Math.min(E.width,Math.round(Math.max(...Ie)))-me,height:Math.min(E.height,Math.round(Math.max(...ce)))-Me};if(h.some(Ye=>{const nt=Ye.boundingBox,Be=Math.max(0,Math.min(nt.x+nt.width,ke.x+ke.width)-Math.max(nt.x,ke.x)),rt=Math.max(0,Math.min(nt.y+nt.height,ke.y+ke.height)-Math.max(nt.y,ke.y)),et=Be*rt,xt=nt.width*nt.height+ke.width*ke.height-et;return xt>0&&et/xt>Aw}))continue;const Re=j==null?void 0:j.catalog.find(Ye=>Ye.id===de.id);h.push({id:de.id,name:(Re==null?void 0:Re.nameFr)??(Re==null?void 0:Re.name)??de.id,builtWithCardUnderneath:de.built,boundingBox:ke,...de.tuckRegion?{tuckRegion:de.tuckRegion}:{},confidence:Math.round(de.confidence*1e4)/1e4});const Je=de.tuckRegion??ke;B.push({x0:Je.x,y0:Je.y,x1:Je.x+Je.width,y1:Je.y+Je.height})}}}catch(j){console.warn("[wonders-reg] discovery failed:",j)}const Ue=a==="opponent";let Le=(j,J)=>!Ue;try{const j=h.slice(Z),J=[];z.forEach((ce,me)=>{const Me=ce.box[0]+ce.box[2]/2,ke=ce.box[1]+ce.box[3]/2;B.some(qe=>Me>=qe.x0&&Me<=qe.x1&&ke>=qe.y0&&ke<=qe.y1)||J.push(me)});const te=[],le=[];j.forEach((ce,me)=>{const Me=ce.boundingBox;Me&&Me.width>0&&(te.push(me),le.push([Me.x,Me.y,Me.width,Me.height]))});const de=Mb(z.map(ce=>ce.box),J,le,D,[E.width,E.height]);Le=(ce,me)=>de.pointOwner(ce,me)==="opponent"===Ue,z=z.filter((ce,me)=>de.bannerOwner[me]==="opponent"===Ue);const Ie=j.map(()=>"player");te.forEach((ce,me)=>{Ie[ce]=de.wonderOwner[me]});for(let ce=j.length-1;ce>=0;ce-=1)Ie[ce]==="opponent"!==Ue&&h.splice(Z+ce,1);B.length=0;for(const ce of h.slice(Z)){const me=ce.tuckRegion??ce.boundingBox;me&&B.push({x0:me.x,y0:me.y,x1:me.x+me.width,y1:me.y+me.height})}for(let ce=l.length-1;ce>=A;ce-=1){const[me,Me]=l[ce].center;Le(me,Me)||l.splice(ce,1)}}catch(j){console.warn("[city-split] failed (side unfiltered):",j)}for(const j of O)Le(j.center[0],j.center[1])&&(m+=j.denomination,u.push(j));const Ze=[];for(const j of z){const J=j.box[0]+j.box[2]/2,te=j.box[1]+j.box[3]/2;if(B.some(de=>J>=de.x0&&J<=de.x1&&te>=de.y0&&te<=de.y1)){b+=1;continue}Ze.push(j),s[j.family]=(s[j.family]??0)+1,y+=1}const Ae=hy(Ze),pe=new Set(Ae.map(j=>j.box.join(",")));for(const j of fy(Ze))pe.has(j.box.join(","))||Ae.push(j);for(const j of Ae)p.push(j);if(Ze.some(j=>j.family==="guild")){const j=await Jb();if(j!==null){r(`${M}: identifying guilds…`,.75);for(const J of Ze)if(J.family==="guild")try{const[te,le,de,Ie]=J.box,ce=zr(E,te,le,de,Ie),me=Q_(ce),Me={[j.inputNames[0]]:new Ge("float32",me,[1,3,In,In])},qe=(await j.run(Me))[j.outputNames[0]].data,{id:Re,prob:Je}=J_(qe);Re!==""&&!c.some(Ye=>Ye.id===Re)&&c.push({id:Re,boundingBox:{x:te,y:le,width:de,height:Ie},confidence:Math.round(Je*1e4)/1e4})}catch(te){console.warn("[guild-cls] failed:",te)}}else if(Date.now()<q)try{const J=U??await Qa();if(J!==null){const te=await Fb();if(te.size>0){r(`${M}: identifying guilds…`,.75);const le=await Gb();for(const de of k_(J,E,te,q,le))c.some(Ie=>Ie.id===de.id)||c.push(de)}}}catch(J){console.warn("[guilds-reg] failed:",J)}}r(`${M}: laurels…`,.8);const An=await Kb(),Dt=[];for(const j of[0,1,2,3]){const J=j===0?E:Ht(E,j),te=await Kt("laurel",J);for(const[le,de,Ie,ce]of Ca(te.rows,te.params,It.laurel.conf)){const me=Wf({x:le,y:de,width:Ie-le,height:ce-de},j,E.width,E.height),Me=me.x+me.width/2,ke=me.y+me.height/2,qe=.6*Math.max(me.width,me.height);Dt.some(([Je,Ye,nt,Be])=>{const rt=(Je+nt)/2,et=(Ye+Be)/2;return(Me-rt)**2+(ke-et)**2<qe*qe})||Dt.push([me.x,me.y,me.x+me.width,me.y+me.height])}}const dt=await e1(),Xt=await t1();for(const[j,J,te,le]of Dt){const de=Math.trunc((j+te)/2),Ie=Math.trunc((J+le)/2);if([...F,...P].some(Be=>(de-Be.cx)**2+(Ie-Be.cy)**2<=Be.r*Be.r)||!Le(de,Ie))continue;if(Xt!==null){const Be=await n1(E,[Math.trunc(j),Math.trunc(J),Math.trunc(te),Math.trunc(le)],Xt);if(Be!==null&&Be>=pb)continue}const me=Math.max(6,Math.trunc(Math.max(te-j,le-J)*Oy)),Me=Xb(E,de,Ie,me);let ke=null,qe=0;const Re=new Map;for(const Be of[0,1,2,3]){const rt=Be===0?Me:Ht(Me,Be),[et,xt]=Ky(rt,An);et!==null&&(Re.set(et,Math.max(Re.get(et)??0,xt)),xt>qe&&(ke=et,qe=xt))}ke!==null&&qe<Ub&&(ke=null);const Je=qe;if(dt!==null){const Be=zr(E,Math.trunc(j),Math.trunc(J),Math.trunc(te-j),Math.trunc(le-J));let rt=null,et=0;for(const xt of[0,1,2,3]){const fs=xt===0?Be:Ht(Be,xt),ms=db(fs),gs=await dt.run({[dt.inputNames[0]]:new Ge("float32",ms,[1,3,En,En])}),{value:ys,prob:Jn}=cb(gs[dt.outputNames[0]].data);Jn>et&&(rt=ys,et=Jn)}rt!==null&&et>=lb&&(ke=rt,qe=et)}const Ye=ke!==null&&[...Re.entries()].some(([Be,rt])=>Be!==ke&&rt>=Je-.1),nt=B.some(Be=>de>=Be.x0&&de<=Be.x1&&Ie>=Be.y0&&Ie<=Be.y1);o.push({value:ke,valueRead:ke!==null,center:[Math.round((j+te)/2),Math.round((J+le)/2)],boundingBox:{x:Math.trunc(j),y:Math.trunc(J),width:Math.trunc(te-j),height:Math.trunc(le-J)},confidence:Math.round(qe*1e4)/1e4,excluded:nt,photoIndex:$-1,...Ye?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}b>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${b} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=s.guild??0;x!==c.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${c.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+c.map(I=>I.id).join(", ")+" — confirm in the review."});const T=h.filter(I=>I.boundingBox.width===0);T.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${T.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(I=>I.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const S=o.filter(I=>I.valueRead);return{...b1(),wonders:h,guilds:l1(c,h),progressTokens:l,laurels:o,cardVictoryPoints:{value:S.reduce((I,M)=>I+(M.value??0),0),laurelsKept:o.length,laurelsUnread:o.length-S.length,complete:o.length===S.length},cardCounts:{byFamily:s,source:y>0?"yolo":"none",tuckedExcluded:b,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const $t=1280,$1=.3,hs=9;let ps=null;function x1(){return ps===null&&(ps=(async()=>{try{return(await fetch(`${De}pawn_ends.onnx`,{method:"HEAD"})).ok?await it.create(`${De}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ps}function v1(e){const t=$t/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const o=new OffscreenCanvas($t,$t).getContext("2d",{willReadFrequently:!0});o.fillStyle="rgb(114,114,114)",o.fillRect(0,0,$t,$t),o.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=o.getImageData(0,0,$t,$t),l=$t*$t,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function S1(e,t){const{tensor:n,r}=v1(t),a=(await e.run({[e.inputNames[0]]:new Ge("float32",n,[1,3,$t,$t])}))[e.outputNames[0]].data,s=new Map;for(let o=0;o+5<a.length;o+=6){const u=a[o+4];if(u<$1)continue;const l=Math.round(a[o+5]),h=s.get(l);if(h===void 0||u>h.conf){const c=(a[o]+a[o+2])/2/r,p=(a[o+1]+a[o+3])/2/r;s.set(l,{conf:u,cx:c,cy:p})}}return s}async function T1(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Ht(t,g),b=await S1(e,y);if(b.has(0)&&b.has(1)&&b.has(2)){const $=b.get(0).conf+b.get(1).conf+b.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:b})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),s=a.cx-i.cx,o=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=s*s+o*o;if(h<=0)return null;const c=((r.cx-u)*s+(r.cy-l)*o)/h*(2*hs),p=Math.min(hs,Math.max(-hs,Math.round(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function I1(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const s=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},o=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await cs(h,l,n,s,o))}e.both!==void 0&&(r.left=await cs([e.both],"left",n,s,o,"player"),r.right=await cs([e.both],"right",n,s,o,"opponent"));let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await ds(e.board),h=await x1();if(h!==null){const c=await T1(h,l);c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await _1(e.data.file):await I1(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
