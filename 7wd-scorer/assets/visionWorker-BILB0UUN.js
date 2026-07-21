var Q2=Object.defineProperty;var J2=(Et,kt,cn)=>kt in Et?Q2(Et,kt,{enumerable:!0,configurable:!0,writable:!0,value:cn}):Et[kt]=cn;var gg=(Et,kt,cn)=>J2(Et,typeof kt!="symbol"?kt+"":kt,cn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Et=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,cn=Object.getOwnPropertyNames,_g=Object.prototype.hasOwnProperty,bg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Z=(e,t)=>()=>(e&&(t=e(e=0)),t),pn=(e,t)=>{for(var n in t)Et(e,n,{get:t[n],enumerable:!0})},$g=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of cn(t))!_g.call(e,i)&&i!==n&&Et(e,i,{get:()=>t[i],enumerable:!(r=kt(t,i))||r.enumerable});return e},Tn=e=>$g(Et({},"__esModule",{value:!0}),e),In,Nt,hn,vs,Ss,Ts=Z(()=>{In=new Map,Nt=[],hn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=In.get(e);if(r===void 0)In.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Nt.indexOf(e);i!==-1&&Nt.splice(i,1);for(let a=0;a<Nt.length;a++)if(In.get(Nt[a]).priority<=n){Nt.splice(a,0,e);return}Nt.push(e)}return}throw new TypeError("not a valid backend")},vs=async e=>{let t=In.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ss=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Nt:n,i,a=[],s=new Set;for(let u of r){let l=await vs(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),xg=Z(()=>{Ts()}),Is,vg=Z(()=>{Is="1.27.0"}),Pr,Ve,Es=Z(()=>{vg(),Pr="warning",Ve={wasm:{},webgl:{},webgpu:{},versions:{common:Is},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Pr=e}},get logLevel(){return Pr}},Object.defineProperty(Ve,"logLevel",{enumerable:!0})}),Ee,Sg=Z(()=>{Es(),Ee=Ve}),ks,Cs,Tg=Z(()=>{ks=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let p=a*i,c=0,f=p,m=p*2,g=-1;s==="RGBA"?(c=0,f=p,m=p*2,g=p*3):s==="RGB"?(c=0,f=p,m=p*2):s==="RBG"&&(c=0,m=p,f=p*2);for(let y=0;y<a;y++)for(let b=0;b<i;b++){let $=(e.data[c++]-l[0])*u[0],x=(e.data[f++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+T+","+S+")",r.fillRect(b,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Cs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,y=2,b=3,$=0,x=c,T=c*2,S=-1;o==="RGBA"?($=0,x=c,T=c*2,S=c*3):o==="RGB"?($=0,x=c,T=c*2):o==="RBG"&&($=0,T=c,x=c*2),r=n.createImageData(i,a);for(let E=0;E<a*i;m+=f,g+=f,y+=f,b+=f,E++)r.data[m]=(e.data[$++]-p[0])*l[0],r.data[g]=(e.data[x++]-p[1])*l[1],r.data[y]=(e.data[T++]-p[2])*l[2],r.data[b]=S===-1?255:(e.data[S++]-p[3])*l[3]}else throw new Error("Can not access image data");return r}}),Yn,Ms,As,Rs,zs,Os,Ig=Z(()=>{Lr(),Yn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,p=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,f=0,m=1,g=2,y=3,b=0,$=l,x=l*2,T=-1;o==="RGB"&&(c=3,f=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(b=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,b=l*2);for(let S=0;S<l;S++,f+=c,g+=c,m+=c,y+=c)p[b++]=(e[f]+s[0])/a[0],p[$++]=(e[m]+s[1])/a[1],p[x++]=(e[g]+s[2])/a[2],T!==-1&&y!==-1&&(p[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new it("float32",p,[1,4,n,r]):new it("float32",p,[1,3,n,r])},Ms=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(n){let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let p,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,c=t.resizedWidth):(p=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=c,t!==void 0){let f=u();f.width=c,f.height=p;let m=l(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;return c.drawImage(e,0,0,m,f),s=c.getImageData(0,0,m,f).data,o.height=f,o.width=m,Yn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,c)=>{let f=u(),m=l(f);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let y=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(Yn(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Yn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},As=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new it({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},Rs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new it({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},zs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new it({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Os=(e,t,n)=>new it({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Ht,En,Ur,Ns,Eg=Z(()=>{Ht=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),En=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ur=!1,Ns=()=>{if(!Ur){Ur=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Ht.set("int64",BigInt64Array),En.set(BigInt64Array,"int64")),t&&(Ht.set("uint64",BigUint64Array),En.set(BigUint64Array,"uint64")),r?(Ht.set("float16",n),En.set(n,"float16")):Ht.set("float16",Uint16Array)}}}),Bs,Ds,kg=Z(()=>{Lr(),Bs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ds=(e,t)=>{switch(e.location){case"cpu":return new it(e.type,e.data,t);case"cpu-pinned":return new it({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new it({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new it({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new it({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),it,Lr=Z(()=>{Tg(),Ig(),Eg(),kg(),it=class{constructor(e,t,n){Ns();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Ht.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Ht.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=En.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Bs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Ms(e,t)}static fromTexture(e,t){return As(e,t)}static fromGpuBuffer(e,t){return Rs(e,t)}static fromMLTensor(e,t){return zs(e,t)}static fromPinnedBuffer(e,t,n){return Os(e,t,n)}toDataURL(e){return ks(this,e)}toImageData(e){return Cs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ds(this,e)}}}),Ge,Ps=Z(()=>{Lr(),Ge=it}),Zn,Fr,bt,dt,jt,Kt,Us=Z(()=>{Es(),Zn=(e,t)=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.timeStamp(`${e}::ORT::${t}`)},Fr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Zn("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},bt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||Fr("BEGIN",e)},dt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||Fr("END",e)},jt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.time(`ORT::${e}`)},Kt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.timeEnd(`ORT::${e}`)}}),Ls,Cg=Z(()=>{Ts(),Ps(),Us(),Ls=class yg{constructor(t){this.handler=t}async run(t,n,r){bt(),jt("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ge||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ge)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,p=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(p.indexOf(c)!==-1){let f=n[c];(f===null||f instanceof Ge)&&(l=!0,s=!1,i[c]=f)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let p=o[l];p instanceof Ge?u[l]=p:u[l]=new Ge(p.type,p.data,p.dims)}return Kt("InferenceSession.run"),dt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){bt(),jt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,c=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-c,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Ss(s),l=await o.createInferenceSessionHandler(a,u);return Kt("InferenceSession.create"),dt(),new yg(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),at,Mg=Z(()=>{Cg(),at=Ls}),Ag=Z(()=>{}),Rg=Z(()=>{}),zg=Z(()=>{}),Og=Z(()=>{}),Ng={};pn(Ng,{InferenceSession:()=>at,TRACE:()=>Zn,TRACE_EVENT_BEGIN:()=>jt,TRACE_EVENT_END:()=>Kt,TRACE_FUNC_BEGIN:()=>bt,TRACE_FUNC_END:()=>dt,Tensor:()=>Ge,env:()=>Ee,registerBackend:()=>hn});var ut=Z(()=>{xg(),Sg(),Mg(),Ps(),Ag(),Rg(),Us(),zg(),Og()}),Gr=Z(()=>{}),Fs={};pn(Fs,{default:()=>Gs});var Wr,qr,Gs,Bg=Z(()=>{var e;vh(),Xt(),Yr(),Wr="ort-wasm-proxy-worker",qr=((e=globalThis.self)==null?void 0:e.name)===Wr,qr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Jr(r.wasm).then(()=>{da(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ca(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=gr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ha(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":fa(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;ga(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(p=>p[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},wa([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":ya(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Gs=qr?null:t=>new Worker(t??st,{type:"module",name:Wr})}),Ws={};pn(Ws,{default:()=>Vs});async function qs(e={}){var fg,mg;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((fg=self.name)==null?void 0:fg.startsWith("em-pthread"));t.mountExternalData=(d,h)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...h)=>{var _;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:h[0],errors:[]},I=await d(...h);if(t.Yc!==w)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let M=w.errors;if(0<M.length){let z=await Promise.all(M);if(z=z.filter(F=>F),0<z.length)throw Error(z.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(d,h)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let _=t.dd;t.jsepRegisterBuffer=(w,I,M,z)=>_.registerBuffer(w,I,M,z),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,M)=>_.createDownloader(w,I,M),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Id=(w,I)=>{_.upload(w,I)}}else if(d==="webnn"){let _=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,M,z)=>_.registerMLTensor(w,I,M,z),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterMLConstant=(w,I,M,z,F,J)=>_.registerMLConstant(w,I,M,z,F,t.Xc,J),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let d=h=>(..._)=>{let w=Tt;return _=h(..._),Tt!=w?new Promise((I,M)=>{ds={resolve:I,reject:M}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=d(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(d,h)=>{throw h},p=self.location.href,c="";if(n||r){try{c=new URL(".",p).href}catch{}r&&(u=d=>{var h=new XMLHttpRequest;return h.open("GET",d,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async d=>{if(C(d))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(d,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,y,b,$,x=console.log.bind(console),T=console.error.bind(console),S=x,E=T,k=!1,C=d=>d.startsWith("file://");function v(){Ue.buffer!=O.buffer&&Y()}if(i){let d=function(h){try{var _=h.data,w=_.Sc;if(w==="load"){let I=[];self.onmessage=M=>I.push(M),$=()=>{postMessage({Sc:"loaded"});for(let M of I)d(M);self.onmessage=d};for(let M of _.xd)t[M]&&!t[M].proxy||(t[M]=(...z)=>{postMessage({Sc:"callHandler",wd:M,args:z})},M=="print"&&(S=t[M]),M=="printErr"&&(E=t[M]));Ue=_.Od,Y(),m=_.Pd,ce(),Br()}else if(w==="run"){(function(I){var M=(v(),B)[I+52>>>2>>>0];I=(v(),B)[I+56>>>2>>>0],Sm(M,M-I),me(M)})(_.Rc),ms(_.Rc,0,0,1,0,0),je(),os(_.Rc),R||(wm(),R=!0);try{rt(_.Md,_.bd)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?R&&Cr():w&&(E(`worker: received unknown command ${w}`),E(_)))}catch(I){throw _m(),I}};var R=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=d}var O,j,P,G,A,B,H,X,ne,N,ee,L=!1;function Y(){var d=Ue.buffer;t.HEAP8=O=new Int8Array(d),P=new Int16Array(d),t.HEAPU8=j=new Uint8Array(d),G=new Uint16Array(d),t.HEAP32=A=new Int32Array(d),t.HEAPU32=B=new Uint32Array(d),H=new Float32Array(d),X=new Float64Array(d),ne=new BigInt64Array(d),N=new BigUint64Array(d)}function K(){L=!0,i?$():Ot.sb()}function q(d){throw E(d="Aborted("+d+")"),k=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),b==null||b(d),d}function oe(){return{a:{ma:h2,gb:p2,g:Qe,J:ns,f:jb,o:Kb,h:Xb,ha:Yb,b:Zb,T:Qb,Ha:Af,n:Jb,$:Nf,Xa:Bf,Da:Df,Fa:Pf,Ya:Uf,Va:Lf,Oa:Ff,Ua:Gf,ka:Wf,Ea:qf,Ba:Vf,Wa:Hf,Ca:jf,bb:e1,ea:t1,wa:n1,ua:i1,da:s1,O:o1,H:u1,va:l1,_:g1,xa:y1,Ra:w1,za:b1,Ia:$1,sa:x1,fa:v1,Qa:os,_a:S1,R:k1,r:z1,c:as,hb:O1,y:N1,M:B1,D:D1,l:P1,s:tm,ib:U1,I:L1,S:F1,j:G1,u:W1,q:q1,k:V1,La:H1,Ma:j1,Na:K1,Ja:am,Ka:sm,ta:om,db:Y1,ab:Q1,v:J1,aa:e2,ga:t2,$a:Z1,W:n2,Za:r2,Aa:i2,F:X1,U:a2,la:Or,ya:o2,fb:s2,eb:u2,Sa:cm,Ta:pm,Ga:le,V:hm,ja:fm,Pa:mm,ia:gm,kb:X2,na:q2,lb:K2,oa:W2,G:O2,e:y2,t:m2,w:f2,B:E2,mb:L2,K:A2,x:b2,pa:F2,Y:V2,ba:U2,nb:P2,ob:D2,P:k2,qa:B2,pb:N2,N:R2,Z:G2,d:g2,A:_2,m:w2,jb:Y2,p:x2,z:v2,C:$2,E:S2,L:C2,qb:z2,Q:H2,ca:M2,X:j2,rb:I2,ra:T2,i:d2,a:Ue,cb:Q}}}async function ce(){function d(w,I){var M=Ot=w.exports;w={};for(let[z,F]of Object.entries(M))typeof F=="function"?(M=T1(F),w[z]=M):w[z]=F;return Ot=w,Ot=(function(){var z=Ot,F=te=>fe=>te(fe)>>>0,J=te=>()=>te()>>>0;return(z=Object.assign({},z)).tb=F(z.tb),z.Xb=J(z.Xb),z.Zb=F(z.Zb),z.lc=F(z.lc),z.mc=J(z.mc),z.qc=F(z.qc),z})(),Ce.push(Ot._b),ym=(w=Ot).tb,wm=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,Nr=w.Xb,It=t._free=w.Yb,jn=t._malloc=w.Zb,ms=w.ac,_m=w.bc,bm=w.cc,$m=w.dc,gs=w.ec,xm=w.fc,vm=w.gc,ye=w.hc,Kn=w.ic,Sm=w.jc,me=w.kc,ys=w.lc,ge=w.mc,Tm=w.nc,ws=w.oc,Im=w.pc,Em=w.qc,km=w.rc,_s=w.sc,Cm=w.tc,Mm=w.uc,Am=w.vc,Rm=w.wc,zm=w.xc,Om=w.yc,Nm=w.zc,Bm=w.Ac,Dm=w.Bc,Pm=w.Cc,Um=w.Dc,Lm=w.Ec,Fm=w.Fc,Gm=w.Gc,Wm=w.Hc,qm=w.Ic,Vm=w.Jc,Hm=w.Kc,jm=w.Lc,Km=w.Mc,Xm=w.Nc,Ym=w.Pc,Zm=w.Qc,Qm=w.$c,Jm=w.ad,eg=w.fd,tg=w.jd,ng=w.kd,rg=w.ld,ig=w.md,ag=w.nd,sg=w.od,og=w.pd,ug=w.qd,lg=w.vd,dg=w.Td,cg=w.Ud,pg=w.Vd,hg=w.Wd,m=I,Ot}var h,_=oe();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,M)=>{w(d(I,M))})}):i?d(new WebAssembly.Instance(m,oe()),m):(ee??(ee=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(w){var I=ee;if(!f&&!C(I))try{var M=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(M,w)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,F){try{var J=await(async function(te){if(!f)try{var fe=await o(te);return new Uint8Array(fe)}catch{}if(te==ee&&f)te=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";te=u(te)}return te})(z);return await WebAssembly.instantiate(J,F)}catch(te){E(`failed to asynchronously prepare wasm: ${te}`),q(te)}})(I,w)})(_),d(h.instance,h.module))}class ie{constructor(h){gg(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var _e=d=>{d.terminate(),d.onmessage=()=>{}},ze=[],Oe=0,Ne=null,nt=d=>{ve.length==0&&(Xe(),Be(ve[0]));var h=ve.pop();if(!h)return 6;Ae.push(h),Fe[d.Rc]=h,h.Rc=d.Rc;var _={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return h.postMessage(_,d.rd),0},U=0,V=(d,h,..._)=>{var w,I=16*_.length,M=ge(),z=ys(I),F=z>>>3;for(w of _)typeof w=="bigint"?((v(),ne)[F++>>>0]=1n,(v(),ne)[F++>>>0]=w):((v(),ne)[F++>>>0]=0n,(v(),X)[F++>>>0]=w);return d=bm(d,0,I,z,h),me(M),d};function Q(d){if(i)return V(0,1,d);if(g=d,!(0<U)){for(var h of Ae)_e(h);for(h of ve)_e(h);ve=[],Ae=[],Fe={},k=!0}l(0,new ie(d))}function ue(d){if(i)return V(1,0,d);le(d)}var le=d=>{if(g=d,i)throw ue(d),"unwind";Q(d)},ve=[],Ae=[],Ce=[],Fe={},Me=d=>{var h=d.Rc;delete Fe[h],ve.push(d),Ae.splice(Ae.indexOf(d),1),d.Rc=0,$m(h)};function je(){Ce.forEach(d=>d())}var Be=d=>new Promise(h=>{d.onmessage=I=>{var M=I.data;if(I=M.Sc,M.Zc&&M.Zc!=Nr()){var z=Fe[M.Zc];z?z.postMessage(M,M.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${M.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?Cr():I==="spawnThread"?nt(M):I==="cleanupThread"?kr(()=>{Me(Fe[M.Nd])}):I==="loaded"?(d.loaded=!0,h(d)):M.target==="setimmediate"?d.postMessage(M):I==="uncaughtException"?d.onerror(M.error):I==="callHandler"?t[M.wd](...M.args):I&&E(`worker sent an unknown command ${I}`)},d.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);d.postMessage({Sc:"load",xd:w,Od:Ue,Pd:m})});function Xe(){var d=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ve.push(d)}var Ue,rt=(d,h)=>{U=0,d=_s(d,h),0<U?g=d:gs(d)},Te=[],Ze=0;function Qe(d){var h=new Vn(d>>>=0);return(v(),O)[h.Tc+12>>>0]==0&&(Tr(h,!0),Ze--),Ir(h,!1),Te.push(h),Em(d)}var Je=0,ns=()=>{ye(0,0);var d=Te.pop();Tm(d.cd),Je=0};function Tr(d,h){h=h?1:0,(v(),O)[d.Tc+12>>>0]=h}function Ir(d,h){h=h?1:0,(v(),O)[d.Tc+13>>>0]=h}class Vn{constructor(h){this.cd=h,this.Tc=h-24}}var vn=d=>{var h=Je;if(!h)return Kn(0),0;var _=new Vn(h);(v(),B)[_.Tc+16>>>2>>>0]=h;var w=(v(),B)[_.Tc+4>>>2>>>0];if(!w)return Kn(0),h;for(var I of d){if(I===0||I===w)break;if(Im(I,w,_.Tc+16))return Kn(I),h}return Kn(w),h};function jb(){return vn([])}function Kb(d){return vn([d>>>0])}function Xb(d,h,_,w){return vn([d>>>0,h>>>0,_>>>0,w>>>0])}var Yb=()=>{var d=Te.pop();d||q("no exception to throw");var h=d.cd;throw(v(),O)[d.Tc+13>>>0]==0&&(Te.push(d),Ir(d,!0),Tr(d,!1),Ze++),ws(h),Je=h};function Zb(d,h,_){var w=new Vn(d>>>=0);throw h>>>=0,_>>>=0,(v(),B)[w.Tc+16>>>2>>>0]=0,(v(),B)[w.Tc+4>>>2>>>0]=h,(v(),B)[w.Tc+8>>>2>>>0]=_,ws(d),Ze++,Je=d}var Qb=()=>Ze;function Mf(d,h,_,w){return i?V(2,1,d,h,_,w):Af(d,h,_,w)}function Af(d,h,_,w){if(d>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Mf(d,h,_,w):(d={Ld:_,Rc:d,bd:w,rd:I},i?(d.Sc="spawnThread",postMessage(d,I),0):nt(d))}function Jb(d){throw Je||(Je=d>>>0),Je}var Rf=globalThis.TextDecoder&&new TextDecoder,zf=(d,h,_,w)=>{if(_=h+_,w)return _;for(;d[h]&&!(h>=_);)++h;return h},Of=(d,h=0,_,w)=>{if(16<(_=zf(d,h>>>=0,_,w))-h&&d.buffer&&Rf)return Rf.decode(d.buffer instanceof ArrayBuffer?d.subarray(h,_):d.slice(h,_));for(w="";h<_;){var I=d[h++];if(128&I){var M=63&d[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|M);else{var z=63&d[h++];65536>(I=(240&I)==224?(15&I)<<12|M<<6|z:(7&I)<<18|M<<12|z<<6|63&d[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},We=(d,h,_)=>(d>>>=0)?Of((v(),j),d,h,_):"";function Nf(d,h,_){return i?V(3,1,d,h,_):0}function Bf(d,h){if(i)return V(4,1,d,h)}function Df(d,h){if(i)return V(5,1,d,h)}function Pf(d,h,_){if(i)return V(6,1,d,h,_)}function Uf(d,h,_){return i?V(7,1,d,h,_):0}function Lf(d,h){if(i)return V(8,1,d,h)}function Ff(d,h,_){if(i)return V(9,1,d,h,_)}function Gf(d,h,_,w){if(i)return V(10,1,d,h,_,w)}function Wf(d,h,_,w){if(i)return V(11,1,d,h,_,w)}function qf(d,h,_,w){if(i)return V(12,1,d,h,_,w)}function Vf(d){if(i)return V(13,1,d)}function Hf(d,h){if(i)return V(14,1,d,h)}function jf(d,h,_){if(i)return V(15,1,d,h,_)}var e1=()=>q(""),St=d=>{d>>>=0;for(var h="";;){var _=(v(),j)[d++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},rs={},is={},Sn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function zt(d,h,_={}){return(function(w,I,M={}){var z=I.name;if(!w)throw new Sn(`type "${z}" must have a positive integer typeid pointer`);if(is.hasOwnProperty(w)){if(M.yd)return;throw new Sn(`Cannot register type '${z}' twice`)}is[w]=I,rs.hasOwnProperty(w)&&(I=rs[w],delete rs[w],I.forEach(F=>F()))})(d,h,_)}var Kf=(d,h,_)=>{switch(h){case 1:return _?w=>(v(),O)[w>>>0]:w=>(v(),j)[w>>>0];case 2:return _?w=>(v(),P)[w>>>1>>>0]:w=>(v(),G)[w>>>1>>>0];case 4:return _?w=>(v(),A)[w>>>2>>>0]:w=>(v(),B)[w>>>2>>>0];case 8:return _?w=>(v(),ne)[w>>>3>>>0]:w=>(v(),N)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${d}`)}};function t1(d,h,_,w,I){d>>>=0,_>>>=0,h=St(h>>>0);let M=z=>z;if(w=w===0n){let z=8*_;M=F=>BigInt.asUintN(z,F),I=M(I)}zt(d,{name:h,Oc:M,Vc:(z,F)=>(typeof F=="number"&&(F=BigInt(F)),F),Uc:Kf(h,_,!w),Wc:null})}function n1(d,h,_,w){zt(d>>>=0,{name:h=St(h>>>0),Oc:function(I){return!!I},Vc:function(I,M){return M?_:w},Uc:function(I){return this.Oc((v(),j)[I>>>0])},Wc:null})}var Xf=[],ln=[0,1,,1,null,1,!0,1,!1,1];function as(d){9<(d>>>=0)&&--ln[d+1]===0&&(ln[d]=void 0,Xf.push(d))}var lt=d=>{if(!d)throw new Sn(`Cannot use deleted val. handle = ${d}`);return ln[d]},_t=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Xf.pop()||ln.length;return ln[h]=d,ln[h+1]=1,h}};function ss(d){return this.Oc((v(),B)[d>>>2>>>0])}var r1={name:"emscripten::val",Oc:d=>{var h=lt(d);return as(d),h},Vc:(d,h)=>_t(h),Uc:ss,Wc:null};function i1(d){return zt(d>>>0,r1)}var a1=(d,h)=>{switch(h){case 4:return function(_){return this.Oc((v(),H)[_>>>2>>>0])};case 8:return function(_){return this.Oc((v(),X)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${d}`)}};function s1(d,h,_){_>>>=0,zt(d>>>=0,{name:h=St(h>>>0),Oc:w=>w,Vc:(w,I)=>I,Uc:a1(h,_),Wc:null})}function o1(d,h,_,w,I){d>>>=0,_>>>=0,h=St(h>>>0);let M=F=>F;if(w===0){var z=32-8*_;M=F=>F<<z>>>z,I=M(I)}zt(d,{name:h,Oc:M,Vc:(F,J)=>J,Uc:Kf(h,_,w!==0),Wc:null})}function u1(d,h,_){function w(M){var z=(v(),B)[M>>>2>>>0];return M=(v(),B)[M+4>>>2>>>0],new I((v(),O).buffer,M,z)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];zt(d>>>=0,{name:_=St(_>>>0),Oc:w,Uc:w},{yd:!0})}var Wt=(d,h,_)=>{var w=(v(),j);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var M=0;M<d.length;++M){var z=d.codePointAt(M);if(127>=z){if(h>=_)break;w[h++>>>0]=z}else if(2047>=z){if(h+1>=_)break;w[h++>>>0]=192|z>>6,w[h++>>>0]=128|63&z}else if(65535>=z){if(h+2>=_)break;w[h++>>>0]=224|z>>12,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z}else{if(h+3>=_)break;w[h++>>>0]=240|z>>18,w[h++>>>0]=128|z>>12&63,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z,M++}}w[h>>>0]=0,d=h-I}else d=0;return d},Er=d=>{for(var h=0,_=0;_<d.length;++_){var w=d.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function l1(d,h){zt(d>>>=0,{name:h=St(h>>>0),Oc(_){var w=(v(),B)[_>>>2>>>0];return w=We(_+4,w,!0),It(_),w},Vc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Sn("Cannot pass non-string to std::string");var M=I?Er(w):w.length,z=jn(4+M+1),F=z+4;return(v(),B)[z>>>2>>>0]=M,I?Wt(w,F,M+1):(v(),j).set(w,F>>>0),_!==null&&_.push(It,z),z},Uc:ss,Wc(_){It(_)}})}var Yf=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,d1=(d,h,_)=>{if(d>>>=1,16<(h=zf((v(),G),d,h/2,_))-d&&Yf)return Yf.decode((v(),G).slice(d,h));for(_="";d<h;++d){var w=(v(),G)[d>>>0];_+=String.fromCharCode(w)}return _},c1=(d,h,_)=>{if(_??(_=2147483647),2>_)return 0;var w=h;_=(_-=2)<2*d.length?_/2:d.length;for(var I=0;I<_;++I){var M=d.charCodeAt(I);(v(),P)[h>>>1>>>0]=M,h+=2}return(v(),P)[h>>>1>>>0]=0,h-w},p1=d=>2*d.length,h1=(d,h,_)=>{var w="";d>>>=2;for(var I=0;!(I>=h/4);I++){var M=(v(),B)[d+I>>>0];if(!M&&!_)break;w+=String.fromCodePoint(M)}return w},f1=(d,h,_)=>{if(h>>>=0,_??(_=2147483647),4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<d.length;++I){var M=d.codePointAt(I);if(65535<M&&I++,(v(),A)[h>>>2>>>0]=M,(h+=4)+4>_)break}return(v(),A)[h>>>2>>>0]=0,h-w},m1=d=>{for(var h=0,_=0;_<d.length;++_)65535<d.codePointAt(_)&&_++,h+=4;return h};function g1(d,h,_){if(d>>>=0,h>>>=0,_=St(_>>>=0),h===2)var w=d1,I=c1,M=p1;else w=h1,I=f1,M=m1;zt(d,{name:_,Oc:z=>{var F=(v(),B)[z>>>2>>>0];return F=w(z+4,F*h,!0),It(z),F},Vc:(z,F)=>{if(typeof F!="string")throw new Sn(`Cannot pass non-string to C++ string type ${_}`);var J=M(F),te=jn(4+J+h);return(v(),B)[te>>>2>>>0]=J/h,I(F,te+4,J+h),z!==null&&z.push(It,te),te},Uc:ss,Wc(z){It(z)}})}function y1(d,h){zt(d>>>=0,{zd:!0,name:h=St(h>>>0),Oc:()=>{},Vc:()=>{}})}function w1(d){ms(d>>>0,!r,1,!n,131072,!1),je()}var kr=d=>{if(!k)try{if(d(),!(0<U))try{i?Nr()&&gs(g):le(g)}catch(h){h instanceof ie||h=="unwind"||l(0,h)}}catch(h){h instanceof ie||h=="unwind"||l(0,h)}},_1=!Atomics.waitAsync||((mg=globalThis.navigator)==null?void 0:mg.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function os(d){d>>>=0,_1||(Atomics.waitAsync((v(),A),d>>>2,d).value.then(Cr),d+=128,Atomics.store((v(),A),d>>>2,1))}var Cr=()=>kr(()=>{var d=Nr();d&&(os(d),vm())});function b1(d,h){(d>>>=0)==h>>>0?setTimeout(Cr):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=Fe[d])&&d.postMessage({Sc:"checkMailbox"})}var us=[];function $1(d,h,_,w,I){for(h>>>=0,I>>>=0,us.length=0,_=I>>>3,w=I+w>>>3;_<w;){var M;M=(v(),ne)[_++>>>0]?(v(),ne)[_++>>>0]:(v(),X)[_++>>>0],us.push(M)}return(h?bs[h]:c2[d])(...us)}var x1=()=>{U=0};function v1(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):Me(Fe[d])}function S1(d){}var Mr=d=>{try{d()}catch(h){q(h)}};function T1(d){var h=(..._)=>{Ar.push(d);try{return d(..._)}finally{k||(Ar.pop(),Tt&&qt===1&&Ar.length===0&&(qt=0,U+=1,Mr(cg),typeof Fibers<"u"&&Fibers.Zd()))}};return Jf.set(d,h),h}var qt=0,Tt=null,Zf=0,Ar=[],ls=new Map,Qf=new Map,Jf=new Map,I1=0,ds=null,E1=[],em=d=>(function(h){if(!k){if(qt===0){var _=!1,w=!1;h((I=0)=>{if(!k&&(Zf=I,_=!0,w)){qt=2,Mr(()=>pg(Tt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var M=(function(){var J=(v(),A)[Tt+8>>>2>>>0];return J=Qf.get(J),J=Jf.get(J),--U,J()})()}catch(J){M=J,I=!0}var z=!1;if(!Tt){var F=ds;F&&(ds=null,(I?F.reject:F.resolve)(M),z=!0)}if(I&&!z)throw M}}),w=!0,_||(qt=1,Tt=(function(){var I=jn(65548),M=I+12;if((v(),B)[I>>>2>>>0]=M,(v(),B)[I+4>>>2>>>0]=M+65536,M=Ar[0],!ls.has(M)){var z=I1++;ls.set(M,z),Qf.set(z,M)}return M=ls.get(M),(v(),A)[I+8>>>2>>>0]=M,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Mr(()=>dg(Tt)))}else qt===2?(qt=0,Mr(hg),It(Tt),Tt=null,E1.forEach(kr)):q(`invalid state: ${qt}`);return Zf}})(h=>{d().then(h)});function k1(d){return d>>>=0,em(async()=>{var h=await lt(d);return _t(h)})}var cs=[],C1=d=>{var h=cs.length;return cs.push(d),h},M1=(d,h)=>{for(var _=Array(d),w=0;w<d;++w){var I=w,M=(v(),B)[h+4*w>>>2>>>0],z=is[M];if(z===void 0)throw d=`parameter ${w}`,M=ym(M),h=St(M),It(M),new Sn(`${d} has unknown type ${h}`);_[I]=z}return _},A1=(d,h,_)=>{var w=[];return d=d(w,_),w.length&&((v(),B)[h>>>2>>>0]=_t(w)),d},R1={},Rr=d=>{var h=R1[d];return h===void 0?St(d):h};function z1(d,h,_){var[w,...I]=M1(d,h>>>0);h=w.Vc.bind(w);var M=I.map(J=>J.Uc.bind(J));d--;var z={toValue:lt};switch(d=M.map((J,te)=>{var fe=`argFromPtr${te}`;return z[fe]=J,`${fe}(args${te?"+"+8*te:""})`}),_){case 0:var F="toValue(handle)";break;case 2:F="new (toValue(handle))";break;case 3:F="";break;case 1:z.getStringOrSymbol=Rr,F="toValue(handle)[getStringOrSymbol(methodName)]"}return F+=`(${d})`,w.zd||(z.toReturnWire=h,z.emval_returnValue=A1,F=`return emval_returnValue(toReturnWire, destructorsRef, ${F})`),F=`return function (handle, methodName, destructorsRef, args) {
  ${F}
  }`,_=new Function(Object.keys(z),F)(...Object.values(z)),F=`methodCaller<(${I.map(J=>J.name)}) => ${w.name}>`,C1(Object.defineProperty(_,"name",{value:F}))}function O1(d,h){return h>>>=0,(d=lt(d>>>0))==lt(h)}function N1(d){return(d>>>=0)?(d=Rr(d),_t(globalThis[d])):_t(globalThis)}function B1(d){return d=Rr(d>>>0),_t(t[d])}function D1(d,h){return h>>>=0,d=lt(d>>>0),h=lt(h),_t(d[h])}function P1(d){9<(d>>>=0)&&(ln[d+1]+=1)}function tm(d,h,_,w,I){return cs[d>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function U1(d,h,_,w,I){return tm(d>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function L1(){return _t([])}function F1(d){d=lt(d>>>0);for(var h=Array(d.length),_=0;_<d.length;_++)h[_]=d[_];return _t(h)}function G1(d){return _t(Rr(d>>>0))}function W1(){return _t({})}function q1(d){for(var h=lt(d>>>=0);h.length;){var _=h.pop();h.pop()(_)}as(d)}function V1(d,h,_){h>>>=0,_>>>=0,d=lt(d>>>0),h=lt(h),_=lt(_),d[h]=_}function H1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=d.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=d.getUTCHours(),(v(),A)[h+12>>>2>>>0]=d.getUTCDate(),(v(),A)[h+16>>>2>>>0]=d.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=d}var nm=d=>d%4==0&&(d%100!=0||d%400==0),rm=[0,31,60,91,121,152,182,213,244,274,305,335],im=[0,31,59,90,120,151,181,212,243,273,304,334];function j1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getSeconds(),(v(),A)[h+4>>>2>>>0]=d.getMinutes(),(v(),A)[h+8>>>2>>>0]=d.getHours(),(v(),A)[h+12>>>2>>>0]=d.getDate(),(v(),A)[h+16>>>2>>>0]=d.getMonth(),(v(),A)[h+20>>>2>>>0]=d.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getDay();var _=(nm(d.getFullYear())?rm:im)[d.getMonth()]+d.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=_,(v(),A)[h+36>>>2>>>0]=-60*d.getTimezoneOffset(),_=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(_!=w&&d.getTimezoneOffset()==Math.min(w,_)),(v(),A)[h+32>>>2>>>0]=d}function K1(d){d>>>=0;var h=new Date((v(),A)[d+20>>>2>>>0]+1900,(v(),A)[d+16>>>2>>>0],(v(),A)[d+12>>>2>>>0],(v(),A)[d+8>>>2>>>0],(v(),A)[d+4>>>2>>>0],(v(),A)[d>>>2>>>0],0),_=(v(),A)[d+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),M=new Date(h.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(M,I);return 0>_?(v(),A)[d+32>>>2>>>0]=+(I!=M&&z==w):0<_!=(z==w)&&(I=Math.max(M,I),h.setTime(h.getTime()+6e4*((0<_?z:I)-w))),(v(),A)[d+24>>>2>>>0]=h.getDay(),_=(nm(h.getFullYear())?rm:im)[h.getMonth()]+h.getDate()-1|0,(v(),A)[d+28>>>2>>>0]=_,(v(),A)[d>>>2>>>0]=h.getSeconds(),(v(),A)[d+4>>>2>>>0]=h.getMinutes(),(v(),A)[d+8>>>2>>>0]=h.getHours(),(v(),A)[d+12>>>2>>>0]=h.getDate(),(v(),A)[d+16>>>2>>>0]=h.getMonth(),(v(),A)[d+20>>>2>>>0]=h.getYear(),d=h.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function am(d,h,_,w,I,M,z){return i?V(16,1,d,h,_,w,I,M,z):-52}function sm(d,h,_,w,I,M){if(i)return V(17,1,d,h,_,w,I,M)}var Hn={},X1=()=>performance.timeOrigin+performance.now();function om(d,h){if(i)return V(18,1,d,h);if(Hn[d]&&(clearTimeout(Hn[d].id),delete Hn[d]),!h)return 0;var _=setTimeout(()=>{delete Hn[d],kr(()=>xm(d,performance.timeOrigin+performance.now()))},h);return Hn[d]={id:_,Yd:h},0}function Y1(d,h,_,w){d>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),M=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var z=Math.max(M,I);(v(),B)[d>>>2>>>0]=60*z,(v(),A)[h>>>2>>>0]=+(M!=I),d=(h=F=>{var J=Math.abs(F);return`UTC${0<=F?"-":"+"}${String(Math.floor(J/60)).padStart(2,"0")}${String(J%60).padStart(2,"0")}`})(M),h=h(I),I<M?(Wt(d,_,17),Wt(h,w,17)):(Wt(d,w,17),Wt(h,_,17))}var Z1=()=>Date.now();function Q1(d,h,_){return _>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),ne)[_>>>3>>>0]=BigInt(d),0):28}var ps=[],um=(d,h)=>{ps.length=0;for(var _;_=(v(),j)[d++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,ps.push(_==112?(v(),B)[h>>>2>>>0]:_==106?(v(),ne)[h>>>3>>>0]:_==105?(v(),A)[h>>>2>>>0]:(v(),X)[h>>>3>>>0]),h+=w?8:4}return ps};function J1(d,h,_){return d>>>=0,h=um(h>>>0,_>>>0),bs[d](...h)}function e2(d,h,_){return d>>>=0,h=um(h>>>0,_>>>0),bs[d](...h)}var t2=()=>{};function n2(d,h){return E(We(d>>>0,h>>>0))}var r2=()=>{throw U+=1,"unwind"};function i2(){return 4294901760}var a2=()=>navigator.hardwareConcurrency,dn={},zr=d=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+h[1]:0},lm=d=>{for(var h of d)(d=zr(h))&&(dn[d]=h)};function s2(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),lm(d),dn.gd=zr(d[3]),dn.Jd=d,dn.gd}function Or(d){if(!(d=dn[d>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(d))d=h[1];else{if(!(h=/^(.+?)@/.exec(d)))return 0;d=h[1]}It(Or.hd??0),h=Er(d)+1;var _=jn(h);return _&&Wt(d,_,h),Or.hd=_,Or.hd}function o2(d){d>>>=0;var h=(v(),j).length;if(d<=h||4294901760<d)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-Ue.buffer.byteLength+65535)/65536|0;try{Ue.grow(w),Y();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function u2(d,h,_){if(d>>>=0,h>>>=0,dn.gd==d)var w=dn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),lm(w);for(var I=3;w[I]&&zr(w[I])!=d;)++I;for(d=0;d<_&&w[d+I];++d)(v(),A)[h+4*d>>>2>>>0]=zr(w[d+I]);return d}var hs,fs={},dm=()=>{var w;if(!hs){var d,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in fs)fs[d]===void 0?delete h[d]:h[d]=fs[d];var _=[];for(d in h)_.push(`${d}=${h[d]}`);hs=_}return hs};function cm(d,h){if(i)return V(19,1,d,h);d>>>=0,h>>>=0;var _,w=0,I=0;for(_ of dm()){var M=h+w;(v(),B)[d+I>>>2>>>0]=M,w+=Wt(_,M,1/0)+1,I+=4}return 0}function pm(d,h){if(i)return V(20,1,d,h);d>>>=0,h>>>=0;var _=dm();for(var w of((v(),B)[d>>>2>>>0]=_.length,d=0,_))d+=Er(w)+1;return(v(),B)[h>>>2>>>0]=d,0}function hm(d){return i?V(21,1,d):52}function fm(d,h,_,w){return i?V(22,1,d,h,_,w):52}function mm(d,h,_,w){return i?V(23,1,d,h,_,w):70}var l2=[null,[],[]];function gm(d,h,_,w){if(i)return V(24,1,d,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,M=0;M<_;M++){var z=(v(),B)[h>>>2>>>0],F=(v(),B)[h+4>>>2>>>0];h+=8;for(var J=0;J<F;J++){var te=d,fe=(v(),j)[z+J>>>0],be=l2[te];fe===0||fe===10?((te===1?S:E)(Of(be)),be.length=0):be.push(fe)}I+=F}return(v(),B)[w>>>2>>>0]=I,0}function d2(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Xe();ze.push(async()=>{var h=(async function(){if(!i)return Promise.all(ve.map(Be))})();Oe++,await h,--Oe==0&&Ne&&(h=Ne,Ne=null,h())})})(),i||(Ue=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Y()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>ge(),t.stackRestore=d=>me(d),t.stackAlloc=d=>ys(d),t.setValue=function(d,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(v(),O)[d>>>0]=h;break;case"i16":(v(),P)[d>>>1>>>0]=h;break;case"i32":(v(),A)[d>>>2>>>0]=h;break;case"i64":(v(),ne)[d>>>3>>>0]=BigInt(h);break;case"float":(v(),H)[d>>>2>>>0]=h;break;case"double":(v(),X)[d>>>3>>>0]=h;break;case"*":(v(),B)[d>>>2>>>0]=h;break;default:q(`invalid type for setValue: ${_}`)}},t.getValue=function(d,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),O)[d>>>0];case"i16":return(v(),P)[d>>>1>>>0];case"i32":return(v(),A)[d>>>2>>>0];case"i64":return(v(),ne)[d>>>3>>>0];case"float":return(v(),H)[d>>>2>>>0];case"double":return(v(),X)[d>>>3>>>0];case"*":return(v(),B)[d>>>2>>>0];default:q(`invalid type for getValue: ${h}`)}},t.UTF8ToString=We,t.stringToUTF8=Wt,t.lengthBytesUTF8=Er;var ym,wm,Nr,It,jn,ms,_m,bm,$m,gs,xm,vm,ye,Kn,Sm,me,ys,ge,Tm,ws,Im,Em,km,_s,Cm,Mm,Am,Rm,zm,Om,Nm,Bm,Dm,Pm,Um,Lm,Fm,Gm,Wm,qm,Vm,Hm,jm,Km,Xm,Ym,Zm,Qm,Jm,eg,tg,ng,rg,ig,ag,sg,og,ug,lg,dg,cg,pg,hg,Ot,c2=[Q,ue,Mf,Nf,Bf,Df,Pf,Uf,Lf,Ff,Gf,Wf,qf,Vf,Hf,jf,am,sm,om,cm,pm,hm,fm,mm,gm],bs={1003524:(d,h,_,w,I)=>{if(t===void 0||!t.Xc)return 1;if((d=We(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>d.byteLength)return 3;try{let M=d.subarray(h,h+_);switch(I){case 0:(v(),j).set(M,w>>>0);break;case 1:t.Qd?t.Qd(w,M):t.Id(w,M);break;default:return 4}return 0}catch{return 4}},1004348:(d,h,_)=>{t.td(d,(v(),j).subarray(h>>>0,h+_>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_),!0)},1004704:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,h,_)=>{t.$b("HardSigmoid",d,{alpha:h,beta:_})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,h,_)=>{t.$b("Clip",d,{min:h,max:_})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,h)=>{t.$b("Elu",d,{alpha:h})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,h)=>{t.$b("LeakyRelu",d,{alpha:h})},1006444:(d,h)=>{t.$b("ThresholdedRelu",d,{alpha:h})},1006514:(d,h)=>{t.$b("Cast",d,{to:h})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,h,_,w,I)=>{t.$b("ReduceMean",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007283:(d,h,_,w,I)=>{t.$b("ReduceMax",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007457:(d,h,_,w,I)=>{t.$b("ReduceMin",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007631:(d,h,_,w,I)=>{t.$b("ReduceProd",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007806:(d,h,_,w,I)=>{t.$b("ReduceSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007980:(d,h,_,w,I)=>{t.$b("ReduceL1",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008153:(d,h,_,w,I)=>{t.$b("ReduceL2",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008326:(d,h,_,w,I)=>{t.$b("ReduceLogSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008503:(d,h,_,w,I)=>{t.$b("ReduceSumSquare",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008683:(d,h,_,w,I)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,h,_)=>{t.$b("Transpose",d,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1009040:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:We(_),format:w?"NHWC":"NCHW"})},1009173:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:We(_),format:w?"NHWC":"NCHW"})},1009306:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re,Vt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[F],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:fe?Array.from((v(),A).subarray(Number(fe)>>>0,Number(be)>>>0)):[],outputShape:Ie?Array.from((v(),A).subarray(Number(Ie)>>>0,Number(Re)>>>0)):[],activation:We(Vt)})},1009739:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("ConvTranspose",d,{format:F?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[],activation:We(Re)})},1010400:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re,Vt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[F],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:fe?Array.from((v(),A).subarray(Number(fe)>>>0,Number(be)>>>0)):[],outputShape:Ie?Array.from((v(),A).subarray(Number(Ie)>>>0,Number(Re)>>>0)):[],activation:We(Vt)})},1010833:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("ConvTranspose",d,{format:F?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[],activation:We(Re)})},1011494:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1011585:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("AveragePool",d,{format:Re?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:F?Array.from((v(),A).subarray(Number(F)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[]})},1012064:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1012155:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("AveragePool",d,{format:Re?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:F?Array.from((v(),A).subarray(Number(F)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[]})},1012634:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1012721:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("MaxPool",d,{format:Re?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:F?Array.from((v(),A).subarray(Number(F)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[]})},1013196:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1013283:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re)=>{t.$b("MaxPool",d,{format:Re?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:F?Array.from((v(),A).subarray(Number(F)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ie)>>>0)):[]})},1013758:(d,h,_,w,I)=>{t.$b("Gemm",d,{alpha:h,beta:_,transA:w,transB:I})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,h,_,w)=>{t.$b("ArgMax",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014024:(d,h,_,w)=>{t.$b("ArgMin",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014132:(d,h)=>{t.$b("Softmax",d,{axis:h})},1014195:(d,h)=>{t.$b("Concat",d,{axis:h})},1014255:(d,h,_,w,I)=>{t.$b("Split",d,{axis:h,numOutputs:_,splitSizes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,h)=>{t.$b("Gather",d,{axis:Number(h)})},1014536:(d,h)=>{t.$b("GatherElements",d,{axis:Number(h)})},1014615:(d,h)=>{t.$b("GatherND",d,{batch_dims:Number(h)})},1014694:(d,h,_,w,I,M,z,F,J,te,fe)=>{t.$b("Resize",d,{antialias:h,axes:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:We(I),cubicCoeffA:M,excludeOutside:z,extrapolationValue:F,keepAspectRatioPolicy:We(J),mode:We(te),nearestMode:We(fe)})},1015056:(d,h,_,w,I,M,z)=>{t.$b("Slice",d,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015486:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,h)=>{t.$b("Einsum",d,{equation:We(h)})},1015734:(d,h,_,w,I)=>{t.$b("Pad",d,{mode:h,value:_,pads:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1015877:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016046:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016215:(d,h,_)=>{t.$b("CumSum",d,{exclusive:Number(h),reverse:Number(_)})},1016312:(d,h,_)=>{t.$b("DequantizeLinear",d,{axis:h,blockSize:_})},1016402:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:We(_),padding_mode:We(w),format:I?"NHWC":"NCHW"})},1016572:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:We(_),padding_mode:We(w),format:I?"NHWC":"NCHW"})},1016742:(d,h)=>{t.$b("ScatterND",d,{reduction:We(h)})},1016827:(d,h,_,w,I,M,z,F,J)=>{t.$b("Attention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M,qkvHiddenSizes:z?Array.from((v(),A).subarray(Number(F)>>>0,Number(F)+z>>>0)):[],pastPresentShareBuffer:!!J})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re,Vt,$s)=>{t.$b("Conv",d,{format:be?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],pads:F?Array.from((v(),A).subarray(Number(F)>>>0,Number(J)>>>0)):[],strides:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],w_is_const:()=>!!(v(),O)[Number(Ie)>>>0],activation:We(Re),activation_params:Vt?Array.from((v(),H).subarray(Number(Vt)>>>0,Number($s)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,h,_,w,I,M,z,F,J)=>{t.$b("GroupQueryAttention",d,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:M,rotaryInterleaved:z,smoothSoftmax:F,localWindowSize:J})},1018124:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018235:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018346:(d,h,_,w,I,M)=>{t.$b("MatMulNBits",d,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:M})},1018473:(d,h,_,w,I,M)=>{t.$b("MultiHeadAttention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M})},1018632:(d,h)=>{t.$b("QuickGelu",d,{alpha:h})},1018696:(d,h,_,w,I)=>{t.$b("RotaryEmbedding",d,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1018835:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1018937:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1019039:(d,h,_,w)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1019160:d=>{t.Fd(d)},1019194:(d,h)=>t.Hd(Number(d),Number(h),t.Yc.Kd,t.Yc.errors)};function p2(d,h,_){return em(async()=>{await t.Dd(Number(d),Number(h),Number(_))})}function h2(){return typeof wasmOffsetConverter<"u"}function f2(d,h,_,w){var I=ge();try{return Bm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function m2(d,h,_){var w=ge();try{return Rm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function g2(d){var h=ge();try{Cm(d)}catch(_){if(me(h),_!==_+0)throw _;ye(1,0)}}function y2(d,h){var _=ge();try{return _s(d,h)}catch(w){if(me(_),w!==w+0)throw w;ye(1,0)}}function w2(d,h,_){var w=ge();try{km(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function _2(d,h){var _=ge();try{Dm(d,h)}catch(w){if(me(_),w!==w+0)throw w;ye(1,0)}}function b2(d,h,_,w,I,M,z){var F=ge();try{return Om(d,h,_,w,I,M,z)}catch(J){if(me(F),J!==J+0)throw J;ye(1,0)}}function $2(d,h,_,w,I,M){var z=ge();try{Mm(d,h,_,w,I,M)}catch(F){if(me(z),F!==F+0)throw F;ye(1,0)}}function x2(d,h,_,w){var I=ge();try{Nm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function v2(d,h,_,w,I){var M=ge();try{Am(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function S2(d,h,_,w,I,M,z){var F=ge();try{Um(d,h,_,w,I,M,z)}catch(J){if(me(F),J!==J+0)throw J;ye(1,0)}}function T2(d,h,_,w,I,M,z){var F=ge();try{Lm(d,h,_,w,I,M,z)}catch(J){if(me(F),J!==J+0)throw J;ye(1,0)}}function I2(d,h,_,w,I,M,z,F){var J=ge();try{qm(d,h,_,w,I,M,z,F)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function E2(d,h,_,w,I){var M=ge();try{return Pm(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function k2(d,h,_){var w=ge();try{return Vm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function C2(d,h,_,w,I,M,z,F){var J=ge();try{Hm(d,h,_,w,I,M,z,F)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function M2(d,h,_,w,I,M,z,F,J,te,fe,be){var Ie=ge();try{Fm(d,h,_,w,I,M,z,F,J,te,fe,be)}catch(Re){if(me(Ie),Re!==Re+0)throw Re;ye(1,0)}}function A2(d,h,_,w,I,M){var z=ge();try{return Gm(d,h,_,w,I,M)}catch(F){if(me(z),F!==F+0)throw F;ye(1,0)}}function R2(d,h,_){var w=ge();try{return jm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;return ye(1,0),0n}}function z2(d,h,_,w,I,M,z,F,J){var te=ge();try{zm(d,h,_,w,I,M,z,F,J)}catch(fe){if(me(te),fe!==fe+0)throw fe;ye(1,0)}}function O2(d){var h=ge();try{return Km(d)}catch(_){if(me(h),_!==_+0)throw _;ye(1,0)}}function N2(d,h){var _=ge();try{return lg(d,h)}catch(w){if(me(_),w!==w+0)throw w;return ye(1,0),0n}}function B2(d){var h=ge();try{return Xm(d)}catch(_){if(me(h),_!==_+0)throw _;return ye(1,0),0n}}function D2(d,h,_,w){var I=ge();try{return tg(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function P2(d,h,_,w,I){var M=ge();try{return ng(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function U2(d,h,_,w,I,M){var z=ge();try{return rg(d,h,_,w,I,M)}catch(F){if(me(z),F!==F+0)throw F;ye(1,0)}}function L2(d,h,_,w,I,M){var z=ge();try{return ig(d,h,_,w,I,M)}catch(F){if(me(z),F!==F+0)throw F;ye(1,0)}}function F2(d,h,_,w,I,M,z,F){var J=ge();try{return Wm(d,h,_,w,I,M,z,F)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function G2(d,h,_,w,I){var M=ge();try{return ag(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;return ye(1,0),0n}}function W2(d,h,_,w){var I=ge();try{return sg(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function q2(d,h,_,w){var I=ge();try{return og(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function V2(d,h,_,w,I,M,z,F,J,te,fe,be){var Ie=ge();try{return ug(d,h,_,w,I,M,z,F,J,te,fe,be)}catch(Re){if(me(Ie),Re!==Re+0)throw Re;ye(1,0)}}function H2(d,h,_,w,I,M,z,F,J,te,fe){var be=ge();try{Jm(d,h,_,w,I,M,z,F,J,te,fe)}catch(Ie){if(me(be),Ie!==Ie+0)throw Ie;ye(1,0)}}function j2(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re,Vt,$s){var Z2=ge();try{eg(d,h,_,w,I,M,z,F,J,te,fe,be,Ie,Re,Vt,$s)}catch(xs){if(me(Z2),xs!==xs+0)throw xs;ye(1,0)}}function K2(d,h,_){var w=ge();try{return Ym(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function X2(d,h,_){var w=ge();try{return Zm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function Y2(d,h,_,w){var I=ge();try{Qm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function Br(){if(0<Oe)Ne=Br;else if(i)y==null||y(t),K();else{for(var d=ze;0<d.length;)d.shift()(t);0<Oe?Ne=Br:(t.calledRun=!0,k||(K(),y==null||y(t)))}}return i||(Ot=await ce(),Br()),t.PTR_SIZE=4,L?t:new Promise((d,h)=>{y=d,b=h})}var Vs,Hs,Dg=Z(()=>{var e,t;Vs=qs,Hs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Hs&&qs()}),Vr,Hr,js,st,Ks,Qn,Xs,Ys,jr,Zs,Kr,Qs,Xr,Js,Yr=Z(()=>{Gr(),Vr=typeof location>"u"?void 0:location.origin,Hr=self.location.href>"file:"&&self.location.href<"file;",js=()=>{{if(Hr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Vr).href}return self.location.href}},st=js(),Ks=()=>{if(st&&!st.startsWith("blob:"))return st.substring(0,st.lastIndexOf("/")+1)},Qn=(e,t)=>{try{let n=t??st;return(n?new URL(e,n):new URL(e)).origin===Vr}catch{return!1}},Xs=(e,t)=>{let n=t??st;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ys=(e,t)=>`${t??"./"}${e}`,jr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Zs=async e=>(await import(e)).default,Kr=(Bg(),Tn(Fs)).default,Qs=async()=>{if(!st)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Qn(st))return[void 0,Kr()];let e=await jr(st);return[e,Kr(e)]},Xr=(Dg(),Tn(Ws)).default,Js=async(e,t,n,r)=>{let i=Xr&&!(e||t);if(i)if(st)i=Qn(st)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Xr];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Xs(a,t),o=n&&s&&!Qn(s,t),u=o?await jr(s):s??Ys(a,t);return[o?u:void 0,await Zs(u)]}}}),Zr,Jn,kn,Qr,eo,to,no,Jr,ke,Xt=Z(()=>{Yr(),Jn=!1,kn=!1,Qr=!1,eo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},to=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},no=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Jr=async e=>{if(Jn)return Promise.resolve();if(kn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Qr)throw new Error("previous call to 'initializeWebAssembly()' failed.");kn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!no())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!to())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=eo();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,p=e.wasmBinary,[c,f]=await Js(o,a,n>1,!!p||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,b)=>{let $={numThreads:n};if(p)$.wasmBinary=p,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,o).href;else if(c){let x=Ks();x&&($.locateFile=T=>x+T)}f($).then(x=>{kn=!1,Jn=!0,Zr=x,y(),c&&URL.revokeObjectURL(c)},x=>{kn=!1,Qr=!0,b(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(Jn&&Zr)return Zr;throw new Error("WebAssembly is not initialized yet.")}}),ct,er,Se,ei=Z(()=>{Xt(),ct=(e,t)=>{let n=ke(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},er=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")er(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Se=e=>{let t=ke(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),ro,Pg=Z(()=>{Xt(),ei(),ro=e=>{let t=ke(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=ct(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Se("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&er(e.extra,"",new WeakSet,(s,o)=>{let u=ct(s,r),l=ct(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Se(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),io,ao,so,Yt,oo,uo,Ug=Z(()=>{Xt(),ei(),io=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ao=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},so=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Yt=(e,t,n,r)=>{let i=ct(t,r),a=ct(n,r);ke()._OrtAddSessionConfigEntry(e,i,a)!==0&&Se(`Can't set a session config entry: ${t} - ${n}.`)},oo=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",Yt(e,"session.disable_quant_qdq","1",n),Yt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&Yt(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Yt(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=ct(a,n),u=s.length,l=0,p=0;if(u>0){l=ke()._malloc(u*ke().PTR_SIZE),n.push(l),p=ke()._malloc(u*ke().PTR_SIZE),n.push(p);for(let c=0;c<u;c++)ke().setValue(l+c*ke().PTR_SIZE,s[c][0],"*"),ke().setValue(p+c*ke().PTR_SIZE,s[c][1],"*")}await ke()._OrtAppendExecutionProvider(e,o,l,p,u)!==0&&Se(`Can't append execution provider: ${a}.`)}},uo=async e=>{let t=ke(),n=0,r=[],i=e||{};so(i);try{let a=io(i.graphOptimizationLevel??"all"),s=ao(i.executionMode??"sequential"),o=typeof i.logId=="string"?ct(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let p=typeof i.optimizedModelFilePath=="string"?ct(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,p),n===0&&Se("Can't create session options."),i.executionProviders&&await oo(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Yt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,f]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=ct(c,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&Se(`Can't set a free dimension override: ${c} - ${f}.`)}return i.extra!==void 0&&er(i.extra,"",new WeakSet,(c,f)=>{Yt(n,c,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Se("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Zt,Ct,Qt,tr,nr,ti,ni,ri,de=Z(()=>{Zt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ct=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Qt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},tr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},nr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ti=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ni=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ri=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ii,lo=Z(()=>{Gr(),ii=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),co,po,ho,fo,ai,mo,we,Mt=Z(()=>{de(),co=["V","I","W","E","F"],po=(e,t)=>{console.log(`[${co[e]},${new Date().toISOString()}]${t}`)},ai=(e,t)=>{ho=e,fo=t},mo=(e,t)=>{let n=nr(e),r=nr(ho);n>=r&&po(n,typeof t=="function"?t():t)},we=(...e)=>{fo&&mo(...e)}}),go,fn,D,rr,yo,wo,_o,pe=Z(()=>{go=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},fn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=go.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let p=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class Dr{static size(t){return Dr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Dr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Dr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},rr=class Xn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Xn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Xn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Xn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Xn.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},yo=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!fn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},wo=-34028234663852886e22,_o=34028234663852886e22}),si,bo=Z(()=>{de(),si=(e,t)=>new(tr(t))(e)}),oi,ui,li,$o,di,xo,ci,pi,hi,vo,So,Lg=Z(()=>{de(),Mt(),oi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ui=(e,t)=>{if(t==="int32")return e;let n=oi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(tr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},li=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},$o=1,di=()=>$o++,xo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ci=(e,t)=>{let n=oi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},pi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ci(this.dataType,this.tensorShape)}destroy(){we("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=li(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},hi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=xo.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);we("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ci(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ui(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else we("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?li(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},vo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=di();return this.tensorTrackersById.set(e,new hi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){we("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){we("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=di(),s=new pi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new hi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,n)){we("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}we("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new pi({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},So=(...e)=>new vo(...e)}),Cn,To,Io,Fg=Z(()=>{de(),Xt(),bo(),Lg(),Mt(),Cn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),To=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Io=class{constructor(e){this.tensorManager=So(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ai(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){we("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){we("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)we("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>To(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){we("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Cn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){we("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Cn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");we("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return si(n,t)}}registerMLTensor(e,t,n,r){let i=Cn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return we("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(l);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":p=new Int32Array(l);break;case"uint32":p=new Uint32Array(l);break;case"int64":if(s){let c=ui(new Uint8Array(l),"int64");p=new Int32Array(c.buffer),i.dataType="int32"}else p=new BigInt64Array(l);break;case"uint64":p=new BigUint64Array(l);break;case"int8":p=new Int8Array(l);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return we("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Cn.get(Zt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),fi=Z(()=>{}),mi,ir,ar,Eo,ko,gi,yi,Co,Mo,Gg=Z(()=>{Mt(),fi(),mi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ir=[],ar=e=>Math.ceil(Number(e)/16)*16,Eo=e=>{for(let t=0;t<ir.length;t++){let n=ir[t];if(e<=n)return n}return Math.ceil(e/16)*16},ko=1,gi=()=>ko++,yi=async(e,t,n,r)=>{let i=ar(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Co=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of mi)ir.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=ar(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=ar(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=gi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Eo(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:gi(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await yi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=mi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(we("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Mo=(...e)=>new Co(...e)}),Ao,xe,Le=Z(()=>{Ao=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new Ao(e)}),mn,sr,qe,Ye,se,De,wi,gn,Bt,ae,Mn,W,re,Ro,_i,zo,Oo,he=Z(()=>{de(),pe(),mn=64,sr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},qe=(e,t=1)=>{let n=sr(e,t);return typeof n=="string"?n:n[0]},Ye=(e,t=1)=>{let n=sr(e,t);return typeof n=="string"?n:n[1]},se=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},De=e=>e%4===0?4:e%2===0?2:1,wi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,gn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Bt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Mn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=sr(t,i),p=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],f={indices:u,value:p,storage:c,tensor:t},m=L=>typeof L=="string"?L:`${L}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",b=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let L=0;L<s-1;L++)x+=`
    let dim${L} = current / ${ae($,L,s)};
    let rest${L} = current % ${ae($,L,s)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=L=>(g.offsetToIndices=!0,s<2?L:`o2i_${e}(${L})`),E=[];if(s>=2)for(let L=s-1;L>=0;L--)E.push(`${ae($,L,s)} * (indices[${L}])`);let k=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=L=>(g.indicesToOffset=!0,s<2?L:`i2o_${e}(${L})`),v=(...L)=>s===0?"0u":`${f.indices}(${L.map(m).join(",")})`,R=(L,Y)=>s<2?`${L}`:`${ae(L,Y,s)}`,O=(L,Y,K)=>s<2?`${L}=${K};`:`${ae(L,Y,s)}=${K};`,j={},P=(L,Y)=>{g.broadcastedIndicesToOffset=!0;let K=`${Y.name}broadcastedIndicesTo${e}Offset`;if(K in j)return`${K}(${L})`;let q=[];for(let oe=s-1;oe>=0;oe--){let ce=Y.indicesGet("outputIndices",oe+Y.rank-s);q.push(`${R($,oe)} * (${ce} % ${R(b,oe)})`)}return j[K]=`fn ${K}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${K}(${L})`},G=(L,Y)=>(()=>{if(f.storage===f.value)return`${e}[${L}]=${Y};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${Y}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=L=>(()=>{if(f.storage===f.value)return`${e}[${L}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${L}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${L}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),B=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${A(`i2o_${e}(indices)`)};
  }`,H=s<2?"":(()=>{let L=o.map(K=>`d${K}: u32`).join(", "),Y=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${L}) -> ${p} {
    return get_${e}ByIndices(${v(Y)});
  }`})(),X=(...L)=>{if(L.length!==s)throw new Error(`indices length must be ${s}`);let Y=L.map(m).join(",");return s===0?A("0u"):s===1?A(Y[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${Y})`)},ne=L=>s<2?A(L):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${L})`),N=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,ee=s<2?"":(()=>{let L=o.map(K=>`d${K}: u32`).join(", "),Y=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${L}, value: ${p}) {
    set_${e}ByIndices(${v(Y)}, value);
  }`})();return{impl:()=>{let L=[],Y=!1;return g.offsetToIndices&&(L.push(T),Y=!0),g.indicesToOffset&&(L.push(k),Y=!0),g.broadcastedIndicesToOffset&&(Object.values(j).forEach(K=>L.push(K)),Y=!0),g.set&&(L.push(ee),Y=!0),g.setByIndices&&(L.push(N),Y=!0),g.get&&(L.push(H),Y=!0),g.getByIndices&&(L.push(B),Y=!0),!a&&Y&&L.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${$} = ${f.indices}(${D.computeStrides(n).join(",")});`),L.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:P,indices:v,indicesGet:R,indicesSet:O,set:(...L)=>{if(L.length!==s+1)throw new Error(`indices length must be ${s}`);let Y=L[s];if(typeof Y!="string")throw new Error("value must be string");let K=L.slice(0,s).map(m).join(",");return s===0?G("0u",Y):s===1?G(K[0],Y):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${K}, ${Y})`)},setByOffset:G,setByIndices:(L,Y)=>s<2?G(L,Y):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${Y});`),get:X,getByOffset:A,getByIndices:ne,usage:r,name:e,strides:$,shape:b,rank:s}},W=(e,t,n,r=1)=>Mn(e,t,n,"input",r),re=(e,t,n,r=1)=>Mn(e,t,n,"output",r),Ro=(e,t,n)=>Mn(e,t,n,"atomicOutput",1),_i=(e,t,n,r=1)=>Mn(e,t,n,"internal",r),zo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=mn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Oo=(e,t)=>new zo(e,t)}),No,bi,Bo,Do,Po,Uo,ot,Lo,Fo,Dt=Z(()=>{de(),pe(),Le(),he(),No=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},bi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Bo=(e,t)=>D.sortBasedOnPerm(e,bi(e.length,t)),Do=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Po=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Uo=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ot=(e,t)=>{let n=e.dataType,r=e.dims.length,i=bi(r,t),a=Bo(e.dims,i),s=e.dims,o=a,u=r<2||Uo(i,e.dims),l;if(u)return l=g=>{let y=W("input",n,s,4),b=re("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:p,newPerm:c}=Po(e.dims,i),f=D.areEqual(c,[2,3,1]),m=D.areEqual(c,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let g=16;return l=y=>{let b=W("a",n,s.length),$=re("output",n,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...se(s,o)]}},getShaderSource:l}}return l=g=>{let y=W("a",n,s.length),b=re("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}

  ${Do(i,r,y,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...se(s,o)]}},getShaderSource:l}},Lo=(e,t)=>{No(e.inputs,t.perm),e.compute(ot(e.inputs[0],t.perm))},Fo=e=>xe({perm:e.perm})}),Go,Wo,qo,Vo,Ho,jo,Ko,Xo,Yo,Zo,pt,Qo,Jo,eu,tu,nu,ru,iu,au,su,ou,Wg=Z(()=>{de(),pe(),he(),xi(),Dt(),Go={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},qo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Vo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ho=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},jo=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Ko=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Xo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Yo=(e,t)=>{let n=[];if(!Xo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Zo=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=D.size(a),l=D.size(s),p=W("_A",n[0].dataType,o),c=re("output",i,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${qo[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Go[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wo[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Vo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},pt=(e,t,n,r)=>{let i=e.inputs.length===1?n:$i(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=D.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=Yo(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ot(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Ho(o.length,u.dims.length));let[p,c]=jo(u.dims,o),f=p;i.keepDims&&(f=Ko(p,s)),e.compute(Zo(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,c),{inputs:[u]})},Qo=(e,t)=>{pt(e,"ReduceMeanShared",t,"mean")},Jo=(e,t)=>{pt(e,"ReduceL1Shared",t,"l1")},eu=(e,t)=>{pt(e,"ReduceL2Shared",t,"l2")},tu=(e,t)=>{pt(e,"ReduceLogSumExpShared",t,"logSumExp")},nu=(e,t)=>{pt(e,"ReduceMaxShared",t,"max")},ru=(e,t)=>{pt(e,"ReduceMinShared",t,"min")},iu=(e,t)=>{pt(e,"ReduceProdShared",t,"prod")},au=(e,t)=>{pt(e,"ReduceSumShared",t,"sum")},su=(e,t)=>{pt(e,"ReduceSumSquareShared",t,"sumSquare")},ou=(e,t)=>{pt(e,"ReduceLogSumShared",t,"logSum")}}),ht,uu,or,$i,ft,lu,du,cu,pu,hu,fu,mu,gu,yu,wu,mt,_u,bu,$u,xu,vu,Su,Tu,Iu,Eu,ku,xi=Z(()=>{de(),pe(),Le(),he(),Wg(),ht=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},uu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],or=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,p=l.length,c=D.normalizeAxes(i,p),f=!o&&c.length===0;l.forEach((y,b)=>{f||c.indexOf(b)>=0?s&&u.push(1):u.push(y)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let b=[],$=W("_A",n[0].dataType,p),x=re("output",a,m),T=r($,x,c),S=T[2];for(let E=0,k=0;E<p;E++)f||c.indexOf(E)>=0?(s&&k++,S=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${$.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(b.push(`${$.indicesSet("input_indices",E,x.indicesGet("output_indices",k))};`),k++);return`

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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...se(l,u)]})}},$i=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),xe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ft=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:$i(i,n);e.compute(or(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?uu:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},lu=(e,t)=>{ht(e.inputs),ft(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},du=(e,t)=>{ht(e.inputs),ft(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},cu=(e,t)=>{ht(e.inputs),ft(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},pu=(e,t)=>{ht(e.inputs),ft(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},hu=(e,t)=>{ht(e.inputs),ft(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},fu=(e,t)=>{ht(e.inputs),ft(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},mu=(e,t)=>{ht(e.inputs),ft(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},gu=(e,t)=>{ht(e.inputs),ft(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},yu=(e,t)=>{ht(e.inputs),ft(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},wu=(e,t)=>{ht(e.inputs),ft(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},mt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},_u=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):Qo(e,t)},bu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Jo(e,t)},$u=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):eu(e,t)},xu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):tu(e,t)},vu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):nu(e,t)},Su=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):ru(e,t)},Tu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):iu(e,t)},Iu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):au(e,t)},Eu=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):su(e,t)},ku=(e,t)=>{mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):ou(e,t)}}),vi,Cu,Mu,Si,qg=Z(()=>{de(),Le(),xi(),vi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Cu=(e,t)=>{vi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(or("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Mu=(e,t)=>{vi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(or("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Si=e=>xe(e)}),Au,ur,Ru,zu,Ou,An,Nu,Bu,Ti=Z(()=>{de(),pe(),fi(),he(),Au=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],p=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,f=c,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let b=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:p,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ur=(e,t,n)=>t&&e?`
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
    `,Ru=(e,t,n,r,i,a,s,o)=>{let u=De(s?1:a),l=64,p=a/u;p<l&&(l=32);let c=Math.ceil(a/u/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:p},{type:12,data:c}],m=qe(e.dataType,u),g=Ye(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let b=$=>{let x=re("x",e.dataType,e.dims,u),T=[x],S=s?W("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let E=o?W("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let k=Ye(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(C).declareVariables(...T)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ur(S,E,!1)}
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
        x[offset + i] = ${x.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},zu=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,f,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=De(a.headSize),$=a.headSize/b,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],E=c&&r&&D.size(r.dims)>0,k=["type","type"];E&&k.push("type"),i&&k.push("type"),o&&k.push("type"),u&&k.push("type");let C=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=R=>{let O=W("q",t.dataType,t.dims,b),j=W("key",n.dataType,n.dims,b),P=[O,j];if(E){let N=W("past_key",r.dataType,r.dims,b);P.push(N)}i&&P.push(W("attention_bias",i.dataType,i.dims));let G=o?W("seq_lens",o.dataType,o.dims):void 0;G&&P.push(G);let A=u?W("total_sequence_length_input",u.dataType,u.dims):void 0;A&&P.push(A);let B=re("output",t.dataType,p),H=[B];c&&H.push(re("present_key",t.dataType,m,b));let X=Ye(1,b),ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${O.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${O.type.storage}, ${x*x}>;
  ${R.registerUniforms(ne).declareVariables(...P,...H)}
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
    ${ur(G,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&c?`
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
          value += ${X}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${B.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Ou=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,p=i.vHiddenSize*l,c=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,p],y=12,b={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&D.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=k=>{let C=W("probs",t.dataType,t.dims),v=W("v",n.dataType,n.dims),R=[C,v];x&&R.push(W("past_value",r.dataType,r.dims));let O=s?W("seq_lens",s.dataType,s.dims):void 0;s&&R.push(O);let j=o?W("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(j);let P=[re("output",t.dataType,g)];c&&P.push(re("present_value",t.dataType,m));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${k.registerUniforms(G).declareVariables(...R,...P)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ur(O,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:$}),getShaderSource:E}},An=(e,t,n,r,i,a,s,o,u,l,p=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,y=f>1?l.pastSequenceLength:0,b=y+l.kvSequenceLength,$=u&&D.size(u.dims)>0?u:void 0,x=[t,n];m&&D.size(m.dims)>0&&x.push(m),$&&x.push($),p&&x.push(p),c&&x.push(c);let T=e.compute(zu(f,t,n,m,$,l,y,p,c),{inputs:x,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Ru(T,l.batchSize,l.numHeads,y,l.sequenceLength,b,p,c),{inputs:p&&c?[T,p,c]:[T],outputs:[]});let S=[T,r];g&&D.size(g.dims)>0&&S.push(g),p&&S.push(p),c&&S.push(c),e.compute(Ou(f,T,r,g,l,y,p,c),{inputs:S,outputs:f>1?[0,2]:[0]})},Nu=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=c=>{let f=re("output_q",u[0].dataType,n),m=re("output_k",u[0].dataType,n),g=re("output_v",u[0].dataType,n),y=W("input",u[0].dataType,u[0].dims),b=W("weight",u[1].dataType,u[1].dims),$=W("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(y,b,$,f,m,g)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},Bu=(e,t)=>{let n=Au(e.inputs,t),[r,i,a]=Nu(e,n);return An(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Du,Pu,Uu,Lu,Vg=Z(()=>{ut(),de(),pe(),Le(),he(),Du=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Pu=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?De(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=D.size(a)/s,l=r,p=l?a.length:a,c=W("x",e[0].dataType,e[0].dims,s),f=W("scale",e[1].dataType,e[1].dims,o),m=W("bias",e[2].dataType,e[2].dims,o),g=W("inputMean",e[3].dataType,e[3].dims,o),y=W("inputVar",e[4].dataType,e[4].dims,o),b=re("y",e[0].dataType,p,s),$=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,m,g,y,b)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...se(a)]:[{type:12,data:u}]})}},Uu=e=>xe(e),Lu=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Uu({...t,outputCount:r});if(Ee.webgpu.validateInputContent&&Du(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Pu(n,i))}}),Fu,Gu,Wu,Hg=Z(()=>{pe(),he(),Fu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Gu=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,a=W("input",i,t,4),s=W("bias",i,[n],4),o=W("residual",i,t,4),u=re("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Wu=e=>{Fu(e.inputs),e.compute(Gu(e.inputs))}}),qu,$e,Vu,Hu,ju,Ku,Xu,Yu,Zu,Qu,Ju,el,tl,nl,rl,il,Rn,al,lr,sl,ol,ul,ll,dl,cl,pl,hl,fl,ml,gl,yl,wl,_l,bl,$l,Ii,xl,Ei,ki,vl,Sl,Tl,Il,El,kl,Ci=Z(()=>{de(),pe(),Le(),he(),qu=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=W("inputData",n,[o],4),p=re("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},$e=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>qu(l,D.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(l[0].dims)/64/4)},programUniforms:u})}},Vu=e=>{e.compute($e(e.inputs[0],"Abs","abs"))},Hu=e=>{e.compute($e(e.inputs[0],"Acos","acos"))},ju=e=>{e.compute($e(e.inputs[0],"Acosh","acosh"))},Ku=e=>{e.compute($e(e.inputs[0],"Asin","asin"))},Xu=e=>{e.compute($e(e.inputs[0],"Asinh","asinh"))},Yu=e=>{e.compute($e(e.inputs[0],"Atan","atan"))},Zu=e=>{e.compute($e(e.inputs[0],"Atanh","atanh"))},Qu=e=>xe(e),Ju=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($e(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},el=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xe({min:t,max:n})},tl=(e,t)=>{let n=t||el(e.inputs),r=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},nl=e=>{e.compute($e(e.inputs[0],"Ceil","ceil"))},rl=e=>{e.compute($e(e.inputs[0],"Cos","cos"))},il=e=>{e.compute($e(e.inputs[0],"Cosh","cosh"))},Rn=e=>xe(e),al=(e,t)=>{let n=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},lr=(e="f32")=>`
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
}`,sl=e=>{let t=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,lr(t)))},ol=e=>{e.compute($e(e.inputs[0],"Exp","exp"))},ul=e=>{e.compute($e(e.inputs[0],"Floor","floor"))},ll=e=>{let t=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,lr(t)))},dl=(e,t)=>{let n=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},cl=e=>{e.compute($e(e.inputs[0],"Not",t=>`!${t}`))},pl=e=>{e.compute($e(e.inputs[0],"Neg",t=>`-${t}`))},hl=e=>{e.compute($e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},fl=e=>{let t=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},ml=e=>{e.compute($e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},gl=e=>xe(e),yl=(e,t)=>{let n=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},wl=e=>{e.compute($e(e.inputs[0],"Sin","sin"))},_l=e=>{e.compute($e(e.inputs[0],"Sinh","sinh"))},bl=e=>{e.compute($e(e.inputs[0],"Sqrt","sqrt"))},$l=e=>{e.compute($e(e.inputs[0],"Tan","tan"))},Ii=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,xl=e=>{e.compute($e(e.inputs[0],"Tanh",Ii))},Ei=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ii("v")};
}
`,ki=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,vl=e=>{let t=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"FastGelu",ki,Ei(t),void 0,e.inputs[0].dataType))},Sl=(e,t)=>{let n=Ye(e.inputs[0].dataType);return e.compute($e(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Tl=e=>{e.compute($e(e.inputs[0],"Log","log"))},Il=(e,t)=>`
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
`,El=e=>`quick_gelu_impl(${e})`,kl=(e,t)=>{let n=Ye(e.inputs[0].dataType);e.compute($e(e.inputs[0],"QuickGelu",El,Il(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Cl,Ml,Al,jg=Z(()=>{pe(),he(),Ci(),Cl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ml=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=W("input",e[0].dataType,e[0].dims,4),r=W("bias",e[0].dataType,[e[0].dims[2]],4),i=re("output",e[0].dataType,t,4),a=D.size(t)/4,s=qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${lr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Al=e=>{Cl(e.inputs),e.compute(Ml(e.inputs))}}),Rl,zl,gt,Ol,Nl,Bl,Dl,Pl,Ul,Ll,Fl,Gl,Wl,Kg=Z(()=>{de(),pe(),he(),Rl=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f,m;typeof o=="string"?f=m=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=re("outputData",p,r.length,4),y=W("aData",u,t.length,4),b=W("bData",l,n.length,4),$;if(i)if(a){let x=D.size(t)===1,T=D.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,E="")=>{let k=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${E}(${f(k,C)});
          `};p===9?$=`
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
      }`},zl=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!D.areEqual(o,u),p=o,c=D.size(o),f=!1,m=!1,g=[l];if(l){let y=fn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");p=y.slice(),c=D.size(p);let b=D.size(o)===1,$=D.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push($),g.push(x),g.push(T);let S=1;for(let E=1;E<p.length;E++){let k=o[o.length-E],C=u[u.length-E];if(k===C)S*=k;else break}S%4===0?(m=!0,f=!0):(b||$||x||T)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Rl(y,o,u,p,f,l,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(p)/4)},...se(o,u,p)]})}},gt=(e,t,n,r,i,a)=>{e.compute(zl(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Ol=e=>{gt(e,"Add",(t,n)=>`${t}+${n}`)},Nl=e=>{gt(e,"Div",(t,n)=>`${t}/${n}`)},Bl=e=>{gt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Dl=e=>{gt(e,"Mul",(t,n)=>`${t}*${n}`)},Pl=e=>{let t=W("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;gt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Ul=e=>{gt(e,"Sub",(t,n)=>`${t}-${n}`)},Ll=e=>{gt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Fl=e=>{gt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Gl=e=>{gt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Wl=e=>{gt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),ql,Vl,Hl,jl,Kl,Xl,Xg=Z(()=>{de(),pe(),Le(),he(),ql=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Vl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Hl=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},jl=(e,t,n,r)=>{let i=D.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],p=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=W(`input${y}`,r,l[y]),u.push("rank"),p.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)p.push(...se(e[y].dims));p.push(...se(n));let c=re("output",r,n.length),f=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)y.registerUniform(`sizeInConcatAxis${b}`,"u32");return y.declareVariables(...s,c)})()}

  ${Vl(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Hl(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g}},Kl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);ql(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>D.size(o.dims)>0);e.compute(jl(s,i,a,n[0].dataType),{inputs:s})},Xl=e=>xe({axis:e.axis})}),Jt,en,tn,Mi,nn=Z(()=>{de(),pe(),Jt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},en=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},tn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Mi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[wo,_o];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),He,Yl,Ai=Z(()=>{He=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Yl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zl,Yg=Z(()=>{Zl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),zn,Ri,zi=Z(()=>{de(),pe(),he(),nn(),zn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ae(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ae(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Ri=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],p=s[s.length-1],c=De(l),f=De(p),m=De(u),g=D.size(n)/c/m,y=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),$=[D.size(b),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:p}];en(t,x),x.push(...se(b,s,o)),y&&x.push(...se(e[2].dims)),x.push(...se($));let T=S=>{let E=_i("batch_dims",e[0].dataType,b.length),k=W("a",e[0].dataType,s.length,f),C=W("b",e[1].dataType,o.length,c),v=re("output",e[0].dataType,$.length,c),R=qe(v.type.tensor),O=Jt(t,v.type.value,R),j=[k,C],P="";if(y){let B=i?c:1;j.push(W("bias",e[2].dataType,e[2].dims.length,B)),P=`${i?`value += bias[col / ${B}];`:`value += ${v.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];tn(t,G);let A=()=>{let B=`var a_data: ${k.type.value};`;for(let H=0;H<f;H++)B+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${c}];`;for(let H=0;H<m;H++){B+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${f}];`;for(let X=0;X<f;X++)B+=`
            values[${H}] = fma(${C.type.value}(a_data${f===1?"":`[${X}]`}), b_data${X}, values[${H}]);
`}return B};return`
  ${S.registerUniforms(G).registerInternalVariables(E).declareVariables(...j,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${zn("a_indices",k,k.rank-2,E.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${zn("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${P}
      ${O}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:T}}}),Ql,Jl,Oi,Ni,ed,Bi,td,dr,Di=Z(()=>{de(),pe(),he(),nn(),zi(),Ai(),Ql=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Jl=(e,t)=>e?`
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
        }`,Oi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],p=i?u:a,c=i?a:u,f=p/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${p/f}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
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
          ${Ql(i,r)}
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
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Jl(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ni=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ed=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Bi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],p=e[0]*t[0],c=i?l:a,f=i?a:l;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=c/t[0],y=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ni(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
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
      ${Ni(i,r)}
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
      ${ed(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${c}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${p}>, ${a}>;
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
`},td=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${He(e,l)} {
      var value = ${He(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${zn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${He(e,l)} {
      var value = ${He(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${zn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${He(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${He(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},dr=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),p=r?r.slice(0,-2):n.slice(0,-2),c=D.size(p),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],y=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/b[0]),Math.ceil(f/$[1]/b[1]),Math.ceil(c/$[2]/b[2])],T=y?4:1,S=[...u,f,m/T],E=S.length,k=[...l,m,g/T],C=k.length,v=[c,f,g/T],R=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];en(t,R),R.push(...se(p,S,k));let O=["rank","rank"],j=e.length>2;j&&(R.push(...se(e[2].dims)),O.push("rank")),R.push(...se(v));let P=G=>{let A=p.length,B=_i("batchDims",e[0].dataType,A,1),H=qe(e[0].dataType),X=W("a",e[0].dataType,E,T),ne=W("b",e[1].dataType,C,T),N=re("result",e[0].dataType,v.length,T),ee=[X,ne];if(j){let oe=i?T:1;ee.push(W("bias",e[2].dataType,e[2].dims.length,oe))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];tn(t,L);let Y=qe(N.type.tensor),K=Jt(t,N.type.value,Y),q=td(T,j,K,[B,X,ne,N],i);return`
  ${G.registerUniforms(L).registerInternalVariables(B).declareVariables(...ee,N)}
  ${q}
  ${y?Oi(b,$,H,B):Bi(b,$,H,B)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${y};${i}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:P}}}),nd,rd,Zg=Z(()=>{de(),Mt(),he(),nn(),Ai(),Yg(),Di(),nd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let p=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    var resData = ${He(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${He(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${He(s,l)}(0.0);`,S=e?r&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${He(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${He(o,l)}(0.0);`,E=He(u,l),k=He(e?s:o,l),C=He(e?o:s,l),v=Jt(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Yl(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},rd=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],c=n[0],f=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(p%4===0||p%3===0)&&g%4===0,b=l?g:f*m,$=l?f*m:g,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/x[0]/T[0]),Math.ceil($/x[1]/T[1]),Math.ceil(c/x[2]/T[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?l&&p%4!==0?3:4:1,k=x[1]*T[1],C=x[0]*T[0],v=Math.max(x[0]*E,x[1]),R=r%k===0,O=i%C===0,j=a%v===0,P=y?[E,4,4]:[1,1,1],G=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];en(t,G),G.push(...se(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(G.push(...se(e[2].dims)),A.push("rank")),G.push(...se(n));let B=H=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];tn(t,X);let ne=y?4:1,N=qe(e[0].dataType),ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${N}>`:N}) {
        result[flatIndex] = ${y?`vec4<${N}>`:N}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${N}>`:N}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,L=W("x",e[0].dataType,e[0].dims.length,E===3?1:E),Y=W("w",e[1].dataType,e[1].dims.length,ne),K=[L,Y],q=re("result",e[0].dataType,n.length,ne);if(s){let oe=W("bias",e[2].dataType,e[2].dims.length,ne);K.push(oe),ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${N}>`:N} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Zl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(X).declareVariables(...K,q)}
        ${ee}
        ${nd(l,R,O,j,s,t,P[0],P[1],P[2],N)}
        ${y?Oi(T,x,N,void 0,!l,v):Bi(T,x,N,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${O};${j};${k};${C};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:G}),getShaderSource:B}}}),id,Pi,On,ad,Ui,sd,od,ud,Qg=Z(()=>{de(),Mt(),pe(),he(),nn(),Ai(),id=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Pi=e=>typeof e=="number"?[e,e,e]:e,On=(e,t)=>t<=1?e:e+(e-1)*(t-1),ad=(e,t,n,r=1)=>{let i=On(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ui=(e,t,n,r,i)=>{i==null&&(i=ad(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},sd=(e,t,n,r,i,a,s,o,u,l)=>{let p,c,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Ui([t,n,r,1],[o,u,l],1,[i,a,s],e);c=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,b,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Ui([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);c=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,y=(f-1)*a+u-n,b=(m-1)*s+l-r,$=Math.floor(g/2),x=g-$,T=Math.floor(y/2),S=y-T,E=Math.floor(b/2),k=b-E;p={top:T,bottom:S,left:E,right:k,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:f,outWidth:m}},od=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,p,c;if(s==="channelsLast")[o,u,l,p,c]=e;else if(s==="channelsFirst")[o,c,u,l,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,y]=t,[b,$,x]=Pi(n),[T,S,E]=Pi(r),k=On(m,T),C=On(g,S),v=On(y,E),{padInfo:R,outDepth:O,outHeight:j,outWidth:P}=sd(i,u,l,p,b,$,x,k,C,v),G=a?f*c:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,G,O,j,P]:s==="channelsLast"&&(A=[o,O,j,P,G]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:p,inChannels:c,outDepth:O,outHeight:j,outWidth:P,outChannels:G,padInfo:R,strideDepth:b,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:E,inShape:e,outShape:A,filterShape:t}},ud=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,$)=>$)},l=[Math.ceil(id(u.x.map(b=>n[b]))/o[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let p=1,c=D.size(n),f=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];en(t,f),f.push(...se(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...se(e[2].dims)),m.push("rank")),f.push(...se(n));let y=b=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];tn(t,$);let x=1,T=qe(e[0].dataType),S=W("x",e[0].dataType,e[0].dims.length,p),E=W("W",e[1].dataType,e[1].dims.length,x),k=[S,E],C=re("result",e[0].dataType,n.length,x),v="";if(g){let j=W("bias",e[2].dataType,e[2].dims.length,x);k.push(j),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?ae("coords",4,5):ae("coords",1,5)}];
        }`}let R=He(p,T),O=Jt(t,R,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${b.registerUniforms($).declareVariables(...k,C)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${ae("coords",0,S.rank)};
              let d2 = ${s?ae("coords",S.rank-1,S.rank):ae("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?ae("coords",1,S.rank):ae("coords",2,S.rank)},
              ${s?ae("coords",2,S.rank):ae("coords",3,S.rank)},
              ${s?ae("coords",3,S.rank):ae("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ae("uniforms.x_shape",1,S.rank):ae("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?ae("uniforms.x_shape",2,S.rank):ae("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?ae("uniforms.x_shape",3,S.rank):ae("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?ae("uniforms.x_shape",4,S.rank):ae("uniforms.x_shape",1,S.rank)};
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
              ${O}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:f}),getShaderSource:y}}}),ld,dd,Jg=Z(()=>{de(),pe(),he(),nn(),ld=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],p=l/t.group,c=u&&p>=4?De(l):1,f=D.size(n)/c,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];en(t,m),m.push(...se(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...se([n[0],n[1],n[2],n[3]/c]));let y=b=>{let $=re("output",e[0].dataType,n.length,c),x=qe($.type.tensor),T=Jt(t,$.type.value,x),S=W("x",e[0].dataType,s.length),E=W("w",e[1].dataType,o.length,c),k=[S,E];i&&k.push(W("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];tn(t,C);let v=u?`
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

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(C).declareVariables(...k,$)}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},dd=(e,t,n,r)=>{let i=e.length>2,a=De(n[3]),s=De(n[2]),o=D.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];en(t,c),c.push(...se(u,l,p));let f=(s-1)*t.strides[1]+l[1],m=g=>{let y=re("output",e[0].dataType,p.length,a),b=qe(y.type.tensor),$=Jt(t,y.type.value,b),x=W("x",e[0].dataType,u.length,a),T=W("w",e[1].dataType,l.length,a),S=[x,T];i&&S.push(W("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return tn(t,k),`
  ${g.registerUniforms(k).declareVariables(...S,y)}
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

    var x_vals: array<${x.type.value}, ${f}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
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
      ${E}
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),cd,cr,pd,pr,Li,Fi,hd,fd,Gi,e0=Z(()=>{pe(),Zg(),Qg(),Di(),Jg(),nn(),zi(),Dt(),cd=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),c=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-p[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},cr=[2,3,1,0],pd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},pr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();rr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Li=e=>{let t=Mi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Fi=(e,t,n,r)=>{let i=n.format==="NHWC",a=cd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(ot(t[1],cr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),k.push(C)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(dd(k,n,a,r),{inputs:k}):e.compute(ld(k,n,a,r),{inputs:k});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],p=t[1].dims[2],c=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&p===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||p===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],C,v,R,O=[];if(i){let G=e.kernelCustomData.wT??e.compute(ot(t[1],cr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),y){let A=o*u*l;C=t[0].reshape([1,k,A]),v=G.reshape([1,A,g]),R=[1,k,g]}else C=t[0].reshape([k,o*u,l]),v=G.reshape([1,l,g]),R=[k,f*m,g];O.push(C),O.push(v)}else C=t[0].reshape([k,l,o*u]),v=t[1].reshape([1,g,l]),R=[k,g,f*m],O.push(v),O.push(C);s&&O.push(t[2]);let j=R[2],P=O[0].dims[O[0].dims.length-1];j<8&&P<8?e.compute(Ri(O,n,a,R,i,r),{inputs:O}):e.compute(dr(O,n,a,R,i,r),{inputs:O});return}let b=!0,$=e.kernelCustomData.wT??e.compute(ot(t[1],cr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];s&&x.push(t[2]);let T=i?f*m:g,S=i?g:f*m,E=p*c*l;e.compute(rd(x,n,a,T,S,E,s,b,r),{inputs:x})},hd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=pr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Fi(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},fd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=pr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=od(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ud(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Gi=(e,t)=>{if(pd(e.inputs,t),e.inputs[0].dims.length===3)hd(e,t);else if(e.inputs[0].dims.length===5)fd(e,e.inputs,t);else{let n=pr(t,e.inputs);Fi(e,e.inputs,n)}}}),md,t0=Z(()=>{de(),Mt(),pe(),he(),md=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],p=a?De(u):1,c=a&&l===1&&u>=4,f=c?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,g=a?De(l):1,y=a?l===1?p:g:1,b=D.size(i)/g,$=[Math.ceil(b/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:T},{type:12,data:S},{type:12,data:E},{type:12,data:k},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:l},...se(e[0].dims,e[1].dims)];r&&(v.push(...se(e[2].dims)),x.push("rank")),v.push(...se(i));let R=O=>{let j=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=qe(e[0].dataType),G=a?1:2,A=a?2:3,B=a?3:1,H=W("W",e[1].dataType,e[1].dims.length,y),X=W("Dy",e[0].dataType,e[0].dims.length,p),ne=[X,H];r&&ne.push(W("bias",e[2].dataType,[i[B]].length,g));let N=re("result",e[0].dataType,i.length,g),ee=()=>{let K="";if(c)p===4?K+=`
        let xValue = ${X.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?K+=`
          dotProd = dotProd + dot(vec4<${P}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}), vec4<${P}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(K+=`
          dotProd = dotProd + dot(vec4<${P}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}, ${X.getByOffset("x_offset + 2u")}, ${X.getByOffset("x_offset + 3u")}), vec4<${P}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${a?X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):X.get("batch","inputChannel","idyR","idyC")};
        `,p===1)K+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<p;q++)K+=`
            let wValue${q} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return K},L=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let K="";if(p===1){K+="dotProd = dotProd";for(let q=0;q<m;q++)K+=`
            + ${X.getByOffset(`x_offset + ${q}`)} * ${H.getByOffset(`w_offset + ${q}`)}`;K+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);K+=`
          let xValue = ${X.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},Y=`
            let outputIndices = ${N.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${N.indicesGet("outputIndices",0)};
            let d1 = ${N.indicesGet("outputIndices",B)};
            let r = ${N.indicesGet("outputIndices",G)};
            let c = ${N.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${N.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${ee()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${L()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${N.setByOffset("global_idx","value")};
          `;return`
    ${O.registerUniforms(j).declareVariables(...ne,N)}
      ${O.mainStart()}
      ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${y}${g}${c}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),gd,yd,wd,Wi,_d,bd,qi,$d,xd,n0=Z(()=>{t0(),nn(),Dt(),gd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,yd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},wd=(e,t,n,r,i,a,s,o,u,l)=>{let p=e.length-2,c=l.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,y=e.length-p-(o?1:0);g<p;++g,++y){let b=e[y],$=c?b*s[g]:l[g],x=gd(b,s[g],a[g],t[y],n[g],$);yd(x,r,a,g,g+p),c&&l.push(s[g]*(b-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+p])}l.splice(0,0,f),l.splice(o?3:1,0,m)},Wi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}wd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),p},_d=e=>{let t=Mi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),p=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},bd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},qi=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ot(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(md(a,n,r),{inputs:a})},$d=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Wi({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);qi(e,r,l,p=>n?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},xd=(e,t)=>{if(bd(e.inputs,t),e.inputs[0].dims.length===3)$d(e,t);else{let n=Wi(t,e.inputs);qi(e,e.inputs,n)}}}),vd,Sd,Td,r0=Z(()=>{de(),pe(),Le(),he(),vd=(e,t,n,r)=>{let i=D.size(t),a=t.length,s=W("input",e,a),o=re("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=D.normalizeAxis(u,a),p=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=ae("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",y=r.reverse?m:f+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...se(t,t)]}),getShaderSource:p}},Sd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(vd(r,n,i,t),{inputs:[0]})},Td=e=>{let t=e.exclusive===1,n=e.reverse===1;return xe({exclusive:t,reverse:n})}}),Id,Ed,kd,Cd,Md,i0=Z(()=>{de(),pe(),Le(),he(),Id=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ed=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},kd=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,p=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=p?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,m=e.dataType,g=W("a",m,f),y=re("output",m,f),b=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Ed(o,f,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=D.size(x),S=c.dims,E=D.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...se(S,E)]}},getShaderSource:b}},Cd=(e,t)=>{Id(e.inputs),e.compute(kd(e.inputs[0],t))},Md=e=>xe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),hr,Nn,Vi,Ad,Rd,zd,Od,Hi,Nd,Bd,Dd,a0=Z(()=>{de(),pe(),Le(),he(),hr="[a-zA-Z]|\\.\\.\\.",Nn="("+hr+")+",Vi="^"+Nn+"$",Ad="("+Nn+",)*"+Nn,Rd="^"+Ad+"$",zd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Od=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Rd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Vi)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Nn)))throw new Error("Invalid RHS");(i=r.match(RegExp(hr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(Vi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(hr,"g")),l=new zd(r);return u==null||u.forEach((p,c)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else l.addSymbol(p,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,n[o++],r)}),l}},Hi=e=>e+"_max",Nd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,p)=>W(`input${p}`,t,l)),a=D.size(r),s=re("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let p=[],c="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],y=[],b=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,E)=>{var k;if(n.rhs.symbolToIndices.has(E)){let C=(k=n.rhs.symbolToIndices.get(E))==null?void 0:k[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let O=v.symbolToIndices.get(E);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(j=>{p.push(`${i[R].indicesSet(`input${R}Indices`,j,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(O=>{g.push(`${i[v].indicesSet(`input${v}Indices`,O,`${E}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Hi(E)}; ${E}++) {`),b.push("}")});let T=x?[...p,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...p,f,...y,...g,c,...$,m,...b];return`
            ${l.registerUniforms(o.map(S=>({name:`${Hi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var f;return{type:12,data:((f=n.symbolToInfo.get(c))==null?void 0:f.dimValue)||0}});l.push({type:12,data:a});let p=e.map((c,f)=>[...se(c)]).reduce((c,f)=>c.concat(f),l);return p.push(...se(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},Bd=(e,t)=>{let n=new Od(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Nd(i,e.inputs[0].dataType,n,r))},Dd=e=>{let t=e.equation.replace(/\s+/g,"");return xe({equation:t})}}),Pd,ji,Ud,Ld,Fd,s0=Z(()=>{de(),pe(),he(),Pd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ji=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Ud=(e,t)=>e.length>t.length?ji(e,t):ji(t,e),Ld=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Ud(t,n),i=e[0].dataType,a=i===9||D.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),l=c=>{let f=W("input",i,t.length,s),m=re("output",i,r.length,o),g;if(i===9){let y=(b,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${b}[${$}] = ${x}(${f.getByOffset(`index${$}`)}[component${$}]);
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
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},p=[{type:12,data:u},...se(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Fd=e=>{Pd(e.inputs),e.compute(Ld(e.inputs),{inputs:[0]})}}),Gd,Wd,o0=Z(()=>{de(),pe(),he(),Ci(),Gd=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,a=s=>{let o=W("x",t,[1],4),u=W("bias",t,[1],4),l=re("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,l)}

    ${Ei(Ye(t))}

    ${s.mainStart(mn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ki("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/mn/4)}})}},Wd=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?vl(e):e.compute(Gd(e.inputs))}}),qd,Vd,Hd,jd,u0=Z(()=>{de(),pe(),Le(),he(),qd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Vd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(D.size(s)/u),p=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...se(e[0].dims,e[1].dims,s)],c=f=>{let m=W("data",e[0].dataType,e[0].dims.length,u),g=W("inputIndices",e[1].dataType,e[1].dims.length),y=re("output",e[0].dataType,s.length,u),b=x=>{let T=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let E=0;E<T;E++)S+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let E=0,k=0;E<i;E++)E===a?(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,k+=T):(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${k}]`:`outputIndices${x}`};`,k++);return S},$;if(e[0].dataType===9){let x=(T,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${E}(${m.getByOffset(`index${S}`)}[component${S}]);
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
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c}},Hd=e=>xe({axis:e.axis}),jd=(e,t)=>{let n=e.inputs;qd(n),e.compute(Vd(e.inputs,t))}}),Kd,Xd,Yd,l0=Z(()=>{de(),pe(),he(),Kd=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];l.push(...se(t.dims,p));let c=f=>{let m=W("indices_data",t.dataType,t.dims.length),g=re("input_slice_offsets_data",12,1,1),y=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(...y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Xd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=D.sizeToDimension(a,a.length-1),u=D.sizeFromDimension(r,t.batchDims+s),l=D.sizeToDimension(r,t.batchDims),p=D.sizeFromDimension(r,t.batchDims),c=o/l,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=Kd(e,n[1],f,t.batchDims,r,o,c,p,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(y)),$=D.size(b),x=[{type:12,data:$},{type:12,data:u},...se(n[0].dims,g.dims,b)],T=S=>{let E=W("data",n[0].dataType,n[0].dims.length),k=W("slice_offsets",12,g.dims.length),C=re("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,k,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],g]})},Yd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Zd,Qd,Jd,ec,d0=Z(()=>{de(),pe(),Le(),he(),Zd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Qd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.gatherAxis,i),s=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=D.size(o),l=e[2].dataType,p=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...se(...e.map((m,g)=>m.dims),o)],f=m=>{let g=W("data",e[0].dataType,e[0].dims.length),y=W("inputIndices",e[1].dataType,e[1].dims.length),b=W("scales",e[2].dataType,e[2].dims.length),$=e.length>3?W("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=re("output",l,o.length),T=[g,y,b];$&&T.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ye(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}},Jd=(e,t)=>{let n=e.inputs;Zd(n,t),e.compute(Qd(e.inputs,t))},ec=e=>xe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),tc,nc,rc,ic,c0=Z(()=>{de(),pe(),Le(),he(),tc=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},nc=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),p=D.size(l),c=W("input",r,i),f=W("indicesInput",s,a.length),m=re("output",r,l.length),g=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return g.push(...se(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,f,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},rc=e=>xe({axis:e.axis}),ic=(e,t)=>{let n=e.inputs;tc(n),e.compute(nc(e.inputs,t))}}),ac,sc,oc,uc,p0=Z(()=>{de(),pe(),he(),ac=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},sc=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=yo.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),p=Math.ceil(i/u),c=!0,f=D.size(o),m=[{type:12,data:c?l:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...se(e[2].dims)),g.push("rank")),m.push(...se(o));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=W("a",e[0].dataType,e[0].dims),E=W("b",e[1].dataType,e[1].dims),k=S.type.value,C=null,v=[S,E];e.length===3&&(C=W("c",e[2].dataType,e[2].dims.length),v.push(C));let R=re("output",e[0].dataType,o.length);v.push(R);let O=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(O).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${k}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=$=>{let x=W("a",e[0].dataType,e[0].dims),T=W("b",e[1].dataType,e[1].dims),S=null,E=[x,T];e.length===3&&(S=W("c",e[2].dataType,e[2].dims.length),E.push(S));let k=re("output",e[0].dataType,o.length);E.push(k);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let O=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${k.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${O}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*p},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},oc=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},uc=(e,t)=>{ac(e.inputs),e.compute(sc(e.inputs,t))}}),$t,At,rn,an,lc,dc,cc,pc,hc,fc,mc,gc,yc,wc,h0=Z(()=>{de(),pe(),Le(),he(),[$t,At,rn,an]=[0,1,2,3],lc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},dc=`
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
`,cc=e=>`
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
`,pc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,hc=e=>`
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
`,fc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${$t}] = batch;
     indices[${At}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${rn}] = u32(r);
            indices[${an}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${rn}] = u32(clamp(r, 0, H - 1));
          indices[${an}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${rn}] = gs_reflect(r, border[1], border[3]);
          indices[${an}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,mc=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${$t}], indices[${At}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${$t}], indices[${At}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${$t}], indices[${At}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${$t}], indices[${At}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${$t}], indices[${At}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${$t}], indices[${At}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,gc=(e,t)=>{let n=W("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[$t,At,rn,an]=[0,3,1,2]);let s=re("output",e[0].dataType,a.length),o=n.type.value,u=D.size(a),l=[{type:12,data:u},...se(e[0].dims,r,a)],p=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${dc}
  ${cc(o)}
  ${pc(t)}
  ${hc(t)}
  ${fc(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${rn}]);
      let W_in = i32(uniforms.x_shape[${an}]);

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
      var grid_indices = vec3<u32>(indices[${$t}], indices[${rn}], indices[${an}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${mc(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=D.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:l}},getShaderSource:p}},yc=(e,t)=>{lc(e.inputs),e.compute(gc(e.inputs,t))},wc=e=>xe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),et,_c,bc,Ki,$c,Bn,xc,vc=Z(()=>{de(),pe(),Le(),fi(),Ti(),he(),Dt(),et=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,_c=(e,t)=>{let n=e[0],r=et(e,1),i=et(e,2),a=et(e,3),s=et(e,4),o=et(e,5),u=et(e,6),l=et(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=n.dims[0],c=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,b=Math.floor(f/t.numHeads);if(u&&l&&D.size(u.dims)&&D.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&D.size(u.dims)||l&&D.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,T=0;if(s&&D.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===p?T=1:C[0]===3*p+2&&(T=3):C.length===2&&C[0]===p&&C[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:E,headSize:b,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:$}},bc=e=>xe({...e}),Ki=xe({perm:[0,2,1,3]}),$c=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=D.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=c=>{let f=re("qkv_with_bias",t.dataType,o),m=W("qkv",t.dataType,o),g=W("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},Bn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&D.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=$c(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ot(u,Ki.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ot(u,Ki.perm),{inputs:[u],outputs:[-1]})[0]},xc=(e,t)=>{let n=_c(e.inputs,t),r=e.inputs[0],i=et(e.inputs,1),a=et(e.inputs,2),s=et(e.inputs,3),o=et(e.inputs,4),u=et(e.inputs,5),l=et(e.inputs,6),p=et(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,f=Bn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return An(e,f,i,a,o,void 0,l,p,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=Bn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=Bn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);An(e,f,m,g,o,void 0,l,p,u,n)}}),Sc,Tc,Ic,Ec,Xi,kc,Cc,Mc=Z(()=>{de(),pe(),Le(),he(),Sc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Tc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),xe({numOutputs:r,axis:t.axis,splitSizes:n})},Ic=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ec=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Xi=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,a=D.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=W("input",i,n.length),u=new Array(t.numOutputs),l=[],p=[],c=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],p.push(y),s[g]=re(`output${g}`,i,y.length),l.push({dims:p[g],dataType:e[0].dataType})}f.push({type:12,data:u},...se(n,...p));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Ic(u.length)}
  ${Ec(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ae("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},kc=(e,t)=>{Sc(e.inputs);let n=e.inputs.length===1?t:Tc(e.inputs,t);e.compute(Xi(e.inputs,n),{inputs:[0]})},Cc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return xe({axis:t,numOutputs:r,splitSizes:n})}}),Ac,fr,Rc,zc=Z(()=>{de(),pe(),Le(),he(),Ac=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],p=i.dims[0],c=D.sizeFromDimension(n.dims,1)/l,f=o===0?i.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},fr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,p=e[2].dims[1],c=i===0?p*2:l/r,f=new Array(s,u,l/c,c-p),m=D.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...se(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=b=>{let $=W("input",e[0].dataType,e[0].dims.length),x=W("position_ids",e[1].dataType,e[1].dims.length),T=W("cos_cache",e[2].dataType,e[2].dims.length),S=W("sin_cache",e[3].dataType,e[3].dims.length),E=re("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables($,x,T,S,E)}

        ${b.mainStart(mn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",re("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/mn)},programUniforms:g})}},Rc=(e,t)=>{Ac(e.inputs,t),e.compute(fr(e.inputs,t))}}),Oc,Nc,Yi,Bc,Dc,f0=Z(()=>{Le(),de(),Ti(),vc(),Mc(),Dt(),zc(),he(),Oc=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],p=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,f=0,m=!r||r.dims.length===0,g=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=g*t.numHeads);let y=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(y||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=E.dims.reduce((C,v)=>C*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},Nc=xe({perm:[0,2,1,3]}),Yi=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ot(r,Nc.perm),{inputs:[r],outputs:[-1]})[0]),r},Bc=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=p=>{let c=W("seq_lens",n.dataType,n.dims),f=W("total_seq_lens",r.dataType,r.dims),m=re("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(g).declareVariables(c,f,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Dc=(e,t)=>{var S;let n=Oc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=xe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,p*n.headSize,p*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Xi([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,b;if(t.doRotary){let E=e.compute(Bc(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],C=e.inputs[8],v=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,E,k,C],O=[-1];y=e.compute(fr(R,v),{inputs:R,outputs:O})[0],R.splice(0,1,m);let j=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(fr(R,j),{inputs:R,outputs:O})[0]}let $=Bn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:f,void 0,0),x=Yi(e,t.doRotary?b:m,n),T=Yi(e,g,n);An(e,$,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),Zi,Pc,Uc,Lc,m0=Z(()=>{de(),pe(),Dt(),he(),Zi=(e,t,n,r,i,a,s,o)=>{let u=De(a),l=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,c=i*s,f=64;c===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],y=["rank","type","type"],b=[];b.push(...se(m,g));let $=x=>{let T=W("x",t.dataType,3,u),S=W("scale",n.dataType,n.dims),E=W("bias",r.dataType,r.dims),k=re("output",1,3,2),C=[T,S,E,k];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${x.declareVariables(...C)}
  ${x.mainStart(f)}
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
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Bt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Bt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Pc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=D.sizeFromDimension(r,a),l=De(u),p=D.size(i)/l,c=Zi(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/l],m=[s,o],g=["type","none"],y=b=>{let $=W("x",t[0].dataType,f.length,l),x=W("scale_shift",1,m.length,2),T=re("output",t[0].dataType,f.length,l),S=[$,x,T];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...se(f,m,f)]}),getShaderSource:y},{inputs:[t[0],c]})},Uc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=D.sizeFromDimension(r,1)/s,u=De(s),l=D.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],f=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)f=f||r[$+1]!==1,m.push($+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(ot(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=Zi(e,g,t[1],t[2],a,o,s,n.epsilon),b=$=>{let x=qe(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${v}))`;case 2:return`vec2<${x}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=W("input",t[0].dataType,t[0].dims,u),k=re("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:b},{inputs:[t[0],y]})},Lc=(e,t)=>{t.format==="NHWC"?Uc(e,e.inputs,t):Pc(e,e.inputs,t)}}),Fc,Gc,Wc,g0=Z(()=>{de(),pe(),he(),Fc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),l=D.sizeToDimension(i,u),p=D.sizeFromDimension(i,u),c=D.size(a.dims),f=s?D.size(s.dims):0;if(c!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let m=[];for(let E=0;E<i.length;++E)E<u?m.push(i[E]):m.push(1);let g=De(p),y=["type","type"],b=[{type:12,data:l},{type:1,data:p},{type:12,data:Math.floor(p/g)},{type:1,data:t.epsilon}];s&&y.push("type");let $=n>1,x=n>2,T=E=>{let k=qe(e[0].dataType),C=[W("x",e[0].dataType,e[0].dims,g),W("scale",a.dataType,a.dims,g)];s&&C.push(W("bias",s.dataType,s.dims,g)),C.push(re("output",e[0].dataType,o,g)),$&&C.push(re("mean_data_output",1,m)),x&&C.push(re("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${wi("f32",g)};
    var mean_square_vector = ${wi("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${gn(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Bt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Bt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${gn(k,g,"x[j + offset]")};
      let f32scale = ${gn(k,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${gn(k,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:b}),getShaderSource:T}},Wc=(e,t)=>{Fc(e.inputs),e.compute(Gc(e.inputs,t,e.outputCount))}}),qc,Vc,y0=Z(()=>{pe(),zi(),Di(),qc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vc=e=>{qc(e.inputs);let t=fn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ri(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],p=[o,u];e.compute(dr(p,{activation:""},t,l),{inputs:p})}else e.compute(dr(e.inputs,{activation:""},t))}}}),Hc,jc,Kc,Xc,Yc,w0=Z(()=>{de(),pe(),Le(),he(),Hc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==l)throw new Error("zeroPoints input size error.")}},jc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=De(t.k),f=De(l),m=De(s),g=o.concat([i,s]),y=i>1&&s/m%2===0?2:1,b=D.size(g)/m/y,$=64,x=[],T=[u,i,a/c],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),x.push(...se(T)),x.push(...se(S)),x.push(...se(e[2].dims)),e.length===4&&x.push(...se(D.convertShape(e[3].dims)));let E=[u,i,s/m];x.push(...se(E));let k=C=>{let v=T.length,R=W("a",e[0].dataType,v,c),O=W("b",12,S.length,f),j=W("scales",e[2].dataType,e[2].dims.length),P=[R,O,j],G=e.length===4?W("zero_points",12,e[3].dims.length):void 0;G&&P.push(G);let A=E.length,B=re("output",e[0].dataType,A,m),H=qe(e[0].dataType),X=(()=>{switch(c){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${c}-component is not supported.`)}})(),ne=Math.floor(32/t.bits),N=Math.floor(ne/8),ee=()=>{let K="";for(let q=0;q<N;q++){let oe=q*t.bits*4,ce=oe+t.bits;K+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${X};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/c}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${R.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let ie=0;ie<m*y;ie++)K+=`
            b_value = ${f===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${oe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ce}u) & b_mask);`}
            b_quantized_values = ${X}(${Array.from({length:4},(_e,ze)=>`${H}(b_value_lower[${ze}]), ${H}(b_value_upper[${ze}])`).join(", ")});
            b_dequantized_values = ${c===1?`${X}(${Array.from({length:8},(_e,ze)=>`(b_quantized_values[${ze}] - ${G?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${G?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/c},(_e,ze)=>`${c===1?`a_data${q>0?q:""}[${ze}] * b_dequantized_values[${ze}]`:`dot(a_data${q>0?q:""}[${ze}], b_dequantized_values[${ze}])`}`).join(" + ")};
          `}return K},L=()=>{let K=`
            var col_index = col * ${m};
            ${G?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<m*y;q++)K+=`
            let scale${q} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return K},Y=()=>{let K=`col_index = col * ${m};`;for(let q=0;q<m*y;q++)K+=`
            let b${q}_data = ${O.getByIndices(`${O.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,K};return`
        var<workgroup> workgroup_shared: array<${B.type.value}, ${y*$}>;
        ${C.declareVariables(...P,B)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${B.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${L()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${Y()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${ee()}
                word_offset += ${ne/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${B.type.value} = ${B.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${B.setByIndices(`${B.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:k}},Kc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=De(t.k),f=De(l),m=o.concat([i,s]),g=128,y=s%8===0?8:s%4===0?4:1,b=g/y,$=Math.floor(32/t.bits),x=b*f*$,T=x/c,S=x/t.blockSize,E=D.size(m)/y,k=[],C=[u,i,a/c],v=D.convertShape(e[1].dims).slice();v.splice(-1,1,l/f),k.push(...se(C)),k.push(...se(v)),k.push(...se(e[2].dims)),e.length===4&&k.push(...se(D.convertShape(e[3].dims)));let R=[u,i,s];k.push(...se(R));let O=j=>{let P=C.length,G=W("a",e[0].dataType,P,c),A=W("b",12,v.length,f),B=W("scales",e[2].dataType,e[2].dims.length),H=[G,A,B],X=e.length===4?W("zero_points",12,e[3].dims.length):void 0;X&&H.push(X);let ne=R.length,N=re("output",e[0].dataType,ne),ee=qe(e[0].dataType),L=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${N.type.value}, ${b}>, ${y}>;
        ${j.declareVariables(...H,N)}
        ${j.mainStart([b,y,1])}
          let output_indices = ${N.offsetToIndices(`workgroup_index * ${y}`)};
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
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ee}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ee}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${B.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor($/8),K="";for(let q=0;q<Y;q++){let oe=q*t.bits*4,ce=oe+t.bits;K+=`
              ${L()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${oe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ce}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ee}>(${Array.from({length:4},(ie,_e)=>`${ee}(b_value_lower[${_e}]), ${ee}(b_value_upper[${_e}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,_e)=>`${`dot(a_data${_e}, b_dequantized_values[${_e}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return K})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${N.setByIndices(`${N.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${b};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:E},programUniforms:k}),getShaderSource:O}},Xc=(e,t)=>{Hc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Kc(e.inputs,t)):e.compute(jc(e.inputs,t))},Yc=e=>xe(e)}),Zc,Qc,Jc,ep,tp,np,rp,ip,ap,_0=Z(()=>{de(),pe(),he(),Zc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Qc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ae("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Jc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ae("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ae("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ep=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k = i32(${ae("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},tp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ae("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k -= i32(${ae("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},np=(e,t,n)=>{switch(n.mode){case 0:return Qc(e,t,n.pads.length);case 1:return Jc(e,t,n.pads.length);case 2:return ep(e,t,n.pads.length);case 3:return tp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},rp=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...se(e[0].dims,n));let o=["rank"],u=l=>{let p=re("output",e[0].dataType,n.length),c=W("x",e[0].dataType,r.length),f=c.type.value,m=np(p,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,p)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:a}),getShaderSource:u}},ip=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},ap=(e,t)=>{Zc(e.inputs);let n=ip(e.inputs,t);e.compute(rp(e.inputs,n),{inputs:[0]})}}),Dn,Qi,Ji,ea,ta,sp,op,na,ra,up,lp,ia,dp,cp,aa,pp,hp,fp,mp,b0=Z(()=>{ut(),de(),pe(),he(),Dn=e=>{if(Ee.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Qi=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();rr.adjustPoolAttributes(n,i,s,o,u,l);let p=rr.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[c,r?f:p]},Ji=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],c=!!(l+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(y+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,p)=>l+p);return[a,s,!!u,!1,!1]}},ea=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f=i.format==="NHWC",m=t.type.value,g=re("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",b="",$="",x=n-(f?2:1);if(p?y=`
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
                }`,i.kernelShape.length===2){let T=n-(f?3:2);c?b=`
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
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,b=i.pads.length,$="";return l?$=`
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
                  offsets[j] = offset / ${ae("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ae("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ae("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ae("uniforms.pads","j - 2u",b)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},ta=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,sp=e=>`${ta(e)};${e.countIncludePad}`,op=e=>`${ta(e)};${e.storageOrder};${e.dilations}`,na=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ra=(e,t,n,r)=>{let[i,a]=Qi(t,r,n),s=W("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,c,f,m,g]=Ji(a,i);p.push(...se(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:b=>ea(b,s,t.dims.length,a.length,i,u,l,0,c,f,m,g)}},up=e=>{let t=e.count_include_pad!==0,n=na(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:sp(r)}},lp=(e,t)=>{Dn(e.inputs),e.compute(ra("AveragePool",e.inputs[0],!1,t))},ia={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},dp=e=>{let t=e.format;return{format:t,...ia,cacheKey:t}},cp=(e,t)=>{Dn(e.inputs),e.compute(ra("GlobalAveragePool",e.inputs[0],!0,t))},aa=(e,t,n,r)=>{let[i,a]=Qi(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=W("x",t.dataType,t.dims.length),l=["rank"],[p,c,f,m,g]=Ji(a,i);return p.push(...se(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:y=>ea(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,f,m,g)}},pp=(e,t)=>{Dn(e.inputs),e.compute(aa("MaxPool",e.inputs[0],!1,t))},hp=e=>{let t=e.storage_order,n=e.dilations,r=na(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:op(i)}},fp=e=>{let t=e.format;return{format:t,...ia,cacheKey:t}},mp=(e,t)=>{Dn(e.inputs),e.compute(aa("GlobalMaxPool",e.inputs[0],!0,t))}}),gp,yp,wp,_p,$0=Z(()=>{de(),pe(),Le(),he(),gp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},yp=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=D.size(a),u=r===3||r===2,l=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,f=c?u?[Math.ceil(D.size(c.dims)/4)]:c.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,g=m===!1&&p.length===1,y=De(o),b=m&&(!u||y===4),$=b?y:1,x=b&&!u?y:1,T=W("input",u?12:r,l.length,x),S=W("scale",s,p.length),E=c?W("zero_point",u?12:r,f.length):void 0,k=re("output",s,a.length,$),C=[T,S];E&&C.push(E);let v=[l,p];c&&v.push(f);let R=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...se(...v,a)],O=j=>{let P=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(P).declareVariables(...C,k)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:g?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:O,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:R})}},wp=(e,t)=>{gp(e.inputs,t),e.compute(yp(e.inputs,t))},_p=e=>xe({axis:e.axis,blockSize:e.blockSize})}),bp,$p,xp,x0=Z(()=>{ut(),de(),he(),bp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},$p=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...se(a)],u=l=>{let p=re("output",r,a.length),c=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(f).declareVariables(p)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},xp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ee.webgpu.validateInputContent&&bp(t,n,r),e.compute($p(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),vp,Sp,Tp,Ip,v0=Z(()=>{de(),pe(),Le(),he(),vp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Sp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(D.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=D.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...se(e[1].dims,e[2].dims,i)],p=c=>{let f=W("indices",e[1].dataType,e[1].dims.length),m=W("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Ro("output",e[0].dataType,i.length):re("output",e[0].dataType,i.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,g)}
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
    ${vp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p}},Tp=e=>xe({reduction:e.reduction}),Ip=(e,t)=>{e.compute(Sp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ep,kp,Cp,sa,Mp,Ap,Rp,zp,Op,Np,Bp,Dp,oa,Pp,Up,Lp,Fp,Gp,Wp,qp,S0=Z(()=>{de(),pe(),Le(),he(),Ep=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},kp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Cp=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>r.push(p)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ep(r,t),t.axes.length>0&&kp(r,t.axes,l).forEach((p,c)=>r[c]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},sa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Mp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${sa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${sa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ap=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Rp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},zp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Op=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Np=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ae("uniforms.scales","i",r)};
        var roi_low = ${ae("uniforms.roi","i",i)};
        var roi_hi = ${ae("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ae("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Bp=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ae("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ae("uniforms.roi","i",a)};
          var roi_hi = ${ae("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ae("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",r.length)};
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
    }`,Dp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,oa=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Pp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${oa(e,u,a,2)}
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
    }`},Up=(e,t,n,r,i,a,s,o,u,l)=>{let p=n.length===2,[c,f]=p?[0,1]:[2,3],m=e.type.value,g=y=>{let b=y===c?"row":"col";return`
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
    ${g(f)};
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
    `},Lp=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${oa(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
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

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
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
    }`},Fp=(e,t,n,r,i,a)=>{let s=e.dims,o=Rp(a,t.axes,s.length),u=zp(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Op(s,l,t)));let p=re("output",e.dataType,u.length),c=W("input",e.dataType,s.length),f=D.size(u),m=s.length===u.length&&s.every((x,T)=>x===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,b=c.type.value,$=x=>`
      ${m?"":`
      ${Mp(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Dp(c,s)};
              ${Ap(t.nearestMode,n,b)};
              ${Bp(c,p,s,u,l.length,o.length,g)};
              `;case"linear":return`
              ${Np(p,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Pp(c,p,s,g,y)}`;if(s.length===3||s.length===5)return`${Lp(c,p,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Up(c,p,s,u,l,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,p)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:o},...se(s,u)]})}},Gp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Wp=(e,t)=>{let n=[],r=[],i=[],a=Gp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Cp(e.inputs,t,a,n,r,i),e.compute(Fp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},qp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return xe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Vp,Hp,jp,T0=Z(()=>{de(),pe(),he(),Vp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Hp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=D.size(a),o=a,u=s,l=a.slice(-1)[0],p=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,b=64,$=De(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[W("x",e[0].dataType,e[0].dims,$),W("skip",e[1].dataType,e[1].dims,$),W("gamma",e[2].dataType,e[2].dims,$)];c&&C.push(W("beta",e[3].dataType,e[3].dims,$)),f&&C.push(W("bias",e[4].dataType,e[4].dims,$)),C.push(re("output",e[0].dataType,o,$)),m&&C.push(re("mean_output",1,p)),g&&C.push(re("inv_std_output",1,p)),y&&C.push(re("input_skip_bias_sum",e[0].dataType,o,$));let v=qe(e[0].dataType),R=qe(1,$);return`

      ${E.registerUniforms(k).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${b}>;
      var<workgroup> sum_squared_shared : array<${R}, ${b}>;

      ${E.mainStart([b,1,1])}
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
          let bias_value = ${f?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${gn(v,$,"value")};
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
        let mean = ${Bt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Bt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:p,dataType:1}),n>2&&S.push({dims:p,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((E,k)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},jp=(e,t)=>{Vp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Hp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Kp,Pn,Xp,ua,Yp,Zp,Qp,Jp,I0=Z(()=>{de(),pe(),Le(),he(),Kp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Pn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Xp=(e,t)=>{if(e.length>1){let n=Pn(e,1),r=Pn(e,2),i=Pn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),xe({starts:n,ends:r,axes:i})}else return t},ua=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Yp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ae("uniforms.input_shape","i",n.length)};
            let steps_i = ${ae("uniforms.steps","i",n.length)};
            let signs_i = ${ae("uniforms.signs","i",n.length)};
            let starts_i = ${ae("uniforms.starts","i",n.length)};
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
      }`,Zp=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Pn(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map(($,x)=>ua($,x,n,i,a)),o=t.ends.map(($,x)=>ua($,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(s.splice($,0,0),o.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,T)=>{if($<0){let S=(o[x]-s[x])/$,E=s[x],k=E+S*a[x];s[x]=k,o[x]=E,T[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((o[$]-s[$])/a[$])});let p={dims:l,dataType:e[0].dataType},c=re("output",e[0].dataType,l.length),f=W("input",e[0].dataType,e[0].dims.length),m=D.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...se(e[0].dims,l)],b=$=>`
      ${$.registerUniforms(g).declareVariables(f,c)}
        ${Yp(f,c,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Qp=(e,t)=>{Kp(e.inputs,t);let n=Xp(e.inputs,t);e.compute(Zp(e.inputs,n),{inputs:[0]})},Jp=e=>{let t=e.starts,n=e.ends,r=e.axes;return xe({starts:t,ends:n,axes:r})}}),eh,th,nh,rh,E0=Z(()=>{de(),pe(),Le(),Dt(),he(),eh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},th=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),a=r.length,s=D.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(C,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(ot(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let p=u.dims,c=p[a-1],f=i/c,m=De(c),g=c/m,y=64;f===1&&(y=256);let b=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=W("x",u.dataType,u.dims,m),x=re("result",u.dataType,u.dims,m),T=$.type.value,S=qe(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables($,x)}
      ${C.mainStart(y)}
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
          rowSumShared = ${T}(${Bt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ot(k,l),{inputs:[k]})},nh=(e,t)=>{eh(e.inputs),th(e,t)},rh=e=>xe({axis:e.axis})}),la,ih,ah,sh,oh,k0=Z(()=>{de(),pe(),he(),la=e=>Array.from(e.getBigInt64Array(),Number),ih=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(la(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},ah=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},sh=(e,t)=>{let n=e[0].dims,r=t??la(e[1]),i=ah(n,r),a=D.size(i),s=e[0].dataType,o=W("input",s,n.length),u=re("output",s,i.length),l=p=>`
      const inputShape = ${o.indices(...n)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...se(e[0].dims,i)]}),getShaderSource:l}},oh=e=>{ih(e.inputs),e.compute(sh(e.inputs),{inputs:[0]})}}),uh,lh,dh,C0=Z(()=>{de(),pe(),he(),uh=(e,t,n,r,i)=>{let a=re("output_data",i,n.length,4),s=W("a_data",t[1].dataType,t[1].dims.length,4),o=W("b_data",t[2].dataType,t[2].dims.length,4),u=W("c_data",t[0].dataType,t[0].dims.length,4),l,p=(c,f,m)=>`select(${f}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(f,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${g}(${p(y,b,$)});
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
      }`},lh=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,n)&&D.areEqual(n,r)),s=t,o=D.size(t);if(a){let l=fn.calcShape(fn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>uh(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...se(r,t,n,s)]})}},dh=e=>{e.compute(lh(e.inputs))}}),ch,M0=Z(()=>{qg(),Ti(),Vg(),Hg(),jg(),Kg(),Xg(),e0(),n0(),r0(),i0(),a0(),s0(),o0(),u0(),l0(),d0(),c0(),p0(),h0(),f0(),m0(),g0(),y0(),w0(),vc(),_0(),b0(),$0(),x0(),v0(),xi(),S0(),zc(),T0(),I0(),E0(),Mc(),k0(),Dt(),Ci(),C0(),ch=new Map([["Abs",[Vu]],["Acos",[Hu]],["Acosh",[ju]],["Add",[Ol]],["ArgMax",[Mu,Si]],["ArgMin",[Cu,Si]],["Asin",[Ku]],["Asinh",[Xu]],["Atan",[Yu]],["Atanh",[Zu]],["Attention",[Bu]],["AveragePool",[lp,up]],["BatchNormalization",[Lu]],["BiasAdd",[Wu]],["BiasSplitGelu",[Al]],["Cast",[Ju,Qu]],["Ceil",[nl]],["Clip",[tl]],["Concat",[Kl,Xl]],["Conv",[Gi,Li]],["ConvTranspose",[xd,_d]],["Cos",[rl]],["Cosh",[il]],["CumSum",[Sd,Td]],["DepthToSpace",[Cd,Md]],["DequantizeLinear",[wp,_p]],["Div",[Nl]],["Einsum",[Bd,Dd]],["Elu",[al,Rn]],["Equal",[Bl]],["Erf",[sl]],["Exp",[ol]],["Expand",[Fd]],["FastGelu",[Wd]],["Floor",[ul]],["FusedConv",[Gi,Li]],["Gather",[jd,Hd]],["GatherElements",[ic,rc]],["GatherBlockQuantized",[Jd,ec]],["GatherND",[Xd,Yd]],["Gelu",[ll]],["Gemm",[uc,oc]],["GlobalAveragePool",[cp,dp]],["GlobalMaxPool",[mp,fp]],["Greater",[Ll]],["GreaterOrEqual",[Gl]],["GridSample",[yc,wc]],["GroupQueryAttention",[Dc]],["HardSigmoid",[yl,gl]],["InstanceNormalization",[Lc]],["LayerNormalization",[Wc]],["LeakyRelu",[dl,Rn]],["Less",[Fl]],["LessOrEqual",[Wl]],["Log",[Tl]],["MatMul",[Vc]],["MatMulNBits",[Xc,Yc]],["MaxPool",[pp,hp]],["Mul",[Dl]],["MultiHeadAttention",[xc,bc]],["Neg",[pl]],["Not",[cl]],["Pad",[ap]],["Pow",[Pl]],["QuickGelu",[kl,Rn]],["Range",[xp]],["Reciprocal",[hl]],["ReduceMin",[Su]],["ReduceMean",[_u]],["ReduceMax",[vu]],["ReduceSum",[Iu]],["ReduceProd",[Tu]],["ReduceL1",[bu]],["ReduceL2",[$u]],["ReduceLogSum",[ku]],["ReduceLogSumExp",[xu]],["ReduceSumSquare",[Eu]],["Relu",[fl]],["Resize",[Wp,qp]],["RotaryEmbedding",[Rc]],["ScatterND",[Ip,Tp]],["Sigmoid",[ml]],["Sin",[wl]],["Sinh",[_l]],["Slice",[Qp,Jp]],["SkipLayerNormalization",[jp]],["Split",[kc,Cc]],["Sqrt",[bl]],["Softmax",[nh,rh]],["Sub",[Ul]],["Tan",[$l]],["Tanh",[xl]],["ThresholdedRelu",[Sl,Rn]],["Tile",[oh]],["Transpose",[Lo,Fo]],["Where",[dh]]])}),ph,A0=Z(()=>{ut(),Mt(),he(),ph=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){bt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),dt(e.programInfo.name)}dispose(){}build(e,t){bt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Oo(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return dt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),hh={};pn(hh,{WebGpuBackend:()=>yh});var fh,mh,gh,yh,R0=Z(()=>{ut(),de(),Mt(),bo(),Gg(),M0(),A0(),fh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},mh=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${fh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},gh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},yh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new gh(s),this.gpuDataManager=Mo(this),this.programManager=new ph(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ai(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;bt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,p=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map($=>({dims:$.dims,dataType:Ct($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:Ct($.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:p,startTime:y,endTime:b});else{let $="";c.forEach((T,S)=>{$+=`input[${S}]: [${T.dims}] | ${Ct(T.dataType)}, `});let x="";f.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${Ct(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${p}" ${$}${x}start time: ${y} ns, execution time: ${b-y} ns`)}Zn("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),dt()}run(e,t,n,r,i,a){bt(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),p=n.length===0?o.map((x,T)=>T):n;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let c=[],f=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(p[x])||p[x]<-3||p[x]>=a)throw new Error(`Invalid output index: ${p[x]}`);if(p[x]===-3)continue;let T=p[x]===-1,S=p[x]===-2,E=T||S?i(o[x].dataType,o[x].dims):r(p[x],o[x].dataType,o[x].dims);if(c.push(E),E.data===0)continue;let k=this.gpuDataManager.get(E.data);if(!k)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(k),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(k)}f.push(k)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return dt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,T=[];l.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,O,j;C.type===10?(j=v.length>4?16:v.length>2?8:v.length*R,O=v.length>4?16:R*v.length):(j=v.length<=2?v.length*R:16,O=16),x=Math.ceil(x/j)*j,T.push(x);let P=C.type===10?8:4;x+=v.length>4?Math.ceil(v.length/P)*O:v.length*R});let S=16;x=Math.ceil(x/S)*S;let E=new ArrayBuffer(x);l.forEach((C,v)=>{let R=T[v],O=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,R,O.length).set(O);else if(C.type===12)new Uint32Array(E,R,O.length).set(O);else if(C.type===10)new Uint16Array(E,R,O.length).set(O);else if(C.type===1)new Float32Array(E,R,O.length).set(O);else throw new Error(`Unsupported uniform type: ${Ct(C.type)}`)});let k=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,E,0,x),this.gpuDataManager.release(k.id),m={offset:0,size:x,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,b=mh(e,t,y),$=this.programManager.getArtifact(b);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(b,$),we("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,E=typeof T.data=="number"?1:T.data.length,[k,C]=$.uniformVariablesInfo[x];if(S!==k||E!==C)throw new Error(`Uniform variable ${x} mismatch: expect type ${k} with size ${C}, got type ${S} with size ${E} in program "${$.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,s,f,g,m),dt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=ch.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await yi(this,e,t);return si(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),wh={};pn(wh,{init:()=>bh});var mr,_h,bh,z0=Z(()=>{de(),Mt(),pe(),Fg(),mr=class wg{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new wg(this.module,this.dataType,this.data,t)}},_h=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),p=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<c;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new mr(e,l,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new mr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=Qt(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let p=l>0?this.backend.gpuDataManager.create(l).id:0;return new mr(this.module,o,p,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},bh=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(R0(),Tn(hh)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,p=!1)=>{if(p)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,p)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new _h(t,s,Number(u));return s.computeKernel(Number(o),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Io(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,p)=>a.ensureTensor(s,o,u,l,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),$h,da,ca,Pt,xh,pa,gr,ha,fa,ma,ga,ya,wa,vh=Z(()=>{ut(),Pg(),Ug(),de(),Xt(),ei(),lo(),$h=(e,t)=>{ke()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},da=async e=>{$h(e.wasm.numThreads,nr(e.logLevel))},ca=async(e,t)=>{var r,i;(i=(r=ke()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(z0(),Tn(wh)).init;t==="webgpu"&&await a("webgpu",ke(),e,n),t==="webnn"&&await a("webnn",ke(),e)}},Pt=new Map,xh=e=>{let t=ke(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Se("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},pa=(e,t)=>{let n=ke(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Se("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],p=[];for(let c=0;c<l;c++){let f=Number(n.getValue(i+8+c*a,"*"));p.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(c+l)*a,"*")))}return[o,u,p]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},gr=e=>{let t=ke(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ha=async(e,t)=>{var c,f,m,g;let n,r,i=ke();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=gr(e);let a=0,s=0,o=0,u=[],l=[],p=[];try{if([s,u]=await uo(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let O=typeof R=="string"?R:R.path;v.push(ii(typeof R=="string"?R:R.data).then(j=>{i.mountExternalData(O,j)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,O=R==null?void 0:R.context,j=R==null?void 0:R.gpuDevice,P=R==null?void 0:R.deviceType,G=R==null?void 0:R.powerPreference;O?i.currentContext=O:j?i.currentContext=await i.webnnCreateMLContext(j):i.currentContext=await i.webnnCreateMLContext({deviceType:P,powerPreference:G})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Se("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,b]=xh(a),$=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],E=[],k=[];for(let v=0;v<y;v++){let[R,O,j]=pa(a,v);R===0&&Se("Can't get an input name."),l.push(R);let P=i.UTF8ToString(R);x.push(P),S.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Ct(O),shape:j})}for(let v=0;v<b;v++){let[R,O,j]=pa(a,v+y);R===0&&Se("Can't get an output name."),p.push(R);let P=i.UTF8ToString(R);T.push(P),E.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Ct(O),shape:j});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[P])??"cpu",A=i.webnnIsGraphOutput;if(G==="cpu"&&A&&A(a,P)){k.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if($&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(G)}}let C=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Se("Can't create IO binding."),C={handle:o,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>ri(v))}),Pt.set(a,[a,l,p,C,$,!1]),[a,x,T,S,E]}catch(y){throw l.forEach(b=>i._OrtFree(b)),p.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Se("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Se("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Se("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},fa=e=>{var u,l,p;let t=ke(),n=Pt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Se("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Se("Can't release session."),Pt.delete(e)},ma=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=ke(),u=o.PTR_SIZE,l=e[0],p=e[1],c=e[3],f=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;g=Qt(Zt(l),p);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;g=Qt(Zt(l),p);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,Zt(l),p)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=o._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(m+x*u,ct($[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=o.UTF8ToString(i);if(x(r,S)||T(r,S)){let E=Zt(l);g=Qt(E,p),f="ml-tensor";let k=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!k||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,E,p);C(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach((x,T)=>o.setValue(b+T*u,x,u===4?"i32":"i64"));let $=o._OrtCreateTensor(Zt(l),m,g,b,p.length,ri(f));$===0&&Se(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{o.stackRestore(y)}},ga=async(e,t,n,r,i,a)=>{var P,G,A,B;let s=ke(),o=s.PTR_SIZE,u=Pt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],p=u[1],c=u[2],f=u[3],m=u[4],g=u[5],y=t.length,b=r.length,$=0,x=[],T=[],S=[],E=[],k=[],C=s.stackSave(),v=s.stackAlloc(y*o),R=s.stackAlloc(y*o),O=s.stackAlloc(b*o),j=s.stackAlloc(b*o);try{[$,x]=ro(a),jt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)await ma(n[N],T,E,e,p[t[N]],t[N],m);for(let N=0;N<b;N++)await ma(i[N],S,E,e,c[r[N]],y+r[N],m);Kt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)s.setValue(v+N*o,T[N],"*"),s.setValue(R+N*o,p[t[N]],"*");for(let N=0;N<b;N++)s.setValue(O+N*o,S[N],"*"),s.setValue(j+N*o,c[r[N]],"*");if(f&&!g){let{handle:N,outputPreferredLocations:ee,outputPreferredLocationsEncoded:L}=f;if(p.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${p.length}).`);jt("wasm bindInputsOutputs");for(let Y=0;Y<y;Y++){let K=t[Y];await s._OrtBindInput(N,p[K],T[Y])!==0&&Se(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<b;Y++){let K=r[Y];(P=i[Y])!=null&&P[3]?(k.push(S[Y]),s._OrtBindOutput(N,c[K],S[Y],0)!==0&&Se(`Can't bind pre-allocated output[${Y}] for session=${e}.`)):s._OrtBindOutput(N,c[K],0,L[K])!==0&&Se(`Can't bind output[${Y}] to ${ee[Y]} for session=${e}.`)}Kt("wasm bindInputsOutputs"),Pt.set(e,[l,p,c,f,m,!0])}(G=s.jsepOnRunStart)==null||G.call(s,l),(A=s.webnnOnRunStart)==null||A.call(s,l);let H;f?H=await s._OrtRunWithBinding(l,f.handle,b,O,$):H=await s._OrtRun(l,R,v,y,j,b,O,$),H!==0&&Se("failed to call OrtRun().");let X=[],ne=[];jt("wasm ProcessOutputTensor");for(let N=0;N<b;N++){let ee=Number(s.getValue(O+N*o,"*"));if(ee===S[N]||k.includes(S[N])){X.push(i[N]),ee!==S[N]&&s._OrtReleaseTensor(ee)!==0&&Se("Can't release tensor.");continue}let L=s.stackSave(),Y=s.stackAlloc(4*o),K=!1,q,oe=0;try{s._OrtGetTensorData(ee,Y,Y+o,Y+2*o,Y+3*o)!==0&&Se(`Can't access output tensor data on index ${N}.`);let ce=o===4?"i32":"i64",ie=Number(s.getValue(Y,ce));oe=s.getValue(Y+o,"*");let _e=s.getValue(Y+o*2,"*"),ze=Number(s.getValue(Y+o*3,ce)),Oe=[];for(let U=0;U<ze;U++)Oe.push(Number(s.getValue(_e+U*o,ce)));s._OrtFree(_e)!==0&&Se("Can't free memory for tensor dims.");let Ne=Oe.reduce((U,V)=>U*V,1);q=Ct(ie);let nt=f==null?void 0:f.outputPreferredLocations[r[N]];if(q==="string"){if(nt==="gpu-buffer"||nt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let U=[];for(let V=0;V<Ne;V++){let Q=s.getValue(oe+V*o,"*"),ue=s.getValue(oe+(V+1)*o,"*"),le=V===Ne-1?void 0:ue-Q;U.push(s.UTF8ToString(Q,le))}X.push([q,Oe,U,"cpu"])}else if(nt==="gpu-buffer"&&Ne>0){let U=s.jsepGetBuffer;if(!U)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let V=U(oe),Q=Qt(ie,Ne);if(Q===void 0||!ti(q))throw new Error(`Unsupported data type: ${q}`);K=!0,X.push([q,Oe,{gpuBuffer:V,download:s.jsepCreateDownloader(V,Q,q),dispose:()=>{s._OrtReleaseTensor(ee)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(nt==="ml-tensor"&&Ne>0){let U=s.webnnEnsureTensor,V=s.webnnIsGraphInputOutputTypeSupported;if(!U||!V)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Qt(ie,Ne)===void 0||!ni(q))throw new Error(`Unsupported data type: ${q}`);if(!V(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let Q=await U(e,oe,ie,Oe,!1);K=!0,X.push([q,Oe,{mlTensor:Q,download:s.webnnCreateMLTensorDownloader(oe,q),dispose:()=>{s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(ee)}},"ml-tensor"])}else if(nt==="ml-tensor-cpu-output"&&Ne>0){let U=s.webnnCreateMLTensorDownloader(oe,q)(),V=X.length;K=!0,ne.push((async()=>{let Q=[V,await U];return s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(ee),Q})()),X.push([q,Oe,[],"cpu"])}else{let U=tr(q),V=new U(Ne);new Uint8Array(V.buffer,V.byteOffset,V.byteLength).set(s.HEAPU8.subarray(oe,oe+V.byteLength)),X.push([q,Oe,V,"cpu"])}}finally{s.stackRestore(L),q==="string"&&oe&&s._free(oe),K||s._OrtReleaseTensor(ee)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&Se("Can't clear bound outputs."),Pt.set(e,[l,p,c,f,m,!1]));for(let[N,ee]of await Promise.all(ne))X[N][2]=ee;return Kt("wasm ProcessOutputTensor"),X}finally{(B=s.webnnOnRunEnd)==null||B.call(s,l),s.stackRestore(C),T.forEach(H=>s._OrtReleaseTensor(H)),S.forEach(H=>s._OrtReleaseTensor(H)),E.forEach(H=>s._free(H)),$!==0&&s._OrtReleaseRunOptions($),x.forEach(H=>s._free(H))}},ya=e=>{let t=ke(),n=Pt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Se("Can't get an profile file name."),t._OrtFree(i)},wa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Ut,tt,yn,Un,Ln,yr,_a,wr,sn,on,Sh,Th,Ih,Eh,kh,Ch,Mh,Ah,Rh=Z(()=>{ut(),vh(),Xt(),Yr(),Ut=()=>!!Ee.wasm.proxy&&typeof document<"u",yn=!1,Un=!1,Ln=!1,wr=new Map,sn=(e,t)=>{let n=wr.get(e);n?n.push(t):wr.set(e,[t])},on=()=>{if(yn||!Un||Ln||!tt)throw new Error("worker not ready")},Sh=e=>{switch(e.data.type){case"init-wasm":yn=!1,e.data.err?(Ln=!0,_a[1](e.data.err)):(Un=!0,_a[0]()),yr&&(URL.revokeObjectURL(yr),yr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=wr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Th=async()=>{if(!Un){if(yn)throw new Error("multiple calls to 'initWasm()' detected.");if(Ln)throw new Error("previous call to 'initWasm()' failed.");if(yn=!0,Ut())return new Promise((e,t)=>{tt==null||tt.terminate(),Qs().then(([n,r])=>{try{tt=r,tt.onerror=a=>t(a),tt.onmessage=Sh,_a=[e,t];let i={type:"init-wasm",in:Ee};!i.in.wasm.wasmPaths&&(n||Hr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),tt.postMessage(i),yr=n}catch(i){t(i)}},t)});try{await Jr(Ee.wasm),await da(Ee),Un=!0}catch(e){throw Ln=!0,e}finally{yn=!1}}},Ih=async e=>{if(Ut())return on(),new Promise((t,n)=>{sn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ee}};tt.postMessage(r)});await ca(Ee,e)},Eh=async e=>Ut()?(on(),new Promise((t,n)=>{sn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};tt.postMessage(r,[e.buffer])})):gr(e),kh=async(e,t)=>{if(Ut()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return on(),new Promise((n,r)=>{sn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),tt.postMessage(i,a)})}else return ha(e,t)},Ch=async e=>{if(Ut())return on(),new Promise((t,n)=>{sn("release",[t,n]);let r={type:"release",in:e};tt.postMessage(r)});fa(e)},Mh=async(e,t,n,r,i,a)=>{if(Ut()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return on(),new Promise((s,o)=>{sn("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};tt.postMessage(l,wa(u))})}else return ga(e,t,n,r,i,a)},Ah=async e=>{if(Ut())return on(),new Promise((t,n)=>{sn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};tt.postMessage(r)});ya(e)}}),ba,zh,Oh,O0=Z(()=>{ut(),Rh(),de(),Gr(),lo(),ba=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},zh=e=>{switch(e[3]){case"cpu":return new Ge(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ti(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ge.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!ni(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ge.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Oh=class{async fetchModelAndCopyToWasmMemory(e){return Eh(await ii(e))}async loadModel(e,t){bt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await kh(n,t),dt()}async dispose(){return Ch(this.sessionId)}async run(e,t,n){bt();let r=[],i=[];Object.entries(e).forEach(c=>{let f=c[0],m=c[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],m=c[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((c,f)=>ba(c,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((c,f)=>c?ba(c,()=>`output "${this.outputNames[s[f]]}"`):null),l=await Mh(this.sessionId,i,o,s,u,n),p={};for(let c=0;c<l.length;c++)p[this.outputNames[s[c]]]=a[c]??zh(l[c]);return dt(),p}startProfiling(){}endProfiling(){Ah(this.sessionId)}}}),Nh={};pn(Nh,{OnnxruntimeWebAssemblyBackend:()=>xa,initializeFlags:()=>$a,wasmBackend:()=>Bh});var $a,xa,Bh,N0=Z(()=>{ut(),Rh(),O0(),$a=()=>{(typeof Ee.wasm.initTimeout!="number"||Ee.wasm.initTimeout<0)&&(Ee.wasm.initTimeout=0);let e=Ee.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ee.wasm.simd=!1),typeof Ee.wasm.proxy!="boolean"&&(Ee.wasm.proxy=!1),typeof Ee.wasm.trace!="boolean"&&(Ee.wasm.trace=!1),typeof Ee.wasm.numThreads!="number"||!Number.isInteger(Ee.wasm.numThreads)||Ee.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ee.wasm.numThreads=1;else{let t=typeof navigator>"u"?bg("node:os").cpus().length:navigator.hardwareConcurrency;Ee.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},xa=class{async init(e){$a(),await Th(),await Ih(e)}async createInferenceSessionHandler(e,t){let n=new Oh;return await n.loadModel(e,t),n}},Bh=new xa});ut(),ut(),ut();var B0="1.27.0";{let e=(N0(),Tn(Nh)).wasmBackend;hn("webgpu",e,5),hn("webnn",e,5),hn("cpu",e,10),hn("wasm",e,10)}Object.defineProperty(Ee.versions,"web",{value:B0,enumerable:!0});/**
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
 */const D0=114;function P0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function un(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let p=0;p<n;p++){const c=(p+.5)*l-.5,f=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,c-f));for(let y=0;y<t;y++){const b=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(b))),x=Math.min(r-1,$+1),T=Math.max(0,Math.min(1,b-$)),S=(f*r+$)*a,E=(f*r+x)*a,k=(m*r+$)*a,C=(m*r+x)*a,v=(p*t+y)*3;for(let R=0;R<3;R++){const O=s[S+R]*(1-T)+s[E+R]*T,j=s[k+R]*(1-T)+s[C+R]*T;o[v+R]=Math.min(255,Math.max(0,Math.round(O*(1-g)+j*g)))}}}return o}function U0(e,t){const n=P0(e.width,e.height,t),r=un(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(D0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let l=0;l<n.resizedWidth;l++){const p=(u+l)*3,c=o+l;a[c]=r[p]/255,a[i+c]=r[p+1]/255,a[2*i+c]=r[p+2]/255}}return{tensor:a,params:n}}function Dh(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],p=e[s*6+3],c=e[s*6+4],f=e[s*6+5];if(c<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,b=(l-t.padX)/t.scale,$=(p-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(b-g),Math.trunc($-y)],boxFloat:[g,y,b-g,$-y]})}return i}function Fn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ph(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Uh(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const L0=.6,F0=.8;function Lh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,p=(e[a*6+3]-t.padY)/t.scale,c=Fn((o+l)/2),f=Fn((u+p)/2),m=Fn((l-o+(p-u))/4);m>=1&&r.push({cx:c,cy:f,r:m})}return r}function G0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(L0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function W0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=F0*(n.r+r.r))&&t.push(n);return t}function q0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ph(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Fh(e,t,n){const r=Lh(e,t,n);return r.length===0?[]:q0(W0(G0(r)))}function V0(e,t,n){return Lh(e,t,n)}function Gh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Wh=["brown","grey","blue","green","yellow","red","purple"],H0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function qh(e,t,n){return Dh(e,t,n,Wh.length).map(r=>{const i=Wh[r.classIndex];return{color:i,family:H0[i],box:r.box,confidence:r.confidence}})}const j0=8,K0=.8,Vh=1.25;function X0(e){if(e.length<j0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*Vh?t.push(s):u>o*Vh&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<K0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Y0=2.25,Hh=8;function Z0(e){if(e.length<Hh)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,f)=>c-f),r=Y0*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,f)=>f),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let f=c+1;f<e.length;f++){const m=t[c][0]-t[f][0],g=t[c][1]-t[f][1];m*m+g*g<=i&&(a[s(c)]=s(f))}const o=new Map;for(let c=0;c<e.length;c++){const f=s(c);o.set(f,[...o.get(f)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<Hh||u.length===e.length)return[];const l=new Set(u),p=e.map((c,f)=>f).filter(c=>!l.has(c));return p.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${p.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const xt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function yt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const Q0=.42,J0=22,ey=43,ty=120,ny=1.5,ry=.72,iy=110,jh=3;function Gn(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*Q0);if(l<1)return 0;let p=0;for(let c=0;c<i;c++)for(let f=0;f<r;f++){if((f-o)**2+(c-u)**2>l*l)continue;const m=(c*r+f)*a,g=s[m],y=s[m+1],b=s[m+2];!t&&g>=250&&y>=250&&b>=250||(n(g,y,b),p+=1)}return p}function ay(e){let t=0,n=0,r=0,i=Gn(e,!1,(a,s,o)=>{const u=yt(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Gn(e,!0,(a,s,o)=>{const u=yt(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function sy(e){let t=0,n=0,r=Gn(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=Gn(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function oy(e){let t=0;const n=Gn(e,!0,(r,i,a)=>{t+=yt(r,i,a).s});return n===0?null:t/n}function uy(e){const t=ay(e);if(t===null||t.s<=J0)return 1;if(t.s>=ty){const n=sy(e);return n!==null&&n>=ny?6:3}return t.s>=ey?3:6}function ly(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function dy(e,t){const n=[...t];if(e.length<jh||t.length!==e.length)return n;const r=e.map(s=>oy(s)),i=r.filter(s=>s!==null);if(i.length<jh)return n;const a=Ph(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<ry*a&&s<iy&&(n[o]=1)}),n}function Kh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=(f*l+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:p,channels:3,data:c}}function cy(e,t){const n=t.map(a=>Kh(e,a)),r=n.map(a=>uy(a)),i=ly(t,r);return dy(n,i)}function py(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Xh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const p=l*i,c=Math.min((l+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,o);if(!(y<=0))for(let b=Math.floor(p);b<c;b++){const $=Math.min(b+1,c)-Math.max(b,p);$<=0||(f+=e.data[g*e.width+b]*$*y,m+=$*y)}}r[s*t+l]=Math.min(255,Math.max(0,Fn(f/m)))}}return{width:t,height:n,data:r}}function hy(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Fn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function fy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(!(p<0||p>=t||c<0||c>=n)&&r[c*t+p]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function my(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(p>=0&&p<t&&c>=0&&c<n&&r[c*t+p]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function va(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,p=0;s[p++]=u,i[u]=o;let c=0,f=0,m=0;for(;l<p;){const g=s[l++],y=g%t,b=g/t|0;c+=1,f+=y,m+=b;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const T=y+x,S=b+$;if(T<0||T>=t||S<0||S>=n)continue;const E=S*t+T;r[E]>0&&i[E]===0&&(i[E]=o,s[p++]=E)}}a[o]={area:c,centroidX:f/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function gy(e,t,n){return Yh(Float32Array.from(e.data),e.width,t,n)}function Yh(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let p=0;p<t;p++){const c=p-a,f=l-a,m=o*c-u*f+a,g=u*c+o*f+a,y=Math.floor(m),b=Math.floor(g),$=m-y,x=g-b,T=(k,C)=>k>=0&&k<t&&C>=0&&C<t?e[C*t+k]:r,S=T(y,b)*(1-$)+T(y+1,b)*$,E=T(y,b+1)*(1-$)+T(y+1,b+1)*$;i[l*t+p]=S*(1-x)+E*x}return i}const yy=.9,wy=.34,_y=[.55,.6,.66,.72],by=22,$y=88,xy=35,wn=28,Sa=4,vy=Array.from({length:15},(e,t)=>-21+t*3),Zh=[-2,0,2],Sy=3,Ty=.3;function Iy(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Ey(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let b=0;b<e.width;b++)e.data[y*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),p=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let b=0;b<s;b++)l[(y+c)*u+(b+p)]=e.data[(y+r)*e.width+(b+t)];const f=wn-2*Sa,m=Xh({width:u,height:u,data:l},f,f),g=new Float32Array(wn*wn);for(let y=0;y<f;y++)for(let b=0;b<f;b++)g[(y+Sa)*wn+(b+Sa)]=m.data[y*f+b]>110?1:0;return g}function ky(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*wy);if(u<4)return null;const l=s-u,p=o-u,c=2*u,f=2*u;if(c<6||f<6)return null;const m=new Int16Array(c*f),g=new Int16Array(c*f),y=new Int16Array(c*f),b=new Uint8Array(c*f),$=[],x=Math.min(c,f)/2;for(let N=0;N<c;N++)for(let ee=0;ee<f;ee++){const L=((N+l)*n+(ee+p))*i,{h:Y,s:K,v:q}=yt(a[L],a[L+1],a[L+2]),oe=N*f+ee;m[oe]=Y,g[oe]=K,y[oe]=q,Math.sqrt((ee-f/2)**2+(N-c/2)**2)/x<=t&&(b[oe]=1,$.push(q))}if($.length<16)return null;const T=Uh($,55);let S=0,E=0,k=0;const C=N=>m[N]>=by&&m[N]<=$y&&g[N]>=xy,v=N=>y[N]>=T&&g[N]<=95&&!C(N)&&b[N]===1;for(let N=0;N<c*f;N++)b[N]===1&&(k+=1,y[N]>=130&&!C(N)&&(S+=1),v(N)&&(E+=1));const R=S>.5*k&&E<.15*k,O=new Uint8Array(c*f);if(R){const N=Uh($,45);for(let ee=0;ee<c*f;ee++)O[ee]=b[ee]===1&&y[ee]<=N?255:0}else for(let N=0;N<c*f;N++)O[N]=v(N)?255:0;const j={width:f,height:c,data:O},P=fy(j);let G=va(P),A=G;if(G.stats.length<=1&&(G=va(j),A=G,G.stats.length<=1))return null;const B=Math.min(c,f)/2;let H=0,X=-1;for(let N=1;N<A.stats.length;N++){const ee=A.stats[N];if(ee===void 0)continue;const L=Math.hypot(ee.centroidX-f/2,ee.centroidY-c/2)/B,Y=ee.area*(1-.6*Math.min(L,1));Y>X&&(X=Y,H=N)}if(H===0)return null;const ne=new Uint8Array(c*f);for(let N=0;N<c*f;N++)ne[N]=A.labels[N]===H?255:0;return Ey(my({width:f,height:c,data:ne}))}function Cy(e,t,n,r,i,a){const s=wn;let o=0,u=0;for(let l=0;l<s;l++){const p=l-a;if(!(p<0||p>=s))for(let c=0;c<s;c++){const f=c-i;if(f<0||f>=s)continue;const m=e[p*s+f];m!==0&&(u+=m,o+=m*n[l*s+c])}}return o/(u+r-o+1e-6)}function My(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of vy){const a=i===0?e:Yh(e,wn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of Zh)for(const u of Zh){const l=Cy(a,s,t,n,o,u);l>r&&(r=l)}}return r}function Ay(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of _y){const o=ky(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([My(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Ty)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,Sy))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const Ry=2560,zy=.3,Oy=.5,Ny=1.6,By=3,Dy=5;function Py(e){const t=Math.min(1,Ry/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*o-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,p+1),f=Math.max(0,Math.min(1,l-p));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const T=2-x,S=(p*e.width+y)*e.channels+T,E=(p*e.width+b)*e.channels+T,k=(c*e.width+y)*e.channels+T,C=(c*e.width+b)*e.channels+T,v=e.data[S]*(1-$)+e.data[E]*$,R=e.data[k]*(1-$)+e.data[C]*$,O=v*(1-f)+R*f;a[x*i+u*n+m]=(O/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Uy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const l=o+t;e[l]>u&&(u=e[l]),s+1<t&&e[l+1]>u&&(u=e[l+1])}r[o]=u}}return r}function Ly(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function Fy(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,l=o-a,p=Math.hypot(u,l);if(p===0)continue;const c=u/p,f=l/p;let m=1/0,g=-1/0,y=1/0,b=-1/0;for(const[S,E]of e){const k=S*c+E*f,C=-S*f+E*c;k<m&&(m=k),k>g&&(g=k),C<y&&(y=C),C>b&&(b=C)}const $=g-m,x=b-y,T=$*x;if(T<n){n=T;const S=(m+g)/2,E=(y+b)/2;t={cx:S*c-E*f,cy:S*f+E*c,w:$,h:x,angle:Math.atan2(f,c)}}}return t}function Gy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),l=Math.abs(s*a)+Math.abs(o*i),p=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let b=f;b<=m;b++)for(let $=p;$<=c;$++){const x=$-r.cx,T=b-r.cy,S=x*i+T*a,E=-x*a+T*i;Math.abs(S)<=s&&Math.abs(E)<=o&&(g+=e[b*t+$],y+=1)}return y===0?0:g/y}function Wy(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,b)=>y[0]-b[0]),[o,u,l,p]=s,[c,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=l[1]<=p[1]?[l,p]:[p,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function qy(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>zy?255:0;s=Uy(s,i,a);const o={width:i,height:a,data:s},{labels:u}=va(o),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let b=l.get(y);b===void 0&&(b=new Map,l.set(y,b));const $=b.get(m);$===void 0?b.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const p=n/i,c=r/a,f=[];for(const[m,g]of l){const y=[];for(const[O,[j,P]]of g)y.push([j-.5,O-.5],[j-.5,O+.5],[P+.5,O-.5],[P+.5,O+.5]);const b=Fy(Ly(y));if(Math.min(b.w,b.h)<By)continue;const $=Gy(e,i,a,b);if($<Oy)continue;const x=b.w*b.h*Ny/(2*(b.w+b.h)),T={...b,w:b.w+2*x,h:b.h+2*x};if(Math.min(T.w,T.h)<Dy+2)continue;const E=Wy(T).map(([O,j])=>[Math.min(n,Math.max(0,Math.round(O*p))),Math.min(r,Math.max(0,Math.round(j*c)))]),k=E.map(O=>O[0]),C=E.map(O=>O[1]),v=Math.min(...k),R=Math.min(...C);f.push({quad:E,x:v,y:R,width:Math.max(...k)-v,height:Math.max(...C)-R,score:$})}return f.sort((m,g)=>g.score-m.score)}function Vy(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Hy([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),l=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*c+u[8],g=(u[0]*f+u[1]*c+u[2])/m,y=(u[3]*f+u[4]*c+u[5])/m,b=Math.floor(g),$=Math.floor(y),x=g-b,T=y-$,S=Math.max(0,Math.min(e.width-1,b)),E=Math.max(0,Math.min(e.width-1,b+1)),k=Math.max(0,Math.min(e.height-1,$)),C=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const R=e.data[(k*e.width+S)*e.channels+v],O=e.data[(k*e.width+E)*e.channels+v],j=e.data[(C*e.width+S)*e.channels+v],P=e.data[(C*e.width+E)*e.channels+v],G=R*(1-x)+O*x,A=j*(1-x)+P*x;l[(c*s+f)*e.channels+v]=Math.round(G*(1-T)+A*T)}}const p={width:s,height:o,channels:e.channels,data:l};return o/s>=1.5?Lt(p,3):p}function Hy(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let l=i;l<8;l++)n[o][l]-=u*n[i][l];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Lt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let p=0;p<i;p++)for(let c=0;c<r;c++){let f,m;n===1?(f=i-1-p,m=c):n===2?(f=r-1-c,m=i-1-p):(f=p,m=r-1-c);const g=(p*r+c)*a,y=(m*o+f)*a;for(let b=0;b<a;b++)l[y+b]=s[g+b]}return{width:o,height:u,channels:a,data:l}}const jy=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,jy)*255));return e})();const Rt=48,Ky=320;function Xy(e){return["blank",...e.characters," "]}function Yy(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function Zy(e,t){const n=Math.trunc(Rt*t),r=e.width/e.height,i=Math.ceil(Rt*r)>n?n:Math.ceil(Rt*r),a=new Float32Array(3*Rt*n),s=Rt*n,o=e.width/i,u=e.height/Rt;for(let l=0;l<Rt;l++){const p=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(p))),f=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,p-c));for(let g=0;g<i;g++){const y=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,b+1),x=Math.max(0,Math.min(1,y-b));for(let T=0;T<3;T++){const S=2-T,E=(c*e.width+b)*e.channels+S,k=(c*e.width+$)*e.channels+S,C=(f*e.width+b)*e.channels+S,v=(f*e.width+$)*e.channels+S,R=e.data[E]*(1-x)+e.data[k]*x,O=e.data[C]*(1-x)+e.data[v]*x,j=R*(1-m)+O*m;a[T*s+l*n+g]=(j/255-.5)/.5}}}return{tensor:a,width:n}}const Qy=62,Jy=8,ew=5;function Ta(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function tw(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function _r(e,t){return e.length===0&&t.length===0?100:200*tw(e,t)/(e.length+t.length)}function Qh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return _r(n(e),n(t))}function nw(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(p=>r.has(p)).sort(),a=[...n].filter(p=>!r.has(p)).sort(),s=[...r].filter(p=>!n.has(p)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),l=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(_r(o,u),_r(o,l),_r(u,l))}function rw(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[Ta(i),Ta(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function iw(e,t){const n=Ta(e);if(!n||t.length===0)return null;const i=rw(t).map(p=>({...p,score:nw(n,p.key)})).sort((p,c)=>c.score-p.score).slice(0,Jy).filter(p=>p.score>=Qy);if(i.length===0)return null;const a=i[0].score,s=i.filter(p=>a-p.score<=ew),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],l=[Qh(o,u.key),u.score];for(const p of s.slice(1)){const c=[Qh(o,p.key),p.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=p,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Jh=5e3,Ia=.75,ef=15,aw=1.25,sw=2.4,ow=.003,uw=.85,lw=4,Ea=2600,ka=2,Ca=.3,tf=.1,nf=.012,dw=22,rf=.5,br=.12;function Ke(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function cw(e,t,n,r){const i=r.map(ie=>ie[0]),a=r.map(ie=>ie[1]),s=i.reduce((ie,_e)=>ie+_e,0)/i.length,o=a.reduce((ie,_e)=>ie+_e,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*lw,p=Math.max(0,Math.trunc(s-l)),c=Math.min(n.width,Math.trunc(s+l)),f=Math.max(0,Math.trunc(o-l)),m=Math.min(n.height,Math.trunc(o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Ea?ka:1,y=Ke(e,n),b=Ke(e,t),$=new e.Rect(p,f,c-p,m-f),x=y.roi($),T=new e.Mat;g!==1?e.resize(x,T,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(T);const S=new e.Mat,E=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(T,E,e.COLOR_RGB2GRAY);const k=new e.ORB(Jh),C=new e.KeyPointVector,v=new e.KeyPointVector,R=new e.Mat,O=new e.Mat,j=new e.Mat,P=[y,b,x,T,S,E,C,v,R,O,j],G=ie=>{for(const _e of P)try{_e.delete()}catch{}try{k.delete()}catch{}return ie};if(k.detectAndCompute(S,j,C,R),k.detectAndCompute(E,j,v,O),R.rows<8||O.rows<8)return G(null);const A=new e.BFMatcher(e.NORM_HAMMING),B=new e.DMatchVectorVector;A.knnMatch(R,O,B,2);const H=[],X=[];for(let ie=0;ie<B.size();ie++){const _e=B.get(ie);if(_e.size()===2){const ze=_e.get(0),Oe=_e.get(1);if(ze.distance<Ia*Oe.distance){const Ne=C.get(ze.queryIdx).pt,nt=v.get(ze.trainIdx).pt;H.push(Ne.x,Ne.y),X.push(nt.x,nt.y)}}}if(B.delete(),A.delete(),H.length/2<8)return G(null);const ne=e.matFromArray(H.length/2,1,e.CV_32FC2,H),N=e.matFromArray(X.length/2,1,e.CV_32FC2,X),ee=new e.Mat,L=e.findHomography(ne,N,e.RANSAC,5,ee);let Y=0;for(let ie=0;ie<ee.rows;ie++)Y+=ee.data[ie];const K=L.rows===3?[...L.data64F]:null;if(ne.delete(),N.delete(),ee.delete(),L.delete(),K===null||Y<ef)return G(null);const q=1/g,oe=[[q,0,p],[0,q,f],[0,0,1]],ce=[0,1,2].map(ie=>[0,1,2].map(_e=>oe[ie][0]*K[_e]+oe[ie][1]*K[3+_e]+oe[ie][2]*K[6+_e]));return G({H:ce,inliers:Y})}function Ma(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,p]=e[u],[c,f]=e[(u+1)%4];r+=l*f-c*p}const i=Math.abs(r/2)/(t*n);if(i<ow||i>uw)return!1;const a=e.map((u,l)=>{const p=e[(l+1)%4];return Math.hypot(p[0]-u[0],p[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=aw&&o<=sw}function Aa(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ra(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ca*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(P=>[P[0],P[1],P[2]-s*(P[0]+P[1])+0]);for(let P=0;P<3;P++)l[P][2]=r[P][2]-s*r[P][0]-s*r[P][1];const p=Ke(e,t),c=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(p,c,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),p.delete(),f.delete();const g=m.data,y=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],$=(P,G)=>{const A=(G*o+P)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let P=0;P<u;P++)for(let G=0;G<o;G++)(P<y||P>=u-y||G<y||G>=o-y)&&$(G,P);const x=P=>{P.sort((A,B)=>A-B);const G=P.length>>1;return P.length%2?P[G]:(P[G-1]+P[G])/2},T=[x(b[0]),x(b[1]),x(b[2])],S=(P,G)=>{const A=(G*o+P)*3,B=g[A]-T[0],H=g[A+1]-T[1],X=g[A+2]-T[2];return Math.sqrt(B*B+H*H+X*X)>dw},E=Math.max(6,Math.trunc(tf*i)),k=Math.max(6,Math.trunc(tf*a)),C=Math.max(2,Math.trunc(nf*i)),v=Math.max(2,Math.trunc(nf*a)),R=P=>{let G=0,A=0;for(const B of P)A=B?A+1:0,A>G&&(G=A);return G/Math.max(1,P.length)},O=P=>{let G,A,B,H,X;if(P==="L"?(G=s,A=s+a,B=Math.max(0,s-C-E),H=Math.max(0,s-C),X=!1):P==="R"?(G=s,A=s+a,B=s+i+C,H=Math.min(o,s+i+C+E),X=!1):(G=Math.max(0,s-v-k),A=Math.max(0,s-v),B=s,H=s+i,X=!0),A<=G||H<=B)return 0;const ne=[];if(X)for(let N=B;N<H;N++){let ee=0;for(let L=G;L<A;L++)S(N,L)&&ee++;ne.push(ee/(A-G)>rf)}else for(let N=G;N<A;N++){let ee=0;for(let L=B;L<H;L++)S(L,N)&&ee++;ne.push(ee/(H-B)>rf)}return R(ne)},j={L:O("L"),R:O("R"),T:O("T")};return c.delete(),m.delete(),j}const pw=6e3,hw=8,af=.5,fw=.6;function mw(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Ea?ka:1,a=Ke(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(pw),l=new e.Mat,p=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,l,p,c);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return f;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const b=Ke(e,y),$=new e.Mat;e.cvtColor(b,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute($,l,x,T);const S=[b,x,T],E=()=>{for(const ce of S)ce.delete();$.delete()};if(T.rows<8){E();continue}const k=new e.DMatchVectorVector;m.knnMatch(T,c,k,2);const C=[],v=[];for(let ce=0;ce<k.size();ce++){const ie=k.get(ce);if(ie.size()===2){const _e=ie.get(0);if(_e.distance<Ia*ie.get(1).distance){const ze=x.get(_e.queryIdx).pt,Oe=p.get(_e.trainIdx).pt;C.push(ze.x,ze.y),v.push(Oe.x,Oe.y)}}}if(k.delete(),C.length/2<8){E();continue}const R=e.matFromArray(C.length/2,1,e.CV_32FC2,C),O=e.matFromArray(v.length/2,1,e.CV_32FC2,v),j=new e.Mat,P=e.findHomography(R,O,e.RANSAC,5,j);let G=0;for(let ce=0;ce<j.rows;ce++)G+=j.data[ce];const A=P.rows===3?[...P.data64F]:null;if(R.delete(),O.delete(),j.delete(),P.delete(),A===null||G<hw){E();continue}const B=1/i,H=[[B*A[0],B*A[1],B*A[2]],[B*A[3],B*A[4],B*A[5]],[A[6],A[7],A[8]]],X=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ce,ie])=>Aa(H,ce,ie));if(!Ma(X,t.width,t.height)){E();continue}const ne=Ke(e,t),N=e.matFromArray(3,3,e.CV_64F,H.flat()),ee=new e.Mat;e.warpPerspective(ne,ee,N,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const L=new e.Mat;e.cvtColor(ee,L,e.COLOR_RGB2GRAY);const Y=new e.Mat;e.matchTemplate(L,$,Y,e.TM_CCOEFF_NORMED);const K=Y.data32F[0];if(ne.delete(),N.delete(),ee.delete(),L.delete(),Y.delete(),K<af){E();continue}const q=Ra(e,t,y,H),oe=za(q);f.push({id:g,confidence:Math.max(0,K),footprint:X,built:q!==null&&Math.max(q.L,q.R,q.T)>=br,tuckRegion:Oa(X,oe)}),E()}}finally{o.delete(),l.delete(),p.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return f}function za(e){return e!==null&&e.R>=br?["R"]:[]}function Oa(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=Ca*a;if(!(s>0))return null;const o=n.reduce((y,b)=>y+b[0],0)/n.length,u=n.reduce((y,b)=>y+b[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},p=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[b,$]=l[y],x=n[b],T=n[$];let S=-(T[1]-x[1]),E=T[0]-x[0];const k=(x[0]+T[0])/2,C=(x[1]+T[1])/2;S*(k-o)+E*(C-u)<0&&(S=-S,E=-E);const v=Math.hypot(S,E);v<=1e-6||(S=S/v*s,E=E/v*s,p.push([x[0]+S,x[1]+E],[T[0]+S,T[1]+E]))}const c=p.map(y=>y[0]),f=p.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...f))-g}}function gw(e,t,n,r){const i=cw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,p])=>Aa(i.H,l,p));if(!Ma(s,t.width,t.height))return null;const o=Ra(e,t,n,i.H);if(o===null)return null;const u=za(o);return{built:Math.max(o.L,o.R,o.T)>=br,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const yw=.88;function sf(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ca*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*yw),p=o-l;if(p<1)return null;const c=Ke(e,t),f=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(f,m),y=[...g.data64F],b=[0,1,2].flatMap(C=>[y[C*3],y[C*3+1],y[C*3+2]-s*y[C*3]-s*y[C*3+1]]),$=e.matFromArray(3,3,e.CV_64F,b),x=new e.Mat;e.warpPerspective(c,x,$,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,p,u)),S=new e.Mat;T.copyTo(S);const E=S.data,k=new Uint8ClampedArray(p*u*3);k.set(E.subarray(0,k.length));for(const C of[c,f,m,g,$,x,T,S])try{C.delete()}catch{}return{width:p,height:u,channels:3,data:k}}function ww(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),p=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+s+u)),f=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Ea?ka:1,y=Ke(e,n),b=Ke(e,t),$=y.roi(new e.Rect(p,f,c-p,m-f)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(b,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const E=new e.ORB(Jh),k=new e.KeyPointVector,C=new e.KeyPointVector,v=new e.Mat,R=new e.Mat,O=new e.Mat,j=[y,b,$,x,T,S,k,C,v,R,O],P=ce=>{for(const ie of j)try{ie.delete()}catch{}try{E.delete()}catch{}return ce};if(E.detectAndCompute(T,O,k,v),E.detectAndCompute(S,O,C,R),v.rows<8||R.rows<8)return P(null);const G=new e.BFMatcher(e.NORM_HAMMING),A=new e.DMatchVectorVector;G.knnMatch(v,R,A,2);const B=[],H=[];for(let ce=0;ce<A.size();ce++){const ie=A.get(ce);if(ie.size()===2){const _e=ie.get(0),ze=ie.get(1);if(_e.distance<Ia*ze.distance){const Oe=k.get(_e.queryIdx).pt,Ne=C.get(_e.trainIdx).pt;B.push(Oe.x,Oe.y),H.push(Ne.x,Ne.y)}}}if(A.delete(),G.delete(),B.length/2<8)return P(null);const X=e.matFromArray(B.length/2,1,e.CV_32FC2,B),ne=e.matFromArray(H.length/2,1,e.CV_32FC2,H),N=new e.Mat,ee=e.findHomography(X,ne,e.RANSAC,5,N);let L=0;for(let ce=0;ce<N.rows;ce++)L+=N.data[ce];const Y=ee.rows===3?[...ee.data64F]:null;if(X.delete(),ne.delete(),N.delete(),ee.delete(),Y===null||L<ef)return P(null);const K=1/g,q=[[K,0,p],[0,K,f],[0,0,1]],oe=[0,1,2].map(ce=>[0,1,2].map(ie=>q[ce][0]*Y[ie]+q[ce][1]*Y[3+ie]+q[ce][2]*Y[6+ie]));return P({H:oe,inliers:L})}function of(e,t,n,r){const i=ww(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>Aa(i.H,$,x));if(!Ma(s,t.width,t.height))return null;const o=Ke(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const p=Ke(e,n),c=new e.Mat,f=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(p,f,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,f,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[o,u,l,p,c,f,m])try{$.delete()}catch{}if(g<af)return null;const y=Ra(e,t,n,i.H);if(y===null)return null;const b=za(y);return{built:Math.max(y.L,y.R,y.T)>=br,footprint:s,overflow:b,edgeScores:y,inliers:i.inliers}}function _w(e,t,n,r=.03){let i=null,a=1/0;for(const s of e){const[o,u,l,p]=s;if(l<=0||p<=0)continue;const c=r*l,f=r*p;if(t>=o-c&&t<=o+l+c&&n>=u-f&&n<=u+p+f){const m=l*p;m<a&&(a=m,i=[o,u,l,p])}}return i}const bw=.3,$w=.3;function xw(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=bw}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,p=Math.max(o,u,l)<$w;if(!r&&!p)return;t.some(([f,m])=>f>=a.zone.x0&&f<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const vt=128,Na=.5;function Ba(e){const t=un(e,vt,vt),n=vt*vt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function uf(e){const t=e[1]??0;return{built:t>=Na,prob:t}}const Wn=120,qn=179,vw=1.3,Sw=3.6,Tw=.45,Iw=6e-4,Ew=.02,kw=6e3,Cw=.78,Mw=1.25,Aw=2.4,Rw=.05,zw=1.5,Ow=.5,Nw=.9,Bw=150,Dw=18,Pw=34,Uw=90,Lw=130,Fw=.13,Gw=.15,$r="magistrates-guild",Da="merchants-guild";function Ww(e,t){const n=Ke(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Wn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[qn,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const p=new e.Mat,c=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(l,p,c,f,8);l.delete(),p.delete(),f.delete();const g=t.width*t.height,y=[];for(let b=1;b<m;b++){const $=c.intAt(b,0),x=c.intAt(b,1),T=c.intAt(b,2),S=c.intAt(b,3),E=c.intAt(b,4),k=E/g;k<Iw||k>Ew||E/Math.max(T*S,1)<Tw||y.push({x:$,y:x,w:T,h:S})}return c.delete(),{blobs:y,mask:o,maskWidth:t.width}}function qw(e,t,n,r,i,a,s){const o=e,u=a,l=s,p=i;if(!p.gray){const K=Ke(e,r);p.gray=new o.Mat,o.cvtColor(K,p.gray,o.COLOR_RGB2GRAY),K.delete(),p.k=new o.KeyPointVector,p.d=new o.Mat;const q=new o.Mat;u.detectAndCompute(p.gray,q,p.k,p.d),q.delete()}const c=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,f,m,g),f.delete();const y=K=>(m.delete(),g.delete(),K);if(p.d.rows<8||g.rows<8)return y(null);const b=new o.DMatchVectorVector;l.knnMatch(p.d,g,b,2);const $=[],x=[];for(let K=0;K<b.size();K++){const q=b.get(K);if(q.size()===2){const oe=q.get(0);if(oe.distance<Cw*q.get(1).distance){const ce=p.k.get(oe.queryIdx).pt,ie=m.get(oe.trainIdx).pt;$.push(ce.x,ce.y),x.push(ie.x,ie.y)}}}if(b.delete(),$.length/2<8)return y(null);const T=o.matFromArray($.length/2,1,o.CV_32FC2,$),S=o.matFromArray(x.length/2,1,o.CV_32FC2,x),E=new o.Mat,k=o.findHomography(T,S,o.RANSAC,5,E);if(T.delete(),S.delete(),E.delete(),k.rows!==3)return k.delete(),y(null);const C=[...k.data64F],v=(K,q)=>{const oe=C[6]*K+C[7]*q+C[8];return[(C[0]*K+C[1]*q+C[2])/oe,(C[3]*K+C[4]*q+C[5])/oe]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([K,q])=>v(K,q));if(R.some(K=>!Number.isFinite(K[0])||!Number.isFinite(K[1])))return k.delete(),y(null);const O=R.map((K,q)=>{const oe=R[(q+1)%4];return Math.hypot(oe[0]-K[0],oe[1]-K[1])}),j=Math.min(...O);if(j<1)return k.delete(),y(null);const P=Math.max(...O)/j;let G=0;for(let K=0;K<4;K++){const[q,oe]=R[K],[ce,ie]=R[(K+1)%4];G+=q*ie-ce*oe}const A=t,B=Math.abs(G/2)/(A.rows*A.cols);if(P<Mw||P>Aw||B<Rw||B>zw)return k.delete(),y(null);const H=new o.Mat;o.warpPerspective(A,H,k,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),k.delete();const X=new o.Mat;o.cvtColor(H,X,o.COLOR_RGB2GRAY),H.delete();const ne=Math.trunc(r.height/2),N=X.roi(new o.Rect(0,0,r.width,ne)),ee=p.gray.roi(new o.Rect(0,0,r.width,ne)),L=new o.Mat;o.matchTemplate(N,ee,L,o.TM_CCOEFF_NORMED);const Y=L.data32F[0];return N.delete(),ee.delete(),L.delete(),X.delete(),y(Y)}function Vw(e,t,n){let r,i;if(n===$r)r=Da,i=Fw;else if(n===Da)r=$r,i=Gw;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let p=0,c=null;for(const[f,m]of[[0,l],[l,o]]){let g=0,y=0;for(let $=s;$<s+u;$++)for(let x=a+f;x<a+m;x++){const T=($*e.width+x)*e.channels,{h:S,s:E,v:k}=yt(e.data[T],e.data[T+1],e.data[T+2]);if(S>=Wn&&S<=qn&&E>=30&&E<=170&&k<=170)continue;g++,(r===Da?S>=Dw&&S<=Pw&&E>=Uw&&k>=Lw:S>=95&&S<=130&&E>=80)&&y++}if(g<20)continue;const b=y/g;b>p&&(p=b,c={x:a+f,y:s,w:m-f,h:u})}return p>=i&&c!==null?{id:r,box:c}:null}const Hw=1.7,jw=140,Kw=170,Xw=.2,Yw=.1,lf=240,df=80,cf=60,Zw=50,pf="scientists-guild",hf="tacticians-guild",xr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Qw(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let E=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&E++;o[S]=E/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],p=u[u.length-1],c=p-l;if(c<5)return[];const f=a/c;if(f<vw||f>Sw)return[];if(f>=Hw)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,y=[];let b=0;for(let S=-4;S<=4;S++){const E=Math.exp(-(S*S)/(2*g*g));y.push(E),b+=E}for(let S=0;S<s;S++){let E=0;for(let k=-4;k<=4;k++){const C=Math.min(s-1,Math.max(0,S+k));E+=o[C]*y[k+4]}m[S]=E/b}const $=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let T=l+Math.trunc(c/2);if(x>$){let S=1/0;for(let E=$;E<x;E++)m[E]<S&&(S=m[E],T=E)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:p-T}]}function Jw(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let p=0;p<s;p++){const c=((r+l)*e.width+n+p)*e.channels,f=(l*s+p)*3;u[f]=e.data[c],u[f+1]=e.data[c+1],u[f+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function e_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=yt(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=jw&&s<=Kw&&n++)}return t===0?0:n/t}function t_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=yt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=Wn&&a<=qn)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function ff(e,t){const n=Ke(e,t),r=new e.Mat;e.resize(n,r,new e.Size(lf,df),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:lf,height:df,channels:3,data:i}}function n_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function mf(e,t){const n=n_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:b,s:$,v:x}=yt(n.data[y],n.data[y+1],n.data[y+2]);!(b>=Wn&&b<=qn&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const s=a<20,o=Ke(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let p=0,c=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(p+=l[g*3]*100/255,c+=l[g*3+1]-128,f+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[p/m,c/m,f/m]}function r_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:p,s:c,v:f}=yt(e.data[l],e.data[l+1],e.data[l+2]);p>=Wn&&p<=qn&&c>=30&&c<=170&&f<=170||(t++,c>=70&&f>=50&&(p>=95&&p<=130?n++:p>=35&&p<=92?r++:p<=10?i++:p>=15&&p<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function i_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=yt(e.data[i],e.data[i+1],e.data[i+2]);s>=cf&&o>=Zw?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<cf&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function a_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function gf(e,t){const n=Ke(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function s_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=ff(e,a);n.set(i,gf(e,s)),xr.includes(i)&&r.set(i,mf(e,s))}return{gray:n,warmLab:r}}function o_(e,t,n){const r=ff(e,t),i=r_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return $r;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return pf;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return hf;const a=i_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=$r;else if(o==="green")u=pf;else if(o==="red")u=hf;else{const l=gf(e,r);let p="",c=-2;for(const f of xr){const m=n.gray.get(f);if(m===void 0)continue;const g=a_(l,m);g>c&&(c=g,p=f)}u=p||xr[0]}if(xr.includes(u)&&n.warmLab.size>0){const l=mf(e,r);let p=u,c=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,p=f)}return p}return u}function u_(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=Ww(e,t);if(s.length===0||n.size===0)return a;const l=e,p=new l.ORB(kw),c=new l.BFMatcher(l.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=Ke(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const $=b.x+Math.trunc(b.w/2),x=b.y+Math.trunc(b.h/2),T=Math.max(Bw,Math.trunc(Nw*Math.max(b.w,b.h))),S=Math.max(0,$-T),E=Math.max(0,x-T),k=Math.min(t.width,$+T),C=Math.min(t.height,x+T);if(k-S<16||C-E<16)continue;const v=m.roi(new l.Rect(S,E,k-S,C-E)),R=new l.Mat;l.cvtColor(v,R,l.COLOR_RGB2GRAY);let O=null,j=-2;for(const[B,H]of n){if(r!==void 0&&Date.now()>r)break;const X=qw(e,v,R,H,f.get(B),p,c);X!==null&&X>j&&(j=X,O=B)}v.delete(),R.delete();const P=new Set;if(O!==null&&j>=Ow){a.push({id:O,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),P.add(O);const B=Vw(t,b,O);B&&(a.push({id:B.id,boundingBox:{x:B.box.x,y:B.box.y,width:B.box.w,height:B.box.h},confidence:.9}),P.add(B.id))}if(i===void 0||i.size===0)continue;const G=Qw(o,u,b);if(G.length!==2)continue;const A=G.map(B=>Jw(t,B));if(!A.some(B=>B.width*B.height===0||t_(B)<Yw))for(let B=0;B<G.length;B++){const H=A[B];if(e_(H)<Xw)continue;g===null&&(g=s_(e,i));const X=o_(e,H,g);if(X&&!P.has(X)){P.add(X);const ne=G[B];a.push({id:X,boundingBox:{x:ne.x,y:ne.y,width:ne.w,height:ne.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const $=b;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{p.delete(),c.delete()}catch{}}return a}const yf=128,l_=.56,d_=15,c_=.58,p_=70,h_=50,f_=.12,m_=.2,g_=.1,y_=.17,wf=.15;function w_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function _f(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),p=Math.max(0,o-u),c=Math.min(n,s+u),f=Math.min(r,o+u),m=c-l,g=f-p,y=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const $=((b+p)*n+l)*i;y.set(a.subarray($,$+m*i),b*m*i)}return{width:m,height:g,channels:i,data:y}}function __(e){const t=_f(e,l_),n=py(t),r=Xh(n,yf,yf);return hy(r)}function b_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,p=t[u]-i;a+=l*p,s+=l*l,o+=p*p}return a/(Math.sqrt(s*o)+1e-6)}function $_(e){const t=new Map([["masonry",0],["strategy",0]]),n=_f(e,c_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:y,v:b}=yt(s[m],s[m+1],s[m+2]);y>=p_&&b>=h_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const p=u/o,c=l/o;return p>=f_&&t.set("masonry",wf*Math.min(1,p/m_)),c>=g_&&t.set("strategy",wf*Math.min(1,c/y_)),t}function x_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=__(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=d_)a.push(gy(n,l,i));const s=new Map;for(const[l,p]of t){let c=-1/0;for(const f of a){const m=b_(f,p);m>c&&(c=m)}s.set(l,c)}for(const[l,p]of $_(e))p>0&&s.has(l)&&s.set(l,s.get(l)+p);let o="",u=-1/0;for(const[l,p]of s)p>u&&(o=l,u=p);return[o,u]}const Ft=224,v_=512,S_=[.485,.456,.406],T_=[.229,.224,.225];function I_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function E_(e){const t=un(e,Ft,Ft),n=Ft*Ft,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-S_[a])/T_[a];return r}function k_(e){const t=3*Ft*Ft,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(E_(Lt(e,r)),r*t);return n}function C_(e,t=v_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function M_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const _n=96,A_=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],R_=.45;function z_(e){const t=un(e,_n,_n),n=_n*_n,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function O_(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=R_?A_[t]??"":"",prob:n}}const bn=128,N_=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],B_=.5,D_=.9;function P_(e){const t=un(e,bn,bn),n=bn*bn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function U_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let s=0;s<t;s++)for(let o=0;o<n;o++){const u=s,p=((n-1-o)*t+u)*r,c=(s*n+o)*r;for(let f=0;f<r;f++)a[c+f]=i[p+f]}return{width:n,height:t,channels:r,data:a}}function L_(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=U_(n);return n}function F_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function G_(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:L_(e,i),s=await t(P_(a)),o=F_(s);o.prob>r&&(r=o.prob,n=o.index)}return{id:r>=B_?N_[n]??"":"",prob:r}}const $n=96,W_=[1,2,3,4,5,6,7],q_=.8;function V_(e){const t=un(e,$n,$n),n=$n*$n,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function H_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:W_[t],prob:e[t]}}const xn=128,bf=.35,j_=["fp","laurel"],K_=.85;function X_(e){const t=un(e,xn,xn),n=xn*xn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Y_(e){return e[j_.indexOf("fp")]}const Z_=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Q_=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],J_=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],eb=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],tb=[...Q_,...J_,...eb,...Z_];Object.fromEntries(tb.map(e=>[e.id,e]));const nb=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Pe="/7wd-scorer/models/";let $f=!1;const vr=new Map;function xf(){var e;$f||(Ee.wasm.wasmPaths="/7wd-scorer/ort/",Ee.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,$f=!0)}const Pa=new Set;function rb(e){xf();let t=vr.get(e);return t===void 0&&(t=at.create(`${Pe}${xt[e].onnx}`,{executionProviders:Pa.has(e)?["wasm"]:["webgpu","wasm"]}),vr.set(e,t),t.catch(()=>vr.delete(e))),t}let Ua=null,La=null;const ib=.75,ab=4,sb=.65,ob=3e4;let Fa=null;function Ga(){return Fa===null&&(Fa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Fa}const vf=new Map;function Wa(e){let t=vf.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Pe}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),vf.set(e,t)),t}function qa(e){return Wa(`wonder-refs/${e}.jpg`)}const Sf=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function ub(){const e=new Map;for(const t of Sf){const n=await Wa(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function lb(){const e=new Map;for(const t of Sf){const n=await Wa(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const db=.6,cb=12,pb=45e3;let Va=null;function Tf(){return Va===null&&(xf(),Va=(async()=>{try{const[e,t,n,r]=await Promise.all([at.create(`${Pe}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),at.create(`${Pe}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Pe}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Pe}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Xy(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Va}async function hb(e,t){const n=Math.max(Ky/Rt,t.width/t.height),{tensor:r,width:i}=Zy(t,n),a={[e.rec.inputNames[0]]:new Ge("float32",r,[1,3,Rt,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,l]=s.dims,p=s.data,c=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const b=m*l;for(let $=0;$<l;$++){const x=p[b+$];x>y&&(y=x,g=$)}c[m]=g,f[m]=y}return Yy(c,f,e.charset)}async function fb(e,t){const n=await Tf();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+pb;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=Lt(e,s),u=Py(o),l={[n.det.inputNames[0]]:new Ge("float32",u.tensor,[1,3,u.height,u.width])},p=(await n.det.run(l))[n.det.outputNames[0]],c=qy(p.data,u,o.width,o.height).slice(0,cb);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of c){if(Date.now()>i){a=!0;break e}const m=Vy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,y]=await hb(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<db||g.trim().length<ab)continue;const b=iw(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<ib||b.kind!=="wonder")continue;const $=r.get(b.id);($===void 0||b.confidence>$.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:If(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function If(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,f)=>i===1?[f,r-1-c]:i===2?[n-1-c,r-1-f]:[n-1-f,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),l=Math.min(...o),p=Math.min(...u);return{x:l,y:p,width:Math.max(...o)-l,height:Math.max(...u)-p}}function mb(){return La===null&&(La=fetch(`${Pe}laurel_gallery.json`).then(async e=>e.ok?Iy(await e.json()):[]).catch(()=>[])),La}function gb(e,t,n,r){return Sr(e,t-r,n-r,2*r,2*r)}function Sr(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=((f+s)*e.width+(m+a))*e.channels,y=(f*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:p,channels:3,data:c}}function yb(){return Ua===null&&(Ua=fetch(`${Pe}token_templates.json`).then(async e=>e.ok?w_(await e.json()):new Map).catch(()=>new Map)),Ua}let Ha=null;function wb(){return Ha===null&&(Ha=(async()=>{try{const e=await fetch(`${Pe}token_embed_index.json`);if(!e.ok)return null;const t=I_(await e.json());return{session:await at.create(`${Pe}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Ha}const _b=.92;let ja=null;function bb(){return ja===null&&(ja=(async()=>{try{return(await fetch(`${Pe}guild_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ja}let Ka=null;function $b(){return Ka===null&&(Ka=(async()=>{try{return(await fetch(`${Pe}laurel_digit.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ka}let Xa=null;function xb(){return Xa===null&&(Xa=(async()=>{try{return(await fetch(`${Pe}laurel_filter.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xa}async function vb(e,t,n){const[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(bf*o),p=Math.trunc(bf*u),c=Math.max(0,r-l),f=Math.max(0,i-p),m=Math.min(e.width,a+l),g=Math.min(e.height,s+p),y=Sr(e,c,f,m-c,g-f);if(y.width<=0||y.height<=0)return null;try{const b=X_(y),$=await n.run({[n.inputNames[0]]:new Ge("float32",b,[1,3,xn,xn])});return Y_($[n.outputNames[0]].data)}catch{return null}}let Ya=null;function Ef(){return Ya===null&&(Ya=(async()=>{try{return(await fetch(`${Pe}tuck_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ya}const kf=.2,Sb=.3,Cf=.25;let Za=null;function Tb(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Cf)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const p=o[2]/o[3];if(!(Math.abs(Math.log(p))<=Cf)&&r>1==p>1)return!0}return!1}const Ib=.4;function Eb(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function kb(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||Eb(a,u)>=Ib)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function Cb(){return Za===null&&(Za=(async()=>{try{return(await fetch(`${Pe}tuck_box.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Za}async function Mb(e,t,n){const[r,i,a,s]=t;if(a<=0||s<=0)return null;const o=Math.round(a*kf),u=Math.round(s*kf),l=Math.max(0,Math.round(r-o)),p=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+o)),f=Math.min(e.height,Math.round(i+s+u)),m=c-l,g=f-p;if(m<=0||g<=0)return null;const y=e.channels,b=new Uint8ClampedArray(m*g*y);for(let T=0;T<g;T++){const S=((p+T)*e.width+l)*y;b.set(e.data.subarray(S,S+m*y),T*m*y)}const $={width:m,height:g,channels:y,data:b};let x=null;for(let T=0;T<4;T++){const S=T===0?$:Lt($,T),E=S.width,k=E-Math.floor(Sb*E),C=E-k;if(C<=0)continue;const v=new Uint8ClampedArray(C*S.height*S.channels);for(let G=0;G<S.height;G++){const A=(G*E+k)*S.channels;v.set(S.data.subarray(A,A+C*S.channels),G*C*S.channels)}const R={width:C,height:S.height,channels:S.channels,data:v},O=Ba(R),P=(await n.run({[n.inputNames[0]]:new Ge("float32",O,[1,3,vt,vt])}))[n.outputNames[0]].data[1]??0;x=x===null?P:Math.max(x,P)}return x}let Qa=null;function Ab(){return Qa===null&&(Qa=(async()=>{try{return(await fetch(`${Pe}wonder_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qa}async function Rb(e,t,n,r,i,a){var f;const s=(m,g,y,b)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),T=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+b)),E=T-$,k=S-x;if(E<=0||k<=0)return null;const C=t.channels,v=new Uint8ClampedArray(E*k*C);for(let R=0;R<k;R++){const O=((x+R)*t.width+$)*C;v.set(t.data.subarray(O,O+E*C),R*E*C)}return{width:E,height:k,channels:C,data:v}},o=async m=>(await r.run({[r.inputNames[0]]:new Ge("float32",m,[1,3,bn,bn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,b,$]=m;if(b<=0||$<=0)continue;const x=s(g,y,b,$);if(x===null)continue;const{id:T,prob:S}=await G_(x,o);if(T===""||S<D_)continue;const E=u.get(T);(E===void 0||S>E.prob)&&u.set(T,{prob:S,box:m})}const l=[],p=await Ef(),c=await Cb();for(const[m,{prob:g,box:y}]of u){const[b,$,x,T]=y;let S={x:Math.round(b),y:Math.round($),width:Math.round(x),height:Math.round(T)},E=null,k=[],C=null;if(Date.now()<i)try{const B=await qa(m);if(B!==null){const H=of(e,t,B,y);if(H!==null){E=H.footprint,k=H.overflow;const X=E.map(L=>L[0]),ne=E.map(L=>L[1]),N=Math.max(0,Math.round(Math.min(...X))),ee=Math.max(0,Math.round(Math.min(...ne)));if(S={x:N,y:ee,width:Math.min(t.width,Math.round(Math.max(...X)))-N,height:Math.min(t.height,Math.round(Math.max(...ne)))-ee},p!==null)try{const L=sf(e,t,B,E);if(L!==null){const Y=Ba(L),K=await p.run({[p.inputNames[0]]:new Ge("float32",Y,[1,3,vt,vt])});C=uf(K[p.outputNames[0]].data).prob}}catch{}}}}catch(B){console.warn(`[wonders-cls] ${m} registration failed:`,B)}const v=E!==null?Oa(E,k):null,R=[];if(C!==null&&R.push(C>=Na?1:0),c!==null)try{const B=await Mb(t,y,c);B!==null&&R.push(B>=Na?1:0)}catch{}const O=v??S,j=a.some(B=>{const H=B.box[0]+B.box[2]/2,X=B.box[1]+B.box[3]/2;return H>=O.x&&H<=O.x+O.width&&X>=O.y&&X<=O.y+O.height});R.push(j?1:0);let P=R.length>0&&R.reduce((B,H)=>B+H,0)*2>R.length;P&&Tb(O,S,a)&&(P=!1);const G={id:m,name:((f=nb[m])==null?void 0:f.name)??m,builtWithCardUnderneath:P,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},A=v??S;l.push({obj:G,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height}})}return l}async function zb(e,t){const n=await wb();if(n!==null)try{const r=k_(e),i=new Ge("float32",r,[4,3,Ft,Ft]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=M_(n.index,C_(s));return u<_b?["",-1]:[o,u]}catch{}return x_(e,t)}async function Ja(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Gt(e,t){const n=xt[e],{tensor:r,params:i}=U0(t,n.input),a=async()=>{const s=await rb(e),o={[s.inputNames[0]]:new Ge("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(Pa.has(e))throw s;return Pa.add(e),vr.delete(e),await a()}}const Ob=6,Nb=2,Bb=5,Db=2;async function Pb(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Ja(e),r=await Gt("banner",n),i=qh(r.rows,r.params,xt.banner.conf);if(t.banners=i.length,i.length>=Ob)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Gt("laurel",n),s=Gh(a.rows,a.params,xt.laurel.conf);if(t.laurels=s.length,s.length>=Nb)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Gt("coin",n),u=Fh(o.rows,o.params,xt.coin.conf);return t.coins=u.length,u.length>=Bb?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Db?{...t,kind:"board",confidence:.4}:t}function Ub(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Lb(e,t,n,r,i=()=>{}){const a={},s=[],o=[],u=[],l=[],p=[],c=[];let f=0,m=0,g=0,y=0,b=0;for(const S of e){b+=1;const E=`${t} photo ${b}/${e.length}`;r(`${E}: reading pixels…`,.01);const k=await Ja(S);r(`${E}: card banners…`,.04);const C=await Gt("banner",k),v=qh(C.rows,C.params,xt.banner.conf);r(`${E}: progress tokens…`,.08);const R=await Gt("token",k),O=await yb(),j=[];for(const U of V0(R.rows,R.params,xt.token.conf)){j.push({cx:U.cx,cy:U.cy,r:U.r});const[V,Q]=await zb(Kh(k,U),O);V===""&&Q<0?j.pop():V===""?m+=1:u.some(ue=>ue.id===V)||u.push({id:V,center:[U.cx,U.cy],radius:U.r,confidence:Math.round(Q*1e4)/1e4})}r(`${E}: coins…`,.14);const P=await Gt("coin",k),G=Fh(P.rows,P.params,xt.coin.conf).filter(U=>!j.some(V=>(U.cx-V.cx)**2+(U.cy-V.cy)**2<=U.r*U.r)),A=cy(k,G),B=[];if(G.forEach((U,V)=>{const Q=A[V];f+=Q,B.push({denomination:Q,center:[U.cx,U.cy],radius:U.r,denomSource:"colour"})}),B.length>=2){const U=B.map(Q=>Q.radius).sort((Q,ue)=>Q-ue),V=U.length%2===1?U[(U.length-1)/2]:(U[U.length/2-1]+U[U.length/2])/2;if(V>0)for(const Q of B)Q.radius/V>2&&(Q.suspect=!0,Q.suspectReason=`radius ${Q.radius}px is ${(Q.radius/V).toFixed(1)}x the photo's median coin radius — probably not a coin`)}o.push(...B);const H=[],X=Date.now()+ob;let ne=null,N=null;const ee=()=>(N===null&&(N=(async()=>{try{const{rows:U,params:V}=await Gt("wonder",k);return Dh(U,V,xt.wonder.conf,1).map(Q=>Q.box)}catch{return[]}})()),N),L=[];let Y=!1;const K=await Ab();if(K!==null){const U=await ee();if(U.length>0&&(ne=await Ga(),ne!==null)){r(`${E}: identifying wonders…`,.35);const V=await Rb(ne,k,U,K,X,v);for(const Q of V)l.some(ue=>ue.id===Q.obj.id)||(l.push(Q.obj),L.push({obj:Q.obj,edgeScores:Q.edgeScores,zone:Q.zone}),H.push(Q.zone));Y=V.length>0}}Y||r(`${E}: wonder names…`,.2);const q=Y?{wonders:[],aborted:!1}:await fb(k,(U,V)=>r(`${E}: ${U}`,.2+.35*(V??0)));ne===null&&(ne=q.wonders.length>0?await Ga():null);for(const U of q.wonders){let V=null;if(ne!==null&&Date.now()<X){r(`${E}: registering ${U.name}…`,.6);try{const Q=await qa(U.id);if(Q!==null){let ue=gw(ne,k,Q,[[U.nameBox.x,U.nameBox.y],[U.nameBox.x+U.nameBox.width,U.nameBox.y],[U.nameBox.x+U.nameBox.width,U.nameBox.y+U.nameBox.height],[U.nameBox.x,U.nameBox.y+U.nameBox.height]]);if(ue===null){const le=await ee(),ve=_w(le,U.nameBox.x+U.nameBox.width/2,U.nameBox.y+U.nameBox.height/2);ve!==null&&(ue=of(ne,k,Q,ve))}if(ue!==null){let le=ue.built,ve=!1;const Ae=await Ef();if(Ae!==null)try{const Be=sf(ne,k,Q,ue.footprint);if(Be!==null){const Xe=Ba(Be),Ue=await Ae.run({[Ae.inputNames[0]]:new Ge("float32",Xe,[1,3,vt,vt])});le=uf(Ue[Ae.outputNames[0]].data).built,ve=!0}}catch{}const Ce=ue.footprint.map(Be=>Be[0]),Fe=ue.footprint.map(Be=>Be[1]),Me=Math.max(0,Math.round(Math.min(...Ce))),je=Math.max(0,Math.round(Math.min(...Fe)));V={built:le,boundingBox:{x:Me,y:je,width:Math.min(k.width,Math.round(Math.max(...Ce)))-Me,height:Math.min(k.height,Math.round(Math.max(...Fe)))-je},tuckRegion:Oa(ue.footprint,ue.overflow),edgeScores:ue.edgeScores,builtByTuck:ve}}}}catch(Q){console.warn(`[wonders-reg] ${U.id} failed:`,Q)}}if(V!==null){const Q=V.tuckRegion??V.boundingBox;H.push({x0:Q.x,y0:Q.y,x1:Q.x+Q.width,y1:Q.y+Q.height})}else{const Q=Math.max(8,U.nameBox.height),ue=Math.round(U.nameBox.width*.15);H.push({x0:U.nameBox.x-ue,y0:U.nameBox.y-Q*2.5,x1:U.nameBox.x+U.nameBox.width+ue,y1:U.nameBox.y+U.nameBox.height+Q*2.5})}if(!l.some(Q=>Q.id===U.id)){const Q=(V==null?void 0:V.builtByTuck)===!0,ue=Q?V.built:!1,le=!Q&&(V==null?void 0:V.built)===!0,ve={id:U.id,name:U.name,builtWithCardUnderneath:ue,boundingBox:(V==null?void 0:V.boundingBox)??{x:0,y:0,width:0,height:0},...V!=null&&V.tuckRegion?{tuckRegion:V.tuckRegion}:{},confidence:U.confidence,...le?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};l.push(ve),L.push({obj:ve,edgeScores:V&&!V.builtByTuck?V.edgeScores:null,zone:H[H.length-1]})}}if(!Y){const U=xw(L.map(V=>({built:V.obj.builtWithCardUnderneath,edgeScores:V.edgeScores,zone:V.zone})),v.map(V=>[V.box[0]+V.box[2]/2,V.box[1]+V.box[3]/2]));for(const V of U){const Q=L[V];Q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(v.length>0){const V=new Set(U);for(let Q=0;Q<L.length;Q++){const ue=L[Q];if(V.has(Q)||!ue.obj.builtWithCardUnderneath)continue;const le=ue.obj.tuckRegion;if(le===void 0)continue;if(!v.some(Ae=>{const Ce=Ae.box[0]+Ae.box[2]/2,Fe=Ae.box[1]+Ae.box[3]/2;return Ce>=le.x&&Ce<=le.x+le.width&&Fe>=le.y&&Fe<=le.y+le.height})){const Ae=ue.obj;Ae.builtWithCardUnderneath=!1,Ae.suspect=!0,Ae.suspectReason="built-unconfirmed"}}}}if(q.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${E}: the wonder-name read ran out of its time budget on this device — ${q.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),ne!==null&&q.wonders.length>0&&Date.now()<X)try{const U=await Tf(),V=(U==null?void 0:U.catalog.filter(ue=>ue.kind==="wonder").map(ue=>ue.id))??[],Q=new Map;for(const ue of V)if(!l.some(le=>le.id===ue)){const le=await qa(ue);le!==null&&Q.set(ue,le)}if(Q.size>0){r(`${E}: searching occluded wonders…`,.7);const ue=mw(ne,k,Q,X);for(const le of ue){const ve=le.footprint.map(Ue=>Ue[0]),Ae=le.footprint.map(Ue=>Ue[1]),Ce=Math.max(0,Math.round(Math.min(...ve))),Fe=Math.max(0,Math.round(Math.min(...Ae))),Me={x:Ce,y:Fe,width:Math.min(k.width,Math.round(Math.max(...ve)))-Ce,height:Math.min(k.height,Math.round(Math.max(...Ae)))-Fe};if(l.some(Ue=>{const rt=Ue.boundingBox,Te=Math.max(0,Math.min(rt.x+rt.width,Me.x+Me.width)-Math.max(rt.x,Me.x)),Ze=Math.max(0,Math.min(rt.y+rt.height,Me.y+Me.height)-Math.max(rt.y,Me.y)),Qe=Te*Ze,Je=rt.width*rt.height+Me.width*Me.height-Qe;return Je>0&&Qe/Je>fw}))continue;const Be=U==null?void 0:U.catalog.find(Ue=>Ue.id===le.id);l.push({id:le.id,name:(Be==null?void 0:Be.nameFr)??(Be==null?void 0:Be.name)??le.id,builtWithCardUnderneath:le.built,boundingBox:Me,...le.tuckRegion?{tuckRegion:le.tuckRegion}:{},confidence:Math.round(le.confidence*1e4)/1e4});const Xe=le.tuckRegion??Me;H.push({x0:Xe.x,y0:Xe.y,x1:Xe.x+Xe.width,y1:Xe.y+Xe.height})}}}catch(U){console.warn("[wonders-reg] discovery failed:",U)}const oe=[];for(const U of v){const V=U.box[0]+U.box[2]/2,Q=U.box[1]+U.box[3]/2;if(H.some(le=>V>=le.x0&&V<=le.x1&&Q>=le.y0&&Q<=le.y1)){y+=1;continue}oe.push(U),a[U.family]=(a[U.family]??0)+1,g+=1}const ce=X0(oe),ie=new Set(ce.map(U=>U.box.join(",")));for(const U of Z0(oe))ie.has(U.box.join(","))||ce.push(U);for(const U of ce)c.push(U);if(oe.some(U=>U.family==="guild")){const U=await bb();if(U!==null){r(`${E}: identifying guilds…`,.75);for(const V of oe)if(V.family==="guild")try{const[Q,ue,le,ve]=V.box,Ae=Sr(k,Q,ue,le,ve),Ce=z_(Ae),Fe={[U.inputNames[0]]:new Ge("float32",Ce,[1,3,_n,_n])},je=(await U.run(Fe))[U.outputNames[0]].data,{id:Be,prob:Xe}=O_(je);Be!==""&&!p.some(Ue=>Ue.id===Be)&&p.push({id:Be,boundingBox:{x:Q,y:ue,width:le,height:ve},confidence:Math.round(Xe*1e4)/1e4})}catch(Q){console.warn("[guild-cls] failed:",Q)}}else if(Date.now()<X)try{const V=ne??await Ga();if(V!==null){const Q=await ub();if(Q.size>0){r(`${E}: identifying guilds…`,.75);const ue=await lb();for(const le of u_(V,k,Q,X,ue))p.some(ve=>ve.id===le.id)||p.push(le)}}}catch(V){console.warn("[guilds-reg] failed:",V)}}r(`${E}: laurels…`,.8);const ze=await mb(),Oe=[];for(const U of[0,1,2,3]){const V=U===0?k:Lt(k,U),Q=await Gt("laurel",V);for(const[ue,le,ve,Ae]of Gh(Q.rows,Q.params,xt.laurel.conf)){const Ce=If({x:ue,y:le,width:ve-ue,height:Ae-le},U,k.width,k.height),Fe=Ce.x+Ce.width/2,Me=Ce.y+Ce.height/2,je=.6*Math.max(Ce.width,Ce.height);Oe.some(([Xe,Ue,rt,Te])=>{const Ze=(Xe+rt)/2,Qe=(Ue+Te)/2;return(Fe-Ze)**2+(Me-Qe)**2<je*je})||Oe.push([Ce.x,Ce.y,Ce.x+Ce.width,Ce.y+Ce.height])}}const Ne=await $b(),nt=await xb();for(const[U,V,Q,ue]of Oe){const le=Math.trunc((U+Q)/2),ve=Math.trunc((V+ue)/2);if([...j,...G].some(Te=>(le-Te.cx)**2+(ve-Te.cy)**2<=Te.r*Te.r))continue;if(nt!==null){const Te=await vb(k,[Math.trunc(U),Math.trunc(V),Math.trunc(Q),Math.trunc(ue)],nt);if(Te!==null&&Te>=K_)continue}const Ce=Math.max(6,Math.trunc(Math.max(Q-U,ue-V)*yy)),Fe=gb(k,le,ve,Ce);let Me=null,je=0;const Be=new Map;for(const Te of[0,1,2,3]){const Ze=Te===0?Fe:Lt(Fe,Te),[Qe,Je]=Ay(Ze,ze);Qe!==null&&(Be.set(Qe,Math.max(Be.get(Qe)??0,Je)),Je>je&&(Me=Qe,je=Je))}Me!==null&&je<sb&&(Me=null);const Xe=je;if(Ne!==null){const Te=Sr(k,Math.trunc(U),Math.trunc(V),Math.trunc(Q-U),Math.trunc(ue-V));let Ze=null,Qe=0;for(const Je of[0,1,2,3]){const ns=Je===0?Te:Lt(Te,Je),Tr=V_(ns),Ir=await Ne.run({[Ne.inputNames[0]]:new Ge("float32",Tr,[1,3,$n,$n])}),{value:Vn,prob:vn}=H_(Ir[Ne.outputNames[0]].data);vn>Qe&&(Ze=Vn,Qe=vn)}Ze!==null&&Qe>=q_&&(Me=Ze,je=Qe)}const Ue=Me!==null&&[...Be.entries()].some(([Te,Ze])=>Te!==Me&&Ze>=Xe-.1),rt=H.some(Te=>le>=Te.x0&&le<=Te.x1&&ve>=Te.y0&&ve<=Te.y1);s.push({value:Me,valueRead:Me!==null,center:[Math.round((U+Q)/2),Math.round((V+ue)/2)],boundingBox:{x:Math.trunc(U),y:Math.trunc(V),width:Math.trunc(Q-U),height:Math.trunc(ue-V)},confidence:Math.round(je*1e4)/1e4,excluded:rt,photoIndex:b-1,...Ue?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}y>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${y} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):g>0&&l.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const $=a.guild??0;$!==p.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${$} purple banner(s) counted but ${p.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+p.map(S=>S.id).join(", ")+" — confirm in the review."});const x=l.filter(S=>S.boundingBox.width===0);x.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${x.map(S=>S.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${l.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),m>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${m} token disc(s) found but not identified — pick them in the review below.`}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(S=>S.id).join(", ")+" — confirm in the review."}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${f} from ${o.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const T=s.filter(S=>S.valueRead);return{...Ub(),wonders:l,guilds:kb(p,l),progressTokens:u,laurels:s,cardVictoryPoints:{value:T.reduce((S,E)=>S+(E.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-T.length,complete:s.length===T.length},cardCounts:{byFamily:a,source:g>0?"yolo":"none",tuckedExcluded:y,...c.length>0?{suspects:c}:{}},coins:{total:f,confidence:o.length>0?.5:0,source:o.length>0?"local-colour":"none",coins:o}}}const wt=1280,Fb=.3,es=9;let ts=null;function Gb(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${Pe}pawn_ends.onnx`,{method:"HEAD"})).ok?await at.create(`${Pe}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}function Wb(e){const t=wt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const o=new OffscreenCanvas(wt,wt).getContext("2d",{willReadFrequently:!0});o.fillStyle="rgb(114,114,114)",o.fillRect(0,0,wt,wt),o.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=o.getImageData(0,0,wt,wt),l=wt*wt,p=new Float32Array(3*l);for(let c=0;c<l;c+=1)p[c]=u[c*4]/255,p[l+c]=u[c*4+1]/255,p[2*l+c]=u[c*4+2]/255;return{tensor:p,r:t}}async function qb(e,t){const{tensor:n,r}=Wb(t),a=(await e.run({[e.inputNames[0]]:new Ge("float32",n,[1,3,wt,wt])}))[e.outputNames[0]].data,s=new Map;for(let o=0;o+5<a.length;o+=6){const u=a[o+4];if(u<Fb)continue;const l=Math.round(a[o+5]),p=s.get(l);if(p===void 0||u>p.conf){const c=(a[o]+a[o+2])/2/r,f=(a[o+1]+a[o+3])/2/r;s.set(l,{conf:u,cx:c,cy:f})}}return s}async function Vb(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Lt(t,g),b=await qb(e,y);if(b.has(0)&&b.has(1)&&b.has(2)){const $=b.get(0).conf+b.get(1).conf+b.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:b})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),s=a.cx-i.cx,o=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,p=s*s+o*o;if(p<=0)return null;const c=((r.cx-u)*s+(r.cy-l)*o)/p*(2*es),f=Math.min(es,Math.max(-es,Math.round(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:f,confidence:Math.round(m*1e4)/1e4}}async function Hb(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length;let a=0;const s=(l,p=0)=>{t(l,i>0?Math.min(.99,(a+p)/i):void 0)},o=()=>{a+=1};for(const l of["left","right"]){const p=e[l];p.length>0&&(r[l]=await Lb(p,l,n,s,o))}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await Ja(e.board),p=await Gb();if(p!==null){const c=await Vb(p,l);c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Pb(e.data.file):await Hb(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
