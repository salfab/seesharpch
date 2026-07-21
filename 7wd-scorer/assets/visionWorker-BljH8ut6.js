var W2=Object.defineProperty;var q2=(It,kt,dn)=>kt in It?W2(It,kt,{enumerable:!0,configurable:!0,writable:!0,value:dn}):It[kt]=dn;var hg=(It,kt,dn)=>q2(It,typeof kt!="symbol"?kt+"":kt,dn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var It=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,dn=Object.getOwnPropertyNames,gg=Object.prototype.hasOwnProperty,yg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Q=(e,t)=>()=>(e&&(t=e(e=0)),t),cn=(e,t)=>{for(var n in t)It(e,n,{get:t[n],enumerable:!0})},wg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of dn(t))!gg.call(e,i)&&i!==n&&It(e,i,{get:()=>t[i],enumerable:!(r=kt(t,i))||r.enumerable});return e},Sn=e=>wg(It({},"__esModule",{value:!0}),e),Tn,Ot,pn,$s,xs,vs=Q(()=>{Tn=new Map,Ot=[],pn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Tn.get(e);if(r===void 0)Tn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Ot.indexOf(e);i!==-1&&Ot.splice(i,1);for(let a=0;a<Ot.length;a++)if(Tn.get(Ot[a]).priority<=n){Ot.splice(a,0,e);return}Ot.push(e)}return}throw new TypeError("not a valid backend")},$s=async e=>{let t=Tn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},xs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Ot:n,i,a=[],s=new Set;for(let u of r){let l=await $s(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),_g=Q(()=>{vs()}),Ss,bg=Q(()=>{Ss="1.27.0"}),Nr,Ve,Ts=Q(()=>{bg(),Nr="warning",Ve={wasm:{},webgl:{},webgpu:{},versions:{common:Ss},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Nr=e}},get logLevel(){return Nr}},Object.defineProperty(Ve,"logLevel",{enumerable:!0})}),Ce,$g=Q(()=>{Ts(),Ce=Ve}),Is,ks,xg=Q(()=>{Is=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let p=a*i,c=0,f=p,m=p*2,g=-1;s==="RGBA"?(c=0,f=p,m=p*2,g=p*3):s==="RGB"?(c=0,f=p,m=p*2):s==="RBG"&&(c=0,m=p,f=p*2);for(let y=0;y<a;y++)for(let b=0;b<i;b++){let x=(e.data[c++]-l[0])*u[0],$=(e.data[f++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+x+","+$+","+T+","+S+")",r.fillRect(b,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ks=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,y=2,b=3,x=0,$=c,T=c*2,S=-1;o==="RGBA"?(x=0,$=c,T=c*2,S=c*3):o==="RGB"?(x=0,$=c,T=c*2):o==="RBG"&&(x=0,T=c,$=c*2),r=n.createImageData(i,a);for(let k=0;k<a*i;m+=f,g+=f,y+=f,b+=f,k++)r.data[m]=(e.data[x++]-p[0])*l[0],r.data[g]=(e.data[$++]-p[1])*l[1],r.data[y]=(e.data[T++]-p[2])*l[2],r.data[b]=S===-1?255:(e.data[S++]-p[3])*l[3]}else throw new Error("Can not access image data");return r}}),Kn,Es,Cs,Ms,As,Rs,vg=Q(()=>{Dr(),Kn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,p=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,f=0,m=1,g=2,y=3,b=0,x=l,$=l*2,T=-1;o==="RGB"&&(c=3,f=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(b=0,$=l,x=l*2):u==="BGR"&&($=0,x=l,b=l*2);for(let S=0;S<l;S++,f+=c,g+=c,m+=c,y+=c)p[b++]=(e[f]+s[0])/a[0],p[x++]=(e[m]+s[1])/a[1],p[$++]=(e[g]+s[2])/a[2],T!==-1&&y!==-1&&(p[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new nt("float32",p,[1,4,n,r]):new nt("float32",p,[1,3,n,r])},Es=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(n){let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let p,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,c=t.resizedWidth):(p=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=c,t!==void 0){let f=u();f.width=c,f.height=p;let m=l(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;return c.drawImage(e,0,0,m,f),s=c.getImageData(0,0,m,f).data,o.height=f,o.width=m,Kn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,c)=>{let f=u(),m=l(f);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let y=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(Kn(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Kn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Cs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new nt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},Ms=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new nt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},As=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new nt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Rs=(e,t,n)=>new nt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Ht,In,Br,zs,Sg=Q(()=>{Ht=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),In=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Br=!1,zs=()=>{if(!Br){Br=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Ht.set("int64",BigInt64Array),In.set(BigInt64Array,"int64")),t&&(Ht.set("uint64",BigUint64Array),In.set(BigUint64Array,"uint64")),r?(Ht.set("float16",n),In.set(n,"float16")):Ht.set("float16",Uint16Array)}}}),Os,Ns,Tg=Q(()=>{Dr(),Os=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ns=(e,t)=>{switch(e.location){case"cpu":return new nt(e.type,e.data,t);case"cpu-pinned":return new nt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new nt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new nt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new nt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),nt,Dr=Q(()=>{xg(),vg(),Sg(),Tg(),nt=class{constructor(e,t,n){zs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Ht.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Ht.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=In.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Os(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Es(e,t)}static fromTexture(e,t){return Cs(e,t)}static fromGpuBuffer(e,t){return Ms(e,t)}static fromMLTensor(e,t){return As(e,t)}static fromPinnedBuffer(e,t,n){return Rs(e,t,n)}toDataURL(e){return Is(this,e)}toImageData(e){return ks(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ns(this,e)}}}),Le,Bs=Q(()=>{Dr(),Le=nt}),Xn,Pr,_t,ut,jt,Kt,Ds=Q(()=>{Ts(),Xn=(e,t)=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.timeStamp(`${e}::ORT::${t}`)},Pr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Xn("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},_t=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||Pr("BEGIN",e)},ut=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||Pr("END",e)},jt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.time(`ORT::${e}`)},Kt=e=>{(typeof Ve.trace>"u"?!Ve.wasm.trace:!Ve.trace)||console.timeEnd(`ORT::${e}`)}}),Ps,Ig=Q(()=>{vs(),Bs(),Ds(),Ps=class fg{constructor(t){this.handler=t}async run(t,n,r){_t(),jt("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Le||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Le)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,p=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(p.indexOf(c)!==-1){let f=n[c];(f===null||f instanceof Le)&&(l=!0,s=!1,i[c]=f)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let p=o[l];p instanceof Le?u[l]=p:u[l]=new Le(p.type,p.data,p.dims)}return Kt("InferenceSession.run"),ut(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){_t(),jt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,c=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-c,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await xs(s),l=await o.createInferenceSessionHandler(a,u);return Kt("InferenceSession.create"),ut(),new fg(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),at,kg=Q(()=>{Ig(),at=Ps}),Eg=Q(()=>{}),Cg=Q(()=>{}),Mg=Q(()=>{}),Ag=Q(()=>{}),Rg={};cn(Rg,{InferenceSession:()=>at,TRACE:()=>Xn,TRACE_EVENT_BEGIN:()=>jt,TRACE_EVENT_END:()=>Kt,TRACE_FUNC_BEGIN:()=>_t,TRACE_FUNC_END:()=>ut,Tensor:()=>Le,env:()=>Ce,registerBackend:()=>pn});var st=Q(()=>{_g(),$g(),kg(),Bs(),Eg(),Cg(),Ds(),Mg(),Ag()}),Ur=Q(()=>{}),Us={};cn(Us,{default:()=>Ls});var Lr,Fr,Ls,zg=Q(()=>{var e;$h(),Xt(),jr(),Lr="ort-wasm-proxy-worker",Fr=((e=globalThis.self)==null?void 0:e.name)===Lr,Fr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Yr(r.wasm).then(()=>{oa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ua(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=fr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;da(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":ca(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;ha(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(p=>p[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ma([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":fa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ls=Fr?null:t=>new Worker(t??rt,{type:"module",name:Lr})}),Fs={};cn(Fs,{default:()=>Ws});async function Gs(e={}){var cg,pg;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((cg=self.name)==null?void 0:cg.startsWith("em-pthread"));t.mountExternalData=(d,h)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...h)=>{var _;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:h[0],errors:[]},I=await d(...h);if(t.Yc!==w)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let M=w.errors;if(0<M.length){let z=await Promise.all(M);if(z=z.filter(L=>L),0<z.length)throw Error(z.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(d,h)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let _=t.dd;t.jsepRegisterBuffer=(w,I,M,z)=>_.registerBuffer(w,I,M,z),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,M)=>_.createDownloader(w,I,M),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Id=(w,I)=>{_.upload(w,I)}}else if(d==="webnn"){let _=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,M,z)=>_.registerMLTensor(w,I,M,z),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterMLConstant=(w,I,M,z,L,J)=>_.registerMLConstant(w,I,M,z,L,t.Xc,J),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let d=h=>(..._)=>{let w=St;return _=h(..._),St!=w?new Promise((I,M)=>{us={resolve:I,reject:M}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=d(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(d,h)=>{throw h},p=self.location.href,c="";if(n||r){try{c=new URL(".",p).href}catch{}r&&(u=d=>{var h=new XMLHttpRequest;return h.open("GET",d,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async d=>{if(C(d))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(d,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,y,b,x,$=console.log.bind(console),T=console.error.bind(console),S=$,k=T,E=!1,C=d=>d.startsWith("file://");function v(){Fe.buffer!=O.buffer&&Z()}if(i){let d=function(h){try{var _=h.data,w=_.Sc;if(w==="load"){let I=[];self.onmessage=M=>I.push(M),x=()=>{postMessage({Sc:"loaded"});for(let M of I)d(M);self.onmessage=d};for(let M of _.xd)t[M]&&!t[M].proxy||(t[M]=(...z)=>{postMessage({Sc:"callHandler",wd:M,args:z})},M=="print"&&(S=t[M]),M=="printErr"&&(k=t[M]));Fe=_.Od,Z(),m=_.Pd,ce(),zr()}else if(w==="run"){(function(I){var M=(v(),B)[I+52>>>2>>>0];I=(v(),B)[I+56>>>2>>>0],$m(M,M-I),me(M)})(_.Rc),hs(_.Rc,0,0,1,0,0),Ne(),as(_.Rc),R||(mm(),R=!0);try{Pe(_.Md,_.bd)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?R&&Ir():w&&(k(`worker: received unknown command ${w}`),k(_)))}catch(I){throw gm(),I}};var R=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=d}var O,j,P,F,A,B,V,X,ne,N,ee,U=!1;function Z(){var d=Fe.buffer;t.HEAP8=O=new Int8Array(d),P=new Int16Array(d),t.HEAPU8=j=new Uint8Array(d),F=new Uint16Array(d),t.HEAP32=A=new Int32Array(d),t.HEAPU32=B=new Uint32Array(d),V=new Float32Array(d),X=new Float64Array(d),ne=new BigInt64Array(d),N=new BigUint64Array(d)}function K(){U=!0,i?x():zt.sb()}function W(d){throw k(d="Aborted("+d+")"),E=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),b==null||b(d),d}function ue(){return{a:{ma:i2,gb:r2,g:yt,J:Ja,f:Pb,o:Ub,h:Lb,ha:Fb,b:Gb,T:Wb,Ha:Ef,n:qb,$:Rf,Xa:zf,Da:Of,Fa:Nf,Ya:Bf,Va:Df,Oa:Pf,Ua:Uf,ka:Lf,Ea:Ff,Ba:Gf,Wa:Wf,Ca:qf,bb:Vb,ea:Hb,wa:jb,ua:Xb,da:Zb,O:Qb,H:Jb,va:e1,_:o1,xa:u1,Ra:l1,za:c1,Ia:p1,sa:h1,fa:f1,Qa:as,_a:m1,R:_1,r:S1,c:rs,hb:T1,y:I1,M:k1,D:E1,l:C1,s:Qf,ib:M1,I:A1,S:R1,j:z1,u:O1,q:N1,k:B1,La:D1,Ma:P1,Na:U1,Ja:nm,Ka:rm,ta:im,db:F1,ab:W1,v:q1,aa:V1,ga:H1,$a:G1,W:j1,Za:K1,Aa:X1,F:L1,U:Y1,la:Ar,ya:Q1,fb:Z1,eb:J1,Sa:um,Ta:lm,Ga:Ie,V:dm,ja:cm,Pa:pm,ia:hm,kb:L2,na:N2,lb:U2,oa:O2,G:T2,e:u2,t:s2,w:a2,B:w2,mb:A2,K:x2,x:c2,pa:R2,Y:B2,ba:M2,nb:C2,ob:E2,P:_2,qa:k2,pb:I2,N:v2,Z:z2,d:o2,A:d2,m:l2,jb:F2,p:h2,z:f2,C:p2,E:m2,L:b2,qb:S2,Q:D2,ca:$2,X:P2,rb:y2,ra:g2,i:t2,a:Fe,cb:se}}}async function ce(){function d(w,I){var M=zt=w.exports;w={};for(let[z,L]of Object.entries(M))typeof L=="function"?(M=g1(L),w[z]=M):w[z]=L;return zt=w,zt=(function(){var z=zt,L=te=>fe=>te(fe)>>>0,J=te=>()=>te()>>>0;return(z=Object.assign({},z)).tb=L(z.tb),z.Xb=J(z.Xb),z.Zb=L(z.Zb),z.lc=L(z.lc),z.mc=J(z.mc),z.qc=L(z.qc),z})(),je.push(zt._b),fm=(w=zt).tb,mm=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,Rr=w.Xb,Tt=t._free=w.Yb,Vn=t._malloc=w.Zb,hs=w.ac,gm=w.bc,ym=w.cc,wm=w.dc,fs=w.ec,_m=w.fc,bm=w.gc,ye=w.hc,Hn=w.ic,$m=w.jc,me=w.kc,ms=w.lc,ge=w.mc,xm=w.nc,gs=w.oc,vm=w.pc,Sm=w.qc,Tm=w.rc,ys=w.sc,Im=w.tc,km=w.uc,Em=w.vc,Cm=w.wc,Mm=w.xc,Am=w.yc,Rm=w.zc,zm=w.Ac,Om=w.Bc,Nm=w.Cc,Bm=w.Dc,Dm=w.Ec,Pm=w.Fc,Um=w.Gc,Lm=w.Hc,Fm=w.Ic,Gm=w.Jc,Wm=w.Kc,qm=w.Lc,Vm=w.Mc,Hm=w.Nc,jm=w.Pc,Km=w.Qc,Xm=w.$c,Ym=w.ad,Zm=w.fd,Qm=w.jd,Jm=w.kd,eg=w.ld,tg=w.md,ng=w.nd,rg=w.od,ig=w.pd,ag=w.qd,sg=w.vd,og=w.Td,ug=w.Ud,lg=w.Vd,dg=w.Wd,m=I,zt}var h,_=ue();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,M)=>{w(d(I,M))})}):i?d(new WebAssembly.Instance(m,ue()),m):(ee??(ee=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(w){var I=ee;if(!f&&!C(I))try{var M=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(M,w)}catch(z){k(`wasm streaming compile failed: ${z}`),k("falling back to ArrayBuffer instantiation")}return(async function(z,L){try{var J=await(async function(te){if(!f)try{var fe=await o(te);return new Uint8Array(fe)}catch{}if(te==ee&&f)te=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";te=u(te)}return te})(z);return await WebAssembly.instantiate(J,L)}catch(te){k(`failed to asynchronously prepare wasm: ${te}`),W(te)}})(I,w)})(_),d(h.instance,h.module))}class ie{constructor(h){hg(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var _e=d=>{d.terminate(),d.onmessage=()=>{}},Re=[],ze=0,Oe=null,H=d=>{ke.length==0&&(Xe(),Ze(ke[0]));var h=ke.pop();if(!h)return 6;Te.push(h),ve[d.Rc]=h,h.Rc=d.Rc;var _={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return h.postMessage(_,d.rd),0},Y=0,q=(d,h,..._)=>{var w,I=16*_.length,M=ge(),z=ms(I),L=z>>>3;for(w of _)typeof w=="bigint"?((v(),ne)[L++>>>0]=1n,(v(),ne)[L++>>>0]=w):((v(),ne)[L++>>>0]=0n,(v(),X)[L++>>>0]=w);return d=ym(d,0,I,z,h),me(M),d};function se(d){if(i)return q(0,1,d);if(g=d,!(0<Y)){for(var h of Te)_e(h);for(h of ke)_e(h);ke=[],Te=[],ve={},E=!0}l(0,new ie(d))}function de(d){if(i)return q(1,0,d);Ie(d)}var Ie=d=>{if(g=d,i)throw de(d),"unwind";se(d)},ke=[],Te=[],je=[],ve={},Ke=d=>{var h=d.Rc;delete ve[h],ke.push(d),Te.splice(Te.indexOf(d),1),d.Rc=0,wm(h)};function Ne(){je.forEach(d=>d())}var Ze=d=>new Promise(h=>{d.onmessage=I=>{var M=I.data;if(I=M.Sc,M.Zc&&M.Zc!=Rr()){var z=ve[M.Zc];z?z.postMessage(M,M.rd):k(`Internal error! Worker sent a message "${I}" to target pthread ${M.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?Ir():I==="spawnThread"?H(M):I==="cleanupThread"?Tr(()=>{Ke(ve[M.Nd])}):I==="loaded"?(d.loaded=!0,h(d)):M.target==="setimmediate"?d.postMessage(M):I==="uncaughtException"?d.onerror(M.error):I==="callHandler"?t[M.wd](...M.args):I&&k(`worker sent an unknown command ${I}`)},d.onerror=I=>{throw k(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);d.postMessage({Sc:"load",xd:w,Od:Fe,Pd:m})});function Xe(){var d=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ke.push(d)}var Fe,Pe=(d,h)=>{Y=0,d=ys(d,h),0<Y?g=d:fs(d)},Je=[],qe=0;function yt(d){var h=new xn(d>>>=0);return(v(),O)[h.Tc+12>>>0]==0&&(xr(h,!0),qe--),vr(h,!1),Je.push(h),Sm(d)}var Gt=0,Ja=()=>{ye(0,0);var d=Je.pop();xm(d.cd),Gt=0};function xr(d,h){h=h?1:0,(v(),O)[d.Tc+12>>>0]=h}function vr(d,h){h=h?1:0,(v(),O)[d.Tc+13>>>0]=h}class xn{constructor(h){this.cd=h,this.Tc=h-24}}var es=d=>{var h=Gt;if(!h)return Hn(0),0;var _=new xn(h);(v(),B)[_.Tc+16>>>2>>>0]=h;var w=(v(),B)[_.Tc+4>>>2>>>0];if(!w)return Hn(0),h;for(var I of d){if(I===0||I===w)break;if(vm(I,w,_.Tc+16))return Hn(I),h}return Hn(w),h};function Pb(){return es([])}function Ub(d){return es([d>>>0])}function Lb(d,h,_,w){return es([d>>>0,h>>>0,_>>>0,w>>>0])}var Fb=()=>{var d=Je.pop();d||W("no exception to throw");var h=d.cd;throw(v(),O)[d.Tc+13>>>0]==0&&(Je.push(d),vr(d,!0),xr(d,!1),qe++),gs(h),Gt=h};function Gb(d,h,_){var w=new xn(d>>>=0);throw h>>>=0,_>>>=0,(v(),B)[w.Tc+16>>>2>>>0]=0,(v(),B)[w.Tc+4>>>2>>>0]=h,(v(),B)[w.Tc+8>>>2>>>0]=_,gs(d),qe++,Gt=d}var Wb=()=>qe;function kf(d,h,_,w){return i?q(2,1,d,h,_,w):Ef(d,h,_,w)}function Ef(d,h,_,w){if(d>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?kf(d,h,_,w):(d={Ld:_,Rc:d,bd:w,rd:I},i?(d.Sc="spawnThread",postMessage(d,I),0):H(d))}function qb(d){throw Gt||(Gt=d>>>0),Gt}var Cf=globalThis.TextDecoder&&new TextDecoder,Mf=(d,h,_,w)=>{if(_=h+_,w)return _;for(;d[h]&&!(h>=_);)++h;return h},Af=(d,h=0,_,w)=>{if(16<(_=Mf(d,h>>>=0,_,w))-h&&d.buffer&&Cf)return Cf.decode(d.buffer instanceof ArrayBuffer?d.subarray(h,_):d.slice(h,_));for(w="";h<_;){var I=d[h++];if(128&I){var M=63&d[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|M);else{var z=63&d[h++];65536>(I=(240&I)==224?(15&I)<<12|M<<6|z:(7&I)<<18|M<<12|z<<6|63&d[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},Ge=(d,h,_)=>(d>>>=0)?Af((v(),j),d,h,_):"";function Rf(d,h,_){return i?q(3,1,d,h,_):0}function zf(d,h){if(i)return q(4,1,d,h)}function Of(d,h){if(i)return q(5,1,d,h)}function Nf(d,h,_){if(i)return q(6,1,d,h,_)}function Bf(d,h,_){return i?q(7,1,d,h,_):0}function Df(d,h){if(i)return q(8,1,d,h)}function Pf(d,h,_){if(i)return q(9,1,d,h,_)}function Uf(d,h,_,w){if(i)return q(10,1,d,h,_,w)}function Lf(d,h,_,w){if(i)return q(11,1,d,h,_,w)}function Ff(d,h,_,w){if(i)return q(12,1,d,h,_,w)}function Gf(d){if(i)return q(13,1,d)}function Wf(d,h){if(i)return q(14,1,d,h)}function qf(d,h,_){if(i)return q(15,1,d,h,_)}var Vb=()=>W(""),vt=d=>{d>>>=0;for(var h="";;){var _=(v(),j)[d++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},ts={},ns={},vn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Rt(d,h,_={}){return(function(w,I,M={}){var z=I.name;if(!w)throw new vn(`type "${z}" must have a positive integer typeid pointer`);if(ns.hasOwnProperty(w)){if(M.yd)return;throw new vn(`Cannot register type '${z}' twice`)}ns[w]=I,ts.hasOwnProperty(w)&&(I=ts[w],delete ts[w],I.forEach(L=>L()))})(d,h,_)}var Vf=(d,h,_)=>{switch(h){case 1:return _?w=>(v(),O)[w>>>0]:w=>(v(),j)[w>>>0];case 2:return _?w=>(v(),P)[w>>>1>>>0]:w=>(v(),F)[w>>>1>>>0];case 4:return _?w=>(v(),A)[w>>>2>>>0]:w=>(v(),B)[w>>>2>>>0];case 8:return _?w=>(v(),ne)[w>>>3>>>0]:w=>(v(),N)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${d}`)}};function Hb(d,h,_,w,I){d>>>=0,_>>>=0,h=vt(h>>>0);let M=z=>z;if(w=w===0n){let z=8*_;M=L=>BigInt.asUintN(z,L),I=M(I)}Rt(d,{name:h,Oc:M,Vc:(z,L)=>(typeof L=="number"&&(L=BigInt(L)),L),Uc:Vf(h,_,!w),Wc:null})}function jb(d,h,_,w){Rt(d>>>=0,{name:h=vt(h>>>0),Oc:function(I){return!!I},Vc:function(I,M){return M?_:w},Uc:function(I){return this.Oc((v(),j)[I>>>0])},Wc:null})}var Hf=[],un=[0,1,,1,null,1,!0,1,!1,1];function rs(d){9<(d>>>=0)&&--un[d+1]===0&&(un[d]=void 0,Hf.push(d))}var ot=d=>{if(!d)throw new vn(`Cannot use deleted val. handle = ${d}`);return un[d]},wt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Hf.pop()||un.length;return un[h]=d,un[h+1]=1,h}};function is(d){return this.Oc((v(),B)[d>>>2>>>0])}var Kb={name:"emscripten::val",Oc:d=>{var h=ot(d);return rs(d),h},Vc:(d,h)=>wt(h),Uc:is,Wc:null};function Xb(d){return Rt(d>>>0,Kb)}var Yb=(d,h)=>{switch(h){case 4:return function(_){return this.Oc((v(),V)[_>>>2>>>0])};case 8:return function(_){return this.Oc((v(),X)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${d}`)}};function Zb(d,h,_){_>>>=0,Rt(d>>>=0,{name:h=vt(h>>>0),Oc:w=>w,Vc:(w,I)=>I,Uc:Yb(h,_),Wc:null})}function Qb(d,h,_,w,I){d>>>=0,_>>>=0,h=vt(h>>>0);let M=L=>L;if(w===0){var z=32-8*_;M=L=>L<<z>>>z,I=M(I)}Rt(d,{name:h,Oc:M,Vc:(L,J)=>J,Uc:Vf(h,_,w!==0),Wc:null})}function Jb(d,h,_){function w(M){var z=(v(),B)[M>>>2>>>0];return M=(v(),B)[M+4>>>2>>>0],new I((v(),O).buffer,M,z)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Rt(d>>>=0,{name:_=vt(_>>>0),Oc:w,Uc:w},{yd:!0})}var Wt=(d,h,_)=>{var w=(v(),j);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var M=0;M<d.length;++M){var z=d.codePointAt(M);if(127>=z){if(h>=_)break;w[h++>>>0]=z}else if(2047>=z){if(h+1>=_)break;w[h++>>>0]=192|z>>6,w[h++>>>0]=128|63&z}else if(65535>=z){if(h+2>=_)break;w[h++>>>0]=224|z>>12,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z}else{if(h+3>=_)break;w[h++>>>0]=240|z>>18,w[h++>>>0]=128|z>>12&63,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z,M++}}w[h>>>0]=0,d=h-I}else d=0;return d},Sr=d=>{for(var h=0,_=0;_<d.length;++_){var w=d.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function e1(d,h){Rt(d>>>=0,{name:h=vt(h>>>0),Oc(_){var w=(v(),B)[_>>>2>>>0];return w=Ge(_+4,w,!0),Tt(_),w},Vc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new vn("Cannot pass non-string to std::string");var M=I?Sr(w):w.length,z=Vn(4+M+1),L=z+4;return(v(),B)[z>>>2>>>0]=M,I?Wt(w,L,M+1):(v(),j).set(w,L>>>0),_!==null&&_.push(Tt,z),z},Uc:is,Wc(_){Tt(_)}})}var jf=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,t1=(d,h,_)=>{if(d>>>=1,16<(h=Mf((v(),F),d,h/2,_))-d&&jf)return jf.decode((v(),F).slice(d,h));for(_="";d<h;++d){var w=(v(),F)[d>>>0];_+=String.fromCharCode(w)}return _},n1=(d,h,_)=>{if(_??(_=2147483647),2>_)return 0;var w=h;_=(_-=2)<2*d.length?_/2:d.length;for(var I=0;I<_;++I){var M=d.charCodeAt(I);(v(),P)[h>>>1>>>0]=M,h+=2}return(v(),P)[h>>>1>>>0]=0,h-w},r1=d=>2*d.length,i1=(d,h,_)=>{var w="";d>>>=2;for(var I=0;!(I>=h/4);I++){var M=(v(),B)[d+I>>>0];if(!M&&!_)break;w+=String.fromCodePoint(M)}return w},a1=(d,h,_)=>{if(h>>>=0,_??(_=2147483647),4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<d.length;++I){var M=d.codePointAt(I);if(65535<M&&I++,(v(),A)[h>>>2>>>0]=M,(h+=4)+4>_)break}return(v(),A)[h>>>2>>>0]=0,h-w},s1=d=>{for(var h=0,_=0;_<d.length;++_)65535<d.codePointAt(_)&&_++,h+=4;return h};function o1(d,h,_){if(d>>>=0,h>>>=0,_=vt(_>>>=0),h===2)var w=t1,I=n1,M=r1;else w=i1,I=a1,M=s1;Rt(d,{name:_,Oc:z=>{var L=(v(),B)[z>>>2>>>0];return L=w(z+4,L*h,!0),Tt(z),L},Vc:(z,L)=>{if(typeof L!="string")throw new vn(`Cannot pass non-string to C++ string type ${_}`);var J=M(L),te=Vn(4+J+h);return(v(),B)[te>>>2>>>0]=J/h,I(L,te+4,J+h),z!==null&&z.push(Tt,te),te},Uc:is,Wc(z){Tt(z)}})}function u1(d,h){Rt(d>>>=0,{zd:!0,name:h=vt(h>>>0),Oc:()=>{},Vc:()=>{}})}function l1(d){hs(d>>>0,!r,1,!n,131072,!1),Ne()}var Tr=d=>{if(!E)try{if(d(),!(0<Y))try{i?Rr()&&fs(g):Ie(g)}catch(h){h instanceof ie||h=="unwind"||l(0,h)}}catch(h){h instanceof ie||h=="unwind"||l(0,h)}},d1=!Atomics.waitAsync||((pg=globalThis.navigator)==null?void 0:pg.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function as(d){d>>>=0,d1||(Atomics.waitAsync((v(),A),d>>>2,d).value.then(Ir),d+=128,Atomics.store((v(),A),d>>>2,1))}var Ir=()=>Tr(()=>{var d=Rr();d&&(as(d),bm())});function c1(d,h){(d>>>=0)==h>>>0?setTimeout(Ir):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=ve[d])&&d.postMessage({Sc:"checkMailbox"})}var ss=[];function p1(d,h,_,w,I){for(h>>>=0,I>>>=0,ss.length=0,_=I>>>3,w=I+w>>>3;_<w;){var M;M=(v(),ne)[_++>>>0]?(v(),ne)[_++>>>0]:(v(),X)[_++>>>0],ss.push(M)}return(h?ws[h]:n2[d])(...ss)}var h1=()=>{Y=0};function f1(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):Ke(ve[d])}function m1(d){}var kr=d=>{try{d()}catch(h){W(h)}};function g1(d){var h=(..._)=>{Er.push(d);try{return d(..._)}finally{E||(Er.pop(),St&&qt===1&&Er.length===0&&(qt=0,Y+=1,kr(ug),typeof Fibers<"u"&&Fibers.Zd()))}};return Yf.set(d,h),h}var qt=0,St=null,Kf=0,Er=[],os=new Map,Xf=new Map,Yf=new Map,y1=0,us=null,w1=[],Zf=d=>(function(h){if(!E){if(qt===0){var _=!1,w=!1;h((I=0)=>{if(!E&&(Kf=I,_=!0,w)){qt=2,kr(()=>lg(St)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var M=(function(){var J=(v(),A)[St+8>>>2>>>0];return J=Xf.get(J),J=Yf.get(J),--Y,J()})()}catch(J){M=J,I=!0}var z=!1;if(!St){var L=us;L&&(us=null,(I?L.reject:L.resolve)(M),z=!0)}if(I&&!z)throw M}}),w=!0,_||(qt=1,St=(function(){var I=Vn(65548),M=I+12;if((v(),B)[I>>>2>>>0]=M,(v(),B)[I+4>>>2>>>0]=M+65536,M=Er[0],!os.has(M)){var z=y1++;os.set(M,z),Xf.set(z,M)}return M=os.get(M),(v(),A)[I+8>>>2>>>0]=M,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),kr(()=>og(St)))}else qt===2?(qt=0,kr(dg),Tt(St),St=null,w1.forEach(Tr)):W(`invalid state: ${qt}`);return Kf}})(h=>{d().then(h)});function _1(d){return d>>>=0,Zf(async()=>{var h=await ot(d);return wt(h)})}var ls=[],b1=d=>{var h=ls.length;return ls.push(d),h},$1=(d,h)=>{for(var _=Array(d),w=0;w<d;++w){var I=w,M=(v(),B)[h+4*w>>>2>>>0],z=ns[M];if(z===void 0)throw d=`parameter ${w}`,M=fm(M),h=vt(M),Tt(M),new vn(`${d} has unknown type ${h}`);_[I]=z}return _},x1=(d,h,_)=>{var w=[];return d=d(w,_),w.length&&((v(),B)[h>>>2>>>0]=wt(w)),d},v1={},Cr=d=>{var h=v1[d];return h===void 0?vt(d):h};function S1(d,h,_){var[w,...I]=$1(d,h>>>0);h=w.Vc.bind(w);var M=I.map(J=>J.Uc.bind(J));d--;var z={toValue:ot};switch(d=M.map((J,te)=>{var fe=`argFromPtr${te}`;return z[fe]=J,`${fe}(args${te?"+"+8*te:""})`}),_){case 0:var L="toValue(handle)";break;case 2:L="new (toValue(handle))";break;case 3:L="";break;case 1:z.getStringOrSymbol=Cr,L="toValue(handle)[getStringOrSymbol(methodName)]"}return L+=`(${d})`,w.zd||(z.toReturnWire=h,z.emval_returnValue=x1,L=`return emval_returnValue(toReturnWire, destructorsRef, ${L})`),L=`return function (handle, methodName, destructorsRef, args) {
  ${L}
  }`,_=new Function(Object.keys(z),L)(...Object.values(z)),L=`methodCaller<(${I.map(J=>J.name)}) => ${w.name}>`,b1(Object.defineProperty(_,"name",{value:L}))}function T1(d,h){return h>>>=0,(d=ot(d>>>0))==ot(h)}function I1(d){return(d>>>=0)?(d=Cr(d),wt(globalThis[d])):wt(globalThis)}function k1(d){return d=Cr(d>>>0),wt(t[d])}function E1(d,h){return h>>>=0,d=ot(d>>>0),h=ot(h),wt(d[h])}function C1(d){9<(d>>>=0)&&(un[d+1]+=1)}function Qf(d,h,_,w,I){return ls[d>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function M1(d,h,_,w,I){return Qf(d>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function A1(){return wt([])}function R1(d){d=ot(d>>>0);for(var h=Array(d.length),_=0;_<d.length;_++)h[_]=d[_];return wt(h)}function z1(d){return wt(Cr(d>>>0))}function O1(){return wt({})}function N1(d){for(var h=ot(d>>>=0);h.length;){var _=h.pop();h.pop()(_)}rs(d)}function B1(d,h,_){h>>>=0,_>>>=0,d=ot(d>>>0),h=ot(h),_=ot(_),d[h]=_}function D1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=d.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=d.getUTCHours(),(v(),A)[h+12>>>2>>>0]=d.getUTCDate(),(v(),A)[h+16>>>2>>>0]=d.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=d}var Jf=d=>d%4==0&&(d%100!=0||d%400==0),em=[0,31,60,91,121,152,182,213,244,274,305,335],tm=[0,31,59,90,120,151,181,212,243,273,304,334];function P1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getSeconds(),(v(),A)[h+4>>>2>>>0]=d.getMinutes(),(v(),A)[h+8>>>2>>>0]=d.getHours(),(v(),A)[h+12>>>2>>>0]=d.getDate(),(v(),A)[h+16>>>2>>>0]=d.getMonth(),(v(),A)[h+20>>>2>>>0]=d.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getDay();var _=(Jf(d.getFullYear())?em:tm)[d.getMonth()]+d.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=_,(v(),A)[h+36>>>2>>>0]=-60*d.getTimezoneOffset(),_=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(_!=w&&d.getTimezoneOffset()==Math.min(w,_)),(v(),A)[h+32>>>2>>>0]=d}function U1(d){d>>>=0;var h=new Date((v(),A)[d+20>>>2>>>0]+1900,(v(),A)[d+16>>>2>>>0],(v(),A)[d+12>>>2>>>0],(v(),A)[d+8>>>2>>>0],(v(),A)[d+4>>>2>>>0],(v(),A)[d>>>2>>>0],0),_=(v(),A)[d+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),M=new Date(h.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(M,I);return 0>_?(v(),A)[d+32>>>2>>>0]=+(I!=M&&z==w):0<_!=(z==w)&&(I=Math.max(M,I),h.setTime(h.getTime()+6e4*((0<_?z:I)-w))),(v(),A)[d+24>>>2>>>0]=h.getDay(),_=(Jf(h.getFullYear())?em:tm)[h.getMonth()]+h.getDate()-1|0,(v(),A)[d+28>>>2>>>0]=_,(v(),A)[d>>>2>>>0]=h.getSeconds(),(v(),A)[d+4>>>2>>>0]=h.getMinutes(),(v(),A)[d+8>>>2>>>0]=h.getHours(),(v(),A)[d+12>>>2>>>0]=h.getDate(),(v(),A)[d+16>>>2>>>0]=h.getMonth(),(v(),A)[d+20>>>2>>>0]=h.getYear(),d=h.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function nm(d,h,_,w,I,M,z){return i?q(16,1,d,h,_,w,I,M,z):-52}function rm(d,h,_,w,I,M){if(i)return q(17,1,d,h,_,w,I,M)}var qn={},L1=()=>performance.timeOrigin+performance.now();function im(d,h){if(i)return q(18,1,d,h);if(qn[d]&&(clearTimeout(qn[d].id),delete qn[d]),!h)return 0;var _=setTimeout(()=>{delete qn[d],Tr(()=>_m(d,performance.timeOrigin+performance.now()))},h);return qn[d]={id:_,Yd:h},0}function F1(d,h,_,w){d>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),M=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var z=Math.max(M,I);(v(),B)[d>>>2>>>0]=60*z,(v(),A)[h>>>2>>>0]=+(M!=I),d=(h=L=>{var J=Math.abs(L);return`UTC${0<=L?"-":"+"}${String(Math.floor(J/60)).padStart(2,"0")}${String(J%60).padStart(2,"0")}`})(M),h=h(I),I<M?(Wt(d,_,17),Wt(h,w,17)):(Wt(d,w,17),Wt(h,_,17))}var G1=()=>Date.now();function W1(d,h,_){return _>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),ne)[_>>>3>>>0]=BigInt(d),0):28}var ds=[],am=(d,h)=>{ds.length=0;for(var _;_=(v(),j)[d++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,ds.push(_==112?(v(),B)[h>>>2>>>0]:_==106?(v(),ne)[h>>>3>>>0]:_==105?(v(),A)[h>>>2>>>0]:(v(),X)[h>>>3>>>0]),h+=w?8:4}return ds};function q1(d,h,_){return d>>>=0,h=am(h>>>0,_>>>0),ws[d](...h)}function V1(d,h,_){return d>>>=0,h=am(h>>>0,_>>>0),ws[d](...h)}var H1=()=>{};function j1(d,h){return k(Ge(d>>>0,h>>>0))}var K1=()=>{throw Y+=1,"unwind"};function X1(){return 4294901760}var Y1=()=>navigator.hardwareConcurrency,ln={},Mr=d=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+h[1]:0},sm=d=>{for(var h of d)(d=Mr(h))&&(ln[d]=h)};function Z1(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),sm(d),ln.gd=Mr(d[3]),ln.Jd=d,ln.gd}function Ar(d){if(!(d=ln[d>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(d))d=h[1];else{if(!(h=/^(.+?)@/.exec(d)))return 0;d=h[1]}Tt(Ar.hd??0),h=Sr(d)+1;var _=Vn(h);return _&&Wt(d,_,h),Ar.hd=_,Ar.hd}function Q1(d){d>>>=0;var h=(v(),j).length;if(d<=h||4294901760<d)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-Fe.buffer.byteLength+65535)/65536|0;try{Fe.grow(w),Z();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function J1(d,h,_){if(d>>>=0,h>>>=0,ln.gd==d)var w=ln.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),sm(w);for(var I=3;w[I]&&Mr(w[I])!=d;)++I;for(d=0;d<_&&w[d+I];++d)(v(),A)[h+4*d>>>2>>>0]=Mr(w[d+I]);return d}var cs,ps={},om=()=>{var w;if(!cs){var d,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ps)ps[d]===void 0?delete h[d]:h[d]=ps[d];var _=[];for(d in h)_.push(`${d}=${h[d]}`);cs=_}return cs};function um(d,h){if(i)return q(19,1,d,h);d>>>=0,h>>>=0;var _,w=0,I=0;for(_ of om()){var M=h+w;(v(),B)[d+I>>>2>>>0]=M,w+=Wt(_,M,1/0)+1,I+=4}return 0}function lm(d,h){if(i)return q(20,1,d,h);d>>>=0,h>>>=0;var _=om();for(var w of((v(),B)[d>>>2>>>0]=_.length,d=0,_))d+=Sr(w)+1;return(v(),B)[h>>>2>>>0]=d,0}function dm(d){return i?q(21,1,d):52}function cm(d,h,_,w){return i?q(22,1,d,h,_,w):52}function pm(d,h,_,w){return i?q(23,1,d,h,_,w):70}var e2=[null,[],[]];function hm(d,h,_,w){if(i)return q(24,1,d,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,M=0;M<_;M++){var z=(v(),B)[h>>>2>>>0],L=(v(),B)[h+4>>>2>>>0];h+=8;for(var J=0;J<L;J++){var te=d,fe=(v(),j)[z+J>>>0],be=e2[te];fe===0||fe===10?((te===1?S:k)(Af(be)),be.length=0):be.push(fe)}I+=L}return(v(),B)[w>>>2>>>0]=I,0}function t2(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Xe();Re.push(async()=>{var h=(async function(){if(!i)return Promise.all(ke.map(Ze))})();ze++,await h,--ze==0&&Oe&&(h=Oe,Oe=null,h())})})(),i||(Fe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Z()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>ge(),t.stackRestore=d=>me(d),t.stackAlloc=d=>ms(d),t.setValue=function(d,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(v(),O)[d>>>0]=h;break;case"i16":(v(),P)[d>>>1>>>0]=h;break;case"i32":(v(),A)[d>>>2>>>0]=h;break;case"i64":(v(),ne)[d>>>3>>>0]=BigInt(h);break;case"float":(v(),V)[d>>>2>>>0]=h;break;case"double":(v(),X)[d>>>3>>>0]=h;break;case"*":(v(),B)[d>>>2>>>0]=h;break;default:W(`invalid type for setValue: ${_}`)}},t.getValue=function(d,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),O)[d>>>0];case"i16":return(v(),P)[d>>>1>>>0];case"i32":return(v(),A)[d>>>2>>>0];case"i64":return(v(),ne)[d>>>3>>>0];case"float":return(v(),V)[d>>>2>>>0];case"double":return(v(),X)[d>>>3>>>0];case"*":return(v(),B)[d>>>2>>>0];default:W(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Ge,t.stringToUTF8=Wt,t.lengthBytesUTF8=Sr;var fm,mm,Rr,Tt,Vn,hs,gm,ym,wm,fs,_m,bm,ye,Hn,$m,me,ms,ge,xm,gs,vm,Sm,Tm,ys,Im,km,Em,Cm,Mm,Am,Rm,zm,Om,Nm,Bm,Dm,Pm,Um,Lm,Fm,Gm,Wm,qm,Vm,Hm,jm,Km,Xm,Ym,Zm,Qm,Jm,eg,tg,ng,rg,ig,ag,sg,og,ug,lg,dg,zt,n2=[se,de,kf,Rf,zf,Of,Nf,Bf,Df,Pf,Uf,Lf,Ff,Gf,Wf,qf,nm,rm,im,um,lm,dm,cm,pm,hm],ws={1003524:(d,h,_,w,I)=>{if(t===void 0||!t.Xc)return 1;if((d=Ge(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>d.byteLength)return 3;try{let M=d.subarray(h,h+_);switch(I){case 0:(v(),j).set(M,w>>>0);break;case 1:t.Qd?t.Qd(w,M):t.Id(w,M);break;default:return 4}return 0}catch{return 4}},1004348:(d,h,_)=>{t.td(d,(v(),j).subarray(h>>>0,h+_>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_),!0)},1004704:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,h,_)=>{t.$b("HardSigmoid",d,{alpha:h,beta:_})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,h,_)=>{t.$b("Clip",d,{min:h,max:_})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,h)=>{t.$b("Elu",d,{alpha:h})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,h)=>{t.$b("LeakyRelu",d,{alpha:h})},1006444:(d,h)=>{t.$b("ThresholdedRelu",d,{alpha:h})},1006514:(d,h)=>{t.$b("Cast",d,{to:h})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,h,_,w,I)=>{t.$b("ReduceMean",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007283:(d,h,_,w,I)=>{t.$b("ReduceMax",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007457:(d,h,_,w,I)=>{t.$b("ReduceMin",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007631:(d,h,_,w,I)=>{t.$b("ReduceProd",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007806:(d,h,_,w,I)=>{t.$b("ReduceSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007980:(d,h,_,w,I)=>{t.$b("ReduceL1",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008153:(d,h,_,w,I)=>{t.$b("ReduceL2",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008326:(d,h,_,w,I)=>{t.$b("ReduceLogSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008503:(d,h,_,w,I)=>{t.$b("ReduceSumSquare",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008683:(d,h,_,w,I)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,h,_)=>{t.$b("Transpose",d,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1009040:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:Ge(_),format:w?"NHWC":"NCHW"})},1009173:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:Ge(_),format:w?"NHWC":"NCHW"})},1009306:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae,Vt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[L],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:fe?Array.from((v(),A).subarray(Number(fe)>>>0,Number(be)>>>0)):[],outputShape:Ee?Array.from((v(),A).subarray(Number(Ee)>>>0,Number(Ae)>>>0)):[],activation:Ge(Vt)})},1009739:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("ConvTranspose",d,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[],activation:Ge(Ae)})},1010400:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae,Vt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[L],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:fe?Array.from((v(),A).subarray(Number(fe)>>>0,Number(be)>>>0)):[],outputShape:Ee?Array.from((v(),A).subarray(Number(Ee)>>>0,Number(Ae)>>>0)):[],activation:Ge(Vt)})},1010833:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("ConvTranspose",d,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[],activation:Ge(Ae)})},1011494:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1011585:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("AveragePool",d,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[]})},1012064:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1012155:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("AveragePool",d,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[]})},1012634:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1012721:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("MaxPool",d,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[]})},1013196:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1013283:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae)=>{t.$b("MaxPool",d,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Ee)>>>0)):[]})},1013758:(d,h,_,w,I)=>{t.$b("Gemm",d,{alpha:h,beta:_,transA:w,transB:I})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,h,_,w)=>{t.$b("ArgMax",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014024:(d,h,_,w)=>{t.$b("ArgMin",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014132:(d,h)=>{t.$b("Softmax",d,{axis:h})},1014195:(d,h)=>{t.$b("Concat",d,{axis:h})},1014255:(d,h,_,w,I)=>{t.$b("Split",d,{axis:h,numOutputs:_,splitSizes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,h)=>{t.$b("Gather",d,{axis:Number(h)})},1014536:(d,h)=>{t.$b("GatherElements",d,{axis:Number(h)})},1014615:(d,h)=>{t.$b("GatherND",d,{batch_dims:Number(h)})},1014694:(d,h,_,w,I,M,z,L,J,te,fe)=>{t.$b("Resize",d,{antialias:h,axes:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Ge(I),cubicCoeffA:M,excludeOutside:z,extrapolationValue:L,keepAspectRatioPolicy:Ge(J),mode:Ge(te),nearestMode:Ge(fe)})},1015056:(d,h,_,w,I,M,z)=>{t.$b("Slice",d,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015486:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,h)=>{t.$b("Einsum",d,{equation:Ge(h)})},1015734:(d,h,_,w,I)=>{t.$b("Pad",d,{mode:h,value:_,pads:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1015877:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016046:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016215:(d,h,_)=>{t.$b("CumSum",d,{exclusive:Number(h),reverse:Number(_)})},1016312:(d,h,_)=>{t.$b("DequantizeLinear",d,{axis:h,blockSize:_})},1016402:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:Ge(_),padding_mode:Ge(w),format:I?"NHWC":"NCHW"})},1016572:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:Ge(_),padding_mode:Ge(w),format:I?"NHWC":"NCHW"})},1016742:(d,h)=>{t.$b("ScatterND",d,{reduction:Ge(h)})},1016827:(d,h,_,w,I,M,z,L,J)=>{t.$b("Attention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M,qkvHiddenSizes:z?Array.from((v(),A).subarray(Number(L)>>>0,Number(L)+z>>>0)):[],pastPresentShareBuffer:!!J})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae,Vt,_s)=>{t.$b("Conv",d,{format:be?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],pads:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],strides:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(fe)>>>0)):[],w_is_const:()=>!!(v(),O)[Number(Ee)>>>0],activation:Ge(Ae),activation_params:Vt?Array.from((v(),V).subarray(Number(Vt)>>>0,Number(_s)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,h,_,w,I,M,z,L,J)=>{t.$b("GroupQueryAttention",d,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:M,rotaryInterleaved:z,smoothSoftmax:L,localWindowSize:J})},1018124:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018235:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018346:(d,h,_,w,I,M)=>{t.$b("MatMulNBits",d,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:M})},1018473:(d,h,_,w,I,M)=>{t.$b("MultiHeadAttention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M})},1018632:(d,h)=>{t.$b("QuickGelu",d,{alpha:h})},1018696:(d,h,_,w,I)=>{t.$b("RotaryEmbedding",d,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1018835:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1018937:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1019039:(d,h,_,w)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1019160:d=>{t.Fd(d)},1019194:(d,h)=>t.Hd(Number(d),Number(h),t.Yc.Kd,t.Yc.errors)};function r2(d,h,_){return Zf(async()=>{await t.Dd(Number(d),Number(h),Number(_))})}function i2(){return typeof wasmOffsetConverter<"u"}function a2(d,h,_,w){var I=ge();try{return zm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function s2(d,h,_){var w=ge();try{return Cm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function o2(d){var h=ge();try{Im(d)}catch(_){if(me(h),_!==_+0)throw _;ye(1,0)}}function u2(d,h){var _=ge();try{return ys(d,h)}catch(w){if(me(_),w!==w+0)throw w;ye(1,0)}}function l2(d,h,_){var w=ge();try{Tm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function d2(d,h){var _=ge();try{Om(d,h)}catch(w){if(me(_),w!==w+0)throw w;ye(1,0)}}function c2(d,h,_,w,I,M,z){var L=ge();try{return Am(d,h,_,w,I,M,z)}catch(J){if(me(L),J!==J+0)throw J;ye(1,0)}}function p2(d,h,_,w,I,M){var z=ge();try{km(d,h,_,w,I,M)}catch(L){if(me(z),L!==L+0)throw L;ye(1,0)}}function h2(d,h,_,w){var I=ge();try{Rm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function f2(d,h,_,w,I){var M=ge();try{Em(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function m2(d,h,_,w,I,M,z){var L=ge();try{Bm(d,h,_,w,I,M,z)}catch(J){if(me(L),J!==J+0)throw J;ye(1,0)}}function g2(d,h,_,w,I,M,z){var L=ge();try{Dm(d,h,_,w,I,M,z)}catch(J){if(me(L),J!==J+0)throw J;ye(1,0)}}function y2(d,h,_,w,I,M,z,L){var J=ge();try{Fm(d,h,_,w,I,M,z,L)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function w2(d,h,_,w,I){var M=ge();try{return Nm(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function _2(d,h,_){var w=ge();try{return Gm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function b2(d,h,_,w,I,M,z,L){var J=ge();try{Wm(d,h,_,w,I,M,z,L)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function $2(d,h,_,w,I,M,z,L,J,te,fe,be){var Ee=ge();try{Pm(d,h,_,w,I,M,z,L,J,te,fe,be)}catch(Ae){if(me(Ee),Ae!==Ae+0)throw Ae;ye(1,0)}}function x2(d,h,_,w,I,M){var z=ge();try{return Um(d,h,_,w,I,M)}catch(L){if(me(z),L!==L+0)throw L;ye(1,0)}}function v2(d,h,_){var w=ge();try{return qm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;return ye(1,0),0n}}function S2(d,h,_,w,I,M,z,L,J){var te=ge();try{Mm(d,h,_,w,I,M,z,L,J)}catch(fe){if(me(te),fe!==fe+0)throw fe;ye(1,0)}}function T2(d){var h=ge();try{return Vm(d)}catch(_){if(me(h),_!==_+0)throw _;ye(1,0)}}function I2(d,h){var _=ge();try{return sg(d,h)}catch(w){if(me(_),w!==w+0)throw w;return ye(1,0),0n}}function k2(d){var h=ge();try{return Hm(d)}catch(_){if(me(h),_!==_+0)throw _;return ye(1,0),0n}}function E2(d,h,_,w){var I=ge();try{return Qm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function C2(d,h,_,w,I){var M=ge();try{return Jm(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;ye(1,0)}}function M2(d,h,_,w,I,M){var z=ge();try{return eg(d,h,_,w,I,M)}catch(L){if(me(z),L!==L+0)throw L;ye(1,0)}}function A2(d,h,_,w,I,M){var z=ge();try{return tg(d,h,_,w,I,M)}catch(L){if(me(z),L!==L+0)throw L;ye(1,0)}}function R2(d,h,_,w,I,M,z,L){var J=ge();try{return Lm(d,h,_,w,I,M,z,L)}catch(te){if(me(J),te!==te+0)throw te;ye(1,0)}}function z2(d,h,_,w,I){var M=ge();try{return ng(d,h,_,w,I)}catch(z){if(me(M),z!==z+0)throw z;return ye(1,0),0n}}function O2(d,h,_,w){var I=ge();try{return rg(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function N2(d,h,_,w){var I=ge();try{return ig(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function B2(d,h,_,w,I,M,z,L,J,te,fe,be){var Ee=ge();try{return ag(d,h,_,w,I,M,z,L,J,te,fe,be)}catch(Ae){if(me(Ee),Ae!==Ae+0)throw Ae;ye(1,0)}}function D2(d,h,_,w,I,M,z,L,J,te,fe){var be=ge();try{Ym(d,h,_,w,I,M,z,L,J,te,fe)}catch(Ee){if(me(be),Ee!==Ee+0)throw Ee;ye(1,0)}}function P2(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae,Vt,_s){var G2=ge();try{Zm(d,h,_,w,I,M,z,L,J,te,fe,be,Ee,Ae,Vt,_s)}catch(bs){if(me(G2),bs!==bs+0)throw bs;ye(1,0)}}function U2(d,h,_){var w=ge();try{return jm(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function L2(d,h,_){var w=ge();try{return Km(d,h,_)}catch(I){if(me(w),I!==I+0)throw I;ye(1,0)}}function F2(d,h,_,w){var I=ge();try{Xm(d,h,_,w)}catch(M){if(me(I),M!==M+0)throw M;ye(1,0)}}function zr(){if(0<ze)Oe=zr;else if(i)y==null||y(t),K();else{for(var d=Re;0<d.length;)d.shift()(t);0<ze?Oe=zr:(t.calledRun=!0,E||(K(),y==null||y(t)))}}return i||(zt=await ce(),zr()),t.PTR_SIZE=4,U?t:new Promise((d,h)=>{y=d,b=h})}var Ws,qs,Og=Q(()=>{var e,t;Ws=Gs,qs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),qs&&Gs()}),Gr,Wr,Vs,rt,Hs,Yn,js,Ks,qr,Xs,Vr,Ys,Hr,Zs,jr=Q(()=>{Ur(),Gr=typeof location>"u"?void 0:location.origin,Wr=self.location.href>"file:"&&self.location.href<"file;",Vs=()=>{{if(Wr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Gr).href}return self.location.href}},rt=Vs(),Hs=()=>{if(rt&&!rt.startsWith("blob:"))return rt.substring(0,rt.lastIndexOf("/")+1)},Yn=(e,t)=>{try{let n=t??rt;return(n?new URL(e,n):new URL(e)).origin===Gr}catch{return!1}},js=(e,t)=>{let n=t??rt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ks=(e,t)=>`${t??"./"}${e}`,qr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Xs=async e=>(await import(e)).default,Vr=(zg(),Sn(Us)).default,Ys=async()=>{if(!rt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Yn(rt))return[void 0,Vr()];let e=await qr(rt);return[e,Vr(e)]},Hr=(Og(),Sn(Fs)).default,Zs=async(e,t,n,r)=>{let i=Hr&&!(e||t);if(i)if(rt)i=Yn(rt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Hr];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??js(a,t),o=n&&s&&!Yn(s,t),u=o?await qr(s):s??Ks(a,t);return[o?u:void 0,await Xs(u)]}}}),Kr,Zn,kn,Xr,Qs,Js,eo,Yr,Me,Xt=Q(()=>{jr(),Zn=!1,kn=!1,Xr=!1,Qs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Js=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},eo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Yr=async e=>{if(Zn)return Promise.resolve();if(kn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Xr)throw new Error("previous call to 'initializeWebAssembly()' failed.");kn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!eo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Js())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Qs();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,p=e.wasmBinary,[c,f]=await Zs(o,a,n>1,!!p||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,b)=>{let x={numThreads:n};if(p)x.wasmBinary=p,x.locateFile=$=>$;else if(l||a)x.locateFile=$=>l??a+$;else if(o&&o.indexOf("blob:")!==0)x.locateFile=$=>new URL($,o).href;else if(c){let $=Hs();$&&(x.locateFile=T=>$+T)}f(x).then($=>{kn=!1,Zn=!0,Kr=$,y(),c&&URL.revokeObjectURL(c)},$=>{kn=!1,Xr=!0,b($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Me=()=>{if(Zn&&Kr)return Kr;throw new Error("WebAssembly is not initialized yet.")}}),lt,Qn,Se,Zr=Q(()=>{Xt(),lt=(e,t)=>{let n=Me(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Qn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")Qn(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Se=e=>{let t=Me(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),to,Ng=Q(()=>{Xt(),Zr(),to=e=>{let t=Me(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=lt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Se("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Qn(e.extra,"",new WeakSet,(s,o)=>{let u=lt(s,r),l=lt(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Se(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),no,ro,io,Yt,ao,so,Bg=Q(()=>{Xt(),Zr(),no=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ro=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},io=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Yt=(e,t,n,r)=>{let i=lt(t,r),a=lt(n,r);Me()._OrtAddSessionConfigEntry(e,i,a)!==0&&Se(`Can't set a session config entry: ${t} - ${n}.`)},ao=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",Yt(e,"session.disable_quant_qdq","1",n),Yt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&Yt(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Yt(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=lt(a,n),u=s.length,l=0,p=0;if(u>0){l=Me()._malloc(u*Me().PTR_SIZE),n.push(l),p=Me()._malloc(u*Me().PTR_SIZE),n.push(p);for(let c=0;c<u;c++)Me().setValue(l+c*Me().PTR_SIZE,s[c][0],"*"),Me().setValue(p+c*Me().PTR_SIZE,s[c][1],"*")}await Me()._OrtAppendExecutionProvider(e,o,l,p,u)!==0&&Se(`Can't append execution provider: ${a}.`)}},so=async e=>{let t=Me(),n=0,r=[],i=e||{};io(i);try{let a=no(i.graphOptimizationLevel??"all"),s=ro(i.executionMode??"sequential"),o=typeof i.logId=="string"?lt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let p=typeof i.optimizedModelFilePath=="string"?lt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,p),n===0&&Se("Can't create session options."),i.executionProviders&&await ao(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Yt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,f]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=lt(c,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&Se(`Can't set a free dimension override: ${c} - ${f}.`)}return i.extra!==void 0&&Qn(i.extra,"",new WeakSet,(c,f)=>{Yt(n,c,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Se("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Zt,Et,Qt,Jn,er,Qr,Jr,ei,le=Q(()=>{Zt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Et=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Qt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Jn=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},er=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Qr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Jr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ei=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ti,oo=Q(()=>{Ur(),ti=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),uo,lo,co,po,ni,ho,we,Ct=Q(()=>{le(),uo=["V","I","W","E","F"],lo=(e,t)=>{console.log(`[${uo[e]},${new Date().toISOString()}]${t}`)},ni=(e,t)=>{co=e,po=t},ho=(e,t)=>{let n=er(e),r=er(co);n>=r&&lo(n,typeof t=="function"?t():t)},we=(...e)=>{po&&ho(...e)}}),fo,hn,D,tr,mo,go,yo,pe=Q(()=>{fo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},hn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=fo.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let p=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class Or{static size(t){return Or.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Or.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Or.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},tr=class jn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)jn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return jn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return jn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(jn.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},mo=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!hn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},go=-34028234663852886e22,yo=34028234663852886e22}),ri,wo=Q(()=>{le(),ri=(e,t)=>new(Jn(t))(e)}),ii,ai,si,_o,oi,bo,ui,li,di,$o,xo,Dg=Q(()=>{le(),Ct(),ii=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ai=(e,t)=>{if(t==="int32")return e;let n=ii.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Jn(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},si=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},_o=1,oi=()=>_o++,bo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ui=(e,t)=>{let n=ii.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},li=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ui(this.dataType,this.tensorShape)}destroy(){we("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=si(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},di=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=bo.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);we("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ui(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ai(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else we("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?si(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},$o=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=oi();return this.tensorTrackersById.set(e,new di(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){we("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){we("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=oi(),s=new li({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new di(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,n)){we("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}we("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new li({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},xo=(...e)=>new $o(...e)}),En,vo,So,Pg=Q(()=>{le(),Xt(),wo(),Dg(),Ct(),En=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),vo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},So=class{constructor(e){this.tensorManager=xo(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ni(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){we("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){we("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)we("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>vo(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){we("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=En.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){we("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=En.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");we("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ri(n,t)}}registerMLTensor(e,t,n,r){let i=En.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return we("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(l);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":p=new Int32Array(l);break;case"uint32":p=new Uint32Array(l);break;case"int64":if(s){let c=ai(new Uint8Array(l),"int64");p=new Int32Array(c.buffer),i.dataType="int32"}else p=new BigInt64Array(l);break;case"uint64":p=new BigUint64Array(l);break;case"int8":p=new Int8Array(l);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return we("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=En.get(Zt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ci=Q(()=>{}),pi,nr,rr,To,Io,hi,fi,ko,Eo,Ug=Q(()=>{Ct(),ci(),pi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),nr=[],rr=e=>Math.ceil(Number(e)/16)*16,To=e=>{for(let t=0;t<nr.length;t++){let n=nr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Io=1,hi=()=>Io++,fi=async(e,t,n,r)=>{let i=rr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},ko=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of pi)nr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=rr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=rr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=hi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=To(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:hi(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await fi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=pi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(we("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Eo=(...e)=>new ko(...e)}),Co,xe,De=Q(()=>{Co=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new Co(e)}),fn,ir,We,Qe,oe,Be,mi,mn,Nt,ae,Cn,G,re,Mo,gi,Ao,Ro,he=Q(()=>{le(),pe(),fn=64,ir=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},We=(e,t=1)=>{let n=ir(e,t);return typeof n=="string"?n:n[0]},Qe=(e,t=1)=>{let n=ir(e,t);return typeof n=="string"?n:n[1]},oe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Be=e=>e%4===0?4:e%2===0?2:1,mi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,mn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Nt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Cn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=ir(t,i),p=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],f={indices:u,value:p,storage:c,tensor:t},m=U=>typeof U=="string"?U:`${U}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",b=`${y}${e}_shape`,x=`${y}${e}_strides`,$="";for(let U=0;U<s-1;U++)$+=`
    let dim${U} = current / ${ae(x,U,s)};
    let rest${U} = current % ${ae(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;$+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=U=>(g.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),k=[];if(s>=2)for(let U=s-1;U>=0;U--)k.push(`${ae(x,U,s)} * (indices[${U}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,C=U=>(g.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${f.indices}(${U.map(m).join(",")})`,R=(U,Z)=>s<2?`${U}`:`${ae(U,Z,s)}`,O=(U,Z,K)=>s<2?`${U}=${K};`:`${ae(U,Z,s)}=${K};`,j={},P=(U,Z)=>{g.broadcastedIndicesToOffset=!0;let K=`${Z.name}broadcastedIndicesTo${e}Offset`;if(K in j)return`${K}(${U})`;let W=[];for(let ue=s-1;ue>=0;ue--){let ce=Z.indicesGet("outputIndices",ue+Z.rank-s);W.push(`${R(x,ue)} * (${ce} % ${R(b,ue)})`)}return j[K]=`fn ${K}(outputIndices: ${Z.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${K}(${U})`},F=(U,Z)=>(()=>{if(f.storage===f.value)return`${e}[${U}]=${Z};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${Z}), select(0u, 0xFFFFFFFFu, ${Z} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${Z}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Z}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=U=>(()=>{if(f.storage===f.value)return`${e}[${U}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${U}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${U}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),B=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${A(`i2o_${e}(indices)`)};
  }`,V=s<2?"":(()=>{let U=o.map(K=>`d${K}: u32`).join(", "),Z=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${U}) -> ${p} {
    return get_${e}ByIndices(${v(Z)});
  }`})(),X=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let Z=U.map(m).join(",");return s===0?A("0u"):s===1?A(Z[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${Z})`)},ne=U=>s<2?A(U):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${U})`),N=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,ee=s<2?"":(()=>{let U=o.map(K=>`d${K}: u32`).join(", "),Z=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${U}, value: ${p}) {
    set_${e}ByIndices(${v(Z)}, value);
  }`})();return{impl:()=>{let U=[],Z=!1;return g.offsetToIndices&&(U.push(T),Z=!0),g.indicesToOffset&&(U.push(E),Z=!0),g.broadcastedIndicesToOffset&&(Object.values(j).forEach(K=>U.push(K)),Z=!0),g.set&&(U.push(ee),Z=!0),g.setByIndices&&(U.push(N),Z=!0),g.get&&(U.push(V),Z=!0),g.getByIndices&&(U.push(B),Z=!0),!a&&Z&&U.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${x} = ${f.indices}(${D.computeStrides(n).join(",")});`),U.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:P,indices:v,indicesGet:R,indicesSet:O,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let Z=U[s];if(typeof Z!="string")throw new Error("value must be string");let K=U.slice(0,s).map(m).join(",");return s===0?F("0u",Z):s===1?F(K[0],Z):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${K}, ${Z})`)},setByOffset:F,setByIndices:(U,Z)=>s<2?F(U,Z):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${Z});`),get:X,getByOffset:A,getByIndices:ne,usage:r,name:e,strides:x,shape:b,rank:s}},G=(e,t,n,r=1)=>Cn(e,t,n,"input",r),re=(e,t,n,r=1)=>Cn(e,t,n,"output",r),Mo=(e,t,n)=>Cn(e,t,n,"atomicOutput",1),gi=(e,t,n,r=1)=>Cn(e,t,n,"internal",r),Ao=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=fn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ro=(e,t)=>new Ao(e,t)}),zo,yi,Oo,No,Bo,Do,it,Po,Uo,Bt=Q(()=>{le(),pe(),De(),he(),zo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},yi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Oo=(e,t)=>D.sortBasedOnPerm(e,yi(e.length,t)),No=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Bo=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Do=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},it=(e,t)=>{let n=e.dataType,r=e.dims.length,i=yi(r,t),a=Oo(e.dims,i),s=e.dims,o=a,u=r<2||Do(i,e.dims),l;if(u)return l=g=>{let y=G("input",n,s,4),b=re("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:p,newPerm:c}=Bo(e.dims,i),f=D.areEqual(c,[2,3,1]),m=D.areEqual(c,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let g=16;return l=y=>{let b=G("a",n,s.length),x=re("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${g+1}>, ${g}>;
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
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...oe(s,o)]}},getShaderSource:l}}return l=g=>{let y=G("a",n,s.length),b=re("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}

  ${No(i,r,y,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(s,o)]}},getShaderSource:l}},Po=(e,t)=>{zo(e.inputs,t.perm),e.compute(it(e.inputs[0],t.perm))},Uo=e=>xe({perm:e.perm})}),Lo,Fo,Go,Wo,qo,Vo,Ho,jo,Ko,Xo,dt,Yo,Zo,Qo,Jo,eu,tu,nu,ru,iu,au,Lg=Q(()=>{le(),pe(),he(),_i(),Bt(),Lo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Fo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Go={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Wo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},qo=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Vo=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Ho=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},jo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Ko=(e,t)=>{let n=[];if(!jo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Xo=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=D.size(a),l=D.size(s),p=G("_A",n[0].dataType,o),c=re("output",i,a),f=64;u===1&&(f=256);let m=`
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

          var bestValue = f32(${Go[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Lo[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Fo[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Wo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},dt=(e,t,n,r)=>{let i=e.inputs.length===1?n:wi(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=D.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=Ko(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(it(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=qo(o.length,u.dims.length));let[p,c]=Vo(u.dims,o),f=p;i.keepDims&&(f=Ho(p,s)),e.compute(Xo(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,c),{inputs:[u]})},Yo=(e,t)=>{dt(e,"ReduceMeanShared",t,"mean")},Zo=(e,t)=>{dt(e,"ReduceL1Shared",t,"l1")},Qo=(e,t)=>{dt(e,"ReduceL2Shared",t,"l2")},Jo=(e,t)=>{dt(e,"ReduceLogSumExpShared",t,"logSumExp")},eu=(e,t)=>{dt(e,"ReduceMaxShared",t,"max")},tu=(e,t)=>{dt(e,"ReduceMinShared",t,"min")},nu=(e,t)=>{dt(e,"ReduceProdShared",t,"prod")},ru=(e,t)=>{dt(e,"ReduceSumShared",t,"sum")},iu=(e,t)=>{dt(e,"ReduceSumSquareShared",t,"sumSquare")},au=(e,t)=>{dt(e,"ReduceLogSumShared",t,"logSum")}}),ct,su,ar,wi,pt,ou,uu,lu,du,cu,pu,hu,fu,mu,gu,ht,yu,wu,_u,bu,$u,xu,vu,Su,Tu,Iu,_i=Q(()=>{le(),pe(),De(),he(),Lg(),ct=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},su=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ar=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,p=l.length,c=D.normalizeAxes(i,p),f=!o&&c.length===0;l.forEach((y,b)=>{f||c.indexOf(b)>=0?s&&u.push(1):u.push(y)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let b=[],x=G("_A",n[0].dataType,p),$=re("output",a,m),T=r(x,$,c),S=T[2];for(let k=0,E=0;k<p;k++)f||c.indexOf(k)>=0?(s&&E++,S=`for(var j${k}: u32 = 0; j${k} < ${l[k]}; j${k}++) {
                  ${T[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${x.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(b.push(`${x.indicesSet("input_indices",k,$.indicesGet("output_indices",E))};`),E++);return`

        ${y.registerUniform("output_size","u32").declareVariables(x,$)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?$.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...oe(l,u)]})}},wi=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),xe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},pt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:wi(i,n);e.compute(ar(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?su:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},ou=(e,t)=>{ct(e.inputs),pt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},uu=(e,t)=>{ct(e.inputs),pt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},lu=(e,t)=>{ct(e.inputs),pt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},du=(e,t)=>{ct(e.inputs),pt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},cu=(e,t)=>{ct(e.inputs),pt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},pu=(e,t)=>{ct(e.inputs),pt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},hu=(e,t)=>{ct(e.inputs),pt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},fu=(e,t)=>{ct(e.inputs),pt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},mu=(e,t)=>{ct(e.inputs),pt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},gu=(e,t)=>{ct(e.inputs),pt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},ht=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},yu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):Yo(e,t)},wu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Zo(e,t)},_u=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Qo(e,t)},bu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Jo(e,t)},$u=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):eu(e,t)},xu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):tu(e,t)},vu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):nu(e,t)},Su=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):ru(e,t)},Tu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):iu(e,t)},Iu=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):au(e,t)}}),bi,ku,Eu,$i,Fg=Q(()=>{le(),De(),_i(),bi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ku=(e,t)=>{bi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ar("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Eu=(e,t)=>{bi(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ar("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},$i=e=>xe(e)}),Cu,sr,Mu,Au,Ru,Mn,zu,Ou,xi=Q(()=>{le(),pe(),ci(),he(),Cu=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],p=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,f=c,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let b=g+y,x=-1,$=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:x,inputHiddenSize:p,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},sr=(e,t,n)=>t&&e?`
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
    `,Mu=(e,t,n,r,i,a,s,o)=>{let u=Be(s?1:a),l=64,p=a/u;p<l&&(l=32);let c=Math.ceil(a/u/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:p},{type:12,data:c}],m=We(e.dataType,u),g=Qe(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let b=x=>{let $=re("x",e.dataType,e.dims,u),T=[$],S=s?G("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let k=o?G("total_sequence_length_input",o.dataType,o.dims):void 0;k&&T.push(k);let E=Qe(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${x.registerUniforms(C).declareVariables(...T)}
  ${x.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${sr(S,k,!1)}
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
        x[offset + i] = ${$.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Au=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,f,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=Be(a.headSize),x=a.headSize/b,$=12,T={x:Math.ceil(l/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],k=c&&r&&D.size(r.dims)>0,E=["type","type"];k&&E.push("type"),i&&E.push("type"),o&&E.push("type"),u&&E.push("type");let C=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=R=>{let O=G("q",t.dataType,t.dims,b),j=G("key",n.dataType,n.dims,b),P=[O,j];if(k){let N=G("past_key",r.dataType,r.dims,b);P.push(N)}i&&P.push(G("attention_bias",i.dataType,i.dims));let F=o?G("seq_lens",o.dataType,o.dims):void 0;F&&P.push(F);let A=u?G("total_sequence_length_input",u.dataType,u.dims):void 0;A&&P.push(A);let B=re("output",t.dataType,p),V=[B];c&&V.push(re("present_key",t.dataType,m,b));let X=Qe(1,b),ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${O.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${O.type.storage}, ${$*$}>;
  ${R.registerUniforms(ne).declareVariables(...P,...V)}
  ${R.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${sr(F,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&c?`
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Ru=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,p=i.vHiddenSize*l,c=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,p],y=12,b={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],$=c&&r&&D.size(r.dims)>0,T=["type","type"];$&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=E=>{let C=G("probs",t.dataType,t.dims),v=G("v",n.dataType,n.dims),R=[C,v];$&&R.push(G("past_value",r.dataType,r.dims));let O=s?G("seq_lens",s.dataType,s.dims):void 0;s&&R.push(O);let j=o?G("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(j);let P=[re("output",t.dataType,g)];c&&P.push(re("present_value",t.dataType,m));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${E.registerUniforms(F).declareVariables(...R,...P)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${sr(O,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&c?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:x}),getShaderSource:k}},Mn=(e,t,n,r,i,a,s,o,u,l,p=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,y=f>1?l.pastSequenceLength:0,b=y+l.kvSequenceLength,x=u&&D.size(u.dims)>0?u:void 0,$=[t,n];m&&D.size(m.dims)>0&&$.push(m),x&&$.push(x),p&&$.push(p),c&&$.push(c);let T=e.compute(Au(f,t,n,m,x,l,y,p,c),{inputs:$,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Mu(T,l.batchSize,l.numHeads,y,l.sequenceLength,b,p,c),{inputs:p&&c?[T,p,c]:[T],outputs:[]});let S=[T,r];g&&D.size(g.dims)>0&&S.push(g),p&&S.push(p),c&&S.push(c),e.compute(Ru(f,T,r,g,l,y,p,c),{inputs:S,outputs:f>1?[0,2]:[0]})},zu=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=c=>{let f=re("output_q",u[0].dataType,n),m=re("output_k",u[0].dataType,n),g=re("output_v",u[0].dataType,n),y=G("input",u[0].dataType,u[0].dims),b=G("weight",u[1].dataType,u[1].dims),x=G("bias",u[2].dataType,u[2].dims),$=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(y,b,x,f,m,g)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},Ou=(e,t)=>{let n=Cu(e.inputs,t),[r,i,a]=zu(e,n);return Mn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Nu,Bu,Du,Pu,Gg=Q(()=>{st(),le(),pe(),De(),he(),Nu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Bu=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Be(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=D.size(a)/s,l=r,p=l?a.length:a,c=G("x",e[0].dataType,e[0].dims,s),f=G("scale",e[1].dataType,e[1].dims,o),m=G("bias",e[2].dataType,e[2].dims,o),g=G("inputMean",e[3].dataType,e[3].dims,o),y=G("inputVar",e[4].dataType,e[4].dims,o),b=re("y",e[0].dataType,p,s),x=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},$=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,m,g,y,b)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...oe(a)]:[{type:12,data:u}]})}},Du=e=>xe(e),Pu=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Du({...t,outputCount:r});if(Ce.webgpu.validateInputContent&&Nu(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Bu(n,i))}}),Uu,Lu,Fu,Wg=Q(()=>{pe(),he(),Uu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Lu=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,a=G("input",i,t,4),s=G("bias",i,[n],4),o=G("residual",i,t,4),u=re("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Fu=e=>{Uu(e.inputs),e.compute(Lu(e.inputs))}}),Gu,$e,Wu,qu,Vu,Hu,ju,Ku,Xu,Yu,Zu,Qu,Ju,el,tl,nl,An,rl,or,il,al,sl,ol,ul,ll,dl,cl,pl,hl,fl,ml,gl,yl,wl,_l,vi,bl,Si,Ti,$l,xl,vl,Sl,Tl,Il,Ii=Q(()=>{le(),pe(),De(),he(),Gu=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=G("inputData",n,[o],4),p=re("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},$e=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Gu(l,D.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(l[0].dims)/64/4)},programUniforms:u})}},Wu=e=>{e.compute($e(e.inputs[0],"Abs","abs"))},qu=e=>{e.compute($e(e.inputs[0],"Acos","acos"))},Vu=e=>{e.compute($e(e.inputs[0],"Acosh","acosh"))},Hu=e=>{e.compute($e(e.inputs[0],"Asin","asin"))},ju=e=>{e.compute($e(e.inputs[0],"Asinh","asinh"))},Ku=e=>{e.compute($e(e.inputs[0],"Atan","atan"))},Xu=e=>{e.compute($e(e.inputs[0],"Atanh","atanh"))},Yu=e=>xe(e),Zu=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($e(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Qu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xe({min:t,max:n})},Ju=(e,t)=>{let n=t||Qu(e.inputs),r=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},el=e=>{e.compute($e(e.inputs[0],"Ceil","ceil"))},tl=e=>{e.compute($e(e.inputs[0],"Cos","cos"))},nl=e=>{e.compute($e(e.inputs[0],"Cosh","cosh"))},An=e=>xe(e),rl=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},or=(e="f32")=>`
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
}`,il=e=>{let t=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,or(t)))},al=e=>{e.compute($e(e.inputs[0],"Exp","exp"))},sl=e=>{e.compute($e(e.inputs[0],"Floor","floor"))},ol=e=>{let t=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,or(t)))},ul=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},ll=e=>{e.compute($e(e.inputs[0],"Not",t=>`!${t}`))},dl=e=>{e.compute($e(e.inputs[0],"Neg",t=>`-${t}`))},cl=e=>{e.compute($e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},pl=e=>{let t=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},hl=e=>{e.compute($e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},fl=e=>xe(e),ml=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},gl=e=>{e.compute($e(e.inputs[0],"Sin","sin"))},yl=e=>{e.compute($e(e.inputs[0],"Sinh","sinh"))},wl=e=>{e.compute($e(e.inputs[0],"Sqrt","sqrt"))},_l=e=>{e.compute($e(e.inputs[0],"Tan","tan"))},vi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,bl=e=>{e.compute($e(e.inputs[0],"Tanh",vi))},Si=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${vi("v")};
}
`,Ti=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,$l=e=>{let t=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"FastGelu",Ti,Si(t),void 0,e.inputs[0].dataType))},xl=(e,t)=>{let n=Qe(e.inputs[0].dataType);return e.compute($e(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},vl=e=>{e.compute($e(e.inputs[0],"Log","log"))},Sl=(e,t)=>`
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
`,Tl=e=>`quick_gelu_impl(${e})`,Il=(e,t)=>{let n=Qe(e.inputs[0].dataType);e.compute($e(e.inputs[0],"QuickGelu",Tl,Sl(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),kl,El,Cl,qg=Q(()=>{pe(),he(),Ii(),kl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},El=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=G("input",e[0].dataType,e[0].dims,4),r=G("bias",e[0].dataType,[e[0].dims[2]],4),i=re("output",e[0].dataType,t,4),a=D.size(t)/4,s=We(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${or(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Cl=e=>{kl(e.inputs),e.compute(El(e.inputs))}}),Ml,Al,ft,Rl,zl,Ol,Nl,Bl,Dl,Pl,Ul,Ll,Fl,Vg=Q(()=>{le(),pe(),he(),Ml=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f,m;typeof o=="string"?f=m=($,T)=>`${o}((${$}),(${T}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=re("outputData",p,r.length,4),y=G("aData",u,t.length,4),b=G("bData",l,n.length,4),x;if(i)if(a){let $=D.size(t)===1,T=D.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;$||T?x=g.setByOffset("global_idx",m($?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):x=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(T,S,k="")=>{let E=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${k}(${f(E,C)});
          `};p===9?x=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,b,g)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Al=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!D.areEqual(o,u),p=o,c=D.size(o),f=!1,m=!1,g=[l];if(l){let y=hn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");p=y.slice(),c=D.size(p);let b=D.size(o)===1,x=D.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push(x),g.push($),g.push(T);let S=1;for(let k=1;k<p.length;k++){let E=o[o.length-k],C=u[u.length-k];if(E===C)S*=E;else break}S%4===0?(m=!0,f=!0):(b||x||$||T)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Ml(y,o,u,p,f,l,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(p)/4)},...oe(o,u,p)]})}},ft=(e,t,n,r,i,a)=>{e.compute(Al(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Rl=e=>{ft(e,"Add",(t,n)=>`${t}+${n}`)},zl=e=>{ft(e,"Div",(t,n)=>`${t}/${n}`)},Ol=e=>{ft(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Nl=e=>{ft(e,"Mul",(t,n)=>`${t}*${n}`)},Bl=e=>{let t=G("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;ft(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Dl=e=>{ft(e,"Sub",(t,n)=>`${t}-${n}`)},Pl=e=>{ft(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Ul=e=>{ft(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Ll=e=>{ft(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Fl=e=>{ft(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Gl,Wl,ql,Vl,Hl,jl,Hg=Q(()=>{le(),pe(),De(),he(),Gl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Wl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ql=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Vl=(e,t,n,r)=>{let i=D.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],p=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=G(`input${y}`,r,l[y]),u.push("rank"),p.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)p.push(...oe(e[y].dims));p.push(...oe(n));let c=re("output",r,n.length),f=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)y.registerUniform(`sizeInConcatAxis${b}`,"u32");return y.declareVariables(...s,c)})()}

  ${Wl(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ql(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g}},Hl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);Gl(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>D.size(o.dims)>0);e.compute(Vl(s,i,a,n[0].dataType),{inputs:s})},jl=e=>xe({axis:e.axis})}),Jt,en,tn,ki,nn=Q(()=>{le(),pe(),Jt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},en=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},tn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ki=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[go,yo];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),He,Kl,Ei=Q(()=>{He=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Kl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Xl,jg=Q(()=>{Xl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Rn,Ci,Mi=Q(()=>{le(),pe(),he(),nn(),Rn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ae(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ae(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Ci=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],p=s[s.length-1],c=Be(l),f=Be(p),m=Be(u),g=D.size(n)/c/m,y=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),x=[D.size(b),u,l],$=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:p}];en(t,$),$.push(...oe(b,s,o)),y&&$.push(...oe(e[2].dims)),$.push(...oe(x));let T=S=>{let k=gi("batch_dims",e[0].dataType,b.length),E=G("a",e[0].dataType,s.length,f),C=G("b",e[1].dataType,o.length,c),v=re("output",e[0].dataType,x.length,c),R=We(v.type.tensor),O=Jt(t,v.type.value,R),j=[E,C],P="";if(y){let B=i?c:1;j.push(G("bias",e[2].dataType,e[2].dims.length,B)),P=`${i?`value += bias[col / ${B}];`:`value += ${v.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];tn(t,F);let A=()=>{let B=`var a_data: ${E.type.value};`;for(let V=0;V<f;V++)B+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${c}];`;for(let V=0;V<m;V++){B+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${f}];`;for(let X=0;X<f;X++)B+=`
            values[${V}] = fma(${C.type.value}(a_data${f===1?"":`[${X}]`}), b_data${X}, values[${V}]);
`}return B};return`
  ${S.registerUniforms(F).registerInternalVariables(k).declareVariables(...j,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${Rn("a_indices",E,E.rank-2,k.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${Rn("b_indices",C,C.rank-2,k.rank,"batch_indices")}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:T}}}),Yl,Zl,Ai,Ri,Ql,zi,Jl,ur,Oi=Q(()=>{le(),pe(),he(),nn(),Mi(),Ei(),Yl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Zl=(e,t)=>e?`
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
        }`,Ai=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],p=i?u:a,c=i?a:u,f=p/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
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
          ${Yl(i,r)}
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

          ${Zl(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ri=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ql=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",zi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],p=e[0]*t[0],c=i?l:a,f=i?a:l;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=c/t[0],y=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ri(i,r)}
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
      ${Ri(i,r)}
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
      ${Ql(i)}
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
`},Jl=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=We(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${He(e,l)} {
      var value = ${He(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Rn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
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
        ${Rn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
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
    `},ur=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),p=r?r.slice(0,-2):n.slice(0,-2),c=D.size(p),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],y=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],$=[Math.ceil(g/x[0]/b[0]),Math.ceil(f/x[1]/b[1]),Math.ceil(c/x[2]/b[2])],T=y?4:1,S=[...u,f,m/T],k=S.length,E=[...l,m,g/T],C=E.length,v=[c,f,g/T],R=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];en(t,R),R.push(...oe(p,S,E));let O=["rank","rank"],j=e.length>2;j&&(R.push(...oe(e[2].dims)),O.push("rank")),R.push(...oe(v));let P=F=>{let A=p.length,B=gi("batchDims",e[0].dataType,A,1),V=We(e[0].dataType),X=G("a",e[0].dataType,k,T),ne=G("b",e[1].dataType,C,T),N=re("result",e[0].dataType,v.length,T),ee=[X,ne];if(j){let ue=i?T:1;ee.push(G("bias",e[2].dataType,e[2].dims.length,ue))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];tn(t,U);let Z=We(N.type.tensor),K=Jt(t,N.type.value,Z),W=Jl(T,j,K,[B,X,ne,N],i);return`
  ${F.registerUniforms(U).registerInternalVariables(B).declareVariables(...ee,N)}
  ${W}
  ${y?Ai(b,x,V,B):zi(b,x,V,B)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${y};${i}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:R}),getShaderSource:P}}}),ed,td,Kg=Q(()=>{le(),Ct(),he(),nn(),Ei(),jg(),Oi(),ed=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let p=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",x=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
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
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${He(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
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
    return ${He(o,l)}(0.0);`,k=He(u,l),E=He(e?s:o,l),C=He(e?o:s,l),v=Jt(a,k,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Kl(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},td=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],c=n[0],f=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(p%4===0||p%3===0)&&g%4===0,b=l?g:f*m,x=l?f*m:g,$=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/$[0]/T[0]),Math.ceil(x/$[1]/T[1]),Math.ceil(c/$[2]/T[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=y?l&&p%4!==0?3:4:1,E=$[1]*T[1],C=$[0]*T[0],v=Math.max($[0]*k,$[1]),R=r%E===0,O=i%C===0,j=a%v===0,P=y?[k,4,4]:[1,1,1],F=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];en(t,F),F.push(...oe(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(F.push(...oe(e[2].dims)),A.push("rank")),F.push(...oe(n));let B=V=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];tn(t,X);let ne=y?4:1,N=We(e[0].dataType),ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${N}>`:N}) {
        result[flatIndex] = ${y?`vec4<${N}>`:N}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${N}>`:N}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,U=G("x",e[0].dataType,e[0].dims.length,k===3?1:k),Z=G("w",e[1].dataType,e[1].dims.length,ne),K=[U,Z],W=re("result",e[0].dataType,n.length,ne);if(s){let ue=G("bias",e[2].dataType,e[2].dims.length,ne);K.push(ue),ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${N}>`:N} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Xl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(X).declareVariables(...K,W)}
        ${ee}
        ${ed(l,R,O,j,s,t,P[0],P[1],P[2],N)}
        ${y?Ai(T,$,N,void 0,!l,v):zi(T,$,N,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${y};${R};${O};${j};${E};${C};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:F}),getShaderSource:B}}}),nd,Ni,zn,rd,Bi,id,ad,sd,Xg=Q(()=>{le(),Ct(),pe(),he(),nn(),Ei(),nd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ni=e=>typeof e=="number"?[e,e,e]:e,zn=(e,t)=>t<=1?e:e+(e-1)*(t-1),rd=(e,t,n,r=1)=>{let i=zn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Bi=(e,t,n,r,i)=>{i==null&&(i=rd(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},id=(e,t,n,r,i,a,s,o,u,l)=>{let p,c,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Bi([t,n,r,1],[o,u,l],1,[i,a,s],e);c=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,b,x)=>y===x[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Bi([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);c=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,y=(f-1)*a+u-n,b=(m-1)*s+l-r,x=Math.floor(g/2),$=g-x,T=Math.floor(y/2),S=y-T,k=Math.floor(b/2),E=b-k;p={top:T,bottom:S,left:k,right:E,front:x,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:f,outWidth:m}},ad=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,p,c;if(s==="channelsLast")[o,u,l,p,c]=e;else if(s==="channelsFirst")[o,c,u,l,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,y]=t,[b,x,$]=Ni(n),[T,S,k]=Ni(r),E=zn(m,T),C=zn(g,S),v=zn(y,k),{padInfo:R,outDepth:O,outHeight:j,outWidth:P}=id(i,u,l,p,b,x,$,E,C,v),F=a?f*c:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,F,O,j,P]:s==="channelsLast"&&(A=[o,O,j,P,F]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:p,inChannels:c,outDepth:O,outHeight:j,outWidth:P,outChannels:F,padInfo:R,strideDepth:b,strideHeight:x,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},sd=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,x)=>x)},l=[Math.ceil(nd(u.x.map(b=>n[b]))/o[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let p=1,c=D.size(n),f=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];en(t,f),f.push(...oe(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...oe(e[2].dims)),m.push("rank")),f.push(...oe(n));let y=b=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];tn(t,x);let $=1,T=We(e[0].dataType),S=G("x",e[0].dataType,e[0].dims.length,p),k=G("W",e[1].dataType,e[1].dims.length,$),E=[S,k],C=re("result",e[0].dataType,n.length,$),v="";if(g){let j=G("bias",e[2].dataType,e[2].dims.length,$);E.push(j),v+=`
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
              return ${k.getByIndices("aIndices")};
            }
          ${b.registerUniforms(x).declareVariables(...E,C)}
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:f}),getShaderSource:y}}}),od,ud,Yg=Q(()=>{le(),pe(),he(),nn(),od=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],p=l/t.group,c=u&&p>=4?Be(l):1,f=D.size(n)/c,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];en(t,m),m.push(...oe(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...oe([n[0],n[1],n[2],n[3]/c]));let y=b=>{let x=re("output",e[0].dataType,n.length,c),$=We(x.type.tensor),T=Jt(t,x.type.value,$),S=G("x",e[0].dataType,s.length),k=G("w",e[1].dataType,o.length,c),E=[S,k];i&&E.push(G("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];tn(t,C);let v=u?`
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
            let wVal = ${k.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(C).declareVariables(...E,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${a}
    ${T}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},ud=(e,t,n,r)=>{let i=e.length>2,a=Be(n[3]),s=Be(n[2]),o=D.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];en(t,c),c.push(...oe(u,l,p));let f=(s-1)*t.strides[1]+l[1],m=g=>{let y=re("output",e[0].dataType,p.length,a),b=We(y.type.tensor),x=Jt(t,y.type.value,b),$=G("x",e[0].dataType,u.length,a),T=G("w",e[1].dataType,l.length,a),S=[$,T];i&&S.push(G("b",e[2].dataType,e[2].dims,a));let k=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return tn(t,E),`
  ${g.registerUniforms(E).declareVariables(...S,y)}
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

    var x_vals: array<${$.type.value}, ${f}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
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
      ${k}
      ${x}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),ld,lr,dd,dr,Di,Pi,cd,pd,Ui,Zg=Q(()=>{pe(),Kg(),Xg(),Oi(),Yg(),nn(),Mi(),Bt(),ld=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),c=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-p[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},lr=[2,3,1,0],dd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},dr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();tr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Di=e=>{let t=ki(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Pi=(e,t,n,r)=>{let i=n.format==="NHWC",a=ld(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(it(t[1],lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(ud(E,n,a,r),{inputs:E}):e.compute(od(E,n,a,r),{inputs:E});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],p=t[1].dims[2],c=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&p===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||p===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=a[0],C,v,R,O=[];if(i){let F=e.kernelCustomData.wT??e.compute(it(t[1],lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),y){let A=o*u*l;C=t[0].reshape([1,E,A]),v=F.reshape([1,A,g]),R=[1,E,g]}else C=t[0].reshape([E,o*u,l]),v=F.reshape([1,l,g]),R=[E,f*m,g];O.push(C),O.push(v)}else C=t[0].reshape([E,l,o*u]),v=t[1].reshape([1,g,l]),R=[E,g,f*m],O.push(v),O.push(C);s&&O.push(t[2]);let j=R[2],P=O[0].dims[O[0].dims.length-1];j<8&&P<8?e.compute(Ci(O,n,a,R,i,r),{inputs:O}):e.compute(ur(O,n,a,R,i,r),{inputs:O});return}let b=!0,x=e.kernelCustomData.wT??e.compute(it(t[1],lr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let $=[t[0],x];s&&$.push(t[2]);let T=i?f*m:g,S=i?g:f*m,k=p*c*l;e.compute(td($,n,a,T,S,k,s,b,r),{inputs:$})},cd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=dr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Pi(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},pd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=dr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=ad(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(sd(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Ui=(e,t)=>{if(dd(e.inputs,t),e.inputs[0].dims.length===3)cd(e,t);else if(e.inputs[0].dims.length===5)pd(e,e.inputs,t);else{let n=dr(t,e.inputs);Pi(e,e.inputs,n)}}}),hd,Qg=Q(()=>{le(),Ct(),pe(),he(),hd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],p=a?Be(u):1,c=a&&l===1&&u>=4,f=c?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,g=a?Be(l):1,y=a?l===1?p:g:1,b=D.size(i)/g,x=[Math.ceil(b/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let $=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],k=[t.dilations[0],t.dilations[1]],E=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:T},{type:12,data:S},{type:12,data:k},{type:12,data:E},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:l},...oe(e[0].dims,e[1].dims)];r&&(v.push(...oe(e[2].dims)),$.push("rank")),v.push(...oe(i));let R=O=>{let j=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=We(e[0].dataType),F=a?1:2,A=a?2:3,B=a?3:1,V=G("W",e[1].dataType,e[1].dims.length,y),X=G("Dy",e[0].dataType,e[0].dims.length,p),ne=[X,V];r&&ne.push(G("bias",e[2].dataType,[i[B]].length,g));let N=re("result",e[0].dataType,i.length,g),ee=()=>{let K="";if(c)p===4?K+=`
        let xValue = ${X.getByOffset("x_offset")};
        let wValue = ${V.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?K+=`
          dotProd = dotProd + dot(vec4<${P}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}), vec4<${P}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(K+=`
          dotProd = dotProd + dot(vec4<${P}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}, ${X.getByOffset("x_offset + 2u")}, ${X.getByOffset("x_offset + 3u")}), vec4<${P}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}, ${V.getByOffset("w_offset + 2u")}, ${V.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${a?X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):X.get("batch","inputChannel","idyR","idyC")};
        `,p===1)K+=`
          let w_offset = ${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${V.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<p;W++)K+=`
            let wValue${W} = ${V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return K},U=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let K="";if(p===1){K+="dotProd = dotProd";for(let W=0;W<m;W++)K+=`
            + ${X.getByOffset(`x_offset + ${W}`)} * ${V.getByOffset(`w_offset + ${W}`)}`;K+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);K+=`
          let xValue = ${X.getByOffset("x_offset")};
          let wValue = ${V.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},Z=`
            let outputIndices = ${N.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${N.indicesGet("outputIndices",0)};
            let d1 = ${N.indicesGet("outputIndices",B)};
            let r = ${N.indicesGet("outputIndices",F)};
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
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
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
                var w_offset = ${V.indicesToOffset(`${V.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${ee()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${U()}
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
    ${Z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${y}${g}${c}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),fd,md,gd,Li,yd,wd,Fi,_d,bd,Jg=Q(()=>{Qg(),nn(),Bt(),fd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,md=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},gd=(e,t,n,r,i,a,s,o,u,l)=>{let p=e.length-2,c=l.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,y=e.length-p-(o?1:0);g<p;++g,++y){let b=e[y],x=c?b*s[g]:l[g],$=fd(b,s[g],a[g],t[y],n[g],x);md($,r,a,g,g+p),c&&l.push(s[g]*(b-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+p])}l.splice(0,0,f),l.splice(o?3:1,0,m)},Li=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}gd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),p},yd=e=>{let t=ki(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),p=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},wd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Fi=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(it(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(hd(a,n,r),{inputs:a})},_d=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Li({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Fi(e,r,l,p=>n?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},bd=(e,t)=>{if(wd(e.inputs,t),e.inputs[0].dims.length===3)_d(e,t);else{let n=Li(t,e.inputs);Fi(e,e.inputs,n)}}}),$d,xd,vd,e0=Q(()=>{le(),pe(),De(),he(),$d=(e,t,n,r)=>{let i=D.size(t),a=t.length,s=G("input",e,a),o=re("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=D.normalizeAxis(u,a),p=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=ae("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",y=r.reverse?m:f+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...oe(t,t)]}),getShaderSource:p}},xd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute($d(r,n,i,t),{inputs:[0]})},vd=e=>{let t=e.exclusive===1,n=e.reverse===1;return xe({exclusive:t,reverse:n})}}),Sd,Td,Id,kd,Ed,t0=Q(()=>{le(),pe(),De(),he(),Sd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Td=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Id=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,p=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=p?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,m=e.dataType,g=G("a",m,f),y=re("output",m,f),b=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Td(o,f,g,y)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let $=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=D.size($),S=c.dims,k=D.sortBasedOnPerm(S,o);return{outputs:[{dims:$,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...oe(S,k)]}},getShaderSource:b}},kd=(e,t)=>{Sd(e.inputs),e.compute(Id(e.inputs[0],t))},Ed=e=>xe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),cr,On,Gi,Cd,Md,Ad,Rd,Wi,zd,Od,Nd,n0=Q(()=>{le(),pe(),De(),he(),cr="[a-zA-Z]|\\.\\.\\.",On="("+cr+")+",Gi="^"+On+"$",Cd="("+On+",)*"+On,Md="^"+Cd+"$",Ad=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Rd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Md)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Gi)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(On)))throw new Error("Invalid RHS");(i=r.match(RegExp(cr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(Gi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(cr,"g")),l=new Ad(r);return u==null||u.forEach((p,c)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else l.addSymbol(p,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,n[o++],r)}),l}},Wi=e=>e+"_max",zd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,p)=>G(`input${p}`,t,l)),a=D.size(r),s=re("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let p=[],c="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],y=[],b=[],x=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,k)=>{var E;if(n.rhs.symbolToIndices.has(k)){let C=(E=n.rhs.symbolToIndices.get(k))==null?void 0:E[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let O=v.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(j=>{p.push(`${i[R].indicesSet(`input${R}Indices`,j,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(k);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(O=>{g.push(`${i[v].indicesSet(`input${v}Indices`,O,`${k}`)}`)}),x.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${Wi(k)}; ${k}++) {`),b.push("}")});let T=$?[...p,`let sum = ${i.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...p,f,...y,...g,c,...x,m,...b];return`
            ${l.registerUniforms(o.map(S=>({name:`${Wi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var f;return{type:12,data:((f=n.symbolToInfo.get(c))==null?void 0:f.dimValue)||0}});l.push({type:12,data:a});let p=e.map((c,f)=>[...oe(c)]).reduce((c,f)=>c.concat(f),l);return p.push(...oe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},Od=(e,t)=>{let n=new Rd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(zd(i,e.inputs[0].dataType,n,r))},Nd=e=>{let t=e.equation.replace(/\s+/g,"");return xe({equation:t})}}),Bd,qi,Dd,Pd,Ud,r0=Q(()=>{le(),pe(),he(),Bd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},qi=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Dd=(e,t)=>e.length>t.length?qi(e,t):qi(t,e),Pd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Dd(t,n),i=e[0].dataType,a=i===9||D.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),l=c=>{let f=G("input",i,t.length,s),m=re("output",i,r.length,o),g;if(i===9){let y=(b,x,$="")=>`
          let outputIndices${x} = ${m.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${f.broadcastedIndicesToOffset(`outputIndices${x}`,m)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${b}[${x}] = ${$}(${f.getByOffset(`index${x}`)}[component${x}]);
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
    ${g}`},p=[{type:12,data:u},...oe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Ud=e=>{Bd(e.inputs),e.compute(Pd(e.inputs),{inputs:[0]})}}),Ld,Fd,i0=Q(()=>{le(),pe(),he(),Ii(),Ld=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,a=s=>{let o=G("x",t,[1],4),u=G("bias",t,[1],4),l=re("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,l)}

    ${Si(Qe(t))}

    ${s.mainStart(fn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Ti("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/fn/4)}})}},Fd=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?$l(e):e.compute(Ld(e.inputs))}}),Gd,Wd,qd,Vd,a0=Q(()=>{le(),pe(),De(),he(),Gd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(D.size(s)/u),p=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...oe(e[0].dims,e[1].dims,s)],c=f=>{let m=G("data",e[0].dataType,e[0].dims.length,u),g=G("inputIndices",e[1].dataType,e[1].dims.length),y=re("output",e[0].dataType,s.length,u),b=$=>{let T=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let k=0;k<T;k++)S+=`${T>1?`indicesIndices${$}[${k}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${k}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let k=0,E=0;k<i;k++)k===a?(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = u32(idx${$});`,E+=T):(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${E}]`:`outputIndices${$}`};`,E++);return S},x;if(e[0].dataType===9){let $=(T,S,k="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${k}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${b("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c}},qd=e=>xe({axis:e.axis}),Vd=(e,t)=>{let n=e.inputs;Gd(n),e.compute(Wd(e.inputs,t))}}),Hd,jd,Kd,s0=Q(()=>{le(),pe(),he(),Hd=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];l.push(...oe(t.dims,p));let c=f=>{let m=G("indices_data",t.dataType,t.dims.length),g=re("input_slice_offsets_data",12,1,1),y=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},jd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=D.sizeToDimension(a,a.length-1),u=D.sizeFromDimension(r,t.batchDims+s),l=D.sizeToDimension(r,t.batchDims),p=D.sizeFromDimension(r,t.batchDims),c=o/l,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=Hd(e,n[1],f,t.batchDims,r,o,c,p,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(y)),x=D.size(b),$=[{type:12,data:x},{type:12,data:u},...oe(n[0].dims,g.dims,b)],T=S=>{let k=G("data",n[0].dataType,n[0].dims.length),E=G("slice_offsets",12,g.dims.length),C=re("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,E,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:$}),getShaderSource:T},{inputs:[n[0],g]})},Kd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Xd,Yd,Zd,Qd,o0=Q(()=>{le(),pe(),De(),he(),Xd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Yd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.gatherAxis,i),s=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=D.size(o),l=e[2].dataType,p=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...oe(...e.map((m,g)=>m.dims),o)],f=m=>{let g=G("data",e[0].dataType,e[0].dims.length),y=G("inputIndices",e[1].dataType,e[1].dims.length),b=G("scales",e[2].dataType,e[2].dims.length),x=e.length>3?G("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=re("output",l,o.length),T=[g,y,b];x&&T.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...T,$)}
        ${m.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${r.length} - 1`)};
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
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Qe(l)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}},Zd=(e,t)=>{let n=e.inputs;Xd(n,t),e.compute(Yd(e.inputs,t))},Qd=e=>xe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Jd,ec,tc,nc,u0=Q(()=>{le(),pe(),De(),he(),Jd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ec=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),p=D.size(l),c=G("input",r,i),f=G("indicesInput",s,a.length),m=re("output",r,l.length),g=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return g.push(...oe(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y=>`
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
  }`}},tc=e=>xe({axis:e.axis}),nc=(e,t)=>{let n=e.inputs;Jd(n),e.compute(ec(e.inputs,t))}}),rc,ic,ac,sc,l0=Q(()=>{le(),pe(),he(),rc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ic=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=mo.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),p=Math.ceil(i/u),c=!0,f=D.size(o),m=[{type:12,data:c?l:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...oe(e[2].dims)),g.push("rank")),m.push(...oe(o));let y=x=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=G("a",e[0].dataType,e[0].dims),k=G("b",e[1].dataType,e[1].dims),E=S.type.value,C=null,v=[S,k];e.length===3&&(C=G("c",e[2].dataType,e[2].dims.length),v.push(C));let R=re("output",e[0].dataType,o.length);v.push(R);let O=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(O).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=x=>{let $=G("a",e[0].dataType,e[0].dims),T=G("b",e[1].dataType,e[1].dims),S=null,k=[$,T];e.length===3&&(S=G("c",e[2].dataType,e[2].dims.length),k.push(S));let E=re("output",e[0].dataType,o.length);k.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let O=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${x.mainStart([u,u,1])}
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
        ${v}
      }
      workgroupBarrier();
    }

    ${O}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*p},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},ac=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},sc=(e,t)=>{rc(e.inputs),e.compute(ic(e.inputs,t))}}),bt,Mt,rn,an,oc,uc,lc,dc,cc,pc,hc,fc,mc,gc,d0=Q(()=>{le(),pe(),De(),he(),[bt,Mt,rn,an]=[0,1,2,3],oc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},uc=`
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
`,lc=e=>`
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
`,dc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,cc=e=>`
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
`,pc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${bt}] = batch;
     indices[${Mt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
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
`,hc=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${bt}], indices[${Mt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${bt}], indices[${Mt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${bt}], indices[${Mt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${bt}], indices[${Mt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${bt}], indices[${Mt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${bt}], indices[${Mt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,fc=(e,t)=>{let n=G("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=G("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[bt,Mt,rn,an]=[0,3,1,2]);let s=re("output",e[0].dataType,a.length),o=n.type.value,u=D.size(a),l=[{type:12,data:u},...oe(e[0].dims,r,a)],p=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${uc}
  ${lc(o)}
  ${dc(t)}
  ${cc(t)}
  ${pc(n,o,t)}

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
      var grid_indices = vec3<u32>(indices[${bt}], indices[${rn}], indices[${an}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${hc(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=D.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:l}},getShaderSource:p}},mc=(e,t)=>{oc(e.inputs),e.compute(fc(e.inputs,t))},gc=e=>xe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),et,yc,wc,Vi,_c,Nn,bc,$c=Q(()=>{le(),pe(),De(),ci(),xi(),he(),Bt(),et=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,yc=(e,t)=>{let n=e[0],r=et(e,1),i=et(e,2),a=et(e,3),s=et(e,4),o=et(e,5),u=et(e,6),l=et(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=n.dims[0],c=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,b=Math.floor(f/t.numHeads);if(u&&l&&D.size(u.dims)&&D.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&D.size(u.dims)||l&&D.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,T=0;if(s&&D.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===p?T=1:C[0]===3*p+2&&(T=3):C.length===2&&C[0]===p&&C[1]===$&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let E=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:S,qkvFormat:x}},wc=e=>xe({...e}),Vi=xe({perm:[0,2,1,3]}),_c=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=D.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=c=>{let f=re("qkv_with_bias",t.dataType,o),m=G("qkv",t.dataType,o),g=G("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},Nn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&D.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=_c(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(it(u,Vi.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(it(u,Vi.perm),{inputs:[u],outputs:[-1]})[0]},bc=(e,t)=>{let n=yc(e.inputs,t),r=e.inputs[0],i=et(e.inputs,1),a=et(e.inputs,2),s=et(e.inputs,3),o=et(e.inputs,4),u=et(e.inputs,5),l=et(e.inputs,6),p=et(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,f=Nn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return Mn(e,f,i,a,o,void 0,l,p,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=Nn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=Nn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);Mn(e,f,m,g,o,void 0,l,p,u,n)}}),xc,vc,Sc,Tc,Hi,Ic,kc,Ec=Q(()=>{le(),pe(),De(),he(),xc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},vc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),xe({numOutputs:r,axis:t.axis,splitSizes:n})},Sc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Tc=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Hi=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,a=D.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=G("input",i,n.length),u=new Array(t.numOutputs),l=[],p=[],c=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],p.push(y),s[g]=re(`output${g}`,i,y.length),l.push({dims:p[g],dataType:e[0].dataType})}f.push({type:12,data:u},...oe(n,...p));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Sc(u.length)}
  ${Tc(s)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Ic=(e,t)=>{xc(e.inputs);let n=e.inputs.length===1?t:vc(e.inputs,t);e.compute(Hi(e.inputs,n),{inputs:[0]})},kc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return xe({axis:t,numOutputs:r,splitSizes:n})}}),Cc,pr,Mc,Ac=Q(()=>{le(),pe(),De(),he(),Cc=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],p=i.dims[0],c=D.sizeFromDimension(n.dims,1)/l,f=o===0?i.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},pr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,p=e[2].dims[1],c=i===0?p*2:l/r,f=new Array(s,u,l/c,c-p),m=D.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...oe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=b=>{let x=G("input",e[0].dataType,e[0].dims.length),$=G("position_ids",e[1].dataType,e[1].dims.length),T=G("cos_cache",e[2].dataType,e[2].dims.length),S=G("sin_cache",e[3].dataType,e[3].dims.length),k=re("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables(x,$,T,S,k)}

        ${b.mainStart(fn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",re("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/fn)},programUniforms:g})}},Mc=(e,t)=>{Cc(e.inputs,t),e.compute(pr(e.inputs,t))}}),Rc,zc,ji,Oc,Nc,c0=Q(()=>{De(),le(),xi(),$c(),Ec(),Bt(),Ac(),he(),Rc=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],p=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,f=0,m=!r||r.dims.length===0,g=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=g*t.numHeads);let y=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(y||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let $=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=k.dims.reduce((C,v)=>C*v,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let C=0;C<k.dims.length;C++)if(k.dims[C]!==1&&k.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${k.dims[C]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:x}},zc=xe({perm:[0,2,1,3]}),ji=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(it(r,zc.perm),{inputs:[r],outputs:[-1]})[0]),r},Oc=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=p=>{let c=G("seq_lens",n.dataType,n.dims),f=G("total_seq_lens",r.dataType,r.dims),m=re("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Nc=(e,t)=>{var S;let n=Rc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=xe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,p*n.headSize,p*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Hi([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,b;if(t.doRotary){let k=e.compute(Oc(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],C=e.inputs[8],v=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,k,E,C],O=[-1];y=e.compute(pr(R,v),{inputs:R,outputs:O})[0],R.splice(0,1,m);let j=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(pr(R,j),{inputs:R,outputs:O})[0]}let x=Nn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:f,void 0,0),$=ji(e,t.doRotary?b:m,n),T=ji(e,g,n);Mn(e,x,$,T,void 0,void 0,s,o,void 0,n,u,l)}}),Ki,Bc,Dc,Pc,p0=Q(()=>{le(),pe(),Bt(),he(),Ki=(e,t,n,r,i,a,s,o)=>{let u=Be(a),l=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,c=i*s,f=64;c===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],y=["rank","type","type"],b=[];b.push(...oe(m,g));let x=$=>{let T=G("x",t.dataType,3,u),S=G("scale",n.dataType,n.dims),k=G("bias",r.dataType,r.dims),E=re("output",1,3,2),C=[T,S,k,E];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${$.declareVariables(...C)}
  ${$.mainStart(f)}
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
      let sum_final = ${Nt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Nt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:x},{inputs:[t,n,r],outputs:[-1]})[0]},Bc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=D.sizeFromDimension(r,a),l=Be(u),p=D.size(i)/l,c=Ki(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/l],m=[s,o],g=["type","none"],y=b=>{let x=G("x",t[0].dataType,f.length,l),$=G("scale_shift",1,m.length,2),T=re("output",t[0].dataType,f.length,l),S=[x,$,T];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...oe(f,m,f)]}),getShaderSource:y},{inputs:[t[0],c]})},Dc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=D.sizeFromDimension(r,1)/s,u=Be(s),l=D.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],f=!1,m=[0,r.length-1];for(let x=0;x<r.length-2;x++)f=f||r[x+1]!==1,m.push(x+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(it(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(x,$)=>r[m[$]])),y=Ki(e,g,t[1],t[2],a,o,s,n.epsilon),b=x=>{let $=We(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${R}(scale.${v}))`;case 2:return`vec2<${$}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=G("input",t[0].dataType,t[0].dims,u),E=re("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:b},{inputs:[t[0],y]})},Pc=(e,t)=>{t.format==="NHWC"?Dc(e,e.inputs,t):Bc(e,e.inputs,t)}}),Uc,Lc,Fc,h0=Q(()=>{le(),pe(),he(),Uc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Lc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),l=D.sizeToDimension(i,u),p=D.sizeFromDimension(i,u),c=D.size(a.dims),f=s?D.size(s.dims):0;if(c!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Be(p),y=["type","type"],b=[{type:12,data:l},{type:1,data:p},{type:12,data:Math.floor(p/g)},{type:1,data:t.epsilon}];s&&y.push("type");let x=n>1,$=n>2,T=k=>{let E=We(e[0].dataType),C=[G("x",e[0].dataType,e[0].dims,g),G("scale",a.dataType,a.dims,g)];s&&C.push(G("bias",s.dataType,s.dims,g)),C.push(re("output",e[0].dataType,o,g)),x&&C.push(re("mean_data_output",1,m)),$&&C.push(re("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(v).declareVariables(...C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${mi("f32",g)};
    var mean_square_vector = ${mi("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${mn(E,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Nt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Nt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${mn(E,g,"x[j + offset]")};
      let f32scale = ${mn(E,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${mn(E,g,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:b}),getShaderSource:T}},Fc=(e,t)=>{Uc(e.inputs),e.compute(Lc(e.inputs,t,e.outputCount))}}),Gc,Wc,f0=Q(()=>{pe(),Mi(),Oi(),Gc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wc=e=>{Gc(e.inputs);let t=hn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ci(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],p=[o,u];e.compute(ur(p,{activation:""},t,l),{inputs:p})}else e.compute(ur(e.inputs,{activation:""},t))}}}),qc,Vc,Hc,jc,Kc,m0=Q(()=>{le(),pe(),De(),he(),qc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==l)throw new Error("zeroPoints input size error.")}},Vc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=Be(t.k),f=Be(l),m=Be(s),g=o.concat([i,s]),y=i>1&&s/m%2===0?2:1,b=D.size(g)/m/y,x=64,$=[],T=[u,i,a/c],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),$.push(...oe(T)),$.push(...oe(S)),$.push(...oe(e[2].dims)),e.length===4&&$.push(...oe(D.convertShape(e[3].dims)));let k=[u,i,s/m];$.push(...oe(k));let E=C=>{let v=T.length,R=G("a",e[0].dataType,v,c),O=G("b",12,S.length,f),j=G("scales",e[2].dataType,e[2].dims.length),P=[R,O,j],F=e.length===4?G("zero_points",12,e[3].dims.length):void 0;F&&P.push(F);let A=k.length,B=re("output",e[0].dataType,A,m),V=We(e[0].dataType),X=(()=>{switch(c){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${c}-component is not supported.`)}})(),ne=Math.floor(32/t.bits),N=Math.floor(ne/8),ee=()=>{let K="";for(let W=0;W<N;W++){let ue=W*t.bits*4,ce=ue+t.bits;K+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${X};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/c}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${R.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let ie=0;ie<m*y;ie++)K+=`
            b_value = ${f===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ue}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ce}u) & b_mask);`}
            b_quantized_values = ${X}(${Array.from({length:4},(_e,Re)=>`${V}(b_value_lower[${Re}]), ${V}(b_value_upper[${Re}])`).join(", ")});
            b_dequantized_values = ${c===1?`${X}(${Array.from({length:8},(_e,Re)=>`(b_quantized_values[${Re}] - ${F?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${F?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/c},(_e,Re)=>`${c===1?`a_data${W>0?W:""}[${Re}] * b_dequantized_values[${Re}]`:`dot(a_data${W>0?W:""}[${Re}], b_dequantized_values[${Re}])`}`).join(" + ")};
          `}return K},U=()=>{let K=`
            var col_index = col * ${m};
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
            let zero_point = ${V}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let W=0;W<m*y;W++)K+=`
            let scale${W} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${V}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return K},Z=()=>{let K=`col_index = col * ${m};`;for(let W=0;W<m*y;W++)K+=`
            let b${W}_data = ${O.getByIndices(`${O.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,K};return`
        var<workgroup> workgroup_shared: array<${B.type.value}, ${y*x}>;
        ${C.declareVariables(...P,B)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${B.offsetToIndices(`(global_idx / ${x}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${U()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${Z()}
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
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${B.setByIndices(`${B.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${m};${y};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:$}),getShaderSource:E}},Hc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=Be(t.k),f=Be(l),m=o.concat([i,s]),g=128,y=s%8===0?8:s%4===0?4:1,b=g/y,x=Math.floor(32/t.bits),$=b*f*x,T=$/c,S=$/t.blockSize,k=D.size(m)/y,E=[],C=[u,i,a/c],v=D.convertShape(e[1].dims).slice();v.splice(-1,1,l/f),E.push(...oe(C)),E.push(...oe(v)),E.push(...oe(e[2].dims)),e.length===4&&E.push(...oe(D.convertShape(e[3].dims)));let R=[u,i,s];E.push(...oe(R));let O=j=>{let P=C.length,F=G("a",e[0].dataType,P,c),A=G("b",12,v.length,f),B=G("scales",e[2].dataType,e[2].dims.length),V=[F,A,B],X=e.length===4?G("zero_points",12,e[3].dims.length):void 0;X&&V.push(X);let ne=R.length,N=re("output",e[0].dataType,ne),ee=We(e[0].dataType),U=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${N.type.value}, ${b}>, ${y}>;
        ${j.declareVariables(...V,N)}
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
                sub_a[a_offset] = ${F.getByIndices(`${F.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${F.type.value}(0);
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
              ${(()=>{let Z=Math.floor(x/8),K="";for(let W=0;W<Z;W++){let ue=W*t.bits*4,ce=ue+t.bits;K+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${b};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:k},programUniforms:E}),getShaderSource:O}},jc=(e,t)=>{qc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Hc(e.inputs,t)):e.compute(Vc(e.inputs,t))},Kc=e=>xe(e)}),Xc,Yc,Zc,Qc,Jc,ep,tp,np,rp,g0=Q(()=>{le(),pe(),he(),Xc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Yc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},Zc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Qc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Jc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},ep=(e,t,n)=>{switch(n.mode){case 0:return Yc(e,t,n.pads.length);case 1:return Zc(e,t,n.pads.length);case 2:return Qc(e,t,n.pads.length);case 3:return Jc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},tp=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...oe(e[0].dims,n));let o=["rank"],u=l=>{let p=re("output",e[0].dataType,n.length),c=G("x",e[0].dataType,r.length),f=c.type.value,m=ep(p,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,p)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:a}),getShaderSource:u}},np=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},rp=(e,t)=>{Xc(e.inputs);let n=np(e.inputs,t);e.compute(tp(e.inputs,n),{inputs:[0]})}}),Bn,Xi,Yi,Zi,Qi,ip,ap,Ji,ea,sp,op,ta,up,lp,na,dp,cp,pp,hp,y0=Q(()=>{st(),le(),pe(),he(),Bn=e=>{if(Ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Xi=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();tr.adjustPoolAttributes(n,i,s,o,u,l);let p=tr.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[c,r?f:p]},Yi=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],c=!!(l+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(y+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,p)=>l+p);return[a,s,!!u,!1,!1]}},Zi=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f=i.format==="NHWC",m=t.type.value,g=re("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",b="",x="",$=n-(f?2:1);if(p?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
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
                `,x=`
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
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,b=i.pads.length,x="";return l?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:x=`
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
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},Qi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ip=e=>`${Qi(e)};${e.countIncludePad}`,ap=e=>`${Qi(e)};${e.storageOrder};${e.dilations}`,Ji=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ea=(e,t,n,r)=>{let[i,a]=Xi(t,r,n),s=G("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,c,f,m,g]=Yi(a,i);p.push(...oe(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:b=>Zi(b,s,t.dims.length,a.length,i,u,l,0,c,f,m,g)}},sp=e=>{let t=e.count_include_pad!==0,n=Ji(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:ip(r)}},op=(e,t)=>{Bn(e.inputs),e.compute(ea("AveragePool",e.inputs[0],!1,t))},ta={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},up=e=>{let t=e.format;return{format:t,...ta,cacheKey:t}},lp=(e,t)=>{Bn(e.inputs),e.compute(ea("GlobalAveragePool",e.inputs[0],!0,t))},na=(e,t,n,r)=>{let[i,a]=Xi(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=G("x",t.dataType,t.dims.length),l=["rank"],[p,c,f,m,g]=Yi(a,i);return p.push(...oe(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:y=>Zi(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,f,m,g)}},dp=(e,t)=>{Bn(e.inputs),e.compute(na("MaxPool",e.inputs[0],!1,t))},cp=e=>{let t=e.storage_order,n=e.dilations,r=Ji(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:ap(i)}},pp=e=>{let t=e.format;return{format:t,...ta,cacheKey:t}},hp=(e,t)=>{Bn(e.inputs),e.compute(na("GlobalMaxPool",e.inputs[0],!0,t))}}),fp,mp,gp,yp,w0=Q(()=>{le(),pe(),De(),he(),fp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},mp=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=D.size(a),u=r===3||r===2,l=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,f=c?u?[Math.ceil(D.size(c.dims)/4)]:c.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,g=m===!1&&p.length===1,y=Be(o),b=m&&(!u||y===4),x=b?y:1,$=b&&!u?y:1,T=G("input",u?12:r,l.length,$),S=G("scale",s,p.length),k=c?G("zero_point",u?12:r,f.length):void 0,E=re("output",s,a.length,x),C=[T,S];k&&C.push(k);let v=[l,p];c&&v.push(f);let R=[{type:12,data:o/x},{type:12,data:n},{type:12,data:t.blockSize},...oe(...v,a)],O=j=>{let P=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(P).declareVariables(...C,E)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?m?u?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:g?u?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:O,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:R})}},gp=(e,t)=>{fp(e.inputs,t),e.compute(mp(e.inputs,t))},yp=e=>xe({axis:e.axis,blockSize:e.blockSize})}),wp,_p,bp,_0=Q(()=>{st(),le(),he(),wp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},_p=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...oe(a)],u=l=>{let p=re("output",r,a.length),c=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(f).declareVariables(p)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},bp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&wp(t,n,r),e.compute(_p(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),$p,xp,vp,Sp,b0=Q(()=>{le(),pe(),De(),he(),$p=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},xp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(D.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=D.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...oe(e[1].dims,e[2].dims,i)],p=c=>{let f=G("indices",e[1].dataType,e[1].dims.length),m=G("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Mo("output",e[0].dataType,i.length):re("output",e[0].dataType,i.length,a);return`
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
    ${$p(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p}},vp=e=>xe({reduction:e.reduction}),Sp=(e,t)=>{e.compute(xp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Tp,Ip,kp,ra,Ep,Cp,Mp,Ap,Rp,zp,Op,Np,ia,Bp,Dp,Pp,Up,Lp,Fp,Gp,$0=Q(()=>{le(),pe(),De(),he(),Tp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ip=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},kp=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>r.push(p)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Tp(r,t),t.axes.length>0&&Ip(r,t.axes,l).forEach((p,c)=>r[c]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},ra=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Ep=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ra("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ra("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Cp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Mp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Ap=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Rp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},zp=(e,t,n,r,i)=>`
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
    }`,Op=(e,t,n,r,i,a,s)=>`
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
    }`,Np=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ia=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Bp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${ia(e,u,a,2)}
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
    }`},Dp=(e,t,n,r,i,a,s,o,u,l)=>{let p=n.length===2,[c,f]=p?[0,1]:[2,3],m=e.type.value,g=y=>{let b=y===c?"row":"col";return`
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
    `},Pp=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${ia(e,l,a,3)}
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
    }`},Up=(e,t,n,r,i,a)=>{let s=e.dims,o=Mp(a,t.axes,s.length),u=Ap(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map(($,T)=>$===0?1:u[T]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=Rp(s,l,t)));let p=re("output",e.dataType,u.length),c=G("input",e.dataType,s.length),f=D.size(u),m=s.length===u.length&&s.every(($,T)=>$===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,b=c.type.value,x=$=>`
      ${m?"":`
      ${Ep(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Np(c,s)};
              ${Cp(t.nearestMode,n,b)};
              ${Op(c,p,s,u,l.length,o.length,g)};
              `;case"linear":return`
              ${zp(p,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Bp(c,p,s,g,y)}`;if(s.length===3||s.length===5)return`${Pp(c,p,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Dp(c,p,s,u,l,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,p)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:o},...oe(s,u)]})}},Lp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Fp=(e,t)=>{let n=[],r=[],i=[],a=Lp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");kp(e.inputs,t,a,n,r,i),e.compute(Up(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Gp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return xe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Wp,qp,Vp,x0=Q(()=>{le(),pe(),he(),Wp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},qp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=D.size(a),o=a,u=s,l=a.slice(-1)[0],p=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,b=64,x=Be(l),$=[{type:12,data:u},{type:12,data:x},{type:12,data:l},{type:1,data:t.epsilon}],T=k=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[G("x",e[0].dataType,e[0].dims,x),G("skip",e[1].dataType,e[1].dims,x),G("gamma",e[2].dataType,e[2].dims,x)];c&&C.push(G("beta",e[3].dataType,e[3].dims,x)),f&&C.push(G("bias",e[4].dataType,e[4].dims,x)),C.push(re("output",e[0].dataType,o,x)),m&&C.push(re("mean_output",1,p)),g&&C.push(re("inv_std_output",1,p)),y&&C.push(re("input_skip_bias_sum",e[0].dataType,o,x));let v=We(e[0].dataType),R=We(1,x);return`

      ${k.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${b}>;
      var<workgroup> sum_squared_shared : array<${R}, ${b}>;

      ${k.mainStart([b,1,1])}
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
          let f32_value = ${mn(v,x,"value")};
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
        let mean = ${Nt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Nt("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:p,dataType:1}),n>2&&S.push({dims:p,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${m};${g};${y}`,inputDependencies:e.map((k,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:$})}},Vp=(e,t)=>{Wp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(qp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Hp,Dn,jp,aa,Kp,Xp,Yp,Zp,v0=Q(()=>{le(),pe(),De(),he(),Hp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Dn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},jp=(e,t)=>{if(e.length>1){let n=Dn(e,1),r=Dn(e,2),i=Dn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),xe({starts:n,ends:r,axes:i})}else return t},aa=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Kp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Xp=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Dn(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((x,$)=>aa(x,$,n,i,a)),o=t.ends.map((x,$)=>aa(x,$,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let x=0;x<n.length;++x)i.includes(x)||(s.splice(x,0,0),o.splice(x,0,n[x]),a.splice(x,0,1));let u=a.map(x=>Math.sign(x));a.forEach((x,$,T)=>{if(x<0){let S=(o[$]-s[$])/x,k=s[$],E=k+S*a[$];s[$]=E,o[$]=k,T[$]=-x}});let l=n.slice(0);i.forEach((x,$)=>{l[x]=Math.ceil((o[x]-s[x])/a[x])});let p={dims:l,dataType:e[0].dataType},c=re("output",e[0].dataType,l.length),f=G("input",e[0].dataType,e[0].dims.length),m=D.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...oe(e[0].dims,l)],b=x=>`
      ${x.registerUniforms(g).declareVariables(f,c)}
        ${Kp(f,c,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Yp=(e,t)=>{Hp(e.inputs,t);let n=jp(e.inputs,t);e.compute(Xp(e.inputs,n),{inputs:[0]})},Zp=e=>{let t=e.starts,n=e.ends,r=e.axes;return xe({starts:t,ends:n,axes:r})}}),Qp,Jp,eh,th,S0=Q(()=>{le(),pe(),De(),Bt(),he(),Qp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Jp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),a=r.length,s=D.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(C,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(it(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let p=u.dims,c=p[a-1],f=i/c,m=Be(c),g=c/m,y=64;f===1&&(y=256);let b=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=G("x",u.dataType,u.dims,m),$=re("result",u.dataType,u.dims,m),T=x.type.value,S=We(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,k=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables(x,$)}
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
          rowSumShared = ${T}(${Nt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(it(E,l),{inputs:[E]})},eh=(e,t)=>{Qp(e.inputs),Jp(e,t)},th=e=>xe({axis:e.axis})}),sa,nh,rh,ih,ah,T0=Q(()=>{le(),pe(),he(),sa=e=>Array.from(e.getBigInt64Array(),Number),nh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(sa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rh=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},ih=(e,t)=>{let n=e[0].dims,r=t??sa(e[1]),i=rh(n,r),a=D.size(i),s=e[0].dataType,o=G("input",s,n.length),u=re("output",s,i.length),l=p=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...oe(e[0].dims,i)]}),getShaderSource:l}},ah=e=>{nh(e.inputs),e.compute(ih(e.inputs),{inputs:[0]})}}),sh,oh,uh,I0=Q(()=>{le(),pe(),he(),sh=(e,t,n,r,i)=>{let a=re("output_data",i,n.length,4),s=G("a_data",t[1].dataType,t[1].dims.length,4),o=G("b_data",t[2].dataType,t[2].dims.length,4),u=G("c_data",t[0].dataType,t[0].dims.length,4),l,p=(c,f,m)=>`select(${f}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(f,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,x=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${g}(${p(y,b,x)});
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
      }`},oh=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,n)&&D.areEqual(n,r)),s=t,o=D.size(t);if(a){let l=hn.calcShape(hn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>sh(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...oe(r,t,n,s)]})}},uh=e=>{e.compute(oh(e.inputs))}}),lh,k0=Q(()=>{Fg(),xi(),Gg(),Wg(),qg(),Vg(),Hg(),Zg(),Jg(),e0(),t0(),n0(),r0(),i0(),a0(),s0(),o0(),u0(),l0(),d0(),c0(),p0(),h0(),f0(),m0(),$c(),g0(),y0(),w0(),_0(),b0(),_i(),$0(),Ac(),x0(),v0(),S0(),Ec(),T0(),Bt(),Ii(),I0(),lh=new Map([["Abs",[Wu]],["Acos",[qu]],["Acosh",[Vu]],["Add",[Rl]],["ArgMax",[Eu,$i]],["ArgMin",[ku,$i]],["Asin",[Hu]],["Asinh",[ju]],["Atan",[Ku]],["Atanh",[Xu]],["Attention",[Ou]],["AveragePool",[op,sp]],["BatchNormalization",[Pu]],["BiasAdd",[Fu]],["BiasSplitGelu",[Cl]],["Cast",[Zu,Yu]],["Ceil",[el]],["Clip",[Ju]],["Concat",[Hl,jl]],["Conv",[Ui,Di]],["ConvTranspose",[bd,yd]],["Cos",[tl]],["Cosh",[nl]],["CumSum",[xd,vd]],["DepthToSpace",[kd,Ed]],["DequantizeLinear",[gp,yp]],["Div",[zl]],["Einsum",[Od,Nd]],["Elu",[rl,An]],["Equal",[Ol]],["Erf",[il]],["Exp",[al]],["Expand",[Ud]],["FastGelu",[Fd]],["Floor",[sl]],["FusedConv",[Ui,Di]],["Gather",[Vd,qd]],["GatherElements",[nc,tc]],["GatherBlockQuantized",[Zd,Qd]],["GatherND",[jd,Kd]],["Gelu",[ol]],["Gemm",[sc,ac]],["GlobalAveragePool",[lp,up]],["GlobalMaxPool",[hp,pp]],["Greater",[Pl]],["GreaterOrEqual",[Ll]],["GridSample",[mc,gc]],["GroupQueryAttention",[Nc]],["HardSigmoid",[ml,fl]],["InstanceNormalization",[Pc]],["LayerNormalization",[Fc]],["LeakyRelu",[ul,An]],["Less",[Ul]],["LessOrEqual",[Fl]],["Log",[vl]],["MatMul",[Wc]],["MatMulNBits",[jc,Kc]],["MaxPool",[dp,cp]],["Mul",[Nl]],["MultiHeadAttention",[bc,wc]],["Neg",[dl]],["Not",[ll]],["Pad",[rp]],["Pow",[Bl]],["QuickGelu",[Il,An]],["Range",[bp]],["Reciprocal",[cl]],["ReduceMin",[xu]],["ReduceMean",[yu]],["ReduceMax",[$u]],["ReduceSum",[Su]],["ReduceProd",[vu]],["ReduceL1",[wu]],["ReduceL2",[_u]],["ReduceLogSum",[Iu]],["ReduceLogSumExp",[bu]],["ReduceSumSquare",[Tu]],["Relu",[pl]],["Resize",[Fp,Gp]],["RotaryEmbedding",[Mc]],["ScatterND",[Sp,vp]],["Sigmoid",[hl]],["Sin",[gl]],["Sinh",[yl]],["Slice",[Yp,Zp]],["SkipLayerNormalization",[Vp]],["Split",[Ic,kc]],["Sqrt",[wl]],["Softmax",[eh,th]],["Sub",[Dl]],["Tan",[_l]],["Tanh",[bl]],["ThresholdedRelu",[xl,An]],["Tile",[ah]],["Transpose",[Po,Uo]],["Where",[uh]]])}),dh,E0=Q(()=>{st(),Ct(),he(),dh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){_t(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ut(e.programInfo.name)}dispose(){}build(e,t){_t(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Ro(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return ut(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),ch={};cn(ch,{WebGpuBackend:()=>mh});var ph,hh,fh,mh,C0=Q(()=>{st(),le(),Ct(),wo(),Ug(),k0(),E0(),ph=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},hh=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${ph(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},fh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},mh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new fh(s),this.gpuDataManager=Eo(this),this.programManager=new dh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ni(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;_t(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,p=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:Et(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:Et(x.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:p,startTime:y,endTime:b});else{let x="";c.forEach((T,S)=>{x+=`input[${S}]: [${T.dims}] | ${Et(T.dataType)}, `});let $="";f.forEach((T,S)=>{$+=`output[${S}]: [${T.dims}] | ${Et(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${p}" ${x}${$}start time: ${y} ns, execution time: ${b-y} ns`)}Xn("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),ut()}run(e,t,n,r,i,a){_t(e.name);let s=[];for(let $=0;$<t.length;++$){let T=t[$].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),p=n.length===0?o.map(($,T)=>T):n;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let c=[],f=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(p[$])||p[$]<-3||p[$]>=a)throw new Error(`Invalid output index: ${p[$]}`);if(p[$]===-3)continue;let T=p[$]===-1,S=p[$]===-2,k=T||S?i(o[$].dataType,o[$].dims):r(p[$],o[$].dataType,o[$].dims);if(c.push(k),k.data===0)continue;let E=this.gpuDataManager.get(k.data);if(!E)throw new Error(`no GPU data for output: ${k.data}`);if(T&&this.temporaryData.push(E),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}f.push(E)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return ut(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let $=0,T=[];l.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,O,j;C.type===10?(j=v.length>4?16:v.length>2?8:v.length*R,O=v.length>4?16:R*v.length):(j=v.length<=2?v.length*R:16,O=16),$=Math.ceil($/j)*j,T.push($);let P=C.type===10?8:4;$+=v.length>4?Math.ceil(v.length/P)*O:v.length*R});let S=16;$=Math.ceil($/S)*S;let k=new ArrayBuffer($);l.forEach((C,v)=>{let R=T[v],O=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(k,R,O.length).set(O);else if(C.type===12)new Uint32Array(k,R,O.length).set(O);else if(C.type===10)new Uint16Array(k,R,O.length).set(O);else if(C.type===1)new Float32Array(k,R,O.length).set(O);else throw new Error(`Unsupported uniform type: ${Et(C.type)}`)});let E=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,k,0,$),this.gpuDataManager.release(E.id),m={offset:0,size:$,buffer:E.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,b=hh(e,t,y),x=this.programManager.getArtifact(b);if(x||(x=this.programManager.build(e,g),this.programManager.setArtifact(b,x),we("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),l&&x.uniformVariablesInfo){if(l.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${l.length} in program "${x.programInfo.name}".`);for(let $=0;$<l.length;$++){let T=l[$],S=T.type,k=typeof T.data=="number"?1:T.data.length,[E,C]=x.uniformVariablesInfo[$];if(S!==E||k!==C)throw new Error(`Uniform variable ${$} mismatch: expect type ${E} with size ${C}, got type ${S} with size ${k} in program "${x.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(x,s,f,g,m),ut(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=lh.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await fi(this,e,t);return ri(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),gh={};cn(gh,{init:()=>wh});var hr,yh,wh,M0=Q(()=>{le(),Ct(),pe(),Pg(),hr=class mg{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new mg(this.module,this.dataType,this.data,t)}},yh=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),p=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<c;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new hr(e,l,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new hr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=Qt(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let p=l>0?this.backend.gpuDataManager.create(l).id:0;return new hr(this.module,o,p,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},wh=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(C0(),Sn(ch)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,p=!1)=>{if(p)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,p)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new yh(t,s,Number(u));return s.computeKernel(Number(o),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new So(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,p)=>a.ensureTensor(s,o,u,l,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),_h,oa,ua,Dt,bh,la,fr,da,ca,pa,ha,fa,ma,$h=Q(()=>{st(),Ng(),Bg(),le(),Xt(),Zr(),oo(),_h=(e,t)=>{Me()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},oa=async e=>{_h(e.wasm.numThreads,er(e.logLevel))},ua=async(e,t)=>{var r,i;(i=(r=Me()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(M0(),Sn(gh)).init;t==="webgpu"&&await a("webgpu",Me(),e,n),t==="webnn"&&await a("webnn",Me(),e)}},Dt=new Map,bh=e=>{let t=Me(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Se("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},la=(e,t)=>{let n=Me(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Se("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],p=[];for(let c=0;c<l;c++){let f=Number(n.getValue(i+8+c*a,"*"));p.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(c+l)*a,"*")))}return[o,u,p]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},fr=e=>{let t=Me(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},da=async(e,t)=>{var c,f,m,g;let n,r,i=Me();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=fr(e);let a=0,s=0,o=0,u=[],l=[],p=[];try{if([s,u]=await so(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let O=typeof R=="string"?R:R.path;v.push(ti(typeof R=="string"?R:R.data).then(j=>{i.mountExternalData(O,j)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,O=R==null?void 0:R.context,j=R==null?void 0:R.gpuDevice,P=R==null?void 0:R.deviceType,F=R==null?void 0:R.powerPreference;O?i.currentContext=O:j?i.currentContext=await i.webnnCreateMLContext(j):i.currentContext=await i.webnnCreateMLContext({deviceType:P,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Se("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,b]=bh(a),x=!!(t!=null&&t.enableGraphCapture),$=[],T=[],S=[],k=[],E=[];for(let v=0;v<y;v++){let[R,O,j]=la(a,v);R===0&&Se("Can't get an input name."),l.push(R);let P=i.UTF8ToString(R);$.push(P),S.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Et(O),shape:j})}for(let v=0;v<b;v++){let[R,O,j]=la(a,v+y);R===0&&Se("Can't get an output name."),p.push(R);let P=i.UTF8ToString(R);T.push(P),k.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Et(O),shape:j});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[P])??"cpu",A=i.webnnIsGraphOutput;if(F==="cpu"&&A&&A(a,P)){E.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if(x&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(F)}}let C=null;return E.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Se("Can't create IO binding."),C={handle:o,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>ei(v))}),Dt.set(a,[a,l,p,C,x,!1]),[a,$,T,S,k]}catch(y){throw l.forEach(b=>i._OrtFree(b)),p.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Se("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Se("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Se("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},ca=e=>{var u,l,p;let t=Me(),n=Dt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Se("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Se("Can't release session."),Dt.delete(e)},pa=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Me(),u=o.PTR_SIZE,l=e[0],p=e[1],c=e[3],f=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;g=Qt(Zt(l),p);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,x,g)}}else if(c==="ml-tensor"){let x=e[2].mlTensor;g=Qt(Zt(l),p);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,x,Zt(l),p)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,m=o._malloc(g),n.push(m);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(m+$*u,lt(x[$],n),"*")}}else{let $=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&$&&T){let S=o.UTF8ToString(i);if($(r,S)||T(r,S)){let k=Zt(l);g=Qt(k,p),f="ml-tensor";let E=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!E||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await E(r,k,p);C(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),m=v}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}}let y=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach(($,T)=>o.setValue(b+T*u,$,u===4?"i32":"i64"));let x=o._OrtCreateTensor(Zt(l),m,g,b,p.length,ei(f));x===0&&Se(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(x)}finally{o.stackRestore(y)}},ha=async(e,t,n,r,i,a)=>{var P,F,A,B;let s=Me(),o=s.PTR_SIZE,u=Dt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],p=u[1],c=u[2],f=u[3],m=u[4],g=u[5],y=t.length,b=r.length,x=0,$=[],T=[],S=[],k=[],E=[],C=s.stackSave(),v=s.stackAlloc(y*o),R=s.stackAlloc(y*o),O=s.stackAlloc(b*o),j=s.stackAlloc(b*o);try{[x,$]=to(a),jt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)await pa(n[N],T,k,e,p[t[N]],t[N],m);for(let N=0;N<b;N++)await pa(i[N],S,k,e,c[r[N]],y+r[N],m);Kt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)s.setValue(v+N*o,T[N],"*"),s.setValue(R+N*o,p[t[N]],"*");for(let N=0;N<b;N++)s.setValue(O+N*o,S[N],"*"),s.setValue(j+N*o,c[r[N]],"*");if(f&&!g){let{handle:N,outputPreferredLocations:ee,outputPreferredLocationsEncoded:U}=f;if(p.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${p.length}).`);jt("wasm bindInputsOutputs");for(let Z=0;Z<y;Z++){let K=t[Z];await s._OrtBindInput(N,p[K],T[Z])!==0&&Se(`Can't bind input[${Z}] for session=${e}.`)}for(let Z=0;Z<b;Z++){let K=r[Z];(P=i[Z])!=null&&P[3]?(E.push(S[Z]),s._OrtBindOutput(N,c[K],S[Z],0)!==0&&Se(`Can't bind pre-allocated output[${Z}] for session=${e}.`)):s._OrtBindOutput(N,c[K],0,U[K])!==0&&Se(`Can't bind output[${Z}] to ${ee[Z]} for session=${e}.`)}Kt("wasm bindInputsOutputs"),Dt.set(e,[l,p,c,f,m,!0])}(F=s.jsepOnRunStart)==null||F.call(s,l),(A=s.webnnOnRunStart)==null||A.call(s,l);let V;f?V=await s._OrtRunWithBinding(l,f.handle,b,O,x):V=await s._OrtRun(l,R,v,y,j,b,O,x),V!==0&&Se("failed to call OrtRun().");let X=[],ne=[];jt("wasm ProcessOutputTensor");for(let N=0;N<b;N++){let ee=Number(s.getValue(O+N*o,"*"));if(ee===S[N]||E.includes(S[N])){X.push(i[N]),ee!==S[N]&&s._OrtReleaseTensor(ee)!==0&&Se("Can't release tensor.");continue}let U=s.stackSave(),Z=s.stackAlloc(4*o),K=!1,W,ue=0;try{s._OrtGetTensorData(ee,Z,Z+o,Z+2*o,Z+3*o)!==0&&Se(`Can't access output tensor data on index ${N}.`);let ce=o===4?"i32":"i64",ie=Number(s.getValue(Z,ce));ue=s.getValue(Z+o,"*");let _e=s.getValue(Z+o*2,"*"),Re=Number(s.getValue(Z+o*3,ce)),ze=[];for(let Y=0;Y<Re;Y++)ze.push(Number(s.getValue(_e+Y*o,ce)));s._OrtFree(_e)!==0&&Se("Can't free memory for tensor dims.");let Oe=ze.reduce((Y,q)=>Y*q,1);W=Et(ie);let H=f==null?void 0:f.outputPreferredLocations[r[N]];if(W==="string"){if(H==="gpu-buffer"||H==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Y=[];for(let q=0;q<Oe;q++){let se=s.getValue(ue+q*o,"*"),de=s.getValue(ue+(q+1)*o,"*"),Ie=q===Oe-1?void 0:de-se;Y.push(s.UTF8ToString(se,Ie))}X.push([W,ze,Y,"cpu"])}else if(H==="gpu-buffer"&&Oe>0){let Y=s.jsepGetBuffer;if(!Y)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let q=Y(ue),se=Qt(ie,Oe);if(se===void 0||!Qr(W))throw new Error(`Unsupported data type: ${W}`);K=!0,X.push([W,ze,{gpuBuffer:q,download:s.jsepCreateDownloader(q,se,W),dispose:()=>{s._OrtReleaseTensor(ee)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(H==="ml-tensor"&&Oe>0){let Y=s.webnnEnsureTensor,q=s.webnnIsGraphInputOutputTypeSupported;if(!Y||!q)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Qt(ie,Oe)===void 0||!Jr(W))throw new Error(`Unsupported data type: ${W}`);if(!q(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let se=await Y(e,ue,ie,ze,!1);K=!0,X.push([W,ze,{mlTensor:se,download:s.webnnCreateMLTensorDownloader(ue,W),dispose:()=>{s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ee)}},"ml-tensor"])}else if(H==="ml-tensor-cpu-output"&&Oe>0){let Y=s.webnnCreateMLTensorDownloader(ue,W)(),q=X.length;K=!0,ne.push((async()=>{let se=[q,await Y];return s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ee),se})()),X.push([W,ze,[],"cpu"])}else{let Y=Jn(W),q=new Y(Oe);new Uint8Array(q.buffer,q.byteOffset,q.byteLength).set(s.HEAPU8.subarray(ue,ue+q.byteLength)),X.push([W,ze,q,"cpu"])}}finally{s.stackRestore(U),W==="string"&&ue&&s._free(ue),K||s._OrtReleaseTensor(ee)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&Se("Can't clear bound outputs."),Dt.set(e,[l,p,c,f,m,!1]));for(let[N,ee]of await Promise.all(ne))X[N][2]=ee;return Kt("wasm ProcessOutputTensor"),X}finally{(B=s.webnnOnRunEnd)==null||B.call(s,l),s.stackRestore(C),T.forEach(V=>s._OrtReleaseTensor(V)),S.forEach(V=>s._OrtReleaseTensor(V)),k.forEach(V=>s._free(V)),x!==0&&s._OrtReleaseRunOptions(x),$.forEach(V=>s._free(V))}},fa=e=>{let t=Me(),n=Dt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Se("Can't get an profile file name."),t._OrtFree(i)},ma=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Pt,tt,gn,Pn,Un,mr,ga,gr,sn,on,xh,vh,Sh,Th,Ih,kh,Eh,Ch,Mh=Q(()=>{st(),$h(),Xt(),jr(),Pt=()=>!!Ce.wasm.proxy&&typeof document<"u",gn=!1,Pn=!1,Un=!1,gr=new Map,sn=(e,t)=>{let n=gr.get(e);n?n.push(t):gr.set(e,[t])},on=()=>{if(gn||!Pn||Un||!tt)throw new Error("worker not ready")},xh=e=>{switch(e.data.type){case"init-wasm":gn=!1,e.data.err?(Un=!0,ga[1](e.data.err)):(Pn=!0,ga[0]()),mr&&(URL.revokeObjectURL(mr),mr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=gr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},vh=async()=>{if(!Pn){if(gn)throw new Error("multiple calls to 'initWasm()' detected.");if(Un)throw new Error("previous call to 'initWasm()' failed.");if(gn=!0,Pt())return new Promise((e,t)=>{tt==null||tt.terminate(),Ys().then(([n,r])=>{try{tt=r,tt.onerror=a=>t(a),tt.onmessage=xh,ga=[e,t];let i={type:"init-wasm",in:Ce};!i.in.wasm.wasmPaths&&(n||Wr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),tt.postMessage(i),mr=n}catch(i){t(i)}},t)});try{await Yr(Ce.wasm),await oa(Ce),Pn=!0}catch(e){throw Un=!0,e}finally{gn=!1}}},Sh=async e=>{if(Pt())return on(),new Promise((t,n)=>{sn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ce}};tt.postMessage(r)});await ua(Ce,e)},Th=async e=>Pt()?(on(),new Promise((t,n)=>{sn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};tt.postMessage(r,[e.buffer])})):fr(e),Ih=async(e,t)=>{if(Pt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return on(),new Promise((n,r)=>{sn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),tt.postMessage(i,a)})}else return da(e,t)},kh=async e=>{if(Pt())return on(),new Promise((t,n)=>{sn("release",[t,n]);let r={type:"release",in:e};tt.postMessage(r)});ca(e)},Eh=async(e,t,n,r,i,a)=>{if(Pt()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return on(),new Promise((s,o)=>{sn("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};tt.postMessage(l,ma(u))})}else return ha(e,t,n,r,i,a)},Ch=async e=>{if(Pt())return on(),new Promise((t,n)=>{sn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};tt.postMessage(r)});fa(e)}}),ya,Ah,Rh,A0=Q(()=>{st(),Mh(),le(),Ur(),oo(),ya=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ah=e=>{switch(e[3]){case"cpu":return new Le(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Qr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Le.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Jr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Le.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Rh=class{async fetchModelAndCopyToWasmMemory(e){return Th(await ti(e))}async loadModel(e,t){_t();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ih(n,t),ut()}async dispose(){return kh(this.sessionId)}async run(e,t,n){_t();let r=[],i=[];Object.entries(e).forEach(c=>{let f=c[0],m=c[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],m=c[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((c,f)=>ya(c,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((c,f)=>c?ya(c,()=>`output "${this.outputNames[s[f]]}"`):null),l=await Eh(this.sessionId,i,o,s,u,n),p={};for(let c=0;c<l.length;c++)p[this.outputNames[s[c]]]=a[c]??Ah(l[c]);return ut(),p}startProfiling(){}endProfiling(){Ch(this.sessionId)}}}),zh={};cn(zh,{OnnxruntimeWebAssemblyBackend:()=>_a,initializeFlags:()=>wa,wasmBackend:()=>Oh});var wa,_a,Oh,R0=Q(()=>{st(),Mh(),A0(),wa=()=>{(typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0);let e=Ce.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ce.wasm.simd=!1),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let t=typeof navigator>"u"?yg("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},_a=class{async init(e){wa(),await vh(),await Sh(e)}async createInferenceSessionHandler(e,t){let n=new Rh;return await n.loadModel(e,t),n}},Oh=new _a});st(),st(),st();var z0="1.27.0";{let e=(R0(),Sn(zh)).wasmBackend;pn("webgpu",e,5),pn("webnn",e,5),pn("cpu",e,10),pn("wasm",e,10)}Object.defineProperty(Ce.versions,"web",{value:z0,enumerable:!0});/**
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
 */const O0=114;function N0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function yn(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let p=0;p<n;p++){const c=(p+.5)*l-.5,f=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,c-f));for(let y=0;y<t;y++){const b=(y+.5)*u-.5,x=Math.max(0,Math.min(r-1,Math.floor(b))),$=Math.min(r-1,x+1),T=Math.max(0,Math.min(1,b-x)),S=(f*r+x)*a,k=(f*r+$)*a,E=(m*r+x)*a,C=(m*r+$)*a,v=(p*t+y)*3;for(let R=0;R<3;R++){const O=s[S+R]*(1-T)+s[k+R]*T,j=s[E+R]*(1-T)+s[C+R]*T;o[v+R]=Math.min(255,Math.max(0,Math.round(O*(1-g)+j*g)))}}}return o}function B0(e,t){const n=N0(e.width,e.height,t),r=yn(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(O0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let l=0;l<n.resizedWidth;l++){const p=(u+l)*3,c=o+l;a[c]=r[p]/255,a[i+c]=r[p+1]/255,a[2*i+c]=r[p+2]/255}}return{tensor:a,params:n}}function Nh(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],p=e[s*6+3],c=e[s*6+4],f=e[s*6+5];if(c<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,b=(l-t.padX)/t.scale,x=(p-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(b-g),Math.trunc(x-y)],boxFloat:[g,y,b-g,x-y]})}return i}function Ln(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Bh(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Dh(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const D0=.6,P0=.8;function Ph(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,p=(e[a*6+3]-t.padY)/t.scale,c=Ln((o+l)/2),f=Ln((u+p)/2),m=Ln((l-o+(p-u))/4);m>=1&&r.push({cx:c,cy:f,r:m})}return r}function U0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(D0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function L0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=P0*(n.r+r.r))&&t.push(n);return t}function F0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Bh(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Uh(e,t,n){const r=Ph(e,t,n);return r.length===0?[]:F0(L0(U0(r)))}function G0(e,t,n){return Ph(e,t,n)}function Lh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Fh=["brown","grey","blue","green","yellow","red","purple"],W0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Gh(e,t,n){return Nh(e,t,n,Fh.length).map(r=>{const i=Fh[r.classIndex];return{color:i,family:W0[i],box:r.box,confidence:r.confidence}})}const q0=8,V0=.8,Wh=1.25;function H0(e){if(e.length<q0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*Wh?t.push(s):u>o*Wh&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<V0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const j0=2.25,qh=8;function K0(e){if(e.length<qh)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,f)=>c-f),r=j0*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,f)=>f),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let f=c+1;f<e.length;f++){const m=t[c][0]-t[f][0],g=t[c][1]-t[f][1];m*m+g*g<=i&&(a[s(c)]=s(f))}const o=new Map;for(let c=0;c<e.length;c++){const f=s(c);o.set(f,[...o.get(f)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<qh||u.length===e.length)return[];const l=new Set(u),p=e.map((c,f)=>f).filter(c=>!l.has(c));return p.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${p.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const $t={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function mt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const X0=.42,Y0=22,Z0=43,Q0=120,J0=1.5,ey=.72,ty=110,Vh=3;function Fn(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*X0);if(l<1)return 0;let p=0;for(let c=0;c<i;c++)for(let f=0;f<r;f++){if((f-o)**2+(c-u)**2>l*l)continue;const m=(c*r+f)*a,g=s[m],y=s[m+1],b=s[m+2];!t&&g>=250&&y>=250&&b>=250||(n(g,y,b),p+=1)}return p}function ny(e){let t=0,n=0,r=0,i=Fn(e,!1,(a,s,o)=>{const u=mt(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Fn(e,!0,(a,s,o)=>{const u=mt(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function ry(e){let t=0,n=0,r=Fn(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=Fn(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function iy(e){let t=0;const n=Fn(e,!0,(r,i,a)=>{t+=mt(r,i,a).s});return n===0?null:t/n}function ay(e){const t=ny(e);if(t===null||t.s<=Y0)return 1;if(t.s>=Q0){const n=ry(e);return n!==null&&n>=J0?6:3}return t.s>=Z0?3:6}function sy(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function oy(e,t){const n=[...t];if(e.length<Vh||t.length!==e.length)return n;const r=e.map(s=>iy(s)),i=r.filter(s=>s!==null);if(i.length<Vh)return n;const a=Bh(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<ey*a&&s<ty&&(n[o]=1)}),n}function Hh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=(f*l+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:p,channels:3,data:c}}function uy(e,t){const n=t.map(a=>Hh(e,a)),r=n.map(a=>ay(a)),i=sy(t,r);return oy(n,i)}function ly(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function jh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const p=l*i,c=Math.min((l+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,o);if(!(y<=0))for(let b=Math.floor(p);b<c;b++){const x=Math.min(b+1,c)-Math.max(b,p);x<=0||(f+=e.data[g*e.width+b]*x*y,m+=x*y)}}r[s*t+l]=Math.min(255,Math.max(0,Ln(f/m)))}}return{width:t,height:n,data:r}}function dy(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Ln(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function cy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(!(p<0||p>=t||c<0||c>=n)&&r[c*t+p]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function py(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(p>=0&&p<t&&c>=0&&c<n&&r[c*t+p]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function ba(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,p=0;s[p++]=u,i[u]=o;let c=0,f=0,m=0;for(;l<p;){const g=s[l++],y=g%t,b=g/t|0;c+=1,f+=y,m+=b;for(let x=-1;x<=1;x++)for(let $=-1;$<=1;$++){if($===0&&x===0)continue;const T=y+$,S=b+x;if(T<0||T>=t||S<0||S>=n)continue;const k=S*t+T;r[k]>0&&i[k]===0&&(i[k]=o,s[p++]=k)}}a[o]={area:c,centroidX:f/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function hy(e,t,n){return Kh(Float32Array.from(e.data),e.width,t,n)}function Kh(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let p=0;p<t;p++){const c=p-a,f=l-a,m=o*c-u*f+a,g=u*c+o*f+a,y=Math.floor(m),b=Math.floor(g),x=m-y,$=g-b,T=(E,C)=>E>=0&&E<t&&C>=0&&C<t?e[C*t+E]:r,S=T(y,b)*(1-x)+T(y+1,b)*x,k=T(y,b+1)*(1-x)+T(y+1,b+1)*x;i[l*t+p]=S*(1-$)+k*$}return i}const fy=.9,my=.34,gy=[.55,.6,.66,.72],yy=22,wy=88,_y=35,wn=28,$a=4,by=Array.from({length:15},(e,t)=>-21+t*3),Xh=[-2,0,2],$y=3,xy=.3;function vy(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Sy(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let b=0;b<e.width;b++)e.data[y*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),p=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let b=0;b<s;b++)l[(y+c)*u+(b+p)]=e.data[(y+r)*e.width+(b+t)];const f=wn-2*$a,m=jh({width:u,height:u,data:l},f,f),g=new Float32Array(wn*wn);for(let y=0;y<f;y++)for(let b=0;b<f;b++)g[(y+$a)*wn+(b+$a)]=m.data[y*f+b]>110?1:0;return g}function Ty(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*my);if(u<4)return null;const l=s-u,p=o-u,c=2*u,f=2*u;if(c<6||f<6)return null;const m=new Int16Array(c*f),g=new Int16Array(c*f),y=new Int16Array(c*f),b=new Uint8Array(c*f),x=[],$=Math.min(c,f)/2;for(let N=0;N<c;N++)for(let ee=0;ee<f;ee++){const U=((N+l)*n+(ee+p))*i,{h:Z,s:K,v:W}=mt(a[U],a[U+1],a[U+2]),ue=N*f+ee;m[ue]=Z,g[ue]=K,y[ue]=W,Math.sqrt((ee-f/2)**2+(N-c/2)**2)/$<=t&&(b[ue]=1,x.push(W))}if(x.length<16)return null;const T=Dh(x,55);let S=0,k=0,E=0;const C=N=>m[N]>=yy&&m[N]<=wy&&g[N]>=_y,v=N=>y[N]>=T&&g[N]<=95&&!C(N)&&b[N]===1;for(let N=0;N<c*f;N++)b[N]===1&&(E+=1,y[N]>=130&&!C(N)&&(S+=1),v(N)&&(k+=1));const R=S>.5*E&&k<.15*E,O=new Uint8Array(c*f);if(R){const N=Dh(x,45);for(let ee=0;ee<c*f;ee++)O[ee]=b[ee]===1&&y[ee]<=N?255:0}else for(let N=0;N<c*f;N++)O[N]=v(N)?255:0;const j={width:f,height:c,data:O},P=cy(j);let F=ba(P),A=F;if(F.stats.length<=1&&(F=ba(j),A=F,F.stats.length<=1))return null;const B=Math.min(c,f)/2;let V=0,X=-1;for(let N=1;N<A.stats.length;N++){const ee=A.stats[N];if(ee===void 0)continue;const U=Math.hypot(ee.centroidX-f/2,ee.centroidY-c/2)/B,Z=ee.area*(1-.6*Math.min(U,1));Z>X&&(X=Z,V=N)}if(V===0)return null;const ne=new Uint8Array(c*f);for(let N=0;N<c*f;N++)ne[N]=A.labels[N]===V?255:0;return Sy(py({width:f,height:c,data:ne}))}function Iy(e,t,n,r,i,a){const s=wn;let o=0,u=0;for(let l=0;l<s;l++){const p=l-a;if(!(p<0||p>=s))for(let c=0;c<s;c++){const f=c-i;if(f<0||f>=s)continue;const m=e[p*s+f];m!==0&&(u+=m,o+=m*n[l*s+c])}}return o/(u+r-o+1e-6)}function ky(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of by){const a=i===0?e:Kh(e,wn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of Xh)for(const u of Xh){const l=Iy(a,s,t,n,o,u);l>r&&(r=l)}}return r}function Ey(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of gy){const o=Ty(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([ky(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<xy)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,$y))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const Cy=2560,My=.3,Ay=.5,Ry=1.6,zy=3,Oy=5;function Ny(e){const t=Math.min(1,Cy/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*o-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,p+1),f=Math.max(0,Math.min(1,l-p));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,y+1),x=Math.max(0,Math.min(1,g-y));for(let $=0;$<3;$++){const T=2-$,S=(p*e.width+y)*e.channels+T,k=(p*e.width+b)*e.channels+T,E=(c*e.width+y)*e.channels+T,C=(c*e.width+b)*e.channels+T,v=e.data[S]*(1-x)+e.data[k]*x,R=e.data[E]*(1-x)+e.data[C]*x,O=v*(1-f)+R*f;a[$*i+u*n+m]=(O/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function By(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const l=o+t;e[l]>u&&(u=e[l]),s+1<t&&e[l+1]>u&&(u=e[l+1])}r[o]=u}}return r}function Dy(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function Py(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,l=o-a,p=Math.hypot(u,l);if(p===0)continue;const c=u/p,f=l/p;let m=1/0,g=-1/0,y=1/0,b=-1/0;for(const[S,k]of e){const E=S*c+k*f,C=-S*f+k*c;E<m&&(m=E),E>g&&(g=E),C<y&&(y=C),C>b&&(b=C)}const x=g-m,$=b-y,T=x*$;if(T<n){n=T;const S=(m+g)/2,k=(y+b)/2;t={cx:S*c-k*f,cy:S*f+k*c,w:x,h:$,angle:Math.atan2(f,c)}}}return t}function Uy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),l=Math.abs(s*a)+Math.abs(o*i),p=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let b=f;b<=m;b++)for(let x=p;x<=c;x++){const $=x-r.cx,T=b-r.cy,S=$*i+T*a,k=-$*a+T*i;Math.abs(S)<=s&&Math.abs(k)<=o&&(g+=e[b*t+x],y+=1)}return y===0?0:g/y}function Ly(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,b)=>y[0]-b[0]),[o,u,l,p]=s,[c,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=l[1]<=p[1]?[l,p]:[p,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function Fy(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>My?255:0;s=By(s,i,a);const o={width:i,height:a,data:s},{labels:u}=ba(o),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let b=l.get(y);b===void 0&&(b=new Map,l.set(y,b));const x=b.get(m);x===void 0?b.set(m,[g,g]):(g<x[0]&&(x[0]=g),g>x[1]&&(x[1]=g))}const p=n/i,c=r/a,f=[];for(const[m,g]of l){const y=[];for(const[O,[j,P]]of g)y.push([j-.5,O-.5],[j-.5,O+.5],[P+.5,O-.5],[P+.5,O+.5]);const b=Py(Dy(y));if(Math.min(b.w,b.h)<zy)continue;const x=Uy(e,i,a,b);if(x<Ay)continue;const $=b.w*b.h*Ry/(2*(b.w+b.h)),T={...b,w:b.w+2*$,h:b.h+2*$};if(Math.min(T.w,T.h)<Oy+2)continue;const k=Ly(T).map(([O,j])=>[Math.min(n,Math.max(0,Math.round(O*p))),Math.min(r,Math.max(0,Math.round(j*c)))]),E=k.map(O=>O[0]),C=k.map(O=>O[1]),v=Math.min(...E),R=Math.min(...C);f.push({quad:k,x:v,y:R,width:Math.max(...E)-v,height:Math.max(...C)-R,score:x})}return f.sort((m,g)=>g.score-m.score)}function Gy(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Wy([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),l=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*c+u[8],g=(u[0]*f+u[1]*c+u[2])/m,y=(u[3]*f+u[4]*c+u[5])/m,b=Math.floor(g),x=Math.floor(y),$=g-b,T=y-x,S=Math.max(0,Math.min(e.width-1,b)),k=Math.max(0,Math.min(e.width-1,b+1)),E=Math.max(0,Math.min(e.height-1,x)),C=Math.max(0,Math.min(e.height-1,x+1));for(let v=0;v<e.channels;v++){const R=e.data[(E*e.width+S)*e.channels+v],O=e.data[(E*e.width+k)*e.channels+v],j=e.data[(C*e.width+S)*e.channels+v],P=e.data[(C*e.width+k)*e.channels+v],F=R*(1-$)+O*$,A=j*(1-$)+P*$;l[(c*s+f)*e.channels+v]=Math.round(F*(1-T)+A*T)}}const p={width:s,height:o,channels:e.channels,data:l};return o/s>=1.5?Ut(p,3):p}function Wy(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let l=i;l<8;l++)n[o][l]-=u*n[i][l];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Ut(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let p=0;p<i;p++)for(let c=0;c<r;c++){let f,m;n===1?(f=i-1-p,m=c):n===2?(f=r-1-c,m=i-1-p):(f=p,m=r-1-c);const g=(p*r+c)*a,y=(m*o+f)*a;for(let b=0;b<a;b++)l[y+b]=s[g+b]}return{width:o,height:u,channels:a,data:l}}const qy=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,qy)*255));return e})();const At=48,Vy=320;function Hy(e){return["blank",...e.characters," "]}function jy(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function Ky(e,t){const n=Math.trunc(At*t),r=e.width/e.height,i=Math.ceil(At*r)>n?n:Math.ceil(At*r),a=new Float32Array(3*At*n),s=At*n,o=e.width/i,u=e.height/At;for(let l=0;l<At;l++){const p=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(p))),f=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,p-c));for(let g=0;g<i;g++){const y=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(y))),x=Math.min(e.width-1,b+1),$=Math.max(0,Math.min(1,y-b));for(let T=0;T<3;T++){const S=2-T,k=(c*e.width+b)*e.channels+S,E=(c*e.width+x)*e.channels+S,C=(f*e.width+b)*e.channels+S,v=(f*e.width+x)*e.channels+S,R=e.data[k]*(1-$)+e.data[E]*$,O=e.data[C]*(1-$)+e.data[v]*$,j=R*(1-m)+O*m;a[T*s+l*n+g]=(j/255-.5)/.5}}}return{tensor:a,width:n}}const Xy=62,Yy=8,Zy=5;function xa(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function Qy(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function yr(e,t){return e.length===0&&t.length===0?100:200*Qy(e,t)/(e.length+t.length)}function Yh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return yr(n(e),n(t))}function Jy(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(p=>r.has(p)).sort(),a=[...n].filter(p=>!r.has(p)).sort(),s=[...r].filter(p=>!n.has(p)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),l=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(yr(o,u),yr(o,l),yr(u,l))}function ew(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[xa(i),xa(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function tw(e,t){const n=xa(e);if(!n||t.length===0)return null;const i=ew(t).map(p=>({...p,score:Jy(n,p.key)})).sort((p,c)=>c.score-p.score).slice(0,Yy).filter(p=>p.score>=Xy);if(i.length===0)return null;const a=i[0].score,s=i.filter(p=>a-p.score<=Zy),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],l=[Yh(o,u.key),u.score];for(const p of s.slice(1)){const c=[Yh(o,p.key),p.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=p,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Zh=5e3,va=.75,Qh=15,nw=1.25,rw=2.4,iw=.003,aw=.85,sw=4,Sa=2600,Ta=2,Ia=.3,Jh=.1,ef=.012,ow=22,tf=.5,wr=.12;function Ye(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function uw(e,t,n,r){const i=r.map(ie=>ie[0]),a=r.map(ie=>ie[1]),s=i.reduce((ie,_e)=>ie+_e,0)/i.length,o=a.reduce((ie,_e)=>ie+_e,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*sw,p=Math.max(0,Math.trunc(s-l)),c=Math.min(n.width,Math.trunc(s+l)),f=Math.max(0,Math.trunc(o-l)),m=Math.min(n.height,Math.trunc(o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Sa?Ta:1,y=Ye(e,n),b=Ye(e,t),x=new e.Rect(p,f,c-p,m-f),$=y.roi(x),T=new e.Mat;g!==1?e.resize($,T,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(T);const S=new e.Mat,k=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(T,k,e.COLOR_RGB2GRAY);const E=new e.ORB(Zh),C=new e.KeyPointVector,v=new e.KeyPointVector,R=new e.Mat,O=new e.Mat,j=new e.Mat,P=[y,b,$,T,S,k,C,v,R,O,j],F=ie=>{for(const _e of P)try{_e.delete()}catch{}try{E.delete()}catch{}return ie};if(E.detectAndCompute(S,j,C,R),E.detectAndCompute(k,j,v,O),R.rows<8||O.rows<8)return F(null);const A=new e.BFMatcher(e.NORM_HAMMING),B=new e.DMatchVectorVector;A.knnMatch(R,O,B,2);const V=[],X=[];for(let ie=0;ie<B.size();ie++){const _e=B.get(ie);if(_e.size()===2){const Re=_e.get(0),ze=_e.get(1);if(Re.distance<va*ze.distance){const Oe=C.get(Re.queryIdx).pt,H=v.get(Re.trainIdx).pt;V.push(Oe.x,Oe.y),X.push(H.x,H.y)}}}if(B.delete(),A.delete(),V.length/2<8)return F(null);const ne=e.matFromArray(V.length/2,1,e.CV_32FC2,V),N=e.matFromArray(X.length/2,1,e.CV_32FC2,X),ee=new e.Mat,U=e.findHomography(ne,N,e.RANSAC,5,ee);let Z=0;for(let ie=0;ie<ee.rows;ie++)Z+=ee.data[ie];const K=U.rows===3?[...U.data64F]:null;if(ne.delete(),N.delete(),ee.delete(),U.delete(),K===null||Z<Qh)return F(null);const W=1/g,ue=[[W,0,p],[0,W,f],[0,0,1]],ce=[0,1,2].map(ie=>[0,1,2].map(_e=>ue[ie][0]*K[_e]+ue[ie][1]*K[3+_e]+ue[ie][2]*K[6+_e]));return F({H:ce,inliers:Z})}function ka(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,p]=e[u],[c,f]=e[(u+1)%4];r+=l*f-c*p}const i=Math.abs(r/2)/(t*n);if(i<iw||i>aw)return!1;const a=e.map((u,l)=>{const p=e[(l+1)%4];return Math.hypot(p[0]-u[0],p[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=nw&&o<=rw}function Ea(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Ca(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ia*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(P=>[P[0],P[1],P[2]-s*(P[0]+P[1])+0]);for(let P=0;P<3;P++)l[P][2]=r[P][2]-s*r[P][0]-s*r[P][1];const p=Ye(e,t),c=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(p,c,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),p.delete(),f.delete();const g=m.data,y=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],x=(P,F)=>{const A=(F*o+P)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let P=0;P<u;P++)for(let F=0;F<o;F++)(P<y||P>=u-y||F<y||F>=o-y)&&x(F,P);const $=P=>{P.sort((A,B)=>A-B);const F=P.length>>1;return P.length%2?P[F]:(P[F-1]+P[F])/2},T=[$(b[0]),$(b[1]),$(b[2])],S=(P,F)=>{const A=(F*o+P)*3,B=g[A]-T[0],V=g[A+1]-T[1],X=g[A+2]-T[2];return Math.sqrt(B*B+V*V+X*X)>ow},k=Math.max(6,Math.trunc(Jh*i)),E=Math.max(6,Math.trunc(Jh*a)),C=Math.max(2,Math.trunc(ef*i)),v=Math.max(2,Math.trunc(ef*a)),R=P=>{let F=0,A=0;for(const B of P)A=B?A+1:0,A>F&&(F=A);return F/Math.max(1,P.length)},O=P=>{let F,A,B,V,X;if(P==="L"?(F=s,A=s+a,B=Math.max(0,s-C-k),V=Math.max(0,s-C),X=!1):P==="R"?(F=s,A=s+a,B=s+i+C,V=Math.min(o,s+i+C+k),X=!1):(F=Math.max(0,s-v-E),A=Math.max(0,s-v),B=s,V=s+i,X=!0),A<=F||V<=B)return 0;const ne=[];if(X)for(let N=B;N<V;N++){let ee=0;for(let U=F;U<A;U++)S(N,U)&&ee++;ne.push(ee/(A-F)>tf)}else for(let N=F;N<A;N++){let ee=0;for(let U=B;U<V;U++)S(U,N)&&ee++;ne.push(ee/(V-B)>tf)}return R(ne)},j={L:O("L"),R:O("R"),T:O("T")};return c.delete(),m.delete(),j}const lw=6e3,dw=8,nf=.5,cw=.6;function pw(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Sa?Ta:1,a=Ye(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(lw),l=new e.Mat,p=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,l,p,c);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return f;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const b=Ye(e,y),x=new e.Mat;e.cvtColor(b,x,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute(x,l,$,T);const S=[b,$,T],k=()=>{for(const ce of S)ce.delete();x.delete()};if(T.rows<8){k();continue}const E=new e.DMatchVectorVector;m.knnMatch(T,c,E,2);const C=[],v=[];for(let ce=0;ce<E.size();ce++){const ie=E.get(ce);if(ie.size()===2){const _e=ie.get(0);if(_e.distance<va*ie.get(1).distance){const Re=$.get(_e.queryIdx).pt,ze=p.get(_e.trainIdx).pt;C.push(Re.x,Re.y),v.push(ze.x,ze.y)}}}if(E.delete(),C.length/2<8){k();continue}const R=e.matFromArray(C.length/2,1,e.CV_32FC2,C),O=e.matFromArray(v.length/2,1,e.CV_32FC2,v),j=new e.Mat,P=e.findHomography(R,O,e.RANSAC,5,j);let F=0;for(let ce=0;ce<j.rows;ce++)F+=j.data[ce];const A=P.rows===3?[...P.data64F]:null;if(R.delete(),O.delete(),j.delete(),P.delete(),A===null||F<dw){k();continue}const B=1/i,V=[[B*A[0],B*A[1],B*A[2]],[B*A[3],B*A[4],B*A[5]],[A[6],A[7],A[8]]],X=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ce,ie])=>Ea(V,ce,ie));if(!ka(X,t.width,t.height)){k();continue}const ne=Ye(e,t),N=e.matFromArray(3,3,e.CV_64F,V.flat()),ee=new e.Mat;e.warpPerspective(ne,ee,N,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const U=new e.Mat;e.cvtColor(ee,U,e.COLOR_RGB2GRAY);const Z=new e.Mat;e.matchTemplate(U,x,Z,e.TM_CCOEFF_NORMED);const K=Z.data32F[0];if(ne.delete(),N.delete(),ee.delete(),U.delete(),Z.delete(),K<nf){k();continue}const W=Ca(e,t,y,V),ue=Ma(W);f.push({id:g,confidence:Math.max(0,K),footprint:X,built:W!==null&&Math.max(W.L,W.R,W.T)>=wr,tuckRegion:Aa(X,ue)}),k()}}finally{o.delete(),l.delete(),p.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return f}function Ma(e){return e!==null&&e.R>=wr?["R"]:[]}function Aa(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=Ia*a;if(!(s>0))return null;const o=n.reduce((y,b)=>y+b[0],0)/n.length,u=n.reduce((y,b)=>y+b[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},p=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[b,x]=l[y],$=n[b],T=n[x];let S=-(T[1]-$[1]),k=T[0]-$[0];const E=($[0]+T[0])/2,C=($[1]+T[1])/2;S*(E-o)+k*(C-u)<0&&(S=-S,k=-k);const v=Math.hypot(S,k);v<=1e-6||(S=S/v*s,k=k/v*s,p.push([$[0]+S,$[1]+k],[T[0]+S,T[1]+k]))}const c=p.map(y=>y[0]),f=p.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...f))-g}}function hw(e,t,n,r){const i=uw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,p])=>Ea(i.H,l,p));if(!ka(s,t.width,t.height))return null;const o=Ca(e,t,n,i.H);if(o===null)return null;const u=Ma(o);return{built:Math.max(o.L,o.R,o.T)>=wr,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const fw=.88;function rf(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ia*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*fw),p=o-l;if(p<1)return null;const c=Ye(e,t),f=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(f,m),y=[...g.data64F],b=[0,1,2].flatMap(C=>[y[C*3],y[C*3+1],y[C*3+2]-s*y[C*3]-s*y[C*3+1]]),x=e.matFromArray(3,3,e.CV_64F,b),$=new e.Mat;e.warpPerspective(c,$,x,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=$.roi(new e.Rect(l,0,p,u)),S=new e.Mat;T.copyTo(S);const k=S.data,E=new Uint8ClampedArray(p*u*3);E.set(k.subarray(0,E.length));for(const C of[c,f,m,g,x,$,T,S])try{C.delete()}catch{}return{width:p,height:u,channels:3,data:E}}function mw(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),p=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+s+u)),f=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Sa?Ta:1,y=Ye(e,n),b=Ye(e,t),x=y.roi(new e.Rect(p,f,c-p,m-f)),$=new e.Mat;g!==1?e.resize(x,$,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo($);const T=new e.Mat,S=new e.Mat;e.cvtColor(b,T,e.COLOR_RGB2GRAY),e.cvtColor($,S,e.COLOR_RGB2GRAY);const k=new e.ORB(Zh),E=new e.KeyPointVector,C=new e.KeyPointVector,v=new e.Mat,R=new e.Mat,O=new e.Mat,j=[y,b,x,$,T,S,E,C,v,R,O],P=ce=>{for(const ie of j)try{ie.delete()}catch{}try{k.delete()}catch{}return ce};if(k.detectAndCompute(T,O,E,v),k.detectAndCompute(S,O,C,R),v.rows<8||R.rows<8)return P(null);const F=new e.BFMatcher(e.NORM_HAMMING),A=new e.DMatchVectorVector;F.knnMatch(v,R,A,2);const B=[],V=[];for(let ce=0;ce<A.size();ce++){const ie=A.get(ce);if(ie.size()===2){const _e=ie.get(0),Re=ie.get(1);if(_e.distance<va*Re.distance){const ze=E.get(_e.queryIdx).pt,Oe=C.get(_e.trainIdx).pt;B.push(ze.x,ze.y),V.push(Oe.x,Oe.y)}}}if(A.delete(),F.delete(),B.length/2<8)return P(null);const X=e.matFromArray(B.length/2,1,e.CV_32FC2,B),ne=e.matFromArray(V.length/2,1,e.CV_32FC2,V),N=new e.Mat,ee=e.findHomography(X,ne,e.RANSAC,5,N);let U=0;for(let ce=0;ce<N.rows;ce++)U+=N.data[ce];const Z=ee.rows===3?[...ee.data64F]:null;if(X.delete(),ne.delete(),N.delete(),ee.delete(),Z===null||U<Qh)return P(null);const K=1/g,W=[[K,0,p],[0,K,f],[0,0,1]],ue=[0,1,2].map(ce=>[0,1,2].map(ie=>W[ce][0]*Z[ie]+W[ce][1]*Z[3+ie]+W[ce][2]*Z[6+ie]));return P({H:ue,inliers:U})}function af(e,t,n,r){const i=mw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([x,$])=>Ea(i.H,x,$));if(!ka(s,t.width,t.height))return null;const o=Ye(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const p=Ye(e,n),c=new e.Mat,f=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(p,f,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,f,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const x of[o,u,l,p,c,f,m])try{x.delete()}catch{}if(g<nf)return null;const y=Ca(e,t,n,i.H);if(y===null)return null;const b=Ma(y);return{built:Math.max(y.L,y.R,y.T)>=wr,footprint:s,overflow:b,edgeScores:y,inliers:i.inliers}}function gw(e,t,n,r=.03){let i=null,a=1/0;for(const s of e){const[o,u,l,p]=s;if(l<=0||p<=0)continue;const c=r*l,f=r*p;if(t>=o-c&&t<=o+l+c&&n>=u-f&&n<=u+p+f){const m=l*p;m<a&&(a=m,i=[o,u,l,p])}}return i}const yw=.3,ww=.3;function _w(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=yw}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,p=Math.max(o,u,l)<ww;if(!r&&!p)return;t.some(([f,m])=>f>=a.zone.x0&&f<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const xt=128,Ra=.5;function za(e){const t=yn(e,xt,xt),n=xt*xt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function sf(e){const t=e[1]??0;return{built:t>=Ra,prob:t}}const Gn=120,Wn=179,bw=1.3,$w=3.6,xw=.45,vw=6e-4,Sw=.02,Tw=6e3,Iw=.78,kw=1.25,Ew=2.4,Cw=.05,Mw=1.5,Aw=.5,Rw=.9,zw=150,Ow=18,Nw=34,Bw=90,Dw=130,Pw=.13,Uw=.15,_r="magistrates-guild",Oa="merchants-guild";function Lw(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Gn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[Wn,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const p=new e.Mat,c=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(l,p,c,f,8);l.delete(),p.delete(),f.delete();const g=t.width*t.height,y=[];for(let b=1;b<m;b++){const x=c.intAt(b,0),$=c.intAt(b,1),T=c.intAt(b,2),S=c.intAt(b,3),k=c.intAt(b,4),E=k/g;E<vw||E>Sw||k/Math.max(T*S,1)<xw||y.push({x,y:$,w:T,h:S})}return c.delete(),{blobs:y,mask:o,maskWidth:t.width}}function Fw(e,t,n,r,i,a,s){const o=e,u=a,l=s,p=i;if(!p.gray){const K=Ye(e,r);p.gray=new o.Mat,o.cvtColor(K,p.gray,o.COLOR_RGB2GRAY),K.delete(),p.k=new o.KeyPointVector,p.d=new o.Mat;const W=new o.Mat;u.detectAndCompute(p.gray,W,p.k,p.d),W.delete()}const c=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,f,m,g),f.delete();const y=K=>(m.delete(),g.delete(),K);if(p.d.rows<8||g.rows<8)return y(null);const b=new o.DMatchVectorVector;l.knnMatch(p.d,g,b,2);const x=[],$=[];for(let K=0;K<b.size();K++){const W=b.get(K);if(W.size()===2){const ue=W.get(0);if(ue.distance<Iw*W.get(1).distance){const ce=p.k.get(ue.queryIdx).pt,ie=m.get(ue.trainIdx).pt;x.push(ce.x,ce.y),$.push(ie.x,ie.y)}}}if(b.delete(),x.length/2<8)return y(null);const T=o.matFromArray(x.length/2,1,o.CV_32FC2,x),S=o.matFromArray($.length/2,1,o.CV_32FC2,$),k=new o.Mat,E=o.findHomography(T,S,o.RANSAC,5,k);if(T.delete(),S.delete(),k.delete(),E.rows!==3)return E.delete(),y(null);const C=[...E.data64F],v=(K,W)=>{const ue=C[6]*K+C[7]*W+C[8];return[(C[0]*K+C[1]*W+C[2])/ue,(C[3]*K+C[4]*W+C[5])/ue]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([K,W])=>v(K,W));if(R.some(K=>!Number.isFinite(K[0])||!Number.isFinite(K[1])))return E.delete(),y(null);const O=R.map((K,W)=>{const ue=R[(W+1)%4];return Math.hypot(ue[0]-K[0],ue[1]-K[1])}),j=Math.min(...O);if(j<1)return E.delete(),y(null);const P=Math.max(...O)/j;let F=0;for(let K=0;K<4;K++){const[W,ue]=R[K],[ce,ie]=R[(K+1)%4];F+=W*ie-ce*ue}const A=t,B=Math.abs(F/2)/(A.rows*A.cols);if(P<kw||P>Ew||B<Cw||B>Mw)return E.delete(),y(null);const V=new o.Mat;o.warpPerspective(A,V,E,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),E.delete();const X=new o.Mat;o.cvtColor(V,X,o.COLOR_RGB2GRAY),V.delete();const ne=Math.trunc(r.height/2),N=X.roi(new o.Rect(0,0,r.width,ne)),ee=p.gray.roi(new o.Rect(0,0,r.width,ne)),U=new o.Mat;o.matchTemplate(N,ee,U,o.TM_CCOEFF_NORMED);const Z=U.data32F[0];return N.delete(),ee.delete(),U.delete(),X.delete(),y(Z)}function Gw(e,t,n){let r,i;if(n===_r)r=Oa,i=Pw;else if(n===Oa)r=_r,i=Uw;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let p=0,c=null;for(const[f,m]of[[0,l],[l,o]]){let g=0,y=0;for(let x=s;x<s+u;x++)for(let $=a+f;$<a+m;$++){const T=(x*e.width+$)*e.channels,{h:S,s:k,v:E}=mt(e.data[T],e.data[T+1],e.data[T+2]);if(S>=Gn&&S<=Wn&&k>=30&&k<=170&&E<=170)continue;g++,(r===Oa?S>=Ow&&S<=Nw&&k>=Bw&&E>=Dw:S>=95&&S<=130&&k>=80)&&y++}if(g<20)continue;const b=y/g;b>p&&(p=b,c={x:a+f,y:s,w:m-f,h:u})}return p>=i&&c!==null?{id:r,box:c}:null}const Ww=1.7,qw=140,Vw=170,Hw=.2,jw=.1,of=240,uf=80,lf=60,Kw=50,df="scientists-guild",cf="tacticians-guild",br=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Xw(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let k=0;for(let E=0;E<a;E++)e[(i+S)*t+r+E]>0&&k++;o[S]=k/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],p=u[u.length-1],c=p-l;if(c<5)return[];const f=a/c;if(f<bw||f>$w)return[];if(f>=Ww)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,y=[];let b=0;for(let S=-4;S<=4;S++){const k=Math.exp(-(S*S)/(2*g*g));y.push(k),b+=k}for(let S=0;S<s;S++){let k=0;for(let E=-4;E<=4;E++){const C=Math.min(s-1,Math.max(0,S+E));k+=o[C]*y[E+4]}m[S]=k/b}const x=l+Math.trunc(c*.3),$=l+Math.trunc(c*.78);let T=l+Math.trunc(c/2);if($>x){let S=1/0;for(let k=x;k<$;k++)m[k]<S&&(S=m[k],T=k)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:p-T}]}function Yw(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let p=0;p<s;p++){const c=((r+l)*e.width+n+p)*e.channels,f=(l*s+p)*3;u[f]=e.data[c],u[f+1]=e.data[c+1],u[f+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function Zw(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=mt(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=qw&&s<=Vw&&n++)}return t===0?0:n/t}function Qw(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=mt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=Gn&&a<=Wn)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function pf(e,t){const n=Ye(e,t),r=new e.Mat;e.resize(n,r,new e.Size(of,uf),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:of,height:uf,channels:3,data:i}}function Jw(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function hf(e,t){const n=Jw(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:b,s:x,v:$}=mt(n.data[y],n.data[y+1],n.data[y+2]);!(b>=Gn&&b<=Wn&&x>=30&&x<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const s=a<20,o=Ye(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let p=0,c=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(p+=l[g*3]*100/255,c+=l[g*3+1]-128,f+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[p/m,c/m,f/m]}function e_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:p,s:c,v:f}=mt(e.data[l],e.data[l+1],e.data[l+2]);p>=Gn&&p<=Wn&&c>=30&&c<=170&&f<=170||(t++,c>=70&&f>=50&&(p>=95&&p<=130?n++:p>=35&&p<=92?r++:p<=10?i++:p>=15&&p<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function t_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=mt(e.data[i],e.data[i+1],e.data[i+2]);s>=lf&&o>=Kw?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<lf&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function n_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function ff(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function r_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=pf(e,a);n.set(i,ff(e,s)),br.includes(i)&&r.set(i,hf(e,s))}return{gray:n,warmLab:r}}function i_(e,t,n){const r=pf(e,t),i=e_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return _r;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return df;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return cf;const a=t_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=_r;else if(o==="green")u=df;else if(o==="red")u=cf;else{const l=ff(e,r);let p="",c=-2;for(const f of br){const m=n.gray.get(f);if(m===void 0)continue;const g=n_(l,m);g>c&&(c=g,p=f)}u=p||br[0]}if(br.includes(u)&&n.warmLab.size>0){const l=hf(e,r);let p=u,c=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,p=f)}return p}return u}function a_(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=Lw(e,t);if(s.length===0||n.size===0)return a;const l=e,p=new l.ORB(Tw),c=new l.BFMatcher(l.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=Ye(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const x=b.x+Math.trunc(b.w/2),$=b.y+Math.trunc(b.h/2),T=Math.max(zw,Math.trunc(Rw*Math.max(b.w,b.h))),S=Math.max(0,x-T),k=Math.max(0,$-T),E=Math.min(t.width,x+T),C=Math.min(t.height,$+T);if(E-S<16||C-k<16)continue;const v=m.roi(new l.Rect(S,k,E-S,C-k)),R=new l.Mat;l.cvtColor(v,R,l.COLOR_RGB2GRAY);let O=null,j=-2;for(const[B,V]of n){if(r!==void 0&&Date.now()>r)break;const X=Fw(e,v,R,V,f.get(B),p,c);X!==null&&X>j&&(j=X,O=B)}v.delete(),R.delete();const P=new Set;if(O!==null&&j>=Aw){a.push({id:O,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),P.add(O);const B=Gw(t,b,O);B&&(a.push({id:B.id,boundingBox:{x:B.box.x,y:B.box.y,width:B.box.w,height:B.box.h},confidence:.9}),P.add(B.id))}if(i===void 0||i.size===0)continue;const F=Xw(o,u,b);if(F.length!==2)continue;const A=F.map(B=>Yw(t,B));if(!A.some(B=>B.width*B.height===0||Qw(B)<jw))for(let B=0;B<F.length;B++){const V=A[B];if(Zw(V)<Hw)continue;g===null&&(g=r_(e,i));const X=i_(e,V,g);if(X&&!P.has(X)){P.add(X);const ne=F[B];a.push({id:X,boundingBox:{x:ne.x,y:ne.y,width:ne.w,height:ne.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const x=b;for(const $ of["gray","k","d"])try{(y=x[$])==null||y.delete()}catch{}}try{p.delete(),c.delete()}catch{}}return a}const mf=128,s_=.56,o_=15,u_=.58,l_=70,d_=50,c_=.12,p_=.2,h_=.1,f_=.17,gf=.15;function m_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function yf(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),p=Math.max(0,o-u),c=Math.min(n,s+u),f=Math.min(r,o+u),m=c-l,g=f-p,y=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const x=((b+p)*n+l)*i;y.set(a.subarray(x,x+m*i),b*m*i)}return{width:m,height:g,channels:i,data:y}}function g_(e){const t=yf(e,s_),n=ly(t),r=jh(n,mf,mf);return dy(r)}function y_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,p=t[u]-i;a+=l*p,s+=l*l,o+=p*p}return a/(Math.sqrt(s*o)+1e-6)}function w_(e){const t=new Map([["masonry",0],["strategy",0]]),n=yf(e,u_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:y,v:b}=mt(s[m],s[m+1],s[m+2]);y>=l_&&b>=d_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const p=u/o,c=l/o;return p>=c_&&t.set("masonry",gf*Math.min(1,p/p_)),c>=h_&&t.set("strategy",gf*Math.min(1,c/f_)),t}function __(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=g_(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=o_)a.push(hy(n,l,i));const s=new Map;for(const[l,p]of t){let c=-1/0;for(const f of a){const m=y_(f,p);m>c&&(c=m)}s.set(l,c)}for(const[l,p]of w_(e))p>0&&s.has(l)&&s.set(l,s.get(l)+p);let o="",u=-1/0;for(const[l,p]of s)p>u&&(o=l,u=p);return[o,u]}const Lt=224,b_=512,$_=[.485,.456,.406],x_=[.229,.224,.225];function v_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function S_(e){const t=yn(e,Lt,Lt),n=Lt*Lt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-$_[a])/x_[a];return r}function T_(e){const t=3*Lt*Lt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(S_(Ut(e,r)),r*t);return n}function I_(e,t=b_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function k_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const _n=96,E_=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],C_=.45;function M_(e){const t=yn(e,_n,_n),n=_n*_n,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function A_(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=C_?E_[t]??"":"",prob:n}}const bn=128,R_=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],z_=.5,O_=.9;function N_(e){const t=yn(e,bn,bn),n=bn*bn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function B_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let s=0;s<t;s++)for(let o=0;o<n;o++){const u=s,p=((n-1-o)*t+u)*r,c=(s*n+o)*r;for(let f=0;f<r;f++)a[c+f]=i[p+f]}return{width:n,height:t,channels:r,data:a}}function D_(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=B_(n);return n}function P_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function U_(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:D_(e,i),s=await t(N_(a)),o=P_(s);o.prob>r&&(r=o.prob,n=o.index)}return{id:r>=z_?R_[n]??"":"",prob:r}}const $n=96,L_=[1,2,3,4,5,6,7],F_=.8;function G_(e){const t=yn(e,$n,$n),n=$n*$n,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function W_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:L_[t],prob:e[t]}}const q_=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],V_=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],H_=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],j_=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],K_=[...V_,...H_,...j_,...q_];Object.fromEntries(K_.map(e=>[e.id,e]));const X_=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Ue="/7wd-scorer/models/";let wf=!1;const $r=new Map;function _f(){var e;wf||(Ce.wasm.wasmPaths="/7wd-scorer/ort/",Ce.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,wf=!0)}const Na=new Set;function Y_(e){_f();let t=$r.get(e);return t===void 0&&(t=at.create(`${Ue}${$t[e].onnx}`,{executionProviders:Na.has(e)?["wasm"]:["webgpu","wasm"]}),$r.set(e,t),t.catch(()=>$r.delete(e))),t}let Ba=null,Da=null;const Z_=.75,Q_=4,J_=.65,eb=3e4;let Pa=null;function Ua(){return Pa===null&&(Pa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Pa}const bf=new Map;function La(e){let t=bf.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ue}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),bf.set(e,t)),t}function Fa(e){return La(`wonder-refs/${e}.jpg`)}const $f=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function tb(){const e=new Map;for(const t of $f){const n=await La(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function nb(){const e=new Map;for(const t of $f){const n=await La(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const rb=.6,ib=12,ab=45e3;let Ga=null;function xf(){return Ga===null&&(_f(),Ga=(async()=>{try{const[e,t,n,r]=await Promise.all([at.create(`${Ue}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),at.create(`${Ue}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ue}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ue}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Hy(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Ga}async function sb(e,t){const n=Math.max(Vy/At,t.width/t.height),{tensor:r,width:i}=Ky(t,n),a={[e.rec.inputNames[0]]:new Le("float32",r,[1,3,At,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,l]=s.dims,p=s.data,c=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const b=m*l;for(let x=0;x<l;x++){const $=p[b+x];$>y&&(y=$,g=x)}c[m]=g,f[m]=y}return jy(c,f,e.charset)}async function ob(e,t){const n=await xf();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+ab;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=Ut(e,s),u=Ny(o),l={[n.det.inputNames[0]]:new Le("float32",u.tensor,[1,3,u.height,u.width])},p=(await n.det.run(l))[n.det.outputNames[0]],c=Fy(p.data,u,o.width,o.height).slice(0,ib);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of c){if(Date.now()>i){a=!0;break e}const m=Gy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,y]=await sb(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<rb||g.trim().length<Q_)continue;const b=tw(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<Z_||b.kind!=="wonder")continue;const x=r.get(b.id);(x===void 0||b.confidence>x.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:vf(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function vf(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,f)=>i===1?[f,r-1-c]:i===2?[n-1-c,r-1-f]:[n-1-f,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),l=Math.min(...o),p=Math.min(...u);return{x:l,y:p,width:Math.max(...o)-l,height:Math.max(...u)-p}}function ub(){return Da===null&&(Da=fetch(`${Ue}laurel_gallery.json`).then(async e=>e.ok?vy(await e.json()):[]).catch(()=>[])),Da}function lb(e,t,n,r){return Wa(e,t-r,n-r,2*r,2*r)}function Wa(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=((f+s)*e.width+(m+a))*e.channels,y=(f*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:p,channels:3,data:c}}function db(){return Ba===null&&(Ba=fetch(`${Ue}token_templates.json`).then(async e=>e.ok?m_(await e.json()):new Map).catch(()=>new Map)),Ba}let qa=null;function cb(){return qa===null&&(qa=(async()=>{try{const e=await fetch(`${Ue}token_embed_index.json`);if(!e.ok)return null;const t=v_(await e.json());return{session:await at.create(`${Ue}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),qa}const pb=.92;let Va=null;function hb(){return Va===null&&(Va=(async()=>{try{return(await fetch(`${Ue}guild_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Va}let Ha=null;function fb(){return Ha===null&&(Ha=(async()=>{try{return(await fetch(`${Ue}laurel_digit.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ha}let ja=null;function Sf(){return ja===null&&(ja=(async()=>{try{return(await fetch(`${Ue}tuck_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ja}const Tf=.2,mb=.3,If=.25;let Ka=null;function gb(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=If)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const p=o[2]/o[3];if(!(Math.abs(Math.log(p))<=If)&&r>1==p>1)return!0}return!1}const yb=.4;function wb(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function _b(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||wb(a,u)>=yb)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function bb(){return Ka===null&&(Ka=(async()=>{try{return(await fetch(`${Ue}tuck_box.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ka}async function $b(e,t,n){const[r,i,a,s]=t;if(a<=0||s<=0)return null;const o=Math.round(a*Tf),u=Math.round(s*Tf),l=Math.max(0,Math.round(r-o)),p=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+o)),f=Math.min(e.height,Math.round(i+s+u)),m=c-l,g=f-p;if(m<=0||g<=0)return null;const y=e.channels,b=new Uint8ClampedArray(m*g*y);for(let T=0;T<g;T++){const S=((p+T)*e.width+l)*y;b.set(e.data.subarray(S,S+m*y),T*m*y)}const x={width:m,height:g,channels:y,data:b};let $=null;for(let T=0;T<4;T++){const S=T===0?x:Ut(x,T),k=S.width,E=k-Math.floor(mb*k),C=k-E;if(C<=0)continue;const v=new Uint8ClampedArray(C*S.height*S.channels);for(let F=0;F<S.height;F++){const A=(F*k+E)*S.channels;v.set(S.data.subarray(A,A+C*S.channels),F*C*S.channels)}const R={width:C,height:S.height,channels:S.channels,data:v},O=za(R),P=(await n.run({[n.inputNames[0]]:new Le("float32",O,[1,3,xt,xt])}))[n.outputNames[0]].data[1]??0;$=$===null?P:Math.max($,P)}return $}let Xa=null;function xb(){return Xa===null&&(Xa=(async()=>{try{return(await fetch(`${Ue}wonder_classifier.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xa}async function vb(e,t,n,r,i,a){var f;const s=(m,g,y,b)=>{const x=Math.max(0,Math.round(m)),$=Math.max(0,Math.round(g)),T=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+b)),k=T-x,E=S-$;if(k<=0||E<=0)return null;const C=t.channels,v=new Uint8ClampedArray(k*E*C);for(let R=0;R<E;R++){const O=(($+R)*t.width+x)*C;v.set(t.data.subarray(O,O+k*C),R*k*C)}return{width:k,height:E,channels:C,data:v}},o=async m=>(await r.run({[r.inputNames[0]]:new Le("float32",m,[1,3,bn,bn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,b,x]=m;if(b<=0||x<=0)continue;const $=s(g,y,b,x);if($===null)continue;const{id:T,prob:S}=await U_($,o);if(T===""||S<O_)continue;const k=u.get(T);(k===void 0||S>k.prob)&&u.set(T,{prob:S,box:m})}const l=[],p=await Sf(),c=await bb();for(const[m,{prob:g,box:y}]of u){const[b,x,$,T]=y;let S={x:Math.round(b),y:Math.round(x),width:Math.round($),height:Math.round(T)},k=null,E=[],C=null;if(Date.now()<i)try{const B=await Fa(m);if(B!==null){const V=af(e,t,B,y);if(V!==null){k=V.footprint,E=V.overflow;const X=k.map(U=>U[0]),ne=k.map(U=>U[1]),N=Math.max(0,Math.round(Math.min(...X))),ee=Math.max(0,Math.round(Math.min(...ne)));if(S={x:N,y:ee,width:Math.min(t.width,Math.round(Math.max(...X)))-N,height:Math.min(t.height,Math.round(Math.max(...ne)))-ee},p!==null)try{const U=rf(e,t,B,k);if(U!==null){const Z=za(U),K=await p.run({[p.inputNames[0]]:new Le("float32",Z,[1,3,xt,xt])});C=sf(K[p.outputNames[0]].data).prob}}catch{}}}}catch(B){console.warn(`[wonders-cls] ${m} registration failed:`,B)}const v=k!==null?Aa(k,E):null,R=[];if(C!==null&&R.push(C>=Ra?1:0),c!==null)try{const B=await $b(t,y,c);B!==null&&R.push(B>=Ra?1:0)}catch{}const O=v??S,j=a.some(B=>{const V=B.box[0]+B.box[2]/2,X=B.box[1]+B.box[3]/2;return V>=O.x&&V<=O.x+O.width&&X>=O.y&&X<=O.y+O.height});R.push(j?1:0);let P=R.length>0&&R.reduce((B,V)=>B+V,0)*2>R.length;P&&gb(O,S,a)&&(P=!1);const F={id:m,name:((f=X_[m])==null?void 0:f.name)??m,builtWithCardUnderneath:P,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},A=v??S;l.push({obj:F,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height}})}return l}async function Sb(e,t){const n=await cb();if(n!==null)try{const r=T_(e),i=new Le("float32",r,[4,3,Lt,Lt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=k_(n.index,I_(s));return u<pb?["",-1]:[o,u]}catch{}return __(e,t)}async function Ya(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Ft(e,t){const n=$t[e],{tensor:r,params:i}=B0(t,n.input),a=async()=>{const s=await Y_(e),o={[s.inputNames[0]]:new Le("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(Na.has(e))throw s;return Na.add(e),$r.delete(e),await a()}}const Tb=6,Ib=2,kb=5,Eb=2;async function Cb(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Ya(e),r=await Ft("banner",n),i=Gh(r.rows,r.params,$t.banner.conf);if(t.banners=i.length,i.length>=Tb)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Ft("laurel",n),s=Lh(a.rows,a.params,$t.laurel.conf);if(t.laurels=s.length,s.length>=Ib)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Ft("coin",n),u=Uh(o.rows,o.params,$t.coin.conf);return t.coins=u.length,u.length>=kb?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Eb?{...t,kind:"board",confidence:.4}:t}function Mb(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Ab(e,t,n,r,i=()=>{}){const a={},s=[],o=[],u=[],l=[],p=[],c=[];let f=0,m=0,g=0,y=0,b=0;for(const S of e){b+=1;const k=`${t} photo ${b}/${e.length}`;r(`${k}: reading pixels…`,.01);const E=await Ya(S);r(`${k}: card banners…`,.04);const C=await Ft("banner",E),v=Gh(C.rows,C.params,$t.banner.conf);r(`${k}: progress tokens…`,.08);const R=await Ft("token",E),O=await db(),j=[];for(const H of G0(R.rows,R.params,$t.token.conf)){j.push({cx:H.cx,cy:H.cy,r:H.r});const[Y,q]=await Sb(Hh(E,H),O);Y===""&&q<0?j.pop():Y===""?m+=1:u.some(se=>se.id===Y)||u.push({id:Y,center:[H.cx,H.cy],radius:H.r,confidence:Math.round(q*1e4)/1e4})}r(`${k}: coins…`,.14);const P=await Ft("coin",E),F=Uh(P.rows,P.params,$t.coin.conf).filter(H=>!j.some(Y=>(H.cx-Y.cx)**2+(H.cy-Y.cy)**2<=H.r*H.r)),A=uy(E,F),B=[];if(F.forEach((H,Y)=>{const q=A[Y];f+=q,B.push({denomination:q,center:[H.cx,H.cy],radius:H.r,denomSource:"colour"})}),B.length>=2){const H=B.map(q=>q.radius).sort((q,se)=>q-se),Y=H.length%2===1?H[(H.length-1)/2]:(H[H.length/2-1]+H[H.length/2])/2;if(Y>0)for(const q of B)q.radius/Y>2&&(q.suspect=!0,q.suspectReason=`radius ${q.radius}px is ${(q.radius/Y).toFixed(1)}x the photo's median coin radius — probably not a coin`)}o.push(...B);const V=[],X=Date.now()+eb;let ne=null,N=null;const ee=()=>(N===null&&(N=(async()=>{try{const{rows:H,params:Y}=await Ft("wonder",E);return Nh(H,Y,$t.wonder.conf,1).map(q=>q.box)}catch{return[]}})()),N),U=[];let Z=!1;const K=await xb();if(K!==null){const H=await ee();if(H.length>0&&(ne=await Ua(),ne!==null)){r(`${k}: identifying wonders…`,.35);const Y=await vb(ne,E,H,K,X,v);for(const q of Y)l.some(se=>se.id===q.obj.id)||(l.push(q.obj),U.push({obj:q.obj,edgeScores:q.edgeScores,zone:q.zone}),V.push(q.zone));Z=Y.length>0}}Z||r(`${k}: wonder names…`,.2);const W=Z?{wonders:[],aborted:!1}:await ob(E,(H,Y)=>r(`${k}: ${H}`,.2+.35*(Y??0)));ne===null&&(ne=W.wonders.length>0?await Ua():null);for(const H of W.wonders){let Y=null;if(ne!==null&&Date.now()<X){r(`${k}: registering ${H.name}…`,.6);try{const q=await Fa(H.id);if(q!==null){let se=hw(ne,E,q,[[H.nameBox.x,H.nameBox.y],[H.nameBox.x+H.nameBox.width,H.nameBox.y],[H.nameBox.x+H.nameBox.width,H.nameBox.y+H.nameBox.height],[H.nameBox.x,H.nameBox.y+H.nameBox.height]]);if(se===null){const de=await ee(),Ie=gw(de,H.nameBox.x+H.nameBox.width/2,H.nameBox.y+H.nameBox.height/2);Ie!==null&&(se=af(ne,E,q,Ie))}if(se!==null){let de=se.built,Ie=!1;const ke=await Sf();if(ke!==null)try{const Ne=rf(ne,E,q,se.footprint);if(Ne!==null){const Ze=za(Ne),Xe=await ke.run({[ke.inputNames[0]]:new Le("float32",Ze,[1,3,xt,xt])});de=sf(Xe[ke.outputNames[0]].data).built,Ie=!0}}catch{}const Te=se.footprint.map(Ne=>Ne[0]),je=se.footprint.map(Ne=>Ne[1]),ve=Math.max(0,Math.round(Math.min(...Te))),Ke=Math.max(0,Math.round(Math.min(...je)));Y={built:de,boundingBox:{x:ve,y:Ke,width:Math.min(E.width,Math.round(Math.max(...Te)))-ve,height:Math.min(E.height,Math.round(Math.max(...je)))-Ke},tuckRegion:Aa(se.footprint,se.overflow),edgeScores:se.edgeScores,builtByTuck:Ie}}}}catch(q){console.warn(`[wonders-reg] ${H.id} failed:`,q)}}if(Y!==null){const q=Y.tuckRegion??Y.boundingBox;V.push({x0:q.x,y0:q.y,x1:q.x+q.width,y1:q.y+q.height})}else{const q=Math.max(8,H.nameBox.height),se=Math.round(H.nameBox.width*.15);V.push({x0:H.nameBox.x-se,y0:H.nameBox.y-q*2.5,x1:H.nameBox.x+H.nameBox.width+se,y1:H.nameBox.y+H.nameBox.height+q*2.5})}if(!l.some(q=>q.id===H.id)){const q=(Y==null?void 0:Y.builtByTuck)===!0,se=q?Y.built:!1,de=!q&&(Y==null?void 0:Y.built)===!0,Ie={id:H.id,name:H.name,builtWithCardUnderneath:se,boundingBox:(Y==null?void 0:Y.boundingBox)??{x:0,y:0,width:0,height:0},...Y!=null&&Y.tuckRegion?{tuckRegion:Y.tuckRegion}:{},confidence:H.confidence,...de?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};l.push(Ie),U.push({obj:Ie,edgeScores:Y&&!Y.builtByTuck?Y.edgeScores:null,zone:V[V.length-1]})}}if(!Z){const H=_w(U.map(Y=>({built:Y.obj.builtWithCardUnderneath,edgeScores:Y.edgeScores,zone:Y.zone})),v.map(Y=>[Y.box[0]+Y.box[2]/2,Y.box[1]+Y.box[3]/2]));for(const Y of H){const q=U[Y];q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(v.length>0){const Y=new Set(H);for(let q=0;q<U.length;q++){const se=U[q];if(Y.has(q)||!se.obj.builtWithCardUnderneath)continue;const de=se.obj.tuckRegion;if(de===void 0)continue;if(!v.some(ke=>{const Te=ke.box[0]+ke.box[2]/2,je=ke.box[1]+ke.box[3]/2;return Te>=de.x&&Te<=de.x+de.width&&je>=de.y&&je<=de.y+de.height})){const ke=se.obj;ke.builtWithCardUnderneath=!1,ke.suspect=!0,ke.suspectReason="built-unconfirmed"}}}}if(W.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${k}: the wonder-name read ran out of its time budget on this device — ${W.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),ne!==null&&W.wonders.length>0&&Date.now()<X)try{const H=await xf(),Y=(H==null?void 0:H.catalog.filter(se=>se.kind==="wonder").map(se=>se.id))??[],q=new Map;for(const se of Y)if(!l.some(de=>de.id===se)){const de=await Fa(se);de!==null&&q.set(se,de)}if(q.size>0){r(`${k}: searching occluded wonders…`,.7);const se=pw(ne,E,q,X);for(const de of se){const Ie=de.footprint.map(Xe=>Xe[0]),ke=de.footprint.map(Xe=>Xe[1]),Te=Math.max(0,Math.round(Math.min(...Ie))),je=Math.max(0,Math.round(Math.min(...ke))),ve={x:Te,y:je,width:Math.min(E.width,Math.round(Math.max(...Ie)))-Te,height:Math.min(E.height,Math.round(Math.max(...ke)))-je};if(l.some(Xe=>{const Fe=Xe.boundingBox,Pe=Math.max(0,Math.min(Fe.x+Fe.width,ve.x+ve.width)-Math.max(Fe.x,ve.x)),Je=Math.max(0,Math.min(Fe.y+Fe.height,ve.y+ve.height)-Math.max(Fe.y,ve.y)),qe=Pe*Je,yt=Fe.width*Fe.height+ve.width*ve.height-qe;return yt>0&&qe/yt>cw}))continue;const Ne=H==null?void 0:H.catalog.find(Xe=>Xe.id===de.id);l.push({id:de.id,name:(Ne==null?void 0:Ne.nameFr)??(Ne==null?void 0:Ne.name)??de.id,builtWithCardUnderneath:de.built,boundingBox:ve,...de.tuckRegion?{tuckRegion:de.tuckRegion}:{},confidence:Math.round(de.confidence*1e4)/1e4});const Ze=de.tuckRegion??ve;V.push({x0:Ze.x,y0:Ze.y,x1:Ze.x+Ze.width,y1:Ze.y+Ze.height})}}}catch(H){console.warn("[wonders-reg] discovery failed:",H)}const ue=[];for(const H of v){const Y=H.box[0]+H.box[2]/2,q=H.box[1]+H.box[3]/2;if(V.some(de=>Y>=de.x0&&Y<=de.x1&&q>=de.y0&&q<=de.y1)){y+=1;continue}ue.push(H),a[H.family]=(a[H.family]??0)+1,g+=1}const ce=H0(ue),ie=new Set(ce.map(H=>H.box.join(",")));for(const H of K0(ue))ie.has(H.box.join(","))||ce.push(H);for(const H of ce)c.push(H);if(ue.some(H=>H.family==="guild")){const H=await hb();if(H!==null){r(`${k}: identifying guilds…`,.75);for(const Y of ue)if(Y.family==="guild")try{const[q,se,de,Ie]=Y.box,ke=Wa(E,q,se,de,Ie),Te=M_(ke),je={[H.inputNames[0]]:new Le("float32",Te,[1,3,_n,_n])},Ke=(await H.run(je))[H.outputNames[0]].data,{id:Ne,prob:Ze}=A_(Ke);Ne!==""&&!p.some(Xe=>Xe.id===Ne)&&p.push({id:Ne,boundingBox:{x:q,y:se,width:de,height:Ie},confidence:Math.round(Ze*1e4)/1e4})}catch(q){console.warn("[guild-cls] failed:",q)}}else if(Date.now()<X)try{const Y=ne??await Ua();if(Y!==null){const q=await tb();if(q.size>0){r(`${k}: identifying guilds…`,.75);const se=await nb();for(const de of a_(Y,E,q,X,se))p.some(Ie=>Ie.id===de.id)||p.push(de)}}}catch(Y){console.warn("[guilds-reg] failed:",Y)}}r(`${k}: laurels…`,.8);const Re=await ub(),ze=[];for(const H of[0,1,2,3]){const Y=H===0?E:Ut(E,H),q=await Ft("laurel",Y);for(const[se,de,Ie,ke]of Lh(q.rows,q.params,$t.laurel.conf)){const Te=vf({x:se,y:de,width:Ie-se,height:ke-de},H,E.width,E.height),je=Te.x+Te.width/2,ve=Te.y+Te.height/2,Ke=.6*Math.max(Te.width,Te.height);ze.some(([Ze,Xe,Fe,Pe])=>{const Je=(Ze+Fe)/2,qe=(Xe+Pe)/2;return(je-Je)**2+(ve-qe)**2<Ke*Ke})||ze.push([Te.x,Te.y,Te.x+Te.width,Te.y+Te.height])}}const Oe=await fb();for(const[H,Y,q,se]of ze){const de=Math.trunc((H+q)/2),Ie=Math.trunc((Y+se)/2);if([...j,...F].some(Pe=>(de-Pe.cx)**2+(Ie-Pe.cy)**2<=Pe.r*Pe.r))continue;const Te=Math.max(6,Math.trunc(Math.max(q-H,se-Y)*fy)),je=lb(E,de,Ie,Te);let ve=null,Ke=0;const Ne=new Map;for(const Pe of[0,1,2,3]){const Je=Pe===0?je:Ut(je,Pe),[qe,yt]=Ey(Je,Re);qe!==null&&(Ne.set(qe,Math.max(Ne.get(qe)??0,yt)),yt>Ke&&(ve=qe,Ke=yt))}ve!==null&&Ke<J_&&(ve=null);const Ze=Ke;if(Oe!==null){const Pe=Wa(E,Math.trunc(H),Math.trunc(Y),Math.trunc(q-H),Math.trunc(se-Y));let Je=null,qe=0;for(const yt of[0,1,2,3]){const Gt=yt===0?Pe:Ut(Pe,yt),Ja=G_(Gt),xr=await Oe.run({[Oe.inputNames[0]]:new Le("float32",Ja,[1,3,$n,$n])}),{value:vr,prob:xn}=W_(xr[Oe.outputNames[0]].data);xn>qe&&(Je=vr,qe=xn)}Je!==null&&qe>=F_&&(ve=Je,Ke=qe)}const Xe=ve!==null&&[...Ne.entries()].some(([Pe,Je])=>Pe!==ve&&Je>=Ze-.1),Fe=V.some(Pe=>de>=Pe.x0&&de<=Pe.x1&&Ie>=Pe.y0&&Ie<=Pe.y1);s.push({value:ve,valueRead:ve!==null,center:[Math.round((H+q)/2),Math.round((Y+se)/2)],boundingBox:{x:Math.trunc(H),y:Math.trunc(Y),width:Math.trunc(q-H),height:Math.trunc(se-Y)},confidence:Math.round(Ke*1e4)/1e4,excluded:Fe,photoIndex:b-1,...Xe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}y>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${y} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):g>0&&l.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=a.guild??0;x!==p.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${p.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+p.map(S=>S.id).join(", ")+" — confirm in the review."});const $=l.filter(S=>S.boundingBox.width===0);$.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${$.map(S=>S.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${l.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),m>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${m} token disc(s) found but not identified — pick them in the review below.`}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(S=>S.id).join(", ")+" — confirm in the review."}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${f} from ${o.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const T=s.filter(S=>S.valueRead);return{...Mb(),wonders:l,guilds:_b(p,l),progressTokens:u,laurels:s,cardVictoryPoints:{value:T.reduce((S,k)=>S+(k.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-T.length,complete:s.length===T.length},cardCounts:{byFamily:a,source:g>0?"yolo":"none",tuckedExcluded:y,...c.length>0?{suspects:c}:{}},coins:{total:f,confidence:o.length>0?.5:0,source:o.length>0?"local-colour":"none",coins:o}}}const gt=1280,Rb=.3,Za=9;let Qa=null;function zb(){return Qa===null&&(Qa=(async()=>{try{return(await fetch(`${Ue}pawn_ends.onnx`,{method:"HEAD"})).ok?await at.create(`${Ue}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qa}function Ob(e){const t=gt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const o=new OffscreenCanvas(gt,gt).getContext("2d",{willReadFrequently:!0});o.fillStyle="rgb(114,114,114)",o.fillRect(0,0,gt,gt),o.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=o.getImageData(0,0,gt,gt),l=gt*gt,p=new Float32Array(3*l);for(let c=0;c<l;c+=1)p[c]=u[c*4]/255,p[l+c]=u[c*4+1]/255,p[2*l+c]=u[c*4+2]/255;return{tensor:p,r:t}}async function Nb(e,t){const{tensor:n,r}=Ob(t),a=(await e.run({[e.inputNames[0]]:new Le("float32",n,[1,3,gt,gt])}))[e.outputNames[0]].data,s=new Map;for(let o=0;o+5<a.length;o+=6){const u=a[o+4];if(u<Rb)continue;const l=Math.round(a[o+5]),p=s.get(l);if(p===void 0||u>p.conf){const c=(a[o]+a[o+2])/2/r,f=(a[o+1]+a[o+3])/2/r;s.set(l,{conf:u,cx:c,cy:f})}}return s}async function Bb(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Ut(t,g),b=await Nb(e,y);if(b.has(0)&&b.has(1)&&b.has(2)){const x=b.get(0).conf+b.get(1).conf+b.get(2).conf;(n===null||x>n.score)&&(n={score:x,det:b})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),s=a.cx-i.cx,o=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,p=s*s+o*o;if(p<=0)return null;const c=((r.cx-u)*s+(r.cy-l)*o)/p*(2*Za),f=Math.min(Za,Math.max(-Za,Math.round(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:f,confidence:Math.round(m*1e4)/1e4}}async function Db(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length;let a=0;const s=(l,p=0)=>{t(l,i>0?Math.min(.99,(a+p)/i):void 0)},o=()=>{a+=1};for(const l of["left","right"]){const p=e[l];p.length>0&&(r[l]=await Ab(p,l,n,s,o))}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await Ya(e.board),p=await zb();if(p!==null){const c=await Bb(p,l);c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Cb(e.data.file):await Db(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
